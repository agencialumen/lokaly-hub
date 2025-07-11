"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Play } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="inline-flex items-center px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-xs md:text-sm font-medium">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                Transformando ideias em realidade
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Experiências
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
                Digitais Únicas
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg mx-auto lg:mx-0"
            >
              Criamos soluções digitais que impulsionam seu negócio. Da estratégia à execução.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
                <a href="https://wa.me/5521964579176" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none px-6 py-3 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  >
                    Começar Projeto
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-white hover:bg-purple-900/20 px-6 py-3 bg-transparent"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="mr-2 h-4 w-4" />
                Ver Trabalhos
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white">100+</div>
                <div className="text-xs md:text-sm text-gray-400">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white">50+</div>
                <div className="text-xs md:text-sm text-gray-400">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white">24/7</div>
                <div className="text-xs md:text-sm text-gray-400">Suporte</div>
              </div>
            </motion.div>
          </div>

          {/* Hero Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect Background */}
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 rounded-3xl blur-3xl"></div>

              {/* Video Container */}
              <div className="relative bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-500/40 rounded-3xl p-4 md:p-6 backdrop-blur-sm overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl"></div>

                {/* Video Element */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ filter: "brightness(0.9) contrast(1.1)" }}
                  >
                    <source src="video5157019545008866354.mp4" type="video/mp4" />
                    {/* Fallback para quando o vídeo não carregar */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 rounded-2xl flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-fuchsia-400/20 rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-purple-300 text-sm">Carregando experiência...</p>
                        </div>
                      </div>
                    </div>
                  </video>

                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-60 pointer-events-none"></div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-6 w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute bottom-6 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
                </div>

                {/* Tech Badge */}
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-5 h-8 border-2 border-purple-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-purple-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}
