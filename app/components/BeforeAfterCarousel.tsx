"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const bgPattern = {
  backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
  backgroundSize: `20px 20px`,
}

const renovationProjects = [
  {
    id: 1,
    title: "Ravalement de façade - Maison individuelle",
    location: "Région parisienne",
    beforeImage: "./assets/images/b1.jpeg?height=600&width=800",
    afterImage: "./assets/images/b2.jpeg?height=600&width=800",
    description:
      "Rénovation complète de la façade avec nettoyage, application d'un nouvel enduit et finition peinture. Transformation totale pour un résultat élégant et durable."
  },
  {
    id: 2,
    title: "Réparation de lucarne et menuiserie extérieure",
    location: "Région lyonnaise",
    beforeImage: "./assets/images/a2.jpeg?height=600&width=800",
    afterImage: "./assets/images/a1.jpeg?height=600&width=800",
    description:
      "Restauration complète d'une lucarne avec réparation du fronton triangulaire et des boiseries extérieures. Traitement, rebouchage et peinture pour une finition durable et esthétique."
  },
  {
    id: 3,
    title: "Isolation thermique par l'extérieur (ITE)",
    location: "Région parisienne",
    beforeImage: "./assets/images/c1.jpeg?height=600&width=800",
    afterImage: "./assets/images/c2.jpeg?height=600&width=800",
    description: "Installation complète d'isolation thermique par l'extérieur avec préparation du support, pose d'isolant, application d'enduit de finition et traitement des détails techniques. Amélioration significative de l'efficacité énergétique et rénovation esthétique."
  },
  {
    id: 4,
    title: "Isolation thermique par l'extérieur et ravalement de façade",
    location: "Région Centre",
    beforeImage: "./assets/images/d1.jpeg?height=600&width=800",
    afterImage: "./assets/images/d2.jpeg?height=600&width=800",
    description: "Rénovation complète avec isolation thermique par l'extérieur (ITE), incluant la pose de panneaux isolants, application d'enduit de finition et traitement des détails architecturaux. Travaux réalisés par nos techniciens qualifiés pour une amélioration énergétique et esthétique durable.",
  },
  {
    id: 5,
    title: "Nettoyage et traitement de toiture",
    location: "Nantes",
    beforeImage: "./assets/images/e1.jpeg?height=600&width=800",
    afterImage: "./assets/images/e2.jpeg?height=600&width=800",
    description: "Démoussage, nettoyage et application d'un traitement hydrofuge sur toiture en tuiles."
  },
   {
  "id": 6,
  "title": "Ravalement de façade en pierre meulière",
  "location": "Nantes",
  "beforeImage": "./assets/images/x2.jpg?height=600&width=800",
  "afterImage": "./assets/images/x1.jpg?height=600&width=800",
  "description": "Nettoyage en profondeur, rejointoiement des pierres meulières, traitement de la façade et remise en état de l’enduit bas. Mise en valeur des briques apparentes pour une rénovation esthétique et durable."
},

{
  "id": 7,
  "title": "Isolation thermique par l’extérieur (ITE) et ravalement de façade",
  "location": "Nantes",
  "beforeImage": "./assets/images/o2.jpg?height=600&width=800",
  "afterImage": "./assets/images/o1.jpg?height=600&width=800",
  "description": "Travaux d’isolation thermique par l’extérieur avec finition enduit. Préparation des supports, fixation des panneaux isolants, application d’un enduit de finition et ravalement complet pour un confort thermique amélioré et un rendu esthétique moderne."
}

]

export default function BeforeAfterCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isBeforeView, setIsBeforeView] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % renovationProjects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + renovationProjects.length) % renovationProjects.length)
  }

  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        nextProject()
      }, 6000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [currentIndex, isHovering])

  const handleMouseEnter = () => {
    setIsHovering(true)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const handleManualNavigation = (callback: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    callback()
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        nextProject()
      }, 6000)
    }
  }

  const currentProject = renovationProjects[currentIndex]

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section
      id="realisations"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Nos Réalisations</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez nos projets de rénovation avant et après
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
            <button
              onClick={() => handleManualNavigation(prevProject)}
              className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
            <button
              onClick={() => handleManualNavigation(nextProject)}
              className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Projet suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row h-[650px] w-full bg-gradient-to-r from-gray-900 to-gray-800">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex + (isBeforeView ? "-before" : "-after")}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
                className="flex flex-col md:flex-row w-full h-full"
              >
                <div className="w-full md:w-1/3 p-10 flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
                  <div className="w-full">
                    <span className="text-red-600 font-semibold text-sm mb-3 inline-block uppercase tracking-wider">
                      {currentProject.location}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-5 leading-tight">{currentProject.title}</h3>
                    <div className="h-1 w-24 bg-red-700 mb-8 rounded-full"></div>
                    <p className="text-gray-200 mb-8 leading-relaxed">{currentProject.description}</p>
                  </div>
                </div>

                <div
                  className="relative w-full md:w-2/3 h-full overflow-hidden bg-gradient-to-br from-gray-800 to-black"
                  style={bgPattern}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <Image
                    src={isBeforeView ? currentProject.beforeImage : currentProject.afterImage}
                    alt={`${isBeforeView ? "Avant" : "Après"} - ${currentProject.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-8 right-8 z-10">
                    <button
                      onClick={() => setIsBeforeView(!isBeforeView)}
                      className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      {isBeforeView ? "Voir Après" : "Voir Avant"}
                    </button>
                  </div>

                  <div className="absolute top-8 left-8 z-10">
                    <span className="bg-black/60 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                      {isBeforeView ? "AVANT" : "APRÈS"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {renovationProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                handleManualNavigation(() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                })
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-red-700 scale-125 ring-4 ring-red-700/20"
                  : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
              }`}
              aria-label={`Aller au projet ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
