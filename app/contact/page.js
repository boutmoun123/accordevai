import { JsonLd, OverviewPage, SeoListSection } from "@/components/seo-pages";
import { buildMetadata, contactEmail, englishPages, serviceSchema } from "@/app/seo-config";

export const metadata = buildMetadata(englishPages.contact);

const topics = [
  "RAG assistants and internal knowledge systems",
  "AI chatbots for websites and WhatsApp",
  "AI agents and workflow automation",
  "CRM automation and customer follow-up",
  "n8n automation and app integrations",
  "AI training for business teams",
];

export default function ContactPage() {
  return (
    <OverviewPage page={englishPages.contact}>
      <JsonLd data={serviceSchema(englishPages.contact)} />
      <SeoListSection title="Consultation topics" items={topics} />
      <section className="seo-section">
        <h2>Contact</h2>
        <p>
          Email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> to book a free consultation
          with Accordev AI.
        </p>
      </section>
    </OverviewPage>
  );
}
