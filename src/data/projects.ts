import type { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Traffic Signal Optimization with Multi-Agent Reinforcement Learning",
    description:
      "Implemented a multi-agent reinforcement learning system (Q-Learning, DQN, PPO) integrated with the SUMO simulator to optimize traffic signal timing. Reduced congestion and improved traffic flow efficiency using game-theoretic coordination strategies.",
    image: "/projects/traffic-rl.jpg",
    technologies: [
      "Python",
      "Reinforcement Learning",
      "Q-Learning",
      "DQN",
      "PPO",
      "SUMO",
      "Game Theory",
      "Machine Learning"
    ],
    category: "AI & Machine Learning",
    links: {
      github: "#",
    },
    featured: true,
  },
  {
    id: "2",
    title: "Pneumonia Detection from Chest X-Ray Images",
    description:
      "Developed and trained a CNN-based model using TensorFlow/Keras for pneumonia classification on chest X-ray datasets. Applied data augmentation, regularization techniques, and model tuning to achieve strong diagnostic accuracy.",
    image: "/projects/pneumonia-cnn.jpeg",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "Deep Learning",
      "CNN",
      "Image Classification",
      "Medical Imaging"
    ],
    category: "Deep Learning",
    links: {
      github: "#",
    },
    featured: true,
  },
  {
    id: "3",
    title: "Smart Queue Monitoring System",
    description:
      "Built a real-time queue analytics system using YOLOv8 and DeepSORT for person detection and tracking. Implemented zone-based wait-time estimation, live KPIs, synchronized video playback, and dynamic dashboard visualizations.",
    image: "/projects/queue-monitoring.png",
    technologies: [
      "Python",
      "YOLOv8",
      "DeepSORT",
      "OpenCV",
      "Computer Vision",
      "Real-time Processing",
      "Data Visualization"
    ],
    category: "Computer Vision",
    links: {
      github: "#",
    },
    featured: false,
  },
  {
    id: "4",
    title: "BERT-Based Sentiment Analysis Web Application",
    description:
      "Developed a real-time sentiment analysis application using a fine-tuned BERT model trained on 350k+ Amazon reviews. Built an interactive Streamlit interface with batch processing and dynamic visualizations.",
    image: "/projects/bert-sentiment.jpeg",
    technologies: [
      "Python",
      "BERT",
      "Transformers",
      "NLP",
      "Machine Learning",
      "Streamlit"
    ],
    category: "Natural Language Processing",
    links: {
      github: "#",
    },
    featured: false,
  },
  {
    id: "5",
    title: "Jira Manager Pro – Full-Stack Ticket Management Platform",
    description:
      "Engineered a full-stack application using React.js and Flask to streamline ticket management and team productivity. Created dashboards with interactive charts, KPIs, and analytics on ticket trends, resolution times, and priority distribution.",
    image: "/projects/jira-manager.png",
    technologies: [
      "React.js",
      "Flask",
      "Python",
      "JavaScript",
      "Data Visualization",
      "Dashboard Development",
      "Full-Stack Development"
    ],
    category: "Full-Stack Development",
    links: {
      github: "#",
    },
    featured: false,
  },
  {
    id: "6",
    title: "Business Dashboard & Admin Modules – MTD Group",
    description:
      "Built admin-side modules for sales, inventory, and reporting. Improved data structure for enhanced KPI extraction and contributed to automated reporting workflows and optimized data retrieval.",
    image: "/projects/mtd-admin.jpeg",
    technologies: [
      "SQL",
      "Python",
      "JavaScript",
      "Data Analysis",
      "Dashboard Development",
      "Web Development"
    ],
    category: "Data Engineering",
    links: {
      github: "#",
    },
    featured: false,
  },
];
