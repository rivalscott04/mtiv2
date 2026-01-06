import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search, Trophy, ExternalLink, ScrollText, FlaskConical } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { researchGroups, publications } from "@/data/research";
import ResearchGroupCard from "@/components/ResearchGroupCard";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function ResearchCenter() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState("groups");

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pb-20">
                <div className="section-container">
                    <PageHeader
                        badge={t("nav.research")}
                        title={t("research.title")}
                        description={t("research.desc")}
                        breadcrumbs={[
                            { label: t("nav.research") },
                            { label: t("research.title"), href: "/riset" },
                        ]}
                    />

                    <div className="mt-12">
                        <Tabs
                            defaultValue="groups"
                            className="w-full"
                            onValueChange={setActiveTab}
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                                <TabsList className="bg-slate-100/50 p-1 rounded-2xl border border-slate-200 h-14">
                                    <TabsTrigger
                                        value="groups"
                                        className="rounded-xl px-8 h-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-sm font-bold uppercase tracking-wider transition-all"
                                    >
                                        {t('research.tab_groups')}
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="publications"
                                        className="rounded-xl px-8 h-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-sm font-bold uppercase tracking-wider transition-all"
                                    >
                                        {t('research.tab_publications')}
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="roadmap"
                                        className="rounded-xl px-8 h-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-sm font-bold uppercase tracking-wider transition-all"
                                    >
                                        {t('research.tab_roadmap')}
                                    </TabsTrigger>
                                </TabsList>

                                {activeTab === "publications" && (
                                    <Badge variant="outline" className="h-10 px-6 rounded-full border-primary/20 bg-primary/5 text-primary font-bold">
                                        {publications.length} Featured Works
                                    </Badge>
                                )}
                            </div>

                            <TabsContent value="groups" className="mt-0 outline-none">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {researchGroups.map((group, index) => (
                                        <ResearchGroupCard
                                            key={group.id}
                                            group={group}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="publications" className="mt-0 outline-none">
                                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-50 border-b border-slate-200">
                                                    <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-slate-400">{t('research.pub_year')}</th>
                                                    <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-slate-400">Title & Authors</th>
                                                    <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-slate-400">Venue</th>
                                                    <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-slate-400">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {publications.map((pub, index) => (
                                                    <motion.tr
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.05 }}
                                                        key={pub.id}
                                                        className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors group"
                                                    >
                                                        <td className="px-8 py-6">
                                                            <span className="font-mono text-primary font-bold">{pub.year}</span>
                                                        </td>
                                                        <td className="px-8 py-6 max-w-md">
                                                            <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{pub.title}</h4>
                                                            <p className="text-sm text-slate-500 mt-1">{pub.authors.join(', ')}</p>
                                                        </td>
                                                        <td className="px-8 py-6">
                                                            <Badge variant="outline" className="rounded-lg text-[10px] font-bold uppercase tracking-tight py-1 bg-white">
                                                                {pub.venue}
                                                            </Badge>
                                                        </td>
                                                        <td className="px-8 py-6">
                                                            {pub.link && (
                                                                <a
                                                                    href={pub.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                                                                >
                                                                    {t('research.view_paper')}
                                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                                </a>
                                                            )}
                                                        </td>
                                                    </motion.tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="roadmap" className="mt-0 outline-none">
                                <div className="max-w-4xl mx-auto py-10">
                                    <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                                        {/* Step 1 */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                        >
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                                <ScrollText className="w-5 h-5" />
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all group-hover:border-primary/20">
                                                <div className="flex items-center justify-between space-x-2 mb-1">
                                                    <div className="font-bold text-slate-900">1. Pengajuan Judul & Pembimbing</div>
                                                    <time className="font-mono text-xs font-medium text-primary bg-primary/5 rounded-full px-2 py-0.5">Start</time>
                                                </div>
                                                <div className="text-slate-500 text-sm">Identifikasi topik riset dikoordinasikan dengan Koordinator Program Studi.</div>
                                            </div>
                                        </motion.div>

                                        {/* Step 2 */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                        >
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                                <FlaskConical className="w-5 h-5" />
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all group-hover:border-primary/20">
                                                <div className="flex items-center justify-between space-x-2 mb-1">
                                                    <div className="font-bold text-slate-900">2. Penelitian & Bimbingan</div>
                                                </div>
                                                <div className="text-slate-500 text-sm">Eksperimen, pengumpulan data, dan penulisan di bawah bimbingan intensif.</div>
                                            </div>
                                        </motion.div>

                                        {/* Step 3 */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                        >
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                                <Trophy className="w-5 h-5" />
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all group-hover:border-primary/20">
                                                <div className="flex items-center justify-between space-x-2 mb-1">
                                                    <div className="font-bold text-slate-900">3. Sidang Tesis</div>
                                                    <time className="font-mono text-xs font-medium text-emerald bg-emerald/5 rounded-full px-2 py-0.5">Finish</time>
                                                </div>
                                                <div className="text-slate-500 text-sm">Pertahanan hasil riset di hadapan dewan penguji.</div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
