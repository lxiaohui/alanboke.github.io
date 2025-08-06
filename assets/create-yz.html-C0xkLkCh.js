import{_ as t,c as p,b as i,a as s,d as a,e as l,r,o as c}from"./app-Bk2wEOlk.js";const o="/alanboke.github.io/assets/image-8x88DWvc.png",d={},u={href:"http://git.yzwill.cn/yz-web/admin-starter.git",target:"_blank",rel:"noopener noreferrer"},v={href:"http://git.yzwill.cn/yz-web/mobile-starter.git",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.tapd.cn/44062861/markdown_wikis/show/#1144062861001005601",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.tapd.cn/44062861/markdown_wikis/show/#1144062861001005756",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/vuejs/create-vue",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/codercup/create-unibest",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/uni-helper/create-uni",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/xun082/create-neat",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/vuejs/vue-cli",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/terkelg/prompts",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/minimistjs/minimist",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/marvinhagemeister/kolorist",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/eslint/eslint",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/toplenboren/simple-git-hooks",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/lint-staged/lint-staged",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/antfu-collective/bumpp",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/antfu/eslint-config",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/antfu",target:"_blank",rel:"noopener noreferrer"},T={href:"https://antfu.me/posts/why-not-prettier-zh",target:"_blank",rel:"noopener noreferrer"};function $(E,n){const e=r("ExternalLinkIcon");return c(),p("div",null,[n[40]||(n[40]=i('<h2 id="一、动机" tabindex="-1"><a class="header-anchor" href="#一、动机"><span>一、动机</span></a></h2><p>随着前端技术的快速发展，新项目启动的速度和灵活性成为了提升开发效率的关键因素之一。然而，在实际工作中，我们经常面临以下挑战：</p><ul><li><strong>重复劳动</strong>：每次新项目都需要从头开始设置环境，编写基础代码。</li><li><strong>一致性问题</strong>：不同项目间的基础配置不一致，导致维护成本增加。</li><li><strong>效率低下</strong>：手动配置和搭建环境耗时较长，影响整体开发进度和存在稳定性问题。</li></ul><p>相信你们都有过这样的经历：面对新项目时，要么从零开始搭建，要么从旧项目中删除无关的业务代码，保留初始配置，然后再开始新项目的开发。偶尔这样做还可以接受，但如果频繁进行这种操作，不仅令人厌烦，而且难以保证项目的纯净度——很容易出现漏删或误删的情况。</p><p>此外，由于团队成员的选择不同，也可能会导致采用多种技术栈的不同项目并存，这就增加了维护的复杂性。</p><p>当然也可能的一种情况是公司内部已经有了初始配置的项目模板。在这种情况下，我们可能会直接去找对应的 Git 仓库然后创建项目。这种方法确实可行，但在实际操作中可能会遇到一些问题：如果仓库正在迭代中，可能会导致模板不稳定或存在未知问题或导致比较困惑。或者如果分支说明不够清晰，可能会导致选择错误的模板或版本。或者如果存在多个仓库，需要在多个地方寻找合适的模板，增加了查找和管理的难度。</p><p>所以这时候就需要一个脚手架来为前端开发提速。</p><h2 id="二、目标" tabindex="-1"><a class="header-anchor" href="#二、目标"><span>二、目标</span></a></h2><p>为了解决上述问题，从而开发了 <code>create-yz</code> 轻量级脚手架工具，通过执行脚手架的命令就可以快速的搭建前端项目，让开发者专注于核心的业务开发。 通过 <code>create-yz</code> 希望能够为前端开发团队带来更高的生产力和更好的开发体验：</p><ul><li><strong>简化项目启动</strong>：通过提供与目前团队适配、标准化的配置和模板，让项目启动变得更加简单快捷。</li><li><strong>团队提效</strong>：减少重复工作，使得团队成员能够更快地投入到核心业务逻辑的开发中。</li><li><strong>保证一致性</strong>：确保所有项目都遵循相同的规范和约定，降低后期维护的成本。</li><li><strong>技术沉淀</strong>：通过对以往业务和功能的总结与提炼，将公共组件和常用方法进行沉淀，为新项目提供了更多可复用的能力，提升开发效率和项目的质量。</li></ul><h2 id="三、核心" tabindex="-1"><a class="header-anchor" href="#三、核心"><span>三、核心</span></a></h2><h3 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍"><span>1. 介绍</span></a></h3><p>脚手架本质上是一个工具，其目的是帮助我们摆脱构建工程时的<strong>重复性</strong>工作，尤其是在工程具有一定的<strong>通用性</strong>时，脚手架的重要性尤为突出。它使我们能够通过一行简单的命令快速初始化整个项目，无需费心费力地配置环境、安装依赖或解决依赖冲突等问题。</p><p>提到“脚手架”（Scaffold）这个词，相信你并不陌生。它源自建筑行业的术语，指的是为了保证施工过程顺利而搭建的工作平台，为工人们在各个楼层施工提供了必要的支撑和便利。</p><p>而在软件开发领域，脚手架是指通过各种工具来生成项目基础代码的技术。通过脚手架工具生成后的代码，通常已包含了项目开发流程中所需的工作目录内的通用基础设施，使开发者可以方便地将注意力集中到业务开发本身。</p><h3 id="_2-需求" tabindex="-1"><a class="header-anchor" href="#_2-需求"><span>2. 需求</span></a></h3>',16)),s("p",null,[n[4]||(n[4]=a("目前搭建了两个前端启动模板：")),s("a",u,[n[0]||(n[0]=a("admin-starter")),l(e)]),n[5]||(n[5]=a("、")),s("a",v,[n[1]||(n[1]=a("mobile-starter")),l(e)]),n[6]||(n[6]=a("，分别对应着中后台管理系统和移动端应用的启动模板（介绍文章：")),s("a",m,[n[2]||(n[2]=a("admin-starter-wiki")),l(e)]),n[7]||(n[7]=a("、")),s("a",b,[n[3]||(n[3]=a("mobile-starter-wiki")),l(e)]),n[8]||(n[8]=a("）"))]),n[41]||(n[41]=i('<p>基于此，第一个版本的脚手架功能需求比较简单，大致为：</p><ol><li>用户输入脚手架命令，准备创建项目。</li><li>脚手架解析用户命令，并显示交互式问题，询问用户创建项目的名称和模板。</li><li>用户填写项目名称和选择对应启动模板。</li><li>脚手架根据用户的选择来创建项目和下载模板对应 Git 仓库代码。</li></ol><p>解析成开发需求就是：</p><ol><li>创建并声明一个脚手架命令，并发布的 NPM 上</li><li>对用户输入的脚手架命令的参数进行解析</li><li>在命令行上显示交互问题和获取用户的反馈</li><li>根据最终结果，来创建新目录和拉取对应代码到目录中</li></ol><p><img src="'+o+'" alt="alt text"></p><h3 id="_3-参考项目" tabindex="-1"><a class="header-anchor" href="#_3-参考项目"><span>3. 参考项目</span></a></h3><p>参考现有的一些优秀项目：</p>',7)),s("ul",null,[s("li",null,[s("a",g,[n[9]||(n[9]=a("create-vue")),l(e)])]),s("li",null,[s("a",k,[n[10]||(n[10]=a("create-unibest")),l(e)])]),s("li",null,[s("a",h,[n[11]||(n[11]=a("create-uni")),l(e)])]),s("li",null,[s("a",f,[n[12]||(n[12]=a("create-neat")),l(e)])]),s("li",null,[s("a",y,[n[13]||(n[13]=a("vue-cli")),l(e)])])]),n[42]||(n[42]=i(`<h3 id="_4-实现" tabindex="-1"><a class="header-anchor" href="#_4-实现"><span>4. 实现</span></a></h3><h4 id="_4-1-项目目录" tabindex="-1"><a class="header-anchor" href="#_4-1-项目目录"><span>4.1. 项目目录</span></a></h4><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line">create-yz                      </span>
<span class="line">├─ dist                        </span>
<span class="line">│  └─ outfile.cjs              # 打包后的文件</span>
<span class="line">├─ scripts                     # 脚本</span>
<span class="line">│  └─ build.js                 # 打包脚本</span>
<span class="line">├─ src                         # 源码</span>
<span class="line">│  ├─ question                 # 交互问题</span>
<span class="line">│  │  ├─ template              # 模板</span>
<span class="line">│  │  │  ├─ index.ts           # 模板交互问题</span>
<span class="line">│  │  │  ├─ templateData.ts    # 模板数据</span>
<span class="line">│  │  │  └─ type.d.ts          # 类型声明</span>
<span class="line">│  │  ├─ file.ts               # 文件覆盖的交互问题</span>
<span class="line">│  │  ├─ index.ts              # 交互问题处理</span>
<span class="line">│  │  └─ name.ts               # 文件名交互问题</span>
<span class="line">│  ├─ types                    # 类型声明</span>
<span class="line">│  │  └─ figures.d.ts          # prompts figures 类型声明</span>
<span class="line">│  ├─ utils                    # 工具函数</span>
<span class="line">│  │  ├─ banners.ts            # 头部信息 console.log</span>
<span class="line">│  │  ├─ canSkipEmptying.ts    # 检查是否可以跳过清空目录</span>
<span class="line">│  │  ├─ cloneRepo.ts          # 克隆仓库</span>
<span class="line">│  │  ├─ directoryTraverse.ts  # 遍历目录</span>
<span class="line">│  │  ├─ emptyDir.ts           # 清空目录</span>
<span class="line">│  │  ├─ getCommand.ts         # 获取命令</span>
<span class="line">│  │  ├─ index.ts              # 工具函数处理</span>
<span class="line">│  │  ├─ loading.ts            # 命令行 loading</span>
<span class="line">│  │  ├─ printFinish.ts        # 打印结束信息</span>
<span class="line">│  │  └─ setPackageName.ts     # 设置 package.json name</span>
<span class="line">│  └─ index.ts                 # 主入口</span>
<span class="line">├─ commitlint.config.js        # commitlint 配置</span>
<span class="line">├─ eslint.config.js            # eslint 配置</span>
<span class="line">├─ LICENSE                     # 开源协议</span>
<span class="line">├─ package.json                # 项目信息</span>
<span class="line">├─ pnpm-lock.yaml              # 依赖信息</span>
<span class="line">├─ README.md                   # 项目说明</span>
<span class="line">└─ tsconfig.json               # tsconfig 配置</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-实现流程" tabindex="-1"><a class="header-anchor" href="#_4-2-实现流程"><span>4.2. 实现流程</span></a></h4><ul><li><strong>(1) 定义主入口函数，并初始化</strong></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// src/index.ts</span>
<span class="line">#!/usr/bin/env node</span>
<span class="line">function init() {</span>
<span class="line">	// 核心实现</span>
<span class="line">	...</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">init().catch((e) =&gt; {</span>
<span class="line">  loading.fail(\`\${bold(&#39;模板创建失败！&#39;)}\`)</span>
<span class="line">  console.error(e)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在脚手架入口文件的顶部，添加 <code>#!/usr/bin/env node</code>，说明是可执行脚本，并通过用户系统的环境变量中找 node 的执行程序。</p><ul><li><strong>(2) 通过 <code>minimist</code> 解析命令行参数</strong></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function init() {</span>
<span class="line">	const argv = minimist(process.argv.slice(2), {</span>
<span class="line">    // 设置模板类型的别名，方便使用短选项</span>
<span class="line">    alias: {</span>
<span class="line">      templateType: [&#39;t&#39;],</span>
<span class="line">      force: [&#39;f&#39;],</span>
<span class="line">    },</span>
<span class="line">    string: [&#39;_&#39;],</span>
<span class="line">  })</span>
<span class="line">  ...</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前支持 templateType 和 force 参数使用，分别是作用于指定模板和强制覆盖重名文件夹的参数，并支持使用对应别名简写参数解析，如 <code>--t xxx</code> 或 <code>-f</code>。</p><ul><li><strong>(3) 根据命令行参数，判断是否需要添加交互问题</strong> 主动发起一个交互式问题异步调用，并把用户的反馈赋值给 result。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// src/index.ts</span>
<span class="line">function init() {</span>
<span class="line">	...</span>
<span class="line">	try {</span>
<span class="line">		// 问题交互</span>
<span class="line">		result = await question(argv)</span>
<span class="line">	 }</span>
<span class="line">	 catch (cancelled) {</span>
<span class="line">		// eslint-disable-next-line no-console </span>
<span class="line">		console.log((&lt;{ message: string }&gt;cancelled).message)</span>
<span class="line">		process.exit(1)</span>
<span class="line">	 }</span>
<span class="line">	 ...</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这里使用了 <code>// eslint-disable-next-line no-console</code>，是因为开启了 eslint 的 no-console 配置，对 console 的使用进行警告，这样做是因为在脚手架使用过程中，<strong>避免不必要的 console 信息出现在用户交互中</strong>。也许是有时候调试忘记删除了，造成用户体验不佳。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// src/question/index.ts</span>
<span class="line">export async function question(argv: ParsedArgs) {</span>
<span class="line">  const questions = []</span>
<span class="line">  const pName = argv._[0]</span>
<span class="line"></span>
<span class="line">  // 如果命令行参数中没有提供项目名，则添加一个项目名的问题</span>
<span class="line">  if (!pName) {</span>
<span class="line">    questions.push(...projectName())</span>
<span class="line">  }</span>
<span class="line">  // 如果存在项目名称，则判断是否已存在相同文件名，是则添加一个是否文件覆盖的问题</span>
<span class="line">  else if (!canSkipEmptying(pName) &amp;&amp; !argv?.f) {</span>
<span class="line">    questions.push(...filePrompt(pName))</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  // 如果命令行参数中没有提供模板，则添加一个模板选择的问题</span>
<span class="line">  if (!argv?.t || argv?.t === true) {</span>
<span class="line">    questions.push(template())</span>
<span class="line">  }</span>
<span class="line">  // 定义一个取消操作时的回调函数，用于抛出异常终止程序</span>
<span class="line">  const onCancel = () =&gt; {</span>
<span class="line">    throw new Error(\`\${red(figures.cross)} \${bold(&#39;操作已取消&#39;)}\`)</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  // 使用 prompts 库提出问题，并等待用户输入答案</span>
<span class="line">  const answers = await prompts(questions, { onCancel })</span>
<span class="line"></span>
<span class="line">  return answers</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 question 方法中，通过对用户输入的命令行参数来判断是否需要添加交互问题数据，并使用 <code>prompts</code> 来提出交互式问题，等待用户交互，并返回反馈结果。</p><ul><li><strong>(4) 根据命令行参数和用户反馈结果，得到最终参数</strong></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">...</span>
<span class="line">const { </span>
<span class="line">	projectName = argv._[0],</span>
<span class="line">	shouldOverwrite = argv.f,</span>
<span class="line">	templateType = templateList.find(item =&gt; item.value.type === argv.t).value</span>
<span class="line">} = result</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>(5) 创建目录</strong> 使用 <code>import { existsSync, mkdirSync } from &#39;node:fs&#39;</code> 方法来根据用户定义的项目名称判断是否重名需要清空，并创建项目目录。</p></li><li><p><strong>(6) 拉取仓库代码</strong> 根据用户选择的模板对应的仓库地址，利用 <code>import { exec } from &#39;node:child_process&#39;</code> 方法来执行克隆仓库代码操作：</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">...</span>
<span class="line">const execStr = \`git clone \${url} \${localPath} \${branch ? \`-b \${branch}\` : &#39;&#39;}\`</span>
<span class="line">exec(execStr, async (error) =&gt; {</span>
<span class="line">	if (error) {</span>
<span class="line">	  console.error(\`\${red(&#39;exec error:&#39;)} \${error}\`)</span>
<span class="line">	  reject(error)</span>
<span class="line">	  return</span>
<span class="line">	}</span>
<span class="line">	try {</span>
<span class="line">	  await removeGitFolder(localPath)</span>
<span class="line">	  resolve()</span>
<span class="line">	} catch (error) {</span>
<span class="line">	  reject(error)</span>
<span class="line">	}</span>
<span class="line">})</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>(7) 处理项目代码</strong> 使用克隆的方法拉取代码后，代码中会存在 .git 文件需要删除以及 package.json 的 name 需要修改。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import { existsSync, rmdirSync, unlinkSync,readFileSync, writeFileSync } from &#39;node:fs&#39;</span>
<span class="line">import { postOrderDirectoryTraverse } from &#39;./directoryTraverse&#39;</span>
<span class="line">import { join } from &#39;node:path&#39;</span>
<span class="line"></span>
<span class="line">export function emptyDir(dir: string) {</span>
<span class="line">  if (!existsSync(dir))</span>
<span class="line">    return</span>
<span class="line">  postOrderDirectoryTraverse(</span>
<span class="line">    dir,</span>
<span class="line">    // 当遍历到目录时，使用 rmdirSync 立即删除该目录</span>
<span class="line">    dir =&gt; rmdirSync(dir),</span>
<span class="line">    // 当遍历到文件时，使用 unlinkSync 立即删除该文件</span>
<span class="line">    file =&gt; unlinkSync(file),</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function replaceProjectName(root: string, name: string) {</span>
<span class="line">  const projectName = name.toLocaleLowerCase().replace(/\\s/g, &#39;-&#39;)</span>
<span class="line">  const pkgPath = join(root, &#39;package.json&#39;)</span>
<span class="line">  const fileContent = JSON.parse(readFileSync(pkgPath, &#39;utf8&#39;))</span>
<span class="line"></span>
<span class="line">  // 更新 package.json 中的项目名称</span>
<span class="line">  fileContent.name = projectName</span>
<span class="line"></span>
<span class="line">  writeFileSync(pkgPath, JSON.stringify(fileContent, null, 2))</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-使用流程" tabindex="-1"><a class="header-anchor" href="#_5-使用流程"><span>5. 使用流程</span></a></h3><h4 id="_5-1-使用已发布的-npm-包" tabindex="-1"><a class="header-anchor" href="#_5-1-使用已发布的-npm-包"><span>5.1. 使用已发布的 NPM 包</span></a></h4><blockquote><p>建议添加上标记名（@latest），否则可能会解析到缓存的过时软件包版本。</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 使用 pnpm </span></span>
<span class="line"><span class="token function">pnpm</span> create yz@latest</span>
<span class="line"><span class="token function">pnpm</span> create yz <span class="token operator">&lt;</span>项目名称<span class="token operator">&gt;</span></span>
<span class="line"><span class="token function">pnpm</span> create yz <span class="token operator">&lt;</span>项目名称<span class="token operator">&gt;</span> <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>模板名<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或使用 npm</span></span>
<span class="line"><span class="token function">npm</span> create yz@latest my-project <span class="token parameter variable">-t</span> mobile</span>
<span class="line"><span class="token function">npm</span> init yz@latest my-project <span class="token parameter variable">-t</span> admin</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或全局安装</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> create-yz</span>
<span class="line">create-yz  my-project</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-使用私服-npm-包" tabindex="-1"><a class="header-anchor" href="#_5-2-使用私服-npm-包"><span>5.2. 使用私服 NPM 包</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 安装 nrm 管理 npm 源</span>
<span class="line">npm i -g nrm</span>
<span class="line"># 添加源</span>
<span class="line">nrm add yzNpm http://47.106.84.150:4873/</span>
<span class="line"># 切换源</span>
<span class="line">nrm use yzNpm</span>
<span class="line"></span>
<span class="line">pnpm create yz@latest</span>
<span class="line"></span>
<span class="line"># 或者在使用时指定源</span>
<span class="line">pnpm create yz@latest --registry=http://47.106.84.150:4873/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-开发流程" tabindex="-1"><a class="header-anchor" href="#_6-开发流程"><span>6. 开发流程</span></a></h3><h4 id="_6-1-node-开发调试" tabindex="-1"><a class="header-anchor" href="#_6-1-node-开发调试"><span>6.1. node 开发调试</span></a></h4><ul><li><code>pnpm build</code>，得到 <code>dist/outfile.cjs</code>（修改代码后需要重新构建）</li><li><code>pnpm dev</code> 运行 <code>node dist/outfile.cjs</code></li><li><code>pnpm dev my-project -t mobile -f</code> 可以直接在命令后加参数进行调试</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">pnpm</span> i</span>
<span class="line"><span class="token function">pnpm</span> build</span>
<span class="line"><span class="token function">pnpm</span> dev</span>
<span class="line"><span class="token comment"># 带参数执行命令</span></span>
<span class="line"><span class="token function">pnpm</span> dev my-project</span>
<span class="line"><span class="token function">pnpm</span> dev my-project <span class="token parameter variable">-t</span> mobile <span class="token parameter variable">-f</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-link-调试" tabindex="-1"><a class="header-anchor" href="#_6-2-link-调试"><span>6.2. link 调试</span></a></h4><ul><li>pnpm build，得到 <code>dist/outfile.cjs</code></li><li>执行 <code>npm link</code>（软链接），就能在本地执行 <code>bin</code> 中设定的指令进行实时的开发调试了</li><li>查看全局依赖 <code>npm ls -g --depth=0</code></li><li>删除本项目的全局依赖 <code>npm unlink create-yz -g</code></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">pnpm</span> i</span>
<span class="line"><span class="token function">pnpm</span> build</span>
<span class="line"><span class="token function">npm</span> <span class="token function">link</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">ls</span> <span class="token parameter variable">-g</span> <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">0</span></span>
<span class="line"><span class="token comment"># +-- create-yz@1.1.1 -&gt; D:\\repo\\cli\\create-yz # 已经 link 到当前项目</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 开发调试</span></span>
<span class="line">create-yz</span>
<span class="line">create-yz my-project</span>
<span class="line">create-yz xx <span class="token parameter variable">-t</span> admin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、其他" tabindex="-1"><a class="header-anchor" href="#四、其他"><span>四、其他</span></a></h2><h3 id="_1-loading" tabindex="-1"><a class="header-anchor" href="#_1-loading"><span>1. loading</span></a></h3><p>思考一下命令行中的 loading 加载状态怎么实现？一般都是直接使用 Ora 库来实现，在这项目中则使用了精简后的版本：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// src/utils/loading.ts</span></span>
<span class="line"><span class="token keyword">import</span> process <span class="token keyword">from</span> <span class="token string">&#39;node:process&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> frames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;⠋&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;⠙&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;⠹&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;⠸&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;⠼&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;⠴&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;⠦&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;⠧&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;⠇&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;⠏&#39;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Ora</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> message<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token keyword">private</span> interval<span class="token operator">:</span> NodeJS<span class="token punctuation">.</span>Timeout <span class="token operator">|</span> <span class="token keyword">null</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message</span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Ora <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;\\r&#39;</span> <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>frames<span class="token punctuation">[</span>i <span class="token operator">%</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span></span>
<span class="line">      i<span class="token operator">++</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ora</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Ora</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码非常简单，定义了一个 <code>Ora</code> 类，并通过工厂函数，返回 Ora 类实例，而其核心逻辑就是动画帧（逐步的加载状态）从 <code>frames</code> 数组中循环选取，使用 <code>setInterval</code> 每隔 100 毫秒利用 <code>process.stdout.write</code> 更新命令行输出 ，从而实现动画的加载效果，当然你也可以尝试不同的字符来实现不一样的动画效果。</p><h3 id="_2-相关工具" tabindex="-1"><a class="header-anchor" href="#_2-相关工具"><span>2. 相关工具</span></a></h3><p>简单介绍此脚手架工具使用到的依赖：</p>`,41)),s("ul",null,[s("li",null,[s("a",x,[n[14]||(n[14]=a("prompts")),l(e)]),n[15]||(n[15]=a("：轻量级的、交互式的命令行提示"))]),s("li",null,[s("a",w,[n[16]||(n[16]=a("minimist")),l(e)]),n[17]||(n[17]=a("：轻量级的解析命令行参数"))]),s("li",null,[s("a",j,[n[18]||(n[18]=a("kolorist")),l(e)]),n[19]||(n[19]=a("：轻量级的使命令行输出带有色彩"))]),s("li",null,[s("a",_,[n[20]||(n[20]=a("commitlint")),l(e)]),n[21]||(n[21]=a("：规范化 Git 提交信息工具"))]),s("li",null,[s("a",z,[n[22]||(n[22]=a("eslint")),l(e)]),n[23]||(n[23]=a(" ：静态代码分析工具"))]),s("li",null,[s("a",N,[n[24]||(n[24]=a("simple-git-hooks")),l(e)]),n[25]||(n[25]=a("：轻量的 Git 钩子管理工具"))]),s("li",null,[s("a",S,[n[26]||(n[26]=a("lint-staged")),l(e)]),n[27]||(n[27]=a("：在 Git 暂存文件(被 git add 的文件)上运行 linters，确保提交的代码符合规范"))]),s("li",null,[s("a",q,[n[28]||(n[28]=a("esbuild")),l(e)]),n[29]||(n[29]=a("：极速 JavaScript 现代构建工具"))]),s("li",null,[s("a",P,[n[30]||(n[30]=a("bumpp")),l(e)]),n[31]||(n[31]=a("：交互式简洁高效的版本管理命令行工具"))]),s("li",null,[s("a",O,[n[32]||(n[32]=a("@antfu/eslint-config")),l(e)]),n[35]||(n[35]=a("：")),s("a",M,[n[33]||(n[33]=a("Anthony Fu")),l(e)]),n[36]||(n[36]=a(' 开源的 eslint 预设配置，开箱即用 。值得注意的是这配置是"')),n[37]||(n[37]=s("strong",null,"旨在在没有 Prettier 的情况下独立使用",-1)),n[38]||(n[38]=a('"（感兴趣的可以了解下：')),s("a",T,[n[34]||(n[34]=a("为什么我不使用 Prettier")),l(e)]),n[39]||(n[39]=a("）"))])]),n[43]||(n[43]=i(`<h3 id="_3-私有-npm-库-verdaccio" tabindex="-1"><a class="header-anchor" href="#_3-私有-npm-库-verdaccio"><span>3. 私有 NPM 库 - Verdaccio</span></a></h3><p>前端团队在开发过程中经常会遇到需要沉淀一套通用的 UI 库、工具类和脚手架的情况。这些组件可能不允许在公网发布，或不适合开源，或为了确保项目应用的稳定性等因素限制，内网搭建 NPM 私有库的需求应运而生。通过 NPM 私有库管理这些组件，可以更好地控制访问权限，确保团队内部协作的安全性，提高开发效率，并完善前端建设。 首选 <strong>verdaccio</strong> 来搭建私有 NPM 库，搭建和部署的过程就不展开介绍了，相对比较简单，目前是部署地址是 <code>http://47.106.84.150:4873/</code>。</p><h3 id="_4-发布" tabindex="-1"><a class="header-anchor" href="#_4-发布"><span>4. 发布</span></a></h3><p>发布 NPM 包时，需要注意： - <code>package.json</code> 的 name 设置是否与线上其他 npm 包的名称重复，可以使用 npm search xxx 查询。 - <code>package.json</code> 的 version 版本必须要比上一次发布的版本要大，可以使用 <code>npm run release</code> （bumpp）进行版本管理 - 脚手架的使用命令定义，即 bin 属性的设置，如 <code>bin: {&quot;create-yz&quot;: &quot;node dist/outfile.cjs&quot;}</code>，也就是定义用户使用的脚手架指令为 create-yz。 - 为确保发布的版本都是最新的内容，需要发布前进行构建，运行 <code>pnpm build</code> 生成 <strong>dist/oufile.cjs</strong>，当然也可以在 package.json 的 scripts 中添加 <code>&quot;prepublishOnly&quot;: &quot;pnpm build&quot;</code> 脚本，这样每次发布的都会构建最新的文件。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 构建</span></span>
<span class="line"><span class="token function">pnpm</span> build</span>
<span class="line"><span class="token comment"># 登录授权</span></span>
<span class="line"><span class="token function">npm</span> login <span class="token comment"># 可以使用 npm whoami 查看当前登录信息</span></span>
<span class="line"><span class="token comment"># 发布</span></span>
<span class="line"><span class="token function">npm</span> publish <span class="token parameter variable">--access</span><span class="token operator">=</span>public</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：如果发布到 npm 时，出现超时或一直处于加载中亦或者发布不成功等问题，可以排查一下：</p><ol><li>npm 源是否正确设置，执行 <code>npm config get registry</code> 查看当前设置，或使用 nrm use taobao 切换正确的 npm 源，或检查是否项目中 .npmrc 文件的设置（如<code>registry=https://registry.npmjs.org/</code>）。</li><li>是否有使用科学上网，因为 npmjs 属于国外服务器。</li><li>检查 npm 代理是否正确设置，如 <code>npm config set proxy http://127.0.0.1:10809</code>，<code>npm config set https-proxy http://127.0.0.1:10809</code>，10809 为实际代理的端口。（恢复： <code>npm config set proxy null</code>，<code>npm config set https-proxy null</code>）</li></ol></blockquote><h2 id="五、规划" tabindex="-1"><a class="header-anchor" href="#五、规划"><span>五、<strong>规划</strong></span></a></h2><p>目前脚手架的功能比较简单，未来还会持续地进行迭代和优化：</p><ul><li>修改代码，支持自动构建最新的文件</li><li>模板选择支持版本管理，可以根据 Git 仓库获取最新的分支情况来选择</li><li>丰富模板内容，如提供功能和组件示例的更多模板、提供可选的业务功能等</li><li>脚手架本地版本号对比，提示安装最新版本</li><li>添加一些辅助功能，如 <ul><li>选择包管理器</li><li>初始化 git</li><li>脚手架参数提示 --help</li><li>增加项目简介、项目作者等关键信息可选填写</li></ul></li><li>实现插件化，可以自由的进行扩展。</li><li>等等</li></ul><h2 id="六、总结" tabindex="-1"><a class="header-anchor" href="#六、总结"><span>六、总结</span></a></h2><p>一开始我们说明了脚手架的动机和目标，create-yz 是一个轻量级的脚手架工具，旨在简化项目启动流程，减少重复工作。该工具通过标准化配置和模板，提高团队协作的一致性和降低维护成本，快速简单地搭建前端项目，让开发者专注于核心业务。</p><p>然后阐述了当前实现的脚手架 create-yz 功能，提供两个前端启动模板，适用于中后台管理和移动端应用，并通过简单命令初始化项目，减少重复配置工作。</p><p>同时介绍了脚手架的实现流程，通过解析命令行参数、用户交互反馈和创建目录并拉取模板等流程，完成项目的自动化创建。</p><p>接着介绍了脚手架的 loading 实现和使用到的第三方工具，以及私有 NPM 库 - Verdaccio 的搭建，并在最后对脚手架展开未来规划。</p><p>搭建一个脚手架，能很好地锻炼到开发者的 nodejs 掌握、工程化能力、以及工具服务的设计能力，是前端进阶一个好机会，如果你还没试过，建议你也动手尝试一下，当然如果你有好的建议或想法，欢迎一起共建~</p>`,15))])}const D=t(d,[["render",$]]),F=JSON.parse('{"path":"/blogs/share/yz-cli/create-yz.html","title":"前端开发提速：create-yz 轻量级脚手架工具","lang":"en-US","frontmatter":{"title":"前端开发提速：create-yz 轻量级脚手架工具","date":"2024-08-21","categories":["分享沉淀"],"tags":["脚手架"],"author":"Alan","publish":true},"headers":[{"level":2,"title":"一、动机","slug":"一、动机","link":"#一、动机","children":[]},{"level":2,"title":"二、目标","slug":"二、目标","link":"#二、目标","children":[]},{"level":2,"title":"三、核心","slug":"三、核心","link":"#三、核心","children":[{"level":3,"title":"1. 介绍","slug":"_1-介绍","link":"#_1-介绍","children":[]},{"level":3,"title":"2. 需求","slug":"_2-需求","link":"#_2-需求","children":[]},{"level":3,"title":"3. 参考项目","slug":"_3-参考项目","link":"#_3-参考项目","children":[]},{"level":3,"title":"4. 实现","slug":"_4-实现","link":"#_4-实现","children":[]},{"level":3,"title":"5. 使用流程","slug":"_5-使用流程","link":"#_5-使用流程","children":[]},{"level":3,"title":"6. 开发流程","slug":"_6-开发流程","link":"#_6-开发流程","children":[]}]},{"level":2,"title":"四、其他","slug":"四、其他","link":"#四、其他","children":[{"level":3,"title":"1. loading","slug":"_1-loading","link":"#_1-loading","children":[]},{"level":3,"title":"2. 相关工具","slug":"_2-相关工具","link":"#_2-相关工具","children":[]},{"level":3,"title":"3. 私有 NPM 库 - Verdaccio","slug":"_3-私有-npm-库-verdaccio","link":"#_3-私有-npm-库-verdaccio","children":[]},{"level":3,"title":"4. 发布","slug":"_4-发布","link":"#_4-发布","children":[]}]},{"level":2,"title":"五、规划","slug":"五、规划","link":"#五、规划","children":[]},{"level":2,"title":"六、总结","slug":"六、总结","link":"#六、总结","children":[]}],"git":{"createdTime":1744358690000,"updatedTime":1744358690000,"contributors":[{"name":"yanhui","email":"yhawsm@163.com","commits":1}]},"filePathRelative":"blogs/share/yz-cli/create-yz.md"}');export{D as comp,F as data};
