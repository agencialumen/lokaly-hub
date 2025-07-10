"use client"

import { motion } from "framer-motion"

const partners = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "Netflix",
  "Spotify",
  "Adobe",
  "Shopify",
  "Stripe",
  "PayPal",
  "Zoom",
  "Slack",
  "Figma",
  "Notion",
  "Discord",
]

export default function PartnersMarquee() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-fuchsia-900/10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
            Tecnologias que Utilizamos
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trabalhamos com as melhores ferramentas e plataformas do mercado
          </p>
        </motion.div>

        <div className="marquee-container">
          <div className="marquee">
            {[...partners, ...partners].map((partner, index) => (
              <span
                key={index}
                className="inline-block mx-8 text-2xl font-bold text-gray-400 hover:text-white transition-colors duration-300"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
