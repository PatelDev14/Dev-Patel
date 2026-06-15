'use client'

import { Smartphone, Heart, Mail, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'DriveBay',
    description: 'A parking availability and driveway-rental platform. Built with SwiftUI, Firebase, and the Gemini API, featuring a scalable, responsive UI for frictionless parking discovery and driveway-rental transactions.',
    image: '/projects/AppIcon.jpg',
    tags: ['SwiftUI', 'Firebase', 'Gemini API', 'iOS'],
    link: 'https://apps.apple.com/ca/app/drivebay-private-parking/id6759207556',
    icon: Smartphone,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'CheckMe',
    description: 'A privacy-first health-tech app for offline ingredient analysis, built with SwiftUI and Apple Foundation Models. On-device AI personalizes ingredient assessments to your health profile, with Vision framework label OCR, SwiftData persistence, and an MVVM architecture — all without sending data to a server.',
    image: '/projects/checkme.png',
    tags: ['SwiftUI', 'Apple Foundation Models', 'SwiftData', 'iOS'],
    link: 'https://apps.apple.com/ca/app/checkme/id6771952878',
    icon: Heart,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'AI Email Reply Generator',
    description: 'A full-stack solution integrating Gemini API with Spring Boot backend and React frontend to generate AI-powered email replies. Includes a Chrome extension for seamless Gmail integration for your daily use.',
    image: '/projects/email.png',
    tags: ['React', 'Spring Boot', 'Gemini API'],
    link: 'https://chromewebstore.google.com/detail/email-writer-assitant/hoicdbjgabhafafplokoidcckmafbdmi',
    icon: Mail,
    gradient: 'from-indigo-500 to-purple-500',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-dark-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my latest work in AI, mobile development, and full-stack applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="group">
              <div className="gradient-border h-full overflow-hidden hover:glow transition-all duration-500 flex flex-col">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent" />
                  <div className={`absolute top-4 right-4 p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-5">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-auto pt-4 border-t border-white/10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{project.link.includes('apps.apple.com') ? 'View on App Store' : 'View on Chrome Store'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
