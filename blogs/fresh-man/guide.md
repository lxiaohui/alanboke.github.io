---
title: 文章添加指南
date: "2024-11-01"
categories:
  - 新人手册
tags:
  - 文章添加指南
author: Alan
publish: true
---

## 添加文章步骤

1. 将 markdown 文件放在 `/blogs/` 你想要放到的子目录下
2. 如果没有合适的子目录，可以新建子目录，将 markdown 文件新建的子目录内即可。
   > 如新建子目录为 `other`，则文件目录为 `/blogs/other`
3. 检查新增加的 markdown 文件是否已经添加了文件头，没有则需要添加，内容大致如下：

```markdown
---
title: 文章标题
date: "2024-11-01 12:00:00"
categories:
  - 分类（建议选择 “业务文档” | “技术文档” | “分享沉淀” | “新人手册” ）
tags:
  - 标签（和本次文章相关标签）
author: 作者名字
publish: true
---
```

4. 如果是迁移 tapd 上旧文章的情况，可以直接在 tapd 上导出 pdf 文件，然后复制到 `.vuepress/public/files` 目录下，然后通过 markdown 语法来引用

```markdown
// 参考：/blogs/share/file-online-preview.md
[xxx](/files/xxx.pdf)
```

5. git commit 信息建议为：“docs: add xxx.md”（因目前使用的 Gogs 代码管理仓库原因，仓库中不能使用中文仓库描述以及 git 提交信息中不能包含中文，否则无法触发 Webhook）
6. git push 到 git 仓库中，则会自动触发构建

