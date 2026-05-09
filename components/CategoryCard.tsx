import { whatsappUrl, type CategoryItem } from '@/lib/site-data';
import { ExternalLink } from './ExternalLink';

type CategoryCardProps = {
  category: CategoryItem;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <ExternalLink href={whatsappUrl} className="rounded-3xl border border-white/15 bg-black/40 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-0.5 hover:border-[#d8bf8a]/60 hover:bg-white/[0.06]">
      <p className="text-lg font-bold text-white">{category.title}</p>
      <p className="mt-2 text-sm text-white/70">{category.description}</p>
    </ExternalLink>
  );
}
