import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function PLO() {
    const { t } = useTranslation();
    const ploList = [
        {
            code: "PLO 1",
            title: t('plo.item1_title', { defaultValue: "Sikap & Tata Nilai" }),
            description: t('plo.item1_desc', { defaultValue: "Memiliki integritas, etika profesional, dan tanggung jawab sosial dalam praktik informatika." }),
        },
        {
            code: "PLO 2",
            title: t('plo.item2_title', { defaultValue: "Pengetahuan Inti" }),
            description: t('plo.item2_desc', { defaultValue: "Menguasai konsep fundamental ilmu komputer, matematika, dan prinsip rekayasa perangkat lunak." }),
        },
        {
            code: "PLO 3",
            title: t('plo.item3_title', { defaultValue: "Analisis Masalah" }),
            description: t('plo.item3_desc', { defaultValue: "Mampu mengidentifikasi, memformulasikan, dan menganalisis masalah komputasi yang kompleks." }),
        },
        {
            code: "PLO 4",
            title: t('plo.item4_title', { defaultValue: "Desain & Pengembangan" }),
            description: t('plo.item4_desc', { defaultValue: "Mampu merancang dan mengembangkan solusi sistem berbasis komputer yang inovatif." }),
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pb-16">
                <div className="section-container">
                    <PageHeader
                        badge={t('plo.badge')}
                        title={t('plo.title')}
                        description={t('plo.desc')}
                        breadcrumbs={[{ label: t('nav.stats') }, { label: t('plo.title'), href: "/statistik" }]}
                    />

                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        {ploList.map((plo, index) => (
                            <motion.div
                                key={plo.code}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className="h-full border-border hover:border-primary/30 transition-all">
                                    <CardContent className="p-6 flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="text-primary w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold text-amber">{plo.code}</span>
                                            <h3 className="text-xl font-bold mb-2">{plo.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{plo.description}</p>
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
