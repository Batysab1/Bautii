"use client"

import { motion } from "framer-motion"
import { ExternalLink, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const realizedProjects = [
  {
    title: "El Páramo",
    description:
      "Sitio web elegante y moderno para una empresa de servicios premium. Diseño minimalista con animaciones suaves y navegación intuitiva.",
    image: "/images/elparamo-preview.png",
    url: "https://elparamo.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "RedM",
    delay: 0.1,
  },
  {
    title: "Blessed York",
    description:
      "Plataforma web sofisticada con diseño contemporáneo. Enfoque en la experiencia de usuario y rendimiento optimizado.",
    image: "/images/blessed-york-preview.png",
    url: "https://blessed-york.vercel.app/",
    tech: ["React", "TypeScript", "CSS Modules"],
    category: "FiveM",
    delay: 0.2,
  },
  {
    title: "Coahuila Concept",
    description:
      "Sitio web conceptual con diseño innovador y funcionalidades avanzadas. Optimizado para conversión y engagement.",
    image: "/images/coahuila-concept-preview.png",
    url: "https://coahuilaconcept.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "FiveM",
    delay: 0.3,
  },
]

export function RealizedProjectsSection() {
  return (
    <section
      id="proyectos-realizados"
      className="py-24 px-6 bg-gradient-to-b from-background to-muted/30 relative z-10"
    >
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
              Proyectos Realizados
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trabajos que hablan por{" "}
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              sí mismos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es una historia de éxito. Descubre cómo he ayudado a mis clientes a alcanzar sus objetivos
            digitales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {realizedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <Card className="overflow-hidden border-0 bg-background/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={`Preview de ${project.title}`}
                    className="w-full h-56 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground rounded-full border border-border/50">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-10 w-10 p-0 bg-background/90 backdrop-blur-sm hover:bg-background border border-border/50"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  {/* Overlay con información adicional */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                      <p className="text-xs text-muted-foreground">Haz clic para visitar el sitio</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#667eea] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full font-medium border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-gradient-to-r group-hover:from-[#667eea] group-hover:to-[#764ba2] group-hover:text-white group-hover:border-transparent transition-all duration-300 bg-transparent border-border/50 hover:border-[#667eea]/50"
                        onClick={() => window.open(project.url, "_blank")}
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        Ver proyecto en vivo
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">¿Te gusta lo que ves? Hablemos sobre tu próximo proyecto</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#5a6fd8] hover:to-[#6a4190] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              onClick={() => {
                const contactElement = document.getElementById("contacto")
                if (contactElement) {
                  contactElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              }}
            >
              Iniciar mi proyecto
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
