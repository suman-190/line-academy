"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { HiEye, HiEyeOff } from "react-icons/hi";
// import Link from "next/link";

import Logo from "../../../../public/logo.png"; // Adjust the path as needed

// Define TypeScript Interface for Form Fields
interface RegisterFormInputs {
  name: string;
  email: string;
  examType: string;
  branch: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle form submission state
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    setIsSubmitting(true); // Set submitting state to true
    console.log("Register Data:", data);

    // Simulating a backend API call
    setTimeout(() => {
      setIsSubmitting(false); // Set submitting state to false after "submit"
    }, 2000);
  };

  const password = watch("password");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-yellow-500 mt-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 mt-4">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src={Logo} alt="Logo" width={80} height={80} />
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">Register</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

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

          {/* Exam Type Dropdown */}
          <div>
            <label className="block font-medium text-gray-700">Exam Type</label>
            <select
              {...register("examType", { required: "Please select an exam type" })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Exam Type</option>
              <option value="Nepal Engineering Council">Nepal Engineering Council</option>
              <option value="Lok Sewa">Lok Sewa</option>
              <option value="Coaching">Coaching</option>
              <option value="Training">Training</option>
            </select>
            {errors.examType && <p className="text-red-500 text-sm">{errors.examType.message}</p>}
          </div>

          {/* Branch Dropdown based on Exam Type */}
          <div>
            <label className="block font-medium text-gray-700">Branch</label>
            <select
              {...register("branch", { required: "Please select a branch" })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Branch</option>
              {watch("examType") === "Nepal Engineering Council" && (
                <>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Computer Engineering">Computer Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                </>
              )}
              {watch("examType") === "Coaching" && (
                <>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="AutoCAD">AutoCAD</option>
                  <option value="Project Management">Project Management</option>
                </>
              )}
              {watch("examType") === "Training" && (
                <>
                  <option value="Data Science">Data Science</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                </>
              )}
              {watch("examType") === "Lok Sewa" && (
                <>
                  <option value="NEA">NEA</option>
                  <option value="Electrical Engineer">Electrical Engineer</option>
                  <option value="Computer Officer">Computer Officer</option>
                </>
              )}
            </select>
            {errors.branch && <p className="text-red-500 text-sm">{errors.branch.message}</p>}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block font-medium text-gray-700">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
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

          {/* Confirm Password Field */}
          <div className="relative">
            <label className="block font-medium text-gray-700">Confirm Password</label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              {...register("confirmPassword", { 
                required: "Please confirm your password",
                validate: (value) => value === password || "Passwords do not match"
              })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm your password"
            />
            <div 
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} 
              className="absolute right-3 top-11 transform -translate-y-1/2 cursor-pointer"
            >
              {confirmPasswordVisible ? <HiEyeOff size={24} /> : <HiEye size={24} />}
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          {/* Submit Button */}
         <div className="flex ">
         <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        
         </div>
        </form>
      </div>
    </div>
  );
}
