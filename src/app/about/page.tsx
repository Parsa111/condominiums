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
// import Image from "next/image";
// import { BookOpen, Sparkles } from "lucide-react";
// 
// export const metadata = {
//   title: "About Us | YCC76 Crescent Town",
//   description: "Learn about the rich history and heritage of Crescent Town and York Condominium Corporation No. 76.",
// };
// 
// export default function AboutPage() {
//   return (
//     <div style={{ paddingBottom: "90px" }}>
//       {/* 1. Header Hero Banner with 3.png beside About Us */}
//       <section
//         style={{
//           position: "relative",
//           padding: "80px 0 60px",
//           background: "radial-gradient(ellipse at 50% 20%, rgba(212, 175, 55, 0.12) 0%, rgba(9, 13, 22, 0.98) 75%)",
//           borderBottom: "1px solid var(--border-subtle)",
//         }}
//       >
//         <div className="container">
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//               alignItems: "center",
//               gap: "48px",
//             }}
//           >
//             {/* Left Content: About Us Heading & Subtitle */}
//             <div>
//               <div
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "8px",
//                   padding: "8px 20px",
//                   borderRadius: "99px",
//                   background: "rgba(212, 175, 55, 0.12)",
//                   border: "1px solid var(--border-gold)",
//                   color: "var(--gold-300)",
//                   fontSize: "0.85rem",
//                   fontWeight: 600,
//                   letterSpacing: "0.08em",
//                   textTransform: "uppercase",
//                   marginBottom: "20px",
//                   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
//                 }}
//               >
//                 <BookOpen size={15} color="var(--gold-400)" />
//                 <span>Community Heritage</span>
//               </div>
// 
//               <h1
//                 style={{
//                   fontFamily: "var(--font-serif)",
//                   fontSize: "clamp(2.5rem, 5vw, 4rem)",
//                   fontWeight: 700,
//                   lineHeight: 1.15,
//                   color: "#ffffff",
//                   marginBottom: "20px",
//                   letterSpacing: "0.02em",
//                 }}
//               >
//                 About <span className="gradient-text-gold">Us</span>
//               </h1>
// 
//               <p
//                 style={{
//                   fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
//                   color: "var(--gold-300)",
//                   fontWeight: 600,
//                   lineHeight: 1.6,
//                   marginBottom: "20px",
//                 }}
//               >
//                 York Condominium Corporation No. 76 — Crescent Town
//               </p>
// 
//               <p
//                 style={{
//                   fontSize: "1.05rem",
//                   color: "var(--text-secondary)",
//                   lineHeight: 1.8,
//                   maxWidth: "540px",
//                 }}
//               >
//                 One of Canada’s largest and most historic condominium communities, home to 1,420 suites across 6 distinctive residential towers nestled along Victoria Park Avenue.
//               </p>
//             </div>
// 
//             {/* Right Image: 3.png beside About Us */}
//             <div>
//               <div
//                 style={{
//                   position: "relative",
//                   width: "100%",
//                   height: "420px",
//                   borderRadius: "20px",
//                   overflow: "hidden",
//                   border: "1px solid var(--border-gold)",
//                   boxShadow: "0 20px 45px rgba(0, 0, 0, 0.6)",
//                 }}
//               >
//                 <Image
//                   src="/images/3.png"
//                   alt="About Us - Crescent Town YCC76 Community"
//                   fill
//                   priority
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   style={{ objectFit: "cover" }}
//                 />
//                 <div
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     background: "linear-gradient(180deg, transparent 65%, rgba(9, 13, 22, 0.75) 100%)",
//                     pointerEvents: "none",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
// 
//       {/* 2. Historic Narrative Content */}
//       <section style={{ padding: "70px 0" }}>
//         <div className="container" style={{ maxWidth: "860px" }}>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "28px",
//             }}
//           >
//             {/* Paragraph 1 */}
//             <div
//               className="glass-card"
//               style={{
//                 padding: "32px 36px",
//                 borderLeft: "4px solid var(--gold-500)",
//                 background: "var(--bg-card)",
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: "1.1rem",
//                   color: "var(--text-main)",
//                   lineHeight: 1.85,
//                   margin: 0,
//                 }}
//               >
//                 Crescent Town can trace its roots back to 1887 when Walter Massey – the son of Hart Massey, Canada’s first major industrialist – purchased a 240 acre country property centered around Dawes Road and Victoria Park Avenue.
//               </p>
//             </div>
// 
//             {/* Paragraph 2 */}
//             <div
//               className="glass-card"
//               style={{
//                 padding: "32px 36px",
//                 borderLeft: "4px solid var(--gold-400)",
//                 background: "var(--bg-card)",
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: "1.1rem",
//                   color: "var(--text-main)",
//                   lineHeight: 1.85,
//                   margin: 0,
//                 }}
//               >
//                 The Massey farm was named Detonia after Mrs. Massey’s family whose surname was Denton. The Massey farm sold fresh eggs and poultry as well as fresh trout which was caught in the many streams and rivulets that criss-crossed the farm. The Massey farm was also the home of the City Dairy Company which produced the first pasteurized milk in Canada.
//               </p>
//             </div>
// 
//             {/* Paragraph 3 */}
//             <div
//               className="glass-card"
//               style={{
//                 padding: "32px 36px",
//                 borderLeft: "4px solid var(--gold-400)",
//                 background: "var(--bg-card)",
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: "1.1rem",
//                   color: "var(--text-main)",
//                   lineHeight: 1.85,
//                   margin: 0,
//                 }}
//               >
//                 In 1933, Susan Massey generously gave forty acres of Detonia to Crescent School where her grandsons were educated. Crescent School operated at Detonia until 1969 when this property was sold to the developers who built the present day Crescent Town neighbourhood.
//               </p>
//             </div>
// 
//             {/* Paragraph 4 */}
//             <div
//               className="glass-card"
//               style={{
//                 padding: "32px 36px",
//                 borderLeft: "4px solid var(--gold-300)",
//                 background: "var(--bg-card)",
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: "1.1rem",
//                   color: "var(--text-main)",
//                   lineHeight: 1.85,
//                   margin: 0,
//                 }}
//               >
//                 Hollywood actor Kiefer Sutherland was among the first Crescent Town residents. He spent part of his childhood in Crescent Town and attended the Crescent Town Elementary School.
//               </p>
//             </div>
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
