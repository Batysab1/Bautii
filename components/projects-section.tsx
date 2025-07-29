"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Moderno",
    description: "Tienda online completa con carrito de compras, pagos y gestión de inventario",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Next.js", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    delay: 0.1,
  },
  {
    title: "Dashboard Empresarial",
    description: "Panel de control con analytics en tiempo real y gestión de datos",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React", "Chart.js", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    delay: 0.2,
  },
  {
    title: "Landing Page SaaS",
    description: "Página de aterrizaje optimizada para conversión con animaciones suaves",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Next.js", "Framer Motion", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    delay: 0.3,
  },
  {
    title: "App de Reservas",
    description: "Sistema de reservas online con calendario interactivo y notificaciones",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Vue.js", "Firebase", "Vuetify"],
    liveUrl: "#",
    githubUrl: "#",
    delay: 0.4,
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Mis{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Algunos de los proyectos que he desarrollado para mis clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden border-0 bg-background/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
