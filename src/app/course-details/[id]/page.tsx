"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaClock, FaGraduationCap, FaGlobe } from "react-icons/fa";

import LCivil from "../../../../public/NEC license preparation classes banner/1.png";
import LMec from "../../../../public/NEC license preparation classes banner/2.png";
import LEle from "../../../../public/NEC license preparation classes banner/3.png";
import LEle_Electronics from "../../../../public/NEC license preparation classes banner/4.png";
import LCom from "../../../../public/NEC license preparation classes banner/5.png";
import LEle_commu from "../../../../public/NEC license preparation classes banner/6.png";
import LEle_comu_info from "../../../../public/NEC license preparation classes banner/7.png";
import LInfo from "../../../../public/NEC license preparation classes banner/8.png";
import LArch from "../../../../public/NEC license preparation classes banner/9.png";

import CIoe from "../../../../public/B.E. coaching universities/1.png";
import CPokhara from "../../../../public/B.E. coaching universities/2.png";
import CPurv from "../../../../public/B.E. coaching universities/3.png";
import COth from "../../../../public/B.E. coaching universities/4.png";

import TPrimavera from "../../../../public/Training_subjects/1.png";
import TMsOffice from "../../../../public/Training_subjects/2.png";
import TAdvExcel from "../../../../public/Training_subjects/3.png";
import TProjMgmt from "../../../../public/Training_subjects/4.png";
import TProcMgmt from "../../../../public/Training_subjects/5.png";
import TAutoEle from "../../../../public/Training_subjects/9.png";
import TAutoCAD from "../../../../public/Training_subjects/10.png";
import TStruct from "../../../../public/Training_subjects/11.png";
import TPyth from "../../../../public/Training_subjects/13.png";
import TCProg from "../../../../public/Training_subjects/14.png";
import TCPP from "../../../../public/Training_subjects/15.png";
import TASP from "../../../../public/Training_subjects/16.png";
import TLarvael from "../../../../public/Training_subjects/17.png";
import TDig from "../../../../public/Training_subjects/18.png";
import TGrap from "../../../../public/Training_subjects/19.png";
import TFlutter from "../../../../public/Training_subjects/20.png";

import LokEE7 from "../../../../public/Loksewa_subjects/1.png";
import LokEE5 from "../../../../public/Loksewa_subjects/2.png";
import LokCE from "../../../../public/Loksewa_subjects/3.png";

import LokCivil from "../../../../public/Loksewa_subjects/4.png";
import LokCECO from "../../../../public/Loksewa_subjects/5.png";
import LokOpe from "../../../../public/Loksewa_subjects/6.png";


// import ComputerSyllabus from "../../../../public/syllabus/computerEngineerSyllabus.pdf"


const syllabusUrl = "/syllabus/computerEngineerSyllabus.pdf";

const data = [
 
  {
    id: "computer-engineering",
    subject: "Computer Engineering",
    exams: "NEC License Preparation",
    duration: "2 months",
    mode: "Both, On-site And Online",
    description:
      "Our specialized NEC License Preparation Classes are designed to help engineering graduates excel in the NEC license examination and achieve their professional goals. This comprehensive course provides in-depth guidance, focusing on the core concepts and practical knowledge required for the exam.",
     
    img:LCom
    },
  {
    id: "civil-engineering",
    subject: "Civil Engineering",
    exams: "NEC License Preparation",
    duration: "2 months",
    mode: "Both, On-site And Online",
    description:
      "Our specialized NEC License Preparation Classes are designed to help engineering graduates excel in the NEC license examination and achieve their professional goals. This comprehensive course provides in-depth guidance, focusing on the core concepts and practical knowledge required for the exam.",
    img:LCivil
    },
  {
    id: "mechanical-engineering",
    subject: "Mechanical Engineering",
    exams: "NEC License Preparation",
    duration: "2 months",
    mode: "Both, On-site And Online",
    description:
      "Our specialized NEC License Preparation Classes are designed to help engineering graduates excel in the NEC license examination and achieve their professional goals. This comprehensive course provides in-depth guidance, focusing on the core concepts and practical knowledge required for the exam.",
  img:LMec
    },
  {
    id: "electrical-electronics-engineering",
    subject: "Electrical and Electronics Engineering",
    exams: "NEC License Preparation",
    duration: "2 months",
    mode: "Both, On-site And Online",
    description:
      "Our specialized NEC License Preparation Classes are designed to help engineering graduates excel in the NEC license examination and achieve their professional goals. This comprehensive course provides in-depth guidance, focusing on the core concepts and practical knowledge required for the exam.",
    img:LEle_Electronics
    },
    {
      id: "electronic-communication-and-information-engineering",
      subject: "Electronic Communication and Information Engineering",      
      exams: "NEC License Preparation",
      duration: "2 months",
      mode: "Both, On-site And Online",
      description:
        "Our specialized NEC License Preparation Classes are designed to help engineering graduates excel in the NEC license examination and achieve their professional goals. This comprehensive course provides in-depth guidance, focusing on the core concepts and practical knowledge required for the exam.",
      img:LEle_comu_info
      },
      {
        id:"electronics-communication-engineering",
        subject: "Electronic Communication Engineering",    
        exams: "NEC License Preparation",
        duration: "2 months",
        mode: "Both, On-site And Online",
        description:
          "Our specialized NEC License Preparation Classes are designed to help engineering graduates excel in the NEC license examination and achieve their professional goals. This comprehensive course provides in-depth guidance, focusing on the core concepts and practical knowledge required for the exam.",
          img:LEle_commu

      },
      {
        id: "electrical-electronics-engineering",
        subject: "Electrical and Electronics Engineering",
        exams: "NEC License Preparation",
        duration: "2 months",
        mode: "Both, On-site And Online",
        description:
          "Our specialized NEC License Preparation Classes are designed to help engineering graduates excel in the NEC license examination and achieve their professional goals. This comprehensive course provides in-depth guidance, focusing on the core concepts and practical knowledge required for the exam.",
        img:LEle_Electronics
        },
        {
          id:"information-technology-engineering",
          subject: "Information Technology Engineering",  
          exams: "NEC License Preparation",
          duration: "2 months",
          mode: "Both, On-site And Online",
          description:
            "Our specialized NEC License Preparation Classes are designed to help engineering graduates excel in the NEC license examination and achieve their professional goals. This comprehensive course provides in-depth guidance, focusing on the core concepts and practical knowledge required for the exam.",
            img:LInfo

        },
  {
    id: "architectural-engineering",
    subject: "Architectural Engineering",
    exams: "NEC License Preparation",
    duration: "2 months",
    mode: "Both, On-site And Online",
    description:
      "Our specialized NEC License Preparation Classes are designed to help engineering graduates excel in the NEC license examination and achieve their professional goals. This comprehensive course provides in-depth guidance, focusing on the core concepts and practical knowledge required for the exam.",
    img:LArch
    },
  
  {
    id: "information-technology-engineering",
    subject: "Information Technology Engineering",
    exams: "NEC License Preparation",
    duration: "2 months",
    mode: "Both, On-site And Online",
    description:
      "Our specialized NEC License Preparation Classes are designed to help engineering graduates excel in the NEC license examination and achieve their professional goals. This comprehensive course provides in-depth guidance, focusing on the core concepts and practical knowledge required for the exam.",
    img:LInfo
    },
    {
      id: "elctrical-engineering",
      subject: "Electrical Engineering",
      exams: "NEC License Preparation",
      duration: "2 months",
      mode: "Both, On-site And Online",
      description:
        "Our specialized NEC License Preparation Classes are designed to help engineering graduates excel in the NEC license examination and achieve their professional goals. This comprehensive course provides in-depth guidance, focusing on the core concepts and practical knowledge required for the exam.",
      img:LEle
      },

  // B.E Coaching
  {
    id: "ioe",
    subject: "IOE/Trivhuvan University",
    exams: "B.E Coaching",
    duration: "3 months",
    mode: "Both, On-site And Online",
    description:
      "Prepare for the IOE entrance exam with our expert-led coaching classes. Gain conceptual clarity, problem-solving techniques, and practice exams to secure your admission.",
     img:CIoe
    },
  {
    id: "pokhara-university",
    subject: "Pokhara University",
    exams: "B.E Coaching",
    duration: "3 months",
    mode: "Both, On-site And Online",
    description:
      "Comprehensive coaching for Pokhara University entrance exams, ensuring students excel with structured learning and mock tests.",
      img:CPokhara
    },
    {
      id: "purwanchal-university",
      subject: "Purwanchal University",
      exams: "B.E Coaching",
      duration: "3 months",
      mode: "Both, On-site And Online",
      description:
        "Structured classes for Purwanchal University entrance preparation, enhancing problem-solving skills and conceptual understanding.",
        img:CPurv
    },
  {
    id: "tribhuvan-university",
    subject: "Tribhuvan University Entrance Preparation",
    exams: "B.E Coaching",
    duration: "3 months",
    mode: "Both, On-site And Online",
    description:
      "Detailed coaching for Tribhuvan University entrance preparation, focusing on exam-oriented strategies and subject mastery.",
      img:CIoe
    },
  {
    id: "other",
    subject: "Other Univeristy",
    exams: "B.E Coaching",
    duration: "3 months",
    mode: "Both, On-site And Online",
    description:
      "Structured classes for Kathmandu University entrance preparation, enhancing problem-solving skills and conceptual understanding.",
  img:COth
    },

  // Trainings
  {
    id: "primavera",
    subject: "Primavera P6",
    exams: "Trainings",
    duration: "15 days",
    mode: "Online",
    description:
      "Learn Primavera P6, the most powerful project management software, with hands-on training and practical projects.",
    
    
    img:TPrimavera
    },
    {
      id:"ms-office-project","name":"MS Office Project",

    subject: "MS Office Project",
    exams: "Trainings",
    duration: "1 month",
    mode: "Online",
    description:
      "Master MS Office Project with our comprehensive training, covering all essential tools and features.",
    
    img:TMsOffice
    },
    {"id":"advanced-excel","name":"Advanced Excel",
    subject: "Advanced Excel",
    exams: "Trainings",
    duration: "1 month",
    mode: "Online",
    description:
      "Advanced Excel training to help you master complex formulas, functions, and data analysis techniques.",
    img:TAdvExcel
    },
    
    {
      id:"project-management","name":"Project Management",
    subject: "Project Management",
    exams: "Trainings",
    duration: "1 month",
    mode: "Online",
    description:
      "Comprehensive project management training covering all essential tools, techniques, and methodologies.",
    img:TProjMgmt
    },
    {
      id:"procument-mgmt-and-e-bid","name":"Procurement Management and E-Bidding",
    subject: "Procurement Management and E-Bidding",
    exams: "Trainings",
    duration: "1 month",
    mode: "Online",
    description:"Learn procurement management and e-bidding with our specialized training, covering all essential concepts and practices.",
  img:TProcMgmt  
  },
    

  {
    id: "autocad-electrical",
    subject: "AUTOCAD Electrical",
    exams: "Trainings",
    duration: "1.5 months",
    mode: "Online",
    description:
      "Learn AUTOCAD Electrical from basics to advanced levels, including circuit design and panel layout creation.",
   
    img:TAutoEle
    },
  {
    id: "autocad-2d-3d",
    subject: "AUTOCAD 2D & 3D",
    exams: "Trainings",
    duration: "2 months",
    mode: "Both, On-site And Online",
    description:
      "Master AUTOCAD for both 2D and 3D modeling, essential for engineers, architects, and designers.",
    img:TAutoCAD
    },
  { id: "rcc-structural-analysis", "name": "Structural Analysis & Design of RCC using IDEA StatiCa ETABS SAFE",
    subject: "Structural Analysis & Design of RCC using IDEA StatiCa ETABS SAFE",
    exams: "Trainings",
    duration: "2 months",
    mode: "Both, On-site And Online",
    description:
      "Specialized training for structural analysis and design of RCC structures using IDEA StatiCa, ETABS, and SAFE software.",
    img:TStruct
    },
   
  {
    id: "c-programming",
    subject: "C Programming",
    exams: "Trainings",
    duration: "1 month",
    mode: "Online",
    description:
      "Comprehensive C programming training covering fundamental to advanced concepts with hands-on practice.",
    img:TCProg 
    },
  {
    id: "python-django",
    subject: "Python Django",
    exams: "Trainings",
    duration: "2 months",
    mode: "Online",
    description:
      "Learn Django framework to build robust web applications with Python.",
    img:TPyth
    },
    {
      id: "cpp-programming",
      subject: "C++ Programming",
      exams: "Trainings",
      duration: "1 month",
      mode: "Online",
      description:
        "Master C++ programming with our comprehensive training, covering all essential concepts and practical projects.",
      img:TCPP
      },
      {
        "id":"laravel","name":"Laravel",
      subject: "Laravel",
      exams: "Trainings",
      duration: "1 month",
      mode: "Online",
      description:
        "Master Laravel framework to build robust web applications with PHP.",
      img:TLarvael

      },
    {
      id: "ai-digital-marketing",
      subject: "AI Powered Digital Marketing",
      exams: "Trainings",
      duration: "1 month",
      mode: "Online",
      description:
        "Learn AI-powered digital marketing strategies and tools to boost your online presence and engagement.",
      img:TASP
      },
    {
      id: "laravel",
      subject: "Laravel",
      exams: "Trainings",
      duration: "1 month",
      mode: "Online",
      description:
        "Master Laravel framework to build robust web applications with PHP.",
      img:TLarvael
      },
    {
      id: "digital-marketing",
      subject: "Digital Marketing",
      exams: "Trainings",
      duration: "1 month",
      mode: "Online",
      description:
        "Comprehensive digital marketing training covering all essential tools, strategies, and techniques.",
      img:TDig
      },
    {
      id: "graphic-designing",
      subject: "Graphic Designing",
      exams: "Trainings",
      duration: "1 month",
      mode: "Online",
      description:
        "Learn graphic designing with our specialized training, covering all essential tools and techniques.",
      img:TGrap
      },
    {
      id: "flutter",
      subject: "Flutter",
      exams: "Trainings",
      duration: "1 month",
      mode: "Online",
      description:
        "Master Flutter to build cross-platform mobile applications with a single codebase.",
      img:TFlutter
    },


  // Govt Exam Preparation
  {
    id: "nea-electrical-engineer-level-7",
    subject: "NEA - Electrical Engineer Level 7",
    exams: "Govt Exam",
    duration: "3 months",
    mode: "Both, On-site And Online",
    description:
      "Specialized training for NEA Electrical Engineer Level 7 government exam with expert guidance.",
     
    img:LokEE7
    },
  {
    id: "nea-electrical-supervisor-level-5",
    subject: "NEA - Electrical Supervisor Level 5",
    exams: "Govt Exam",
    duration: "3 months",
    mode: "Both, On-site And Online",
    description:
      "Specialized training for NEA - Electrical Supervisor Level 5 government exam with expert guidance.",
      img:LokEE5
    },
  {
    id:"nea-civil-engineer-level-7",
    subject: "NEA - Civil Engineer Level 7",
    exams: "Govt Exam",
    duration: "3 months",
    mode: "Both, On-site And Online",
    description:
      "Prepare for the NEA Civil Engineer Level 7 government exam with targeted preparation",
    img:LokCivil
    },
  {
    id: "computer-engineer-officer",
    subject: "Computer Engineer / Computer Officer",
    exams: "Govt Exam",
    duration: "3 months",
    mode: "Both, On-site And Online",
    description:
      "Get ready for the Computer Engineer / Computer Officer government examination with targeted preparation classes.",
    img:LokCECO
    },
  {
    id: "computer-operator",
    subject: "Computer Operator",
    exams: "Govt Exam",
    duration: "2 months",
    mode: "Online",
    description:
      "Preparation course for the Computer Operator government exam, covering all necessary topics and skills.",
    img:LokOpe
    },
  {
    "id": "nea-computer-engineer-level-7",
    "subject": "NEA - Computer Engineer Level 7",
    "exams": "Govt Exam", 
    "duration": "3 months",
    "mode": "Both, On-site And Online",
   
    "description": "Prepare for the NEA Computer Engineer Level 7 government exam with targeted preparation",
    img:LokCE
  },

  // MSC Entrance Preparation
  {
    id: "computer-engineering",
    subject: "Computer Engineering",
    exams: "MSC Entrance Preparation",
    duration: "3 months",
    mode: "Both, On-site And Online",
    description:
      "Specialized classes to help students crack the MSC Computer Engineering entrance exam with ease.",
  },
  {
    id: "mechanical-engineering",
    subject: "Mechanical Engineering",
    exams: "MSC Entrance Preparation",
    duration: "3 months",
    mode: "Both, On-site And Online",
    description:
      "Targeted preparation for MSC Mechanical Engineering entrance exams with structured guidance.",
  },
  {
    id: "civil-engineering",
    subject: "Civil Engineering",
    exams: "MSC Entrance Preparation",
    duration: "3 months",
    mode: "Both, On-site And Online",
    description:
      "Comprehensive training for MSC Civil Engineering entrance exams with conceptual and practical learning.",
  },
  {
    id: "electrical-electronics-engineering",
    subject: "Electrical and Electronics Engineering",
    exams: "MSC Entrance Preparation",
    duration: "3 months",
    mode: "Both, On-site And Online",
    description:
      "Intensive coaching to prepare students for MSC Electrical & Electronics Engineering entrance exams.",
  },
  {
    id: "engineering-training",
    subject: "Engineering-Trai",
    exams: "MSC Entrance Preparation",
    duration: "3 months",
    mode: "Both, On-site And Online",
    description:
      "Intensive coaching to prepare students for MSC Electrical & Electronics Engineering entrance exams.",
  }
  
];


export default function CivilEngineeringPage() {
  const params = useParams();  
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    if (params?.id) {
      const foundCourse = data.find((course) => course.id === params.id);
      setCourse(foundCourse || null);
      console.log(params.id);
    }
  }, [params]);

  if (!course) {
    return <div className="text-blue-500 text-center mt-10">Course Not Found</div>;
  }

  return (
    <div className=" bg-blue-900 flex  justify-center p-6">
      <div className="bg-white rounded-lg p-6 sm:p-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Course Details */}
        <div className="space-y-6 text-black">
          <h2 className="text-sm text-black">
            <span className="text-black">Home</span> / {course.subject} ({course.id})
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-black">{course.subject} </h1>

          <div className="flex items-center gap-4 text-black">
            <p className="flex items-center gap-2"><FaClock /> {course.duration}</p>
            <p className="flex items-center gap-2"><FaGraduationCap /> {course.exams}</p>
            <p className="flex items-center gap-2"><FaGlobe /> {course.mode}</p>
          </div>

          <p className="text-black">{course.description}</p>

          {/* Buttons */}
          <div className="flex gap-4">
          <a href={syllabusUrl} target="_blank" rel="noopener noreferrer">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        View Syllabus
      </button>
    </a>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">OLD QUESTIONS</button>
            <Link href="/register">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">ENROLL NOW</button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-300 rounded-2xl p-2 flex items-center justify-center">
          {/* <div className="relative w-40 h-40 sm:w-50 sm:h-50 rounded-full border-4 border-white flex items-center justify-center overflow-hidden"> */}
            <Image src={course.img} alt={course.subject}  className="h-full w-full rounded-2xl" />
          {/* </div> */}
          {/* <p className="absolute bottom-4 text-white font-bold">{course.subject} </p> */}
        </div>
      </div>
    </div>
  );
}
