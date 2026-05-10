import SectionIntro from "./section-intro";
import { FeatureIcon } from "./icons";
import styles from "./landing-page.module.css";

export default function WhyUsSection({ content }) {
  return (
    <section id="why-accordev" className={styles.section}>
      <div className={styles.whyGrid}>
        <div className={styles.whyPrimary}>
          <SectionIntro
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />

          <div className={styles.whyPoints}>
            {content.points.map((point) => (
              <div key={point} className={styles.checkRow}>
                <FeatureIcon name="check" compact />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className={styles.spotlightCard}>
          <span className={styles.eyebrow}>{content.spotlightTitle}</span>
          <h3>{content.spotlightText}</h3>

          <div className={styles.statStack}>
            {content.stats.map((item) => (
              <div key={item.label} className={styles.statCard}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
