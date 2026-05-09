import { CategoryCard } from '@/components/CategoryCard';
import { ExternalLink } from '@/components/ExternalLink';
import { SocialLink } from '@/components/SocialLink';
import { VideoCard } from '@/components/VideoCard';
import { categories, channelUrl, featuredVideos } from '@/lib/site-data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-urban text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 backdrop-blur">
          <div>
            <p className="text-xl font-black tracking-wide text-neon-pink">Dímelo Kombete</p>
            <p className="text-xs text-white/70">El programa de la gente · Cultura urbana · Música</p>
          </div>
          <nav className="flex items-center gap-3">
            <SocialLink label="YouTube" href={channelUrl} />
            <ExternalLink href={channelUrl} className="btn-neon">Ver canal</ExternalLink>
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
            <ExternalLink href={channelUrl} className="btn-neon inline-flex">Suscríbete ahora</ExternalLink>
          </div>
          <div className="hero-image" role="img" aria-label="Banner Dímelo Kombete" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-electric">Featured Clips</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredVideos.map((video) => (
              <VideoCard key={video.title} video={video} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-neon-orange">Categorías</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.title} category={category} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-neon-yellow/30 bg-gradient-to-r from-neon-pink/20 via-electric/20 to-neon-orange/20 p-8 text-center shadow-neon">
          <h2 className="text-3xl font-black">Súmate al movimiento</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Cada click apoya la cultura urbana boricua. Conecta con entrevistas, estrenos y energía real de la calle.
          </p>
          <ExternalLink href={channelUrl} className="btn-neon mt-6 inline-flex">Ir a YouTube</ExternalLink>
        </section>

        <footer className="border-t border-white/10 pt-6 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Dímelo Kombete. Todos los caminos llevan al canal oficial.</p>
        </footer>
      </div>
    </main>
  );
}
