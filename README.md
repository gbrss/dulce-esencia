# Dulce Esencia · Pan de Pascua Casero con Esencia Natural
### Santiago de Chile

Landing page profesional, moderna, cálida y de alto rendimiento diseñada para **Dulce Esencia**, una marca artesanal de pan de Pascua casero en Santiago de Chile. Desarrollada con un enfoque editorial gastronómico, paleta navideña tradicional, integración completa de pedidos por WhatsApp y optimización SEO local.

---

## 📋 Resumen del Proyecto

- **Marca:** Dulce Esencia
- **Producto:** Pan de Pascua casero artesanal
- **Diferenciador principal:** Esencia natural preparada artesanalmente mediante infusión propia de especias
- **Ubicación:** Santiago de Chile
- **Canal de ventas:** WhatsApp (+56 9 5007 5329 / Enlace internacional: `56950075329`)
- **Modelo:** Pedidos y consultas directas sin pasarela de pagos ni carritos innecesarios
- **Identidad visual:**
  - Rojo borgoña: `#7B2638`
  - Verde pino: `#214A35`
  - Crema cálido: `#FFF8EC`
  - Dorado suave: `#C9A45C`
  - Café cacao: `#4A3028`
- **Tipografía:** *Cormorant Garamond* (Serif clásica y elegante para titulares) + *Inter* (Sans-serif legible para cuerpo de texto)

---

## 📂 Estructura del Proyecto (Astro JS Nativo)

El proyecto está completamente migrado y estructurado con **Astro JS**:

```text
/
├── public/
│   ├── favicon.svg              # Favicon SVG vectorial original
│   ├── logo.svg                 # Logotipo SVG vectorial original con tipografía y símbolo
│   ├── sitemap.xml              # Mapa del sitio para indexación
│   └── images/                  # Fotografías gastronómicas de alta calidad
├── src/
│   ├── components/
│   │   ├── Header.astro         # Encabezado (Wordmark, enlaces, CTA, menú móvil)
│   │   ├── Hero.astro           # Portada editorial con fotografía protagonista
│   │   ├── BrandStory.astro     # Sección "Nuestra esencia" y proceso artesanal
│   │   ├── FeatureCards.astro   # 3 bloques sobrios de diferenciadores
│   │   ├── Gallery.astro        # Galería responsive con modal lightbox accesible
│   │   ├── CallToAction.astro   # Sección verde pino con botón destacado WhatsApp
│   │   ├── FAQ.astro            # Acordeón accesible con preguntas frecuentes reales
│   │   ├── Footer.astro         # Pie de página con créditos, enlaces y WhatsApp
│   │   ├── WhatsAppButton.astro # Botón reutilizable con codificación de mensajes
│   │   └── FloatingWhatsApp.astro # Botón flotante accesible en móvil y escritorio
│   ├── layouts/
│   │   └── BaseLayout.astro     # Layout base con metadatos SEO, OpenGraph y JSON-LD
│   ├── pages/
│   │   ├── index.astro          # Página principal estática
│   │   └── robots.txt.ts        # Endpoint dinámico para robots.txt
│   ├── styles/
│   │   └── global.css           # Estilos base con Tailwind CSS y variables de color
│   ├── config/
│   │   └── site.ts              # Configuración centralizada de datos y mensajes
│   └── data/
│       └── gallery.ts           # Datos de fotografías, descripciones y mensajes
│
├── astro.config.mjs             # Configuración central de Astro con Tailwind
├── tsconfig.json                # Configuración TypeScript estricta de Astro
├── package.json                 # Scripts de desarrollo y dependencias
└── README.md                    # Esta guía completa en español
```

---

## 🚀 Requisitos Previos e Instalación Local

### Requisitos:
- Node.js versión 18 o superior
- Gestor de paquetes `npm`

### Ejecución Local:

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Genera los archivos estáticos optimizados en la carpeta `dist/`.

---

## 🛠️ Cómo Modificar y Personalizar la Landing Page

### 1. Cambiar el número de WhatsApp y los mensajes
Todos los mensajes y el número de contacto están centralizados en un único archivo:
👉 `src/config/site.ts` (y en `astro-project/src/config/site.ts`):

```typescript
export const SITE_CONFIG = {
  name: "Dulce Esencia",
  phoneDisplay: "+56 9 5007 5329",
  whatsappNumber: "56950075329", // Número internacional sin '+' ni espacios
  messages: {
    default: "¡Hola! Vi la página de Dulce Esencia...",
    hero: "¡Hola Dulce Esencia! Me encantaría encargar un pan de Pascua...",
    // ...
  }
};
```
Al modificar este archivo, todos los botones de la página se actualizan automáticamente con el formato correcto de WhatsApp (`https://wa.me/56950075329?text=...`).

### 2. Cambiar las fotografías
Las fotografías están ubicadas en:
👉 `src/assets/images/`

Para reemplazar con las fotografías reales del dueño de Dulce Esencia:
- Guarda tus fotos en formato `.jpg` o `.webp`.
- Actualiza las rutas en `src/data/gallery.ts` y en `src/components/Hero.tsx` y `BrandStory.tsx`.
- Las dimensiones recomendadas son proporción `16:9` o `4:3` en alta resolución (1200px a 1600px de ancho).

### 3. Actualizar el dominio final
En `src/config/site.ts` y en `index.html` (o `astro-project/astro.config.mjs`), reemplaza:
```typescript
domain: "https://dulceesencia.cl",
```
por el subdominio gratuito o dominio definitivo (`.cl` o `.com`) que adquiera el negocio.

---

## ☁️ Despliegue Gratuito en Cloudflare Pages o Vercel

### Opción A: Despliegue con Cloudflare Pages (Recomendado)
1. Sube el código a un repositorio en **GitHub** o **GitLab**.
2. Ingresa a [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Selecciona tu repositorio.
4. En **Build settings**:
   - **Framework preset:** `Vite` (o `Astro` si conectas la carpeta `astro-project`).
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Haz clic en **Save and Deploy**. En menos de 1 minuto tendrás una URL pública HTTPS gratuita (`https://dulce-esencia.pages.dev`).

### Opción B: Despliegue con Vercel
1. Conecta tu repositorio en [vercel.com](https://vercel.com).
2. Vercel detectará la configuración automáticamente.
3. Presiona **Deploy**.

---

## 📝 Lista de Datos y Fotografías que el Dueño Debe Entregar

Para pasar a la versión 100% definitiva de Dulce Esencia, se recomienda que el dueño proporcione:

1. **Fotografías reales en alta calidad:**
   - Pan de Pascua completo horneado en su presentación de venta.
   - Detalle del corte transversal mostrando la miga real y frutos secos.
   - Foto del envoltorio o packaging real para regalo.
   - Foto del proceso casero o de los ingredientes (ollita de infusión, nueces).
2. **Formatos y pesos:**
   - Confirmar si se venden por formato (ej. 500g, 1kg) para incluirlo en las respuestas por WhatsApp.
3. **Sectores de despacho / retiro:**
   - Comunas específicas de Santiago con cobertura o si se cuenta con punto de retiro coordinado.
4. **Fechas de reserva:**
   - Si existen fechas límite de encargo para Navidad y Año Nuevo.
