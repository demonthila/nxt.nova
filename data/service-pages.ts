/**
 * Long-form content for the dedicated service pages (/services/<path>).
 * Each page targets one Australian search (see `keyword`). Facts used here come from the rest of the site:
 * Melbourne main hub + Colombo team, 75+ projects, 50+ clients, 7+ years, the tech list and the budget bands
 * on the contact form. Keep answers factual; add real timelines or prices only once NovaLink confirms them.
 */

export type ServicePage = {
  /** data/services.ts slug */
  slug: string;
  /** URL segment under /services */
  path: string;
  /** Primary search phrase this page targets */
  keyword: string;
  /** <title> (the layout appends " | NovaLink"); keep ≤ 50 characters */
  seoTitle: string;
  /** Meta description, ≤ 155 characters */
  metaDescription: string;
  /** Visible H1 */
  h1: [string, string];
  intro: string;
  overview: string[];
  capabilityDetails: Record<string, string>;
  problemDetails: Record<string, string>;
  processDetails: Record<string, string>;
  why: string[];
  faqs: { q: string; a: string }[];
};

const team =
  "Projects are led from our hub in Melbourne, Australia, with design and engineering by our team in Colombo, Sri Lanka. You get a local point of contact and one team from first workshop to launch.";

export const servicePages: ServicePage[] = [
  {
    slug: "custom-software",
    path: "custom-software-development",
    keyword: "custom software development Australia",
    seoTitle: "Custom Software Development Australia",
    metaDescription:
      "Custom software development in Australia: web applications, enterprise systems, SaaS platforms and integrations, built around how your business works.",
    h1: ["Custom software development", "in Australia."],
    intro:
      "We design and build web applications, business systems and SaaS platforms for Australian businesses that have outgrown spreadsheets and off-the-shelf tools.",
    overview: [
      "Custom software is worth it when the way you work is part of your advantage. Instead of bending your process to fit a generic product, we build the system around your process: the screens your team needs, the rules your business follows and the reports you actually read.",
      "NovaLink has delivered 75+ projects for 50+ clients over seven years, including HR and payroll platforms, inventory systems and SaaS products. We start with business analysis, so the first thing you get is clarity on what to build and why, before a line of code is written.",
      team,
    ],
    capabilityDetails: {
      "Web Applications":
        "Secure, browser-based applications for customers or staff: portals, dashboards, booking and workflow tools that work on any device.",
      "Enterprise Systems":
        "Core business systems such as HR, payroll, leave, inventory and operations, with roles, permissions and audit trails built in.",
      "SaaS Platforms":
        "Multi-tenant products with subscriptions, onboarding and admin tools, designed to scale as your customer base grows.",
      "System Integration":
        "Connecting the tools you already use (accounting, CRM, payments, email) so data flows once instead of being re-keyed.",
    },
    problemDetails: {
      "Off-the-shelf tools that force workarounds":
        "When a product only does 80% of what you need, the other 20% ends up in side spreadsheets and manual steps. We build for the whole job.",
      "Processes running on spreadsheets and email":
        "Spreadsheets break as a team grows: versions drift, approvals get lost and nobody trusts the numbers. A proper system gives you one source of truth.",
      "Systems that don’t talk to each other":
        "Re-typing the same data into three tools wastes hours and creates errors. Integration removes the double handling.",
    },
    processDetails: {
      "Business analysis": "Workshops with your team to map the current process, pain points and the outcomes that matter.",
      "Architecture & UX": "We plan the data model and technology, then design and test the key screens with real users.",
      "Iterative development": "We build in short cycles and show working software regularly, so you can steer as we go.",
      "Launch & support": "We deploy, migrate your data, train your team and stay on to support and improve the system.",
    },
    why: [
      "Business analysis first, so you pay to build the right thing",
      "Proven in HR, payroll, inventory and SaaS platforms",
      "Modern stack: React, Next.js, TypeScript, Node.js, PHP, Python, PostgreSQL, MySQL, AWS and Azure",
      "Projects led from Melbourne, Australia, with an experienced offshore engineering team",
    ],
    faqs: [
      {
        q: "How much does custom software development cost?",
        a: "Every project is quoted on its scope. Projects we take on range from under $10k for a focused tool to $100k+ for larger platforms. After a consultation we give you a written quote and a clear plan.",
      },
      {
        q: "Do you only work with businesses in Melbourne, Australia?",
        a: "No. Melbourne, Australia is our main hub and we work with businesses across Australia, plus clients in India, Denmark and the UK.",
      },
      {
        q: "Who owns the software you build?",
        a: "Ownership and licensing are agreed in writing before work starts, so you know exactly what you are getting.",
      },
      {
        q: "Can you work with our existing systems?",
        a: "Yes. System integration is one of our core capabilities: we connect new software to the tools you already use rather than replacing everything.",
      },
      {
        q: "What happens after launch?",
        a: "Launch and support is part of our process. We help with deployment, data migration and training, then keep improving the system as your business changes.",
      },
    ],
  },
  {
    slug: "web-development",
    path: "web-development-ux-design",
    keyword: "web developer Australia",
    seoTitle: "Web Development & UX Design Australia",
    metaDescription:
      "Australian web development and UX design: fast, responsive websites and web apps, designed and built by one team. Talk to NovaLink about your project.",
    h1: ["Web development & UX design", "in Australia."],
    intro:
      "We design and build modern websites and web applications for Australian businesses: fast, responsive and easy to use from the first visit.",
    overview: [
      "Your website is often the first conversation a customer has with your business. If it is slow, dated or confusing, people leave before they ever contact you. We build websites that load fast, read clearly on a phone and lead visitors to the next step.",
      "Design and development sit in one team. The people who research your users and design the interface work alongside the developers who build it, so what is designed is what ships, without things getting lost in hand-over.",
      team,
    ],
    capabilityDetails: {
      "UI/UX Design":
        "User research, information architecture and interface design that make your product easy to understand on first use.",
      "Responsive Websites":
        "Websites that look and work well on every screen size, built for speed and search visibility from day one.",
      "Web Applications":
        "Interactive tools, portals and dashboards built with React and Next.js for performance and long-term maintainability.",
      Prototyping:
        "Clickable prototypes in Figma to test an idea with real users before committing to a full build.",
    },
    problemDetails: {
      "Websites that are slow, dated or hard to update":
        "We rebuild on a modern stack with a structure your team can update, and we optimise speed, which matters to both visitors and Google.",
      "Products people struggle to use":
        "We watch how people actually use the product, find where they get stuck and redesign those moments.",
      "Ideas that need validating before a full build":
        "A prototype tested with users costs a fraction of a build and tells you early whether the idea works.",
    },
    processDetails: {
      "User research": "We learn who your visitors are, what they need and what stops them today.",
      "Wireframes & prototypes": "We map the structure and test key flows with clickable prototypes.",
      "Visual design": "We design the final interface in your brand, with accessibility and readability built in.",
      "Build & test": "We develop, test across devices and launch, with SEO basics and analytics in place.",
    },
    why: [
      "One team for design and development, so the build matches the design",
      "Built for speed, mobile and search from the start",
      "Modern stack: React, Next.js and TypeScript, designed in Figma",
      "75+ projects delivered for clients in Australia and overseas",
    ],
    faqs: [
      {
        q: "How much does a website cost?",
        a: "It depends on the number of pages, features and integrations. After a consultation we send a written quote. Our projects range from under $10k to $100k+ for larger web applications.",
      },
      {
        q: "Will my new website work on phones?",
        a: "Yes. Every site we build is responsive and tested on phones, tablets and desktops.",
      },
      {
        q: "Can you redesign our existing website?",
        a: "Yes. We review what works today, keep the pages that bring traffic, and redirect old URLs so you keep your search rankings.",
      },
      {
        q: "Do you help with SEO when building the website?",
        a: "Yes. Page titles, headings, structured data, speed and a sitemap are set up at build time. Ongoing SEO is available through our Branding & SEO service.",
      },
      {
        q: "Can we update the website ourselves?",
        a: "We agree how content will be managed during planning, so your team can update the pages it needs to.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    path: "digital-marketing",
    keyword: "digital marketing Australia",
    seoTitle: "Digital Marketing Services Australia",
    metaDescription:
      "Digital marketing for Australian businesses: social media, paid advertising, content and email campaigns tied to goals you can measure.",
    h1: ["Digital marketing", "for Australian businesses."],
    intro:
      "We plan and run social media, paid advertising, content and email campaigns for Australian businesses, tied to goals you can measure.",
    overview: [
      "Good marketing starts with a clear goal: more enquiries, more bookings, more sales. We agree that goal first, choose the channels most likely to reach your customers, and report on the numbers that show whether it is working.",
      "Because we also design and build websites, we look at the whole journey: the ad or post that gets attention, the page people land on and the form or call that turns them into a customer. Fixing a weak landing page is often worth more than spending more on ads.",
      team,
    ],
    capabilityDetails: {
      "Social Media Marketing": "A consistent presence on the platforms your customers use, with content planned around your goals.",
      "Paid Advertising": "Targeted campaigns with clear budgets, tracking and regular optimisation.",
      "Content Marketing": "Articles, guides and visuals that answer your customers’ questions and build trust.",
      "Email Campaigns": "Newsletters and automated sequences that turn interest into enquiries and repeat business.",
    },
    problemDetails: {
      "Marketing spend that’s hard to attribute":
        "We set up tracking before campaigns start, so you can see which channels bring enquiries and which do not.",
      "Inconsistent social presence":
        "A content plan and a regular rhythm replace last-minute posting.",
      "Traffic that doesn’t convert":
        "We improve landing pages and calls to action so more visitors take the next step.",
    },
    processDetails: {
      "Goals & audience": "We agree targets and define who you want to reach.",
      "Channel plan": "We choose the channels and budget split most likely to reach them.",
      "Content & campaigns": "We produce the content and launch the campaigns.",
      "Measure & optimise": "We report on results and shift effort to what works.",
    },
    why: [
      "Goals and tracking agreed before money is spent",
      "Marketing and website work in one team, so landing pages get fixed too",
      "Content that matches your brand across every channel",
      "Led from Melbourne, Australia, with clients across Australia and overseas",
    ],
    faqs: [
      {
        q: "Which channels should my business use?",
        a: "It depends on where your customers are. We recommend channels in the planning stage based on your audience and goals, not a one-size-fits-all package.",
      },
      {
        q: "How do you measure results?",
        a: "We agree measurable goals up front, such as enquiries or sales, set up tracking, and report on those numbers.",
      },
      {
        q: "Can you also improve our website?",
        a: "Yes. Web development and UX design is one of our core services, so we can fix landing pages that are holding campaigns back.",
      },
      {
        q: "Do you work with small businesses?",
        a: "Yes. We work with businesses of different sizes; a consultation helps us suggest a plan that fits your budget.",
      },
    ],
  },
  {
    slug: "branding-seo",
    path: "branding-seo",
    keyword: "branding and SEO agency Australia",
    seoTitle: "Branding & SEO Services Australia",
    metaDescription:
      "Branding and SEO in Australia: brand identity, logo design, content strategy and search optimisation that help your business look capable and get found.",
    h1: ["Branding & SEO", "in Australia."],
    intro:
      "We create brand identities and improve search visibility for Australian businesses, so you look as capable as you are and customers can find you.",
    overview: [
      "A strong brand makes a small business look established, and good SEO puts it in front of people who are already searching for what you offer. We treat them together: the brand sets how you look and sound, and SEO makes sure the right people see it.",
      "Our SEO work covers the technical foundations (site speed, structure, structured data and indexing), local search for customers in Melbourne, Australia and beyond, and content that answers the questions your customers ask before they buy.",
      team,
    ],
    capabilityDetails: {
      "Brand Identity": "Brand strategy, visual identity and guidelines that keep every touchpoint consistent.",
      SEO: "Technical, on-page and local SEO, including Google Business Profile and structured data.",
      "Logo Design": "A distinctive logo designed to work everywhere, from a phone screen to signage.",
      "Content Strategy": "A plan for the pages and articles that match what your customers search for.",
    },
    problemDetails: {
      "A brand that looks smaller than the business":
        "A considered identity builds trust before a customer has spoken to you.",
      "Inconsistent visuals across touchpoints":
        "Guidelines and templates make your website, social media and documents look like one company.",
      "A website nobody finds in search":
        "We fix technical issues, target the searches your customers use and build content that ranks.",
    },
    processDetails: {
      "Brand strategy": "We define your positioning, audience and voice.",
      "Identity design": "We design the logo, colours, typography and guidelines.",
      "Technical SEO": "We fix indexing, speed, structure and structured data.",
      "Content strategy": "We plan and write the pages and articles that bring the right visitors.",
    },
    why: [
      "Brand and SEO planned together, so you look good and get found",
      "Technical SEO done by the same team that builds websites",
      "Local SEO for Australian searches, including Google Business Profile",
      "Clear reporting on rankings and enquiries",
    ],
    faqs: [
      {
        q: "How long does SEO take to work?",
        a: "Technical fixes can be picked up as soon as Google re-crawls your site, while rankings for competitive searches build over months. We report progress along the way.",
      },
      {
        q: "Do you do local SEO for Australian businesses?",
        a: "Yes. We set up and optimise your Google Business Profile, local structured data and location-focused pages.",
      },
      {
        q: "Can you refresh our existing brand rather than start again?",
        a: "Yes. Many projects modernise an existing identity while keeping the recognition you have built.",
      },
      {
        q: "Do you write the content as well?",
        a: "Yes. Content strategy is part of the service, and we can write or edit the pages and articles it calls for.",
      },
    ],
  },
];

export const getServicePage = (slugOrPath: string) =>
  servicePages.find((p) => p.path === slugOrPath || p.slug === slugOrPath);

/** URL of a service's dedicated page. */
export const serviceHref = (slug: string) => `/services/${getServicePage(slug)?.path ?? ""}`;
