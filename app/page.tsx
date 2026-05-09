import { ExternalLink } from '@/components/ExternalLink';
import { channelUrl, clips, services, socialLinks, whatsappUrl } from '@/lib/site-data';

const socialStyles: Record<string, string> = {
  youtube: 'border-red-400/30 bg-gradient-to-r from-red-700/40 to-red-500/20 hover:shadow-[0_0_35px_rgba(239,68,68,0.35)]',
  instagram: 'border-fuchsia-400/35 bg-gradient-to-r from-fuchsia-600/35 via-orange-500/20 to-purple-600/35 hover:shadow-[0_0_35px_rgba(217,70,239,0.35)]',
  tiktok: 'border-cyan-300/30 bg-gradient-to-r from-cyan-400/20 via-black/50 to-pink-500/20 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]',
  facebook: 'border-blue-400/30 bg-gradient-to-r from-blue-700/30 to-blue-400/20 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]',
  whatsapp: 'border-emerald-300/30 bg-gradient-to-r from-emerald-500/30 to-green-400/20 hover:shadow-[0_0_35px_rgba(16,185,129,0.4)]',
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-premium text-white">
      <div className="pointer-events-none absolute inset-0 noise-layer opacity-25" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-red-600/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-28 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[30%] right-[15%] h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <section className="grid gap-8 py-14 md:grid-cols-2 md:py-20 lg:gap-12 lg:py-24">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur-xl">
              Media urbana · YouTube · Estudio
            </p>
            <h1 className="text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-fuchsia-400 bg-clip-text text-transparent">Dímelo Kombete</span>
            </h1>
            <p className="text-lg text-white/80">
              Entrevistas, clips, música, cultura urbana y contenido real pa’ la calle.
            </p>
            <p className="max-w-xl text-white/70">
              Un espacio pa’ artistas, creadores y voces emergentes que quieren sonar, verse y conectar con su público.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#clips" className="rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 px-6 py-3 text-center font-bold text-white shadow-[0_0_30px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(251,191,36,0.45)]">Ver clips</a>
              <ExternalLink href={whatsappUrl} className="rounded-full bg-gradient-to-r from-emerald-500 to-green-400 px-6 py-3 text-center font-bold text-black shadow-[0_0_30px_rgba(16,185,129,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(16,185,129,0.5)]">● Contactar por WhatsApp</ExternalLink>
              <a href="#estudio" className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-center font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-amber-300/50 hover:bg-white/15">Reservar estudio</a>
            </div>
          </div>

          <article className="rounded-3xl border border-white/15 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-fuchsia-300/50">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Dímelo Kombete Live</h2>
              <span className="rounded-full border border-fuchsia-300/50 bg-fuchsia-500/20 px-3 py-1 text-xs font-semibold text-fuchsia-100">Nuevo contenido</span>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video">
              <img src={clips[0].image} alt={clips[0].title} className="h-full w-full object-contain" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-white/80">
              {['Clips', 'Entrevistas', 'Estudio', 'Promoción'].map((item) => (
                <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1">{item}</span>
              ))}
            </div>
          </article>
        </section>

        <section id="clips" className="py-14 md:py-20">
          <p className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-100">Contenido real</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Clips recientes</h2>
          <p className="mt-3 max-w-2xl text-white/75">Contenido, entrevistas y momentos destacados de Dímelo Kombete.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clips.map((clip) => (
              <article key={clip.image} className="group rounded-3xl border border-white/10 bg-white/[0.07] p-3 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.1]">
                <div className="relative overflow-hidden rounded-2xl bg-black aspect-video">
                  <img src={clip.image} alt={clip.title} className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white shadow-[0_0_30px_rgba(255,255,255,0.2)] backdrop-blur-md">▶</div>
                </div>
                <div className="p-3">
                  <p className="text-xs uppercase tracking-widest text-white/60">YouTube Clip</p>
                  <h3 className="mt-2 min-h-[3rem] text-base font-semibold">{clip.title}</h3>
                  <ExternalLink href={channelUrl} className="mt-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-amber-300/60 hover:bg-white/15">Ver clip</ExternalLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="estudio" className="py-14 md:py-20">
          <h2 className="text-4xl font-black sm:text-5xl">Estudio de Grabación</h2>
          <p className="mt-3 text-lg text-white/80">Citas, grabaciones y precios para artistas emergentes.</p>
          <p className="mt-3 max-w-3xl text-white/70">Si eres artista emergente y quieres grabar, coordinar una sesión o preguntar por precios, escríbenos y separamos tu espacio.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_0_35px_rgba(251,191,36,0.2)]">
                <p className="text-2xl">{service.icon}</p>
                <h3 className="mt-3 font-semibold text-white">{service.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="py-14 md:py-20">
          <h2 className="text-3xl font-black sm:text-4xl">Conecta con Dímelo Kombete</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {socialLinks.map((social) => (
              <ExternalLink key={social.label} href={social.href} className={`rounded-2xl border px-4 py-3 text-center font-semibold transition hover:-translate-y-0.5 ${socialStyles[social.style]}`}>
                {social.label}
              </ExternalLink>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 bg-black/35">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-white/75 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-white">Dímelo Kombete</p>
          <div className="flex flex-wrap gap-2">
            <a href="#clips" className="rounded-full border border-white/15 px-3 py-1">Clips</a>
            <a href="#estudio" className="rounded-full border border-white/15 px-3 py-1">Estudio</a>
            <ExternalLink href={whatsappUrl} className="rounded-full border border-emerald-300/30 bg-emerald-500/20 px-3 py-1 text-emerald-100">WhatsApp</ExternalLink>
          </div>
          <p>© 2026 Dímelo Kombete. Todos los derechos reservados.</p>
        </div>
      </footer>

      <ExternalLink
        href={whatsappUrl}
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 px-4 py-3 font-bold text-black shadow-[0_0_35px_rgba(16,185,129,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(16,185,129,0.6)]"
      >
        <span className="text-lg">💬</span>
        <span className="hidden sm:inline">WhatsApp</span>
        <span className="sr-only">Contactar por WhatsApp</span>
      </ExternalLink>
    </main>
  );
}
