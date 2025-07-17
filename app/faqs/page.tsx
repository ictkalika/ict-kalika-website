import FAQsPage from "@/components/pages/faqs-page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQs - ICT Club of Kalika",
  description: "Find answers to frequently asked questions about ICT Club of Kalika. Learn about membership, events, workshops, partnerships, and how to get involved with Nepal's premier technology community.",
  keywords: "ICT Club FAQs, Technology Club Questions, Membership Information, Event Registration, Workshop Details, Partnership Inquiries, Nepal Tech Community",
  openGraph: {
    title: "Frequently Asked Questions - ICT Club of Kalika",
    description: "Get answers to common questions about ICT Club of Kalika membership, events, and how to join Nepal's premier tech community.",
    url: "https://ictkalika.tech/faqs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs - ICT Club of Kalika",
    description: "Get answers to common questions about membership, events, and joining our tech community.",
  },
  alternates: {
    canonical: "https://ictkalika.tech/faqs",
  },
}

export default function FAQs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "ICT Club of Kalika - Frequently Asked Questions",
            "description": "Frequently asked questions about ICT Club of Kalika, membership, events, and activities",
            "url": "https://ictkalika.tech/faqs",
            "publisher": {
              "@type": "Organization",
              "name": "ICT Club of Kalika",
              "url": "https://ictkalika.tech"
            }
          })
        }}
      />
      <FAQsPage />
    </>
  )
}
