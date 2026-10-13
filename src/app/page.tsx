import React from "react";
import Image from "next/image";
// import Link from "next/link"; // TEMPORARILY DISABLED (only used by the "About Us" button below)
import { Building2, Sparkles, BookOpen } from "lucide-react"; // ArrowRight TEMPORARILY DISABLED (only used by the "About Us" button below)

export const metadata = {
  title: "Welcome to YCC 76 | Crescent Town Condominium Corporation",
  description: "Welcome to YCC 76 - One of the largest condominiums in Canada with 1,420 units in 6 buildings.",
};

export default function HomePage() {
  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "80vh" }}>
      {/* 1. HERO SECTION: Welcome to YCC 76 with 1.png beside it */}
      <section
        style={{
          position: "relative",
          padding: "80px 0 60px",
          background: "radial-gradient(ellipse at 50% 20%, rgba(212, 175, 55, 0.12) 0%, rgba(9, 13, 22, 0.98) 75%)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              alignItems: "center",
              gap: "48px",
            }}
          >
            {/* Left Content Column */}
            <div>
              {/* Top pill badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 20px",
                  borderRadius: "99px",
                  background: "rgba(212, 175, 55, 0.12)",
                  border: "1px solid var(--border-gold)",
                  color: "var(--gold-300)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Sparkles size={16} color="var(--gold-400)" />
                <span>York Condominium Corporation No. 76</span>
              </div>

              {/* Hero Main Heading */}
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#ffffff",
                  marginBottom: "16px",
                  letterSpacing: "0.02em",
                  textShadow: "0 4px 24px rgba(0, 0, 0, 0.7)",
                }}
              >
                Welcome to <span className="gradient-text-gold">YCC 76</span>
              </h1>

              {/* Subtitle */}
              <h2
                style={{
                  fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                  fontWeight: 600,
                  color: "var(--gold-300)",
                  marginBottom: "28px",
                  fontFamily: "var(--font-sans)",
                  lineHeight: 1.35,
                }}
              >
                One of the largest condominiums in Canada
              </h2>

              {/* Highlighted Units & Community Card */}
              <div
                className="glass-card"
                style={{
                  padding: "24px 28px",
                  border: "1px solid var(--border-gold)",
                  background: "linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(19, 29, 49, 0.85) 100%)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <Building2 size={22} color="var(--gold-400)" />
                  <span
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--gold-400)",
                    }}
                  >
                    Our Community
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "clamp(1.02rem, 1.6vw, 1.18rem)",
                    color: "var(--text-main)",
                    lineHeight: 1.65,
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  With 1,420 Units in 6 buildings- Our home is one of the most unique and diverse communities in Canada.
                </p>
              </div>
            </div>

            {/* Right Image Column: 1.png */}
            <div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "440px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid var(--border-gold)",
                  boxShadow: "0 20px 45px rgba(0, 0, 0, 0.6)",
                }}
              >
                <Image
                  src="/images/1.png"
                  alt="Welcome to YCC 76 - Aerial View of Crescent Town Buildings"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 65%, rgba(9, 13, 22, 0.75) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HISTORIC ROOTS SECTION */}
      <section style={{ padding: "70px 0 50px" }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: "36px 36px",
              borderLeft: "4px solid var(--gold-500)",
              background: "var(--bg-card)",
              marginBottom: "50px",
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Crescent Town can trace its roots back to 1887 when Walter Massey – The son of Hart Massey, Canada’s first major industrialist – purchased a 240 acre country property centered around Dawes Road and Victoria Park Avenue.
            </p>
          </div>

          {/* 3. KNOW MORE ABOUT US SECTION: with 2.png beside it */}
          <div
            className="glass-card"
            style={{
              padding: "44px 38px",
              borderRadius: "20px",
              border: "1px solid var(--border-medium)",
              background: "linear-gradient(180deg, rgba(14, 21, 36, 0.95) 0%, rgba(9, 13, 22, 0.98) 100%)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                alignItems: "center",
                gap: "40px",
              }}
            >
              {/* Left Content: Know more about us */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <BookOpen size={24} color="var(--gold-400)" />
                  <h3
                    style={{
                      fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)",
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      color: "var(--text-main)",
                      margin: 0,
                    }}
                  >
                    Know more about us
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                    marginBottom: "32px",
                  }}
                >
                  The Massey farm was named Detonia after Mrs. Massey’s family whose surname was Denton. The Massey farm sold fresh eggs and poultry as well as fresh trout which was caught in the many streams and rivulets that criss-crossed the farm. The Massey farm was also the home of the City Dairy Company which produced the first pasteurized milk in Canada.
                </p>

                {/* TEMPORARILY DISABLED: this button linked to the About Us page,
                    which is hidden for now (only the Home page is shown).
                    Kept (commented) so it can be re-enabled later.

                <div>
                  <Link
                    href="/about"
                    className="btn btn-primary"
                    style={{
                      padding: "14px 28px",
                      fontSize: "0.98rem",
                      display: "inline-flex",
                    }}
                  >
                    <span>Read More on About Us</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
                */}
              </div>

              {/* Right Image: 2.png beside Know more about us */}
              <div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "380px",
                    borderRadius: "18px",
                    overflow: "hidden",
                    border: "1px solid var(--border-gold)",
                    boxShadow: "0 16px 36px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Image
                    src="/images/2.png"
                    alt="Know More About Us - Crescent Town Architecture"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 65%, rgba(9, 13, 22, 0.75) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
