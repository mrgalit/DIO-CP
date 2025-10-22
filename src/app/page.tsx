"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase, Layers, Clock, Factory, Users } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            DIO Capital Partners
          </motion.h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Patient capital + operating rigor for founder-led industrials.
          </p>
          <div className="mt-8">
            <Button
              className="bg-black text-white hover:opacity-90"
              onClick={() => (window.location.href = "mailto:info@dio-capital.com")}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </section>

      {/* Example Icons row */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-gray-700">
        <div className="flex flex-col items-center gap-2">
          <Briefcase />
          <span>Founder-owned</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Layers />
          <span>Value creation</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Clock />
          <span>Long-term</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Factory />
          <span>Industrial focus</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Users />
          <span>Operators first</span>
        </div>
      </section>

      {/* Simple modal demo */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <Button
          className="bg-gray-100 hover:bg-gray-200"
          onClick={() => setOpen(true)}
        >
          Read more (modal demo)
        </Button>

        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div
              className="relative z-10 max-w-lg w-full bg-white rounded-2xl p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold mb-2">About DIO</h2>
              <p className="text-gray-600">
                This is a placeholder modal. We’ll swap this with your Partners “Read more”
                content once we paste the full site.
              </p>
              <div className="mt-6 text-right">
                <Button className="bg-black text-white" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
