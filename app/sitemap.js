import { absoluteUrl, allIndexablePaths } from "@/app/seo-config";

export default function sitemap() {
  const lastModified = new Date();

  return allIndexablePaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" || path === "/ar" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/ar") ? 0.75 : 0.85,
  }));
}
