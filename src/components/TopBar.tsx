import { Mail, Globe } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="section-container flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
        <div className="flex items-center gap-4">
          <span className="font-medium">Fakultas Teknik · Universitas Mataram</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="mailto:mti@unram.ac.id" 
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <Mail className="h-4 w-4" />
            <span>mti@unram.ac.id</span>
          </a>
          <div className="flex items-center gap-1.5">
            <Globe className="h-4 w-4" />
            <button className="font-medium hover:underline">ID</button>
            <span>/</span>
            <button className="opacity-70 hover:opacity-100 hover:underline">EN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
