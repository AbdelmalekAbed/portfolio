export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: "Web/Data Intern",
    company: "MTD-Group",
    location: "Sfax, Tunisia",
    startDate: "June 2024",
    endDate: "July 2024",
    achievements: [
      {
        text:
          "Built admin-side modules for sales, inventory, and reporting, improving workflow efficiency and usability.",
      },
      {
        text:
          "Enhanced database structure to enable more accurate and faster KPI extraction.",
      },
      {
        text:
          "Implemented optimized data retrieval techniques to improve dashboard and reporting performance.",
      },
      {
        text:
          "Contributed to the automation of reporting processes through dynamic dashboards and improved data flows.",
      },
    ],
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "Data Analysis" },
      { name: "Dashboard Development" },
      { name: "Web Development" },
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Primatec Engineering - KPIT",
    location: "Tunis, Tunisia",
    startDate: "July 2025",
    endDate: "August 2025",
    achievements: [
      {
        text:
          "Developed Jira Manager Pro, a full-stack web application (React.js + Flask) for streamlined ticket management and team productivity.",
      },
      {
        text:
          "Created an interactive analytics dashboard with charts and KPIs, visualizing ticket trends, resolution time, and type/priority distribution.",
      },
      {
        text:
          "Improved workflow visibility and simplified team communication through customized UI components and performance-focused backend logic.",
      },
    ],
    skills: [
      { name: "React.js" },
      { name: "Flask" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "Data Visualization" },
      { name: "Dashboard Development" },
    ],
  },
];

export const previousExperiences: Experience[] = [];
