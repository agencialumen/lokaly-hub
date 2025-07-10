"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { number: 100, label: "Projetos Entregues", suffix: "+" },
  { number: 50, label: "Clientes Satisfeitos", suffix: "+" },
  { number: 98, label: "Taxa de Satisfação", suffix: "%" },
  { number: 24, label: "Suporte Disponível", suffix: "/7" },
]

function AnimatedNumber({ number, suffix = "", duration = 2 }: { number: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = number
      const increment = end / (duration * 60)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, number, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-fuchsia-900/10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
            Resultados que Falam
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Números que comprovam nossa excelência</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-gradient-to-br from-purple-900/20 to-black border border-purple-900/30 rounded-xl p-4 md:p-6"
            >
              <div className="text-2xl md:text-4xl font-bold text-white mb-2">
                <AnimatedNumber number={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
