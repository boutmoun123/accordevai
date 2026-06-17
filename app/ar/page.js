import LandingPage from "@/components/landing-page/landing-page";
import { JsonLd } from "@/components/seo-pages";
import {
  arabicPages,
  buildMetadata,
  organizationSchema,
  websiteSchema,
} from "@/app/seo-config";

export const metadata = buildMetadata(arabicPages.home, "ar");

export default function ArabicHomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <LandingPage initialLanguage="ar" lockLanguage />
    </>
  );
}
