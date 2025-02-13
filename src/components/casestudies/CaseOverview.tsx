"use client";
import { motion } from "motion/react";
import stylesCase from "@/styles/modules/casestudies/caseinfo.module.css";
import { FigmaLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface CaseStudyProps {
  subtitle: string;
  title: string;
  buttonLink: string;
  buttonText: string;
  infoTitleLeft: string;
  infoDescLeft: string;
  infoTitleRight: string;
  infoDescRight: string;
  timelineList?: string[];
  disciplineList: string[];
  responsibilitieList: string[];
  toolList: string[];
}

export default function CaseOverview({
  subtitle,
  title,
  buttonLink,
  buttonText,
  infoTitleLeft,
  infoDescLeft,
  infoTitleRight,
  infoDescRight,
  timelineList,
  disciplineList,
  responsibilitieList,
  toolList,
}: CaseStudyProps) {
  return (
    <section id={stylesCase.caseInfo}>
      <div className={stylesCase.caseContainer}>
        <div className={stylesCase.caseHeading}>
          <div className={stylesCase.caseHeadingFlex}>
            <motion.div
              className={stylesCase.caseHeadingItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h6 className={stylesCase.subtitle}>{subtitle}</h6>
              <h2 className={stylesCase.title}>{title}</h2>
            </motion.div>
            <motion.div
              className={stylesCase.caseHeadingItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link href={buttonLink} target="_blank">
                <button className={stylesCase.button}>
                  <FigmaLogoIcon />
                  <span>{buttonText}</span>
                </button>
              </Link>
            </motion.div>
          </div>
          <motion.hr
            className={stylesCase.border}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          />
        </div>
        <motion.div
          className={stylesCase.caseBasicInfoWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={stylesCase.caseBasicInfoItem}>
            <h3 className={stylesCase.titleHeading}>{infoTitleLeft}</h3>
            <p className={stylesCase.description}>{infoDescLeft}</p>
          </div>
          <div className={stylesCase.caseBasicInfoItem}>
            <h3 className={stylesCase.titleHeading}>{infoTitleRight}</h3>
            <p className={stylesCase.description}>{infoDescRight}</p>
          </div>
        </motion.div>
        <motion.hr
          className={stylesCase.border}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        />
        <motion.div
          className={stylesCase.timelineWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ITEM */}
          {timelineList && (
            <div className={stylesCase.timelineItems}>
              <h3 className={stylesCase.titleHeading}>Timeline</h3>
              <ul>
                {timelineList.map((timelineListItem) => (
                  <li key={timelineListItem} className={stylesCase.description}>
                    {timelineListItem}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* ITEM */}
          <div className={stylesCase.timelineItems}>
            <h3 className={stylesCase.titleHeading}>Behind the Project</h3>
            <ul>
              {disciplineList &&
                disciplineList.map((disciplineListItem) => (
                  <li
                    key={disciplineListItem}
                    className={stylesCase.description}
                  >
                    {disciplineListItem}
                  </li>
                ))}
            </ul>
          </div>
          {/* ITEM */}
          <div className={stylesCase.timelineItems}>
            <h3 className={stylesCase.titleHeading}>Responsibilities</h3>
            <ul>
              {responsibilitieList &&
                responsibilitieList.map((responsibilitieListItem) => (
                  <li
                    key={responsibilitieListItem}
                    className={stylesCase.description}
                  >
                    {responsibilitieListItem}
                  </li>
                ))}
            </ul>
          </div>
          {/* ITEM */}
          <div className={stylesCase.timelineItems}>
            <h3 className={stylesCase.titleHeading}>Tools</h3>
            <ul>
              {toolList &&
                toolList.map((toolListItem) => (
                  <li key={toolListItem} className={stylesCase.description}>
                    {toolListItem}
                  </li>
                ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
