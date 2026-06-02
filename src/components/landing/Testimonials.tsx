import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Jennifer has a remarkable ability to make you feel truly seen and heard. Her gentle yet profound approach helped me navigate a very difficult transition.",
    author: "S. M.",
    role: "Former Client"
  },
  {
    text: "My partner and I were on the brink of separation before we started couples therapy. Jennifer helped us find our way back to each other with compassion and practical tools.",
    author: "J. & D. R.",
    role: "Couples Therapy Clients"
  },
  {
    text: "The safe space Jennifer creates is palpable from the first session. I finally felt comfortable exploring parts of myself I'd hidden for years.",
    author: "A. P.",
    role: "Former Client"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[#7A9E82] text-[#F9F6F1] relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] rounded-full bg-[#1E1E1C] mix-blend-overlay blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#B87040] mix-blend-overlay blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Client Experiences
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Real stories of healing, connection, and transformation.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal 
              key={i} 
              delay={i * 150}
              className="bg-[#F9F6F1]/10 backdrop-blur-md p-8 rounded-2xl border border-[#F9F6F1]/20"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-[#B87040] text-[#B87040]" />
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-8 italic">"{t.text}"</p>
              <div>
                <p className="font-serif text-xl font-medium">{t.author}</p>
                <p className="text-sm opacity-80">{t.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
