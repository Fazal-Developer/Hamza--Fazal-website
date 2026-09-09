# 🏛️ AGENT.MD — PROJECT CONSTITUTION & OPERATIONAL SPECIFICATION
**Target Website:** [https://hamzafazal.deesu.org](https://hamzafazal.deesu.org)  
**Project Workspace:** `D:\antigravity\deesu`  
**Identity:** Muhammad Hamza Fazal — Software Engineer, Native Android Architect, Full-Stack Next.js Developer & Technical SEO Strategist.

---

## 1. Executive Project Overview
This repository powers the official personal brand, software engineering portfolio, case study index, and developer publication for **Muhammad Hamza Fazal**. The platform is built using a modern, performance-first stack:
- **Framework:** Next.js 16 (App Router, Turbopack, Static Site Generation)
- **Frontend Architecture:** React 19, TypeScript 5.7, Tailwind CSS v4, Lucide React
- **Animation & Scroll:** GSAP + ScrollTrigger, Lenis smooth scroll, Motion (Framer Motion)
- **State & Theme Management:** `next-themes` (Light mode default, Dark mode toggle, persisted via localStorage)
- **Deployment Platform:** Vercel Edge Global CDN

> **Note:** This project deliberately does not use 3D/WebGL (no Three.js, React Three Fiber, or `detect-gpu`). An earlier iteration explored a Three.js-based cinematic hero and skills constellation; it was removed by explicit product decision in favor of a lighter, faster, 2D animated experience. Do not reintroduce 3D dependencies unless the site owner explicitly asks for them again.

---

## 2. Design System & Theme Constitution

### 2.1 Aesthetic Philosophy
The visual direction reflects an **elite technology & software engineering command center**. It deliberately avoids generic, templated AI designs (e.g., broadsheet serif defaults or harsh flat monochrome) and instead employs:
- **Depth & Atmosphere:** Deep Obsidian Midnight (`oklch(0.09 0.015 255)`) background with subtle radial cybernetic glow overlays (`rgba(0, 240, 255, 0.07)`).
- **Primary Cyber Accent:** High-luminance Cyber Cyan (`oklch(0.72 0.20 225)`) and Electric Indigo (`#6366F1`) paired with Emerald status indicators (`#10B981`).
- **Glassmorphism & Surfaces:** Crisp hairline borders (`oklch(1 0 0 / 12%)`), backdrop blur (`backdrop-blur-xl`), and translucent card containers (`bg-card/80`).
- **Typography Discipline:** Dual font system featuring `Inter` for hyper-legible body typography and `Space Grotesk` for high-impact monospace technical telemetry and tags.

---

## 3. Animation & Scroll Protocol

All scroll/motion work (hero reveals, the GSAP sticky-stack project showcase, the journey timeline, magnetic buttons, tilt cards) must adhere to the following standards:

1. **Reduced Motion Compliance:**
   - Query `(prefers-reduced-motion: reduce)` before running any GSAP timeline, ScrollTrigger, or Motion animation. If enabled, skip entrance/parallax animation and render content in its final state.
2. **Lifecycle Hygiene:**
   - Every GSAP context/timeline and ScrollTrigger created in a `useEffect` must be reverted/killed in its cleanup function (`gsap.context().revert()`).
3. **Mobile-Safe Scroll Hijacking:**
   - GSAP pin/scrub effects (e.g. the projects sticky-stack) must be gated with `ScrollTrigger.matchMedia()` so pinning is desktop-only; mobile gets normal document flow.
4. **Performance:**
   - Animate `transform`/`opacity` only where possible. Avoid animating layout-affecting properties (`width`, `height`, `top`) in scroll-scrubbed timelines.
5. **Theme Transitions:**
   - Theme switches are handled by `next-themes` + a CSS `transition` on `body`'s background/color; do not add per-component JS-driven theme transition logic.

---

## 4. Installed Skills Catalog & Mandatory Invocation Protocol

The project is equipped with an official suite of **14 specialized agent skills** installed under [`.agents/skills/`](file:///D:/antigravity/deesu/.agents/skills). 

### 4.1 Skill Inventory
| Skill Name | Directory | Primary Specialization |
| :--- | :--- | :--- |
| **`3d-web-experience`** | `.agents/skills/3d-web-experience` | 3D web experience architecture, R3F, Three.js integration & WebGL optimization. |
| **`threejs-fundamentals`** | `.agents/skills/threejs-fundamentals` | Foundational Three.js scene graphs, camera rigs, renderer configurations. |
| **`threejs-animation`** | `.agents/skills/threejs-animation` | Clock delta loops, procedural rotation, spring physics, and lerping. |
| **`threejs-geometry`** | `.agents/skills/threejs-geometry` | Procedural meshes, buffer attributes, parametric mathematical surfaces. |
| **`threejs-interaction`** | `.agents/skills/threejs-interaction` | Raycasting, mouse parallax vectors, screen projection, pointer events. |
| **`threejs-lighting`** | `.agents/skills/threejs-lighting` | Multi-point cinematic lighting rigs, directional rim lights, ambient balance. |
| **`threejs-loaders`** | `.agents/skills/threejs-loaders` | GLTF/GLB asset management, progressive loading, Draco compression. |
| **`threejs-materials`** | `.agents/skills/threejs-materials` | Physical materials (PBR), metallic/roughness properties, wireframe glows. |
| **`threejs-postprocessing`** | `.agents/skills/threejs-postprocessing` | Bloom filters, chromatic aberration, depth of field passes. |
| **`threejs-shaders`** | `.agents/skills/threejs-shaders` | Custom GLSL vertex and fragment shaders. |
| **`threejs-textures`** | `.agents/skills/threejs-textures` | Procedural canvas textures, normal maps, roughness maps. |
| **`frontend-design`** | `.agents/skills/frontend-design` | Distinctive visual identities, bespoke typography pairing, avoiding AI clichés. |
| **`design-taste-frontend`** | `.agents/skills/design-taste-frontend` | Tasteful micro-interactions, layout rhythm, spacing precision, visual weight. |
| **`nextjs-app-router-patterns`** | `.agents/skills/nextjs-app-router-patterns` | Next.js 16 App Router conventions, metadata API, SSG/ISR, streaming. |

### 4.2 Mandatory Invocation Directive
> **CRITICAL RULE FOR ALL AGENTS & DEVELOPERS:**  
> Whenever implementing, refactoring, or optimizing any module in this codebase, you **MUST** consult and invoke the corresponding skill definition from `.agents/skills/<skill-name>/SKILL.md`.  
> - The `3d-web-experience` and `threejs-*` skills are currently **not applicable** — this project has no 3D/WebGL surface (see Section 1). Leave them installed but do not invoke them unless 3D is explicitly requested again.
> - When updating UI components, color palettes, or layout: Read and follow `frontend-design` and `design-taste-frontend`.  
> - When updating pages, routing, layouts, or SEO: Read and follow `nextjs-app-router-patterns`.

---

## 5. Technical SEO & Hardening Verification Checklist
- **JSON-LD Schema:** Every page must preserve structured metadata (Person, Article, SoftwareApplication, BreadcrumbList).
- **Canonical URLs:** Every route must export `alternates.canonical` matching `https://hamzafazal.deesu.org/<path>`.
- **H1 Integrity:** Homepage and About page must include the full name `"Muhammad Hamza Fazal"`.
- **AI/LLM Discovery:** Maintain [`public/llms.txt`](file:///D:/antigravity/deesu/public/llms.txt) with accurate career, project, and stack descriptions.
- **Production Build:** Always ensure `npm run build` exits with code `0` and all routes are statically generated without type or lint errors.
