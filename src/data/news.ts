import { Calendar, Award, BookOpen, Users, Trophy, Newspaper } from 'lucide-react';
import visitingProfessorImg from '../assets/visiting_professor_featured.png';
import researchGrantImg from '../assets/research_grant_featured.png';
import itCompetitionImg from '../assets/it_competition_featured.png';

export interface NewsItem {
    id: string;
    category: string;
    titleId: string;
    titleEn: string;
    excerptId: string;
    excerptEn: string;
    contentId: string;
    contentEn: string;
    date: string;
    icon: any;
    image?: string;
    author: string;
}

export const newsData: NewsItem[] = [
    {
        id: "v-prof-2025",
        category: "Visiting Professor",
        titleId: "Kuliah Tamu: Transformasi Digital dalam Industri 5.0 oleh Prof. Dr. Eng. Koichi Wada",
        titleEn: "Guest Lecture: Digital Transformation in Industry 5.0 by Prof. Dr. Eng. Koichi Wada",
        excerptId: "Prof. Wada dari Jepang memberikan wawasan mendalam tentang masa depan manufaktur cerdas.",
        excerptEn: "Prof. Wada from Japan provides deep insights into the future of smart manufacturing.",
        contentId: "Isi berita lengkap akan muncul di sini mengenai kunjungan Prof. Wada...",
        contentEn: "Full news content regarding Prof. Wada's visit will appear here...",
        date: "12 Dec 2025",
        icon: Users,
        image: visitingProfessorImg,
        author: "Admin MTI"
    },
    {
        id: "grant-2025",
        category: "Research Grant",
        titleId: "Tim Riset MTI Memperoleh Pendanaan Hibah Penelitian Kedaireka 2025",
        titleEn: "MTI Research Team Receives Kedaireka 2025 Research Grant Funding",
        excerptId: "Kebanggaan bagi MTI Unram berhasil lolos dalam pendanaan riset kolaboratif tingkat nasional.",
        excerptEn: "Pride for MTI Unram for successfully passing national-level collaborative research funding.",
        contentId: "Detail mengenai proyek Kedaireka yang didanai...",
        contentEn: "Details regarding the funded Kedaireka project...",
        date: "05 Nov 2025",
        icon: Award,
        image: researchGrantImg,
        author: "Humas FT"
    },
    {
        id: "scopus-2025",
        category: "Academic Seminar",
        titleId: "Workshop Penulisan Jurnal Internasional Bereputasi (Scopus Q1/Q2)",
        titleEn: "Workshop on Writing Reputable International Journals (Scopus Q1/Q2)",
        excerptId: "Meningkatkan kualitas publikasi mahasiswa magister melalui bimbingan intensif.",
        excerptEn: "Improving master's student publication quality through intensive guidance.",
        contentId: "Laporan kegiatan workshop penulisan jurnal...",
        contentEn: "Report on the journal writing workshop activities...",
        date: "20 Oct 2025",
        icon: BookOpen,
        author: "Koprodi MTI"
    },
    {
        id: "comp-2024",
        category: "Achievement",
        titleId: "Mahasiswa MTI Unram Meraih Juara 1 di National IT Competition",
        titleEn: "MTI Unram Student Wins 1st Place in National IT Competition",
        excerptId: "Inovasi sistem manajemen bencana yang dikembangkan mahasiswa berhasil memukau juri.",
        excerptEn: "The disaster management system innovation developed by the student impressed the judges.",
        contentId: "Cerita kemenangan mahasiswa MTI...",
        contentEn: "Stories of MTI student victory...",
        date: "15 Sep 2024",
        icon: Trophy,
        image: itCompetitionImg,
        author: "Admin MTI"
    }
];
