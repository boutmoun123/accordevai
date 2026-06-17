import SectionIntro from "./section-intro";
import { FeatureIcon } from "./icons";
import styles from "./landing-page.module.css";

export default function Hero({ content }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <SectionIntro
            eyebrow={content.eyebrow}
            title={content.h1 ?? content.title}
            description={content.description}
            headingLevel="h1"
          />

          <div className={styles.heroTrustLine}>{content.trustLine}</div>

          <div className={styles.heroActions}>
            <a href="#solutions" className={styles.secondaryButton}>
              {content.secondaryAction}
            </a>
          </div>

          <div className={styles.heroHighlights}>
            {content.highlights.map((item) => (
              <div key={item} className={styles.highlightChip}>
                <FeatureIcon name="check" compact />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroBoard}>
          <div className={styles.heroBoardHeader}>
            <div>
              <span className={styles.boardLabel}>{content.boardTitle}</span>
              <h3>{content.boardLabel}</h3>
            </div>

            <span className={styles.signalDot} />
          </div>

          <div className={styles.heroBoardGrid}>
            {content.boardItems.map((item) => (
              <article key={item.title} className={styles.boardCard}>
                <FeatureIcon name={item.icon} />
                <strong>{item.title}</strong>
                <p>{item.subtitle}</p>
              </article>
            ))}
          </div>

          <div className={styles.boardFooter}>
            {content.boardFooter.map((item) => (
              <div key={item.label} className={styles.boardStat}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
