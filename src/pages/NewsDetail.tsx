import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsData } from "@/data/news";
import { motion } from "framer-motion";

export default function NewsDetail() {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const isEn = i18n.language === "en";

    const newsItem = newsData.find((item) => item.id === id);

    if (!newsItem) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <div className="section-container py-20 text-center">
                    <h2 className="text-2xl font-bold">News not found</h2>
                    <Link to="/updates" className="text-primary mt-4 inline-block hover:underline">
                        Back to updates
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pb-20 pt-10">
                <div className="section-container max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            to="/updates"
                            className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-colors group"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            {t("news.back_to_all", { defaultValue: "Back to Updates" })}
                        </Link>
                    </motion.div>

                    <article>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-primary/10">
                                    {newsItem.category}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-8">
                                {isEn ? newsItem.titleEn : newsItem.titleId}
                            </h1>

                            {newsItem.image && (
                                <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl mb-10 shadow-2xl">
                                    <img
                                        src={newsItem.image}
                                        alt={isEn ? newsItem.titleEn : newsItem.titleId}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                                </div>
                            )}

                            <div className="flex flex-wrap items-center gap-6 mb-10 pb-10 border-b border-slate-100 italic text-slate-400">
                                <div className="flex items-center gap-2 text-sm">
                                    <User className="h-4 w-4" />
                                    <span>{newsItem.author}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Calendar className="h-4 w-4" />
                                    <span>{newsItem.date}</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed text-lg"
                        >
                            {/* This would be the full content from newsData */}
                            <p className="mb-6 font-bold text-slate-800 text-xl leading-relaxed italic">
                                {isEn ? newsItem.excerptEn : newsItem.excerptId}
                            </p>

                            <div className="space-y-6">
                                {(isEn ? newsItem.contentEn : newsItem.contentId).split('\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>

                            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 mt-16 flex flex-col items-center text-center">
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Tertarik dengan riset kami?</h4>
                                <p className="text-slate-500 mb-6 max-w-md">Dapatkan info pendaftaran dan kolaborasi riset melalui kanal resmi kami.</p>
                                <div className="flex gap-4">
                                    <button className="bg-[#003366] text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all">Hubungi Kami</button>
                                    <button className="bg-white border border-slate-200 text-slate-600 px-8 py-3 rounded-full font-bold text-sm hover:bg-slate-50 transition-all flex items-center gap-2">
                                        <Share2 className="w-4 h-4" /> Share
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
}
