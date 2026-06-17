import { JsonLd, ServicesOverview } from "@/components/seo-pages";
import { arabicPages, buildMetadata, serviceSchema } from "@/app/seo-config";

export const metadata = buildMetadata(arabicPages.services, "ar");

export default function ArabicServicesPage() {
  return (
    <ServicesOverview locale="ar">
      <JsonLd data={serviceSchema(arabicPages.services)} />
    </ServicesOverview>
  );
}
