"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/content";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="inicio">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gala-dark via-gala-red-deep to-[#C62828]" />
      <div className="absolute inset-0 bg-diagonal-lines" />

      {/* Floating circles */}
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] border border-white/[0.04] rounded-full animate-float" />
      <div className="absolute bottom-[15%] -left-[5%] w-[300px] h-[300px] border border-gala-red-light/[0.06] rounded-full animate-float-reverse" />

      {/* Radial glows */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-gala-red-bright/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-white/[0.03] rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 py-32 lg:py-40">
        <motion.div
          {...fadeUp(0.3)}
          className="inline-flex items-center gap-3 px-4 py-2 border border-gala-red-light/20 mb-10"
        >
          <span className="w-1.5 h-1.5 bg-gala-red-light rounded-full animate-pulse-dot" />
          <span className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-gala-red-light">
            Desde {siteConfig.foundedYear} — {siteConfig.yearsOfExperience} años de trayectoria
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.5)}
          className="font-display font-light text-[clamp(3rem,7vw,5.5rem)] leading-[1.05] text-white mb-8 max-w-[800px]"
        >
          El arte de regalar
          <br />
          con{" "}
          <em className="italic font-normal relative">
            estrategia
            <span className="absolute bottom-[0.08em] left-0 right-0 h-[2px] bg-gala-red-light/40" />
          </em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.7)}
          className="text-lg font-light leading-relaxed text-white/60 max-w-[520px] mb-12"
        >
          Transformamos cada obsequio corporativo en una pieza de comunicación
          que fortalece vínculos, comunica valores y genera impacto duradero.
        </motion.p>

        <motion.div {...fadeUp(0.9)} className="flex gap-4 flex-wrap">
          <button
            onClick={() => scrollTo("#contacto")}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-gala-red text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-all hover:bg-gala-cream hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 group"
          >
            Solicitar presupuesto
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          <button
            onClick={() => scrollTo("#catalogo")}
            className="inline-flex items-center gap-2.5 px-8 py-4 border-[1.5px] border-white/50 text-white text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-all hover:bg-white hover:text-gala-red"
          >
            Ver catálogo
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-10 bg-gradient-to-b from-gala-red-light/60 to-transparent animate-scroll-pulse" />
        <span className="text-white/30 text-[0.65rem] tracking-[0.2em] uppercase">
          Descubrí más
        </span>
      </div>
    </section>
  );
}
