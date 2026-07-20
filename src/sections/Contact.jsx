import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { brand, contact } from '../data/content.js'

const contactCards = [
  { icon: FiPhone, label: 'Call Us', value: brand.phone },
  { icon: FiMail, label: 'Email Us', value: brand.email },
  { icon: FiMapPin, label: 'Visit Us', value: brand.address },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire this up to a real form endpoint (email API, CRM, etc.)
    setSent(true)
  }

  return (
    <section id="contact" className="section-pad bg-sand/60">
      <div className="container-max">
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} description={contact.description} align="center" className="mb-14" />

        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {contactCards.map((c) => (
            <Reveal key={c.label} direction="up" className="rounded-2xl bg-white p-6 shadow-card flex flex-col items-center text-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blush text-coral text-xl">
                <c.icon />
              </span>
              <p className="text-xs uppercase tracking-wide text-inkSoft font-semibold">{c.label}</p>
              <p className="text-sm text-ink font-medium">{c.value}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal direction="left" className="rounded-xl2 bg-white p-8 md:p-10 shadow-card">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center text-center gap-3 py-16">
                <h3 className="font-display text-xl text-ink">Message sent!</h3>
                <p className="text-inkSoft text-sm">Thanks for reaching out — our team will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus:border-coral outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus:border-coral outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus:border-coral outline-none resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <Button type="submit" variant="primary" className="mt-2 w-full">
                  Send Message
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal direction="right" className="rounded-xl2 overflow-hidden shadow-card min-h-[360px]">
            <iframe
              title="Meenakshi Pharma location"
              src={contact.mapEmbedUrl}
              className="h-full w-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
