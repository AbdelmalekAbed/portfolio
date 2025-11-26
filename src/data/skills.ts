import { Brain, Globe, Code, Terminal } from "lucide-react";
import type { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    Icon: Brain,
    color: "bg-purple-500/10 text-purple-500",
    skills: [
      "Natural Language Processing",
      "Deep Learning",
      "Machine Learning",
      "Computer Vision",
      "Large Language Models",
      "Neural Networks",
      "Predictive Modeling",
      "Statistical Analysis",
    ],
  },
  {
    name: "Web Development",
    Icon: Globe,
    color: "bg-blue-500/10 text-blue-500",
    skills: [
      "React.js",
      "HTML5/CSS3",
      "JavaScript",
      "PHP",
      "Java",
      "C/C++",
      "JEE (Java Enterprise Edition)",
    ],
  },
  {
    name: "Programming & Frameworks",
    Icon: Code,
    color: "bg-green-500/10 text-green-500",
    skills: [
      "Python",
      "SQL",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Keras",
      "NLTK",
      "SpaCy",
    ],
  },
  {
    name: "Data Engineering & Analytics",
    Icon: Terminal,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "Data Preprocessing",
      "Feature Engineering",
      "Data Visualization",
      "ETL Pipelines",
      "NoSQL Databases",
      "Data Mining",
    ],
  },
];
