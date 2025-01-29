"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    technologies: ["Python", "R", "HTML", "JavaScript", "SQL"],
  },
  {
    category: "Libraries",
    technologies: ["React", "Next.js", "Tailwind", "PySpark", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow"],
  },
  {
    category: "Visualization Tools",
    technologies: ["SAS", "Power BI", "Tableau"],
  },
  {
    category: "Databases & Cloud Technologies",
    technologies: ["MySQL", "PostgreSQL", "AWS", "Google Cloud"],
  },
];

const projects = [
  {
    name: "Sales Prediction Model",
    description: "A machine learning model to predict sales based on historical data.",
    githubLink: "https://github.com/yourusername/sales-prediction-model",
  },
  {
    name: "Data Visualization Dashboard",
    description: "Interactive dashboard for sales and marketing analytics.",
    githubLink: "https://github.com/yourusername/data-viz-dashboard",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Prajwal Kusha</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Data Analyst with expertise in SQL, Python, and machine learning.
            Currently pursuing a Master's in Business Analytics at The George
            Washington University.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:p.kusha@gwmail.gwu.edu">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/prajwal-kusha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              I am a passionate Data Analyst with a strong foundation in statistical analysis and data visualization. 
              My expertise lies in using SQL, Python, and machine learning techniques to derive actionable insights 
              from complex datasets.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillCategory) => (
              <div key={skillCategory.category}>
                <h3 className="text-2xl font-semibold mb-4">{skillCategory.category}</h3>
                <ul className="flex flex-wrap gap-4">
                  {skillCategory.technologies.map((tech) => (
                    <li key={tech} className="bg-card px-4 py-2 rounded-lg shadow-md">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.name}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button variant="link" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}


