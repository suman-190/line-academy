"use client";
import { motion } from 'framer-motion';

import Image from 'next/image';
import CEOImage from '../../../public/ceo.png';

const AboutPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 text-white">
      <motion.div
        className="bg-blue-600 p-8 rounded-lg shadow-xl max-w-5xl w-full "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-3xl font-semibold text-center text-amber-400 mb-6 flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          About Line Academy
          <p className='w-64 bg-white h-0.5 mt-2 rounded-xl'></p>
          <div className='mt-4'>
            <Image
              src={CEOImage}   alt="CEO" className='rounded-4xl' height={80} width={80}></Image>
         </div>
         <h1>ER.SUNEIL THAPA</h1>
         <h1>CHIEF EXECUTAIVE OFFICER</h1>
        </motion.div>
         
        

         
        <motion.p
          className="text-lg  leading-relaxed mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          At Line Academy, we are committed to shaping the future of engineering education and training. As one of the leading institutes in the field, we pride ourselves on offering top-notch classes and programs designed to empower aspiring engineers and professionals with the skills, knowledge, and confidence they need to excel in their careers.
        </motion.p>

        <motion.p
          className="text-lg  leading-relaxed mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          We believe in a holistic approach to education, combining rigorous academic training with practical, hands-on experience to ensure our students are well-prepared to tackle real-world challenges.
        </motion.p>

        <motion.p
          className="text-lg  leading-relaxed mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          The strength of our institute lies in our dedicated faculty, who are not only highly qualified and experienced but also passionate about teaching and mentoring the next generation of engineers. We foster a collaborative and supportive learning environment, where students and professionals are encouraged to innovate, explore, and grow.
        </motion.p>

        <motion.p
          className="text-lg  leading-relaxed mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          We also understand the importance of flexibility in today’s fast-paced world, which is why we offer a variety of learning options, including online and hybrid courses, to accommodate the diverse needs of our students.
        </motion.p>

        <motion.p
          className="text-lg  leading-relaxed mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          As we continue to expand our offerings and reach, we remain steadfast in our mission to provide unparalleled engineering education and professional training. Whether you are just starting your engineering journey or looking to advance your career in any relevant field, we are here to support you every step of the way.
        </motion.p>

        <motion.p
          className="text-lg  leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          Thank you for choosing Line Academy. Together, let’s build a brighter future!
        </motion.p>
      </motion.div>

      
      
    </div>
  );
};

export default AboutPage;
