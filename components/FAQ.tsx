import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const questions = [
  { q: "전체적인 컨셉은 어떻게 잡나요?", a: "유니픽셀은 '역기획' 방식을 사용하여 고객의 최종 목표와 타겟 오디언스를 먼저 분석한 뒤, 그에 가장 효과적인 컨셉과 스토리텔링을 제안합니다. 단순한 영상미를 넘어선 기획을 경험해보세요." },
  { q: "예산이 한정되어 있는데 퀄리티 있게 나올까요?", a: "주어진 예산 내에서 리소스를 가장 효율적으로 배분하여, 핵심 메시지 전달에 집중함으로써 최상의 퀄리티를 만들어냅니다. 불필요한 비용은 줄이고 임팩트는 키웁니다." },
  { q: "수정은 얼마나 가능한가요?", a: "기본적으로 종합 편집 단계와 최종 시사 후 피드백 반영 단계가 있습니다. 사전 협의된 범위 내에서 고객님이 만족하실 때까지 합리적인 수정 작업을 지원합니다." },
  { q: "제작 기간은 얼마나 걸리나요?", a: "프로젝트의 규모와 난이도에 따라 다르지만, 일반적으로 킥오프 미팅부터 최종 납품까지 2주에서 4주 정도 소요됩니다. 급행 제작이 필요한 경우 별도 문의 바랍니다." },
  { q: "어떤 업체들이 유니픽셀을 선택하나요?", a: "과학기술정보통신부, 삼성전자, 현대자동차 등 공공기관부터 대기업, 스타트업까지 100여 개 이상의 다양한 파트너사가 유니픽셀과 함께했습니다." },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto my-12">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-lg border border-slate-100">
          <div className="flex flex-col lg:flex-row lg:gap-24 items-start">
             <div className="lg:w-1/3 mb-12 lg:mb-0">
               <span className="text-primary font-bold tracking-widest text-sm uppercase">FAQ</span>
               <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-slate-900 leading-tight">궁금한 점이<br/>있으신가요?</h2>
               <p className="text-lg text-slate-500 mb-8">자주 묻는 질문들을 모았습니다.<br/>더 자세한 내용은 카카오톡이나 문의하기를 이용해주세요.</p>
               
               <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors">
                  문의하기
               </a>
             </div>
             
             <div className="lg:w-2/3 w-full space-y-6">
                {questions.map((item, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-6 last:border-none">
                    <button 
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full flex justify-between items-center py-4 text-left group"
                    >
                      <span className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors pr-8">{item.q}</span>
                      <ChevronDown className={`transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180 text-primary' : 'text-slate-300'}`} size={24} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <p className="text-lg text-slate-600 font-normal leading-loose bg-slate-50 p-8 rounded-2xl">
                        {item.a}
                      </p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
      </div>
    </section>
  );
};