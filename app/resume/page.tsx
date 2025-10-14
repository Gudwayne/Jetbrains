"use client";

import { info } from 'console';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { delay, motion } from 'framer-motion';


// about data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis praesentium sapiente molestiae.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Godwin Jonah"
    },
    {
      fieldName: "Phone",
      fieldValue: "09029475798"
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian"
    },
    {
      fieldName: "Email",
      fieldValue: "godwinjco@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English"
    },
  ]
}

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis praesentium sapiente molestiae.",
  items: [
    {
      company: "Fiatmo",
      position: "Backend intern",
      duration: "2024 - 2025"
    },
    {
      company: "Paylinc",
      position: "Frontend developer",
      duration: "2024 - present"
    },
    {
      company: "E-commerce Startup",
      position: "Fullstack developer",
      duration: "2025 - present"
    },
    {
      company: "Software Development Firm",
      position: "Juniour developer",
      duration: "2023 - 2024"
    },
  ]
}

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis praesentium sapiente molestiae.",
  items: [
    {
      institution: "NIIT",
      degree: " Software Engineering",
      duration: "2020 - 2024"
    },
    {
      institution: "Tech Academy",
      degree: "Programming Bootcamp",
      duration: "2022 - 2023"
    },
    {
      institution: "Miva University",
      degree: "Bsc. Software Engineering",
      duration: "2024 - present"
    }, 
    {
      institution: "Online Course",
      degree: "Fullstack web development",
      duration: "2023 - 2024"
    },
    
  ]
}

// Skills
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis praesentium sapiente molestiae.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ 
      opacity: 1,
      transition: {delay: 0.4, duration: 0.4, ease: "easeIn"},
     }}
     className='min-h-[80vh] flex items-center justify-center py-12 lg:py-0'
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className='flex flex-col lg:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto lg:mx-0'>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger> 
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className='w-full'>experience</TabsContent>
          </div>
        </Tabs> 
      </div>
    </motion.div>
  )
} 

export default Resume