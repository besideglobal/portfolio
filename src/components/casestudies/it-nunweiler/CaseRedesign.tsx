"use client";
import { motion } from "motion/react";
import stylesCase from "@/styles/modules/casestudies/caseinfo.module.css";
import Image from "next/image";

//IMAGES
import ITNunweiler from "@/images/itnunweiler.png";
import ITNunweilerOld from "@/images/casestudies/itnunweiler/itnunweiler-old.png";

interface CaseRedesignProps {
  subtitle: string;
  title: string;
}

export default function CaseRedesign({ title, subtitle }: CaseRedesignProps) {
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
        <div className={stylesCase.processWrapperGrid}>
          {/* ITEM */}
          <motion.div
            className={stylesCase.processWrapperItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={stylesCase.processItem}>
              <Image
                src={ITNunweilerOld}
                alt="IT-Nunweiler Before"
                style={{ maxHeight: "300px" }}
              />
            </div>
            <p className={stylesCase.processItemDesc}>Before</p>
          </motion.div>
          {/* ITEM */}
          <motion.div
            className={stylesCase.processWrapperItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={stylesCase.processItem}>
              <Image
                src={ITNunweiler}
                alt="IT-Nunweiler After"
                style={{ maxHeight: "300px" }}
              />
            </div>
            <p className={stylesCase.processItemDesc}>After</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
