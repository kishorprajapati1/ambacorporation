# Amba Corporation — Redesigned Pharmaceutical Machinery Web Platform

A modern, high-performance, SEO-optimized web application engineered for **Amba Corporation** (Ahmedabad, Gujarat, India).

## 🚀 Key Highlights & Redesign Upgrades

1. **Blazing Fast Performance**: Built on Vite + React + Tailwind CSS. Replaces bloated WordPress/WPBakery theme with sub-second page loads, boosting Google Core Web Vitals to 98+.
2. **SEO & Structured Data (JSON-LD)**:
   - `Organization` & `LocalBusiness` schema with Vatva GIDC geo-coordinates, GST (`24CVQPM6228R1ZN`), and contact lines.
   - `FAQPage` schema for instant Google Rich Results.
   - Canonical tags, Open Graph meta tags, and `sitemap.xml`.
3. **Conversion Rate Optimization (CRO)**:
   - Dynamic **Request for Quote (RFQ)** modal pre-filled with machine specifications.
   - One-click **WhatsApp Direct Lead Integration** (+91 72270 77623).
   - Printable specification sheets with engineering parameters.
4. **Interactive Machinery Catalog**:
   - Live category filtering (Injectables, Syrups, VTM Diagnostics, Labelling).
   - Instant search across models, speeds, container sizes, and keywords.
5. **Interactive Global Export Map**:
   - Showcase of installations across 25+ countries in Middle East, Africa, Asia, Americas, and Europe.
   - Export seaworthy timber packaging and FAT/SAT protocol details.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Inter & Plus Jakarta Sans

---

## 💻 Development & Deployment Commands

### Development Server:
```bash
npm run dev
```

### Production Build:
```bash
npm run build
```
The optimized static build will be generated in `/dist`.

### Deployment:
The contents of `/dist` can be deployed directly to:
- **cPanel / Apache / Nginx** (simply upload files to `public_html`)
- **Vercel** (`vercel --prod`)
- **Netlify** or **AWS S3 / CloudFront**
