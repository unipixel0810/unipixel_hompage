import React from 'react';
import { Users, TrendingUp, Medal, Quote } from 'lucide-react';

export const PartnershipSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#0B0F19] text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="mb-8">
                <span className="text-blue-500 font-bold tracking-widest text-sm uppercase">Strategic Partnership</span>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-20 items-start">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
                        귀사의 가치를 깊이<br/>
                        이해하며<br/>
                        <span className="text-blue-500">지속 가능한 동반<br/>성장</span>을 지향합니다
                    </h2>
                    
                    <p className="text-slate-400 text-lg leading-relaxed mb-16 max-w-xl">
                        유니픽셀은 단순 용역 관계를 넘어 파트너십 기반의 맞춤형 솔루션을 제안합니다.
                        비즈니스 임팩트를 극대화하기 위한 정교한 사후 관리와 모니터링을 지원합니다.
                    </p>

                    <div className="space-y-8">
                        {/* Stat 1 */}
                        <div className="flex gap-6 items-center group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                                <Users size={28} className="text-blue-400 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">70% <span className="text-lg font-medium text-blue-400">높은 재의뢰율</span></h4>
                                <p className="text-slate-500 text-sm">신뢰 기반의 장기 프로젝트 파트너십</p>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex gap-6 items-center group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                                <TrendingUp size={28} className="text-blue-400 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">100+ <span className="text-lg font-medium text-blue-400">고객사 제작 실적</span></h4>
                                <p className="text-slate-500 text-sm">다양한 산업군을 아우르는 제작 경험</p>
                            </div>
                        </div>

                         {/* Stat 3 */}
                        <div className="flex gap-6 items-center group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                                <Medal size={28} className="text-blue-400 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">대상 <span className="text-lg font-medium text-blue-400">과기정통부 수상</span></h4>
                                <p className="text-slate-500 text-sm">공식적으로 인정받은 기술력과 창의성</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image Card */}
                <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                    <div className="relative rounded-[2rem] overflow-hidden bg-slate-800 border border-white/10 shadow-2xl group">
                        <img 
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" 
                            alt="Studio" 
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 min-h-[500px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 p-10 md:p-14">
                            <Quote size={40} className="text-blue-500 mb-6 fill-blue-500/20" />
                            <p className="text-xl md:text-2xl font-medium leading-relaxed text-white mb-8 italic">
                                "유니픽셀은 단순히 이미지를 예쁘게 만드는 것을 넘어, 우리의 비즈니스 본질을 가장 정확하게 시각화해 준 팀입니다."
                            </p>
                            <div className="h-1 w-20 bg-blue-600 mb-4"></div>
                            <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">Unipixel Visionary Strategy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};