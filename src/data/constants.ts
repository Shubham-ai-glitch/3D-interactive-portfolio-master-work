export const themeDisclaimers = {
  dark: [
    "Shubham-ai-glitch mode activated.",
    "System secured. Welcome to the dark side.",
    "Eyes saved! Dark mode is on."
  ],
  light: [
    "Flashbang! Light mode enabled.",
    "System exposed. Brightness 100%.",
    "Burning my eyes, but okay!"
  ]
};

// Baaki SKILLS waisa hi rahega
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
