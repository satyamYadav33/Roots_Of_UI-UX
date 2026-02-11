
import React from 'react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="sticky top-0 z-50 glass-card py-4 px-6 mb-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('hero')}
        >
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:bg-indigo-700 transition-colors">
            R
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">Roots of UI/UX</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate('foundations')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Foundations</button>
          <button onClick={() => onNavigate('resources')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Resources</button>
          <button 
            onClick={() => onNavigate('chat')} 
            className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            AI Mentor
          </button>
        </div>

        <button className="md:hidden text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
