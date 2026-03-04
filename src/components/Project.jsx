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
    description: 'Developed a dynamic role-based UI adaptation view. Engineered complex backend logic to calculate incentives for the one of the role.',
    longDescription: `Developed the FieldForce Incentive page and engineering a program to calculate incentives for "Farmers" the staff members responsible for managing partner clinics. I built the interface to be highly dynamic, implementing logic that automatically adapts page elements based on the specific identity of the logged-in user, which significantly streamlined the code structure and prevented redundancy. Beyond the user interface, I spearheaded the migration of the Farmer incentive calculation logic to comply with new business regulations. This process involved an extensive analysis of previous calculation methods and the identification of complex data dependencies across multiple database tables. I successfully aggregated these disparate data sources into a unified structure to serve as the primary basis for the new calculations, ensuring that the system accurately processed complex data flows and logical relationships to deliver precise incentive outcomes.`,
    tags: ['Python', 'Django', 'Automation'],
    github: '',
    demo: '',
  },
  {
    id: 2,
    image: project2,
    images: [project2, project2b],
    title: 'Term Of Payment',
    category: 'Database',
    description: 'Developed a dashboard for tracking clinic credit lines and a backend automation script that synchronizes financial data via API integration.',
    longDescription: `Developing a comprehensive user interface that provides clear visibility into financial data, specifically displaying transaction dates, total amounts, current payment statuses, and maturity dates for each clinic. To ensure this data remained current and accurate, I built a custom backend command designed to execute automatically on a daily schedule. This automation script integrates with external APIs to retrieve raw data in dictionary format, which then undergoes a rigorous processing pipeline. I implemented logic to validate and transform this incoming data before storing it in the database, ensuring that the system consistently presents reliable and up-to-date financial records to the users.`,
    tags: ['Python', 'API', 'Django', 'Automation'],
    github: '',
    demo: '',
  },
  {
    id: 3,
    image: project3,
    images: [project3],
    title: 'Poin Variasi Produk',
    category: 'Automation',
    description: 'Developing an automated backend script to calculate and store performance for real-time visualization.',
    longDescription: `Developed program to enhance the application's analytical capabilities by integrating a "Product Variation Point" feature, a key metric designed to evaluate the diversity of products sold by partner clinics during specific periods. Before implementing the frontend display, I engineered the underlying backend logic by developing a specialized Custom Command. This automated script was programmed to process sales data and calculate unique variation points for every outlet, ensuring the metrics reflected accurate performance trends. I designed the system to persist these calculated results into a dedicated database table, creating an optimized data source that allowed the existing application pages to retrieve and display the variation scores efficiently without impacting live calculation performance.`,
    tags: ['Python', 'Django', 'Automation'],
    github: '',
    demo: '',
  },
  {
    id: 4,
    image: project4,
    images: [project4],
    title: 'Dashboard',
    category: 'Full Stack',
    description: 'Developed a Dashboard designed to visualize sales metrics and team performance through dynamic data filtering with custom SQL functions to render accurate graphs and tables.',
    longDescription: `Developing Dashboard, a specialized analytical tool designed to provide managers with high-level visibility into sales figures and team performance. A central feature of this dashboard is its highly interactive filtering system, specifically the implementation of dynamic, cascading dropdowns. I engineered the frontend logic so that selecting a specific report template automatically updates the available time period options, ensuring that the user context remains valid and relevant without manual page reloads. Once a period is selected, the dashboard updates its visualizations—including complex graphs and detailed data tables—in real-time. To support this versatility, I developed distinct SQL function queries tailored to each specific template and period combination, ensuring that the backend could efficiently deliver accurate datasets regardless of the selected configuration.`,
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
    description: '"Wistinerary," a web-based application itinerary planning by implementing the Particle Swarm Optimization (PSO) algorithm.',
    longDescription: `"Wistinerary," a web-based application aimed at solving the complexities of travel itinerary planning by modeling the challenge as a Capacitated Vehicle Routing Problem (CVRP). Using the Waterfall development methodology, I engineered the backend using Python and the Django framework, implementing the Particle Swarm Optimization (PSO) algorithm to automate route generation. This algorithm considers critical variables such as travel time, visit duration, and location popularity to maximize the number of destinations visited without exceeding daily time limits. The application features a responsive user interface built with Tailwind CSS and integrates Leaflet OpenStreetMap to visualize the recommended routes, while MySQL is used for structured data management. `,
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