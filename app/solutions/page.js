import { JsonLd, OverviewPage, SeoListSection, SeoSteps } from "@/components/seo-pages";
import { buildMetadata, englishPages, serviceSchema } from "@/app/seo-config";

export const metadata = buildMetadata(englishPages.solutions);

const solutionItems = [
  "AI customer response systems",
  "Internal knowledge assistants",
  "Automated lead follow-up workflows",
  "CRM data and sales pipeline automation",
  "AI-assisted reporting and operational visibility",
  "Connected workflows across business tools",
];

const steps = [
  "Identify the most repeated and delayed workflows",
  "Choose the right AI or automation pattern",
  "Connect the system to business tools and data",
  "Train the team and improve based on usage",
];

export default function SolutionsPage() {
  return (
    <OverviewPage page={englishPages.solutions}>
      <JsonLd data={serviceSchema(englishPages.solutions)} />
      <SeoListSection title="Business solutions Accordev AI can build" items={solutionItems} />
      <SeoSteps title="From idea to working system" steps={steps} />
    </OverviewPage>
  );
}
