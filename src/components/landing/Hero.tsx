import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#1E1E1C]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat mix-blend-luminosity"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1E1E1C]/80 via-[#1E1E1C]/50 to-[#1E1E1C]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 pt-12 pb-20">
            <ScrollReveal>
              <span className="inline-block py-1 px-3 rounded-full border border-[#7A9E82]/30 bg-[#7A9E82]/10 text-[#7A9E82] font-sans text-sm tracking-widest uppercase mb-6">
                Online Therapy in California
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F9F6F1] leading-[1.1] mb-8">
                Finally feel like <br className="hidden md:block" />
                <span className="italic text-[#B87040]">yourself</span> again.
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="font-sans text-lg md:text-xl text-[#F9F6F1]/80 max-w-2xl leading-relaxed mb-10">
                You don't have to carry the weight alone. Through compassionate, evidence-based therapy, we'll untangle the overwhelm and help you build a life that feels deeply authentic and grounded.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a 
                  href="#contact" 
                  className="group relative flex items-center justify-center gap-3 bg-[#F9F6F1] text-[#1E1E1C] px-8 py-4 rounded-full font-sans text-lg hover:bg-[#7A9E82] hover:text-[#F9F6F1] transition-all duration-300 w-full sm:w-auto"
                >
                  Book Your Free Consultation
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                
                <div className="flex items-center gap-4 text-[#F9F6F1]/70 font-sans text-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-[#3A3A38] border-2 border-[#1E1E1C] flex items-center justify-center text-[10px]">
                        <Star size={12} className="text-[#B87040] fill-[#B87040]" />
                      </div>
                    ))}
                  </div>
                  <p>Trusted by 100+ clients<br/>across California</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="font-sans text-xs tracking-widest uppercase text-[#F9F6F1]/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#F9F6F1]/50 to-transparent" />
      </motion.div>
    </section>
  );
};
