"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const skills = [
  {
    category: "Programming Languages",
    description: "Core languages I use for development and analysis",
    technologies: [
      { name: "Python", icon: "/icons/python.svg", proficiency: 90 },
      { name: "R", icon: "/icons/r-new.svg", proficiency: 85 },
      { name: "SQL", icon: "/icons/mysql.svg", proficiency: 90 },
      { name: "HTML", icon: "/icons/html.svg", proficiency: 80 },
      { name: "JavaScript", icon: "/icons/javascript.svg", proficiency: 75 },
    ],
  },
  {
    category: "Libraries & Frameworks",
    description: "Tools and frameworks I use to build solutions",
    technologies: [
      { name: "React", icon: "/icons/react.svg", proficiency: 85 },
      { name: "Next.js", icon: "/icons/nextjs.svg", proficiency: 80 },
      { name: "Tailwind CSS", icon: "/icons/tailwind-new.svg", proficiency: 85 },
      { name: "PySpark", icon: "/icons/python.svg", proficiency: 75 },
      { name: "NumPy", icon: "/icons/numpy-new.svg", proficiency: 85 },
      { name: "Pandas", icon: "/icons/pandas-new.svg", proficiency: 90 },
      { name: "Scikit-learn", icon: "/icons/scikit-learn.svg", proficiency: 80 },
    ],
  },
  {
    category: "Data Visualization & BI",
    description: "Tools I use for creating insights and dashboards",
    technologies: [
      { name: "Power BI", icon: "/icons/powerbi.svg", proficiency: 90 },
      { name: "Tableau", icon: "/icons/tableau.svg", proficiency: 85 },
      { name: "SAS", icon: "/icons/sas.svg", proficiency: 80 },
    ],
  },
  {
    category: "Databases & Cloud",
    description: "Platforms and services I work with",
    technologies: [
      { name: "MySQL", icon: "/icons/mysql.svg", proficiency: 90 },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", proficiency: 85 },
      { name: "AWS", icon: "/icons/aws.svg", proficiency: 75 },
      { name: "Google Cloud", icon: "/icons/gcp.svg", proficiency: 70 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50 backdrop-blur-sm">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <AccordionItem
                  value={category.category}
                  className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm overflow-hidden"
                >
                  <AccordionTrigger className="px-6 hover:no-underline hover:bg-accent/50">
                    <div className="flex flex-col items-start w-full">
                      <h3 className="text-xl font-semibold mb-2">{category.category}</h3>
                      <div className="flex flex-wrap gap-4 items-center">
                        {category.technologies.map((tech) => (
                          <div
                            key={tech.name}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="relative w-5 h-5">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {category.description}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid gap-6">
                      {category.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: techIndex * 0.1,
                          }}
                          className="group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="relative w-8 h-8 transition-transform duration-200 group-hover:scale-110">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">{tech.name}</span>
                                <span className="text-sm text-muted-foreground">
                                  {tech.proficiency}%
                                </span>
                              </div>
                              <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${tech.proficiency}%` }}
                                  transition={{ duration: 1, delay: techIndex * 0.1 }}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </section>
  );
} 