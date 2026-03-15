import { siteConfig } from "@/content/site";

export default function AvocadoPosterPage() {
  const posterPath = "/avocado-poster-zh.svg";

  return (
    <main className="container" style={{ paddingTop: 40, paddingBottom: 72 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
        <a className="btn btnSecondary" href="/">
          ← Back
        </a>
        <a className="btn btnPrimary" href={posterPath} download>
          下载海报（SVG）
        </a>
        <a className="btn btnSecondary" href={posterPath} target="_blank" rel="noreferrer">
          在新标签打开
        </a>
        <span className="note" style={{ margin: 0 }}>
          你可以把右侧二维码区域替换成你的微信/报名链接。
        </span>
      </div>

      <div style={{ height: 16 }} />

      <div className="panel" style={{ padding: 16 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
          }}
        >
          <div>
            <h1 className="h2 left" style={{ marginTop: 0 }}>
              海报下载
            </h1>
            <p className="sectionDesc left" style={{ marginTop: 10 }}>
              标题：牛油果英语训练培训营 · 一个月英语口语训练 · 价格 ¥999
            </p>
            <p className="note" style={{ marginTop: 10 }}>
              联系邮箱（可改）：{siteConfig.contactEmail}
            </p>
          </div>

          <div
            style={{
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "rgba(0,0,0,0.18)",
            }}
          >
            {/* Use plain img for crisp SVG preview */}
            <img
              src={posterPath}
              alt="牛油果英语训练培训营 海报"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}