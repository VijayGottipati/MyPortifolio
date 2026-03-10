import { Hackathon } from '../utils/types';

export const hackathons: Hackathon[] = [
    {
        id: '1',
        title: 'Real-Time Financial Fraud Explainer',
        hackathonName: 'Real-Time Data & AI Hackathon',
        date: 'Oct 2025',
        location: 'New York, NY',
        placement: '2nd Place',
        description: [
            'Architected a real-time multi-agent financial monitoring system using LangChain agents, Kafka (AWS MSK) streaming pipelines, and AWS Bedrock AgentCore.',
            'Designed a 3-agent reasoning architecture combining rules-based anomaly detection with LLM reasoning.',
            'Integrated Lenses.io MCP for Kafka observability and stream control.',
            'Built an end-to-end streaming AI workflow that ingests financial transactions and outputs interpretable explanations.'
        ],
        technologies: ['LangChain', 'Kafka (AWS MSK)', 'AWS Bedrock AgentCore', 'Lenses.io']
    },
    {
        id: '2',
        title: 'AI-Powered Shopping Automation System',
        hackathonName: 'AI Tinkerer Hackathon',
        date: 'Nov 2025',
        location: 'New York, NY',
        placement: 'Winner',
        description: [
            'Architected an autonomous shopping agent pipeline that ingests grocery lists from Google Docs and Notion, performs multilingual translation via DeepL API, and executes purchases through AI-driven browser automation.',
            'Designed a modular workflow orchestrated with Manus task agents and Browser Use, enabling structured extraction of items, quantities, and measurements.',
            'Implemented end-to-end autonomous checkout workflows including product discovery, cart management, and purchase execution with robust logging and error handling.'
        ],
        technologies: ['Python', 'Browser Use', 'DeepL API', 'Manus', 'Notion', 'Google Docs']
    }
];
