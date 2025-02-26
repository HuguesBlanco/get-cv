export type Name = {
  firstName: string;
  lastName: string;
};

export type PostalAddress = {
  streetNumber?: string;
  streetName?: string;
  additionalAddressInfo?: string;
  city?: string;
  postalCode?: string;
  country?: string;
};

export type Contact = {
  email?: string;
  phone?: string;
  postalAddress?: PostalAddress;
};

export type Language = {
  name: string;
  level: string;
};

export type Skill = string;

export type JobPosition = {
  title: string;
  description: string;
  skills: Skill[];
  startDate: Date;
  endDate: Date;
};

export type Company = {
  name: string;
  description?: string;
  website?: string;
  location?: string;
  jobPositions: JobPosition[];
};

export type EducationAchievement = {
  title: string;
  institution: string;
  startDate: Date;
  endDate: Date;
};

export type OnlineCourse = {
  name: string;
  platform: string;
  credentialId: string;
  issueDate: Date;
};

export type Links = {
  linkedinUrl: string;
  githubUrl: string;
};

export type Cv = {
  name: Name;
  targetedPosition: string;
  objective: string;
  contact: Contact;
  languages: Language[];
  skills: Skill[];
  companies: Company[];
  educationAchievements: EducationAchievement[];
  onlineCourses: OnlineCourse[];
  links: Links;
};
