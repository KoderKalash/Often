"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Plane, MapPin, Calendar, Users, Star, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

const quickStats = [
  { number: "50K+", label: "Happy Travelers", icon: Users },
  { number: "200+", label: "Destinations", icon: MapPin },
  { number: "4.9", label: "Average Rating", icon: Star },
  { number: "24/7", label: "Support", icon: Sparkles },
]

const urgencyOffers = [
  "🔥 Limited Time: 30% off luxury stays",
  "✈️ Free airport transfers on bookings over $500",
  "🏖️ Early bird special: Book 3 months ahead, save 25%",
]

export default function CTASection() {
  const [email, setEmail] = useState("")
  const [currentOffer, setCurrentOffer] = useState(0)

  
  useState(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % urgencyOffers.length)
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <div className="w-full relative ">
   
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto p-6 md:p-12 bg-gradient-to-r from-yellow-400 to-orange-400 overflow-hidden rounded-xl shadow-lg mb-2">
       
        <motion.div
          key={currentOffer}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block border border-white/30">
            <span className="text-white font-medium">{urgencyOffers[currentOffer]}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Dream
              <br />
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Adventure
              </span>
              <br />
              Awaits
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Don&apos;t just dream about your perfect getaway. Make it happen today with exclusive deals and personalized
              experiences.
            </p>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-pink-500" />
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>


            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <Plane className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Book Your Trip Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-white/30 text-black hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full shadow-xl backdrop-blur-sm transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Plan Later
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Get Exclusive Deals</h3>
                  <p className="text-white/80">Join 50,000+ travelers and never miss a deal</p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 backdrop-blur-sm"
                    />
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-800 font-semibold px-6 shadow-lg">
                        Subscribe
                      </Button>
                    </motion.div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Instant access to member-only prices</span>
                  </div>
                </div>
              </CardContent>
            </Card>


            <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Quick Booking</h3>
                  <p className="text-white/80">Popular destinations this month</p>
                </div>

                <div className="space-y-3">
                  {[
                    { destination: "Bali, Indonesia", price: "$299", discount: "40% OFF" },
                    { destination: "Santorini, Greece", price: "$449", discount: "25% OFF" },
                    { destination: "Tokyo, Japan", price: "$399", discount: "30% OFF" },
                  ].map((deal, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-semibold">{deal.destination}</div>
                          <div className="text-white/70 text-sm">Starting from {deal.price}</div>
                        </div>
                        <div className="bg-gradient-to-r from-red-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {deal.discount}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div className="mt-6" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white font-semibold py-3 rounded-lg shadow-lg">
                    View All Deals
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 pt-8 border-t border-white/20"
        >
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-300/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
              <span className="text-white font-semibold">Limited Time Offer</span>
            </div>
            <p className="text-white/90 text-lg">
              Book within the next <span className="font-bold text-yellow-300">48 hours</span> and save up to{" "}
              <span className="font-bold text-yellow-300">40%</span> on your dream vacation
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
