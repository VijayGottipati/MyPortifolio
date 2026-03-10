import { Experience } from '../utils/types';

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Lucy Electric',
    position: 'IT End User Support Intern',
    startDate: '2023-02',
    endDate: '2023-06',
    location: 'Jebel Ali, Dubai, UAE',
    description: [
      'Automated enterprise software packaging and deployment for 20+ applications using Microsoft Intune (Azure), eliminating manual installations and improving endpoint provisioning efficiency.',
      'Deployed and validated an upgraded IT service portal with structured testing workflows, reducing system error rates by 90% and improving internal support reliability.',
      'Resolved end-user incident tickets and system issues, reducing escalation time by 50% and enabling faster operational recovery across employee workstations.',
      'Implemented remote device management policies and security groups via Azure-based endpoint management, improving device governance and network security posture.'
    ],
    technologies: ['Azure', 'Microsoft Intune', 'IT Support', 'Network Security', 'Remote Device Management']
  },
  {
    id: '2',
    company: 'IBAM Systems',
    position: 'Engineering Intern',
    startDate: '2021-06',
    endDate: '2021-08',
    location: 'Al Quoz, Dubai, UAE',
    description: [
      'Designed 2D ELV circuit layouts for 5 infrastructure projects using AutoCAD, contributing to technical proposals that helped secure 2 client contracts.',
      'Assisted engineering teams with site data collection, technical documentation, and system design support across additional infrastructure projects.'
    ],
    technologies: ['AutoCAD', 'ELV Circuit Layout', 'Infrastructure', 'Technical Documentation']
  }
];
