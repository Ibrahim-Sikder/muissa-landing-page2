/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { Button, } from '@mui/material'
import logo from '../../../src/assets/logo/facebook-profile.png'
import Image from "next/image";
import { useState } from "react";
import MuissaModal from "./Modal";


export default function TaxTalksLanding() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="  text-white relative overflow-hidden">
      <div className="flex gap-x-5 items-center justify-between px-0 md:px-10  lg:px-40">
        <div className="w-24 sm:w-32 md:w-44 lg:w-56">
          <Image src={logo} alt="logo" />
        </div>
        <div className="divider"></div>
        <Button
          onClick={handleOpen}
          variant="contained"

          sx={{
            backgroundColor: '#fff',
            color: '#1591A3',
            padding: {
              xs: '4px 5px',
              sm: '10px 20px',
              md: '12px 32px',
            },
            fontWeight: 'bold',
            fontSize: {
              xs: '16px',
              sm: '18px',
              md: '20px',
            },
            borderRadius: '8px',
            borderBottom: '6px solid #1591A3',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease-in-out',
            zIndex: 1,


            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              backgroundColor: '#1591A3',
              transition: 'left 0.5s ease-in-out',
              zIndex: -1,
            },
            '&:hover': {
              color: '#fff',
              transform: 'translateY(-2px)',
              borderBottom: '5px solid #fff',
              '&::before': {
                left: 0,
              },
            },
            '&:active': {
              transform: 'scale(0.98) translateY(0)',
              boxShadow: `
                    0 1px 2px rgba(255, 255, 255, 0.1),
                    0 2px 4px rgba(255, 255, 255, 0.1),
                    0 4px 8px rgba(255, 255, 255, 0.1),
                    0 8px 16px rgba(255, 255, 255, 0.1),
                    0 16px 32px rgba(255, 255, 255, 0.1)
                  `,
              transition: 'all 0.1s',
            },
          }}
        >
          Book Metting
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center  ">

        <div className="relative text-center ">
          <div className="absolute -left-14 md:-left-4 -top-2 bg-[#1591A3] text-white py-2 px-4 transform -rotate-12">
            <p className="text-sm font-medium">MUISSA</p>
          </div>
        </div>

        <h3 className="text-xl lg:text-3xl font-bold leading-tight mt-16">
          ব্যবসায়ের জরুরী ফান্ড তৈরিতে পরামর্শ ও সহযোগিতা করা।
        </h3>
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mt-3 ">
          আপনার ব্যবসায়িক সাফল্যের পথে বিশ্বস্ত সাথী
        </h1>

        <p className="max-w-5xl mx-auto mt-3 text-xl text-center ">আপনি যদি আপনার আর্থিক লক্ষ্য গুলোকে অগ্রাধিকার দিয়ে থাকেন, কোথায় এবং কিভাবে বিনিয়োগ করবেন তার জন্য পরিকল্পনার প্রয়োজন বা বিনিয়োগ ব্যবস্থাপনায় সহায়তা চান তাহলে আপনি আমাদের Membership গ্রহন করুন। আমরা আপনাকে সঠিক পরামর্শ ও কার্যকরী মাধ্যম বের করে আপনার লক্ষ্য পৌছাতে সহায়তা করব।</p>




      </div>

      {
        open && (
          <MuissaModal open={open}
            onClose={handleClose} />
        )
      }

    </div>
  )
}
