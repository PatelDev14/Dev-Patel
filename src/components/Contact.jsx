'use client';
import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { sendEmail } from '../app/sendEmail'; // Adjust path if your file is elsewhere

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a chat about technology and innovation.
            </p>
            <div className="space-y-6 mb-8">
              <a
                href="mailto:devp1400@gmail.com"
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-3 rounded-lg glass group-hover:bg-indigo-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white">devp1400@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="p-3 rounded-lg glass">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white">Toronto, Canada</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/PatelDev14', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/devpatel7', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://x.com/patel_dev7', label: 'Twitter' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass hover:bg-indigo-500/20 hover:scale-105 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="gradient-border p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <span>Sending...</span>
                  ) : status === 'success' ? (
                    <span>Message Sent!</span>
                  ) : status === 'error' ? (
                    <span>Failed to Send - Try Again</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}