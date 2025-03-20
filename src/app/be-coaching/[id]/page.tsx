"use client";
import { useState } from "react"
import Image from "next/image";

import Subj from "../../../../public/Loksewa_subjects/1.png"
import FMC1 from "../../../../public/B.E. coaching subjects/1.png"
import Hydrolics from "../../../../public/B.E. coaching subjects/2.png"
import EngineeringEconomics from "../../../../public/B.E. coaching subjects/3.png"
import DesignOfSteelAndTimber from "../../../../public/B.E. coaching subjects/4.png"
import TheoryOfStructureI from "../../../../public/B.E. coaching subjects/5.png"
import StructureAnalysis from "../../../../public/B.E. coaching subjects/6.png"
import TheoryOfStructureII from "../../../../public/B.E. coaching subjects/7.png"
import StrucureAnalyicsII from "../../../../public/B.E. coaching subjects/8.png"
import AppliedMechanics from "../../../../public/B.E. coaching subjects/9.png"
import AppliedMechanicsStatics from "../../../../public/B.E. coaching subjects/10.png"
import AppliedDynamics from "../../../../public/B.E. coaching subjects/11.png"
import AppliedMechanicsII from "../../../../public/B.E. coaching subjects/14.png"
import FMC13 from "../../../../public/B.E. coaching subjects/15.png"
import FMC14 from "../../../../public/B.E. coaching subjects/16.png"
import FMC15 from "../../../../public/B.E. coaching subjects/17.png"
import FMC16 from "../../../../public/B.E. coaching subjects/18.png"
import FMC17 from "../../../../public/B.E. coaching subjects/19.png"
import FMC18 from "../../../../public/B.E. coaching subjects/20.png"
import FMC19 from "../../../../public/B.E. coaching subjects/21.png"
import FMC20 from "../../../../public/B.E. coaching subjects/22.png"
import FMC21 from "../../../../public/B.E. coaching subjects/23.png"
import FMC22 from "../../../../public/B.E. coaching subjects/24.png"
import FMC23 from "../../../../public/B.E. coaching subjects/25.png"
import FMC24 from "../../../../public/B.E. coaching subjects/26.png"
import FMC25 from "../../../../public/B.E. coaching subjects/27.png"
import FMC26 from "../../../../public/B.E. coaching subjects/28.png"
import FMC27 from "../../../../public/B.E. coaching subjects/29.png"


import FMCcom1 from "../../../../public/B.E. coaching subjects/Computer Engineering (10).png"
import FMCcom2 from "../../../../public/B.E. coaching subjects/Computer Engineering (11).png"
import FMCcom3 from "../../../../public/B.E. coaching subjects/Computer Engineering (12).png"
import FMCcom4 from "../../../../public/B.E. coaching subjects/Computer Engineering (13).png"
import FMCcom5 from "../../../../public/B.E. coaching subjects/Computer Engineering (14).png"
import FMCcom6 from "../../../../public/B.E. coaching subjects/Computer Engineering (15).png"
import FMCcom7 from "../../../../public/B.E. coaching subjects/Computer Engineering (16).png"
import FMCcom8 from "../../../../public/B.E. coaching subjects/Computer Engineering (17).png"
import FMCcom9 from "../../../../public/B.E. coaching subjects/Computer Engineering (18).png"
import FMCcom10 from "../../../../public/B.E. coaching subjects/Computer Engineering (19).png"
import FMCcom11 from "../../../../public/B.E. coaching subjects/Computer Engineering (20).png"
import FMCcom12 from "../../../../public/B.E. coaching subjects/Computer Engineering (21).png"
import FMCcom13 from "../../../../public/B.E. coaching subjects/Computer Engineering (21).png"
import FMCcom14 from "../../../../public/B.E. coaching subjects/Computer Engineering (22).png"
import FMCcom15 from "../../../../public/B.E. coaching subjects/Computer Engineering (22).png"
import FMCcom16 from "../../../../public/B.E. coaching subjects/Computer Engineering (23).png"
import FMCcom17 from "../../../../public/B.E. coaching subjects/Computer Engineering (24).png"
import FMCcom18 from "../../../../public/B.E. coaching subjects/Computer Engineering (25).png"
import FMCcom19 from "../../../../public/B.E. coaching subjects/Computer Engineering (26).png"
import FMCcom20 from "../../../../public/B.E. coaching subjects/Computer Engineering (27).png"
import FMCcom21 from "../../../../public/B.E. coaching subjects/Computer Engineering (28).png"
import FMCcom22 from "../../../../public/B.E. coaching subjects/Computer Engineering (29).png"


const subjects = {
    "civil-engineering": [
      { name: "Fluid Mechanics", imgUrl: FMC1 },
      { name: "Subject 2", imgUrl: AppliedDynamics },
      { name: "Subject 3", imgUrl: AppliedMechanics },
      { name: "Subject 3", imgUrl: AppliedMechanicsII },
      { name: "Subject 3", imgUrl: TheoryOfStructureI },
      { name: "Subject 3", imgUrl: TheoryOfStructureII },
      { name: "Subject 3", imgUrl: FMC13 },
      { name: "Subject 3", imgUrl: FMC14 },
      { name: "Subject 3", imgUrl: FMC16 },
     
     
      { name: "Subject 3", imgUrl: FMC19 },
      { name: "Subject 3", imgUrl: FMC20 },
      { name: "Subject 3", imgUrl: FMC21 },
      { name: "Subject 3", imgUrl: FMC22 },
      { name: "Subject 3", imgUrl: FMC23 },
      { name: "Subject 3", imgUrl: FMC24 },
      { name: "Subject 3", imgUrl: FMC25 },
      { name: "Subject 3", imgUrl: FMC26 },
      { name: "Subject 3", imgUrl: FMC27 },
      
    ],
    "computer-engineering": [
      { name: "Subject A", imgUrl: FMCcom1 },
      { name: "Subject B", imgUrl: FMCcom2 },
      { name: "Subject C", imgUrl: FMCcom3 },
      { name: "Subject C", imgUrl: FMCcom4 },
      { name: "Subject C", imgUrl: FMCcom5 },
      { name: "Subject C", imgUrl: FMCcom6 },
      { name: "Subject C", imgUrl: FMCcom7 },
      { name: "Subject C", imgUrl: FMCcom8 },
      { name: "Subject C", imgUrl: FMCcom9 },
      { name: "Subject C", imgUrl: FMCcom10 },
      { name: "Subject C", imgUrl: FMCcom11 },
      { name: "Subject C", imgUrl: FMCcom12 },
      
      { name: "Subject C", imgUrl: FMCcom18 },
      // { name: "Subject C", imgUrl: FMCcom19 },
      { name: "Subject C", imgUrl: FMCcom20 },
      { name: "Subject C", imgUrl: FMCcom21 },
      
      
    ],
  };
  
  const Coaching = () => {
    const [selectedFaculty, setSelectedFaculty] = useState<keyof typeof subjects>(
      "civil-engineering"
    );
  
    return (
      <div className="flex flex-col items-center mt-30">
        {/* Buttons for Faculty Selection */}
        <div className="flex gap-4 mb-5">
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedFaculty === "civil-engineering"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => setSelectedFaculty("civil-engineering")}
          >
            Civil Engineering
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedFaculty === "computer-engineering"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => setSelectedFaculty("computer-engineering")}
          >
            Computer Engineering
          </button>
        </div>
  
        {/* Subject Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 ">
          {subjects[selectedFaculty].map((subject, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl p-2 border border-blue-200"
            >
              <Image src={subject.imgUrl} alt={subject.name} width={250} height={250} />
              {/* <div className="p-4">
                <h3 className="text-lg font-semibold">{subject.name}</h3>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Coaching;