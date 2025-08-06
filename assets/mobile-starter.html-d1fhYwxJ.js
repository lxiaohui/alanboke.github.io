import{_ as t,c as p,b as l,a as s,d as e,e as i,r,o as d}from"./app-SKA2uT19.js";const o="/assets/image-ChuvGOnb.png",c="/assets/image-1-DgEt-uS9.png",u="/assets/c7de-CZ93QxrJ.gif",v="/assets/image-2-kagyuw7w.png",m="/assets/image-3-85MY7SLk.png",g={},b={style:{"text-align":"left"}},h={href:"https://github.com/codercup/unibest",target:"_blank",rel:"noopener noreferrer"},k={style:{"text-align":"left"}},f={href:"https://github.com/ttk-cli/uni-vue3-vite-ts-pinia",target:"_blank",rel:"noopener noreferrer"},x={style:{"text-align":"left"}},y={href:"https://github.com/viarotel-org/vite-uniapp-template",target:"_blank",rel:"noopener noreferrer"},q={style:{"text-align":"left"}},j={href:"https://github.com/uni-helper/vitesse-uni-app",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"left"}},C={href:"https://github.com/Ares-Chang/uni-vitesse",target:"_blank",rel:"noopener noreferrer"},U={style:{"text-align":"left"}},w={href:"https://github.com/ATQQ/uni-vue3-ts-template",target:"_blank",rel:"noopener noreferrer"},z={id:"unibest",tabindex:"-1"},I={class:"header-anchor",href:"#unibest"},E={href:"https://github.com/codercup/unibest",target:"_blank",rel:"noopener noreferrer"},V={href:"https://codercup.github.io/unibest-docs/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/codercup/hello-unibest",target:"_blank",rel:"noopener noreferrer"},A={href:"https://wot-design-uni.netlify.app/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://codercup.github.io/unibest-docs/base/ui/ui",target:"_blank",rel:"noopener noreferrer"},T={id:"引入-unplugin-vue-components",tabindex:"-1"},N={class:"header-anchor",href:"#引入-unplugin-vue-components"},R={href:"https://github.com/unplugin/unplugin-vue-components",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/uni-helper/vite-plugin-uni-pages",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/uni-helper/vite-plugin-uni-layouts",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/uni-helper/vite-plugin-uni-pages",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/uni-helper/vite-plugin-uni-pages",target:"_blank",rel:"noopener noreferrer"},O={href:"https://unocss.dev/interactive/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://www.tapd.cn/44062861/markdown_wikis/show/#1144062861001005415",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md",target:"_blank",rel:"noopener noreferrer"};function F(K,n){const a=r("ExternalLinkIcon");return d(),p("div",null,[n[71]||(n[71]=l('<h2 id="动机" tabindex="-1"><a class="header-anchor" href="#动机"><span>动机</span></a></h2><ul><li><strong>提高项目启动效率</strong>：旨在节省新项目启动阶段在配置上的时间浪费，加快项目进展，提高整体开发效率。</li><li><strong>倾向于新技术与框架</strong>：拥抱新技术或框架，结合主流插件并整合现代开发架构，以提高开发效率和项目质量。</li><li><strong>统一技术栈，规范开发流程</strong>：统一技术栈，降低团队成员跨技术栈的学习成本，帮助保持团队开发规范一致性，并提高项目的可维护性和扩展性。</li></ul><h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标</span></a></h2><ul><li><strong>技术前沿性</strong>：拥抱新技术，确保系统具备较长期的发展空间，同时能够满足未来需求的变化。</li><li><strong>基础功能完备性</strong>：确保搭建的启动模板能够满足移动端项目的基本开发功能需求，如通用的组件封装、常用的工具提供等。</li><li><strong>快速上手，团队匹配度高</strong>：优先考虑团队已有的技术栈和技能，能够使团队快速上手，减少学习成本和上手时间，以及后期维护人员和开发成本。</li><li><strong>避免过度设计，一切从简</strong>：在技术选型和搭建过程中，避免过度设计和过度复杂的架构，以简化开发流程，提高开发效率。</li><li><strong>灵活性高和可扩展性强</strong>：确保所选技术栈具有良好的灵活性和可扩展性，降低后续系统升级和扩展的复杂度。</li><li><strong>!!#000000 拥有跨端能力!!</strong>：实现一套代码生成跨平台多端应用，让启动模板满足更广泛的项目需求和场景（结合团队情况，此模板的侧重点是 H5 和小程序端）。</li></ul><h2 id="候选技术列表" tabindex="-1"><a class="header-anchor" href="#候选技术列表"><span>候选技术列表</span></a></h2><p>针对上述技术选型的目标，以及结合团队情况和业务情况，可以基本确定技术选型的方向：</p><ol><li>选择 <strong>Vue</strong> 而不是 <strong>React</strong>：与团队目前的技术栈匹配度高，国内 vue 使用率更高，起手成本低，维护成本或后期因人员变动招人成本更低。</li><li>跨端的技术框架，国内主流的选择 uniapp 和 taro 、flutter，相比之下，很明显首选 <strong>uniapp</strong>。</li><li>采用 <strong>纯 CLI 方式</strong>开发，摆脱 uniapp 推荐的 HBuilderX 编辑器限制，自由选择编辑器，提升开发灵活性与效率。</li><li>选择<strong>现有启动模板</strong>，而不是<strong>从零到一</strong>搭建：节约时间成本，尽可能的利用主流技术红利，采用主流的开源方案，避免重复造轮子。</li><li>尽可能使用主流技术：Vite 5、Vue 3、TypeScript、Pinia、各种 Lint 等。</li></ol><p>经过搜寻了一番，目前参加对比的启动模板包括：</p>',8)),s("table",null,[n[18]||(n[18]=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}},"2024-05-24"),s("th",{style:{"text-align":"center"}},"github star"),s("th",{style:{"text-align":"center"}},"github fork")])],-1)),s("tbody",null,[s("tr",null,[s("td",b,[s("strong",null,[s("a",h,[n[0]||(n[0]=e("unibest")),i(a)])])]),n[1]||(n[1]=s("td",{style:{"text-align":"center"}},"1.4k",-1)),n[2]||(n[2]=s("td",{style:{"text-align":"center"}},"117",-1))]),s("tr",null,[s("td",k,[s("a",f,[n[3]||(n[3]=e("uni-vue3-vite-ts-pinia")),i(a)])]),n[4]||(n[4]=s("td",{style:{"text-align":"center"}},"352",-1)),n[5]||(n[5]=s("td",{style:{"text-align":"center"}},"100",-1))]),s("tr",null,[s("td",x,[s("a",y,[n[6]||(n[6]=e("vite-uniapp-template")),i(a)])]),n[7]||(n[7]=s("td",{style:{"text-align":"center"}},"285",-1)),n[8]||(n[8]=s("td",{style:{"text-align":"center"}},"55",-1))]),s("tr",null,[s("td",q,[s("a",j,[n[9]||(n[9]=e("vitesse-uni-app")),i(a)])]),n[10]||(n[10]=s("td",{style:{"text-align":"center"}},"272",-1)),n[11]||(n[11]=s("td",{style:{"text-align":"center"}},"28",-1))]),s("tr",null,[s("td",S,[s("a",C,[n[12]||(n[12]=e("uni-vitesse")),i(a)])]),n[13]||(n[13]=s("td",{style:{"text-align":"center"}},"262",-1)),n[14]||(n[14]=s("td",{style:{"text-align":"center"}},"49",-1))]),s("tr",null,[s("td",U,[s("a",w,[n[15]||(n[15]=e("uni-vue3-ts-template")),i(a)])]),n[16]||(n[16]=s("td",{style:{"text-align":"center"}},"246",-1)),n[17]||(n[17]=s("td",{style:{"text-align":"center"}},"65",-1))])])]),n[72]||(n[72]=l('<h2 id="技术评估标准" tabindex="-1"><a class="header-anchor" href="#技术评估标准"><span>技术评估标准</span></a></h2><p>根据技术评估的指标，评估不同技术的优劣势。 技术评估的指标包括但不限于：</p><ul><li><strong>技术前沿性</strong>：是否使用采用主流的开源方案、技术方案</li><li><strong>社区支持</strong>：社区活跃程度和问题解决的效率</li><li><strong>更新迭代</strong>：更新迭代频率和更新内容</li><li><strong>代码组织</strong>：对代码结构的规范性和组织性</li><li><strong>文档质量</strong>：是否提供或拥有完善的文档资料</li><li><strong>工程化支持</strong>：对工程化开发（构建、打包、部署等）的支持程度</li><li><strong>学习曲线</strong>：前学习上手曲线和团队成员的熟悉程度</li><li><strong>业务匹配度</strong>：针对现有或未来的业务需求评估匹配程度</li><li><strong>页面加载速度</strong>：不同前端框架对页面加载速度的影响</li></ul><h2 id="技术分析" tabindex="-1"><a class="header-anchor" href="#技术分析"><span>技术分析</span></a></h2>',4)),s("h3",z,[s("a",I,[s("span",null,[s("a",E,[n[19]||(n[19]=e("unibest")),i(a)])])])]),n[73]||(n[73]=s("p",null,[e("从 github 上的数据看，unibest 有很大的优势。通过上手使用体验，整体方面都合适，确定选择了 unibest 作为启动模板。 "),s("strong",null,"详细分析"),e("：")],-1)),s("ol",null,[n[31]||(n[31]=s("li",null,[e("满足技术前沿性 "),s("img",{src:o,alt:"alt text"})],-1)),s("li",null,[n[21]||(n[21]=e("拥有较完善的文档资料(")),s("a",V,[n[20]||(n[20]=e("文档地址")),i(a)]),n[22]||(n[22]=e(") ")),n[23]||(n[23]=s("img",{src:c,alt:"alt text"},null,-1))]),s("li",null,[n[27]||(n[27]=e("基础功能相对完善，提供详细的 [demo 案例](")),s("a",D,[n[24]||(n[24]=e("hello-unibest")),i(a)]),n[28]||(n[28]=e("，对于模板的 UI 组件库 ")),s("a",A,[n[25]||(n[25]=e("Wot Design Uni")),i(a)]),n[29]||(n[29]=e(" 选型过程也有详细的说明（")),s("a",P,[n[26]||(n[26]=e("UI 库选型篇")),i(a)]),n[30]||(n[30]=e("）。"))]),n[32]||(n[32]=s("li",null,"开源热度相对较高，比较活跃。",-1)),n[33]||(n[33]=s("li",null,"整体封装实现简洁，可扩展性高，上手难度低。",-1)),n[34]||(n[34]=s("li",null,"......",-1))]),n[74]||(n[74]=l(`<h2 id="改造过程" tabindex="-1"><a class="header-anchor" href="#改造过程"><span>改造过程</span></a></h2><p>执行 unibest 脚手架 基于 base 分支创建项目</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">pnpm</span> create unibest yz-mobile-template <span class="token parameter variable">-b</span> base</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>对选型时对比一些模板项目和主流方案中，集其优点“缝合”到项目中，所以在脚手架生成的项目基础上，改动了如下内容：</p><h3 id="unocss-预设配置调整" tabindex="-1"><a class="header-anchor" href="#unocss-预设配置调整"><span><strong>UnoCSS 预设配置调整</strong></span></a></h3><p>由原来的小程序和非小程序预设配置，调整为统一使用 UnoCSS UniApp 预设 <code>@uni-helper/unocss-preset-uni</code>，原因是小程序和 H5 端表现的效果不一样，如 class 属性化使用。 调整前：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// uno.config.ts</span>
<span class="line">if (isMp) {</span>
<span class="line">  // 使用小程序预设</span>
<span class="line">  presets.push(presetApplet(), presetRemRpx())</span>
<span class="line">} else {</span>
<span class="line">  presets.push(</span>
<span class="line">    // 非小程序用官方预设</span>
<span class="line">    presetUno(),</span>
<span class="line">    // 支持css class属性化</span>
<span class="line">    presetAttributify(),</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调整后:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// uno.config.ts</span>
<span class="line">import { presetUni } from &quot;@uni-helper/unocss-preset-uni&quot;;</span>
<span class="line">export default defineConfig({</span>
<span class="line">  presets: [</span>
<span class="line">  	// ...</span>
<span class="line">    presetUni({ attributify: true })</span>
<span class="line">  ],</span>
<span class="line">  // ...</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="升级了-unocss-版本" tabindex="-1"><a class="header-anchor" href="#升级了-unocss-版本"><span><strong>升级了 UnoCSS 版本</strong></span></a></h3><p>为了体验更多的新特性，由原来的 &quot;^0.58.9&quot; 版本升级为 &quot;^0.60.2&quot; 版本，并调整了引用方式。 调整前：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// vite.config.ts</span>
<span class="line">import UnoCSS from &#39;unocss/vite&#39;;</span>
<span class="line">export default ({ command, mode }) =&gt; {</span>
<span class="line">	// ...</span>
<span class="line">	return defineConfig({</span>
<span class="line">		// ...</span>
<span class="line">		plugins: [</span>
<span class="line">		  // ...</span>
<span class="line">		  UnoCSS()</span>
<span class="line">		]</span>
<span class="line">	})</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调整后：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// vite.config.ts</span>
<span class="line">export default ({ command, mode }) =&gt; {</span>
<span class="line">	// 动态来导入不支持 cjs 的模块，unocss 0.59.x 及以上仅支持 ESM</span>
<span class="line">	const UnoCSS = await import(&quot;unocss/vite&quot;).then(i =&gt; i.default);</span>
<span class="line">	// ...</span>
<span class="line">	return defineConfig({</span>
<span class="line">		// ...</span>
<span class="line">		plugins: [</span>
<span class="line">		  // ...</span>
<span class="line">		  UnoCSS()</span>
<span class="line">		]</span>
<span class="line">	})</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)),s("h3",T,[s("a",N,[s("span",null,[s("strong",null,[n[36]||(n[36]=e("引入 ")),s("a",R,[n[35]||(n[35]=e("unplugin-vue-components")),i(a)])])])])]),n[75]||(n[75]=l(`<p>按需自动导入组件，无需手动 <strong>import</strong> 引入组件。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// vite.config.ts</span>
<span class="line">export default ({ command, mode }) =&gt; {</span>
<span class="line">	// ...</span>
<span class="line">	return defineConfig({</span>
<span class="line">		// ...</span>
<span class="line">		plugins: [</span>
<span class="line">		  /**</span>
<span class="line">		   * unplugin-vue-components 按需引入组件</span>
<span class="line">		   * 注意：需注册至 uni 之前，否则不会生效</span>
<span class="line">		   * @see https://github.com/antfu/vite-plugin-components</span>
<span class="line">		   */</span>
<span class="line">		  Components({</span>
<span class="line">			dts: &quot;src/types/components.d.ts&quot;,</span>
<span class="line">			dirs: [&quot;src/components&quot;]</span>
<span class="line">		  }),</span>
<span class="line">		]</span>
<span class="line">	})</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-optimizedeps-include-配置" tabindex="-1"><a class="header-anchor" href="#添加-optimizedeps-include-配置"><span><strong>添加 optimizeDeps.include 配置</strong></span></a></h3><p>在导航到另一个视图时，由于加载依赖而触发页面重新加载，开发起来十分不爽，如以下（或类似）日志（但不会发生在生产版本中）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[vite] ✨ new dependencies optimized: xxx</span>
<span class="line">[vite] ✨ optimized dependencies changed. reloading</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>optimizeDeps</strong> 主要用于优化项目的依赖项。具体来说，optimizeDeps 选项允许 Vite 在构建时对指定的依赖包进行<strong>预构建</strong>和优化，从而加快开发服务器的启动速度和构建过程。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// vite.config.ts</span>
<span class="line">export default ({ command, mode }) =&gt; {</span>
<span class="line">	// ...</span>
<span class="line">	return defineConfig({</span>
<span class="line">		// ...</span>
<span class="line">		optimizeDeps: {</span>
<span class="line">		  include: [&quot;wot-design-uni&quot;, &quot;weixin-js-sdk&quot;]</span>
<span class="line">		}</span>
<span class="line">	})</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入-vconsole-调试工具" tabindex="-1"><a class="header-anchor" href="#引入-vconsole-调试工具"><span><strong>引入 vconsole 调试工具</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// App.vue</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">// #ifdef H5</span>
<span class="line">import VConsole from &quot;vconsole&quot;;</span>
<span class="line">if (!import.meta.env.VITE_HIDE_VCONSOLE) {</span>
<span class="line">  const vConsole = new VConsole();</span>
<span class="line">}</span>
<span class="line">// #endif</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入-cz-git" tabindex="-1"><a class="header-anchor" href="#引入-cz-git"><span>**引入 cz-git **</span></a></h3><p>优雅的提交代码，输出标准格式的 Commitizen 适配器和 CLI。</p><ul><li>安装</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> cz-git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>添加 <strong>config</strong> 指定使用的适配器</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// package.json</span>
<span class="line">{</span>
<span class="line">	// ...</span>
<span class="line">	&quot;config&quot;: {</span>
<span class="line">		&quot;commitizen&quot;: {</span>
<span class="line">		  &quot;path&quot;: &quot;node_modules/cz-git&quot;</span>
<span class="line">		}</span>
<span class="line">	},</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加自定义配置</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// .commitlint.config.cjs</span>
<span class="line">/** @type {import(&#39;cz-git&#39;).UserConfig} */</span>
<span class="line">module.exports = {</span>
<span class="line">  // ...</span>
<span class="line">  rules: { ... },</span>
<span class="line">  prompt: {</span>
<span class="line">    useEmoji: true,</span>
<span class="line">    types: [</span>
<span class="line">      {</span>
<span class="line">        value: &quot;feat&quot;,</span>
<span class="line">        name: &quot;feat:       A new feature&quot;,</span>
<span class="line">        emoji: &quot;&quot;</span>
<span class="line">      },</span>
<span class="line">	  // ...</span>
<span class="line">    ],</span>
<span class="line">    // ...</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加命令</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// package.json</span>
<span class="line">{</span>
<span class="line">	// ...</span>
<span class="line">	&quot;scripts&quot;: {</span>
<span class="line">		// ...</span>
<span class="line">		&quot;commit&quot;: &quot;git add -A &amp;&amp; git-cz &amp;&amp; git pull --rebase &amp;&amp; git push&quot;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行命令 <code>pnpm commit</code> 就可以优雅的提交代码了 执行命令，就会得到如下类似效果（命令行提示信息）： <img src="`+u+`" alt="alt text"></li></ul><h3 id="封装请求返回格式" tabindex="-1"><a class="header-anchor" href="#封装请求返回格式"><span>封装请求返回格式</span></a></h3><p>封装请求统一处理异常，避免每次使用请求时，使用 try catch 包裹，处理成返回格式统一为** [ err , data ]**。 原理是利用 Promise 来处理返回的格式，无论成功与否，都约定返回一个数组，数组的第一个元素为错误对象或者 null (请求成功时)，数组的第二个元素为响应数据或 undefinded (请求失败时)。 处理请求：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// src\\utils\\http.ts</span>
<span class="line">export const http = &lt;T&gt;(options: TCustomRequestOptions) =&gt; {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    uni.request({</span>
<span class="line">	// ...</span>
<span class="line"> 	success(res) {</span>
<span class="line">		// ...</span>
<span class="line">		if (re.success) {</span>
<span class="line">			resolve([null, re.data]);</span>
<span class="line">	  	} else {</span>
<span class="line">			reject(res);</span>
<span class="line">	  	}</span>
<span class="line">      },</span>
<span class="line">      // 响应失败</span>
<span class="line">      fail(err) {</span>
<span class="line">        reject(err);</span>
<span class="line">      }</span>
<span class="line">    });</span>
<span class="line">  }).catch(err =&gt; [err]) as Promise&lt;THttpRes&lt;T&gt;&gt;;</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">const getData = async () =&gt; {</span>
<span class="line">  const [err, data] = await apiGetData();</span>
<span class="line">  if(err) return;</span>
<span class="line">  // ...</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求成功时：[ err , data ] 等同于** [ null , 响应数据 ]** 请求失败时：[ err , data ] 等同于 <strong>[ 错误信息对象 , undefinded ]</strong></p><h3 id="其他改动" tabindex="-1"><a class="header-anchor" href="#其他改动"><span><strong>其他改动</strong>：</span></a></h3><ul><li>完善 VSCode 配置文件 <ul><li>.vscode/extensions.json （同步 VSCode 扩展）</li><li>.vscode/setting.json （共享一致的编辑器配置）</li><li>.vscode/vue3.code-snippets （提供个性化的代码片段，快速插入常用代码块）</li></ul></li><li>调整相关配置文件，如 .editorconfig，.eslintrc.cjs，.gitignore，.prettierrc.cjs，uno.config.ts，env/ 等等</li><li>修改 README.md 文件</li><li>等等</li></ul><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">.</span></span>
<span class="line">├─ .husky                   <span class="token comment"># Husky 配置文件</span></span>
<span class="line">├─ .vscode                  <span class="token comment"># VSCode 推荐配置</span></span>
<span class="line">├─ <span class="token function">env</span>                      <span class="token comment"># vite 环境配置文件</span></span>
<span class="line">├─ shell                    <span class="token comment"># 脚本文件</span></span>
<span class="line">├─ src</span>
<span class="line">│ ├─ api                    <span class="token comment"># API 接口管理</span></span>
<span class="line">│ ├─ components             <span class="token comment"># 全局组件</span></span>
<span class="line">│ ├─ constants              <span class="token comment"># 常量定义</span></span>
<span class="line">│ ├─ enums                  <span class="token comment"># 项目常用枚举</span></span>
<span class="line">│ ├─ hooks                  <span class="token comment"># 常用 Hooks 封装</span></span>
<span class="line">│ ├─ interceptors           <span class="token comment"># 拦截器</span></span>
<span class="line">│ ├─ layouts                <span class="token comment"># 框架布局模块</span></span>
<span class="line">│ ├─ pages                  <span class="token comment"># 项目主包页面</span></span>
<span class="line">│ ├─ pages-sub              <span class="token comment"># 项目分包页面</span></span>
<span class="line">│ ├─ static                 <span class="token comment"># 静态资源文件</span></span>
<span class="line">│ ├─ store                  <span class="token comment"># 状态管理</span></span>
<span class="line">│ ├─ style                  <span class="token comment"># 全局样式文件</span></span>
<span class="line">│ ├─ types                  <span class="token comment"># 全局 ts 声明</span></span>
<span class="line">│ ├─ uni_modules            <span class="token comment"># uni_modules 插件</span></span>
<span class="line">│ ├─ utils                  <span class="token comment"># 常用工具</span></span>
<span class="line">│ ├─ App.vue                <span class="token comment"># 项目主组件</span></span>
<span class="line">│ ├─ main.ts                <span class="token comment"># 项目入口文件</span></span>
<span class="line">│ ├─ manifest.json          <span class="token comment"># uni-app 项目配置</span></span>
<span class="line">│ ├─ pages.json             <span class="token comment"># uni-app 页面配置</span></span>
<span class="line">│ └─ uni.scss               <span class="token comment"># 全局 scss 变量</span></span>
<span class="line">├─ .gitignore               <span class="token comment"># 忽略 git 提交</span></span>
<span class="line">├─ favicon.ico              <span class="token comment"># 项目图标</span></span>
<span class="line">├─ index.html               <span class="token comment"># 入口 html</span></span>
<span class="line">├─ manifest.config.ts       <span class="token comment"># 自动生成 manifest.json 配置文件</span></span>
<span class="line">├─ package.json             <span class="token comment"># 依赖管理文件</span></span>
<span class="line">├─ .editorconfig            <span class="token comment"># 统一编辑器的编码风格</span></span>
<span class="line">├─ .eslintignore            <span class="token comment"># 忽略 Eslint 校验</span></span>
<span class="line">├─ .eslintrc.cjs            <span class="token comment"># Eslint 校验配置文件</span></span>
<span class="line">├─ .npmrc                   <span class="token comment"># npm 配置文件</span></span>
<span class="line">├─ .prettierignore          <span class="token comment"># 忽略 Prettier 格式化</span></span>
<span class="line">├─ .prettierrc.cjs          <span class="token comment"># Prettier 格式化配置</span></span>
<span class="line">├─ .stylelintignore         <span class="token comment"># 忽略 stylelint 格式化</span></span>
<span class="line">├─ .stylelintrc.cjs         <span class="token comment"># stylelint 样式格式化配置</span></span>
<span class="line">├─ commitlint.config.cjs    <span class="token comment"># git 提交规范配置文件</span></span>
<span class="line">├─ lint-staged.config.cjs   <span class="token comment"># lint-staged 配置文件</span></span>
<span class="line">├─ pages.config.ts          <span class="token comment"># 自动生成 pages.json 配置文件</span></span>
<span class="line">├─ README.md                <span class="token comment"># 说明文档</span></span>
<span class="line">├─ LICENSE                  <span class="token comment"># 开源协议</span></span>
<span class="line">└─ vite.config.ts           <span class="token comment"># Vite 配置文件</span></span>
<span class="line">├─ tsconfig.json            <span class="token comment"># ts 配置文件</span></span>
<span class="line">├─ uno.config.ts            <span class="token comment"># UnoCSS 配置文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="说明事项" tabindex="-1"><a class="header-anchor" href="#说明事项"><span>说明事项</span></a></h2><h3 id="布局" tabindex="-1"><a class="header-anchor" href="#布局"><span>布局</span></a></h3><p><code>src/layouts</code> 目录下的 Vue 组件将用作布局。</p>`,33)),s("p",null,[n[39]||(n[39]=e("查看 ")),s("a",H,[n[37]||(n[37]=s("code",null,"vite-plugin-uni-pages",-1)),i(a)]),n[40]||(n[40]=e(" 和 ")),s("a",L,[n[38]||(n[38]=s("code",null,"vite-plugin-uni-layouts",-1)),i(a)]),n[41]||(n[41]=e(" 了解更多详情。"))]),n[76]||(n[76]=l(`<p>默认情况下将加载 <code>layouts/default.vue</code> 作为布局架子，但也可以通过在页面的 SFC 中指定布局，如下所示：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>json5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> { layout: &quot;demo&quot; } <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="约定式路由" tabindex="-1"><a class="header-anchor" href="#约定式路由"><span>约定式路由</span></a></h3>`,3)),s("p",null,[n[43]||(n[43]=e("将在 ")),n[44]||(n[44]=s("code",null,"src/pages",-1)),n[45]||(n[45]=e(" 目录中自动生成具有相同文件结构的 uni-app 路由。查看 ")),s("a",G,[n[42]||(n[42]=s("code",null,"@uni-helper/vite-plugin-uni-pages",-1)),i(a)]),n[46]||(n[46]=e(" 了解更多详情。"))]),n[77]||(n[77]=l('<p><strong>因需动态插入路由，所以放弃使用 uni-app 的原 <code>pages.json</code> 方案，改用维护 <code>pages.config.ts</code> 文件，并同步生成至 <code>pages.json</code>，不需要手动维护 <code>pages.json</code> 文件。</strong></p><p>（manifest.json 同理，通过维护 <code>manifest.config.ts</code> 文件，并同步生成至 <code>manifest.json</code>，不需要手动维护 <code>manifest.json</code> 文件）</p><h3 id="分包路由" tabindex="-1"><a class="header-anchor" href="#分包路由"><span>分包路由</span></a></h3>',3)),s("p",null,[n[48]||(n[48]=e("分包路由同 ")),n[49]||(n[49]=s("code",null,"/src/pages",-1)),n[50]||(n[50]=e(" 目录下的路由配置一样，同样是由 ")),s("a",M,[n[47]||(n[47]=s("code",null,"@uni-helper/vite-plugin-uni-pages",-1)),i(a)]),n[51]||(n[51]=e(" 自动生成。"))]),n[78]||(n[78]=l(`<p><strong>文件夹目录可更改，但需要在 <code>vite.config.ts</code> 中 进行配置。</strong></p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> UniPages <span class="token keyword">from</span> <span class="token string">&quot;@uni-helper/vite-plugin-uni-pages&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">UniPages</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      subPackages<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;src/pages-sub&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 分包路径</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开发推荐-建议" tabindex="-1"><a class="header-anchor" href="#开发推荐-建议"><span>开发推荐 &amp; 建议</span></a></h3>`,3)),s("ul",null,[n[61]||(n[61]=s("li",null,[s("p",null,[e("优先使用 "),s("strong",null,"UnoCSS"),e("，减少重复代码，提高开发效率，"),s("strong",null,"上手简单"),e("，墙裂推荐")])],-1)),s("li",null,[s("p",null,[n[54]||(n[54]=e("使用 UnoCSS 时，可以在 ")),s("a",O,[n[52]||(n[52]=e("UnoCSS Interactive")),i(a)]),n[55]||(n[55]=e(" 或 ")),s("a",B,[n[53]||(n[53]=e("Tailwind CSS")),i(a)]),n[56]||(n[56]=e("（推荐）中查找原子类。 ")),n[57]||(n[57]=s("img",{src:v,alt:"alt text"},null,-1)),n[58]||(n[58]=s("img",{src:m,alt:"alt text"},null,-1))])]),n[62]||(n[62]=l(`<li><p>如果某些文件已经加入了版本管理，现在重新加入 .gitignore 是不生效的，需要执行下面的操作</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">  <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span> <span class="token comment"># 然后提交 commit 即可。</span></span>
<span class="line">  <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> file1 file2 <span class="token comment"># 针对某些文件</span></span>
<span class="line">  <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> dir1 dir2 <span class="token comment"># 针对某些文件夹</span></span>
<span class="line">  <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span> <span class="token comment"># 针对所有文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>更新 uni-app</strong> 官方版本</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 注意此命令会自动安装 vue-i18n，不需要的情况下可以手动删除</span></span>
<span class="line">npx @dcloudio/uvm@latest</span>
<span class="line"><span class="token comment"># pnpm un vue-i18n</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>优雅的提交代码，使用 <code>pnpm commit</code>，选择对应的类型和描述，自动生成 commit 信息</p></li>`,3)),s("li",null,[s("p",null,[n[60]||(n[60]=e("遵循 ")),s("a",J,[n[59]||(n[59]=e(" Git 研发工作流规范")),i(a)])])]),n[63]||(n[63]=s("li",null,[s("p",null,[e("hooks、components、store、接口 api 、vue api 等支持"),s("strong",null,"自动引入"),e("，进一步精简代码")])],-1))]),n[79]||(n[79]=l(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">	&lt;CommonImage /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">- import { ref } from &quot;vue&quot;</span>
<span class="line">- import { useUserStore } from &quot;@/store/user&quot;</span>
<span class="line">- import CommonImage from &quot;@/components/CommonImage.vue&quot;;</span>
<span class="line">- import { ApiGetUserInfo } from &quot;@/api/modules/user&quot;</span>
<span class="line">- import { useNav } from &quot;@/hooks/useNav&quot;</span>
<span class="line"></span>
<span class="line">const info = ref();</span>
<span class="line">const userStore = useUserStore();</span>
<span class="line">const getUserData = async ()=&gt;{</span>
<span class="line">	const [err,res] = await ApiGetUserInfo()</span>
<span class="line">	// ...</span>
<span class="line">	useNav()</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)),s("ul",null,[n[66]||(n[66]=s("li",null,"页面命名推荐 Kebab Case 横线命名，组件使用 Pascal Case 大驼峰命名",-1)),n[67]||(n[67]=s("li",null,"公共函数或枚举常量等，注释推荐使用** JSDoc 注释**，提示更友好。如 /** 状态字典 */",-1)),s("li",null,[n[65]||(n[65]=e("深度选择器使用** :deep() **而不是 ::v-deep，")),s("a",Q,[n[64]||(n[64]=e("相关 RFC")),i(a)])]),n[68]||(n[68]=s("li",null,[s("strong",null,"ts 类型定义"),e("使用类型英文的缩写为开头，如 TState、IState、EState 等，增加语义、可读性")],-1)),n[69]||(n[69]=s("li",null,[s("strong",null,"接口命名建议"),e("使用 apiGetUserInfo、apiPostUpdateUserInfo 等，方便 api 自动引入时增强可读性")],-1)),n[70]||(n[70]=s("li",null,"公共组件放到 src/component 中，页面级别的组件放到对应页面目录下的 components 中，hooks 同理",-1))])])}const X=t(g,[["render",F]]),Y=JSON.parse('{"path":"/blogs/share/mobile-starter/mobile-starter.html","title":"启动模板-技术选型 & 搭建过程-移动端","lang":"en-US","frontmatter":{"title":"启动模板-技术选型 & 搭建过程-移动端","date":"2024-07-23","categories":["分享沉淀"],"tags":["启动模板"],"author":"作者","publish":true},"headers":[{"level":2,"title":"动机","slug":"动机","link":"#动机","children":[]},{"level":2,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":2,"title":"候选技术列表","slug":"候选技术列表","link":"#候选技术列表","children":[]},{"level":2,"title":"技术评估标准","slug":"技术评估标准","link":"#技术评估标准","children":[]},{"level":2,"title":"技术分析","slug":"技术分析","link":"#技术分析","children":[{"level":3,"title":"unibest","slug":"unibest","link":"#unibest","children":[]}]},{"level":2,"title":"改造过程","slug":"改造过程","link":"#改造过程","children":[{"level":3,"title":"UnoCSS 预设配置调整","slug":"unocss-预设配置调整","link":"#unocss-预设配置调整","children":[]},{"level":3,"title":"升级了 UnoCSS 版本","slug":"升级了-unocss-版本","link":"#升级了-unocss-版本","children":[]},{"level":3,"title":"引入 unplugin-vue-components","slug":"引入-unplugin-vue-components","link":"#引入-unplugin-vue-components","children":[]},{"level":3,"title":"添加 optimizeDeps.include 配置","slug":"添加-optimizedeps-include-配置","link":"#添加-optimizedeps-include-配置","children":[]},{"level":3,"title":"引入 vconsole 调试工具","slug":"引入-vconsole-调试工具","link":"#引入-vconsole-调试工具","children":[]},{"level":3,"title":"**引入 cz-git **","slug":"引入-cz-git","link":"#引入-cz-git","children":[]},{"level":3,"title":"封装请求返回格式","slug":"封装请求返回格式","link":"#封装请求返回格式","children":[]},{"level":3,"title":"其他改动：","slug":"其他改动","link":"#其他改动","children":[]}]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"说明事项","slug":"说明事项","link":"#说明事项","children":[{"level":3,"title":"布局","slug":"布局","link":"#布局","children":[]},{"level":3,"title":"约定式路由","slug":"约定式路由","link":"#约定式路由","children":[]},{"level":3,"title":"分包路由","slug":"分包路由","link":"#分包路由","children":[]},{"level":3,"title":"开发推荐 & 建议","slug":"开发推荐-建议","link":"#开发推荐-建议","children":[]}]}],"git":{"createdTime":1744358690000,"updatedTime":1744358690000,"contributors":[{"name":"yanhui","email":"yhawsm@163.com","commits":1}]},"filePathRelative":"blogs/share/mobile-starter/mobile-starter.md"}');export{X as comp,Y as data};
