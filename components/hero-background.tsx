"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const titles = [
  "I'm a Business Analyst",
  "I'm a System Design Engineer",
  "I'm a Machine Learning Engineer",
  "I'm a Data Analyst",
  "I'm a Data Engineer"
];

// Tech stack icons that will float in the background
const techIcons = [
  { src: "/icons/python.svg", alt: "Python" },
  { src: "/icons/react.svg", alt: "React" },
  { src: "/icons/nextjs.svg", alt: "Next.js" },
  { src: "/icons/aws.svg", alt: "AWS" },
  { src: "/icons/mysql.svg", alt: "MySQL" },
  { src: "/icons/tableau.svg", alt: "Tableau" },
  { src: "/icons/powerbi.svg", alt: "Power BI" },
  { src: "/icons/scikit-learn.svg", alt: "Scikit-learn" },
];

export function HeroBackground() {
  const { resolvedTheme } = useTheme();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? displayText.slice(0, -1)
          : currentTitle.slice(0, displayText.length + 1);
        setDisplayText(nextText);
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-0">
        {techIcons.map((icon, index) => (
          <motion.div
            key={icon.alt}
            className="absolute"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0.15,
            }}
            animate={{
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src={icon.src}
                alt={icon.alt}
                fill
                className="object-contain opacity-40"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 opacity-70 ${
            resolvedTheme === "dark"
              ? "bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-950"
              : "bg-gradient-to-br from-[#fdfbfb] via-[#f6f7f9]/80 to-[#ebedee]"
          }`}
        />
        <div 
          className={`absolute inset-0 ${
            resolvedTheme === "dark"
              ? "bg-gradient-to-r from-background/70 via-transparent to-background/70"
              : "bg-gradient-to-r from-blue-50/50 via-transparent to-blue-50/50"
          }`}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 font-montserrat tracking-wide leading-normal py-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Prajwal Kusha
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-8 mb-6"
            >
              <span className="text-xl md:text-2xl text-primary">
                {displayText}
                <span className="inline-block w-0.5 h-5 ml-1 bg-primary animate-blink" />
              </span>
            </motion.div>
            <motion.p 
              className="text-xl md:text- text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Engineer at heart. Analyst by training. Builder by choice. I use data and design to turn ideas into things that scale.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="outline"
                className="hover:scale-110 transition-transform"
                asChild
              >
                <a 
                  href="mailto:p.kusha@gwu.edu"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <div className="flex gap-4"> 
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/PrajwalKusha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/prajwal-kusha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.hackerrank.com/profile/p_kusha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Image
                      src="/icons/hackerrank.svg"
                      alt="HackerRank"
                      width={18}
                      height={18}
                      className="dark:invert"
                    />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://leetcode.com/u/PrajwalKusha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Image
                      src="/icons/leetcode.svg"
                      alt="LeetCode"
                      width={18}
                      height={18}
                      className="dark:invert"
                    />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="/assets/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Prajwal_Kusha_Resume.pdf"
                    className="hover:scale-110 transition-transform"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              <div className="flex flex-col items-center">
                <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
                <div className="w-1 h-8 rounded-full bg-primary/20">
                  <motion.div
                    className="w-full h-1/3 bg-primary rounded-full"
                    animate={{
                      y: [0, 20, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 