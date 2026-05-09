export type VideoItem = { title: string; category?: string; image: string };
export type CategoryItem = { title: string; description: string };

export const channelUrl = 'https://www.youtube.com/@DimeloKombete';
export const whatsappNumber = '17873473174';
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export const socialLinks = [
  { label: 'YouTube', href: channelUrl, style: 'youtube' },
  { label: 'Instagram', href: 'https://www.instagram.com/', style: 'instagram' },
  { label: 'TikTok', href: 'https://www.tiktok.com/', style: 'tiktok' },
  { label: 'Facebook', href: 'https://www.facebook.com/', style: 'facebook' },
  { label: 'WhatsApp', href: whatsappUrl, style: 'whatsapp' },
] as const;

export const clips = [
  {
    title: 'Drum & Bass Puerto Rico: la escena underground está viva',
    image: '/assets/dimelo_kombete_youtube_clips/01_drum-bass-puerto-rico-la-escena-underground-esta-viva.png',
  },
  {
    title: 'Cristian "El Capitán" Barreto: leyenda boricua entra al ring',
    image: '/assets/dimelo_kombete_youtube_clips/02_cristian-el-capitan-barreto-la-leyenda-boricua-entra-al-ring.png',
  },
  {
    title: 'Charla sin censura: Ryan Pino y Jeovanny El Rayo',
    image: '/assets/dimelo_kombete_youtube_clips/03_charla-sin-censura-ryan-pino-jeovanny-el-rayo.png',
  },
  {
    title: 'La nueva promesa del boxeo latinoamericano: Malik "El Emblema" Quiñones',
    image: '/assets/dimelo_kombete_youtube_clips/04_la-nueva-promesa-del-boxeo-latinoamericano-malik-el-emblema-quinones.png',
  },
  {
    title: 'Yandiel Lozano, el boxeador que acompaña a Amanda Serrano',
    image: '/assets/dimelo_kombete_youtube_clips/05_el-boxeador-que-acompana-a-amanda-serrano-yandiel-lozano.png',
  },
  {
    title: 'Chris Punisher Echevarría: entrevista pre pelea',
    image: '/assets/dimelo_kombete_youtube_clips/06_chris-punisher-echevarria-entrevista-pre-pelea.png',
  },
  {
    title: 'Puerto Rico no duerme: Yankiel El Doctorcito se prepara',
    image: '/assets/dimelo_kombete_youtube_clips/07_puerto-rico-no-duerme-se-prepara-para-pelear-yankiel-el-doctorcito.png',
  },
  {
    title: 'Puerto Rico también juega en la calle con Easy Splash',
    image: '/assets/dimelo_kombete_youtube_clips/08_puerto-rico-tambien-juega-en-la-calle-easy-splash.png',
  },
] as const;

export const services = [
  { icon: '🎙️', title: 'Grabación de voces' },
  { icon: '🎧', title: 'Sesiones para artistas emergentes' },
  { icon: '💵', title: 'Coordinación de precios' },
  { icon: '💬', title: 'Citas por WhatsApp' },
  { icon: '📱', title: 'Contenido para redes' },
  { icon: '🚀', title: 'Promoción de clips' },
] as const;
