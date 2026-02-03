import React from "react";
import { SiGithub, SiTelegram } from "react-icons/si";
import { config } from "@/data/config";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SocialMediaIcons = () => {
  const socials = [
    {
      name: "GitHub",
      href: config.social.github, // Shubham-ai-glitch
      icon: <SiGithub size={24} />,
      keyword: "Explore My Code & AI Projects",
    },
    {
      name: "Telegram",
      href: config.social.telegram, // @Shubhams872
      icon: <SiTelegram size={24} />,
      keyword: "Connect for Cybersecurity Queries",
    },
  ];

  return (
    <div className="flex gap-5 items-center">
      {socials.map((social) => (
        <Tooltip key={social.name} delayDuration={300}>
          <TooltipTrigger asChild>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="bg-zinc-900 border-zinc-800 text-blue-400 font-mono text-xs">
            <p>{social.keyword}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
