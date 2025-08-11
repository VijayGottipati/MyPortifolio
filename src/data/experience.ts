import { Experience } from '../utils/types';

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Lucy Electric',
    position: 'IT End User Support - Internship',
    startDate: '2023-02',
    endDate: undefined, // Current position
    location: 'Jebel Ali, Dubai, UAE',
    description: [
      'Automated packaging and deployment of 20+ software applications using Azure - Microsoft Intune, eliminating manual installation tasks',
      'Deployed an upgraded IT support portal, utilizing comprehensive test procedures that resulted in a 90% reduction in error rate',
      'Efficiently resolved incident tickets, cutting escalation time in half, leading to increased productivity and seamless employee workflow',
      'Implemented remote device policies and security groups, resulting in streamlined issue resolution and enhanced network security',
      'Consistently completed projects within the allotted time'
    ],
    technologies: ['Azure', 'Microsoft Intune', 'IT Support', 'Network Security', 'Remote Device Management']
  },
  {
    id: '2',
    company: 'Ibam Systems',
    position: 'Summer Intern',
    startDate: '2021-06',
    endDate: '2021-08',
    location: 'Al Quoz, Dubai, UAE',
    description: [
      'Worked on 2D circuit designs for 5 projects using AutoCAD, contributing to our firm\'s successful acquisition of 2 projects',
      'Provided valuable support to other teams in the firm on 2 additional projects, contributing to data collection efforts and design execution'
    ],
    technologies: ['AutoCAD', '2D Circuit Design', 'ELV Systems', 'Project Management']
  }
];
