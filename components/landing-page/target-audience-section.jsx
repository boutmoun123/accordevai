import SectionIntro from "./section-intro";
import { FeatureIcon } from "./icons";
import styles from "./landing-page.module.css";

const AUDIENCE_ICONS = [
  "company",
  "briefcase",
  "marketing",
  "store",
  "training",
  "medical",
  "support",
  "trend",
];

export default function TargetAudienceSection({ content }) {
  return (
    <section className={styles.section}>
      <SectionIntro
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div className={styles.audienceGrid}>
        {content.items.map((item, index) => {
          const label = typeof item === "string" ? item : item.label;
          const iconName =
            typeof item === "string" ? AUDIENCE_ICONS[index] ?? "company" : item.icon;

          return (
            <article key={label} className={styles.audienceCard}>
              <FeatureIcon name={iconName} />
              <span>{label}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
