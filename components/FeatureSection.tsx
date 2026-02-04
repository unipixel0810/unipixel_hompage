import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse?: boolean;
  points?: string[];
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  subtitle, 
  description, 
  image,
  reverse = false,
  points = []
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-32 items-center`}>
      {/* Visual Side */}
      <div className="w-full lg:w-1/2 group relative">
        <div className="overflow-hidden rounded-[2rem] shadow-2xl bg-slate-200 aspect-video relative ring-1 ring-black/5 z-10">
           <img 
             src={image} 
             alt={title}
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
           
           {/* Floating Badge */}
           <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg border border-white/50">
             <span className="text-slate-900 font-bold text-sm tracking-wide">{subtitle}</span>
           </div>
        </div>
        
        {/* Decorative Element - Sophisticated Gradient Blob */}
        <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl -z-10`}></div>
        <div className={`absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl -z-10`}></div>
      </div>

      {/* Text Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-4">
        <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.2] text-slate-900">{title}</h3>
        <p className="text-xl text-slate-700 font-medium leading-relaxed mb-10 whitespace-pre-line">
          {description}
        </p>
        
        {points.length > 0 && (
          <div className="space-y-5">
             {points.map((point, idx) => (
               <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 transition-colors hover:border-indigo-200 hover:shadow-md">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-indigo-700" />
                  </div>
                  <span className="text-lg text-slate-800 font-semibold">{point}</span>
               </div>
             ))}
          </div>
        )}
      </div>
    </div>
  );
};