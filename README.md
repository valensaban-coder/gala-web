# GALA — Regalos Corporativos

**El arte de regalar con estrategia**

Web institucional de GALA Regalos Corporativos. Next.js 14 + Tailwind CSS + Framer Motion.

## Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Estilos:** Tailwind CSS con paleta de marca (rojo y blanco)
- **Animaciones:** Framer Motion (scroll reveal, fade-in)
- **Iconos:** Lucide React
- **Fonts:** Cormorant Garamond (display) + DM Sans (body) via Google Fonts
- **Deploy:** Render (standalone output)

## Setup local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Deploy en Render

1. Pushear este repo a GitHub
2. En Render, crear un **Web Service**
3. Conectar el repo de GitHub
4. Configurar:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `node .next/standalone/server.js`
   - **Environment Variables:**
     - `PORT` = `3000`
     - `HOSTNAME` = `0.0.0.0`

O usar el `render.yaml` incluido para Blueprint deploy.

## Estructura

```
src/
├── app/
│   ├── globals.css      # Tailwind + custom styles
│   ├── layout.tsx       # Root layout con fonts y metadata SEO
│   └── page.tsx         # Home page (compone todas las secciones)
├── components/
│   ├── Navbar.tsx       # Nav fija con scroll effect + mobile
│   ├── Hero.tsx         # Hero con animaciones Framer Motion
│   ├── Reveal.tsx       # Wrapper reutilizable de scroll-reveal
│   └── Sections.tsx     # Todas las secciones de la landing
├── data/
│   └── content.ts       # TODO el contenido hardcodeado (CMS-ready)
└── lib/
    └── hooks.ts         # useScrollReveal hook
```

## Conectar CMS después

Todo el contenido está centralizado en `src/data/content.ts`. Para migrar a un headless CMS (Sanity, Strapi, etc.):

1. Crear los schemas en el CMS con la misma estructura
2. Reemplazar los imports de `@/data/content` por fetches al CMS
3. Opcional: usar ISR (Incremental Static Regeneration) para cache

## Colores de marca

| Color | Hex | Uso |
|-------|-----|-----|
| Rojo Gala | #B71C1C | Primario, CTAs, acentos |
| Rojo Profundo | #8B0000 | Hover, gradientes |
| Rojo Brillante | #D32F2F | Highlights |
| Blanco Calido | #FAF7F5 | Fondos |
| Gris Piedra | #E8E3DF | Bordes, neutro |
| Carbon | #2D2D2D | Texto |
| Oscuro Calido | #1A1214 | Secciones oscuras |
