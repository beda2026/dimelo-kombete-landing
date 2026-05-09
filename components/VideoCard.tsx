import { channelUrl, type VideoItem } from '@/lib/site-data';
import { ExternalLink } from './ExternalLink';

type VideoCardProps = {
  video: VideoItem;
};

export function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-[0_0_20px_rgba(0,194,255,0.12)] transition hover:border-electric/60 hover:shadow-[0_0_30px_rgba(255,47,177,0.22)]">
      <ExternalLink href={channelUrl} className="group block">
        <div className="relative flex aspect-video items-center justify-center bg-black">
          <img
            src={video.image}
            alt={video.title}
            className="h-full w-full object-contain"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/55 text-white/90">
            <span className="ml-0.5 text-base">▶</span>
          </div>
        </div>
        <div className="space-y-3 p-4">
          <p className="inline-flex rounded-full border border-electric/40 bg-electric/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-electric">
            {video.category}
          </p>
          <h3 className="line-clamp-2 font-semibold text-white group-hover:text-electric">{video.title}</h3>
          <span className="inline-flex items-center rounded-full border border-neon-orange/50 px-3 py-1 text-xs font-medium text-neon-orange transition group-hover:bg-neon-orange/10">
            Ver clip
          </span>
        </div>
      </ExternalLink>
    </article>
  );
}
