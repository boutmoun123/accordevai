import Link from "next/link";
import {
  arabicServicePages,
  arabicPages,
  brandName,
  contactEmail,
  englishPages,
  servicePages,
} from "@/app/seo-config";

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SeoHeader({ locale = "en" }) {
  const isArabic = locale === "ar";
  const links = isArabic
    ? [
        ["/ar", "الرئيسية"],
        ["/ar/services", "الخدمات"],
        ["/ar/services/rag-systems", "RAG"],
        ["/ar/services/ai-chatbots", "Chatbots"],
        ["/ar/services/business-automation", "الأتمتة"],
        ["/contact", "تواصل"],
      ]
    : [
        ["/", "Home"],
        ["/services", "Services"],
        ["/solutions", "Solutions"],
        ["/process", "Process"],
        ["/contact", "Contact"],
      ];

  return (
    <header className="seo-header">
      <Link href={isArabic ? "/ar" : "/"} className="seo-brand">
        <span>{brandName}</span>
        <small>{isArabic ? "أنظمة AI وأتمتة" : "AI Systems & Automation"}</small>
      </Link>
      <nav className="seo-nav" aria-label={isArabic ? "التنقل الرئيسي" : "Primary navigation"}>
        {links.map(([href, label]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SeoFooter({ locale = "en" }) {
  const isArabic = locale === "ar";

  return (
    <footer className="seo-footer">
      <strong>{brandName}</strong>
      <span>
        {isArabic
          ? "أنظمة ذكاء اصطناعي وأتمتة للشركات"
          : "AI systems and automation for businesses"}
      </span>
      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
    </footer>
  );
}

export function ServiceDetailPage({ service, locale = "en", children }) {
  const isArabic = locale === "ar";

  return (
    <main className="seo-page" dir={isArabic ? "rtl" : "ltr"} lang={locale}>
      <SeoHeader locale={locale} />
      {children}
      <section className="seo-hero">
        <span className="seo-eyebrow">{isArabic ? "خدمة من Accordev AI" : "Accordev AI Service"}</span>
        <h1>{service.h1}</h1>
        <p>{service.intro}</p>
        <a className="seo-primary" href={`mailto:${contactEmail}`}>
          {isArabic ? "احجز استشارة مجانية" : "Book a free consultation"}
        </a>
      </section>

      <section className="seo-two-column">
        <article>
          <span className="seo-eyebrow">{isArabic ? "المشكلة" : "Problem"}</span>
          <h2>{isArabic ? "ما الذي يبطئ العمل؟" : "What slows the work down?"}</h2>
          <p>{service.problem}</p>
        </article>
        <article>
          <span className="seo-eyebrow">{isArabic ? "الحل" : "Solution"}</span>
          <h2>{isArabic ? "كيف نحلها؟" : "How Accordev AI solves it"}</h2>
          <p>{service.solution}</p>
        </article>
      </section>

      <SeoListSection
        title={isArabic ? "الفوائد الرئيسية" : "Key benefits"}
        items={service.benefits}
      />
      <SeoListSection title={isArabic ? "حالات الاستخدام" : "Use cases"} items={service.useCases} />
      <SeoSteps title={isArabic ? "كيف تعمل Accordev AI؟" : "How Accordev AI works"} steps={service.steps} />
      <SeoFaq title={isArabic ? "الأسئلة الشائعة" : "FAQ"} faqs={service.faqs} />
      <SeoCta locale={locale} />
      <SeoFooter locale={locale} />
    </main>
  );
}

export function OverviewPage({ page, locale = "en", children, links = [] }) {
  const isArabic = locale === "ar";

  return (
    <main className="seo-page" dir={isArabic ? "rtl" : "ltr"} lang={locale}>
      <SeoHeader locale={locale} />
      {children}
      <section className="seo-hero">
        <span className="seo-eyebrow">{brandName}</span>
        <h1>{page.h1}</h1>
        <p>{page.intro}</p>
        <a className="seo-primary" href={`mailto:${contactEmail}`}>
          {isArabic ? "احجز استشارة مجانية" : "Book a free consultation"}
        </a>
      </section>
      {links.length > 0 ? (
        <section className="seo-card-grid" aria-label={isArabic ? "روابط الخدمات" : "Service links"}>
          {links.map((item) => (
            <Link key={item.path} className="seo-card-link" href={item.path}>
              <span>{item.h1}</span>
              <p>{item.description}</p>
            </Link>
          ))}
        </section>
      ) : null}
      <SeoFooter locale={locale} />
    </main>
  );
}

export function ServicesOverview({ locale = "en" }) {
  const isArabic = locale === "ar";
  const page = isArabic ? arabicPages.services : englishPages.services;
  const links = isArabic
    ? Object.values(arabicServicePages)
    : Object.values(servicePages);

  return (
    <OverviewPage page={page} locale={locale} links={links} />
  );
}

export function SeoListSection({ title, items }) {
  return (
    <section className="seo-section">
      <h2>{title}</h2>
      <div className="seo-list-grid">
        {items.map((item) => (
          <article key={item}>
            <span aria-hidden="true">+</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SeoSteps({ title, steps }) {
  return (
    <section className="seo-section">
      <h2>{title}</h2>
      <ol className="seo-steps">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

export function SeoFaq({ title, faqs }) {
  return (
    <section className="seo-section">
      <h2>{title}</h2>
      <div className="seo-faq">
        {faqs.map((faq) => (
          <details key={faq.question} open>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function SeoCta({ locale = "en" }) {
  const isArabic = locale === "ar";

  return (
    <section className="seo-cta">
      <h2>{isArabic ? "هل تريد بناء نظام AI عملي؟" : "Ready to build a practical AI system?"}</h2>
      <p>
        {isArabic
          ? "احجز استشارة مجانية لمناقشة فرص الأتمتة والذكاء الاصطناعي داخل شركتك."
          : "Book a free consultation to discuss where AI systems and automation can create the clearest business impact."}
      </p>
      <a className="seo-primary" href={`mailto:${contactEmail}`}>
        {isArabic ? "احجز استشارة مجانية" : "Book a free consultation"}
      </a>
    </section>
  );
}
