"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  PhoneCall,
  // FileText, // TEMPORARILY DISABLED (used by "Supporting Documents" link)
  // Bell,     // TEMPORARILY DISABLED (used by "Notices" link)
  // Info,     // TEMPORARILY DISABLED (used by "About Us" link)
  Home,
  ChevronRight,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Only the Home page is shown for now.
  // The other pages are NOT removed - their code is kept and only commented out,
  // so they can be re-enabled later by un-commenting the lines below
  // (and their icon imports at the top of this file).
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    // { name: "About Us", href: "/about", icon: Info },
    // { name: "Supporting Documents", href: "/documents", icon: FileText },
    // { name: "Notices", href: "/notices", icon: Bell },
    // { name: "Contact Us", href: "/contact", icon: PhoneCall },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: theme === "light"
          ? "rgba(244, 246, 251, 0.97)"
          : scrolled
          ? "rgba(9, 13, 22, 0.92)"
          : "rgba(9, 13, 22, 0.75)",
        backdropFilter: "blur(18px)",
        borderBottom: theme === "light"
          ? "1px solid rgba(0, 0, 0, 0.10)"
          : `1px solid ${scrolled ? "rgba(212, 175, 55, 0.2)" : "rgba(255, 255, 255, 0.08)"}`,
        boxShadow: theme === "light"
          ? "0 4px 20px rgba(0, 0, 0, 0.07)"
          : scrolled ? "0 10px 30px rgba(0, 0, 0, 0.45)" : "none",
      }}
    >
      {/* Top micro utility bar */}
      <div
        style={{
          background: theme === "light"
            ? "#e8ecf5"
            : "linear-gradient(90deg, #10192d 0%, #17243e 50%, #10192d 100%)",
          borderBottom: theme === "light"
            ? "1px solid rgba(0, 0, 0, 0.09)"
            : "1px solid rgba(255, 255, 255, 0.06)",
          padding: "6px 0",
          fontSize: "0.8rem",
          color: "var(--text-secondary)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 8px #10b981",
              }}
            />
            <span>24/7 Security & Concierge on Duty</span>
            <span style={{ color: "var(--text-faint)" }}>•</span>
            <span style={{ color: "var(--gold-400)" }}>YCC No. 76</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href="tel:+14166908881"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "var(--gold-300)",
                fontWeight: 600,
              }}
            >
              <PhoneCall size={13} />
              <span>Office: +1 416 690 8881</span>
            </a>
            <span style={{ color: "var(--text-faint)" }}>|</span>
            <span style={{ color: "var(--text-muted)" }}>5 Massey Sq, Toronto</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "74px",
          }}
        >
          {/* Logo / Crest */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                padding: "4px 8px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <Image
                src="/images/logo.jpg"
                alt="York Condominium Corporation 76"
                width={160}
                height={41}
                priority
                style={{
                  height: "38px",
                  width: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              gap: "6px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    color: isActive ? "var(--gold-300)" : "var(--text-secondary)",
                    backgroundColor: isActive
                      ? "rgba(212, 175, 55, 0.12)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(212, 175, 55, 0.3)"
                      : "1px solid transparent",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--text-main)";
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle + Mobile Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Dark/Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: theme === "light"
                  ? "rgba(184, 146, 15, 0.12)"
                  : "rgba(255, 255, 255, 0.06)",
                border: theme === "light"
                  ? "1px solid rgba(184, 146, 15, 0.3)"
                  : "1px solid var(--border-medium)",
                color: theme === "light" ? "#b8920f" : "var(--gold-400)",
                transition: "all 0.25s ease",
                cursor: "pointer",
              }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid var(--border-medium)",
                color: "var(--text-main)",
              }}
              className="mobile-toggle"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "105px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(9, 13, 22, 0.98)",
            backdropFilter: "blur(20px)",
            padding: "24px 20px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 99,
            overflowY: "auto",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--gold-400)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "8px",
                paddingLeft: "8px",
              }}
            >
              Navigation Menu
            </div>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    borderRadius: "12px",
                    background: isActive
                      ? "rgba(212, 175, 55, 0.12)"
                      : "rgba(255, 255, 255, 0.03)",
                    border: `1px solid ${isActive ? "rgba(212, 175, 55, 0.35)" : "var(--border-subtle)"}`,
                    color: isActive ? "var(--gold-300)" : "var(--text-main)",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Icon size={19} color={isActive ? "var(--gold-400)" : "var(--text-muted)"} />
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight size={18} color="var(--text-muted)" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Bottom Quick Actions */}
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: "24px",
            }}
          >
            <a
              href="tel:+14166908881"
              className="btn btn-outline-gold"
              style={{ width: "100%", padding: "14px" }}
            >
              <PhoneCall size={16} />
              <span>Call Office: +1 416 690 8881</span>
            </a>
            {/* TEMPORARILY DISABLED: points to the Contact page, which is hidden for now.
                Kept (commented) so it can be re-enabled later.

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary"
              style={{ width: "100%", padding: "14px" }}
            >
              <PhoneCall size={17} />
              <span>Condo Directory &amp; Contacts</span>
            </Link>
            */}
          </div>
        </div>
      )}

      {/* Responsive CSS styling */}
      <style jsx>{`
        @media (min-width: 900px) {
          :global(.desktop-nav) {
            display: flex !important;
          }

          :global(.mobile-toggle) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
