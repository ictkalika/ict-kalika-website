// SEO Configuration for ICT Club of Kalika
// This file contains reusable SEO configurations and structured data

export const siteConfig = {
  name: "ICT Club of Kalika",
  description: "Innovate • Educate • Inspire\nFounded in 2022 at Kalika Manavgyan Secondary School, ICT Club of Kalika is a vibrant community of students passionate about technology. We empower youth through hands-on workshops, tech projects, and collaborative events—promoting digital literacy, coding, robotics, and ICT innovations. Join us to explore cutting-edge tech, build real-world skills, and make a meaningful impact in our school and community.",
  url: "https://ictkalika.tech",
  ogImage: "/images/logo.png",
  links: {
    twitter: "https://twitter.com/ictkalika",
    github: "https://github.com/ictkalika",
    linkedin: "https://linkedin.com/company/ictkalika",
    facebook: "https://facebook.com/ictkalika",
  },
  keywords: [
    "ICT Club Kalika",
    "Kalika Manavgyan Secondary School",
    "Student Technology Club",
    "Digital Literacy Nepal",
    "Coding Workshop",
    "Robotics Club",
    "Programming Community",
    "Tech Projects Nepal",
    "Student ICT Innovation",
    "Technology Education",
    "Youth Tech Community",
    "School Technology Club"
  ]
}

export const organizationSchema = {
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
}

export const generatePageMetadata = (params: {
  title: string
  description: string
  path: string
  keywords?: string
  image?: string
}) => {
  return {
    title: params.title,
    description: params.description,
    keywords: params.keywords || siteConfig.keywords.join(", "),
    openGraph: {
      title: params.title,
      description: params.description,
      url: `${siteConfig.url}${params.path}`,
      type: "website" as const,
      images: [
        {
          url: params.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: params.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: params.title,
      description: params.description,
    },
    alternates: {
      canonical: `${siteConfig.url}${params.path}`,
    },
  }
}
