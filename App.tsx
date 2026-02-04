import { useState, useEffect } from 'react';
import { SplineHero } from './components/SplineHero';
import { Navbar } from './components/Navbar';
import { IntroSection } from './components/IntroSection';
import { PartnershipSection } from './components/PartnershipSection';
import { FeatureSection } from './components/FeatureSection';
import { ProcessSection } from './components/ProcessSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { UniChat } from './components/MemoChat';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Play, ArrowRight, Grid } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 갤러리가 열릴 때 스크롤 방지
  useEffect(() => {
    if (showGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showGallery]);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-700 font-sans text-slate-800">
      <Navbar scrolled={scrolled} />
      
      <main>
        {/* 1. Spline Hero (Visual Hook) */}
        <SplineHero />

        {/* 2. Intro Section */}
        <IntroSection />

        {/* 3. Partnership Section */}
        <PartnershipSection />

        {/* 4. Feature Content */}
        <section id="about" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
          <div className="space-y-32 md:space-y-40">
            <FeatureSection 
              title="소비자의 시각이 아닌, 제작자의 관점"
              subtitle="Pain Point Solution"
              description="머릿속을 채우는 많은 고민들. '상상한 대로 나올까?', '사람들이 많이 봐줄까?' 유니픽셀은 단순한 제작이 아닌, 강한 감정의 연결고리를 형성하여 공감대를 부르는 영상을 만듭니다."
              image="https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=2000"
              reverse={false}
              points={["강렬하고 임팩트 있는 메세지", "독창적이고 창의적인 기억", "철저한 사후관리"]}
            />
             <FeatureSection 
              title="AI를 활용한 트렌드 분석"
              subtitle="Data Driven Strategy"
              description="AI를 활용하여 다양한 분야의 고객 반응과 취향, 성향 등을 트렌드에 맞춰 분석하여 제작합니다. 타겟 감성에 맞춘 기획으로 확산력이 높은 공유 콘텐츠로 재탄생시킵니다."
              image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
              reverse={true}
              points={["타겟 맞춤형 기획", "빅데이터 기반 트렌드 분석", "최적화된 예산 집행"]}
            />
          </div>
        </section>

        {/* 5. Service Grid */}
        <FeaturesGrid />

        {/* 6. Portfolio Preview */}
        <section id="portfolio" className="py-40 bg-slate-950 text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_#1e293b_0%,_#020617_100%)] pointer-events-none opacity-80"></div>
           
           <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                 <div>
                    <span className="text-blue-400 font-bold tracking-[0.2em] text-xs uppercase">Selected Works</span>
                    <h2 className="text-5xl md:text-6xl font-bold mt-6 tracking-tight text-white">Portfolio</h2>
                 </div>
                 <button 
                    onClick={() => setShowGallery(true)}
                    className="hidden md:flex items-center gap-2 text-sm font-bold border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 group"
                 >
                    전체 포트폴리오 보기 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                  {/* Portfolio Item 1: 최신 프로젝트 1 */}
                  <a href="https://youtu.be/FSowhdPcmxM" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                     <div className="aspect-video bg-slate-900 rounded-[1.5rem] overflow-hidden relative mb-8 shadow-2xl ring-1 ring-white/10 group">
                        <img 
                            src="https://img.youtube.com/vi/FSowhdPcmxM/maxresdefault.jpg" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                            alt="최신 프로젝트 1"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                           <div className="bg-red-600 rounded-full p-6 shadow-xl hover:scale-110 transition-transform">
                              <Play size={32} fill="white" className="text-white ml-1" />
                           </div>
                        </div>
                     </div>
                     <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">최신 프로젝트 1</h3>
                            <p className="text-slate-400 font-light">Latest / Premium Production</p>
                        </div>
                        <span className="text-xs font-bold border border-white/20 px-3 py-1 rounded-full text-white/60">2024</span>
                     </div>
                  </a>

                  {/* Portfolio Item 2: 최신 프로젝트 2 */}
                  <a href="https://youtu.be/QD-XVgh-CQE" target="_blank" rel="noopener noreferrer" className="group cursor-pointer md:mt-20 block">
                     <div className="aspect-video bg-slate-900 rounded-[1.5rem] overflow-hidden relative mb-8 shadow-2xl ring-1 ring-white/10">
                        <img 
                            src="https://img.youtube.com/vi/QD-XVgh-CQE/maxresdefault.jpg" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                            alt="최신 프로젝트 2"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                           <div className="bg-red-600 rounded-full p-6 shadow-xl hover:scale-110 transition-transform">
                              <Play size={32} fill="white" />
                           </div>
                        </div>
                     </div>
                     <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">최신 프로젝트 2</h3>
                            <p className="text-slate-400 font-light">Latest / Premium Production</p>
                        </div>
                        <span className="text-xs font-bold border border-white/20 px-3 py-1 rounded-full text-white/60">2024</span>
                     </div>
                  </a>
                  
                  {/* Portfolio Item 3: 최신 프로젝트 3 */}
                  <a href="https://youtu.be/Vgr8PayLDR8" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                     <div className="aspect-video bg-slate-900 rounded-[1.5rem] overflow-hidden relative mb-8 shadow-2xl ring-1 ring-white/10">
                        <img 
                            src="https://img.youtube.com/vi/Vgr8PayLDR8/maxresdefault.jpg" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                            alt="최신 프로젝트 3"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                           <div className="bg-red-600 rounded-full p-6 shadow-xl hover:scale-110 transition-transform">
                              <Play size={32} fill="white" />
                           </div>
                        </div>
                     </div>
                     <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">최신 프로젝트 3</h3>
                            <p className="text-slate-400 font-light">Latest / Premium Production</p>
                        </div>
                        <span className="text-xs font-bold border border-white/20 px-3 py-1 rounded-full text-white/60">2024</span>
                     </div>
                  </a>

                  {/* Portfolio Item 4: 기업 홍보영상 */}
                  <a href="https://youtu.be/V44wzZiHkgE" target="_blank" rel="noopener noreferrer" className="group cursor-pointer md:mt-20 block">
                     <div className="aspect-video bg-slate-900 rounded-[1.5rem] overflow-hidden relative mb-8 shadow-2xl ring-1 ring-white/10">
                        <img 
                            src="https://img.youtube.com/vi/V44wzZiHkgE/maxresdefault.jpg" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                            alt="기업 홍보영상"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                           <div className="bg-red-600 rounded-full p-6 shadow-xl hover:scale-110 transition-transform">
                              <Play size={32} fill="white" />
                           </div>
                        </div>
                     </div>
                     <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">기업 홍보영상 (30초)</h3>
                            <p className="text-slate-400 font-light">Corporate / Branding / Commercial</p>
                        </div>
                        <span className="text-xs font-bold border border-white/20 px-3 py-1 rounded-full text-white/60">2023</span>
                     </div>
                  </a>

                  {/* Portfolio Item 5: 다큐멘터리 */}
                  <a href="https://youtu.be/wO7VNYrabHU" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                     <div className="aspect-video bg-slate-900 rounded-[1.5rem] overflow-hidden relative mb-8 shadow-2xl ring-1 ring-white/10">
                        <img 
                            src="https://img.youtube.com/vi/wO7VNYrabHU/maxresdefault.jpg" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                            alt="다큐멘터리"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                           <div className="bg-red-600 rounded-full p-6 shadow-xl hover:scale-110 transition-transform">
                              <Play size={32} fill="white" />
                           </div>
                        </div>
                     </div>
                     <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">13부작 다큐멘터리</h3>
                            <p className="text-slate-400 font-light">Documentary / 4K Production / Storytelling</p>
                        </div>
                        <span className="text-xs font-bold border border-white/20 px-3 py-1 rounded-full text-white/60">2023</span>
                     </div>
                  </a>

                  {/* Portfolio Item 6: 2D 모션그래픽 */}
                  <a href="https://youtu.be/j2HpCWtYf58" target="_blank" rel="noopener noreferrer" className="group cursor-pointer md:mt-20 block">
                     <div className="aspect-video bg-slate-900 rounded-[1.5rem] overflow-hidden relative mb-8 shadow-2xl ring-1 ring-white/10">
                        <img 
                            src="https://img.youtube.com/vi/j2HpCWtYf58/maxresdefault.jpg" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                            alt="2D 모션그래픽"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                           <div className="bg-red-600 rounded-full p-6 shadow-xl hover:scale-110 transition-transform">
                              <Play size={32} fill="white" />
                           </div>
                        </div>
                     </div>
                     <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">2D 모션그래픽 홍보영상</h3>
                            <p className="text-slate-400 font-light">2D Composite / Motion Graphics / Animation</p>
                        </div>
                        <span className="text-xs font-bold border border-white/20 px-3 py-1 rounded-full text-white/60">2022</span>
                     </div>
                  </a>

                  {/* Portfolio Item 7: 도봉구 */}
                  <a href="https://youtu.be/Y2hK-2wX41I" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                     <div className="aspect-video bg-slate-900 rounded-[1.5rem] overflow-hidden relative mb-8 shadow-2xl ring-1 ring-white/10">
                        <img 
                            src="https://img.youtube.com/vi/Y2hK-2wX41I/maxresdefault.jpg" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                            alt="도봉구"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                           <div className="bg-red-600 rounded-full p-6 shadow-xl hover:scale-110 transition-transform">
                              <Play size={32} fill="white" />
                           </div>
                        </div>
                     </div>
                     <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">존중문화도시 도봉</h3>
                            <p className="text-slate-400 font-light">Documentary / Interview / City Branding</p>
                        </div>
                        <span className="text-xs font-bold border border-white/20 px-3 py-1 rounded-full text-white/60">2021</span>
                     </div>
                  </a>

                  {/* Portfolio Item 8: JPO */}
                  <a href="https://youtu.be/SkuGYq8Jjhk" target="_blank" rel="noopener noreferrer" className="group cursor-pointer md:mt-20 block">
                     <div className="aspect-video bg-slate-900 rounded-[1.5rem] overflow-hidden relative mb-8 shadow-2xl ring-1 ring-white/10">
                        <img 
                            src="https://img.youtube.com/vi/SkuGYq8Jjhk/maxresdefault.jpg" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                            alt="JPO"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                           <div className="bg-red-600 rounded-full p-6 shadow-xl hover:scale-110 transition-transform">
                              <Play size={32} fill="white" />
                           </div>
                        </div>
                     </div>
                     <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">JPO 정기연주회 (1955년 창단)</h3>
                            <p className="text-slate-400 font-light">Concert / Orchestra / Cultural Event</p>
                        </div>
                        <span className="text-xs font-bold border border-white/20 px-3 py-1 rounded-full text-white/60">2021</span>
                     </div>
                  </a>
              </div>

              {/* More Portfolio Button */}
              <div className="mt-20 text-center">
                <button 
                    onClick={() => setShowGallery(true)}
                    className="inline-flex items-center gap-3 text-sm font-bold border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-5 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
                >
                    <Grid size={20} />
                    전체 포트폴리오 보기 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
           </div>
        </section>

        {/* 7. Process Section */}
        <ProcessSection />

        {/* 8. Pricing Section */}
        <PricingSection />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. Contact Section */}
        <ContactSection />

        {/* 11. Footer */}
        <Footer />
      </main>
      
      {/* Floating Chat Widget */}
      <UniChat />

      {/* Portfolio Gallery Modal */}
      <PortfolioGallery isOpen={showGallery} onClose={() => setShowGallery(false)} />
    </div>
  );
}