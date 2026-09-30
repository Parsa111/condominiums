"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ShieldAlert,
  Copy,
  Check,
  Trash2,
  UserCheck
} from "lucide-react";
import { Contact } from "@/data/contacts";

interface ContactCardProps {
  contact: Contact;
  onDelete?: (id: string) => void;
}

export default function ContactCard({ contact, onDelete }: ContactCardProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 1800);
  };

  const getDepartmentBadge = (dept: Contact["department"]) => {
    switch (dept) {
      case "Emergency":
        return <span className="badge badge-critical"><ShieldAlert size={12} /> Emergency</span>;
      case "Security":
        return <span className="badge badge-gold"><UserCheck size={12} /> Security & Front Desk</span>;
      case "Management":
        return <span className="badge badge-info">Management</span>;
      case "Board":
        return <span className="badge badge-warning">Board of Directors</span>;
      case "Maintenance":
        return <span className="badge badge-success">Maintenance & Facilities</span>;
      default:
        return <span className="badge badge-gold">Community Service</span>;
    }
  };

  return (
    <div
      className={`glass-card ${contact.isEmergency ? "glass-card-elevated" : ""}`}
      style={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: contact.isEmergency
          ? "1px solid rgba(239, 68, 68, 0.4)"
          : "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      {contact.isEmergency && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #ef4444, #f59e0b)",
          }}
        />
      )}

      <div>
        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "12px",
            marginBottom: "14px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {getDepartmentBadge(contact.department)}
            {contact.isCustom && (
              <span
                style={{
                  fontSize: "0.72rem",
                  padding: "2px 8px",
                  borderRadius: "99px",
                  background: "rgba(212, 175, 55, 0.15)",
                  color: "var(--gold-300)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  fontWeight: 600,
                }}
              >
                Custom Added
              </span>
            )}
          </div>

          {contact.isCustom && onDelete && (
            <button
              onClick={() => onDelete(contact.id)}
              title="Remove this custom contact"
              style={{
                color: "var(--text-muted)",
                padding: "6px",
                borderRadius: "6px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ef4444";
                e.currentTarget.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>

        {/* Contact Name & Role */}
        <h4
          style={{
            fontSize: "1.2rem",
            fontWeight: 700,
            color: contact.isEmergency ? "#fca5a5" : "var(--text-main)",
            marginBottom: "4px",
            lineHeight: 1.3,
          }}
        >
          {contact.name}
        </h4>
        <div
          style={{
            fontSize: "0.9rem",
            color: "var(--gold-400)",
            fontWeight: 600,
            marginBottom: "16px",
          }}
        >
          {contact.role}
        </div>

        {/* Hours & Location */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            marginBottom: "18px",
            paddingBottom: "16px",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <Clock size={15} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span>{contact.hours}</span>
          </div>
          {contact.location && (
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <MapPin size={15} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>{contact.location}</span>
            </div>
          )}
        </div>

        {/* Notes */}
        {contact.notes && (
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              lineHeight: 1.5,
              marginBottom: "20px",
            }}
          >
            {contact.notes}
          </p>
        )}
      </div>

      {/* Action Row: Direct Call, Email, Copy */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginTop: "auto",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <a
            href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
            className="btn btn-primary"
            style={{
              flex: 1,
              padding: "10px 14px",
              fontSize: "0.88rem",
            }}
          >
            <Phone size={14} />
            <span>{contact.phone}</span>
          </a>
          <button
            onClick={() => handleCopy(contact.phone, "phone")}
            title="Copy phone number"
            className="btn btn-secondary"
            style={{ padding: "10px 12px" }}
          >
            {copiedType === "phone" ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
          </button>
        </div>

        {contact.email && (
          <div style={{ display: "flex", gap: "8px" }}>
            <a
              href={`mailto:${contact.email}`}
              className="btn btn-secondary"
              style={{
                flex: 1,
                padding: "8px 14px",
                fontSize: "0.84rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <Mail size={14} color="var(--gold-400)" />
              <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{contact.email}</span>
            </a>
            <button
              onClick={() => handleCopy(contact.email, "email")}
              title="Copy email address"
              className="btn btn-secondary"
              style={{ padding: "8px 12px" }}
            >
              {copiedType === "email" ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
