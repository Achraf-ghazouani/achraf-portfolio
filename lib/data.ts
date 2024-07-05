import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import projectimg from "@/public/1.png";
import projectimg2 from "@/public/2.png";
import projectimg3 from "@/public/3.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experienceData = [
  {
    title: "Game & Backend Developer",
    location: "Netinfo - Ecole d'Art et de Technologies",
    description:
      "Developed game interfaces, mechanics and functionalities of our game using Unreal Engine. Configured our Firebase environment and implemented the backend logic with the game.",
    icon: React.createElement(CgWorkAlt),
    date: "02/2024 – 05/2024",
  },
  {
    title: "Game Developer, Graphic Designer & Python Instructor",
    location: "Netinfo - Ecole d'Art et de Technologies",
    description:
      "Participated in the creation of a 3D video game. Created posters for social media networks. Taught the basics of Python to school children.",
    icon: React.createElement(CgWorkAlt),
    date: "06/2023 – 09/2023",
  },
  {
    title: "Technical Support Intern",
    location: "INFOTEC",
    description:
      "Maintained certain hardware equipment. Solved different types of software issues.",
    icon: React.createElement(CgWorkAlt),
    date: "01/2022 – 02/2022",
  },
] as const;


export const projectsData = [
  {
    title: "Polyvers Quest",

    description:
      "In the field of 3D video game design, we embark on a captivating journey where entertainment meets education. This introductory chapter serves as the basis for our project, where we lay the foundations for a unique gaming experience. We begin by setting the scene, exploring the captivating mix of low-poly and high-poly environments that will define our game.",
    tags: ["C#","Unity", "Adobe Ilustrator"],
    imageUrl: projectimg,
  },
  {
    title: "Find teddy",

    description:
      "In this game, players control Mr. Bean on a quest to find his companion, Teddy. Navigating a maze filled with challenges, players guide Mr. Bean through obstacles. Inspired by the iconic series, the game blends nostalgia, humor, and adventure, offering an engaging experience for fans of all ages.",
    tags: ["C#","Unity", "Adobe Ilustrator" , "Blender" , "mixamo"],
    imageUrl: projectimg2,
  },
  {
    title: "DIGITAL TWINS SIMULATION FOR INDUSTRY",

    description:
      "The aim was to create a functional tool that solves the main problem: customization on a 3D model of denim pants. The creation of the denim model will be included in an overall game that will detail the entire starting with the fabric, through to the final result after cutting, sewing and cutting, sewing and laser",
    tags: ["Unreal Engine 5.3","Figma" ,"Adobe Ilustrator" , "Blender" , "mixamo"],
    imageUrl: projectimg3,
  }
  
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "WordPress",
  "Python",
  "Java",
  "Unity",
  "Unreal Engine",
  "Blender",
  "Fusion 360",
  "ZBrush",
  "Adobe Illustrator",
  "Photoshop",
  "C#",
] as const;
