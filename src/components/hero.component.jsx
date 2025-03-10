"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroIcon from "../../public/Hero.png";
import { Typewriter } from "react-simple-typewriter";

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
    <div className="bg-gray-300 h-11/12  sm:flex  justify-between items-center  mt-4 py-14 px-8 sm:px-24">
      {/* Left Side - Heading and Text */}
      <div className="p-4 sm:p-8 w-full sm:w-1/2">
        <h1 className="font-bold text-xl  sm:text-5xl ">
        <Typewriter
            words={['Line Acdemy','Engineering Your success','Build Your Future',"Success With Us!" ]}
            loop={10}
            cursor
            cursorStyle='...'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </h1>
        <p className="mt-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velitofficia consequat.
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
            <Image src={HeroIcon} alt="Student 2" layout="fill" objectFit="cover" />
          </motion.div>

          {/* Bottom Left - Semi-Rounded */}
          <motion.div
            variants={imageVariants(0.3)}
            initial="hidden"
            animate="visible"
            className="relative w-32 h-32 sm:w-44 sm:h-40 rounded-[25%_10%] overflow-hidden"
          >
            <Image src={HeroIcon} alt="Student 3" layout="fill" objectFit="cover" />
          </motion.div>

          {/* Bottom Right - Circular */}
          <motion.div
            variants={imageVariants(0.4)}
            initial="hidden"
            animate="visible"
            className="relative w-32 h-32 sm:w-44 sm:h-40 rounded-full overflow-hidden"
          >
            <Image src={HeroIcon} alt="Student 4" layout="fill" objectFit="cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
