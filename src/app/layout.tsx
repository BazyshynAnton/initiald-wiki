import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"

import { Roboto } from "next/font/google"

import type { Metadata } from "next"

import "@/styles/globals.scss"

const roboto = Roboto({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Initial D | Wiki",
  description: "",
  icons: {
    icon: ["pictures/favicon/favicon.ico?v=4"],
    apple: ["pictures/favicon/apple-touch-icon.png?v=4"],
    shortcut: ["pictures/favicon/apple-touch-icon.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
