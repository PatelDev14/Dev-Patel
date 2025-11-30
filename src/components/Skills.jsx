'use client'
import { Layers } from 'lucide-react'

import { Code, Brain, Cloud, Wrench, Users } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['JavaScript', 'Python', 'Java', 'C', 'SQL', 'ReactJS', 'NodeJS', 'Spring Boot', 'Swift', 'Dart'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'NLP', 'LLMs', 'OpenAI API', 'Gemini API'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Cloud & Data',
    icon: Cloud,
    skills: ['Microsoft Azure', 'AWS', 'Firebase', 'ETL', 'Data Analytics', 'PostgreSQL', 'SQL Server'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: ['Git', 'REST APIs', 'VS Code', 'Docker', 'Xcode', 'Android Studio', 'Google Colab', 'Jupyter'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Problem-solving', 'Team Collaboration', 'Communication', 'Leadership', 'Project Management'],
    color: 'from-orange-500 to-yellow-500',
  },
  {
  title: 'Frameworks & Platforms',
  icon: Layers,   // ← import this from lucide-react
  skills: ['Next.js', 'React Native', 'Flutter', 'Tailwind', 'Redux', 'Express', 'Spring MVC', 'FastAPI'],
  color: 'from-pink-500 to-rose-500',
},
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-dark-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, intelligent applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="gradient-border p-6 hover:glow transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
