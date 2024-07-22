
'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Download, Send } from 'lucide-react';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImg from '../DevImg';
import Badge from '../Badge';
import Socials from '../Socials';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,

    });
    AOS.refresh();
  }, []);
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none' data-aos="fade-right">
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
            More Than a Supplier
            </div>
            <h1 className='h1 mb-4'>Univers Automatisme</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
            We offer repair, diagnostics, commissioning, design, and realization services in the fields of pneumatics, hydraulic.

            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact Us <Send size={18} />
                </Button>
              </Link>
              <Link href='/about'>

              <Button variant='secondary' className='gap-x-2'>
                About Us
                <Download size={18} />
              </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          {/* image */}
          <div className='hidden xl:flex relative'>
            {/* badge 1 */}
            <Badge
              containerStyles='absolute top-[24%] -left-[5rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText='Years Of Experience'
            />
            {/* badge 2 */}
            <Badge
              containerStyles='absolute top-[80%] -left-[1rem]'
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText='k'
              badgeText='Finished Projects'
            />
            {/* badge 3 */}
            <Badge
              containerStyles='absolute top-[55%] -right-8'
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText='k'
              badgeText='Happy Clients'
            />
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <DevImg
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/developer.png'
            />
          </div>
        </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;