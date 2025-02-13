"use client";
import { motion } from "motion/react";
import stylesHeader from "@/styles/modules/header.module.css";

export default function Header() {
  return (
    <section id={stylesHeader.header}>
      <div className="container">
        <div className={stylesHeader.wrapper}>
          <motion.span
            className={stylesHeader.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I&apos;m Tobias &#128075;
          </motion.span>
          <motion.h1
            className={stylesHeader.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Designing Visual Stories That Inspire.
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
