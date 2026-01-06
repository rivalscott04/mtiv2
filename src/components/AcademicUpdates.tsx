import { Calendar, Award, BookOpen, Users, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AcademicUpdates = () => {
  const { t } = useTranslation();

  const updates = [
    {
      category: "Visiting Professor",
      title: t('updates.item1_title', { defaultValue: "Kuliah Tamu: Transformasi Digital dalam Industri 5.0 oleh Prof. Dr. Eng. Koichi Wada" }),
      date: "12 Dec 2025",
      icon: Users,
    },
    {
      category: "Research Grant",
      title: t('updates.item2_title', { defaultValue: "Tim Riset MTI Memperoleh Pendanaan Hibah Penelitian Kedaireka 2025" }),
      date: "05 Nov 2025",
      icon: Award,
    },
    {
      category: "Academic Seminar",
      title: t('updates.item3_title', { defaultValue: "Workshop Penulisan Jurnal Internasional Bereputasi (Scopus Q1/Q2)" }),
      date: "20 Oct 2025",
      icon: BookOpen,
    }
  ];

  return (
    <section className="section-padding bg-background border-t border-border/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-section text-primary mb-4">{t('updates.title')}</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            {t('updates.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {updates.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col p-6 bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {item.category}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-6 leading-snug flex-grow group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center text-xs text-muted-foreground pt-4 border-t border-border/50">
                <Calendar className="h-3.5 w-3.5 mr-2 opacity-70" />
                {item.date}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/updates" className="link-academic inline-flex items-center gap-2">
            {t('updates.view_all')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicUpdates;

