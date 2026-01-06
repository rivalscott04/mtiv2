import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ExternalLink, BookOpen, GraduationCap, Search, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

interface Lecturer {
  name: string;
  title: string;
  expertise: string[];
  image: string;
  email: string;
  scholar: string;
  sinta: string;
  courses: string[];
  nip: string;
  nidn: string;
  rank: string;
}

const lecturers: Lecturer[] = [
  {
    name: "Prof. Jun-Seok Hwang",
    title: "Professor",
    expertise: ["Ilmu Teknologi Informasi", "Global ICT Policy"],
    image: "https://if.unram.ac.id/wp-content/uploads/2023/01/pengajar.jpg",
    email: "mti@unram.ac.id",
    scholar: "https://scholar.google.com",
    sinta: "https://sinta.kemdikbud.go.id",
    courses: ["Global ICT Policy", "Technology Management"],
    nip: "-",
    nidn: "-",
    rank: "Professor",
  },
  {
    name: "SeungHun Han, Ph.D.",
    title: "Professor",
    expertise: ["Digital Economy", "ICT Policy"],
    image: "https://if.unram.ac.id/wp-content/uploads/2023/02/SeungHunHan-fococlipping-standard.png",
    email: "hansm8@kaist.ac.kr",
    scholar: "https://scholar.google.com",
    sinta: "https://sinta.kemdikbud.go.id",
    courses: ["Digital Economy", "Management of Technology"],
    nip: "-",
    nidn: "-",
    rank: "Professor",
  },
  {
    name: "Prof. Dr. Eng. I Gede Pasek Suta Wijaya, S.T., M.T.",
    title: "Guru Besar",
    expertise: ["Pengolahan Citra Digital", "Kecerdasan Buatan"],
    image: "https://if.unram.ac.id/wp-content/uploads/2022/11/1.png",
    email: "gpsutawijaya@unram.ac.id",
    scholar: "https://scholar.google.com/citations?user=GDEPASEK",
    sinta: "https://sinta.kemdikbud.go.id/authors/profile/5973415",
    courses: ["Pengenalan Pola", "Logika Informatika", "Metode Numerik", "Riset Teknologi Informasi", "Etika Profesi"],
    nip: "19731130 200003 1 001",
    nidn: "0030117304",
    rank: "Pembina Tk.1/IV-b",
  },
  {
    name: "Ida Bagus Ketut Widiartha, S.T., M.T., Ph.D.",
    title: "Lektor",
    expertise: ["Sistem Informasi", "Data Mining"],
    image: "https://if.unram.ac.id/wp-content/uploads/2022/11/2-1.png",
    email: "widi@unram.ac.id",
    scholar: "https://scholar.google.com",
    sinta: "https://sinta.kemdikbud.go.id/authors/profile/6011029",
    courses: ["Sistem Informasi", "Pemrograman Visual", "Sistem Informasi Geografis", "Logika Fuzzy"],
    nip: "19700514 199903 1 002",
    nidn: "0014057002",
    rank: "Penata Tk.1/III-D",
  },
  {
    name: "Budi Irmawati, S.Kom., M.Kom.",
    title: "Lektor",
    expertise: ["Pemrosesan Bahasa Alami", "Text Mining"],
    image: "https://if.unram.ac.id/wp-content/uploads/2022/11/3-1.png",
    email: "budi-i@unram.ac.id",
    scholar: "https://scholar.google.com",
    sinta: "https://sinta.kemdikbud.go.id",
    courses: ["Pemrosesan Bahasa Alami", "Struktur Data"],
    nip: "-",
    nidn: "-",
    rank: "Lektor",
  },
  {
    name: "Ario Yudo Husodo, S.T., M.T.",
    title: "Lektor",
    expertise: ["Kecerdasan Buatan", "Machine Learning"],
    image: "https://if.unram.ac.id/wp-content/uploads/2022/11/6-1.png",
    email: "ario@unram.ac.id",
    scholar: "https://scholar.google.com",
    sinta: "https://sinta.kemdikbud.go.id",
    courses: ["Kecerdasan Buatan", "Machine Learning"],
    nip: "-",
    nidn: "-",
    rank: "Lektor",
  },
  {
    name: "Wirarama Wedashwara, S.T., M.T.",
    title: "Lektor",
    expertise: ["Ilmu Komputer", "Software Engineering"],
    image: "https://if.unram.ac.id/wp-content/uploads/2022/11/18.png",
    email: "wirarama@unram.ac.id",
    scholar: "https://scholar.google.com",
    sinta: "https://sinta.kemdikbud.go.id",
    courses: ["Rekayasa Perangkat Lunak", "Sistem Operasi"],
    nip: "-",
    nidn: "-",
    rank: "Lektor",
  },
  {
    name: "Heri Wijayanto, S.T., M.T.",
    title: "Lektor",
    expertise: ["Komputasi Paralel", "Distributed Systems"],
    image: "https://if.unram.ac.id/wp-content/uploads/2022/11/4-1.png",
    email: "heri@unram.ac.id",
    scholar: "https://scholar.google.com",
    sinta: "https://sinta.kemdikbud.go.id",
    courses: ["Komputasi Paralel", "Sistem Terdistribusi"],
    nip: "-",
    nidn: "-",
    rank: "Lektor",
  },
  {
    name: "Cahyo Mustiko Okta Muvianto, S.T., M.T.",
    title: "Lektor",
    expertise: ["Infrastruktur Jaringan", "Network Security"],
    image: "https://mti.if.unram.ac.id/wp-content/uploads/2023/01/pak-cahyo.jpg",
    email: "Cahyo.muvianto@unram.ac.id",
    scholar: "https://scholar.google.com",
    sinta: "https://sinta.kemdikbud.go.id",
    courses: ["Jaringan Komputer", "Keamanan Jaringan"],
    nip: "-",
    nidn: "-",
    rank: "Lektor",
  },
  {
    name: "I Wayan Agus Arimbawa, S.T., M.T.",
    title: "Lektor",
    expertise: ["Computer Network", "Wireless Communications"],
    image: "https://if.unram.ac.id/wp-content/uploads/2022/11/7-1.png",
    email: "arimbawa@unram.ac.id",
    scholar: "https://scholar.google.com",
    sinta: "https://sinta.kemdikbud.go.id",
    courses: ["Jaringan Komputer", "Komunikasi Data"],
    nip: "-",
    nidn: "-",
    rank: "Lektor",
  },
  {
    name: "Regania Pasca Rassy, S.T., M.T.",
    title: "Lektor",
    expertise: ["Instructional Technology & Multimedia", "E-Learning"],
    image: "https://if.unram.ac.id/wp-content/uploads/Bu-Regania.png",
    email: "ganiarachsy@staff.unram.ac.id",
    scholar: "https://scholar.google.com",
    sinta: "https://sinta.kemdikbud.go.id",
    courses: ["Teknologi Instruksional", "Multimedia"],
    nip: "-",
    nidn: "-",
    rank: "Lektor",
  },
];

function LecturerCard({
  lecturer,
  index,
  onClick,
}: {
  lecturer: Lecturer;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className="group w-full text-left bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <div className="flex items-start gap-4">
        <img
          src={lecturer.image}
          alt={lecturer.name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/50 transition-all"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
            {lecturer.name}
          </h3>
          <p className="text-sm text-muted-foreground">{lecturer.title}</p>
          <p className="text-sm text-amber mt-1 truncate">{lecturer.expertise[0]}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
          {useTranslation().t('lecturers.view_profile')} →
        </span>
      </div>
    </motion.button>
  );
}

function LecturerModal({
  lecturer,
  open,
  onOpenChange,
}: {
  lecturer: Lecturer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { t, i18n } = useTranslation();
  if (!lecturer) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4 border-b border-border">
          <div className="flex items-center gap-4">
            <img
              src={lecturer.image}
              alt={lecturer.name}
              className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">
                {lecturer.name}
              </DialogTitle>
              <p className="text-sm font-medium text-primary mt-1">{lecturer.title}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {t('lecturers.expertise_title')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {lecturer.expertise.map((exp) => (
                <span
                  key={exp}
                  className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {t('lecturers.contact_title')}
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${lecturer.email}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                <span className="text-sm text-foreground">{lecturer.email}</span>
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={lecturer.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  <span className="text-sm text-foreground">Google Scholar</span>
                </a>
                <a
                  href={lecturer.sinta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  <span className="text-sm text-foreground">SINTA</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              {t('lecturers.courses_title')}
            </h4>
            <ul className="space-y-2">
              {lecturer.courses.map((course) => (
                <li key={course} className="flex items-center gap-3 text-sm text-foreground">
                  <GraduationCap className="w-4 h-4 text-amber flex-shrink-0" />
                  {course}
                </li>
              ))}
            </ul>
          </div>

          <Accordion type="single" collapsible className="border-t border-border pt-2">
            <AccordionItem value="admin-data" className="border-b-0">
              <AccordionTrigger className="text-sm text-muted-foreground hover:text-foreground hover:no-underline py-3">
                {t('lecturers.employment_data')}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">NIP</span>
                    <span className="font-mono text-foreground">{lecturer.nip}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">NIDN</span>
                    <span className="font-mono text-foreground">{lecturer.nidn}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">{i18n.language === 'id' ? 'Pangkat/Golongan' : 'Rank/Grade'}</span>
                    <span className="text-foreground text-right">{lecturer.rank}</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function LecturersPage() {
  const { t, i18n } = useTranslation();
  const [selectedLecturer, setSelectedLecturer] = useState<Lecturer | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCardClick = (lecturer: Lecturer) => {
    setSelectedLecturer(lecturer);
    setModalOpen(true);
  };

  const filteredLecturers = lecturers.filter(
    (lecturer) =>
      lecturer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecturer.expertise.some((exp) => exp.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lecturer.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>{t('seo.title.lecturers')}</title>
        <meta name="description" content={t('seo.desc.lecturers')} />
        <meta name="keywords" content="dosen magister teknologi informasi, tenaga pengajar, dosen universitas mataram, profesor informatika, ahli AI, data science expert, software engineering, cyber security specialist, unram" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/profil/dosen" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/profil/dosen" />
        <meta property="og:title" content={t('seo.title.lecturers')} />
        <meta property="og:description" content={t('seo.desc.lecturers')} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:locale" content={i18n.language === 'id' ? 'id_ID' : 'en_US'} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.title.lecturers')} />
        <meta name="twitter:description" content={t('seo.desc.lecturers')} />
      </Helmet>

      <Header />
      <main className="pb-16">
        <div className="section-container">
          <PageHeader
            badge={t('nav.profile')}
            title={t('nav.lecturers')}
            description={t('lecturers.desc')}
            breadcrumbs={[{ label: t('nav.profile') }, { label: t('nav.lecturers'), href: "/profil/dosen" }]}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t('lecturers.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLecturers.map((lecturer, index) => (
              <LecturerCard
                key={lecturer.name}
                lecturer={lecturer}
                index={index}
                onClick={() => handleCardClick(lecturer)}
              />
            ))}
          </div>

          {filteredLecturers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t('lecturers.no_results')}</p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <LecturerModal
        lecturer={selectedLecturer}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
}
