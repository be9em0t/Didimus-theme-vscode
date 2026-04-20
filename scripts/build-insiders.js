const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, '..', 'themes', 'Didimus-color-theme.json');
const targetPath = path.join(__dirname, '..', 'themes', 'Didimus-insiders-color-theme.json');

const overrides = {
  name: 'Didimus Insiders',
  colors: {
    'statusBar.background': '#0C9177',
    'statusBar.foreground': '#FEFECD',
    'icon.foreground': '#24BFA5',
    'list.activeSelectionIconForeground': '#FCFC85',
  },
};

const base = JSON.parse(fs.readFileSync(basePath, 'utf8'));
const result = {
  ...base,
  ...overrides,
  colors: {
    ...base.colors,
    ...overrides.colors,
  },
};

fs.writeFileSync(targetPath, JSON.stringify(result, null, 2) + '\n', 'utf8');
console.log(`Generated ${path.relative(process.cwd(), targetPath)} from ${path.relative(process.cwd(), basePath)}`);
