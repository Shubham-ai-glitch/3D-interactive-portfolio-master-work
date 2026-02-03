import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Send, Github } from "lucide-react"; // Icons updated
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
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}
        >
          {!isLoading && (
            <>
              <div className="">
                <BlurIn delay={0.7}>
                  <p className="md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3 font-display sm:text-xl md:text-xl whitespace-nowrap">
                    Hi, I am
                  </p>
                </BlurIn>
                <BlurIn delay={1}>
                  <h1 className="font-thin text-6xl text-transparent text-slate-800 ml-1 text-left text-edge-outline font-display sm:text-7xl md:text-9xl ">
                    {config.author.split(" ")[0]}
                    <br className="md:block hidden" />
                    {config.author.split(" ")[1]}
                  </h1>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <div className="md:self-start md:mt-4 ml-3">
                    <p className="font-thin text-md text-slate-500 dark:text-zinc-400 font-display sm:text-xl md:text-xl">
                      Senior Frontend Developer & Cybersecurity Expert
                    </p>
                    {/* Education Highlight */}
                    <p className="text-sm text-blue-500 font-mono mt-1">
                      11th Grade NEET Aspirant @ Aakash Institute
                    </p>
                  </div>
                </BlurIn>
              </div>

              <div className="mt-8 md:ml-2 flex flex-col gap-3">
                {/* Updated Resume Link - public/assets/resume.pdf */}
                <Link href="/assets/resume.pdf" download className="flex-1">
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center gap-2 w-full h-12 text-lg">
                      <File size={24} />
                      <p>Download Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>

                <div className="md:self-start flex gap-3">
                  {/* Telegram Button */}
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={config.social.telegram} target="_blank">
                        <Button variant="outline" size="icon" className="w-12 h-12">
                          <Send size={24} className="text-blue-400" />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Message on Telegram</TooltipContent>
                  </Tooltip>

                  {/* GitHub Button */}
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={config.social.github} target="_blank">
                        <Button variant="outline" size="icon" className="w-12 h-12">
                          <Github size={24} />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>View GitHub</TooltipContent>
                  </Tooltip>

                  {/* Contact/Hire Me */}
                  <Link href="#contact">
                    <Button variant="ghost" className="h-12 border border-dashed border-zinc-700">
                      Hire Me
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Iske side wale col-span mein aapki main photo aayegi */}
        <div className="col-span-1 hidden md:flex items-center justify-center p-10">
           <img 
             src="/assets/shubham-singh-frontend-developer.jpg" 
             alt="Shubham Singh Senior Frontend Developer Kanpur"
             className="rounded-3xl shadow-2xl border-2 border-white/10 hover:scale-105 transition-all duration-500"
           />
        </div>
      </div>
      <ScrollDownIcon />
    </section>
  );
};

export default HeroSection;
