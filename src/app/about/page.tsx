"use client";
import React, { useEffect, useState } from "react";
// Sahi icons import karein
import { 
  FaEnvelope, FaGithub, FaPhone, FaReact, FaNodeJs, FaHtml5, FaCss3, FaPython, FaTerminal 
} from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiTelegram } from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "shubhamsingh9415191609@gmail.com", // Aapki verified email
    href: "mailto:shubhamsingh9415191609@gmail.com",
    icon: <FaEnvelope className="h-8 w-8" />,
  },
  {
    name: "Telegram",
    content: "@Shubhams872", // Aapka Telegram handle
    href: "https://t.me/Shubhams872",
    icon: <SiTelegram className="h-8 w-8 text-[#0088cc]" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Shubhams872-spec", // Aapka GitHub
    content: "/Shubhams872-spec",
    icon: <FaGithub className="h-8 w-8" />,
  },
];

const TOOLS = [
  {
    name: "Python",
    content: "Used for Cybersecurity automation and Ethical Hacking scripts.",
    icon: <FaPython size={"50px"} color={"#3776ab"} />,
    color: "#3776ab",
  },
  {
    name: "Ethical Hacking",
    content: "Certified Cybersecurity Educator Professional (CCEP).",
    icon: <FaTerminal size={"50px"} color={"#4af626"} />,
    color: "#4af626",
  },
  {
    name: "React.js",
    content: "Specialized in building high-performance medical-tech web apps.",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "TypeScript",
    content: "Type-safe development for complex frontend architectures.",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "Next.js",
    content: "React framework used for SEO-optimized professional portfolios.",
    icon: <SiNextdotjs size={"50px"} color="#ffffff" />,
    color: "#ffffff",
  },
  {
    name: "Tailwind CSS",
    content: "Used for creating modern, responsive UI designs.",
    icon: <SiTailwindcss size={"50px"} color="#38bdf8" />,
    color: "#38bdf8",
  },
];
