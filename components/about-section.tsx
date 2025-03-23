"use client";

import { motion } from "framer-motion";

interface JourneyCardProps {
  emoji: string;
  title: string;
  text: React.ReactNode;
  delay: number;
}

function JourneyCard({ emoji, title, text, delay }: JourneyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="mb-4 text-4xl">{emoji}</div>
      <h3 className="mb-3 text-xl font-bold tracking-tight">{title}</h3>
      <p className="text-muted-foreground text-sm lg:text-base">{text}</p>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

export function AboutSection() {
  const journeyCards = [
    {
      emoji: "📍",
      title: "Where It All Began",
      text: <>
      <strong>Bangalore, India.</strong> Always drawn to how things work, my fascination with tech started early. That curiosity led me to pursue engineering and eventually explore how data, design, and systems come together to solve real problems.
    </>
    }, 
    {
      emoji: "🔍",
      title: "The Analyst Mindset",
      text: "Most of my work revolves around exploratory data analysis—digging into real-world datasets to uncover trends and build data-driven solutions across domains like public policy, transportation, finance, and consumer behavior.",
    },
    {
      emoji: "🧠",
      title: "The Builder in Me",
      text: "With a solid foundation in AI and machine learning, I love experimenting with models to solve practical problems. Lately, I've been diving into system design and scalability, learning how to build systems that are both smart and resilient.",
    },
    {
      emoji: "🌍",
      title: "The Road Ahead",
      text: <>
      Now pursuing my <strong>Master's in Business Analytics at The George Washington University,</strong> I'm focused on connecting everything I've learned to build impactful, scalable tech solutions—and this portfolio is a window into that journey.",
      </>
    },
  ];

  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Me</h2>
        <p className="mt-4 text-xl text-muted-foreground">
          My journey from curiosity to creation
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-[1400px] mx-auto">
        {journeyCards.map((card, index) => (
          <JourneyCard
            key={card.title}
            emoji={card.emoji}
            title={card.title}
            text={card.text}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
} 