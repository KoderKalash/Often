import Image from "next/image";
import motion from "framer-motion";
import { div } from "motion/react-client";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Destination from "./sections/Destination";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Destination/>
    </main>
  );
}
