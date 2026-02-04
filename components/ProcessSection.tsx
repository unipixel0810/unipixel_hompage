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
    <section id="process" className="py-32 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <div className="mb-24 animate-fade-in-up">
          <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">Work Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8 text-slate-900 leading-tight">
            복잡한 과정은 줄이고,<br/>
            <span className="text-indigo-600">본질</span>에 집중합니다.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            영상 제작이 처음이라도 걱정하지 마세요.<br/>
            유니픽셀의 체계적인 프로세스로 A부터 Z까지 친절하게 안내해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative max-w-7xl mx-auto">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-[3.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-slate-200 via-indigo-100 to-slate-200 -z-10"></div>

           {steps.map((step, idx) => (
             <div key={idx} className="flex flex-col items-center group relative p-4">
                <div className="w-28 h-28 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-all duration-500 relative z-10 group-hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] group-hover:border-indigo-100 ring-4 ring-white">
                   <step.icon size={32} className="text-slate-400 group-hover:text-indigo-600 transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 w-full h-full hover:bg-white transition-colors duration-300">
                    <h3 className="text-lg font-bold mb-2 text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed break-keep">{step.desc}</p>
                </div>
                
                {/* Number Badge */}
                <div className="absolute top-2 right-1/2 translate-x-[3.5rem] -translate-y-2 w-7 h-7 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center text-xs shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 border border-white">
                  {idx + 1}
                </div>
             </div>
           ))}
        </div>

        <div className="mt-24 p-8 md:p-12 bg-white rounded-[2rem] shadow-xl border border-slate-100 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 text-left ring-1 ring-slate-900/5">
           <div className="w-full md:w-5/12 aspect-[4/3] bg-slate-900 rounded-xl overflow-hidden relative shadow-inner group">
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Meeting" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 flex items-center justify-center flex-col p-6 text-center bg-indigo-900/40 backdrop-blur-[1px]">
                <span className="text-white font-bold text-2xl mb-1">Feedback Loop</span>
                <span className="text-indigo-200 text-sm tracking-wider uppercase font-semibold">100% Satisfaction</span>
             </div>
           </div>
           <div className="w-full md:w-7/12">
              <h4 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">"생각했던 것과 다르면 어떡하죠?"</h4>
              <p className="text-base md:text-lg text-slate-600 font-medium leading-loose mb-8">
                걱정하지 마세요. 유니픽셀은 <strong className="text-indigo-600">무제한 소통</strong>을 원칙으로 합니다.<br/>
                중간 시사 과정을 통해 고객님의 피드백을 꼼꼼히 반영하며, 완성도 높은 결과물을 위해 끝까지 책임집니다.
              </p>
              <div className="flex flex-wrap gap-2">
                 <span className="px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-lg text-sm font-bold text-indigo-700">1:1 전담 매니저</span>
                 <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-700">추가 수정 지원</span>
                 <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-700">원본 데이터 보관</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};