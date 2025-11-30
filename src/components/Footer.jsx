'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Dev Patel 
          </p>
          
          <p className="text-gray-600 text-sm">
            Software Developer | AI Enthusiast
          </p>
        </div>
      </div>
    </footer>
  )
}
