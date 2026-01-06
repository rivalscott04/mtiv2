import { motion } from "framer-motion";
import { Users, Target, FlaskConical, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ResearchGroup } from "@/data/research";
import { Link } from "react-router-dom";

interface ResearchGroupCardProps {
    group: ResearchGroup;
    index: number;
}

export default function ResearchGroupCard({ group, index }: ResearchGroupCardProps) {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language === "en";

    const colorClasses: Record<string, string> = {
        blue: "text-blue-600 bg-blue-50 border-blue-100",
        red: "text-red-600 bg-red-50 border-red-100",
        green: "text-green-600 bg-green-50 border-green-100",
        purple: "text-purple-600 bg-purple-50 border-purple-100",
    };

    const dotClasses: Record<string, string> = {
        blue: "bg-blue-400",
        red: "bg-red-400",
        green: "bg-green-400",
        purple: "bg-purple-400",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden relative"
        >
            <div className={cn(
                "absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40",
                group.color === "blue" ? "bg-blue-400" :
                    group.color === "red" ? "bg-red-400" :
                        group.color === "green" ? "bg-green-400" : "bg-purple-400"
            )} />

            <div className="relative z-10">
                <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                    colorClasses[group.color] || colorClasses.blue
                )}>
                    <FlaskConical className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                    {group.name}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                    "{isEn ? group.descriptionEn : group.descriptionId}"
                </p>

                <div className="space-y-4">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
                            <Users className="w-3.5 h-3.5" />
                            {t('research.leads')}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {group.leads.map((lead, i) => (
                                <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                                    {lead}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
                            <Target className="w-3.5 h-3.5" />
                            {t('research.focus')}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {group.focus.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                                    <div className={cn("w-1.5 h-1.5 rounded-full", dotClasses[group.color] || dotClasses.blue)} />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <Link
                        to="/layanan/sarana"
                        className="text-primary text-sm font-bold flex items-center gap-2 group/link"
                    >
                        {t('research.view_lab')}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
