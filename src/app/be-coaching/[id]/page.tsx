"use client";
import { useState } from "react"

const Coaching = ()=>{
    const [subject,setSubject]=useState("compterEngg")
    const handleSubjectChnage = (data:string)=>{
        setSubject(data)
    }
    return (
        <div>
             <button onClick={()=>{
                handleSubjectChnage("computerEngg")
             }}></button>
            <h1>Hello</h1>
        </div>
    )
}


export default Coaching