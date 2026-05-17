import Image from "next/image";
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
        {content.items.map((item, index) => {
          const isFullCard = index === content.items.length - 1;
          const showImage = item.icon === "server";

          return (
            <article
              key={item.title}
              className={[
                styles.serviceCard,
                isFullCard ? styles.serviceCardFull : "",
                showImage ? styles.serviceCardWithMedia : "",
              ].join(" ")}
            >
              <div className={styles.serviceContent}>
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
              </div>

              {showImage ? (
                <div className={styles.serviceVisual}>
                  <Image
                    src="/image.png"
                    alt={item.title}
                    width={1600}
                    height={900}
                    className={styles.serviceVisualImage}
                    sizes="(max-width: 900px) 100vw, 46vw"
                    priority={false}
                  />
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
