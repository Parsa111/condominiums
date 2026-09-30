"use client";

import React from "react";
import { X, Download, FileText, Shield, Calendar, HardDrive } from "lucide-react";
import { SupportingDocument } from "@/data/documents";

interface DocumentModalProps {
  document: SupportingDocument | null;
  onClose: () => void;
}

export default function DocumentModal({ document, onClose }: DocumentModalProps) {
  if (!document) return null;

  const handleDownload = () => {
    const link = window.document.createElement("a");
    link.href = document.downloadUrl;
    link.download = document.fileName;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "rgba(3, 7, 18, 0.85)",
        backdropFilter: "blur(12px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          height: "90vh",
          backgroundColor: "#111827",
          border: "1px solid var(--border-gold)",
          borderRadius: "16px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7)",
          padding: "24px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            color: "var(--text-muted)",
            padding: "8px",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.05)",
            zIndex: 10,
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header — fixed height, won't grow */}
        <div style={{ flexShrink: 0, paddingRight: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "rgba(212, 175, 55, 0.15)",
                border: "1px solid var(--border-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gold-400)",
                flexShrink: 0,
              }}
            >
              <FileText size={20} />
            </div>
            <div>
              <div style={{ display: "flex", gap: "6px", alignItems: "center", marginBottom: "4px", flexWrap: "wrap" }}>
                <span className="badge badge-gold" style={{ fontSize: "0.72rem" }}>{document.category}</span>
                <span className="badge badge-info" style={{ fontSize: "0.72rem" }}>Official PDF</span>
              </div>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-main)", lineHeight: 1.3 }}>
                {document.title}
              </h2>
            </div>
          </div>

          {/* Metadata Strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "8px 14px",
              background: "rgba(255, 255, 255, 0.03)",
              borderRadius: "8px",
              fontSize: "0.82rem",
              color: "var(--text-secondary)",
              border: "1px solid var(--border-subtle)",
              flexWrap: "wrap",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <HardDrive size={13} color="var(--gold-400)" /> {document.fileSize}
            </span>
            <span style={{ color: "var(--border-medium)" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Calendar size={13} color="var(--gold-400)" /> {document.dateUpdated}
            </span>
            <span style={{ color: "var(--border-medium)" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "var(--color-success)" }}>
              <Shield size={13} /> Certified Document
            </span>
          </div>
        </div>

        {/* PDF iframe — takes all remaining height */}
        <div
          style={{
            flex: 1,
            minHeight: 0,          /* critical: lets flex shrink below content size */
            borderRadius: "10px",
            overflow: "hidden",
            border: "1px solid var(--border-medium)",
          }}
        >
          <iframe
            src={document.downloadUrl}
            title={`Preview: ${document.title}`}
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              border: "none",
            }}
          />
        </div>

        {/* Action Buttons — fixed at bottom */}
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            paddingTop: "12px",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <button onClick={onClose} className="btn btn-secondary">
            Close
          </button>
          <button onClick={handleDownload} className="btn btn-primary">
            <Download size={16} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
