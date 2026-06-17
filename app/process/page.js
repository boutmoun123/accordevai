import { JsonLd, OverviewPage, SeoSteps } from "@/components/seo-pages";
import { buildMetadata, englishPages, serviceSchema } from "@/app/seo-config";

export const metadata = buildMetadata(englishPages.process);

const steps = [
  "Analyze current workflows, tools, data, and repeated tasks",
  "Prioritize automation opportunities by impact and practicality",
  "Build the AI system, workflow, assistant, or CRM automation",
  "Train the team, review outcomes, and improve the system",
];

export default function ProcessPage() {
  return (
    <OverviewPage page={englishPages.process}>
      <JsonLd data={serviceSchema(englishPages.process)} />
      <SeoSteps title="How Accordev AI implements automation" steps={steps} />
    </OverviewPage>
  );
}
