"use client";

import { useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Full Screen */}
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
            Currently pursuing a Master's in Business Analytics at The George Washington University.
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
              My expertise lies in using SQL, Python, and machine learning techniques to derive actionable insights from complex datasets.
            </p>
            <p className="text-lg mb-6">
              With experience in developing predictive models and conducting data-driven research, I focus on delivering insights
              that drive business decision-making. I'm particularly interested in applying machine learning solutions to real-world business problems.
            </p>
          </div>
        </motion.div>
      </section>

import { Python, Ruler, Database, Cloud, ReactLogo } from "lucide-react"; // Replace with your icons or assets.

const skills = [
  {
    category: "Programming Languages",
    technologies: [
      { name: "Python", icon: <Python className="w-8 h-8" /> },
      { name: "R", icon: <Ruler className="w-8 h-8" /> },
      { name: "HTML", icon: <i className="devicon-html5-plain colored"></i> },
      { name: "JavaScript", icon: <i className="devicon-javascript-plain colored"></i> },
      { name: "SQL", icon: <Database className="w-8 h-8" /> },
    ],
  },
  {
    category: "Libraries",
    technologies: [
      { name: "React", icon: <ReactLogo className="w-8 h-8" /> },
      { name: "Next.js", icon: <i className="devicon-nextjs-original colored"></i> },
      { name: "Tailwind", icon: <i className="devicon-tailwindcss-plain colored"></i> },
      { name: "Pyspark", icon: <i className="devicon-apache-plain colored"></i> },
      { name: "NumPy", icon: <i className="devicon-numpy-original colored"></i> },
      { name: "Matplotlib", icon: <i className="devicon-analytics-original"></i> },
      { name: "Scikit-learn", icon: <i className="devicon-scikit-learn-plain colored"></i> },
      { name: "Tensor Flow", icon: <i className="devicon-tensorflow-original"></i> },
    ],
  },
  {
    category: "Visualization Tools",
    technologies: [
      { name: "SAS", icon: <i className="devicon-sas-original colored"></i> },
      { name: "Power BI", icon: <i className="devicon-powerbi-plain colored"></i> },
      { name: "Tableau", icon: <i className="devicon-tableau-original"></i> },
    ],
  },
  {
    category: "Databases & Cloud Technologies",
    technologies: [
      { name: "MySQL", icon: <i className="devicon-mysql-plain colored"></i> },
      { name: "PostgreSQL", icon: <i className="devicon-postgresql-plain colored"></i> },
      { name: "AWS", icon: <i className="devicon-amazonwebservices-original colored"></i> },
      { name: "Google Cloud", icon: <Cloud className="w-8 h-8" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory) => (
            <div key={skillCategory.category}>
              <h3 className="text-2xl font-semibold mb-4">{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-4">
                {skillCategory.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center space-x-2 bg-card p-4 rounded-lg shadow-md"
                  >
                    {tech.icon}
                    <span className="text-lg">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
      
      {/* Education Section */}
      <section id="education" className="py-20">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">Master of Science in Business Analytics</h3>
              <p className="text-lg text-muted-foreground">The George Washington University</p>
              <p className="text-muted-foreground">2023 - Present</p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">Bachelor of Engineering in Mechanical Engineering</h3>
              <p className="text-lg text-muted-foreground">Presidency University</p>
              <p className="text-muted-foreground">2017 - 2021</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-muted">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">Senior Consultant – Operations</h3>
              <p className="text-lg text-muted-foreground">Leverage Edu (Vasudhaiva Kutumbakam Group)</p>
              <p className="text-muted-foreground">March 2021 - May 2024</p>
              <ul className="list-disc pl-5 text-lg">
                <li>Implemented targeted outreach strategies, driving a 30% increase in client acquisition.</li>
                <li>Optimized data management workflows, improving data accuracy and client interactions.</li>
                <li>Deployed predictive analytics models to improve client retention rates.</li>
                <li>Recognized consistently as a top performer for outstanding results.</li>
              </ul>
            </div>
          </div>
        </motion.div>
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
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                <a href="https://github.com/PrajwalKusha/PortfolioProjects" target="_blank" rel="noopener noreferrer">
                  Capital Bikeshare Summer 2018 Analysis
                </a>
              </h3>
              <p className="text-lg">Tech Stack: AWS, Linux, SSH, JupyterLab</p>
              <p>Analyzed bike-share data to provide insights for optimizing system operations.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                <a href="https://github.com/PrajwalKusha/FEC-Political-Contributions-Data-Analysis" target="_blank" rel="noopener noreferrer">
                  FEC Political Contributions Data Analysis
                </a>
              </h3>
              <p className="text-lg">Tech Stack: AWS, SQL, Bash, PostgreSQL, Apache Spark</p>
              <p>Processed and analyzed 3.37 GB of FEC data, identifying trends in campaign financing.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                <a href="https://github.com/PrajwalKusha/House_Price_Prediction_Kaggle_Competition/tree/main" target="_blank" rel="noopener noreferrer">
                  House Prices Prediction
                </a>
              </h3>
              <p className="text-lg">Tech Stack: Python, Scikit-Learn, Gradient Boosting</p>
              <p>Developed a machine learning model for accurate real estate price predictions.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                Data Professional Survey Breakdown
              </h3>
              <p className="text-lg">Tech Stack: Excel, Power BI</p>
              <p>Created an interactive Power BI dashboard to uncover insights from a data science survey.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

