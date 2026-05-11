import styles from "./landing-page.module.css";

export default function CTASection({ content, links, consultationHref }) {
  const isExternalConsultation = consultationHref?.startsWith("https://");

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.ctaCard}>
        <div className={styles.ctaCopy}>
          <span className={styles.eyebrow}>{content.eyebrow}</span>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>

        <div className={styles.ctaActions}>
          <a
            href={consultationHref}
            className={styles.primaryButton}
            target={isExternalConsultation ? "_blank" : undefined}
            rel={isExternalConsultation ? "noreferrer" : undefined}
          >
            Gmail
          </a>
          <a href={links.whatsapp} className={styles.secondaryButton} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <div className={styles.ctaMeta}>
          <span>{content.microcopy}</span>
          <a href={`mailto:${links.email}`}>{links.email}</a>
        </div>
      </div>
    </section>
  );
}
