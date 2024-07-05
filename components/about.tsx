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
        Currently, I'm fresh Bachelor's degree in Computer Technologies focusing on Multimedia and Web Development. Throughout my journey, I have gained an understanding of various domains with a specific focus on game development . Additionally, I have developed expertise in web development and graphic design.
        I have a passion for learning and growing as an individual. Discovering opportunities and expanding my skills brings me joy. I particularly enjoy taking on challenges head on and applying the knowledge I have gained from different experiences and during my time, at the university.
      </p>


    </motion.section>
  );
}
