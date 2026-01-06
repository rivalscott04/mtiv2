import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search, Filter, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import { motion, AnimatePresence } from "framer-motion";

export default function CourseDescriptions() {
    const { t, i18n } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeSemester, setActiveSemester] = useState("all");

    const filteredCourses = courses.filter((course) => {
        const matchesSearch =
            course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.code.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesSemester = activeSemester === "all" || course.semester.toString() === activeSemester;

        return matchesSearch && matchesSemester;
    });

    const semesters = ["all", "1", "2", "3"];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pb-20">
                <div className="section-container">
                    <PageHeader
                        badge={t("nav.education")}
                        title={t("courses.title")}
                        description={t("courses.desc")}
                        breadcrumbs={[
                            { label: t("nav.education") },
                            { label: t("courses.title"), href: "/pendidikan/mata-kuliah" },
                        ]}
                    />

                    <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="relative w-full md:max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder={t("courses.search_placeholder")}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 h-12 bg-white border-slate-200 rounded-2xl shadow-sm focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
                            />
                        </div>

                        <Tabs
                            defaultValue="all"
                            className="w-full md:w-auto overflow-x-auto"
                            onValueChange={setActiveSemester}
                        >
                            <TabsList className="bg-slate-100/50 p-1 rounded-2xl border border-slate-200 h-12">
                                {semesters.map((s) => (
                                    <TabsTrigger
                                        key={s}
                                        value={s}
                                        className="rounded-xl px-6 h-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-xs font-bold uppercase tracking-wider transition-all"
                                    >
                                        {s === "all" ? t("courses.semester_all") : `${t("courses.semester")} ${s}`}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>

                    <div className="mt-10">
                        {filteredCourses.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                <AnimatePresence mode="popLayout">
                                    {filteredCourses.map((course, index) => (
                                        <CourseCard
                                            key={course.code}
                                            course={course}
                                            index={index}
                                        />
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="py-20 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4">
                                    <BookOpen className="h-8 w-8 text-slate-300" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{t("courses.no_results")}</h3>
                                <p className="text-slate-500 mt-2">Coba gunakan kata kunci lain.</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
