import{_ as e,o as l,a as i,a4 as n,g as a,I as p}from"./chunks/framework.DmmESFnP.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Python 学习笔记/📘 第13章：正则表达式.md","filePath":"docs/Python 学习笔记/📘 第13章：正则表达式.md","lastUpdated":1782650645000}'),t={name:"docs/Python 学习笔记/📘 第13章：正则表达式.md"};function r(c,s,h,b,u,d){return l(),i("div",null,[...s[0]||(s[0]=[n(`<h2 id="一、知识点分区与掌握程度要求" tabindex="-1">一、知识点分区与掌握程度要求 <a class="header-anchor" href="#一、知识点分区与掌握程度要求" aria-label="Permalink to &quot;一、知识点分区与掌握程度要求&quot;">​</a></h2><h3 id="🔵-基础概念区-—-要求-熟悉" tabindex="-1">🔵 基础概念区 — 要求：熟悉 <a class="header-anchor" href="#🔵-基础概念区-—-要求-熟悉" aria-label="Permalink to &quot;🔵 基础概念区 — 要求：熟悉&quot;">​</a></h3><table tabindex="0"><thead><tr><th>知识点</th><th>掌握程度</th><th>核心要义</th></tr></thead><tbody><tr><td>正则表达式概念</td><td><strong>熟悉</strong></td><td>描述字符串模式的表达式，用于匹配、查找、替换、提取</td></tr><tr><td>元字符</td><td><strong>熟悉</strong></td><td><code>.</code>任意字符、<code>\\d</code>数字、<code>\\w</code>单词字符、<code>\\s</code>空白字符</td></tr><tr><td>字符集</td><td><strong>熟悉</strong></td><td><code>[abc]</code>匹配任意一个，<code>[a-z]</code>范围，<code>[^abc]</code>取反</td></tr><tr><td>原始字符串</td><td><strong>熟悉</strong></td><td><code>r&quot;\\d&quot;</code>忽略转义，正则中推荐使用</td></tr></tbody></table><h3 id="🟡-核心机制区-—-要求-理解-面试重点" tabindex="-1">🟡 核心机制区 — 要求：理解（面试重点） <a class="header-anchor" href="#🟡-核心机制区-—-要求-理解-面试重点" aria-label="Permalink to &quot;🟡 核心机制区 — 要求：理解（面试重点）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>知识点</th><th>掌握程度</th><th>核心机制</th></tr></thead><tbody><tr><td>贪婪与非贪婪</td><td><strong>理解</strong></td><td><code>*</code>、<code>+</code>默认贪婪（尽可能多），加<code>?</code>变为非贪婪（尽可能少）</td></tr><tr><td>分组与捕获</td><td><strong>理解</strong></td><td><code>()</code>捕获内容供后续使用，<code>(?P&lt;name&gt;)</code>命名分组</td></tr><tr><td>边界匹配</td><td><strong>理解</strong></td><td><code>^</code>开头、<code>$</code>结尾、<code>\\b</code>单词边界</td></tr></tbody></table><h3 id="🟢-工程实践区-—-要求-精通-ai开发日常必备" tabindex="-1">🟢 工程实践区 — 要求：精通（AI开发日常必备） <a class="header-anchor" href="#🟢-工程实践区-—-要求-精通-ai开发日常必备" aria-label="Permalink to &quot;🟢 工程实践区 — 要求：精通（AI开发日常必备）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>知识点</th><th>掌握程度</th><th>实践场景</th></tr></thead><tbody><tr><td>re.search()</td><td><strong>精通</strong></td><td>查找第一个匹配位置</td></tr><tr><td>re.match()</td><td><strong>精通</strong></td><td>从开头匹配</td></tr><tr><td>re.findall()</td><td><strong>精通</strong></td><td>查找所有匹配，返回列表</td></tr><tr><td>re.sub()</td><td><strong>精通</strong></td><td>替换匹配内容，可用函数替换</td></tr><tr><td>re.split()</td><td><strong>精通</strong></td><td>按模式分割字符串</td></tr><tr><td>分组提取</td><td><strong>精通</strong></td><td>从匹配结果中提取指定分组</td></tr></tbody></table><h3 id="🔴-扩展关联区-—-要求-了解" tabindex="-1">🔴 扩展关联区 — 要求：了解 <a class="header-anchor" href="#🔴-扩展关联区-—-要求-了解" aria-label="Permalink to &quot;🔴 扩展关联区 — 要求：了解&quot;">​</a></h3><table tabindex="0"><thead><tr><th>知识点</th><th>掌握程度</th><th>面试可能会问</th></tr></thead><tbody><tr><td>编译标志</td><td><strong>了解</strong></td><td><code>re.I</code>忽略大小写、<code>re.S</code>让<code>.</code>匹配换行</td></tr><tr><td>性能优化</td><td><strong>了解</strong></td><td>预编译<code>re.compile()</code>提高效率</td></tr><tr><td>灾难性回溯</td><td><strong>了解</strong></td><td><code>(a+)*b</code>等模式可能导致性能问题</td></tr></tbody></table><h2 id="二、核心技能点-需精通" tabindex="-1">二、核心技能点（需精通） <a class="header-anchor" href="#二、核心技能点-需精通" aria-label="Permalink to &quot;二、核心技能点（需精通）&quot;">​</a></h2><ol><li><strong>精通</strong>：能使用<code>re.search()</code>进行模式查找</li><li><strong>精通</strong>：能使用<code>re.match()</code>从开头匹配</li><li><strong>精通</strong>：能使用<code>re.findall()</code>提取所有匹配</li><li><strong>精通</strong>：能使用<code>re.sub()</code>进行文本替换</li><li><strong>精通</strong>：能使用<code>re.split()</code>分割字符串</li><li><strong>精通</strong>：能使用分组<code>()</code>提取匹配的子串</li><li><strong>精通</strong>：能理解并正确使用贪婪与非贪婪匹配</li><li><strong>精通</strong>：能使用<code>r&quot;&quot;</code>原始字符串编写正则</li></ol><h2 id="三、综合练习" tabindex="-1">三、综合练习 <a class="header-anchor" href="#三、综合练习" aria-label="Permalink to &quot;三、综合练习&quot;">​</a></h2><h3 id="入门关-20分钟" tabindex="-1">入门关（20分钟） <a class="header-anchor" href="#入门关-20分钟" aria-label="Permalink to &quot;入门关（20分钟）&quot;">​</a></h3><p><strong>任务</strong>：补全代码，让每个<code>print</code>输出正确结果。</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第一题：re.search() - 查找第一个匹配</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;我的电话是138-1234-5678，备用是139-0000-1111&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{3}</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{4}</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{4}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re.search(pattern, text)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result.group())  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 预期输出: ___</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第二题：re.match() - 从开头匹配</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello Python&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Python Hello&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">Hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re.match(pattern, text1)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re.match(pattern, text2)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result1.group())  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 预期输出: ___</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result2)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 预期输出: ___</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第三题：re.findall() - 查找所有匹配</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;价格: 10元, 20元, 30元, 100元&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">results </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re.findall(pattern, text)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(results)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 预期输出: ___</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第四题：re.sub() - 替换</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;2024-01-15, 2024-02-20&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re.sub(pattern, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, text)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 预期输出: ___</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第五题：re.split() - 分割</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;apple, banana; orange|grape&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[,;|]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re.split(pattern, text)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 预期输出: ___</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第六题：分组提取</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;姓名: 张三, 年龄: 18&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">姓名: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">(\\w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">, 年龄: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">(\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re.search(pattern, text)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result.group(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 预期输出: ___</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result.group(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 预期输出: ___</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第七题：贪婪与非贪婪</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;div&gt;内容1&lt;/div&gt;&lt;div&gt;内容2&lt;/div&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern_greedy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&lt;div&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&lt;/div&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern_non_greedy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&lt;div&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&lt;/div&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result_greedy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re.search(pattern_greedy, text)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result_non_greedy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re.search(pattern_non_greedy, text)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_greedy.group())  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 预期输出: ___</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_non_greedy.group())  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 预期输出: ___</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h3 id="入门关参考答案" tabindex="-1">入门关参考答案 <a class="header-anchor" href="#入门关参考答案" aria-label="Permalink to &quot;入门关参考答案&quot;">​</a></h3><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第一题</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result.group())  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 138-1234-5678</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第二题</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result1.group())  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Hello</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result2)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># None</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第三题</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(results)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># [&#39;10&#39;, &#39;20&#39;, &#39;30&#39;, &#39;100&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第四题</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2024/01/15, 2024/02/20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第五题</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># [&#39;apple&#39;, &#39; banana&#39;, &#39; orange&#39;, &#39;grape&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第六题</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result.group(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 张三</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result.group(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 18</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第七题</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_greedy.group())  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &lt;div&gt;内容1&lt;/div&gt;&lt;div&gt;内容2&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_non_greedy.group())  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &lt;div&gt;内容1&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="实战关-40分钟" tabindex="-1">实战关（40分钟） <a class="header-anchor" href="#实战关-40分钟" aria-label="Permalink to &quot;实战关（40分钟）&quot;">​</a></h3><p><strong>任务</strong>：实现一个文本清洗工具，用于LLM输出预处理。</p><p><strong>背景</strong>：LLM输出常包含格式标记、特殊字符，需要清洗后用于后续处理。</p><p><strong>要求</strong>：</p><ol><li>实现<code>TextCleaner</code>类： <ul><li><code>remove_markdown(text)</code>：移除Markdown标记（#、*、_、\`等）</li><li><code>remove_extra_whitespace(text)</code>：合并多余空白</li><li><code>extract_urls(text)</code>：提取所有URL</li><li><code>extract_emails(text)</code>：提取所有邮箱</li><li><code>extract_phone(text)</code>：提取手机号（11位，1开头）</li><li><code>replace_numbers(text)</code>：将数字替换为<code>[NUM]</code>（用于脱敏）</li></ul></li><li>使用正则表达式实现各方法</li><li>处理边界情况</li></ol><p><strong>使用示例</strong>：</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleaner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TextCleaner()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># 标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">联系我: test@example.com</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">电话: 13812345678</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">官网: https://example.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`python</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">print(&quot;hello&quot;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>价格: 99.9元<br> &quot;&quot;&quot;</p><p>print(cleaner.extract_urls(text)) # <a href="https://example.com&#39;%5D" target="_blank" rel="noreferrer">&#39;[https://example.com&#39;]</a><br> print(cleaner.extract_emails(text)) # [&#39;test@example.com&#39;]<br> print(cleaner.extract_phone(text)) # [&#39;13812345678&#39;]<br> print(cleaner.replace_numbers(text)) # 价格: [NUM]元</p><div class="language-plain vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 实战关参考答案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>import re</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TextCleaner:</span></span>
<span class="line"><span>    &quot;&quot;&quot;文本清洗工具&quot;&quot;&quot;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def remove_markdown(self, text):</span></span>
<span class="line"><span>        &quot;&quot;&quot;移除Markdown标记&quot;&quot;&quot;</span></span>
<span class="line"><span>        # 移除标题标记 # ## ###</span></span>
<span class="line"><span>        text = re.sub(r&#39;^#{1,6}\\s+&#39;, &#39;&#39;, text, flags=re.MULTILINE)</span></span>
<span class="line"><span>        # 移除粗体 **text** 或 __text__</span></span>
<span class="line"><span>        text = re.sub(r&#39;\\*\\*(.+?)\\*\\*&#39;, r&#39;\\1&#39;, text)</span></span>
<span class="line"><span>        text = re.sub(r&#39;__(.+?)__&#39;, r&#39;\\1&#39;, text)</span></span>
<span class="line"><span>        # 移除斜体 *text* 或 _text_</span></span>
<span class="line"><span>        text = re.sub(r&#39;\\*(.+?)\\*&#39;, r&#39;\\1&#39;, text)</span></span>
<span class="line"><span>        text = re.sub(r&#39;_(.+?)_&#39;, r&#39;\\1&#39;, text)</span></span>
<span class="line"><span>        # 移除代码块 \`\`\`...\`\`\`</span></span>
<span class="line"><span>        text = re.sub(r&#39;\`\`\`.*?\`\`\`&#39;, &#39;&#39;, text, flags=re.DOTALL)</span></span>
<span class="line"><span>        # 移除行内代码 \`code\`</span></span>
<span class="line"><span>        text = re.sub(r&#39;\`(.+?)\`&#39;, r&#39;\\1&#39;, text)</span></span>
<span class="line"><span>        # 移除链接 [text](url)</span></span>
<span class="line"><span>        text = re.sub(r&#39;\\[(.+?)\\]\\(.+?\\)&#39;, r&#39;\\1&#39;, text)</span></span>
<span class="line"><span>        return text</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def remove_extra_whitespace(self, text):</span></span>
<span class="line"><span>        &quot;&quot;&quot;合并多余空白&quot;&quot;&quot;</span></span>
<span class="line"><span>        # 移除行首行尾空白</span></span>
<span class="line"><span>        text = text.strip()</span></span>
<span class="line"><span>        # 合并多个空白为一个空格</span></span>
<span class="line"><span>        text = re.sub(r&#39;\\s+&#39;, &#39; &#39;, text)</span></span>
<span class="line"><span>        return text</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def extract_urls(self, text):</span></span>
<span class="line"><span>        &quot;&quot;&quot;提取所有URL&quot;&quot;&quot;</span></span>
<span class="line"><span>        pattern = r&#39;https?://[^\\s&lt;&gt;&quot;\\&#39;，。；：！？\\u4e00-\\u9fff]+&#39;</span></span>
<span class="line"><span>        return re.findall(pattern, text)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def extract_emails(self, text):</span></span>
<span class="line"><span>        &quot;&quot;&quot;提取所有邮箱&quot;&quot;&quot;</span></span>
<span class="line"><span>        pattern = r&#39;[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}&#39;</span></span>
<span class="line"><span>        return re.findall(pattern, text)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def extract_phone(self, text):</span></span>
<span class="line"><span>        &quot;&quot;&quot;提取手机号（11位，1开头，第二位3/4/5/7/8/9）&quot;&quot;&quot;</span></span>
<span class="line"><span>        pattern = r&#39;1[345789]\\d{9}&#39;</span></span>
<span class="line"><span>        return re.findall(pattern, text)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def extract_numbers(self, text, include_float=True):</span></span>
<span class="line"><span>        &quot;&quot;&quot;提取所有数字&quot;&quot;&quot;</span></span>
<span class="line"><span>        if include_float:</span></span>
<span class="line"><span>            pattern = r&#39;\\d+\\.?\\d*&#39;</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            pattern = r&#39;\\d+&#39;</span></span>
<span class="line"><span>        return re.findall(pattern, text)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def replace_numbers(self, text, placeholder=&quot;[NUM]&quot;):</span></span>
<span class="line"><span>        &quot;&quot;&quot;将数字替换为占位符（脱敏）&quot;&quot;&quot;</span></span>
<span class="line"><span>        pattern = r&#39;\\d+\\.?\\d*&#39;</span></span>
<span class="line"><span>        return re.sub(pattern, placeholder, text)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def extract_chinese(self, text):</span></span>
<span class="line"><span>        &quot;&quot;&quot;提取中文字符&quot;&quot;&quot;</span></span>
<span class="line"><span>        pattern = r&#39;[\\u4e00-\\u9fff]+&#39;</span></span>
<span class="line"><span>        return re.findall(pattern, text)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 测试 =====</span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    cleaner = TextCleaner()</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    text = &quot;&quot;&quot;</span></span>
<span class="line"><span>    # 用户信息</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    联系邮箱: test@example.com, admin@company.com</span></span>
<span class="line"><span>    电话: 13812345678 和 19987654321</span></span>
<span class="line"><span>    官网: https://example.com</span></span>
<span class="line"><span>    备用: http://backup.com/path</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    价格: 99.9元, 数量: 10件</span></span>
<span class="line"><span>    中文内容: 这是一个测试</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    print(&quot;=== 提取URL ===&quot;)</span></span>
<span class="line"><span>    print(cleaner.extract_urls(text))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    print(&quot;\\n=== 提取邮箱 ===&quot;)</span></span>
<span class="line"><span>    print(cleaner.extract_emails(text))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    print(&quot;\\n=== 提取手机号 ===&quot;)</span></span>
<span class="line"><span>    print(cleaner.extract_phone(text))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    print(&quot;\\n=== 提取数字 ===&quot;)</span></span>
<span class="line"><span>    print(cleaner.extract_numbers(text))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    print(&quot;\\n=== 提取中文 ===&quot;)</span></span>
<span class="line"><span>    print(cleaner.extract_chinese(text))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    print(&quot;\\n=== 数字脱敏 ===&quot;)</span></span>
<span class="line"><span>    print(cleaner.replace_numbers(text))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    print(&quot;\\n=== 移除Markdown ===&quot;)</span></span>
<span class="line"><span>    md_text = &quot;# 标题\\n**粗体** *斜体* \`代码\`&quot;</span></span>
<span class="line"><span>    print(cleaner.remove_markdown(md_text))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br></div></div><h3 id="挑战关-60分钟" tabindex="-1">挑战关（60分钟） <a class="header-anchor" href="#挑战关-60分钟" aria-label="Permalink to &quot;挑战关（60分钟）&quot;">​</a></h3><p><strong>任务</strong>：实现一个LLM输出解析器，处理常见的输出格式。</p><p><strong>背景</strong>：LLM输出可能包含JSON、列表、问答等多种格式，需要健壮的解析逻辑。</p><p><strong>要求</strong>：</p><ol><li>实现<code>LLMOutputParser</code>类： <ul><li><code>extract_json(text)</code>：提取JSON对象（容错处理）</li><li><code>extract_code(text, language=None)</code>：提取代码块</li><li><code>parse_list(text)</code>：解析序号列表</li><li><code>parse_qa(text)</code>：解析问答对</li><li><code>parse_kv(text)</code>：解析键值对</li><li><code>extract_structured(text)</code>：综合提取</li></ul></li><li>使用正则表达式提取</li><li>处理常见格式问题</li></ol><p><strong>使用示例</strong>：</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">parser </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LLMOutputParser()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">根据要求，返回结果如下：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`json</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{&quot;name&quot;: &quot;张三&quot;, &quot;age&quot;: 18}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>主要信息:</p><ul><li>姓名: 张三</li><li>年龄: 18<br> &quot;&quot;&quot;</li></ul>`,36),a("p",{"姓名:":"","张三,":"","年龄:":"",18:""},[p('print(parser.extract_json(text)) # {"name": "张三", "age": 18}'),a("br"),p(" print(parser.parse_kv(text)) #")],-1),n(`<div class="language-plain vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 挑战关参考答案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>import re</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class LLMOutputParser:</span></span>
<span class="line"><span>    &quot;&quot;&quot;LLM输出解析器&quot;&quot;&quot;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def extract_json(self, text):</span></span>
<span class="line"><span>        &quot;&quot;&quot;提取JSON对象（容错处理）&quot;&quot;&quot;</span></span>
<span class="line"><span>        # 尝试提取\`\`\`json\`\`\`块</span></span>
<span class="line"><span>        pattern = r&#39;\`\`\`(?:json)?\\s*([\\s\\S]*?)\`\`\`&#39;</span></span>
<span class="line"><span>        match = re.search(pattern, text)</span></span>
<span class="line"><span>        if match:</span></span>
<span class="line"><span>            json_str = match.group(1).strip()</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            # 直接匹配花括号</span></span>
<span class="line"><span>            pattern = r&#39;\\{[\\s\\S]*\\}&#39;</span></span>
<span class="line"><span>            match = re.search(pattern, text)</span></span>
<span class="line"><span>            if match:</span></span>
<span class="line"><span>                json_str = match.group(0)</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                return None</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # 尝试解析</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            return json.loads(json_str)</span></span>
<span class="line"><span>        except:</span></span>
<span class="line"><span>            pass</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # 尝试修复：单引号转双引号</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            fixed = json_str.replace(&quot;&#39;&quot;, &#39;&quot;&#39;)</span></span>
<span class="line"><span>            return json.loads(fixed)</span></span>
<span class="line"><span>        except:</span></span>
<span class="line"><span>            pass</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # 尝试修复：无引号的key</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            fixed = re.sub(r&#39;(\\w+):&#39;, r&#39;&quot;\\1&quot;:&#39;, json_str)</span></span>
<span class="line"><span>            return json.loads(fixed)</span></span>
<span class="line"><span>        except:</span></span>
<span class="line"><span>            pass</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        return None</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def extract_code(self, text, language=None):</span></span>
<span class="line"><span>        &quot;&quot;&quot;提取代码块&quot;&quot;&quot;</span></span>
<span class="line"><span>        if language:</span></span>
<span class="line"><span>            pattern = rf&#39;\`\`\`{language}\\s*([\\s\\S]*?)\`\`\`&#39;</span></span>
<span class="line"><span>            matches = re.findall(pattern, text)</span></span>
<span class="line"><span>            return [m.strip() for m in matches]</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            pattern = r&#39;\`\`\`(\\w*)\\s*([\\s\\S]*?)\`\`\`&#39;</span></span>
<span class="line"><span>            matches = re.findall(pattern, text)</span></span>
<span class="line"><span>            return [{&quot;language&quot;: lang or &quot;text&quot;, &quot;code&quot;: code.strip()} for lang, code in matches]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def parse_list(self, text):</span></span>
<span class="line"><span>        &quot;&quot;&quot;解析列表（序号或项目符号）&quot;&quot;&quot;</span></span>
<span class="line"><span>        items = []</span></span>
<span class="line"><span>        lines = text.strip().split(&#39;\\n&#39;)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        for line in lines:</span></span>
<span class="line"><span>            line = line.strip()</span></span>
<span class="line"><span>            if not line:</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            # 数字序号: 1. 或 1)</span></span>
<span class="line"><span>            match = re.match(r&#39;^\\d+[\\.\\)]\\s*(.*)&#39;, line)</span></span>
<span class="line"><span>            if match:</span></span>
<span class="line"><span>                items.append(match.group(1).strip())</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            # 项目符号: - 或 *</span></span>
<span class="line"><span>            match = re.match(r&#39;^[-*]\\s*(.*)&#39;, line)</span></span>
<span class="line"><span>            if match:</span></span>
<span class="line"><span>                items.append(match.group(1).strip())</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            # 字母序号: A. 或 a)</span></span>
<span class="line"><span>            match = re.match(r&#39;^[A-Za-z][\\.\\)]\\s*(.*)&#39;, line)</span></span>
<span class="line"><span>            if match:</span></span>
<span class="line"><span>                items.append(match.group(1).strip())</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        return items</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def parse_qa(self, text):</span></span>
<span class="line"><span>        &quot;&quot;&quot;解析问答对&quot;&quot;&quot;</span></span>
<span class="line"><span>        patterns = [</span></span>
<span class="line"><span>            r&#39;问题[:：]\\s*(.*?)\\s*答案?[:：]\\s*(.*?)$&#39;,</span></span>
<span class="line"><span>            r&#39;问[:：]\\s*(.*?)\\s*答[:：]\\s*(.*?)$&#39;,</span></span>
<span class="line"><span>            r&#39;Q[:：]\\s*(.*?)\\s*A[:：]\\s*(.*?)$&#39;,</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        for pattern in patterns:</span></span>
<span class="line"><span>            match = re.search(pattern, text, re.DOTALL)</span></span>
<span class="line"><span>            if match:</span></span>
<span class="line"><span>                return {</span></span>
<span class="line"><span>                    &quot;question&quot;: match.group(1).strip(),</span></span>
<span class="line"><span>                    &quot;answer&quot;: match.group(2).strip()</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        return {&quot;question&quot;: &quot;&quot;, &quot;answer&quot;: text.strip()}</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def parse_kv(self, text):</span></span>
<span class="line"><span>        &quot;&quot;&quot;解析键值对&quot;&quot;&quot;</span></span>
<span class="line"><span>        result = {}</span></span>
<span class="line"><span>        lines = text.strip().split(&#39;\\n&#39;)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        for line in lines:</span></span>
<span class="line"><span>            line = line.strip()</span></span>
<span class="line"><span>            if not line:</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            # key: value 或 key：value</span></span>
<span class="line"><span>            match = re.match(r&#39;^([^:：]+)[:：]\\s*(.*)$&#39;, line)</span></span>
<span class="line"><span>            if match:</span></span>
<span class="line"><span>                key = match.group(1).strip()</span></span>
<span class="line"><span>                value = match.group(2).strip()</span></span>
<span class="line"><span>                result[key] = value</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        return result</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def extract_structured(self, text):</span></span>
<span class="line"><span>        &quot;&quot;&quot;综合提取结构化数据&quot;&quot;&quot;</span></span>
<span class="line"><span>        result = {}</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # 提取JSON</span></span>
<span class="line"><span>        json_data = self.extract_json(text)</span></span>
<span class="line"><span>        if json_data:</span></span>
<span class="line"><span>            result[&quot;json&quot;] = json_data</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # 提取代码</span></span>
<span class="line"><span>        code_blocks = self.extract_code(text)</span></span>
<span class="line"><span>        if code_blocks:</span></span>
<span class="line"><span>            result[&quot;code&quot;] = code_blocks</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # 提取列表</span></span>
<span class="line"><span>        list_items = self.parse_list(text)</span></span>
<span class="line"><span>        if list_items:</span></span>
<span class="line"><span>            result[&quot;list&quot;] = list_items</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # 提取键值对</span></span>
<span class="line"><span>        kv = self.parse_kv(text)</span></span>
<span class="line"><span>        if kv:</span></span>
<span class="line"><span>            result[&quot;kv&quot;] = kv</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # 提取问答</span></span>
<span class="line"><span>        qa = self.parse_qa(text)</span></span>
<span class="line"><span>        if qa[&quot;question&quot;]:</span></span>
<span class="line"><span>            result[&quot;qa&quot;] = qa</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        return result</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 测试 =====</span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    parser = LLMOutputParser()</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    print(&quot;=== JSON提取 ===&quot;)</span></span>
<span class="line"><span>    text1 = &#39;\`\`\`json\\n{&quot;name&quot;: &quot;张三&quot;, &quot;age&quot;: 18}\\n\`\`\`&#39;</span></span>
<span class="line"><span>    print(parser.extract_json(text1))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    print(&quot;\\n=== 代码提取 ===&quot;)</span></span>
<span class="line"><span>    text2 = &#39;\`\`\`python\\nprint(&quot;hello&quot;)\\n\`\`\`&#39;</span></span>
<span class="line"><span>    print(parser.extract_code(text2))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    print(&quot;\\n=== 列表解析 ===&quot;)</span></span>
<span class="line"><span>    text3 = &quot;1. 苹果\\n2. 香蕉\\n3. 橙子&quot;</span></span>
<span class="line"><span>    print(parser.parse_list(text3))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    print(&quot;\\n=== 问答解析 ===&quot;)</span></span>
<span class="line"><span>    text4 = &quot;问题: 什么是AI？\\n答案: 人工智能是研究智能的学科&quot;</span></span>
<span class="line"><span>    print(parser.parse_qa(text4))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    print(&quot;\\n=== 键值对解析 ===&quot;)</span></span>
<span class="line"><span>    text5 = &quot;姓名: 张三\\n年龄: 18&quot;</span></span>
<span class="line"><span>    print(parser.parse_kv(text5))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br></div></div><h2 id="四、面试高频题" tabindex="-1">四、面试高频题 <a class="header-anchor" href="#四、面试高频题" aria-label="Permalink to &quot;四、面试高频题&quot;">​</a></h2><table tabindex="0"><thead><tr><th>问题</th><th>参考答案</th></tr></thead><tbody><tr><td><code>re.search()</code>和<code>re.match()</code>的区别？</td><td><code>search()</code>扫描整个字符串，<code>match()</code>只从开头匹配</td></tr><tr><td><code>re.findall()</code>返回什么？</td><td>返回所有匹配的字符串列表，如果有分组则返回元组列表</td></tr><tr><td>贪婪和非贪婪的区别？</td><td>贪婪<code>.*</code>尽可能多匹配，非贪婪<code>.*?</code>尽可能少匹配</td></tr><tr><td><code>()</code>分组和<code>(?:)</code>的区别？</td><td><code>()</code>捕获分组内容，<code>(?:)</code>非捕获分组</td></tr><tr><td><code>re.sub()</code>的<code>count</code>参数作用？</td><td>限制替换次数，默认0替换所有</td></tr><tr><td>为什么正则表达式要用原始字符串<code>r&quot;&quot;</code>？</td><td>避免反斜杠被转义，<code>\\d</code>不会被解释为<code>d</code></td></tr><tr><td><code>^</code>和<code>$</code>的作用？</td><td><code>^</code>匹配开头，<code>$</code>匹配结尾</td></tr></tbody></table><h2 id="五、学习验证清单" tabindex="-1">五、学习验证清单 <a class="header-anchor" href="#五、学习验证清单" aria-label="Permalink to &quot;五、学习验证清单&quot;">​</a></h2><table tabindex="0"><thead><tr><th>问题</th><th>自评</th></tr></thead><tbody><tr><td>我能使用<code>re.search()</code>查找匹配</td><td>☐</td></tr><tr><td>我能使用<code>re.match()</code>从开头匹配</td><td>☐</td></tr><tr><td>我能使用<code>re.findall()</code>提取所有匹配</td><td>☐</td></tr><tr><td>我能使用<code>re.sub()</code>替换文本</td><td>☐</td></tr><tr><td>我能使用<code>re.split()</code>分割字符串</td><td>☐</td></tr><tr><td>我能使用分组提取子串</td><td>☐</td></tr><tr><td>我能区分贪婪和非贪婪匹配</td><td>☐</td></tr><tr><td>我知道<code>\\d</code>、<code>\\w</code>、<code>\\s</code>的含义</td><td>☐</td></tr><tr><td>我能编写匹配手机号的正则</td><td>☐</td></tr><tr><td>我能编写匹配邮箱的正则</td><td>☐</td></tr><tr><td>我能从文本中提取URL</td><td>☐</td></tr><tr><td>我知道原始字符串<code>r&quot;&quot;</code>的作用</td><td>☐</td></tr></tbody></table>`,5)])])}const m=e(t,[["render",r]]);export{k as __pageData,m as default};
