import Image from "next/image";
import Logo from "../../public/logo.png";
import { Poppins } from "next/font/google"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], 
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <div className={`${poppins.className}`}>
     
         <div className="bg-blue-500 h-14 flex justify-between items-center pl-4 pr-18">
              <div>
                <p className="text-white">Notice: Upcoming classes will be running after Dashin</p>
              </div>
               <ul className="flex items-center text-white gap-4 cursor-pointer">
                <li>Login</li>
                <li>Register</li>
                <li ><button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg active:scale-95 cursor-pointer">Mock Test</button></li>
               </ul>
         </div>
         <div className="flex items-center justify-between px-22">
           <div className="h-16 w-16">
            <Image src={Logo} alt="logo" />
           </div>
           <div>
              <ul className="flex gap-4 cursor-pointer">
                <li>Home</li>
                <li>Courses</li>
               <li>Blog</li>
                <li>FAQ</li>
                <li>Support</li>
              </ul>
           </div>
         </div>
         <div className="bg-gray-200 h-96 mt-4">
            <div></div>
         </div>
         <div>
             <h1>B.E Coaching Classes</h1>
              <div>
                <div></div>
              </div>
         </div>
    </div>
  );
}
