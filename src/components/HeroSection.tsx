import heroImage from '@/components/assets/hero-research.jpg';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="beranda" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Graduate research environment"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001529] via-[#002244]/95 via-[#003366]/80 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#001529]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 py-24">
        <div className="max-w-4xl relative">
          {/* Subtle Vertical Accent */}
          <div className="absolute -left-10 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary-foreground/70 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-6">
              {t('hero.context')}
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-4 tracking-tight">
              {t('hero.title')}
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary-foreground/90 font-semibold mb-8 border-l-4 border-primary/50 pl-6 py-2">
              {t('hero.subtitle')}
            </h2>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed mb-4">
              {t('hero.description')}
            </p>

            <div className="flex items-center gap-4 mb-12">
              <span className="h-[1px] w-12 bg-primary/40" />
              <p className="text-xs md:text-sm font-bold text-primary-foreground/60 tracking-widest uppercase">
                {t('hero.signal')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <a
                href="https://pasca.pmb.unram.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg shadow-lg hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-3"
              >
                {t('hero.cta_primary')}
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                to="/riset"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white/90 font-bold rounded-lg border border-white/40 hover:bg-white/5 hover:border-white/60 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <BookOpen className="h-5 w-5" />
                {t('hero.cta_secondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
