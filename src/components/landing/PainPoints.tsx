import React from 'react';
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const painPoints = [
  {
    title: "Overwhelmed & Exhausted",
    description: "You're doing everything \"right\" but still feel like you're drowning. The mental load is heavy, and resting feels impossible.",
  },
  {
    title: "Anxious & Spiraling",
    description: "Your mind won't shut off. You're constantly replaying past conversations or worrying about the future, unable to be present.",
  },
  {
    title: "Disconnected & Numb",
    description: "You feel disconnected from your partner, your friends, and even yourself. Going through the motions instead of truly living.",
  },
  {
    title: "Stuck in Old Patterns",
    description: "You keep finding yourself in the same arguments, the same relationships, or the same self-sabotaging behaviors.",
  }
];

export const PainPoints = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F9F6F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="lg:sticky lg:top-32 self-start">
            <ScrollReveal>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1E1E1C] leading-[1.1] mb-6">
                Does any of this <br />
                <span className="italic text-[#7A9E82]">feel like you?</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-sans text-lg text-[#1E1E1C]/70 mb-8 max-w-md">
                It's exhausting trying to hold it all together. But acknowledging where you are right now is the first step toward feeling better. You don't have to stay stuck here.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="hidden lg:block w-24 h-[1px] bg-[#B87040]" />
            </ScrollReveal>
          </div>

          <div className="space-y-8 md:space-y-12">
            {painPoints.map((point, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group border-l-2 border-[#1E1E1C]/10 pl-6 md:pl-8 hover:border-[#7A9E82] transition-colors duration-500">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1E1E1C] mb-3 group-hover:text-[#7A9E82] transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="font-sans text-[#1E1E1C]/70 text-lg leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
