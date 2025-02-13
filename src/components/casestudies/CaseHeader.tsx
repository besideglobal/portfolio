"use client";
import { motion } from "motion/react";
import stylesHeader from "@/styles/modules/casestudies/caseheader.module.css";
import stylesCase from "@/styles/modules/casestudies/caseinfo.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CaseHeaderProps {
  title: string;
  subtitle: string;
  image: StaticImport;
}

export default function CaseHeader({
  title,
  subtitle,
  image,
}: CaseHeaderProps) {
  return (
    <section id="header" className={stylesHeader.header}>
      <div className={stylesCase.caseContainer}>
        <div className={stylesHeader.wrapper}>
          <motion.h1
            className={stylesHeader.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          <motion.span
            className={stylesHeader.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            {subtitle}
          </motion.span>
        </div>
        <div className={stylesHeader.casePreviewCenter}>
          <motion.div
            className={stylesHeader.casePreview}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <Image src={image} alt="Beside" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
