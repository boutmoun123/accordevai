"use client";

import { startTransition, useEffect, useState } from "react";
import Header from "./header";
import AIBenefitsInfographic from "./AIBenefitsInfographic";
import Hero from "./hero";
import ProblemSection from "./problem-section";
import ServicesSection from "./services-section";
import SolutionsSection from "./solutions-section";
import WhyUsSection from "./why-us-section";
import ProcessSection from "./process-section";
import OutcomesSection from "./outcomes-section";
import TargetAudienceSection from "./target-audience-section";
import CTASection from "./cta-section";
import Footer from "./footer";
import styles from "./landing-page.module.css";
import { landingContent } from "@/data/landing-content";

const LANGUAGE_STORAGE_KEY = "accordev-language";
const THEME_STORAGE_KEY = "accordev-theme";

function isSupportedLanguage(value) {
  return value === "ar" || value === "en";
}

function isSupportedTheme(value) {
  return value === "light" || value === "dark";
}

function isMobileDevice() {
  const userAgent = window.navigator.userAgent || "";

  return /Android|iPhone|iPad|iPod|Mobile|IEMobile|Opera Mini/i.test(userAgent);
}

function buildContactLinks(contact) {
  const whatsappNumber = contact.whatsappNumber?.replace(/\D/g, "");

  return {
    email: contact.email,
    consultation: `mailto:${contact.email}?subject=${encodeURIComponent(contact.consultationSubject)}&body=${encodeURIComponent(contact.consultationBody)}`,
    gmailConsultation: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent(contact.consultationSubject)}&body=${encodeURIComponent(contact.consultationBody)}`,
    whatsapp: `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(contact.whatsappText)}`,
  };
}

export default function LandingPage() {
  const [language, setLanguage] = useState("ar");
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultationHref, setConsultationHref] = useState("");

  const content = landingContent[language];
  const links = buildContactLinks(content.contact);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isSupportedLanguage(storedLanguage)) {
      setLanguage(storedLanguage);
      return;
    }

    const browserLanguage = window.navigator.language?.toLowerCase() ?? "";
    const nextLanguage = browserLanguage.startsWith("ar") ? "ar" : "en";
    setLanguage(nextLanguage);
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isSupportedTheme(storedTheme)) {
      setTheme(storedTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const nextConsultationHref = isMobileDevice()
      ? links.consultation
      : links.gmailConsultation;

    setConsultationHref(nextConsultationHref);
  }, [links.consultation, links.gmailConsultation]);

  useEffect(() => {
    document.documentElement.lang = content.lang;
    document.documentElement.dir = content.dir;
    document.body.dir = content.dir;
    document.title = content.meta.title;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", content.meta.description);
    }

  }, [content, language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function handleLanguageChange(nextLanguage) {
    if (!isSupportedLanguage(nextLanguage)) {
      return;
    }

    startTransition(() => {
      setLanguage(nextLanguage);
      setMenuOpen(false);
    });
  }

  function handleNavigate() {
    setMenuOpen(false);
  }

  function handleThemeChange() {
    startTransition(() => {
      setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
      setMenuOpen(false);
    });
  }

  return (
    <div className={styles.page} dir={content.dir} lang={content.lang}>
      <div className={styles.backdropGlowOne} />
      <div className={styles.backdropGlowTwo} />

      <Header
        brand={content.brand}
        nav={content.nav}
        ctaLabel={content.headerCta}
        ctaHref={consultationHref || links.consultation}
        menuLabel={content.menuLabel}
        themeLabel={content.themeLabel}
        themeButton={content.themeButton}
        language={language}
        theme={theme}
        onLanguageChange={handleLanguageChange}
        onThemeChange={handleThemeChange}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((current) => !current)}
        onNavigate={handleNavigate}
      />

      <main className={styles.main}>
        <AIBenefitsInfographic content={content.infographic} />
        <Hero content={content.hero} />
        <ProblemSection content={content.problem} />
        <ServicesSection content={content.services} />
        <SolutionsSection content={content.solutions} />
        <WhyUsSection content={content.whyUs} />
        <ProcessSection content={content.process} />
        <OutcomesSection content={content.outcomes} />
        <TargetAudienceSection content={content.audience} />
        <CTASection
          content={content.cta}
          links={links}
          consultationHref={consultationHref || links.consultation}
        />
      </main>

      <Footer
        brand={content.brand}
        nav={content.nav}
        content={content.footer}
        email={content.contact.email}
      />
    </div>
  );
}
