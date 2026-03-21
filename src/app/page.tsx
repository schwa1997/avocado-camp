export const metadata = {
  title: "学期课程时间表 · 2026年4月—7月",
  description: "英语口语学期课，零基础/口语突破/求职英语，每周 2 节录制课 + 无限量一对一。",
};

const phases = [
  {
    id: "pronunciation",
    phase: "第一阶段",
    title: "发音专题",
    weeks: "Week 1–6",
    color: "#3b82f6",
    weeks_data: [
      { week: "W1", lesson: "元音①：/iː/ /ɪ/ /e/ /æ/（中国人高频错误）" },
      { week: "W2", lesson: "元音②：/ɑː/ /ɒ/ /ɔː/ /ʊ/ /uː/" },
      { week: "W3", lesson: "元音③：/ʌ/ /ɜː/ /ə/ 中央元音" },
      { week: "W4", lesson: "辅音①：/p/ /b/ /t/ /d/ /k/ /g/ 送气音" },
      { week: "W5", lesson: "辅音②：/θ/ /ð/ /v/ /r/ 中国人难点" },
      { week: "W6", lesson: "辅音③：/l/ /n/ /ŋ/ + 连读入门" },
    ],
  },
  {
    id: "grammar",
    phase: "第二阶段",
    title: "基础语法",
    weeks: "Week 7–11",
    color: "#10b981",
    weeks_data: [
      { week: "W7", lesson: "时态①：一般现在 / 现在进行" },
      { week: "W8", lesson: "时态②：一般过去 / 过去进行" },
      { week: "W9", lesson: "时态③：将来时 / 现在完成时" },
      { week: "W10", lesson: "句型①：疑问句、否定句结构" },
      { week: "W11", lesson: "句型②：there be / 情态动词 + 综合复习" },
    ],
  },
  {
    id: "speaking",
    phase: "第三阶段",
    title: "基础口语",
    weeks: "Week 12–17",
    color: "#f59e0b",
    weeks_data: [
      { week: "W12", lesson: "口语场景①：自我介绍 / 问路" },
      { week: "W13", lesson: "口语场景②：购物 / 餐厅点餐" },
      { week: "W14", lesson: "口语场景③：工作 / 面试英语" },
      { week: "W15", lesson: "口语场景④：旅行 / 日常闲聊" },
      { week: "W16", lesson: "综合练习 + 常见错误总结" },
    ],
  },
];

const tracks = [
  {
    icon: "🌱",
    name: "零基础入门",
    color: "#3b82f6",
    who: "上学学过但没学会，更何况开口说。",
    result: "学期结束后能开口说话，不再卡壳。",
  },
  {
    icon: "🗣️",
    name: "口语突破",
    color: "#10b981",
    who: "有一定英语基础，能看懂文字，但一开口就不知道咋说。",
    result: "说话更流畅自然，敢开口，不怕外国人听不懂。",
  },
  {
    icon: "💼",
    name: "求职 / 职场英语",
    color: "#f59e0b",
    who: "准备找工作、跳槽外企、做海外业务，需要英语面试。",
    result: "拿到心仪 offer，或在外企工作中更自信地用英语沟通。",
  },
];

export default function HomePage() {
  return (
    <main className="container" style={{ paddingTop: 20, paddingBottom: 32 }}>

      {/* Hero */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>
          学期课程时间表
        </h1>
        <span style={{ fontSize: 12, color: "var(--muted)" }}>
          2026年4月—7月 · 每周 2 节录制课 + 无限量一对一 · 发音 → 语法 → 口语
        </span>
      </div>

      {/* Tracks */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 16 }}>
        {tracks.map((t) => (
          <div key={t.name} className="card" style={{ padding: "10px 12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              <span style={{ fontSize: 16 }}>{t.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 700 }}>{t.name}</span>
            </div>
            <p style={{ margin: 0, fontSize: 11, color: "var(--muted)", lineHeight: 1.4 }}>{t.who}</p>
            <p style={{ margin: "6px 0 0", fontSize: 11, fontWeight: 600, color: t.color }}>{t.result}</p>
          </div>
        ))}
      </div>

      {/* Instructor intro */}
      <div className="panel" style={{ marginBottom: 16, padding: "16px 20px" }}>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 280px" }}>
            <p style={{ margin: "0 0 6px", fontSize: 10, fontWeight: 750, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>
              这门课适合你吗？
            </p>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: "var(--fg)" }}>
              零基础、开口困难、或者需要英语找工作——都可以来。你会学到发音（比如 <em>thank you</em> 而不是"三克油"）、基础连读、上学时候的语法回顾。但最主要的是：<strong>开口说</strong>。
            </p>
            <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.65, color: "var(--muted)" }}>
              也许你会第一次用英语做自我介绍，第一次描述今天发生了什么，第一次用英语面试、拿到 offer。不是变成大牛，就是给自己一个新的人生体验，试试看。
            </p>
          </div>

          <div style={{ width: 1, background: "var(--border)", alignSelf: "stretch", flexShrink: 0 }} />

          <div style={{ flex: "1 1 240px" }}>
            <p style={{ margin: "0 0 6px", fontSize: 10, fontWeight: 750, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>
              关于讲师
            </p>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #10b981, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                🐶
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6 }}>
                  英语口语真的蛮不错的——工作和生活都在用。ENFP 快乐小狗，热爱一切，比较能聊，<strong>尤其适合 i 人</strong>。
                </p>
                <p style={{ margin: "6px 0 0", fontSize: 12, color: "var(--muted)", lineHeight: 1.55 }}>
                  说实话：我不擅长很严格地督促你执行，不是批评式教育。需要我们一起努力、互相成就那种。😅
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phases — 3 columns */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, alignItems: "start" }}>
        {phases.map((phase) => (
          <div key={phase.id} className="panel" style={{ padding: 0, overflow: "hidden" }}>
            <div style={{
              padding: "7px 12px",
              background: `color-mix(in oklab, ${phase.color} 8%, transparent)`,
              borderBottom: "1px solid var(--border)",
            }}>
              <span style={{ fontSize: 9, fontWeight: 750, letterSpacing: "0.08em", textTransform: "uppercase", color: phase.color }}>
                {phase.phase} · {phase.weeks}
              </span>
              <div style={{ fontSize: 14, fontWeight: 700, marginTop: 1 }}>{phase.title}</div>
            </div>
            {phase.weeks_data.map((row, i) => (
              <div key={row.week} style={{
                display: "grid", gridTemplateColumns: "32px 1fr",
                padding: "6px 12px", gap: 8,
                borderBottom: i < phase.weeks_data.length - 1 ? "1px solid var(--border)" : "none",
                alignItems: "start",
              }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: phase.color, paddingTop: 1 }}>{row.week}</span>
                <span style={{ fontSize: 11, lineHeight: 1.4 }}>{row.lesson}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

    </main>
  );
}
