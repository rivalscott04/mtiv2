import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { User, Users, ShieldCheck, Settings } from "lucide-react";

interface NodeProps {
    role: string;
    name: string;
    icon: React.ReactNode;
    isMain?: boolean;
}

const Node = ({ role, name, icon, isMain }: NodeProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all hover:shadow-lg ${isMain ? "bg-primary border-primary text-primary-foreground" : "bg-card border-border"
            }`}
    >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${isMain ? "bg-white/20" : "bg-primary/10"
            }`}>
            {icon}
        </div>
        <span className={`text-xs uppercase tracking-wider font-bold mb-1 ${isMain ? "text-primary-foreground/80" : "text-amber"
            }`}>{role}</span>
        <span className="font-semibold text-center leading-tight">{name}</span>
    </motion.div>
);

import { useTranslation } from "react-i18next";

export default function OrgStructure() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pb-16">
                <div className="section-container">
                    <PageHeader
                        badge={t('nav.profile')}
                        title={t('org.title')}
                        description={t('org.desc')}
                        breadcrumbs={[{ label: t('nav.profile') }, { label: t('org.title'), href: "/profil/struktur-organisasi" }]}
                    />

                    <div className="mt-16 relative flex flex-col items-center gap-12">
                        {/* Top Level */}
                        <div className="w-64">
                            <Node role={t('org.head', { defaultValue: "Ketua Program Studi" })} name="Ir. I Gede Pasek Suta Wijaya, S.T., M.T., D.Eng." icon={<User />} isMain />
                        </div>

                        {/* Connector */}
                        <div className="h-12 w-1 bg-border relative">
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[80vw] max-w-4xl h-1 bg-border" />
                        </div>

                        {/* Mid Level */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                            <Node role={t('org.secretary', { defaultValue: "Sekretaris Prodi" })} name="Ariyan Zubaidi, S.T., M.T." icon={<Settings />} />
                            <Node role={t('org.qa', { defaultValue: "Gugus Penjamin Mutu" })} name="Nadiyasari Agitha, S.T., M.T." icon={<ShieldCheck />} />
                            <Node role={t('org.lab_head', { defaultValue: "Kepala Laboratorium" })} name="Giri Wahyu Wiriasto, S.T., M.T." icon={<Users />} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
