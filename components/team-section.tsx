"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Github, Twitter, ChevronLeft, ChevronRight } from "lucide-react"

const team = [
  {
    name: "Guilherme",
    role: "CEO & Dev",
    image: "https://iili.io/FGSKLCv.jpg",
    bio: "Estratégia digital com +10 anos",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Alex Santana",
    role: "CO-Fundador",
    image: "https://iili.io/FGSBBIe.jpg",
    bio: "Coach & Palestra",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
]

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="team" className="py-12 md:py-20 relative overflow-hidden">
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
            Nossa Equipe
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Profissionais especializados em transformar ideias em realidade
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-900/30 rounded-2xl p-6 text-center group hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] transition-all duration-300"
            >
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-colors duration-300">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-purple-400 text-sm font-medium mb-2">{member.role}</p>
              <p className="text-gray-400 text-xs mb-4">{member.bio}</p>

              <div className="flex justify-center space-x-2">
                <a
                  href={member.social.linkedin}
                  className="w-7 h-7 bg-purple-900/40 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Linkedin className="h-3 w-3 text-white" />
                </a>
                <a
                  href={member.social.github}
                  className="w-7 h-7 bg-purple-900/40 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Github className="h-3 w-3 text-white" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-7 h-7 bg-purple-900/40 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Twitter className="h-3 w-3 text-white" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 bg-purple-900/40 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 bg-purple-900/40 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 carousel-container"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-64 bg-gradient-to-br from-purple-900/20 to-black border border-purple-900/30 rounded-2xl p-6 text-center"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-purple-500/30">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs mb-4">{member.bio}</p>

                <div className="flex justify-center space-x-2">
                  <a
                    href={member.social.linkedin}
                    className="w-7 h-7 bg-purple-900/40 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Linkedin className="h-3 w-3 text-white" />
                  </a>
                  <a
                    href={member.social.github}
                    className="w-7 h-7 bg-purple-900/40 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Github className="h-3 w-3 text-white" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-7 h-7 bg-purple-900/40 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Twitter className="h-3 w-3 text-white" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
