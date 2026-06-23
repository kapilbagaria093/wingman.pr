import { motion } from "motion/react";
import { BracketFrame } from "./BracketFrame";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative pt-28 pb-0 overflow-hidden"
      style={{ background: "#FAF8F4", borderBottom: "3px solid #1A1A1A" }}
    >
      {/* Registration crosshair — top left */}
      <div
        className="absolute top-16 left-10 opacity-20 pointer-events-none"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#1A1A1A" }}
      >
        <div className="flex items-center gap-0">
          <div style={{ width: 20, height: 1, background: "#1A1A1A" }} />
          <div style={{ width: 8, height: 8, border: "1px solid #1A1A1A", borderRadius: "50%", margin: "0 -4px" }} />
          <div style={{ width: 20, height: 1, background: "#1A1A1A" }} />
        </div>
      </div>

      {/* Version tag */}
      <div
        className="absolute top-24 right-8 opacity-30 pointer-events-none"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "#1A1A1A", letterSpacing: "0.1em", writingMode: "vertical-rl" }}
      >
        WM-PR v0.9.1 / BETA
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Top label row */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <span
            className="px-3 py-1 text-xs font-bold"
            style={{
              background: "#FCD307",
              color: "#1A1A1A",
              border: "2px solid #1A1A1A",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.06em",
            }}
          >
            BETA ACCESS OPEN
          </span>
          <span
            className="text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "#888", letterSpacing: "0.04em" }}
          >
            // AI-POWERED CODE REVIEW
          </span>
        </motion.div>

        {/* Main headline grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-end">
          {/* Big headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-8"
          >
            <h1
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(4.5rem, 12vw, 10rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
                color: "#1A1A1A",
                textTransform: "uppercase",
              }}
            >
              YOUR AI
              <br />
              <span style={{ color: "#DC0000" }}>WING</span>
              <span>MAN</span>
              <br />
              <span
                style={{
                  WebkitTextStroke: "3px #1A1A1A",
                  color: "transparent",
                  fontSize: "0.95em",
                }}
              >
                FOR PRS
              </span>
            </h1>
          </motion.div>

          {/* Right side — stats card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 mb-4 lg:mb-0 self-end"
          >
            <BracketFrame color="#DC0000" size={20} thickness={3} className="p-5" style={{ background: "#fff", border: "2px solid #1A1A1A", boxShadow: "5px 5px 0 #1A1A1A" }}>
              <p
                className="mb-5 mt-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  color: "#555",
                  lineHeight: 1.6,
                }}
              >
                wingman.pr reviews your code, catches bugs before they ship, and keeps your team moving faster — inside your GitHub workflow.
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => scrollTo("cta")}
                  className="w-full py-3 font-bold text-sm transition-all duration-150"
                  style={{
                    background: "#DC0000",
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    border: "2px solid #1A1A1A",
                    boxShadow: "4px 4px 0 #1A1A1A",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(2px, 2px)";
                    e.currentTarget.style.boxShadow = "2px 2px 0 #1A1A1A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "4px 4px 0 #1A1A1A";
                  }}
                >
                  START FOR FREE →
                </button>
                <button
                  onClick={() => scrollTo("features")}
                  className="w-full py-3 font-bold text-sm transition-all duration-150"
                  style={{
                    background: "transparent",
                    color: "#1A1A1A",
                    fontFamily: "'Inter', sans-serif",
                    border: "2px solid #1A1A1A",
                    boxShadow: "4px 4px 0 #1A1A1A",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(2px, 2px)";
                    e.currentTarget.style.boxShadow = "2px 2px 0 #1A1A1A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "4px 4px 0 #1A1A1A";
                  }}
                >
                  SEE HOW IT WORKS
                </button>
              </div>
            </BracketFrame>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 grid grid-cols-3"
          style={{ borderTop: "2px solid #1A1A1A" }}
        >
          {[
            { value: "3.2×", label: "FASTER REVIEWS", color: "#DC0000" },
            { value: "94%", label: "BUG CATCH RATE", color: "#1A5FFF" },
            { value: "12K+", label: "PRS REVIEWED", color: "#00AABB" },
          ].map(({ value, label, color }, i) => (
            <div
              key={label}
              className="py-5 px-6 flex flex-col gap-1"
              style={{ borderRight: i < 2 ? "2px solid #1A1A1A" : "none" }}
            >
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {value}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#888",
                  letterSpacing: "0.08em",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
