"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const availableServices = [
  { id: "website", name: "Website Responsivo", price: 120 },
  { id: "ecommerce", name: "E-commerce", price: 180 },
  { id: "landing", name: "Landing Page", price: 90 },
  { id: "seo", name: "Otimização SEO", price: 70 },
  { id: "social", name: "Gestão de Redes Sociais", price: 100 },
  { id: "ads", name: "Campanhas de Anúncios", price: 120 },
  { id: "branding", name: "Identidade Visual", price: 150 },
  { id: "app", name: "Aplicativo Mobile", price: 200 },
  { id: "dashboard", name: "Dashboard Personalizado", price: 160 },
  { id: "support", name: "Suporte Técnico 24/7", price: 80 },
]

const predefinedPlans = [
  {
    id: "starter",
    name: "Starter",
    price: 99,
    description: "Ideal para pequenos negócios",
    features: [
      "Website Responsivo",
      "Otimização SEO Básica",
      "Integração com Redes Sociais",
      "Formulário de Contato",
      "Hospedagem Incluída",
      "Suporte por Email",
    ],
    popular: false,
    whatsappMessage: "Olá! Estou interessado no plano Starter da Lokaly Hub. Poderia me fornecer mais informações?",
  },
  {
    id: "pro",
    name: "Professional",
    price: 199,
    description: "Perfeito para empresas em crescimento",
    features: [
      "Website Responsivo Premium",
      "E-commerce Básico",
      "Otimização SEO Avançada",
      "Gestão de Redes Sociais (2 plataformas)",
      "Campanhas de Anúncios Básicas",
      "Analytics e Relatórios Mensais",
      "Hospedagem Premium",
      "Suporte Prioritário",
    ],
    popular: true,
    whatsappMessage:
      "Olá! Estou interessado no plano Professional da Lokaly Hub. Poderia me fornecer mais informações?",
  },
  {
    id: "infinity",
    name: "Infinity",
    price: 349,
    description: "Solução completa para dominar o digital",
    features: [
      "Website + E-commerce Completo",
      "Aplicativo Mobile Básico",
      "Dashboard Personalizado",
      "Otimização SEO Premium",
      "Gestão de Redes Sociais (4 plataformas)",
      "Campanhas de Anúncios Avançadas",
      "Identidade Visual Completa",
      "Analytics e Relatórios Semanais",
      "Hospedagem Premium",
      "Suporte 24/7 Dedicado",
    ],
    popular: false,
    whatsappMessage: "Olá! Estou interessado no plano Infinity da Lokaly Hub. Poderia me fornecer mais informações?",
  },
]

export default function PlanosPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [showAllServices, setShowAllServices] = useState(false)

  const calculateCustomPrice = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = availableServices.find((s) => s.id === serviceId)
      return total + (service?.price || 0)
    }, 0)
  }

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId))
    } else {
      setSelectedServices([...selectedServices, serviceId])
    }
  }

  const displayedServices = showAllServices ? availableServices : availableServices.slice(0, 5)

  const buildCustomWhatsappMessage = () => {
    const selectedServiceNames = selectedServices
      .map((id) => {
        const service = availableServices.find((s) => s.id === id)
        return service?.name
      })
      .join(", ")

    return `Olá! Estou interessado em um plano personalizado da Lokaly Hub com os seguintes serviços: ${selectedServiceNames}. Poderia me fornecer mais informações?`
  }

  const encodeWhatsappMessage = (message: string) => {
    return encodeURIComponent(message)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#0a0118] text-white">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text mb-4"
            >
              Planos & Preços
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300 max-w-2xl"
            >
              Escolha o plano ideal para impulsionar sua presença digital. Todos os planos incluem suporte dedicado e
              atualizações contínuas.
            </motion.p>
          </div>

          <Link href="/">
            <Button
              variant="outline"
              className="border-purple-500 text-white hover:bg-purple-900/20 rounded-full px-4 py-2 group bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Home
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {predefinedPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${
                plan.popular
                  ? "from-purple-900/30 to-black border-purple-500/30"
                  : "from-purple-900/20 to-black border-purple-900/20"
              } border rounded-2xl overflow-hidden relative ${
                plan.popular ? "shadow-[0_0_30px_rgba(147,51,234,0.2)]" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-lg">
                    MAIS POPULAR
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-white">R${plan.price}</span>
                  <span className="text-gray-400 text-sm">/mês</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/5521964579176?text=${encodeWhatsappMessage(plan.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white"
                      : "bg-purple-900/40 hover:bg-purple-900/60 text-white"
                  } border-none rounded-full py-3 inline-flex items-center justify-center group transition-all duration-300`}
                >
                  Contratar Plano
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
