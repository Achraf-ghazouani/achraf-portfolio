"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[55rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      As a passionate and creative technology enthusiast, a master’s student specializing in UI/UX design. With a strong foundation in game development and expertise in AR/VR technologies, I thrive on crafting engaging digital experiences that blend innovation with functionality. My journey combines technical skills with a keen eye for design, enabling me to develop immersive applications and interactive solutions that leave a lasting impact. I’m always eager to explore new challenges, share ideas, and bring visions to life through creativity and technology.
      </p>


    </motion.section>
  );
}
