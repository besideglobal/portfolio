import stylesSkills from "@/styles/modules/skills.module.css";

interface XPProps {
  title: string;
  subtitle: string;
  progress: string | number;
}

export default function XP({ title, subtitle, progress }: XPProps) {
  return (
    <div className={stylesSkills.experienceItemWrapper}>
      <div className={stylesSkills.experienceHeading}>
        <h3 className={stylesSkills.experienceTitle}>{title}</h3>
        <span className={stylesSkills.experienceSubtitle}>{subtitle}</span>
      </div>
      <div className={stylesSkills.experienceLevel}>
        <div
          className={stylesSkills.experienceLevelProgress}
          style={{ width: progress }}
        ></div>
      </div>
    </div>
  );
}
