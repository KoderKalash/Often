"use client";
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <main className="w-full p-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-[85vh] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image src="/items/travel.jpg" alt="Background Image" fill priority className="object-cover" />
                </div>

                <div className="relative h-full flex flex-col justify-center p-12 md:pl-36">
                    <div


                        className="max-w-2xl md:max-w-4xl">
                        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight [text-shadow:_1px_1px_3px_rgb(0_0_0_/_0.2)]">Your life&apos;s a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">map,</span> start exploring</h1>
                        <p className="text-xl text-white/90 mb-8 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_0.2)]">Explore your life&apos;s map often for a richer, fuller journey.</p>
                        <Button
                            className="bg-white text-black hover:bg-white/90 px-4 py-3 text-lg font-medium hover:scale-110 transition-transform duration-300">
                            Book Now
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}><ArrowRight /></motion.span>
                        </Button>
                    </div>

                    <div className="flex justify-between items-end">
                    </div>
                </div>
            </motion.div>
        </main>
    )
}
