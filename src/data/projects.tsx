// ... (Purane saare imports aur PROJECT_SKILLS ko waise hi rehne dein)

export type Project = {
  id: string;
  category: string;
  title: string;
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  // --- 1. RESUME HERO SECTION ---
  {
    id: "shubham-resume",
    category: "Professional CV",
    title: "Official Resume / CV",
    live: "/assets/resume.pdf",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div className="flex flex-col items-center justify-center py-10 gap-6 bg-gradient-to-b from-transparent to-blue-900/10 rounded-3xl border border-white/10">
          <TypographyP className="font-mono text-xl text-center px-4 font-bold">
             SHUBHAM SINGH - SENIOR FRONTEND WEB DEVELOPER
          </TypographyP>
          <TypographyP className="text-center px-6 text-sm opacity-80 leading-relaxed">
            Highly motivated 11th-grade student at Aakash Institute, Kanpur, and a NEET aspirant. 
            Specialized in bridging the gap between Healthcare and Technology using React, Python, and Ethical Hacking.
          </TypographyP>
          
          <Link href="/assets/resume.pdf" download className="w-full max-w-[280px]">
            <Button className="w-full h-16 text-xl font-bold bg-white text-black hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
              DOWNLOAD RESUME
              <ArrowDownUpIcon className="w-6 h-6 animate-bounce" />
            </Button>
          </Link>
          
          <TypographyP className="text-xs opacity-50 italic text-center">
             Location: Kanpur, Uttar Pradesh, India
          </TypographyP>
        </div>
      );
    },
  },

  // --- 2. CYBERSECURITY CERTIFICATE CARD ---
  {
    id: "cyber-achievement",
    category: "Security & Hacking",
    title: "Cybersecurity Achievement",
    live: "/assets/cert1.jpg",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.docker],
    },
    get content() {
      return (
        <div className="scroll-smooth py-6">
          <TypographyH3 className="text-center font-mono mb-4 text-blue-400 border-b border-blue-900 pb-2">
            Cybersecurity & Ethical Hacking
          </TypographyH3>
          <TypographyP className="text-sm leading-relaxed mb-6 px-4">
            Successfully completed professional training from **Cyber Ethics Academy** on 20 December 2025. 
            Specialized in Network Scanning, System Vulnerability Assessment, and secure web application development. 
            I focus on building secure, user-centric apps that can protect sensitive medical data.
          </TypographyP>
          <Link href="/assets/cert1.jpg" download className="flex justify-center">
            <Button variant="outline" className="gap-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
              Verify Certificate <ExternalLink size={18} />
            </Button>
          </Link>
        </div>
      );
    },
  },

  // --- 3. CCEP PROFESSIONAL CARD ---
  {
    id: "ccep-professional",
    category: "Professional Educator",
    title: "CCEP Educator Certificate",
    live: "/assets/cert2.jpg",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react],
      backend: [],
    },
    get content() {
      return (
        <div className="scroll-smooth py-6">
          <TypographyH3 className="text-center font-mono mb-4 text-red-400 border-b border-red-900 pb-2">
            Certified Cybersecurity Educator
          </TypographyH3>
          <TypographyP className="text-sm leading-relaxed mb-6 px-4">
            Authorized by **Red Team Leaders** as a Certified Cybersecurity Educator Professional (CCEP). 
            Issued on 7 December 2025 by Instructor Joas A. Santos. 
            My expertise lies in teaching secure coding practices and ethical hacking methodologies.
          </TypographyP>
          <Link href="/assets/cert2.jpg" download className="flex justify-center">
            <Button variant="outline" className="gap-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all">
              View Achievement <ExternalLink size={18} />
            </Button>
          </Link>
        </div>
      );
    },
  },

  // --- 4. FORKED AI PROJECT CARD ---
  {
    id: "ai-glitch-fork",
    category: "AI & Automation",
    title: "AI Glitch Bot System",
    live: "https://shubham-dev-tech.netlify.app",
    github: "https://github.com/Shubham-ai-glitch",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.openai],
    },
    get content() {
      return (
        <div className="scroll-smooth py-4">
          <TypographyP className="font-mono text-2xl text-center text-green-400 mb-4">
            Advanced AI & Phone Control
          </TypographyP>
          <TypographyP className="text-sm leading-relaxed px-4 text-center mb-6">
            An independent frontend project focused on building responsive web applications using React.js and TypeScript. 
            This fork project integrates custom automation scripts for terminal-based phone control and AI bot management. 
            Designed to bridge the gap between Healthcare data management and secure tech solutions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  }
];

export { projects };
