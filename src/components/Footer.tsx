import React from "react";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--border-medium)",
        marginTop: "auto",
        position: "relative",
        zIndex: 10,
        padding: "48px 0",
      }}
    >
      <div className="container" style={{ maxWidth: "780px", textAlign: "center" }}>
        {/* Official Logo */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              padding: "6px 14px",
              borderRadius: "10px",
              display: "inline-flex",
              alignItems: "center",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.35)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <Image
              src="/image.png"
              alt="York Condominium Corporation 76"
              width={160}
              height={41}
              style={{
                height: "44px",
                width: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        {/* Address */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            color: "var(--text-secondary)",
            fontSize: "1rem",
            marginBottom: "18px",
          }}
        >
          <MapPin size={18} color="var(--gold-400)" style={{ flexShrink: 0 }} />
          <span>5 Massey Square | Toronto, ON | M4C 5L6</span>
        </div>

        {/* Contact Numbers */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "24px",
            fontSize: "0.98rem",
            color: "var(--text-secondary)",
          }}
        >
          <a
            href="tel:4166908881"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--gold-300)",
              fontWeight: 600,
              transition: "color 0.2s ease",
            }}
          >
            <Phone size={16} color="var(--gold-400)" />
            <span>Phone: (416)  690 8881</span>
          </a>

        </div>
      </div>
    </footer>
  );
}
