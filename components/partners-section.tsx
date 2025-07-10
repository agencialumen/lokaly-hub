"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Zap } from "lucide-react"

const technologies = ["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Vercel", "Figma"]

export default function PartnersSection() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-fuchsia-900/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Shopify Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-900/30 to-black border border-purple-500/30 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl"></div>

          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Parceiro Oficial <span className="text-purple-400">Shopify</span>
            </h3>
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
              Criamos lojas personalizadas com animações únicas e performance otimizada
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-purple-900/40 text-purple-300 text-xs rounded-full">Temas Custom</span>
              <span className="px-3 py-1 bg-purple-900/40 text-purple-300 text-xs rounded-full">
                Apps Personalizados
              </span>
              <span className="px-3 py-1 bg-purple-900/40 text-purple-300 text-xs rounded-full">Animações Fluidas</span>
            </div>
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-lg md:text-xl font-bold mb-4 text-white flex items-center justify-center">
            <Zap className="h-5 w-5 mr-2 text-purple-400" />
            Tecnologias que Dominamos
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-4 py-2 bg-black/40 border border-purple-900/30 text-gray-300 text-sm rounded-lg hover:border-purple-500/50 transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
