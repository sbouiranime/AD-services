"use client"

import { useState, useEffect } from "react"

// Hook pour détecter la taille de l'écran
export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    isMobile: typeof window !== "undefined" ? window.innerWidth < 768 : false,
    isTablet: typeof window !== "undefined" ? window.innerWidth >= 768 && window.innerWidth < 1024 : false,
    isDesktop: typeof window !== "undefined" ? window.innerWidth >= 1024 : false,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
      })
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      handleResize()
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return screenSize
}

// Composant pour afficher du contenu différent selon la taille de l'écran
export function Responsive({ mobile, tablet, desktop }) {
  const { isMobile, isTablet, isDesktop } = useScreenSize()

  if (isMobile && mobile) return mobile
  if (isTablet && tablet) return tablet
  if (isDesktop && desktop) return desktop

  // Fallback
  if (isMobile && !mobile && tablet) return tablet
  if (isMobile && !mobile && !tablet && desktop) return desktop
  if (isTablet && !tablet && desktop) return desktop
  if (isTablet && !tablet && !desktop && mobile) return mobile
  if (isDesktop && !desktop && tablet) return tablet
  if (isDesktop && !desktop && !tablet && mobile) return mobile

  return null
}
