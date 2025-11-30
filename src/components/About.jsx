'use client'
import { GraduationCap, MapPin, Briefcase, Sparkles, Code2, BrainCircuit } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Optional background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="section-heading text-4xl lg:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Turning ideas into intelligent, scalable products — one line of code at a time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Avatar + Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Clean & Premium Avatar – No badge */}
            <div className="relative group mb-12">
              {/* Epic glowing halo on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000" />

              {/* Photo card */}
              <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-gray-800">
                  <Image
                    src="/projects/dev.jpeg"
                    alt="Dev Patel"
                    width={384}
                    height={384}
                    className="object-cover transition-all duration-700 grayscale hover:grayscale-0"
                    priority
                  />
                  {/* Subtle dark gradient overlay (makes text pop if you ever add any) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="mt-10 grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="glass p-5 rounded-2xl border border-white/10">
                <MapPin className="w-5 h-5 text-indigo-400 mb-2" />
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">Toronto, Canada</p>
              </div>
              <div className="glass p-5 rounded-2xl border border-white/10">
                <Briefcase className="w-5 h-5 text-indigo-400 mb-2" />
                <p className="text-sm text-gray-400">Status</p>
                <p className="font-medium">Computer Science Graduate</p>
              </div>
            </div>
          
          </motion.div>

          {/* Right: Bio + Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Software Developer & AI Enthusiast
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a Computer Science graduate from York University with a deep passion for building intelligent, full-stack applications that solve real-world problems.
              </p>
              <p className="text-gray-300 mt-4 leading-relaxed text-lg">
                Currently interning at <span className="text-indigo-400 font-medium">CentralSquare Technologies</span>, where I design and develop enterprise Property Tax software used by local governments across North America.
              </p>
              <p className="text-gray-300 mt-4 leading-relaxed text-lg">
                I love blending modern web frameworks with AI/ML to create smart, fast, beautiful experiences — from AI email generators to mobile apps with semantic search.
              </p>
            </div>

            {/* Education Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="gradient-border p-1 rounded-2xl"
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 rounded-2xl">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">York University</h4>
                    <p className="text-indigo-400 font-medium">B.Sc. Computer Science (Honors)</p>
                    <p className="text-gray-400 text-sm mt-1">September 2022 – September 2025</p>
                    <div className="flex gap-2 mt-3">
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
