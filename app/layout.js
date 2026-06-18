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
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
