export const brandName = 'Dímelo Kombete';
export const brandTagline = 'Media urbana · Música · Deportes · Moda · Belleza';

export const youtubeChannelUrl = 'https://www.youtube.com/@DimeloKombete';
export const instagramUrl = 'https://www.instagram.com/dimelokombete/';
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
  description: string;
  href: string;
};

export const clips: ClipItem[] = [
  { title: 'Drum & Bass en Puerto Rico | La escena underground está viva', category: 'Música', image: '/assets/dimelo_kombete_youtube_clips/01_drum-bass-puerto-rico-la-escena-underground-esta-viva.png', href: youtubeChannelUrl },
  { title: 'Cristian “El Capitán” Barreto | La leyenda boricua entra al ring', category: 'Deportes', image: '/assets/dimelo_kombete_youtube_clips/02_cristian-el-capitan-barreto-la-leyenda-boricua-entra-al-ring.png', href: youtubeChannelUrl },
  { title: 'Charla sin censura con Ryan Pino y Jeovanny “El Rayo”', category: 'Entrevistas', image: '/assets/dimelo_kombete_youtube_clips/03_charla-sin-censura-ryan-pino-jeovanny-el-rayo.png', href: youtubeChannelUrl },
  { title: 'Malik “El Emblema” Quiñones | Nueva promesa del boxeo latinoamericano', category: 'Deportes', image: '/assets/dimelo_kombete_youtube_clips/04_la-nueva-promesa-del-boxeo-latinoamericano-malik-el-emblema-quinones.png', href: youtubeChannelUrl },
  { title: 'Yandiel Lozano | El boxeador que acompaña a Amanda Serrano', category: 'Deportes', image: '/assets/dimelo_kombete_youtube_clips/05_el-boxeador-que-acompana-a-amanda-serrano-yandiel-lozano.png', href: youtubeChannelUrl },
  { title: 'Chris “Punisher” Echevarría | Entrevista pre-pelea', category: 'Entrevistas', image: '/assets/dimelo_kombete_youtube_clips/06_chris-punisher-echevarria-entrevista-pre-pelea.png', href: youtubeChannelUrl },
  { title: 'Puerto Rico no duerme | Yankiel “El Doctorcito” vs Bomba González', category: 'Boxeo', image: '/assets/dimelo_kombete_youtube_clips/07_puerto-rico-no-duerme-se-prepara-para-pelear-yankiel-el-doctorcito.png', href: youtubeChannelUrl },
  { title: 'Puerto Rico también juega en la calle | Easy Splash', category: 'Cultura urbana', image: '/assets/dimelo_kombete_youtube_clips/08_puerto-rico-tambien-juega-en-la-calle-easy-splash.png', href: youtubeChannelUrl },
];

export const services: ServiceItem[] = [
  { title: 'Entrevistas', description: 'Espacios para conversaciones reales con artistas, atletas y creadores.' },
  { title: 'Grabación de voces', description: 'Sesiones enfocadas en claridad, presencia y flow.' },
  { title: 'Sesiones para artistas emergentes', description: 'Contenido para presentar talento nuevo con identidad propia.' },
  { title: 'Clips para redes', description: 'Cortes premium para YouTube, Instagram y shorts.' },
  { title: 'Promoción de contenido', description: 'Difusión estratégica para mover tu proyecto con audiencia real.' },
  { title: 'Coordinación por WhatsApp', description: 'Agenda rápida para citas, precios y producción.' },
  { title: 'Kombete Sports', description: 'Cobertura y enfoque deportivo dentro del ecosistema Kombete.' },
  { title: 'Cultura urbana', description: 'Historias, voces y energía boricua sin filtro.' },
];

export const socialLinks: SocialLinkItem[] = [
  { label: 'YouTube', description: 'Clips, entrevistas y contenido completo.', href: youtubeChannelUrl },
  { label: 'Instagram', description: 'Ritmo, flow y talento sin fronteras.', href: instagramUrl },
  { label: 'WhatsApp', description: 'Contacto, citas y coordinación.', href: whatsappUrl },
];

export const channelUrl = youtubeChannelUrl;
export const featuredVideos = clips;
export const categories = services;
export type VideoItem = ClipItem;
export type CategoryItem = ServiceItem;
