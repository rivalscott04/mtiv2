  import { ArrowRight } from 'lucide-react';

const supervisors = [
  {
    name: 'Prof. Dr. Eng. I Gede Pasek Suta Wijaya, S.T., M.T.',
    expertise: 'Pengolahan Citra Digital & Kecerdasan Buatan',
    image: 'https://if.unram.ac.id/wp-content/uploads/2022/11/1.png',
  },
  {
    name: 'Ida Bagus Ketut Widiartha, S.T., M.T., Ph.D.',
    expertise: 'Sistem Informasi & Data Mining',
    image: 'https://if.unram.ac.id/wp-content/uploads/2022/11/2-1.png',
  },
  {
    name: 'Budi Irmawati, S.Kom., M.Kom.',
    expertise: 'Pemrosesan Bahasa Alami & Text Mining',
    image: 'https://if.unram.ac.id/wp-content/uploads/2022/11/3-1.png',
  },
  {
    name: 'Ario Yudo Husodo, S.T., M.T.',
    expertise: 'Kecerdasan Buatan & Machine Learning',
    image: 'https://if.unram.ac.id/wp-content/uploads/2022/11/6-1.png',
  },
  {
    name: 'Wirarama Wedashwara, S.T., M.T.',
    expertise: 'Ilmu Komputer & Software Engineering',
    image: 'https://if.unram.ac.id/wp-content/uploads/2022/11/18.png',
  },
  {
    name: 'Heri Wijayanto, S.T., M.T.',
    expertise: 'Komputasi Paralel & Sistem Terdistribusi',
    image: 'https://if.unram.ac.id/wp-content/uploads/2022/11/4-1.png',
  },
];

const SupervisorPreview = () => {
  return (
    <section id="dosen" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-section text-primary mb-4">
            Dosen Pembimbing
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Tim dosen dengan keahlian khusus dan pengalaman riset yang siap membimbing perjalanan akademik Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {supervisors.map((supervisor) => (
            <div
              key={supervisor.name}
              className="group card-academic flex items-start gap-4"
            >
              <img
                src={supervisor.image}
                alt={supervisor.name}
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0 grayscale group-hover:grayscale-0 transition-all"
              />
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {supervisor.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
                  {supervisor.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/profil/dosen" className="link-academic inline-flex items-center gap-2">
            Lihat Semua Dosen Pembimbing
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupervisorPreview;
