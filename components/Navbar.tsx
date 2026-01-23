import React, { useState } from 'react';
import { Menu, Share2, Check } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className={`mx-auto max-w-[1600px] px-6 md:px-12 flex items-center justify-between`}>
        {/* Logo Area */}
        <div className={`flex items-center gap-2 transition-all duration-500 ${scrolled ? 'scale-90 origin-left' : 'scale-100'}`}>
           <a href="/" onClick={scrollToTop} className="flex items-end gap-2 group">
              <div className="relative">
                {/* Text Logo */}
                <h1 className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-slate-900 leading-none drop-shadow-sm">
                  Unipixel
                </h1>
                <span className="block font-medium text-[9px] tracking-[0.3em] text-slate-600 mt-1.5 text-right uppercase">
                  Video Studio
                </span>
                
                {/* Minimalist Decoration */}
                <div className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
              </div>
           </a>
        </div>

        {/* Desktop Menu - Increased Opacity for Visibility */}
        <div className={`hidden md:flex items-center gap-10 text-[15px] font-bold transition-all duration-500 px-8 py-3 rounded-full ${
            scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-md border border-slate-200/50 text-slate-900' 
            : 'bg-white/70 backdrop-blur-lg border border-white/40 text-slate-900 shadow-sm'
        }`}>
          <a href="#about" className="hover:text-indigo-600 transition-colors relative group">
            회사소개
            <span className="absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a href="#process" className="hover:text-indigo-600 transition-colors relative group">
            프로세스
            <span className="absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a href="#services" className="hover:text-indigo-600 transition-colors relative group">
            서비스
            <span className="absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a href="#portfolio" className="hover:text-indigo-600 transition-colors relative group">
            포트폴리오
            <span className="absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors relative group">
            문의하기
            <span className="absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>

          {/* Divider */}
          <div className="w-[1px] h-3 bg-slate-400/50 mx-[-10px]"></div>

          {/* Share Button */}
          <button 
            onClick={handleShare}
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-all active:scale-95"
            title="링크 복사하기"
          >
             {copied ? (
               <div className="flex items-center gap-1.5 text-green-700 bg-green-100 px-3 py-1 rounded-full border border-green-200">
                 <Check size={14} strokeWidth={3} />
                 <span className="text-xs font-bold">복사됨!</span>
               </div>
             ) : (
               <div className="flex items-center gap-1.5 hover:bg-indigo-50 px-2 py-1 rounded-full transition-colors">
                 <Share2 size={18} strokeWidth={2} />
               </div>
             )}
          </button>
        </div>

        {/* Mobile Menu Button & Share */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={handleShare}
                className="p-2 text-slate-800 bg-white/50 backdrop-blur rounded-full active:scale-90 transition-transform"
            >
                {copied ? <Check size={20} className="text-green-600" /> : <Share2 size={20} />}
            </button>
            <button className={`p-2 rounded-lg text-slate-900 bg-white/50 backdrop-blur`}>
                <Menu size={24} strokeWidth={2} />
            </button>
        </div>
      </div>
    </nav>
  );
};