// ─── Portfolio Data ───────────────────────────────────────────────────────────
// Edit this file to update your portfolio content.

export const personal = {
  name: "Hoang Kien Trinh",
  tagline: "Software Engineer",
  bio: "I am a Computer Science student at the University of Sydney, passionate about full-stack development, system architecture, and deep learning. I enjoy bridging the gap between sophisticated backends and intuitive user interfaces.",
  location: "Sydney, NSW",
  email: "trinhhoangkien1512@gmail.com",
  github: "https://github.com/kath1512",
  linkedin: "https://www.linkedin.com/in/kien15122007/",
  resume: "#",
};

export const aboutStats = [
  { label: "University", value: "USYD" },
  { label: "Awards", value: "3+" },
  { label: "Focus", value: "Full-Stack" }
];

export const projects = [
  {
    id: 1,
    title: "Custom CNN from Scratch",
    summary: "Deep learning model built from first principles using only Python and NumPy.",
    achievements: [
      "Derived and implemented Convolutional layers and backpropagation using Linear Algebra and Multivariable Calculus.",
      "Applied Xavier/He weight initialization and engineered a custom data pipeline for image normalization.",
      "Achieved 93.8% training and 89.4% test accuracy on the Fashion-MNIST dataset."
    ],
    tags: ["Python", "NumPy", "Pandas", "Deep Learning"],
    github: "https://github.com/Kath1512/CNN_Fashion_MNIST",
    demo: "https://www.kaggle.com/code/kath1512/cnn-for-fashion-mnist",
    demoLabel: "Kaggle",
    featured: true,
  },
  {
    id: 2,
    title: "Full-Stack Task Management",
    summary: "Scalable staff and project management system with microservice-like orchestration.",
    achievements: [
      "Orchestrated .NET API, Angular, PostgreSQL, and Redis containers using Docker-compose.",
      "Designed relational schemas and implemented Entity Framework Core for data persistence.",
      "Integrated Redis for high-performance server-side caching and Angular Service for client caching."
    ],
    tags: [".NET Core", "Angular", "PostgreSQL", "Docker", "Redis"],
    github: "https://github.com/Kath1512/task-manangement-project",
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: "Real-Time Messenger",
    summary: "Low-latency full-stack chat application with bidirectional real-time communication.",
    achievements: [
      "Developed chat infrastructure utilizing Socket.io for real-time bidirectional messaging.",
      "Implemented JWT authentication and secure password hashing with MongoDB.",
      "Built features for online presence indicators, message timestamps, and dynamic notifications."
    ],
    tags: ["MERN", "Socket.io", "MongoDB", "React", "Node.js"],
    github: "https://github.com/Kath1512/My-chat-app",
    demo: "https://kath-chat-app.onrender.com/",
    demoLabel: "Live Demo",
    featured: true,
  }
];

export const experience = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "VNPT IT",
    period: "Aug 2025 – Nov 2025",
    description:
      "Built scalable web apps and developed robust RESTful APIs for frontend-backend communication. Optimized SQL schemas and implemented Redis caching, resulting in a 30% reduction in query latency. Collaborated closely with senior developers on clean code and system architecture.",
    tech: [".NET Core", "Angular", "Redis", "SQL"],
  },
  {
    id: 2,
    role: "Bachelor of Advanced Computing",
    company: "University of Sydney",
    period: "Current",
    description:
      "Majoring in Computer Science. Awarded the prestigious Vice-Chancellor’s International Scholarship.",
    tech: ["Algorithms", "Data Structures", "System Design", "Machine Learning"],
  }
];

export const achievements = [
  {
    id: 1,
    title: "Silver Medalist",
    org: "Central Vietnam & Highlands Informatics Olympiad (2025)",
    description: "Awarded for excellence in competitive programming and algorithmic problem solving.",
  },
  {
    id: 2,
    title: "Team Leader, National Top 20",
    org: "Microsoft Imagine Cup Junior (2024)",
    description: "Led a team to develop an innovative AI-driven solution, placing in the national top 20.",
  },
  {
    id: 3,
    title: "3rd Prize Winner",
    org: "UNICEF Youth-On! Hackathon (2024)",
    description: "Developed a technical solution addressing youth challenges during a high-stakes hackathon.",
  },
  {
    id: 4,
    title: "Logistics Lead & Mentor",
    org: "Young Creation Club / Robot Innovation Competition",
    description: "Mentored junior members in tech and led logistics for a major robotics competition.",
  },
];

export const skills = {
  Languages: ["C#", "Python", "JavaScript", "TypeScript", "Java", "SQL", "C++", "HTML/CSS"],
  "Frameworks & Libs": [".NET Core", "Angular", "React", "Node.js", "NumPy", "Pandas"],
  Infrastructure: ["Docker", "Linux", "Git"],
  Databases: ["PostgreSQL", "Redis", "MongoDB"],
  "Web Core": ["REST APIs", "Socket.io"],
};
