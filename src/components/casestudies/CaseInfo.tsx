"use client";
import { motion } from "motion/react";
import stylesCase from "@/styles/modules/casestudies/caseinfo.module.css";

interface CaseInfoProps {
  subtitle: string;
  title: string;
  description: string;
}

export default function CaseInfo({
  subtitle,
  title,
  description,
}: CaseInfoProps) {
  return (
    <section id={stylesCase.caseInfo}>
      <div className={stylesCase.caseContainer}>
        <motion.div
          className={stylesCase.caseHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h6 className={stylesCase.subtitle}>{subtitle}</h6>
          <h2 className={stylesCase.title}>{title}</h2>
          <hr className={stylesCase.border} />
        </motion.div>
        <motion.p
          className={stylesCase.paragraph}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
