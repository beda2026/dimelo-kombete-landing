export const channelUrl = 'https://www.youtube.com/@DimeloKombete';

export type VideoItem = {
  title: string;
  category: string;
  image: string;
};

export type CategoryItem = {
  title: string;
  description: string;
};

export const featuredVideos: VideoItem[] = [
  {
    title: 'Drum & Bass Puerto Rico PR | La Escena Underground Está Viva',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/01_drum-bass-puerto-rico-la-escena-underground-esta-viva.png',
  },
  {
    title: 'Cristian “El Capitán” Barreto | La Leyenda Boricua Entra al Ring',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/02_cristian-el-capitan-barreto-la-leyenda-boricua-entra-al-ring.png',
  },
  {
    title: 'Charla Sin Censura con Ryan Pino y Jeovanny El Rayo',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/03_charla-sin-censura-ryan-pino-jeovanny-el-rayo.png',
  },
  {
    title: 'La Nueva Promesa del Boxeo Latinoamericano | Malik “El Emblema” Quiñones',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/04_la-nueva-promesa-del-boxeo-latinoamericano-malik-el-emblema-quinones.png',
  },
  {
    title: 'El Boxeador que Acompaña a Amanda Serrano | Yandiel Lozano',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/05_el-boxeador-que-acompana-a-amanda-serrano-yandiel-lozano.png',
  },
  {
    title: 'Chris “Punisher” Echevarría | Entrevista Pre-Pelea',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/06_chris-punisher-echevarria-entrevista-pre-pelea.png',
  },
  {
    title: 'Puerto Rico no duerme... se prepara para pelear | Yankiel “El Doctorcito”',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/07_puerto-rico-no-duerme-se-prepara-para-pelear-yankiel-el-doctorcito.png',
  },
  {
    title: 'Puerto Rico también juega en la calle PR | Easy Splash',
    category: 'YouTube Clip',
    image: '/assets/dimelo_kombete_youtube_clips/08_puerto-rico-tambien-juega-en-la-calle-easy-splash.png',
  },
];

export const categories: CategoryItem[] = [
  { title: 'Música', description: 'Estrenos, entrevistas y sesiones con el sonido de Puerto Rico.' },
  { title: 'Deportes', description: 'Disciplina, competencia y orgullo boricua dentro y fuera de la cancha.' },
  { title: 'Moda & Belleza', description: 'Estilo urbano, tendencias y personalidad con identidad propia.' },
  { title: 'Cultura Urbana', description: 'Historias reales, comunidad y el pulso creativo de la isla.' },
];
