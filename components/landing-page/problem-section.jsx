import SectionIntro from "./section-intro";
import { FeatureIcon } from "./icons";
import styles from "./landing-page.module.css";

export default function ProblemSection({ content }) {
  return (
    <section className={styles.section}>
      <SectionIntro
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div className={styles.problemGrid}>
        {content.items.map((item) => (
          <article key={item.title} className={`${styles.softCard} ${styles.problemCard}`}>
            <FeatureIcon name={item.icon} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
