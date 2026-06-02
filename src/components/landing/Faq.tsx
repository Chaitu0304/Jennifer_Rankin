import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you take insurance?",
    answer: "I am an out-of-network provider. I can provide you with a superbill to submit to your insurance company for potential reimbursement depending on your PPO plan's out-of-network benefits."
  },
  {
    question: "How long does therapy take?",
    answer: "The length of therapy varies for each individual and couple. Some clients find resolution in a few months, while others prefer ongoing, long-term support. We will regularly check in on your progress and adjust as needed."
  },
  {
    question: "Do you offer virtual sessions?",
    answer: "Yes, I offer both in-person sessions at my office and secure, HIPAA-compliant virtual sessions for residents of California."
  },
  {
    question: "What is your cancellation policy?",
    answer: "I require a 48-hour notice for cancellations. Sessions cancelled with less than 48 hours notice will be charged the full session fee."
  }
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1E1E1C] mb-4">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 100}>
                <div 
                  className={`border ${isOpen ? 'border-[#7A9E82]' : 'border-[#1E1E1C]/10'} rounded-2xl overflow-hidden transition-colors duration-300`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between bg-white focus:outline-none"
                  >
                    <span className="font-serif text-xl text-[#1E1E1C]">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ChevronDown className="w-5 h-5 text-[#1E1E1C]/50" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-5 pt-0 text-[#1E1E1C]/70 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
