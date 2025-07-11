"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import {
  Globe,
  Smartphone,
  Search,
  Share2,
  BarChart3,
  Palette,
  ShoppingBag,
  Megaphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Sites responsivos e modernos",
    features: ["Design Responsivo", "Performance", "SEO"],
    image: "https://iili.io/FGKMHJ4.jpg",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Shopify",
    description: "Lojas personalizadas Shopify",
    features: ["Temas Custom", "Apps", "Otimização"],
    highlight: true,
    image: "https://iili.io/FGKGygf.jpg",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicativos iOS e Android",
    features: ["Interface Nativa", "Performance", "APIs"],
    image: "https://iili.io/FGKjwJa.jpg",
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Visibilidade online",
    features: ["Otimização", "Analytics", "Tráfego"],
    image: "https://iili.io/FGKjN5J.jpg",
  },
  {
    icon: Share2,
    title: "Redes Sociais",
    description: "Gestão completa",
    features: ["Conteúdo", "Engajamento", "Relatórios"],
    image: "https://iili.io/FGKNScX.jpg",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Dashboards inteligentes",
    features: ["Relatórios", "KPIs", "Insights"],
    image: "https://iili.io/FGKN8Ft.md.jpg",
  },
  {
    icon: Palette,
    title: "Design & Branding",
    description: "Identidade visual única",
    features: ["Logo", "Branding", "Guidelines"],
    image: "https://iili.io/FGKevvn.jpg",
  },
  {
    icon: Megaphone,
    title: "Publicidade Digital",
    description: "Campanhas que convertem",
    features: ["Google Ads", "Facebook", "ROI"],
    image: "https://iili.io/FGKOmqN.jpg",
  },
]

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollButtons)
      checkScrollButtons()
      return () => scrollElement.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 320 // largura do card + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth

      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 320
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  return (
    <section id="services" className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Soluções completas para sua presença digital
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br from-purple-900/20 to-black border rounded-3xl overflow-hidden hover:shadow-[0_0_40px_rgba(147,51,234,0.25)] transition-all duration-500 group relative min-h-[420px] ${
                service.highlight
                  ? "border-purple-500/50 shadow-[0_0_30px_rgba(147,51,234,0.3)]"
                  : "border-purple-900/30"
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-bold px-3 py-2 rounded-full z-10 shadow-lg">
                  ⭐ DESTAQUE
                </div>
              )}

              <div className="p-6 lg:p-8 text-center h-full flex flex-col">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                    service.highlight
                      ? "bg-gradient-to-r from-purple-600 to-fuchsia-600"
                      : "bg-gradient-to-r from-purple-600/80 to-fuchsia-600/80"
                  }`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <div className="relative mb-6 flex justify-center flex-grow">
                  <div className="relative group/image">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative w-full max-w-[280px] h-48 lg:h-52 xl:h-56 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-black/60 rounded-full border-2 border-purple-500/30 flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:border-purple-400/50 transition-all duration-500 shadow-2xl backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-full"></div>

                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-contain p-3 rounded-full relative z-10 group-hover/image:scale-105 transition-transform duration-300"
                      />

                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base mb-4 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 text-left">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-300 flex items-center group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel Inteligente */}
        <div className="md:hidden">
          {/* Controles do Carousel */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25"
                  : "bg-gray-800 text-gray-500 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="text-center">
              <span className="text-sm text-gray-400">
                {Math.floor(currentIndex) + 1} de {services.length}
              </span>
            </div>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25"
                  : "bg-gray-800 text-gray-500 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide"
              style={{
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex-shrink-0 w-72 bg-gradient-to-br from-purple-900/30 to-black border rounded-3xl overflow-hidden relative ${
                    service.highlight
                      ? "border-purple-500/60 shadow-[0_0_25px_rgba(147,51,234,0.4)]"
                      : "border-purple-900/40 shadow-[0_0_15px_rgba(147,51,234,0.2)]"
                  }`}
                  style={{ scrollSnapAlign: "start" }}
                >
                  {service.highlight && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg animate-pulse">
                      
                    </div>
                  )}

                  <div className="p-6 text-center">
                    {/* Ícone */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg ${
                        service.highlight
                          ? "bg-gradient-to-r from-purple-600 to-fuchsia-600"
                          : "bg-gradient-to-r from-purple-600/80 to-fuchsia-600/80"
                      }`}
                    >
                      <service.icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Imagem Grande e Destacada */}
                    <div className="relative mb-6 flex justify-center">
                      <div className="relative group/image">
                        {/* Glow effect */}
                        <div
                          className={`absolute -inset-3 rounded-full blur-2xl transition-opacity duration-500 ${
                            service.highlight
                              ? "bg-gradient-to-r from-purple-600/40 to-fuchsia-600/40 opacity-70"
                              : "bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 opacity-50"
                          }`}
                        ></div>

                        {/* Container da imagem */}
                        <div
                          className={`relative w-40 h-40 bg-gradient-to-br from-purple-900/50 via-purple-800/40 to-black/70 rounded-full border-3 flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-sm ${
                            service.highlight ? "border-purple-400/60 shadow-purple-500/30" : "border-purple-500/40"
                          }`}
                        >
                          {/* Background overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-full"></div>

                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            className="w-full h-full object-contain p-4 rounded-full relative z-10"
                          />

                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-60 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <h3 className={`text-xl font-bold mb-2 ${service.highlight ? "text-purple-300" : "text-white"}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>

                    {/* Features como tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className={`text-xs px-3 py-1.5 rounded-full border ${
                            service.highlight
                              ? "bg-purple-600/30 text-purple-200 border-purple-400/40"
                              : "bg-purple-900/40 text-purple-300 border-purple-600/40"
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Indicadores de posição */}
          <div className="flex justify-center mt-4 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex) === index ? "bg-purple-500 w-6" : "bg-purple-500/30 hover:bg-purple-500/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
