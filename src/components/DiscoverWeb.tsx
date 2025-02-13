"use client";
import Image from "next/image";
import styles from "@/styles/modules/discover.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CSSProperties } from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

interface DiscoverWebProps {
  href?: string;
  image: string | StaticImport;
  alt: string;
  title: string;
  description: string;
  badge?: string[];
  imageStyle?: CSSProperties;
}

export default function DiscoverWeb({
  href,
  image,
  alt,
  title,
  description,
  badge,
  imageStyle,
}: DiscoverWebProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link href={href ?? "/404"}>
        <div className={styles.discoverItem}>
          <div className={styles.discoverItemImageWrapper}>
            <div className={styles.discoverGrid}>
              <div className={styles.discoverItemImage}>
                <Image src={image} alt={alt} style={imageStyle || undefined} />
                <div className={styles.discoverInfo}>
                  <div className={styles.discoverTop}>
                    <h3 className={styles.discoverTitle}>{title}</h3>
                    <p className={styles.discoverDesc}>{description}</p>
                  </div>
                  <div className={styles.discoverTopRight}>
                    <ArrowTopRightIcon />
                  </div>
                  <div className={styles.discoverCFooter}>
                    {badge && (
                      <div className={styles.discoverBadges}>
                        {badge.map((badgeItem, index) => (
                          <React.Fragment key={badgeItem}>
                            <span className={styles.discoverBadgeItem}>
                              {badgeItem}
                            </span>
                            {index < badge.length - 1 && (
                              <span className={styles.discoverBadgeSeparator}>
                                /
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
