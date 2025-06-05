"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Users, X, ChevronLeft, ChevronRight } from "lucide-react"

const slideshowImages = [
  {
    src: "/placeholder.svg?height=600&width=1200",
    title: "Annual Tech Fest 2024",
    description: "Our biggest event of the year featuring competitions, workshops, and tech exhibitions",
  },
  {
    src: "/placeholder.svg?height=600&width=1200",
    title: "AI Workshop Series",
    description: "Comprehensive workshop series on artificial intelligence and machine learning",
  },
  {
    src: "/placeholder.svg?height=600&width=1200",
    title: "Coding Bootcamp",
    description: "Intensive coding bootcamp for beginners and intermediate programmers",
  },
]

const events = [
  {
    id: 1,
    title: "Web Development Workshop",
    date: "2024-02-15",
    location: "Computer Lab A",
    participants: 45,
    image: "/placeholder.svg?height=300&width=400",
    description: "Learn modern web development with React, Node.js, and MongoDB",
    details:
      "This comprehensive workshop covers the fundamentals of modern web development. Participants will learn to build full-stack applications using React for the frontend, Node.js for the backend, and MongoDB for database management.",
    highlights: [
      "Hands-on coding experience",
      "Industry best practices",
      "Project-based learning",
      "Certificate of completion",
    ],
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    id: 2,
    title: "AI & Machine Learning Seminar",
    date: "2024-02-20",
    location: "Main Auditorium",
    participants: 120,
    image: "/placeholder.svg?height=300&width=400",
    description: "Exploring the future of artificial intelligence and its applications",
    details:
      "Join us for an enlightening seminar on the latest developments in AI and ML. Industry experts will share insights on current trends, practical applications, and future possibilities in artificial intelligence.",
    highlights: ["Expert speakers from industry", "Live demonstrations", "Q&A sessions", "Networking opportunities"],
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    id: 3,
    title: "Coding Competition 2024",
    date: "2024-02-25",
    location: "Multiple Labs",
    participants: 80,
    image: "/placeholder.svg?height=300&width=400",
    description: "Annual programming contest with exciting prizes and challenges",
    details:
      "Test your programming skills in our annual coding competition. Participants will face challenging algorithmic problems and compete for exciting prizes while showcasing their problem-solving abilities.",
    highlights: [
      "Cash prizes for winners",
      "Multiple difficulty levels",
      "Team and individual categories",
      "Recognition certificates",
    ],
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    id: 4,
    title: "Cybersecurity Workshop",
    date: "2024-03-05",
    location: "Security Lab",
    participants: 35,
    image: "/placeholder.svg?height=300&width=400",
    description: "Learn about cybersecurity fundamentals and ethical hacking",
    details:
      "Discover the world of cybersecurity through hands-on exercises and real-world scenarios. Learn about network security, ethical hacking techniques, and how to protect digital assets.",
    highlights: [
      "Ethical hacking demonstrations",
      "Security tools training",
      "Real-world case studies",
      "Career guidance",
    ],
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
]

export default function EventsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)
  }

  const nextGalleryImage = () => {
    if (selectedEvent) {
      setCurrentGalleryImage((prev) => (prev + 1) % selectedEvent.gallery.length)
    }
  }

  const prevGalleryImage = () => {
    if (selectedEvent) {
      setCurrentGalleryImage((prev) => (prev - 1 + selectedEvent.gallery.length) % selectedEvent.gallery.length)
    }
  }

  return (
    <div className="pt-16">
      {/* Slideshow Section */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={slideshowImages[currentSlide].src || "/placeholder.svg"}
              alt={slideshowImages[currentSlide].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Slideshow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 glow-button"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 glow-button"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slideshow Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.div
            key={currentSlide}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 glow-text">
              {slideshowImages[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">{slideshowImages[currentSlide].description}</p>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#9bd3ff] glow-border" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Events Carousel Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text">Upcoming Events</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us for exciting events, workshops, and competitions throughout the year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group"
                onClick={() => {
                  setSelectedEvent(event)
                  setCurrentGalleryImage(0)
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{event.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-[#9bd3ff]">
                      <Calendar size={16} className="mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-[#9bd3ff]">
                      <MapPin size={16} className="mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-[#9bd3ff]">
                      <Users size={16} className="mr-2" />
                      {event.participants} participants
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="card-glow rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Event Details */}
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4 glow-text">{selectedEvent.title}</h2>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-[#9bd3ff]">
                        <Calendar size={18} className="mr-3" />
                        {new Date(selectedEvent.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-[#9bd3ff]">
                        <MapPin size={18} className="mr-3" />
                        {selectedEvent.location}
                      </div>
                      <div className="flex items-center text-[#9bd3ff]">
                        <Users size={18} className="mr-3" />
                        {selectedEvent.participants} participants
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{selectedEvent.details}</p>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Key Highlights</h3>
                      <ul className="space-y-2">
                        {selectedEvent.highlights.map((highlight, index) => (
                          <li key={index} className="text-gray-300 flex items-start">
                            <span className="text-[#9bd3ff] mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Event Gallery</h3>
                    <div className="relative">
                      <Image
                        src={selectedEvent.gallery[currentGalleryImage] || "/placeholder.svg"}
                        alt={`${selectedEvent.title} gallery ${currentGalleryImage + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover rounded-lg glow-border"
                      />

                      {selectedEvent.gallery.length > 1 && (
                        <>
                          <button
                            onClick={prevGalleryImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button
                            onClick={nextGalleryImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </>
                      )}
                    </div>

                    {selectedEvent.gallery.length > 1 && (
                      <div className="flex justify-center mt-4 space-x-2">
                        {selectedEvent.gallery.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentGalleryImage(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentGalleryImage ? "bg-[#9bd3ff]" : "bg-white/30"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
