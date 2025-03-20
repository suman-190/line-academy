"use client";
import { motion, useInView } from "framer-motion";
import { useRef,useEffect,useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Oswald } from "next/font/google";

import BE1 from "../../public/B.E. coaching universities/1.png";
import BE2 from "../../public/B.E. coaching universities/2.png";
import BE3 from "../../public/B.E. coaching universities/3.png";
import BE4 from "../../public/B.E. coaching universities/4.png";

import Li1 from "../../public/NEC license preparation classes banner/1.png";
import Li2 from "../../public/NEC license preparation classes banner/2.png";
import Li3 from "../../public/NEC license preparation classes banner/3.png";
import Li4 from "../../public/NEC license preparation classes banner/4.png";
import Li5 from "../../public/NEC license preparation classes banner/5.png";
import Li6 from "../../public/NEC license preparation classes banner/6.png";
import Li7 from "../../public/NEC license preparation classes banner/7.png";
import Li8 from "../../public/NEC license preparation classes banner/8.png";
import Li9 from "../../public/NEC license preparation classes banner/9.png";    

import Tr1 from "../../public/Training_category/Engineering training.png";
import Tr2 from "../../public/Training_category/IT training.png";    
import Tr3 from "../../public/Training_category/Professional training.png";


// import Strimage from "../../public/strength.png"

import  Story from "../../public/ourstrength/wellStructured.jpeg"
import  Story2 from "../../public/ourstrength/story2.jpeg"
import  Story3 from "../../public/ourstrength/claess10plus.jpeg"


import SarojYadav from "../../public/students/sarojYadv.jpeg"
import RiyaBhattari from "../../public/students/RIyaBhttarai.jpeg"
import PrabeshPokharel  from "../../public/students/PrabeshPokharel.jpeg"


const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Choose font weights as needed
});


// const images = [BE1, BE2, BE3, BE4];
const images=[
  {
  href:"ioe",
  img:BE1
},
{
  href:"pokhara-university",
  img:BE2
},
{
  href:"purwanchal-university",
  img:BE3
},
{
  href:"other",
  img:BE4
},
]
// const li_Images=[Li1,Li2,Li3,Li4,Li5,Li6,Li7,Li8,Li9];
const li_Images=[
  {
    href:"civil-engineering",
    img:Li1
  },
  {
    href:"mechanical-engineering",
    img:Li2
  },
  {
    href:"elctrical-engineering",
    img:Li3
  },
  {
    href:"electrical-electronics-engineering",
    img:Li4
  },
  {
    href:"computer-engineering",
    img:Li5
  },
  {
    href:"electronics-communication-engineering",
    img:Li6
  },
  {
    href:"information-technology-engineering",
    img:Li7
  },
  {
    href:"architectural-engineering",
    img:Li9
  },

  
]
// const trainingImages = [Tr1, Tr2, Tr3,Tr3];
const trainingImages = [
  {
  href:"engineering-training",
  img:Tr1
},
{
  href:"it-training",
  img:Tr2
},
{
  href:"professional-training",
  img:Tr3
},

];

const Main = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { triggerOnce: true, margin: "-100px" });

    const [isClient, setIsClient] = useState(false);

    const [textIndex, setTextIndex] = useState(0);
    
    const imagesPerPage = 4; // Number of images per page
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(li_Images.length / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const selectedImages = li_Images.slice(startIndex, startIndex + imagesPerPage);


  const textArray = [
    "Industry-Focused Training: Line Academy offers cutting-edge training programs that are tailored to meet the needs of the ever-evolving industry. Our courses equip you with the skills and knowledge needed for career advancement.",
    "Engineering License Preparation: We provide expert coaching for engineering license exams, ensuring you're fully prepared to succeed. Our instructors are highly experienced and dedicated to your success.",
    "Coaching Classes: Line Academy offers coaching classes in various subjects. Our instructors use innovative methods to ensure that you gain a thorough understanding of the topics.",
    "MSc Entrance Preparation: We prepare students for MSc entrance exams with a robust curriculum and personalized guidance. Our focus is on helping you achieve the best possible score.",
    "Lok Sewa Classes: Our Lok Sewa preparation classes are designed to help you pass government exams with confidence. We offer guidance, mock tests, and strategic tips for success.",
  ];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTextIndex((prevIndex) => {
        if (prevIndex < textArray.length - 1) {
          return prevIndex + 1;
        }
        return prevIndex; // Stop at the last index
      });
    }, 5000); // Change text every 5 seconds (adjustable)

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    // This will make sure that the code runs only on the client-side
    setIsClient(true);
  }, []);

  return (
    <main ref={sectionRef} className="mt-10 flex flex-col items-center justify-center w-full ">
      <motion.h1
        className={`${oswald.className} text-[#004aad] text-3xl font-bold mb-6`}
        initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6 }}
      >
        B.E. Coaching Classes
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-6">
        {images.map(({img,href}, index) => (
          <motion.div
          initial={{ opacity: 0, x: index < 2 ? -30 : 30}}
          whileInView={{ opacity: 1, x: 0 }}
            key={index}           
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0, delay:  0.2 }}
            whileHover={{ scale: 1.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition duration-300 hover:shadow-blue-300 border-gray-300 p-2 border"
          >
          <Link href={`be-coaching/${href}`} >  <Image src={img} alt={`BE${index + 1}`} height={250} width={250} className="rounded" /></Link>
          </motion.div>
        ))}
      </div>

      <motion.h1
       className={`${oswald.className} text-[#004aad] text-3xl font-bold mb-6 mt-12`}
        initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6 }}
      >
        N.E.C License Preparation Classes
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-6">
        {selectedImages.map(({img,href}, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, x: index < 2 ? -30 : 30}}
          whileInView={{ opacity: 1, x: 0 }}
          
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0, delay: index * 0.2 }}
          whileHover={{ scale: 1.1 }}
          className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition duration-300 hover:shadow-blue-300 border-gray-300 p-2 border"
          >
             <Link href={`course-details/${href}`} >  <Image src={img} alt={`BE${index + 1}`} height={250} width={250} className="rounded" /></Link>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-10 flex justify-center items-center space-x-4">
        <button
          className={`px-4 py-2 rounded-lg text-white ${currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-800"}`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-4 py-2 rounded-lg text-white ${currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-800"}`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <motion.h1
       className={`${oswald.className} text-[#004aad] text-3xl font-bold mb-6 mt-12`}
        initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6 }}
      >
        Trainings
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-6">
        {trainingImages.map(({href,img}, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, x: index < 2 ? -30 : 30}}
          whileInView={{ opacity: 1, x: 0 }}          
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0, delay: index * 0.2 }}
          whileHover={{ scale: 1.1 }}
          className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition duration-300 hover:shadow-blue-300 border-gray-300 p-2 border"
          >
            <Link href={`training/${href}`} >  <Image src={img} alt={`BE${index + 1}`} height={250} width={250} className="rounded" /></Link>
          </motion.div>
        ))}
      </div>
     
      <section className="mt-14 relative py-16 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-2xl">
  <div className="container mx-auto px-6">
    {/* Section Title */}
    <motion.h2
      className="text-4xl font-bold mb-10 text-center"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      Our Strength, Our Assets
    </motion.h2>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Image 1 */}
      <motion.div
        className="  rounded-lg flex flex-col items-center justify-center text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={Story2} alt="Experienced Faculty" className=" rounded-md" />
        <p className="mt-4 text-lg">Experienced and Dedicated Faculty</p>
      </motion.div>

      {/* Image 2 */}
      <motion.div
        className="  rounded-lg flex flex-col items-center justify-center text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={Story} alt="Line Academy" className="rounded-md" />
        <p className="mt-4 text-lg">State-of-the-Art Facilities</p>
      </motion.div>

      {/* Image 3 */}
      <motion.div
        className="  rounded-lg flex flex-col items-center justify-center text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={Story3} alt="Experienced Faculty" className=" rounded-md" />
        <p className="mt-4 text-lg">10K+ Experienced Classes</p>
      </motion.div>

     
     
    </div>
  </div>
</section>

    
  

<section className="mt-14">
  <motion.h2
    className="text-4xl font-bold mb-6 text-center text-blue-600"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6 }}
  >
    Our Location
  </motion.h2>

  <div className="flex flex-wrap justify-center gap-8 items-center">
    <div className="w-1/2">
      <motion.p
        className="font-bold typewriter-effect"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-bold">Centrally Located:</span> Line Academy is situated in a prime, easily accessible area of the city, ensuring students and staff are close to key business and commercial hubs.
      </motion.p>
      
      <motion.p
        className="typewriter-effect"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Just 200 meters from LABIM Mall, the academy offers students quick access to shopping, dining, and entertainment options.
      </motion.p>

      <motion.p
        className="mt-2 typewriter-effect"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-bold">Excellent Public Transport Connectivity:</span> The academy is accessible by all major bus routes, providing students with convenient and reliable transportation options from all parts of the city.
      </motion.p>

      <motion.p
        className="typewriter-effect"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Ample Parking Facilities: The academy offers on-site parking, making it convenient for students and visitors who prefer to drive, ensuring a hassle-free experience for those commuting by their own vehicle.
      </motion.p>
    </div>

    <div>
      <iframe
        className="rounded-2xl w-fit sm:w-xl"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/H757un6YemY?si=s1SEBcP3HfxsYqcf"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>



    <section className="relative py-16 bg-gradient-to-r from-[#004aad] to-blue-400 text-white mt-8 rounded-[1%_4%_2%_2%]">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Students Say
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8 animate-move">
         

        <motion.div
            className="bg-white p-6 rounded-3xl shadow-md w-72 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:animate-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Centrally Located</h3>
            <div className="flex flex-col items-center gap-1">
            <Image src={RiyaBhattari} height={100} width={100} className="rounded-full" alt="20"></Image>
            <p className="text-black">Riya Bhattari</p>
            <p className="text-gray-700">
              Line Academy is situated in a prime, easily accessible area of the city, ensuring students and staff are close to key business and commercial hubs.
            </p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-3xl shadow-md w-72 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:animate-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Centrally Located</h3>
            <div className="flex flex-col items-center gap-1">
            <Image src={RiyaBhattari} height={100} width={100} className="rounded-full" alt="20"></Image>
            <p className="text-black">Prabesh Pokharel</p>
            <p className="text-gray-700">
              Line Academy is situated in a prime, easily accessible area of the city, ensuring students and staff are close to key business and commercial hubs.
            </p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-3xl shadow-md w-72 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:animate-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Centrally Located</h3>
            <div className="flex flex-col items-center gap-1">
            <Image src={PrabeshPokharel} height={100} width={100} className="rounded-full" alt="20"></Image>
            <p className="text-black">Prabesh Pokharel</p>
            <p className="text-gray-700">
              Line Academy is situated in a prime, easily accessible area of the city, ensuring students and staff are close to key business and commercial hubs.
            </p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-3xl shadow-md w-72 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:animate-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Centrally Located</h3>
            <div className="flex flex-col items-center gap-1">
            <Image src={SarojYadav} height={100} width={100} className="rounded-full" alt="20"></Image>
            <p className="text-black">Saroj Yadav</p>
            <p className="text-gray-700">
            Line Academy is not just a coaching institute but also a guiding light of learning and opportunity. With its unwavering commitment to excellence, it transforms aspirations into achievements. From engineering license exams to supporting students through challenging back exams, Line Academy stands as a pillar of guidance and success.
            </p>
            </div>
          </motion.div>

         
        </div>
      </div>

      <style jsx>{`
        .animate-move {
          animation: move 10s linear infinite;
        }

        @keyframes move {
          0% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(30px) translateY(-30px);
          }
          50% {
            transform: translateX(0) translateY(30px);
          }
          75% {
            transform: translateX(-30px) translateY(0);
          }
          100% {
            transform: translateX(0) translateY(-30px);
          }
        }

        .hover\:animate-none:hover {
          animation: none;
        }
      `}</style>
    </section>

  
    </main>

    
  );
};

export default Main;
