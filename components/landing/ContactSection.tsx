import { useState } from "react";
import { motion } from "motion/react";
import { BracketFrame } from "./BracketFrame";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "w-full px-4 py-3 text-sm outline-none transition-all duration-150";
  const inputStyle = {
    background: "#FAF8F4",
    border: "2px solid #1A1A1A",
    color: "#1A1A1A",
    fontFamily: "'Inter', sans-serif",
    boxShadow: "3px 3px 0 #1A1A1A",
  };

  return (
    <section id="contact" style={{ background: "#FAF8F4", borderBottom: "3px solid #1A1A1A" }}>
      {/* Teal header strip */}
      <div
        className="px-6 py-4 flex items-center gap-4"
        style={{ background: "#00AABB", borderBottom: "2px solid #1A1A1A" }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "1.5rem",
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
          }}
        >
          Contact Us
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "0.08em",
          }}
        >
          // WE RESPOND WITHIN HOURS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2
              className="mb-5"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                color: "#1A1A1A",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
              }}
            >
              TALK TO
              <br />
              <span style={{ color: "#DC0000" }}>THE TEAM</span>
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "#555",
                lineHeight: 1.7,
                maxWidth: "380px",
              }}
            >
              Questions about pricing, need a demo, or want to explore an enterprise deal? We're here. Usually respond within a few hours.
            </p>

            {/* Contact tiles */}
            <div className="flex flex-col gap-4">
              {[
                { label: "EMAIL", value: "hello@wingman.pr", accent: "#DC0000" },
                { label: "GITHUB", value: "github.com/wingmanpr", accent: "#1A5FFF" },
                { label: "DISCORD", value: "discord.gg/wingmanpr", accent: "#00AABB" },
              ].map(({ label, value, accent }) => (
                <BracketFrame
                  key={label}
                  color={accent}
                  size={14}
                  thickness={2}
                  style={{
                    background: "#fff",
                    border: "2px solid #1A1A1A",
                    boxShadow: `4px 4px 0 ${accent}`,
                    padding: "0.875rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    className="text-xs font-black"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: accent,
                      letterSpacing: "0.07em",
                      minWidth: "4rem",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      width: "1px",
                      height: "24px",
                      background: "#1A1A1A",
                      opacity: 0.2,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "#1A1A1A",
                      fontWeight: 500,
                    }}
                  >
                    {value}
                  </div>
                </BracketFrame>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {!sent ? (
              <div
                style={{
                  background: "#fff",
                  border: "2px solid #1A1A1A",
                  boxShadow: "6px 6px 0 #1A1A1A",
                  padding: "2rem",
                }}
              >
                {/* Form header */}
                <div
                  className="flex items-center gap-3 mb-6 pb-4"
                  style={{ borderBottom: "2px solid #1A1A1A" }}
                >
                  <span
                    className="px-2 py-0.5"
                    style={{
                      background: "#FCD307",
                      color: "#1A1A1A",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      border: "1.5px solid #1A1A1A",
                    }}
                  >
                    MSG-NEW
                  </span>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.3rem",
                      color: "#1A1A1A",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    SEND A MESSAGE
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#888", letterSpacing: "0.07em" }}>
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Chen"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#DC0000")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#1A1A1A")}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#888", letterSpacing: "0.07em" }}>
                      WORK EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#DC0000")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#1A1A1A")}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#888", letterSpacing: "0.07em" }}>
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us what you're working on..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={inputClass + " resize-none"}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#DC0000")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#1A1A1A")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-3.5 font-bold text-sm transition-all duration-150"
                    style={{
                      background: "#1A1A1A",
                      color: "#FCD307",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "1rem",
                      letterSpacing: "0.05em",
                      border: "2px solid #1A1A1A",
                      boxShadow: "4px 4px 0 #DC0000",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translate(2px,2px)";
                      e.currentTarget.style.boxShadow = "2px 2px 0 #DC0000";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "4px 4px 0 #DC0000";
                    }}
                  >
                    SEND MESSAGE →
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center text-center"
                style={{
                  background: "#fff",
                  border: "2px solid #1A1A1A",
                  boxShadow: "6px 6px 0 #00AABB",
                  padding: "4rem 2rem",
                  minHeight: "320px",
                }}
              >
                <div
                  className="text-5xl mb-5"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    color: "#FCD307",
                    WebkitTextStroke: "2px #1A1A1A",
                  }}
                >
                  ✓
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: "#1A1A1A",
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                  }}
                >
                  MESSAGE SENT!
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#555" }}>
                  We'll get back to {form.email} within a few hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
