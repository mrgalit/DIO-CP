// All site copy lives here. To announce a new acquisition: add a release below,
// then add the company to `platforms` (or to a platform's `addons`).

export const siteUrl = "https://www.dio-capital.com";
export const contactEmail = "info@dio-capital.com";
export const criteriaPdf = "/DIO-Capital-Partners-Investment-Criteria.pdf";

type Img = { src: string; alt: string; width: number; height: number };

export const criteria = [
  {
    label: "Sector",
    title: "Distribution & niche manufacturing",
    text: "Companies with strong market positions who are well positioned for their next stage of growth.",
  },
  {
    label: "Ownership",
    title: "Founder-owned",
    text: "Founder-built businesses with deep community roots and a devoted customer base, where partnership matters.",
  },
  {
    label: "Size",
    title: "$2M–$12M EBITDA",
    text: "Consistently profitable companies with healthy margins and disciplined financials, ready to scale from a position of strength.",
  },
];

export const pillars = [
  { title: "Operators first", text: "We have run businesses ourselves. We are operators, not financial engineers." },
  {
    title: "Strategic depth",
    text: "Expertise in operations, finance, and strategy, with prior roles in businesses from $2M to $200M+.",
  },
  { title: "Growth focus", text: "We build sustainable value by supporting continued investment into the business." },
];

export const faqs = [
  { q: "Will my team stay?", a: "The people who built the business are why we invest in it." },
  { q: "Does the company keep its name?", a: "Yes. Your customers know your name, and we want to keep it that way." },
  {
    q: "What is my role after the sale?",
    a: "We agree on a defined transition period in which you help us take over day-to-day leadership and introduce key customers and suppliers. After that, what you do next is up to you. We'll also invite you to take part in the future of your company.",
  },
  {
    q: "How long does a sale take?",
    a: "Before the sale, we find that getting to know each other can take as little as a few months or as long as several years. Once you are ready to sell, expect 90–120 days from start to finish. We tell you early if it is not a fit.",
  },
  {
    q: "What changes for my customers and suppliers?",
    a: "Nothing on day one. Over time we invest in what helps them most, such as inventory, systems, and service.",
  },
];

export type Addon = { name: string; date: string; summary: string; release?: string };

export type Platform = {
  name: string;
  domain: string;
  url: string;
  logo: Img;
  acquired: string;
  markets: string;
  summary: string;
  detail: string;
  photos: [Img, Img, Img];
  quote?: { text: string; by: string };
  addonFit: string;
  addons: Addon[];
};

export const platforms: Platform[] = [
  {
    name: "Prowire USA",
    domain: "prowireusa.com",
    url: "https://www.prowireusa.com",
    logo: { src: "/assets/Prowiresa_Website-Logo.png", alt: "Prowire USA", width: 400, height: 132 },
    acquired: "July 2025",
    markets: "Motorsports & aviation",
    summary:
      "A value-added distributor of wire, cable, and connector components serving the high-performance motorsports and aviation markets.",
    detail: "Services include striping, spooling, kitting, and same-day shipping. Prowire makes buying complex parts – easy!",
    photos: [
      { src: "/assets/prowire-hq-entrance.jpg", alt: "Prowire USA headquarters", width: 1600, height: 1200 },
      { src: "/assets/prowire-kit-1.jpg", alt: "Prowire USA connector kit", width: 1000, height: 667 },
      { src: "/assets/prowire-strips.jpg", alt: "Prowire USA striped wire", width: 1000, height: 667 },
    ],
    quote: {
      text: "I’ve seen private equity destroy businesses. I wanted a partner who would understand what I have built and take it to the next level. DIO understood the business from day one.",
      by: "Joey Davitian, founder of Prowire USA",
    },
    addonFit: "Wire and cable, connector, and other passive interconnect businesses in motorsport or adjacent industries.",
    addons: [
      {
        name: "Terminal Specialty",
        date: "October 2026",
        summary: "Wholesale distributor of terminals, connectors, cable ties, shrink tube, spiral wrap and wire.",
        release: "prowire-acquires-terminal-specialty",
      },
    ],
  },
];

export type Partner = {
  name: string;
  role: string;
  img: Img;
  linkedin: string;
  bio: string;
  longBio: string;
};

export const partners: Partner[] = [
  {
    name: "Isaac Tipton",
    role: "Managing Partner, DIO Capital Partners · CEO, Prowire USA",
    img: { src: "/assets/isaac-tipton.jpg", alt: "Isaac Tipton", width: 800, height: 800 },
    linkedin: "https://linkedin.com/in/isaac-tipton",
    bio: "Operator-investor with finance, M&A and strategy depth. Led $200M+ in acquisitions. Former Honeywell engineer; UVA Darden MBA and Purdue ME; avid mountain biker and aspiring golfer.",
    longBio:
      "Isaac is an operator with deep finance, M&A, and strategy experience across manufacturing and distribution. He is CEO of Prowire USA, where he leads commercial growth and day-to-day operations after a career spanning product management, marketing, and corporate development. He has completed more than $200 million in acquisitions and knows how to integrate, professionalize, and scale founder-led companies.\n\nEarlier, Isaac started as a mechanical engineer at Honeywell before moving into leadership roles that blend hands-on operations with disciplined capital allocation. He holds a B.S. in Mechanical Engineering from Purdue and an MBA from UVA Darden (Shermet Award). Based in Phoenix, he brings a pragmatic, partnership-first approach focused on building durable businesses.",
  },
  {
    name: "David Hewitt",
    role: "Managing Partner, DIO Capital Partners",
    img: { src: "/assets/david-hewitt.jpg", alt: "David Hewitt", width: 800, height: 800 },
    linkedin: "https://linkedin.com/in/davidehewitt",
    bio: "Operator-CEO who scaled startups and international multi-site businesses, with full P&L leadership to $250M revenue. Drives transformations while preserving culture and customers.",
    longBio:
      "David is a hands-on executive who has led startups, turnarounds, and multi-site international operations across industrials and interconnect. He has managed full P&Ls from early stage to $250MM+ revenue, delivering performance improvements through disciplined operations, customer focus, and team development.\n\nAt DIO Capital, David partners with founders pursuing succession or the next stage of growth. His approach is collaborative and long-term: protect what works, invest behind clear priorities, and implement the operating cadence that sustains results without losing the company’s DNA.",
  },
  {
    name: "Omri Margalit",
    role: "Managing Partner, DIO Capital Partners",
    img: { src: "/assets/omri-margalit.jpg", alt: "Omri Margalit", width: 200, height: 200 },
    linkedin: "https://linkedin.com/in/omri-margalit",
    bio: "Global leader in supply chain and strategy. Led AWS supply chain teams and Samsung C-suite strategic initiatives. UVA Darden MBA, Ben-Gurion Mathematics; high-altitude climber.",
    longBio:
      "Omri brings global experience in supply chain management, commercial strategy, and product leadership. At AWS he managed worldwide cloud-infrastructure supply chains, implementing innovations that supported rapid global expansion. Previously in Luxembourg, he restructured Amazon EU’s supplier framework to enable scalable market entry. He also served at Samsung’s Seoul headquarters, advising executives on cross-company strategy and developing the semiconductor division’s COVID-19 response. He began his career in financial consulting on large energy and transport projects.\n\nOmri holds an MBA from UVA Darden (Genovese Fellowship) and a B.Sc. in Mathematics & Economics from Ben-Gurion University. An avid high-altitude alpine climber, he brings calm execution under pressure and a systems mindset to building resilient, scalable operations.",
  },
];

export type ReleaseBlock = { type: "p"; text: string } | { type: "quote"; text: string; by: string };

export type Release = {
  slug: string;
  date: string;
  city: string;
  title: string;
  subhead: string;
  summary: string;
  image: Img & { layout: "banner" | "portrait"; position?: string; caption?: string };
  lead: string;
  body: ReleaseBlock[];
  facts: [string, string][];
};

const dioBoilerplate =
  "DIO Capital Partners is an independent sponsor that partners with founder-owned distribution and niche manufacturing businesses with $2M–$12M EBITDA. We blend operational experience, strategic insight, and patient capital to sustain long-term growth.";
const prowireBoilerplate =
  "Prowire USA is a value-added distributor of wire, cable, and connector components serving the high-performance motorsports and aviation markets. Services include striping, spooling, kitting, and same-day shipping. Learn more at prowireusa.com.";

export const boilerplates = [
  { title: "About Prowire USA", text: prowireBoilerplate },
  { title: "About DIO Capital Partners", text: dioBoilerplate },
];

// Newest first.
export const releases: Release[] = [
  {
    slug: "prowire-acquires-terminal-specialty",
    date: "October 15, 2026",
    city: "Queen Creek, Arizona",
    title: "Prowire USA acquires Terminal Specialty",
    subhead:
      "Terminals, battery lugs, loom supplies, and more join the Prowire catalog, so customers can get more of what they need in a single order, shipped the same day.",
    summary:
      "Prowire USA has acquired Terminal Specialty, a wholesale distributor of terminals, connectors, cable ties, shrink tube, spiral wrap and wire.",
    image: {
      src: "/assets/ts-handshake.jpg",
      alt: "Isaac Tipton and Joan Forrest shaking hands outside the Terminal Specialty office",
      width: 800,
      height: 1066,
      layout: "portrait",
      position: "center 30%",
      caption: "Isaac Tipton and Joan Forrest at Terminal Specialty.",
    },
    lead: "Prowire USA, a DIO Capital Partners portfolio company, today announced the acquisition of Terminal Specialty, LLC, a Vista, California-based wholesale distributor of terminals, connectors, cable ties, shrink tube, spiral wrap and wire.",
    body: [
      {
        type: "p",
        text: "The acquisition is a natural extension of Prowire's business. Prowire customers gain an expanded product line, with a deeper selection of terminals, battery lugs, loom supplies, and related components available alongside the wire, cable, and connectors they already buy. Terminal Specialty customers get an upgraded experience: the products they rely on, now backed by Prowire's broader catalog, easy online ordering, and same-day shipping.",
      },
      {
        type: "quote",
        text: "I’m excited to welcome Terminal Specialty to the Prowire family. Joan built a business with a longstanding legacy and an exceptional commitment to its customers, and we’re proud to carry that forward. Our customers get a broader product line in one place, and Terminal Specialty’s customers get the speed and convenience of online ordering.",
        by: "Isaac Tipton, CEO, Prowire USA, and Managing Partner, DIO Capital Partners",
      },
      {
        type: "quote",
        text: "I have built a relationship with my customers and wanted to know they’d be in good hands. I’m confident Prowire will take great care of them.",
        by: "Joan Forrest, former owner, Terminal Specialty",
      },
      {
        type: "p",
        text: "Terminal Specialty's full line of terminals, battery lugs, loom supplies, and more will be available at prowireusa.com in the coming days, with operations moving to Prowire's Arizona facility. Prowire congratulates Joan Forrest on a successful transition and wishes her well as she moves into her next chapter.",
      },
    ],
    facts: [
      ["Acquirer", "Prowire USA"],
      ["Sponsor", "DIO Capital Partners"],
      ["Acquired", "Terminal Specialty"],
      ["Sector", "Wholesale distribution"],
      ["Headquarters", "Vista, California"],
      ["Announced", "October 15, 2026"],
    ],
  },
  {
    slug: "dio-capital-partners-acquires-prowire-usa",
    date: "July 11, 2025",
    city: "Queen Creek, Arizona",
    title: "DIO Capital Partners acquires Prowire USA",
    subhead:
      "The motorsport and aviation wiring specialist gains a long-term partner to build on its reputation for selection, service, and same-day shipping.",
    summary:
      "DIO Capital Partners has acquired Prowire USA, a value-added distributor of wire, cable, and connector components for the motorsports and aviation markets.",
    image: {
      src: "/assets/prowire-hq-entrance.jpg",
      alt: "Prowire USA headquarters entrance",
      width: 1600,
      height: 1200,
      layout: "banner",
      position: "center 25%",
    },
    lead: "DIO Capital Partners, an independent sponsor focused on founder-owned distribution and niche manufacturing businesses, today announced the acquisition of Prowire USA, a value-added distributor of wire, cable, and connector components serving the high-performance motorsports and aviation markets.",
    body: [
      {
        type: "p",
        text: "Prowire makes buying complex parts easy. Race teams, harness builders, and aviation customers rely on its deep inventory, striping, spooling, and kitting services, and same-day shipping. DIO Capital Partners plans to invest in that foundation by expanding the product line, strengthening operations, and pursuing complementary add-on acquisitions.",
      },
      { type: "p", text: "Isaac Tipton, a Managing Partner at DIO Capital Partners, will lead Prowire as CEO." },
      {
        type: "quote",
        text: "Prowire has built something special by making complex parts easy to buy. Our job is to protect that legacy and invest in Prowire’s future, so our customers always receive the best service, every time.",
        by: "Isaac Tipton, CEO, Prowire USA, and Managing Partner, DIO Capital Partners",
      },
      {
        type: "quote",
        text: "I’ve seen private equity destroy businesses. I wanted a partner who would understand what I have built and take it to the next level. DIO understood the business from day one.",
        by: "Joey Davitian, founder, Prowire USA",
      },
      {
        type: "p",
        text: "Customers can continue to order at prowireusa.com with the same products, team, and same-day service they know.",
      },
    ],
    facts: [
      ["Acquirer", "DIO Capital Partners"],
      ["Acquired", "Prowire USA"],
      ["Sector", "Value-added distribution"],
      ["Markets", "Motorsports & aviation"],
      ["Headquarters", "Queen Creek, Arizona"],
      ["Closed", "July 11, 2025"],
    ],
  },
];

// Broker criteria sheet extras (the PDF).
export const geography = {
  title: "West of the Rockies",
  text: "Focused on businesses in the western United States. Typically not a fit: turnarounds or distressed situations.",
};

export const partnerOneLiners: Record<string, string> = {
  "Isaac Tipton": "CEO, Prowire USA. Hands-on business operator; led $200M+ in acquisitions.",
  "David Hewitt": "Operator-CEO with full P&L leadership to $250M revenue.",
  "Omri Margalit": "AWS Head of Global Supply Chain; former Samsung strategy leader.",
};
