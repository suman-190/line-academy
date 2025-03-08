"use client";
import { motion } from 'framer-motion';

import Image from 'next/image';
import CEOImage from '../../../public/ceo.png';

const AboutPage = () => {
  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 text-white">
      <motion.div
        className="bg-[#004aad] p-8 rounded-lg shadow-xl max-w-5xl w-full "
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={boxVariants}
      className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out max-w-4xl mx-auto mt-8"
    >
      <div className="text-3xl font-semibold text-center text-[#004aad] mb-6 ">
       <p>Our Mission</p> 
        <div className='flex justify-between'>
        <p className='w-64 bg-[#004aad] h-0.5 mt-2 rounded-xl'></p>
        <p className='w-64 bg-[#004aad] h-0.5 mt-2 rounded-xl'></p>
        </div>
      </div>
      <ul className="space-y-4">
        <motion.li
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
          className="text-lg text-gray-600 p-4 border-b-2 border-gray-300 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500 transition-all duration-300"
        >
          To provide comprehensive B.E. coaching classes that enhance students' understanding and mastery of engineering subjects.
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
          className="text-lg text-gray-600 p-4 border-b-2 border-gray-300 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500 transition-all duration-300"
        >
          To offer specialized preparation programs for the Nepal Engineering Council License exam, ensuring students are well-prepared for their professional certification.
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
          className="text-lg text-gray-600 p-4 border-b-2 border-gray-300 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500 transition-all duration-300"
        >
          To deliver practical and industry-relevant training for students and professionals, bridging the gap between academic learning and real-world application.
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
          className="text-lg text-gray-600 p-4 border-b-2 border-gray-300 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500 transition-all duration-300"
        >
          To foster an environment that encourages continuous learning, critical thinking, and innovation in the engineering field.
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
          className="text-lg text-gray-600 p-4 border-b-2 border-gray-300 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500 transition-all duration-300"
        >
          To support the personal and professional growth of our learners by providing resources and mentorship that align with their career goals.
        </motion.li>
      </ul>
    </motion.div>
    </div>
  );
};

export default AboutPage;
