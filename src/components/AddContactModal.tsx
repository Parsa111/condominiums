"use client";

import React, { useState } from "react";
import { X, UserPlus, Phone, Mail, Clock, MapPin, AlertCircle, CheckCircle2 } from "lucide-react";
import { Contact } from "@/data/contacts";

interface AddContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddContact: (contact: Contact) => void;
}

export default function AddContactModal({ isOpen, onClose, onAddContact }: AddContactModalProps) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState<Contact["department"]>("Management");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hours, setHours] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [isEmergency, setIsEmergency] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter the contact or organization name.");
      return;
    }
    if (!role.trim()) {
      setError("Please specify their role or title.");
      return;
    }
    if (!phone.trim() && !email.trim()) {
      setError("Please provide at least a phone number or email address.");
      return;
    }

    const newContact: Contact = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      role: role.trim(),
      department,
      phone: phone.trim() || "(416) 555-0000",
      email: email.trim() || "office@auroratower.ca",
      hours: hours.trim() || "Regular Business Hours",
      location: location.trim() || undefined,
      notes: notes.trim() || undefined,
      isEmergency,
      isCustom: true,
    };

    onAddContact(newContact);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      // Reset form
      setName("");
      setRole("");
      setDepartment("Management");
      setPhone("");
      setEmail("");
      setHours("");
      setLocation("");
      setNotes("");
      setIsEmergency(false);
      setError("");
    }, 1200);
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
        backgroundColor: "rgba(3, 7, 18, 0.75)",
        backdropFilter: "blur(12px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#111827",
          border: "1px solid var(--border-gold)",
          borderRadius: "16px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
          padding: "28px",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "var(--text-muted)",
            padding: "6px",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.05)",
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "rgba(212, 175, 55, 0.15)",
              border: "1px solid var(--border-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--gold-400)",
            }}
          >
            <UserPlus size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-main)" }}>
              Add Contact to Directory
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Add a new staff member, contractor, or board representative to the live website directory.
            </p>
          </div>
        </div>

        {error && (
          <div
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: "rgba(239, 68, 68, 0.12)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#fca5a5",
              fontSize: "0.88rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#6ee7b7",
              fontSize: "0.9rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <CheckCircle2 size={18} />
            <span>Contact successfully added! Updating website directory...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Full Name & Department */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                Full Name / Organization *
              </label>
              <input
                type="text"
                placeholder="e.g. Jessica Sterling"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%" }}
                required
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                Department *
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value as Contact["department"])}
                style={{ width: "100%" }}
              >
                <option value="Management">Management & Staff</option>
                <option value="Board">Board of Directors</option>
                <option value="Security">Security & Concierge</option>
                <option value="Maintenance">Maintenance & Trades</option>
                <option value="Emergency">Emergency Services</option>
                <option value="Other">Other Community Service</option>
              </select>
            </div>
          </div>

          {/* Role & Office Hours */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                Official Role / Title *
              </label>
              <input
                type="text"
                placeholder="e.g. Assistant Property Manager"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{ width: "100%" }}
                required
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                Availability / Office Hours
              </label>
              <input
                type="text"
                placeholder="e.g. Mon-Fri: 9am-5pm or 24/7"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
          </div>

          {/* Phone & Email */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="(416) 555-0100"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@auroratower.ca"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
          </div>

          {/* Location & Emergency Check */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
              Location / Desk / Office (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Suite 204 or Ground Lobby Desk"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>

          {/* Notes / Responsibilities */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
              Responsibilities / Notes
            </label>
            <textarea
              rows={2}
              placeholder="Key responsibilities, what to contact them for..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{ width: "100%", resize: "none" }}
            />
          </div>

          {/* Emergency Contact Flag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <input
              type="checkbox"
              id="isEmergencyCheckbox"
              checked={isEmergency}
              onChange={(e) => setIsEmergency(e.target.checked)}
              style={{ width: "18px", height: "18px", cursor: "pointer" }}
            />
            <label htmlFor="isEmergencyCheckbox" style={{ fontSize: "0.88rem", cursor: "pointer", color: "var(--text-secondary)" }}>
              Highlight as <strong>Urgent / Emergency Contact</strong> (displays prominent red/emergency tag)
            </label>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "10px" }}>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary"
              style={{ padding: "10px 20px" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: "10px 24px" }}
            >
              <UserPlus size={16} />
              <span>Save Contact</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
