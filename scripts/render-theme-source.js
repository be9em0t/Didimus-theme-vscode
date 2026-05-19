const fs = require('fs');
const path = require('path');

function isPlainObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

function deepMerge(base, overlay) {
  if (Array.isArray(base) || Array.isArray(overlay)) {
    return overlay !== undefined ? overlay : base;
  }
  if (!isPlainObject(base) || !isPlainObject(overlay)) {
    return overlay !== undefined ? overlay : base;
  }
  const out = { ...base };
  for (const [key, value] of Object.entries(overlay)) {
    if (value === undefined) continue;
    out[key] = key in base ? deepMerge(base[key], value) : value;
  }
  return out;
}

function resolveRefs(value, palette, stack = []) {
  if (isPlainObject(value) && Object.keys(value).length === 1 && typeof value.$ref === 'string') {
    const name = value.$ref;
    if (!(name in palette)) {
      throw new Error(`Unknown palette ref: ${name}`);
    }
    if (stack.includes(name)) {
      throw new Error(`Circular palette ref: ${[...stack, name].join(' -> ')}`);
    }
    return resolveRefs(palette[name], palette, [...stack, name]);
  }
  if (Array.isArray(value)) {
    return value.map((item) => resolveRefs(item, palette, stack));
  }
  if (!isPlainObject(value)) {
    return value;
  }
  const out = {};
  for (const [key, child] of Object.entries(value)) {
    out[key] = resolveRefs(child, palette, stack);
  }
  return out;
}

function mergeThemeSpec(themeId, themes, basePalette, seen = []) {
  const spec = themes[themeId];
  if (!spec) {
    throw new Error(`Theme '${themeId}' not found`);
  }
  if (seen.includes(themeId)) {
    throw new Error(`Circular theme inheritance: ${[...seen, themeId].join(' -> ')}`);
  }

  let parent = { spec: {}, palette: basePalette };
  if (spec.extends) {
    parent = mergeThemeSpec(spec.extends, themes, basePalette, [...seen, themeId]);
  }

  const mergedPalette = resolveRefs(
    { ...parent.palette, ...(spec.paletteOverrides || {}) },
    { ...parent.palette, ...(spec.paletteOverrides || {}) }
  );

  const local = { ...spec };
  delete local.extends;
  delete local.output;
  delete local.paletteOverrides;

  const mergedSpec = deepMerge(parent.spec, local);
  mergedSpec.colorsRemove = [...(parent.spec.colorsRemove || []), ...(spec.colorsRemove || [])];
  mergedSpec.tokenColorPatches = [...(parent.spec.tokenColorPatches || []), ...(spec.tokenColorPatches || [])];

  return { spec: mergedSpec, palette: mergedPalette };
}

function applyColorRemovals(theme, removals) {
  if (!theme.colors || !Array.isArray(removals) || removals.length === 0) return;
  for (const key of removals) {
    delete theme.colors[key];
  }
}

function applyTokenColorPatches(theme, patches) {
  if (!Array.isArray(theme.tokenColors) || !Array.isArray(patches) || patches.length === 0) return;
  const out = theme.tokenColors.map((entry) => deepMerge({}, entry));

  for (const patch of patches) {
    const match = patch.match || {};
    const index = out.findIndex((entry) =>
      Object.entries(match).every(([key, value]) => entry[key] === value)
    );
    if (index === -1) {
      throw new Error(`Could not find tokenColor entry for patch: ${JSON.stringify(match)}`);
    }
    if (patch.remove) {
      out.splice(index, 1);
      continue;
    }
    const patchValue = patch.patch || patch;
    out[index] = deepMerge(out[index], patchValue);
  }

  theme.tokenColors = out;
}

function updatePackageManifest(sourceDir, themes) {
  const packagePath = path.resolve(sourceDir, '..', '..', 'package.json');
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  const themeEntries = Object.entries(themes).map(([id, spec]) => ({
    label: spec.name || id,
    uiTheme: spec.uiTheme || 'vs-dark',
    path: `./themes/${path.basename(spec.output || `${id}.json`)}`,
  }));

  if (!pkg.contributes) pkg.contributes = {};
  pkg.contributes.themes = themeEntries;
  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
  console.log(`Wrote ${path.relative(process.cwd(), packagePath)}`);
}

function renderSource(sourcePath) {
  const absSourcePath = path.resolve(sourcePath);
  const sourceDir = path.dirname(absSourcePath);
  const source = require(absSourcePath);
  const themes = source.themes || {};
  const basePalette = resolveRefs(source.palette || {}, source.palette || {});

  for (const [id, _spec] of Object.entries(themes)) {
    const { spec, palette } = mergeThemeSpec(id, themes, basePalette);
    const resolved = resolveRefs(spec, palette);

    applyColorRemovals(resolved, spec.colorsRemove);
    applyTokenColorPatches(resolved, spec.tokenColorPatches);

    delete resolved.extends;
    delete resolved.output;
    delete resolved.paletteOverrides;
    delete resolved.colorsRemove;
    delete resolved.tokenColorPatches;

    const outputRel = themes[id].output || `${id}.json`;
    const outputPath = path.resolve(sourceDir, outputRel);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(resolved, null, 2) + '\n', 'utf8');
    console.log(`Wrote ${path.relative(process.cwd(), outputPath)}`);
  }

  updatePackageManifest(sourceDir, themes);
}

if (require.main === module) {
  const sourcePath = process.argv[2];
  if (!sourcePath) {
    console.error('Usage: node scripts/render-theme-source.js <source.js>');
    process.exit(1);
  }
  renderSource(sourcePath);
}

module.exports = { renderSource, resolveRefs, deepMerge };
