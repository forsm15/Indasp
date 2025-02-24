export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: {
    label: string;
    href: string;
  }[];
}

export interface ScheduleItem {
  time: string;
  title: string;
  speaker: string;
  location: string;
}

export interface WhyJoinItem {
  title: string;
  description: string;
  icon: React.ComponentType;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}