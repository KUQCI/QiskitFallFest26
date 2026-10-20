import Image from "next/image";

/** Supplied artwork kept separate from the event's descriptive text. */
export function TrackCoverMark({ icon, logo, logoAlt = "" }: { icon?: string; logo?: string; logoAlt?: string }) {
  if (icon) {
    return <span className="track-cover-icon"><Image src={icon} alt="" width={56} height={56} /></span>;
  }
  if (logo) {
    return <span className="track-host-mark"><Image src={logo} alt={logoAlt} width={160} height={40} className="h-auto max-h-9 w-full object-contain" /></span>;
  }
  return null;
}
