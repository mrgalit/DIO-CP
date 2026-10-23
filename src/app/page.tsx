import Image from "next/image";
import Link from "next/link";
import { PartnerCards } from "@/components/PartnerCards";
import { SiteFooter } from "@/components/SiteFooter";
import { contactEmail, criteria, criteriaPdf, faqs, partners, pillars, platforms, releases } from "@/content/site";

const nav = [
  { href: "#criteria", label: "What we look for" },
  { href: "#approach", label: "Approach" },
  { href: "#founders", label: "For founders" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#news", label: "News" },
  { href: "#team", label: "Team" },
];

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-rule bg-stone/90 backdrop-blur">
        <div className="wrap flex h-[84px] items-center justify-between">
          <a href="#top" aria-label="DIO Capital Partners home" className="flex items-center">
            <Image src="/assets/DIO-Logo.png" alt="DIO Capital" width={354} height={252} priority className="h-14 w-auto" />
          </a>
          <nav aria-label="Main" className="flex items-center gap-9 text-[15px] font-medium">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hidden text-ink no-underline hover:text-navy lg:inline">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary min-h-[44px]">
              Start a conversation
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="top" className="py-16 md:py-24">
          <div className="wrap grid items-center gap-12 md:grid-cols-[7fr_5fr] md:gap-[72px]">
            <div className="flex flex-col gap-7">
              <span className="label text-[13px] text-brass-text">Independent sponsor · Building enduring businesses</span>
              <h1 className="h1 max-w-[631px] text-harbor">
                We buy and build founder-owned businesses focused on distribution and niche manufacturing.
              </h1>
              <p className="max-w-[580px] text-xl text-slate-body">
                DIO Capital Partners works with established companies with a proven record of growth. We invest patient capital and run the
                business alongside you as hands-on operators, preserving what makes it special.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#contact" className="btn-primary">Start a conversation</a>
                <a href="#criteria" className="btn-outline">See what we look for</a>
              </div>
            </div>
            <figure className="relative mx-auto w-full max-w-[461px]">
              <Image
                src="/assets/prowire-hq-corner.jpg"
                alt="Prowire USA headquarters"
                width={1600}
                height={1200}
                priority
                sizes="(min-width: 768px) 461px, 100vw"
                className="aspect-[4/5] w-full rounded-sm object-cover object-right"
              />
              <figcaption className="absolute bottom-8 left-4 flex max-w-[260px] flex-col gap-1 bg-white px-6 py-5 shadow-[0_12px_32px_rgba(14,42,63,0.14)] md:-left-8">
                <span className="font-serif text-[22px] leading-tight text-harbor">Prowire USA</span>
                <span className="text-sm text-slate-body">Acquired July 2025</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Criteria */}
        <section id="criteria" className="border-y border-rule bg-white">
          <div className="wrap flex flex-col gap-8 py-[72px]">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="text-4xl leading-tight text-harbor">What we look for</h2>
              <span className="label text-slate-faint">Investment criteria</span>
            </div>
            <div className="grid md:grid-cols-3">
              {criteria.map((c, i) => (
                <div
                  key={c.label}
                  className={`flex flex-col gap-2.5 border-t border-rule-strong py-6 md:border-t-0 md:py-8 ${i > 0 ? "md:border-l md:pl-8" : ""} md:pr-8`}
                >
                  <span className="label text-brass-text">{c.label}</span>
                  <span className="font-serif text-[28px] leading-tight text-harbor">{c.title}</span>
                  <span className="text-[15px] text-slate-muted">{c.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-sm bg-stone px-6 py-5">
              <span className="text-[15px] text-slate-body">
                <strong className="text-harbor">Brokers and advisors:</strong> our criteria on one page, ready to forward.
              </span>
              <a href={criteriaPdf} download className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold">
                Download criteria sheet (PDF)
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 4v12" />
                  <path d="m6 10 6 6 6-6" />
                  <path d="M5 20h14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="py-24 md:py-32">
          <div className="wrap grid gap-10 md:grid-cols-[5fr_7fr] md:gap-24">
            <div className="flex flex-col gap-6">
              <span className="label text-brass-text">Our approach</span>
              <h2 className="h2 text-harbor">Operators, not financial engineers.</h2>
              <p className="text-slate-body">
                DIO Capital Partners is an independent sponsor that partners with founder-owned businesses to help them scale responsibly. We
                blend operational experience, strategic insight, and patient capital to sustain long-term growth and success.
              </p>
              <p className="text-slate-body">
                Our goal is to preserve what makes each business special while professionalizing management and operations to unlock new
                potential.
              </p>
            </div>
            <div className="border-b border-rule-strong">
              {pillars.map((p, i) => (
                <div key={p.title} className="grid grid-cols-[56px_1fr] gap-4 border-t border-rule-strong py-8 md:grid-cols-[72px_1fr]">
                  <span className="font-serif text-[40px] leading-none text-brass">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[28px] leading-tight text-harbor">{p.title}</h3>
                    <p className="text-slate-muted">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For founders */}
        <section id="founders" className="border-t border-rule bg-white py-24 md:py-[120px]">
          <div className="wrap grid gap-10 md:grid-cols-[4fr_8fr] md:gap-24">
            <div className="flex flex-col gap-5">
              <span className="label text-brass-text">For founders</span>
              <h2 className="h2 text-harbor">What partnering with us looks like.</h2>
              <p className="text-slate-body">The questions founders ask us first, answered plainly.</p>
              <a href="#contact" className="btn-outline self-start">Ask us anything else</a>
            </div>
            <dl className="border-b border-rule-strong">
              {faqs.map((f) => (
                <div key={f.q} className="grid gap-2 border-t border-rule-strong py-7 md:grid-cols-[5fr_7fr] md:gap-10">
                  <dt className="font-serif text-2xl leading-snug text-harbor">{f.q}</dt>
                  <dd className="text-base text-slate-muted">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="bg-harbor py-24 text-white md:py-[120px]">
          <div className="wrap flex flex-col gap-14">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="h2 text-white">Portfolio</h2>
              <span className="label text-brass">Platforms &amp; add-on acquisitions</span>
            </div>

            {platforms.map((pf) => (
              <article key={pf.name} className="flex flex-col gap-12">
                <div className="grid items-center gap-10 md:grid-cols-[6fr_5fr] md:gap-16">
                  <div className="flex flex-col gap-6">
                    <div className="self-start rounded-sm bg-white px-5 py-4">
                      <Image src={pf.logo.src} alt={pf.logo.alt} width={pf.logo.width} height={pf.logo.height} className="h-11 w-auto" />
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      <span className="label text-brass">Platform</span>
                      <span className="label text-mist">Acquired {pf.acquired}</span>
                      <span className="label text-mist">{pf.markets}</span>
                    </div>
                    <p className="font-serif text-[28px] leading-snug text-white">{pf.summary}</p>
                    <p className="text-mist-light">{pf.detail}</p>
                    <a href={pf.url} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-white hover:text-mist-lighter">
                      Visit {pf.domain}
                      <ArrowUpRight />
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {pf.photos.map((ph, i) => (
                      <Image
                        key={ph.src}
                        src={ph.src}
                        alt={ph.alt}
                        width={ph.width}
                        height={ph.height}
                        sizes={i === 0 ? "(min-width: 768px) 500px, 100vw" : "(min-width: 768px) 250px, 50vw"}
                        className={`w-full rounded-sm object-cover ${i === 0 ? "col-span-2 aspect-video" : "aspect-[4/3]"}`}
                      />
                    ))}
                  </div>
                </div>

                {pf.quote && (
                  <figure className="flex max-w-[880px] flex-col gap-4 border-t border-white/15 pt-10">
                    <blockquote className="font-serif text-2xl leading-snug text-white md:text-[32px]">“{pf.quote.text}”</blockquote>
                    <figcaption className="text-[15px] text-mist">{pf.quote.by}</figcaption>
                  </figure>
                )}

                <div className="flex flex-col gap-5 border-t border-white/15 pt-8">
                  <span className="label text-mist">Add-on acquisitions to {pf.name}</span>
                  <div className="grid gap-4 md:grid-cols-3">
                    {pf.addons.map((ad) => (
                      <div key={ad.name} className="flex flex-col gap-3 border border-white/20 p-7">
                        <span className="label text-brass">Add-on · {ad.date}</span>
                        <h3 className="text-[26px] leading-tight text-white">{ad.name}</h3>
                        <p className="flex-grow text-[15px] text-mist-light">{ad.summary}</p>
                        {ad.release && (
                          <Link href={`/news/${ad.release}`} className="inline-flex min-h-[44px] items-center text-[15px] font-semibold text-white hover:text-mist-lighter">
                            Read the announcement
                          </Link>
                        )}
                      </div>
                    ))}
                    <div className="flex flex-col gap-3 bg-white/[0.06] p-7">
                      <span className="label text-mist">Actively seeking</span>
                      <h3 className="text-[26px] leading-tight text-white">Know a business that fits {pf.name}?</h3>
                      <p className="flex-grow text-[15px] text-mist-light">{pf.addonFit}</p>
                      <a href="#contact" className="inline-flex min-h-[44px] items-center text-[15px] font-semibold text-white hover:text-mist-lighter">
                        Get in touch
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* News */}
        <section id="news" className="pb-24 pt-24 md:pt-[120px]">
          <div className="wrap flex flex-col gap-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="h2 text-harbor">News</h2>
              <span className="label text-brass-text">Announcements</span>
            </div>
            <div className="border-t border-rule-strong">
              {releases.map((r) => (
                <div key={r.slug} className="grid items-baseline gap-2 border-b border-rule-strong py-8 md:grid-cols-[200px_1fr_200px] md:gap-10">
                  <span className="label text-[13px] text-slate-muted">{r.date}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[28px] leading-tight text-harbor">{r.title}</h3>
                    <p className="text-base text-slate-muted">{r.summary}</p>
                  </div>
                  <Link href={`/news/${r.slug}`} className="inline-flex min-h-[44px] items-center text-[15px] font-semibold">
                    Read the release
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="pb-24 pt-16 md:pb-32 md:pt-24">
          <div className="wrap flex flex-col gap-14">
            <div className="flex max-w-[720px] flex-col gap-5">
              <span className="label text-brass-text">Our partners</span>
              <h2 className="h2 text-harbor">Experience from world-class companies and global markets.</h2>
              <p className="text-base text-slate-muted">
                <em className="font-serif text-xl text-harbor">D</em>avid, <em className="font-serif text-xl text-harbor">I</em>saac and{" "}
                <em className="font-serif text-xl text-harbor">O</em>mri. Not the most innovative name, we know. We save the creativity for the
                businesses.
              </p>
            </div>
            <PartnerCards partners={partners} />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-navy pb-24 pt-28 text-white">
          <div className="wrap grid items-end gap-10 md:grid-cols-[7fr_5fr] md:gap-16">
            <div className="flex flex-col gap-6">
              <Image src="/assets/dio-mark-white.png" alt="" width={264} height={121} className="h-auto w-24" />
              <h2 className="h2 text-white">Let us start a conversation.</h2>
              <p className="max-w-[520px] text-mist-lighter">
                Own a distribution or niche manufacturing business and thinking about what comes next? Or know one that fits Prowire USA? We
                would love to hear from you.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <a href={`mailto:${contactEmail}`} className="btn min-h-[56px] bg-white px-7 text-[17px] text-harbor hover:bg-stone hover:text-harbor">
                {contactEmail}
              </a>
              <span className="text-sm text-mist">Founders, advisors, and intermediaries welcome.</span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
