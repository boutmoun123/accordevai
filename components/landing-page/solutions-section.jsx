import SectionIntro from "./section-intro";
import { FeatureIcon } from "./icons";
import styles from "./landing-page.module.css";

const SOLUTION_ICONS = [
  "message",
  "leads",
  "brain",
  "rag",
  "report",
  "crm",
  "integration",
  "support",
  "calendar",
];

export default function SolutionsSection({ content }) {
  return (
    <section id="solutions" className={styles.section}>
      <SectionIntro
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div className={styles.solutionGrid}>
        {content.items.map((item, index) => {
          const label = typeof item === "string" ? item : item.label;
          const iconName =
            typeof item === "string" ? SOLUTION_ICONS[index] ?? "arrow" : item.icon;

          return (
            <article key={label} className={styles.solutionCard}>
              <FeatureIcon name={iconName} />
              <span>{label}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
