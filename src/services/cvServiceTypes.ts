export type PostalAddress = {
  streetNumber: string;
  streetName: string;
  additionalAddressInfo: string;
  city: string;
  postalCode: string;
  country: string;
};

export type Contact = {
  email: string;
  phone: string;
  postalAddress: PostalAddress;
};

export type Language = {
  language: string;
  level: string;
};

export type Skill = string;

export type JobPosition = {
  title: string;
  description: string;
  skills: Skill[];
  startDate: string;
  endDate: string | null;
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
  startDate: string;
  endDate: string;
};

export type OnlineCourse = {
  course: string;
  platform: string;
  credentialId: string;
  issueDate: string;
};

export type CvData = {
  contact: Contact;
  languages: Language[];
  skills: Skill[];
  companies: Company[];
  educationAchievements: EducationAchievement[];
  onlineCourses: OnlineCourse[];
};
