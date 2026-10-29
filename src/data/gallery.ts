export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  alt: string;
  category: string;
  whatsappMessage: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "pan-completo",
    title: "Pan de Pascua Tradicional Completo",
    subtitle: "Dorado artesanal y corona de frutos",
    description:
      "Horneado lentamente hasta lograr un dorado uniforme y una cubierta de almendras tostadas, nueces enteras y frutas confitadas seleccionadas.",
    imageSrc: "/images/hero_pan_de_pascua.jpg",
    alt: "Pan de Pascua casero artesanal completo sobre tabla de roble con almendras y nueces",
    category: "Presentación",
    whatsappMessage:
      "¡Hola! Me gustó mucho la presentación del Pan de Pascua completo. Quisiera saber cómo coordinar un pedido.",
  },
  {
    id: "miga-interior",
    title: "Interior Húmedo y Aromático",
    subtitle: "Miga esponjosa con distribución generosa de frutos",
    description:
      "Al cortar se aprecia la abundancia de nueces, pasas maceradas y el aroma inconfundible de nuestra esencia natural casera de especias.",
    imageSrc: "/images/galeria_pan_corte_interior.jpg",
    alt: "Corte transversal de pan de Pascua chileno mostrando textura suave y frutos secos",
    category: "Textura",
    whatsappMessage:
      "¡Hola! Vi el corte interior del pan de Pascua en la galería de fotos. ¿Qué tamaños o presentaciones tienen disponibles?",
  },
  {
    id: "esencia-natural",
    title: "Preparación de la Esencia Natural",
    subtitle: "El secreto del aroma: infusión propia de especias",
    description:
      "Elaboramos nuestra propia esencia a fuego lento con canela en rama, anís estrellado, clavo de olor, vainilla y ralladura de cítricos.",
    imageSrc: "/images/esencia_artesanal_preparacion.jpg",
    alt: "Olla tradicional con infusión de especias naturales, canela y vainilla para pan de Pascua",
    category: "Elaboración",
    whatsappMessage:
      "¡Hola! Me interesó mucho que preparen su propia esencia natural para el pan de Pascua. Quisiera hacer un encargo.",
  },
  {
    id: "empaque-navideno",
    title: "Presentación de Regalo Artesanal",
    subtitle: "Envoltorio rústico con cinta borgoña y tarjeta",
    description:
      "Pensado para compartir en la mesa navideña o como un detalle de cariño para familiares, amigos y colaboradores.",
    imageSrc: "/images/galeria_empaque_regalo.jpg",
    alt: "Pan de Pascua envuelto en papel kraft con lazo de hilo burdeo y ramita aromática",
    category: "Presentación",
    whatsappMessage:
      "¡Hola Dulce Esencia! Me interesa la presentación para regalo de pan de Pascua. ¿Cómo puedo encargar?",
  },
  {
    id: "ingredientes-nobles",
    title: "Frutos Secos y Especias Selectas",
    subtitle: "Ingredientes nobles tratados con dedicación",
    description:
      "Nueces chilenas de primera selección, pasas rubias y morenas, junto a una combinación equilibrada de especias aromáticas.",
    imageSrc: "/images/ingredientes_frutos_especias.jpg",
    alt: "Cuencos rústicos con nueces frescas, pasas doradas y canela en rama sobre mantel de lino",
    category: "Ingredientes",
    whatsappMessage:
      "¡Hola! Vi los ingredientes en su sitio web. Quisiera consultar detalles y encargar para esta Navidad.",
  },
  {
    id: "superficie-textura",
    title: "Corteza Glaseada y Caramelo Suave",
    subtitle: "Primer plano de la terminación dorada",
    description:
      "El glaseado sutil protege la humedad interior y resalta el brillo natural de las nueces y almendras recién horneadas.",
    imageSrc: "/images/hero_pan_de_pascua.jpg",
    alt: "Detalle de la superficie dorada y frutos caramelizados del pan de Pascua casero",
    category: "Textura",
    whatsappMessage:
      "¡Hola! Quisiera encargar un pan de Pascua casero para mi familia en Santiago.",
  },
];