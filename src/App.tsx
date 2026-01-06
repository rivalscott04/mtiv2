import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import History from "./pages/History";
import VisionMission from "./pages/VisionMission";
import OrgStructure from "./pages/OrgStructure";
import Lecturers from "./pages/Lecturers";
import Staff from "./pages/Staff";
import Curriculum from "./pages/Curriculum";
import AcademicCalendar from "./pages/AcademicCalendar";
import Facilities from "./pages/Facilities";
import Documents from "./pages/Documents";
import StatisticsPage from "./pages/PLO";
import CourseDescriptions from "./pages/CourseDescriptions";
import ResearchCenter from "./pages/ResearchCenter";
import NewsPage from "./pages/News";
import NewsDetail from "./pages/NewsDetail";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Profil */}
            <Route path="/profil/sejarah" element={<History />} />
            <Route path="/profil/visi-misi" element={<VisionMission />} />
            <Route path="/profil/struktur-organisasi" element={<OrgStructure />} />
            <Route path="/profil/dosen" element={<Lecturers />} />
            <Route path="/profil/staff" element={<Staff />} />
            <Route path="/profil/akreditasi" element={<Index />} /> {/* Placeholder or dedicated page if exists */}

            {/* Riset */}
            <Route path="/riset" element={<ResearchCenter />} />

            {/* Updates */}
            <Route path="/updates" element={<NewsPage />} />
            <Route path="/updates/:id" element={<NewsDetail />} />

            {/* Pendidikan */}
            <Route path="/pendidikan/kurikulum" element={<Curriculum />} />
            <Route path="/pendidikan/kalender" element={<AcademicCalendar />} />
            <Route path="/pendidikan/mata-kuliah" element={<CourseDescriptions />} />
            <Route path="/pendidikan/sop" element={<Index />} /> {/* Placeholder */}

            {/* Layanan */}
            <Route path="/layanan/sarana" element={<Facilities />} />
            <Route path="/layanan/berkas" element={<Documents />} />

            {/* Statistik */}
            <Route path="/statistik" element={<StatisticsPage />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
