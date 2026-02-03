import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypographyP, TypographyH3 } from "@/components/ui/typography";
import { ExternalLink, ArrowDownUpIcon } from "lucide-react";

// Ye interface define karna zaroori hai error fix karne ke liye
export interface Project {
  title: string;
  description: React.ReactNode;
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "3D Interactive Portfolio",
    description: (
      <div className="space-y-2">
        <TypographyP>
          A high-end 3D portfolio showcasing my journey as a Senior Frontend Developer and NEET Aspirant.
        </TypographyP>
      </div>
    ),
    link: "https://shubham-dev-tech.netlify.app",
    github: "https://github.com/Shubham-ai-glitch",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description: (
      <div className="space-y-2">
        <TypographyP>
          Focus on network security and vulnerability assessment. Certified CCEP Educator.
        </TypographyP>
      </div>
    ),
    link: "#",
    github: "https://github.com/Shubham-ai-glitch",
  }
];

export default projects;
