"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Star, Quote, MapPin, Calendar, ThumbsUp } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=60&width=60",
    location: "New York, USA",
    rating: 5,
    date: "2 weeks ago",
    trip: "Santorini Luxe Stay",
    review:
      "Absolutely breathtaking experience! The villa overlooked the caldera with stunning sunset views. The service was impeccable and every detail was perfectly arranged. This was truly a once-in-a-lifetime trip.",
    images: ["/placeholder.svg?height=100&width=150", "/placeholder.svg?height=100&width=150"],
    helpful: 24,
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=60&width=60",
    location: "Singapore",
    rating: 5,
    date: "1 month ago",
    trip: "7 Days Paris Package",
    review:
      "The Paris tour package exceeded all expectations. From the Seine cruise to the private Louvre tour, everything was seamlessly organized. Our guide was knowledgeable and the hotels were fantastic.",
    images: ["/placeholder.svg?height=100&width=150"],
    helpful: 18,
    verified: true,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    avatar: "/placeholder.svg?height=60&width=60",
    location: "Madrid, Spain",
    rating: 4,
    date: "3 weeks ago",
    trip: "Tokyo Cultural Experience",
    review:
      "Amazing cultural immersion in Tokyo! The traditional ryokan stay was authentic and the guided tours showed us hidden gems. Only minor issue was the language barrier at some restaurants.",
    images: [
      "/placeholder.svg?height=100&width=150",
      "/placeholder.svg?height=100&width=150",
      "/placeholder.svg?height=100&width=150",
    ],
    helpful: 15,
    verified: true,
  },
  {
    id: 4,
    name: "David Thompson",
    avatar: "/placeholder.svg?height=60&width=60",
    location: "London, UK",
    rating: 5,
    date: "1 week ago",
    trip: "Bali Resort Package",
    review:
      "Pure paradise! The resort was stunning with incredible spa treatments and the island tours were well-planned. The staff went above and beyond to make our honeymoon special.",
    images: ["/placeholder.svg?height=100&width=150"],
    helpful: 31,
    verified: true,
  },
  {
    id: 5,
    name: "Lisa Wang",
    avatar: "/placeholder.svg?height=60&width=60",
    location: "Toronto, Canada",
    rating: 5,
    date: "2 months ago",
    trip: "Maldives Overwater Villa",
    review:
      "The overwater villa was a dream come true! Crystal clear waters, amazing snorkeling, and the most romantic dinners on the beach. The photography session they arranged was a wonderful surprise.",
    images: ["/placeholder.svg?height=100&width=150", "/placeholder.svg?height=100&width=150"],
    helpful: 42,
    verified: true,
  },
  {
    id: 6,
    name: "James Wilson",
    avatar: "/placeholder.svg?height=60&width=60",
    location: "Sydney, Australia",
    rating: 4,
    date: "3 months ago",
    trip: "Los Angeles City Tour",
    review:
      "Great introduction to LA! The Hollywood tours and beach visits were highlights. The hotel was centrally located and the airport transfers were smooth. Would recommend for first-time visitors.",
    images: ["/placeholder.svg?height=100&width=150"],
    helpful: 12,
    verified: true,
  },
]

const stats = [
  { label: "Total Reviews", value: "2,847", icon: Star },
  { label: "Average Rating", value: "4.8", icon: ThumbsUp },
  { label: "Verified Bookings", value: "98%", icon: Quote },
]

export default function Reviews() {
  const [filter, setFilter] = useState("all")
  const [visibleReviews, setVisibleReviews] = useState(4)

  const filteredReviews = reviews.filter((review) => {
    if (filter === "all") return true
    if (filter === "5-star") return review.rating === 5
    if (filter === "4-star") return review.rating === 4
    if (filter === "recent") return ["1 week ago", "2 weeks ago"].includes(review.date)
    return true
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6 md:p-8 ">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          What Our Travelers Say
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Real experiences from real travelers who have explored the world with us
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mb-8"
      >
        <div className="bg-gray-100 p-1 rounded-xl flex gap-1 flex-wrap">
          {[
            { key: "all", label: "All Reviews" },
            { key: "5-star", label: "5 Star" },
            { key: "4-star", label: "4 Star" },
            { key: "recent", label: "Recent" },
          ].map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                filter === filterOption.key ? "bg-white shadow-md text-blue-600" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
      >
        {filteredReviews.slice(0, visibleReviews).map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardContent className="p-6">

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                      <AvatarFallback>
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                        {review.verified && (
                          <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {review.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">{renderStars(review.rating)}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {review.date}
                    </div>
                  </div>
                </div>


                <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
                  {review.trip}
                </Badge>

                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-gray-200" />
                  <p className="text-gray-700 leading-relaxed pl-4">{review.review}</p>
                </div>

                {review.images.length > 0 && (
                  <div className="flex gap-2 mb-4 overflow-x-auto">
                    {review.images.map((image, idx) => (
                      <div key={idx} className="flex-shrink-0 w-24 h-16 bg-gray-200 rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500" />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    Helpful ({review.helpful})
                  </motion.button>
                  <span className="text-xs text-gray-400">Verified booking</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>


      {visibleReviews < filteredReviews.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setVisibleReviews((prev) => prev + 4)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Load More Reviews
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
