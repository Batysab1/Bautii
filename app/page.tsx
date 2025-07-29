import { MenuBar } from "@/components/menu-bar"
import { AnimatedBackground } from "@/components/animated-background"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { RealizedProjectsSection } from "@/components/realized-projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Fixed Navigation */}
      <MenuBar />

      {/* Sections */}
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <RealizedProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/40 bg-background/10 backdrop-blur-sm relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Bautii.sab. Todos los derechos reservados. Hecho con ❤️ y mucho café.
          </p>
        </div>
      </footer>
    </div>
  )
}
