import { CategoryCard } from '@/components/CategoryCard';
import { ExternalLink } from '@/components/ExternalLink';
import { SocialLink } from '@/components/SocialLink';
import { VideoCard } from '@/components/VideoCard';
import {
  brandName,
  brandTagline,
  clips,
  instagramUrl,
  services,
  socialLinks,
  whatsappUrl,
  youtubeChannelUrl,
} from '@/lib/site-data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-urban text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-2 z-30 flex items-center justify-between gap-4 rounded-2xl border border-[#d9be82]/20 bg-black/55 px-4 py-4 backdrop-blur-xl sm:px-6 sm:py-5">
          <div>
            <p className="bg-gradient-to-r from-[#f8eed2] via-[#d7b77b] to-[#a88752] bg-clip-text text-xl font-black tracking-wide text-transparent sm:text-2xl">{brandName}</p>
            <p className="hidden text-xs text-white/70 sm:block">{brandTagline}</p>
          </div>
          <nav className="flex items-center gap-2 text-sm sm:gap-3">
            <a href="#inicio" className="hidden px-2 py-1 text-white/80 hover:text-white md:block">Inicio</a>
            <a href="#clips" className="hidden px-2 py-1 text-white/80 hover:text-white md:block">Clips</a>
            <a href="#estudios" className="hidden px-2 py-1 text-white/80 hover:text-white md:block">Estudios</a>
            <a href="#redes" className="hidden px-2 py-1 text-white/80 hover:text-white md:block">Redes</a>
            <ExternalLink href={youtubeChannelUrl} className="hidden rounded-full border border-red-400/35 bg-gradient-to-r from-red-950 to-red-800 px-3 py-1.5 font-semibold shadow-[0_8px_22px_rgba(127,29,29,.28)] sm:inline-flex">YouTube</ExternalLink>
            <ExternalLink href={whatsappUrl} className="rounded-full border border-emerald-300/35 bg-gradient-to-r from-emerald-900 to-emerald-700 px-3 py-1.5 font-semibold text-white shadow-[0_8px_20px_rgba(6,95,70,.3)]">WhatsApp</ExternalLink>
          </nav>
        </header>

        <section id="inicio" className="relative grid gap-6 overflow-hidden rounded-[2rem] border border-[#d9be82]/20 bg-black/45 p-6 shadow-neon md:min-h-[34rem] md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-8 md:p-10">
          <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-[#b79256]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-[#52263a]/16 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 left-[30%] h-44 w-44 rounded-full bg-[#d7b77b]/10 blur-3xl" />
          <div className="relative space-y-5">
            <p className="inline-block rounded-full border border-[#d7b77b]/40 bg-[#d7b77b]/5 px-3 py-1 text-xs uppercase tracking-widest text-[#e8d4ab]">MEDIA URBANA · MÚSICA · DEPORTES · MODA · BELLEZA</p>
            <h1 className="text-5xl font-extrabold leading-none text-[#f6f1e6] sm:text-6xl md:text-7xl">Dímelo Kombete</h1>
            <p className="text-xl font-semibold text-white/90">El spot oficial donde el talento de Puerto Rico se hace mundial.</p>
            <p className="text-base text-white/75 sm:text-lg">Música, deportes, moda y belleza con flow boricua. Aquí suena lo que la calle pide: ritmo, entrevistas, clips y talento sin fronteras.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="#clips" className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#b08b52] via-[#d5b67b] to-[#f2e3c5] px-6 text-sm font-extrabold text-black shadow-[0_8px_24px_rgba(176,139,82,.35)] transition hover:-translate-y-1">Ver clips</a>
              <ExternalLink href={youtubeChannelUrl} className="inline-flex h-12 items-center justify-center rounded-full border border-red-400/45 bg-gradient-to-r from-red-950 to-red-800 px-6 text-sm font-bold text-white shadow-[0_8px_24px_rgba(127,29,29,.35)] transition hover:-translate-y-1">Ver canal de YouTube</ExternalLink>
              <ExternalLink href={whatsappUrl} className="inline-flex h-12 items-center justify-center rounded-full border border-emerald-300/35 bg-gradient-to-r from-emerald-900 to-emerald-700 px-6 text-sm font-bold text-white shadow-[0_8px_24px_rgba(6,95,70,.35)] transition hover:-translate-y-1 sm:col-span-2 md:col-span-1">Contactar por WhatsApp</ExternalLink>
            </div>
          </div>
          <article className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.05] p-3 shadow-[0_20px_50px_rgba(4,7,20,.45)] backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d8bf8a]/8 via-transparent to-[#5b2d41]/12" />
            <img src={clips[0].image} alt={clips[0].title} className="relative aspect-video w-full rounded-2xl object-cover" />
            <div className="space-y-3 p-3">
              <p className="inline-flex rounded-full border border-[#d8bf8a]/35 bg-[#d8bf8a]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#eddcb8]">NUEVO EN DÍMELO KOMBETE</p>
              <h3 className="text-xl font-bold">Talento de Puerto Rico pa’l mundo</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Música', 'Deportes', 'Moda', 'Belleza', 'Entrevistas', 'Clips'].map((pill) => (
                  <span key={pill} className="rounded-full border border-white/20 bg-black/45 px-2.5 py-1">{pill}</span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="space-y-6 pt-2 md:pt-6" id="clips">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8bf8a]">CONTENIDO REAL</p>
              <h2 className="text-4xl font-black text-[#f2e6cf] sm:text-5xl">Clips recientes</h2>
              <p className="text-sm text-white/75 sm:text-base">Entrevistas, deportes, cultura urbana y momentos destacados de Dímelo Kombete.</p>
            </div>
            <ExternalLink href={youtubeChannelUrl} className="inline-flex w-fit rounded-full border border-red-500/40 bg-gradient-to-r from-red-950 to-red-800 px-5 py-3 text-sm font-semibold shadow-[0_8px_20px_rgba(127,29,29,.25)]">Ver canal completo</ExternalLink>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {clips.map((video) => <VideoCard key={video.title} video={video} />)}
          </div>
        </section>

        <section className="space-y-5 rounded-3xl border border-[#d8bf8a]/20 bg-gradient-to-br from-[#130f10] via-[#23161d] to-black/80 p-6 shadow-[0_20px_50px_rgba(5,5,10,.45)] md:p-8" id="estudios">
          <h2 className="text-4xl font-black text-[#e7d2a8] md:text-5xl">Estudios Kombete</h2>
          <p className="text-lg font-semibold text-white/90">Citas, entrevistas, grabaciones y coordinación para artistas emergentes.</p>
          <p className="text-white/80">Dímelo Kombete también funciona como punto de encuentro para artistas, atletas, creadores y voces emergentes. Coordina una cita, una entrevista, una grabación o pregunta por precios directamente por WhatsApp.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((category) => <CategoryCard key={category.title} category={category} />)}</div>
          <div className="flex flex-wrap gap-3">
            <ExternalLink href={whatsappUrl} className="rounded-full border border-[#d8bf8a]/35 bg-gradient-to-r from-[#8f6f3f] to-[#c7a46f] px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_20px_rgba(143,111,63,.3)]">Reservar cita</ExternalLink>
            <ExternalLink href={whatsappUrl} className="rounded-full border border-emerald-300/35 bg-gradient-to-r from-emerald-900 to-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(6,95,70,.3)]">Coordinar por WhatsApp</ExternalLink>
          </div>
        </section>

        <section className="space-y-4" id="redes">
          <h2 className="text-4xl font-black">Síguenos y conecta</h2>
          <p className="text-white/85">Dímelo Kombete se mueve donde está la audiencia: YouTube, Instagram, clips, entrevistas y contenido con flow boricua.</p>
          <div className="grid gap-3 sm:grid-cols-3">{socialLinks.map((link) => <SocialLink key={link.label} label={link.label} href={link.href} description={link.description} />)}</div>
        </section>

        <section className="rounded-3xl border border-[#d8bf8a]/15 bg-black/35 p-6">
          <h2 className="text-3xl font-black">Talento de Puerto Rico pa’l mundo</h2>
          <p className="mt-3 text-white/80">Dímelo Kombete es una plataforma de media urbana donde la música, el deporte, la moda, la belleza y la cultura se encuentran. Un espacio para presentar talento real, contar historias, compartir clips y conectar con una audiencia que vive el movimiento.</p>
        </section>

        <footer className="rounded-2xl border border-[#d8bf8a]/20 border-t-[#d8bf8a]/35 bg-black/35 p-6 text-sm text-white/70 backdrop-blur">
          <p className="text-lg font-black text-white">Dímelo Kombete</p>
          <p>Media urbana · Música · Deportes · Moda · Belleza</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <ExternalLink href={youtubeChannelUrl}>YouTube</ExternalLink>
            <ExternalLink href={instagramUrl}>Instagram</ExternalLink>
            <ExternalLink href={whatsappUrl}>WhatsApp</ExternalLink>
            <a href="#clips">Clips</a>
            <a href="#estudios">Estudios</a>
          </div>
          <p className="mt-4">© 2026 Dímelo Kombete. Todos los derechos reservados.</p>
        </footer>
      </div>

      <ExternalLink href={whatsappUrl} className="fixed bottom-5 right-4 z-20 rounded-full border border-emerald-300/40 bg-gradient-to-r from-emerald-900 to-emerald-700 px-4 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(6,95,70,.3)] sm:right-6">WhatsApp</ExternalLink>
    </main>
  );
}
