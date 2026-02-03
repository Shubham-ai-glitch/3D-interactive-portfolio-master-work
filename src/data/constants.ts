// Types define karein jo animated-background.tsx ko chahiye
export type SkillNames = "React.js" | "Next.js" | "TypeScript" | "Python" | "Cybersecurity" | "Ethical Hacking";

export interface Skill {
  name: SkillNames;
  color: string;
}

export const SKILLS: Skill[] = [
  { name: "React.js", color: "#61dafb" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#007acc" },
  { name: "Python", color: "#3776ab" },
  { name: "Cybersecurity", color: "#4af626" },
  { name: "Ethical Hacking", color: "#ff0000" },
];

export const themeDisclaimers = [
  "Shubham-ai-glitch mode activated.",
  "System secured. Welcome to my terminal."
];
