import { ArrowRight, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section id="pmb" className="section-padding bg-primary">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            {t('cta.desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pasca.pmb.unram.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-all text-lg"
            >
              {t('cta.button_admission')}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/layanan/berkas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-medium rounded-lg border border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all"
            >
              <BookOpen className="h-5 w-5" />
              {t('cta.button_guide')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
