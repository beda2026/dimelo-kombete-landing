import { type VideoItem } from '@/lib/site-data';
import { ExternalLink } from './ExternalLink';

type VideoCardProps = {
  video: VideoItem;
};

export function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-[0_18px_45px_rgba(4,7,20,0.55)] transition duration-300 hover:-translate-y-1 hover:border-[#d8bf8a]/50 hover:shadow-[0_14px_30px_rgba(120,90,45,0.22)]">
      <ExternalLink href={video.href} className="group block">
        <div className="relative flex aspect-video items-center justify-center bg-black">
          <img
            src={video.image}
            alt={video.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/55 text-white/90">
            <span className="ml-0.5 text-base">▶</span>
          </div>
        </div>
        <div className="space-y-3 p-5">
          <p className="inline-flex rounded-full border border-[#d8bf8a]/40 bg-[#d8bf8a]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#ead9b7]">
            {video.category}
          </p>
          <h3 className="line-clamp-2 min-h-[3.5rem] text-base font-semibold text-white group-hover:text-[#ead9b7]">{video.title}</h3>
          <span className="inline-flex items-center rounded-full border border-[#d8bf8a]/50 px-4 py-2 text-sm font-semibold text-[#d8bf8a] transition group-hover:bg-[#d8bf8a]/10">
            Ver clip
          </span>
        </div>
      </ExternalLink>
    </article>
  );
}
