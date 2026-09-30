export interface SupportingDocument {
  id: string;
  title: string;
  category: "YCC76 By Laws" | "YCC76 Declaration";
  description: string;
  fileSize: string;
  fileFormat: "PDF";
  dateUpdated: string;
  isImportant?: boolean;
  downloadUrl: string;
  fileName: string;
}

export const documentsData: SupportingDocument[] = [
  // ─── YCC76 By Laws ───
  {
    id: "bylaw-5",
    title: "YCC76 By-Law No. 5",
    category: "YCC76 By Laws",
    description: "Official By-Law No. 5 of York Condominium Corporation No. 76 — Crescent Town.",
    fileSize: "1.0 MB",
    fileFormat: "PDF",
    dateUpdated: "Registered — Current Edition",
    isImportant: true,
    downloadUrl: "/pdf/YCC76_Bylaw_5.pdf",
    fileName: "YCC76_Bylaw_5.pdf",
  },
  {
    id: "bylaw-6",
    title: "YCC76 By-Law No. 6",
    category: "YCC76 By Laws",
    description: "Official By-Law No. 6 of York Condominium Corporation No. 76 — Crescent Town.",
    fileSize: "429 KB",
    fileFormat: "PDF",
    dateUpdated: "Registered — Current Edition",
    isImportant: false,
    downloadUrl: "/pdf/YCC76_Bylaw_6.pdf",
    fileName: "YCC76_Bylaw_6.pdf",
  },
  {
    id: "bylaw-9",
    title: "YCC76 By-Law No. 9",
    category: "YCC76 By Laws",
    description: "Official By-Law No. 9 of York Condominium Corporation No. 76 — Crescent Town.",
    fileSize: "293 KB",
    fileFormat: "PDF",
    dateUpdated: "Registered — Current Edition",
    isImportant: false,
    downloadUrl: "/pdf/YCC76_Bylaw_9.pdf",
    fileName: "YCC76_Bylaw_9.pdf",
  },
  {
    id: "bylaw-10",
    title: "YCC76 By-Law No. 10",
    category: "YCC76 By Laws",
    description: "Official By-Law No. 10 of York Condominium Corporation No. 76 — Crescent Town.",
    fileSize: "749 KB",
    fileFormat: "PDF",
    dateUpdated: "Registered — Current Edition",
    isImportant: false,
    downloadUrl: "/pdf/YCC76_Bylaw_10.pdf",
    fileName: "YCC76_Bylaw_10.pdf",
  },
  {
    id: "bylaw-11",
    title: "YCC76 By-Law No. 11",
    category: "YCC76 By Laws",
    description: "Official By-Law No. 11 of York Condominium Corporation No. 76 — Crescent Town.",
    fileSize: "409 KB",
    fileFormat: "PDF",
    dateUpdated: "Registered — Current Edition",
    isImportant: false,
    downloadUrl: "/pdf/YCC76_Bylaw_11.pdf",
    fileName: "YCC76_Bylaw_11.pdf",
  },
  {
    id: "bylaw-12",
    title: "YCC76 By-Law No. 12",
    category: "YCC76 By Laws",
    description: "Official By-Law No. 12 of York Condominium Corporation No. 76 — Crescent Town.",
    fileSize: "150 KB",
    fileFormat: "PDF",
    dateUpdated: "Registered — Current Edition",
    isImportant: false,
    downloadUrl: "/pdf/YCC76_Bylaw_12.pdf",
    fileName: "YCC76_Bylaw_12.pdf",
  },

  // ─── YCC76 Declaration ───
  {
    id: "decl-1",
    title: "YCC76 Declaration",
    category: "YCC76 Declaration",
    description: "The registered Condominium Declaration of York Condominium Corporation No. 76, filed with the Ontario Land Registry Office.",
    fileSize: "2.1 MB",
    fileFormat: "PDF",
    dateUpdated: "Registered Land Registry Document",
    isImportant: true,
    downloadUrl: "/pdf/YCC76_Declaration.pdf",
    fileName: "YCC76_Declaration.pdf",
  },
];
