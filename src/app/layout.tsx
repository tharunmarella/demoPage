import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Tellora',
    default: 'Tellora - The AI Assistant That Actually Does Things',
  },
  description:
    "Tellora doesn't just understand you — it takes action. While other assistants stop at answers, Tellora makes calls, books appointments, and handles real tasks for you.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-black antialiased', inter.variable)}>
      <body className="bg-black">{children}</body>
    </html>
  )
}
