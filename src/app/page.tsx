import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  SocialProof,
  About,
  Categories,
  WhyGala,
  Testimonials,
  Personalization,
  CtaBanner,
  Contact,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <About />
      <Categories />
      <WhyGala />
      <Testimonials />
      <Personalization />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  );
}
