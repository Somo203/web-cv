import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'Sonam Zangmo | AI & Full-Stack Developer',
  description: 'Portfolio of Sonam Zangmo - AI Engineer, Full-Stack Developer, and UI/UX Designer from Bhutan. Building intelligent systems, modern web applications, and impactful digital experiences.',
  keywords: ['AI Engineer', 'Full-Stack Developer', 'Machine Learning', 'NLP', 'React', 'Next.js', 'Bhutan'],
  authors: [{ name: 'Sonam Zangmo' }],
  creator: 'Sonam Zangmo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sonam Zangmo | AI & Full-Stack Developer',
    description: 'Building intelligent systems, modern web applications, and impactful digital experiences.',
    siteName: 'Sonam Zangmo Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sonam Zangmo | AI & Full-Stack Developer',
    description: 'Building intelligent systems, modern web applications, and impactful digital experiences.',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      // Do NOT pass "dark" class — keep light always
      className="bg-white"
      style={{ backgroundColor: '#ffffff', colorScheme: 'light' }}
    >
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-white`}
        style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}