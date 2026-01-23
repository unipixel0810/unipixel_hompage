import React from 'react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Basic",
        frequency: "월 2회 영상 제작",
        desc: "안정적인 비즈니스 기반 마련을 위한 베이직 솔루션",
        features: ["채널 관리 전문 컨설팅", "커스텀 썸네일 디자인", "타겟 데이터 분석 및 기획"],
        isPro: false,
    },
    {
        name: "Pro",
        frequency: "주 1회 영상 제작",
        desc: "고도화된 브랜드 확산과 성과 중심의 추천 솔루션",
        features: ["Basic 모든 혜택 포함", "제작 스케줄링 우선순위 부여", "연간 계약 시 5% 할인 혜택"],
        isPro: true,
    },
    {
        name: "Premium",
        frequency: "주 2회 영상 제작",
        desc: "시장 점유율 극대화와 선도적 이미 구축을 위한 프리미엄 솔루션",
        features: ["Pro 모든 혜택 포함", "브랜드 채널 통합 관리 지원", "광고 집행 데이터 최적화 분석"],
        isPro: false,
    }
];

export const PricingSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
             <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Plans & Benefits</span>
             <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-16 text-slate-900 leading-tight">
                비즈니스 성장을 가시화하는<br/>
                UNIPIXEL 멤버십
             </h2>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                {plans.map((plan, idx) => (
                    <div 
                        key={idx} 
                        className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col h-full text-left transition-all duration-300 ${
                            plan.isPro 
                            ? 'bg-white border-2 border-blue-500 shadow-[0_20px_50px_rgba(37,99,235,0.15)] z-10 scale-105' 
                            : 'bg-white border border-slate-200 shadow-xl hover:shadow-2xl'
                        }`}
                    >
                        {plan.isPro && (
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                BEST CHOICE
                            </div>
                        )}
                        
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                        <p className="text-blue-600 font-bold text-lg mb-6">{plan.frequency}</p>
                        <p className="text-slate-500 mb-8 min-h-[50px] leading-relaxed">{plan.desc}</p>
                        
                        <div className="space-y-4 mb-10 flex-1">
                            {plan.features.map((feature, fIdx) => (
                                <div key={fIdx} className="flex items-start gap-3">
                                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.isPro ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                            plan.isPro 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30' 
                            : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
                        }`}>
                            플랜 상세 도입 문의
                        </button>
                    </div>
                ))}
             </div>
        </div>
    </section>
  );
};