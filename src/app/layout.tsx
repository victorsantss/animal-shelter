import { Inter, Dancing_Script } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Metadata } from 'next'

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const fontDancing = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing',
})

export const metadata: Metadata = {
  title: 'Patas e Focinhos',
}

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontBody.variable,
          fontDancing.variable,
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}