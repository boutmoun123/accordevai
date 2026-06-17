import { notFound } from "next/navigation";
import { JsonLd, ServiceDetailPage } from "@/components/seo-pages";
import { buildMetadata, faqSchema, servicePages, serviceSchema } from "@/app/seo-config";

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = servicePages[params.slug];

  if (!service) {
    return {};
  }

  return buildMetadata(service);
}

export default function ServicePage({ params }) {
  const service = servicePages[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetailPage service={service}>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service)} />
    </ServiceDetailPage>
  );
}
