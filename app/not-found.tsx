"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5bbcff] to-[#9bd3ff] mb-4 glow-text">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best developers encounter 404s!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#5bbcff] hover:bg-[#4aa3e6] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button"
          >
            <Home className="mr-2" size={20} />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center border-2 border-[#9bd3ff] text-[#9bd3ff] hover:bg-[#9bd3ff] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button"
          >
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-gray-400 text-sm">
            If you believe this is an error, please contact{" "}
            <Link 
              href="mailto:nayan374@proton.me" 
              className="text-[#9bd3ff] hover:text-white transition-colors duration-300 underline"
            >
              Nayan Acharya
            </Link>
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-10 w-16 h-16 border-2 border-[#5bbcff]/30 rounded-full opacity-50"
        />
        
        <motion.div
          animate={{ 
            rotate: -360,
            y: [-10, 10, -10],
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 right-10 w-12 h-12 border-2 border-[#9bd3ff]/30 rounded-lg opacity-50"
        />
      </div>
    </div>
  )
}
