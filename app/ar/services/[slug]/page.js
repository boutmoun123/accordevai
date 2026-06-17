import { notFound } from "next/navigation";
import { JsonLd, ServiceDetailPage } from "@/components/seo-pages";
import {
  arabicServicePages,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/app/seo-config";

export function generateStaticParams() {
  return Object.keys(arabicServicePages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = arabicServicePages[params.slug];

  if (!service) {
    return {};
  }

  return buildMetadata(service, "ar");
}

export default function ArabicServicePage({ params }) {
  const service = arabicServicePages[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetailPage service={service} locale="ar">
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service)} />
    </ServiceDetailPage>
  );
}
