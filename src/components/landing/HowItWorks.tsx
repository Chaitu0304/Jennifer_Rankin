import React from 'react';
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Untangle the Overwhelm",
    description: "We'll start by making sense of the chaos. You'll have a safe, non-judgmental space to unload everything you've been carrying, so we can identify the root causes of your stress and anxiety.",
  },
  {
    number: "02",
    title: "Build Your Toolkit",
    description: "Insight isn't enough—you need practical strategies. We'll develop customized coping skills, somatic practices, and communication tools that fit your actual life, not just in theory.",
  },
  {
    number: "03",
    title: "Create Lasting Change",
    description: "As you implement these changes, we'll work on deepening your self-compassion and shifting old patterns. The goal isn't just to feel better temporarily, but to build a life that feels authentic and sustainable.",
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-[#1E1E1C] text-[#F9F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <span className="inline-block py-1 px-3 rounded-full border border-[#B87040]/30 text-[#B87040] font-sans text-sm tracking-widest uppercase mb-6">
              The Clarity Method
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              A clear path to <br />
              <span className="italic text-[#7A9E82]">healing & growth</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-lg text-[#F9F6F1]/70 leading-relaxed">
              Therapy shouldn't feel like wandering in the dark. We'll use a structured but flexible approach to help you move from overwhelmed to empowered.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1 + 0.2}>
              <div className="relative group">
                <div className="text-6xl md:text-8xl font-serif text-[#F9F6F1]/5 mb-6 group-hover:text-[#7A9E82]/10 transition-colors duration-500">
                  {step.number}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="font-sans text-[#F9F6F1]/60 text-lg leading-relaxed relative z-10">
                  {step.description}
                </p>
                {/* Connecting line for desktop */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[80%] w-[60%] h-[1px] bg-gradient-to-r from-[#F9F6F1]/10 to-transparent" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
