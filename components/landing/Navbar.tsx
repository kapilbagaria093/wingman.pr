import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: "#FAF8F4",
        borderBottom: scrolled ? "2px solid #1A1A1A" : "2px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
          style={{
            border: 0
          }}
        >
          <span
            className="inline-flex items-center justify-center w-9 h-9 text-white text-sm font-black"
            style={{
              background: "#DC0000",
              border: "2px solid #1A1A1A",
              boxShadow: "2px 2px 0 #1A1A1A",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            W
          </span>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "1.25rem",
              color: "#1A1A1A",
              letterSpacing: "-0.01em",
            }}
          >
            WINGMAN<span style={{ color: "#DC0000" }}>.PR</span>
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {[
            { label: "Features", id: "features" },
            { label: "Pricing", id: "cta" },
            { label: "Contact", id: "contact" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="px-4 py-2 text-sm font-semibold transition-all duration-150"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#1A1A1A",
                border: "2px solid transparent",
                borderRadius: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#1A1A1A";
                e.currentTarget.style.boxShadow = "2px 2px 0 #1A1A1A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {label}
            </button>
          ))}

          <a
            href="/sign-in"
            className="px-4 py-2 text-sm font-semibold ml-2 transition-all duration-150"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#1A1A1A",
              border: "2px solid #1A1A1A",
              boxShadow: "2px 2px 0 #1A1A1A",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(2px, 2px)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "2px 2px 0 #1A1A1A";
            }}
          >
            Sign In
          </a>

          <button
            onClick={() => scrollTo("cta")}
            className="px-5 py-2 text-sm font-bold ml-1 transition-all duration-150"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "#DC0000",
              color: "#ffffff",
              border: "2px solid #1A1A1A",
              boxShadow: "3px 3px 0 #1A1A1A",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(2px, 2px)";
              e.currentTarget.style.boxShadow = "1px 1px 0 #1A1A1A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "3px 3px 0 #1A1A1A";
            }}
          >
            Get started →
          </button>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden flex flex-col gap-1 p-1 border-2 border-[#1A1A1A]"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ boxShadow: "2px 2px 0 #1A1A1A" }}
        >
          <span className="block w-5 h-0.5 bg-[#1A1A1A]" style={{ transform: mobileOpen ? "rotate(45deg) translate(2px, 2px)" : "none", transition: "all 0.2s" }} />
          <span className="block w-5 h-0.5 bg-[#1A1A1A]" style={{ opacity: mobileOpen ? 0 : 1, transition: "all 0.2s" }} />
          <span className="block w-5 h-0.5 bg-[#1A1A1A]" style={{ transform: mobileOpen ? "rotate(-45deg) translate(2px, -2px)" : "none", transition: "all 0.2s" }} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-3" style={{ borderTop: "2px solid #1A1A1A", background: "#FAF8F4" }}>
          {["Features", "Pricing", "Contact"].map((label) => (
            <button
              key={label}
              onClick={() => scrollTo(label.toLowerCase() === "pricing" ? "cta" : label.toLowerCase())}
              className="text-left py-2 font-semibold text-sm"
              style={{ fontFamily: "'Inter', sans-serif", color: "#1A1A1A" }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("cta")}
            className="py-3 font-bold text-sm"
            style={{
              background: "#DC0000",
              color: "#fff",
              fontFamily: "'Inter', sans-serif",
              border: "2px solid #1A1A1A",
              boxShadow: "3px 3px 0 #1A1A1A",
            }}
          >
            Get started free →
          </button>
        </div>
      )}
    </nav>
  );
}
