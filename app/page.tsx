import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Services from "@/components/services"
import Stats from "@/components/stats"
import Portfolio from "@/components/portfolio"
import Footer from "@/components/footer"
import FloatingMenu from "@/components/floating-menu"
import PromoBanner from "@/components/promo-banner"
import TeamSection from "@/components/team-section"
import PartnersSection from "@/components/partners-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#0a0118] text-white overflow-hidden">
      <Navbar />
      <FloatingMenu />
      <Hero />
      <PromoBanner />
      <Services />
      <Stats />
      <PartnersSection />
      <TeamSection />
      <Portfolio />
      <Footer />
    </main>
  )
}
