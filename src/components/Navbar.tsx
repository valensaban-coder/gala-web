"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/data/content";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/97 backdrop-blur-xl shadow-[0_1px_0_theme(colors.gala.stone)] py-3"
            : "py-5"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className={`font-display text-[1.8rem] font-medium tracking-[0.15em] transition-colors duration-400 ${
              scrolled ? "text-gala-charcoal" : "text-white"
            }`}
          >
            {siteConfig.name}
            <span className={scrolled ? "text-gala-red" : "text-gala-red-light"}>
              .
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleClick(link.href)}
                  className={`text-[0.75rem] font-medium tracking-[0.15em] uppercase relative transition-colors group ${
                    scrolled
                      ? "text-gala-charcoal/60 hover:text-gala-charcoal"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gala-red transition-all duration-400 group-hover:w-full" />
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleClick("#contacto")}
                className="px-5 py-2.5 bg-gala-red text-white text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition-all hover:bg-gala-red-deep hover:-translate-y-px hover:shadow-lg hover:shadow-gala-red/25"
              >
                Solicitar Presupuesto
              </button>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? (
              <X className={scrolled ? "text-gala-charcoal" : "text-white"} size={24} />
            ) : (
              <Menu className={scrolled ? "text-gala-charcoal" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-gala-dark pt-24 px-8"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="font-display text-2xl text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-4">
                <button
                  onClick={() => handleClick("#contacto")}
                  className="w-full py-4 bg-gala-red text-white text-sm font-semibold tracking-[0.12em] uppercase"
                >
                  Solicitar Presupuesto
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
