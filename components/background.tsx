"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { InteractiveBackground } from "./interactive-background";

export function Background() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 opacity-85 ${
            resolvedTheme === "dark"
              ? "bg-gradient-to-br from-slate-950/90 via-indigo-950/80 to-purple-950/90"
              : "bg-gradient-to-br from-[#fdfbfb]/90 via-[#f1f4f9]/80 to-[#ebedee]/90"
          }`}
        />
      </div>
      
      {/* Animated Gradient */}
      <AnimatePresence mode="wait">
        <motion.div
          key={resolvedTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={`absolute inset-0 bg-gradient-to-b ${
            resolvedTheme === "dark"
              ? "from-transparent via-background/5 to-background/20"
              : "from-transparent via-blue-50/10 to-blue-100/20"
          }`}
        >
          <div 
            className={`absolute inset-0 ${
              resolvedTheme === "dark" 
                ? "bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.02)_25%,transparent_50%)]"
                : "bg-[linear-gradient(to_right,transparent_0%,rgba(200,220,255,0.05)_25%,transparent_50%)]"
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Interactive Particles */}
      <InteractiveBackground />
    </div>
  );
} 