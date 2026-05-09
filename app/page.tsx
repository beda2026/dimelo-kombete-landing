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
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-2 z-30 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/45 px-4 py-4 backdrop-blur-xl">
          <div>
            <p className="text-xl font-black tracking-wide text-neon-pink">{brandName}</p>
            <p className="text-xs text-white/70">{brandTagline}</p>
          </div>
          <nav className="flex flex-wrap items-center gap-2 text-sm">
            <a href="#inicio" className="px-2 py-1 text-white/85 hover:text-white">Inicio</a>
            <a href="#clips" className="px-2 py-1 text-white/85 hover:text-white">Clips</a>
            <a href="#estudios" className="px-2 py-1 text-white/85 hover:text-white">Estudios</a>
            <a href="#redes" className="px-2 py-1 text-white/85 hover:text-white">Redes</a>
            <ExternalLink href={youtubeChannelUrl} className="rounded-full border border-red-400/50 bg-gradient-to-r from-red-700 to-red-500 px-3 py-1.5 font-semibold shadow-[0_0_20px_rgba(239,68,68,.35)]">YouTube</ExternalLink>
            <ExternalLink href={whatsappUrl} className="rounded-full border border-emerald-300/50 bg-gradient-to-r from-emerald-600 to-green-400 px-3 py-1.5 font-semibold text-black shadow-[0_0_20px_rgba(34,197,94,.35)]">WhatsApp</ExternalLink>
          </nav>
        </header>

        <section id="inicio" className="grid gap-6 rounded-3xl border border-electric/30 bg-black/45 p-6 shadow-neon md:grid-cols-2 md:p-10">
          <div className="space-y-5">
            <p className="inline-block rounded-full border border-neon-pink/40 px-3 py-1 text-xs uppercase tracking-widest text-neon-pink">MEDIA URBANA · MÚSICA · DEPORTES · MODA · BELLEZA</p>
            <h1 className="text-5xl font-extrabold leading-none sm:text-6xl">Dímelo Kombete</h1>
            <p className="text-xl font-semibold text-white/95">El spot oficial donde el talento de Puerto Rico se hace mundial.</p>
            <p className="text-base text-white/80 sm:text-lg">Música, deportes, moda y belleza con flow boricua. Aquí suena lo que la calle pide: ritmo, entrevistas, clips y talento sin fronteras.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#clips" className="rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-300 px-6 py-3 text-sm font-bold text-black shadow-[0_0_30px_rgba(251,146,60,.4)] transition hover:-translate-y-0.5">Ver clips</a>
              <ExternalLink href={youtubeChannelUrl} className="rounded-full border border-red-400/60 bg-gradient-to-r from-red-900 to-red-600 px-6 py-3 text-sm font-bold shadow-[0_0_25px_rgba(220,38,38,.35)] transition hover:-translate-y-0.5">Ver canal de YouTube</ExternalLink>
              <ExternalLink href={whatsappUrl} className="rounded-full border border-emerald-300/50 bg-gradient-to-r from-emerald-600 to-green-400 px-6 py-3 text-sm font-bold text-black shadow-[0_0_25px_rgba(16,185,129,.35)] transition hover:-translate-y-0.5">Contactar por WhatsApp</ExternalLink>
            </div>
          </div>
          <article className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3 backdrop-blur">
            <img src={clips[0].image} alt={clips[0].title} className="aspect-video w-full rounded-xl object-cover" />
            <div className="space-y-3 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Nuevo en Dímelo Kombete</p>
              <h3 className="text-xl font-bold">Talento de Puerto Rico pa’l mundo</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Música', 'Deportes', 'Moda', 'Belleza', 'Entrevistas', 'Clips'].map((pill) => (
                  <span key={pill} className="rounded-full border border-white/25 bg-black/45 px-2.5 py-1">{pill}</span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="space-y-5" id="clips">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">CONTENIDO REAL</p>
          <h2 className="text-4xl font-black text-electric">Clips recientes</h2>
          <p className="text-sm text-white/75 sm:text-base">Entrevistas, deportes, cultura urbana y momentos destacados de Dímelo Kombete.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clips.map((video) => <VideoCard key={video.title} video={video} />)}
          </div>
          <ExternalLink href={youtubeChannelUrl} className="inline-flex rounded-full border border-red-500/50 bg-gradient-to-r from-red-900 to-red-600 px-5 py-2.5 text-sm font-semibold shadow-[0_0_25px_rgba(220,38,38,.35)]">Ver canal completo</ExternalLink>
        </section>

        <section className="space-y-4 rounded-3xl border border-yellow-300/25 bg-gradient-to-br from-amber-300/10 via-purple-500/10 to-black/40 p-6" id="estudios">
          <h2 className="text-4xl font-black text-amber-200">Estudios Kombete</h2>
          <p className="text-lg font-semibold text-white/90">Citas, entrevistas, grabaciones y coordinación para artistas emergentes.</p>
          <p className="text-white/80">Dímelo Kombete también funciona como punto de encuentro para artistas, atletas, creadores y voces emergentes. Coordina una cita, una entrevista, una grabación o pregunta por precios directamente por WhatsApp.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((category) => <CategoryCard key={category.title} category={category} />)}</div>
          <div className="flex flex-wrap gap-3">
            <ExternalLink href={whatsappUrl} className="rounded-full border border-amber-200/40 bg-gradient-to-r from-amber-300/30 to-purple-500/25 px-5 py-2.5 text-sm font-semibold shadow-[0_0_24px_rgba(245,158,11,.3)]">Reservar cita</ExternalLink>
            <ExternalLink href={whatsappUrl} className="rounded-full border border-amber-200/40 bg-gradient-to-r from-amber-300/30 to-purple-500/25 px-5 py-2.5 text-sm font-semibold shadow-[0_0_24px_rgba(168,85,247,.3)]">Coordinar por WhatsApp</ExternalLink>
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

        <footer className="border-t border-white/10 pt-6 text-sm text-white/70">
          <p className="text-lg font-black text-white">Dímelo Kombete</p>
          <p>{brandTagline}</p>
          <p className="mt-2">El spot oficial donde el talento de Puerto Rico se hace mundial.</p>
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
