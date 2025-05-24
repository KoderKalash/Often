import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <main className="w-full p-8">
      <div className="relative w-full h-[80vh] rounded-3xl overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/items/Switss.jpg" alt="Background Image" fill priority className="object-cover opacity-190" />
        </div>

        <div className="relative h-full flex flex-col justify-between p-12">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-4 leading-tight ">Your life's a map, start exploring</h1>
            <p className="text-xl text-white/90 mb-8">Explore your life's map often for a richer, fuller journey.</p>
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-medium">
              Book now
            </Button>
          </div>

          <div className="flex justify-between items-end">

            <div className="flex flex-col items-center text-white/80 shadow-xl">
              <span className="text-sm mb-2 ">Scroll down</span>
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
