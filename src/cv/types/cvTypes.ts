/**
 * List of available languages for the CV\
 * Values follows  ISO 639-1 (https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes), and are then possible values for HTML lang attribute.
 */
export enum Languages {
  ENGLISH = 'en',
  FRENCH = 'fr',
}

export type Icon = 'envelope' | 'house' | 'locationDot' | 'phone' | 'circle';

export type Name = {
  firstName: string;
  lastName: string;
};

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

export type Cv = {
  name: Name;
  targetPosition: string;
  objective: string;
  contact: Contact;
  languages: Language[];
  skills: Skill[];
  companies: Company[];
  educationAchievements: EducationAchievement[];
  onlineCourses: OnlineCourse[];
};

export enum SegmentType {
  TEXT = 'text',
  BULLET_POINT = 'bullet_point',
}

export type Segment = {
  type: SegmentType;
  content: string;
};

export type Paragraph = Segment[];

export type CoverLetter = {
  headline: string;
  greeting: string;
  body: Paragraph[];
  closing: string;
  signature: string;
};