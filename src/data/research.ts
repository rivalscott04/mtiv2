export interface ResearchGroup {
    id: string;
    name: string;
    leads: string[];
    focus: string[];
    descriptionId: string;
    descriptionEn: string;
    color: string;
}

export interface Publication {
    id: string;
    title: string;
    authors: string[];
    venue: string;
    year: number;
    type: 'journal' | 'conference';
    link?: string;
}

export const researchGroups: ResearchGroup[] = [
    {
        id: "ai",
        name: "Artificial Intelligence",
        leads: ["Prof. Dr. Eng. I Gede Pasek Suta Wijaya, S.T., M.T.", "Ario Yudo Husodo, S.T., M.T."],
        focus: ["Computer Vision", "Machine Learning", "Deep Learning", "NLP"],
        descriptionId: "Fokus pada pengembangan algoritma cerdas, visi komputer, dan pemrosesan bahasa alami untuk solusi masa depan.",
        descriptionEn: "Focuses on developing intelligent algorithms, computer vision, and natural language processing for future solutions.",
        color: "blue"
    },
    {
        id: "ebsn",
        name: "Embedded System and Networking",
        leads: ["Heri Wijayanto, S.T., M.T."],
        focus: ["Parallel Computing", "Distributed Systems", "IoT", "Network Architecture"],
        descriptionId: "Meneliti integrasi sistem tertanam, komputasi paralel, dan arsitektur jaringan masa depan.",
        descriptionEn: "Researching the integration of embedded systems, parallel computing, and future network architectures.",
        color: "red"
    },
    {
        id: "is",
        name: "Sistem Informasi",
        leads: ["Ida Bagus Ketut Widiartha, S.T., M.T., Ph.D.", "Budi Irmawati, S.Kom., M.Kom."],
        focus: ["Information Systems", "Data Mining", "Enterprise Architecture", "Digital Transformation"],
        descriptionId: "Mengedepankan riset sistem informasi enterprise, penambangan data, dan transformasi digital organisasi.",
        descriptionEn: "Prioritizing research in enterprise information systems, data mining, and organizational digital transformation.",
        color: "green"
    }
];

export const publications: Publication[] = [
    {
        id: "p1",
        title: "Digital Transformation Policy for Sustainable Development in Emerging Economies",
        authors: ["Jun-Seok Hwang", "S. Han", "M. Ziyad"],
        venue: "Global ICT Policy Review",
        year: 2025,
        type: "journal",
        link: "https://scholar.google.com"
    },
    {
        id: "p2",
        title: "Optimization of Object Detection on Satellite Imagery using Transformer-Based Deep Learning Architecture",
        authors: ["I Gede Pasek Suta Wijaya", "A. Firdaus", "R. Hakim"],
        venue: "International Journal of Intelligent Systems",
        year: 2025,
        type: "journal",
        link: "https://scholar.google.com"
    },
    {
        id: "p3",
        title: "Analysis of Tourist Movement Patterns in Lombok Island Using GPS Data-Based Clustering Algorithm",
        authors: ["Ida Bagus Ketut Widiartha", "Wirarama Wedashwara", "S. Aminah"],
        venue: "Journal of Information Technology and Computer Science",
        year: 2025,
        type: "journal",
        link: "https://scholar.google.com"
    },
    {
        id: "p4",
        title: "Sentiment Analysis of Public Opinion on Tourism in West Nusa Tenggara using BERT Models",
        authors: ["Budi Irmawati", "Ario Yudo Husodo", "D. Kartika"],
        venue: "International Conference on Information Technology (ICIT)",
        year: 2024,
        type: "conference",
        link: "https://scholar.google.com"
    },
    {
        id: "p5",
        title: "Deep Learning for Tropical Disease Classification in Agricultural Context",
        authors: ["I Gede Pasek Suta Wijaya", "Ahmad", "Siti"],
        venue: "IEEE International Conference on AI",
        year: 2023,
        type: "conference",
        link: "https://scholar.google.com"
    },
    {
        id: "p6",
        title: "Optimizing SDN Controller Performance in Enterprise Networks",
        authors: ["Heri Wijayanto", "I.W. Agus Arimbawa"],
        venue: "Journal of Network and Computer Applications (Q1)",
        year: 2024,
        type: "journal",
        link: "https://scholar.google.com"
    }
];
