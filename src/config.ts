// ============================================
// CONFIGURACION DEL SITIO
// Editar estos valores para personalizar el sitio
// ============================================

/** Modo mantenimiento: true = muestra solo el hero sin navegacion ni links */
export const MAINTENANCE_MODE =
  (import.meta.env.MAINTENANCE_MODE ?? process.env.MAINTENANCE_MODE) === 'true';

/** Numero de WhatsApp en formato internacional (sin +).
 *  Leído desde la variable de entorno WHATSAPP_NUMBER (no se hardcodea en el repo). */
const WHATSAPP_NUMBER =
  import.meta.env.WHATSAPP_NUMBER ?? process.env.WHATSAPP_NUMBER ?? '';

/** XOR-encoded number to avoid plain-text scraping. Decoded by client JS at runtime. */
export const WHATSAPP_NUMBER_ENCODED = JSON.stringify(
  [...WHATSAPP_NUMBER].map(c => c.charCodeAt(0) ^ 42)
);

/** Texto pre-llenado para WhatsApp (sin URL-encode, se codifica automaticamente) */
export const WHATSAPP_PREFILL_TEXT_ES =
  '¡Hola! Quiero reservar la experiencia de arepas. Somos ___ personas. Me gustaría para el día ___ / horario ___. ¿Hay disponibilidad?';

export const WHATSAPP_PREFILL_TEXT_EN =
  "Hi! I'd like to book the arepa experience. We are ___ people. I'd like it for ___ / time ___. Is it available?";

/** URL de Instagram */
export const INSTAGRAM_URL =
  import.meta.env.INSTAGRAM_URL ?? process.env.INSTAGRAM_URL ?? '';

/** Endpoint del formulario (Formspree u otro servicio). Crear cuenta gratis en https://formspree.io */
export const FORM_ENDPOINT =
  import.meta.env.FORM_ENDPOINT ?? process.env.FORM_ENDPOINT ?? '';

/** Nombre del sitio */
export const SITE_NAME = 'Arepas With Friends';

/** Dominio */
export const SITE_URL = 'https://arepaswithfriends.com';

// ============================================
// IMAGENES — reemplazar placeholders por imagenes reales
// Colocar las imagenes en /public/images/
// ============================================
export const IMAGES = {
  logo: '/images/logo.png',
  hero: '/images/hero_arepas.jpg',
  experiencia: '/images/experiencia.jpg',
  queVasAHacer: '/images/que_vas_a_hacer.jpg',
  lugar: '/images/el_sitio.jpg',
  gallery: [
    '/images/gallery/1.jpg',
    '/images/gallery/2.jpg',
    '/images/gallery/3.jpg',
    '/images/gallery/4.jpg',
    '/images/gallery/5.jpg',
    '/images/gallery/6.jpg',
    '/images/gallery/7.jpg',
    '/images/gallery/8.jpg',
  ],
};

// Helper: genera la URL de WhatsApp
export function whatsappUrl(lang: 'es' | 'en' = 'es'): string {
  const text = lang === 'es' ? WHATSAPP_PREFILL_TEXT_ES : WHATSAPP_PREFILL_TEXT_EN;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
