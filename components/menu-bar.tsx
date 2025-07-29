"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { Home, Briefcase, FolderOpen, User, Mail } from "lucide-react"

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Inicio",
    href: "#hero",
    gradient:
      "radial-gradient(circle, rgba(102,126,234,0.15) 0%, rgba(102,126,234,0.05) 50%, rgba(102,126,234,0) 100%)",
    iconColor: "text-[#667eea]",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Servicios",
    href: "#servicios",
    gradient: "radial-gradient(circle, rgba(118,75,162,0.15) 0%, rgba(118,75,162,0.05) 50%, rgba(118,75,162,0) 100%)",
    iconColor: "text-[#764ba2]",
  },
  {
    icon: <FolderOpen className="h-5 w-5" />,
    label: "Proyectos",
    href: "#proyectos-realizados",
    gradient: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.05) 50%, rgba(99,102,241,0) 100%)",
    iconColor: "text-[#6366f1]",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Sobre mí",
    href: "#sobre-mi",
    gradient: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 50%, rgba(139,92,246,0) 100%)",
    iconColor: "text-[#8b5cf6]",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Contacto",
    href: "#contacto",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 50%, rgba(59,130,246,0) 100%)",
    iconColor: "text-[#3b82f6]",
  },
]

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 1.5,
    transition: {
      opacity: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.3, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
  duration: 0.4,
}

export function MenuBar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <motion.nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 p-3 rounded-2xl bg-background/90 backdrop-blur-xl border border-border/50 shadow-xl relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r from-[#667eea]/20 via-[#764ba2]/20 to-[#667eea]/20 rounded-2xl z-0 pointer-events-none blur-sm`}
        variants={navGlowVariants}
      />
      <ul className="flex items-center gap-1 relative z-10">
        {menuItems.map((item, index) => (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block rounded-xl overflow-visible group relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                variants={glowVariants}
                style={{
                  background: item.gradient,
                  opacity: 0,
                }}
              />
              <motion.a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center gap-2 px-4 py-2.5 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl text-sm font-medium cursor-pointer"
                variants={itemVariants}
                transition={sharedTransition}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
              >
                <span className={`transition-colors duration-300 group-hover:${item.iconColor}`}>{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </motion.a>
              <motion.a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center gap-2 px-4 py-2.5 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl text-sm font-medium cursor-pointer"
                variants={backVariants}
                transition={sharedTransition}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
              >
                <span className={`transition-colors duration-300 group-hover:${item.iconColor}`}>{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </motion.a>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}
