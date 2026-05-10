import Image from "next/image";
import styles from "./landing-page.module.css";

export default function Header({
  brand,
  nav,
  ctaLabel,
  ctaHref,
  menuLabel,
  themeLabel,
  themeButton,
  language,
  theme,
  onLanguageChange,
  onThemeChange,
  menuOpen,
  onMenuToggle,
  onNavigate,
}) {
  const nextLanguage = language === "ar" ? "en" : "ar";

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a href="#top" className={styles.brand} onClick={() => onNavigate()}>
          <span className={styles.brandMark}>
            <Image src="/accordev-logo.jpg" alt="Accordev AI" fill sizes="56px" />
          </span>

          <span className={styles.brandCopy}>
            <strong>{brand.name}</strong>
            <small>{brand.label}</small>
          </span>
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-label={menuLabel}
          onClick={onMenuToggle}
        >
          <span />
          <span />
        </button>

        <div className={`${styles.headerPanel} ${menuOpen ? styles.headerPanelOpen : ""}`}>
          <nav className={styles.nav}>
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={styles.navLink}
                onClick={() => onNavigate()}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <button
              type="button"
              className={`${styles.utilityButton} ${styles.utilityButtonIconOnly}`}
              aria-label={`${themeLabel}: ${themeButton[theme]}`}
              title={themeButton[theme]}
              onClick={onThemeChange}
            >
              <ThemeGlyph theme={theme} />
            </button>

            <button
              type="button"
              className={styles.utilityButton}
              onClick={() => onLanguageChange(nextLanguage)}
            >
              {language === "ar" ? "EN" : "AR"}
            </button>

            <a
              href={ctaHref}
              className={styles.primaryButton}
              target="_blank"
              rel="noreferrer"
              onClick={() => onNavigate()}
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function ThemeGlyph({ theme }) {
  if (theme === "dark") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M20 15.2A7.8 7.8 0 1 1 11.3 4a6.6 6.6 0 0 0 8.7 11.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.5 1.5M17.8 17.8l1.5 1.5M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.5-1.5M17.8 6.2l1.5-1.5" />
    </svg>
  );
}
