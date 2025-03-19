"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroIcon from "../../public/forntImg2/abha.png";
import FrontImg4 from "../../public/forntImg2/sujita.png"
import FrontImg3 from "../../public/forntImg2/front1.jpg"
import FrontImg2 from "../../public/forntImg2/front2.jpg"
import { Typewriter } from "react-simple-typewriter";


import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Choose font weights as needed
});


const imageVariants = (delay) => ({
  hidden: { scale: 0.2, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.8, ease: "easeInOut", delay }
  },
});

const Hero = () => {
  return (
    <div className=" h-11/12  sm:flex  justify-center items-center gap-22  mt-20 py-14 px-8 sm:px-20">
      {/* Left Side - Heading and Text */}
      <div className="p-4 sm:p-2 w-full sm:w-2xl">
        <h1 className= " font-medium text-xl  sm:text-5xl ">
        <p className={`${oswald.className} text-5xl font-bold`}>
      Learn With Line Academy
    </p>
          
           <p className="text-blue-800"><Typewriter
            words={['Affordable','Intutive',"Practical" ]}
            loop={50}
            cursor
            cursorStyle='...'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></p>
        </h1>
        <p className="mt-4">
        A complete learning ecosystem designed to make exam prep and skill-building engaging and effective. 
        </p>
      </div>

      {/* Right Side - Images with Animation */}
      <div>
        <div className="grid grid-cols-2 gap-4">
          {/* Top Left - Circular */}
          <motion.div
            variants={imageVariants(0.1)}
            initial="hidden"
            animate="visible"
            className="relative w-32 h-32 sm:w-44 sm:h-40 rounded-full overflow-hidden"
          >
            <Image src={HeroIcon} alt="Student 1" layout="fill" objectFit="cover" />
          </motion.div>

          {/* Top Right - Semi-Rounded */}
          <motion.div
            variants={imageVariants(0.2)}
            initial="hidden"
            animate="visible"
            className="relative w-32 h-32 sm:w-44 sm:h-40 rounded-[25%_10%] overflow-hidden"
          >
            <Image src={FrontImg2} alt="Student 2" layout="fill" objectFit="cover" />
          </motion.div>

          {/* Bottom Left - Semi-Rounded */}
          <motion.div
            variants={imageVariants(0.3)}
            initial="hidden"
            animate="visible"
            className="relative w-32 h-32 sm:w-44 sm:h-40 rounded-[25%_10%] overflow-hidden"
          >
            <Image src={FrontImg3} alt="Student 3" layout="fill" objectFit="cover" />
          </motion.div>

          {/* Bottom Right - Circular */}
          <motion.div
            variants={imageVariants(0.4)}
            initial="hidden"
            animate="visible"
            className="relative w-32 h-32 sm:w-44 sm:h-40 rounded-full overflow-hidden"
          >
            <Image src={FrontImg4} alt="Student 4" layout="fill" objectFit="cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
