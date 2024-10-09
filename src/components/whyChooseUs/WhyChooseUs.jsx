import React from 'react';
import { FaFire } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaUserShield } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { motion } from "framer-motion";
import { SlideLeft } from '../../utility/animation';

const WhyChooseData = [
  {  
    id: 1,      
    icon: <FaFire />,
    title: "Boost Safety with Early Fire Warnings",
    desc: "Get real-time alerts on potential fire risks, keeping your workplace safer and reducing costly damages.",
    bgColor: "#E75A4F",
    delay: 0.3,
  },
  {  
    id: 2,      
    icon: <IoIosCheckmarkCircle />,
    title: "Always ensure you stay compliant with ease.",
    desc: "Easily meet air quality regulations with automated tracking and reporting, saving time and stress.",
    bgColor: "#0000ff",
    delay: 0.3,
  },
  {  
    id: 3,      
    icon: <FaUserShield />,  
    title: "Protect Your Team and Lower Expenses",    
    desc: "Keep your workplace safe with early alerts on air quality, helping to prevent health risks and reduce unexpected costs.",
    bgColor: "#41921e",
    delay: 0.3,
  },
  {
    id: 4,      
    icon: <CiClock2 />,
    title: "Monitor Air Quality Anytime, Anywhere",
    desc: "Enjoy 24/7 access to live air quality data and receive instant alerts, so you’re always in control.",
    bgColor: "#A02334",
    delay: 0.3,
  }
];

const WhyChooseUs = () => {
  return (
    <div className='beige'>
      <div className='container py-24'>
        <div className='space-y-4 p-6 text-center max-w-[2000px] mx-auto mb-5'>
          <h1 className='uppercase font-semibold text-ahmer text-600'>
            Why Choose Us 
          </h1>
          <p className='text-secondaryGris font-semibold text-3xl'>
            Discover the advantages of our air quality monitoring solutions
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {WhyChooseData.map((item) => {
              return (
                <motion.div 
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                className='space-y-4 p-8 min-h-[200px] rounded-xl shadow-[0_0_20px_0_rgba(0,0,0,0.15)]'> {/* Increased padding and min-height */}
                <div style={{ backgroundColor: item.bgColor }} className='w-10 h-10 rounded-lg flex justify-center items-center text-white'>
    <div className='text-2xl'>{item.icon}</div>
  </div>
                  <p className=' font-semibold'>{item.title}</p>
                  <p className=' text-sm text-gray-500'>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
