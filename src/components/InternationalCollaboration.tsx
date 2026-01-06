import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";

// Partner universities data
const partners = [
  {
    id: "itb",
    name: "Institut Teknologi Bandung",
    country: "Indonesia",
    type: "Joint Research",
    logo: "/itb.svg",
    website: "https://www.itb.ac.id/",
  },
  {
    id: "ugm",
    name: "Universitas Gadjah Mada",
    country: "Indonesia",
    type: "Co-supervised Thesis",
    logo: "/ugm.png",
    website: "https://www.ugm.ac.id/",
  },
  {
    id: "um",
    name: "Universiti Malaya",
    country: "Malaysia",
    type: "Joint Research",
    logo: "/um_malaya.svg",
    website: "https://www.um.edu.my/",
  },
  {
    id: "uthm",
    name: "Universiti Tun Hussein Malaysia",
    country: "Malaysia",
    type: "Joint Research",
    logo: "/uthm-seeklogo.png",
    website: "https://www.uthm.edu.my/",
  },
  {
    id: "its",
    name: "Institut Teknologi Sepuluh Nopember",
    country: "Indonesia",
    type: "Joint Research",
    logo: "/its.svg",
    website: "https://www.its.ac.id/",
  },
  {
    id: "snu",
    name: "Seoul National University",
    country: "South Korea",
    type: "Joint Research",
    logo: "/snu.svg",
    website: "https://www.snu.ac.id/",
  },
  {
    id: "kaist",
    name: "KAIST",
    country: "South Korea",
    type: "Visiting Professor",
    logo: "/KAIST_logo.svg",
    website: "https://www.kaist.ac.kr/",
  },
  {
    id: "kumamoto",
    name: "Kumamoto University",
    country: "Japan",
    type: "Co-supervised Thesis",
    logo: "/kumamoto-university.svg",
    website: "https://www.kumamoto-u.ac.jp/",
  },
];

const categories = [
  "all",
  "Joint Research",
  "Co-supervised Thesis",
  "Visiting Professor",
  "Joint Publication",
];

export default function InternationalCollaboration() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");

  const filteredPartners = activeTab === "all" 
    ? partners 
    : partners.filter(p => p.type === activeTab);

  return (
    <section id="kolaborasi" className="section-padding bg-slate-50/50 border-t border-slate-100">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-medium text-amber uppercase tracking-wider">
            {t("collaboration.badge")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("collaboration.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("collaboration.description")}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                  : "bg-white/50 text-muted-foreground hover:bg-white hover:text-foreground border border-border"
              }`}
            >
              {category === "all" ? t("collaboration.types.all") : category}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredPartners.map((partner) => (
              <motion.div
                key={partner.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden h-full text-center"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                  
                  {/* Logo with grayscale effect */}
                  <div className="h-20 flex items-center justify-center mb-6">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-[140px] object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/150?text=" + partner.id.toUpperCase();
                        target.className = "max-h-full max-w-[140px] object-contain opacity-20 group-hover:opacity-40 transition-all duration-300";
                      }}
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg leading-tight mb-2">
                      {partner.name}
                    </h3>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-sm text-muted-foreground">{partner.country}</span>
                      <span className="inline-block px-3 py-1 bg-secondary/50 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
                        {partner.type}
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto italic">
            {t("collaboration.caption")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
