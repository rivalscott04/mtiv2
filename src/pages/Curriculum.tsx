import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const courses = [
    { code: "IF1101", name: "Dasar Pemrograman", credits: 3, semester: 1 },
    { code: "IF1102", name: "Matematika Diskrit", credits: 3, semester: 1 },
    { code: "IF2101", name: "Struktur Data", credits: 4, semester: 3 },
    { code: "IF3101", name: "Kecerdasan Buatan", credits: 3, semester: 5 },
    { code: "IF4101", name: "Etika Profesi", credits: 2, semester: 7 },
];

import { useTranslation } from "react-i18next";

export default function Curriculum() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pb-16">
                <div className="section-container">
                    <PageHeader
                        badge={t('nav.education')}
                        title={t('curriculum.title')}
                        description={t('curriculum.desc')}
                        breadcrumbs={[{ label: t('nav.education') }, { label: t('curriculum.title'), href: "/pendidikan/kurikulum" }]}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-12 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                    >
                        <Table>
                            <TableHeader className="bg-muted/50">
                                <TableRow>
                                    <TableHead className="font-bold">{t('curriculum.table_code')}</TableHead>
                                    <TableHead className="font-bold">{t('curriculum.table_name')}</TableHead>
                                    <TableHead className="font-bold text-center">{t('curriculum.table_credits')}</TableHead>
                                    <TableHead className="font-bold text-center">{t('curriculum.table_semester')}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {courses.map((course) => (
                                    <TableRow key={course.code} className="hover:bg-muted/30 transition-colors">
                                        <TableCell className="font-mono text-amber font-medium">{course.code}</TableCell>
                                        <TableCell className="font-semibold">{course.name}</TableCell>
                                        <TableCell className="text-center">
                                            <Badge variant="outline">{course.credits} SKS</Badge>
                                        </TableCell>
                                        <TableCell className="text-center font-medium">
                                            {t('curriculum.table_semester')} {course.semester}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
