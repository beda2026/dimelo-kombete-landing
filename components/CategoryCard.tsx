import ExternalLink from './ExternalLink';

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
  accent: string;
};

export default function CategoryCard({ title, description, href, accent }: CategoryCardProps) {
  return (
    <ExternalLink
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d18] p-6 transition hover:-translate-y-1 hover:border-sky-300/50"
      ariaLabel={`${title} - Ver en YouTube`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-90`} />
      <div className="relative space-y-3">
        <div className="h-9 w-9 rounded-full bg-white/15 ring-1 ring-white/30" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/75">{description}</p>
      </div>
    </ExternalLink>
  );
}
