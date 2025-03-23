"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "FEC Political Contributions Analysis",
    period: "June–July 2024",
    category: "Data Engineering & Analytics",
    technologies: ["Apache Spark", "AWS", "SQL", "PostgreSQL"],
    description: `In this project, I explored and analyzed individual political contributions made to federal committees (presidential, senate, and house) over a one-month period using scalable cloud resources. Leveraging Apache Spark on an AWS EC2 instance, I processed and analyzed large datasets from the Federal Election Commission to uncover trends and patterns in campaign financing.

Key Insights:
• Top contributing states: California, Texas, and Florida dominated both in donation count and volume
• High-value donors: Timothy Mellon contributed upwards of $50M, highlighting financial power in politics
• Industry trends: Most large contributions came from investment and entrepreneurship sectors`,
    githubLink: "https://github.com/PrajwalKusha/FEC-Political-Contributions-Data-Analysis",
    icon: "/icons/projects/fec.svg",
  },
  {
    id: 2,
    title: "House Price Prediction – Kaggle Competition",
    period: "Fall 2024",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
    description: `As part of a collaborative academic project, I participated in Kaggle's House Prices - Advanced Regression Techniques competition. Working alongside a team of three, I contributed to the end-to-end machine learning pipeline, from data cleaning to model tuning.

Key Achievements:
• Implemented extensive feature engineering and preprocessing
• Experimented with multiple regression algorithms
• Achieved strong performance using XGBoost
• Deepened understanding of model interpretability and feature importance`,
    githubLink: "https://github.com/PrajwalKusha/House_Price_Prediction_Kaggle_Competition",
    icon: "/icons/projects/kaggle.svg",
  },
  {
    id: 3,
    title: "SEC Financial Statement Data Analysis",
    period: "Spring 2024",
    category: "Financial Data Engineering",
    technologies: ["PostgreSQL", "AWS EC2", "SQL", "Bash"],
    description: `In this project, I analyzed structured financial statement data from the U.S. Securities and Exchange Commission (SEC) for the first four months of 2024. Using a cloud-based pipeline hosted on AWS EC2, I processed and queried complex datasets across multiple tables.

Key Skills Demonstrated:
• Relational data modeling and schema design
• Sector-level trend analysis
• Financial reporting metrics interpretation
• Cloud-based database management`,
    githubLink: "https://github.com/PrajwalKusha/SEC-Financial-Data-Analysis",
    icon: "/icons/projects/sec.svg",
  },
  {
    id: 4,
    title: "Uber and Lyft Dataset Analysis – Boston, MA",
    period: "Fall 2024",
    category: "Data Warehousing & Business Intelligence",
    technologies: ["PostgreSQL", "Python", "SQL", "ETL Design"],
    description: `This project involved analyzing over 690,000 rides taken via Uber and Lyft in Boston, MA. I designed a dimensional data model, performed ETL, and answered strategic business questions through structured analysis.

Key Business Insights:
• Surge Pricing & Driver Supply patterns
• Popular Ride Types by Area
• Cost vs. Earnings Analysis
• Strategic market positioning insights`,
    githubLink: "https://github.com/PrajwalKusha/Uber-Lyft_Data-Analysis",
    icon: "/icons/projects/lyft.svg",
  },
  {
    id: 5,
    title: "Capital Bikeshare Trip Analysis – Washington, D.C.",
    period: "Summer 2024",
    category: "Data Analytics & Visualization",
    technologies: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
    description: `In this project, I analyzed Capital Bikeshare trip data for July and August 2018 to uncover user behavior, ride patterns, and operational bottlenecks in one of the nation's busiest bikeshare systems.

Key Findings:
• Tourist Hotspots Drive Demand
• Short Sightseeing Trips Analysis
• Resource Allocation Opportunities
• Operational Recommendations for Transportation Planners`,
    githubLink: "https://github.com/PrajwalKusha/Capital-BikeShare-Data-Analysis",
    icon: "/icons/projects/bikeshare.png",
  },
];

export function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                className="w-full p-6 text-left focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-8 h-8">
                      <Image
                        src={project.icon}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span>{project.period}</span>
                        <span>{project.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {expandedId === project.id ? (
                        <ChevronUp className="h-6 w-6" />
                      ) : (
                        <ChevronDown className="h-6 w-6" />
                      )}
                    </motion.div>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="prose prose-sm max-w-none">
                      <p className="whitespace-pre-line">{project.description}</p>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 