"use client"

import { motion } from "framer-motion"
import { ArrowDown, Code, Palette, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const floatingIcons = [
  { icon: Code, delay: 0, x: -120, y: -80 },
  { icon: Palette, delay: 0.5, x: 120, y: -60 },
  { icon: Zap, delay: 1, x: -100, y: 80 },
]

export function HeroSection() {
  const handleScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating background icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-white/5 dark:text-white/10"
          initial={{ opacity: 0, x: item.x, y: item.y, rotate: 0 }}
          animate={{
            opacity: 1,
            x: item.x + 30,
            y: item.y + 20,
            rotate: 360,
          }}
          transition={{
            duration: 25,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <item.icon className="h-40 w-40" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 border border-[#667eea]/30 rounded-full text-sm font-medium text-muted-foreground mb-4 backdrop-blur-sm">
              Desarrollador Web Freelance
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Creo experiencias web
            <br />
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              excepcionales
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Desarrollo sitios web modernos, rápidos y optimizados que convierten visitantes en clientes. Especializado
            en React, Next.js y diseño responsive.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#5a6fd8] hover:to-[#6a4190] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg text-base font-medium"
                onClick={() => handleScrollTo("proyectos-realizados")}
              >
                Ver mis proyectos
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 rounded-xl transition-all duration-300 bg-transparent border-2 border-[#667eea]/30 hover:bg-[#667eea]/10 text-base font-medium backdrop-blur-sm"
                onClick={() => handleScrollTo("contacto")}
              >
                Hablemos
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  )
}
