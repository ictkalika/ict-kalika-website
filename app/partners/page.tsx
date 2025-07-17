import PartnersPage from "@/components/pages/partners-page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Partners - ICT Club of Kalika",
  description: "Explore ICT Club of Kalika's strategic partnerships with leading technology companies, educational institutions, and innovation hubs. Join our network of collaborators driving technological advancement in Nepal.",
  keywords: "ICT Club Partners, Technology Partnerships Nepal, Corporate Collaboration, Educational Partners, Innovation Network, Tech Industry Nepal, Strategic Alliances, Business Partners",
  openGraph: {
    title: "Partners & Collaborations - ICT Club of Kalika",
    description: "Discover our strategic partnerships with leading technology companies and educational institutions driving innovation in Nepal.",
    url: "https://ictkalika.tech/partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners & Collaborations - ICT Club of Kalika",
    description: "Discover our strategic partnerships driving technological innovation in Nepal.",
  },
  alternates: {
    canonical: "https://ictkalika.tech/partners",
  },
}

export default function Partners() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "ICT Club of Kalika Partners",
            "description": "Strategic partnerships and collaborations with technology companies and educational institutions",
            "url": "https://ictkalika.tech/partners",
            "mainEntity": {
              "@type": "Organization",
              "name": "ICT Club of Kalika",
              "url": "https://ictkalika.tech"
            }
          })
        }}
      />
      <PartnersPage />
    </>
  )
}
