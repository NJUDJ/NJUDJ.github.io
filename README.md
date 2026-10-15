# 个人主页 · 简洁蓝色版

浅蓝纸面底色、宋体标题和细线分栏。项目、实习、科研三个栏目采用简历式排版；支持手机布局、顶部导航、搜索、详情与浅蓝 / 深蓝切换。

## 修改内容

主要编辑 `content.js`。科研栏目已填写 AI IDE 用户评价研究经历；项目与实习栏目暂时保留占位内容。科研条目中的“详情”按项目概况、团队统筹、工具开发、研究方法、数据分析和阶段性成果展开。

| 字段 | 用途 |
| --- | --- |
| name | 网页标题和页面大标题 |
| handle | 顶部的网站署名 |
| description / about | 首页介绍 / 关于我 |
| github | GitHub 个人页面链接 |
| startTime | 页脚显示的建站日期 |
| sections | 项目、实习、科研栏目；intro 是栏目说明，emptyText 是待更新时的简短介绍 |
| items | 每个栏目下的经历，可以复制一整项添加更多 |
| title / organization / period | 经历标题 / 单位或角色 / 起止时间 |
| summary / tags | 简介 / 标签 |
| details | 详情内容；heading 是小标题，text 是正文 |
| placeholder | 为 true 时显示简洁的“内容整理中”；填完真实经历后改成 false，即显示完整经历、标签和详情按钮 |
| url | 可选的相关网页或代码链接；留空则不显示按钮 |

每条经历的 id 应保持唯一。字符串用英文双引号包围；文字里可以使用中文引号“”。正文换行用 `\n`。不要删除各项之间的逗号。

颜色在 `style.css` 顶部的 `:root` 中设置；深蓝色在 `body[data-theme="deep"]` 中设置。

## 本地预览与更新

四个网页文件保持在同一个文件夹，双击 `index.html` 即可预览。需要更新线上网站时，将 `index.html`、`style.css`、`content.js`、`script.js` 一起覆盖到仓库根目录，再提交更改；GitHub Pages 会重新部署。

仓库：https://github.com/NJUDJ/NJUDJ.github.io

网站：https://njudj.github.io/

若部署完成后仍看到旧页面，请用 Ctrl + F5 强制刷新。更新此版本时需要同时替换四个文件。
