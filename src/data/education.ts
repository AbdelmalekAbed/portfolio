export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: Honor[];
  activities: Activity[];
}

export const education: Education[] = [
  {
    degree: "Research Master’s in Data Science (M2)",
    school: "Higher National Engineering School of Tunis (ENSIT)",
    location: "Tunis, Tunisia",
    startDate: "2025",
    endDate: "Present",
    gpa: "",
    honors: [],
    activities: [],
  },
  {
    degree: "National Engineering Diploma in Applied Mathematics",
    school: "Higher National Engineering School of Tunis (ENSIT)",
    location: "Tunis, Tunisia",
    startDate: "2023",
    endDate: "Present",
    gpa: "",
    honors: [],
    activities: [],
  },
  {
    degree: "Mathematics and Physics (MP) Preparatory Cycle",
    school: "Preparatory Institute for Engineering Studies of Sfax (IPEIS)",
    location: "Sfax, Tunisia",
    startDate: "2021",
    endDate: "2023",
    gpa: "",
    honors: [],
    activities: [],
  },
];
