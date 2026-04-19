# Didimus

Didimus is a VS Code dark theme extension with a high-contrast neon palette for editor tokens and workbench UI.

## Build

Create a local `.vsix` package from the repository root with either of these cross-platform commands:

```bash
npx @vscode/vsce package
```

Or, if `vsce` is already installed globally:

```bash
vsce package
```

The generated `.vsix` file is written to the project root.

## Install Locally

After building, install the package in VS Code:

```bash
code --install-extension didimus-0.0.4.vsix
```

You can also use the Extensions view menu in VS Code and choose `Install from VSIX...`.
