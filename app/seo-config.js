export const siteUrl = "https://accordev.com";
export const brandName = "Accordev AI";
export const contactEmail = "mb@accordev.com";

export const forbiddenSafeLegacyPatterns = [
  ["car", "wash"],
  ["wash", "software"],
  ["auto", "detail", "ing"],
  ["veh", "icle"],
  ["veh", "icles"],
  ["detail", "ing"],
];

export const englishPages = {
  home: {
    path: "/",
    title: "Accordev AI | AI Systems & Automation for Businesses",
    description:
      "Accordev AI helps businesses build AI systems, RAG assistants, chatbots, CRM automation, and workflow automation to reduce manual work, improve customer service, and increase productivity.",
    h1: "AI Systems & Automation for Businesses",
    intro:
      "Build practical AI systems that connect your customer service, knowledge, CRM, reporting, and daily workflows into a clearer operating model.",
  },
  services: {
    path: "/services",
    title: "AI Systems and Automation Services | Accordev AI",
    description:
      "Explore Accordev AI services for RAG systems, AI chatbots, AI agents, CRM automation, workflow automation, n8n automation, and team AI training.",
    h1: "AI Systems and Automation Services",
    intro:
      "Accordev AI designs, builds, and improves business AI systems that reduce manual work and make operations easier to manage.",
  },
  solutions: {
    path: "/solutions",
    title: "AI Automation Solutions for Businesses | Accordev AI",
    description:
      "Explore business AI solutions for customer support, internal knowledge, lead follow-up, CRM workflows, reporting, and connected operations.",
    h1: "AI Automation Solutions for Businesses",
    intro:
      "Turn disconnected tasks into connected systems that help teams respond faster, work with cleaner data, and make better decisions.",
  },
  process: {
    path: "/process",
    title: "AI Automation Implementation Process | Accordev AI",
    description:
      "Learn how Accordev AI analyzes workflows, identifies automation opportunities, builds the right AI system, trains teams, and improves results.",
    h1: "AI Automation Implementation Process",
    intro:
      "A practical implementation process that starts with operations, then turns the highest-value opportunities into working AI systems.",
  },
  contact: {
    path: "/contact",
    title: "Contact Accordev AI | Book a Free Consultation",
    description:
      "Contact Accordev AI to discuss AI systems, RAG assistants, chatbots, CRM automation, workflow automation, n8n automation, or AI training for your team.",
    h1: "Book a Free AI Automation Consultation",
    intro:
      "Share how your business works today and we will help identify where AI systems and automation can create measurable impact.",
  },
};

export const servicePages = {
  "rag-systems": {
    path: "/services/rag-systems",
    title: "RAG Systems for Businesses | Accordev AI",
    description:
      "Accordev AI builds RAG systems that turn company documents, policies, and knowledge bases into reliable AI assistants for teams and customers.",
    h1: "RAG Systems for Businesses",
    intro:
      "Create an assistant that answers from your own company knowledge, helping people find accurate information without searching through scattered files.",
    problem: "Teams lose time searching documents, repeating answers, and trying to verify information across different sources.",
    solution:
      "We design retrieval-augmented generation systems that connect approved knowledge sources to AI assistants with clear controls and useful answers.",
    benefits: [
      "Faster access to company knowledge",
      "More consistent customer and team answers",
      "Less repetitive support and internal clarification",
      "Better onboarding, training, and documentation usage",
    ],
    useCases: [
      "Internal knowledge assistant",
      "Customer support assistant",
      "Policy and procedure search",
      "Training and onboarding assistant",
    ],
    steps: [
      "Audit knowledge sources and answer requirements",
      "Prepare documents for retrieval and quality checks",
      "Build the assistant experience and integrations",
      "Test answers, train users, and improve coverage",
    ],
    faqs: [
      {
        question: "Can a RAG assistant use our existing files?",
        answer:
          "Yes. Accordev AI can connect approved documents, knowledge bases, and structured content so the assistant answers from business-specific information.",
      },
      {
        question: "Is RAG useful for internal teams and customers?",
        answer:
          "Yes. The same foundation can support employees, support teams, or customer-facing experiences with different access rules and answer styles.",
      },
    ],
  },
  "ai-chatbots": {
    path: "/services/ai-chatbots",
    title: "AI Chatbots for Websites and WhatsApp | Accordev AI",
    description:
      "Accordev AI builds AI chatbots for websites and WhatsApp to answer questions, qualify leads, support customers, and automate follow-up.",
    h1: "AI Chatbots for Websites and WhatsApp",
    intro:
      "Launch a helpful chatbot that answers quickly, collects useful information, and connects customers to the right next step.",
    problem: "Slow replies, repeated questions, and scattered lead information make customer service and sales follow-up harder to manage.",
    solution:
      "We build AI chatbots connected to your offers, workflows, and tools so conversations become faster, clearer, and easier to act on.",
    benefits: [
      "Faster customer responses",
      "Automated lead qualification",
      "Consistent answers across channels",
      "Cleaner handoff to sales or support teams",
    ],
    useCases: [
      "Website support chatbot",
      "WhatsApp inquiry assistant",
      "Lead capture and qualification",
      "Appointment and consultation intake",
    ],
    steps: [
      "Map conversation goals and customer questions",
      "Prepare answer sources and escalation rules",
      "Build the chatbot flow and integrations",
      "Review conversations and improve performance",
    ],
    faqs: [
      {
        question: "Can the chatbot hand off to a person?",
        answer:
          "Yes. Accordev AI can design handoff paths for sales, support, or operations when a conversation needs human attention.",
      },
      {
        question: "Can the chatbot collect lead details?",
        answer:
          "Yes. It can collect structured details, qualify interest, and send the information to your team or CRM workflow.",
      },
    ],
  },
  "ai-agents": {
    path: "/services/ai-agents",
    title: "AI Agents for Business Automation | Accordev AI",
    description:
      "Accordev AI designs AI agents that help businesses automate research, follow-up, reporting, data handling, and repeatable operational tasks.",
    h1: "AI Agents for Business Automation",
    intro:
      "Use AI agents to support repeatable business tasks with clear instructions, tool access, approval points, and measurable outcomes.",
    problem: "Many operational tasks require repeated checking, copying, summarizing, routing, and follow-up across multiple systems.",
    solution:
      "We design AI agents with bounded responsibilities, connected tools, review steps, and reporting so automation remains useful and controllable.",
    benefits: [
      "Reduced manual task handling",
      "Faster research and reporting cycles",
      "More consistent operational follow-up",
      "Clearer visibility into repeated work",
    ],
    useCases: [
      "Lead research assistant",
      "Sales follow-up agent",
      "Operations reporting agent",
      "Internal task routing assistant",
    ],
    steps: [
      "Select the right agent responsibilities",
      "Define tools, rules, and approval checkpoints",
      "Build the agent workflow",
      "Monitor outputs and refine the process",
    ],
    faqs: [
      {
        question: "Do AI agents replace business systems?",
        answer:
          "No. They work best when connected to existing systems and focused on specific repeatable tasks with clear boundaries.",
      },
      {
        question: "Can AI agents require approval before action?",
        answer:
          "Yes. Accordev AI can include review steps before sending messages, changing records, or completing sensitive workflow actions.",
      },
    ],
  },
  "business-automation": {
    path: "/services/business-automation",
    title: "Business Automation Services | Accordev AI",
    description:
      "Accordev AI helps businesses automate workflows, reporting, approvals, customer follow-up, and internal operations with practical AI systems.",
    h1: "Business Automation Services",
    intro:
      "Automate routine work so teams can spend more time on customers, decisions, and growth instead of repeated manual coordination.",
    problem: "Manual workflows slow teams down, create missed follow-ups, and make reporting dependent on repeated low-value work.",
    solution:
      "We map your current process and build automation that connects tools, triggers, data, messages, and reporting into a reliable workflow.",
    benefits: [
      "Less repetitive manual work",
      "Faster handoffs between teams",
      "Better operational visibility",
      "More reliable follow-up and reporting",
    ],
    useCases: [
      "Customer inquiry workflows",
      "Approval and notification flows",
      "Automated reporting",
      "Internal task coordination",
    ],
    steps: [
      "Analyze the current workflow",
      "Identify automation opportunities",
      "Build and connect the workflow",
      "Train the team and improve results",
    ],
    faqs: [
      {
        question: "Where should a business start with automation?",
        answer:
          "Start with repeated work that consumes time, causes delays, or creates missed follow-up. Accordev AI helps prioritize the highest-impact workflow.",
      },
      {
        question: "Can automation work with existing tools?",
        answer:
          "Yes. We focus on connecting the tools your team already uses whenever that is the most practical path.",
      },
    ],
  },
  "crm-automation": {
    path: "/services/crm-automation",
    title: "CRM Automation for Businesses | Accordev AI",
    description:
      "Accordev AI builds CRM automation for lead capture, follow-up, pipeline updates, customer data organization, and sales reporting.",
    h1: "CRM Automation for Businesses",
    intro:
      "Make your CRM easier to maintain and more useful by automating customer data, follow-up tasks, pipeline movement, and reporting.",
    problem: "CRM systems lose value when records are incomplete, follow-up is inconsistent, and teams rely on manual updates.",
    solution:
      "We automate CRM workflows around lead intake, segmentation, reminders, sales actions, reporting, and customer communication.",
    benefits: [
      "Cleaner customer data",
      "Stronger lead follow-up",
      "Better sales pipeline visibility",
      "Less manual CRM maintenance",
    ],
    useCases: [
      "Lead intake automation",
      "Pipeline update workflows",
      "Follow-up reminders and messages",
      "Sales reporting dashboards",
    ],
    steps: [
      "Review CRM structure and sales workflow",
      "Define required fields and follow-up rules",
      "Build automation and reporting flows",
      "Train the team on the improved process",
    ],
    faqs: [
      {
        question: "Can CRM automation improve lead follow-up?",
        answer:
          "Yes. It can trigger reminders, messages, assignments, and pipeline changes so fewer opportunities are missed.",
      },
      {
        question: "Do we need a new CRM?",
        answer:
          "Not always. Accordev AI can improve the CRM you already use or help design a better structure when needed.",
      },
    ],
  },
  "n8n-automation": {
    path: "/services/n8n-automation",
    title: "n8n Automation Services | Accordev AI",
    description:
      "Accordev AI builds n8n automation workflows that connect apps, APIs, CRMs, messages, databases, and AI tools for business operations.",
    h1: "n8n Automation Services",
    intro:
      "Use n8n to connect business tools and build reliable automation workflows around real operational needs.",
    problem: "Teams often move data manually between apps, messages, spreadsheets, CRMs, and reporting tools.",
    solution:
      "We build n8n workflows that connect triggers, APIs, data transformations, AI steps, notifications, and business approvals.",
    benefits: [
      "Connected tools and cleaner data movement",
      "Flexible workflow automation",
      "Useful AI steps inside operations",
      "Lower dependence on manual copying and routing",
    ],
    useCases: [
      "CRM and messaging workflows",
      "AI-assisted data processing",
      "Report generation flows",
      "App and API integrations",
    ],
    steps: [
      "Map systems and data flow",
      "Design the n8n workflow",
      "Build, test, and document automation",
      "Monitor reliability and improve as usage grows",
    ],
    faqs: [
      {
        question: "Can n8n connect to APIs?",
        answer:
          "Yes. n8n is well suited for connecting APIs, apps, databases, messages, and AI services in one workflow.",
      },
      {
        question: "Can Accordev AI maintain n8n workflows?",
        answer:
          "Yes. We can help improve, document, and maintain workflows as your business process changes.",
      },
    ],
  },
  "ai-training": {
    path: "/services/ai-training",
    title: "AI Training for Teams | Accordev AI",
    description:
      "Accordev AI provides practical AI training for teams to improve productivity, customer service, sales, reporting, and daily business workflows.",
    h1: "AI Training for Teams",
    intro:
      "Train your team to use AI tools in practical business work, from better prompts to repeatable workflows and safe daily adoption.",
    problem: "Teams often use AI inconsistently, without clear workflows, quality standards, or business-specific examples.",
    solution:
      "We deliver practical training built around your team roles, daily tasks, tools, examples, and measurable productivity goals.",
    benefits: [
      "More confident AI usage",
      "Better quality outputs",
      "Faster daily execution",
      "Shared standards for responsible AI use",
    ],
    useCases: [
      "Prompting for business tasks",
      "Customer service productivity",
      "Sales and marketing workflows",
      "Reporting and research assistance",
    ],
    steps: [
      "Understand team roles and workflows",
      "Design practical training examples",
      "Run hands-on sessions",
      "Provide follow-up guidance and improvements",
    ],
    faqs: [
      {
        question: "Is the training practical or theoretical?",
        answer:
          "The training is practical and built around real tasks your team needs to complete in daily work.",
      },
      {
        question: "Can training be customized by department?",
        answer:
          "Yes. Accordev AI can tailor examples and workflows for sales, support, operations, marketing, or management teams.",
      },
    ],
  },
};

export const arabicPages = {
  home: {
    path: "/ar",
    title: "Accordev AI | أنظمة ذكاء اصطناعي وأتمتة للشركات",
    description:
      "تساعد Accordev AI الشركات على بناء أنظمة ذكاء اصطناعي، مساعدين RAG، Chatbots، أتمتة CRM، وأتمتة سير العمل لتقليل العمل اليدوي وتحسين خدمة العملاء.",
    h1: "أنظمة ذكاء اصطناعي وأتمتة للشركات",
    intro:
      "نبني أنظمة عملية تربط خدمة العملاء، المعرفة الداخلية، CRM، التقارير، وسير العمل اليومي بطريقة أوضح وأسهل للإدارة.",
  },
  services: {
    path: "/ar/services",
    title: "خدمات الذكاء الاصطناعي والأتمتة | Accordev AI",
    description:
      "استكشف خدمات Accordev AI لبناء أنظمة RAG، Chatbots، أتمتة الأعمال، CRM، وتدريب الفرق على استخدام الذكاء الاصطناعي.",
    h1: "خدمات الذكاء الاصطناعي والأتمتة",
    intro:
      "نصمم ونبني أنظمة ذكاء اصطناعي وأتمتة تقلل العمل اليدوي وتجعل العمليات اليومية أوضح وأسهل للمتابعة.",
  },
  aiCompanySyria: {
    path: "/ar/services/ai-company-syria",
    title: "شركة AI للشركات في سوريا والمنطقة | Accordev AI",
    description:
      "تقدم Accordev AI حلول ذكاء اصطناعي وأتمتة للشركات في سوريا والمنطقة، تشمل أنظمة RAG، شات بوت ذكي، وكلاء AI، أتمتة CRM، وأتمتة سير العمل لتحسين الإنتاجية وخدمة العملاء.",
    h1: "شركة AI تساعد شركتك على العمل بذكاء أكبر",
    intro:
      "خدمات ذكاء اصطناعي للشركات في سوريا والمنطقة تساعد الفرق على تقليل العمل اليدوي، تحسين خدمة العملاء، وتنظيم المعرفة والعمليات اليومية.",
    noAlternates: true,
  },
};

export const arabicServicePages = {
  "rag-systems": {
    ...servicePages["rag-systems"],
    path: "/ar/services/rag-systems",
    title: "أنظمة RAG للشركات | Accordev AI",
    description:
      "تبني Accordev AI أنظمة RAG تحول ملفات الشركة ومعرفتها الداخلية إلى مساعد ذكي يقدم إجابات دقيقة للفرق والعملاء.",
    h1: "أنظمة RAG للشركات",
    intro: "حوّل معرفة الشركة إلى مساعد ذكي يجيب من المصادر المعتمدة ويوفر الوقت على الفرق والعملاء.",
    problem: "تضيع الفرق وقتاً في البحث داخل الملفات وتكرار الإجابات والتحقق من المعلومات بين مصادر متعددة.",
    solution: "نبني نظام RAG يربط مصادر المعرفة المعتمدة بمساعد ذكي يقدم إجابات واضحة وقابلة للتحسين.",
    benefits: ["وصول أسرع للمعرفة", "إجابات أكثر اتساقاً", "تقليل الأسئلة المتكررة", "تحسين التدريب والدعم الداخلي"],
    useCases: ["مساعد معرفة داخلي", "مساعد دعم العملاء", "بحث في السياسات والإجراءات", "مساعد للتدريب والتأهيل"],
    steps: ["تحليل مصادر المعرفة", "تجهيز المحتوى للاسترجاع", "بناء تجربة المساعد", "اختبار الإجابات وتحسينها"],
    faqs: [
      {
        question: "هل يمكن استخدام ملفات الشركة الحالية؟",
        answer: "نعم. يمكن ربط الملفات والمستندات المعتمدة ليجيب المساعد من معرفة الشركة نفسها.",
      },
      {
        question: "هل يناسب النظام الفرق الداخلية والعملاء؟",
        answer: "نعم. يمكن تصميم صلاحيات وطريقة إجابة مختلفة حسب الجمهور والاستخدام المطلوب.",
      },
    ],
  },
  "ai-chatbots": {
    ...servicePages["ai-chatbots"],
    path: "/ar/services/ai-chatbots",
    title: "Chatbots ذكية للمواقع وWhatsApp | Accordev AI",
    description:
      "تبني Accordev AI Chatbots ذكية للمواقع وWhatsApp للرد على الأسئلة، تأهيل العملاء المحتملين، وتحسين خدمة العملاء.",
    h1: "Chatbots ذكية للمواقع وWhatsApp",
    intro: "أطلق مساعد محادثة يرد بسرعة، يجمع المعلومات المهمة، ويوجه العميل إلى الخطوة المناسبة.",
    problem: "الردود البطيئة والأسئلة المتكررة وتشتت بيانات العملاء المحتملين تجعل المتابعة أصعب.",
    solution: "نبني Chatbot مرتبطاً بعروضك وسير العمل والأدوات حتى تصبح المحادثات أسرع وأسهل للمتابعة.",
    benefits: ["ردود أسرع", "تأهيل تلقائي للعملاء", "إجابات موحدة", "تسليم أوضح لفريق المبيعات أو الدعم"],
    useCases: ["Chatbot للموقع", "مساعد WhatsApp", "جمع وتأهيل العملاء", "حجز الاستشارات والمواعيد"],
    steps: ["تحديد أهداف المحادثة", "تجهيز مصادر الإجابة", "بناء التدفق والربط", "مراجعة المحادثات والتحسين"],
    faqs: [
      {
        question: "هل يمكن تحويل المحادثة إلى شخص من الفريق؟",
        answer: "نعم. يمكن تصميم مسارات تحويل إلى المبيعات أو الدعم عند الحاجة.",
      },
      {
        question: "هل يمكن جمع بيانات العملاء المحتملين؟",
        answer: "نعم. يمكن جمع بيانات منظمة وإرسالها إلى الفريق أو نظام CRM.",
      },
    ],
  },
  "business-automation": {
    ...servicePages["business-automation"],
    path: "/ar/services/business-automation",
    title: "أتمتة الأعمال للشركات | Accordev AI",
    description:
      "تساعد Accordev AI الشركات على أتمتة سير العمل، التقارير، المتابعة، الموافقات، والعمليات الداخلية بأنظمة عملية.",
    h1: "أتمتة الأعمال للشركات",
    intro: "قلل العمل المتكرر واجعل الفريق يركز على العملاء والقرارات والنمو بدلاً من التنسيق اليدوي.",
    problem: "سير العمل اليدوي يبطئ الفريق ويزيد فرص التأخير وفقدان المتابعة.",
    solution: "نحلل العمليات ونبني أتمتة تربط الأدوات والبيانات والرسائل والتقارير في سير عمل واضح.",
    benefits: ["عمل يدوي أقل", "تسليم أسرع بين الفرق", "رؤية أوضح للعمليات", "متابعة وتقارير أكثر انتظاماً"],
    useCases: ["استفسارات العملاء", "الموافقات والتنبيهات", "التقارير التلقائية", "تنسيق المهام الداخلية"],
    steps: ["تحليل سير العمل", "تحديد فرص الأتمتة", "بناء وربط التدفق", "تدريب الفريق والتحسين"],
    faqs: [
      {
        question: "من أين نبدأ في الأتمتة؟",
        answer: "نبدأ من الأعمال المتكررة التي تستهلك وقتاً أو تسبب تأخيراً أو تفقد المتابعة.",
      },
      {
        question: "هل تعمل الأتمتة مع أدواتنا الحالية؟",
        answer: "نعم. نركز على ربط الأدوات الحالية عندما يكون ذلك هو الطريق العملي الأفضل.",
      },
    ],
  },
};

export const routePairs = {
  "/": "/ar",
  "/services": "/ar/services",
  "/services/rag-systems": "/ar/services/rag-systems",
  "/services/ai-chatbots": "/ar/services/ai-chatbots",
  "/services/business-automation": "/ar/services/business-automation",
};

export const allIndexablePaths = [
  "/",
  "/services",
  "/services/rag-systems",
  "/services/ai-chatbots",
  "/services/ai-agents",
  "/services/business-automation",
  "/services/crm-automation",
  "/services/n8n-automation",
  "/services/ai-training",
  "/solutions",
  "/process",
  "/contact",
  "/ar",
  "/ar/services",
  "/ar/services/ai-company-syria",
  "/ar/services/rag-systems",
  "/ar/services/ai-chatbots",
  "/ar/services/business-automation",
];

export function absoluteUrl(path) {
  return `${siteUrl}${path === "/" ? "/" : path}`;
}

export function buildMetadata(page, locale = "en") {
  let languages;

  if (!page.noAlternates) {
    languages = {
      [locale]: absoluteUrl(page.path),
      "x-default": absoluteUrl(locale === "ar" ? Object.entries(routePairs).find(([, ar]) => ar === page.path)?.[0] ?? "/" : page.path),
    };

    if (locale === "en" && routePairs[page.path]) {
      languages.ar = absoluteUrl(routePairs[page.path]);
    }

    if (locale === "ar") {
      const englishPath = Object.entries(routePairs).find(([, ar]) => ar === page.path)?.[0];
      if (englishPath) {
        languages.en = absoluteUrl(englishPath);
      }
    }
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: absoluteUrl(page.path),
      ...(languages ? { languages } : {}),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(page.path),
      siteName: brandName,
      title: page.title,
      description: page.description,
      images: [
        {
          url: "/image.png",
          width: 1200,
          height: 630,
          alt: brandName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/image.png"],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandName,
    url: siteUrl,
    logo: `${siteUrl}/accordev-logo.jpg`,
    description: englishPages.home.description,
    email: contactEmail,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brandName,
    url: siteUrl,
    description: englishPages.home.description,
    inLanguage: ["en", "ar"],
  };
}

export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    provider: {
      "@type": "Organization",
      name: brandName,
      url: siteUrl,
    },
    areaServed: "Global",
    serviceType: service.h1,
    url: absoluteUrl(service.path),
    description: service.description,
  };
}

export function faqSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
