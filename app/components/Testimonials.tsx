"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "AD Services a transformé notre façade vieillissante en une véritable œuvre d'art. Leur professionnalisme et leur attention aux détails ont dépassé nos attentes.",
    author: "Marie Dupont",
    position: "Propriétaire, Paris",
    image: "/assets/images/female.png?height=100&width=100",
  },
  {
    quote:
      "L'isolation thermique réalisée par AD Services a considérablement amélioré le confort de notre maison et réduit nos factures d'énergie. Une équipe sérieuse et compétente.",
    author: "Jean Martin",
    position: "Propriétaire, Lyon",
    image: "/assets/images/man.jpeg?height=100&width=100",
  },
  {
    quote:
      "Nous avons fait appel à AD Services pour le ravalement complet de notre immeuble. Le résultat est impeccable et les délais ont été respectés. Je recommande vivement.",
    author: "Sophie Leclerc",
    position: "Syndic de copropriété, Marseille",
    image: "/assets/images/female2.png?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Témoignages Clients
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
