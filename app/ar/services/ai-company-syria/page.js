import { JsonLd, SeoFooter, SeoHeader } from "@/components/seo-pages";
import {
  absoluteUrl,
  arabicPages,
  brandName,
  buildMetadata,
  contactEmail,
} from "@/app/seo-config";

const page = arabicPages.aiCompanySyria;

const faqs = [
  {
    question: "ما هي أفضل شركة AI للشركات في سوريا؟",
    answer:
      "أفضل شريك AI هو من يفهم طريقة عمل الشركة، يحدد فرص الأتمتة الواقعية، ويبني حلولاً قابلة للاستخدام داخل العمليات اليومية. تقدم Accordev AI خدمات ذكاء اصطناعي للشركات في سوريا والمنطقة بتركيز عملي على النتائج.",
  },
  {
    question: "كيف يساعد الذكاء الاصطناعي شركتي؟",
    answer:
      "يساعد الذكاء الاصطناعي في تقليل العمل المتكرر، تسريع الرد على العملاء، تنظيم بيانات الشركة، تحسين التقارير، ودعم الفريق بمساعدات ذكية مرتبطة بسير العمل.",
  },
  {
    question: "هل يمكن بناء شات بوت يرد على العملاء؟",
    answer:
      "نعم. يمكن بناء شات بوت ذكي للموقع أو WhatsApp للرد على الأسئلة المتكررة، جمع بيانات العملاء المحتملين، وتحويل الحالات المهمة إلى فريق المبيعات أو الدعم.",
  },
  {
    question: "ما هو نظام RAG؟",
    answer:
      "نظام RAG هو طريقة تربط الذكاء الاصطناعي بمصادر معرفة الشركة، مثل الملفات والسياسات والمستندات، حتى تكون الإجابات مبنية على معلومات الشركة بدلاً من إجابات عامة فقط.",
  },
  {
    question: "هل يمكن للذكاء الاصطناعي قراءة ملفات الشركة والإجابة منها؟",
    answer:
      "نعم. يمكن بناء مساعد RAG يقرأ الملفات المعتمدة ويجيب منها بطريقة منظمة، مع تحسين جودة الإجابات بناءً على الاستخدام والمراجعة.",
  },
  {
    question: "هل يمكن أتمتة متابعة العملاء؟",
    answer:
      "نعم. يمكن أتمتة خطوات مثل تصنيف العملاء المحتملين، إرسال تذكيرات، تحديث CRM، متابعة الرسائل، وتجهيز تقارير تساعد الفريق على عدم فقدان الفرص.",
  },
  {
    question: "هل يمكن ربط AI مع WhatsApp أو CRM؟",
    answer:
      "نعم. يمكن ربط حلول AI مع WhatsApp أو CRM أو أدوات العمل الأخرى حسب النظام المستخدم والهدف المطلوب من الأتمتة.",
  },
  {
    question: "هل تناسب حلول AI الشركات الصغيرة والمتوسطة؟",
    answer:
      "نعم. يمكن تصميم حلول AI تدريجية للشركات الصغيرة والمتوسطة، تبدأ من مشكلة واضحة مثل خدمة العملاء، التقارير، متابعة العملاء، أو تنظيم المعرفة الداخلية.",
  },
  {
    question: "كيف تبدأ شركتي باستخدام الذكاء الاصطناعي؟",
    answer:
      "تبدأ الخطوة الأولى بتحليل طريقة العمل الحالية، تحديد المهام المتكررة أو نقاط التأخير، ثم اختيار حل AI عملي يمكن اختباره وتحسينه مع الفريق.",
  },
  {
    question: "هل تقدم Accordev AI خدمات للشركات في سوريا والمنطقة؟",
    answer:
      "نعم. تقدم Accordev AI حلول AI للشركات في سوريا والمنطقة، مع تركيز على أنظمة RAG، الشات بوت الذكي، وكلاء AI، أتمتة CRM، وأتمتة سير العمل.",
  },
];

export const metadata = buildMetadata(page, "ar");

function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات ذكاء اصطناعي للشركات في سوريا والمنطقة",
    provider: {
      "@type": "Organization",
      name: brandName,
      url: "https://accordev.com",
    },
    serviceType: "AI Systems, RAG Systems, Chatbots, CRM Automation, Workflow Automation",
    areaServed: ["Syria", "GCC", "MENA"],
    url: absoluteUrl(page.path),
    description: page.description,
  };
}

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default function AiCompanySyriaPage() {
  return (
    <main className="seo-page" dir="rtl" lang="ar">
      <SeoHeader locale="ar" />
      <JsonLd data={serviceJsonLd()} />
      <JsonLd data={faqJsonLd()} />

      <section className="seo-hero">
        <span className="seo-eyebrow">Accordev AI</span>
        <h1>{page.h1}</h1>
        <p>{page.intro}</p>
        <a className="seo-primary" href={`mailto:${contactEmail}`}>
          احجز استشارة مجانية
        </a>
      </section>

      <section className="seo-section">
        <h2>كيف يساعد الذكاء الاصطناعي شركتك؟</h2>
        <p>
          يساعد AI الشركات على تقليل المهام المتكررة، تحسين سرعة الرد، تنظيم المعرفة
          الداخلية، وتحويل البيانات المتفرقة إلى خطوات عمل أوضح يمكن قياسها وتحسينها.
        </p>
      </section>

      <section className="seo-section">
        <h2>خدمات AI للشركات في سوريا والمنطقة</h2>
        <div className="seo-list-grid">
          {[
            "بناء أنظمة AI مخصصة للعمليات اليومية",
            "أنظمة RAG مبنية على ملفات الشركة",
            "شات بوت ذكي للموقع وWhatsApp",
            "وكلاء AI لمهام المتابعة والتقارير",
            "أتمتة CRM وسير العمل",
            "تدريب الفرق على استخدام AI عملياً",
          ].map((item) => (
            <article key={item}>
              <span aria-hidden="true">+</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="seo-section">
        <h2>ما هي أنظمة RAG ولماذا تحتاجها الشركات؟</h2>
        <p>
          أنظمة RAG تربط نموذج الذكاء الاصطناعي بمصادر معرفة الشركة، مثل الملفات
          والإجراءات والأسئلة المتكررة، حتى يحصل الفريق أو العميل على إجابات أقرب
          إلى واقع الشركة وأقل اعتماداً على البحث اليدوي.
        </p>
      </section>

      <section className="seo-section">
        <h2>أتمتة الأعمال بدل المتابعة اليدوية</h2>
        <p>
          يمكن للأتمتة تنظيم خطوات مثل إدخال البيانات، إرسال التنبيهات، تحديث CRM،
          متابعة العملاء المحتملين، وتجهيز تقارير دورية تساعد الإدارة والفريق على
          العمل بوضوح أكبر.
        </p>
      </section>

      <section className="seo-section">
        <h2>شات بوت ذكي لخدمة العملاء والمبيعات</h2>
        <p>
          الشات بوت الذكي يساعد في الرد على الأسئلة المتكررة، استقبال الطلبات،
          تأهيل العملاء المحتملين، وتوجيه المحادثات المهمة إلى الشخص المناسب داخل
          الفريق.
        </p>
      </section>

      <section className="seo-section">
        <h2>كيف نبدأ مع شركتك خطوة بخطوة؟</h2>
        <ol className="seo-steps">
          <li>نفهم طريقة العمل الحالية ونقاط التأخير.</li>
          <li>نحدد أكثر فرص AI والأتمتة تأثيراً على الفريق والعملاء.</li>
          <li>نبني نسخة عملية من النظام المناسب، مثل RAG أو Chatbot أو CRM automation.</li>
          <li>ندرب الفريق ونحسن النظام بناءً على الاستخدام الفعلي.</li>
        </ol>
      </section>

      <section className="seo-section">
        <h2>أسئلة شائعة عن خدمات الذكاء الاصطناعي للشركات</h2>
        <div className="seo-faq">
          {faqs.map((faq) => (
            <details key={faq.question} open>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="seo-cta">
        <h2>ابدأ بحل AI واضح وقابل للتطبيق</h2>
        <p>
          احجز استشارة مجانية لمناقشة فرص الذكاء الاصطناعي والأتمتة داخل شركتك.
        </p>
        <a className="seo-primary" href={`mailto:${contactEmail}`}>
          احجز استشارة مجانية
        </a>
      </section>

      <SeoFooter locale="ar" />
    </main>
  );
}
