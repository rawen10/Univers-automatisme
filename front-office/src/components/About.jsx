import React from "react";
import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ryan Davis",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+012 345 6789",
  },
  {
    icon: <MailIcon size={20} />,
    text: "youremail@email.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 10 Mar, 1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "321 Blue Avenue, NY, USA",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Example University",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        university: "Another University",
        qualification: "Master of Arts",
        years: "2019 - 2021",
      },
      {
        university: "Yet Another University",
        qualification: "Ph.D in Computer Science",
        years: "2021 - 2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "ABC Inc.",
        role: "Software Engineer",
        years: "2018 - 2020",
      },
      {
        company: "XYZ Corporation",
        role: "Senior Developer",
        years: "2020 - 2022",
      },
      {
        company: "Tech Innovators",
        role: "Lead Developer",
        years: "2022 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, PHP",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

export default function About() {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="font-PlayfairDisplay section-title mb-8 xl:mb-16 text-center mx-auto">
          About  <span className=' font-caveat '>Us</span> 
        </h2>

        <div className="flex flex-col xl:flex-row ">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative ">
          
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative items-center"
              imgSrc="/about/developer.png"
            />
            
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="company-info">
              <TabsList className="w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="journey">
                  Journey
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="company-info"
                >
                  Company Info
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div class="relative font-inter antialiased">
                    <main class="  flex flex-col justify-center bg-slate-50 overflow-hidden">
                      <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-5"></div>
                    </main>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="company-info">
                  <div class="relative font-inter antialiased">
                    <main class="  flex flex-col justify-center bg-slate-50 overflow-hidden">
                      <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-5">
                        <div class="w-full max-w-3xl mx-auto">
                          <div class="-my-6">
                            <div class="relative pl-8 sm:pl-32 py-6 group">
                              <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                                The origin
                              </div>

                              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                                  JAN, 2000
                                </time>
                                <div class="text-xl font-bold text-slate-900">
                                  Univers Automatisme was founded in Tunis,
                                  Tunisia.
                                </div>
                              </div>

                              <div class="text-slate-500">
                                We specialize in importing and installing
                                pneumatic, electric, and hydraulic components.
                              </div>
                            </div>

                            <div class="relative pl-8 sm:pl-32 py-6 group">
                              <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                                The milestone
                              </div>

                              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                                  May, 2021
                                </time>
                                <div class="text-xl font-bold text-slate-900">
                                  Reached 1k customers.
                                </div>
                              </div>

                              <div class="text-slate-500">
                                Our focus on quality products and service has
                                built a strong reputation.
                              </div>
                            </div>

                            <div class="relative pl-8 sm:pl-32 py-6 group">
                              <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                                The acquisitions
                              </div>

                              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                                  MAY, 2015
                                </time>
                                <div class="text-xl font-bold text-slate-900">
                                  Acquired several local automation companies.
                                </div>
                              </div>

                              <div class="text-slate-500">
                                This expansion increased our market share and
                                product range.
                              </div>
                            </div>

                            {/* <div class="relative pl-8 sm:pl-32 py-6 group">
                                <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                                  The IPO
                                </div>

                                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                  <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                                    May, 2023
                                  </time>
                                  <div class="text-xl font-bold text-slate-900">
                                    Acme went public at the New York Stock
                                    Exchange
                                  </div>
                                </div>

                                <div class="text-slate-500">
                                  Pretium lectus quam id leo. Urna et pharetra
                                  pharetra massa massa. Adipiscing enim eu neque
                                  aliquam vestibulum morbi blandit cursus risus.
                                </div>
                              </div> */}
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
