import { ExternalLink } from './ExternalLink';

type SocialLinkProps = {
  label: string;
  href: string;
  description: string;
};

export function SocialLink({ label, href, description }: SocialLinkProps) {
  const style =
    label === 'Instagram'
      ? 'from-pink-500/30 via-purple-500/20 to-orange-500/20 border-pink-300/40'
      : label === 'WhatsApp'
        ? 'from-emerald-500/30 via-green-500/20 to-emerald-300/10 border-emerald-300/40'
        : 'from-red-500/30 via-orange-500/15 to-black/20 border-red-300/40';

  return (
    <ExternalLink href={href} className={`rounded-2xl border bg-gradient-to-br p-4 ${style} hover:-translate-y-0.5 transition`}>
      <p className="text-lg font-bold">{label}</p>
      <p className="mt-1 text-sm text-white/80">{description}</p>
    </ExternalLink>
  );
}
