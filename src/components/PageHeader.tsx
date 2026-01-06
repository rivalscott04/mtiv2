import { motion } from "framer-motion";
import { Breadcrumb } from "./Breadcrumb";

interface PageHeaderProps {
    badge?: string;
    title: string;
    description?: string;
    breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({ badge, title, description, breadcrumbs }: PageHeaderProps) {
    return (
        <div className="relative">
            <Breadcrumb items={breadcrumbs} />
            <div className="section-container pt-8 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl"
                >
                    {badge && (
                        <span className="inline-block px-3 py-1 rounded-full bg-[#003366]/5 text-[#003366] text-xs font-bold uppercase tracking-widest mb-4 border border-[#003366]/10">
                            {badge}
                        </span>
                    )}
                    <h1 className="text-4xl md:text-6xl font-black text-[#003366] mb-6 tracking-tight leading-tight">
                        {title}
                    </h1>
                    {description && (
                        <div className="w-20 h-1.5 bg-primary rounded-full mb-6" />
                    )}
                    {description && (
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
