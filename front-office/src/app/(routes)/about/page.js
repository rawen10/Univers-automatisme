'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
import "../../../styles/contact.css";
import Image from 'next/image';
import hero from '../../../images/hero.png'
import "../../../styles/about.css";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, Send } from 'lucide-react';


import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';
import DevImg from '@/components/DevImg';
import Socials from '@/components/Socials';
import Badge from '@/components/Badge';
import CountUp from 'react-countup';

function page() {

  return (


    <section className=" w-full min-h-screen mb-20">
      <div className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
        <div className='container mx-auto'>
          {/* <h2 className="font-PlayfairDisplay section-title mb-8 xl:mb-16 text-center mx-auto">
                  About Us
                </h2>
         */}
          <div className='flex justify-evenly space-x-10'>
            {/* image */}
            <div className='hidden xl:flex relative mb-0'>
              {/* badge 1 */}
              {/* <Badge
                  containerStyles='absolute top-[24%] -left-[5rem]'
                  icon={<RiBriefcase4Fill />}
                  endCountNum={3}
                  badgeText='Years Of Experience'
                /> */}
              {/* badge 2 */}
              {/* <Badge
                  containerStyles='absolute top-[80%] -left-[1rem]'
                  icon={<RiTodoFill />}
                  endCountNum={6}
                  endCountText='k'
                  badgeText='Finished Projects'
                /> */}
              {/* badge 3 */}
              {/* <Badge
                  containerStyles='absolute top-[55%] -right-8'
                  icon={<RiTeamFill />}
                  endCountNum={9}
                  endCountText='k'
                  badgeText='Happy Clients'
                /> */}
              <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
              <DevImg
                containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
                imgSrc='/hero/developer.png'
              />
            </div>
            {/* text */}

            <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
              {/* <h2 className="font-PlayfairDisplay section-title mb-8 xl:mb-16 text-center mx-auto">
                  About Us
                </h2> */}
              <span className="inline-flex lg:text-center text-4xl font-caveat bg-clip-text text-transparent bg-gradient-to-r from-[#B8D941] to-[#B8D941] mb-6 leading-7">Know more about univers automatisme </span>
              {/* <p className='text-3xl mb-4 font-caveat text-start text-[#B8D941] '> Know more about univers automatisme   */}
              {/* </p> */}
              <h2 className='h2 mb-8'>Hello, my name is Ryan Davi, my name is Ryan Davis
                {/* <h1 className='h1 mb-4'>Hello, my name is Ryan Davis</h1> */}
              </h2>
              <p className='subtitle max-w-[490px]'>Brief description with insights into myself, my vocational journey <br /> and what I engage in professionally.and what I engage in <br /> professionally.and what I engage in professionally.</p>
              <div>
                <Button className='gap-x-2'>
                  Contact us <Send size={18} />
                </Button>
              </div>



              {/* buttons */}
              {/* <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                  <Link href='/contact'>
                    <Button className='gap-x-2'>
                      Contact me <Send size={18} />
                    </Button>
                  </Link>
                  <Button variant='secondary' className='gap-x-2'>
                    Download CV
                    <Download size={18} />
                  </Button>
                </div> */}
              {/* socials */}
              {/* <Socials
                  containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                  iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
                /> */}
            </div>
          </div>
          {/* icon */}
          <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
            <RiArrowDownSLine className='text-3xl text-primary' />
          </div>
        </div>
      </div>

      <section className='relative  mx-auto  flex flex-col justify-center  overflow-hidden'>
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 pt-16 lg:pt-24">
          <h2 className="font-PlayfairDisplay section-title mb-8 xl:mb-16 text-center mx-auto lg:text-center">
            Our mission and vision
          </h2>
          <div className='grid md:grid-cols-2 relative z-10  gap-12 '>
            <div className='relative '>
              <div className=' w-3/4 h-auto absolute z-10 inset-0 bg-gradient-to-r from-[#B8D941] to-[#EAF2AE] shadow-lg transform -skew-y-6  sm:skew-y-0 sm:-rotate-6 sm:rounded-lg'>
              </div>
              <div className='w-3/4 h-auto  relative z-20 p-6 bg-white md:flex justify-between shadow-lg rounded-lg'>
                <div className='sm:flex flex-col justify-between space-y-4 py-4 md:pr-6'>
                  <div className='flex justify-between'>
                    <div>
                      <h2 className='text-lg text-[#dee897]'>Our mission</h2>
                      <h1 className='pt-1 text-5xl font-caveat text-[#B8D941]'>Our mission</h1>

                    </div>
                    <div className='ml-8'>
                      <svg version="1.1" viewBox="0 0 2048 2048" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(1782,64)" d="m0 0h64l34 2 41 4 25 4 11 4 8 7 6 12 4 19 4 30 4 47 1 30v33l-2 48-4 45-7 49-8 43-9 40-11 41-12 39-14 40-15 38-15 35-10 22-20 40-12 22-11 20-15 25-14 23-11 17-18 27-12 17-13 18-16 21-12 16-9 11-28 34-9 10-7 8-10 11-9 11-9 9-7 8-13 13-3 4h-2l-2 4-28 28h-2v2l-8 7-13 13-8 7-13 12-8 7-15 13-13 11-17 14-16 13-9 7-13 10-19 14-21 16-17 12-32 22-24 16-34 22-21 13-10 6 10 28 7 24 6 31 3 30v37l-2 25-5 30-6 25-8 26-8 22-11 25-12 24-13 22-9 14-11 16-12 16-10 13-12 14-9 10-7 8-35 35-8 7-14 12-28 22-17 12-18 12-21 13-18 10-23 12-28 13-26 10-27 9-31 8-32 6-22 3-11-1-12-6-7-8-4-9-1-4v-8l3-10 6-9 21-21 7-8 12-13 9-11 7-8 11-14 12-16 20-30 9-15 11-20 11-24 9-24 8-27 6-31 2-20 1-20 2-8 4-8 9-8 10-4h14l10 4 8 7 5 9 2 6v24l-2 22-5 30-7 28-10 30-10 24-11 23-13 23-12 20-15 22-14 19-6 8 15-6 30-13 26-13 19-11 22-14 20-14 13-10 14-11 15-13 12-11 7-7 8-7 7-8 9-9 9-11 9-10 10-13 13-18 10-15 12-20 9-16 13-28 11-29 7-24 6-29 3-28v-38l-3-25-4-20-7-25-2-9-21 11-18 10-49 26-16 8-29 14-38 18-36 16-45 19-41 16-41 15-35 11-5 1h-9l-11-4-11-9-5-5-5-6-7-6-7-8-266-266-5-10-1-3v-12l6-20 14-41 18-47 12-29 12-28 12-27 13-28 11-24 24-48 15-28 12-23 10-18 5-8v-2l-24-8-21-5-19-3-11-1h-46l-31 4-26 6-36 12-23 10-21 10-24 14-19 12-11 8-12 9-14 11-15 13-8 7-6 6h-2v2l-8 7-7 7-7 8-12 13-18 22-13 17-13 19-11 17-12 21-12 23-13 28-8 21 4-2 19-14 16-11 17-11 24-14 29-15 26-11 22-8 25-7 29-6 23-3 14-1h23l11 4 7 5 6 9 3 8v12l-4 11-7 8-12 6-7 1-32 2-25 4-28 7-26 9-20 9-21 10-24 14-20 13-17 12-17 13-17 14-14 12-13 12-15 14-11 11-9 6-6 2h-16l-12-6-7-8-4-9-1-4 1-17 6-36 6-25 8-27 10-28 11-25 12-25 15-28 15-24 15-22 13-18 13-16 11-14 14-15 9-10 30-30 11-9 12-11 14-11 16-12 16-11 17-11 28-16 24-12 32-13 30-10 29-7 22-4 18-2 15-1h37l31 3 31 6 31 9 18 7 4 1 2-5 8-14 13-20 14-22 8-12 13-19 11-16 16-23 13-18 16-21 9-12 12-15 11-14 11-13 13-16 9-10 9-11 12-13 7-8 7-7 7-8 8-8 7-8 31-31 8-7 14-14 8-7 17-16 11-9 12-11 11-9 13-11 14-11 16-13 28-21 18-13 19-13 27-18 17-11 28-17 26-15 22-12 29-15 16-8 27-13 21-9 39-16 41-15 30-10 41-12 52-13 40-8 43-7 39-5 51-4zm-4 64-44 3-44 5-39 6-41 8-42 10-29 8-39 12-37 13-30 12-24 10-29 13-41 20-23 12-24 14-18 10-21 13-17 11-24 16-16 11-14 10-19 14-13 10-17 13-13 11-16 13-14 12-10 9-8 7-10 9-26 24-17 17-2 1v2l-4 2-6 7-23 23-7 8-15 16-9 10-9 11-13 15-14 17-13 16-29 38-13 18-14 19-10 15-7 10-16 23-13 21-13 20-13 21-19 32-10 17-25 45-17 32-12 23-22 44-13 28-16 35-15 35-16 39-15 40-9 25v5l262 262 7-1 37-13 50-20 7-3-6-7-9-10-39-39-1-2h-2l-2-4-50-50-7-8-33-33-1-2h-2l-2-4-33-33-7-8-44-44-1-2h-2l-2-4-21-21-6-11-1-4v-11l4-11 8-9 8-4 12-2 10 2 10 6 36 36 7 8 36 36 7 8 46 46 7 8 41 41 7 8 37 37 7 8 33 33 7 8 4 4h2v2l5 4 6-2 28-13 47-23 17-9 16-8 32-17 29-16 24-14 27-16 28-17 20-13 25-16 22-15 20-14 13-9 38-28 16-12 14-11 17-14 11-9 13-11 14-12 10-9 8-7 13-12 5-4v-2l4-2 22-22 4-3v-2h2l7-8 19-19v-2h2l7-8 15-16 18-20 9-11 9-10 8-10 14-17 12-16 11-14 8-11 13-18 7-10 26-39 14-22 13-22 16-28 13-25 9-17 11-23 11-24 15-36-1-6-8-7-32-32-2-3h-2l-2-4-16-16h-2v-2l-4-4h-2v-2h-2v-2l-5-5-3-1-2-4-20-20h-2l-1-3-5-5h-2l-2-4h-2l-2-4h-2l-2-4-24-24h-2l-2-4h-2l-2-4h-2l-2-4-28-28h-2l-2-4-4-4h-2l-2-4-28-28h-2l-2-4-36-36h-2l-2-4h-2l-2-4h-2l-2-4-28-28h-2l-2-4-8-8h-2l-2-4h-2v-2h-2v-2h-2l-2-4-6-8-3-7v-15l4-10 6-7 6-4 12-3 11 1 12 6 313 313 2-1 12-42 9-34 9-42 6-33 6-43 3-30 3-52v-47l-2-38-3-32-2-8-1-1-31-3-36-2z" fill="#C0DA51" />
                        <path transform="translate(1353,416)" d="m0 0h41l19 2 25 5 26 8 21 9 21 11 19 13 10 8 13 11 19 19 11 14 11 15 11 19 8 16 6 15 7 21 6 27 3 26v34l-3 26-6 26-9 27-9 20-10 18-13 19-9 11-9 10-1 2h-2l-2 4-15 14-14 11-16 11-17 10-21 10-22 8-28 7-18 3-31 2-33-2-27-5-21-6-19-7-25-12-18-11-16-12-13-11-23-23-11-14-10-14-12-21-10-21-7-20-6-22-4-24-1-9v-44l3-23 7-30 7-20 8-18 9-17 9-14 8-11 13-16 7-7 2-3h2l1-3 8-7 10-9 19-14 15-9 23-12 23-9 26-7 23-4zm2 64-20 3-22 6-15 6-16 8-14 8-13 10-10 9-8 7-12 13-13 19-9 16-7 15-8 24-4 21-1 7v39l4 24 5 18 10 24 10 18 13 18 16 17 11 10 16 12 17 10 20 9 19 6 17 4 15 2h37l24-4 18-5 20-8 19-10 16-11 11-9 13-12 7-8 13-17 10-16 9-20 7-21 5-25 1-11v-30l-3-22-6-23-8-20-11-21-12-17-9-10-7-8-13-12-15-11-15-9-16-8-21-8-22-5-15-2z" fill="#C0DA51" />
                        <path transform="translate(450,1385)" d="m0 0h40l14 3 8 4 7 7 5 10 1 3v13l-4 10-8 9-10 5-3 1h-47l-16 3-15 5-16 8-11 7-11 9-10 10-10 14-14 24-10 19-22 46-18 41-18 43-18 45-15 39-19 51v3l79-30 40-16 44-18 42-18 39-18 42-21 22-13 17-12 13-13 12-18 7-14 5-15 4-20v-41l4-11 7-8 7-5 6-2h16l9 4 8 7 6 12 2 12v36l-4 25-6 20-8 20-10 18-9 13-8 10-11 12-10 9-10 7-15 10-26 15-23 12-16 8-27 13-36 16-36 15-34 14-33 13-39 15-38 14-36 13-42 15-4 1h-9l-10-3-8-6-6-7-4-11v-10l11-33 19-53 13-35 16-41 15-38 15-36 14-33 13-29 11-24 9-17 8-16 9-17 7-11 5-9 13-19 11-13 10-10 17-13 16-10 16-8 14-6 21-6z" fill="#C0DA51" />
                      </svg>
                    </div>
                  </div>


                  <p style={{ fontSize: '14px' }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam vitae rerum cumque error nesciunt voluptatem eos sapiente nulla sequi, enim facilis hic temporibus labore earum eligendi cum inventore, eveniet alias?
                  </p>

                </div>
                {/* <Image src={mission} width={150} height={60}/>  */}

              </div>



            </div>
            <div className='relative'>
              <div className=' w-3/4 h-auto absolute z-10 inset-0 bg-gradient-to-r from-[#B8D941] to-[#EAF2AE] shadow-lg transform -skew-y-6  sm:skew-y-0 sm:-rotate-6 sm:rounded-lg'>
              </div>
              <div className='w-3/4 h-auto relative z-20 p-6 bg-white md:flex justify-between shadow-lg rounded-lg'>
                <div className='sm:flex flex-col justify-between space-y-4 py-4 md:pr-6'>
                  <div className='flex justify-between'>
                    <div>
                      <h2 className='text-lg text-[#dee897]'>Our vision</h2>
                      <h1 className='pt-1 text-5xl font-caveat text-[#B8D941]'>Our vision</h1>

                    </div>
                    <div className='ml-8'>
                      <svg version="1.1" viewBox="0 0 2048 1148" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(965)" d="m0 0h119l58 7 49 8 45 10 37 10 30 9 40 14 30 12 24 10 29 13 34 16 24 12 22 12 26 14 22 13 25 15 22 14 36 24 19 13 18 13 19 14 21 16 28 22 17 14 11 9 28 24 11 10 8 7 10 9 24 22 15 14 59 59 7 8 16 17 12 13 11 12 18 20 11 12 7 8 12 13 9 10 11 15 9 15v15l-107 107h-2v2l-8 7-23 23-8 7-7 7-8 7-11 10-11 9-14 12-11 9-13 11-14 11-18 14-16 12-13 10-17 12-18 13-16 11-15 10-23 15-19 12-20 12-22 13-23 13-26 14-23 12-32 16-27 13-41 18-40 16-38 14-33 11-34 10-38 10-51 11-49 8-48 6-32 3h-113l-72-8-40-6-41-8-56-14-40-12-44-15-44-17-45-19-41-19-19-9-16-8-25-13-22-12-25-14-25-15-28-17-34-22-15-10-17-12-19-13-19-14-21-16-16-12-14-11-17-14-16-13-11-9-14-12-15-13-11-10-8-7-20-18-26-24-16-16-8-7-17-17-7-8-8-9-9-11-13-16-11-14-1-1v-15l7-8 9-12 11-14 11-13 8-10 11-13 13-15 12-13 9-10 14-15 15-16 36-36 8-7 13-13 8-7 16-15 12-11 10-9 11-9 13-12 11-9 14-12 11-9 13-11 28-22 15-12 18-13 19-14 18-13 28-19 21-14 25-16 28-17 28-16 22-12 28-15 26-13 28-13 27-12 50-20 43-15 41-12 36-9 33-7 47-8 50-6zm24 66-42 3-33 4-26 4-40 8-40 10-43 13-37 13-30 12-31 13-34 16-44 22-22 12-25 14-28 17-20 12-20 13-27 18-20 14-14 10-19 14-16 12-28 22-16 13-10 8-14 12-11 9-12 11-11 9-17 16-8 7-15 14-5 4v2l-4 2-18 18-8 7-34 34-7 8-12 12-7 8-14 15-11 12-27 30-11 12 6 7 15 15 8 7 11 10 8 7 11 10 8 7 10 9 11 10h2v2l8 7 10 9 11 10 11 9 13 12 11 9 12 11 11 9 13 11 16 13 14 11 13 10 21 16 28 20 23 16 18 12 17 11 24 15 15 9 17 10 21 12 22 12 23 12 16 8 29 14 31 14 39 16 35 13 28 10 39 12 36 10 41 10 42 8 34 5 49 5 30 2h62l35-2 43-4 41-6 38-7 43-10 43-12 49-16 40-15 37-15 36-16 28-13 19-10 16-8 23-12 24-14 18-10 22-13 22-14 24-15 44-30 14-10 36-26 18-14 16-12 17-14 14-11 14-12 11-9 14-12 15-13 15-14 8-7 12-11 7-7 3-2v-2l4-2 52-52 2-5-12-14-18-20-7-8-9-10-11-12-12-13-11-11-7-8-59-59-8-7-12-12-8-7-15-14-11-9-14-13-11-9-14-12-11-9-17-14-13-10-18-14-38-28-19-13-14-10-32-21-19-12-26-16-26-15-18-10-24-13-27-14-28-14-27-12-31-13-29-11-34-12-49-14-43-10-38-7-38-5-35-3-20-1z" fill="#BEDB4F" />
                        <path transform="translate(1e3 202)" d="m0 0h41l32 3 28 5 24 6 33 11 23 10 20 10 17 10 18 12 16 12 16 13 15 14 17 17 9 11 11 13 12 17 12 19 9 16 8 16 9 20 9 25 6 21 6 29 4 31 1 15v33l-2 24-4 27-6 27-9 29-10 25-11 23-14 24-8 12-13 18-14 17-14 15-16 16-11 9-9 8-19 14-17 11-21 12-16 8-20 9-25 9-25 7-29 6-32 4-14 1h-35l-31-3-30-5-34-9-25-9-27-12-19-10-23-14-14-10-13-10-14-12-8-7-24-24-9-11-12-15-12-17-11-18-10-18-10-21-9-23-7-21-6-24-5-28-3-29v-46l3-29 6-31 7-26 10-28 9-20 10-20 12-20 11-16 9-12 13-16 11-12 24-24 11-9 15-12 27-18 21-12 16-8 23-10 36-12 25-6 32-5zm1 67-27 3-25 5-25 7-24 9-23 11-19 11-19 13-14 11-11 10-8 7-12 12-7 8-13 16-13 19-10 17-9 17-10 24-7 21-6 25-4 24-2 27v17l2 25 4 25 6 25 8 24 10 23 11 21 12 19 12 16 9 11 12 13 15 15 11 9 15 12 20 13 18 10 16 8 25 10 26 8 24 5 24 3 13 1h31l29-3 26-5 24-7 20-7 26-12 18-10 18-12 16-12 13-11 15-14 13-14 11-14 11-15 10-16 10-18 9-20 9-25 7-27 4-23 2-20v-39l-2-21-5-27-6-23-9-25-12-25-8-15-16-24-11-14-9-10-7-8-14-14-22-18-17-12-15-9-16-9-20-9-24-9-26-7-28-5-23-2z" fill="#BEDB4F" />
                      </svg>
                    </div>
                  </div>


                  <p style={{ fontSize: '14px' }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam vitae rerum cumque error nesciunt voluptatem eos sapiente nulla sequi, enim facilis hic temporibus labore earum eligendi cum inventore, eveniet alias?
                  </p>

                </div>
                {/* <Image src={mission} width={150} height={60}/>  */}

              </div>



            </div>
            {/* <div className='relative'>
              <div className='absolute z-10 inset-0 bg-gradient-to-r from-[#B8D941] to-[#EAF2AE] shadow-lg transform -skew-y-6  sm:skew-y-0 sm:-rotate-6 sm:rounded-lg'>
              </div>
              <div className='relative z-20 bg-white md:flex justify-between p-12 shadow-lg rounded-lg'>
                <div className='sm:flex flex-col justify-between space-y-6 py-6 md:pr-10'>
                  <div>
                    <h2 className='text-lg'>Our vision</h2>
                    <h1 className='pt-1 text-5xl font-caveat text-gray-800'>Our vision</h1>
                  </div>
                  <p className='text-xl '>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam vitae rerum cumque error nesciunt voluptatem eos sapiente nulla sequi, enim facilis hic temporibus labore earum eligendi cum inventore, eveniet alias?
                  </p>
                </div>
               
                
              </div>



            </div> */}

          </div>





















          {/* <div className="grid grid-cols-2 md:grid-cols-2">
            <div className="p-8">
              <div
                className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>

              </div>
              <h2 className="uppercase mt-6 text-[#B8D941] font-medium mb-3">
                our mission
              </h2>
              <p className="font-light text-sm text-gray-500 mb-3">
                We get insulted by others, lose trust for those others. We get back
                stabbed by friends. It becomes harder for us to give others a hand.
              </p>
              <a className="text-indigo-500 flex items-center hover:text-indigo-600" href="/">
                More about us icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div className="p-8">
              <div
                className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="uppercase mt-6 text-green-500 font-medium mb-3">
                our vision
              </h2>
              <p className="font-light text-sm text-gray-500 mb-3">
                We get insulted by others, lose trust for those others. We get back
                stabbed by friends. It becomes harder for us to give others a hand.
              </p>
              <a className="text-green-500 flex items-center hover:text-green-600" href="/">
                More about us icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
           
          </div> */}

        </div>


        <section className="relative  flex flex-col justify-center  overflow-hidden">
          <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
            <h2 className="font-PlayfairDisplay section-title mb-8 xl:mb-16 text-center mx-auto">
              Our Values
            </h2>
            <section className="grid gap-12 md:grid-cols-3 md:gap-16">

              <article className='shadow-xl  rounded-2xl p-6 bg-gradient-to-tr from-[#B8D941] to-[#EAF2AE]'>
                <div>
                  <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="20">
                      <defs>
                        <linearGradient id="icon1-a" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#EAF2AE" />
                          <stop offset="100%" stopColor="#EAF2AE" />
                        </linearGradient>
                        <linearGradient id="icon1-b" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#B8D941" />
                          <stop offset="100%" stopColor="#B8D941" />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="nonzero">
                        <path
                          fill="url(#icon1-a)"
                          d="M20.625 0H9.375a9.375 9.375 0 0 0 0 18.75h11.25a9.375 9.375 0 0 0 0-18.75Z"
                          transform="translate(.885 .885)"
                        />
                        <path
                          fill="url(#icon1-b)"
                          d="M9.375 17.5A8.125 8.125 0 0 1 1.25 9.375 8.125 8.125 0 0 1 9.375 1.25 8.125 8.125 0 0 1 17.5 9.375 8.125 8.125 0 0 1 9.375 17.5Z"
                          transform="translate(.885 .885)"
                        />
                      </g>
                    </svg>
                  </div>
                  <h2>
                    <span className={`flex tabular-nums text-[#fff] text-5xl font-bold mb-2 transition-[_--num] duration-[3s] ease-out`}>
                      <CountUp end={40} delay={1} duration={4} />
                      {"K+"}
                    </span>
                    <span className="inline-flex text-2xl font-caveat bg-clip-text text-transparent bg-gradient-to-r from-[#fff] to-[#EAF2AE] mb-2">Variations</span>
                  </h2>
                  <p className="text-sm text-white">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p>
                </div>



              </article>

              <article className=' rounded-2xl p-6 shadow-xl  '>

                <div className="w-14 h-14 rounded shadow-md bg-[#B8D941] flex justify-center items-center -rotate-3 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19">
                    <defs>
                      <linearGradient id="icon2-a" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#EAF2AE" />
                        <stop offset="100%" stopColor="#fff" />
                      </linearGradient>
                      <linearGradient id="icon2-b" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#fff" />
                        <stop offset="100%" stopColor="#fff" />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="nonzero">
                      <path
                        fill="url(#icon2-a)"
                        d="M5.5 0a5.5 5.5 0 0 0 0 11c.159 0 .314-.01.469-.024a15.896 15.896 0 0 1-2.393 6.759A.5.5 0 0 0 4 18.5h1a.5.5 0 0 0 .362-.155C7.934 15.64 11 11.215 11 5.5A5.506 5.506 0 0 0 5.5 0Z"
                      />
                      <path
                        fill="url(#icon2-b)"
                        d="M18.5 0a5.5 5.5 0 0 0 0 11c.159 0 .314-.01.469-.024a15.896 15.896 0 0 1-2.393 6.759.5.5 0 0 0 .424.765h1a.5.5 0 0 0 .363-.155C20.934 15.64 24 11.215 24 5.5A5.506 5.506 0 0 0 18.5 0Z"
                      />
                    </g>
                  </svg>
                </div>
                <h2>
                  <span className={`flex tabular-nums text-[#B8D941] text-5xl font-bold mb-2 transition-[_--num] duration-[3s] ease-out`}>
                    <CountUp end={70} delay={1} duration={4} />
                    {"K+"}
                  </span>
                  <span className="inline-flex text-2xl font-caveat bg-clip-text text-transparent bg-gradient-to-r from-[#B8D941] to-[#EAF2AE] mb-2">Lessons</span>
                </h2>
                <p className="text-sm text-slate-500"> Many desktop publishing packages and web page editors now use Pinky as their default model text.</p>


              </article>

              <article className='shadow-xl  rounded-2xl p-6 bg-gradient-to-tr from-[#B8D941] to-[#EAF2AE]'>
                <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                    <defs>
                      <radialGradient id="icon3-a" cx="68.15%" cy="27.232%" r="67.641%" fx="68.15%" fy="27.232%">
                        <stop offset="0%" stopColor="#EAF2AE" />
                        <stop offset="100%" stopColor="#EAF2AE" />
                      </radialGradient>
                    </defs>
                    <g fill="none" fillRule="nonzero">
                      <circle cx="13" cy="13" r="13" fill="url(#icon3-a)" />
                      <path
                        fill="#B8D941"
                        fillOpacity=".56"
                        d="M0 13a12.966 12.966 0 0 0 4.39 9.737l1.15-1.722s.82-.237.997-.555c.554-.997-.43-2.733-.43-2.733a5.637 5.637 0 0 0-.198-1.23c-.148-.369-1.182-.874-1.182-.874S3.73 13.998 3.73 13a1.487 1.487 0 0 1 1.404-1.55 2.424 2.424 0 0 0 1.588-1.146s1.256-.332 1.551-.847c.295-.515-.332-2.36-.332-2.36a3.086 3.086 0 0 0-.012-1.481 2.8 2.8 0 0 0-.93-1.12 6.143 6.143 0 0 0-1.447-2.148A12.981 12.981 0 0 0 0 13ZM13 0c-.35 0-.696.018-1.04.045-.112.35-.695 1.248-.548 1.653.147.406 1.353.783 1.353.783s-.32 1.25.235 1.692c.554.443 1.44-.148 1.773-.037.331.111.258 2.29.258 2.29s1.07 1.181 2.124 1.33c1.053.147 2.656-1.64 2.656-1.64a21.131 21.131 0 0 0 3.448-1.102A12.974 12.974 0 0 0 13 0Z"
                      />
                      <path
                        fill="#B8D941"
                        fillOpacity=".4"
                        d="M21.398 13.848c.296.702-.555 2.494-1.256 2.843a4.76 4.76 0 0 0-1.82 1.452c-.259.406-.598 2.082-1.447 2.415-.85.332-2.863 2.228-3.934 1.932-1.071-.296-1.071-2.842-.333-3.988.441-.683-.074-2.179-.113-2.695-.039-.517-1.586-1.478-1.586-1.994 0-.813 1.772-2.955 1.772-2.955s1.453-.48 1.896-.37c.448.164.877.374 1.28.628.782.058 1.552.22 2.29.48l.848.775s2.107.777 2.403 1.477Z"
                      />
                    </g>
                  </svg>
                </div>
                <h2>
                  <span className={`flex tabular-nums text-[#fff] text-5xl font-bold mb-2 transition-[_--num] duration-[3s] ease-out `}>
                    <CountUp end={149} delay={1} duration={4} />
                    {"K+"}
                  </span>
                  <span className="inline-flex text-2xl font-caveat bg-clip-text text-transparent bg-gradient-to-r from-[#fff] to-[#EAF2AE] mb-2">Workshops</span>
                </h2>
                <p className="text-sm text-white">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p>
              </article>

            </section>
          </div>
        </section>








        <section>
          <h2 className="font-PlayfairDisplay section-title mb-8 xl:mb-16 text-center mx-auto">
            Meet the team
          </h2>

          <div className="px-8  py-16 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-3">
              <div>
                <h1 className="text-4xl font-semibold tracking-tighter text-[#B8D941] lg:text-5xl">
                  Meet Our Team
                  <span className="block text-[#EAF2AE]">Diverse. Skilled. United.</span>
                </h1>
                <p className="mt-4  text-gray-800">
                  A group of passionate individuals working together to innovate and
                  excel in our industry.
                </p>
              </div>
              <ul role="list" className="grid gap-12 lg:grid-cols-2 lg:col-span-2">
                <li>
                  <div className="space-y-4">
                    <div className="aspect-[3/2] p-2 overflow-hidden border rounded-3xl border-[#B8D941]">
                      <Image className="object-cover w-full h-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80" alt="" width={500} height={500} />
                    </div>
                    <div className="inline-flex items-start justify-between w-full">
                      <div className="space-y-1">
                        <h3 className=" font-caveat leading-6 text-[#B8D941]" style={{ fontSize: '1.3rem' }}>
                          Michael Andreuzza
                        </h3>
                        <p className=" text-gray-800" style={{ fontSize: '0.8rem' }}>Creator of Windstatic.com</p>
                      </div>
                      <div>
                        <ul role="list" className="flex space-x-5">
                          <li>
                            <a href="#_" className="text-gray-400 hover:text-gray-500">
                              <ion-icon name="logo-dribbble" role="img" className="md hydrated" aria-label="logo dribbble"></ion-icon>
                            </a>
                          </li>
                          <li>
                            <a href="#_" className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only"> Twitter </span>
                              <ion-icon name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter"></ion-icon>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-[3/2] p-2 overflow-hidden border rounded-3xl border-[#B8D941]">
                      <Image className="object-cover w-full h-full rounded-2xl" src="https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1639&amp;q=80" alt="" width={500} height={500} />
                    </div>
                    <div className="inline-flex items-start justify-between w-full">
                      <div className="space-y-1">
                        <h3 className="font-caveat leading-6 text-[#B8D941]" style={{ fontSize: '1.3rem' }}>
                          Melonia Tusk
                        </h3>
                        <p className=" text-gray-800" style={{ fontSize: '0.8rem' }}>Founder of Fesla</p>
                      </div>
                      <div>
                        <ul role="list" className="flex space-x-5">
                          <li>
                            <a href="#_" className="text-gray-400 hover:text-gray-500">
                              <ion-icon name="logo-dribbble" role="img" className="md hydrated" aria-label="logo dribbble"></ion-icon>
                            </a>
                          </li>
                          <li>
                            <a href="#_" className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only"> Twitter </span>
                              <ion-icon name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter"></ion-icon>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>








        </section>





      </section>
    </section>
  )
}



export default page;

