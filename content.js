// 修改文字主要看这个文件。引号中填文字；每一项后面的逗号请保留。
window.PROFILE = {
  name: "个人主页",
  handle: "NJUDJ",
  initials: "NJ",
  description: "这里整理我的项目、实习、科研和创业经历。",
  about: "正在开展 AI IDE 用户评价研究，也参与心迹群岛的个人 AI 软件开发与 FDE 工作。",
  startTime: "2026-10-09T00:00:00+08:00",
  github: "https://github.com/NJUDJ",

  // 科研和创业栏目已填写真实经历；项目与实习栏目暂时保留占位内容。
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
          title: "基于 Reddit 社区的 AI IDE 用户评价分析与动态追踪",
          organization: "南京大学开甲书院新生早期科研训练项目",
          period: "2026.04 — 至今",
          summary: "担任六人团队负责人，负责标注工具开发与数据分析，研究开发者对主流 AI 编程工具的真实评价。G01 批次已整理 134 条帖子，形成 176 组三元组。",
          tags: ["项目负责人", "标注工具开发", "数据分析"],
          placeholder: false,
          details: [
            {
              heading: "项目概况",
              text: "项目全称：基于 Reddit 社区的主流 AI IDE 用户真实评价的感知分析与动态追踪研究。\n南京大学开甲书院新生早期科研训练项目，指导教师：匡宏宇。\n项目以 Reddit 社区的真实讨论为研究对象，分析开发者对 AI 编程工具的使用评价与关注维度，为后续自动化评价分析和长期动态追踪提供基础。",
            },
            {
              heading: "团队统筹",
              text: "作为项目负责人，组织六人团队开展文献调研、标注分工和多轮校准讨论，推进研究方案细化、标注任务安排与结果复核。",
            },
            {
              heading: "标注工具开发",
              text: "负责评论标注工具的开发与优化，适配 Reddit 长文本、多评价对象和多标签场景，支持团队完成结构化标注。",
            },
            {
              heading: "标签体系与研究方法",
              text: "参与改造已有用户反馈标签体系，将评价整理为“对象—评价维度—情感倾向”三元组，明确非评价内容、工具比较及相近标签的判定边界。",
            },
            {
              heading: "数据分析与质量控制",
              text: "负责标注结果汇总与分歧分析，使用 Jaccard 相似度比较多位标注者的结果，推动标注规则修订与历史数据复核。",
            },
            {
              heading: "阶段性成果",
              text: "已推进开放校准、配对试标和正式标注。\nG01 批次覆盖 Claude Code、Codex、GitHub Copilot、Antigravity、Cursor 五款工具，共整理 134 条帖子，其中 97 条为评价、37 条为非评价，形成 176 组三元组。\n阶段标注结果为后续自动化评价抽取与动态追踪提供结构化数据基础。",
            },
          ],
          url: "",
        },
      ],
    },
    {
      id: "startup", title: "创业", english: "STARTUP", icon: "work",
      intro: "产品开发与业务落地",
      emptyText: "创业项目与产品实践。",
      items: [
        {
          id: "vesti-xinji",
          title: "心迹群岛 VESTI 产品开发与 FDE",
          organization: "心迹群岛（南京）智能科技有限公司",
          period: "参与中",
          summary: "作为核心开发成员，主要参与 VESTI 个人 AI 辅助软件开发与 FDE 业务落地。项目同时开展 AI 技术交流与用户社群建设。",
          tags: ["核心开发成员", "AI 软件开发", "FDE"],
          placeholder: false,
          details: [
            {
              heading: "公司与项目",
              text: "参与心迹群岛（南京）智能科技有限公司创业项目，担任核心开发成员。\n公司围绕 VESTI 心迹开展本地优先的 AI 对话记忆与知识管理产品研发，并面向企业提供知识库与 Agent 应用服务。",
            },
            {
              heading: "个人 AI 辅助软件开发",
              text: "参与 VESTI 个人端 AI 辅助软件开发，围绕跨平台 AI 对话整理、记忆检索与知识复用等场景，推进功能实现与产品迭代。",
            },
            {
              heading: "FDE 与业务落地",
              text: "参与 FDE 项目，在实际业务场景中对接需求、开发功能、适配部署，并根据使用反馈迭代，推动 AI 应用融入具体工作流程。",
            },
            {
              heading: "社群与用户交流",
              text: "项目现已建立社群，围绕 AI 工具使用、产品体验和开发实践开展交流，连接产品使用者与开发团队，收集实际需求与改进反馈。",
            },
          ],
          url: "https://github.com/abraxas914/VESTI",
        },
      ],
    },
  ],
};
