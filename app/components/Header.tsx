"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <>
      {/* Desktop/Normal Header */}
      {!mobileMenuOpen && (
        <motion.header
          className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">AD Services</span>
                <span className="text-xl font-bold text-primary">AD Services</span>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden lg:flex lg:gap-x-12">
              <a
                href="#services"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#realisations"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                Réalisations
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </motion.header>
      )}
      
      {/* Mobile menu fullscreen */}
      {mobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-background flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close button at top right */}
          <div className="flex justify-end p-6">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          {/* Menu items centered in screen */}
          <div className="flex-1 flex flex-col justify-center items-center px-6">
            <div className="flex flex-col space-y-8 w-full max-w-xs">
              <a
                href="#services"
                className="text-xl font-semibold text-foreground hover:text-primary transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#realisations"
                className="text-xl font-semibold text-foreground hover:text-primary transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Réalisations
              </a>
              <a
                href="#contact"
                className="text-xl font-semibold text-foreground hover:text-primary transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Copyright notice at bottom */}
          <div className="p-6 text-center text-sm text-muted-foreground">
            © 2025 AD Services. Tous droits réservés.
          </div>
        </motion.div>
      )}
    </>
  )
}