---
title: 高效开发：业务逻辑复用沉淀
date: "2024-12-10"
categories:
  - 业务文档
tags:
  - 业务逻辑复用
author: Alan
publish: true
---

在日常的业务开发过程中，经常遇到大量具有相似逻辑和结构的业务需求。如果每次都通过复制粘贴旧代码的方式来实现新功能，不仅会导致代码库臃肿、难以维护，还会浪费大量的时间和精力。为了提高开发效率、增强代码可维护性并减少重复劳动，我们应该注重抽象通用组件设计可复用的业务逻辑。
接下来，将列举一些常用的业务场景，用来记录和方便参考引用~
## 一、相关代码仓库说明
目前关于远智移动端、公众号相关项目分别是：
- [zmc](http://git.yzwill.cn/yz-web/zmc): 微信公众号相关
- [new-h5](http://git.yzwill.cn/yz-web/new-h5): 基于 zmc 项目分离的，体量相对较轻的仓库，新业务基本上在此仓库上开发
- [app-web](http://git.yzwill.cn/yz-web/app-web): 用于远智 APP 中内嵌访问 web 移动端页面的业务开发
- [market-project](http://git.yzwill.cn/yz-web/market-project): 微信小程序（学历助手），小程序相关的业务开发

## 二、APP 客户端跳转微信小程序
最近在做训练营二期有个需求是需要在 APP 端的闯关页面，打开微信小程序展示跟进老师信息，用来给学员提供二维码添加老师的需求，就是需要在 APP 上跳转到微信小程序展示。
基于这个需求，对跳转的规则和参数进行整理说明：
`wxmini://yzwill.cn?userName=gh_5586b77a4611&path=/pages/other/trainingCampTeacher/index&type=2`
- `wxmini://yzwill.cn` ：APP 约定的协议；
-  userName：对应着小程序的原始 ID；(如果不清楚原始 ID 对应的小程序，可以通过[找回账号](https://mp.weixin.qq.com/acct/findacct?action=scan&token=&lang=zh_CN)的方式进行查询)
-  path：对应小程序中的访问页面
-  type: 对应小程序的环境（0：正式版、1：开发版、2：体验版）

> 注意：如果小程序的访问页面需要传递参数，需要对参数进行 encodeURIComponent 编码，同时注意携带多个参数时，& 符号后的参数会被 app 端跳转前获取，并不会传递给小程序。
> 如：wxmini://yzwill.cn?userName=gh_5586b77a4611&path=/pages/other/trainingCampTeacher/index？id=xx&trainType=xx&type=2。传递到小程序页面就只有 id 的参数。

## 二、APP 客户端跳转微信小程序，访问 H5 页面
同样也是上面训练营二期的需求，分析可以知道，需求只是想从 APP 端跳转到微信小程序，**利用微信端的能力**，对企微二维码的图片进行识别，添加对应的跟进老师的功能。按照常规的开发思路，就是直接到小程序上进行开发，但分析这个需求，也可以通过 h5 页面实现，同样也可以长按图片识别二维码进行添加，这样就可以**避免小程序的发布、审核流程和大小限制等问题**，通过统一微信小程序的 web-view H5 入口页面，后续类似的需求也可以直接开发 h5 即可。
> 为啥不直接使用 APP 内嵌 H5 页面？因为需要使用到微信中图片长按识别添加二维码的能力。
> 为啥不直接使用 APP 跳转 H5 页面？不支持直接跳转微信 APP 打开 web 页面。
> 当然如果业务允许的情况下，这个需求还可以采取直接在 APP 端提示用户保存图片，自行到微信端识别简化开发。但多开发一步能提高用户体验何乐而不为~

`wxmini://yzwill.cn?userName=gh_5586b77a4611&path=/pages/other/webview?url=encodeURIComponent(https://192-pre.yzou.cn/new-h5/newPages/training-camp/index?token=xxx&id=xxx)&type=2`

链接的规则同上。这里给小程序端新增了一个页面 `/pages/other/webview`，页面接受 `url` 的参数，会进行 decodeURIComponent 处理，然后使用 web-view 进行页面访问。
总结：如果 APP 端需要使用到微信端的能力，微信 H5 端页支持这些能力，且不依赖微信小程序的业务，则推荐使用这种方式进行开发。

## 三、H5 页面纯图片展示临时通知信息
APP 客户端有些情况下，需要用到图片用作中转页，如版本更新后旧版本需要升级提示，可以通过访问内嵌 H5 链接访问展示图片。
也是一样的套路，在 new-h5 仓库中新增一个页面 `/new-h5/newPages/image-notice/index?url=encodeURIComponent(xxx)` ，接受 `url` 图片资源路径的参数，页面使用图片居中展示。

如: `https://192-pre.yzou.cn/new-h5/newPages/image-notice/index?url=https%3A%2F%2Fstatic.yzou.cn%2Fapplet%2Ftraining-camp-update-tip.png`

有类似需求，直接替换文件资源地址即可。

## 四、OSS：图片资源管理
 在上述提到的项目仓库中，许多图片资源使用了 OSS 服务。然而，项目中存在多个资源访问路径，并且有些路径是直接固定的，这种方式不利于维护。推荐使用环境变量文件中定义的变量，并通过全局 filters 中的 `imgBaseURL` 方法来拼接路径，以提高代码的可读性和可维护性，同时避免迭代开发时影响原有线上的资源文件。
此外，项目中通常直接使用 OSS 的域名路径。建议使用自定义域名，以便在某个 OSS 服务资源节点出现故障时，可以快速修改域名指向其他正常的备份 OSS 资源服务节点，实现容灾效果。
 
 目前前端常用的 oss 文件路径和域名映射关系：
| 路径 |域名| 
| --- | --- |
| oss://yzims | static.yzou.cn、yzims.oss-cn-shenzhen.aliyuncs.com |
| oss://yzimstest   | img.yzwill.cn、yzimstest.oss-cn-shenzhen.aliyuncs.com |
| oss://new-yzpres   |  img2.yzwill.cn、new-yzpres.oss-cn-shenzhen.aliyuncs.com |

## ...
