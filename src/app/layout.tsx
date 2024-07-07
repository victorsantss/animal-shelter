import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}