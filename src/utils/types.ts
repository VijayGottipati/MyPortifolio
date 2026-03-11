export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Large Language Models' | 'Deep Learning' | 'Computer Vision' | 'Other';
  tags: string[];
  imageUrl?: string;
  sourceUrl: string;
  liveUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  location: string;
  feedbackBy?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url: string;
  imageUrl?: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  description?: string;
  year?: string;
}

export interface Volunteer {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}

export interface Hackathon {
  id: string;
  title: string;
  hackathonName: string;
  date: string;
  location: string;
  placement: string;
  description: string[];
  technologies: string[];
}