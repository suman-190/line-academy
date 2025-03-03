"use client";
// import Image from "next/image";
// import Logo from "../../public/logo.png";
import { Poppins } from "next/font/google"; 
import { motion } from "framer-motion";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], 
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <div className={`${poppins.className}`}>
     
     <motion.div
      className="bg-blue-500 px-6 py-2 min-h-16 sm:flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }} // Initial state
      animate={{ opacity: 1, y: 0 }}    // Final state (after animation)
      transition={{ duration: 0.6 }}    // Duration of the animation
    >
      <motion.p
        className="text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }} // Delay the text animation a bit
      >
        Notice: Upcoming classes will be running after Dashin
      </motion.p>

      <motion.ul
        className="flex items-center text-white gap-4 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }} // Delay the ul animation a bit more
      >
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Login
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Register
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            className="px-3 py-2 sm:px-6 bg-blue-600 text-white border border-transparent rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border-white hover:shadow-lg active:scale-95 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Mock Test
          </motion.button>
        </motion.li>
      </motion.ul>
    </motion.div>
         <div className="flex items-center justify-center px-22">
          
           <div >
           <ul className="flex gap-4 cursor-pointer pt-4">
  {["Home", "Course", "Blog", "FAQ", "Support"].map((item, index) => (
    <motion.li
      key={index}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="px-4 py-2 rounded-lg text-blue-600 bg-transparent transition-all duration-300 ease-in-out 
                 hover:bg-blue-600 hover:text-white hover:shadow-lg"
    >
      {item}
    </motion.li>
  ))}
</ul>

           </div>
         </div>
         
    </div>
    
  );
}
