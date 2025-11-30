import './globals.css'

export const metadata = {
  title: 'Dev Patel | Software Developer',
  description: 'Portfolio of Dev Patel - Software Developer specializing in AI/ML, full-stack development, and mobile applications.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
