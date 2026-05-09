import ExternalLink from './ExternalLink';

type SocialLinkProps = {
  label: string;
  href: string;
};

export default function SocialLink({ label, href }: SocialLinkProps) {
  return (
    <ExternalLink
      href={href}
      className="inline-flex rounded-full border border-cyan-300/40 px-4 py-2 text-sm text-cyan-200 transition hover:border-fuchsia-300/50 hover:text-fuchsia-200"
      ariaLabel={`Abrir ${label}`}
    >
      {label}
    </ExternalLink>
  );
}
