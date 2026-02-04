import React from 'react';
import { Megaphone, ShoppingBag, Building2, Users, Monitor, Youtube } from 'lucide-react';

const services = [
  { icon: Megaphone, title: "브랜드 홍보", desc: "기업의 가치와 비전을 감각적인 영상으로 전달합니다.", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" },
  { icon: ShoppingBag, title: "제품 홍보", desc: "제품의 특장점을 부각시켜 소비자의 구매 욕구를 자극합니다.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" },
  { icon: Monitor, title: "서비스 홍보", desc: "무형의 서비스를 이해하기 쉽게 시각화하여 표현합니다.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" },
  { icon: Users, title: "인터뷰 및 행사", desc: "현장의 생동감과 진정성 있는 목소리를 담아냅니다.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" },
  { icon: Building2, title: "기업 & 전광판", desc: "전시회, 로비 등 다양한 공간에 맞는 맞춤형 영상입니다.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { icon: Youtube, title: "유튜브 컨설팅", desc: "채널 관리, 콘텐츠 기획, 타겟 분석까지 토탈 케어.", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" },
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="text-center mb-20">
         <span className="text-indigo-600 font-bold tracking-widest text-sm uppercase">Our Services</span>
         <h2 className="text-5xl md:text-7xl font-bold mt-6 mb-8 text-slate-900">다양한 영상 니즈를 충족합니다</h2>
         <p className="text-slate-500 text-xl max-w-2xl mx-auto">분야별 전문성을 갖춘 유니픽셀의 서비스를 만나보세요.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {services.map((service, idx) => (
           <div key={idx} className="group relative rounded-[2rem] overflow-hidden min-h-[380px] bg-slate-900 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 ring-1 ring-slate-200/20">
              {/* Background Image */}
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                 {/* Glassmorphism Icon Box */}
                 <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all duration-300">
                    <service.icon size={28} className="text-white group-hover:text-indigo-300 transition-colors" />
                 </div>
                 
                 <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-100 transition-colors">{service.title}</h3>
                 <p className="text-slate-300 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-y-4 group-hover:translate-y-0 transform">
                    {service.desc}
                 </p>
              </div>
           </div>
         ))}
      </div>
    </section>
  );
};