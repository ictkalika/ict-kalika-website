import HomePage from "@/components/pages/home-page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'ICT Club of Kalika - Student led IT Club',
  description: 'Innovate • Educate • Inspire. Founded in 2022 at Kalika Manavgyan Secondary School, ICT Club of Kalika is a vibrant community of students passionate about technology. Join us to explore cutting-edge tech, build real-world skills, and make a meaningful impact in our school and community.',
  keywords: 'ICT Club Kalika, Kalika Manavgyan Secondary School, Student Technology Club, Digital Literacy Nepal, Coding Workshop, Robotics Club, Programming Community, Youth Tech Innovation',
  openGraph: {
    title: 'ICT Club of Kalika - Student led IT Club',
    description: 'Founded in 2022 at Kalika Manavgyan Secondary School, ICT Club of Kalika is a vibrant community of students passionate about technology promoting digital literacy and innovation.',
    url: 'https://ictkalika.tech',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'ICT Club of Kalika - Student led IT Club',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICT Club of Kalika - Student led IT Club',
    description: 'Founded in 2022 at Kalika Manavgyan Secondary School, vibrant community of students passionate about technology promoting digital literacy and innovation.',
  },
  alternates: {
    canonical: 'https://ictkalika.tech',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ICT Club of Kalika",
            "description": "Founded in 2022 at Kalika Manavgyan Secondary School, ICT Club of Kalika is a vibrant community of students passionate about technology. We empower youth through hands-on workshops, tech projects, and collaborative events—promoting digital literacy, coding, robotics, and ICT innovations.",
            "url": "https://ictkalika.tech",
            "logo": "https://ictkalika.tech/images/logo.png",
            "foundingDate": "2022",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Nepal",
              "addressLocality": "Kalika"
            },
            "parentOrganization": {
              "@type": "EducationalOrganization",
              "name": "Kalika Manavgyan Secondary School"
            },
            "sameAs": [
              "https://linkedin.com/company/ictkalika",
              "https://twitter.com/ictkalika",
              "https://facebook.com/ictkalika"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "General Inquiry",
              "email": "contact@ictkalika.tech"
            },
            "areaServed": "Nepal",
            "knowsAbout": [
              "Information Technology",
              "Digital Literacy",
              "Programming",
              "Robotics",
              "Web Development",
              "Technology Education",
              "Coding Workshops",
              "ICT Innovations"
            ]
          })
        }}
      />
      <HomePage />
    </>
  )
}
