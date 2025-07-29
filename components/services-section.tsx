"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Search, Zap, Palette, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Code2,
    title: "Desarrollo Frontend",
    description: "Interfaces modernas y responsivas con React, Next.js y las últimas tecnologías web",
    gradient: "from-[#667eea] to-[#764ba2]",
    delay: 0.1,
  },
  {
    icon: Smartphone,
    title: "Diseño Responsivo",
    description: "Experiencias perfectas en todos los dispositivos, desde móviles hasta desktop",
    gradient: "from-[#764ba2] to-[#667eea]",
    delay: 0.2,
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Optimización para motores de búsqueda y rendimiento web excepcional",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
    delay: 0.3,
  },
  {
    icon: Zap,
    title: "Desarrollo Rápido",
    description: "Entrega eficiente sin comprometer la calidad del código",
    gradient: "from-[#8b5cf6] to-[#6366f1]",
    delay: 0.4,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Diseños atractivos y funcionales que convierten visitantes en clientes",
    gradient: "from-[#3b82f6] to-[#667eea]",
    delay: 0.5,
  },
  {
    icon: Shield,
    title: "Mantenimiento",
    description: "Soporte continuo y actualizaciones para mantener tu sitio seguro",
    gradient: "from-[#667eea] to-[#3b82f6]",
    delay: 0.6,
  },
]

export function ServicesSection() {
  const handleServiceClick = () => {
    const contactElement = document.getElementById("contacto")
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section id="servicios" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 border border-[#667eea]/30 rounded-full text-sm font-medium text-muted-foreground backdrop-blur-sm">
              Servicios
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lo que puedo hacer{" "}
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">por ti</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrezco soluciones completas de desarrollo web para hacer crecer tu presencia digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group h-full cursor-pointer"
              onClick={handleServiceClick}
            >
              <Card className="h-full border-0 bg-background/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:bg-background/20 hover:border-[#667eea]/30 border border-transparent">
                <CardHeader className="text-center pb-6">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl mb-2 group-hover:text-[#667eea] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
