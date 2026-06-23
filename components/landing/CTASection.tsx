import { useState } from "react";
import { motion } from "motion/react";
import { BracketFrame } from "./BracketFrame";

const PLANS = [
  {
    id: "S-01",
    plan: "STARTER",
    price: "FREE",
    sub: "forever",
    features: ["5 PRs / month", "AI line review", "GitHub App", "Community support"],
    accent: "#1A5FFF",
    bg: "#F0F4FF",
  },
  {
    id: "T-02",
    plan: "TEAM",
    price: "$19",
    sub: "per seat / mo",
    features: ["Unlimited PRs", "Security scan", "Perf profiling", "Priority support"],
    accent: "#DC0000",
    bg: "#FFF0F0",
    featured: true,
  },
  {
    id: "E-03",
    plan: "ENTERPRISE",
    price: "CUSTOM",
    sub: "contact us",
    features: ["Self-host option", "SSO / SAML", "SLA guarantee", "Dedicated CSM"],
    accent: "#00AABB",
    bg: "#F0FAFA",
  },
];

export function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="cta" style={{ background: "#FAF8F4", borderBottom: "3px solid #1A1A1A" }}>
      {/* Red header stripe */}
      <div
        className="px-6 py-4 flex items-center gap-4"
        style={{ background: "#DC0000", borderBottom: "2px solid #1A1A1A" }}
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
          Pricing &amp; Early Access
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "0.08em",
          }}
        >
          // SPECIAL BETA RATES
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {PLANS.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <BracketFrame
                color={p.accent}
                size={20}
                thickness={3}
                style={{
                  background: p.featured ? p.accent : "#fff",
                  border: "2px solid #1A1A1A",
                  boxShadow: p.featured ? `6px 6px 0 #1A1A1A` : `4px 4px 0 #1A1A1A`,
                  padding: "1.75rem",
                  height: "100%",
                }}
              >
                {p.featured && (
                  <div
                    className="inline-block px-2 py-0.5 mb-3"
                    style={{
                      background: "#FCD307",
                      color: "#1A1A1A",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      border: "1.5px solid #1A1A1A",
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    color: p.featured ? "rgba(255,255,255,0.7)" : "#999",
                    letterSpacing: "0.08em",
                    marginBottom: "4px",
                  }}
                >
                  {p.id}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.1rem",
                    color: p.featured ? "#fff" : "#1A1A1A",
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.plan}
                </div>
                <div className="my-4 flex items-end gap-1">
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: "3.5rem",
                      color: p.featured ? "#FCD307" : p.accent,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {p.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      color: p.featured ? "rgba(255,255,255,0.6)" : "#888",
                      marginBottom: "8px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.sub}
                  </span>
                </div>

                <div
                  className="mb-5"
                  style={{ borderTop: `2px solid ${p.featured ? "rgba(255,255,255,0.2)" : "#1A1A1A"}`, paddingTop: "1rem" }}
                >
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 mb-2">
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          background: p.featured ? "#FCD307" : p.accent,
                          border: `1.5px solid ${p.featured ? "#FCD307" : "#1A1A1A"}`,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.85rem",
                          color: p.featured ? "rgba(255,255,255,0.9)" : "#555",
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full py-2.5 font-bold text-sm transition-all duration-150"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    background: p.featured ? "#FCD307" : p.accent,
                    color: p.featured ? "#1A1A1A" : "#fff",
                    border: "2px solid #1A1A1A",
                    boxShadow: "3px 3px 0 #1A1A1A",
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
                  {p.price === "CUSTOM" ? "CONTACT SALES" : "GET STARTED →"}
                </button>
              </BracketFrame>
            </motion.div>
          ))}
        </div>

        {/* Email signup */}
        <div
          className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{
            background: "#1A1A1A",
            border: "2px solid #1A1A1A",
            boxShadow: "6px 6px 0 #DC0000",
          }}
        >
          <div>
            <div
              className="inline-block px-2 py-0.5 mb-3"
              style={{
                background: "#FCD307",
                color: "#1A1A1A",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
              }}
            >
              EARLY ACCESS
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
              }}
            >
              READY TO SHIP
              <br />
              <span style={{ color: "#DC0000" }}>BETTER CODE?</span>
            </h2>
            <p
              className="mt-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                color: "#888",
              }}
            >
              2,400+ engineers already on the list. No credit card required.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-80">
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-sm outline-none"
                style={{
                  background: "#fff",
                  border: "2px solid #FCD307",
                  color: "#1A1A1A",
                  fontFamily: "'Inter', sans-serif",
                }}
              />
              <button
                type="submit"
                className="px-6 py-3 font-bold text-sm whitespace-nowrap transition-all duration-150"
                style={{
                  background: "#DC0000",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  border: "2px solid #FCD307",
                  boxShadow: "3px 3px 0 #FCD307",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translate(2px,2px)";
                  e.currentTarget.style.boxShadow = "1px 1px 0 #FCD307";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "3px 3px 0 #FCD307";
                }}
              >
                GET ACCESS →
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 px-6 py-3"
              style={{ border: "2px solid #FCD307", background: "rgba(252,211,7,0.1)" }}
            >
              <span style={{ fontSize: "1.5rem" }}>✓</span>
              <span style={{ fontFamily: "'Inter', sans-serif", color: "#FCD307", fontSize: "0.9rem" }}>
                You're on the list — we'll be in touch!
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
