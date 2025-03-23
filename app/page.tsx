"use client";

import { 
  Github, 
  Linkedin, 
  Mail, 
  Brain, 
  Database, 
  Network, 
  Code2,
  // Programming Languages
  Code,
  Globe,
  // Libraries & Frameworks
  Layout,
  Sparkles,
  LineChart,
  // Data Visualization & BI
  BarChart3,
  PieChart,
  // Cloud & Tools
  Cloud,
  Server
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { HeroBackground } from "@/components/hero-background";
import { AboutSection } from "@/components/about-section";

const skills = [
  {
    category: "Programming Languages",
    icon: Code2,
    technologies: [
      { name: "Python", icon: Code },
      { name: "R", icon: LineChart },
      { name: "SQL", icon: Database },
      { name: "HTML", icon: Globe },
      { name: "JavaScript", icon: Code2 }
    ],
  },
  {
    category: "Libraries & Frameworks",
    icon: Layout,
    technologies: [
      { name: "React", icon: Layout },
      { name: "Next.js", icon: Sparkles },
      { name: "Tailwind CSS", icon: Layout },
      { name: "PySpark", icon: Sparkles },
      { name: "NumPy", icon: LineChart },
      { name: "Matplotlib", icon: BarChart3 },
      { name: "Scikit-learn", icon: Brain },
      { name: "TensorFlow", icon: Brain }
    ],
  },
  {
    category: "Data Visualization & BI",
    icon: BarChart3,
    technologies: [
      { name: "Power BI", icon: BarChart3 },
      { name: "Tableau", icon: PieChart },
      { name: "SAS", icon: LineChart }
    ],
  },
  {
    category: "Databases & Cloud",
    icon: Database,
    technologies: [
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "AWS", icon: Cloud },
      { name: "Google Cloud", icon: Cloud }
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBackground />
      <div className="relative z-10">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </main>
  );
}

