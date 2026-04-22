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

## Future Work

- Command Center label dimming: `commandCenter.foreground` is now tuned in the bundled themes, but the final rendered workspace/session label in VS Code still dims after the window finishes reloading.
- Current diagnosis: the bright theme color appears briefly during `Developer: Reload Window`, then later component CSS dims the label, likely via the compact agent status label styling.
- Theme JSON alone is probably not enough to fully fix this. The practical next step is to test a custom CSS loader override for `.command-center .agent-status-pill.compact-mode .agent-status-label` with `opacity: 1` and explicit foreground color inheritance.
