"use client"

import { motion } from "framer-motion"
import { Award, Clock, Users, Coffee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    icon: Users,
    number: "20+",
    label: "Clientes satisfechos",
    delay: 0.1,
  },
  {
    icon: Award,
    number: "15+",
    label: "Proyectos completados",
    delay: 0.2,
  },
  {
    icon: Clock,
    number: "2+",
    label: "Años de experiencia",
    delay: 0.3,
  },
  {
    icon: Coffee,
    number: "1000+",
    label: "Tazas de café",
    delay: 0.4,
  },
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 border border-[#667eea]/20 rounded-full text-sm font-medium text-muted-foreground">
              Sobre mí
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Desarrollador{" "}
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Bautii.sab
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy un desarrollador web freelance especializado en crear experiencias digitales excepcionales. Con más de
              3 años de experiencia, he ayudado a empresas de todos los tamaños a establecer su presencia online de
              manera efectiva.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mi enfoque se centra en combinar diseño atractivo con funcionalidad robusta, asegurando que cada proyecto
              no solo se vea bien, sino que también funcione perfectamente y genere resultados reales para mis clientes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabajo principalmente con React, Next.js, y las tecnologías más modernas del desarrollo web, siempre
              manteniéndome actualizado con las últimas tendencias y mejores prácticas de la industria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center p-6 border-0 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <motion.div
                      className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] p-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
