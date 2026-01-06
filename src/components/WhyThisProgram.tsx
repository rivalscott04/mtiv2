import { GraduationCap, Users, FileText, Handshake, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const WhyThisProgram = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: FileText,
      title: t('why.reason_1_title'),
      description: t('why.reason_1_desc'),
    },
    {
      icon: Users,
      title: t('why.reason_2_title'),
      description: t('why.reason_2_desc'),
    },
    {
      icon: GraduationCap,
      title: t('why.reason_3_title'),
      description: t('why.reason_3_desc'),
    },
    {
      icon: Handshake,
      title: t('why.reason_4_title'),
      description: t('why.reason_4_desc'),
    },
    {
      icon: TrendingUp,
      title: t('why.reason_5_title'),
      description: t('why.reason_5_desc'),
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="section-container">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#003366] mb-4">
              {t('why.title')}
            </h2>
            <p className="text-slate-600 max-w-2xl text-lg">
              {t('why.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 bg-slate-50/50 p-8 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <reason.icon className="h-6 w-6 text-[#003366] group-hover:text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#003366] mb-3 text-lg leading-tight group-hover:text-primary transition-colors">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisProgram;
