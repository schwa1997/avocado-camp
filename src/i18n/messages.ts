import type { Locale } from "./locales";

export type Messages = {
  brand: string;
  nav: {
    outcomes: string;
    how: string;
    about: string;
    faq: string;
  };
  header: {
    getSyllabus: string;
    contact: string;
  };
  email: {
    contactSubject: string;
    syllabusSubject: string;
    syllabusBody: string;
  };
  hero: {
    badge: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
    cards: Array<{ title: string; body: string }>;
  };
  outcomes: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{ title: string; body: string }>;
  };
  method: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{ title: string; body: string }>;
  };
  about: {
    eyebrow: string;
    titlePrefix: string;
    description: string;
    cards: Array<{ title: string; body: string }>;
  };
  syllabus: {
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
    cards: Array<{ title: string; body: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ q: string; a: string }>;
  };
  footer: {
    contactLabel: string;
  };
  lang: {
    label: string;
    en: string;
    zh: string;
  };
  comingSoon: {
    title: string;
    body: string;
  };
};

const en: Messages = {
  brand: "Simple English for Developers",
  nav: {
    outcomes: "What you’ll learn",
    how: "How it works",
    about: "About",
    faq: "FAQ",
  },
  header: {
    getSyllabus: "Get the syllabus",
    contact: "Contact",
  },
  email: {
    contactSubject: "English training for developers",
    syllabusSubject: "Syllabus request",
    syllabusBody:
      "Hi! I’d like the syllabus.\n\nMy role:\nMy team/company:\nMy main speaking situations (meetings/interviews/etc):\nMy biggest challenge:\n",
  },
  hero: {
    badge: "Oral English training for developers",
    title: "Speak clear, simple English at work—without sounding “textbook”.",
    lead: "A practical speaking camp focused on the situations developers face every week: standups, code reviews, planning, demos, and interviews.",
    ctaPrimary: "See what you’ll practice",
    ctaSecondary: "Meet the coach",
    note: "No advanced vocabulary required—just the right phrases, in the right order, with lots of speaking time.",
    cards: [
      {
        title: "Meetings & standups",
        body: "Explain progress, blockers, and next steps with short, natural sentences.",
      },
      {
        title: "Code reviews",
        body: "Give feedback politely, disagree clearly, and propose changes without stress.",
      },
      {
        title: "Planning & estimates",
        body: "Ask clarifying questions, discuss tradeoffs, and communicate risk.",
      },
      {
        title: "Interviews",
        body: "Tell your story, describe projects, and answer questions with confidence.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Outcomes",
    title: "What you’ll be able to do",
    description:
      "You’ll practice speaking in real workplace scenarios, using simple English that still sounds professional.",
    cards: [
      {
        title: "Introduce yourself and your work",
        body: "A clean “about me” story: role, stack, what you build, and what you’re aiming for.",
      },
      {
        title: "Explain technical decisions",
        body: "Describe the why, not just the what: constraints, tradeoffs, and alternatives.",
      },
      {
        title: "Ask better questions",
        body: "Clarify requirements, align on scope, and confirm decisions without feeling awkward.",
      },
      {
        title: "Sound calm under pressure",
        body: "Useful phrases to buy time, correct yourself, and keep the conversation moving.",
      },
      {
        title: "Speak with “simple” fluency",
        body: "Fewer complicated words, more clarity—so people understand you the first time.",
      },
      {
        title: "Grow career options",
        body: "Improve communication for global teams, remote roles, and international companies.",
      },
    ],
  },
  method: {
    eyebrow: "Method",
    title: "How the training works",
    description:
      "This is speaking-first. You’ll learn patterns, then immediately use them in guided practice.",
    cards: [
      {
        title: "1) Learn the “small” phrases",
        body: "Short building blocks you can reuse: opening, clarifying, disagreeing, summarizing, and closing.",
      },
      {
        title: "2) Practice in real scenarios",
        body: "Roleplays from dev life: standups, refinement, reviews, demos, and interviews.",
      },
      {
        title: "3) Get feedback and iterate",
        body: "You’ll get corrections and better alternatives—then repeat until it feels natural.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    titlePrefix: "Hi, I’m",
    description:
      "I built this camp to help developers speak English simply, clearly, and confidently.",
    cards: [
      {
        title: "My background",
        body: "I’ve used English at work for 8 years—first in a German company, and now in a Spanish company. I learned what actually helps in day-to-day engineering conversations.",
      },
      {
        title: "My goal",
        body: "Help developers improve spoken English so they have more career choices: global teams, better projects, and stronger interviews.",
      },
    ],
  },
  syllabus: {
    title: "Want the syllabus and a quick intro call?",
    description:
      "Tell me your current level and your work situation (team, meetings, interviews). I’ll reply with a simple plan and the next steps.",
    ctaPrimary: "Email for the syllabus",
    ctaSecondary: "Read the FAQ",
    note: "Update your contact email in the site config.",
    cards: [
      {
        title: "Ideal for",
        body: "Developers who can read English but feel stuck when speaking.",
      },
      {
        title: "Not about",
        body: "Perfect grammar. The focus is clarity and confidence.",
      },
      {
        title: "Format",
        body: "Speaking practice, repetition, and feedback—so it sticks.",
      },
      {
        title: "Result",
        body: "Sound more natural in work conversations, fast.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions",
    description: "If you’re not sure it’s a fit, start here.",
    items: [
      {
        q: "Do I need to be intermediate or advanced?",
        a: "No. The camp is built around simple English. If you can explain basic ideas but want to speak more smoothly at work, you’re in the right place.",
      },
      {
        q: "Is it specific to a programming language?",
        a: "No. The practice is about communication: explaining ideas, discussing tradeoffs, and collaborating in English.",
      },
      {
        q: "How do I join?",
        a: "Send an email and tell me your situation. I’ll reply with the syllabus and the next available start date.",
      },
    ],
  },
  footer: {
    contactLabel: "Contact:",
  },
  lang: {
    label: "Language",
    en: "EN",
    zh: "中文",
  },
  comingSoon: {
    title: "Coming soon",
    body: "This page is a placeholder.",
  },
};

const zh: Messages = {
  brand: "开发者英语口语训练营",
  nav: {
    outcomes: "你会学到什么",
    how: "训练方式",
    about: "关于我",
    faq: "常见问题",
  },
  header: {
    getSyllabus: "获取课程大纲",
    contact: "联系",
  },
  email: {
    contactSubject: "开发者英语口语训练咨询",
    syllabusSubject: "请求课程大纲",
    syllabusBody:
      "你好！我想了解课程大纲。\n\n我的岗位：\n我的团队/公司：\n我最常用英语的场景（会议/面试等）：\n我最大的困难：\n",
  },
  hero: {
    badge: "面向开发者的英语口语训练",
    title: "用清晰、简单的英语开口表达——不再“书面化”。",
    lead: "专注开发者每周真实场景：站会、代码评审、计划讨论、演示与面试。",
    ctaPrimary: "看看你会练什么",
    ctaSecondary: "认识教练",
    note: "不追求复杂词汇：用最简单的句子，说得清楚、说得自然、说得自信。",
    cards: [
      {
        title: "会议与站会",
        body: "用短句说明进展、阻塞和下一步，让别人一次就听懂。",
      },
      {
        title: "代码评审",
        body: "礼貌地给建议、清晰地表达不同意见，并提出可行方案。",
      },
      {
        title: "计划与估时",
        body: "提出澄清问题、讨论取舍，并准确表达风险与不确定性。",
      },
      {
        title: "面试",
        body: "讲清你的经历与项目，在常见问题上更从容、更自信。",
      },
    ],
  },
  outcomes: {
    eyebrow: "目标",
    title: "你将能做到",
    description: "用真实工作场景练口语：简单英语，也能很专业。",
    cards: [
      {
        title: "自我介绍更自然",
        body: "把“我是谁 / 我做什么 / 我擅长什么 / 我想要什么”讲得清楚。",
      },
      {
        title: "讲清技术决策",
        body: "能解释为什么这样做：约束、取舍、备选方案。",
      },
      {
        title: "更会提问",
        body: "澄清需求、对齐范围、确认结论，沟通更顺畅。",
      },
      {
        title: "压力下也能表达",
        body: "学会“争取时间、纠正自己、继续推进对话”的常用句型。",
      },
      {
        title: "简单但流畅",
        body: "不堆词汇，用更少的话表达更多，让别人更容易理解你。",
      },
      {
        title: "职业选择更多",
        body: "为国际团队、远程岗位和更好的面试表现打基础。",
      },
    ],
  },
  method: {
    eyebrow: "方法",
    title: "训练怎么进行",
    description: "以口语为主：先学句型，再立刻练习，用反馈反复打磨。",
    cards: [
      {
        title: "1）掌握可复用句型",
        body: "开场、澄清、不同意、总结、结束——都用“短句模块”组合。",
      },
      {
        title: "2）真实场景角色扮演",
        body: "站会、需求讨论、评审、演示、面试等高频场景。",
      },
      {
        title: "3）反馈 + 重复",
        body: "纠错、给更自然的替换表达，然后重复练到顺口。",
      },
    ],
  },
  about: {
    eyebrow: "关于我",
    titlePrefix: "你好，我是",
    description: "我做这个训练营，是为了帮助开发者用简单英语说清楚、说自然、说自信。",
    cards: [
      {
        title: "我的背景",
        body: "我在工作中使用英语已有 8 年：曾在德国公司做开发，现在在西班牙公司。一路踩过坑，也总结出最实用的表达方式。",
      },
      {
        title: "我的目标",
        body: "帮助开发者提升口语沟通，从而拥有更多职业选择：国际化团队、更好的项目与更强的面试表现。",
      },
    ],
  },
  syllabus: {
    title: "想要课程大纲 + 简短沟通吗？",
    description:
      "告诉我你的当前水平与使用英语的场景（团队/会议/面试等），我会回复一份简单计划和下一步。",
    ctaPrimary: "邮件获取大纲",
    ctaSecondary: "查看常见问题",
    note: "请在站点配置里更新你的联系邮箱。",
    cards: [
      {
        title: "适合谁",
        body: "能读英文，但一开口就卡住的开发者。",
      },
      {
        title: "不强调什么",
        body: "不追求完美语法，重点是清晰与自信。",
      },
      {
        title: "形式",
        body: "大量口语练习 + 纠错 + 复述，让表达真正变成习惯。",
      },
      {
        title: "结果",
        body: "更自然地参与工作对话，进步更快。",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "常见问题",
    description: "不确定是否适合？先看这里。",
    items: [
      {
        q: "需要中级或高级水平吗？",
        a: "不需要。训练营强调“简单英语”。如果你能表达基本想法，但想更顺畅地开口，就很适合。",
      },
      {
        q: "会针对某个编程语言吗？",
        a: "不会。练的是沟通：解释想法、讨论取舍、协作推进。",
      },
      {
        q: "怎么加入？",
        a: "发一封邮件告诉我你的情况。我会回复课程大纲和最近的开始时间。",
      },
    ],
  },
  footer: {
    contactLabel: "联系：",
  },
  lang: {
    label: "语言",
    en: "EN",
    zh: "中文",
  },
  comingSoon: {
    title: "敬请期待",
    body: "这个页面暂时是占位内容。",
  },
};

export function getMessages(locale: Locale): Messages {
  return locale === "zh" ? zh : en;
}