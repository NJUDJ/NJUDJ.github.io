// 页面内容来源于个人简历 V2；比赛奖项及项目来源按本人最新说明更新。
window.PROFILE = {
  "name": "个人主页",
  "personName": "段杰",
  "handle": "NJUDJ",
  "initials": "DJ",
  "description": "关注 AI 应用开发、Java 后端与 Agent 工程。\n这里记录我的项目实践、创业参与和科研进展。",
  "about": "南京大学软件工程本科在读，软工经济创新班。参与个人 AI 软件与企业 Agent 方案落地，也负责 AI IDE 用户评价研究中的标注工具开发和数据分析。正在寻找第一份 AI 应用开发 / Java 后端开发实习。",
  "education": "南京大学 · 软件工程",
  "degree": "本科 · 2025—2029",
  "className": "软工经济创新班",
  "availability": "每周可到岗 4—5 天，上午、下午均可",
  "direction": "AI 应用开发 / Java 后端开发",
  "email": "251250265@smail.nju.edu.cn",
  "github": "https://github.com/NJUDJ",
  "startTime": "2026-10-09T00:00:00+08:00",
  "updated": "2026.10.27",
  "skills": [
    {
      "label": "Agent / AI",
      "text": "Context Engineering · RAG · Long-term Memory · Tool / Function Calling · MCP · Structured Output · Agent Runtime / Routing / Fallback"
    },
    {
      "label": "后端开发",
      "text": "Java · Spring Boot · MyBatis-Plus · MySQL · BCrypt / JWT 签发 · Jakarta Validation"
    },
    {
      "label": "Engineering",
      "text": "Python · Java · C++ · Swift / Kotlin · MySQL / Redis / RabbitMQ/SQLite · Docker · Git / CI · Async / Networking / Testing"
    },
    {
      "label": "研究与交付",
      "text": "FDE 企业 Agent 方案与联调 · 个人 AI 软件研发 · ABSA / Taxonomy · Jaccard · Ground Truth"
    }
  ],
  "sections": [
    {
      "id": "projects",
      "title": "项目实践",
      "filterTitle": "项目",
      "english": "PROJECT",
      "icon": "project",
      "intro": "用户体系与后端工程",
      "items": [
        {
          "id": "project-01",
          "title": "AI 心理健康助手后端开发",
          "organization": "个人项目",
          "period": "后端开发",
          "summary": "面向校园心理健康应用构建用户基础模块，完成注册、登录接口，以及密码处理、令牌签发与接口治理。",
          "tags": [
            "Java / Spring Boot",
            "MyBatis-Plus",
            "MySQL"
          ],
          "highlights": [
            "Controller → Service → Mapper 分层，DTO 与 Entity 分离。",
            "BCrypt 密码哈希与 HMAC-SHA256 JWT 签发。",
            "@Valid 参数校验、统一响应与全局异常处理。"
          ],
          "facts": [
            {
              "value": "2",
              "label": "已实现 POST 接口",
              "note": "注册 / 登录"
            }
          ],
          "factScope": "当前实现范围：用户基础模块",
          "details": [
            {
              "heading": "项目概况",
              "text": "基于 Java / Spring Boot、MyBatis-Plus 与 MySQL 构建校园心理健康应用用户模块，已实现注册、登录 2 个 POST 接口。"
            },
            {
              "heading": "分层与数据契约",
              "text": "采用 Controller → Service → Mapper 分层，以 Command DTO / Response DTO 与 Entity 隔离接口协议和持久化模型；通过 LambdaQueryWrapper 构造用户名 / 邮箱 OR 查询与重复检查，响应映射排除密码字段。"
            },
            {
              "heading": "账户与凭证处理",
              "text": "串联用户名 / 邮箱重复预检、密码确认、账户状态及用户类型合法性校验；使用 BCrypt encode / matches 完成密码哈希与验证，以 HMAC-SHA256 签发含用户身份、角色、签发者及有效期的 JWT。"
            },
            {
              "heading": "接口治理",
              "text": "通过 @Valid + Jakarta Validation 声明字段必填、长度与格式约束；以 Result<T> 统一响应，由 @RestControllerAdvice 集中处理参数校验与 BusinessException 两类异常，分离输入约束和业务规则。"
            }
          ],
          "url": ""
        }
      ]
    },
    {
      "id": "startup",
      "title": "创业实践",
      "filterTitle": "创业",
      "english": "PRODUCT & FDE",
      "icon": "work",
      "intro": "个人 AI 产品与业务落地",
      "items": [
        {
          "id": "vesti-xinji",
          "title": "心迹群岛 VESTI 产品开发与 FDE",
          "organization": "心迹群岛（南京）智能科技有限公司",
          "period": "核心开发成员",
          "summary": "该创业项目由心迹群岛南客松金奖项目发展而来。参与 Local-First AI 记忆中台研发，围绕跨平台会话归档、本地知识库检索与企业 Agent 方案推进功能迭代。",
          "tags": [
            "React / TypeScript",
            "Local-First",
            "Hybrid Search",
            "MCP / FDE"
          ],
          "highlights": [
            "Plasmo / Chrome MV3，Parser / Observer / Gate 分层与 IndexedDB 本地持久化。",
            "Embedding → 混合检索 → Top-K 上下文装配 → 引用溯源。",
            "参与需求对接、部署联调、结构化输出与工具接入方案。"
          ],
          "facts": [
            {
              "value": "8",
              "label": "AI 平台覆盖",
              "note": "团队产品范围"
            },
            {
              "value": "1.000",
              "label": "Recall@5",
              "note": "团队产品评测"
            },
            {
              "value": "< 40 ms",
              "label": "1 万条向量扫描",
              "note": "团队产品评测"
            }
          ],
          "factScope": "覆盖范围及性能数据采用团队产品评测口径",
          "details": [
            {
              "heading": "项目来源",
              "text": "该创业项目由心迹群岛南客松金奖项目发展而来。作为核心开发成员，参与后续 VESTI 产品开发与 FDE 工作。"
            },
            {
              "heading": "产品与个人角色",
              "text": "Local-First AI 记忆中台；团队产品覆盖 8 大 AI 平台，提供扩展 / Web / 桌面 / Skills / MCP 多形态入口。"
            },
            {
              "heading": "跨平台采集与存储",
              "text": "参与 React / TypeScript + Plasmo（Chrome MV3）产品研发；以 Parser / Observer / Gate 分层与 MutationObserver 监听解析多平台对话，通过 Dexie.js / IndexedDB 本地持久化及增量更新实现会话归档。"
            },
            {
              "heading": "记忆检索与知识复用",
              "text": "围绕 Embedding → 关键词 / 向量 Hybrid Search → Top-K 上下文装配 → 引用溯源参与功能迭代，支撑本地知识库问答与跨会话记忆复用；团队产品评测口径：Recall@5 = 1.000，1 万条向量扫描 < 40 ms。"
            },
            {
              "heading": "FDE 方案与部署联调",
              "text": "参与需求对接、功能联调与部署适配；企业 Agent 技术方案涉及 RAG 知识检索、Prompt-as-Code、JSON Schema / Structured Output 与 MCP / Tool Calling 接入，结合使用反馈迭代，项目配套用户交流社群。"
            }
          ],
          "url": "https://github.com/abraxas914/VESTI",
          "linkLabel": "VESTI 开源仓库"
        }
      ]
    },
    {
      "id": "research",
      "title": "科研探索",
      "filterTitle": "科研",
      "english": "RESEARCH",
      "icon": "research",
      "intro": "理解开发者的真实评价",
      "items": [
        {
          "id": "research-01",
          "title": "AI IDE 用户评价分析与动态追踪",
          "organization": "南京大学开甲书院早期科研训练项目",
          "period": "学生小组组长 · 2026.04—至今",
          "summary": "负责长文本标注工具开发与数据分析，统筹六人团队校准。当前推进 Reddit 数据标注，为自动化抽取、评价趋势分析及后续论文准备数据。",
          "tags": [
            "ABSA / Taxonomy",
            "Jaccard",
            "Ground Truth"
          ],
          "highlights": [
            "基于前序研究的 62 个叶子标签，开展 Reddit 多对象、多标签场景适配。",
            "评价筛选 → 对象 / 证据定位 → 维度 / 情感标注。",
            "Jaccard 分歧分析、规则修订与历史数据回溯复核。"
          ],
          "facts": [
            {
              "value": "134",
              "label": "帖子",
              "note": "97 条评价 / 37 条非评价"
            },
            {
              "value": "176",
              "label": "评价三元组",
              "note": "对象 / 维度 / 情感"
            },
            {
              "value": "42",
              "label": "涉及叶子标签",
              "note": "覆盖 5 款工具"
            }
          ],
          "factScope": "G01 批次阶段数据 · 当前为标注与论文前期准备",
          "details": [
            {
              "heading": "项目与当前进展",
              "text": "南京大学开甲书院早期科研训练项目  ·  指导教师：匡老师\n角色：项目学生小组组长。论文计划撰写，当前正在进行数据标注与分析准备。"
            },
            {
              "heading": "前序研究基础",
              "text": "研究基础：Lyu et al. “My productivity is boosted, but ...” Demystifying Users’ Perception on AI Coding Assistants（ASE 2025）。\n该论文为方法参考。"
            },
            {
              "heading": "Taxonomy 适配",
              "text": "面向 Reddit 长文本，对前序研究的 62 个叶子标签进行场景裁剪、扩展与边界澄清；采用评价筛选 → 对象 / 证据定位 → 维度 / 情感标注，处理多对象、多标签的 Aspect-Based Sentiment Analysis（ABSA）任务。"
            },
            {
              "heading": "标注工具与一致性",
              "text": "开发并优化长文本标注工具，统筹六人团队的标注分工与校准；汇总多人标注，使用 Jaccard 相似度定位标签集合分歧，结合分类规则修订开展历史数据回溯复核，为后续 Ground Truth 构建准备数据。"
            },
            {
              "heading": "阶段数据与分析",
              "text": "G01 批次整理 134 条帖子（评价 97 条、非评价 37 条），形成 176 组“对象—评价维度—情感倾向”三元组，涉及 42 个叶子标签、覆盖 5 款工具；当前推进数据标注与分析准备。"
            },
            {
              "heading": "研究价值与论文准备",
              "text": "拟以人工 Ground Truth 比较叶子 / 子类 / 主类三层级自动抽取并追踪评价趋势，以真实体验补充 HumanEval / SWE-bench，为工具选型、产品优化和计划撰写的后续论文准备数据。"
            }
          ],
          "url": "https://arxiv.org/abs/2508.12285",
          "linkLabel": "阅读前序研究（ASE 2025）"
        }
      ]
    },
    {
      "id": "awards",
      "title": "比赛奖项",
      "filterTitle": "奖项",
      "english": "AWARDS",
      "icon": "project",
      "intro": "项目路演与赛事成果",
      "items": [
        {
          "id": "award-ai-innovation-01",
          "title": "心度屿 · AI 应用与软件赛道二等奖",
          "organization": "第三届南京大学新科技校友发展大会暨首届 AI 创新创业大赛",
          "period": "心迹群岛、心度屿双项目路演",
          "summary": "心迹群岛与心度屿双项目路演，心度屿获得 AI 应用与软件赛道二等奖。心迹群岛此前已获南客松金奖，本次参与路演、未参赛。",
          "tags": [
            "AI 创新创业大赛",
            "双项目路演",
            "二等奖"
          ],
          "facts": [
            {
              "value": "二等奖",
              "label": "AI 应用与软件赛道",
              "note": "获奖项目：心度屿"
            }
          ],
          "factScope": "本届二等奖归属心度屿；心迹群岛未参加本次竞赛。",
          "details": [
            {
              "heading": "赛事与获奖",
              "text": "第三届南京大学新科技校友发展大会暨首届 AI 创新创业大赛。\n赛道：AI 应用与软件。\n获奖项目：心度屿。\n奖项：二等奖。"
            },
            {
              "heading": "双项目路演与参赛情况",
              "text": "心迹群岛与心度屿进行了双项目路演。心迹群岛此前已获南客松金奖，本次参与路演、未参赛；心度屿参加本次竞赛并获得 AI 应用与软件赛道二等奖。"
            },
            {
              "heading": "与创业实践的关联",
              "text": "创业实践中的心迹群岛项目，由心迹群岛南客松金奖项目发展而来。"
            }
          ],
          "url": ""
        }
      ]
    }
  ]
};
