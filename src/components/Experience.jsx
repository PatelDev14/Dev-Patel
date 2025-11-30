'use client'

import { Building2, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'CentralSquare Technologies',
    location: 'Florida, USA (Fully Remote)',
    period: 'August 2025 – Present',
    description: [
      'Contributing to the design, development, and testing of Property Tax software solutions for local government',
      'Writing, debugging, and maintaining code modules in .NET and web technologies',
      'Participating in Agile ceremonies (sprint planning, demos, retrospectives) and code reviews',
      'Working with C#, SQL Server, and REST APIs to deliver reliable features for municipal clients',
    ],
    current: true,
  },
  {
    title: 'Administrative Assistant',
    company: 'York University',
    location: 'North York, Ontario',
    period: 'December 2023 – August 2024',
    description: [
      'Conducted data classification, anomaly detection, and discrepancy resolution, improving data integrity by 25%',
      'Managed database entry, maintenance, and verification, ensuring 99% data accuracy',
      'Automated document scanning, archiving, and file management, optimizing retrieval time by 30%',
    ],
    current: false,
  },
  {
    title: 'Technical Advisor/Analyst II',
    company: '24/7 Intouch',
    location: 'Winnipeg, Manitoba',
    period: 'October 2020 – December 2021',
    description: [
      'Diagnosed and resolved 200+ technical issues with a 94% resolution rate',
      'Led training sessions and enhanced knowledge base, increasing first-contact resolution by 25%',
      'Provided technical support for Apple/iOS and Android devices with 95% issue resolution rate',
    ],
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.title + exp.company} className="relative md:pl-20">
                <div className="hidden md:flex absolute left-5 top-8 w-6 h-6 rounded-full bg-dark-100 border-2 border-indigo-500 items-center justify-center">
                  {exp.current && (
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  )}
                </div>

                <div className={`gradient-border p-6 ${exp.current ? 'glow' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        {exp.title}
                        {exp.current && (
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                            Current
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center gap-2 text-indigo-400 mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
