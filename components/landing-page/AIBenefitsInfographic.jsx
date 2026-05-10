import {
  BarChart3,
  CircleDollarSign,
  MessagesSquare,
  ShieldCheck,
  Timer,
} from "lucide-react";
import styles from "./landing-page.module.css";

const INFOGRAPHIC_ICONS = {
  cost: CircleDollarSign,
  clock: Timer,
  support: MessagesSquare,
  trend: BarChart3,
};

export default function AIBenefitsInfographic({ content }) {
  const isArabic = content.lang === "ar";
  const shellClassName = `${styles.infographicShell} ${isArabic ? styles.infographicShellAr : styles.infographicShellEn}`;
  const headClassName = `${styles.infographicHead} ${isArabic ? styles.infographicHeadAr : styles.infographicHeadEn}`;
  const footerPillClassName = `${styles.infographicFooterPill} ${isArabic ? styles.infographicFooterPillAr : styles.infographicFooterPillEn}`;

  return (
    <section id="top" className={styles.infographicSection}>
      <div className={shellClassName}>
        <span
          className={`${styles.infographicOrnament} ${styles.infographicOrnamentTop}`}
          aria-hidden="true"
        />
        <span
          className={`${styles.infographicOrnament} ${styles.infographicOrnamentBottom}`}
          aria-hidden="true"
        />

        <div className={headClassName}>
          {content.badge?.trim() ? <span className={styles.eyebrow}>{content.badge}</span> : null}
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>

        <div className={styles.infographicGrid}>
          {content.items.map((item) => (
            <article
              key={item.title}
              className={`${styles.infographicCard} ${isArabic ? styles.infographicCardAr : styles.infographicCardEn}`}
            >
              <span className={styles.infographicCardAccent} aria-hidden="true" />
              <div className={styles.infographicCardTop}>
                <div className={styles.infographicIconWrap}>
                  <InfographicIcon kind={item.icon} />
                </div>
              </div>

              <div className={styles.infographicCardCopy}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.infographicFooter}>
          <a href="#process" className={footerPillClassName}>
            <span className={styles.infographicFooterContent}>
              <span className={styles.infographicFooterIconWrap}>
                <ShieldCheck className={styles.infographicFooterIcon} strokeWidth={2} />
              </span>
              <span>{content.ribbon}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function InfographicIcon({ kind }) {
  const Icon = INFOGRAPHIC_ICONS[kind] ?? CircleDollarSign;

  return <Icon className={styles.infographicIcon} strokeWidth={1.9} />;
}
