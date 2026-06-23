import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BracketFrame } from "./BracketFrame";

const FEATURES = [
  {
    id: "01",
    tag: "AI REVIEW",
    title: "Line-by-line intelligence",
    description:
      "Reads every diff and reasons about intent, not just syntax. Understands codebase context, catches logic errors humans miss, and suggests concrete fixes.",
    code: `// ⚠ wingman.pr — potential null access
// at src/api/users.ts:47

const user = getUser(id);
// add null guard:
if (!user) return notFound();

const name = user.profile.name; // ✓ safe`,
    accent: "#DC0000",
    bg: "#FFF0F0",
  },
  {
    id: "02",
    tag: "GITHUB NATIVE",
    title: "Lives in your PR workflow",
    description:
      "Installs as a GitHub App and posts inline comments directly on pull requests. AI suggestions sit alongside human feedback — no new tools, no context switching.",
    code: `# .github/workflows/wingman.yml
name: wingman.pr review
on: [pull_request]

jobs:
  review:
    uses: wingmanpr/action@v1
    with:
      depth: thorough
      focus: security,perf`,
    accent: "#1A5FFF",
    bg: "#F0F4FF",
  },
  {
    id: "03",
    tag: "SECURITY",
    title: "Catch vulnerabilities early",
    description:
      "Checks OWASP Top 10, injection risks, auth bypass attempts, and dependency vulnerabilities — all flagged before code reaches production.",
    code: `⚠ SECURITY — HIGH severity
File: src/api/auth.ts:112

Raw input → SQL query (injection risk)
Use parameterized queries:

db.query(
  "SELECT * FROM users WHERE id = $1",
  [userId]  ← required
)`,
    accent: "#DC0000",
    bg: "#FFF0F0",
  },
  {
    id: "04",
    tag: "PERFORMANCE",
    title: "Profile before production",
    description:
      "Identifies N+1 queries, expensive re-renders, memory leaks, and algorithmic complexity issues at review time — 10× cheaper to fix than post-deploy.",
    code: `💡 PERF — N+1 query detected
Lines 88–94:

// 1 query per post (slow!)
posts.forEach(async (post) => {
  const author = await db.findUser(post.authorId);
});
// suggestion: findMany + Map`,
    accent: "#FF6200",
    bg: "#FFF5EE",
  },
  {
    id: "05",
    tag: "CONTEXT-AWARE",
    title: "Learns your conventions",
    description:
      "Reads your existing patterns, style guides, and team norms. Suggestions match how your team actually codes — not generic advice that doesn't fit your stack.",
    code: `// wingman learned you use Result<T, E>

// ❌ throws — breaks your pattern
function parseConfig(raw: string) {
  return JSON.parse(raw);
}

// ✅ suggested fix:
function parseConfig(raw: string)
  : Result<Config, Error>`,
    accent: "#00AABB",
    bg: "#F0FAFA",
  },
];

export function FeaturesCarousel() {
  const [active, setActive] = useState(0);
  const cur = FEATURES[active];

  return (
    <section id="features" style={{ background: "#FAF8F4", borderBottom: "3px solid #1A1A1A" }}>
      {/* Section header strip */}
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: "2px solid #1A1A1A", background: "#FCD307" }}
      >
        <div className="flex items-center gap-4">
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#1A1A1A",
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            Features
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "#555",
              letterSpacing: "0.08em",
            }}
          >
            // {String(active + 1).padStart(2, "0")} OF {FEATURES.length}
          </span>
        </div>
        <div className="flex gap-2">
          {FEATURES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-150"
              style={{
                width: active === i ? 28 : 10,
                height: 10,
                background: active === i ? "#DC0000" : "#1A1A1A",
                border: "1.5px solid #1A1A1A",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Sidebar tabs */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {FEATURES.map((f, i) => (
              <button
                key={f.id}
                onClick={() => setActive(i)}
                className="flex-shrink-0 lg:flex-shrink text-left px-4 py-4 flex items-center gap-4 transition-all duration-150"
                style={{
                  background: active === i ? f.bg : "#fff",
                  border: "2px solid #1A1A1A",
                  boxShadow: active === i ? `4px 4px 0 ${f.accent}` : "3px 3px 0 #1A1A1A",
                  minWidth: "180px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: active === i ? f.accent : "#ccc",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    minWidth: "2.5rem",
                  }}
                >
                  {f.id}
                </span>
                <span>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      color: active === i ? f.accent : "#999",
                      letterSpacing: "0.07em",
                      marginBottom: "2px",
                    }}
                  >
                    {f.tag}
                  </div>
                  <div
                    className="hidden lg:block"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      color: active === i ? "#1A1A1A" : "#888",
                      lineHeight: 1.3,
                    }}
                  >
                    {f.title}
                  </div>
                </span>
              </button>
            ))}
          </div>

          {/* Feature panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={cur.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.2 }}
              >
                <BracketFrame
                  color={cur.accent}
                  size={22}
                  thickness={3}
                  style={{
                    background: "#fff",
                    border: "2px solid #1A1A1A",
                    boxShadow: `6px 6px 0 ${cur.accent}`,
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  {/* Feature ID badge */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div
                        className="inline-block px-2 py-0.5 mb-3"
                        style={{
                          background: cur.accent,
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.65rem",
                          color: "#fff",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {cur.tag}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 800,
                          fontSize: "2.2rem",
                          color: "#1A1A1A",
                          lineHeight: 1.05,
                          letterSpacing: "-0.02em",
                          textTransform: "uppercase",
                        }}
                      >
                        {cur.title}
                      </h3>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 900,
                        fontSize: "4rem",
                        color: cur.accent,
                        opacity: 0.15,
                        lineHeight: 1,
                        letterSpacing: "-0.04em",
                        userSelect: "none",
                      }}
                    >
                      {cur.id}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1rem",
                      color: "#555",
                      lineHeight: 1.7,
                    }}
                  >
                    {cur.description}
                  </p>

                  {/* Code block */}
                  <div
                    style={{
                      background: "#1A1A1A",
                      border: `2px solid ${cur.accent}`,
                      padding: "1.25rem",
                    }}
                  >
                    <div
                      className="flex items-center gap-2 mb-3"
                      style={{ borderBottom: `1px solid ${cur.accent}33`, paddingBottom: "0.5rem" }}
                    >
                      {[cur.accent, "#FCD307", "#1A1A1A"].map((c, i) => (
                        <span key={i} style={{ width: 8, height: 8, background: c, border: "1px solid #333" }} />
                      ))}
                      <span
                        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#666", letterSpacing: "0.06em", marginLeft: 4 }}
                      >
                        wingman.pr / suggestion
                      </span>
                    </div>
                    <pre
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.78rem",
                        color: "#e0e0e0",
                        lineHeight: 1.7,
                        whiteSpace: "pre-wrap",
                        margin: 0,
                      }}
                    >
                      {cur.code}
                    </pre>
                  </div>

                  {/* Nav */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActive((active - 1 + FEATURES.length) % FEATURES.length)}
                      className="px-4 py-2 text-sm font-bold transition-all duration-150"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        border: "2px solid #1A1A1A",
                        boxShadow: "3px 3px 0 #1A1A1A",
                        background: "#fff",
                        color: "#1A1A1A",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translate(2px,2px)";
                        e.currentTarget.style.boxShadow = "1px 1px 0 #1A1A1A";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = "3px 3px 0 #1A1A1A";
                      }}
                    >
                      ← PREV
                    </button>
                    <button
                      onClick={() => setActive((active + 1) % FEATURES.length)}
                      className="px-4 py-2 text-sm font-bold transition-all duration-150"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        border: "2px solid #1A1A1A",
                        boxShadow: `3px 3px 0 ${cur.accent}`,
                        background: cur.accent,
                        color: "#fff",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translate(2px,2px)";
                        e.currentTarget.style.boxShadow = `1px 1px 0 ${cur.accent}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = `3px 3px 0 ${cur.accent}`;
                      }}
                    >
                      NEXT →
                    </button>
                  </div>
                </BracketFrame>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
