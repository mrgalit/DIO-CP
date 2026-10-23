import type { Metadata } from "next";
import Image from "next/image";
import { contactEmail, criteria, geography, partnerOneLiners, partners, platforms } from "@/content/site";

// Print source for the broker criteria PDF (public/DIO-Capital-Partners-Investment-Criteria.pdf).
// Regenerate the PDF after editing: see README.
export const metadata: Metadata = {
  title: "Investment criteria",
  robots: { index: false },
};

export default function CriteriaSheet() {
  const prowire = platforms[0];
  const rows = [
    ...criteria,
    { label: "Geography", ...geography },
    { label: "Add-ons", title: `For ${prowire.name}`, text: prowire.addonFit },
  ];

  return (
    <>
      <style>{`@page { size: 8.5in 11in; margin: 0 } body { background: #fff }`}</style>
      <div className="mx-auto flex h-[1056px] w-[816px] flex-col gap-4 bg-white px-[60px] pt-10 text-sm leading-normal text-ink">
        <div className="flex items-center justify-between border-b border-rule-strong pb-4">
          <Image src="/assets/DIO-Logo.png" alt="DIO Capital Partners" width={354} height={252} priority className="h-12 w-auto" />
          <div className="flex flex-col items-end gap-0.5">
            <span className="label text-brass-text">Investment criteria</span>
            <span className="text-[13px] text-slate-muted">For brokers, advisors &amp; intermediaries</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <h1 className="text-[30px] leading-[1.12] text-harbor [text-wrap:balance]">
            We buy and build founder-owned distribution and niche manufacturing businesses.
          </h1>
          <p className="max-w-[620px] text-[15px] text-slate-body">
            DIO Capital Partners is an independent sponsor. We invest patient capital and run the business alongside founders as hands-on
            operators, preserving what makes it special.
          </p>
        </div>

        <div className="border-b border-rule-strong">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-[150px_1fr] gap-5 border-t border-rule-strong py-2">
              <span className="label pt-[3px] text-brass-text">{r.label}</span>
              <div className="flex flex-col gap-0.5">
                <span className="font-serif text-[19px] leading-tight text-harbor">{r.title}</span>
                <span className="text-slate-body">{r.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-7">
          <div className="flex flex-col gap-2.5">
            <span className="label text-brass-text">Portfolio</span>
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-harbor">
                {prowire.name} <span className="font-normal text-slate-muted">· Platform · {prowire.acquired}</span>
              </span>
              <span className="text-[13px] text-slate-body">
                Value-added distributor of wire, cable, and connector components for motorsports and aviation.
              </span>
            </div>
            {prowire.addons.map((ad) => (
              <div key={ad.name} className="flex flex-col gap-0.5">
                <span className="font-semibold text-harbor">
                  {ad.name} <span className="font-normal text-slate-muted">· Add-on · {ad.date}</span>
                </span>
                <span className="text-[13px] text-slate-body">{ad.summary}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="label text-brass-text">Partners</span>
            {partners.map((p) => (
              <div key={p.name} className="flex flex-col gap-0.5">
                <span className="font-semibold text-harbor">{p.name}</span>
                <span className="text-[13px] text-slate-body">{partnerOneLiners[p.name]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="-mx-[60px] mt-auto flex items-center justify-between gap-6 bg-navy px-[60px] py-5 text-white">
          <div className="flex flex-col gap-0.5">
            <span className="font-serif text-[22px] leading-tight">Have a business that fits? Let us talk.</span>
            <span className="text-[13px] text-mist-lighter">Confidential inquiries welcome.</span>
          </div>
          <div className="flex flex-col items-end gap-0.5 text-[15px] font-semibold">
            <span>{contactEmail}</span>
            <span className="font-normal text-mist-lighter">dio-capital.com</span>
          </div>
        </div>
      </div>
    </>
  );
}
