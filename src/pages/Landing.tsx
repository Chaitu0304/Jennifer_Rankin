import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Approach } from "@/components/landing/Approach";
import { Process } from "@/components/landing/Process";
import { Services } from "@/components/landing/Services";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Landing() {
  return (
    <div className="theme-jennifer min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Approach />
      <Process />
      <Services />
      <Testimonials />
      <Faq />
      <CTA />
      <Footer />
    </div>
  );
}
