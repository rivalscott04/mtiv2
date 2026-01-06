import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

export default function AcademicCalendar() {
    const { t, i18n } = useTranslation();

    const events = [
        {
            date: i18n.language === 'id' ? "1 - 15 Agustus 2025" : "August 1 - 15, 2025",
            title: t('calendar.event1_title', { defaultValue: "Registrasi Ulang Mahasiswa Baru" }),
            description: t('calendar.event1_desc', { defaultValue: "Proses administrasi dan verifikasi dokumen bagi calon mahasiswa baru." }),
        },
        {
            date: i18n.language === 'id' ? "25 Agustus 2025" : "August 25, 2025",
            title: t('calendar.event2_title', { defaultValue: "Awal Perkuliahan Semester Ganjil" }),
            description: t('calendar.event2_desc', { defaultValue: "Hari pertama perkuliahan secara resmi dimulai untuk seluruh angkatan." }),
        },
        {
            date: i18n.language === 'id' ? "13 - 24 Oktober 2025" : "October 13 - 24, 2025",
            title: t('calendar.event3_title', { defaultValue: "Ujian Tengah Semester (UTS)" }),
            description: t('calendar.event3_desc', { defaultValue: "Evaluasi capaian pembelajaran pertengahan semester." }),
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pb-16">
                <div className="section-container">
                    <PageHeader
                        badge={t('nav.education')}
                        title={t('calendar.title')}
                        description={t('calendar.desc')}
                        breadcrumbs={[{ label: t('nav.education') }, { label: t('calendar.title'), href: "/pendidikan/kalender" }]}
                    />

                    <div className="max-w-3xl mt-12 space-y-6">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                                    <CardContent className="p-6 flex gap-6 items-start">
                                        <div className="hidden sm:flex flex-col items-center justify-center p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                                            <CalendarIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 text-sm font-bold text-amber mb-2">
                                                <Clock className="w-4 h-4" />
                                                {event.date}
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                            <p className="text-muted-foreground">{event.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
