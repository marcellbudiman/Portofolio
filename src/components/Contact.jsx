import { useState } from 'react'
import { Mail, MapPin, Linkedin, Instagram } from 'lucide-react'

const Contact = ({ darkMode }) => {
  const theme = {
    section: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: darkMode ? 'text-gray-400' : 'text-gray-500',
    infoCard: darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-orange-50/60 border-orange-100',
    socialBtn: darkMode
      ? 'bg-gray-800 border border-gray-700 text-gray-300 hover:border-orange-500 hover:text-orange-400'
      : 'bg-white border border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-500',
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'marcellbudiman20@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&to=marcellbudiman20@gmail.com',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Jakarta, Indonesia',
      href: null,
    },
  ]

  const socials = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/marcell-budiman', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/marcell.budiman/', label: 'Instagram' },
  ]

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${theme.section}`}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className={`text-sm font-semibold tracking-widest uppercase ${theme.textMuted}`}>
            Get in touch
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 ${theme.textPrimary}`}>
            Contact <span className="text-orange-500">Me</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-12 rounded-full bg-orange-500" />
            <div className="h-1 w-4 rounded-full bg-amber-400 ml-1" />
            <div className="h-1 w-2 rounded-full bg-orange-300 ml-1" />
          </div>
          <p className={`mt-5 max-w-xl mx-auto text-sm leading-relaxed ${theme.textSecondary}`}>
            My inbox is always open — I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Cards — centered, capped width */}
        <div className="flex flex-col items-center gap-4" data-aos="fade-up" data-aos-delay="100">

          {contactInfo.map((item, i) => (
            <div
              key={i}
              className={`w-full max-w-sm flex items-start gap-4 p-4 rounded-2xl border ${theme.infoCard} transition-all duration-300`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                {item.icon}
              </div>
              <div>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${theme.textMuted}`}>
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className={`text-sm font-medium hover:text-orange-500 transition-colors ${theme.textPrimary}`}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className={`text-sm font-medium ${theme.textPrimary}`}>{item.value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Socials */}
          <div className={`w-full max-w-sm p-4 rounded-2xl border ${theme.infoCard}`}>
            <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${theme.textMuted}`}>
              Find me on
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${theme.socialBtn}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact