import { ArrowRight, FileText, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Publications = () => {
  const { t, i18n } = useTranslation();

  const publications = [
    {
      title: 'Digital Transformation Policy for Sustainable Development in Emerging Economies',
      authors: 'Jun-Seok Hwang, S. Han, et al.',
      journal: 'Global ICT Policy Review',
      year: '2025',
      type: i18n.language === 'id' ? 'Jurnal' : 'Journal',
    },
    {
      title: 'Optimization of Object Detection on Satellite Imagery using Transformer-Based Deep Learning Architecture',
      authors: 'I Gede Pasek Suta Wijaya, et al.',
      journal: 'International Journal of Intelligent Systems',
      year: '2025',
      type: i18n.language === 'id' ? 'Jurnal' : 'Journal',
    },
    {
      title: 'Analysis of Tourist Movement Patterns in Lombok Island Using GPS Data-Based Clustering Algorithm',
      authors: 'I.B.K. Widiartha, W. Wedashwara, et al.',
      journal: 'Journal of Information Technology and Computer Science',
      year: '2025',
      type: i18n.language === 'id' ? 'Jurnal' : 'Journal',
    },
    {
      title: 'Sentiment Analysis of Public Opinion on Tourism in West Nusa Tenggara using BERT Models',
      authors: 'Budi Irmawati, A. Yudo Husodo, et al.',
      journal: 'International Conference on Information Technology (ICIT)',
      year: '2024',
      type: i18n.language === 'id' ? 'Konferensi' : 'Conference',
    },
  ];

  const thesisHighlights = [
    {
      title: i18n.language === 'id' 
        ? 'Pengembangan Sistem Monitoring Kualitas Air Tambak Berbasis IoT dan Machine Learning'
        : 'Development of Pond Water Quality Monitoring System Based on IoT and Machine Learning',
      student: 'Ahmad Firdaus',
      year: '2025',
    },
    {
      title: i18n.language === 'id'
        ? 'Analisis Keamanan Jaringan Software Defined Network (SDN) Terhadap Serangan DDoS'
        : 'Security Analysis of Software Defined Network (SDN) Against DDoS Attacks',
      student: 'Siti Aminah',
      year: '2024',
    },
    {
      title: i18n.language === 'id'
        ? 'Implementasi Blockchain untuk Transparansi Rantai Pasok Komoditas Pertanian'
        : 'Blockchain Implementation for Transparency in Agricultural Commodity Supply Chain',
      student: 'Dewa Gede Raka',
      year: '2024',
    },
  ];

  return (
    <section id="publikasi" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-section text-primary mb-4">
            {t('publications.title')}
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {t('publications.desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Recent Publications */}
          <div className="lg:col-span-3">
            <h3 className="heading-subsection text-lg mb-6 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              {t('publications.latest')}
            </h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <a
                  key={index}
                  href="#"
                  className="block p-5 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {pub.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        {pub.authors}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-primary font-medium">{pub.journal}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{pub.year}</span>
                      </div>
                    </div>
                    <span className="flex-shrink-0 px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {pub.type}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Thesis Highlights */}
          <div className="lg:col-span-2">
            <h3 className="heading-subsection text-lg mb-6 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              {t('publications.thesis_highlights')}
            </h3>
            <div className="space-y-4">
              {thesisHighlights.map((thesis, index) => (
                <div
                  key={index}
                  className="p-5 bg-card rounded-lg border border-border"
                >
                  <h4 className="font-medium text-foreground leading-snug text-sm">
                    {thesis.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs text-muted-foreground">{thesis.student}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{thesis.year}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-6 block p-4 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors text-center"
            >
              <span className="text-sm font-medium text-primary">
                {t('publications.view_groups')} →
              </span>
            </a>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#" className="link-academic inline-flex items-center gap-2">
            {t('publications.view_all')}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
