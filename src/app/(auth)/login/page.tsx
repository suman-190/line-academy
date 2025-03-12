"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Logo from "../../../../public/logo.png"; // Adjust the path as needed
import { HiEye, HiEyeOff } from "react-icons/hi"; // Import view and hide icons

// Define TypeScript Interface for Form Fields
interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="flex justify-center p-10 bg-gradient-to-br from-blue-500 to-white ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src={Logo} alt="Logo" width={80} height={80} />
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">Login</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required", 
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } 
              })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block font-medium text-gray-700">Password</label>
            <input
              type={passwordVisible ? "text" : "password"} // Toggle between text and password
              {...register("password", { 
                required: "Password is required", 
                minLength: { value: 6, message: "Minimum 6 characters required" } 
              })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
            <div 
              onClick={() => setPasswordVisible(!passwordVisible)} 
              className="absolute right-3 top-11 transform -translate-y-1/2 cursor-pointer"
            >
              {passwordVisible ? <HiEyeOff size={24} /> : <HiEye size={24} />}
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
