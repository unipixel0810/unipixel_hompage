import React from 'react';
import { ArrowUpRight, PlayCircle, ShieldCheck } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Office Background" 
            className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm mb-10 animate-fade-in-up">
            <ShieldCheck size={16} className="text-blue-600" />
            <span className="text-sm font-bold text-slate-700 tracking-tight">차별화된 <span className="text-blue-600">역기획</span> 전술 기반 프리미엄 비주얼 솔루션</span>
        </div>

        {/* Main Headline - SEO 최적화: 유튜브제작, 동영상제작 키워드 포함 */}
        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.15] tracking-tight mb-10 break-keep">
          유튜브제작·동영상제작<br/>
          <span className="text-blue-600">전문 파트너</span> 유니픽셀
        </h2>

        {/* Description - SEO 최적화 */}
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-16 font-medium break-keep">
          고퀄리티 영상제작 및 유튜브 채널 매니지먼트 전문 유니픽셀입니다.<br className="hidden md:block"/>
          기업 홍보, 광고, 유튜브 콘텐츠 기획부터 제작까지 <strong className="text-slate-900 underline decoration-blue-200 underline-offset-4">역기획 프로세스</strong>와 AI 기반 트렌드 분석으로 최적의 솔루션을 제공합니다.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="px-10 py-5 bg-[#0B0F19] text-white text-lg font-bold rounded-full hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1 min-w-[200px] justify-center group">
                컨설팅 시작하기
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
            </a>
            <a href="#portfolio" className="px-10 py-5 bg-white text-slate-900 border border-slate-200 text-lg font-bold rounded-full hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm hover:shadow-md min-w-[200px] justify-center group">
                <PlayCircle size={20} className="text-blue-600 group-hover:scale-110 transition-transform"/>
                주요 프로젝트 실적
            </a>
        </div>
      </div>
    </section>
  );
};