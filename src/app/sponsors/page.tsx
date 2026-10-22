import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { withBasePath } from "@/content/assets";
import { agendaPageContent } from "@/content/agenda";

export const metadata: Metadata = {
  title: agendaPageContent.title,
  robots: { index: false, follow: true },
};

/** Static-host-compatible forwarding for existing Partners-page bookmarks. */
export default function FormerPartnersPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${withBasePath("/agenda/")}`} />
      <Container className="py-20">
        <h1 className="text-3xl font-semibold">{agendaPageContent.title}</h1>
        <Link href="/agenda/" className="mt-5 inline-flex min-h-11 items-center font-semibold text-gold underline underline-offset-4">{agendaPageContent.legacyLabel}</Link>
      </Container>
    </>
  );
}
