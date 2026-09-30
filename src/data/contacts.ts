export interface Contact {
  id: string;
  name: string;
  role: string;
  department: "Management" | "Board" | "Security" | "Maintenance" | "Emergency" | "Other";
  phone: string;
  email: string;
  hours: string;
  location?: string;
  notes?: string;
  isEmergency?: boolean;
  isCustom?: boolean;
}

export const defaultContacts: Contact[] = [
  {
    id: "cnt-1",
    name: "24/7 Concierge & Security Desk",
    role: "Front Desk & Access Control",
    department: "Security",
    phone: "(416) 555-0199",
    email: "concierge@auroratower.ca",
    hours: "24 Hours / 7 Days a Week",
    location: "Main Ground Lobby Desk",
    notes: "Visitor parking registration, elevator bookings, package deliveries, lost & found, emergency access.",
    isEmergency: true
  },
  {
    id: "cnt-2",
    name: "Elena Rostova",
    role: "Senior Property Manager",
    department: "Management",
    phone: "(416) 555-0142",
    email: "manager@auroratower.ca",
    hours: "Monday – Friday: 9:00 AM – 5:00 PM",
    location: "Management Office (2nd Floor, Suite 204)",
    notes: "Condo fee inquiries, status certificates, by-law compliance, contractor management, dispute resolution."
  },
  {
    id: "cnt-3",
    name: "Marcus Vance",
    role: "Resident Superintendent",
    department: "Maintenance",
    phone: "(416) 555-0188",
    email: "superintendent@auroratower.ca",
    hours: "Monday – Friday: 8:00 AM – 4:30 PM (On-call for building emergencies)",
    location: "Building Workshop (P1 Level)",
    notes: "Common element maintenance, scheduled water shutoffs, mechanical plant upkeep, HVAC filter replacements."
  },
  {
    id: "cnt-4",
    name: "24/7 Urgent Building Emergency Hotline",
    role: "Property Management Emergency Dispatch",
    department: "Emergency",
    phone: "(416) 555-9911",
    email: "emergency@auroramanagement.ca",
    hours: "24/7 Immediate Response",
    location: "Central Dispatch",
    notes: "For active pipe bursts, total power outages, severe building leaks, elevator entrapment.",
    isEmergency: true
  },
  {
    id: "cnt-5",
    name: "David Chen, P.Eng",
    role: "Board President",
    department: "Board",
    phone: "(416) 555-0211",
    email: "board.president@auroratower.ca",
    hours: "By Appointment / Monthly Open Forum",
    location: "Board of Directors Room",
    notes: "Long-term capital planning, Reserve Fund oversight, general governance and community initiatives."
  },
  {
    id: "cnt-6",
    name: "Sophia Martinez, CPA",
    role: "Board Treasurer",
    department: "Board",
    phone: "(416) 555-0212",
    email: "board.treasurer@auroratower.ca",
    hours: "Quarterly Financial Reviews",
    location: "Board of Directors Room",
    notes: "Financial auditing, annual operating budget, reserve fund investments, vendor procurement oversight."
  },
  {
    id: "cnt-7",
    name: "Apex Elevator Solutions (24/7 Service)",
    role: "Certified Elevator Contractors",
    department: "Maintenance",
    phone: "1-800-555-3538",
    email: "service@apexelevators.com",
    hours: "24/7 Elevator Dispatch",
    notes: "Monthly safety certifications, passenger lift preventive maintenance, modernization programs."
  },
  {
    id: "cnt-8",
    name: "Aquaguard Plumbing & Mechanical",
    role: "Condo Infrastructure Specialists",
    department: "Maintenance",
    phone: "(416) 555-4328",
    email: "dispatch@aquaguardplumbing.ca",
    hours: "24/7 On-Call for Riser Emergencies",
    notes: "Main riser stacks, booster pump maintenance, drain snaking, backflow preventer annual testing."
  }
];
