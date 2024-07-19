export type Skill = string;

export type ProfessionalExperience = {
  title: string;
  description: string;
  skills: Skill[];
};

export type Education = {
  degree: string;
  field: string;
  institution: string;
  startDate: string;
  endDate: string;
};

export type OnlineCourse = {
  course: string;
  platform: string;
};

export type Languages = {
  french: string;
  english: string;
};

export type Contact = {
  email: string;
  phone: string;
  address: string;
};

export type CvData = {
  professionalExperience: ProfessionalExperience[];
  skills: Skill[];
  education: Education[];
  onlineCourses: OnlineCourse[];
  languages: Languages;
  contact: Contact;
};
