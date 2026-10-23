"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Partner } from "@/content/site";

export function PartnerCards({ partners }: { partners: Partner[] }) {
  const [active, setActive] = useState<Partner | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-3">
        {partners.map((p) => (
          <article key={p.name} className="flex flex-col gap-4 border border-rule bg-white p-8">
            <Image src={p.img.src} alt={p.img.alt} width={120} height={120} className="h-[120px] w-[120px] rounded-sm object-cover" />
            <div className="flex flex-col gap-1">
              <h3 className="text-[28px] leading-tight text-harbor">{p.name}</h3>
              <span className="text-sm font-semibold text-navy">{p.role}</span>
            </div>
            <p className="flex-grow text-[15px] text-slate-muted">{p.bio}</p>
            <div className="flex gap-6 border-t border-rule-soft pt-2 text-[15px] font-semibold">
              <button type="button" onClick={() => setActive(p)} className="min-h-[44px] text-navy hover:text-navy-deep">
                Read full bio
              </button>
              <a href={p.linkedin} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center">
                LinkedIn
              </a>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 md:items-center" role="dialog" aria-modal="true" aria-labelledby="partner-title">
          <div className="fixed inset-0 bg-harbor/70" onClick={() => setActive(null)} aria-hidden="true" />
          <div className="relative my-8 w-full max-w-2xl border border-rule bg-white p-8 shadow-2xl">
            <div className="flex items-start gap-5">
              <Image src={active.img.src} alt={active.img.alt} width={80} height={80} className="h-20 w-20 rounded-sm object-cover" />
              <div className="flex flex-col gap-1">
                <h3 id="partner-title" className="text-[28px] leading-tight text-harbor">{active.name}</h3>
                <span className="text-sm font-semibold text-navy">{active.role}</span>
              </div>
            </div>
            <div className="mt-6 whitespace-pre-line leading-relaxed text-slate-body">{active.longBio}</div>
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-rule-soft pt-4">
              <a href={active.linkedin} target="_blank" rel="noreferrer" className="font-semibold">
                LinkedIn
              </a>
              <button ref={closeRef} type="button" onClick={() => setActive(null)} className="btn-primary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
