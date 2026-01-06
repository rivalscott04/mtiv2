import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, Clock, GraduationCap } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Course } from "@/data/courses";

interface CourseCardProps {
    course: Course;
    index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { t, i18n } = useTranslation();
    const isEn = i18n.language === "en";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={cn(
                "group relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/5",
                isExpanded ? "border-primary/30 ring-1 ring-primary/10" : "border-border hover:border-primary/20"
            )}
        >
            <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 font-mono">
                                {course.code}
                            </Badge>
                            <Badge variant="outline" className="text-slate-500">
                                <Clock className="w-3 h-3 mr-1" />
                                {course.credits} {t('courses.credits')}
                            </Badge>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                            {course.name}
                        </h3>
                    </div>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="mt-1"
                    >
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="p-2 rounded-full hover:bg-slate-50 text-slate-400 group-hover:text-primary transition-all shadow-sm"
                            aria-label="Toggle details"
                        >
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>

                <p className="mt-4 text-sm text-slate-600 line-clamp-2 italic">
                    "{course.description}"
                </p>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6 mt-6 border-t border-slate-100">
                                <div className="flex items-center gap-2 mb-4 text-sm font-bold text-slate-800">
                                    <BookOpen className="w-4 h-4 text-primary" />
                                    {t('courses.topics')}
                                </div>
                                <ul className="space-y-2">
                                    {(isEn ? course.topicsEn : course.topicsId).map((topic, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.03 }}
                                            className="flex items-start gap-3 text-sm text-slate-600"
                                        >
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                                            {topic}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {!isExpanded && (
                <div
                    onClick={() => setIsExpanded(true)}
                    className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/50 to-transparent flex items-end justify-center pb-2 cursor-pointer transition-opacity group-hover:opacity-100 opacity-0"
                >
                    <span className="text-[10px] uppercase font-black tracking-widest text-primary animate-pulse">
                        Expand details
                    </span>
                </div>
            )}
        </motion.div>
    );
}
