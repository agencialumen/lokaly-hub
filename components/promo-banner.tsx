"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

export default function PromoBanner() {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-r from-purple-900/30 to-black border border-purple-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-fuchsia-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 text-center">
            <span className="inline-flex items-center px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full mb-3 md:mb-4">
              <Sparkles className="w-3 h-3 mr-2" />
              OFERTA ESPECIAL
            </span>
            <h2 className="text-xl md:text-3xl font-bold text-white mb-2">
              Primeiro mês com <span className="text-purple-400">50% OFF</span>
            </h2>
            <p className="text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Assine qualquer plano e ganhe 50% de desconto no primeiro mês + análise gratuita
            </p>
            <a
              href="https://wa.me/5521964579176?text=Olá!%20Estou%20interessado%20na%20oferta%20especial%20com%2050%%20de%20desconto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none rounded-full px-6 py-3 text-sm md:text-base shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group"
            >
              Aproveitar Oferta
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
