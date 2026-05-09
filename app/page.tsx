import { CategoryCard } from '@/components/CategoryCard';
import { ExternalLink } from '@/components/ExternalLink';
import { SocialLink } from '@/components/SocialLink';
import { VideoCard } from '@/components/VideoCard';
import {
  clips,
  services,
  socialLinks,
  whatsappUrl,
  youtubeChannelUrl,
} from '@/lib/site-data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-urban text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 backdrop-blur">
          <div>
            <p className="text-xl font-black tracking-wide text-neon-pink">Dímelo Kombete</p>
            <p className="text-xs text-white/70">El programa de la gente · Cultura urbana · Música</p>
          </div>
          <nav className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} label={link.label} href={link.href} />
            ))}
            <ExternalLink href={youtubeChannelUrl} className="btn-neon">
              Ver canal
            </ExternalLink>
          </nav>
        </header>

        <section className="grid gap-6 rounded-3xl border border-electric/30 bg-black/40 p-6 shadow-neon md:grid-cols-2 md:p-10">
          <div className="space-y-5">
            <p className="inline-block rounded-full border border-neon-pink/40 px-3 py-1 text-xs uppercase tracking-widest text-neon-pink">
              Puerto Rico en alto
            </p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Dímelo Kombete</h1>
            <p className="text-base text-white/80 sm:text-lg">
              El spot oficial donde el talento de Puerto Rico se hace mundial. Música, deportes, moda y belleza con flow boricua.
            </p>
            <div className="flex flex-wrap gap-3">
              <ExternalLink href={youtubeChannelUrl} className="btn-neon inline-flex">Suscríbete ahora</ExternalLink>
              <ExternalLink href={whatsappUrl} className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold hover:border-neon-pink">WhatsApp</ExternalLink>
            </div>
          </div>
          <div className="hero-image" role="img" aria-label="Banner Dímelo Kombete" />
        </section>

        <section className="space-y-4" id="clips">
          <h2 className="text-2xl font-bold text-electric">Clips recientes</h2>
          <p className="text-sm text-white/75 sm:text-base">Contenido, entrevistas y momentos destacados de Dímelo Kombete.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clips.map((video) => (
              <VideoCard key={video.title} video={video} />
            ))}
          </div>
        </section>

        <section className="space-y-4" id="studio">
          <h2 className="text-2xl font-bold text-neon-orange">Dímelo Kombete Studio</h2>
          <p className="text-white/80">Separa tu entrevista, promo o colaboración en nuestro studio y sal en el programa.</p>
          <ExternalLink href={whatsappUrl} className="btn-neon inline-flex">
            Reservar por WhatsApp
          </ExternalLink>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-neon-orange">Categorías</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((category) => (
              <CategoryCard key={category.title} category={category} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-neon-yellow/30 bg-gradient-to-r from-neon-pink/20 via-electric/20 to-neon-orange/20 p-8 text-center shadow-neon" id="social">
          <h2 className="text-3xl font-black">Súmate al movimiento</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Cada click apoya la cultura urbana boricua. Conecta con entrevistas, estrenos y energía real de la calle.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <SocialLink key={`cta-${link.label}`} label={link.label} href={link.href} />
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 pt-6 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Dímelo Kombete. Todos los caminos llevan al canal oficial.</p>
        </footer>
      </div>

      <ExternalLink
        href={whatsappUrl}
        className="fixed bottom-6 right-6 z-20 rounded-full border border-neon-pink/70 bg-neon-pink px-4 py-3 text-sm font-bold text-black shadow-neon"
      >
        WhatsApp
      </ExternalLink>
    </main>
  );
}
