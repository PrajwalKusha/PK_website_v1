"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-transparent animate-pulse" />
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`
        relative flex items-center justify-center w-10 h-10 rounded-lg
        bg-gradient-to-br transition-colors duration-300
        ${resolvedTheme === "dark" 
          ? "from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30" 
          : "from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30"
        }
      `}
    >
      <motion.div
        initial={false}
        animate={{
          scale: resolvedTheme === "dark" ? 1 : 0,
          opacity: resolvedTheme === "dark" ? 1 : 0,
          rotate: resolvedTheme === "dark" ? 0 : 90,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-indigo-200" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: resolvedTheme === "light" ? 1 : 0,
          opacity: resolvedTheme === "light" ? 1 : 0,
          rotate: resolvedTheme === "light" ? 0 : -90,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-amber-400" />
      </motion.div>
    </motion.button>
  )
}