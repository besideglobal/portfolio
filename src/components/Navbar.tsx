import styles from "@/styles/modules/navbar.module.css";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarWrapper}>
          <Link href="/">
            <span className={styles.navbarLogo}>Tobias Lunkwitz</span>
          </Link>
          <div className={styles.navbarItems}>
            <Link href="https://github.com/besideglobal" target="_blank">
              <button className={styles.navbarButton}>
                <span>
                  <GitHubLogoIcon />
                  GitHub
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
