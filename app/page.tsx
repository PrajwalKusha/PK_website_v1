"use client"

import { useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

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
            Data Analyst with expertise in SQL, Python, and machine learning. Currently pursuing a Master's in Business Analytics at The George Washington University.
          </p>
          <div className="flex gap-4 justify-center">
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
            <p className="text-lg mb-6">
              With experience in developing predictive models and conducting data-driven research, I focus on 
              delivering insights that drive business decision-making. I'm particularly interested in applying 
              machine learning solutions to real-world business problems.
            </p>
          </div>
        </motion.div>
      </section>

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
              <h3 className="text-2xl font-semibold mb-2">Bachelor of Engineering in Computer Science</h3>
              <p className="text-lg text-muted-foreground">Visvesvaraya Technological University</p>
              <p className="text-muted-foreground">2017 - 2021</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
