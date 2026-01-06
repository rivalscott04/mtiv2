import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const StatItem = ({ value, label, suffix, index }: { value: number; label: string; suffix: string; index: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 200 + index * 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl md:text-6xl font-black text-white tabular-nums mb-2">
        {count}{suffix}
      </div>
      <p className="text-primary-foreground/80 font-bold uppercase tracking-widest text-xs md:text-sm">
        {label}
      </p>
    </motion.div>
  );
};

const AcademicStats = () => {
  const { t } = useTranslation();

  const stats = [
    { value: 40, label: t('stats.students'), suffix: '' },
    { value: 11, label: t('stats.lecturers'), suffix: '' },
    { value: 15, label: t('stats.projects'), suffix: '+' },
    { value: 110, label: t('stats.publications'), suffix: '+' },
  ];

  return (
    <section className="py-20 bg-[#003366]">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicStats;
