import { channelUrl, type CategoryItem } from '@/lib/site-data';
import { ExternalLink } from './ExternalLink';

type CategoryCardProps = {
  category: CategoryItem;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <ExternalLink href={channelUrl} className="rounded-2xl border border-white/10 bg-black/30 p-4 hover:border-neon-orange/60">
      <p className="text-lg font-bold">{category.title}</p>
      <p className="mt-2 text-sm text-white/70">{category.description}</p>
    </ExternalLink>
  );
}
