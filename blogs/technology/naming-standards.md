---
title: 命名规范
date: "2024-04-25"
categories:
  - 技术文档
tags:
  - 命名规范
author: Alan
publish: true
---

## 1. 项目命名规范

- 统一采用 **kebab-case** 命名约定，即字母小写并以短横线分隔单词。

```
// good
project-name
// bad
project_name | ProjectName
```

## 2. 目录命名规范

- 统一采用 **kebab-case** 命名约定。
- 对于涉及复数的名称，应使用**复数形式**，缩写时不需要加复数。

```
// good
scripts | styles | components | images | assets | views | utils | layout | img | api | router
// bad
script | style | component | util | imgs | apis | routers
```

## 3. 文件命名规范

- 统一采用 **kebab-case** 命名约定。

```
// good
simple-upload.vue | my-module.js | index.css | home-banner.png
// bad
simpleUpload.vue | SimpleUpload.vue | simple_upload.vue | MyModule.js | Index.css | homeBanner.png
```

## 4. 编码命名规范

### 4.1 变量命名

- **变量名**：使用有意义的名称描述变量的用途，统一采用 **camelCase** (除第一个单词外的每个单词的首字母大写，而其他字母均为小写)命名约定。

```
// good
userProfile | isValidInput
// bad
user_profire | isvalidinput
```

- **常量名**：统一采用**全大写字母**，使用**下划线分隔单词**。

```
// good
MAX_SIZE | API_BASE_URL
// bad
Max_Size | ApiBaseUrl
```

### 4.2 函数命名

- 使用描述性的动词或动词短语，统一采用 **camelCase** 命名约定。

```
// good
calculateAge | getUserProfile
// bad
calculate_age | get_userProfile
```

### 4.3 类命名

- 统一采用 **PascalCase**（首字母大写的驼峰命名法）命名约定。

```
// good
UserManager | HttpRequest
// bad
userManager | http_request
```

## 5. 命名严谨性

- 命名严禁拼音和英文混合方式，更不允许直接使用中文。
- 地名或者国际通用名称，可以视同英文。
- 使用有意义且规范的缩写，避免望文不知义。
