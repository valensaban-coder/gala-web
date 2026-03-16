"use client";

import Reveal from "./Reveal";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import {
  proofLogos, stats, categories, differentiators,
  testimonials, processSteps, siteConfig,
  contactOccasions, contactQuantities, footerLinks,
} from "@/data/content";

// ═══════════════════════════════════════════
// SOCIAL PROOF
// ═══════════════════════════════════════════
export function SocialProof() {
  return (
    <section className="bg-white py-10 border-b border-gala-stone">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center gap-12 overflow-hidden">
        <span className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-gala-charcoal/35 whitespace-nowrap">
          Confían en nosotros
        </span>
        <div className="flex items-center gap-12 flex-1 overflow-hidden">
          {proofLogos.map((logo) => (
            <span
              key={logo}
              className="text-[0.85rem] font-bold tracking-[0.15em] uppercase text-gala-charcoal/15 whitespace-nowrap hover:text-gala-red transition-colors cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════
// ABOUT
// ═══════════════════════════════════════════
export function About() {
  return (
    <section className="py-20 lg:py-36 bg-gala-cream" id="nosotros">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Visual */}
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] bg-gala-stone overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-gala-red/10">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="8" y="16" width="48" height="36" rx="2" />
                  <circle cx="24" cy="30" r="6" />
                  <path d="M8 44l16-12 10 8 14-16 8 10" />
                </svg>
                <span className="text-[0.7rem] tracking-[0.15em] uppercase">
                  Foto equipo Gala
                </span>
              </div>
            </div>
            <div className="absolute -top-5 -right-5 w-[60%] h-[60%] border-[1.5px] border-gala-red/15 -z-10" />
            <div className="absolute -bottom-4 -left-4 bg-gala-red p-6 z-10">
              <div className="font-display text-5xl font-light text-white leading-none">
                {siteConfig.yearsOfExperience}
              </div>
              <div className="text-[0.65rem] tracking-[0.15em] uppercase text-white/70 mt-1">
                Años de trayectoria
              </div>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.2}>
          <SectionLabel>Nuestra historia</SectionLabel>
          <h2 className="font-display font-light text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.15] text-gala-charcoal mb-6">
            Tres generaciones
            <br />
            de <em className="italic text-gala-red">excelencia</em>
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-gala-charcoal/70 mb-6">
            En 1987, nuestra fundadora comenzó con una convicción simple: un
            regalo corporativo debería ser tan memorable como la empresa que lo
            entrega. Casi cuatro décadas después, esa filosofía sigue siendo
            nuestra brújula.
          </p>
          <p className="text-[1.05rem] leading-relaxed text-gala-charcoal/70 mb-10">
            Hoy, desde nuestras oficinas en el corazón de Buenos Aires,
            asesoramos a las empresas más importantes de Argentina en el arte de
            regalar con intención.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gala-stone">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[2.5rem] font-light text-gala-red leading-none">
                  {s.number}
                  {s.suffix}
                </div>
                <div className="text-[0.75rem] text-gala-charcoal/50 mt-1.5 whitespace-pre-line">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════
// CATEGORIES
// ═══════════════════════════════════════════
const cardGradients = [
  "from-[#8B0000] via-[#B71C1C] to-[#6D0000]",
  "from-[#2C1A1A] via-[#4A2020] to-[#1A1214]",
  "from-[#B71C1C] via-[#8B0000] to-[#C62828]",
  "from-[#3D2020] via-[#2C1A1A] to-[#4A2525]",
  "from-[#6D0000] via-[#8B0000] to-[#4A0000]",
  "from-[#C62828] via-[#B71C1C] to-[#8B0000]",
  "from-[#1A1214] via-[#3D2020] to-[#2C1A1A]",
  "from-[#4A2020] via-[#6D0000] to-[#3D2020]",
];

export function Categories() {
  return (
    <section className="py-20 lg:py-36 bg-white" id="catalogo">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <SectionLabel center>Nuestro catálogo</SectionLabel>
            <h2 className="font-display font-light text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.15] text-gala-charcoal">
              Regalos corporativos
              <br />
              para cada <em className="italic text-gala-red">ocasión</em>
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i % 4 * 0.1}>
              <a
                href={`/catalogo/${cat.slug}`}
                className="group relative aspect-[3/4] overflow-hidden block"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cardGradients[i]} transition-transform duration-700 ease-out group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1214]/90 via-transparent to-transparent z-[1]" />
                {/* Hover red line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gala-red-bright z-[3] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
                {/* Arrow */}
                <div className="absolute top-5 right-5 w-10 h-10 border border-white/30 flex items-center justify-center z-[2] opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 z-[2]">
                  <div className="font-display text-[1.4rem] text-white mb-1">
                    {cat.name}
                  </div>
                  <div className="text-[0.7rem] tracking-[0.12em] uppercase text-white/40">
                    {cat.count} productos
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════
// WHY GALA
// ═══════════════════════════════════════════
export function WhyGala() {
  return (
    <section className="py-20 lg:py-36 bg-gala-dark relative overflow-hidden" id="por-que-gala">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-gala-red/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-gala-red/5 rounded-full blur-[120px]" />
      </div>
      <div className="absolute inset-0 bg-diagonal-lines" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <SectionLabel center light>Nuestros diferenciales</SectionLabel>
            <h2 className="font-display font-light text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.15] text-white mb-4">
              Por qué las empresas
              <br />
              eligen <em className="italic text-gala-red-bright">Gala</em>
            </h2>
            <p className="text-[1.05rem] leading-relaxed text-white/45">
              No solo vendemos productos. Diseñamos experiencias de regalo que
              construyen relaciones.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((d, i) => (
            <Reveal key={d.num} delay={i % 3 * 0.1}>
              <div className="group p-10 border border-white/[0.06] bg-white/[0.02] relative transition-all duration-500 hover:border-gala-red/30 hover:bg-gala-red/5 hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-gala-red transition-all duration-600 group-hover:w-full" />
                <div className="font-display text-5xl font-light text-gala-red/20 leading-none mb-6 group-hover:text-gala-red-bright/40 transition-colors">
                  {d.num}
                </div>
                <h3 className="font-display text-[1.4rem] text-white mb-4">
                  {d.title}
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-white/40">
                  {d.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════
export function Testimonials() {
  return (
    <section className="py-20 lg:py-36 bg-gala-cream" id="casos">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-[600px] mb-16">
            <SectionLabel>Casos de éxito</SectionLabel>
            <h2 className="font-display font-light text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.15] text-gala-charcoal">
              Lo que dicen
              <br />
              nuestros <em className="italic text-gala-red">clientes</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i % 2 * 0.1}>
              <div className="p-10 bg-white border border-gala-stone relative transition-all duration-400 hover:border-gala-red hover:shadow-[0_20px_60px_rgba(183,28,28,0.06)]">
                <span className="absolute top-5 right-7 font-display text-7xl text-gala-red/10 leading-none">
                  &ldquo;
                </span>
                <p className="text-base leading-relaxed text-gala-charcoal/65 italic mb-8">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gala-red flex items-center justify-center text-white font-display text-lg">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[0.9rem] text-gala-charcoal">
                      {t.name}
                    </div>
                    <div className="text-[0.75rem] text-gala-charcoal/40">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════
// PERSONALIZATION
// ═══════════════════════════════════════════
export function Personalization() {
  return (
    <section className="py-20 lg:py-36 bg-white" id="personalizacion">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <Reveal>
          <SectionLabel>Proceso de personalización</SectionLabel>
          <h2 className="font-display font-light text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.15] text-gala-charcoal mb-10">
            Tu marca en
            <br />
            cada <em className="italic text-gala-red">detalle</em>
          </h2>
          <div className="flex flex-col gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="flex gap-5 items-start group">
                <div className="w-12 h-12 min-w-[3rem] border-[1.5px] border-gala-red flex items-center justify-center font-display text-xl text-gala-red transition-all group-hover:bg-gala-red group-hover:text-white">
                  {step.num}
                </div>
                <div>
                  <div className="font-display text-xl font-medium text-gala-charcoal mb-1">
                    {step.title}
                  </div>
                  <div className="text-[0.9rem] leading-relaxed text-gala-charcoal/55">
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative aspect-square bg-gala-red flex items-center justify-center overflow-hidden">
            <div className="absolute inset-6 border border-white/15" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.08),transparent_50%),radial-gradient(ellipse_at_70%_70%,rgba(0,0,0,0.15),transparent_50%)]" />
            <div className="text-center relative z-10">
              <h3 className="font-display text-[2.2rem] font-light text-white leading-[1.3]">
                Grabado láser
                <br />
                Serigrafía
                <br />
                Sublimación
                <br />
                <em className="italic opacity-70">Packaging</em>
                <br />a medida
              </h3>
              <p className="mt-6 text-[0.75rem] tracking-[0.2em] uppercase text-white/40">
                Técnicas premium de personalización
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════
// CTA BANNER
// ═══════════════════════════════════════════
export function CtaBanner() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-20 lg:py-32 bg-gala-red relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.06),transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
      <div className="relative z-10 max-w-[700px] mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-display font-light text-[clamp(2rem,5vw,3.5rem)] text-white leading-[1.2] mb-6">
            ¿Listo para transformar la manera en que tu empresa{" "}
            <em className="italic">regala</em>?
          </h2>
          <p className="text-base text-white/65 mb-10 leading-relaxed">
            Agendá una llamada con nuestro equipo y recibí una propuesta
            personalizada sin compromiso.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollTo("#contacto")}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-gala-red text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-all hover:bg-gala-cream hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] group"
            >
              Agendar llamada
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center gap-2.5 px-8 py-4 border-[1.5px] border-white/40 text-white text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-all hover:bg-white/15 hover:border-white/60">
              Descargar catálogo PDF
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════
// CONTACT
// ═══════════════════════════════════════════
export function Contact() {
  return (
    <section className="py-20 lg:py-36 bg-gala-cream" id="contacto">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-24">
        <Reveal>
          <SectionLabel>Contacto</SectionLabel>
          <h2 className="font-display font-light text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.15] text-gala-charcoal mb-6">
            Hablemos de tu
            <br />
            próximo <em className="italic text-gala-red">proyecto</em>
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-gala-charcoal/65 mb-8">
            Completá el formulario y nuestro equipo te contactará en menos de 24
            horas hábiles con una propuesta a medida.
          </p>
          <div className="flex flex-col gap-6 mt-8">
            {[
              { icon: Mail, label: "Email", value: siteConfig.email },
              { icon: MapPin, label: "Oficina", value: siteConfig.address },
              { icon: Phone, label: "WhatsApp", value: siteConfig.phone },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-11 h-11 min-w-[2.75rem] bg-gala-red flex items-center justify-center">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-[0.7rem] tracking-[0.1em] uppercase text-gala-charcoal/40">
                    {label}
                  </div>
                  <div className="text-[0.95rem] text-gala-charcoal font-medium">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <form className="bg-white p-10 border border-gala-stone" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <FormField label="Nombre" placeholder="Tu nombre" />
              <FormField label="Empresa" placeholder="Nombre de la empresa" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <FormField label="Email corporativo" placeholder="mail@empresa.com" type="email" />
              <FormField label="Teléfono" placeholder="+54 11..." type="tel" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <FormSelect label="Ocasión" options={contactOccasions} />
              <FormSelect label="Cantidad estimada" options={contactQuantities} />
            </div>
            <div className="mb-5">
              <label className="block text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gala-charcoal/50 mb-2">
                Contanos sobre tu proyecto
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gala-stone bg-gala-cream font-body text-[0.9rem] text-gala-charcoal outline-none transition-all focus:border-gala-red focus:ring-[3px] focus:ring-gala-red/[0.08] resize-y min-h-[120px]"
                placeholder="¿Qué tenés en mente? Presupuesto orientativo, fecha de entrega, detalles de personalización..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gala-red text-white text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-all hover:bg-gala-red-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gala-red/25 group"
            >
              Enviar consulta
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════
export function Footer() {
  return (
    <footer className="bg-gala-dark pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/[0.06]">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-display text-3xl font-medium tracking-[0.15em] text-white mb-4">
              GALA<span className="text-gala-red-bright">.</span>
            </div>
            <div className="font-display text-base italic text-white/30 mb-6">
              {siteConfig.slogan}
            </div>
            <div className="text-[0.85rem] leading-relaxed text-white/25 whitespace-pre-line">
              {siteConfig.addressFull}
            </div>
          </div>
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <div className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-gala-red-bright mb-6">
                {key === "empresa" ? "Empresa" : key === "catalogo" ? "Catálogo" : "Servicios"}
              </div>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[0.85rem] text-white/35 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4 pt-6">
          <div className="text-[0.75rem] text-white/15">
            &copy; {new Date().getFullYear()} Gala Regalos Corporativos. Todos
            los derechos reservados.
          </div>
          <div className="flex gap-8">
            <a href="/terminos" className="text-[0.75rem] text-white/15 hover:text-white/40 transition-colors">
              Términos
            </a>
            <a href="/privacidad" className="text-[0.75rem] text-white/15 hover:text-white/40 transition-colors">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════
// SHARED UI
// ═══════════════════════════════════════════
function SectionLabel({
  children,
  center,
  light,
}: {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 mb-6 text-[0.7rem] font-semibold tracking-[0.25em] uppercase ${
        center ? "justify-center" : ""
      } ${light ? "text-gala-red-light" : "text-gala-red"}`}
    >
      <span
        className={`w-8 h-[2px] ${light ? "bg-gala-red-light" : "bg-gala-red"}`}
      />
      {children}
    </div>
  );
}

function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gala-charcoal/50 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gala-stone bg-gala-cream font-body text-[0.9rem] text-gala-charcoal outline-none transition-all focus:border-gala-red focus:ring-[3px] focus:ring-gala-red/[0.08]"
      />
    </div>
  );
}

function FormSelect({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gala-charcoal/50 mb-2">
        {label}
      </label>
      <select className="w-full px-4 py-3 border border-gala-stone bg-gala-cream font-body text-[0.9rem] text-gala-charcoal outline-none transition-all focus:border-gala-red focus:ring-[3px] focus:ring-gala-red/[0.08] appearance-none">
        <option value="">Seleccionar...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
