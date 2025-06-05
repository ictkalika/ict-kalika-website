"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ExternalLink, Mail } from "lucide-react"

const partners = [
  {
    name: "TechCorp Solutions",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Leading software development company providing internship opportunities",
    website: "https://techcorp.com",
    partnership: "Internship Program",
  },
  {
    name: "InnovateLab",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Innovation hub supporting student projects and startups",
    website: "https://innovatelab.com",
    partnership: "Project Mentorship",
  },
  {
    name: "DataFlow Systems",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Data analytics company offering workshops and training",
    website: "https://dataflow.com",
    partnership: "Training Workshops",
  },
  {
    name: "CloudTech Inc",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Cloud computing services and infrastructure provider",
    website: "https://cloudtech.com",
    partnership: "Infrastructure Support",
  },
  {
    name: "AI Dynamics",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Artificial intelligence research and development company",
    website: "https://aidynamics.com",
    partnership: "Research Collaboration",
  },
  {
    name: "CyberGuard Security",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Cybersecurity firm providing security training and resources",
    website: "https://cyberguard.com",
    partnership: "Security Training",
  },
  {
    name: "WebCraft Studio",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Web design and development agency supporting student projects",
    website: "https://webcraft.com",
    partnership: "Design Mentorship",
  },
  {
    name: "FutureTech Ventures",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Venture capital firm investing in student-led tech startups",
    website: "https://futuretech.com",
    partnership: "Startup Funding",
  },
]

export default function PartnersPage() {
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-8 glow-text"
          >
            Our Partners
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            We collaborate with industry leaders to provide our members with real-world experience, mentorship
            opportunities, and cutting-edge resources.
          </motion.p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow rounded-xl p-6 text-center transition-all duration-300 group relative overflow-hidden"
                onMouseEnter={() => setHoveredPartner(partner.name)}
                onMouseLeave={() => setHoveredPartner(null)}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative z-10">
                  <div className="bg-white/10 rounded-lg p-4 mb-4 mx-auto w-fit">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={60}
                      className="h-12 w-auto object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>

                  <div className="text-sm text-[#9bd3ff] mb-3 font-medium">{partner.partnership}</div>

                  {hoveredPartner === partner.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center z-20"
                    >
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{partner.description}</p>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center text-[#9bd3ff] hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Visit Website
                      </a>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text">Partnership Benefits</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our partnerships provide valuable opportunities for both our members and partner organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Internship Opportunities",
                description: "Direct access to internship programs with leading tech companies",
                icon: "💼",
              },
              {
                title: "Mentorship Programs",
                description: "One-on-one guidance from industry professionals and experts",
                icon: "👥",
              },
              {
                title: "Workshop & Training",
                description: "Exclusive workshops and training sessions on cutting-edge technologies",
                icon: "🎓",
              },
              {
                title: "Project Collaboration",
                description: "Real-world project opportunities with partner organizations",
                icon: "🚀",
              },
              {
                title: "Career Guidance",
                description: "Career counseling and job placement assistance",
                icon: "📈",
              },
              {
                title: "Resource Access",
                description: "Access to premium tools, software, and development resources",
                icon: "🛠️",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow rounded-xl p-6 text-center transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="card-glow rounded-xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 glow-text">Become Our Partner</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our network of industry partners and help shape the next generation of tech professionals. Together,
              we can create meaningful opportunities and drive innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ictkalika82@gmail.com?subject=Partnership Inquiry"
                className="bg-[#5bbcff] hover:bg-[#4aa3e6] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Contact Us
              </a>
              <a
                href="/about"
                className="border-2 border-[#9bd3ff] text-[#9bd3ff] hover:bg-[#9bd3ff] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
