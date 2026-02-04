import React from 'react';
import { X, Play, ExternalLink } from 'lucide-react';

interface PortfolioGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const portfolioItems = [
  // 최신 프로젝트 (2024)
  {
    id: 'FSowhdPcmxM',
    title: '리어카를 탄 과일장수',
    category: 'Documentary / Storytelling',
    year: '2024',
  },
  {
    id: 'QD-XVgh-CQE',
    title: '도봉구 도깨비 축제',
    category: 'Festival / Event',
    year: '2024',
  },
  {
    id: 'Vgr8PayLDR8',
    title: '양주프라임공업사',
    category: 'Corporate / Industry',
    year: '2024',
  },
  // 브랜드 홍보
  {
    id: 'SkuGYq8Jjhk',
    title: '세계은행 JPO 홍보영상',
    category: 'Government / Documentary',
    year: '2023',
  },
  {
    id: 'Y2hK-2wX41I',
    title: '대전 직업 박람회',
    category: 'Education / Event',
    year: '2023',
  },
  {
    id: 'mplgpzNOWy8',
    title: '새만금 노마드 페스티벌!',
    category: 'Festival / Tourism',
    year: '2023',
  },
  {
    id: 'ggEv-t9uSoA',
    title: '북촌우리음악 축제 공연',
    category: 'Performance / Culture',
    year: '2023',
  },
  // 제품 & 서비스 홍보
  {
    id: 'i5ch5UJ2WIY',
    title: 'Audi 신차 리뷰',
    category: 'Automotive / Review',
    year: '2023',
  },
  {
    id: 'V44wzZiHkgE',
    title: '하루예술앱 티처 광고',
    category: 'App / Commercial',
    year: '2023',
  },
  // 인터뷰 및 행사
  {
    id: 'wO7VNYrabHU',
    title: '전북 대회 아태마스터스',
    category: 'Sports / Event / 4K Drone',
    year: '2023',
  },
  {
    id: 'Vy1yrLqdQFI',
    title: '안산 사이언스밸리',
    category: 'City / Motion Graphics',
    year: '2023',
  },
  {
    id: 'GC6TdoNmfXk',
    title: '주민 협의체행사',
    category: 'Documentary / Community',
    year: '2023',
  },
  // 기업 & 전광판 홍보
  {
    id: 'j2HpCWtYf58',
    title: '바이켐(주) 기업 홍보',
    category: 'Corporate / 2D Graphics',
    year: '2022',
  },
  {
    id: 'Gj-0VfaqNcU',
    title: '대동몰드 기업소개 영상',
    category: 'Corporate / Manufacturing',
    year: '2022',
  },
  {
    id: 'Q398CeyRuDg',
    title: '남북정상회담 5G 서비스',
    category: 'Government / Technology',
    year: '2022',
  },
  {
    id: 'pSAU9EgvRBo',
    title: '입주기업사무실 소개영상',
    category: 'Corporate / Real Estate',
    year: '2022',
  },
];

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 overflow-y-auto">
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
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 bg-slate-950 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <a
              key={item.id}
              href={`https://youtu.be/${item.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="aspect-video bg-slate-800 rounded-xl overflow-hidden relative shadow-lg ring-1 ring-white/10 mb-4">
                <img
                  src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={item.title}
                  onError={(e) => {
                    // Fallback to mqdefault if hqdefault is not available
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${item.id}/mqdefault.jpg`;
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
      <div className="border-t border-white/10 py-8 bg-slate-950">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center">
          <p className="text-slate-400 text-sm">
            총 <span className="text-white font-bold">{portfolioItems.length}</span>개의 작품
          </p>
        </div>
      </div>
    </div>
  );
};
