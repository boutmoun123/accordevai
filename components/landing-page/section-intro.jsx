import styles from "./landing-page.module.css";

export default function SectionIntro({ eyebrow, title, description, align = "start", headingLevel = "h2" }) {
  const introClassName =
    align === "center" ? `${styles.sectionIntro} ${styles.sectionIntroCentered}` : styles.sectionIntro;
  const Heading = headingLevel;

  return (
    <div className={introClassName}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <Heading>{title}</Heading>
      <p>{description}</p>
    </div>
  );
}
