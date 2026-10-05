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
// import React, { useState, useMemo } from "react";
// import {
//   FileText,
//   Search,
//   Download,
//   Eye,
//   ShieldCheck,
//   Calendar,
//   HardDrive,
//   Info
// } from "lucide-react";
// import { documentsData, SupportingDocument } from "@/data/documents";
// import DocumentModal from "@/components/DocumentModal";
// 
// const categories = [
//   "All Documents",
//   "YCC76 By Laws",
//   "YCC76 Declaration",
// ] as const;
// 
// export default function DocumentsPage() {
//   const [selectedCategory, setSelectedCategory] = useState<string>("All Documents");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeDoc, setActiveDoc] = useState<SupportingDocument | null>(null);
// 
//   const filteredDocs = useMemo(() => {
//     return documentsData.filter((doc) => {
//       const matchesCategory =
//         selectedCategory === "All Documents" || doc.category === selectedCategory;
//       const matchesSearch =
//         doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         doc.category.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesCategory && matchesSearch;
//     });
//   }, [selectedCategory, searchQuery]);
// 
//   const handleDownload = (doc: SupportingDocument) => {
//     const link = document.createElement("a");
//     link.href = doc.downloadUrl;
//     link.download = doc.fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
// 
//   return (
//     <div style={{ paddingBottom: "90px" }}>
//       {/* 1. Header Banner */}
//       <section
//         style={{
//           padding: "70px 0 50px",
//           background: "linear-gradient(180deg, rgba(14, 21, 36, 0.9) 0%, rgba(9, 13, 22, 1) 100%)",
//           borderBottom: "1px solid var(--border-subtle)",
//           textAlign: "center",
//         }}
//       >
//         <div className="container" style={{ maxWidth: "820px" }}>
//           <span className="section-subtitle">York Condominium Corporation No. 76</span>
//           <h1 className="section-title">Supporting Documents & By-Laws</h1>
//           <p className="section-desc">
//             Access certified, downloadable PDF copies of the official YCC76 By-Laws and YCC76 Condominium Declaration.
//           </p>
//         </div>
//       </section>
// 
//       {/* 2. Search & Two Categories Filter */}
//       <section style={{ padding: "40px 0 30px" }}>
//         <div className="container">
//           {/* Search bar */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               padding: "8px 18px",
//               borderRadius: "14px",
//               background: "rgba(14, 21, 36, 0.9)",
//               border: "1px solid var(--border-medium)",
//               maxWidth: "680px",
//               margin: "0 auto 24px auto",
//               boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
//             }}
//           >
//             <Search size={20} color="var(--gold-400)" />
//             <input
//               type="text"
//               placeholder="Search by title, by-law number, or keyword..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               style={{
//                 border: "none",
//                 background: "transparent",
//                 padding: "8px 0",
//                 width: "100%",
//                 fontSize: "1rem",
//               }}
//             />
//             {searchQuery && (
//               <button
//                 onClick={() => setSearchQuery("")}
//                 style={{ color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: 600 }}
//               >
//                 Clear
//               </button>
//             )}
//           </div>
// 
//           {/* Two Categories Filter Tabs */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: "10px",
//               flexWrap: "wrap",
//             }}
//           >
//             {categories.map((cat) => {
//               const isSelected = selectedCategory === cat;
//               const count =
//                 cat === "All Documents"
//                   ? documentsData.length
//                   : documentsData.filter((d) => d.category === cat).length;
// 
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   style={{
//                     padding: "10px 22px",
//                     borderRadius: "99px",
//                     fontSize: "0.92rem",
//                     fontWeight: 600,
//                     cursor: "pointer",
//                     transition: "all 0.2s ease",
//                     backgroundColor: isSelected
//                       ? "var(--gold-500)"
//                       : "rgba(255, 255, 255, 0.04)",
//                     color: isSelected ? "#0b0f19" : "var(--text-secondary)",
//                     border: `1px solid ${isSelected ? "var(--gold-500)" : "var(--border-subtle)"}`,
//                     boxShadow: isSelected ? "0 4px 14px rgba(212, 175, 55, 0.3)" : "none",
//                   }}
//                 >
//                   <span>{cat}</span>
//                   <span
//                     style={{
//                       marginLeft: "8px",
//                       padding: "2px 8px",
//                       borderRadius: "10px",
//                       fontSize: "0.75rem",
//                       background: isSelected ? "rgba(0, 0, 0, 0.25)" : "rgba(255, 255, 255, 0.1)",
//                       color: isSelected ? "#000" : "var(--gold-300)",
//                     }}
//                   >
//                     {count}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>
// 
//       {/* 3. Document Cards Grid */}
//       <section style={{ padding: "30px 0 60px" }}>
//         <div className="container">
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
//             <div style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
//               Showing <strong style={{ color: "var(--text-main)" }}>{filteredDocs.length}</strong> official documents
//               {selectedCategory !== "All Documents" && <span> in <strong>{selectedCategory}</strong></span>}
//             </div>
//             <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "var(--gold-400)" }}>
//               <ShieldCheck size={16} />
//               <span>Certified Official PDF Documents</span>
//             </div>
//           </div>
// 
//           {filteredDocs.length === 0 ? (
//             <div
//               className="glass-card"
//               style={{
//                 padding: "60px 20px",
//                 textAlign: "center",
//                 maxWidth: "600px",
//                 margin: "40px auto",
//               }}
//             >
//               <Info size={36} color="var(--gold-400)" style={{ margin: "0 auto 16px auto" }} />
//               <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "8px" }}>
//                 No Documents Found
//               </h3>
//               <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "20px" }}>
//                 No documents matched your search query &quot;{searchQuery}&quot;. Try adjusting your keywords or clearing the filter.
//               </p>
//               <button
//                 onClick={() => {
//                   setSearchQuery("");
//                   setSelectedCategory("All Documents");
//                 }}
//                 className="btn btn-secondary"
//               >
//                 Reset Filters
//               </button>
//             </div>
//           ) : (
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
//                 gap: "24px",
//               }}
//             >
//               {filteredDocs.map((doc) => (
//                 <div
//                   key={doc.id}
//                   className="glass-card"
//                   style={{
//                     padding: "26px",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <div>
//                     {/* Top Category Badge */}
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
//                       <span className="badge badge-gold" style={{ fontSize: "0.74rem" }}>
//                         {doc.category}
//                       </span>
//                       <span className="badge badge-info" style={{ fontSize: "0.72rem" }}>
//                         {doc.fileFormat}
//                       </span>
//                     </div>
// 
//                     {/* Document Title */}
//                     <h3
//                       style={{
//                         fontSize: "1.18rem",
//                         fontWeight: 700,
//                         color: "var(--text-main)",
//                         marginBottom: "10px",
//                         lineHeight: 1.35,
//                       }}
//                     >
//                       {doc.title}
//                     </h3>
// 
//                     {/* Description */}
//                     <p
//                       style={{
//                         fontSize: "0.88rem",
//                         color: "var(--text-secondary)",
//                         lineHeight: 1.6,
//                         marginBottom: "20px",
//                       }}
//                     >
//                       {doc.description}
//                     </p>
// 
//                     {/* Metadata tags */}
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "14px",
//                         fontSize: "0.8rem",
//                         color: "var(--text-muted)",
//                         paddingBottom: "18px",
//                         borderBottom: "1px solid var(--border-subtle)",
//                         marginBottom: "20px",
//                       }}
//                     >
//                       <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
//                         <HardDrive size={13} color="var(--gold-400)" /> {doc.fileSize}
//                       </span>
//                       <span>•</span>
//                       <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
//                         <Calendar size={13} color="var(--gold-400)" /> {doc.dateUpdated}
//                       </span>
//                     </div>
//                   </div>
// 
//                   {/* Actions: Preview & Download PDF */}
//                   <div style={{ display: "flex", gap: "10px" }}>
//                     <button
//                       onClick={() => setActiveDoc(doc)}
//                       className="btn btn-secondary"
//                       style={{
//                         flex: 1,
//                         padding: "10px 14px",
//                         fontSize: "0.86rem",
//                       }}
//                     >
//                       <Eye size={15} color="var(--gold-400)" />
//                       <span>Preview</span>
//                     </button>
//                     <a
//                       href={doc.downloadUrl}
//                       download={doc.fileName}
//                       className="btn btn-outline-gold"
//                       style={{
//                         flex: 1,
//                         padding: "10px 14px",
//                         fontSize: "0.86rem",
//                         display: "inline-flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         gap: "6px",
//                       }}
//                     >
//                       <Download size={15} />
//                       <span>Download PDF</span>
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
// 
//       {/* 4. Status Certificate Callout */}
//       <section style={{ padding: "30px 0" }}>
//         <div className="container">
//           <div
//             style={{
//               padding: "36px",
//               borderRadius: "16px",
//               background: "rgba(14, 21, 36, 0.75)",
//               border: "1px solid var(--border-medium)",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               gap: "24px",
//               flexWrap: "wrap",
//             }}
//           >
//             <div style={{ maxWidth: "720px" }}>
//               <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "8px" }}>
//                 Buying or Selling a Suite in YCC76? Request a Status Certificate
//               </h3>
//               <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
//                 Under the Condominium Act, 1998, status certificates containing the complete legal and financial profile of York Condominium Corporation No. 76 can be requested through property management at 5 Massey Square | Toronto, ON | M4C 5L6
//               </p>
//             </div>
//             <a
//               href="tel:4166908881"
//               className="btn btn-primary"
//               style={{ padding: "12px 24px" }}
//             >
//               <span>Call Management Office</span>
//             </a>
//           </div>
//         </div>
//       </section>
// 
//       {/* Document Reader Modal */}
//       <DocumentModal document={activeDoc} onClose={() => setActiveDoc(null)} />
//     </div>
//   );
// }

// ============================ ACTIVE CODE (temporary) ============================
// Only the Home page is shown for now, so this route sends visitors home.
import { redirect } from "next/navigation";

export default function DisabledPage() {
  redirect("/");
}
