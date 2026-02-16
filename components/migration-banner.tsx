"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink } from "lucide-react"

export function MigrationBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the banner was already dismissed in this session
    const isDismissed = sessionStorage.getItem("migration-banner-dismissed")
    if (!isDismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem("migration-banner-dismissed", "true")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative z-[60] w-full overflow-hidden border-b border-white/10 bg-white/5 backdrop-blur-md dark:bg-black/20"
        >
          <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 text-sm md:text-base">
            <div className="flex-grow text-center text-zinc-800 dark:text-zinc-200">
              <span className="font-medium">My portfolio has a new home.</span>{" "}
              <span className="hidden sm:inline">Explore the latest updates at </span>
              <a
                href="https://pkusha.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-primary underline-offset-4 hover:underline"
              >
                pkusha.tech <ExternalLink className="h-3 w-3" />
              </a>{" "}
              🚀
            </div>
            <button
              onClick={handleDismiss}
              className="rounded-full p-1 text-zinc-500 transition-colors hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800"
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
