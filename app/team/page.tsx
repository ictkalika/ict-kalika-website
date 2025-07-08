import TeamPage from "@/components/pages/team-page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team - ICT Club of Kalika",
  description: "Meet the passionate team members of ICT Club of Kalika, led by talented individuals driving innovation and excellence in technology.",
  keywords: "ICT Kalika team,ICT KALIKA, ICT CLUB OF KALIKA,  Nayan Acharya, Kalika team members, technology leaders, Nepal ICT",
  other: {
    'structured-data': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "NAYAN ACHARYA",
      "jobTitle": "IT Head",
      "description": "IT Head at ICT Club of Kalika, overseeing technical projects and infrastructure with expertise in System Administration, DevOps, and Technical Leadership.",
      "affiliation": {
        "@type": "Organization",
        "name": "ICT CLUB OF KALIKA",
        "url": "https://ictkalika.tech"
      },
      "url": "https://ictkalika.tech/team",
      "email": "nayan@nayanacharya.xyz",
      "sameAs": [
        "https://linkedin.com/in/nayan135",
        "https://twitter.com/nooneknows135",
        "https://nayanacharya.xyz"
      ],
      "image": "https://ictkalika.tech/images/nayan-acharya.jpg",
      "knowsAbout": [
        "System Administration",
        "DevOps",
        "Technical Leadership",
        "Web Development",
        "Cloud Infrastructure"
      ],
      "alumniOf": "ICT Kalika",
      "worksFor": {
        "@type": "Organization",
        "name": "ICT CLUB OF KALIKA"
      }
    })
  }
}

export default function Team() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "NAYAN ACHARYA",
            "jobTitle": "IT Head",
            "description": "IT Head at ICT Club of Kalika, overseeing technical projects and infrastructure with expertise in System Administration, WEB Infrastructure, and Technical Leadership.",
            "affiliation": {
              "@type": "Organization",
              "name": "ICT CLUB OF KALIKA",
              "url": "https://ictkalika.tech"
            },
            "url": "https://ictkalika.tech/team",
            "email": "nayan@nayanacharya.xyz",
            "sameAs": [
              "https://linkedin.com/in/nayan135",
              "https://twitter.com/nooneknows135",
              "https://nayanacharya.xyz"
            ],
            "image": "https://ictkalika.tech/images/nayan-acharya.jpg",
            "knowsAbout": [
              "System Administration",
              "Technical Leadership",
              "Web Development",
              "WEB Infrastructure"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "ICT CLUB OF KALIKA"
            }
          })
        }}
      />
      <TeamPage />
    </>
  )
}
