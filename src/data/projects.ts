import { Project } from '../utils/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'CityLens – Real-Time Multimodal AI Assistant',
    description: 'Built a real-time multimodal assistant combining live camera, voice, and location streams using Gemini Live, enabling contextual scene understanding, spoken interaction, and environment-aware guidance. Architected a FastAPI-powered location intelligence backend integrating Google Maps APIs with Firestore-backed session context.',
    category: 'Large Language Models',
    tags: ['Gemini Live', 'FastAPI', 'Vite', 'React Native', 'Google Maps API', 'Firestore'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    sourceUrl: 'https://github.com/vijaygottipati'
  },
  {
    id: '2',
    title: 'Autonomous DevOps Copilot',
    description: 'Architected an event-driven DevOps automation platform using LangGraph multi-agent orchestration powered by Gemini 1.5 Flash. Built an autonomous CI/CD orchestration pipeline parsing events from GitHub, Slack, Discord, and Gmail webhooks via a Django REST backend.',
    category: 'Large Language Models',
    tags: ['LangGraph', 'Gemini 1.5 Flash', 'Django', 'AWS SQS', 'PostgreSQL (pgvector)', 'Angular'],
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop',
    sourceUrl: 'https://github.com/vijaygottipati'
  },
  {
    id: '3',
    title: 'Real-Time Financial Fraud Explainer',
    description: 'Architected a real-time multi-agent financial monitoring system using LangChain agents, Kafka (AWS MSK) streaming pipelines, and AWS Bedrock AgentCore. Designed a 3-agent reasoning architecture combining rules-based anomaly detection with LLM reasoning. Won 2nd Place at Real-Time Data & AI Hackathon.',
    category: 'Large Language Models',
    tags: ['LangChain', 'Kafka (AWS MSK)', 'AWS Bedrock AgentCore', 'Lenses.io'],
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    sourceUrl: 'https://github.com/vijaygottipati'
  },
  {
    id: '4',
    title: 'AI-Powered Shopping Automation System',
    description: 'Architected an autonomous shopping agent pipeline that ingests grocery lists from Google Docs and Notion, performs multilingual translation via DeepL API, and executes purchases through AI-driven browser automation on Instacart/Target using Manus task agents and Browser Use. Won at AI Tinkerer Hackathon.',
    category: 'Large Language Models',
    tags: ['Python', 'Browser Use', 'DeepL API', 'Manus', 'Notion', 'Google Docs'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    sourceUrl: 'https://github.com/vijaygottipati'
  }
]; 