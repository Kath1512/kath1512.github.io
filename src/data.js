// ─── Portfolio Data ───────────────────────────────────────────────────────────
// Edit this file to update your portfolio content.

export const personal = {
  name: "Hoang Kien Trinh",
  tagline: "I make things. Then I make them faster.",
  heroBio: "CS student at USYD who builds things from scratch — not because it's efficient, but because I actually want to know how they work.",
  bio: "CS student at the University of Sydney building from the ground up — from hardware-aware C++20 matching engines to deep learning models derived from first principles. Focused on the engineering behind low-latency systems, market microstructure, and high-frequency trading infrastructure.",
  location: "Sydney, NSW",
  email: "trinhhoangkien1512@gmail.com",
  github: "https://github.com/kath1512",
  linkedin: "https://www.linkedin.com/in/kien15122007/",
  resume: "#",
};

export const aboutStats = [
  { label: "University", value: "USYD" },
  { label: "Scholarship", value: "AUD 40K" },
  { label: "Focus", value: "Low-Latency" }
];

export const projects = [
  {
    id: 1,
    title: "Low-Latency C++ Order Book",
    summary: "Price-time priority matching engine with lock-free event pipeline, built from scratch in C++20 for HFT research.",
    achievements: [
      "Implemented GTC, IOC, and FOK order types with correct maker-pricing semantics, O(log n) level access via std::map, and O(1) FIFO matching via std::list within each price level.",
      "Built a lock-free ring buffer event pipeline using atomic acquire/release ordering and alignas(64) cache-line padding to eliminate false sharing between producer and consumer threads.",
      "Designed a binary wire protocol with fixed-size structs and a data-driven test suite of 17+ scenarios covering multi-level sweeps, partial fills, cancels, and order modifications.",
    ],
    tags: ["C++20", "Systems Programming", "HFT", "Low-Latency"],
    github: "https://github.com/Kath1512/MyOrderBook",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: "Custom CNN from Scratch",
    summary: "Deep learning model built from first principles using only Python and NumPy — no frameworks.",
    achievements: [
      "Derived and implemented convolutional layers and backpropagation by hand using Linear Algebra and Multivariable Calculus.",
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
    id: 3,
    title: "GPT-2 Language Model",
    summary: "GPT-2 architecture (124M parameter config) implemented from scratch in PyTorch — every component hand-built, no high-level abstractions.",
    achievements: [
      "Built a custom BPE-style tokenizer with vocabulary construction and special-token handling, then implemented token and positional embeddings feeding into a sliding-window dataset pipeline.",
      "Implemented causal multi-head attention from scratch using tensor reshaping (b, tokens, heads, head_dim) with registered-buffer causal masks — no per-head loops, correct batched inference.",
      "Assembled stacked transformer blocks (pre-norm LayerNorm, GELU feed-forward, residual connections) into a full GPTModel and trained end-to-end with cross-entropy loss and greedy text generation.",
    ],
    tags: ["Python", "PyTorch", "Deep Learning", "Transformers", "NLP"],
    github: "https://github.com/Kath1512/My_First_LLM_Pytorch",
    demo: null,
    featured: true,
  },
  {
    id: 5,
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
    id: 6,
    title: "Real-Time Messenger",
    summary: "Full-stack chat application with bidirectional real-time communication.",
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
      "Majoring in Computer Science. Recipient of the Vice-Chancellor’s International Scholarship (AUD 40,000). Coursework spans algorithms, systems design, probability, and machine learning.",
    tech: ["Algorithms", "Probability & Statistics", "System Design", "Machine Learning"],
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
  "Systems & Concurrency": ["C++20", "Lock-free Structures", "Atomic Memory Ordering", "Cache Optimization", "RAII", "Move Semantics", "CMake"],
  "Quant & Math": ["Market Microstructure", "Order Books", "Probability Theory", "Market Making"],
  Languages: ["C++", "Python", "C#", "Java", "JavaScript", "TypeScript", "SQL"],
  "Frameworks & Libs": [".NET Core", "Angular", "React", "Node.js", "NumPy", "Pandas"],
  Infrastructure: ["Docker", "Linux", "Git"],
  Databases: ["PostgreSQL", "Redis", "MongoDB"],
};
