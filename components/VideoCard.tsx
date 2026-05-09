import { channelUrl, type VideoItem } from '@/lib/site-data';
import { ExternalLink } from './ExternalLink';

type VideoCardProps = {
  video: VideoItem;
};

export function VideoCard({ video }: VideoCardProps) {
  return (
    <ExternalLink
      href={channelUrl}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-electric/60"
    >
      <div
        className="fallback-image"
        style={{
          backgroundImage:
            `linear-gradient(135deg, rgba(255,47,177,.45), rgba(0,194,255,.30), rgba(255,166,0,.35)), url('${video.image}')`,
        }}
      />
      <div className="space-y-1 p-4">
        <h3 className="font-semibold text-white group-hover:text-electric">{video.title}</h3>
        <p className="text-sm text-white/70">{video.category}</p>
      </div>
    </ExternalLink>
  );
}
