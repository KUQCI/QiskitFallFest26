import Image from "next/image";
import type { WorkshopBrand } from "@/content/agenda";
import { cn } from "@/lib/utils";

export function WorkshopBranding({ items, compact = false, floating = false }: {
  items?: WorkshopBrand[];
  compact?: boolean;
  floating?: boolean;
}) {
  if (!items?.length) return null;
  return <div className={cn("flex flex-wrap items-center gap-3", floating && "agenda-workshop-visual")}>
    {items.map(item => <div key={item.name} className={cn("logo-plate relative shrink-0", compact ? "h-14 w-14" : "h-16 w-16")}>
      <Image src={item.logo} alt={`${item.name} logo`} fill sizes={compact ? "56px" : "64px"} className="object-contain p-1" />
    </div>)}
  </div>;
}
