"use client";
import { useState } from "react"
import Image from "next/image";
import Subj from "../../../../public/Loksewa_subjects/1.png"

const Coaching = ()=>{
    const [subject,setSubject]=useState("compterEngg")
    const handleSubjectChnage = (data:string)=>{
        setSubject(data)
    }
    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-2">
            <button onClick={()=>{
                handleSubjectChnage("computerEngg")
             }} className="border border-blue-600 px-3  text-blue-600 py-0.5 rounded-xl  cursor-pointer">Civil Engineering</button>
              <button onClick={()=>{
                handleSubjectChnage("computerEngg")
             }} className="border  border-blue-600 px-3 text-blue-600 py-0.5 rounded-xl  cursor-pointer">Computer Engineering </button>

<button onClick={()=>{
                handleSubjectChnage("computerEngg")
             }} className="border  border-blue-600 px-3 text-blue-600 py-0.5 rounded-xl  cursor-pointer">Mechanical Engineering </button>

<button onClick={()=>{
                handleSubjectChnage("computerEngg")
             }} className="border  border-blue-600 text-blue-600 px-3 py-0.5 rounded-xl  cursor-pointer">Electrical Engineering </button>
            </div>
            <div className="flex flex-wrap gap-1">
             <div className="border-blue-600 rounded-xs p-1 mt-4">
             <Image src={Subj} alt="img" height={120} width={120} className="rounded"></Image>
                 </div> 
                 <div className="border-blue-600 rounded-xs p-1 mt-4">
             <Image src={Subj} alt="img" height={120} width={120} className="rounded"></Image>
                 </div> 
                 <div className="border-blue-600 rounded-xs p-1 mt-4">
             <Image src={Subj} alt="img" height={120} width={120} className="rounded"></Image>
                 </div> 
                 <div className="border-blue-600 rounded-xs p-1 mt-4">
             <Image src={Subj} alt="img" height={120} width={120} className="rounded"></Image>
                 </div> 
                 <div className="border-blue-600 rounded-xs p-1 mt-4">
             <Image src={Subj} alt="img" height={120} width={120} className="rounded"></Image>
                 </div> 
                 <div className="border-blue-600 rounded-xs p-1 mt-4">
             <Image src={Subj} alt="img" height={120} width={120} className="rounded"></Image>
                 </div> 
           
            </div>
        </div>
    )
}


export default Coaching