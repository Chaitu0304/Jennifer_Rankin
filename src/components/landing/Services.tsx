import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { User, Users, HeartHandshake } from "lucide-react";

const services = [
  {
    title: "Individual Therapy",
    description: "One-on-one sessions focused on your unique needs, whether you're navigating anxiety, depression, life transitions, or seeking personal growth.",
    icon: <User className="w-8 h-8 text-[#B87040]" />,
    duration: "50 mins",
    price: "$150"
  },
  {
    title: "Couples Therapy",
    description: "Guidance to help you and your partner improve communication, resolve conflicts, and rebuild intimacy in a safe, neutral space.",
    icon: <Users className="w-8 h-8 text-[#B87040]" />,
    duration: "60 mins",
    price: "$180"
  },
  {
    title: "Family Therapy",
    description: "Collaborative sessions to address family dynamics, improve relationships, and foster understanding among family members.",
    icon: <HeartHandshake className="w-8 h-8 text-[#B87040]" />,
    duration: "75 mins",
    price: "$200"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#F9F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1E1E1C] mb-6">
            Services & Specialities
          </h2>
          <p className="text-lg text-[#1E1E1C]/70">
            Providing a safe, supportive environment for healing and growth.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal 
              key={service.title} 
              delay={index * 150}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[#7A9E82]/20 hover:border-[#7A9E82] transition-colors duration-300"
            >
              <div className="mb-6 bg-[#F9F6F1] w-16 h-16 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl text-[#1E1E1C] mb-4">{service.title}</h3>
              <p className="text-[#1E1E1C]/70 mb-6 line-clamp-3">
                {service.description}
              </p>
              <div className="flex items-center justify-between text-sm font-medium text-[#1E1E1C]/60 pt-6 border-t border-[#1E1E1C]/10">
                <span>{service.duration}</span>
                <span>{service.price}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
