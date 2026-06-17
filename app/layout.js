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
  metadataBase: new URL("https://accordev.com"),
  icons: {
    icon: "/accordev-logo.jpg",
    shortcut: "/accordev-logo.jpg",
    apple: "/accordev-logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
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
