"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

const footerLinks = {
  destinations: [
    "Popular Destinations",
    "Europe Tours",
    "Asia Adventures",
    "Beach Getaways",
    "City Breaks",
    "Luxury Resorts",
  ],
  company: ["About Us", "Our Story", "Careers", "Press", "Blog", "Partnerships"],
  support: ["Help Center", "Contact Us", "Booking Help", "Cancellation", "Travel Insurance", "Safety Guidelines"],
  legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy", "Travel Terms", "Accessibility"],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]


const date = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-zinc-950 rounded-tl-2xl rounded-tr-2xl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">

              <span className="text-4xl font-bold text-white ">
                often
              </span>
            </div>

            <p className="text-white mb-6 leading-relaxed">
              Creating unforgettable travel experiences with luxury accommodations and personalized service. Your
              journey to extraordinary begins here.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">123 ABC Street, ABC City, AC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">+91 12345 67890 </span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">hello@often.com</span>
              </div>
            </div>


            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 p-2 rounded-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>


          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 capitalize text-white">
                {category === "destinations" ? "Destinations" : category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white hover:text-blue-400 transition-colors duration-200 text-sm hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white">
                Get the latest travel deals and destination guides delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6">
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <Separator className="bg-gray-800" />


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            &copy; {date} often. All rights reserved. | Crafted by <motion.span
              animate={{
                y: [0, -10, 0], 
                transition: {
                  duration: 2,      
                  ease: "easeInOut", 
                  repeat: Infinity,   
                  repeatType: "loop", 
                },
              }}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent"><a href="https://github.com/KoderKalash">&lt;Kalash/&gt;</a></motion.span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Cookies
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
