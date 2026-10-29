/**
 * Configuración central del negocio y enlaces de Dulce Esencia.
 * Permite cambiar fácilmente números de contacto, mensajes de WhatsApp y dominios.
 */

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  location: string;
  city: string;
  phoneDisplay: string;
  whatsappNumber: string;
  domain: string;
  messages: {
    default: string;
    hero: string;
    essence: string;
    gallery: string;
    cta: string;
    faqIngredients: string;
    faqDelivery: string;
  };
  navLinks: Array<{ label: string; href: string }>;
}

export const SITE_CONFIG: SiteConfig = {
  name: "Dulce Esencia",
  tagline: "El sabor de la Navidad, hecho en casa",
  description:
    "Pan de Pascua casero con esencia natural preparada artesanalmente en Santiago de Chile. Pedidos y consultas directas por WhatsApp.",
  location: "Santiago, Chile",
  city: "Santiago",
  phoneDisplay: "+56 9 5007 5329",
  whatsappNumber: "56950075329",
  domain: "https://dulceesencia.cl",
  messages: {
    default:
      "¡Hola! Vi la página de Dulce Esencia y me gustaría conocer las opciones disponibles para encargar pan de Pascua. ¿Me pueden entregar más información?",
    hero:
      "¡Hola Dulce Esencia! Me encantaría encargar un pan de Pascua casero para esta Navidad en Santiago. ¿Cómo coordinamos mi pedido?",
    essence:
      "¡Hola! Me llamó mucho la atención la esencia natural que preparan para sus panes de Pascua. Quisiera hacer una consulta para encargar.",
    gallery:
      "¡Hola! Vi las fotografías del pan de Pascua en la web de Dulce Esencia y quiero encargar. ¿Qué opciones tienen disponibles?",
    cta:
      "¡Hola! Deseo encargar pan de Pascua casero de Dulce Esencia para compartir en familia. ¿Tienen disponibilidad para coordinar?",
    faqIngredients:
      "¡Hola Dulce Esencia! Quisiera consultar sobre los ingredientes específicos de sus panes de Pascua y opciones para encargar.",
    faqDelivery:
      "¡Hola Dulce Esencia! Quisiera consultar sobre los sectores de entrega en Santiago y fechas para coordinar mi pedido.",
  },
  navLinks: [
    { label: "Inicio", href: "#inicio" },
    { label: "Nuestra esencia", href: "#esencia" },
    { label: "Galería", href: "#galeria" },
    { label: "Preguntas", href: "#preguntas" },
    { label: "Contacto", href: "#contacto" },
  ],
};

/**
 * Genera el enlace directo a WhatsApp con el mensaje codificado correctamente
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || SITE_CONFIG.messages.default;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
