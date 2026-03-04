import { useState, useEffect } from 'react'
import { Github, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import project1 from '../assets/project1.png'
import project1b from '../assets/project1b.png'
import project2 from '../assets/project2.png'
import project2b from '../assets/project2b.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project5b from '../assets/project5b.png'
import project5c from '../assets/project5c.png'
import project5d from '../assets/project5d.png'

const projects = [
  {
    id: 1,
    image: project1,
    images: [project1, project1b],
    title: 'Insentif',
    category: 'Backend',
    description: 'A robust backend system built with Node.js and PostgreSQL, featuring optimized query performance and automated data pipelines for high-volume transactions.',
    longDescription: `This backend system was designed to handle high-volume transactions with minimal latency. Built on Node.js with a PostgreSQL database, the architecture emphasizes reliability and scalability.\n\nKey highlights include automated data pipelines that reduce manual intervention, optimized SQL queries with proper indexing strategies, and a RESTful API layer that serves multiple frontend clients.\n\nThe system processes thousands of transactions per minute with 99.9% uptime, leveraging connection pooling and caching layers to maintain performance under load.`,
    tags: ['Node.js', 'PostgreSQL', 'REST API'],
    github: '',
    demo: '',
  },
  {
    id: 2,
    image: project2,
    images: [project2, project2b],
    title: 'Project Two',
    category: 'Database',
    description: 'Database optimization project focusing on query tuning, indexing strategies, and schema design for a large-scale e-commerce application.',
    longDescription: `A comprehensive database overhaul for a large-scale e-commerce platform experiencing severe performance bottlenecks.\n\nThe project involved deep analysis of slow query logs, redesigning the schema to reduce joins, and implementing composite indexes that cut average query time by 70%.\n\nAdditionally, materialized views were introduced for frequently-run aggregation queries, and a read replica setup was configured to offload reporting workloads from the primary database.`,
    tags: ['MySQL', 'Query Optimization', 'Indexing'],
    github: '',
    demo: '',
  },
  {
    id: 3,
    image: project3,
    images: [project3],
    title: 'Project Three',
    category: 'Automation',
    description: 'Data automation tool that streamlines ETL processes, reducing manual data handling by 80% and improving data accuracy across departments.',
    longDescription: `This automation tool was built to eliminate repetitive manual data tasks that were consuming hours of staff time daily.\n\nUsing Python with Pandas and custom ETL scripts, the tool extracts data from multiple sources (CSV, APIs, databases), transforms it according to business rules, and loads it into the target data warehouse on a scheduled basis.\n\nThe result: an 80% reduction in manual data handling, near-elimination of human error in data entry, and real-time dashboards that teams can rely on for accurate decision-making.`,
    tags: ['Python', 'ETL', 'Automation'],
    github: '',
    demo: '',
  },
  {
    id: 4,
    image: project4,
    images: [project4],
    title: 'Project Four',
    category: 'Full Stack',
    description: 'Full stack web application with a clean dashboard interface, real-time data visualization, and role-based access control.',
    longDescription: `A complete full stack solution featuring a React frontend paired with an Express.js backend and MongoDB database.\n\nThe dashboard provides real-time data visualization using Chart.js, with WebSocket-powered live updates. Role-based access control ensures that admins, managers, and regular users each see only the data and actions relevant to their role.\n\nThe application also features JWT authentication, audit logging, and a mobile-responsive design that works seamlessly across devices.`,
    tags: ['React', 'Express', 'MongoDB'],
    github: '',
    demo: '',
  },
  {
    id: 5,
    image: project5,
    images: [project5, project5b, project5c, project5d],
    title: 'Skripsi Itinerary Dengan Algoritma Particle Swarm Optimization',
    category: 'Backend',
    description: 'Travel itinerary optimization using Particle Swarm Optimization algorithm to generate the most efficient tour routes.',
    longDescription: `This undergraduate thesis project (skripsi) implements the Particle Swarm Optimization (PSO) algorithm to solve the Traveling Salesman Problem applied to travel itinerary planning.\n\nThe system takes a list of tourist destinations and constraints (opening hours, budget, travel time) and computes the most efficient visiting order using a swarm of virtual particles that iteratively converge on the optimal solution.\n\nBuilt with a Laravel backend and a simple frontend interface, the project demonstrates how bio-inspired metaheuristic algorithms can solve NP-hard optimization problems in practical applications. Results showed PSO consistently outperforming brute-force approaches on datasets of 10+ destinations.`,
    tags: ['PSO Algorithm', 'Laravel', 'Optimization'],
    github: 'https://github.com/marcellbudiman/Wistinerary.git',
    demo: '',
  },
]

// ── Modal Component ──────────────────────────────────────────────────────────
const ProjectModal = ({ project, onClose, darkMode }) => {
  const [imgIndex, setImgIndex] = useState(0)

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const images = project.images || [project.image]
  const hasManyImages = images.length > 1

  const prevImg = (e) => { e.stopPropagation(); setImgIndex(i => (i - 1 + images.length) % images.length) }
  const nextImg = (e) => { e.stopPropagation(); setImgIndex(i => (i + 1) % images.length) }

  const bg = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
  const overlay = 'fixed inset-0 z-50 flex items-center justify-center p-4'
  const textSec = darkMode ? 'text-gray-300' : 'text-gray-600'
  const tag = darkMode ? 'bg-gray-700 text-orange-300' : 'bg-orange-50 text-orange-600'
  const divider = darkMode ? 'border-gray-700' : 'border-gray-100'

  return (
    <div
      className={overlay}
      style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${bg}`}
        style={{ animation: 'modalIn 0.25s cubic-bezier(.4,0,.2,1)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Carousel */}
        <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl bg-gray-800">
          <img
            src={images[imgIndex]}
            alt={`${project.title} screenshot ${imgIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          {/* gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />

          {/* Carousel controls */}
          {hasManyImages && (
            <>
              <button onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setImgIndex(i) }}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${i === imgIndex ? 'bg-orange-400 w-5' : 'bg-white/50 hover:bg-white/80'}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Category badge */}
          {/* <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-orange-500/90 text-white backdrop-blur-sm">
            {project.category}
          </span> */}
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-1 leading-snug">{project.title}</h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3 mb-5">
            {project.tags.map(t => (
              <span key={t} className={`text-xs font-medium px-2.5 py-1 rounded-lg ${tag}`}>{t}</span>
            ))}
          </div>

          <hr className={`mb-5 border-t ${divider}`} />

          {/* Long description — supports \n\n as paragraphs */}
          <div className={`text-sm leading-relaxed space-y-3 ${textSec}`}>
            {(project.longDescription || project.description).split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Action links */}
          {(project.github || project.demo) && (
            <div className={`flex gap-3 mt-6 pt-5 border-t ${divider}`}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-orange-500 transition-colors"
                >
                  <Github className="w-4 h-4" /> View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-orange-400 text-orange-500 text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Keyframe animation injected once */}
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────────────────
const Project = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const theme = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    card: darkMode ? 'bg-gray-800' : 'bg-white',
    cardBorder: darkMode ? 'border-gray-700' : 'border-gray-100',
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: darkMode ? 'text-gray-400' : 'text-gray-500',
    tag: darkMode ? 'bg-gray-700 text-orange-300' : 'bg-orange-50 text-orange-600',
    iconBtn: darkMode
      ? 'bg-gray-700 text-gray-300 hover:bg-orange-500 hover:text-white'
      : 'bg-gray-100 text-gray-600 hover:bg-orange-500 hover:text-white',
  }

  return (
    <>
      <section
        id="project"
        className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${theme.bg}`}
      >
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <span className={`text-sm font-semibold tracking-widest uppercase ${theme.textMuted}`}>
              What I've built
            </span>
            <h2 className={`text-4xl sm:text-5xl font-bold mt-2 ${theme.textPrimary}`}>
              My <span className="text-orange-500">Projects</span>
            </h2>
            <div className="flex justify-center mt-4">
              <div className="h-1 w-12 rounded-full bg-orange-500" />
              <div className="h-1 w-4 rounded-full bg-amber-400 ml-1" />
              <div className="h-1 w-2 rounded-full bg-orange-300 ml-1" />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
                className={`group rounded-2xl overflow-hidden border cursor-pointer ${theme.card} ${theme.cardBorder}
                shadow-sm hover:shadow-xl hover:shadow-orange-500/10
                transition-all duration-400 hover:-translate-y-1`}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent
                    transition-opacity duration-300
                    ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}
                  />

                  {/* GitHub button — only if github is filled */}
                  {project.github && (
                    <div className={`absolute bottom-3 right-3 flex gap-2
                      transition-all duration-300
                      ${hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={e => e.stopPropagation()} // don't open modal when clicking github
                        className={`p-2 rounded-full transition-colors duration-200 ${theme.iconBtn}`}
                        title="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className={`text-lg font-bold mb-2 ${theme.textPrimary}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${theme.textSecondary}`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-2.5 py-1 rounded-lg ${theme.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className={`text-lg ${theme.textMuted}`}>No projects in this category yet.</p>
            </div>
          )}

        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          darkMode={darkMode}
        />
      )}
    </>
  )
}

export default Project