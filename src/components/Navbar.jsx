import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi'
import { brand, navLinks } from '../data/content.js'
import Button from './Button.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
        <a href="#hero" className="flex items-center gap-2 font-display text-xl font-semibold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral text-white text-sm font-bold">
            MP
          </span>
          {brand.name}
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-inkSoft hover:text-coral transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-5">
          <a href={`tel:${brand.phone}`} className="flex items-center gap-2 text-sm font-semibold text-ink hover:text-coral transition-colors">
            <FiPhoneCall /> {brand.phone}
          </a>
          <Button href="#contact" variant="primary">
            Get in Touch
          </Button>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden text-2xl text-ink"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-cream border-t border-ink/10"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block py-2.5 text-sm font-medium text-inkSoft hover:text-coral"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <Button href="#contact" variant="primary" className="w-full" onClick={handleLinkClick}>
                  Get in Touch
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
