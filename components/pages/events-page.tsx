"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users, Wrench, Hammer, Settings } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="pt-16">
      {/* Under Construction Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Construction Icons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 relative"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              <Wrench className="w-20 h-20 text-[#5bbcff] mx-auto mb-4" />
            </motion.div>

            {/* Floating construction elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-0 left-1/4"
            >
              <Hammer className="w-12 h-12 text-[#9bd3ff] opacity-60" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-0 right-1/4"
            >
              <Settings className="w-14 h-14 text-[#5bbcff] opacity-40" />
            </motion.div>
          </motion.div>

          {/* ICT Club Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <Image
              src="/logo.png"
              alt="ICT Club Logo"
              width={120}
              height={120}
              className="mx-auto glow-border rounded-full"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 glow-text"
          >
            Under Construction
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-[#9bd3ff] mb-8 font-light"
          >
            We're building something amazing!
          </motion.p>

          {/* Description */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            <p className="mb-4">
              Our events page is currently being developed to bring you the best experience for discovering and
              participating in ICT Club activities.
            </p>
            <p>
              Soon you'll be able to explore upcoming workshops, competitions, seminars, and networking events all in
              one place.
            </p>
          </motion.div>

          {/* Coming Soon Features */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              { icon: Calendar, label: "Event Calendar", description: "Interactive calendar view" },
              { icon: Clock, label: "Live Updates", description: "Real-time event information" },
              { icon: MapPin, label: "Event Locations", description: "Detailed venue information" },
              { icon: Users, label: "Registration", description: "Easy event sign-up" },
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                className="card-glow rounded-xl p-6 text-center"
              >
                <feature.icon className="w-8 h-8 text-[#5bbcff] mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">{feature.label}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mb-8"
          >
            <div className="text-center mb-4">
              <span className="text-[#9bd3ff] font-semibold">Development Progress</span>
            </div>
            <div className="w-full max-w-md mx-auto bg-white/20 rounded-full h-3 relative overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-[#5bbcff] to-[#9bd3ff] h-3 rounded-full glow-border"
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                transition={{ duration: 2, delay: 1.7, ease: "easeOut" }}
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 3,
                  }}
                />
              </motion.div>
            </div>
            <div className="text-center mt-2">
              <span className="text-gray-400 text-sm">65% Complete</span>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/about"
              className="bg-[#5bbcff] hover:bg-[#4aa3e6] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button"
            >
              Learn About Us
            </a>
            <a
              href="mailto:ictkalika82@gmail.com?subject=Events Page Inquiry"
              className="border-2 border-[#9bd3ff] text-[#9bd3ff] hover:bg-[#9bd3ff] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button"
            >
              Get Notified
            </a>
          </motion.div>

          {/* Expected Launch */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm">
              Expected launch: <span className="text-[#9bd3ff] font-semibold">Coming Soon</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#5bbcff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#9bd3ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#5bbcff]/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}
