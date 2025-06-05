"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { X, Linkedin, Github, Twitter, Instagram, ExternalLink, Mail } from "lucide-react"

// Board of Directors (with images)
const boardMembers = [
  {
    name: "John Doe",
    position: "President",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Leading the club with passion for technology and innovation.",
    skills: ["Leadership", "Web Development", "Project Management"],
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  },
  {
    name: "Jane Smith",
    position: "Vice President",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Coordinating events and fostering collaboration among members.",
    skills: ["Event Management", "UI/UX Design", "Team Building"],
    social: {
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
  {
    name: "Mike Johnson",
    position: "Technical Lead",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Guiding technical projects and mentoring junior members.",
    skills: ["Full Stack Development", "DevOps", "Mentoring"],
    social: {
      linkedin: "https://linkedin.com/in/mikejohnson",
      github: "https://github.com/mikejohnson",
      website: "https://mikejohnson.dev",
    },
  },
  {
    name: "Sarah Wilson",
    position: "Secretary",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Managing communications and documentation for the club.",
    skills: ["Documentation", "Communication", "Organization"],
    social: {
      linkedin: "https://linkedin.com/in/sarahwilson",
      twitter: "https://twitter.com/sarahwilson",
      email: "sarah@ictkalika.com",
    },
  },
]

// Regular Members (names and socials only)
const members = [
  {
    name: "Alex Chen",
    position: "Marketing Head",
    social: {
      linkedin: "https://linkedin.com/in/alexchen",
      instagram: "https://instagram.com/alexchen",
      twitter: "https://twitter.com/alexchen",
    },
  },
  {
    name: "Priya Sharma",
    position: "Event Coordinator",
    social: {
      linkedin: "https://linkedin.com/in/priyasharma",
      github: "https://github.com/priyasharma",
      email: "priya@ictkalika.com",
    },
  },
  {
    name: "David Kumar",
    position: "Technical Mentor",
    social: {
      linkedin: "https://linkedin.com/in/davidkumar",
      github: "https://github.com/davidkumar",
      website: "https://davidkumar.tech",
    },
  },
  {
    name: "Lisa Patel",
    position: "Design Lead",
    social: {
      linkedin: "https://linkedin.com/in/lisapatel",
      behance: "https://behance.net/lisapatel",
      instagram: "https://instagram.com/lisapatel",
    },
  },
  {
    name: "Raj Thapa",
    position: "Content Creator",
    social: {
      linkedin: "https://linkedin.com/in/rajthapa",
      twitter: "https://twitter.com/rajthapa",
      instagram: "https://instagram.com/rajthapa",
    },
  },
  {
    name: "Maya Gurung",
    position: "Social Media Manager",
    social: {
      linkedin: "https://linkedin.com/in/mayagurung",
      instagram: "https://instagram.com/mayagurung",
      facebook: "https://facebook.com/mayagurung",
    },
  },
  {
    name: "Arjun Shrestha",
    position: "Workshop Coordinator",
    social: {
      linkedin: "https://linkedin.com/in/arjunshrestha",
      github: "https://github.com/arjunshrestha",
      email: "arjun@ictkalika.com",
    },
  },
  {
    name: "Sita Rai",
    position: "Public Relations",
    social: {
      linkedin: "https://linkedin.com/in/sitarai",
      twitter: "https://twitter.com/sitarai",
      email: "sita@ictkalika.com",
    },
  },
]

const alumni = [
  {
    name: "Alex Chen",
    position: "Software Engineer at Google",
    image: "/placeholder.svg?height=150&width=150",
    year: "2022",
  },
  {
    name: "Maria Garcia",
    position: "Product Manager at Microsoft",
    image: "/placeholder.svg?height=150&width=150",
    year: "2021",
  },
]

const advisers = [
  {
    name: "Dr. Robert Brown",
    position: "Computer Science Professor",
    image: "/placeholder.svg?height=150&width=150",
    expertise: "AI & Machine Learning",
  },
  {
    name: "Prof. Lisa Davis",
    position: "IT Department Head",
    image: "/placeholder.svg?height=150&width=150",
    expertise: "Cybersecurity & Networks",
  },
]

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<(typeof boardMembers)[0] | null>(null)
  const [activeTab, setActiveTab] = useState<"alumni" | "advisers">("alumni")

  const getSocialIcon = (platform: string, url: string) => {
    const iconProps = {
      size: 18,
      className: "text-[#9bd3ff] hover:text-white transition-colors duration-300",
    }

    switch (platform) {
      case "linkedin":
        return <Linkedin {...iconProps} />
      case "github":
        return <Github {...iconProps} />
      case "twitter":
        return <Twitter {...iconProps} />
      case "instagram":
        return <Instagram {...iconProps} />
      case "website":
      case "behance":
      case "facebook":
        return <ExternalLink {...iconProps} />
      case "email":
        return <Mail {...iconProps} />
      default:
        return <ExternalLink {...iconProps} />
    }
  }

  return (
    <div className="pt-16">
      {/* About Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-8 glow-text"
          >
            About Us
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              The ICT Club of ICT Kalika is a vibrant community of technology enthusiasts, innovators, and future
              leaders. Established in 2079, we have been at the forefront of technological advancement in our
              institution.
            </p>
            <p>
              Our mission is to foster innovation, inspire creativity, and create a lasting impact through technology.
              We provide a platform for students to explore, learn, and excel in various fields of Information and
              Communication Technology.
            </p>
            <p>
              From organizing workshops and seminars to participating in competitions and developing real-world
              projects, we are committed to bridging the gap between theoretical knowledge and practical application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16 glow-text"
          >
            Board of Directors
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow rounded-xl p-6 text-center cursor-pointer transition-all duration-300 group relative"
                onClick={() => setSelectedMember(member)}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="w-24 h-24 rounded-full mx-auto mb-4 glow-border"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#9bd3ff] font-medium mb-4">{member.position}</p>

                {/* Social Links on Hover */}
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4 mb-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={platform === "email" ? `mailto:${url}` : url}
                        target={platform === "email" ? undefined : "_blank"}
                        rel={platform === "email" ? undefined : "noopener noreferrer"}
                        className="transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {getSocialIcon(platform, url)}
                      </a>
                    ))}
                  </div>
                  <p className="text-white text-sm font-medium">Click for details</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16 glow-text"
          >
            Members
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="card-glow rounded-xl p-6 text-center transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#9bd3ff] text-sm font-medium mb-4">{member.position}</p>

                <div className="flex justify-center space-x-3">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={platform === "email" ? `mailto:${url}` : url}
                      target={platform === "email" ? undefined : "_blank"}
                      rel={platform === "email" ? undefined : "noopener noreferrer"}
                      className="transition-colors duration-300 hover:scale-110"
                    >
                      {getSocialIcon(platform, url)}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni & Advisers Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16 glow-text"
          >
            Alumni & Advisers
          </motion.h2>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="card-glow rounded-full p-1">
              <button
                onClick={() => setActiveTab("alumni")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "alumni" ? "bg-[#5bbcff] text-white glow-button" : "text-gray-300 hover:text-white"
                }`}
              >
                Alumni
              </button>
              <button
                onClick={() => setActiveTab("advisers")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "advisers" ? "bg-[#5bbcff] text-white glow-button" : "text-gray-300 hover:text-white"
                }`}
              >
                Advisers
              </button>
            </div>
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(activeTab === "alumni" ? alumni : advisers).map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow rounded-xl p-6 text-center transition-all duration-300"
              >
                <Image
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full mx-auto mb-4 glow-border"
                />
                <h3 className="text-lg font-bold text-white mb-2">{person.name}</h3>
                <p className="text-[#9bd3ff] text-sm mb-2">{person.position}</p>
                {"year" in person && <p className="text-gray-400 text-sm">Class of {person.year}</p>}
                {"expertise" in person && <p className="text-gray-400 text-sm">{person.expertise}</p>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Member Modal */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="card-glow rounded-xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <Image
                src={selectedMember.image || "/placeholder.svg"}
                alt={selectedMember.name}
                width={150}
                height={150}
                className="w-32 h-32 rounded-full mx-auto mb-6 glow-border"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{selectedMember.name}</h3>
              <p className="text-[#9bd3ff] font-medium mb-4">{selectedMember.position}</p>
              <p className="text-gray-300 mb-6">{selectedMember.bio}</p>

              <div>
                <h4 className="text-white font-semibold mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {selectedMember.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#5bbcff]/20 text-[#9bd3ff] px-3 py-1 rounded-full text-sm border border-[#5bbcff]/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
