import React from 'react';
import { X, Play, ExternalLink } from 'lucide-react';

interface PortfolioGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const portfolioItems = [
  {
    id: 'V44wzZiHkgE',
    title: '기업 홍보영상 (30초)',
    category: 'Corporate / Branding',
    year: '2023',
  },
  {
    id: 'KqavbhvhJgg',
    title: '안산 사이언스밸리',
    category: 'Motion Graphics / Exhibition',
    year: '2023',
  },
  {
    id: 'GC6TdoNmfXk',
    title: '아태마스터스 성화봉송',
    category: 'Documentary / Event',
    year: '2023',
  },
  {
    id: 'wO7VNYrabHU',
    title: '13부작 다큐멘터리',
    category: 'Documentary / 4K',
    year: '2023',
  },
  {
    id: 'i5ch5UJ2WIY',
    title: 'Audi 신차 리뷰 - 모터리언',
    category: 'Automotive / Cinematic',
    year: '2022',
  },
  {
    id: 'j2HpCWtYf58',
    title: '2D 모션그래픽 홍보영상',
    category: '2D Composite / Animation',
    year: '2022',
  },
  {
    id: 'Vy1yrLqdQFI',
    title: '기업 홍보영상',
    category: 'Corporate / Promotion',
    year: '2021',
  },
  {
    id: 'Y2hK-2wX41I',
    title: '존중문화도시 도봉',
    category: 'Documentary / City Branding',
    year: '2021',
  },
  {
    id: 'y5tDAGljzJo',
    title: '2021 홍보영상',
    category: 'Corporate / Branding',
    year: '2021',
  },
  {
    id: 'SkuGYq8Jjhk',
    title: 'JPO 정기연주회',
    category: 'Concert / Orchestra',
    year: '2021',
  },
  {
    id: 'ggEv-t9uSoA',
    title: '솔로 퍼포먼스',
    category: 'Performance / Music',
    year: '2021',
  },
  {
    id: 'mplgpzNOWy8',
    title: '프로모션 영상',
    category: 'Promotion / Commercial',
    year: '2020',
  },
];

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/98 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-950/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <div>
            <span className="text-blue-400 font-bold tracking-[0.2em] text-xs uppercase">All Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Portfolio Gallery</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={24} className="text-white" />
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <a
              key={item.id}
              href={`https://youtu.be/${item.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative shadow-lg ring-1 ring-white/10 mb-4">
                <img
                  src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={item.title}
                  onError={(e) => {
                    // Fallback to hqdefault if maxresdefault is not available
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="bg-red-600 rounded-full p-4 shadow-xl transform group-hover:scale-110 transition-transform">
                    <Play size={24} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.year}
                </div>

                {/* External Link Icon */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={16} className="text-white/80" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors line-clamp-1">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm font-light">{item.category}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center">
          <p className="text-slate-400 text-sm">
            총 <span className="text-white font-bold">{portfolioItems.length}</span>개의 작품
          </p>
        </div>
      </div>
    </div>
  );
};
