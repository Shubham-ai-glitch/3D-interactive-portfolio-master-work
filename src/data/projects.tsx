// ... (Upar ke saare imports aur PROJECT_SKILLS wahi rehne dein)

const projects: Project[] = [
  {
    id: "neet-tracker",
    category: "Ed-Tech",
    title: "NEET Study Tracker",
    src: "/assets/projects-screenshots/projects/neet-tracker.png", 
    screenshots: ["neet-tracker.png"],
    live: "https://shubham-dev-tech.netlify.app", 
    github: "https://github.com/Shubham-ai-glitch",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">NEET Prep & Progress Tracker</TypographyP>
          <TypographyP className="font-mono">
            Ek specialized tool jo 11th grade NEET aspirants ke liye banaya gaya hai. Yeh Biology, Physics aur Chemistry ke syllabus ko track karne aur daily study goals set karne mein help karta hai.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "personal-portfolio",
    category: "Portfolio",
    title: "3D Developer Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "https://shubham-dev-tech.netlify.app",
    github: "https://github.com/Shubham-ai-glitch",
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.framerMotion, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.netlify],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">Main Portfolio Website</TypographyP>
          <TypographyP className="font-mono">
            Mera main frontend developer portfolio jo meri coding skills, tools aur Kanpur se meri journey ko represent karta hai.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "forked-ai",
    category: "Forked AI Project",
    title: "AI Glitch Automation",
    src: "/assets/projects-screenshots/projects/ai-bot.png",
    screenshots: ["ai-bot.png"],
    live: "https://t.me/CodeZenithAI",
    github: "https://github.com/Shubham-ai-glitch",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.openai, PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">AI & Phone Control System</TypographyP>
          <TypographyP className="font-mono">
            Mera GitHub fork project jisme maine AI integration aur phone control automation features par kaam kiya hai.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  }
];

export { projects };
