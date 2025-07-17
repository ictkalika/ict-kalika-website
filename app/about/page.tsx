import AboutPage from "@/components/pages/about-page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - ICT Club of Kalika",
  description: "Learn about ICT Club of Kalika's mission to foster technological innovation and digital literacy in Nepal. Discover our vision, values, and commitment to shaping the future through technology education and community building.",
  keywords: "ICT Club Kalika About, Technology Education Nepal, Digital Innovation Mission, Tech Community Vision, Programming Education, ICT Club History, Technology Organization Nepal",
  openGraph: {
    title: "About ICT Club of Kalika - Our Mission & Vision",
    description: "Discover ICT Club of Kalika's mission to foster technological innovation and digital literacy in Nepal through education and community building.",
    url: "https://ictkalika.tech/about",
    type: "website",
    images: [
      {
        url: "/images/ictkalikaabout.png",
        width: 1200,
        height: 630,
        alt: "About ICT Club of Kalika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ICT Club of Kalika - Our Mission & Vision",
    description: "Discover our mission to foster technological innovation and digital literacy in Nepal.",
  },
  alternates: {
    canonical: "https://ictkalika.tech/about",
  },
}

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "ICT Club of Kalika",
              "description": "A premier technology innovation hub in Nepal dedicated to fostering digital literacy, organizing tech events, and connecting passionate technologists.",
              "url": "https://ictkalika.tech",
              "logo": "https://ictkalika.tech/images/ictkalika-logo.png",
              "mission": "To foster technological innovation and digital literacy in Nepal",
              "vision": "To be the leading technology community that shapes Nepal's digital future",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Nepal",
                "addressLocality": "Kalika"
              },
              "knowsAbout": [
                "Technology Education",
                "Digital Innovation",
                "Programming",
                "Web Development",
                "Community Building"
              ]
            }
          })
        }}
      />
      <AboutPage />
    </>
  )
}
