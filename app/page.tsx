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
        <header className="sticky top-2 z-30 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-black/45 px-4 py-4 backdrop-blur-xl sm:px-6 sm:py-5">
          <div>
            <p className="bg-gradient-to-r from-[#ff4db7] via-[#ff8a35] to-[#ffcc66] bg-clip-text text-xl font-black tracking-wide text-transparent drop-shadow-[0_0_12px_rgba(255,94,183,0.45)] sm:text-2xl">{brandName}</p>
            <p className="hidden text-xs text-white/70 sm:block">{brandTagline}</p>
          </div>
          <nav className="flex items-center gap-2 text-sm sm:gap-3">
            <a href="#inicio" className="hidden px-2 py-1 text-white/85 hover:text-white md:block">Inicio</a>
            <a href="#clips" className="hidden px-2 py-1 text-white/85 hover:text-white md:block">Clips</a>
            <a href="#estudios" className="hidden px-2 py-1 text-white/85 hover:text-white md:block">Estudios</a>
            <a href="#redes" className="hidden px-2 py-1 text-white/85 hover:text-white md:block">Redes</a>
            <ExternalLink href={youtubeChannelUrl} className="hidden rounded-full border border-red-400/50 bg-gradient-to-r from-red-800 to-red-500 px-3 py-1.5 font-semibold shadow-[0_0_20px_rgba(239,68,68,.35)] sm:inline-flex">YouTube</ExternalLink>
            <ExternalLink href={whatsappUrl} className="rounded-full border border-emerald-300/50 bg-gradient-to-r from-emerald-600 to-green-400 px-3 py-1.5 font-semibold text-black shadow-[0_0_20px_rgba(34,197,94,.35)]">WhatsApp</ExternalLink>
          </nav>
        </header>

        <section id="inicio" className="relative grid gap-6 overflow-hidden rounded-[2rem] border border-electric/30 bg-black/45 p-6 shadow-neon md:min-h-[34rem] md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-8 md:p-10">
          <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 left-[30%] h-44 w-44 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="relative space-y-5">
            <p className="inline-block rounded-full border border-neon-pink/40 px-3 py-1 text-xs uppercase tracking-widest text-neon-pink">MEDIA URBANA · MÚSICA · DEPORTES · MODA · BELLEZA</p>
            <h1 className="text-5xl font-extrabold leading-none text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.25)] sm:text-6xl md:text-7xl">Dímelo Kombete</h1>
            <p className="text-xl font-semibold text-white/95">El spot oficial donde el talento de Puerto Rico se hace mundial.</p>
            <p className="text-base text-white/80 sm:text-lg">Música, deportes, moda y belleza con flow boricua. Aquí suena lo que la calle pide: ritmo, entrevistas, clips y talento sin fronteras.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="#clips" className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-300 px-6 text-sm font-extrabold text-black shadow-[0_0_32px_rgba(251,146,60,.45)] transition hover:-translate-y-1">Ver clips</a>
              <ExternalLink href={youtubeChannelUrl} className="inline-flex h-12 items-center justify-center rounded-full border border-red-400/60 bg-gradient-to-r from-red-950 to-red-600 px-6 text-sm font-bold text-white shadow-[0_0_28px_rgba(220,38,38,.4)] transition hover:-translate-y-1">Ver canal de YouTube</ExternalLink>
              <ExternalLink href={whatsappUrl} className="inline-flex h-12 items-center justify-center rounded-full border border-emerald-300/50 bg-gradient-to-r from-emerald-700 to-green-400 px-6 text-sm font-bold text-white shadow-[0_0_28px_rgba(16,185,129,.4)] transition hover:-translate-y-1 sm:col-span-2 md:col-span-1">Contactar por WhatsApp</ExternalLink>
            </div>
          </div>
          <article className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/[0.07] p-3 shadow-[0_20px_50px_rgba(4,7,20,.58)] backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/8 via-transparent to-fuchsia-300/8" />
            <img src={clips[0].image} alt={clips[0].title} className="relative aspect-video w-full rounded-2xl object-cover" />
            <div className="space-y-3 p-3">
              <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">NUEVO EN DÍMELO KOMBETE</p>
              <h3 className="text-xl font-bold">Talento de Puerto Rico pa’l mundo</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Música', 'Deportes', 'Moda', 'Belleza', 'Entrevistas', 'Clips'].map((pill) => (
                  <span key={pill} className="rounded-full border border-white/25 bg-black/45 px-2.5 py-1">{pill}</span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="space-y-6 pt-2 md:pt-6" id="clips">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">CONTENIDO REAL</p>
              <h2 className="text-4xl font-black text-electric sm:text-5xl">Clips recientes</h2>
              <p className="text-sm text-white/75 sm:text-base">Entrevistas, deportes, cultura urbana y momentos destacados de Dímelo Kombete.</p>
            </div>
            <ExternalLink href={youtubeChannelUrl} className="inline-flex w-fit rounded-full border border-red-500/50 bg-gradient-to-r from-red-900 to-red-600 px-5 py-3 text-sm font-semibold shadow-[0_0_25px_rgba(220,38,38,.35)]">Ver canal completo</ExternalLink>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {clips.map((video) => <VideoCard key={video.title} video={video} />)}
          </div>
        </section>

        <section className="space-y-5 rounded-3xl border border-yellow-300/25 bg-gradient-to-br from-amber-300/10 via-purple-500/10 to-black/40 p-6 shadow-[0_24px_60px_rgba(12,10,28,.45)] md:p-8" id="estudios">
          <h2 className="text-4xl font-black text-amber-200 md:text-5xl">Estudios Kombete</h2>
          <p className="text-lg font-semibold text-white/90">Citas, entrevistas, grabaciones y coordinación para artistas emergentes.</p>
          <p className="text-white/80">Dímelo Kombete también funciona como punto de encuentro para artistas, atletas, creadores y voces emergentes. Coordina una cita, una entrevista, una grabación o pregunta por precios directamente por WhatsApp.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((category) => <CategoryCard key={category.title} category={category} />)}</div>
          <div className="flex flex-wrap gap-3">
            <ExternalLink href={whatsappUrl} className="rounded-full border border-amber-200/40 bg-gradient-to-r from-amber-300/40 to-orange-400/35 px-6 py-3 text-sm font-semibold shadow-[0_0_24px_rgba(245,158,11,.3)]">Reservar cita</ExternalLink>
            <ExternalLink href={whatsappUrl} className="rounded-full border border-emerald-300/40 bg-gradient-to-r from-emerald-600/70 to-green-400/70 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(16,185,129,.3)]">Coordinar por WhatsApp</ExternalLink>
          </div>
        </section>

        <section className="space-y-4" id="redes">
          <h2 className="text-4xl font-black">Síguenos y conecta</h2>
          <p className="text-white/85">Dímelo Kombete se mueve donde está la audiencia: YouTube, Instagram, clips, entrevistas y contenido con flow boricua.</p>
          <div className="grid gap-3 sm:grid-cols-3">{socialLinks.map((link) => <SocialLink key={link.label} label={link.label} href={link.href} description={link.description} />)}</div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-black/35 p-6">
          <h2 className="text-3xl font-black">Talento de Puerto Rico pa’l mundo</h2>
          <p className="mt-3 text-white/80">Dímelo Kombete es una plataforma de media urbana donde la música, el deporte, la moda, la belleza y la cultura se encuentran. Un espacio para presentar talento real, contar historias, compartir clips y conectar con una audiencia que vive el movimiento.</p>
        </section>

        <footer className="rounded-2xl border border-white/10 border-t-white/20 bg-black/25 p-6 text-sm text-white/70 backdrop-blur">
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

      <ExternalLink href={whatsappUrl} className="fixed bottom-5 right-4 z-20 rounded-full border border-emerald-300/60 bg-gradient-to-r from-emerald-500 to-green-400 px-4 py-3 text-sm font-bold text-black shadow-[0_0_25px_rgba(16,185,129,.45)] sm:right-6">WhatsApp</ExternalLink>
    </main>
  );
}
