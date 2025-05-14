"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
         <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="./assets/images/logo.png"
              alt="AD Services Logo"
              className="w-96 h-auto"
            />
          </motion.div>

          <motion.p
            className="text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Spécialiste en ravalement de façade, peinture et isolation thermique. Nous transformons et valorisons votre
            patrimoine immobilier avec expertise et savoir-faire.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#services" className="apple-button">
              Nos Services
            </a>
            <a href="#realisations" className="text-sm font-semibold leading-6 text-foreground">
              Voir nos réalisations <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
          <img
            src="./assets/images/main.jpeg"
            alt="Ravalement de façade"
            width={900}
            height={900}
            className="w-[900px] rounded-2xl shadow-xl ring-1 ring-gray-900/10"
          />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
