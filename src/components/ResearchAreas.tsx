import { Brain, Database, Shield, Code, Network } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ResearchAreas = () => {
  const { t } = useTranslation();

  const researchAreas = [
    {
      icon: Brain,
      title: t('focus.ai_title'),
      description: t('focus.ai_desc'),
    },
    {
      icon: Database,
      title: t('focus.ds_title'),
      description: t('focus.ds_desc'),
    },
    {
      icon: Network,
      title: t('focus.is_title'),
      description: t('focus.is_desc'),
    },
    {
      icon: Shield,
      title: t('focus.cs_title'),
      description: t('focus.cs_desc'),
    },
    {
      icon: Code,
      title: t('focus.se_title'),
      description: t('focus.se_desc'),
    },
  ];

  return (
    <section id="riset" className="py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="section-container">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#003366] mb-4">
              {t('focus.title')}
            </h2>
            <p className="text-slate-600 max-w-2xl text-lg">
              {t('focus.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-2xl border border-slate-100 group hover:bg-[#003366] transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-50 rounded-xl shadow-sm group-hover:bg-white/10 transition-colors">
                  <area.icon className="h-6 w-6 text-[#003366] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-lg text-[#003366] group-hover:text-white transition-colors">{area.title}</h3>
              </div>
              <p className="text-slate-600 group-hover:text-white/80 transition-colors leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
