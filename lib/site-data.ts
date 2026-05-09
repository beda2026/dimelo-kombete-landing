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
  { title: 'Freestyle del Barrio', category: 'Música', image: '/assets/video-1.jpg' },
  { title: 'Leyendas del Ring', category: 'Deportes', image: '/assets/video-2.jpg' },
  { title: 'Street Style Boricua', category: 'Moda & Belleza', image: '/assets/video-3.jpg' },
  { title: 'Conversaciones de Calle', category: 'Cultura Urbana', image: '/assets/video-4.jpg' },
  { title: 'Nuevos Talentos PR', category: 'Música', image: '/assets/video-5.jpg' },
  { title: 'La Nueva Generación', category: 'Cultura Urbana', image: '/assets/video-6.jpg' },
];

export const categories: CategoryItem[] = [
  { title: 'Música', description: 'Estrenos, entrevistas y sesiones con el sonido de Puerto Rico.' },
  { title: 'Deportes', description: 'Disciplina, competencia y orgullo boricua dentro y fuera de la cancha.' },
  { title: 'Moda & Belleza', description: 'Estilo urbano, tendencias y personalidad con identidad propia.' },
  { title: 'Cultura Urbana', description: 'Historias reales, comunidad y el pulso creativo de la isla.' },
];
