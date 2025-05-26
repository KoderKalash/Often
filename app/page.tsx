import Image from "next/image";
import motion from "framer-motion";
import { div } from "motion/react-client";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Destination from "./sections/Destination";
import SelectTrip from "./sections/SelectTrip";
import Reviews from "./sections/Reviews";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Destination/>
      <SelectTrip/>
      <Reviews/>
      <CTA/>
      <Footer/>
    </main>
  );
}
