import type React from "react"
import ClientLayout from "./clientLayout"
import './globals.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
}

export const metadata = {
  title: 'ICT Club of Kalika',
  description: 'Innovating the future through technology. Join us in our mission to inspire and impact the world through ICT.',
  keywords: 'ICT Club, Kalika, Technology, Innovation, Education, Nepal',
  
  authors: [{ name: 'Nayan Acharya & Narayan'}],
  metadataBase: new URL('https://ictkalika.tech'),
  other: {
    'google-adsense-account': 'ca-pub-7528456570041321',
  },
  openGraph: {
    title: 'ICT Club of Kalika',
    description: 'Innovating the future through technology. Join us in our mission to inspire and impact the world through ICT.',
    url: 'https://ictkalika.tech',
    siteName: 'ICT Club of Kalika',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'ICT Club of Kalika Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICT Club of Kalika',
    description: 'Innovating the future through technology. Join us in our mission to inspire and impact the world through ICT.',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: '/logo.png', type: 'image/png' },
    shortcut: { url: '/logo.png', type: 'image/png' },
  },
 
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: false,
    noimageindex: false,
    noindex: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
