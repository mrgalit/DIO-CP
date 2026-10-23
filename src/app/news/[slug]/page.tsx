import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LinkedText } from "@/components/LinkedText";
import { SiteFooter } from "@/components/SiteFooter";
import { boilerplates, contactEmail, releases } from "@/content/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return releases.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const r = releases.find((x) => x.slug === slug);
  if (!r) return {};
  return {
    title: r.title,
    description: r.summary,
    alternates: { canonical: `/news/${r.slug}` },
    openGraph: { type: "article", url: `/news/${r.slug}`, title: r.title, description: r.summary, images: [{ url: r.image.src }] },
    twitter: { card: "summary_large_image", title: r.title, description: r.summary, images: [r.image.src] },
  };
}

export default async function ReleasePage({ params }: Params) {
  const { slug } = await params;
  const r = releases.find((x) => x.slug === slug);
  if (!r) notFound();

  const heading = (
    <div className="flex flex-col gap-6">
      <span className="label text-[13px] text-brass-text">
        Press release · {r.city} · {r.date}
      </span>
      <h1 className="text-[38px] leading-[1.06] text-harbor md:text-[60px]">{r.title}</h1>
      <p className="font-serif text-[22px] leading-snug text-slate-body md:text-[26px]">{r.subhead}</p>
    </div>
  );

  return (
    <>
      <header className="border-b border-rule bg-stone">
        <div className="wrap flex h-[84px] items-center justify-between">
          <Link href="/" aria-label="DIO Capital Partners home" className="flex items-center">
            <Image src="/assets/DIO-Logo.png" alt="DIO Capital" width={354} height={252} priority className="h-14 w-auto" />
          </Link>
          <Link href="/#news" className="inline-flex min-h-[44px] items-center text-[15px] font-semibold">
            All news
          </Link>
        </div>
      </header>

      <main>
        <article>
          {r.image.layout === "portrait" ? (
            <div className="wrap grid items-center gap-10 py-16 md:grid-cols-[7fr_5fr] md:gap-16 md:py-[72px]">
              {heading}
              <figure className="flex flex-col gap-3">
                <Image
                  src={r.image.src}
                  alt={r.image.alt}
                  width={r.image.width}
                  height={r.image.height}
                  priority
                  sizes="(min-width: 768px) 450px, 100vw"
                  className="aspect-[4/5] w-full rounded-sm object-cover"
                  style={{ objectPosition: r.image.position }}
                />
                {r.image.caption && <figcaption className="text-sm text-slate-muted">{r.image.caption}</figcaption>}
              </figure>
            </div>
          ) : (
            <>
              <div className="wrap max-w-[1000px] py-16 md:pt-20">{heading}</div>
              <div className="wrap pb-14">
                <Image
                  src={r.image.src}
                  alt={r.image.alt}
                  width={r.image.width}
                  height={r.image.height}
                  priority
                  sizes="(min-width: 1200px) 1120px, 100vw"
                  className="aspect-[21/9] w-full rounded-sm object-cover"
                  style={{ objectPosition: r.image.position }}
                />
              </div>
            </>
          )}

          <div className="wrap grid items-start gap-12 pb-24 md:grid-cols-[8fr_4fr] md:gap-20 md:pb-[120px]">
            <div className="flex flex-col gap-6 text-lg leading-[1.7] text-[#2B3A46]">
              <p>
                <strong>
                  {r.city}, {r.date}
                </strong>
                . {r.lead}
              </p>
              {r.body.map((b, i) =>
                b.type === "p" ? (
                  <p key={i}>
                    <LinkedText text={b.text} />
                  </p>
                ) : (
                  <figure key={i} className="my-2 flex flex-col gap-3 border-l-2 border-brass py-2 pl-8">
                    <blockquote className="font-serif text-2xl leading-snug text-harbor md:text-[28px]">“{b.text}”</blockquote>
                    <figcaption className="text-[15px] text-slate-muted">{b.by}</figcaption>
                  </figure>
                ),
              )}
              {boilerplates.map((bp, i) => (
                <div key={bp.title} className={`flex flex-col gap-3 ${i === 0 ? "mt-4 border-t border-rule-strong pt-8" : ""}`}>
                  <h2 className="text-2xl text-harbor">{bp.title}</h2>
                  <p className="text-base text-slate-muted">
                    <LinkedText text={bp.text} />
                  </p>
                </div>
              ))}
            </div>

            <aside className="flex flex-col gap-6 md:sticky md:top-8">
              <div className="border border-rule bg-white p-7">
                <span className="label block pb-4 text-brass-text">Transaction</span>
                <dl>
                  {r.facts.map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4 border-t border-rule-soft py-3 text-[15px] leading-snug">
                      <dt className="text-slate-faint">{label}</dt>
                      <dd className="text-right font-semibold text-harbor">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="flex flex-col gap-2 bg-navy p-7 text-white">
                <span className="label text-brass">Media contact</span>
                <a href={`mailto:${contactEmail}`} className="inline-flex min-h-[44px] items-center font-semibold text-white hover:text-mist-lighter">
                  {contactEmail}
                </a>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
