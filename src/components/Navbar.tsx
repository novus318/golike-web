"use client"

import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { useTheme } from "@/hooks/useTheme"
import { motion, AnimatePresence } from "framer-motion"
import InteractiveHoverButton from './ui/interactive-hover-button'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleThemeToggle = () => {
    const nextTheme = theme === "light" ? "dark" : "light"
    toggleTheme(nextTheme)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src={
                  theme === "dark"
                    ? "/assets/images/golike-w.svg"
                    : "/assets/images/golike-b.svg"
                }
                alt="Logo"
                className="h-16 w-auto"
              />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-8">
            <a
                href="/"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="/docs"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Docs
              </a>
            </div>

            <div className="flex items-center space-x-4">
              {/* Get Started Button */}
        
              <InteractiveHoverButton
              className='hidden md:inline-block'
              text='Get Started' />

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleThemeToggle}
                className="text-gray-700 dark:text-gray-300"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="md:hidden text-gray-700 dark:text-gray-300"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden transition-all duration-300 ${
          scrolled
            ? "bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
            >
              <div className="px-4 pt-2 pb-4 space-y-3">
              <a
                  href="/"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                 About
                </a>
                <a
                  href="/docs"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  Docs
                </a>
                <InteractiveHoverButton
                  className="w-full"
                  text='Get Started'
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar

