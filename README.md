# 个人主页 · 蓝色简历版

浅蓝渐变背景、半透明圆角卡片，以及项目、实习、科研三个独立栏目。支持手机布局、栏目导航、经历搜索、详情阅读和浅蓝 / 深蓝切换。

## 修改内容

主要编辑 `content.js`。各栏目现在是明确标注的占位内容，填写真实经历后即可作为个人简历主页。

| 字段 | 用途 |
| --- | --- |
| name | 网页标题和页面大标题 |
| handle / initials | 右侧个人卡片的名称 / 缩写 |
| description / about | 首页介绍 / 关于我 |
| github | GitHub 个人页面链接 |
| startTime | 网站计时起点 |
| sections | 项目、实习、科研栏目 |
| items | 每个栏目下的经历，可以复制一整项添加更多 |
| title / organization / period | 经历标题 / 单位或角色 / 起止时间 |
| summary / tags | 简介 / 标签 |
| details | 详情内容；heading 是小标题，text 是正文 |
| placeholder | 初始为 true，填完真实内容后改成 false，隐藏“待填写”标记 |
| url | 可选的相关网页或代码链接；留空则不显示按钮 |

每条经历的 id 应保持唯一。字符串用英文双引号包围；文字里可以使用中文引号“”。正文换行用 `\n`。不要删除各项之间的逗号。

颜色在 `style.css` 顶部的 `:root` 中设置；深蓝色在 `body[data-theme="deep"]` 中设置。

## 本地预览与更新

四个网页文件保持在同一个文件夹，双击 `index.html` 即可预览。需要更新线上网站时，将 `index.html`、`style.css`、`content.js`、`script.js` 一起覆盖到仓库根目录，再提交更改；GitHub Pages 会重新部署。

仓库：https://github.com/NJUDJ/NJUDJ.github.io

网站：https://njudj.github.io/

若部署完成后仍看到旧页面，请用 Ctrl + F5 强制刷新。更新此版本时需要同时替换四个文件。
