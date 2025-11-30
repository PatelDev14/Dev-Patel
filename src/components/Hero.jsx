'use client'

import { Github, Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-indigo-400 border border-indigo-500/30">
              Software Developer Intern @ CentralSquare Technologies
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Hi, I'm{' '}
            <span className="gradient-text">Dev Patel</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Building intelligent solutions with AI/ML, crafting seamless mobile experiences, 
            and developing scalable full-stack applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-indigo-500/50 text-white font-medium hover:bg-indigo-500/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {[
              { icon: Github, href: 'https://github.com/PatelDev14', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/devpatel7', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://x.com/patel_dev7', label: 'Twitter' },
              { icon: Mail, href: 'mailto:devp1400@gmail.com', label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-indigo-500/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors animate-bounce-slow"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
