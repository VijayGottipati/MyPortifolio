import { Project } from '../utils/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Robust Face Recognition Attendance System',
    description: 'Developed a robust Face Recognition Attendance System using Convolutional Neural Networks (CNN) to automate attendance and improve accuracy and efficiency. Trained the system on a dataset of 100 pictures per individual for 50 different users, achieving 84% precision rate for scalable attendance recording in Excel.',
    category: 'Computer Vision',
    tags: ['Python', 'CNN', 'Machine Learning', 'OpenCV', 'Excel Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    sourceUrl: 'https://github.com/vijaygottipati/face-recognition-attendance'
  },
  {
    id: '2',
    title: 'Gender Detection and Age Prediction System',
    description: 'Developed a robust Gender Detection and Age Prediction System using Deep Neural Networks (DNN) and image processing techniques. Incorporated optimization techniques from relevant research papers and achieved 77% accuracy for gender detection and 72% for age prediction using Kaggle datasets.',
    category: 'Deep Learning',
    tags: ['Python', 'Deep Neural Networks', 'Image Processing', 'Kaggle', 'Computer Vision'],
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop',
    sourceUrl: 'https://github.com/vijaygottipati/gender-age-prediction'
  },
  {
    id: '3',
    title: 'Intelligent Chatbot Using NLP and Deep Learning',
    description: 'Developed an Intelligent Chatbot using NLP and deep learning algorithms for accurate and contextually relevant responses. Trained the chatbot on a database of hundreds of conversations, achieving a high precision rate of 94% for known queries with meaningful interactions.',
    category: 'Large Language Models',
    tags: ['Python', 'NLP', 'Deep Learning', 'Natural Language Processing', 'Conversational AI'],
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    sourceUrl: 'https://github.com/vijaygottipati/intelligent-chatbot'
  },
  {
    id: '4',
    title: 'Machine Learning Algorithms for Image Classification',
    description: 'Conducted a comprehensive analysis comparing machine learning algorithms for image classification. Employed feature extraction techniques to enhance algorithm performance using diverse datasets. Support Vector Machine consistently achieved the highest accuracy across dataset categories, despite longer computational time.',
    category: 'Deep Learning',
    tags: ['Python', 'Machine Learning', 'SVM', 'Naive Bayes', 'Feature Extraction', 'Image Classification'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    sourceUrl: 'https://github.com/vijaygottipati/ml-image-classification'
  },
  {
    id: '5',
    title: 'Hotel Management System Using MySQL',
    description: 'Designed and implemented a comprehensive Hotel Management System using MySQL database. Developed optimized backend functionality with efficient database tables, relationships, and queries. Integrated modules for reservation management, room allocation, guest profiles, and billing with advanced search and filtering capabilities.',
    category: 'Other',
    tags: ['MySQL', 'Database Design', 'SQL', 'Backend Development', 'Hotel Management'],
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    sourceUrl: 'https://github.com/vijaygottipati/hotel-management-system'
  }
]; 