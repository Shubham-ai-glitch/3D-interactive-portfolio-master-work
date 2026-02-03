import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypographyP, TypographyH3 } from "@/components/ui/typography";
import { ExternalLink, ArrowDownUpIcon } from "lucide-react";

export const projects = [
  {
    title: "3D Interactive Portfolio",
    description: (
      <div className="space-y-2">
        <TypographyP>
          A high-end 3D portfolio showcasing my journey as a Senior Frontend Developer and NEET Aspirant.
        </TypographyP>
        <TypographyP>
          Built with Next.js 14, Tailwind CSS, and Framer Motion for smooth animations.
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
          Focused on network security, vulnerability assessment, and ethical hacking practices.
        </TypographyP>
        <TypographyP>
          Certified Cybersecurity Educator Professional (CCEP) recognized by Red Team Leaders.
        </TypographyP>
      </div>
    ),
    link: "#",
    github: "https://github.com/Shubham-ai-glitch",
  },
  {
    title: "AI & Automation Projects",
    description: (
      <div className="space-y-2">
        <TypographyP>
          Developing custom AI solutions to bridge the gap between healthcare and modern technology.
        </TypographyP>
        <TypographyP>
          Implementing Python-based automation for complex data tasks and medical-tech integrations.
        </TypographyP>
      </div>
    ),
    link: "#",
    github: "https://github.com/Shubham-ai-glitch",
  }
];

export default projects;
