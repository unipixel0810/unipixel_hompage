import React, { useState } from 'react';
import { ArrowDown, Loader2 } from 'lucide-react';

export const SplineHero: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-[100vh] bg-white overflow-hidden flex flex-col items-center justify-center pt-10">
       
       {/* Hero Content - Added background radial gradient for better text legibility */}
       <div className="absolute z-10 text-center pointer-events-none px-6 max-w-5xl mx-auto flex flex-col items-center justify-center h-full w-full">
          
          {/* Text Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.95)_0%,_rgba(255,255,255,0.4)_50%,_transparent_100%)] -z-10 blur-3xl"></div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-slate-300 bg-white/80 backdrop-blur-md shadow-sm animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] text-slate-800 uppercase">
              Unique Pixel Video Studio
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold text-slate-900 tracking-tighter leading-[1.05] mb-8 drop-shadow-sm text-center">
            <span className="block text-slate-600 font-bold text-2xl md:text-4xl mb-4 tracking-tight">1초 뒤에 사라지는 영상이 아닌,</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 pb-2 drop-shadow-sm">
              뇌리에 박히는
            </span>
          </h1>
          
          {/* Sub description */}
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-slate-700 font-semibold leading-relaxed mt-4 tracking-tight break-keep drop-shadow-sm">
            유니픽셀은 차별화된{' '}
            <span className="relative inline-block px-1 mx-1 font-black text-slate-900">
               <span className="absolute bottom-1 left-0 w-full h-[0.4em] bg-blue-300/40 -z-10 rounded-sm"></span>
               역기획(Reverse Planning)
            </span>
            에서 시작합니다.<br className="hidden md:block"/>
            작은 픽셀에도 진심을 담아, 메세지가 세상에 각인되도록 합니다.
          </p>
       </div>

       {/* Interactive Spline Scene - Normal Blend Mode for brightness */}
       <div className="absolute inset-0 z-0 h-full w-full">
         {loading && (
           <div className="absolute inset-0 flex items-center justify-center text-primary/30">
             <Loader2 className="w-8 h-8 animate-spin" />
           </div>
         )}
         <iframe 
            src='https://my.spline.design/nexbotrobotcharacterconcept-E8z5xhSF9lG2oc1kejRtmPxo/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full scale-110 md:scale-105"
            onLoad={() => setLoading(false)}
            title="Unipixel Creative Bot"
            style={{ opacity: loading ? 0 : 1, transition: 'opacity 1s ease-in-out' }}
         ></iframe>
       </div>

       {/* Scroll Indicator - Darker for visibility */}
       <div className="absolute bottom-12 animate-bounce flex flex-col items-center gap-3 opacity-80 z-20 pointer-events-none">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-800">Scroll</span>
          <div className="w-[1px] h-8 bg-slate-800"></div>
       </div>

       {/* Fade gradient for seamless blend */}
       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};