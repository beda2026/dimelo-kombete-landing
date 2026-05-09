'use client';

import { useState } from 'react';
import ExternalLink from './ExternalLink';

type VideoCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  label: string;
  href: string;
};

export default function VideoCard({ title, description, imageSrc, label, href }: VideoCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <ExternalLink
      href={href}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-fuchsia-400/60 hover:shadow-neon"
      ariaLabel={`${title} - Ver en YouTube`}
    >
      <div className="relative aspect-video w-full">
        {imageFailed ? (
          <div className="h-full w-full bg-gradient-to-br from-[#12142a] via-[#2a1140] to-[#1b3466]" />
        ) : (
          <img
            src={imageSrc}
            alt={`Miniatura de ${title}`}
            className="h-full w-full object-cover"
            onError={() => setImageFailed(true)}
          />
        )}
        <span className="absolute left-3 top-3 rounded-full border border-fuchsia-300/50 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-fuchsia-200">
          {label}
        </span>
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
        <p className="pt-2 text-sm font-medium text-cyan-300 group-hover:text-fuchsia-300">Ver en YouTube →</p>
      </div>
    </ExternalLink>
  );
}
