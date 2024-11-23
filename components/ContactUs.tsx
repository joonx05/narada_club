import React from 'react';
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({ subsets: ['latin'] });

function ContactUs() {
  return (
    <>
    <div className="max-w-2xl mx-auto p-6">
    <h1 className={`text-[#f8f3e9] text-6xl text-center mb-12 ${cormorant.className} font-[700]`}>Contact Us</h1>
    <div className="max-w-xl mx-auto p-6 bg-[#020305] rounded-lg shadow-lg">
      
      {/* Header Section */}
      <div className="space-y-4 font-sans">
        <h1 className={`text-4xl sm:text-5xl text-white font-bold ${cormorant.className}`}>
          Let's talk about<br />all things!
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Write to us or give us a call. We will reply to you as soon as possible. But yes, it can take up to 24 hours.
        </p>
      </div>

      {/* Form Section */}
      <form className="space-y-4 mt-6 font-sans">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-md bg-[#0c153b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-md bg-[#0c153b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input
          type="text"
          placeholder="Questions"
          className="w-full px-4 py-3 rounded-md bg-[#0c153b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <textarea
          placeholder="Write in details"
          rows={4}
          className="w-full px-4 py-3 rounded-md bg-[#0c153b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        <button
          type="submit"
          className="w-fit  p-3 bg-blue-500 rounded-full text-white font-medium hover:bg-blue-600 transition duration-300"
        >
          Send now
        </button>
      </form>
    </div>
    </div>
    </>
  );
}

export default ContactUs;
