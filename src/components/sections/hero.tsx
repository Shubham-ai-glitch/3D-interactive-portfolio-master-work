import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Send, Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2 h-full">
        <div className="flex flex-col justify-center items-center md:items-start p-8 md:p-24 lg:p-40">
          {!isLoading && (
            <>
              <BlurIn delay={0.7}>
                <p className="text-slate-500 dark:text-zinc-400 font-display text-xl">Hi, I am</p>
              </BlurIn>
              <BlurIn delay={1}>
                <h1 className="text-6xl md:text-9xl font-bold text-slate-800 dark:text-white font-display uppercase tracking-tighter">
                  {config.author.split(" ")[0]}
                  <br />
                  {config.author.split(" ")[1]}
                </h1>
              </BlurIn>
              <BlurIn delay={1.2}>
                <div className="mt-4">
                  <p className="text-lg text-blue-500 font-mono">Senior Frontend Developer & Cybersecurity Expert</p>
                  <p className="text-sm text-zinc-500 mt-1">11th Grade NEET Aspirant @ Aakash Institute, Kanpur</p>
                </div>
              </BlurIn>

              <div className="mt-8 flex flex-col gap-4 w-full max-w-[300px]">
                <Link href="/assets/resume.pdf" download>
                  <BoxReveal delay={2} width="100%">
                    <Button className="w-full h-14 text-lg font-bold gap-2">
                      <File size={22} /> Download Resume
                    </Button>
                  </BoxReveal>
                </Link>

                <div className="flex gap-4">
                  <Link href={config.social.telegram} target="_blank">
                    <Button variant="outline" size="icon" className="w-14 h-14 border-zinc-800">
                      <Send size={24} className="text-blue-400" />
                    </Button>
                  </Link>
                  <Link href={config.social.github} target="_blank">
                    <Button variant="outline" size="icon" className="w-14 h-14 border-zinc-800">
                      <Github size={24} />
                    </Button>
                  </Link>
                  <Link href="#contact" className="flex-1">
                    <Button variant="ghost" className="w-full h-14 border border-dashed border-zinc-700">
                      Hire Me
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="hidden md:flex items-center justify-center p-12">
          <img 
            src="/assets/shubham-singh-frontend-developer.jpg" 
            alt="Shubham Singh"
            className="rounded-[40px] shadow-2xl border-4 border-white/5 hover:scale-105 transition-all duration-500 max-h-[70vh]"
          />
        </div>
      </div>
      <ScrollDownIcon />
    </section>
  );
};

export default HeroSection;
