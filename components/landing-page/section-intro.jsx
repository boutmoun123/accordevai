import styles from "./landing-page.module.css";

export default function SectionIntro({ eyebrow, title, description, align = "start" }) {
  const introClassName =
    align === "center" ? `${styles.sectionIntro} ${styles.sectionIntroCentered}` : styles.sectionIntro;

  return (
    <div className={introClassName}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
