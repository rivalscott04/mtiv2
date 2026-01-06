import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ProgramOverview = () => {
  const { t } = useTranslation();

  return (
    <section id="profil" className="py-24 bg-white border-y border-slate-100">
      <div className="section-container">
        <div className="max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#003366] mb-10 tracking-tight">
              {t('about.title')}
            </h2>

            <div className="relative pl-8 md:pl-10">
              {/* Vertical Accent Line - The only decorative element allowed */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/40 rounded-full" />

              <p className="text-xl text-slate-700 leading-relaxed font-semibold mb-8">
                {t('about.intro')}
              </p>

              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-slate-500">
                  {t('about.focus_title')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    t('about.focus_1'),
                    t('about.focus_2'),
                    t('about.focus_3'),
                    t('about.focus_4')
                  ].map((item, i) => (
                    <div key={i} className="flex items-start group">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 transition-transform group-hover:scale-125" />
                      <span className="text-slate-600 leading-snug text-base md:text-lg">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-slate-500 leading-relaxed font-medium italic max-w-[680px]">
                  {t('about.closing')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
