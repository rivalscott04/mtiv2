import { motion } from "framer-motion";
import { Target, Lightbulb, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function VisionMission() {
    const { t } = useTranslation();
    const missions = [
        t('vm.mission1', { defaultValue: "Menyelenggarakan pendidikan berkualitas internasional di bidang teknologi informasi." }),
        t('vm.mission2', { defaultValue: "Mengembangkan riset inovatif yang berdampak luas bagi masyarakat dan industri." }),
        t('vm.mission3', { defaultValue: "Menjalin kerjasama strategis dengan institusi global dan industri terkemuka." }),
        t('vm.mission4', { defaultValue: "Menerapkan teknologi tepat guna untuk pemberdayaan masyarakat lokal." }),
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pb-16">
                <div className="section-container">
                    <PageHeader
                        badge={t('nav.profile')}
                        title={t('vm.title')}
                        description={t('vm.desc')}
                        breadcrumbs={[{ label: t('nav.profile') }, { label: t('vm.title'), href: "/profil/visi-misi" }]}
                    />

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="h-full bg-primary/5 border-primary/20 overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                    <Target size={120} />
                                </div>
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                                        <Target className="text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-6">{t('vm.vision')}</h2>
                                    <p className="text-xl leading-relaxed text-foreground/90 font-medium italic">
                                        {t('vm.vision_content', { defaultValue: "\"Menjadi pusat unggulan pendidikan dan riset bidang informatika yang diakui secara internasional pada tahun 2030.\"" })}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="h-full bg-card border-border overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                    <Lightbulb size={120} />
                                </div>
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 rounded-lg bg-amber/20 flex items-center justify-center mb-6">
                                        <Lightbulb className="text-amber" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-6">{t('vm.mission')}</h2>
                                    <ul className="space-y-4">
                                        {missions.map((mission, index) => (
                                            <li key={index} className="flex gap-3 items-start group">
                                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {mission}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
