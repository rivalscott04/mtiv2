import { useState } from 'react';
import { ArrowRight, ArrowDown, CheckCircle2, XCircle, GraduationCap, BookOpen, Clock, Users, FileText } from 'lucide-react';
import { z } from 'zod';

const eligibilitySchema = z.object({
  ipk: z.number()
    .min(0, { message: "IPK tidak boleh kurang dari 0.00" })
    .max(4, { message: "IPK tidak boleh lebih dari 4.00" }),
  semester: z.number()
    .min(5, { message: "Pilih semester yang valid" })
    .max(8, { message: "Pilih semester yang valid" }),
});

type EligibilityResult = 'eligible' | 'not-eligible' | null;

const keyPoints = [
  {
    icon: BookOpen,
    text: 'Jalur terintegrasi S1–S2',
  },
  {
    icon: GraduationCap,
    text: 'Berdasarkan capaian akademik',
  },
  {
    icon: Clock,
    text: 'Durasi studi lebih efisien',
  },
  {
    icon: Users,
    text: 'Persiapan berbasis riset',
  },
  {
    icon: FileText,
    text: 'Panduan administratif yang jelas',
  },
];

const FastTrackSection = () => {
  const [ipk, setIpk] = useState<string>('');
  const [semester, setSemester] = useState<string>('');
  const [ipkError, setIpkError] = useState<string>('');
  const [semesterError, setSemesterError] = useState<string>('');
  const [result, setResult] = useState<EligibilityResult>(null);
  const [isChecking, setIsChecking] = useState(false);

  const validateIpk = (value: string): boolean => {
    if (!value.trim()) {
      setIpkError('IPK wajib diisi');
      return false;
    }
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setIpkError('Masukkan angka yang valid');
      return false;
    }
    if (numValue < 0) {
      setIpkError('IPK tidak boleh kurang dari 0.00');
      return false;
    }
    if (numValue > 4) {
      setIpkError('IPK tidak boleh lebih dari 4.00');
      return false;
    }
    setIpkError('');
    return true;
  };

  const validateSemester = (value: string): boolean => {
    if (!value) {
      setSemesterError('Pilih semester aktif');
      return false;
    }
    setSemesterError('');
    return true;
  };

  const handleIpkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIpk(value);
    if (value) validateIpk(value);
    else setIpkError('');
    setResult(null);
  };

  const handleSemesterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSemester(value);
    if (value) validateSemester(value);
    else setSemesterError('');
    setResult(null);
  };

  const isFormValid = ipk.trim() !== '' && semester !== '' && !ipkError && !semesterError;

  const handleCheckEligibility = () => {
    const ipkValid = validateIpk(ipk);
    const semesterValid = validateSemester(semester);

    if (!ipkValid || !semesterValid) return;

    setIsChecking(true);
    
    // Simulate brief processing
    setTimeout(() => {
      const numIpk = parseFloat(ipk);
      const numSemester = parseInt(semester);
      
      // Eligibility: IPK >= 3.25 and semester >= 6
      if (numIpk >= 3.25 && numSemester >= 6) {
        setResult('eligible');
      } else {
        setResult('not-eligible');
      }
      setIsChecking(false);
    }, 500);
  };

  const resetChecker = () => {
    setIpk('');
    setSemester('');
    setIpkError('');
    setSemesterError('');
    setResult(null);
  };

  return (
    <section className="section-padding bg-primary/5 relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="section-container relative">
        {/* Section Header with divider */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary/40" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Jalur Eksklusif</span>
            <div className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="heading-section text-primary mb-4">
            Fast Track Program (S1–S2)
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Jalur percepatan akademik bagi mahasiswa sarjana berprestasi untuk melanjutkan ke Magister Teknologi Informasi.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column - Explanation */}
          <div>
            <p className="text-body mb-8">
              Jalur percepatan akademik bagi mahasiswa sarjana berprestasi untuk melanjutkan ke Magister Teknologi Informasi dengan masa studi yang lebih efisien, berbasis capaian akademik.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                    <point.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{point.text}</span>
                </div>
              ))}
            </div>

            {/* Secondary CTA */}
            <a href="#" className="btn-outline text-sm py-2.5 px-5">
              Pelajari Fast Track
            </a>
          </div>

          {/* Right Column - Pathway Visualization */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Pathway Diagram */}
            <div className="w-full max-w-sm bg-primary/10 rounded-xl p-6 mb-8 border border-primary/20">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-6 text-center">
                Alur Jalur Fast Track
              </h3>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="bg-card rounded-lg p-4 border border-primary/20 text-center shadow-sm">
                  <span className="text-xs text-primary/70 uppercase tracking-wide">Program Sarjana</span>
                  <p className="font-semibold text-foreground mt-1">S1 (Semester 6–8)</p>
                </div>
                
                {/* Arrow with line */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-0.5 h-3 bg-primary/30" />
                  <ArrowDown className="h-5 w-5 text-primary" />
                </div>
                
                {/* Step 2 - Highlighted */}
                <div className="bg-primary/20 rounded-lg p-4 border-2 border-primary/40 text-center shadow-sm">
                  <span className="text-xs text-primary uppercase tracking-wide font-semibold">Jalur Percepatan</span>
                  <p className="font-bold text-primary mt-1">Fast Track</p>
                </div>
                
                {/* Arrow with line */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-0.5 h-3 bg-primary/30" />
                  <ArrowDown className="h-5 w-5 text-primary" />
                </div>
                
                {/* Step 3 */}
                <div className="bg-card rounded-lg p-4 border border-primary/20 text-center shadow-sm">
                  <span className="text-xs text-primary/70 uppercase tracking-wide">Program Magister</span>
                  <p className="font-semibold text-foreground mt-1">S2 Magister TI</p>
                </div>
              </div>
            </div>

            {/* Eligibility Checker Card */}
            <div className="w-full max-w-sm bg-card rounded-xl border border-primary/20 overflow-hidden shadow-sm">
              <div className="p-5 border-b border-primary/15 bg-primary/5">
                <h3 className="font-semibold text-foreground">Fast Track Eligibility Checker</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Cek kelayakan awal Anda untuk Program Fast Track
                </p>
              </div>

              <div className="p-5">
                {result === null ? (
                  <div className="space-y-5">
                    {/* IPK Input */}
                    <div>
                      <label htmlFor="ipk" className="block text-sm font-medium text-foreground mb-1.5">
                        IPK (Indeks Prestasi Kumulatif)
                      </label>
                      <input
                        type="number"
                        id="ipk"
                        step="0.01"
                        min="0"
                        max="4"
                        value={ipk}
                        onChange={handleIpkChange}
                        placeholder="Contoh: 3.45"
                        className={`w-full px-3 py-2.5 rounded-lg border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                          ipkError ? 'border-destructive' : 'border-border'
                        }`}
                      />
                      <p className={`text-xs mt-1.5 ${ipkError ? 'text-destructive' : 'text-muted-foreground'}`}>
                        {ipkError || 'Skala 4.00'}
                      </p>
                    </div>

                    {/* Semester Select */}
                    <div>
                      <label htmlFor="semester" className="block text-sm font-medium text-foreground mb-1.5">
                        Semester Aktif
                      </label>
                      <select
                        id="semester"
                        value={semester}
                        onChange={handleSemesterChange}
                        className={`w-full px-3 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer ${
                          semesterError ? 'border-destructive' : 'border-border'
                        } ${!semester ? 'text-muted-foreground' : ''}`}
                      >
                        <option value="">Pilih semester</option>
                        <option value="5">Semester 5</option>
                        <option value="6">Semester 6</option>
                        <option value="7">Semester 7</option>
                        <option value="8">Semester 8</option>
                      </select>
                      <p className={`text-xs mt-1.5 ${semesterError ? 'text-destructive' : 'text-muted-foreground'}`}>
                        {semesterError || 'Semester aktif saat ini'}
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleCheckEligibility}
                      disabled={!isFormValid || isChecking}
                      className={`w-full py-2.5 px-4 rounded-lg font-medium transition-all ${
                        isFormValid && !isChecking
                          ? 'bg-primary text-primary-foreground hover:opacity-90'
                          : 'bg-muted text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      {isChecking ? 'Memeriksa...' : 'Cek Kelayakan'}
                    </button>
                  </div>
                ) : (
                  <div className="animate-fade-in">
                    {result === 'eligible' ? (
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4">
                          <CheckCircle2 className="h-7 w-7 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-foreground text-lg mb-2">
                          Memenuhi Syarat Awal
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Berdasarkan data yang Anda masukkan, Anda memenuhi syarat awal untuk Program Fast Track.
                        </p>
                        <p className="text-xs text-muted-foreground mb-5">
                          Silakan cek detail persyaratan dan alur pendaftaran pada halaman Fast Track.
                        </p>
                        <div className="space-y-3">
                          <a href="#" className="btn-primary w-full text-sm py-2.5 gap-2">
                            Lanjut ke Detail Fast Track
                            <ArrowRight className="h-4 w-4" />
                          </a>
                          <button
                            onClick={resetChecker}
                            className="w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Cek Ulang
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-full mb-4">
                          <XCircle className="h-7 w-7 text-amber-600" />
                        </div>
                        <h4 className="font-semibold text-foreground text-lg mb-2">
                          Belum Memenuhi Syarat Awal
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Berdasarkan data yang Anda masukkan, Anda belum memenuhi syarat awal Program Fast Track.
                        </p>
                        <p className="text-xs text-muted-foreground mb-5">
                          Persyaratan Fast Track umumnya mencakup ketentuan IPK minimum dan semester tertentu. Silakan lihat detail resmi program.
                        </p>
                        <div className="space-y-3">
                          <a href="#" className="link-academic text-sm inline-flex items-center gap-1">
                            Lihat Persyaratan Fast Track
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                          <button
                            onClick={resetChecker}
                            className="block w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Cek Ulang
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastTrackSection;
