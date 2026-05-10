import SectionIntro from "./section-intro";
import { FeatureIcon } from "./icons";
import styles from "./landing-page.module.css";

export default function ServicesSection({ content }) {
  return (
    <section id="services" className={styles.section}>
      <SectionIntro
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div className={styles.servicesGrid}>
        {content.items.map((item, index) => (
          <article
            key={item.title}
            className={`${styles.serviceCard} ${index === content.items.length - 1 ? styles.serviceCardFull : ""}`}
          >
            <div className={styles.serviceHeader}>
              <FeatureIcon name={item.icon} />
              <h3>{item.title}</h3>
            </div>

            <p>{item.description}</p>

            <ul className={styles.pointList}>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
