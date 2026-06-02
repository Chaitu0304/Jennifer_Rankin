import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-32 bg-[#1E1E1C] text-[#F9F6F1] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-luminosity" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto font-light">
            Take the first step toward a more fulfilling life. Contact me today to schedule a complimentary 15-minute consultation.
          </p>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#B87040] text-white rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center font-medium text-lg">
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};
