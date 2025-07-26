"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 bg-black/30 backdrop-blur-md border-t border-white/10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4 glow-text">ICT Club of Kalika</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Innovating the future through technology. Join us in our mission to inspire and impact the world through
              ICT.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 glow-text">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-[#9bd3ff]" />
                <span className="text-sm">ictkalika82@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} className="text-[#9bd3ff]" />
                <span className="text-sm">Butwal, Nepal</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} className="text-[#9bd3ff]" />
                <span className="text-sm">+9779748703502</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 glow-text">Quick Links</h3>
            <div className="space-y-2">
              {["About Us", "Events", "FAQs", "Partners"].map((link) => (
                <div key={link}>
                  <a href="#" className="text-gray-300 hover:text-[#9bd3ff] text-sm transition-colors duration-300">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm">© 2025 ICT Club of K.M.G.S.S. All rights reserved. | Est. 2079</p>
          </div>
          
          {/* Development Team Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Lead Developers */}
            <div className="text-center">
              <h4 className="text-white font-semibold text-sm mb-3 glow-text">Lead Developers</h4>
              <div className="flex justify-center space-x-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5bbcff] to-[#9bd3ff] rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-black font-bold text-sm">N</span>
                  </div>
                  <p className="text-gray-300 text-xs font-medium">NAYAN</p>
                  <p className="text-gray-500 text-xs">Full Stack</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5bbcff] to-[#9bd3ff] rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-black font-bold text-sm">N</span>
                  </div>
                  <p className="text-gray-300 text-xs font-medium">NARAYAN</p>
                  <p className="text-gray-500 text-xs">Full Stack</p>
                </div>
              </div>
            </div>

            {/* Contributors */}
            <div className="text-center">
              <h4 className="text-white font-semibold text-sm mb-3 glow-text">Contributors</h4>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-1">
                    <span className="text-white font-bold text-xs">S</span>
                  </div>
                  <p className="text-gray-400 text-xs">Shasank</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-1">
                    <span className="text-white font-bold text-xs">A</span>
                  </div>
                  <p className="text-gray-400 text-xs">Anshu</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-1">
                    <span className="text-white font-bold text-xs">H</span>
                  </div>
                  <p className="text-gray-400 text-xs">Himanshu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Thank you message */}
          <div className="text-center mt-6 pt-4 border-t border-white/5">
            <p className="text-gray-500 text-xs">
              💙 Crafted with passion for the ICT Club community
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
