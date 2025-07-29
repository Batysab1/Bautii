"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const handleDiscordClick = () => {
    window.open("https://discord.com/channels/@me/1384671837660643398", "_blank")
  }

  return (
    <section id="contacto" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 border border-[#667eea]/30 rounded-full text-sm font-medium text-muted-foreground backdrop-blur-sm">
              Contacto
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            ¿Listo para empezar tu{" "}
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              proyecto?
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hablemos sobre tu idea y cómo puedo ayudarte a hacerla realidad. Te respondo rápidamente por Discord.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#5865f2]/20 to-[#5865f2]/20 rounded-2xl blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
              <Button
                size="lg"
                onClick={handleDiscordClick}
                className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-12 py-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#5865f2]/25 text-lg font-medium relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <MessageCircle className="h-6 w-6 mr-3" />
                Chatear en Discord
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">Respuesta garantizada en menos de 24 horas</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
