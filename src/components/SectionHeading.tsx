"use client";
import { motion } from "motion/react";
import shs from "@/styles/modules/sectionHeading.module.css";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={shs.sectionHeading}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className={shs.sectionHeadingSubtitle}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className={shs.sectionHeadingIcon}></div>
        <h3 className={shs.subtitleHeading}>{subtitle}</h3>
      </motion.div>
      <motion.h1
        className={shs.sectionHeadingTitle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h1>
      <motion.p
        className={shs.description}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
