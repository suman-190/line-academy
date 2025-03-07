"use client";
// import Image from "next/image";
// import Logo from "../../public/logo.png";
import { Poppins } from "next/font/google"; 

import Hero from "@/components/hero.component";
import Main from "@/components/main.component"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], 
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <div className={`${poppins.className} `}>
      
      <Hero />
      <Main/>
    </div>
    
  );
}
