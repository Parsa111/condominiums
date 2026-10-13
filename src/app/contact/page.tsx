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
// "use client";
// 
// import React, { useState } from "react";
// import {
//   PhoneCall,
//   MapPin,
//   Clock,
//   Printer,
//   ShieldCheck,
//   Send,
//   Building2,
//   CheckCircle2,
//   AlertTriangle,
//   Loader2,
// } from "lucide-react";
// 
// const WEB3FORMS_KEY = "ab388c78-bb43-4b4a-9a9f-7a23413f6d57";
// 
// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     suite: "",
//     subject: "General Inquiry",
//     message: "",
//   });
//   const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
//   const [errorMsg, setErrorMsg] = useState("");
// 
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus("loading");
//     setErrorMsg("");
// 
//     const payload = {
//       access_key: WEB3FORMS_KEY,
//       subject: `[YCC 76 Contact] ${formData.subject}`,
//       from_name: formData.name,
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone || "Not provided",
//       suite: formData.suite || "Not provided",
//       topic: formData.subject,
//       message: formData.message,
//     };
// 
//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Accept: "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();
// 
//       if (data.success) {
//         setStatus("success");
//         setTimeout(() => {
//           setStatus("idle");
//           setFormData({ name: "", email: "", phone: "", suite: "", subject: "General Inquiry", message: "" });
//         }, 5000);
//       } else {
//         setStatus("error");
//         setErrorMsg(data.message || "Submission failed. Please try again.");
//       }
//     } catch {
//       setStatus("error");
//       setErrorMsg("Network error. Please check your connection and try again.");
//     }
//   };
// 
//   return (
//     <div style={{ backgroundColor: "var(--bg-main)", minHeight: "100vh", paddingBottom: "90px" }}>
//       {/* 1. Header Banner */}
//       <section
//         style={{
//           padding: "80px 0 50px",
//           background: "radial-gradient(ellipse at 50% 20%, rgba(212, 175, 55, 0.12) 0%, rgba(9, 13, 22, 0.98) 75%)",
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
//             <PhoneCall size={14} color="var(--gold-400)" />
//             <span>Community Directory</span>
//           </div>
// 
//           <h1
//             style={{
//               fontFamily: "var(--font-serif)",
//               fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
//               fontWeight: 700,
//               color: "#ffffff",
//               marginBottom: "12px",
//             }}
//           >
//             Contact <span className="gradient-text-gold">Us</span>
//           </h1>
// 
//           <p
//             style={{
//               fontSize: "1.05rem",
//               color: "var(--text-secondary)",
//               lineHeight: 1.7,
//               maxWidth: "600px",
//               margin: "0 auto",
//             }}
//           >
//             Get in touch with the York Condominium Corporation No. 76 management office, 24/7 security concierge, and resident facilities team.
//           </p>
//         </div>
//       </section>
// 
//       {/* 2. Main Content Grid */}
//       <section style={{ padding: "60px 0" }}>
//         <div className="container">
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//               gap: "36px",
//               alignItems: "start",
//             }}
//           >
//             {/* Left Column: Official Contact Cards */}
//             <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//               {/* Management Office Card */}
//               <div
//                 className="glass-card"
//                 style={{
//                   padding: "32px",
//                   background: "var(--bg-card)",
//                   border: "1px solid var(--border-gold)",
//                   borderRadius: "16px",
//                 }}
//               >
//                 <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
//                   <div
//                     style={{
//                       width: "44px",
//                       height: "44px",
//                       borderRadius: "10px",
//                       background: "rgba(212, 175, 55, 0.15)",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "var(--gold-400)",
//                     }}
//                   >
//                     <Building2 size={22} />
//                   </div>
//                   <div>
//                     <span className="badge badge-gold" style={{ fontSize: "0.72rem" }}>
//                       Main Office
//                     </span>
//                     <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-main)", marginTop: "4px" }}>
//                       YCC 76 Management Office
//                     </h3>
//                   </div>
//                 </div>
// 
//                 <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "20px" }}>
//                   <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
//                     <MapPin size={18} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: "2px" }} />
//                     <span>5 Massey Square | Toronto, ON | M4C 5L6</span>
//                   </div>
// 
//                   <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
//                     <PhoneCall size={18} color="var(--gold-400)" style={{ flexShrink: 0 }} />
//                     <a href="tel:4166908881" style={{ color: "var(--gold-300)", fontWeight: 600 }}>
//                       (416)  690 8881
//                     </a>
//                   </div>
// 
//                   <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
//                     <Printer size={18} color="var(--gold-400)" style={{ flexShrink: 0 }} />
//                     <span>Fax: (416)  690 1222</span>
//                   </div>
// 
//                   <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
//                     <Clock size={18} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: "2px" }} />
//                     <span>Monday – Friday: 9:00 AM – 5:00 PM</span>
//                   </div>
//                 </div>
//               </div>
// 
//               {/* 24/7 Security & Concierge Card */}
//               <div
//                 className="glass-card"
//                 style={{
//                   padding: "30px",
//                   background: "var(--bg-card)",
//                   border: "1px solid var(--border-subtle)",
//                   borderRadius: "16px",
//                 }}
//               >
//                 <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
//                   <div
//                     style={{
//                       width: "44px",
//                       height: "44px",
//                       borderRadius: "10px",
//                       background: "rgba(16, 185, 129, 0.15)",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "#10b981",
//                     }}
//                   >
//                     <ShieldCheck size={22} />
//                   </div>
//                   <div>
//                     <span className="badge badge-success" style={{ fontSize: "0.72rem" }}>
//                       24/7 Duty
//                     </span>
//                     <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-main)", marginTop: "4px" }}>
//                       Security & Concierge Desk
//                     </h3>
//                   </div>
//                 </div>
// 
//                 <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px", fontSize: "0.92rem", color: "var(--text-secondary)" }}>
//                   <p style={{ margin: 0, lineHeight: 1.6 }}>
//                     Front desk concierge is stationed 24 hours a day, 7 days a week to handle visitor entry, deliveries, key access, and building safety monitoring.
//                   </p>
//                   <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-300)", fontWeight: 600, marginTop: "6px" }}>
//                     <Clock size={16} />
//                     <span>Always Open — 24 Hours / 7 Days</span>
//                   </div>
//                 </div>
//               </div>
// 
//               {/* Emergency Advisory Box */}
//               <div
//                 style={{
//                   padding: "24px",
//                   borderRadius: "14px",
//                   background: "rgba(239, 68, 68, 0.08)",
//                   border: "1px solid rgba(239, 68, 68, 0.25)",
//                 }}
//               >
//                 <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#f87171", fontWeight: 700, marginBottom: "8px" }}>
//                   <AlertTriangle size={18} />
//                   <span>Life Safety & Emergencies</span>
//                 </div>
//                 <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
//                   For fire, medical, or criminal emergencies, please dial <strong style={{ color: "#ffffff" }}>911</strong> immediately before alerting concierge desk.
//                 </p>
//               </div>
//             </div>
// 
//             {/* Right Column: Contact Inquiry Form */}
//             <div
//               className="glass-card"
//               style={{
//                 padding: "36px",
//                 background: "var(--bg-card)",
//                 border: "1px solid var(--border-medium)",
//                 borderRadius: "18px",
//                 boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
//               }}
//             >
//               <h3 style={{ fontSize: "1.45rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "8px" }}>
//                 Send a Message to Management
//               </h3>
//               <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "28px", lineHeight: 1.6 }}>
//                 Submit an inquiry regarding administrative questions, maintenance requests, or resident support.
//               </p>
// 
//               {status === "success" ? (
//                 <div
//                   style={{
//                     padding: "28px",
//                     borderRadius: "12px",
//                     background: "rgba(16, 185, 129, 0.12)",
//                     border: "1px solid rgba(16, 185, 129, 0.35)",
//                     textAlign: "center",
//                   }}
//                 >
//                   <CheckCircle2 size={40} color="#10b981" style={{ margin: "0 auto 14px" }} />
//                   <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "8px" }}>
//                     Message Sent Successfully!
//                   </h4>
//                   <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
//                     Thank you for reaching out. The property management office will review your request and respond shortly.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
//                   {/* Bot protection honeypot */}
//                   <input type="checkbox" name="botcheck" style={{ display: "none" }} />
// 
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
//                     <div>
//                       <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "6px" }}>
//                         Your Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         required
//                         placeholder="John Doe"
//                         value={formData.name}
//                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                         style={{ width: "100%", background: "var(--bg-surface)", border: "1px solid var(--border-medium)" }}
//                       />
//                     </div>
// 
//                     <div>
//                       <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "6px" }}>
//                         Suite Number
//                       </label>
//                       <input
//                         type="text"
//                         name="suite"
//                         placeholder="e.g. 1408"
//                         value={formData.suite}
//                         onChange={(e) => setFormData({ ...formData, suite: e.target.value })}
//                         style={{ width: "100%", background: "var(--bg-surface)", border: "1px solid var(--border-medium)" }}
//                       />
//                     </div>
//                   </div>
// 
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
//                     <div>
//                       <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "6px" }}>
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         placeholder="resident@example.com"
//                         value={formData.email}
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                         style={{ width: "100%", background: "var(--bg-surface)", border: "1px solid var(--border-medium)" }}
//                       />
//                     </div>
// 
//                     <div>
//                       <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "6px" }}>
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         placeholder="(416) 000-0000"
//                         value={formData.phone}
//                         onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                         style={{ width: "100%", background: "var(--bg-surface)", border: "1px solid var(--border-medium)" }}
//                       />
//                     </div>
//                   </div>
// 
//                   <div>
//                     <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "6px" }}>
//                       Topic / Subject
//                     </label>
//                     <select
//                       name="subject"
//                       value={formData.subject}
//                       onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                       style={{ width: "100%", background: "var(--bg-surface)", border: "1px solid var(--border-medium)", color: "var(--text-main)" }}
//                     >
//                       <option value="General Inquiry" style={{ background: "#0e1524" }}>General Inquiry</option>
//                       <option value="Maintenance Request" style={{ background: "#0e1524" }}>Maintenance &amp; Common Elements</option>
//                       <option value="By-Law Question" style={{ background: "#0e1524" }}>By-Law or Policy Question</option>
//                       <option value="Key Fob / Parking Access" style={{ background: "#0e1524" }}>Key Fob / Parking Access</option>
//                       <option value="Status Certificate" style={{ background: "#0e1524" }}>Status Certificate Order</option>
//                     </select>
//                   </div>
// 
//                   <div>
//                     <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "6px" }}>
//                       Message *
//                     </label>
//                     <textarea
//                       name="message"
//                       required
//                       rows={5}
//                       placeholder="Please write your inquiry or message here..."
//                       value={formData.message}
//                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                       style={{
//                         width: "100%",
//                         background: "var(--bg-surface)",
//                         border: "1px solid var(--border-medium)",
//                         resize: "vertical",
//                       }}
//                     />
//                   </div>
// 
//                   {status === "error" && (
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "flex-start",
//                         gap: "10px",
//                         padding: "14px 16px",
//                         borderRadius: "10px",
//                         background: "rgba(239, 68, 68, 0.1)",
//                         border: "1px solid rgba(239, 68, 68, 0.3)",
//                         color: "#f87171",
//                         fontSize: "0.88rem",
//                       }}
//                     >
//                       <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: "1px" }} />
//                       <span>{errorMsg}</span>
//                     </div>
//                   )}
// 
//                   <button
//                     type="submit"
//                     disabled={status === "loading"}
//                     className="btn btn-primary"
//                     style={{
//                       padding: "14px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       gap: "8px",
//                       fontSize: "1rem",
//                       marginTop: "8px",
//                       opacity: status === "loading" ? 0.75 : 1,
//                       cursor: status === "loading" ? "not-allowed" : "pointer",
//                     }}
//                   >
//                     {status === "loading" ? (
//                       <>
//                         <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
//                         <span>Sending…</span>
//                       </>
//                     ) : (
//                       <>
//                         <Send size={16} />
//                         <span>Send Message to Office</span>
//                       </>
//                     )}
//                   </button>
//                 </form>
//               )}
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
