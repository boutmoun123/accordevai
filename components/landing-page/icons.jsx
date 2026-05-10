import styles from "./landing-page.module.css";

export function FeatureIcon({ name, compact = false }) {
  const className = compact ? `${styles.iconBadge} ${styles.iconBadgeCompact}` : styles.iconBadge;

  return (
    <span className={className} aria-hidden="true">
      {renderIcon(name)}
    </span>
  );
}

function renderIcon(name) {
  switch (name) {
    case "message":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 12a7.5 7.5 0 0 1-7.5 7.5H7L3.5 21l1.2-3.9A7.5 7.5 0 1 1 20 12Z" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 9.7 9.7 3 12l6.7 2.3L12 21l2.3-6.7L21 12l-6.7-2.3L12 3Z" />
        </svg>
      );
    case "brain":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 5.5a3 3 0 0 1 6 0 3 3 0 0 1 3.2 4 3.2 3.2 0 0 1-.7 6.2A3.4 3.4 0 0 1 14 19h-4a3.4 3.4 0 0 1-3.5-3.3 3.2 3.2 0 0 1-.7-6.2 3 3 0 0 1 3.2-4Z" />
          <path d="M12 8v8M9.5 10.2 12 12l2.5-1.8" />
        </svg>
      );
    case "crm":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="5" width="16" height="14" rx="3" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      );
    case "report":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 19V9M12 19V5M17 19v-7" />
          <path d="M5 19h14" />
        </svg>
      );
    case "marketing":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 11v2a2 2 0 0 0 2 2h1l2.5 4h2l-1.6-4H12l6 3V8l-6 3H6a2 2 0 0 0-2 2Z" />
          <path d="M18 10a3.5 3.5 0 0 1 0 4" />
        </svg>
      );
    case "training":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="m12 4 8 4-8 4-8-4 8-4Z" />
          <path d="m6 10 6 3 6-3" />
          <path d="m6 14 6 3 6-3" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    case "cost":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 4c-3.4 0-6 1.8-6 4.1 0 2 1.5 3.2 3.2 4.7L7 19h10l-2.2-6.2c1.7-1.5 3.2-2.7 3.2-4.7C18 5.8 15.4 4 12 4Z" />
          <path d="M12 8v7M14.3 9.7A2.6 2.6 0 0 0 12 8.8c-1.1 0-2 .6-2 1.5 0 .8.7 1.2 2 1.5 1.3.3 2 .7 2 1.5 0 .9-.9 1.5-2 1.5a2.9 2.9 0 0 1-2.5-1.1" />
        </svg>
      );
    case "leads":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M16.5 19a4.5 4.5 0 0 0-9 0" />
          <circle cx="12" cy="9" r="3" />
          <path d="M19 8h2M20 7v2" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 13a7 7 0 0 1 14 0" />
          <path d="M6.5 14H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm11 0H19a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1.5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
          <path d="M9 18.5A3.8 3.8 0 0 0 12 20a3.8 3.8 0 0 0 3-1.5" />
          <path d="M10 11h4" />
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="6.5" rx="7" ry="2.5" />
          <path d="M5 6.5v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5" />
          <path d="M5 11.5v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5" />
        </svg>
      );
    case "server":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="5" width="16" height="6" rx="2" />
          <rect x="4" y="13" width="16" height="6" rx="2" />
          <path d="M8 8h.01M8 16h.01M12 8h4M12 16h4" />
        </svg>
      );
    case "rag":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 4h8l3 3v13H7z" />
          <path d="M15 4v4h4M10 13h4M10 17h4M10 9h2" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="m9 5 6-2 4 2v14l-6 2-4-2-4 2V7l4-2Z" />
          <path d="M9 5v14M15 3v14" />
        </svg>
      );
    case "build":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="m14 7 3-3 3 3-3 3-3-3ZM4 20l6.5-6.5" />
          <path d="m9 9 6 6M6 9l9 9" />
        </svg>
      );
    case "refresh":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 11a8 8 0 0 0-14.7-3.9M4 13a8 8 0 0 0 14.7 3.9" />
          <path d="M4 4v4h4M20 20v-4h-4" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m5 12 4.2 4.2L19 7.5" />
        </svg>
      );
    case "company":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 20V7l8-3 8 3v13" />
          <path d="M9 20v-4h6v4M9 9h.01M12 9h.01M15 9h.01M9 12h.01M12 12h.01M15 12h.01" />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3.5" y="7" width="17" height="12" rx="2.5" />
          <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
          <path d="M3.5 12h17" />
          <path d="M10 12.2v1.6M14 12.2v1.6" />
        </svg>
      );
    case "store":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 9.5 6.4 5h11.2L19 9.5" />
          <path d="M4.5 9.5h15v2.2A2.3 2.3 0 0 1 17.2 14H6.8a2.3 2.3 0 0 1-2.3-2.3Z" />
          <path d="M6.5 14v5.5h11V14" />
          <path d="M9.5 19.5v-3.8h5v3.8" />
        </svg>
      );
    case "medical":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 20s-6.5-4.5-6.5-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 6.5 2.7C18.5 15.5 12 20 12 20Z" />
          <path d="M12 10v4M10 12h4" />
        </svg>
      );
    case "trend":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 18h14" />
          <path d="M7 18v-4M12 18V9M17 18v-7" />
          <path d="m8 10 4-4 3 3 4-4" />
          <path d="M19 5h-4v4" />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      );
    case "integration":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3.5" y="5" width="5" height="5" rx="1.5" />
          <rect x="15.5" y="5" width="5" height="5" rx="1.5" />
          <rect x="9.5" y="14" width="5" height="5" rx="1.5" />
          <path d="M8.5 7.5h7M12 10v4" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="5" width="16" height="15" rx="3" />
          <path d="M8 3.8v2.8M16 3.8v2.8M4 9h16" />
          <path d="m9.5 14 1.6 1.6 3.4-3.6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}
