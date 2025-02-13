"use client";
import { motion } from "motion/react";
import stylesCase from "@/styles/modules/casestudies/caseinfo.module.css";
import Image from "next/image";

//IMAGES
import ITNunweilerSkizze from "@/images/casestudies/itnunweiler/it-nunweiler-skizze.png";
import ITNunweilerLogo from "@/images/casestudies/itnunweiler/logo-design.png";
import ITNunweilerList from "@/images/casestudies/itnunweiler/list.png";
import ITNunweilerDesignID from "@/images/casestudies/itnunweiler/designid.png";

interface CaseProcessProps {
  title: string;
  description: string;
}

export default function CaseProcess({ title, description }: CaseProcessProps) {
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
        <div className={stylesCase.processWrapper}>
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
                src={ITNunweilerSkizze}
                alt="IT-Nunweiler Skizze"
                style={{ maxHeight: "100%" }}
              />
            </div>
            <p className={stylesCase.processItemDesc}>Skizze</p>
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
                src={ITNunweilerList}
                alt="IT-Nunweiler Research"
                style={{ maxHeight: "400px" }}
              />
            </div>
            <p className={stylesCase.processItemDesc}>Content Planning</p>
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
                src={ITNunweilerLogo}
                alt="IT-Nunweiler Logo"
                style={{ maxHeight: "100%" }}
              />
            </div>
            <p className={stylesCase.processItemDesc}>Logo Design</p>
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
                src={ITNunweilerDesignID}
                alt="IT-Nunweiler Design Section"
                style={{ maxHeight: "100%" }}
              />
            </div>
            <p className={stylesCase.processItemDesc}>
              Redesigning key sections
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
