"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Prajwal Kusha</h1>
          <p className="text-xl text-muted-foreground mb-8">Data Analyst & Machine Learning Engineer</p>
          <div className="flex gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:p.kusha@gwmail.gwu.edu">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/prajwal-kusha" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted py-16">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Data Analyst with expertise in SQL, Python, and machine learning. Currently pursuing a Master's in Business Analytics at The George Washington University, with a strong foundation in statistical analysis and data visualization.
              </p>
              <p className="text-lg">
                Experienced in developing predictive models and conducting data-driven research, with a focus on delivering actionable insights for business decision-making.
              </p>
            </div>
            <div id="skills" className="space-y-4">
              <h3 className="text-xl font-semibold">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium mb-2">Languages</h4>
                  <ul className="list-disc list-inside">
                    <li>Python</li>
                    <li>SQL</li>
                    <li>R</li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium mb-2">Tools</h4>
                  <ul className="list-disc list-inside">
                    <li>Tableau</li>
                    <li>Power BI</li>
                    <li>Excel</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "House Price Prediction",
              description: "Developed a machine learning model to predict house prices using advanced regression techniques.",
              link: "https://github.com/PrajwalKusha/House_Price_Prediction_Kaggle_Competition/tree/main"
            },
            {
              title: "Political Contributions Analysis",
              description: "Analyzed FEC political contributions data to uncover patterns and insights in campaign financing.",
              link: "https://github.com/PrajwalKusha/FEC-Political-Contributions-Data-Analysis"
            },
            {
              title: "Portfolio Projects",
              description: "Collection of data analysis and visualization projects showcasing various technical skills.",
              link: "https://github.com/PrajwalKusha/PortfolioProjects"
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button variant="outline" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}