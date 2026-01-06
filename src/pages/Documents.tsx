import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileText,
    Download,
    Search,
    FileCode,
    FileSpreadsheet,
    File as FileIcon,
    SearchX
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

interface Document {
    id: string;
    name: string;
    category: "admission" | "academic" | "thesis" | "forms";
    type: "PDF" | "DOCX" | "XLSX";
    size: string;
    updatedAt: string;
    url: string;
}

const ITEMS_PER_PAGE = 5;

const documents: Document[] = [
    // Admission
    { id: "1", name: "Brosur Magister Teknologi Informasi 2024", category: "admission", type: "PDF", size: "2.4 MB", updatedAt: "2024-01-10", url: "#" },
    { id: "2", name: "Panduan Pendaftaran Mahasiswa Baru", category: "admission", type: "PDF", size: "1.8 MB", updatedAt: "2024-01-12", url: "#" },
    { id: "3", name: "Form Surat Pernyataan Kesanggupan Biaya", category: "admission", type: "DOCX", size: "45 KB", updatedAt: "2023-12-05", url: "#" },

    // Academic
    { id: "4", name: "Kurikulum Operasional MTI 2024", category: "academic", type: "PDF", size: "1.2 MB", updatedAt: "2024-01-05", url: "#" },
    { id: "5", name: "Kalender Akademik Semester Genap 2023/2024", category: "academic", type: "PDF", size: "850 KB", updatedAt: "2024-01-15", url: "#" },
    { id: "6", name: "Buku Pedoman Akademik Pascasarjana", category: "academic", type: "PDF", size: "4.5 MB", updatedAt: "2023-08-20", url: "#" },
    { id: "7", name: "Prosedur Pengajuan KRS Online", category: "academic", type: "PDF", size: "600 KB", updatedAt: "2024-01-18", url: "#" },
    { id: "8", name: "Daftar Kode Mata Kuliah & Silabus", category: "academic", type: "PDF", size: "3.1 MB", updatedAt: "2023-09-10", url: "#" },

    // Thesis
    { id: "9", name: "Panduan Penulisan Proposal Tesis", category: "thesis", type: "PDF", size: "2.1 MB", updatedAt: "2023-11-12", url: "#" },
    { id: "10", name: "Template Proposal Tesis (Word)", category: "thesis", type: "DOCX", size: "120 KB", updatedAt: "2023-11-15", url: "#" },
    { id: "11", name: "Panduan Penulisan Tesis Akhir", category: "thesis", type: "PDF", size: "2.8 MB", updatedAt: "2023-11-20", url: "#" },
    { id: "12", name: "Template Tesis Akhir (Word)", category: "thesis", type: "DOCX", size: "150 KB", updatedAt: "2023-11-25", url: "#" },
    { id: "13", name: "Form Persetujuan Pembimbing Tesis", category: "thesis", type: "DOCX", size: "35 KB", updatedAt: "2023-12-01", url: "#" },
    { id: "14", name: "Prosedur Pendaftaran Sidang Tesis", category: "thesis", type: "PDF", size: "900 KB", updatedAt: "2024-01-08", url: "#" },
    { id: "15", name: "Logbook Bimbingan Tesis", category: "thesis", type: "PDF", size: "450 KB", updatedAt: "2023-10-05", url: "#" },

    // Forms
    { id: "16", name: "Form Permohonan Cuti Akademik", category: "forms", type: "DOCX", size: "40 KB", updatedAt: "2023-05-10", url: "#" },
    { id: "17", name: "Form Pengunduran Diri Mahasiswa", category: "forms", type: "DOCX", size: "38 KB", updatedAt: "2023-05-12", url: "#" },
    { id: "18", name: "Surat Keterangan Aktif Kuliah", category: "forms", type: "PDF", size: "320 KB", updatedAt: "2023-12-20", url: "#" },
    { id: "19", name: "Form Usulan Judul Tesis", category: "forms", type: "DOCX", size: "42 KB", updatedAt: "2023-11-02", url: "#" },
    { id: "20", name: "Form Perubahan Komisi Pembimbing", category: "forms", type: "DOCX", size: "41 KB", updatedAt: "2023-11-05", url: "#" },
    { id: "21", name: "Form Checklist Persyaratan Wisuda", category: "forms", type: "PDF", size: "550 KB", updatedAt: "2024-01-20", url: "#" },
];

export default function Documents() {
    const { t } = useTranslation();
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredDocs = documents.filter((doc) => {
        const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase());
        const matchesTab = activeTab === "all" || doc.category === activeTab;
        return matchesSearch && matchesTab;
    });

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [search, activeTab]);

    const totalPages = Math.ceil(filteredDocs.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedDocs = filteredDocs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const getFileIcon = (type: string) => {
        switch (type) {
            case "PDF": return <FileText className="w-5 h-5 text-red-500" />;
            case "DOCX": return <FileCode className="w-5 h-5 text-blue-500" />;
            case "XLSX": return <FileSpreadsheet className="w-5 h-5 text-green-500" />;
            default: return <FileIcon className="w-5 h-5 text-gray-500" />;
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pb-24">
                <PageHeader
                    badge={t("nav.services")}
                    title={t("docs.title")}
                    description={t("docs.desc")}
                    breadcrumbs={[
                        { label: t("nav.services") },
                        { label: t("docs.title"), href: "/layanan/berkas" },
                    ]}
                />

                <div className="section-container mt-12">
                    {/* Controls */}
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-8">
                        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
                            <TabsList className="bg-muted/50 p-1">
                                <TabsTrigger value="all">{t("docs.filter_all")}</TabsTrigger>
                                <TabsTrigger value="admission">{t("docs.filter_admission")}</TabsTrigger>
                                <TabsTrigger value="academic">{t("docs.filter_academic")}</TabsTrigger>
                                <TabsTrigger value="thesis">{t("docs.filter_thesis")}</TabsTrigger>
                                <TabsTrigger value="forms">{t("docs.filter_forms")}</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder={t("docs.search")}
                                className="pl-10 bg-white"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* List */}
                    <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
                        <Table>
                            <TableHeader className="bg-muted/30">
                                <TableRow>
                                    <TableHead className="w-[50%]">{t("docs.table_name")}</TableHead>
                                    <TableHead>{t("docs.table_type")}</TableHead>
                                    <TableHead>{t("docs.table_size")}</TableHead>
                                    <TableHead>{t("docs.table_updated")}</TableHead>
                                    <TableHead className="text-right"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <AnimatePresence mode="popLayout">
                                    {paginatedDocs.map((doc) => (
                                        <motion.tr
                                            key={doc.id}
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="group hover:bg-slate-50/50 transition-colors"
                                        >
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-3">
                                                    {getFileIcon(doc.type)}
                                                    <span className="text-slate-700 group-hover:text-primary transition-colors">
                                                        {doc.name}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 text-slate-600">
                                                    {doc.type}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-muted-foreground text-sm">
                                                {doc.size}
                                            </TableCell>
                                            <TableCell className="text-muted-foreground text-sm">
                                                {doc.updatedAt}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <a
                                                    href={doc.url}
                                                    className="inline-flex items-center justify-center p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
                                                    title={t("docs.download")}
                                                >
                                                    <Download className="w-5 h-5" />
                                                </a>
                                            </TableCell>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </TableBody>
                        </Table>

                        {filteredDocs.length === 0 && (
                            <div className="py-20 text-center">
                                <div className="inline-flex p-4 rounded-full bg-slate-50 mb-4">
                                    <SearchX className="w-8 h-8 text-slate-400" />
                                </div>
                                <p className="text-slate-500 font-medium">{t("docs.no_results")}</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-8">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious 
                                            href="#" 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (currentPage > 1) setCurrentPage(currentPage - 1);
                                            }}
                                            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                        />
                                    </PaginationItem>
                                    
                                    {[...Array(totalPages)].map((_, i) => {
                                        const page = i + 1;
                                        return (
                                            <PaginationItem key={page}>
                                                <PaginationLink 
                                                    href="#"
                                                    isActive={currentPage === page}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setCurrentPage(page);
                                                    }}
                                                    className="cursor-pointer"
                                                >
                                                    {page}
                                                </PaginationLink>
                                            </PaginationItem>
                                        );
                                    })}

                                    <PaginationItem>
                                        <PaginationNext 
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                                            }}
                                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
