// Source of truth for Didimus theme variants.
// Palette refs use { $ref: 'name' } and are resolved by scripts/render-theme-source.js.
// Variants can add `extends` and `paletteOverrides` later.

module.exports = {
  "palette": {
    "accentBlue": "#007acc",
    "accentCyan": "#00aaff",
    "accentGold": "#ffb300",
    "accentGreen": "#66a528",
    "accentMagenta": "#d34fd0",
    "accentOrange": "#ff7a09",
    "accentPink": "#f7c4e5",
    "accentSand": "#ffdd99",
    "accentSky": "#6ac5f9",
    "activityBarActiveFocusBorder": "#FAC800",
    "activityBarForeground": "#75beff",
    // "activityBarForeground": "#ffffff",
    "activityBarInactiveForeground": "#4f6887",
    // "activityBarInactiveForeground": "#ffffff66",
    "baseBackground": "#1c1e26",
    "black": "#000000",
    "borderMuted": "#474747",
    "borderSubtle": "#80808059",
    "buttonBackground": "#0e639c",
    "buttonHoverBackground": "#1177bb",
    "buttonSecondaryBackground": "#3a3d41",
    "buttonSecondaryHoverBackground": "#45494e",
    "commandCenterForeground": "#FFDC7A",
    "editorBackground": "#1C1E25",
    "editorCursorForeground": "#aeafad",
    "editorFindBorder": "#ffffff00",
    "editorGutterBackground": "#1c1e26",
    "editorInactiveSelectionBackground": "#3a3d41ee",
    "editorIndentGuideActiveBackground": "#707070",
    "editorIndentGuideBackground": "#404040",
    "editorLineNumberForeground": "#4f6887",
    "editorWidgetBackground": "#252526",
    "errorForeground": "#f48771",
    "errorForegroundStrong": "#f44747",
    "focusBlue": "#007fd4",
    "iconForeground": "#cccccc",
		"blueforeground1": "#459cfe",
		"blueforeground2": "#75beff",
    "inputBackground": "#3c3c3c",
    "listActiveSelectionIconForeground": "#FCFC85",
    "listDropBackground": "#383b3d",
    "menuBackground": "#202730",
    "mergeCommonContentBackground": "#28282811",
    "mergeCommonHeaderBackground": "#38383811",
    "mergeCurrentContentBackground": "#27403B11",
    "mergeCurrentHeaderBackground": "#36736611",
    "mergeIncomingContentBackground": "#28384B11",
    "mergeIncomingHeaderBackground": "#395F8F11",
    "minimapFindMatchHighlight": "#515c6aee",
    "minimapSelectionHighlight": "#264f7811",
    "quickInputBackground": "#282931",
    "quickInputFocusForeground": "#FDC530",
    "quickInputForeground": "#c7ac77",
    "selectionBackground": "#256aa7",
    "selectionBlue": "#094771",
    "sidebarBackground": "#242f3d",
    "statusBarForeground": "#c4d2d8",
    // "statusBarForeground": "#e7caff",
    "statusBarBackground": "#1c1e26",
    // "statusBarBackground": "#7929B0",
    "statusBarDebuggingBackground": "#cc6633",
    "statusBarItemHoverBackground": "#B957BF",
    "statusBarItemRemoteForeground": "#B957BF",
    "statusBarItemRemoteBackground": "#1c1e26",
    "statusBarNoFolderForeground": "#ff8e2b",
    // "statusBarNoFolderForeground": "#e7caff",
    "statusBarNoFolderBackground": "#1c1e26",
    // "statusBarNoFolderBackground": "#68217a",
    "tabInactiveForeground": "#93afc2",
    "terminalBackground": "#19212c",
    "textFaint": "#a6a6a6",
    "textMuted": "#bbbbbb",
    "textPrimary": "#d4d4d4",
    "textSecondary": "#cccccc",
    "transparent": "#00000000",
    "transparentDark": "#00000085",
    "warningForeground": "#cca700",
    "white": "#ffffff",
    "white10": "#ffffff10",
    "white66": "#ffffff66",
  },
  "themes": {
    "didimus": {
      "output": "../Didimus-color-theme.json",
      "name": "Didimus",
      "type": "dark",
      "semanticHighlighting": true,
      "semanticTokenColors": {
        "enumMember": {
          "foreground": {
            "$ref": "accentPink"
          }
        },
        "variable.constant": {
          "foreground": {
            "$ref": "accentSky"
          }
        },
        "variable.defaultLibrary": {
          "foreground": {
            "$ref": "accentOrange"
          }
        }
      },
      "tokenColors": [
        {
          "name": "unison punctuation",
          "scope": "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "haskell variable generic-type",
          "scope": "variable.other.generic-type.haskell",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "haskell storage type",
          "scope": "storage.type.haskell",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "support.variable.magic.python",
          "scope": "support.variable.magic.python",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "punctuation.separator.parameters.python",
          "scope": "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "variable.parameter.function.language.special.self.python",
          "scope": "variable.parameter.function.language.special.self.python",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "storage.modifier.lifetime.rust",
          "scope": "storage.modifier.lifetime.rust",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "support.function.std.rust",
          "scope": "support.function.std.rust",
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "entity.name.lifetime.rust",
          "scope": "entity.name.lifetime.rust",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "variable.language.rust",
          "scope": "variable.language.rust",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "support.constant.edge",
          "scope": "support.constant.edge",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "regexp constant character-class",
          "scope": "constant.other.character-class.regexp",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "regexp operator.quantifier",
          "scope": "keyword.operator.quantifier.regexp",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "punctuation.definition",
          "scope": "punctuation.definition.string.begin,punctuation.definition.string.end",
          "settings": {
            "foreground": {
              "$ref": "accentSand"
            }
          }
        },
        {
          "name": "Text",
          "scope": "variable.parameter.function",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "Comment Markup Link",
          "scope": "comment markup.link",
          "settings": {
            "foreground": {
              "$ref": "accentGreen"
            }
          }
        },
        {
          "name": "markup diff",
          "scope": "markup.changed.diff",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "diff",
          "scope": "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "inserted.diff",
          "scope": "markup.inserted.diff",
          "settings": {
            "foreground": {
              "$ref": "accentSand"
            }
          }
        },
        {
          "name": "deleted.diff",
          "scope": "markup.deleted.diff",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "c++ function",
          "scope": "meta.function.c,meta.function.cpp",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "c++ block",
          "scope": "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "js/ts punctuation separator key-value",
          "scope": "punctuation.separator.key-value",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "js/ts import keyword",
          "scope": "keyword.operator.expression.import",
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "math js/ts",
          "scope": "support.constant.math",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "math property js/ts",
          "scope": "support.constant.property.math",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "js/ts variable.other.constant",
          "scope": "variable.other.constant",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "java type",
          "scope": [
            "storage.type.annotation.java",
            "storage.type.object.array.java"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "java source",
          "scope": "source.java",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "java modifier.import",
          "scope": "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "java modifier.import",
          "scope": "meta.method.java",
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "java modifier.import",
          "scope": "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "java instanceof",
          "scope": "keyword.operator.instanceof.java",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "java variable.name",
          "scope": "meta.definition.variable.name.java",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "operator logical",
          "scope": "keyword.operator.logical",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "operator bitwise",
          "scope": "keyword.operator.bitwise",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "operator channel",
          "scope": "keyword.operator.channel",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "support.constant.property-value.scss",
          "scope": "support.constant.property-value.scss,support.constant.property-value.css",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "CSS/SCSS/LESS Operators",
          "scope": "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "css color standard name",
          "scope": "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "css comma",
          "scope": "punctuation.separator.list.comma.css",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "css attribute-name.id",
          "scope": "support.constant.color.w3c-standard-color-name.css",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "css property-name",
          "scope": "support.type.vendored.property-name.css",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "js/ts module",
          "scope": "support.module.node,support.type.object.module,support.module.node",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "entity.name.type.module",
          "scope": "entity.name.type.module",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "js variable readwrite",
          "scope": "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "js/ts json",
          "scope": "support.constant.json",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "js/ts Keyword",
          "scope": [
            "keyword.operator.expression.instanceof",
            "keyword.operator.new",
            "keyword.operator.ternary",
            "keyword.operator.optional",
            "keyword.operator.expression.keyof"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "js/ts console",
          "scope": "support.type.object.console",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "js/ts support.variable.property.process",
          "scope": "support.variable.property.process",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "js console function",
          "scope": "entity.name.function,support.function.console",
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "keyword.operator.misc.rust",
          "scope": "keyword.operator.misc.rust",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "keyword.operator.sigil.rust",
          "scope": "keyword.operator.sigil.rust",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "operator",
          "scope": "keyword.operator.delete",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "js dom",
          "scope": "support.type.object.dom",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "js dom variable",
          "scope": "support.variable.dom,support.variable.property.dom",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "keyword.operator",
          "scope": "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "C operator assignment",
          "scope": "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "Punctuation",
          "scope": "punctuation.separator.delimiter",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "Other punctuation .c",
          "scope": "punctuation.separator.c,punctuation.separator.cpp",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "C type posix-reserved",
          "scope": "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "keyword.operator.sizeof.c",
          "scope": "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "python parameter",
          "scope": "variable.parameter.function.language.python",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "python type",
          "scope": "support.type.python",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "python logical",
          "scope": "keyword.operator.logical.python",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "pyCs",
          "scope": "variable.parameter.function.python",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "python block",
          "scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "python function-call.generic",
          "scope": "meta.function-call.generic.python",
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "python placeholder reset to normal string",
          "scope": "constant.character.format.placeholder.other.python",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "Operators",
          "scope": "keyword.operator",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "Compound Assignment Operators",
          "scope": "keyword.operator.assignment.compound",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "Compound Assignment Operators js/ts",
          "scope": "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "Keywords",
          "scope": "keyword",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "Namespaces",
          "scope": "entity.name.namespace",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Variables",
          "scope": "variable",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "Variables",
          "scope": "variable.c",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "Language variables",
          "scope": "variable.language",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Java Variables",
          "scope": "token.variable.parameter.java",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "Java Imports",
          "scope": "import.storage.java",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Packages",
          "scope": "token.package.keyword",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "Packages",
          "scope": "token.package",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "Functions",
          "scope": [
            "entity.name.function",
            "meta.require",
            "support.function.any-method",
            "variable.function"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "Classes",
          "scope": "entity.name.type.namespace",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Classes",
          "scope": "support.class, entity.name.type.class",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Class name",
          "scope": "entity.name.class.identifier.namespace.type",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Class name",
          "scope": [
            "entity.name.class",
            "variable.other.class.js",
            "variable.other.class.ts"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Class name php",
          "scope": "variable.other.class.php",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "Type Name",
          "scope": "entity.name.type",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Keyword Control",
          "scope": "keyword.control",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "Control Elements",
          "scope": "control.elements, keyword.operator.less",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "Methods",
          "scope": "keyword.other.special-method",
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "Storage",
          "scope": "storage",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "Storage JS TS",
          "scope": "token.storage",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
          "scope": "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "Java Storage",
          "scope": "token.storage.type.java",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Support",
          "scope": "support.function",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "Support type",
          "scope": "support.type.property-name",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "Support type",
          "scope": "support.constant.property-value",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "Support type",
          "scope": "support.constant.font-name",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "Meta tag",
          "scope": "meta.tag",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "Strings",
          "scope": "string",
          "settings": {
            "foreground": {
              "$ref": "accentSand"
            }
          }
        },
        {
          "name": "Inherited Class",
          "scope": "entity.other.inherited-class",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Constant other symbol",
          "scope": "constant.other.symbol",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "Integers",
          "scope": "constant.numeric",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "Constants",
          "scope": "constant",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "Constants",
          "scope": "punctuation.definition.constant",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "Tags",
          "scope": "entity.name.tag",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "Attributes",
          "scope": "entity.other.attribute-name",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "Attribute IDs",
          "scope": "entity.other.attribute-name.id",
          "settings": {
            "fontStyle": "",
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "Attribute class",
          "scope": "entity.other.attribute-name.class.css",
          "settings": {
            "fontStyle": "",
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "Selector",
          "scope": "meta.selector",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "Headings",
          "scope": "markup.heading",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "Headings",
          "scope": "markup.heading punctuation.definition.heading, entity.name.section",
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "Units",
          "scope": "keyword.other.unit",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "Bold",
          "scope": "markup.bold,todo.bold",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "Bold",
          "scope": "punctuation.definition.bold",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "markup Italic",
          "scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "emphasis md",
          "scope": "emphasis md",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] Markdown headings",
          "scope": "entity.name.section.markdown",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
          "scope": "punctuation.definition.heading.markdown",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "punctuation.definition.list.begin.markdown",
          "scope": "punctuation.definition.list.begin.markdown",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] Markdown heading setext",
          "scope": "markup.heading.setext",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
          "scope": "punctuation.definition.bold.markdown",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
          "scope": "markup.inline.raw.markdown",
          "settings": {
            "foreground": {
              "$ref": "accentSand"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
          "scope": "markup.inline.raw.string.markdown",
          "settings": {
            "foreground": {
              "$ref": "accentSand"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
          "scope": "punctuation.definition.list.markdown",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
          "scope": [
            "punctuation.definition.string.begin.markdown",
            "punctuation.definition.string.end.markdown",
            "punctuation.definition.metadata.markdown"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "beginning.punctuation.definition.list.markdown",
          "scope": [
            "beginning.punctuation.definition.list.markdown"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
          "scope": "punctuation.definition.metadata.markdown",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] Markdown Underline Link/Image",
          "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] Markdown Link Title/Description",
          "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "Regular Expressions",
          "scope": "string.regexp",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "Escape Characters",
          "scope": "constant.character.escape",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "Embedded",
          "scope": "punctuation.section.embedded, variable.interpolation",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "Embedded",
          "scope": "punctuation.section.embedded.begin,punctuation.section.embedded.end",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "illegal",
          "scope": "invalid.illegal",
          "settings": {
            "foreground": {
              "$ref": "white"
            }
          }
        },
        {
          "name": "illegal",
          "scope": "invalid.illegal.bad-ampersand.html",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "Broken",
          "scope": "invalid.broken",
          "settings": {
            "foreground": {
              "$ref": "white"
            }
          }
        },
        {
          "name": "Deprecated",
          "scope": "invalid.deprecated",
          "settings": {
            "foreground": {
              "$ref": "white"
            }
          }
        },
        {
          "name": "Unimplemented",
          "scope": "invalid.unimplemented",
          "settings": {
            "foreground": {
              "$ref": "white"
            }
          }
        },
        {
          "name": "Source Json Meta Structure Dictionary Json > String Quoted Json",
          "scope": "source.json meta.structure.dictionary.json > string.quoted.json",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
          "scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
          "scope": "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
          "settings": {
            "foreground": {
              "$ref": "accentSand"
            }
          }
        },
        {
          "name": "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
          "scope": "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] JSON Property Name",
          "scope": "support.type.property-name.json",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
          "scope": "support.type.property-name.json punctuation",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "laravel blade tag",
          "scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "laravel blade @",
          "scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "use statement for other classes",
          "scope": "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "error suppression",
          "scope": "keyword.operator.error-control.php",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "php instanceof",
          "scope": "keyword.operator.type.php",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "style double quoted array index normal begin",
          "scope": "punctuation.section.array.begin.php",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "style double quoted array index normal end",
          "scope": "punctuation.section.array.end.php",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "php illegal.non-null-typehinted",
          "scope": "invalid.illegal.non-null-typehinted.php",
          "settings": {
            "foreground": {
              "$ref": "errorForegroundStrong"
            }
          }
        },
        {
          "name": "php types",
          "scope": "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "php call-function",
          "scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "php function-resets",
          "scope": "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "support rust constants",
          "scope": "support.constant.core.rust",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "support php constants",
          "scope": "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "php goto",
          "scope": "entity.name.goto-label.php,support.other.php",
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "php logical/bitwise operator",
          "scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "php regexp operator",
          "scope": "keyword.operator.regexp.php",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "php comparison",
          "scope": "keyword.operator.comparison.php",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "php heredoc/nowdoc",
          "scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "python function decorator @",
          "scope": "meta.function.decorator.python",
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "python function support",
          "scope": "support.token.decorator.python,meta.function.decorator.identifier.python",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "parameter function js/ts",
          "scope": "function.parameter",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "brace function",
          "scope": "function.brace",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "parameter function ruby cs",
          "scope": "function.parameter.ruby, function.parameter.cs",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "constant.language.symbol.ruby",
          "scope": "constant.language.symbol.ruby",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "rgb-value",
          "scope": "rgb-value",
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "rgb value",
          "scope": "inline-color-decoration rgb-value",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "rgb value less",
          "scope": "less rgb-value",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "sass selector",
          "scope": "selector.sass",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "ts primitive/builtin types",
          "scope": "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "block scope",
          "scope": "block.scope.end,block.scope.begin",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "cs storage type",
          "scope": "storage.type.cs",
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "cs local variable",
          "scope": "entity.name.variable.local.cs",
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "scope": "token.info-token",
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "scope": "token.warn-token",
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "scope": "token.error-token",
          "settings": {
            "foreground": {
              "$ref": "errorForegroundStrong"
            }
          }
        },
        {
          "scope": "token.debug-token",
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "String interpolation",
          "scope": [
            "punctuation.definition.template-expression.begin",
            "punctuation.definition.template-expression.end",
            "punctuation.section.embedded"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "Reset JavaScript string interpolation expression",
          "scope": [
            "meta.template.expression"
          ],
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "Import module JS",
          "scope": [
            "keyword.operator.module"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "js Flowtype",
          "scope": [
            "support.type.type.flowtype"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "js Flow",
          "scope": [
            "support.type.primitive"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "js class prop",
          "scope": [
            "meta.property.object"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "js func parameter",
          "scope": [
            "variable.parameter.function.js"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "js template literals begin",
          "scope": [
            "keyword.other.template.begin"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentSand"
            }
          }
        },
        {
          "name": "js template literals end",
          "scope": [
            "keyword.other.template.end"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentSand"
            }
          }
        },
        {
          "name": "js template literals variable braces begin",
          "scope": [
            "keyword.other.substitution.begin"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentSand"
            }
          }
        },
        {
          "name": "js template literals variable braces end",
          "scope": [
            "keyword.other.substitution.end"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentSand"
            }
          }
        },
        {
          "name": "js operator.assignment",
          "scope": [
            "keyword.operator.assignment"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "go operator",
          "scope": [
            "keyword.operator.assignment.go"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "go operator",
          "scope": [
            "keyword.operator.arithmetic.go",
            "keyword.operator.address.go"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "Go package name",
          "scope": [
            "entity.name.package.go"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "elm prelude",
          "scope": [
            "support.type.prelude.elm"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "elm constant",
          "scope": [
            "support.constant.elm"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "template literal",
          "scope": [
            "punctuation.quasi.element"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "html/pug (jade) escaped characters and entities",
          "scope": [
            "constant.character.entity"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
          "scope": [
            "entity.other.attribute-name.pseudo-element",
            "entity.other.attribute-name.pseudo-class"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "Clojure globals",
          "scope": [
            "entity.global.clojure"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Clojure symbols",
          "scope": [
            "meta.symbol.clojure"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "Clojure constants",
          "scope": [
            "constant.keyword.clojure"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "CoffeeScript Function Argument",
          "scope": [
            "meta.arguments.coffee",
            "variable.parameter.function.coffee"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "Ini Default Text",
          "scope": [
            "source.ini"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentSand"
            }
          }
        },
        {
          "name": "Makefile prerequisities",
          "scope": [
            "meta.scope.prerequisites.makefile"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "Makefile text colour",
          "scope": [
            "source.makefile"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Groovy import names",
          "scope": [
            "storage.modifier.import.groovy"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Groovy Methods",
          "scope": [
            "meta.method.groovy"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "Groovy Variables",
          "scope": [
            "meta.definition.variable.name.groovy"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "Groovy Inheritance",
          "scope": [
            "meta.definition.class.inherited.classes.groovy"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentSand"
            }
          }
        },
        {
          "name": "HLSL Semantic",
          "scope": [
            "support.variable.semantic.hlsl"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "HLSL Types",
          "scope": [
            "support.type.texture.hlsl",
            "support.type.sampler.hlsl",
            "support.type.object.hlsl",
            "support.type.object.rw.hlsl",
            "support.type.fx.hlsl",
            "support.type.object.hlsl"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "SQL Variables",
          "scope": [
            "text.variable",
            "text.bracketed"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "types",
          "scope": [
            "support.type.swift",
            "support.type.vb.asp"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "heading 1, keyword",
          "scope": [
            "entity.name.function.xi"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "heading 2, callable",
          "scope": [
            "entity.name.class.xi"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "heading 3, property",
          "scope": [
            "constant.character.character-class.regexp.xi"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "heading 4, type, class, interface",
          "scope": [
            "constant.regexp.xi"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentMagenta"
            }
          }
        },
        {
          "name": "heading 5, enums, preprocessor, constant, decorator",
          "scope": [
            "keyword.control.xi"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "heading 6, number",
          "scope": [
            "invalid.xi"
          ],
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "string",
          "scope": [
            "beginning.punctuation.definition.quote.markdown.xi"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentSand"
            }
          }
        },
        {
          "name": "comments",
          "scope": [
            "beginning.punctuation.definition.list.markdown.xi"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentGreen"
            }
          }
        },
        {
          "name": "link",
          "scope": [
            "constant.character.xi"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "accent",
          "scope": [
            "accent.xi"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentGold"
            }
          }
        },
        {
          "name": "wikiword",
          "scope": [
            "wikiword.xi"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentSky"
            }
          }
        },
        {
          "name": "language operators like '+', '-' etc",
          "scope": [
            "constant.other.color.rgb-value.xi"
          ],
          "settings": {
            "foreground": {
              "$ref": "white"
            }
          }
        },
        {
          "name": "elements to dim",
          "scope": [
            "punctuation.definition.tag.xi"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentGreen"
            }
          }
        },
        {
          "name": "C++/C#",
          "scope": [
            "entity.name.label.cs",
            "entity.name.scope-resolution.function.call",
            "entity.name.scope-resolution.function.definition"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentOrange"
            }
          }
        },
        {
          "name": "Markdown underscore-style headers",
          "scope": [
            "entity.name.label.cs",
            "markup.heading.setext.1.markdown",
            "markup.heading.setext.2.markdown"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentCyan"
            }
          }
        },
        {
          "name": "meta.brace.square",
          "scope": [
            " meta.brace.square"
          ],
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "name": "Comments",
          "scope": "comment, punctuation.definition.comment",
          "settings": {
            "fontStyle": "italic",
            "foreground": {
              "$ref": "accentGreen"
            }
          }
        },
        {
          "name": "[VSCODE-CUSTOM] Markdown Quote",
          "scope": "markup.quote.markdown",
          "settings": {
            "foreground": {
              "$ref": "accentGreen"
            }
          }
        },
        {
          "name": "punctuation.definition.block.sequence.item.yaml",
          "scope": "punctuation.definition.block.sequence.item.yaml",
          "settings": {
            "foreground": {
              "$ref": "textPrimary"
            }
          }
        },
        {
          "scope": [
            "constant.language.symbol.elixir"
          ],
          "settings": {
            "foreground": {
              "$ref": "accentPink"
            }
          }
        },
        {
          "name": "js/ts italic",
          "scope": "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "name": "comment",
          "scope": "comment.line.double-slash,comment.block.documentation",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "name": "Python Keyword Control",
          "scope": "keyword.control.import.python,keyword.control.flow.python",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "name": "markup.italic.markdown",
          "scope": "markup.italic.markdown",
          "settings": {
            "fontStyle": "italic"
          }
        }
      ],
      "colors": {
        "foreground": {
          "$ref": "textSecondary"
        },
        "focusBorder": {
          "$ref": "focusBlue"
        },
        "selection.background": {
          "$ref": "selectionBackground"
        },
        "scrollbar.shadow": {
          "$ref": "black"
        },
        "activityBar.foreground": {
          "$ref": "activityBarForeground"
        },
        "activityBar.background": {
          "$ref": "baseBackground"
        },
        "activityBar.inactiveForeground": {
          "$ref": "activityBarInactiveForeground"
        },
        "activityBarBadge.foreground": {
          "$ref": "white"
        },
        "activityBarBadge.background": {
          "$ref": "accentBlue"
        },
        "activityBar.border": {
          "$ref": "baseBackground"
        },
        "sideBar.background": {
          "$ref": "sidebarBackground"
        },
        "sideBar.border": "#285E8C",
        "sideBar.foreground": {
          "$ref": "textSecondary"
        },
        "sideBarSectionHeader.background": {
          "$ref": "transparent"
        },
        "sideBarSectionHeader.foreground": "#c74fc4",
        "sideBarSectionHeader.border": "#cccccc33",
        "sideBarTitle.foreground": {
          "$ref": "textMuted"
        },
        "list.inactiveSelectionBackground": "#FFFFFF10",
        "list.inactiveSelectionForeground": {
          "$ref": "textSecondary"
        },
        "list.hoverBackground": {
          "$ref": "white10"
        },
        "list.hoverForeground": {
          "$ref": "textSecondary"
        },
        "list.activeSelectionBackground": {
          "$ref": "selectionBlue"
        },
        "list.activeSelectionForeground": {
          "$ref": "white"
        },
        "tree.indentGuidesStroke": "#585858",
        "list.dropBackground": {
          "$ref": "listDropBackground"
        },
        "list.highlightForeground": "#0097fb",
        "list.focusBackground": "#062f4a",
        "list.focusForeground": {
          "$ref": "textSecondary"
        },
        "listFilterWidget.background": "#653723",
        "listFilterWidget.outline": {
          "$ref": "transparent"
        },
        "listFilterWidget.noMatchesOutline": "#be1100",
        "statusBar.background": {
          "$ref": "statusBarBackground"
        },
        "statusBar.foreground": "#4672a3",
        "statusBarItem.hoverBackground": "#1c1e26",
        "statusBarItem.hoverForeground": "#ff8e2b",
        "statusBar.debuggingBackground": {
          "$ref": "statusBarDebuggingBackground"
        },
        "statusBar.debuggingForeground": {
          "$ref": "statusBarBackground"
        },
        "statusBar.noFolderBackground": {
          "$ref": "statusBarNoFolderBackground"
        },
        "statusBar.noFolderForeground": {
          "$ref": "statusBarNoFolderForeground"
        },
        "statusBarItem.remoteBackground": {
          "$ref": "statusBarItemRemoteBackground"
        },
        "statusBarItem.remoteForeground": {
          "$ref": "statusBarItemRemoteForeground"
        },
        "titleBar.activeBackground": {
          "$ref": "baseBackground"
        },
        "titleBar.activeForeground": "#B3B3B3",
        "titleBar.inactiveBackground": {
          "$ref": "menuBackground"
        },
        "titleBar.inactiveForeground": "#cccccc99",
        "titleBar.border": {
          "$ref": "transparent"
        },
        "commandCenter.foreground": {
          "$ref": "commandCenterForeground"
        },
        "menubar.selectionForeground": {
          "$ref": "textSecondary"
        },
        "menubar.selectionBackground": {
          "$ref": "selectionBlue"
        },
        "menu.foreground": {
          "$ref": "textSecondary"
        },
        "menu.background": {
          "$ref": "menuBackground"
        },
        "menu.selectionForeground": {
          "$ref": "white"
        },
        "menu.selectionBackground": {
          "$ref": "selectionBlue"
        },
        "menu.selectionBorder": {
          "$ref": "transparent"
        },
        "menu.separatorBackground": {
          "$ref": "textMuted"
        },
        "menu.border": {
          "$ref": "transparentDark"
        },
        "button.background": {
          "$ref": "buttonBackground"
        },
        "button.foreground": {
          "$ref": "white"
        },
        "button.hoverBackground": {
          "$ref": "buttonHoverBackground"
        },
        "button.secondaryForeground": {
          "$ref": "white"
        },
        "button.secondaryBackground": {
          "$ref": "buttonSecondaryBackground"
        },
        "button.secondaryHoverBackground": {
          "$ref": "buttonSecondaryHoverBackground"
        },
        "quickInput.foreground": {
          "$ref": "quickInputForeground"
        },
        "quickInput.background": {
          "$ref": "quickInputBackground"
        },
        "quickInputList.focusForeground": {
          "$ref": "quickInputFocusForeground"
        },
        "input.background": {
          "$ref": "inputBackground"
        },
        "input.border": {
          "$ref": "transparent"
        },
        "input.foreground": {
          "$ref": "textSecondary"
        },
        "inputOption.activeBackground": "#007fd466",
        "inputOption.activeBorder": "#007acc00",
        "inputOption.activeForeground": {
          "$ref": "white"
        },
        "input.placeholderForeground": {
          "$ref": "textFaint"
        },
        "textLink.foreground": "#3794ff",
        "editor.background": {
          "$ref": "editorBackground"
        },
        "editor.foreground": {
          "$ref": "textPrimary"
        },
        "editorLineNumber.foreground": {
          "$ref": "editorLineNumberForeground"
        },
        "editorCursor.foreground": {
          "$ref": "editorCursorForeground"
        },
        "editorCursor.background": {
          "$ref": "white"
        },
        "editor.selectionBackground": "#264f78",
        "editor.inactiveSelectionBackground": {
          "$ref": "editorInactiveSelectionBackground"
        },
        "editorWhitespace.foreground": "#e3e4e229",
        "editor.selectionHighlightBackground": "#add6ff26",
        "editor.selectionHighlightBorder": "#495F77",
        "editor.findMatchBackground": "#515c6a",
        "editor.findMatchBorder": "#74879f",
        "editor.findMatchHighlightBackground": "#ea5c0055",
        "editor.findMatchHighlightBorder": {
          "$ref": "editorFindBorder"
        },
        "editor.findRangeHighlightBackground": "#3a3d4166",
        "editor.findRangeHighlightBorder": {
          "$ref": "editorFindBorder"
        },
        "editor.rangeHighlightBackground": "#ffffff0b",
        "editor.rangeHighlightBorder": {
          "$ref": "editorFindBorder"
        },
        "editor.hoverHighlightBackground": "#264f7840",
        "editor.wordHighlightStrongBackground": "#004972b8",
        "editor.wordHighlightBackground": "#575757b8",
        "editor.lineHighlightBackground": "#ffffff0A",
        "editor.lineHighlightBorder": "#282828",
        "editorLineNumber.activeForeground": "#c6c6c6",
        "editorLink.activeForeground": "#4e94ce",
        "editorIndentGuide.background1": "#404040",
        "editorIndentGuide.activeBackground1": "#707070",
        "editorRuler.foreground": "#5a5a5a",
        "editorBracketMatch.background": "#0064001a",
        "editorBracketMatch.border": "#888888",
        "editor.foldBackground": "#264f784d",
        "editorOverviewRuler.background": "#25252500",
        "editorOverviewRuler.border": "#7f7f7f4d",
        "editorError.foreground": {
          "$ref": "errorForeground"
        },
        "editorError.background": "#B73A3400",
        "editorError.border": {
          "$ref": "editorFindBorder"
        },
        "editorWarning.foreground": {
          "$ref": "warningForeground"
        },
        "editorWarning.background": "#A9904000",
        "editorWarning.border": {
          "$ref": "editorFindBorder"
        },
        "editorInfo.foreground": {
          "$ref": "blueforeground2"
        },
        "editorInfo.background": "#4490BF00",
        "editorInfo.border": "#4490BF00",
        "editorGutter.background": {
          "$ref": "editorGutterBackground"
        },
        "editorGutter.modifiedBackground": "#0c7d9d",
        "editorGutter.addedBackground": "#587c0c",
        "editorGutter.deletedBackground": "#94151b",
        "editorGutter.foldingControlForeground": "#c5c5c5",
        "editorCodeLens.foreground": "#999999",
        "editorGroup.border": {
          "$ref": "focusBlue"
        },
        "diffEditor.insertedTextBackground": "#9bb95533",
        "diffEditor.removedTextBackground": "#ff000033",
        "diffEditor.border": "#444444",
        "panel.background": {
          "$ref": "baseBackground"
        },
        "panel.border": {
          "$ref": "borderSubtle"
        },
        "panelTitle.activeBorder": "#e7e7e7",
        "panelTitle.activeForeground": "#e7e7e7",
        "panelTitle.inactiveForeground": "#e7e7e799",
        "badge.background": "#4d4d4d",
        "badge.foreground": {
          "$ref": "white"
        },
        "terminal.foreground": {
          "$ref": "textSecondary"
        },
        "terminal.background": {
          "$ref": "terminalBackground"
        },
        "terminal.selectionBackground": "#ffffff40",
        "terminalCursor.background": "#0087FF",
        "terminalCursor.foreground": {
          "$ref": "white"
        },
        "terminal.border": {
          "$ref": "borderSubtle"
        },
        "terminal.ansiBlack": {
          "$ref": "black"
        },
        "terminal.ansiBlue": "#2472c8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#3b8eea",
        "terminal.ansiBrightCyan": "#29b8db",
        "terminal.ansiBrightGreen": "#23d18b",
        "terminal.ansiBrightMagenta": "#d670d6",
        "terminal.ansiBrightRed": "#f14c4c",
        "terminal.ansiBrightWhite": "#e5e5e5",
        "terminal.ansiBrightYellow": "#f5f543",
        "terminal.ansiCyan": "#11a8cd",
        "terminal.ansiGreen": "#0dbc79",
        "terminal.ansiMagenta": "#bc3fbc",
        "terminal.ansiRed": "#cd3131",
        "terminal.ansiWhite": "#e5e5e5",
        "terminal.ansiYellow": "#e5e510",
        "breadcrumb.background": {
          "$ref": "baseBackground"
        },
        "breadcrumb.foreground": "#cccccccc",
        "breadcrumb.focusForeground": "#e0e0e0",
        "editorGroupHeader.tabsBackground": {
          "$ref": "baseBackground"
        },
        "editorGroupHeader.tabsBorder": "#006090",
        "tab.activeForeground": "#f4f9ff",
        "tab.border": {
          "$ref": "baseBackground"
        },
        "tab.activeBackground": "#006090",
        "tab.activeBorder": {
          "$ref": "editorFindBorder"
        },
        "tab.activeBorderTop": {
          "$ref": "transparent"
        },
        "tab.inactiveBackground": {
          "$ref": "sidebarBackground"
        },
        "tab.inactiveForeground": {
          "$ref": "tabInactiveForeground"
        },
        "tab.hoverBackground": "#ffffff20",
        "tab.hoverBorder": {
          "$ref": "white"
        },
        "scrollbarSlider.background": "#79797966",
        "scrollbarSlider.hoverBackground": "#646464b3",
        "scrollbarSlider.activeBackground": "#bfbfbf66",
        "progressBar.background": "#0e70c0",
        "widget.shadow": "#0000005c",
        "editorWidget.foreground": {
          "$ref": "textSecondary"
        },
        "editorWidget.background": {
          "$ref": "editorWidgetBackground"
        },
        "editorWidget.resizeBorder": "#5F5F5F",
        "pickerGroup.border": "#3f3f46",
        "pickerGroup.foreground": "#3794ff",
        "debugToolBar.background": "#333333",
        "debugToolBar.border": {
          "$ref": "borderMuted"
        },
        "notifications.foreground": {
          "$ref": "textSecondary"
        },
        "notifications.background": {
          "$ref": "editorWidgetBackground"
        },
        "notificationToast.border": {
          "$ref": "borderMuted"
        },
        "notificationsErrorIcon.foreground": {
          "$ref": "errorForeground"
        },
        "notificationsWarningIcon.foreground": {
          "$ref": "warningForeground"
        },
        "notificationsInfoIcon.foreground": {
          "$ref": "blueforeground2"
        },
        "notificationCenter.border": {
          "$ref": "borderMuted"
        },
        "notificationCenterHeader.foreground": {
          "$ref": "textSecondary"
        },
        "notificationCenterHeader.background": "#303031",
        "notifications.border": "#303031",
        "gitDecoration.addedResourceForeground": "#81b88b",
        "gitDecoration.conflictingResourceForeground": "#6c6cc4",
        "gitDecoration.deletedResourceForeground": "#c74e39",
        "gitDecoration.ignoredResourceForeground": "#8c8c8c",
        "gitDecoration.modifiedResourceForeground": "#e2c08d",
        "gitDecoration.stageDeletedResourceForeground": "#c74e39",
        "gitDecoration.stageModifiedResourceForeground": "#e2c08d",
        "gitDecoration.submoduleResourceForeground": "#8db9e2",
        "gitDecoration.untrackedResourceForeground": "#73c991",
        "editorMarkerNavigation.background": "#2d2d30",
        "editorMarkerNavigationError.background": {
          "$ref": "errorForeground"
        },
        "editorMarkerNavigationWarning.background": {
          "$ref": "warningForeground"
        },
        "editorMarkerNavigationInfo.background": {
          "$ref": "blueforeground2"
        },
        "merge.currentHeaderBackground": {
          "$ref": "mergeCurrentHeaderBackground"
        },
        "merge.currentContentBackground": {
          "$ref": "mergeCurrentContentBackground"
        },
        "merge.incomingHeaderBackground": {
          "$ref": "mergeIncomingHeaderBackground"
        },
        "merge.incomingContentBackground": {
          "$ref": "mergeIncomingContentBackground"
        },
        "merge.commonHeaderBackground": {
          "$ref": "mergeCommonHeaderBackground"
        },
        "merge.commonContentBackground": {
          "$ref": "mergeCommonContentBackground"
        },
        "editorSuggestWidget.background": {
          "$ref": "editorWidgetBackground"
        },
        "editorSuggestWidget.border": "#454545",
        "editorSuggestWidget.foreground": {
          "$ref": "textPrimary"
        },
        "editorSuggestWidget.highlightForeground": "#0097fb",
        "editorSuggestWidget.selectedBackground": "#062f4a",
        "editorHoverWidget.foreground": {
          "$ref": "textSecondary"
        },
        "editorHoverWidget.background": {
          "$ref": "editorWidgetBackground"
        },
        "editorHoverWidget.border": "#454545",
        "peekView.border": {
          "$ref": "accentBlue"
        },
        "peekViewEditor.background": "#001f33",
        "peekViewEditorGutter.background": "#001f33",
        "peekViewEditor.matchHighlightBackground": "#ff8f0099",
        "peekViewEditor.matchHighlightBorder": "#ee931e",
        "peekViewResult.background": {
          "$ref": "editorWidgetBackground"
        },
        "peekViewResult.fileForeground": {
          "$ref": "white"
        },
        "peekViewResult.lineForeground": {
          "$ref": "textMuted"
        },
        "peekViewResult.matchHighlightBackground": "#ea5c004d",
        "peekViewResult.selectionBackground": "#3399ff33",
        "peekViewResult.selectionForeground": {
          "$ref": "white"
        },
        "peekViewTitle.background": "#1e1e1e",
        "peekViewTitleDescription.foreground": "#ccccccb3",
        "peekViewTitleLabel.foreground": {
          "$ref": "white"
        },
        "icon.foreground": {
          "$ref": "iconForeground"
        },
        "checkbox.background": {
          "$ref": "inputBackground"
        },
        "checkbox.foreground": {
          "$ref": "textSecondary"
        },
        "checkbox.border": {
          "$ref": "transparent"
        },
        "dropdown.background": {
          "$ref": "inputBackground"
        },
        "dropdown.foreground": {
          "$ref": "textSecondary"
        },
        "dropdown.border": {
          "$ref": "transparent"
        },
        "minimapGutter.addedBackground": "#587c0c",
        "minimapGutter.modifiedBackground": "#0c7d9d",
        "minimapGutter.deletedBackground": "#94151b",
        "minimap.findMatchHighlight": {
          "$ref": "minimapFindMatchHighlight"
        },
        "minimap.selectionHighlight": {
          "$ref": "minimapSelectionHighlight"
        },
        "minimap.errorHighlight": {
          "$ref": "errorForeground"
        },
        "minimap.warningHighlight": {
          "$ref": "warningForeground"
        },
        "minimap.background": {
          "$ref": "baseBackground"
        },
        "sideBar.dropBackground": {
          "$ref": "listDropBackground"
        },
        "editorGroup.emptyBackground": {
          "$ref": "baseBackground"
        },
        "panelSection.border": {
          "$ref": "borderSubtle"
        },
        "statusBarItem.activeBackground": "#FFFFFF25",
        "settings.headerForeground": {
          "$ref": "textSecondary"
        },
        "settings.focusedRowBackground": "#ffffff07",
        "walkThrough.embeddedEditorBackground": "#00000050",
        "breadcrumb.activeSelectionForeground": "#e0e0e0",
        "editorGutter.commentRangeForeground": "#c5c5c5",
        "debugExceptionWidget.background": "#333333",
        "debugExceptionWidget.border": {
          "$ref": "borderMuted"
        }
      }
    },
    "classic": {
      "extends": "didimus",
      "output": "../Didimus-classic-theme.json",
      "name": "Didimus Classic",
      "paletteOverrides": {
        "statusBarForeground": "#ffffff",
        "statusBarNoFolderForeground": "#ffffff",
        "statusBarBackground": "#1c1e26",
        "statusBarItemHoverBackground": "#ffffff1f",
        "statusBarItemRemoteBackground": "#16825d",
        "statusBarItemRemoteForeground": "#ffffff",
        "editorBackground": "#1c1e26",
        "editorInactiveSelectionBackground": "#3a3d41",
        "editorIndentGuideBackground": "#404040",
        "editorIndentGuideActiveBackground": "#707070",
        "mergeCommonContentBackground": "#282828",
        "mergeCommonHeaderBackground": "#383838",
        "mergeCurrentContentBackground": "#27403B",
        "mergeCurrentHeaderBackground": "#367366",
        "mergeIncomingContentBackground": "#28384B",
        "mergeIncomingHeaderBackground": "#395F8F",
        "minimapFindMatchHighlight": "#515c6a",
        "minimapSelectionHighlight": "#264f78",
        "tabInactiveForeground": "#999999"
      },
      "colorsRemove": [
        "sideBar.border",
        "commandCenter.foreground",
        "quickInput.foreground",
        "quickInput.background",
        "quickInputList.focusForeground",
        "editorIndentGuide.background1",
        "editorIndentGuide.activeBackground1",
        "terminal.background"
      ],
      "colors": {
        "statusBar.foreground": "#4672a3",
        "statusBar.background": {
          "$ref": "statusBarBackground"
        },
        "statusBarItem.hoverBackground": "#1c1e26",
        "statusBarItem.hoverForeground": "#ff8e2b",
        "statusBar.noFolderForeground": {
          "$ref": "statusBarNoFolderForeground"
        },
        "statusBarItem.remoteBackground": {
          "$ref": "statusBarItemRemoteBackground"
        },
        "statusBarItem.remoteForeground": {
          "$ref": "statusBarItemRemoteForeground"
        },
        "editor.background": {
          "$ref": "editorBackground"
        },
        "editor.inactiveSelectionBackground": {
          "$ref": "editorInactiveSelectionBackground"
        },
        "editorIndentGuide.background": {
          "$ref": "editorIndentGuideBackground"
        },
        "editorIndentGuide.activeBackground": {
          "$ref": "editorIndentGuideActiveBackground"
        },
        "tab.inactiveForeground": {
          "$ref": "tabInactiveForeground"
        },
        "merge.currentHeaderBackground": {
          "$ref": "mergeCurrentHeaderBackground"
        },
        "merge.currentContentBackground": {
          "$ref": "mergeCurrentContentBackground"
        },
        "merge.incomingHeaderBackground": {
          "$ref": "mergeIncomingHeaderBackground"
        },
        "merge.incomingContentBackground": {
          "$ref": "mergeIncomingContentBackground"
        },
        "merge.commonHeaderBackground": {
          "$ref": "mergeCommonHeaderBackground"
        },
        "merge.commonContentBackground": {
          "$ref": "mergeCommonContentBackground"
        },
        "minimap.findMatchHighlight": {
          "$ref": "minimapFindMatchHighlight"
        },
        "minimap.selectionHighlight": {
          "$ref": "minimapSelectionHighlight"
        }
      },
      "tokenColorPatches": [
        {
          "match": {
            "name": "Attribute IDs",
            "scope": "entity.other.attribute-name.id"
          },
          "patch": {
            "settings": {
              "fontStyle": "normal"
            }
          }
        }
      ]
    },
    "deepBlue": {
      "extends": "didimus",
      "output": "../Didimus-deep-blue-color-theme.json",
      "name": "Didimus Deep Blue",
      "paletteOverrides": {
        // "activityBarActiveFocusBorder": "#FAC800",
        // "activityBarForeground": "#bbbbbb",
        // "activityBarInactiveForeground": "#027FD4",
        "commandCenterForeground": "#6BC5F9",
        "editorBackground": "#19212c",
        "editorInactiveSelectionBackground": "#3a3d41",
        "editorGutterBackground": "#19212c",
        "editorIndentGuideBackground": "#404040",
        "editorIndentGuideActiveBackground": "#707070",
        "iconForeground": "#c9d5de",
        "listActiveSelectionIconForeground": "#FCFC85",
        "minimapFindMatchHighlight": "#515c6a",
        "statusBarBackground": "#1c1e26",
        // "statusBarForeground": "#c9d5de",
        "statusBarNoFolderBackground": "#1c1e26",
        // "statusBarNoFolderForeground": "#ff8e2b",
        "statusBarItemRemoteForeground": "#eeeeee"
      },
      "colorsRemove": [
        "activityBarBadge.foreground",
        "activityBarBadge.background",
        "editorIndentGuide.background1",
        "editorIndentGuide.activeBackground1"
      ],
      "colors": {
        // "activityBar.activeFocusBorder": {
        //   "$ref": "activityBarActiveFocusBorder"
        // },
        // "activityBar.foreground": {
        //   "$ref": "activityBarForeground"
        // },
        // "activityBar.inactiveForeground": {
        //   "$ref": "activityBarInactiveForeground"
        // },
        "commandCenter.foreground": {
          "$ref": "commandCenterForeground"
        },
        "editor.background": {
          "$ref": "editorBackground"
        },
        "editor.inactiveSelectionBackground": {
          "$ref": "editorInactiveSelectionBackground"
        },
        "editorGutter.background": {
          "$ref": "editorGutterBackground"
        },
        "editorIndentGuide.background": {
          "$ref": "editorIndentGuideBackground"
        },
        "editorIndentGuide.activeBackground": {
          "$ref": "editorIndentGuideActiveBackground"
        },
        "icon.foreground": {
          "$ref": "iconForeground"
        },
        "list.activeSelectionIconForeground": {
          "$ref": "listActiveSelectionIconForeground"
        },
        "minimap.findMatchHighlight": {
          "$ref": "minimapFindMatchHighlight"
        },
        "statusBar.background": "#19212C",
        "statusBar.foreground": "#4f86d8",
        "statusBarItem.hoverBackground": "#1c1e26",
        "statusBarItem.hoverForeground": "#ff8e2b",
        "statusBar.noFolderBackground": {
          "$ref": "statusBarNoFolderBackground"
        },
        // "statusBar.noFolderForeground": {
        //   "$ref": "statusBarNoFolderForeground"
        // },
        // "statusBarItem.remoteForeground": {
        //   "$ref": "statusBarItemRemoteForeground"
        // }
      },
      "tokenColorPatches": [
        {
          "match": {
            "name": "Attribute IDs",
            "scope": "entity.other.attribute-name.id"
          },
          "patch": {
            "settings": {
              "fontStyle": "normal"
            }
          }
        }
      ]
    },
    "sundown": {
      "extends": "didimus",
      "output": "../Didimus-sundown-color-theme.json",
      "name": "Didimus Sundown",
      "paletteOverrides": {
        "commandCenterForeground": "#c4d2d8",
        "quickInputBackground": "#282931",
        "quickInputFocusForeground": "#FDC530",
        "quickInputForeground": "#c4d2d8",
        // "iconForeground": "#D7BA7D",
        "statusBarForeground": "#ffffff",
        // "statusBarForeground": "#ffe3e8",
        "statusBarBackground": "#7929B0",
        "statusBarNoFolderForeground": "#ffa455",
        "statusBarNoFolderBackground": "#5b1b85",
      },
      "colorsRemove": [
        // "activityBarBadge.foreground",
        // "activityBarBadge.background",
        // "editorIndentGuide.background1",
        // "editorIndentGuide.activeBackground1",
        "statusBarItem.hoverForeground"
      ],
      "colors": {
        "statusBar.background": {
          "$ref": "statusBarBackground"
        },
        "statusBar.foreground": "#ffffff",
        "statusBar.noFolderBackground": {
          "$ref": "statusBarNoFolderBackground"
        },
        "statusBarItem.hoverBackground": "#B957BF",
        "statusBarItem.remoteForeground": {
          "$ref": "statusBarItemRemoteForeground"
        }
      },
      "tokenColorPatches": [
        {
          "match": {
            "name": "Attribute IDs",
            "scope": "entity.other.attribute-name.id"
          },
          "patch": {
            "settings": {
              "fontStyle": "normal"
            }
          }
        }
      ]
    }
  }
};
