"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Marquee() {
  const [isGreen, setIsGreen] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGreen(prev => !prev)
    }, 1500)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="relative w-full overflow-hidden bg-background py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 20 }}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span className="text-7xl sm:text-8xl md:text-9xl font-bold px-4">
              <span
                style={{
                  color: isGreen ? "#b9f02e" : "#8B0000",
                  transition: "color 0.5s ease-in-out",
                }}
              >
                AD
              </span>{" "}
              <span
                style={{
                  color: isGreen ? "#8B0000" : "#b9f02e",
                  transition: "color 0.5s ease-in-out",
                }}
              >
                Services
              </span>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
