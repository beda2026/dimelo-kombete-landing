export const youtubeChannelUrl = 'https://www.youtube.com/@DimeloKombete';
export const whatsappNumber = '17878985634';
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export type ClipItem = {
  title: string;
  category: string;
  image: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type SocialLinkItem = {
  label: string;
  href: string;
};

export const clips: ClipItem[] = [
  {
    title: 'Drum & Bass Puerto Rico PR | La Escena Underground Está Viva',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/01_drum-bass-puerto-rico-la-escena-underground-esta-viva.png',
    href: youtubeChannelUrl,
  },
  {
    title: 'Cristian “El Capitán” Barreto | La Leyenda Boricua Entra al Ring',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/02_cristian-el-capitan-barreto-la-leyenda-boricua-entra-al-ring.png',
    href: youtubeChannelUrl,
  },
  {
    title: 'Charla Sin Censura con Ryan Pino y Jeovanny El Rayo',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/03_charla-sin-censura-ryan-pino-jeovanny-el-rayo.png',
    href: youtubeChannelUrl,
  },
  {
    title: 'La Nueva Promesa del Boxeo Latinoamericano | Malik “El Emblema” Quiñones',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/04_la-nueva-promesa-del-boxeo-latinoamericano-malik-el-emblema-quinones.png',
    href: youtubeChannelUrl,
  },
  {
    title: 'El Boxeador que Acompaña a Amanda Serrano | Yandiel Lozano',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/05_el-boxeador-que-acompana-a-amanda-serrano-yandiel-lozano.png',
    href: youtubeChannelUrl,
  },
  {
    title: 'Chris “Punisher” Echevarría | Entrevista Pre-Pelea',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/06_chris-punisher-echevarria-entrevista-pre-pelea.png',
    href: youtubeChannelUrl,
  },
  {
    title: 'Puerto Rico no duerme... se prepara para pelear | Yankiel “El Doctorcito”',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/07_puerto-rico-no-duerme-se-prepara-para-pelear-yankiel-el-doctorcito.png',
    href: youtubeChannelUrl,
  },
  {
    title: 'Puerto Rico también juega en la calle PR | Easy Splash',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/08_puerto-rico-tambien-juega-en-la-calle-easy-splash.png',
    href: youtubeChannelUrl,
  },
];

export const services: ServiceItem[] = [
  { title: 'Música', description: 'Estrenos, entrevistas y sesiones con el sonido de Puerto Rico.' },
  { title: 'Deportes', description: 'Disciplina, competencia y orgullo boricua dentro y fuera de la cancha.' },
  { title: 'Moda & Belleza', description: 'Estilo urbano, tendencias y personalidad con identidad propia.' },
  { title: 'Cultura Urbana', description: 'Historias reales, comunidad y el pulso creativo de la isla.' },
];

export const socialLinks: SocialLinkItem[] = [
  { label: 'YouTube', href: youtubeChannelUrl },
  { label: 'WhatsApp', href: whatsappUrl },
];

// Backward-compatible exports used in shared components.
export const channelUrl = youtubeChannelUrl;
export const featuredVideos = clips;
export const categories = services;
export type VideoItem = ClipItem;
export type CategoryItem = ServiceItem;
