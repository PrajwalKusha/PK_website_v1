"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer id="contact" className={`py-12 ${className}`}>
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Me!</h3>
            <p className="text-muted-foreground mb-4">
              Got a project, playlist, or game rec? I'm all ears. Ping me and let's chat about tech, TV, or taking over the leaderboard!
            </p>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:p.kusha@gwmail.gwu.edu" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  p.kusha@gwmail.gwu.edu
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <span>+1 (703)-928-7389</span>
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#about">About</a>
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#skills">Skills</a>
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#projects">Projects</a>
                </Button>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/prajwal-kusha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-8 pt-8 border-t border-border/10 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} Prajwal Kusha. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
} 