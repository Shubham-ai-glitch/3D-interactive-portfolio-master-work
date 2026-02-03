import React from "react";
import { TypographyP } from "@/components/ui/typography";

// Interface ko export karna zaroori hai error fix karne ke liye
export interface Project {
  title: string;
  category: string;
  src: string;
  content: React.ReactNode;
}

export const projects: Project[] = [
  {
    title: "3D Interactive Portfolio",
    category: "Senior Frontend Development",
    src: "/assets/shubham-singh-frontend-developer.jpg",
    content: (
      <TypographyP>
        A professional 3D portfolio showcasing my journey as an 11th-grade NEET aspirant and developer from Kanpur.
      </TypographyP>
    ),
  },
  {
    title: "Cybersecurity Expert",
    category: "Security & Hacking",
    src: "/assets/shubham-singh-cybersecurity-expert.jpg",
    content: (
      <TypographyP>
        Certified Cybersecurity Educator Professional (CCEP) specializing in network safety.
      </TypographyP>
    ),
  }
];

export default projects;
