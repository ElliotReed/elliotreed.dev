---
title: 'VS Code Settings'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 22 2025'
heroImage: '/blog-placeholder-2.jpg'
---

```json
{
  "bookmarks.useWorkaroundForFormatters": true,
  "breadcrumbs.enabled": true,
  "css.format.spaceAroundSelectorSeparator": true,
  "css-auto-prefix.prefixes": {
    "transform": [
      "webkit",
      "moz",
      "ms",
      "o"
    ],
    "transition": [
      "webkit",
      "moz",
      "ms",
      "o"
    ],
    "border-radius": [
      "webkit",
      "moz",
      "ms",
      "o"
    ],
    "animation": [
      "webkit"
    ],
    "box-reflect": [
      "webkit"
    ],
    "filter": [
      "webkit"
    ],
    "font-feature-settings": [
      "webkit",
      "moz"
    ],
    "backface-visibility": [
      "webkit"
    ],
    "box-decoration-break": [
      "webkit"
    ],
    "hyphens": [
      "webkit",
      "moz",
      "ms"
    ],
    "marquee-direction": [
      "webkit"
    ],
    "marquee-play-count": [
      "webkit"
    ],
    "marquee-speed": [
      "webkit"
    ],
    "marquee-style": [
      "webkit"
    ],
    "text-combine-upright": [
      "webkit",
      "moz",
      "ms"
    ],
    "text-decoration-color": [
      "moz"
    ],
    "text-decoration-line": [
      "moz"
    ],
    "text-decoration-style": [
      "moz"
    ],
    "text-orientation": [
      "webkit"
    ],
    "writing-mode": [
      "webkit",
      "ms"
    ]
  },
  "checkNpmUpdates.maximumNumberOfNotification": 3,
  "debug.disassemblyView.showSourceCode": false,
  "debug.javascript.autoAttachFilter": "disabled",
  "editor.bracketPairColorization.enabled": true,
  "editor.bracketPairColorization.independentColorPoolPerBracketType": true,
  "editor.guides.bracketPairs": "active",
  "editor.cursorBlinking": "solid",
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontSize": 18,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.guides.indentation": false,
  "editor.linkedEditing": true,
  "editor.matchBrackets": "never",
  "editor.rulers": [
    80,
    120
  ],
  "editor.tabCompletion": "on",
  "editor.tabSize": 2,
  "editor.wordWrap": "wordWrapColumn",
  "emmet.excludeLanguages": [],
  "emmet.includeLanguages": {
    "blade": "html",
    "django-html": "html",
    "javascript": "javascriptreact",
    "typescript": "typescriptreact",
    "markdown": "markdown",
    "css": "css",
    "less": "less",
    "scss": "scss"
  },
  "emmet.showExpandedAbbreviation": "always",
  // When enabled, Emmet abbreviations are expanded when pressing TAB.
  "emmet.triggerExpansionOnTab": true,
  "emojisense.languages": {
    "css": true,
    "git-commit": true,
    "html": true,
    "javascript": true,
    "markdown": true,
    "plaintext": {
      "markupCompletionsEnabled": true,
      "emojiDecoratorsEnabled": true
    },
    "scss": true,
  },
  "errorLens.excludeBySource": [
    "sonarlint(php:S4833)",
    "sonarlint(php:S125)",
    "sonarlint(php:S113)",
    "intelephense(1010)",
    "sonarlint(php:S1779)",
    "sonarlint(php:S1780)"
  ],
  "explorer.compactFolders": false,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "fastFolderStructure.structures": [
    {
      "name": "Component Folder",
      "customVariables": [],
      "structure": [
        {
          "fileName": "index.js",
          "template": "Component Folder-index.js"
        },
        {
          "fileName": "[FFSName | lowercase].module.scss",
          "template": "Component Folder-module.scss"
        },
        {
          "fileName": "[FFSName | capitalize].jsx",
          "template": "Component Folder-jsx"
        }
      ]
    }
  ],
  "fastFolderStructure.fileTemplates": {
    "Component Folder-index.js": [
      "export { default } from './[FFSName | capitalize]';"
    ],
    "Component Folder-module.scss": [
      "@import \"../../../styles/base\";\r",
      "\r",
      ".[FFSName | capitalize] {\r",
      "\r",
      "}\r",
      "\r"
    ],
    "Component Folder-jsx": [
      "import React from \"react\"\r",
      "\r",
      "import style from \"./[FFSName | lowercase].module.scss\"\r",
      "\r",
      "const [FFSName | capitalize] = () => {",
      "return (\r",
      ")\r",
      "}\r",
      "\r",
      "export default [FFSName | capitalize]\r",
      ""
    ]
  },
  "files.associations": {
    "**/views/**/*.html": "django-html",
    "*.tpl": "django-html",
    "*.mdx": "markdown",
  },
  "files.autoSave": "onFocusChange",
  "files.exclude": {
    "**/.git": false,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": false
  },
  "gitlens.advanced.messages": {
    "suppressCommitHasNoPreviousCommitWarning": false,
    "suppressCommitNotFoundWarning": false,
    "suppressFileNotUnderSourceControlWarning": false,
    "suppressGitVersionWarning": false,
    "suppressLineUncommittedWarning": false,
    "suppressNoRepositoryWarning": false
  },
  "gitlens.keymap": "chorded",
  "gitlens.views.fileHistory.enabled": true,
  "html.format.contentUnformatted": "",
  "html.format.unformatted": "code, pre",
  "intelephense.files.associations": [
    "*.php",
    "*.phtml"
  ],
  "javascript.format.enable": true,
  "javascript.preferences.quoteStyle": "double",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "kite.showWelcomeNotificationOnStartup": false,
  "liveSassCompile.settings.autoprefix": [
    "> 1%",
    "last 2 versions"
  ],
  "liveSassCompile.settings.excludeList": [
    "/**/node_modules/**",
    "/.vscode/**",
    "/.venv/**"
  ],
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/dist/css"
    },
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "/dist/css"
    },
  ],
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.donotVerifyTags": true,
  "liveServer.settings.useWebExt": false,
  "liveshare.accessibility.outputDevice": "Focusrite USB (Focusrite USB Audio)",
  "liveshare.accessibility.soundsEnabled": false,
  "liveshare.accessibility.voiceEnabled": true,
  "markdownlint.config": {
    "MD033": {
      "allowed_elements": [
        "br"
      ]
    }
  },
  "mssql.connections": [
    {
      "server": "{{put-server-name-here}}",
      "database": "{{put-database-name-here}}",
      "user": "{{put-username-here}}",
      "password": ""
    }
  ],
  "multiCommand.commands": [
    {
      "command": "multiCommand.makeRoom",
      "sequence": [
        "workbench.action.toggleSidebarVisibility",
        "workbench.action.toggleActivityBarVisibility"
      ]
    }
  ],
  // "npm.enableScriptExplorer": true,
  "placeholderImages.quoteStyle": "double",
  "prisma.showPrismaDataPlatformNotification": false,
  "projectManager.git.baseFolders": [
    "B:\\projects"
  ],
  "projectManager.groupList": true,
  "projectManager.showParentFolderInfoOnDuplicates": true,
  "projectManager.tags": [
    "Develop Manager",
    "Elliot Reed",
    "Life Manager",
    "Music Manager",
    "Eleanor Reed",
    "Learning Lab",
    "Gypsy Swing Revue",
    "library",
    "_client",
    "django",
    "react",
    "app",
    "game",
    "website",
    "server",
    "python",
    "html",
    "css",
    "typescript",
    "javascript",
    "music",
    "redwood",
    "gatsby",
    "next",
    "sass",
    "App Auth Starter"
  ],
  "projectManager.filterOnFullPath": true,
  "projectManager.confirmSwitchOnActiveWindow": "onlyUsingSideBar",
  "projectManager.sortList": "Path",
  "python.terminal.activateEnvironment": false,
  "python.testing.pytestEnabled": true,
  "quokka.startViewStatusBar": false,
  "refactai.apiKey": "rQ77UBDtq2bEbLTtzNUkAJwX",
  "security.workspace.trust.untrustedFiles": "open",
  "sonarlint.pathToNodeExecutable": "C:\\\\Program Files\\\\nodejs\\\\node.exe",
  "sonarlint.rules": {
    "python:S2208": {
      "level": "off"
    },
    "php:S125": {
      "level": "off"
    },
    "Web:AvoidCommentedOutCodeCheck": {
      "level": "off"
    },
    "python:S117": {
      "level": "off"
    },
    "secrets:S6334": {
      "level": "off"
    },
    "javascript:S6774": {
      "level": "off"
    },
    "Web:S1827": {
      "level": "off"
    },
    "Web:S5257": {
      "level": "off"
    }
  },
  // "sync.host": "",
  // "sync.pathPrefix": "",
  "sync.quietSync": false,
  "sync.askGistName": false,
  "sync.removeExtensions": true,
  "sync.syncExtensions": true,
  "sync.autoDownload": false,
  "sync.autoUpload": false,
  // "sync.lastUpload": "2018-07-16T16:05:00.060Z",
  // "sync.lastDownload": "",
  "sync.forceDownload": false,
  "sync.gist": "d7b0b120f7dcf155436bd8a63498f699",
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "terminal.integrated.env.windows": {},
  "terminal.integrated.fontFamily": "Inconsolata, monospace",
  "terminal.integrated.fontSize": 16,
  // "terminal.integrated.fontLigatures": true,
  "terminal.integrated.fontWeight": "500",
  "terminal.integrated.fontWeightBold": "bold",
  "terminal.integrated.lineHeight": 1.25,
  "todo-tree.general.enableFileWatcher": true,
  "todo-tree.general.showIconsInsteadOfTagsInStatusBar": true,
  "todo-tree.general.statusBar": "top three",
  "todo-tree.highlights.customHighlight": {
    "TODO": {},
    "FIXME": {}
  },
  "todo-tree.highlights.defaultHighlight": {
    "fontWeight": "bold",
    "background": "#222222",
    "foreground": "#ecde60",
    "type": "tag"
  },
  "todo-tree.tree.showScanModeButton": false,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "vsicons.dontShowNewVersionMessage": true,
  // "window.menuBarVisibility": "toggle"
  "window.newWindowDimensions": "maximized",
  "window.openFoldersInNewWindow": "default",
  "window.restoreFullscreen": true,
  "window.titleBarStyle": "custom",
  "workbench.colorCustomizations": {
    // "activityBar.background": "#455D4E",
    // "activityBar.border": "#455D4E",
    // "activityBar.dropBackground": "#222222",
    // "activityBar.foreground": "#E2DAC4",
    // "activityBar.inactiveForeground": "#E2DAC4",
    // "activityBarBadge.background": "#5D4554",
    // "activityBarBadge.foreground": "#E2DAC4",
    // "badge.background": "#5D4554",
    // "badge.foreground": "#E2DAC4",
    // "panel.background": "#455d4e42",
    // "panel.border": "#455d4e",
    // "panel.foreground": "#E2DAC4",
    // "statusBar.background": "#455D4E",
    // "statusBar.foreground": "#E2DAC4",
    // "statusBarItem.remoteBackground": "#455D4E",
    // "statusBarItem.remoteForeground": "#E2DAC4",
    // "terminal.background": "#222222",
    // "titleBar.activeBackground": "#455D4E",
    // "titleBar.activeForeground": "#E2DAC4",
    // "titleBar.inactiveBackground": "#455d4e88",
    // "titleBar.inactiveForeground": "#e2dac488",
  },
  "workbench.colorTheme": "Tokyo Night",
  "workbench.commandPalette.history": 30,
  "workbench.editorAssociations": {
    "*.jpg": "imagePreview.previewEditor"
  },
  "workbench.editor.decorations.colors": true,
  "workbench.editor.wrapTabs": true,
  "workbench.experimental.enableNewProfilesUI": true,
  "workbench.iconTheme": "eq-material-theme-icons-light",
  "workbench.sideBar.location": "right",
  "workbench.startupEditor": "none",
  "zenMode.centerLayout": false,
  "zenMode.restore": true,
  "[css][scss][less]": {
    "editor.defaultFormatter": "vscode.css-language-features",
  },
  "[dart]": {
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "editor.rulers": [
      80
    ],
    "editor.selectionHighlight": false,
    "editor.suggest.snippetsPreventQuickSuggestions": false,
    "editor.suggestSelection": "first",
    "editor.tabCompletion": "onlySnippets",
    "editor.wordBasedSuggestions": "off"
  },
  "[django-html]": {
    "editor.formatOnSave": true,
    // "editor.defaultFormatter": "junstyle.vscode-django-support"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features",
  },
  "[javascript][javascriptreact][typescript][typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[json][jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[liquid]": {
    "editor.defaultFormatter": "sissel.shopify-liquid",
    "editor.formatOnSave": true
  },
  "[php]": {
    "editor.defaultFormatter": "kokororin.vscode-phpfmt"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
}
```