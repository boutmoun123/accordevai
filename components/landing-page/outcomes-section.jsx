import SectionIntro from "./section-intro";
import styles from "./landing-page.module.css";

export default function OutcomesSection({ content }) {
  return (
    <section className={styles.section}>
      <div className={styles.outcomesGrid}>
        <div>
          <SectionIntro
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />

          <div className={styles.outcomesList}>
            {content.items.map((item) => (
              <div key={item} className={styles.outcomeItem}>
                <span className={styles.outcomeDot} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className={styles.highlightCard}>
          <span className={styles.highlightValue}>{content.highlight.value}</span>
          <h3>{content.highlight.title}</h3>
          <p>{content.highlight.description}</p>
          {content.highlight.details?.length ? (
            <div className={styles.highlightDetails}>
              {content.highlight.details.map((item) => (
                <div key={item} className={styles.highlightDetail}>
                  <span className={styles.outcomeDot} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
