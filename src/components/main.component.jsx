"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import BE1 from "../../public/B.E._coaching_universities/1.png";
import BE2 from "../../public/B.E._coaching_universities/2.png";
import BE3 from "../../public/B.E._coaching_universities/3.png";
import BE4 from "../../public/B.E._coaching_universities/4.png";
import { useRef,useEffect,useState } from "react";

const images = [BE1, BE2, BE3, BE4];

const Main = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { triggerOnce: true, margin: "-100px" });

    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will make sure that the code runs only on the client-side
    setIsClient(true);
  }, []);

  return (
    <main ref={sectionRef} className="mt-10 flex flex-col items-center justify-center w-full">
      <motion.h1
        className="text-[#004aad] text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        B.E Coaching Classes
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition duration-300 hover:shadow-[0px_4px_15px_rgba(255,215,0,0.6)]"
          >
            <Image src={image} alt={`BE${index + 1}`} height={300} width={300} className="rounded" />
          </motion.div>
        ))}
      </div>

      <motion.h1
        className="text-[#004aad] text-3xl font-bold mb-6 mt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        NEC License Preparation Classes
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition duration-300 hover:shadow-[0px_4px_15px_rgba(255,215,0,0.6)]"
          >
            <Image src={image} alt={`BE${index + 1}`} height={300} width={300} className="rounded" />
          </motion.div>
        ))}
      </div>

      <motion.h1
        className="text-[#004aad] text-3xl font-bold mb-6 mt-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Training
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0, // Make the image invisible initially
              scale: 0,  // Start the image from 0 scale
            }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}} // Fade in and scale to normal
            transition={{
              duration: 0.2, // Duration of the expand effect
              delay: index * 0.1, // Delay for each image for staggered effect
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.2, // Expand image on hover
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition duration-300 hover:shadow-[0px_4px_20px_rgba(255,215,0,0.7)]"
          >
            <Image src={image} alt={`BE${index + 1}`} height={300} width={300} className="rounded" />
          </motion.div>
        ))}
      </div>
     

    </main>
  );
};

export default Main;
