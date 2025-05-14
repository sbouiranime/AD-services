import Hero from "./components/Hero"
import QualityPromise from "./components/WearYourStory"
import FeatureCarousel from "./components/FeatureCarousel"
import Services from "./components/Services"
import BeforeAfterCarousel from "./components/BeforeAfterCarousel"
import Marquee from "./components/Marquee"
import Testimonials from "./components/Testimonials"
import ScrollToTopButton from "./components/ScrollToTopButton"

export default function Home() {
  return (
    <>
      <Hero />
      <QualityPromise />
      <Services />
      <BeforeAfterCarousel />
      <FeatureCarousel />
      <Marquee />
      <Testimonials />
      <ScrollToTopButton />
    </>
  )
}
