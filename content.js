// 修改文字主要看这个文件。引号中填文字；每一项后面的逗号请保留。
window.PROFILE = {
  name: "个人主页",
  handle: "NJUDJ",
  initials: "NJ",
  description: "这里整理我的项目、实习和科研记录。",
  about: "目前还在整理过往的经历，之后会陆续更新。",
  startTime: "2026-10-09T00:00:00+08:00",
  github: "https://github.com/NJUDJ",

  // 目前各栏目都是明确标注的占位内容，不代表真实经历。
  // 填好一条经历后，把 placeholder 改为 false。
  // 每个 items 数组中可以添加更多 { ... }，每条 id 应保持唯一。
  sections: [
    {
      id: "projects", title: "项目", english: "PROJECTS", icon: "project",
      intro: "作品与实践",
      emptyText: "项目过程、个人分工与成果。",
      items: [
        {
          id: "project-01",
          title: "项目名称待填写",
          organization: "项目方向 / 担任角色",
          period: "起止时间待填写",
          summary: "这里将展示项目背景、负责的工作，以及最终实现的成果。",
          tags: ["项目实践", "个人贡献"],
          placeholder: true,
          details: [
            { heading: "项目背景", text: "待填写：这个项目要解决什么问题，面向哪些用户或场景。" },
            { heading: "我的工作", text: "待填写：自己负责的部分，采用的方法、工具或技术。" },
            { heading: "项目成果", text: "待填写：实际完成的成果，以及可以公开展示的作品或数据。" },
          ],
          url: "", // 可填写作品或代码仓库的 https 链接；留空则不显示按钮。
        },
      ],
    },
    {
      id: "internships", title: "实习", english: "INTERNSHIPS", icon: "work",
      intro: "工作经历",
      emptyText: "参与的工作，以及从中学到的东西。",
      items: [
        {
          id: "internship-01",
          title: "实习单位与岗位待填写",
          organization: "部门 / 岗位方向",
          period: "起止时间待填写",
          summary: "这里将展示实习期间的主要职责、参与的工作和实践收获。",
          tags: ["工作职责", "实践收获"],
          placeholder: true,
          details: [
            { heading: "岗位与团队", text: "待填写：单位、部门、岗位，以及实习起止时间。" },
            { heading: "工作内容", text: "待填写：参与的具体工作、承担的职责和解决的问题。" },
            { heading: "成果与收获", text: "待填写：可以公开的工作成果，以及获得的经验与能力。" },
          ],
          url: "",
        },
      ],
    },
    {
      id: "research", title: "科研", english: "RESEARCH", icon: "research",
      intro: "课题与研究",
      emptyText: "研究课题、方法与相关资料。",
      items: [
        {
          id: "research-01",
          title: "研究课题待填写",
          organization: "研究方向 / 所属团队",
          period: "起止时间待填写",
          summary: "这里将展示研究问题、采用的方法，以及自己的贡献与阶段成果。",
          tags: ["研究方法", "阶段成果"],
          placeholder: true,
          details: [
            { heading: "研究问题", text: "待填写：研究方向、核心问题与课题背景。" },
            { heading: "研究方法", text: "待填写：采用的方法、实验过程及自己承担的工作。" },
            { heading: "研究成果", text: "待填写：实际取得的阶段成果、论文、报告或开源材料。" },
          ],
          url: "",
        },
      ],
    },
  ],
};
