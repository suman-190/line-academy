"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Primavera from "../../../../public/Training_subjects/1.png"
import MsOffice from "../../../../public/Training_subjects/2.png"
import AdvExcel from "../../../../public/Training_subjects/3.png"
import ProjectManagement from "../../../../public/Training_subjects/4.png"
import ProcurementManagemt from "../../../../public/Training_subjects/5.png"

import AutoCadEle from "../../../../public/Training_subjects/9.png"
import AutoCad2D3d from "../../../../public/Training_subjects/10.png"
import StructuralAnalysis from "../../../../public/Training_subjects/11.png"
import SketchUp from "../../../../public/Training_subjects/12.png"

import Python from "../../../../public/Training_subjects/13.png"
import CProg from "../../../../public/Training_subjects/14.png"
import CppProgram from "../../../../public/Training_subjects/15.png"
import AspdotNet from "../../../../public/Training_subjects/16.png"

import Image from "next/image";
import Link from "next/link";


const traingData=[
    {
        id: "engineering-training",
        subject: "Engineering-Trai",
        details:[{
            hrf:"autocad-electrical",
            img:AutoCadEle
        },
        {
            hrf:"autocad-2d-3d",
            img:AutoCad2D3d
        },
        {
            hrf:"rcc-structural-analysis",
            img:StructuralAnalysis
        },
        {
            hrf:"project-management",
            img: ProjectManagement
        },
        {
            hrf:"municipal-mapping",
            img: SketchUp
        },
        {
            hrf:"procument-mgmt-and-e-bid",
            img:ProcurementManagemt
        }
    
    ]
      },
      {
        id: "it-training",
        subject: "Engineering-Training",
        details:[{
            hrf:"python-django",
            img:Python
        },
        {
            hrf:"cpp-programming",
            img:CppProgram
        },
        {
            hrf:"advanced-excel",
            img:AdvExcel
        },
        {
            hrf:"c-programming",
            img: CProg
        },
        {
            hrf:"asp-net",
            img: AspdotNet
        },
        {
            hrf:"procument-mgmt-and-e-bid",
            img:ProcurementManagemt
        }
    
    ]
      }
      , {
        id: "professional-training",
        subject: "Engineering Training",
        details:[{
            hrf:"primavera",
            img:Primavera
        },
        {
            hrf:"ms-office-project",
            img:MsOffice
        },
        {
            hrf:"advanced-excel",
            img:AdvExcel
        },
        {
            hrf:"project-management",
            img: ProjectManagement
        },
        {
            hrf:"project-management",
            img: ProjectManagement
        },
        {
            hrf:"procument-mgmt-and-e-bid",
            img:ProcurementManagemt
        }
    
    ]
        
              },
      {
        id: "management-training",
        subject: "Management Training",
        details:[{
            hrf:"primavera",
            img:Primavera
        },
        {
            hrf:"ms-office-project",
            img:MsOffice
        },
        {
            hrf:"advanced-excel",
            img:AdvExcel
        },
        {
            hrf:"project-management",
            img: ProjectManagement
        },
        {
            hrf:"project-management",
            img: ProjectManagement
        },
        {
            hrf:"procument-mgmt-and-e-bid",
            img:ProcurementManagemt
        }
    
    ]
      }
]
const TrainingDetails = ()=>{
    const params = useParams();  
      const [course, setCourse] = useState<any>(null);
    
      useEffect(() => {
        if (params?.id) {
          const foundCourse = traingData.find((course) => course.id === params.id);
          setCourse(foundCourse || null);
          console.log(foundCourse)
          console.log(params.id);
        }
      }, [params]);
    
      if (!course) {
        return <div className="mt-10">Course Not Found</div>;
      }
    return (
        <div className=" text-blue-600 flex justify-center">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-center text-2xl">{course.subject}</h1>
              <div className="flex gap-3 flex-wrap justify-center">
              {course.details.map(({hrf,img},index)=>{
                return( <Link href={`/course-details/${hrf}`} key={index} className="border border-amber-200 p-2 rounded-2xl">
                <Image src={img} alt="img" height={150} width={150} className="rounded-xl"/>
                </Link>)
              })}
              </div>
            </div>
        </div>
    )
}

export default TrainingDetails;