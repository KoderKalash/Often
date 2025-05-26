"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { motion } from "framer-motion"
import { useState } from "react"
import { Calendar, MapPin, Users, Clock, Star, Plane } from "lucide-react"

const tourPackages = [
  {
    id: 1,
    title: "4 Days & 3 Nights in Los Angeles",
    price: "$899",
    rating: 4.8,
    includes: ["Hotel", "Breakfast", "City Tour", "Airport Transfer"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "7 Days & 6 Nights in Paris",
    price: "$1,299",
    rating: 4.9,
    includes: ["Hotel", "All Meals", "Museum Tours", "Seine Cruise"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "5 Days & 4 Nights in Tokyo",
    price: "$1,099",
    rating: 4.7,
    includes: ["Hotel", "Breakfast", "Cultural Tours", "JR Pass"],
    image: "/items/tokyo.jpg",
  },
  {
    id: 4,
    title: "6 Days & 5 Nights in Bali",
    price: "$799",
    rating: 4.8,
    includes: ["Resort", "All Meals", "Spa Treatment", "Island Tours"],
    image: "/items/bali.jpg",
  },
]

export default function SelectTrip() {
  const [activeTab, setActiveTab] = useState("luxe-stays")
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

  return (
    <div className="w-full max-w-6xl mx-auto p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Choose your Destination
        </h1>
        <p className="text-gray-600 text-lg">Plan your perfect getaway with our curated experiences</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex justify-center mb-8"
      >
        <div className="bg-gray-100 p-1 rounded-xl flex gap-1">
          <Button
            onClick={() => setActiveTab("luxe-stays")}
            variant={activeTab === "luxe-stays" ? "default" : "ghost"}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === "luxe-stays"
                ? "bg-white shadow-md text-blue-600 font-semibold"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <MapPin className="w-4 h-4 mr-2" />
            Luxe Stays
          </Button>
          <Button
            onClick={() => setActiveTab("tour-packages")}
            variant={activeTab === "tour-packages" ? "default" : "ghost"}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === "tour-packages"
                ? "bg-white shadow-md text-blue-600 font-semibold"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <Plane className="w-4 h-4 mr-2" />
            Tour Packages
          </Button>
        </div>
      </motion.div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {activeTab === "luxe-stays" && (
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Destination
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full h-12 border-gray-200 focus:border-blue-500 transition-colors">
                      <SelectValue placeholder="Where would you like to go?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Popular Destinations</SelectLabel>
                        <SelectItem value="paris">Paris, France</SelectItem>
                        <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                        <SelectItem value="bali">Bali, Indonesia</SelectItem>
                        <SelectItem value="santorini">Santorini, Greece</SelectItem>
                        <SelectItem value="maldives">Maldives</SelectItem>
                        <SelectItem value="dubai">Dubai, UAE</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Americas</SelectLabel>
                        <SelectItem value="newyork">New York, USA</SelectItem>
                        <SelectItem value="losangeles">Los Angeles, USA</SelectItem>
                        <SelectItem value="rio">Rio de Janeiro, Brazil</SelectItem>
                        <SelectItem value="cancun">Cancun, Mexico</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Asia & Pacific</SelectLabel>
                        <SelectItem value="singapore">Singapore</SelectItem>
                        <SelectItem value="sydney">Sydney, Australia</SelectItem>
                        <SelectItem value="bangkok">Bangkok, Thailand</SelectItem>
                        <SelectItem value="seoul">Seoul, South Korea</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>


                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Trip Dates
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      type="date"
                      className="h-12 border-gray-200 focus:border-blue-500 transition-colors"
                      placeholder="Check-in"
                    />
                    <Input
                      type="date"
                      className="h-12 border-gray-200 focus:border-blue-500 transition-colors"
                      placeholder="Check-out"
                    />
                  </div>
                </div>


                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Guests & Rooms
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Select>
                      <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 transition-colors">
                        <SelectValue placeholder="Guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 transition-colors">
                        <SelectValue placeholder="Rooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Room</SelectItem>
                        <SelectItem value="2">2 Rooms</SelectItem>
                        <SelectItem value="3">3 Rooms</SelectItem>
                        <SelectItem value="4">4+ Rooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <motion.div className="mt-8 flex justify-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Search Luxe Stays
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        )}

        {activeTab === "tour-packages" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tourPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    selectedPackage === pkg.id
                      ? "ring-2 ring-blue-500 shadow-lg"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg flex items-center justify-center">
                        <div className="text-white text-center">
                          <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{pkg.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-lg font-bold text-gray-800">{pkg.price}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">All-inclusive package</span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <p className="text-sm font-semibold text-gray-700">Package Includes:</p>
                        <div className="flex flex-wrap gap-2">
                          {pkg.includes.map((item, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          className={`w-full transition-all duration-300 ${
                            selectedPackage === pkg.id
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {selectedPackage === pkg.id ? "Selected" : "Select Package"}
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Book Button for Tour Packages */}
      {activeTab === "tour-packages" && selectedPackage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Book Selected Package
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
