"use client"

import { motion } from "framer-motion"
import { Paintbrush, Home, Thermometer, Droplets } from "lucide-react"

const services = [
  {
    icon: <Paintbrush className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Ravalement de Façade",
    description:
      "Nettoyage, réparation et embellissement de vos façades pour une protection durable contre les intempéries.",
  },
  {
    icon: <Home className="w-12 h-12 mb-4 text-green-500" />,
    title: "Peinture Intérieure/Extérieure",
    description:
      "Application de peintures de qualité pour transformer et protéger vos espaces intérieurs et extérieurs.",
  },
  {
    icon: <Thermometer className="w-12 h-12 mb-4 text-yellow-500" />,
    title: "Isolation Thermique",
    description:
      "Solutions d'isolation performantes pour améliorer le confort et réduire votre consommation énergétique.",
  },
  {
    icon: <Droplets className="w-12 h-12 mb-4 text-purple-500" />,
    title: "Nettoyage de Toiture",
    description:
      "Démoussage et traitement hydrofuge pour prolonger la durée de vie de votre toiture et préserver son esthétique.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nos Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-700 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
