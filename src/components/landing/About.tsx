import React from 'react';
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F9F6F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <ScrollReveal>
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-[#7A9E82]/10 rounded-2xl transform -rotate-3 transition-transform duration-700 hover:rotate-0" />
              
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url(/jennifer-portrait.png)', backgroundColor: '#d1d1d1' }}
                />
                <div className="absolute inset-0 bg-[#1E1E1C]/10 mix-blend-multiply" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 md:-right-10 bg-[#1E1E1C] text-[#F9F6F1] p-6 rounded-xl shadow-xl max-w-[200px]">
                <div className="font-serif text-3xl mb-1 text-[#B87040]">12+</div>
                <div className="font-sans text-sm tracking-wide text-[#F9F6F1]/80">
                  Years of clinical experience helping clients thrive.
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:pl-8 lg:pr-4">
            <ScrollReveal delay={0.1}>
              <span className="inline-block py-1 px-3 rounded-full border border-[#7A9E82]/30 bg-[#7A9E82]/10 text-[#7A9E82] font-sans text-sm tracking-widest uppercase mb-6">
                Meet Jennifer
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1E1E1C] leading-[1.1] mb-8">
                Hi, I'm Jennifer. <br />
                <span className="italic text-[#B87040]">I'm so glad you're here.</span>
              </h2>
            </ScrollReveal>

            <div className="space-y-6 font-sans text-lg text-[#1E1E1C]/70 leading-relaxed mb-10">
              <ScrollReveal delay={0.3}>
                <p>
                  As a Licensed Marriage and Family Therapist (LMFT), I've spent over a decade helping individuals and couples navigate life's most challenging transitions, heal from past wounds, and rebuild connection.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p>
                  My approach is grounded in empathy, neuroscience, and evidence-based practices like CBT and mindfulness. But more importantly, it's grounded in your unique experience. I don't believe in a one-size-fits-all approach to therapy.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <p>
                  When I'm not in session, you can find me hiking the coastal trails of California, trying to perfect my sourdough recipe, or chasing after my golden retriever, Barnaby.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.6}>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 text-[#1E1E1C] font-sans font-medium text-lg hover:text-[#7A9E82] transition-colors group border-b-2 border-[#1E1E1C]/20 hover:border-[#7A9E82] pb-1"
              >
                Let's see if we're a good fit
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
