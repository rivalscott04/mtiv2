import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t('footer.link_profile'), href: '/profil/sejarah' },
    { label: t('footer.link_focus'), href: '/riset' },
    { label: t('footer.link_lecturers'), href: '/profil/dosen' },
    { label: t('footer.link_curriculum'), href: '/pendidikan/kurikulum' },
    { label: t('footer.link_publications'), href: '/riset' },
    { label: t('footer.link_admission'), href: 'https://pasca.pmb.unram.ac.id', external: true },
  ];

  const academicLinks = [
    { label: t('footer.link_calendar'), href: '/pendidikan/kalender' },
    { label: t('footer.link_thesis_guide'), href: '/layanan/berkas' },
    { label: t('footer.link_writing_format'), href: '/layanan/berkas' },
    { label: t('footer.link_exam_schedule'), href: '/pendidikan/kalender' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Program Identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/unram.svg" alt="Logo UNRAM" className="h-16 w-auto" />
              <div>
                <h3 className="text-xl font-bold leading-none mb-1">{t('hero.title')}</h3>
                <p className="text-background/60 text-xs font-medium uppercase tracking-wider">
                  {t('footer.university')}
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <a href="mailto:mti@unram.ac.id" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Mail className="h-4 w-4" />
                mti@unram.ac.id
              </a>
              <a href="tel:+623707701000" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                +62 370 7701000
              </a>
              <div className="flex items-start gap-2 text-background/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{t('footer.address')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.academic')}</h4>
            <ul className="space-y-2">
              {academicLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © 2025 {t('hero.title')}, {t('footer.university')}. {t('footer.all_rights_reserved')}
            </p>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <a href="https://ft.unram.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                {t('footer.faculty')}
              </a>
              <a href="https://unram.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                {t('footer.university')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
