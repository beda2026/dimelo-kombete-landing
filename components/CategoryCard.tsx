import { whatsappUrl, type CategoryItem } from '@/lib/site-data';
import { ExternalLink } from './ExternalLink';

type CategoryCardProps = {
  category: CategoryItem;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <ExternalLink href={whatsappUrl} className="rounded-2xl border border-white/15 bg-black/35 p-4 hover:border-amber-300/60">
      <p className="text-lg font-bold">{category.title}</p>
      <p className="mt-2 text-sm text-white/70">{category.description}</p>
    </ExternalLink>
  );
}
