"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Briefcase, Layers, Clock, Factory, Users } from "lucide-react";

// 1) Types
type Partner = {
  name: string;
  role: string;
  bio: string;
  longBio: string;
  linkedin: string;
};

// 2) State typed to allow imgSrc
export default function DioCapitalFullWebsitePreview() {
  const [activePartner, setActivePartner] = useState<(Partner & { imgSrc: string }) | null>(null);

  // 3) Partners typed
  const partners: Partner[] = [
    {
      name: "Isaac Tipton",
      role: "CEO, Prowire USA & Partner, DIO Capital",
      bio:
        "CEO of Prowire USA; operator-investor with finance, M&A and strategy depth; led $200M+ acquisitions; ex-Honeywell engineer; Purdue ME and UVA Darden MBA.",
      longBio:
        "Isaac is an operator with deep finance, M&A, and strategy experience across manufacturing and distribution. He is CEO of Prowire USA, where he leads commercial growth and day-to-day operations after a career spanning product management, marketing, and corporate development. He has completed more than $200 million in acquisitions and knows how to integrate, professionalize, and scale founder-led companies.\n\nEarlier, Isaac started as a mechanical engineer at Honeywell before moving into leadership roles that blend hands-on operations with disciplined capital allocation. He holds a B.S. in Mechanical Engineering from Purdue and an MBA from UVA Darden (Shermet Award). Based in Phoenix, he brings a pragmatic, partnership-first approach focused on building durable businesses.",
      linkedin: "https://linkedin.com/in/isaactipton",
    },
    {
      name: "David Hewitt",
      role: "Operating Partner & CEO, DIO Capital",
      bio:
        "Operator-CEO who scaled startups and international multi-site businesses; full P&L leadership to $250M revenue; drives transformations while preserving culture, customers, and execution excellence.",
      longBio:
        "David is a hands-on executive who has led startups, turnarounds, and multi-site international operations across industrials and interconnect. He has managed full P&Ls from early stage to $250MM+ revenue, delivering performance improvements through disciplined operations, customer focus, and team development.\n\nAt DIO Capital, David partners with founders pursuing succession or the next stage of growth. His approach is collaborative and long-term: protect what works, invest behind clear priorities, and implement the operating cadence that sustains results without losing the company’s DNA.",
      linkedin: "https://linkedin.com/in/davidhewitt",
    },
    {
      name: "Omri Margalit",
      role: "Partner, Strategy & Supply Chain",
      bio:
        "Global operator in supply chain and strategy; led AWS infrastructure supply chains and Samsung initiatives; ex-consultant; UVA Darden MBA, Ben-Gurion Math/Econ; high-altitude climber.",
      longBio:
        "Omri brings global experience in supply chain management, commercial strategy, and product leadership. At AWS he managed worldwide cloud-infrastructure supply chains, implementing innovations that supported rapid global expansion. Previously in Luxembourg, he restructured Amazon EU’s supplier framework to enable scalable market entry. He also served at Samsung’s Seoul headquarters, helping set cross-company strategy and developing the semiconductor division’s COVID-19 response. He began his career in financial consulting on large energy and transport projects.\n\nOmri holds an MBA from UVA Darden (Genovese Fellowship) and a B.S. in Mathematics & Economics from Ben-Gurion University. An avid high-altitude alpine climber, he brings calm execution under pressure and a systems mindset to building resilient, scalable operations.",
      linkedin: "https://linkedin.com/in/omrimargalit",
    },
  ];

  return (
    <div className="font-inter text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur border-b border-gray-200">
        <img src="/assets/DIO Logo.jpg" alt="DIO Capital Logo" className="h-12 w-auto object-contain" />
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          {["Overview", "Who We Work With", "What We Bring", "Partners", "Contact"].map((section) => (
            <a key={section} href={`#${section.toLowerCase().replace(/ /g, "-")}`} className="hover:text-purple-700 transition">
              {section}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section
        className="relative h-screen bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative text-center z-10 px-6">
          <img src="/assets/DIO Logo.jpg" alt="DIO Logo" className="mx-auto mb-6 h-20 w-auto" />
          <h1 className="text-5xl md:text-6xl font-playfair mb-4">Building Enduring Businesses, Together.</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Helping founder-led businesses grow through thoughtful investment and hands-on partnership.
          </p>
          <Button asChild className="border-2 border-purple-300 text-white bg-purple-600/80 hover:bg-purple-700 transition-all duration-300 text-lg md:text-xl px-8 py-4">
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-24 px-8 grid md:grid-cols-2 gap-12 items-center bg-gray-50">
        <div>
          <h2 className="text-3xl font-playfair mb-4 text-purple-800">About DIO Capital Partners</h2>
          <p className="mb-4">
            DIO Capital Partners is an independent sponsor that partners with founder-owned businesses to help them scale responsibly. We blend operational
            experience, strategic insight, and patient capital to sustain long-term growth and success.
          </p>
          <p>Our goal is to preserve what makes each business special while professionalizing management and operations to unlock new potential.</p>
        </div>
        <div className="bg-gray-300 h-64 w-full rounded-xl flex items-center justify-center text-gray-600 italic">Image Placeholder</div>
      </section>

      {/* Who We Work With */}
      <section id="who-we-work-with" className="py-24 bg-white text-center">
        <h2 className="text-3xl font-playfair mb-6 text-purple-800">Who We Work With</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Factory className="text-purple-600 w-12 h-12 mx-auto mb-4" />, title: "Industrial & Manufacturing", desc: "Companies with strong market positions and room for operational improvement." },
            { icon: <Users className="text-purple-600 w-12 h-12 mx-auto mb-4" />, title: "Founder-Owned", desc: "Businesses where legacy and long-term partnership matter." },
            { icon: <Clock className="text-purple-600 w-12 h-12 mx-auto mb-4" />, title: "$2M–$12M EBITDA", desc: "Established companies ready to scale sustainably." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="p-8 rounded-xl shadow-md bg-gradient-to-b from-gray-50 to-purple-50 border border-gray-100 hover:shadow-lg transition">
              {icon}
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img src="/assets/Prowiresa_Website-Logo.png" alt="Prowire USA logo" className="h-14 w-auto mb-4" />
            <h3 className="text-2xl font-playfair text-purple-800 mb-3">
              Prowire USA <span className="text-sm text-gray-500">— Acquired July 2025. Seeking add-on acquisitions</span>
            </h3>
            <p className="text-gray-700">
              Prowire USA is a value-added distributor of wire, cable, and connector components serving the high-performance motorsports and aviation markets. Services
              include striping, spooling, kitting, and same-day shipping. Prowire wins through ease of business and superior service.
            </p>
            <a href="https://prowireusa.com" target="_blank" className="inline-block mt-4 text-purple-700 font-medium hover:underline" rel="noreferrer">
              Visit prowireusa.com →
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <img src="/assets/Prowire Kit_1.png" alt="Prowire kit photo" className="rounded-xl object-cover w-full h-36" />
            <img src="/assets/Prowire Kit_2.png" alt="Prowire kit board" className="rounded-xl object-cover w-full h-36" />
            <img src="/assets/Prowire strips.png" alt="Prowire wire strips" className="rounded-xl object-cover w-full h-36" />
          </div>
        </div>
      </section>

      {/* What We Bring */}
      <section id="what-we-bring" className="py-24 bg-gray-50 grid md:grid-cols-2 gap-12 items-center px-8">
        <div>
          <h2 className="text-3xl font-playfair mb-6 text-purple-800">What We Bring to the Table</h2>
          <p className="text-gray-700 mb-6">
            We bring a rare combination of operational leadership, strategic insight, and long-term investment perspective. Our approach enables founder-led businesses
            to thrive while maintaining their core identity and legacy.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { icon: <Briefcase className="text-purple-600 w-10 h-10 mb-2" />, title: "Operators First", desc: "We’ve run businesses ourselves — we understand execution, not just transactions." },
            { icon: <Layers className="text-purple-600 w-10 h-10 mb-2" />, title: "Strategic Depth", desc: "We bring insight from global leadership roles across operations, finance, and strategy." },
            { icon: <Clock className="text-purple-600 w-10 h-10 mb-2" />, title: "Long-Term Focus", desc: "We build sustainable value — not short-term flips — preserving founder legacy." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg border border-gray-100 transition">
              <div className="flex-shrink-0">{icon}</div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-purple-800 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-24 bg-white text-center">
        <h2 className="text-3xl font-playfair mb-6 text-purple-800">Our Partners</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-10">
          The DIO Capital team combines operational, financial, and strategic experience from world-class companies and global markets.
        </p>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {partners.map((p) => {
            const imgSrc =
              p.name === "Isaac Tipton"
                ? "/assets/Isaac Headshot.png"
                : p.name === "Omri Margalit"
                ? "/assets/Omri Headshot.png"
                : p.name === "David Hewitt"
                ? "/assets/David Headshot.jpeg"
                : "https://via.placeholder.com/200x200?text=Headshot";
            return (
              <div key={p.name} className="p-6 rounded-xl bg-gray-50 shadow-md border border-gray-100 hover:shadow-lg transition flex flex-col items-center">
                <img src={imgSrc} alt={`${p.name} photo`} className="rounded-full h-32 w-32 object-cover mb-4" />
                <h3 className="text-xl font-semibold text-purple-800 mb-1">{p.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{p.role}</p>
                <p className="text-gray-600 text-sm mb-4">{p.bio}</p>
                <button onClick={() => setActivePartner({ ...p, imgSrc })} className="text-purple-700 font-medium hover:underline">
                  Read more
                </button>
                <a href={p.linkedin} target="_blank" className="text-purple-700 font-medium hover:underline mt-3" rel="noreferrer">
                  LinkedIn →
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-purple-900 text-white text-center">
        <img src="/assets/DIO Logo.jpg" alt="DIO Logo" className="mx-auto mb-6 h-16 w-auto" />
        <h2 className="text-3xl font-playfair mb-6">Contact Us</h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-200">
          Interested in partnering or learning more about DIO Capital Partners? Reach out — we’d love to start a conversation.
        </p>
        <a href="mailto:info@dio-capital.com">
          <Button className="bg-white text-purple-900 font-semibold hover:bg-gray-100 transition-all">info@dio-capital.com</Button>
        </a>
      </section>

      <footer className="py-6 bg-[#1E2A38] text-center text-white text-sm">© 2025 DIO Capital Partners. All Rights Reserved.</footer>

      {/* Partner Modal */}
      {activePartner && (
        <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-labelledby="partner-title">
          <div className="absolute inset-0 bg-black/60" onClick={() => setActivePartner(null)}></div>
          <div className="relative mx-auto my-12 max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-[110]">
            <div className="flex items-start gap-4">
              <img src={activePartner.imgSrc} alt={`${activePartner.name} photo`} className="rounded-full h-20 w-20 object-cover" />
              <div>
                <h3 id="partner-title" className="text-2xl font-playfair text-purple-800">{activePartner.name}</h3>
                <p className="text-sm text-gray-500">{activePartner.role}</p>
              </div>
            </div>
            <div className="mt-4 whitespace-pre-line text-gray-700 leading-relaxed">{activePartner.longBio}</div>
            <div className="mt-6 flex items-center justify-between">
              <a href={activePartner.linkedin} target="_blank" className="text-purple-700 font-medium hover:underline" rel="noreferrer">LinkedIn →</a>
              <Button onClick={() => setActivePartner(null)} className="bg-purple-700 hover:bg-purple-800 text-white">Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
