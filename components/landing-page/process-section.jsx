import SectionIntro from "./section-intro";
import { FeatureIcon } from "./icons";
import styles from "./landing-page.module.css";

export default function ProcessSection({ content }) {
  return (
    <section id="process" className={styles.section}>
      <SectionIntro
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div className={styles.processGrid}>
        {content.steps.map((step) => (
          <article key={step.number} className={styles.processCard}>
            <div className={styles.processHeader}>
              <span className={styles.processNumber}>{step.number}</span>
              <FeatureIcon name={step.icon} />
            </div>

            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
