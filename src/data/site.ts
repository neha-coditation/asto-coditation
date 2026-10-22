const cdn = 'https://cdn.prod.website-files.com/69e5ad295c1d96ac846056f7/';
const base = 'https://www.coditation.com';

export const site = {
  title: 'Coditation | Enterprise AI & Data Engineering Solutions',
  description: 'We design and scale production AI, data, and product systems for healthcare, fintech, logistics, hi-tech, and commerce enterprises. Talk to our team.',
  ogImage: cdn + '6a0c3519f05a4c1547f47008_ee41855e989208c6a566259b767e8043_open%20graph.png',
  logo: cdn + '69fd8997e7d024f9e451a720_33e7560af48a6e52a1c94e375deea925_6128cb53ba31083c8a8d524e_logo%25203.svg',
  playbook: cdn + '6a5909c93e6f1ce2b8949003_Gen_ai_playbook_medium_quality.pdf',
  address: 'A1004, Amar Business Zone, Baner, Pune, Maharashtra – 411045',
  booking: 'https://calendly.com/contactus-coditation/30min',
};

export const banner = { text: 'Meet Coditation at IAM 2026 | Oct 21–24 · San Diego · Booth 703', href: base + '/events/iam-2026-meet-coditation' };

export const industries = [
  { slug: 'healthcare-life-sciences', name: 'Healthcare & Life Science', blurb: 'Real-time data to improve care and compliance' },
  { slug: 'logistics', name: 'Logistics', blurb: 'End-to-end visibility across fleets, assets, and operations' },
  { slug: 'hi-tech', name: 'HighTech', blurb: 'Scalable platforms for connected products and systems' },
  { slug: 'fintech', name: 'Fintech', blurb: 'Secure, compliant systems for modern financial operations' },
  { slug: 'digital-commerce', name: 'Digital Commerce', blurb: 'Seamless, scalable experiences across digital storefronts' },
  { slug: 'energy-and-industrials', name: 'Energy & Industrials', blurb: 'Intelligent monitoring and control for critical infrastructure' },
].map((i) => ({ ...i, href: `${base}/industries/${i.slug}` }));

export const capabilities = [
  { slug: 'ai-machine-learning', name: 'AI & Machine Learning', blurb: 'AI for better business outcomes.' },
  { slug: 'data-engineering', name: 'Data Engineering', blurb: 'Build data foundations for scale.' },
  { slug: 'managed-devops-sre-application-support', name: 'Managed DevOps, SRE & Application Support', blurb: 'Performance, reliability, and operational resilience.' },
  { slug: 'application-maintenance-modernization', name: 'Application Maintenance & Modernization', blurb: 'Keep systems current and future-ready.' },
].map((c) => ({ ...c, href: `${base}/capability/${c.slug}` }));

export const nav = {
  company: [
    { name: 'About', blurb: 'Where innovation, integrity, and product thinking meet.', href: base + '/about' },
    { name: 'Careers', blurb: 'Grow your career with cutting edge technology projects.', href: base + '/careers' },
  ],
  links: [
    { name: 'Case Studies', href: base + '/case-studies' },
    { name: 'Blogs', href: base + '/resources/blogs' },
    { name: 'AI Lab', href: base + '/ai-lab' },
  ],
  contact: base + '/contact',
};

export const hero = {
  title: 'Beyond the Hype: Pragmatic AI for Business Outcomes Across Critical Industries',
  tags: ['Hi-Tech', 'Logistics', 'Healthcare & Life Science', 'Fintech', 'Digital commerce', 'Energy and industrials'],
  layers: ['Data engineering', 'AI and machine learning', 'Product engineering'],
};

export const sections = [
  { label: 'Healthcare & Life Science', title: 'AI-Led Healthcare Solutions That Reduce Operational Drag and Improve Outcomes.',
    body: ['We design and scale healthcare solutions that transform your existing clinical, financial, and operational systems, turning fragmented data into faster workflows, stronger decisions, and measurable ROI.', 'From EHR interoperability to AI-powered revenue cycle, staffing, compliance, and patient access solutions, we build for the realities of healthcare: accuracy, adoption, uptime, and trust.'],
    stats: [['20+', 'Healthcare systems delivered'], ['35+', 'AI agents and use-cases'], ['22%', 'Operational efficiency improvement']],
    cta: 'Explore Healthcare Solutions', href: base + '/industries/healthcare-life-sciences', img: cdn + '6a214d6304d6b0310d93054b_HEALTHCARE%20%26%20LIFE%20SCIENCE.avif' },
  { label: 'Logistics', title: 'AI-First Logistics Systems That Protect Margin and Move Operations Faster.',
    body: ['We design and scale logistics solutions that build or sit on top of your existing TMS, WMS, ERP, carrier, and warehouse systems, turning fragmented shipment, rate, document, and exception data into faster decisions and measurable operational gains.', 'From freight intelligence and exception automation to customer visibility, warehouse productivity, and supply chain control towers, our systems are built for high-volume logistics environments where speed, accuracy, uptime, and margin discipline are critical.'],
    stats: [['12+', 'Logistics systems delivered'], ['36+', 'ML and AI agents & use-cases'], ['30%', 'Operational efficiency improvement']],
    cta: 'Explore Logistics Solutions', href: base + '/industries/logistics', img: cdn + '6a214d9352b758d1d55b890e_logistics.avif' },
  { label: 'Digital Commerce and Retail', title: 'Turn Commerce Leakage Into Conversion, Retention, and Profitable Growth.',
    body: ['We design and scale AI, data, and product systems for commerce teams operating across storefronts, marketplaces, OMS, ERP, CDP, PIM, ad platforms, ESPs, reviews, support, and fulfillment networks.', 'From acquisition and personalization to merchandising, inventory, checkout, fulfillment, loyalty, and margin analytics, we help retailers and digital commerce brands turn fragmented customer, product, order, and operational data into higher conversion, smarter spend, and more profitable growth.'],
    stats: [['30+', 'Digital commerce and marketing tech products and solutions delivered'], ['40+', 'Full-funnel commerce plays'], ['10B+', 'Data points crunched']],
    cta: 'Explore Digital Commerce Solutions', href: base + '/industries/digital-commerce', img: cdn + '6a214d64720fe9e8ed1a1b14_Digital%20Commerce.avif' },
  { label: 'Energy and Industrial Enterprise', title: 'AI First Industrial Solutions for Drawings, Data, Quality, and Operations.',
    body: ['We build AI, vision, and data systems for industrial teams working across complex assets, legacy platforms, technical archives, and inspection workflows.', 'Our solutions connect engineering documents, historian data, inspection evidence, ERP, EAM, PLM, MES, and sensor sources into intelligence layers that help teams search faster, review better, detect issues earlier, and make operational data usable at scale.'],
    stats: [['10+', 'systems successfully deployed'], ['50K+', 'documents and drawings processed'], ['50%+', 'efficiency unlocked']],
    cta: 'Explore Energy & Industrial Solutions', href: base + '/industries/energy-and-industrials', img: cdn + '6a214d64acb039b474df6608_energy%20%26%20industrail.avif' },
  { label: 'Fintech', title: 'Financial Product Velocity, Powered by Data, AI, and Built-In Trust.',
    body: ['We help FinTech and financial services teams turn fragmented transactions, ledgers, documents, customer signals, policies, and risk controls into reusable decision infrastructure.', 'Our systems sit on top of your existing core banking, payment, ledger, KYC, AML, CRM, data warehouse, and open banking stack, enabling faster product launches, smarter risk workflows, cleaner operations, and customer experiences that scale with confidence.'],
    stats: [['50 M+', 'reached'], ['5x', 'Growth, risk, payment, compliance, and ops motions covered'], ['39+', 'AI agents and use-cases']],
    cta: 'Explore Fintech Solutions', href: base + '/industries/fintech', img: cdn + '6a214d6304d6b0310d930550_fintech.avif' },
  { label: 'HiTech', title: 'Build Faster. Modernize Smarter. Run Production Better.',
    body: ['We help hi-tech companies engineer the systems behind high-growth software businesses. Product platforms, distributed systems, data products, modernization programs, DevOps, SRE, support operations, and India-based GCC teams.', 'AI accelerates the workflow, but senior engineers still own the architecture, quality, security, and production outcomes. From first commit to forever, we bring the best engineering teams across build, modernization, run-state, and scale.'],
    stats: [['100+', 'products successfully delivered'], ['50 M+', 'consumers touched'], ['1M+', 'transactions processed per minute']],
    cta: 'Explore Hi-Tech Solutions', href: base + '/industries/hi-tech', img: cdn + '6a214d6347f15bf54dc8cb6b_Hightech.avif' },
];

export const tech = ['AWS', 'OpenAI', 'Meta', 'Qwen', 'Google Gemini', 'Databricks', 'Anthropic', 'Prometheus', 'Snowflake', 'Azure', 'Apache Kafka', 'DeepSeek', 'LangGraph', 'HashiCorp', 'Google Cloud'];

export const testimonials = [
  { title: 'Trusted Engineering Partner Since Day One', who: 'Navneet Singh', role: 'CEO, StepFunction, SF Bay Area', img: cdn + '6a38f09a310b60788677e6b6_Navneet%20Singh.webp',
    quote: "We've been partnering with Coditation on our engineering and data science needs from Day 1. They have an amazingly talented team and solid leadership. Our customers are very happy with us and we're all set to launch a big V1.0 of StepFunction product next month, thanks to the team's sheer talent, relentless efforts and leadership. We hope to continue partnering with Coditation for a long time to come and take StepFunction to the next level!" },
  { title: 'Built on Trust and Transparency', who: 'Nava Davuluri', role: 'CTO, Huddl.ai, SF Bay Area', img: cdn + '6a38f10683e3f7b26e2fbb2b_Nava%20Davuluri.webp',
    quote: "Coditation experience for Huddl.ai continues to be that of a win-win mentality with quality teams and transparency. Their team has supported our organization in driving complex and critical projects on time with the responsibility of a committed employee. Would highly recommend them for augmenting your startup's needs!" },
  { title: 'Delivering Business Transformation Through Technology', who: 'Karthik', role: 'VP, Datacenter & Connectivity Provider, Canada', img: cdn + '6a38f160c7ceaf29c1bc191a_Karthik.webp',
    quote: 'Coditation as an organization stepped up and supported us with business transformation and mobile development projects. Coditation has strong technical talent pool and went above and beyond to support the projects which is their key to success. They have a seasoned and strong leadership team. I will strongly recommend Coditation for cutting edge technology projects. Keep up the good work Team Coditation!' },
  { title: 'Initiative-Driven Partnership That Delivers', who: 'Quimby Melton', role: 'CEO & Co-founder, Confection', img: cdn + '6a38f1e050b45cba465515cc_Quimby%20Melton%20.webp',
    quote: "Coditation is an important partner for our product development efforts. Their agile sprint processes have helped us deliver important integrations that extend Confection’s reach. And I admire the way the Coditation team is always looking for ways to make our processes better. Time and time again, they’ve taken the initiative- on their own time-to sketch out and present us with high-impact improvements that our team hadn’t considered. I appreciate that they’re willing to think creatively and imaginatively about their customers’ best interests regardless of the project scope. This kind of initiative-driven partnership is invaluable. It’s exactly the kind of entrepreneurial input early-stage companies need." },
];

export const news = [
  { tag: 'Article', title: 'AI’s Best ROI Right Now Is Fixing Old Code, Not Writing New Code', text: 'Our CEO, Chetan, explores how AI agents can modernize legacy systems while preserving the institutional knowledge buried within them.', href: 'https://www.unite.ai/legacy-code-modernization-ai-agents-institutional-knowledge/' },
  { tag: 'Event', title: 'The AI orchestrator for moving & storage. IAM 2026 | October 21–24 | San Diego | Booth 703', text: 'Coditation is heading to the IAM 64th Annual Meeting & Expo. Discover how AI agents can help moving and storage companies streamline scheduling, optimize pricing and dispatch, manage claims, and improve operational efficiency.', href: base + '/events/iam-2026-meet-coditation' },
  { tag: 'Interview', title: 'Beyond the Hype: A Conversation on Building Trust-First AI in Healthcare', text: 'A practical conversation with our CEO, Chetan Saundankar on building trustworthy AI in healthcare from transforming administrative workflows to balancing automation with human judgment.', href: 'https://www.asianhhm.com/interviews/conversation-on-building-trust-first-ai-in-healthcare' },
  { tag: 'Interview', title: 'Why pragmatic approaches to AI can minimize pilot failure', text: 'Chetan Saundankar, CEO, shares a pragmatic approach to AI adoption, exploring how better workflows, meaningful metrics and well-designed pilots can turn AI experimentation into scalable business impact.', href: base },
  { tag: 'Article', title: 'Valve Failure Prevention Starts with Data, Not Sensors', text: 'Industrial products', href: 'https://www.ipfonline.com/news/detail/articles/valve-failure-prevention-starts-with-data-not-sensors/19163' },
];

export const footer = {
  explore: [['AI Lab', '/ai-lab'], ['Case Studies', '/case-studies'], ['Blogs', '/resources/blogs'], ['Gen AI Playbook', '/gen-ai-playbook']].map(([n, p]) => [n, base + p]),
  company: [['About', '/about'], ['Careers', '/careers'], ['Contact Us', '/contact']].map(([n, p]) => [n, base + p]),
  legal: [['Privacy Policy', '/privacy-policy'], ['Terms & Conditions', '/terms-conditions']].map(([n, p]) => [n, base + p]),
  social: [['LinkedIn', 'https://linkedin.com/company/coditation-systems'], ['X', 'https://twitter.com/coditation'], ['Instagram', 'https://www.instagram.com/coditation_systems/'], ['YouTube', 'https://www.youtube.com/@Coditation']],
};
