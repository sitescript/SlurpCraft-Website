import type React from "react"
import { Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SlurpCraft - Minecraft Modpack",
  description: "A carefully curated Minecraft modpack for version 1.20-1.20.1 Forge",
  icons: {
    icon: "https://cdn.nest.rip/uploads/2bbb2003-d370-4355-a7c8-71e0c922e0b9.png",
    shortcut: "https://cdn.nest.rip/uploads/2bbb2003-d370-4355-a7c8-71e0c922e0b9.png",
    apple: "https://cdn.nest.rip/uploads/2bbb2003-d370-4355-a7c8-71e0c922e0b9.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="slurpcraft-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
