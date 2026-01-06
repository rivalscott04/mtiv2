import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ExternalLink, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: t('nav.home'), href: '/' },
    {
      label: t('nav.profile'),
      href: '/#profil',
      subItems: [
        { label: t('nav.history'), href: '/profil/sejarah' },
        { label: t('nav.vision_mission'), href: '/profil/visi-misi' },
        { label: t('nav.org_structure'), href: '/profil/struktur-organisasi' },
        { label: t('nav.lecturers'), href: '/profil/dosen' },
        { label: t('nav.staff'), href: '/profil/staff' },
        { label: t('nav.accreditation'), href: '/profil/akreditasi' },
      ],
    },
    { label: t('nav.research'), href: '/riset' },
    {
      label: t('nav.education'),
      subItems: [
        { label: t('nav.curriculum'), href: '/pendidikan/kurikulum' },
        { label: t('nav.course_desc'), href: '/pendidikan/mata-kuliah' },
        { label: t('nav.sop'), href: '/pendidikan/sop' },
        { label: t('nav.calendar'), href: '/pendidikan/kalender' },
      ],
    },
    {
      label: t('nav.services'),
      subItems: [
        { label: t('nav.files'), href: '/layanan/berkas' },
        { label: t('nav.facilities'), href: '/layanan/sarana' },
        { label: t('nav.thesis'), href: 'https://tesis.unram.ac.id', external: true },
        { label: t('nav.elearning'), href: 'https://elearning.unram.ac.id', external: true },
        { label: t('nav.survey'), href: 'https://survey.unram.ac.id', external: true },
      ],
    },
    { label: t('nav.stats'), href: '/statistik' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path?: string, subItems?: any[]) => {
    if (subItems) {
      return subItems.some(sub => location.pathname === sub.href);
    }
    if (!path) return false;
    if (path === '/' && location.pathname !== '/') return false;
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'id' ? 'en' : 'id';
    i18n.changeLanguage(newLang);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-3 shadow-sm"
          : "bg-white border-b border-transparent py-5"
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src="/unram.svg"
              alt="Logo UNRAM"
              className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-[#003366] leading-none tracking-tight">
                MTI UNRAM
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-1.5 hidden sm:block">
                {t('hero.context')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.subItems ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className={cn(
                      "flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all rounded-full hover:bg-slate-100 outline-none whitespace-nowrap",
                      isActive(item.href, item.subItems) ? "text-primary bg-primary/10" : "text-slate-600 hover:text-slate-900"
                    )}>
                      {item.label}
                      <ChevronDown className="h-4 w-4 opacity-50 flex-shrink-0" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-60 p-2 bg-white/95 backdrop-blur-sm border-slate-200 shadow-xl rounded-2xl animate-in fade-in zoom-in-95 duration-200">
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem key={subItem.label} asChild>
                          {subItem.external ? (
                            <a
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-slate-600 rounded-xl hover:bg-slate-100 hover:text-primary transition-all cursor-pointer"
                            >
                              {subItem.label}
                              <ExternalLink className="h-3 w-3 opacity-40" />
                            </a>
                          ) : (
                            <Link
                              to={subItem.href}
                              className={cn(
                                "block w-full px-4 py-2.5 text-sm font-medium rounded-xl hover:bg-slate-100 hover:text-primary transition-all cursor-pointer",
                                isActive(subItem.href) ? "text-primary bg-primary/10" : "text-slate-600"
                              )}
                            >
                              {subItem.label}
                            </Link>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : item.href && item.href.startsWith('http') ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {item.label}
                    <ExternalLink className="h-3 w-3 opacity-40 flex-shrink-0" />
                  </a>
                ) : (
                  <Link
                    to={item.href || '#'}
                    className={cn(
                      "px-4 py-2 text-sm font-semibold transition-all rounded-full hover:bg-slate-100 whitespace-nowrap",
                      isActive(item.href) ? "text-primary bg-primary/10" : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 text-[11px] font-black text-slate-400 hover:text-primary transition-all ml-4 border border-slate-100 rounded-full flex-shrink-0"
              title={i18n.language === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{i18n.language.toUpperCase()}</span>
            </button>

            <div className="ml-6 pl-6 border-l border-slate-200">
              <a
                href="https://pasca.pmb.unram.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold py-2.5 px-6 rounded-full transition-all shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap"
              >
                {t('nav.admission')}
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 text-slate-400 hover:text-primary transition-all"
            >
              <span className="text-xs font-black">{i18n.language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-all"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl z-40"
            >
              <div className="flex flex-col p-6 gap-2 max-h-[80vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => setOpenMobileSub(openMobileSub === item.label ? null : item.label)}
                          className={cn(
                            "flex items-center justify-between py-3 px-4 text-slate-700 font-bold hover:bg-primary/5 hover:text-primary rounded-xl transition-colors",
                            isActive(item.href, item.subItems) && "text-primary bg-primary/10"
                          )}
                        >
                          {item.label}
                          <ChevronDown className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            openMobileSub === item.label && "rotate-180"
                          )} />
                        </button>
                        <AnimatePresence>
                          {openMobileSub === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-slate-50/50 rounded-xl mt-1"
                            >
                              <div className="flex flex-col py-2">
                                {item.subItems.map((subItem) => (
                                  subItem.external ? (
                                    <a
                                      key={subItem.label}
                                      href={subItem.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center justify-between py-3 px-8 text-sm text-slate-600 font-semibold hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                      <ExternalLink className="h-3 w-3 opacity-40" />
                                    </a>
                                  ) : (
                                    <Link
                                      key={subItem.label}
                                      to={subItem.href}
                                      className={cn(
                                        "block py-3 px-8 text-sm text-slate-600 font-semibold hover:bg-primary/5 hover:text-primary rounded-lg transition-colors",
                                        isActive(subItem.href) && "text-primary bg-primary/10"
                                      )}
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  )
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href || '#'}
                        className={cn(
                          "block py-3 px-4 text-slate-700 font-bold hover:bg-primary/5 hover:text-primary rounded-xl transition-colors",
                          isActive(item.href) && "text-primary bg-primary/10"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <a
                    href="https://pasca.pmb.unram.ac.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#003366] text-white text-center font-bold py-4 rounded-xl shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.admission')}
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
