export interface Project {
  id: number;
  title: string;
  problem: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  color: string;
  highlights: string[];
  image?: string | null;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  type: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location: string;
}

export const personal = {
  name: "K Vaibhav",
  role: "AI/ML Engineer & Software Engineer",
  roles: [
    "AI/ML Engineer",
    "Software Engineer",
    "Generative AI & LLM Systems Builder",
    "End-to-End ML Pipeline Architect",
  ],
  tagline:
    "Building production-oriented AI systems, generative AI applications, and robust backend architectures with PyTorch, FastAPI, and modern cloud stacks.",
  about:
    "I am an AI/ML Engineer and Software Engineer pursuing a B.Tech in Information Technology at Government Engineering College, Bilaspur (2024–2028). I specialize in developing practical machine learning pipelines, generative AI applications, and scalable backend services. From training encoder-decoder Transformers from scratch in PyTorch to architecting multi-agent LLM systems with FastAPI, PostgreSQL, and Docker, my focus is delivering measurable, high-performance software.",
  location: "Bilaspur, Chhattisgarh, India",
  email: "kv9976699@gmail.com",
  phone: "+91 8959253281",
  resumePath: "/resume.pdf",
};

export const socials = [
  {
    label: "GitHub",
    url: "https://github.com/Vaibhavv526",
    icon: "github",
    handle: "Vaibhavv526",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/k-vaibhav-7328b1329/",
    icon: "linkedin",
    handle: "k-vaibhav",
  },
  {
    label: "LeetCode",
    url: "https://leetcode.com/u/Vaibhav___09/",
    icon: "code",
    handle: "Vaibhav___09",
  },
  {
    label: "Hugging Face",
    url: "https://huggingface.co/Vaibhavv09",
    icon: "cpu",
    handle: "Vaibhavv09",
  },
  {
    label: "Kaggle",
    url: "https://www.kaggle.com/vaibhav526",
    icon: "database",
    handle: "vaibhav526",
  },
  {
    label: "Codeforces",
    url: "https://codeforces.com/profile/Vaibhav_009",
    icon: "terminal",
    handle: "Vaibhav_009",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "PM Accelerator",
    role: "Software Engineer Intern (AI/ML)",
    location: "Remote",
    type: "Internship",
    period: "August 2026 – October 2026",
    highlights: [
      "Contributed to AI-driven and generative AI product development.",
      "Explored LLMs, machine-learning frameworks, prompt engineering, and API integrations.",
      "Supported AI application workflows and data-pipeline development.",
      "Documented technical research and recommendations for product development.",
    ],
  },
];

export const education: EducationItem = {
  institution: "Government Engineering College, Bilaspur",
  degree: "B.Tech in Information Technology",
  period: "2024 – 2028",
  score: "SPI: 8.00 (through 4th Semester)",
  location: "Bilaspur, Chhattisgarh, India",
};

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Transformer Translation Model — English to Hindi",
    problem:
      "Cross-lingual sequence transduction demands custom architectural control over attention, positional encoding, and tokenization without relying on black-box wrappers.",
    description:
      "Custom encoder-decoder Transformer architecture implemented completely from scratch in PyTorch for English-to-Hindi translation, featuring custom multi-head attention, sinusoidal positional encoding, causal masking, BPE subword tokenization, and GPU-accelerated FastAPI inference.",
    tags: ["PyTorch", "FastAPI", "React", "Transformers", "NLP", "CUDA"],
    github: "https://github.com/Vaibhavv526/Transformer-Translation-Model",
    demo: null,
    featured: true,
    color: "#ff2d78",
    image: "/projects/transformer.png",
    highlights: [
      "Implemented encoder-decoder Transformer from scratch in PyTorch",
      "Custom multi-head attention, sinusoidal positional encoding, causal masking, and BPE tokenization",
      "Trained on 197K+ cleaned English-Hindi sentence pairs using CUDA and cross-entropy optimization",
      "Implemented autoregressive decoding and beam search",
      "FastAPI inference backend & React interface with model checkpoint loading and GPU-accelerated translation",
    ],
  },
  {
    id: 2,
    title: "CampusCompass — AI-Powered Student Mentoring Platform",
    problem:
      "Engineering students often lack structured, personalized academic mentorship, skill-gap analysis, and interactive career roadmaps.",
    description:
      "Production-deployed multi-agent platform for student mentoring and academic guidance. Coordinates seven specialized agents for tutoring, quizzes, evaluation, and roadmaps, powered by Groq LLMs, containerized with Docker, and deployed on Render and Vercel.",
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "Groq LLM", "Docker"],
    github: "https://github.com/Vaibhavv526/CampusCompass",
    demo: "https://campus-compass-wheat-five.vercel.app",
    featured: true,
    color: "#00d4ff",
    image: null,
    highlights: [
      "Production-deployed multi-agent platform for student mentoring and academic guidance",
      "Seven-agent architecture for personalized mentoring, skill-gap analysis, and AI tutoring",
      "REST APIs with JWT authentication, bcrypt password hashing, SQLAlchemy, and Pydantic validation",
      "Containerized with Docker; backend deployed on Render, frontend deployed on Vercel",
    ],
  },
  {
    id: 3,
    title: "Computer Vision Illumination Platform",
    problem:
      "Night-vision cameras capture subtle lighting variations that are difficult for human operators to assess in real time, requiring sub-200 ms classification.",
    description:
      "Night-vision illumination classification pipeline combining ResNet18, YOLO, and XGBoost to predict lighting levels (Dark, Normal, Bright) with 92% accuracy. Features custom preprocessing, JWT-secured image upload APIs, and PostgreSQL history tracking.",
    tags: ["FastAPI", "React", "ResNet18", "YOLO", "XGBoost", "PostgreSQL"],
    github: "https://github.com/Vaibhavv526/Predicting-Illumination-from-Camera-Images",
    demo: "https://predicting-illumination-from-camera.vercel.app",
    featured: true,
    color: "#7b2fff",
    image: null,
    highlights: [
      "Night-vision illumination classification pipeline combining ResNet18, YOLO, and XGBoost",
      "Achieved 92% classification accuracy and under 200 ms inference latency",
      "Custom image preprocessing pipeline that improved classification accuracy by 8%",
      "Image-upload APIs, JWT authentication, PostgreSQL history tracking, and React interface",
      "Deployed using Railway (backend) and Vercel (frontend)",
    ],
  },
];

export const secondaryProjects: Project[] = [
  {
    id: 4,
    title: "Weather Trend Forecasting System",
    problem:
      "City-specific meteorological patterns require robust time-series data pipelines and reliable cloud endpoints for multi-horizon temperature prediction.",
    description:
      "Production-grade weather forecasting pipeline for predicting temperature trends across multiple cities using location-specific machine learning models, end-to-end data engineering, and an interactive interface deployed on Render.",
    tags: ["Machine Learning", "Data Engineering", "Streamlit", "Prophet", "Python"],
    github: "https://github.com/Vaibhavv526/Weather-Trend-Forecasting",
    demo: "https://weather-trend-forecasting-v.onrender.com",
    featured: false,
    color: "#00d4ff",
    image: "/projects/weather.png",
    highlights: [
      "Location-specific machine learning forecasting models for multi-city temperature trends",
      "End-to-end automated data engineering pipeline",
      "Real-time city- and date-based temperature trend predictions",
      "Production cloud deployment on Render",
    ],
  },
  {
    id: 5,
    title: "Customer Segmentation System",
    problem:
      "Unstructured consumer data requires clear behavioral segmentation and intuitive visual representations for marketing analysis.",
    description:
      "Machine learning pipeline utilizing K-Means clustering with PCA dimensionality reduction to segment customers based on behavioral and demographic patterns, deployed in a containerized Streamlit application.",
    tags: ["K-Means", "PCA", "Streamlit", "Docker", "Scikit-learn"],
    github: "https://github.com/Vaibhavv526/Customer_Segmentation",
    demo: null,
    featured: false,
    color: "#7b2fff",
    image: "/projects/customer.png",
    highlights: [
      "K-Means clustering pipeline with StandardScaler feature normalization",
      "PCA dimensionality reduction for 2D visual cluster analysis",
      "Interactive Streamlit web application with real-time inference",
      "Dockerized container deployment",
    ],
  },
];

// Re-export combined projects for components expecting projects array
export const projects: Project[] = [...featuredProjects, ...secondaryProjects];

export const skillCategories = [
  {
    title: "Programming",
    color: "#00d4ff",
    skills: ["Python", "C", "Java", "SQL", "HTML", "JavaScript"],
  },
  {
    title: "AI & Machine Learning",
    color: "#7b2fff",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "Transformers",
      "OpenCV",
      "YOLO",
      "XGBoost",
      "Computer Vision",
      "LLMs",
    ],
  },
  {
    title: "Generative AI",
    color: "#ff2d78",
    skills: ["LangChain", "LangGraph", "CrewAI"],
  },
  {
    title: "Backend & Data",
    color: "#00d4ff",
    skills: ["FastAPI", "PostgreSQL", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Cloud & Developer Tools",
    color: "#ffa500",
    skills: ["Git", "Jupyter Notebook", "Streamlit", "AWS", "Docker", "WSL"],
  },
];

export const achievements = [
  {
    title: "Adobe University Hackathon 2026",
    position: "Round 4 Finalist (~150 of ~300,000 participants)",
    year: "2026",
    icon: "award",
    color: "#ff2d78",
    detail: "Advanced through multiple rounds to the top 150 participants nationwide.",
  },
  {
    title: "Symbiosis Skill Hackathon (SSH 26)",
    position: "Runner-Up",
    year: "2026",
    icon: "trophy",
    color: "#00d4ff",
    detail: "Secured 2nd place in national hackathon at Symbiosis University.",
  },
  {
    title: "Business Ghar Ideathon 2026",
    position: "Runner-Up",
    year: "2026",
    icon: "award",
    color: "#7b2fff",
    detail: "Awarded runner-up for technical venture and AI solution design.",
  },
  {
    title: "LeetCode Problem Solving",
    position: "300+ Problems Solved | Contest Rating 1740",
    year: "2026",
    icon: "code",
    color: "#ffa500",
    detail: "Consistent competitive programming practice in Data Structures and Algorithms.",
  },
  {
    title: "2026 International AI Contest",
    position: "Finalist — 3D Mesh Quality Control Challenge",
    year: "2026",
    icon: "star",
    color: "#00d4ff",
    detail: "Competed in the 3D Mesh Quality Control challenge organized by Sber AI RnD XR.",
  },
  {
    title: "IIIT Naya Raipur E-Summit & NHIDE",
    position: "National Finalist",
    year: "2026",
    icon: "zap",
    color: "#7b2fff",
    detail: "Selected as National Finalist among hundreds of competing institutions.",
  },
];
