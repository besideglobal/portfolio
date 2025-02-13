import ITNunweiler from "@/images/itnunweiler.png";
import styles from "@/styles/modules/discover.module.css";
import SectionHeading from "@/components/SectionHeading";
import DiscoverWeb from "@/components/DiscoverWeb";

export default function Discover() {
  return (
    <section
      id="Discover"
      className="section-padding"
      style={{ paddingTop: 0 }}
    >
      <div className="container">
        {/* SECTION HEADING */}
        <SectionHeading
          subtitle="Projects"
          title="Discover"
          description="Explore my design portfolio, bringing together style and usability for impactful digital experiences."
        />
        <div className={styles.discoverWrapper}>
          <div className="grid-col-2">
            <DiscoverWeb
              href="/it-nunweiler"
              image={ITNunweiler}
              alt="IT-Nunweiler Hannover"
              title="IT-Nunweiler"
              description="IT company in and around Hannover."
              badge={["UI/UX", "Redesign"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
