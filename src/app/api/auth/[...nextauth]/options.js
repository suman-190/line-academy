import {NextAuthOptions} from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/model/user.model";

export const authOptions={
  providers: [
    CredentialsProvider({
       id:"credentials",
       name:"Credentials",
       credentials: {
          name:{ label: "Name", type: "text", placeholder: "exaple" },
          email: { label: "Email", type: "email", placeholder: "exaple@gmail.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          await dbConnect()
          try {
          const user =   await User.findOne({
               email:credentials.identifier.email
            })
            if(!user){
              throw new Error("No Error found with this email ")
            }
            if(!user.isVerified){
              throw new Error('Please verify your account before login')
            }
  
           const isPasswordCorrect=  await bcrypt.compare(credentials.password,user.password)
           if(isPasswordCorrect){
            return user
           }
           else{
            throw new Error("Incorrect Password")
           }
          } catch (error) {
            throw new Error(error)
          }
         
      
    }})
  ],
  callbacks: {
   
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user }) {
      return token
    }

},
  pages:{
    signIn:'/sign-in'
  },
  session:{
    strategy:"jwt"
  },
  secret:process.env.NEXT_AUTH_SECRET,

}


