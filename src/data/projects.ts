import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'bug-severity-classification',
    title: 'Bug Severity Classification',
    description:
      'Led a team of 5 building an NLP pipeline that classified 112,000+ GitHub issue reports by severity using TF-IDF with Logistic Regression, Naive Bayes, and SVM — 93.5% accuracy with the SVM model.',
    images: [
      '/images/projects/bug-severity-classification-1.png',
      '/images/projects/bug-severity-classification-2.png',
    ],
    techStack: ['Python', 'TF-IDF', 'Scikit-learn', 'NLTK', 'Pandas'],
    category: 'ml',
    githubUrl: 'https://github.com/zahrapriyono/Bug-Severity-Classification',
    featured: true,
    date: '2026-06',
  },
  {
    id: 'emotion-classification',
    title: 'Emotion Classification in E-Commerce',
    description:
      'Led modeling, data processing, and the research paper comparing XLM-R, IndoBERT, and BiLSTM+FastText for emotion classification on Indonesian e-commerce reviews (PRDECT-ID dataset); IndoBERT performed best at 72.05% accuracy, 68.78% macro F1.',
    images: ['/images/projects/emotion-classification.png'],
    techStack: ['Python', 'XLM-R', 'IndoBERT', 'BiLSTM+FastText'],
    category: 'ml',
    githubUrl:
      'https://github.com/zahrapriyono/Emotion-Classification-in-E-Commerce',
    featured: true,
    date: '2026-06',
  },
  {
    id: 'glucosense',
    title: 'GlucoSense',
    description:
      'A diabetes education platform with a RAG-based AI chatbot (Groq API) handling mixed English/Indonesian input; owned the AI/chatbot build end-to-end (model integration, API work, data collection) and developed the frontend.',
    images: [
      '/images/projects/glucosense-1.jpg',
      '/images/projects/glucosense-2.jpg',
    ],
    techStack: ['Django', 'REST API', 'Groq API (RAG)', 'Supabase'],
    category: 'fullstack',
    githubUrl: 'https://github.com/zahrapriyono/GlucoSense',
    featured: true,
    date: '2026-08',
  },
  {
    id: 'fruit-freshness-classification',
    title: 'Fruit Freshness Classification',
    description:
      'Compared EfficientNetB0 and ResNet50V2 (transfer learning) for binary fruit freshness classification, with and without Gaussian Blur + CLAHE preprocessing, across a 359-image Kaggle dataset; ResNet50V2 with preprocessing performed best — 94.4% accuracy, F1 0.944, zero false negatives on the fresh class.',
    images: [
      '/images/projects/fruit-freshness-classification-1.jpeg',
      '/images/projects/fruit-freshness-classification-2.jpeg',
    ],
    techStack: ['Python', 'TensorFlow/Keras', 'OpenCV', 'MLflow'],
    category: 'ml',
    githubUrl: 'https://github.com/zahrapriyono/Fruit-Freshness-Classification',
    featured: true,
    date: '2026-06',
  },
  {
    id: 'stresspredict',
    title: 'StressPredict',
    description:
      'A web application classifying student stress level into 3 classes; ran EDA, preprocessing, and benchmarking across 5 algorithms, selecting LightGBM — 75.51% accuracy, 75.69% macro F1.',
    images: [
      '/images/projects/stresspredict-1.png',
      '/images/projects/stresspredict-2.png',
    ],
    techStack: [
      'Python',
      'Streamlit',
      'LightGBM',
      'Scikit-learn',
      'FastAPI',
      'Groq LLM',
    ],
    category: 'ml',
    githubUrl: 'https://github.com/zahrapriyono/stress-predict-ml',
    featured: false, // repo/metrics not independently verified (see note above)
    date: '2026-06',
  },
  {
    id: 'schola-system',
    title: 'Schola',
    description:
      'Led a team of 5 developing a centralized scholarship platform (smart search/filtering, application tracking, admin CRUD); built the backend, authored UML diagrams (Use Case, Activity, Sequence, Class), and led black-box test case design and execution.',
    images: ['/images/projects/schola.png'],
    techStack: ['Django', 'MySQL'],
    category: 'fullstack',
    githubUrl: 'https://github.com/zahrapriyono/Schola-System',
    featured: false,
    date: '2026-06',
  },

  // add more projects here
];

// Helper: items per page for "Show More"
export const PROJECTS_PER_PAGE = 3;
