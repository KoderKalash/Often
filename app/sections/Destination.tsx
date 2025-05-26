"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { MapPin, Star, Calendar } from "lucide-react"
import Image from "next/image"

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "/items/santorini.jpg",
    rating: 4.9,
    price: "$299",
    duration: "5 days",
    description: "Stunning sunsets and white-washed buildings",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "/items/bali.jpg",
    rating: 4.8,
    price: "$199",
    duration: "7 days",
    description: "Tropical paradise with rich culture",
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    image: "/items/tokyo.jpg",
    rating: 4.9,
    price: "$399",
    duration: "6 days",
    description: "Modern city meets ancient traditions",
  },
  {
    id: 4,
    name: "Paris, France",
    image: "/items/paris.jpg",
    rating: 4.7,
    price: "$349",
    duration: "4 days",
    description: "City of love and timeless elegance",
  },
  {
    id: 5,
    name: "Maldives",
    image: "/items/mld.jpg",
    rating: 5.0,
    price: "$599",
    duration: "8 days",
    description: "Crystal clear waters and luxury resorts",
  },
  {
    id: 6,
    name: "Iceland",
    image: "/items/ice.jpg",
    rating: 4.8,
    price: "$449",
    duration: "5 days",
    description: "Northern lights and natural wonders",
  },
]

export default function Destination() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-12 p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Introducing{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Luxe Stays</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Experience travel as it should be: effortless, extraordinary, and entirely yours.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex items-center justify-center"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {destinations.map((destination, index) => (
              <CarouselItem key={destination.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-1"
                >
                  <Card className="group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border-0 shadow-md overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.name}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold">{destination.rating}</span>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-white text-sm font-semibold">{destination.price}</span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <h3 className="text-xl font-bold text-gray-800">{destination.name}</h3>
                        </div>

                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{destination.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{destination.duration}</span>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                          >
                            Book Now
                          </motion.button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300" />
          <CarouselNext className="hidden md:flex -right-12 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300" />
        </Carousel>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <p className="text-gray-500 text-sm">Swipe or use arrows to explore more destinations</p>
      </motion.div>
    </div>
  )
}
