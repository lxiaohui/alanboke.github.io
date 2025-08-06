---
title: Git Commit 提交规范
date: "2024-04-24"
categories:
  - 技术文档
tags:
  - Git Commit
author: Alan
publish: true
---


## 1. 概述

本文档旨在规范团队在使用 Git 进行代码提交时的操作规范，确保代码库中的每个提交都遵循良好的提交规范，提高代码的可读性和可维护性，以便更好地管理代码版本和协作开发。

## 2. 提交消息格式

### 2.1 提交消息结构

提交消息应当包括三个部分：**标题、空行、正文**。
具体格式为：

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### 2.2 提交消息部分说明

- `<type>`: 表示提交的类型，例如 feat（新功能）、fix（修复 bug）、docs（文档修改）等。
- `<scope>`: 可选，表示影响的范围，通常指模块、文件名、数据层、控制层、视图层等。
- `<subject>`: 提交的简要描述。
  - 一般不超过 50 个字符
  - 建议使用中文或简单的英语描述
  - 使用陈述语句
  - 首字母不需要大写
  - 结尾不加句号或其他标点符号
- `<body>`: 可选，提交的详细描述。
- `<footer>`: 可选，包括一些备注信息，比如关联的 Issue 编号。

## 3. 提交类型规范

通过定义标准的提交类型，以便标识代码变更的目的。
常用的提交类型包括：

- `feat`：新功能
- `fix`：修复 bug
- `docs`：修改文档
- `style`：代码格式调整
- `refactor`：重构代码（即不是新增功能，也不是修改 bug 的代码变动）
- `perf`：提升性能、体验的代码更改
- `test`：增加或修改测试
- `build`：修改项目构建或打包相关的配置、脚本
- `ci`：持续集成
- `chore`：构建过程或辅助工具的变动
- `revert`：撤回提交
- `wip`：开发中
- `workflow`：工作流程改进
- `types`：类型修改
- `release`：版本发布相关的改动
- `merge`：代码合并
- `sync`：同步主线或分支的 Bug

## 4. 提交示例

尽量将每个提交都分离成独立的提交，确保每次提交的内容清晰且无重复，且避免修改同一文件多次提交，以提高代码的可读性和可维护性。

- 新功能

```
feat(user): 添加重置密码功能
feat(user): add reset password feature
···
```

- 修复 Bug

```
fix(user): 用户查询缺少 username 属性
fix(auth): 修复用户登录失败的问题
···
```

- 构建/辅助工具变动

```
chore(build): 更新构建脚本版本为 3.1.0
```

## 5. 提交规范的好处

- 使提交信息更具可读性和标准化
- 便于通过提交信息快速了解代码变更的目的
- 提高团队协作效率，减少沟通成本

## 6. Reference

- 1. [ Angular 规范 ](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
- 2. [ 约定式提交 ](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
