import React from "react";
import { config } from "@/data/config";
import { Github, Send, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold font-display tracking-tighter">
            SHUBHAM <span className="text-blue-500 text-xs">AI-GLITCH</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-1">
            © {new Date().getFullYear()} Shubham Singh. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a href={config.social.github} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={config.social.telegram} target="_blank" className="text-zinc-500 hover:text-[#0088cc] transition-colors">
            <Send size={20} />
          </a>
          <a href={`mailto:${config.email}`} className="text-zinc-500 hover:text-blue-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
        <p className="text-xs font-mono text-zinc-700">
          Built with Next.js & TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
