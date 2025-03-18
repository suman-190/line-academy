import dbConnect from "../../../lib/dbConnect";
import User from "../../../model/user.model";

import bcrypt from "bcryptjs";
import {sendVerificationEMail} from "../../../helper/sendVarificationEmail"


export async function POST(request:Request){
    await dbConnect()

    try {
        const user= await request.json()
       const existingUserVerifiedByEmail= await User.findOne({email:user.email,isverified:true})
       if(existingUserVerifiedByEmail){
            return Response.json({
                success:false,
                message:"Email is already exist"
            },{
                status:400
            })
       }

       const existingUserByEmail = await User.findOne({email:user.email})
       const verifyCode = Math.floor(10000+Math.random()*9000).toString()

       if(existingUserByEmail){
           if (existingUserByEmail.isverified){
            return Response.json({
                success:false,
                 message:"User already Exist with this email"
         },{
             status:400,
             
         })
           }
           else{
            const hasedPassword = await bcrypt.hash(user.password,10)
            existingUserByEmail.password=hasedPassword
            existingUserByEmail.verifyCode=verifyCode
            existingUserByEmail.verifyCodeExpiry=new Date(Date.now()+3600000)
            await existingUserByEmail.save()
           }
       }
       else{
        const hasedPassword = await bcrypt.hash(user.password,10)
        const expiryDate = new Date()
        expiryDate.setHours(expiryDate.getHours()+1)
        const newUser = new User({
            name:user.name,
            email:user.email,
            examType:user.examType,
            verifyCode:verifyCode,
            course:user.course,
            password:hasedPassword,
           verifyCodeExpiry: expiryDate,


        })

        await newUser.save()
       }

       const userData = {
        name:user.name,
        email:user.email,
        verifyCode
       }

      const emailResponse=  await sendVerificationEMail(userData)
      if(!emailResponse.success){
        return Response.json({
               success:false,
               test:"TSR",
                message:emailResponse.message
        },{
            status:500,
            
        })
      }
      return Response.json({
        success:true,
         message:"User register Succesfully please verify your email"
 },{
     status:201,
     
 })
    } catch (error) {
        console.log(error)
        return Response.json({
            success:false,
            message:"Error registering User"

        },{
            status:500
        })
    }
}


