"use client";
import { motion } from 'framer-motion';

import Image from 'next/image';
import CEOImage from '../../../public/ceo.png';

import UtkristImg from "../../../public/OurTeams/utkrist.png"
import SujitaImg from "../../../public/OurTeams/sujita.png"
import DavidImg from "../../../public/OurTeams/David.png"
import AnupImg from "../../../public/OurTeams/Anup.png"

import ClassRommImg from "../../../public/ourFacilities/classroom.png"
import FacuiltyImg from "../../../public/ourFacilities/facuilty.jpg"
import ClassRommImg2 from "../../../public/ourFacilities/classroom2.png"

const AboutPage = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const boxVariants = {
    
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const teamMembers = [
    {
      name: "ER. UTKRIST SHRESTHA",
      position: "Chief Operating Officer (COO)",
      imgSrc: UtkristImg,
    },
    {
      name: "MS. SUJITA KHADKA",
      position: "Chief Administrative Officer (CAO)",
      imgSrc: SujitaImg,
    },
    {
      name: "MR. DAVID KUMAL",
      position: "Marketing Advisor",
      imgSrc: DavidImg,
    },
    {
      name: "CA. ANUP SHARMA",
      position: "Financial Advisor",
      imgSrc: AnupImg,
    },
  ];

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
          <div className='mt-4 bg-[#004aad]'>
            <Image
              src={CEOImage}   alt="CEO" className='rounded-4xl' height={300} width={300}></Image>
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
    <div className="py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">Our Facilities</h2>
      <div className="w-24 h-1 bg-yellow-500 mx-auto mb-10"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <motion.div variants={textVariants} initial="hidden" animate="visible" className="space-y-4">
          <h3 className="text-xl font-bold text-blue-900">Modern, Technology-Enhanced Classrooms</h3>
          <p className="text-gray-700">Our classrooms are thoughtfully designed to foster an optimal learning environment. Featuring advanced technology such as projectors, high-speed internet, and Smart boards, we ensure that students have access to top-notch educational facilities.</p>
        </motion.div>
        <Image   src={ClassRommImg2} alt="Classroom" width={600} height={100}  className=" rounded-lg shadow-lg" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
      <Image   src={FacuiltyImg} alt="Classroom" width={600} height={100}  className=" rounded-lg shadow-lg" />
        <motion.div variants={textVariants} initial="hidden" animate="visible" className="space-y-4">
          <h3 className="text-xl font-bold text-blue-900">Experienced and Skilled Faculty</h3>
          <p className="text-gray-700">Our faculty members bring a wealth of knowledge and real-world expertise to the classroom. They are committed to fostering a supportive and engaging learning atmosphere.</p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <motion.div variants={textVariants} initial="hidden" animate="visible" className="space-y-4">
          <h3 className="text-xl font-bold text-blue-900">Dedicated Student Support Services</h3>
          <p className="text-gray-700">We offer comprehensive support services, including academic counseling, career guidance, and mental health resources, ensuring student success inside and outside the classroom.</p>
        </motion.div>
        <Image   src={ClassRommImg} alt="Classroom" width={600} height={100}  className=" rounded-lg shadow-lg" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.img variants={imageVariants} initial="hidden" animate="visible" src="/internship.jpg" alt="Internships" className="w-full rounded-lg shadow-lg" />
        <motion.div variants={textVariants} initial="hidden" animate="visible" className="space-y-4">
          <h3 className="text-xl font-bold text-blue-900">Industry-Linked Internship and Placement Opportunities</h3>
          <p className="text-gray-700">We provide students with internship and placement opportunities through strategic partnerships with leading companies and organizations.</p>
        </motion.div>
      </div>

    </div>
    <section className="bg-gray-100 py-16 px-4 md:px-20">
  {/* Section Title */}
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-blue-900 ">
      Our Core Team
    </h2>
    <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2"></div>
  </div>

  {/* Team Members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-blue-600 p-10 rounded-xl">
    {teamMembers.map((member, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }} // Hover effect
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Profile Image */}
        <Image
          src={member.imgSrc}
          alt={member.name}
          width={150}
          height={150}
          className="w-36 h-36 rounded-xl border border-blue-600"
          // whileHover={{ scale: 1.1 }} // Scale effect on image hover
          // transition={{ duration: 0.3 }}
        />

        {/* Name & Position */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
          <p className="text-sm text-gray-500">{member.position}</p>
        </div>

        {/* Floating Plus Icon */}
        <motion.div
          className="absolute top-4 left-4 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md cursor-pointer"
          whileHover={{ scale: 1.2, rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.div>
      </motion.div>
    ))}
  </div>
</section>

   
    
    </div>
  );
};

export default AboutPage;
