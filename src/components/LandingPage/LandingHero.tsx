/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import { motion } from 'framer-motion';  

export default function TaxTalksLanding() {

  const textAnimation = {
    initial: { opacity: 0, y: 50 }, 
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: 'easeOut' } 
    },
  };

  return (
    <div className="text-white h-auto lg:h-[40vh] mt-[50px] md:mt-[30px] lg:sectionMargin ">
      

      <div className="flex flex-col justify-center items-center">
       
        <motion.h3 
          className="text-xl lg:text-3xl font-bold leading-tight"
          initial="initial"
          animate="animate"
          variants={textAnimation}
        >
          ব্যবসায়ের জরুরী ফান্ড তৈরিতে পরামর্শ ও সহযোগিতা করা।
        </motion.h3>

        <motion.h1
          className="text-4xl text-center  xl:text-left lg:text-6xl font-bold leading-tight mt-3"
          initial="initial"
          animate="animate"
          variants={textAnimation}
        >
          আপনার ব্যবসায়িক সাফল্যের পথে বিশ্বস্ত সাথী
        </motion.h1>

        <motion.p
          className="max-w-5xl mx-auto mt-3 text-xl text-center"
          initial="initial"
          animate="animate"
          variants={textAnimation}
        >
          আপনি যদি আপনার আর্থিক লক্ষ্য গুলোকে অগ্রাধিকার দিয়ে থাকেন, কোথায় এবং কিভাবে বিনিয়োগ করবেন তার জন্য পরিকল্পনার প্রয়োজন বা বিনিয়োগ ব্যবস্থাপনায় সহায়তা চান তাহলে আপনি আমাদের Membership গ্রহন করুন। আমরা আপনাকে সঠিক পরামর্শ ও কার্যকরী মাধ্যম বের করে আপনার লক্ষ্য পৌছাতে সহায়তা করব।
        </motion.p>
      </div>
    </div>
  );
}
