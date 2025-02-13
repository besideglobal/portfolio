import SectionHeading from "./SectionHeading";
import stylesSkills from "@/styles/modules/skills.module.css";
import XP from "@/components/XP";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <SectionHeading
          subtitle="Skills"
          title="Working Experience"
          description="Collaborate with brands and agencies to create impactful results."
        />
        <div className={stylesSkills.cardWrapper}>
          {/* CARD ITEM */}
          <div className={stylesSkills.cardItem}>
            <div className={stylesSkills.title}>Experience Level</div>
            <div className={stylesSkills.experienceWrapper}>
              <XP title="NextJS" subtitle="Expert" progress="90%" />
              <XP title="TypeScript" subtitle="Basic" progress="40%" />
              <XP
                title="Shopify Theme Development"
                subtitle="Basic"
                progress="35%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
