import{_ as a,c as t,b as d,a as s,d as e,e as l,r,o as p}from"./app-SKA2uT19.js";const c={},o={href:"https://www.gitignore.io/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring",target:"_blank",rel:"noopener noreferrer"},g={href:"https://git-scm.com/docs/gitignore",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"};function m(b,n){const i=r("ExternalLinkIcon");return p(),t("div",null,[n[8]||(n[8]=d(`<p>在现代软件开发的旅程中，Git 已经成为开发者不可或缺的伙伴。它像一位忠实的守护者，记录着代码的每一次变化，帮助团队协作、版本管理，甚至在代码出现问题时，能够迅速回溯到稳定的状态。然而，在 Git 的强大功能背后，还有一个常常被忽视的“幕后英雄”——.gitignore 文件。 .gitignore 文件，就像 Git 世界中的“隐藏宝藏”，虽然它不直接参与代码的版本控制，但却在维护代码库的整洁和高效方面发挥着至关重要的作用。想象一下，如果没有 .gitignore，你的 Git 仓库可能会被各种临时文件、编译生成的文件、日志文件等“垃圾”充斥，不仅占用大量空间，还会让版本控制变得混乱不堪。</p><p><strong>为什么需要解密？</strong></p><p>在实际开发中，许多开发者都曾遇到过类似的问题：不小心提交了不该提交的文件，导致仓库臃肿不堪；或者因为忽略了某些重要文件，导致项目无法正常运行。这些问题往往源于对 .gitignore 文件的误解或不熟悉。</p><p>.gitignore 文件的规则看似简单，但实际上却隐藏着许多细节和技巧。掌握这些规则，不仅能让你的代码库保持整洁，还能提高团队协作的效率。例如，一个合理的 .gitignore 文件可以避免团队成员提交重复的依赖包文件（如 node_modules 目录），或者防止敏感信息（如配置文件中的密码）被意外泄露。</p><p><strong>然而，许多开发者在使用 .gitignore 时，往往只是简单地复制一些常见的规则，而没有深入了解其背后的原理。这就像在黑暗中摸索宝藏，虽然偶尔也能找到一些有用的东西，但往往无法充分发挥其价值。</strong></p><p>因此，一起让我们深入探索 .gitignore 的匹配规则，解密它的每一个细节。</p><h2 id="一、了解-gitignore-文件" tabindex="-1"><a class="header-anchor" href="#一、了解-gitignore-文件"><span>一、了解 .gitignore 文件</span></a></h2><p>在开始解密 .gitignore 匹配规则之前，我们先来揭开 .gitignore 文件本身的神秘面纱。了解它的基本概念和工作机制，是掌握匹配规则的基础。</p><h3 id="_1-什么是-gitignore" tabindex="-1"><a class="header-anchor" href="#_1-什么是-gitignore"><span>1. 什么是 .gitignore？</span></a></h3><p>在 Git 的版本控制中，.gitignore 是一个简单却至关重要的文件。它的作用就是告诉 Git 哪些文件或文件夹应该被忽略，不进行版本控制。换句话说，.gitignore 文件定义了一组规则，Git 会根据这些规则来决定哪些文件不需要提交到仓库中。使用 .gitignore 文件，可以确保无关文件（比如编译生成的文件、操作系统或编辑器的配置文件等）不会被提交到代码库，从而保持代码库的整洁与高效。</p><p>文件格式：.gitignore 文件是一个纯文本文件，<strong>每行定义一条规则，Git 会根据这些规则判断文件是否应被忽略</strong>。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 忽略所有以 .log 结尾的文件</span>
<span class="line">*.log</span>
<span class="line"></span>
<span class="line"># 忽略名为 temp 的目录</span>
<span class="line">temp/</span>
<span class="line"></span>
<span class="line"># 忽略名为 config.json 的文件</span>
<span class="line">config.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-gitignore-文件的位置" tabindex="-1"><a class="header-anchor" href="#_2-gitignore-文件的位置"><span>2. .gitignore 文件的位置</span></a></h3><ul><li><p>根目录中的 .gitignore</p><p>通常情况下，.gitignore 文件位于 Git 仓库的根目录。这个文件会对整个项目生效，影响仓库中的所有文件和目录。</p></li><li><p>子目录中的 .gitignore</p><p>你可以在项目的子目录中创建 .gitignore 文件。这种方式允许你为特定子目录配置更精确的忽略规则。这些规则只会影响该子目录及其子目录中的文件。</p><p>如果你有一个名为 src 的目录，你可以在 src 下放置一个 .gitignore 文件，专门忽略该目录中的某些文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># src/.gitignore</span>
<span class="line">*.test.js      # 忽略所有的测试文件</span>
<span class="line">coverage/      # 忽略测试覆盖率目录</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>全局 .gitignore 文件</p><p>执行 <code>git config --global core.excludesfile ~/.gitignore_global</code> 后，Git 会读取这个全局的 .gitignore 文件，并应用其中的规则到所有仓库中。</p><p>注意：全局忽略文件仅对当前用户生效，此配置只会影响当前用户的所有 Git 仓库。如果其他开发者也需要相同的全局忽略规则，他们需要在自己的机器上进行相同的配置。</p></li></ul><h3 id="_3-它是如何工作的" tabindex="-1"><a class="header-anchor" href="#_3-它是如何工作的"><span>3. 它是如何工作的？</span></a></h3><p>当 Git 执行 <code>git add</code> 或 <code>git commit</code> 等命令时，它会检查 .gitignore 文件中的规则，以确定哪些文件应该被忽略。如果某个文件匹配了 .gitignore 文件中的规则，Git 就不会将其添加到暂存区或提交到仓库中。</p><ul><li><p>匹配过程：Git 会从上到下逐行检查 .gitignore 文件中的规则，直到找到匹配的规则为止。如果找到匹配的忽略规则，文件将被忽略；如果找到匹配的非忽略规则（通过 ! 取反），文件将被跟踪。</p></li><li><p>规则优先级：.gitignore 文件中的规则具有优先级，后出现的规则会覆盖前面的规则。例如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 忽略所有 .txt 文件</span>
<span class="line"></span>
<span class="line">\\*.txt</span>
<span class="line"></span>
<span class="line"># 但不忽略 important.txt</span>
<span class="line"></span>
<span class="line">!important.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>在这个例子中，important.txt 将不会被忽略，因为它匹配了后面的非忽略规则。</p><h3 id="_4-gitignore-文件的格式规范" tabindex="-1"><a class="header-anchor" href="#_4-gitignore-文件的格式规范"><span>4. .gitignore 文件的格式规范</span></a></h3><p>.gitignore 文件的格式非常简单</p><ul><li>注释：以 # 开头的行是注释，不会被 Git 解析。</li><li>空行：空行不会被解析，通常用于分隔不同的规则。</li></ul><h2 id="三、解密匹配规则的核心" tabindex="-1"><a class="header-anchor" href="#三、解密匹配规则的核心"><span>三、解密匹配规则的核心</span></a></h2><p>接下来深入探索 .gitignore 的匹配规则，这是掌握 .gitignore 的核心部分。通过这些规则，你可以精确地控制哪些文件和目录应该被 Git 忽略。</p><h3 id="_1-通配符" tabindex="-1"><a class="header-anchor" href="#_1-通配符"><span>1. 通配符</span></a></h3><p>.gitignore 文件支持多种通配符，这些通配符可以帮助你更灵活地定义忽略规则。</p><ul><li><p>*（星号）</p><ul><li><p>功能：匹配任意数量的字符，包括空字符。</p></li><li><p>示例：<code>*.log</code> 这条规则会匹配所有以 .log 结尾的文件，例如 error.log、access.log 等。</p></li></ul></li><li><p>?（问号）</p><ul><li>功能：匹配任意单个字符。</li><li>示例：<code>data?.txt</code> 这条规则会匹配 data1.txt、data2.txt 等，但不会匹配 data12.txt。</li></ul></li><li><p>[ ]（字符集）</p><ul><li>功能：匹配指定范围内的单个字符。</li><li>示例：<code>data[0-9].txt</code> 这条规则会匹配 data0.txt 到 data9.txt；<code>[abc].txt</code> 这条规则会匹配 a.txt、b.txt、c.txt。</li></ul></li><li><p>**（双星号）</p><ul><li>功能：匹配任意深度的目录。</li><li>示例：<code>**/logs/</code> 会忽略项目中所有名为 logs 的目录，无论其层级深度。</li></ul></li></ul><h3 id="_2-路径匹配" tabindex="-1"><a class="header-anchor" href="#_2-路径匹配"><span>2. 路径匹配</span></a></h3><p>路径匹配规则可以帮助你更精确地指定哪些目录和文件应该被忽略。</p><ul><li><p>直接匹配 直接指定文件。如 <code>error.log</code>,这条规则会匹配所有名为 error.log 的文件</p></li><li><p>绝对路径与相对路径</p><ul><li>绝对路径：以 / 开头，表示从仓库根目录开始匹配。如 <code>/temp/</code> 这条规则只会匹配根目录下的 temp 目录。</li><li>相对路径：不以 / 开头，表示从 .gitignore 文件所在目录开始匹配。如 <code>temp/</code> 这条规则会匹配当前目录或子目录下的 temp 目录。</li></ul></li><li><p>目录匹配</p><ul><li>功能：以 / 结尾的规则表示目录及其内容；仅写入目录名，会同时匹配同名的文件和目录及其内容。</li><li>示例：<code>logs/</code> 这条规则会匹配名为 logs 的目录及其所有内容。<code>logs</code>这条规则会匹配名为 logs 的目录及其所有内容，同时匹配名为 logs 的文件。</li></ul></li><li><p>文件与目录的混合匹配</p><ul><li>功能：结合路径和通配符进行更复杂的匹配。</li><li>示例：<code>logs/*.log</code> 这条规则会匹配 logs 目录下的所有以 .log 结尾的文件。</li></ul></li></ul><h3 id="_3-特殊规则" tabindex="-1"><a class="header-anchor" href="#_3-特殊规则"><span>3. 特殊规则</span></a></h3><p>.gitignore 文件还支持一些特殊规则，这些规则可以帮助你实现更复杂的忽略需求。</p><ul><li><p>!（取反） 功能：取反规则，表示不忽略匹配的文件或目录。 示例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">*.tmp</span>
<span class="line">!important.tmp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这条规则会忽略所有以 .tmp 结尾的文件，但不会忽略 important.tmp 文件。</p></li><li><p>转义字符 \\</p><ul><li>功能：使用 \\ 转义特殊字符，避免 Git 解析。</li><li>示例：<code>\\*.txt</code> 这条规则会匹配名为 *.txt 的文件</li></ul></li></ul><h2 id="四、隐藏的陷阱与注意事项" tabindex="-1"><a class="header-anchor" href="#四、隐藏的陷阱与注意事项"><span>四、隐藏的陷阱与注意事项</span></a></h2><p>在使用 .gitignore 文件时，尽管规则看起来简单，但如果一不小心，可能会遇到一些隐藏的陷阱。</p><h3 id="_1-已跟踪文件不会被忽略" tabindex="-1"><a class="header-anchor" href="#_1-已跟踪文件不会被忽略"><span>1. 已跟踪文件不会被忽略</span></a></h3><p>如果一个文件已经被 Git 跟踪（即已经提交到仓库），即使你将其添加到 .gitignore 文件中，Git 也不会自动忽略它。</p><p><strong>解决方法</strong>：</p><p>要解决这个问题，你需要手动取消跟踪该文件，但保留文件本身：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git rm --cached file.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后提交 .gitignore 文件和取消跟踪的操作：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git add .gitignore</span>
<span class="line">git commit -m &quot;chore: update .gitignore and untrack file.txt&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>.gitignore 文件中的规则是从上到下依次匹配的，后面的规则会覆盖前面的规则。如果顺序颠倒，可能会导致规则不生效。</p><p>假设你希望忽略 test 目录，但保留 test/template.ts 文件。如果你的 .gitignore 文件如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">!test/template.ts</span>
<span class="line">test/*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>那么 test/template.ts 仍然会被忽略，因为 test/* 规则覆盖了 !test/template.ts。</p><p><strong>解决方法</strong>： 确保取反规则（!）在忽略规则之后：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">test/*</span>
<span class="line">!test/template.ts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-忽略规则的全局性" tabindex="-1"><a class="header-anchor" href="#_3-忽略规则的全局性"><span>3. 忽略规则的全局性</span></a></h3><p>.gitignore 文件的规则不仅适用于当前目录，还适用于所有子目录。如果不小心写错了规则，可能会导致意外的结果。</p><p>假设你设置了 <code>*.log</code>，这条规则会忽略所有以 .log 结尾的文件，无论它们位于何处。</p><p><strong>解决方法</strong>：</p><p>如果你只想忽略特定目录下的 .log 文件，可以使用绝对路径 <code>/logs/*.log</code></p><h3 id="_4-跨平台兼容性问题" tabindex="-1"><a class="header-anchor" href="#_4-跨平台兼容性问题"><span>4. 跨平台兼容性问题</span></a></h3><p>不同操作系统对文件名大小写敏感性不同。在 Windows 系统中，文件名是大小写不敏感的，而在 Linux 和 macOS 系统中，文件名是大小写敏感的。这可能导致 .gitignore 文件中的规则在不同系统上表现不一致。</p><p>假设你设置了 <code>fileName.txt</code>，这条规则在 Windows fileName.txt 和 filename.txt 会被视为同一个文件，因此都会被忽略。但在 macOS 系统中，它们会被视为不同的文件，只有 fileName.txt 会被忽略。</p><p><strong>解决方法</strong>：</p><p>在 .gitignore 文件中使用大小写不敏感的规则，如 <code>file[Nn]ame.txt</code>。</p><p>或者在项目中统一文件名的大小写，避免因大小写问题导致的混淆。</p><h3 id="_5-全局-gitignore-文件的配置" tabindex="-1"><a class="header-anchor" href="#_5-全局-gitignore-文件的配置"><span>5. 全局 .gitignore 文件的配置</span></a></h3><p>全局 .gitignore 文件适用于所有 Git 仓库，但如果配置不当，可能会导致某些文件被意外忽略。</p><p>假设你在全局 .gitignore 文件中添加了以下规则：<code>*.tmp</code>。</p><p>这条规则会忽略所有以 .tmp 结尾的文件，无论它们位于哪个项目中。</p><p><strong>解决方法</strong>： 在配置全局 .gitignore 文件时，确保规则只包含通用的、适用于所有项目的文件类型。例如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 忽略 macOS 的 .DS_Store 文件</span>
<span class="line">.DS_Store</span>
<span class="line"></span>
<span class="line"># 忽略 Windows 的缩略图文件</span>
<span class="line">Thumbs.db</span>
<span class="line"></span>
<span class="line"># 忽略 Vim 的临时文件</span>
<span class="line">*.swp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、常见场景与示例" tabindex="-1"><a class="header-anchor" href="#五、常见场景与示例"><span>五、常见场景与示例</span></a></h2><p>接下来将通过一些具体的实战场景，展示如何在实际开发中应用这些规则，帮助你更好地管理代码库。</p><h3 id="_1-忽略临时文件" tabindex="-1"><a class="header-anchor" href="#_1-忽略临时文件"><span>1. 忽略临时文件</span></a></h3><p>在开发过程中，编辑器和工具会生成大量的临时文件。这些文件通常不需要版本控制，因为它们会频繁变化且占用大量空间。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 忽略所有以 .tmp 结尾的临时文件</span>
<span class="line">*.tmp</span>
<span class="line"></span>
<span class="line"># 忽略所有以 ~ 结尾的临时文件（如 Vim 的备份文件）</span>
<span class="line">*~</span>
<span class="line"></span>
<span class="line"># 忽略所有以 .swp 结尾的临时文件（如 Vim 的交换文件）</span>
<span class="line">*.swp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-忽略编译生成的文件" tabindex="-1"><a class="header-anchor" href="#_2-忽略编译生成的文件"><span>2. 忽略编译生成的文件</span></a></h3><p>在编译项目时，编译器会生成一些中间文件或最终的可执行文件。这些文件通常不需要版本控制，因为它们可以通过源代码重新生成。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Node.js</span>
<span class="line">node_modules/</span>
<span class="line">dist/</span>
<span class="line">build/</span>
<span class="line"></span>
<span class="line"># 编辑器生成的文件</span>
<span class="line">.DS_Store</span>
<span class="line">Thumbs.db</span>
<span class="line">.idea/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-忽略日志文件" tabindex="-1"><a class="header-anchor" href="#_3-忽略日志文件"><span>3. 忽略日志文件</span></a></h3><p>日志文件通常会不断增长，且每次运行程序时都会更新。这些文件不适合版本控制，因为它们会频繁变化且可能包含敏感信息。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 忽略所有以 .log 结尾的日志文件</span>
<span class="line">*.log</span>
<span class="line"></span>
<span class="line"># 忽略特定的日志文件</span>
<span class="line">logs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-忽略用户配置文件" tabindex="-1"><a class="header-anchor" href="#_4-忽略用户配置文件"><span>4. 忽略用户配置文件</span></a></h3><p>配置文件中可能包含敏感信息，如数据库密码或 API 密钥。这些文件通常需要根据开发环境进行调整，因此不适合版本控制。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 忽略配置文件</span>
<span class="line">config.json</span>
<span class="line">.env.secret</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-忽略操作系统生成的文件" tabindex="-1"><a class="header-anchor" href="#_5-忽略操作系统生成的文件"><span>5. 忽略操作系统生成的文件</span></a></h3><p>在跨平台开发中，某些操作系统会生成特定的文件，这些文件通常不需要版本控制。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.DS_Store</span>
<span class="line">.DS_Store?</span>
<span class="line">._*</span>
<span class="line">.Spotlight-V100</span>
<span class="line">.Trashes</span>
<span class="line">ehthumbs.db</span>
<span class="line">Thumbs.db</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-忽略规则的调试" tabindex="-1"><a class="header-anchor" href="#_6-忽略规则的调试"><span>6. 忽略规则的调试</span></a></h3><p>有时你可能不确定 .gitignore 文件中的规则是否生效，或者为什么某个文件仍然被跟踪。</p><p>可以使用 <code>git check-ignore</code> 命令来调试 .gitignore 文件中的规则。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git check-ignore -v src/some/file.txt</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这条命令会显示 src/some/file.txt 文件被忽略的原因，帮助你调试规则。</p><h2 id="六、最佳实践" tabindex="-1"><a class="header-anchor" href="#六、最佳实践"><span>六、最佳实践</span></a></h2><p>下面提供一个完整的 .gitignore 文件示例，适用于一个典型的 Web 开发项目 .gitignore 文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 操作系统生成的文件</span>
<span class="line">###################</span>
<span class="line"># macOS</span>
<span class="line">.DS_Store</span>
<span class="line">.DS_Store?</span>
<span class="line">._*</span>
<span class="line">.Spotlight-V100</span>
<span class="line">.Trashes</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">Thumbs.db</span>
<span class="line">Desktop.ini</span>
<span class="line">*.lnk</span>
<span class="line"></span>
<span class="line"># 编辑器生成的文件</span>
<span class="line">#################</span>
<span class="line">.idea/</span>
<span class="line">.vscode/*</span>
<span class="line">!.vscode/settings.json</span>
<span class="line">!.vscode/tasks.json</span>
<span class="line">!.vscode/launch.json</span>
<span class="line">!.vscode/extensions.json</span>
<span class="line">!.vscode/*.code-snippets</span>
<span class="line">*.suo</span>
<span class="line">*.ntvs*</span>
<span class="line">*.njsproj</span>
<span class="line">*.sln</span>
<span class="line">*.sw?</span>
<span class="line">.hbuilderx</span>
<span class="line"></span>
<span class="line"># 忽略 Node.js 项目生成的文件</span>
<span class="line">############################</span>
<span class="line">node_modules/</span>
<span class="line">dist/</span>
<span class="line">build/</span>
<span class="line">dist-ssr/</span>
<span class="line">stats.html</span>
<span class="line">*.map</span>
<span class="line">*.local</span>
<span class="line"></span>
<span class="line"># 忽略前端构建工具生成的文件</span>
<span class="line">###########################</span>
<span class="line">*.js.map</span>
<span class="line">*.css.map</span>
<span class="line"></span>
<span class="line"># 日志与调试文件</span>
<span class="line">###############</span>
<span class="line">logs</span>
<span class="line">*.log</span>
<span class="line">npm-debug.log*</span>
<span class="line">yarn-debug.log*</span>
<span class="line">yarn-error.log*</span>
<span class="line">pnpm-debug.log*</span>
<span class="line">lerna-debug.log*</span>
<span class="line"></span>
<span class="line"># 忽略锁文件</span>
<span class="line">############</span>
<span class="line">package-lock.json</span>
<span class="line">yarn.lock</span>
<span class="line">pnpm-lock.yaml</span>
<span class="line"></span>
<span class="line"># 其他</span>
<span class="line">######</span>
<span class="line">.stylelintcache</span>
<span class="line">.eslintcache</span>
<span class="line">.history</span>
<span class="line">*.tmp</span>
<span class="line">*.bak</span>
<span class="line">*.swp</span>
<span class="line">*~</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、-深入阅读" tabindex="-1"><a class="header-anchor" href="#七、-深入阅读"><span>七、 深入阅读</span></a></h2><p>这些文章提供了更深入的分析和示例，帮助你更全面地掌握 .gitignore 的使用方法</p>`,91)),s("ul",null,[s("li",null,[s("a",o,[n[0]||(n[0]=e("gitignore.io")),l(i)]),n[1]||(n[1]=e(" Gitignore 生成器"))]),s("li",null,[n[3]||(n[3]=e("Pro Git 书籍中的")),s("a",v,[n[2]||(n[2]=e("忽略文件")),l(i)])]),s("li",null,[n[5]||(n[5]=e("Git 文档中的 ")),s("a",g,[n[4]||(n[4]=e(".gitignore 手册")),l(i)])]),s("li",null,[n[7]||(n[7]=e("github/gitignore 存储库中的")),s("a",u,[n[6]||(n[6]=e("有用的 .gitignore 模板集合")),l(i)])])]),n[9]||(n[9]=s("h2",{id:"八、总结",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#八、总结"},[s("span",null,"八、总结")])],-1)),n[10]||(n[10]=s("p",null,"合理配置 .gitignore 文件可以显著提高项目的整洁度和版本控制效率，避免不必要的文件被提交到仓库中。",-1)),n[11]||(n[11]=s("p",null,"通过深入了解 .gitignore 文件的高级匹配规则，相信你已经掌握了如何使用通配符、排除特定文件、忽略特定目录下的文件类型等技巧，以精确控制 Git 忽略哪些文件和目录。",-1)),n[12]||(n[12]=s("p",null,"希望本文能帮助你更好地理解和应用 .gitignore 的匹配规则，提升你的 Git 使用技巧。",-1))])}const x=a(c,[["render",m]]),_=JSON.parse('{"path":"/blogs/technology/decrypt-gitignore.html","title":"解密 .gitignore 匹配规则","lang":"en-US","frontmatter":{"title":"解密 .gitignore 匹配规则","date":"2025-02-21","categories":["技术文档"],"tags":["gitignore"],"author":"Alan","publish":true},"headers":[{"level":2,"title":"一、了解 .gitignore 文件","slug":"一、了解-gitignore-文件","link":"#一、了解-gitignore-文件","children":[{"level":3,"title":"1. 什么是 .gitignore？","slug":"_1-什么是-gitignore","link":"#_1-什么是-gitignore","children":[]},{"level":3,"title":"2. .gitignore 文件的位置","slug":"_2-gitignore-文件的位置","link":"#_2-gitignore-文件的位置","children":[]},{"level":3,"title":"3. 它是如何工作的？","slug":"_3-它是如何工作的","link":"#_3-它是如何工作的","children":[]},{"level":3,"title":"4. .gitignore 文件的格式规范","slug":"_4-gitignore-文件的格式规范","link":"#_4-gitignore-文件的格式规范","children":[]}]},{"level":2,"title":"三、解密匹配规则的核心","slug":"三、解密匹配规则的核心","link":"#三、解密匹配规则的核心","children":[{"level":3,"title":"1. 通配符","slug":"_1-通配符","link":"#_1-通配符","children":[]},{"level":3,"title":"2. 路径匹配","slug":"_2-路径匹配","link":"#_2-路径匹配","children":[]},{"level":3,"title":"3. 特殊规则","slug":"_3-特殊规则","link":"#_3-特殊规则","children":[]}]},{"level":2,"title":"四、隐藏的陷阱与注意事项","slug":"四、隐藏的陷阱与注意事项","link":"#四、隐藏的陷阱与注意事项","children":[{"level":3,"title":"1. 已跟踪文件不会被忽略","slug":"_1-已跟踪文件不会被忽略","link":"#_1-已跟踪文件不会被忽略","children":[]},{"level":3,"title":"3. 忽略规则的全局性","slug":"_3-忽略规则的全局性","link":"#_3-忽略规则的全局性","children":[]},{"level":3,"title":"4. 跨平台兼容性问题","slug":"_4-跨平台兼容性问题","link":"#_4-跨平台兼容性问题","children":[]},{"level":3,"title":"5. 全局 .gitignore 文件的配置","slug":"_5-全局-gitignore-文件的配置","link":"#_5-全局-gitignore-文件的配置","children":[]}]},{"level":2,"title":"五、常见场景与示例","slug":"五、常见场景与示例","link":"#五、常见场景与示例","children":[{"level":3,"title":"1. 忽略临时文件","slug":"_1-忽略临时文件","link":"#_1-忽略临时文件","children":[]},{"level":3,"title":"2. 忽略编译生成的文件","slug":"_2-忽略编译生成的文件","link":"#_2-忽略编译生成的文件","children":[]},{"level":3,"title":"3. 忽略日志文件","slug":"_3-忽略日志文件","link":"#_3-忽略日志文件","children":[]},{"level":3,"title":"4. 忽略用户配置文件","slug":"_4-忽略用户配置文件","link":"#_4-忽略用户配置文件","children":[]},{"level":3,"title":"5. 忽略操作系统生成的文件","slug":"_5-忽略操作系统生成的文件","link":"#_5-忽略操作系统生成的文件","children":[]},{"level":3,"title":"6. 忽略规则的调试","slug":"_6-忽略规则的调试","link":"#_6-忽略规则的调试","children":[]}]},{"level":2,"title":"六、最佳实践","slug":"六、最佳实践","link":"#六、最佳实践","children":[]},{"level":2,"title":"七、 深入阅读","slug":"七、-深入阅读","link":"#七、-深入阅读","children":[]},{"level":2,"title":"八、总结","slug":"八、总结","link":"#八、总结","children":[]}],"git":{"createdTime":1744358690000,"updatedTime":1744358690000,"contributors":[{"name":"yanhui","email":"yhawsm@163.com","commits":1}]},"filePathRelative":"blogs/technology/decrypt-gitignore.md"}');export{x as comp,_ as data};
