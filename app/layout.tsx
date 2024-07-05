import './globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from "@/lib/utils"
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-black text-white font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header/>
       {children}
       <Footer/>
      </body>
    </html>
  )
}
