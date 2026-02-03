"use client";
import React from "react";
import { Button } from "../ui/button";
import { Mail, Send, Github } from "lucide-react";
import { config } from "@/data/config";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-500">
          Get In Touch
        </h2>
        <p className="text-zinc-400 text-lg mb-12">
          Whether you have a medical-tech project idea or a cybersecurity concern, my inbox is always open.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Email Card */}
          <a href={`mailto:${config.email}`} className="group p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 hover:border-blue-500 transition-all">
            <Mail className="mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="font-bold text-white">Email Me</h3>
            <p className="text-xs text-zinc-500 mt-2 break-all">{config.email}</p>
          </a>

          {/* Telegram Card */}
          <a href={config.social.telegram} target="_blank" className="group p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 hover:border-blue-400 transition-all">
            <Send className="mx-auto mb-4 text-[#0088cc] group-hover:scale-110 transition-transform" size={40} />
            <h3 className="font-bold text-white">Telegram</h3>
            <p className="text-xs text-zinc-500 mt-2">@Shubhams872</p>
          </a>

          {/* GitHub Card */}
          <a href={config.social.github} target="_blank" className="group p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 hover:border-white transition-all">
            <Github className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" size={40} />
            <h3 className="font-bold text-white">GitHub</h3>
            <p className="text-xs text-zinc-500 mt-2">Shubham-ai-glitch</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
