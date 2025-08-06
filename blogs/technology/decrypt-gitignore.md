---
title: 解密 .gitignore 匹配规则
date: "2025-02-21"
categories:
  - 技术文档
tags:
  - gitignore
author: Alan
publish: true
---

在现代软件开发的旅程中，Git 已经成为开发者不可或缺的伙伴。它像一位忠实的守护者，记录着代码的每一次变化，帮助团队协作、版本管理，甚至在代码出现问题时，能够迅速回溯到稳定的状态。然而，在 Git 的强大功能背后，还有一个常常被忽视的“幕后英雄”——.gitignore 文件。
.gitignore 文件，就像 Git 世界中的“隐藏宝藏”，虽然它不直接参与代码的版本控制，但却在维护代码库的整洁和高效方面发挥着至关重要的作用。想象一下，如果没有 .gitignore，你的 Git 仓库可能会被各种临时文件、编译生成的文件、日志文件等“垃圾”充斥，不仅占用大量空间，还会让版本控制变得混乱不堪。

**为什么需要解密？**

在实际开发中，许多开发者都曾遇到过类似的问题：不小心提交了不该提交的文件，导致仓库臃肿不堪；或者因为忽略了某些重要文件，导致项目无法正常运行。这些问题往往源于对 .gitignore 文件的误解或不熟悉。

.gitignore 文件的规则看似简单，但实际上却隐藏着许多细节和技巧。掌握这些规则，不仅能让你的代码库保持整洁，还能提高团队协作的效率。例如，一个合理的 .gitignore 文件可以避免团队成员提交重复的依赖包文件（如 node_modules 目录），或者防止敏感信息（如配置文件中的密码）被意外泄露。

**然而，许多开发者在使用 .gitignore 时，往往只是简单地复制一些常见的规则，而没有深入了解其背后的原理。这就像在黑暗中摸索宝藏，虽然偶尔也能找到一些有用的东西，但往往无法充分发挥其价值。**

因此，一起让我们深入探索 .gitignore 的匹配规则，解密它的每一个细节。

## 一、了解 .gitignore 文件

在开始解密 .gitignore 匹配规则之前，我们先来揭开 .gitignore 文件本身的神秘面纱。了解它的基本概念和工作机制，是掌握匹配规则的基础。

### 1. 什么是 .gitignore？

在 Git 的版本控制中，.gitignore 是一个简单却至关重要的文件。它的作用就是告诉 Git 哪些文件或文件夹应该被忽略，不进行版本控制。换句话说，.gitignore 文件定义了一组规则，Git 会根据这些规则来决定哪些文件不需要提交到仓库中。使用 .gitignore 文件，可以确保无关文件（比如编译生成的文件、操作系统或编辑器的配置文件等）不会被提交到代码库，从而保持代码库的整洁与高效。

文件格式：.gitignore 文件是一个纯文本文件，**每行定义一条规则，Git 会根据这些规则判断文件是否应被忽略**。

```
# 忽略所有以 .log 结尾的文件
*.log

# 忽略名为 temp 的目录
temp/

# 忽略名为 config.json 的文件
config.json
```

### 2. .gitignore 文件的位置

- 根目录中的 .gitignore

  通常情况下，.gitignore 文件位于 Git 仓库的根目录。这个文件会对整个项目生效，影响仓库中的所有文件和目录。

- 子目录中的 .gitignore

  你可以在项目的子目录中创建 .gitignore 文件。这种方式允许你为特定子目录配置更精确的忽略规则。这些规则只会影响该子目录及其子目录中的文件。

  如果你有一个名为 src 的目录，你可以在 src 下放置一个 .gitignore 文件，专门忽略该目录中的某些文件

  ```
  # src/.gitignore
  *.test.js      # 忽略所有的测试文件
  coverage/      # 忽略测试覆盖率目录
  ```

- 全局 .gitignore 文件

  执行 `git config --global core.excludesfile ~/.gitignore_global` 后，Git 会读取这个全局的 .gitignore 文件，并应用其中的规则到所有仓库中。

  注意：全局忽略文件仅对当前用户生效，此配置只会影响当前用户的所有 Git 仓库。如果其他开发者也需要相同的全局忽略规则，他们需要在自己的机器上进行相同的配置。

### 3. 它是如何工作的？

当 Git 执行 `git add` 或 `git commit` 等命令时，它会检查 .gitignore 文件中的规则，以确定哪些文件应该被忽略。如果某个文件匹配了 .gitignore 文件中的规则，Git 就不会将其添加到暂存区或提交到仓库中。

- 匹配过程：Git 会从上到下逐行检查 .gitignore 文件中的规则，直到找到匹配的规则为止。如果找到匹配的忽略规则，文件将被忽略；如果找到匹配的非忽略规则（通过 ! 取反），文件将被跟踪。

- 规则优先级：.gitignore 文件中的规则具有优先级，后出现的规则会覆盖前面的规则。例如：

  ```
  # 忽略所有 .txt 文件

  \*.txt

  # 但不忽略 important.txt

  !important.txt
  ```

在这个例子中，important.txt 将不会被忽略，因为它匹配了后面的非忽略规则。

### 4. .gitignore 文件的格式规范

.gitignore 文件的格式非常简单

- 注释：以 # 开头的行是注释，不会被 Git 解析。
- 空行：空行不会被解析，通常用于分隔不同的规则。

## 三、解密匹配规则的核心

接下来深入探索 .gitignore 的匹配规则，这是掌握 .gitignore 的核心部分。通过这些规则，你可以精确地控制哪些文件和目录应该被 Git 忽略。

### 1. 通配符

.gitignore 文件支持多种通配符，这些通配符可以帮助你更灵活地定义忽略规则。

- \*（星号）

  - 功能：匹配任意数量的字符，包括空字符。

  - 示例：`*.log` 这条规则会匹配所有以 .log 结尾的文件，例如 error.log、access.log 等。

- ?（问号）

  - 功能：匹配任意单个字符。
  - 示例：`data?.txt` 这条规则会匹配 data1.txt、data2.txt 等，但不会匹配 data12.txt。

- \[ \]（字符集）

  - 功能：匹配指定范围内的单个字符。
  - 示例：`data[0-9].txt` 这条规则会匹配 data0.txt 到 data9.txt；`[abc].txt` 这条规则会匹配 a.txt、b.txt、c.txt。

- \*\*（双星号）
  - 功能：匹配任意深度的目录。
  - 示例：`**/logs/` 会忽略项目中所有名为 logs 的目录，无论其层级深度。

### 2. 路径匹配

路径匹配规则可以帮助你更精确地指定哪些目录和文件应该被忽略。

- 直接匹配
  直接指定文件。如 `error.log`,这条规则会匹配所有名为 error.log 的文件

- 绝对路径与相对路径

  - 绝对路径：以 / 开头，表示从仓库根目录开始匹配。如 `/temp/` 这条规则只会匹配根目录下的 temp 目录。
  - 相对路径：不以 / 开头，表示从 .gitignore 文件所在目录开始匹配。如 `temp/` 这条规则会匹配当前目录或子目录下的 temp 目录。

- 目录匹配

  - 功能：以 / 结尾的规则表示目录及其内容；仅写入目录名，会同时匹配同名的文件和目录及其内容。
  - 示例：`logs/` 这条规则会匹配名为 logs 的目录及其所有内容。`logs`这条规则会匹配名为 logs 的目录及其所有内容，同时匹配名为 logs 的文件。

- 文件与目录的混合匹配
  - 功能：结合路径和通配符进行更复杂的匹配。
  - 示例：`logs/*.log` 这条规则会匹配 logs 目录下的所有以 .log 结尾的文件。

### 3. 特殊规则

.gitignore 文件还支持一些特殊规则，这些规则可以帮助你实现更复杂的忽略需求。

- !（取反）
  功能：取反规则，表示不忽略匹配的文件或目录。
  示例：

  ```
  *.tmp
  !important.tmp
  ```

  这条规则会忽略所有以 .tmp 结尾的文件，但不会忽略 important.tmp 文件。

- 转义字符 \\
  - 功能：使用 \ 转义特殊字符，避免 Git 解析。
  - 示例：`\*.txt` 这条规则会匹配名为 \*.txt 的文件

## 四、隐藏的陷阱与注意事项

在使用 .gitignore 文件时，尽管规则看起来简单，但如果一不小心，可能会遇到一些隐藏的陷阱。

### 1. 已跟踪文件不会被忽略

如果一个文件已经被 Git 跟踪（即已经提交到仓库），即使你将其添加到 .gitignore 文件中，Git 也不会自动忽略它。

**解决方法**：

要解决这个问题，你需要手动取消跟踪该文件，但保留文件本身：

```
git rm --cached file.txt
```

然后提交 .gitignore 文件和取消跟踪的操作：

```
git add .gitignore
git commit -m "chore: update .gitignore and untrack file.txt"
```

.gitignore 文件中的规则是从上到下依次匹配的，后面的规则会覆盖前面的规则。如果顺序颠倒，可能会导致规则不生效。

假设你希望忽略 test 目录，但保留 test/template.ts 文件。如果你的 .gitignore 文件如下：

```
!test/template.ts
test/*
```

那么 test/template.ts 仍然会被忽略，因为 test/\* 规则覆盖了 !test/template.ts。

**解决方法**：
确保取反规则（!）在忽略规则之后：

```
test/*
!test/template.ts
```

### 3. 忽略规则的全局性

.gitignore 文件的规则不仅适用于当前目录，还适用于所有子目录。如果不小心写错了规则，可能会导致意外的结果。

假设你设置了 `*.log`，这条规则会忽略所有以 .log 结尾的文件，无论它们位于何处。

**解决方法**：

如果你只想忽略特定目录下的 .log 文件，可以使用绝对路径 `/logs/*.log`

### 4. 跨平台兼容性问题

不同操作系统对文件名大小写敏感性不同。在 Windows 系统中，文件名是大小写不敏感的，而在 Linux 和 macOS 系统中，文件名是大小写敏感的。这可能导致 .gitignore 文件中的规则在不同系统上表现不一致。

假设你设置了 `fileName.txt`，这条规则在 Windows fileName.txt 和 filename.txt 会被视为同一个文件，因此都会被忽略。但在 macOS 系统中，它们会被视为不同的文件，只有 fileName.txt 会被忽略。

**解决方法**：

在 .gitignore 文件中使用大小写不敏感的规则，如 `file[Nn]ame.txt`。

或者在项目中统一文件名的大小写，避免因大小写问题导致的混淆。

### 5. 全局 .gitignore 文件的配置

全局 .gitignore 文件适用于所有 Git 仓库，但如果配置不当，可能会导致某些文件被意外忽略。

假设你在全局 .gitignore 文件中添加了以下规则：`*.tmp`。

这条规则会忽略所有以 .tmp 结尾的文件，无论它们位于哪个项目中。

**解决方法**：
在配置全局 .gitignore 文件时，确保规则只包含通用的、适用于所有项目的文件类型。例如：

```
# 忽略 macOS 的 .DS_Store 文件
.DS_Store

# 忽略 Windows 的缩略图文件
Thumbs.db

# 忽略 Vim 的临时文件
*.swp
```

## 五、常见场景与示例

接下来将通过一些具体的实战场景，展示如何在实际开发中应用这些规则，帮助你更好地管理代码库。

### 1. 忽略临时文件

在开发过程中，编辑器和工具会生成大量的临时文件。这些文件通常不需要版本控制，因为它们会频繁变化且占用大量空间。

```
# 忽略所有以 .tmp 结尾的临时文件
*.tmp

# 忽略所有以 ~ 结尾的临时文件（如 Vim 的备份文件）
*~

# 忽略所有以 .swp 结尾的临时文件（如 Vim 的交换文件）
*.swp
```

### 2. 忽略编译生成的文件

在编译项目时，编译器会生成一些中间文件或最终的可执行文件。这些文件通常不需要版本控制，因为它们可以通过源代码重新生成。

```
# Node.js
node_modules/
dist/
build/

# 编辑器生成的文件
.DS_Store
Thumbs.db
.idea/
```

### 3. 忽略日志文件

日志文件通常会不断增长，且每次运行程序时都会更新。这些文件不适合版本控制，因为它们会频繁变化且可能包含敏感信息。

```
# 忽略所有以 .log 结尾的日志文件
*.log

# 忽略特定的日志文件
logs
```

### 4. 忽略用户配置文件

配置文件中可能包含敏感信息，如数据库密码或 API 密钥。这些文件通常需要根据开发环境进行调整，因此不适合版本控制。

```
# 忽略配置文件
config.json
.env.secret
```

### 5. 忽略操作系统生成的文件

在跨平台开发中，某些操作系统会生成特定的文件，这些文件通常不需要版本控制。

```
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
```

### 6. 忽略规则的调试

有时你可能不确定 .gitignore 文件中的规则是否生效，或者为什么某个文件仍然被跟踪。

可以使用 `git check-ignore` 命令来调试 .gitignore 文件中的规则。

```
git check-ignore -v src/some/file.txt

```

这条命令会显示 src/some/file.txt 文件被忽略的原因，帮助你调试规则。

## 六、最佳实践

下面提供一个完整的 .gitignore 文件示例，适用于一个典型的 Web 开发项目 .gitignore 文件

```
# 操作系统生成的文件
###################
# macOS
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes

# Windows
Thumbs.db
Desktop.ini
*.lnk

# 编辑器生成的文件
#################
.idea/
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.hbuilderx

# 忽略 Node.js 项目生成的文件
############################
node_modules/
dist/
build/
dist-ssr/
stats.html
*.map
*.local

# 忽略前端构建工具生成的文件
###########################
*.js.map
*.css.map

# 日志与调试文件
###############
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# 忽略锁文件
############
package-lock.json
yarn.lock
pnpm-lock.yaml

# 其他
######
.stylelintcache
.eslintcache
.history
*.tmp
*.bak
*.swp
*~
```

## 七、 深入阅读

这些文章提供了更深入的分析和示例，帮助你更全面地掌握 .gitignore 的使用方法

- [gitignore.io](https://www.gitignore.io/) Gitignore 生成器
- Pro Git 书籍中的[忽略文件](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring)
- Git 文档中的 [.gitignore 手册](https://git-scm.com/docs/gitignore)
- github/gitignore 存储库中的[有用的 .gitignore 模板集合](https://github.com/github/gitignore)

## 八、总结

合理配置 .gitignore 文件可以显著提高项目的整洁度和版本控制效率，避免不必要的文件被提交到仓库中。

通过深入了解 .gitignore 文件的高级匹配规则，相信你已经掌握了如何使用通配符、排除特定文件、忽略特定目录下的文件类型等技巧，以精确控制 Git 忽略哪些文件和目录。

希望本文能帮助你更好地理解和应用 .gitignore 的匹配规则，提升你的 Git 使用技巧。
