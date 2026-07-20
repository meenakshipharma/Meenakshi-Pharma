import { useState } from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiArrowRight } from 'react-icons/fi'
import { brand, footer, navLinks } from '../data/content.js'
import Reveal from './Reveal.jsx'

const socialIcons = {
  Facebook: FiFacebook,
  Instagram: FiInstagram,
  LinkedIn: FiLinkedin,
  Twitter: FiTwitter,
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    // TODO: wire up to a real newsletter provider
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer className="bg-ink text-cream/80">
      <Reveal direction="up" className="container-max px-6 md:px-12 lg:px-20 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <span className="font-display text-xl font-semibold text-white">{brand.name}</span>
          <p className="text-sm leading-relaxed">{footer.description}</p>
          <div className="flex gap-3 pt-2">
            {footer.socials.map((s) => {
              const Icon = socialIcons[s.label] ?? FiFacebook
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 hover:bg-coral hover:border-coral transition-colors"
                >
                  <Icon size={15} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-coral transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li>{brand.phone}</li>
            <li>{brand.email}</li>
            <li>{brand.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Newsletter</h4>
          <p className="text-sm mb-3">Get updates on new formulations and company news.</p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-capsule bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-cream/50 border border-white/10 focus:border-coral outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral hover:bg-coralDark transition-colors"
            >
              <FiArrowRight />
            </button>
          </form>
          {submitted && <p className="text-xs text-coral mt-2">Thanks — you're subscribed!</p>}
        </div>
      </Reveal>

      <div className="border-t border-white/10 py-6 px-6 md:px-12 lg:px-20 text-xs flex flex-col md:flex-row gap-2 justify-between container-max">
        <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
        <span>Designed &amp; built with care.</span>
      </div>
    </footer>
  )
}
