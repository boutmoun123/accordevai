import { IBM_Plex_Sans_Arabic, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const themeScript = `
  (function () {
    try {
      var storageKey = "accordev-theme";
      var storedTheme = window.localStorage.getItem(storageKey);
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var resolvedTheme = storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : (prefersDark ? "dark" : "light");

      document.documentElement.dataset.theme = resolvedTheme;
      document.documentElement.style.colorScheme = resolvedTheme;
    } catch (error) {}
  })();
`;

const arabicFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
});

const uiFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-ui",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
});

export const metadata = {
  title: "Accordev AI | حلول ذكاء اصطناعي وأتمتة للشركات",
  description:
    "Accordev AI تبني أنظمة ذكاء اصطناعي وأتمتة عملية للشركات في الخليج والوطن العربي مع حضور في California - USA وخبرة تقنية منذ 2021.",
  icons: {
    icon: "/accordev-logo.jpg",
    shortcut: "/accordev-logo.jpg",
    apple: "/accordev-logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${arabicFont.variable} ${uiFont.variable} ${displayFont.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
