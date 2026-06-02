import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { PainPoints } from "@/components/landing/PainPoints";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { CTA } from "@/components/landing/CTA";
import { ChatWidget } from "@/components/landing/ChatWidget";
import { Footer } from "@/components/landing/Footer";

export default function Landing() {
  return (
    <div className="theme-jennifer min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <About />
      <Services />
      <Testimonials />
      <Faq />
      <CTA />
      <ChatWidget />
      <Footer />
    </div>
  );
}
