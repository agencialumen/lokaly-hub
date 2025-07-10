"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import {
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Globe,
  ShoppingBag,
  Palette,
  BarChart3,
  Zap,
} from "lucide-react"

const projects = [
  {
    id: "dashboard-adag",
    title: "Dashboard ADAG",
    category: "Web Design",
    image: "https://iili.io/3ucdi0J.png",
    description: "Dashboard financeiro interativo com análises em tempo real",
    tags: [
      { name: "Analytics", icon: BarChart3, color: "from-blue-500 to-cyan-500" },
      { name: "Dashboard", icon: Globe, color: "from-green-500 to-emerald-500" },
      { name: "Finance", icon: Zap, color: "from-yellow-500 to-orange-500" },
    ],
    tech: ["Vue.js", "D3.js", "Firebase"],
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    id: "website-academia",
    title: "Website Academia",
    category: "Web Design",
    image: "https://iili.io/3uchkba.png",
    description: "Site responsivo para academias com sistema de agendamento",
    tags: [
      { name: "Responsive", icon: Smartphone, color: "from-purple-500 to-pink-500" },
      { name: "Web Design", icon: Globe, color: "from-indigo-500 to-purple-500" },
      { name: "UI/UX", icon: Palette, color: "from-pink-500 to-rose-500" },
    ],
    tech: ["React", "Next.js", "MongoDB"],
    gradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    id: "hiven-money-app",
    title: "Hiven Money APP",
    category: "Apps Mobile",
    image: "https://iili.io/3u0dxAQ.png",
    description: "App de investimentos automatizados com IA",
    tags: [
      { name: "Mobile App", icon: Smartphone, color: "from-emerald-500 to-teal-500" },
      { name: "FinTech", icon: BarChart3, color: "from-teal-500 to-cyan-500" },
      { name: "AI", icon: Zap, color: "from-cyan-500 to-blue-500" },
    ],
    tech: ["React Native", "GraphQL", "AI"],
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    id: "shopify-store",
    title: "Loja Shopify Premium",
    category: "E-commerce",
    image: "/images/shopify-service.jpg",
    description: "E-commerce Shopify personalizado com animações 3D",
    tags: [
      { name: "Shopify", icon: ShoppingBag, color: "from-green-500 to-emerald-500" },
      { name: "E-commerce", icon: Globe, color: "from-purple-500 to-fuchsia-500" },
      { name: "3D Design", icon: Palette, color: "from-fuchsia-500 to-pink-500" },
    ],
    tech: ["Shopify", "Liquid", "Three.js"],
    gradient: "from-green-600/20 to-emerald-600/20",
    highlight: true,
  },
]

export default function Portfolio() {
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
      const cardWidth = 320
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
    <section id="portfolio" className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
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
            Nossos Projetos
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Experiências digitais que transformam negócios
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br from-purple-900/20 to-black border rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] transition-all duration-300 ${
                project.highlight
                  ? "border-purple-500/50 shadow-[0_0_20px_rgba(147,51,234,0.2)]"
                  : "border-purple-900/30"
              }`}
            >
              <div className="relative overflow-hidden h-48 md:h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                  <Link
                    href={`/projetos/${project.id}`}
                    className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium"
                  >
                    Ver Detalhes
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${tag.color} text-white`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mt-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile HUB 3D Carousel */}
        <div className="md:hidden">
          {/* Controles do Carousel */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-purple-500/25"
                  : "bg-gray-800 text-gray-500 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="text-center">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
                HUB 3D Technology
              </span>
              <div className="text-xs text-gray-400 mt-1">
                {currentIndex + 1} de {projects.length}
              </div>
            </div>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-purple-500/25"
                  : "bg-gray-800 text-gray-500 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Carousel 3D Container */}
          <div className="relative perspective-1000">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
              style={{
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
                  whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex-shrink-0 w-80 bg-gradient-to-br ${project.gradient} backdrop-blur-sm border rounded-3xl overflow-hidden relative transform-gpu ${
                    project.highlight
                      ? "border-purple-500/60 shadow-[0_0_30px_rgba(147,51,234,0.4)]"
                      : "border-purple-900/40 shadow-[0_0_20px_rgba(147,51,234,0.2)]"
                  }`}
                  style={{
                    scrollSnapAlign: "start",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {project.highlight && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-bold px-3 py-2 rounded-full z-20 shadow-lg animate-pulse">
                      🚀 DESTAQUE
                    </div>
                  )}

                  {/* Imagem 3D com efeitos */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />

                    {/* Overlay 3D effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-60"></div>
                  </div>

                  <div className="p-6">
                    {/* Tags Interativas com Ícones */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center space-x-2 text-xs font-medium px-3 py-2 rounded-full bg-gradient-to-r ${tag.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                        >
                          <tag.icon className="h-3 w-3" />
                          <span>{tag.name}</span>
                        </motion.button>
                      ))}
                    </div>

                    {/* Conteúdo */}
                    <h3 className={`text-xl font-bold mb-2 ${project.highlight ? "text-purple-300" : "text-white"}`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-black/40 text-purple-300 rounded-md border border-purple-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link href={`/projetos/${project.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        <span>Ver Projeto</span>
                        <ExternalLink className="h-4 w-4" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Indicadores 3D */}
          <div className="flex justify-center mt-6 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 h-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full shadow-lg"
                    : "w-3 h-3 bg-purple-500/30 hover:bg-purple-500/60 rounded-full"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center hidden md:block"
        >
          <Link href="/projetos">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white rounded-full transition-all duration-300 group">
              Ver Todos os Projetos
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
