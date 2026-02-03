"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { Button } from "../ui/button"; // Ye line missing thi
import Link from "next/link";
import { cn } from "@/lib/utils";
import projects from "@/data/projects"; 

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
      <Link href={"#projects"}>
        <h2 className={cn(
          "bg-clip-text text-4xl text-center font-bold tracking-tight text-transparent mb-12",
          "bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-white/20"
        )}>
          My Projects
        </h2>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Modal key={index}>
            <ModalTrigger className="bg-transparent border border-zinc-800 rounded-xl overflow-hidden hover:scale-[1.02] transition-all group">
              <div className="relative w-full aspect-video">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-left bg-zinc-900/50">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-blue-400 font-mono mt-1">{project.category}</p>
              </div>
            </ModalTrigger>
            
            <ModalBody>
              <ModalContent className="overflow-y-auto max-h-[80vh]">
                <h2 className="text-2xl font-bold mb-4 text-white">{project.title}</h2>
                <div className="text-zinc-400">
                  {project.content}
                </div>
              </ModalContent>
              <ModalFooter className="gap-4">
                <Link href="https://github.com/Shubham-ai-glitch" target="_blank">
                   <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                     View Code
                   </Button>
                </Link>
              </ModalFooter>
            </ModalBody>
          </Modal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
