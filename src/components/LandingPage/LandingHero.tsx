/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import logo from '../../../src/assets/logo/facebook-profile.png'
import Image from "next/image";

import MuissaButton from "./Button";
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
    <div className="text-white relative overflow-hidden">
      <div className="flex gap-x-5 items-center justify-between px-0 md:px-10 lg:px-40">
        <div className="w-24 sm:w-32 md:w-44 lg:w-56">
          <Image src={logo} alt="logo" />
        </div>
        <div className="divider"></div>
        <MuissaButton />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="relative text-center">
          <div className="absolute -left-14 md:-left-4 -top-2 bg-[#1591A3] text-white py-2 px-4 transform -rotate-12">
            <p className="text-sm font-medium">MUISSA</p>
          </div>
        </div>

        <motion.h3 
          className="text-xl lg:text-3xl font-bold leading-tight mt-16"
          initial="initial"
          animate="animate"
          variants={textAnimation}
        >
          ব্যবসায়ের জরুরী ফান্ড তৈরিতে পরামর্শ ও সহযোগিতা করা।
        </motion.h3>

        <motion.h1
          className="text-4xl lg:text-6xl font-bold leading-tight mt-3"
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
