import { ServicesOverview } from "@/components/seo-pages";
import { buildMetadata, englishPages, serviceSchema } from "@/app/seo-config";
import { JsonLd } from "@/components/seo-pages";

export const metadata = buildMetadata(englishPages.services);

export default function ServicesPage() {
  return (
    <ServicesOverview>
      <JsonLd data={serviceSchema(englishPages.services)} />
    </ServicesOverview>
  );
}
