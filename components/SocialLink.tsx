import { ExternalLink } from './ExternalLink';

type SocialLinkProps = {
  label: string;
  href: string;
  description: string;
};

export function SocialLink({ label, href, description }: SocialLinkProps) {
  const style =
    label === 'Instagram'
      ? 'from-[#3a2330]/70 via-[#2a1d25]/65 to-black/70 border-[#c49b68]/35'
      : label === 'WhatsApp'
        ? 'from-emerald-900/65 via-emerald-800/50 to-black/70 border-emerald-300/35'
        : 'from-red-950/70 via-red-900/60 to-black/70 border-red-400/35';

  return (
    <ExternalLink href={href} className={`rounded-2xl border bg-gradient-to-br p-4 ${style} shadow-[0_10px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:border-[#d8bf8a]/45 transition`}>
      <p className="text-lg font-bold">{label}</p>
      <p className="mt-1 text-sm text-white/80">{description}</p>
    </ExternalLink>
  );
}
