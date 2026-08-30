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

The generated JSON files in `themes/` are committed because they are the files VS Code loads from the packaged extension.

## Compatibility

Didimus supports VS Code `^1.70.0` and later. It contributes only colour themes and a default editor font-family preference; it has no runtime activation, executable extension code, telemetry, or network behavior.

## Feedback

Issues and suggestions are welcome at [GitHub Issues](https://github.com/be9em0t/Didimus-theme-vscode/issues).
