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
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import SmoothScroll from "../smooth-scroll";
import { cn } from "@/lib/utils";

// Fixed Import Line
import projects, { Project } from "@/data/projects"; 

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
      <Link href={"#projects"}>
        <h2 className={cn(
          "bg-clip-text text-4xl text-center font-bold tracking-tight text-transparent",
          "bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-white/20"
        )}>
          My Projects
        </h2>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <Modal key={index}>
            <ModalTrigger className="bg-transparent border border-zinc-800 rounded-xl overflow-hidden hover:scale-[1.02] transition-all">
              <div className="relative w-full aspect-video">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-blue-400 font-mono mt-1">{project.category}</p>
              </div>
            </ModalTrigger>
            
            <ModalBody>
              <ModalContent>
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <div className="mt-4">
                  {project.content}
                </div>
              </ModalContent>
              <ModalFooter className="gap-4">
                <Link href="https://github.com/Shubham-ai-glitch" target="_blank">
                   <Button variant="outline">View Code</Button>
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
