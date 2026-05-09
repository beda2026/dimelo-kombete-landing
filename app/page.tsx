'use client';

import { useState } from 'react';
import CategoryCard from '@/components/CategoryCard';
import ExternalLink from '@/components/ExternalLink';
import SocialLink from '@/components/SocialLink';
import VideoCard from '@/components/VideoCard';
import { categories, navLinks, siteContent, socialLinks, SITE_URL, videoCards } from '@/lib/site-data';

function FallbackImage({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`${className} bg-gradient-to-br from-[#12142a] via-[#2a1140] to-[#1b3466]`} aria-label={alt} role="img" />;
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-10 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 backdrop-blur sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FallbackImage src="/assets/kombete-logo.png" alt="Logo Dímelo Kombete" className="h-12 w-12 rounded-full object-cover" />
            <p className="text-lg font-bold tracking-wide text-white">Dímelo Kombete</p>
          </div>
          <nav className="flex gap-3 sm:gap-5">
            {navLinks.map((item) => (
              <ExternalLink key={item.label} href={item.href} className="text-sm text-white/80 transition hover:text-fuchsia-300">
                {item.label}
              </ExternalLink>
            ))}
          </nav>
        </div>
      </header>

      <section className="grid gap-6 pb-14 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5">
          <p className="inline-flex rounded-full border border-fuchsia-300/40 px-4 py-1 text-xs uppercase tracking-[0.2em] text-fuchsia-200">Puerto Rico media</p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl">{siteContent.brand}</h1>
          <p className="text-lg text-cyan-200">{siteContent.tagline}</p>
          <p className="text-white/75">{siteContent.description}</p>
          <div className="flex flex-wrap gap-3">
            {siteContent.heroCtas.map((cta, idx) => (
              <ExternalLink
                key={cta.label}
                href={cta.href}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${idx === 0 ? 'bg-fuchsia-500 text-white shadow-neon hover:bg-fuchsia-400' : 'border border-cyan-300/50 text-cyan-200 hover:border-fuchsia-300/50 hover:text-fuchsia-200'}`}
              >
                {cta.label}
              </ExternalLink>
            ))}
          </div>
        </div>
        <FallbackImage src="/assets/kombete-banner.jpg" alt="Banner Dímelo Kombete" className="h-72 w-full rounded-3xl border border-white/10 object-cover shadow-neon sm:h-96" />
      </section>

      <section className="pb-14">
        <h2 className="text-3xl font-bold">Clips destacados</h2>
        <p className="mt-2 text-white/70">Momentos, entrevistas y cultura con flow boricua.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {videoCards.map((card) => (
            <VideoCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="pb-14">
        <h2 className="text-3xl font-bold">Lo que se vive en Kombete</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      <section className="mb-14 rounded-3xl border border-fuchsia-300/30 bg-gradient-to-r from-fuchsia-600/20 via-sky-500/10 to-amber-400/20 p-8 text-center shadow-neon">
        <h2 className="text-3xl font-bold">Sigue el movimiento</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">Nuevos clips, entrevistas y momentos de la cultura urbana de Puerto Rico.</p>
        <ExternalLink href={SITE_URL} className="mt-5 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-fuchsia-200">
          Ir al canal de YouTube
        </ExternalLink>
      </section>

      <footer className="border-t border-white/10 py-8">
        <p className="text-lg font-bold">Dímelo Kombete</p>
        <p className="mt-2 text-sm text-white/70">Cultura urbana, música y talento de Puerto Rico para el mundo.</p>
        <div className="mt-4 flex gap-3">
          {socialLinks.map((social) => (
            <SocialLink key={social.label} {...social} />
          ))}
        </div>
      </footer>
    </main>
  );
}
