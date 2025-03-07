"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Head from "next/head";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <>
      <Head>
        <title>Contact Us - Line Academy Pvt. Ltd.</title>
        <meta name="description" content="Get in touch with Line Academy Pvt. Ltd." />
      </Head>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 text-center md:text-left">
              Line Academy Pvt. Ltd.
            </h1>
            <div className="text-gray-700 space-y-2 text-center md:text-left">
              <p>📍 Jal Vinayak Marg, Na Tole, Pulchowk, Lalitpur</p>
              <p>📞 +977-9749424636 / 01-5445555 / +977-9763604776</p>
              <p>📩 info.lineacademy@gmail.com</p>
              <p>📞 Inquiry Hotline: 01-5445555</p>
            </div>

            {/* Google Map Embed */}
            <div className="w-full">
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.364414051084!2d85.3146552742351!3d27.6751297269139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19fb219c4cab%3A0x27ad2d020a7d839b!2sLine%20Academy!5e0!3m2!1sen!2snp!4v1741338717321!5m2!1sen!2snp"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-md rounded-lg p-6 sm:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4">GET IN TOUCH!</h2>

            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">Name *</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">Email *</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/, message: "Invalid email address" },
                  })}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>

              {/* Mobile Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">Mobile Number *</label>
                <input
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" },
                  })}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 9841002000"
                />
                {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile.message}</p>}
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">Subject *</label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Subject"
                />
                {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">Message *</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Your Message"
                />
                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-all duration-300 flex justify-center items-center gap-2"
              >
                <span>SUBMIT ENQUIRY</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
}
