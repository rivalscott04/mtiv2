import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Hero from "@/components/HeroSection";
import About from "@/components/ProgramOverview";
import FocusAreas from "@/components/ResearchAreas";
import WhyStudy from "@/components/WhyThisProgram";
import InternationalCollaboration from "@/components/InternationalCollaboration";
import Statistics from "@/components/AcademicStats";
import Lecturers from "@/components/SupervisorPreview";
import News from "@/components/Publications";
import AcademicUpdates from "@/components/AcademicUpdates";
import CallToAction from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const { t, i18n } = useTranslation();

  // Structured Data untuk SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": i18n.language === 'id' 
      ? "Program Studi Magister Teknologi Informasi - Universitas Mataram" 
      : "Master of Information Technology Study Program - University of Mataram",
    "alternateName": "MTI UNRAM",
    "url": "https://mti.if.unram.ac.id",
    "logo": "https://mti.if.unram.ac.id/logo.png",
    "description": t('seo.desc.home'),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Majapahit No. 62",
      "addressLocality": "Mataram",
      "addressRegion": "Nusa Tenggara Barat",
      "postalCode": "83125",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-370-633007",
      "contactType": "Administrative",
      "email": "informatika@unram.ac.id"
    }
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": t('hero.title'),
    "description": t('hero.description'),
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Universitas Mataram",
      "sameAs": "https://unram.ac.id"
    },
    "educationalCredentialAwarded": "Magister Komputer (M.Kom.)",
    "courseCode": "MTI",
    "inLanguage": i18n.language
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('seo.title.home')}</title>
        <meta name="description" content={t('seo.desc.home')} />
        <meta name="keywords" content="magister teknologi informasi, s2 informatika, universitas mataram, unram, riset TI, data science, artificial intelligence, cyber security" />
        <meta name="author" content="MTI UNRAM" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('seo.title.home')} />
        <meta property="og:description" content={t('seo.desc.home')} />
        <meta property="og:locale" content={i18n.language === 'id' ? 'id_ID' : 'en_US'} />
        <meta name="twitter:title" content={t('seo.title.home')} />
        <meta name="twitter:description" content={t('seo.desc.home')} />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta name="twitter:image:alt" content="Program Studi Teknik Informatika - Universitas Mataram" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <FocusAreas />
          <WhyStudy />
          <InternationalCollaboration />
          <Statistics />
          <Lecturers />
          <News />
          <AcademicUpdates />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
