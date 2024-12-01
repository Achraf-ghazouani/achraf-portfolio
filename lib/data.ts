import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import projectimg from "@/public/1.png";
import projectimg2 from "@/public/2.png";
import projectimg3 from "@/public/3.png";
import projectimg4 from "@/public/4.png";
import projectimg5 from "@/public/5.png";
import projectimg6 from "@/public/6.png";
import projectimg7 from "@/public/7.png";


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
    title: "Freelancer",
    location: "",
    description:
      "I have worked on various projects as a freelancer, including developing mobile games, AR/VR, creating 3D models, and designing user interfaces. I have collaborated with clients to bring their ideas to life, ensuring high-quality deliverables that meet their needs and expectations.",
    icon: React.createElement(CgWorkAlt),
    date: "Fulltime",
  },
  {
    title: "Augmented Reality Developer with Unity Engine | Video Editor | Graphic Designer",
    location: "Netinfo - Ecole d'Art et de Technologies",
    description:
      "I developed augmented reality (AR) Android applications using Unity6, Google ARCore, and Cesium, bringing immersive experiences to life. Additionally, I designed engaging social media posts and user interfaces with Canva and Adobe Illustrator, enhancing brand visibility and interaction. To further support marketing efforts, I edited dynamic video ads using Filmora 9, ensuring high-quality content for social media campaigns.",
    icon: React.createElement(CgWorkAlt),
    date: "06/2024 – 07/2024",
  },
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
  },
  {
    title: "ARCHIVR",
    description:
      "Archi VR is an immersive virtual reality simulation that lets you explore and interact with a 3D environment like never before. Built with Unity 6, Archi VR allow player to move freely in a detailed, open space, grabbing and interacting with various objects around them. Whether you're exploring architectural designs or just enjoying the freedom to move and manipulate your surroundings, Archi VR delivers a seamless and intuitive VR experience.",
    tags: ["Unity 6", "Blender"],
    imageUrl: projectimg4,
  },
  {
    title: "PANCAKEFLY",
    description:
      "Pancake Fly is a fun and addictive game where you guide a flying pancake through a series of obstacles! Tap to keep the pancake in the air and navigate through the gaps without crashing. How far can you fly? Challenge yourself to beat your high score in this simple yet exciting game!",
    tags: ["Unity", "Adobe Ilustrator"],
    imageUrl: projectimg5,
  },
  {
    title: "NEAPOLIS-X EXPERIENCE",
    description:
      "As an AR Developer with NetInfo, I worked on promoting the Neapolis Nabeul archaeological site through an interactive AR experience. The project highlighted the site's 5th-century BC origins, its peak during the Roman Empire, and the ancient production of garum, a prized fermented fish condiment. Using AR, we brought the site's history to life, engaging users with a vivid reconstruction of its salting facilities and trade practices.",
    tags: ["Unity 2022"],
    imageUrl: projectimg6,
  },
  {
    title: "COGITE",
    description:
      "My team and I created **Cogite**, a mobile application designed to help 10-year-old kids learn French through interactive games. As the developer, I brought the project to life using Unity, while the rest of my talented team focused on the design aspects. Together, we crafted a playful and immersive learning experience that combines education and entertainment, encouraging children to enjoy mastering a new language.",
    tags: ["Unity 6","Figma" ,"Adobe Ilustrator"],
    imageUrl: projectimg7,
  },
  
  
] as const;

export const skillsData = [
  "Unity",
  "Unreal Engine",
  "Blender",
  "Fusion 360",
  "Adobe Illustrator",
  "Photoshop",
  "C#",
  "AR/VR Development",
  "Game Development",
  "Graphic Design",
  "Firebase",
  "Figma",
  "3D Modeling",
  "UI/UX Design",
  "Backend Development",
  "API Integration",
] as const;
