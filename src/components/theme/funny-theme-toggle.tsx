"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { themeDisclaimers } from "@/data/constants";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils"; // Styling ke liye import kiya

interface FunnyThemeToggleProps {
  className?: string; // Ye line error fix karegi
}

const FunnyThemeToggle = ({ className }: FunnyThemeToggleProps) => {
  const { setTheme, theme } = useTheme();
  const { toast } = useToast();
  const [counter, setCounter] = useState({ dark: 0, light: 0 });

  const toggleTheme = () => {
    if (theme === "light") {
      const description = themeDisclaimers.dark[counter.dark % themeDisclaimers.dark.length];
      setCounter({ ...counter, dark: counter.dark + 1 });
      setTheme("dark");
      toast({ description });
    } else {
      const description = themeDisclaimers.light[counter.light % themeDisclaimers.light.length];
      setCounter({ ...counter, light: counter.light + 1 });
      setTheme("light");
      toast({ description });
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className={cn(
        "p-2 border border-zinc-800 rounded-md text-xs font-mono hover:bg-zinc-900 transition-colors",
        className
      )}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default FunnyThemeToggle;
