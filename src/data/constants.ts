// Explicitly exporting types to fix Netlify build error
export type SkillNames = "JS" | "TS" | "Nextjs" | "React" | "Java" | "Cyber";

export interface Skill {
  name: SkillNames;
  color: string;
  msg: string;
}

export const SKILLS: Skill[] = [
  { name: "JS", color: "#f7df1e", msg: "JavaScript: Yeeting code into the DOM since '26!" },
  { name: "TS", color: "#3178c6", msg: "TypeScript: JavaScript's overachieving cousin." },
  { name: "Nextjs", color: "#ffffff", msg: "Next.js: The drama queen of frameworks." },
  { name: "React", color: "#61dafb", msg: "React: Component-based magic. No cap!" },
  { name: "Java", color: "#f89820", msg: "Advance Java: Architecture and Logic unlocked." },
  { name: "Cyber", color: "#4af626", msg: "Cybersecurity: Certified CCEP defense in progress." }
];

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
