# read in life 前端代码

## 概述

+ 框架选用: Angular4
+ 使用TypeScript 写逻辑
+ over

## 配置开发环境

1. 参考`https://angular.io/guide/quickstart`

2. `npm install -g @angular/cli`

3. 发布到线上: `ng build --prod`

## 增加UI框架

> 参考 `https://material.angular.io/guide/getting-started`

1. `npm install --save @angular/material @angular/cdk`

2. `npm install --save @angular/animations`

3. 导入css `@import "~@angular/material/prebuilt-themes/indigo-pink.css";`

4. `npm install --save hammerjs`

## TODO

2. 我的信息展示页面. Good.

4. 修复路由的问题: host后边的路径, 在刷新之后不生效 (完成.这是个大问题)

5. 主页面上的文章信息: 间隔太大. 改下.

6. 返回按钮: 不能让用户跳出本网站. 适时隐藏.

7. 闪聊模块

8. 小程序模块

9. 修改文章. (完成)

10. 新建文章 (完成)

11. 建立一个消息中心: 在主页面上弄一个消息提示区域, 
这样方便同步消息.

12. 修改用户信息 (完成)

13. 可以点击的地方光标换成小手

14. icon-font 的字体不要从google去拉, 下载下来放在我的服务器上.

15. 将用户名显示在修改个人信息页面上, 但是不让修改.