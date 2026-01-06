export interface Course {
    code: string;
    name: string;
    credits: number;
    semester: number;
    description: string;
    topicsId: string[];
    topicsEn: string[];
}

export const courses: Course[] = [
    {
        code: "MTI1101",
        name: "Perencanaan Strategis Sistem dan Teknologi Informasi",
        credits: 3,
        semester: 1,
        description: "Mata kuliah ini membahas konsep perencanaan strategis dalam penggunaan sistem dan teknologi informasi untuk mendukung tujuan bisnis organisasi.",
        topicsId: [
            "Konsep dan Pentingnya Perencanaan Strategis Sistem dan Teknologi Informasi",
            "Analisis Lingkungan Eksternal dan Internal dalam Perencanaan Strategis",
            "Penyusunan Rencana Strategis Teknologi Informasi dan Integrasi dengan Rencana Bisnis",
            "Faktor-faktor Keberhasilan dan Tantangan dalam Implementasi Rencana Strategis",
            "Pembuatan Roadmap Teknologi Informasi dan Pengembangan Sumber Daya",
            "Pemilihan dan Investasi dalam Solusi Teknologi Informasi",
            "Evaluasi Kinerja dan Pengukuran Keberhasilan Perencanaan Strategis",
            "Aspek Keamanan dan Kepatuhan dalam Rencana Strategis Teknologi Informasi",
            "Transformasi Digital dan Peran Teknologi Informasi dalam Inovasi Bisnis",
            "Studi Kasus: Analisis Rencana Strategis Teknologi Informasi pada Organisasi Tertentu"
        ],
        topicsEn: [
            "Concepts and Importance of Strategic Planning for IS/IT",
            "External and Internal Environment Analysis in Strategic Planning",
            "Formulation of IT Strategic Plans and Integration with Business Plans",
            "Success Factors and Challenges in Strategic Plan Implementation",
            "IT Roadmap Creation and Resource Development",
            "Selection and Investment in IT Solutions",
            "Performance Evaluation and Success Measurement of Strategic Planning",
            "Security and Compliance Aspects in IT Strategic Plans",
            "Digital Transformation and the Role of IT in Business Innovation",
            "Case Study: Analysis of IT Strategic Plans in Specific Organizations"
        ]
    },
    {
        code: "MTI1102",
        name: "Rekayasa Perangkat Lunak Lanjut",
        credits: 3,
        semester: 1,
        description: "Membahas metodologi dan praktik tingkat lanjut dalam rekayasa perangkat lunak modern.",
        topicsId: [
            "Pengenalan Rekayasa Perangkat Lunak dan Proses Pengembangan",
            "Identifikasi Kebutuhan dan Perumusan Spesifikasi Perangkat Lunak",
            "Estimasi dan Penjadwalan Proyek Pengembangan",
            "Manajemen Risiko dalam Rekayasa Perangkat Lunak",
            "Pengendalian Kualitas dan Uji Coba Perangkat Lunak",
            "Metodologi Pengembangan Perangkat Lunak: Waterfall, Agile, DevOps, dsb",
            "Kolaborasi Tim dan Komunikasi dalam Proyek Perangkat Lunak",
            "Manajemen Konfigurasi dan Version Control",
            "Pengelolaan Perubahan dalam Siklus Pengembangan Perangkat Lunak",
            "Evaluasi Keberhasilan Proyek dan Pembelajaran dari Pengalaman"
        ],
        topicsEn: [
            "Introduction to Software Engineering and Development Processes",
            "Requirement Identification and Software Specification Formulation",
            "Estimation and Project Scheduling",
            "Risk Management in Software Engineering",
            "Quality Control and Software Testing",
            "Software Development Methodologies: Waterfall, Agile, DevOps, etc",
            "Team Collaboration and Communication in Software Projects",
            "Configuration Management and Version Control",
            "Change Management in the Software Development Life Cycle",
            "Project Success Evaluation and Lessons Learned"
        ]
    },
    {
        code: "MTI1103",
        name: "Sistem Cerdas",
        credits: 3,
        semester: 1,
        description: "Pengantar ke sistem cerdas dan kecerdasan buatan (AI) serta aplikasinya.",
        topicsId: [
            "Pengantar ke Sistem Cerdas dan Kecerdasan Buatan (AI)",
            "Representasi Pengetahuan dan Pemrosesan Pengetahuan",
            "Metode Pencarian dan Optimisasi dalam AI",
            "Pembelajaran Mesin dan Jenis-jenis Algoritma",
            "Jaringan Saraf Tiruan dan Pembelajaran Dalam (Deep Learning)",
            "Logika Fuzzy dan Sistem Pakar",
            "Pengolahan Bahasa Alami (NLP) dan Aplikasinya",
            "Analisis Data dan Pengambilan Keputusan Cerdas",
            "Pengenalan pada Robotika dan Sistem Otomasi Cerdas",
            "Etika dalam Pengembangan dan Penggunaan Sistem Cerdas"
        ],
        topicsEn: [
            "Introduction to Intelligent Systems and Artificial Intelligence (AI)",
            "Knowledge Representation and Knowledge Processing",
            "Search Methods and Optimization in AI",
            "Machine Learning and Algorithm Types",
            "Artificial Neural Networks and Deep Learning",
            "Fuzzy Logic and Expert Systems",
            "Natural Language Processing (NLP) and Its Applications",
            "Data Analysis and Intelligent Decision Making",
            "Introduction to Robotics and Intelligent Automation Systems",
            "Ethics in the Development and Use of Intelligent Systems"
        ]
    },
    {
        code: "MTI2104",
        name: "Software Defined Network",
        credits: 3,
        semester: 2,
        description: "Mata kuliah ini membahas arsitektur dan implementasi Software-Defined Networking (SDN).",
        topicsId: [
            "Pengantar Software-Defined Networking (SDN)",
            "Arsitektur SDN",
            "Controller SDN dan Orkestrasi",
            "Jaringan Terprogram (Network Programmability)",
            "Virtualisasi Jaringan",
            "Simulasi dan Implementasi SDN",
            "Keamanan pada SDN",
            "SDN untuk Jaringan Enterprise dan ISP",
            "Monitoring dan Manajemen Kinerja",
            "Studi Kasus dan Project Akhir"
        ],
        topicsEn: [
            "Introduction to Software-Defined Networking (SDN)",
            "SDN Architecture",
            "SDN Controller and Orchestration",
            "Network Programmability",
            "Network Virtualization",
            "SDN Simulation and Implementation",
            "Security in SDN",
            "SDN for Enterprise and ISP Networks",
            "Performance Monitoring and Management",
            "Case Study and Final Project"
        ]
    },
    {
        code: "MTI1001",
        name: "Metodologi Penelitian",
        credits: 3,
        semester: 1,
        description: "Membekali mahasiswa dengan kemampuan untuk merencanakan dan melaksanakan penelitian ilmiah.",
        topicsId: [
            "Identifikasi Masalah Penelitian",
            "Tinjauan Literatur",
            "Metodologi Penelitian",
            "Rencana Penelitian dan Jadwal",
            "Pengantar Filsafat Ilmu",
            "Paradigma dan Aliran Filsafat Ilmu",
            "Logika Ilmiah",
            "Pemilihan Topik Penelitian dan Pertanyaan Penelitian",
            "Kerangka Teoritis dan Hipotesis",
            "Metode Penelitian Kuantitatif dan Kualitatif",
            "Penggunaan Tools Digital untuk Penelitian",
            "Penulisan Ilmiah yang Efektif",
            "Etika Penelitian dan Penerbitan Ilmiah"
        ],
        topicsEn: [
            "Research Problem Identification",
            "Literature Review",
            "Research Methodology",
            "Research Plan and Schedule",
            "Introduction to Philosophy of Science",
            "Paradigms and Schools of Thought in Philosophy of Science",
            "Scientific Logic",
            "Research Topic Selection and Research Questions",
            "Theoretical Framework and Hypotheses",
            "Quantitative and Qualitative Research Methods",
            "Digital Tools for Research",
            "Effective Scientific Writing",
            "Research Ethics and Scientific Publication"
        ]
    },
    {
        code: "MTI2105",
        name: "Manajemen Informasi Multimedia",
        credits: 3,
        semester: 2,
        description: "Membahas pengelolaan konten multimedia secara responsif dan strategis dalam konteks pendidikan dan bisnis.",
        topicsId: [
            "Hakikat dan Konsep Desain Instruksional",
            "Model-Model Desain Instruksional",
            "Konsep dan Kompetensi Literasi Abad 21",
            "Pembelajaran Berorientasi Literasi Abad 21",
            "Konsep Manajemen Informasi Multimedia",
            "Pengembangan Konten Multimedia dan Responsif",
            "Penggunaan Teknologi Multimedia dalam Pendidikan dan Bisnis",
            "Integrasi Media Sosial dan Interaksi Pengguna",
            "Optimasi Kinerja dan Kecepatan pada Berbagai Platform",
            "Analisis Data Pengguna dan Pengambilan Keputusan",
            "Strategi Distribusi Konten dan Pemasaran Multimedia"
        ],
        topicsEn: [
            "Instuctional Design Concepts",
            "Instructional Design Models",
            "21st Century Literacy Concepts",
            "Literacy-Oriented Learning",
            "Multimedia Information Management Concepts",
            "Responsive Multimedia Content Development",
            "Multimedia Tech in Education and Business",
            "Social Media Integration and User Interaction",
            "Performance and Speed Optimization",
            "User Data Analysis and Decision Making",
            "Content Distribution and Multimedia Marketing"
        ]
    },
    {
        code: "MTI2106",
        name: "Karya Tulis Ilmiah dan Publikasi",
        credits: 3,
        semester: 2,
        description: "Fokus pada penulisan artikel ilmiah berkualitas tinggi untuk publikasi internasional.",
        topicsId: [
            "Prinsip-prinsip Publikasi Ilmiah",
            "Penulisan Artikel Ilmiah",
            "Proses Pengajuan dan Review",
            "Pemilihan Jurnal dan Konferensi",
            "Etika dan Standar Penerbitan Ilmiah",
            "Struktur dan Gaya Penulisan Artikel",
            "Tanggapan terhadap Perbaikan (Revision)"
        ],
        topicsEn: [
            "Principles of Scientific Publication",
            "Scientific Article Writing",
            "Submission and Review Process",
            "Journal and Conference Selection",
            "Scientific Publication Ethics",
            "Article Structure and Style",
            "Handling Revisions"
        ]
    },
    {
        code: "MTI3107",
        name: "Tesis",
        credits: 6,
        semester: 3,
        description: "Penelitian mendalam yang dipadukan dengan bimbingan intensif untuk menghasilkan kontribusi orisinal.",
        topicsId: [
            "Perencanaan Tesis",
            "Pengumpulan dan Analisis Data",
            "Penulisan Tesis",
            "Pertahanan Tesis (Sidang)",
            "Merancang Rencana Penelitian",
            "Interpretasi Temuan Penelitian"
        ],
        topicsEn: [
            "Thesis Planning",
            "Data Collection and Analysis",
            "Thesis Writing",
            "Thesis Defense",
            "Research Plan Design",
            "Interpretation of Research Findings"
        ]
    },
    {
        code: "MTI4001",
        name: "Informatika Kepulauan",
        credits: 3,
        semester: 3,
        description: "Mengeksplorasi penerapan teknologi informasi dalam konteks ekosistem dan dinamika lingkungan kepulauan.",
        topicsId: [
            "Konsep Ekosistem Kepulauan",
            "Dinamika Lingkungan Kepulauan",
            "Pengantar Sistem Informasi Geografis (SIG)",
            "Penginderaan Jauh untuk Wilayah Pesisir",
            "Sistem Informasi Geospasial Kelautan",
            "Tata Ruang Kepulauan dan Mitigasi Bencana"
        ],
        topicsEn: [
            "Archipelagic Ecosystem Concepts",
            "Archipelagic Environmental Dynamics",
            "Intro to GIS",
            "Remote Sensing for Coastal Areas",
            "Marine Geospatial Information Systems",
            "Archipelagic Spatial Planning and Disaster Mitigation"
        ]
    }
];
