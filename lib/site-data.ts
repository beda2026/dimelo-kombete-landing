export const SITE_URL = 'https://www.youtube.com/@DimeloKombete';

export const siteContent = {
  brand: 'Dímelo Kombete',
  tagline: 'El programa de la gente · Cultura urbana · Música',
  description:
    'El spot oficial donde el talento de Puerto Rico se hace mundial. Música, deportes, moda y belleza con flow boricua.',
  heroCtas: [
    { label: 'Ver canal en YouTube', href: SITE_URL },
    { label: 'Ver clips', href: SITE_URL },
  ],
};

export const navLinks = ['Clips', 'Música', 'Cultura', 'YouTube'].map((label) => ({ label, href: SITE_URL }));

export const videoCards = [
  { title: 'Talento boricua en la casa', description: 'Artistas y voces nuevas con energía de barrio y nivel global.', imageSrc: '/assets/video-1.jpg', label: 'Destacado', href: SITE_URL },
  { title: 'Música, calle y cultura', description: 'Ritmos intensos, historias reales y la vibra que mueve la isla.', imageSrc: '/assets/video-2.jpg', label: 'Nuevo', href: SITE_URL },
  { title: 'Conversaciones con flow', description: 'Charlas directas con invitados que marcan tendencia.', imageSrc: '/assets/video-3.jpg', label: 'Entrevista', href: SITE_URL },
  { title: 'Moda, belleza y actitud', description: 'Estilo urbano con personalidad boricua y visión premium.', imageSrc: '/assets/video-4.jpg', label: 'Lifestyle', href: SITE_URL },
  { title: 'Deportes con energía', description: 'Pasión competitiva, análisis rápido y pura adrenalina.', imageSrc: '/assets/video-5.jpg', label: 'Sports', href: SITE_URL },
  { title: 'La vuelta de Puerto Rico', description: 'Momentos que resumen la calle, la música y la cultura viva.', imageSrc: '/assets/video-6.jpg', label: 'Top clip', href: SITE_URL },
];

export const categories = [
  { title: 'Música', description: 'Nuevos talentos, sonidos del momento y cultura sonora boricua.', href: SITE_URL, accent: 'from-fuchsia-500/40 via-pink-500/20 to-transparent' },
  { title: 'Deportes', description: 'Disciplina, pasión y opiniones con fuerza de cancha.', href: SITE_URL, accent: 'from-sky-500/40 via-blue-500/20 to-transparent' },
  { title: 'Moda & Belleza', description: 'Imagen, actitud y estética urbana con identidad propia.', href: SITE_URL, accent: 'from-amber-400/40 via-orange-500/20 to-transparent' },
  { title: 'Cultura Urbana', description: 'La calle, la comunidad y el flow que define una generación.', href: SITE_URL, accent: 'from-violet-500/40 via-fuchsia-500/20 to-transparent' },
];

export const socialLinks = [{ label: 'YouTube', href: SITE_URL }];
