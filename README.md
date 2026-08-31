# Didimus Theme

Fragrant darkness theme for Visual Studio Code.

Didimus is a dark theme with warm gold, orange, and neon accents. It is made for readable editor tokens and a workbench that stays lively without becoming a carnival of emergency lights.

## Included themes

- **Didimus** — the main warm dark theme.
- **Didimus Classic** — the original, familiar Didimus look.
- **Didimus Deep Blue** — a cooler dark-blue interpretation.
- **Didimus Sundown** — a warmer, sunset-toned variant.

Select any variant with **Preferences: Color Theme** in VS Code.

## Install

Install **Didimus** directly from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=be9em0t.didimus). VS Code Settings Sync can then keep the Marketplace version aligned across your machines.

For a local development build, package the extension and install the resulting VSIX:

```bash
npm run build:themes
npx @vscode/vsce package --out vsix/didimus-0.1.0.vsix
code --install-extension vsix/didimus-0.1.0.vsix
```

You can also install a VSIX from the Extensions view: **… → Install from VSIX…**.

## Development

Theme JSON files are generated from [`themes/source/Didimus.source.js`](themes/source/Didimus.source.js). Make source edits there, then regenerate the distributable themes:

```bash
npm run build:themes
```

The generated JSON files in `themes/` are committed because they are the files VS Code loads from the packaged extension. The renderer also regenerates `package.json`'s `contributes.themes` entries from the source definitions, so do not hand-edit that generated section.

## Release and Marketplace publishing

Release from this standalone repository only; `Didimus-theme-vscode` is not part of the `Kuzco.one` monorepo.

1. Make theme changes in `themes/source/Didimus.source.js`, then run `npm run build:themes` and review the generated theme JSON and `package.json` changes.
2. Update the version, Marketplace-facing metadata, and `CHANGELOG.md` intentionally. Re-run `npm run build:themes` if the source theme list changed.
3. Validate the final tree, including the VSIX package contents:

   ```bash
   git diff --check
   npm run build:themes
   npx @vscode/vsce package --out vsix/didimus-<version>.vsix
   ```

4. Install the VSIX locally when a visual check is needed:

   ```bash
   code --install-extension vsix/didimus-<version>.vsix
   ```

5. Publish the exact reviewed artifact to the existing Marketplace listing:

   ```bash
   npx @vscode/vsce publish --packagePath vsix/didimus-<version>.vsix
   ```

   Publishing requires a `vsce` login for publisher `be9em0t` with an Azure DevOps Marketplace **Manage** Personal Access Token. Browser sign-in alone is not sufficient for the CLI. Never publish an unreviewed working tree or substitute a different artifact after packaging.

The canonical development architecture and release-record note is maintained in the Obsidian Memory-Core `didimus-theme-vscode` scope. Keep this README aligned with it, but use that note for durable decisions and release history.

## Compatibility

Didimus supports VS Code `^1.70.0` and later. It contributes only colour themes and a default editor font-family preference; it has no runtime activation, executable extension code, telemetry, or network behavior.

## Feedback

Issues and suggestions are welcome at [GitHub Issues](https://github.com/be9em0t/Didimus-theme-vscode/issues).
