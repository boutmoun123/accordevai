import styles from "./landing-page.module.css";

export default function Footer({ brand, nav, content, email }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <strong>{brand.name}</strong>
          <span>{brand.label}</span>
          <p>{content.description}</p>
        </div>

        <div className={styles.footerColumn}>
          <h3>{content.servicesTitle}</h3>
          <div className={styles.footerLinks}>
            {nav.slice(1, 5).map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3>{content.contactTitle}</h3>
          <div className={styles.footerLinks}>
            {content.contactItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>{content.rights}</span>
      </div>
    </footer>
  );
}
