"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";

import Logo from "../../public/Logo-white.png"

type props= {
  className?:string
}

const Nav = ({className}:props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const [showNav, setShowNav] = useState(true);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(false); // Hide navbar when scrolling
      clearTimeout(scrollTimeout);

      // Set timeout to show navbar after user stops scrolling
      scrollTimeout = setTimeout(() => {
        setShowNav(true);
      }, 500); // Adjust time as needed (500ms)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const categories = [
    {
      "title": "N.E.C License Preparation",
      "exams": [
        { "id": "computer-engineering", "name": "Computer Engineering" },
        { "id": "civil-engineering", "name": "Civil Engineering" },
        { "id": "mechanical-engineering", "name": "Mechanical Engineering" },
        { "id": "electrical-electronics-engineering", "name": "Electrical and Electronics Engg..." },
        {"id":"architectural-engineering","name":"Architectural Engineering"},
        {"id":"electronics-communication-engineering","name":"Electronics and Commun... Engg..."},
        {"id":"elctrical-engineering","name":"Electrical Engineering"},
 
        {"id":"information-technology-engineering","name":"Information Technology Engineering"},
        


      ]
    },
    {
      "title": "B.E Coaching",
      "exams": [
        { "id": "ioe", "name": "IOE" },
        { "id": "pokhara-university", "name": "Pokhara University" },
        { "id": "purwanchal-university", "name": "Purwanchal University" },
       
        { "id": "other", "name": "Other" }
      ]
    },
    {
      "title": "Trainings",
      "exams": [
        {"id":"primavera","name":"Primavera P6"},
        {"id":"ms-office-project","name":"MS Office Project"},
        {"id":"advanced-excel","name":"Advanced Excel"},
        {"id":"project-management","name":"Project Management"},
        {"id":"procument-mgmt-and-e-bid","name":"Procurement Management and E-Bidding"},
        { "id": "rcc-structural-analysis", "name": "Structural Analysis & Design of RCC using IDEA StatiCa ETABS SAFE" },
        { "id": "autocad-electrical", "name": "AUTOCAD Electrical" },
        { "id": "autocad-2d-3d", "name": "AUTOCAD 2D & 3D" },
        { "id": "municipal-mapping", "name": "Municipal Map Making & 3D Modeling using Vray SketchUp" },
        { "id": "c-programming", "name": "C Programming" },
        { "id": "ai-digital-marketing", "name": "AI Powered Digital Marketing" },
        { "id": "python-django", "name": "Python Django" },
        { "id": "cpp-programming", "name": "C++ Programming" },
        {"id":"laravel","name":"Laravel"},
        {"id":"asp-net","name":"ASP.NET"},
      ]
    },
    {
      "title": "Lok Sewa",
      "exams": [
        { "id": "nea-electrical-engineer-level-7", "name": "NEA - Electrical Engineer Level 7" },
        { "id": "nea-electrical-supervisor-level-5", "name": "NEA - Electrical Supervisor Level 5" },
        { "id": "nea-computer-engineer-level-7", "name": "NEA - Computer Engineer Level 7" },
        { "id": "nea-civil-engineer-level-7", "name": "NEA - Civil Engineer Level 7" },
        { "id": "computer-engineer-officer", "name": "Computer Engineer / Computer Officer" },
        { "id": "computer-operator", "name": "Computer Operator" }
      ]
    }
    ,
    {
      "title": "MSC Entrance Preparation",
      "exams": [
        { "id": "computer-engineering", "name": "Computer Engineering" },
        { "id": "mechanical-engineering", "name": "Mechanical Engineering" },
        { "id": "civil-engineering", "name": "Civil Engineering" },
        { "id": "electrical-electronics-engineering", "name": "Electrical and Electronic Engineering" }
      ]
    }
  ]
  

  const menuItems = [
    {"name": "Home",
      "href": "/"},
    
   
    
    {"name": "About Us",
      "href": "/about"},
      {"name": "Contact Us",
        "href": "/contact"},
   
  ]
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    let scrollTimeout:any;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setShowNav(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

const [screentWidth,setScreenWidth]=useState(0)
  useEffect(()=>{
    
       window.addEventListener("resize",(e)=>{
          setScreenWidth(window.innerWidth)
       })
  })

  console.log(screentWidth)



  return (
    <div className={`fixed w-full  bg-white shadow-md transition-transform duration-700 ease-in-out transform ${showNav ? "translate-y-0" : "-translate-y-full"} z-50 ${showNav ? "top-0" : "-top-full"}`}> 
    
      <motion.div
        className="bg-[#004aad] px-4     py-2 min-h-16 w-full sm:flex items-center justify-center transition-transform duration-500 "
        
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      <Link href="/">
      <Image src={Logo} alt="Logo" width={100} height={100} />
      </Link>
      <div className="flex items-center gap-1 sm:gap-10 justify-between px-4  sm:px:2 lg:px-22 pb-4">
        <div
          className="relative inline-block top-2"
          onMouseLeave={() => {
            setOpenMenu(false);
            setOpenSubMenu(false);
          }}
        >
          {/* Dropdown Button */}
          <button
            className="px-1  sm:px-4 sm:py-2  border border-white text-white rounded-md w-34 lg:w-auto"
            onMouseEnter={() => setOpenMenu(true)}
          >
            <span>All Courses</span> <span  className="relative top-0.5 ">▼</span>
          </button>

          {/* Full Menu (Main & Submenu Wrapper) */}
          <AnimatePresence>
            {openMenu && (
              <motion.div
                className="absolute left-0 top-10 bg-white shadow-lg rounded-lg min-w-64 p-2 sm:left-0 border border-blue-600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {/* Category List */}
                <ul>
                  {categories.map((category) => (
                    <li
                      key={category.title}
                      className="p-2 hover:bg-gray-200 cursor-pointer flex justify-between"
                      onMouseEnter={() => {
                        setSelectedCategory(category.title);
                        setOpenSubMenu(true);
                      }}
                    >
                      {category.title} <GoChevronRight/>                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submenu - Opens on Hover */}
          <AnimatePresence>
            {selectedCategory && openSubMenu && openMenu && (
              <motion.div
                className="absolute left-64 top-12 bg-white shadow-lg rounded w-64 p-2 sm:left-64 sm:w-fit sm:min-h-96 border border-blue-600 z-10"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <ul className="grid grid-cols-2 gap-4 sm:w-xl">
                <ul className="grid grid-cols-2 gap-4 sm:w-xl">
            {categories
              .find((category) => category.title === selectedCategory)
              ?.exams.map(({ name, id }) => (
                <Link
                  href={
                    selectedCategory === "B.E Coaching"
                      ? `/be-coaching/${id}`
                      : `/course-details/${id}`
                  }
                  key={name}
                >
                <li className="p-2 rounded shadow hover:shadow-xl border-2 border-transparent hover:border-gray-300 transition-all duration-300 cursor-pointer">
  {name}
</li>

                </Link>
              ))}
          </ul>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div>
      <ul className="flex gap-1 sm:gap-4  cursor-pointer pt-4">
        {menuItems.map(({name,href}, index) => (
          <Link href={href} key={index}>
          <motion.li
            
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className=" sm:px-4 sm:py-2 rounded-lg text-white bg-transparent transition-all duration-300 ease-in-out 
              hover:bg-white hover:text-black hover:shadow-lg"
          >
            {name}
          </motion.li>
          </Link>
        ))}
      </ul>
    </div>
      </div>

        <motion.ul
          className="flex items-center gap-2 text-white  cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
             className="sm:px-4 sm:py-2 rounded-lg text-white bg-transparent transition-all duration-300 ease-in-out 
              hover:bg-white hover:text-black hover:shadow-lg"
          >
            <Link href="/login">Login</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
             className="sm:px-4 sm:py-2 rounded-lg text-white bg-transparent transition-all duration-300 ease-in-out 
              hover:bg-white hover:text-black hover:shadow-lg"
          >
            <Link href="/register">Register</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button
              className="py-1 px-3 sm:py-2 sm:px-6 bg-blue-600 text-white border border-transparent rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border-white hover:shadow-lg active:scale-95 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Mock Test
            </motion.button>
          </motion.li>
        </motion.ul>
      </motion.div>
      
    </div>
  );
};

export default Nav;
