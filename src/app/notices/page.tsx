// ==============================================================================
// TEMPORARILY DISABLED PAGE - ONLY THE HOME PAGE IS SHOWN FOR NOW
// The original code of this page is NOT removed. It is kept below, fully
// commented out, so nothing is lost and it can be restored at any time.
//
// HOW TO RESTORE THIS PAGE:
//   1. Delete this header block.
//   2. Un-comment the original code below (remove the leading "// ").
//   3. Delete the "ACTIVE CODE" stub at the bottom of this file.
//   4. Re-add this page to the navLinks array in src/components/Navbar.tsx.
// ==============================================================================

// ============================ ORIGINAL CODE (commented out) ============================
// import React from "react";
// import { Bell } from "lucide-react";
// 
// export const metadata = {
//   title: "Notices | YCC76 Crescent Town",
//   description: "Official notices for York Condominium Corporation No. 76.",
// };
// 
// export default function NoticesPage() {
//   return (
//     <div style={{ paddingBottom: "90px" }}>
//       {/* 1. Header Banner */}
//       <section
//         style={{
//           padding: "80px 0 50px",
//           background: "radial-gradient(ellipse at 50% 20%, rgba(212, 175, 55, 0.1) 0%, rgba(9, 13, 22, 0.98) 75%)",
//           borderBottom: "1px solid var(--border-subtle)",
//           textAlign: "center",
//         }}
//       >
//         <div className="container" style={{ maxWidth: "800px" }}>
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "8px",
//               padding: "6px 16px",
//               borderRadius: "99px",
//               background: "rgba(212, 175, 55, 0.12)",
//               border: "1px solid var(--border-gold)",
//               color: "var(--gold-300)",
//               fontSize: "0.82rem",
//               fontWeight: 600,
//               letterSpacing: "0.08em",
//               textTransform: "uppercase",
//               marginBottom: "20px",
//             }}
//           >
//             <Bell size={14} color="var(--gold-400)" />
//             <span>Official Communications</span>
//           </div>
//           <h1
//             style={{
//               fontFamily: "var(--font-serif)",
//               fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
//               fontWeight: 700,
//               color: "#ffffff",
//               marginBottom: "12px",
//             }}
//           >
//             Community <span className="gradient-text-gold">Notices</span>
//           </h1>
//         </div>
//       </section>
// 
//       {/* 2. Content removed: Clean empty notice state */}
//       <section style={{ padding: "80px 0" }}>
//         <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
//           <div
//             className="glass-card"
//             style={{
//               padding: "60px 30px",
//               background: "var(--bg-card)",
//               border: "1px solid var(--border-subtle)",
//               borderRadius: "16px",
//             }}
//           >
//             <Bell size={40} color="var(--gold-400)" style={{ margin: "0 auto 16px", opacity: 0.6 }} />
//             <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "8px" }}>
//               No Notices at this time
//             </h2>
//             <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0 }}>
//               There are currently no active notices or announcements.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// ============================ ACTIVE CODE (temporary) ============================
// Only the Home page is shown for now, so this route sends visitors home.
import { redirect } from "next/navigation";

export default function DisabledPage() {
  redirect("/");
}
