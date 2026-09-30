export interface CommunityNotice {
  id: string;
  title: string;
  category: string;
  severity: "critical" | "warning" | "info" | "success";
  date: string;
  effectiveDates: string;
  summary: string;
  content: string;
  affectedAreas: string[];
  actionRequired?: boolean;
  pinned?: boolean;
  contactPerson?: string;
}

export const noticesData: CommunityNotice[] = [];
