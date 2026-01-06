import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search, Calendar, ChevronRight, Newspaper, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { newsData } from "@/data/news";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export default function NewsPage() {
    const { t, i18n } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const isEn = i18n.language === "en";

    const filteredNews = newsData.filter((item) => {
        const title = isEn ? item.titleEn : item.titleId;
        return (
            title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pb-20">
                <div className="section-container">
                    <PageHeader
                        badge={t("nav.updates", { defaultValue: "Updates" })}
                        title={t("updates.title")}
                        description={t("updates.desc")}
                        breadcrumbs={[
                            { label: t("nav.home") },
                            { label: t("updates.title"), href: "/updates" },
                        ]}
                    />

                    <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="relative w-full md:max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder={t("news.search_placeholder", { defaultValue: "Search updates..." })}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 h-12 bg-white border-slate-200 rounded-2xl shadow-sm focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                    </div>

                    <div className="mt-10">
                        {filteredNews.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <AnimatePresence mode="popLayout">
                                    {filteredNews.map((item, index) => (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            key={item.id}
                                            className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                                        >
                                            {item.image && (
                                                <div className="relative h-56 overflow-hidden">
                                                    <img
                                                        src={item.image}
                                                        alt={isEn ? item.titleEn : item.titleId}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    <Badge className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-primary border-none shadow-lg">
                                                        {item.category}
                                                    </Badge>
                                                </div>
                                            )}

                                            <div className="p-8 flex-grow">
                                                {!item.image && (
                                                    <div className="flex items-center gap-3 mb-6">
                                                        <div className="p-2.5 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                                                            <item.icon className="h-5 w-5 text-primary" />
                                                        </div>
                                                        <Badge variant="secondary" className="bg-slate-50 text-slate-500 font-bold tracking-wider text-[10px] uppercase py-1 px-3">
                                                            {item.category}
                                                        </Badge>
                                                    </div>
                                                )}

                                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-snug">
                                                    {isEn ? item.titleEn : item.titleId}
                                                </h3>

                                                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                                    {isEn ? item.excerptEn : item.excerptId}
                                                </p>
                                            </div>

                                            <div className="px-8 py-5 border-t border-slate-50 bg-slate-50/30 flex items-center justify-between mt-auto">
                                                <div className="flex items-center text-xs font-bold text-slate-400">
                                                    <Calendar className="h-3.5 w-3.5 mr-2" />
                                                    {item.date}
                                                </div>
                                                <Link
                                                    to={`/updates/${item.id}`}
                                                    className="inline-flex items-center text-sm font-black text-primary uppercase tracking-widest gap-1 group/btn"
                                                >
                                                    Read More
                                                    <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="py-20 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4">
                                    <Newspaper className="h-8 w-8 text-slate-300" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{t("news.no_results", { defaultValue: "No updates found" })}</h3>
                                <p className="text-slate-500 mt-2">Try different search terms.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
