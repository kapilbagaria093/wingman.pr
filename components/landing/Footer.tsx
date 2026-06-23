export function Footer() {
  return (
    <footer style={{ background: "#1A1A1A" }}>
      {/* Yellow top stripe */}
      <div style={{ height: "6px", background: "#FCD307", borderBottom: "2px solid #1A1A1A" }} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + copy */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-flex items-center justify-center w-8 h-8 text-white font-black"
                style={{
                  background: "#DC0000",
                  border: "2px solid #FCD307",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "1rem",
                }}
              >
                W
              </span>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "1.2rem",
                  color: "#fff",
                  letterSpacing: "0.02em",
                }}
              >
                WINGMAN<span style={{ color: "#DC0000" }}>.PR</span>
              </span>
            </div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "#555",
                letterSpacing: "0.05em",
              }}
            >
              © 2026 WINGMAN.PR — ALL RIGHTS RESERVED
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {["PRIVACY", "TERMS", "SECURITY", "STATUS", "DOCS"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-150"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#555",
                  letterSpacing: "0.06em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FCD307")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Color stripe */}
          <div className="flex gap-1">
            {["#DC0000", "#FCD307", "#1A5FFF", "#00AABB", "#FF6200"].map((c) => (
              <div
                key={c}
                style={{
                  width: 16,
                  height: 16,
                  background: c,
                  border: "1.5px solid #333",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
