import { useState } from 'react'

const About = ({ darkMode }) => {
  const coreSkills = [
    'Database Management',
    'Query Optimization',
    'API Development',
    'Data Automation',
  ]

  const programmingLanguages = [
    'Python',
    'Django Query',
    'PostgreSQL',
    'SQL',
  ]

  const experiences = [
    {
      title: 'Backend Developer',
      company: 'PT. Pharos Indonesia',
      period: 'Jan 2025 – Jan 2026',
      type: 'Internship',
      detail: [
        'Designed and implemented scalable database models to manage high-volume data, performing query optimization to ensure maximum performance efficiency.',
        'Developed automation systems for complex data processing tasks to minimize manual intervention and accelerate operational workflows.',
        'Built and maintained APIs and backend processes to support web development, ensuring the system architecture is scalable for long-term business growth.',
        'Responsible for developing and improving websites that impact system stability, ease of use, and operational efficiency.',
        'Applied Object-Oriented Programming (OOP) principles to create dynamic and structured codebases, significantly enhancing code maintainability.',
        'Performed troubleshooting and debugging to resolve technical issues and ensure optimal system stability and functionality.',
      ],
    },
    {
      title: 'Lab Instructor',
      company: 'Tarumanagara University',
      period: 'Aug 2024 – Dec 2024',
      type: 'Part-time',
      subjects: 'Object Based Programming · Oracle DBA · Web Development',
      detail: [
        'Object Based Programming: Used Java as a backend to handle data processing, integrated with HTML, CSS and JavaScript to build the UI.',
        'Oracle Database Administrator: Taught Oracle database management and administration using Linux, SQL programming, installation, and configuration.',
        'Web Development: Used PHP as a backend connected with HTML and CSS to build the user interface.',
      ],
    },
    {
      title: 'Lab Instructor',
      company: 'Tarumanagara University',
      period: 'Jan 2025 – Jan 2026',
      type: 'Part-time',
      subjects: 'Applied Statistics · Database Design & Management',
      detail: [
        'Applied Statistics: Assisted lecturers in teaching applied statistical methods, including data processing and statistical inference.',
        'Database Design & Management: Assisted lecturers in teaching database design and management with PL/SQL.',
      ],
    },
  ]

  const stats = [
    { value: '1+', label: 'Years Work Experience' },
  ]

  const theme = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    card: darkMode ? 'bg-gray-800/60' : 'bg-white/80',
    border: darkMode ? 'border-gray-700' : 'border-orange-100',
    cardBorder: darkMode ? 'border-gray-700' : 'border-gray-100',
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: darkMode ? 'text-gray-400' : 'text-gray-500',
    statBg: darkMode ? 'bg-gray-700/60' : 'bg-orange-50',
    tag: darkMode ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' : 'bg-orange-100 text-orange-600',
    expCard: darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white border-gray-100',
    timelineLine: darkMode ? 'bg-gray-700' : 'bg-orange-100',
    typeBadge: darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-500',
  }

  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 ${theme.bg}`}
    >
      <div className="max-w-6xl w-full">

        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className={`text-sm font-semibold tracking-widest uppercase ${theme.textMuted}`}>
            Get to know me
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 ${theme.textPrimary}`}>
            About <span className="text-orange-500">Me</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-12 rounded-full bg-orange-500" />
            <div className="h-1 w-4 rounded-full bg-amber-400 ml-1" />
            <div className="h-1 w-2 rounded-full bg-orange-300 ml-1" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6" data-aos="fade-left" data-aos-delay="200">

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {['Information System', 'Backend Developer', 'Database', 'Data Engineer'].map((tag) => (
              <span key={tag} className={`text-xs font-semibold px-3 py-1 rounded-full ${theme.tag}`}>
                {tag}
              </span>
            ))}
          </div>

          {/* Bio */}
          <div>
            <h3 className={`text-2xl sm:text-3xl font-bold mb-3 ${theme.textPrimary}`}>
              Marcell Budiman
            </h3>
            <p className={`leading-relaxed ${theme.textSecondary}`}>
              A passionate Bachelor of Information System graduate from Tarumanagara University with GPA 3.90. I have
              deep interest in <span className="text-orange-500 font-medium">backend developer</span>, database management,
              query optimization, and data automation. I thrive on solving complex data challenges
              and building efficient backend systems.
            </p>
            <p className={`leading-relaxed mt-3 ${theme.textSecondary}`}>
              My journey includes interning as a <span className="text-orange-500 font-medium">backend developer</span> at
              PT. Pharos Indonesia, teaching as a lab instructor across 5 university subjects,
              and contributing to Jakarta Fair Kemayoran 2022.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className={`rounded-2xl p-4 text-center ${theme.statBg} border ${theme.border}`}>
                <p className="text-2xl font-bold text-orange-500">{stat.value}</p>
                <p className={`text-xs mt-1 ${theme.textMuted}`}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Core Skills */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-widest mb-3 ${theme.textMuted}`}>Core Skills</h4>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, i) => (
                <span key={skill} data-aos="fade-left" data-aos-delay={300 + i * 60}
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${darkMode ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' : 'bg-orange-100 text-orange-600'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-widest mb-3 ${theme.textMuted}`}>Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((lang, i) => (
                <span key={lang} data-aos="fade-left" data-aos-delay={400 + i * 60}
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${darkMode ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-cyan-100 text-cyan-700'}`}>
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-widest mb-6 ${theme.textMuted}`}>Experience</h4>

            <div className="relative">
              {/* vertical line */}
              <div className={`absolute left-4 top-0 bottom-0 w-px ${theme.timelineLine}`} />

              <div className="flex flex-col gap-6">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-12" data-aos="fade-up" data-aos-delay={i * 100}>

                    {/* dot */}
                    <div className="absolute left-0 top-5 w-8 h-8 rounded-full bg-orange-500/10 border-2 border-orange-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                    </div>

                    {/* card */}
                    <div className={`rounded-2xl border p-5 ${theme.expCard} shadow-sm`}>
                      {/* header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <div>
                          <p className={`font-bold text-base ${theme.textPrimary}`}>{exp.title}</p>
                          <p className="text-orange-500 text-sm font-medium">{exp.company}</p>
                          {exp.subjects && (
                            <p className={`text-xs mt-0.5 italic ${theme.textMuted}`}>{exp.subjects}</p>
                          )}
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${theme.typeBadge}`}>
                            {exp.type}
                          </span>
                          <span className={`text-xs ${theme.textMuted}`}>{exp.period}</span>
                        </div>
                      </div>

                      {/* divider */}
                      <div className={`my-3 h-px ${theme.timelineLine}`} />

                      {/* bullet points */}
                      <ul className="flex flex-col gap-1.5">
                        {exp.detail.map((d, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-400" />
                            <p className={`text-xs leading-relaxed ${theme.textSecondary}`}>{d}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm
              bg-gradient-to-r from-orange-500 to-amber-500 text-white
              hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#project"
              className={`inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm
              border-2 border-orange-500 transition-all duration-300 hover:scale-105
              ${darkMode ? 'text-orange-400 hover:bg-orange-500 hover:text-white' : 'text-orange-500 hover:bg-orange-500 hover:text-white'}`}
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About