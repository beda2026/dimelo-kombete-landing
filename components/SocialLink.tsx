import { ExternalLink } from './ExternalLink';

type SocialLinkProps = {
  label: string;
  href: string;
};

export function SocialLink({ label, href }: SocialLinkProps) {
  return (
    <ExternalLink href={href} className="rounded-full border border-white/25 px-3 py-1 text-sm text-white/85 hover:border-neon-pink">
      {label}
    </ExternalLink>
  );
}
