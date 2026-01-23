import React from 'react';
import { MonitorPlay, PenTool, Video, Clapperboard, Share2 } from 'lucide-react';

const steps = [
  { icon: MonitorPlay, title: "상담 & 기획", desc: "제작 요청서 검토 및 제안/견적" },
  { icon: PenTool, title: "시나리오", desc: "콘셉트 회의 및 시나리오 제작" },
  { icon: Clapperboard, title: "Pre-Production", desc: "배우/성우/장소 섭외 및 사전 회의" },
  { icon: Video, title: "촬영", desc: "전문 장비와 기술로 촬영 진행" },
  { icon: Share2, title: "편집 & 납품", desc: "종합 편집 및 시사 후 납품" }
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <div className="mb-24">
          <span className="text-indigo-700 font-bold tracking-widest text-sm uppercase">Work Process</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-8 text-slate-900">빠르고 간단한 제작 프로세스</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            친절하고 상세한 상담으로 영상에 관한 모든 고민을 해소하며,<br/>처음부터 끝까지 고객과 밀착 동행합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative max-w-6xl mx-auto">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-16 left-10 right-10 h-0.5 bg-slate-200 -z-10"></div>

           {steps.map((step, idx) => (
             <div key={idx} className="flex flex-col items-center group relative">
                <div className="w-32 h-32 bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-all duration-300 relative z-10 group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] group-hover:border-indigo-100">
                   <step.icon size={40} className="text-slate-700 group-hover:text-indigo-600 transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-base text-slate-600 font-medium max-w-[180px] leading-relaxed">{step.desc}</p>
                
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm shadow-lg group-hover:bg-indigo-600 transition-colors duration-300">
                  {idx + 1}
                </div>
             </div>
           ))}
        </div>

        <div className="mt-24 p-12 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 text-left ring-1 ring-slate-900/5">
           <div className="w-full md:w-5/12 aspect-[4/3] bg-slate-900 rounded-2xl overflow-hidden relative shadow-inner">
             <img src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=800" alt="Consulting" className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-0 flex items-center justify-center flex-col p-6 text-center bg-indigo-900/20 backdrop-blur-[1px]">
                <span className="text-white font-bold text-2xl mb-2">Unipixel Promise</span>
                <span className="text-white/80 text-sm tracking-wider">고객 만족 100%를 향하여</span>
             </div>
           </div>
           <div className="w-full md:w-7/12">
              <h4 className="text-3xl font-bold mb-6 text-slate-900">검수 후 피드백 반영, 걱정 마세요.</h4>
              <p className="text-lg text-slate-700 font-medium leading-loose mb-8">
                "처음 생각했던 결과물과 다르게 나오면 어쩌죠?"<br/>
                유니픽셀은 고객의 검토 후 피드백을 적극적으로 반영하여, 수정 과정을 거쳐 최상의 만족도를 제공합니다. 단순한 납품이 아닌, 완성도 높은 결과물을 함께 만들어갑니다.
              </p>
              <div className="flex flex-wrap gap-3">
                 <span className="px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-bold text-slate-800">무제한 소통</span>
                 <span className="px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-bold text-slate-800">철저한 사후관리</span>
                 <span className="px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-bold text-slate-800">추가 수정 지원</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};