import React from 'react';
import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-slate-50">
        <div className="max-w-[1000px] mx-auto bg-white rounded-[3rem] p-12 md:p-24 text-center shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden">
             
             {/* Decorative Background Blur */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                유니픽셀이<br/>
                귀사의 더 큰 성장을<br/>
                함께하겠습니다
             </h2>
             
             <p className="text-slate-500 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
                브랜드의 아이덴티티를 가장 선명하게 시각화하는 비주얼 전략을 확인하십시오.<br/>
                아래 채널을 통해 문의해 주시면 최적화된 맞춤형 제안을 드리겠습니다.
             </p>

             <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
                 {/* Phone */}
                 <a href="tel:0507-1367-2647" className="flex flex-col items-center gap-4 group cursor-pointer">
                     <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:-translate-y-2">
                        <Phone size={32} />
                     </div>
                     <span className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">0507-1367-2647</span>
                 </a>

                 {/* Email */}
                 <a href="mailto:moisturett@naver.com" className="flex flex-col items-center gap-4 group cursor-pointer">
                     <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-700 shadow-sm border border-slate-100 group-hover:bg-slate-800 group-hover:text-white transition-all duration-300 group-hover:-translate-y-2">
                        <Mail size={32} />
                     </div>
                     <span className="font-bold text-slate-800 text-lg group-hover:text-slate-900 transition-colors">moisturett@naver.com</span>
                 </a>

                 {/* Instagram */}
                 <a href="https://www.instagram.com/unipixel_" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group cursor-pointer">
                     <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-700 shadow-sm border border-slate-100 group-hover:bg-gradient-to-tr group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300 group-hover:-translate-y-2">
                        <Instagram size={32} />
                     </div>
                     <span className="font-bold text-slate-800 text-lg group-hover:text-pink-600 transition-colors">@unipixel_</span>
                 </a>
             </div>

             <a href="https://pf.kakao.com/_placeholder" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FEE500] text-[#3C1E1E] text-lg font-bold rounded-full hover:bg-[#FDD835] transition-all shadow-lg hover:shadow-yellow-400/20 hover:-translate-y-1">
                 <MessageCircle size={24} fill="currentColor" />
                 카카오톡 실시간 상담하기
             </a>
        </div>
    </section>
  );
};