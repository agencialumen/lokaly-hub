"use client"

import Link from "next/link"
import { Zap, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg blur opacity-30"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-fuchsia-600 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
                Lokaly Hub
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md text-sm md:text-base">
              Transformamos ideias em experiências digitais únicas. Especialistas em desenvolvimento web, apps e
              e-commerce Shopify.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="/planos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Planos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                contato@lokalyhub.com
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                (21) 96457-9176
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Rio de Janeiro, RJ
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm">© 2025 Lokaly Hub. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-xs transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-xs transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
