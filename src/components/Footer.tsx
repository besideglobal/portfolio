"use client";
import { motion } from "motion/react";
import stylesFooter from "@/styles/modules/footer.module.css";
import Link from "next/link";

const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME;

const getMonthAndYear = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

export default function Footer() {
  const formattedDate = buildTime ? getMonthAndYear(buildTime) : "N/A";

  return (
    <footer id={stylesFooter.footer}>
      <div className="container">
        <motion.div
          className={stylesFooter.footerWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className={stylesFooter.footerDate}>
            Updated: {formattedDate}
          </span>
          <div className={stylesFooter.infos}>
            <Link href="mailto:lunkwitz.tobias@gmail.com">
              <span className={stylesFooter.email}>
                lunkwitz.tobias@gmail.com
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
