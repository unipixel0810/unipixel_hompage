import React from 'react';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pb-12 px-6 md:px-12 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto pt-16 grid grid-cols-1 md:space-y-0 space-y-12 md:grid-cols-4 gap-16 text-base text-slate-500 border-b border-slate-200 pb-16">
         <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
               {/* Footer Logo */}
               <h2 className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
                  Unipixel
                  <span className="text-blue-600">.</span>
               </h2>
            </div>
            <p className="mb-4 text-lg">대표: 박윤희 | 사업자등록번호: 205-04-53643</p>
            
            <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2 text-lg">
                    <span className="font-medium text-slate-700 min-w-[60px]">이메일:</span>
                    <a href="mailto:moisturett@naver.com" className="hover:text-blue-600 transition-colors underline decoration-slate-300 underline-offset-4 hover:decoration-blue-600">
                        moisturett@naver.com
                    </a>
                </div>
                <div className="flex items-center gap-2 text-lg">
                    <span className="font-medium text-slate-700 min-w-[60px]">전화:</span>
                    <a href="tel:0507-1367-2647" className="hover:text-blue-600 transition-colors underline decoration-slate-300 underline-offset-4 hover:decoration-blue-600">
                        0507-1367-2647
                    </a>
                </div>
                <div className="flex items-center gap-2 text-lg mt-2">
                    <a href="https://www.instagram.com/unipixel_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-600 transition-colors font-medium group">
                        <div className="p-2 rounded-full bg-slate-100 group-hover:bg-pink-50 text-slate-600 group-hover:text-pink-50 transition-colors">
                            <Instagram size={20} />
                        </div>
                        <span>@unipixel_</span>
                    </a>
                </div>
            </div>

            <p className="text-lg text-blue-600 font-bold mt-4">여성기업 / 나라장터 등록 업체</p>
         </div>
         <div>
            <h4 className="text-slate-900 font-bold mb-6 text-lg">Service</h4>
            <ul className="space-y-4 text-lg">
               <li className="hover:text-blue-600 cursor-pointer transition-colors">브랜드 홍보</li>
               <li className="hover:text-blue-600 cursor-pointer transition-colors">제품/서비스 홍보</li>
               <li className="hover:text-blue-600 cursor-pointer transition-colors">인터뷰 및 행사</li>
               <li className="hover:text-blue-600 cursor-pointer transition-colors">유튜브 컨설팅</li>
            </ul>
         </div>
         <div>
            <h4 className="text-slate-900 font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-lg">
               <li className="hover:text-blue-600 cursor-pointer transition-colors">회사소개</li>
               <li className="hover:text-blue-600 cursor-pointer transition-colors">포트폴리오</li>
               <li className="hover:text-blue-600 cursor-pointer transition-colors">제작 문의</li>
            </ul>
         </div>
      </div>
      
      <div className="mt-8 flex flex-col md:flex-row justify-between text-sm text-slate-400 max-w-[1400px] mx-auto">
         <span>© 2025 Unipixel Video Studio. All rights reserved.</span>
         <div className="flex gap-8 mt-4 md:mt-0">
           <span className="hover:text-slate-600 cursor-pointer">이용약관</span>
           <span className="hover:text-slate-600 cursor-pointer">개인정보처리방침</span>
         </div>
      </div>
    </footer>
  );
};