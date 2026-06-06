// ── Hero Metric Cards ──────────────────────────────────────────────
export const HERO_METRICS = [
  {
    id: 'youth-acquisition',
    label: 'Youth Acquisition',
    headline: 'Pre-University Channel',
    description: 'Engage learners aged 15–19 before competitors capture them through varsity platforms.',
    icon: 'Users',
  },
  {
    id: 'parent-banking',
    label: 'Parent Banking Engagement',
    headline: 'Household Relationship',
    description: 'Reach parents through a channel they trust — communication about their child.',
    icon: 'Home',
  },
  {
    id: 'financial-literacy',
    label: 'Financial Literacy',
    headline: 'Education-Led Trust',
    description: 'Position Absa as a genuine financial empowerment partner inside schools.',
    icon: 'BookOpen',
  },
  {
    id: 'school-payments',
    label: 'School Payments',
    headline: 'Real Financial Needs',
    description: 'Introduce banking products tied to actual school-life payment moments.',
    icon: 'CreditCard',
  },
  {
    id: 'brand-trust',
    label: 'Brand Trust',
    headline: 'School-Endorsed Context',
    description: 'Absa\'s message carried within the trusted school communication ecosystem.',
    icon: 'Shield',
  },
  {
    id: 'digital-adoption',
    label: 'Digital Banking Adoption',
    headline: 'App-First Generation',
    description: 'Drive digital registrations and self-service adoption among digital-native learners.',
    icon: 'Smartphone',
  },
];

// ── Competitive Landscape ──────────────────────────────────────────
export const COMPETITIVE_ITEMS = [
  {
    id: 'stanbank',
    competitor: 'Standard Bank',
    initiative: 'Varsity Vibe Partnership',
    description: 'Standard Bank uses the Varsity Vibe platform to offer student deals and discounts, creating youth engagement and brand presence in the student market.',
    stage: 'Varsity / Post-School',
    sourceId: 'stanbank-varsity',
    sourceLabel: 'Standard Bank, 2025',
    caveat: 'Public market context — not a confirmed exclusive arrangement',
    color: 'blue',
  },
  {
    id: 'varsityvibe',
    competitor: 'Varsity Vibe',
    initiative: 'Fund Your Future Programme',
    description: 'Varsity Vibe positions itself as a student discount and financial guidance platform, partnering with financial services providers to reach university students.',
    stage: 'University Students',
    sourceId: 'varsity-vibe',
    sourceLabel: 'Varsity Vibe, 2025',
    caveat: 'Public market context — platform positioning based on published materials',
    color: 'purple',
  },
  {
    id: 'karri',
    competitor: 'Karri',
    initiative: 'School Payment Solution',
    description: 'Karri is positioned as a dedicated school payment solution, enabling cashless payments for school fees, events and activities — a fintech play at the school layer.',
    stage: 'School Payments',
    sourceId: 'karri',
    sourceLabel: 'Karri, 2025',
    caveat: 'Public market context — based on Karri\'s published product positioning',
    color: 'green',
  },
  {
    id: 'nedbank',
    competitor: 'Nedbank',
    initiative: 'Digital Transformation & Financial Inclusion',
    description: 'Nedbank promotes digital transformation and financial inclusion initiatives, targeting underserved communities and positioning for broader social impact.',
    stage: 'Communities',
    sourceId: 'nedbank-inclusion',
    sourceLabel: 'Nedbank, 2025',
    caveat: 'Public market context — based on Nedbank\'s published inclusion strategy',
    color: 'orange',
  },
];

// ── FAB Table ──────────────────────────────────────────────────────
export const FAB_ROWS = [
  {
    feature: 'Headline sponsorship of SchoolBridge & ProvinceBridge',
    advantage: 'Always-on visibility in trusted school communication',
    benefit: 'Builds brand preference before competitors capture learners through university platforms',
  },
  {
    feature: 'Segmented ecosystem campaigns',
    advantage: 'Target parents, learners 15–19, teachers & administrators separately',
    benefit: 'More relevant acquisition pathways across youth, parent, teacher and school banking',
  },
  {
    feature: 'Financial literacy content channel',
    advantage: 'Distribute financial education through trusted school platform',
    benefit: 'Supports Absa\'s public literacy agenda while creating early trust and affinity',
  },
  {
    feature: 'School payments and financial services pathway',
    advantage: 'Introduce savings, youth accounts, family banking propositions',
    benefit: 'Product acquisition tied to real school-life financial needs',
  },
  {
    feature: 'Province-level measurement dashboard',
    advantage: 'Measure engagement across districts, schools, campaign types',
    benefit: 'Better sponsorship accountability and data-led optimisation',
  },
];

// ── Product Opportunity Cards ──────────────────────────────────────
export const PRODUCT_OPPORTUNITIES = [
  {
    id: 'youth-accounts',
    title: 'Youth Accounts',
    subtitle: 'School to Tertiary Journey',
    description: 'Learner awareness-to-conversion journey. Introduce Absa youth accounts during school years, enabling a seamless transition to student and young professional banking.',
    icon: 'GraduationCap',
    color: 'red',
  },
  {
    id: 'parent-banking',
    title: 'Parent Banking',
    subtitle: 'Family Financial Ecosystem',
    description: 'Savings, payments, insurance, credit and family wellness products. Parents engaged through school communications are already in a financially-minded mindset.',
    icon: 'Home',
    color: 'gold',
  },
  {
    id: 'teacher-banking',
    title: 'Teacher & Staff Banking',
    subtitle: 'Salaried Professional Products',
    description: 'Salary banking, personal loans, vehicle finance and home loans for teachers and administrative staff — a large, stable salaried workforce segment.',
    icon: 'Briefcase',
    color: 'blue',
  },
  {
    id: 'school-payments',
    title: 'School Payments',
    subtitle: 'Cashless School Finance',
    description: 'Fees, events, school trips, fundraising, uniforms and extracurriculars. A high-frequency, real-world payment context that positions Absa at the point of need.',
    icon: 'CreditCard',
    color: 'teal',
  },
  {
    id: 'financial-literacy',
    title: 'Financial Literacy',
    subtitle: 'Education-Led Engagement',
    description: 'Classroom, app-based and parent-facing education content. Absa becomes the trusted voice on money management within the school ecosystem.',
    icon: 'BookOpen',
    color: 'purple',
  },
  {
    id: 'digital-adoption',
    title: 'Digital Banking Adoption',
    subtitle: 'App-First Onboarding',
    description: 'App registrations, digital usage and self-service journeys. School-aged learners and young parents are prime candidates for digital-first banking behaviour.',
    icon: 'Smartphone',
    color: 'indigo',
  },
];

// ── Campaign Tiles ─────────────────────────────────────────────────
export const CAMPAIGN_TILES = [
  {
    id: 'money-skills',
    title: 'Absa Money Skills for Teens',
    audience: 'Learners 15–19',
    channel: 'Financial literacy content',
    mechanic: 'Account awareness',
    cta: 'Application click',
    metric: 'Engagement rate',
    color: 'red',
    badge: 'Financial Literacy',
  },
  {
    id: 'first-account',
    title: 'Open Your First Account with Absa',
    audience: 'Grade 12 Learners',
    channel: 'In-app campaign',
    mechanic: 'Youth account journey',
    cta: 'Application',
    metric: 'Conversions',
    color: 'crimson',
    badge: 'Youth Banking',
  },
  {
    id: 'fees-planning',
    title: 'Parent School Fees Planning Toolkit',
    audience: 'Parents & Guardians',
    channel: 'Communication channel',
    mechanic: 'Budgeting tool',
    cta: 'Absa Save',
    metric: 'Engagements',
    color: 'gold',
    badge: 'Parent Banking',
  },
  {
    id: 'teacher-wellness',
    title: 'Teacher Financial Wellness Month',
    audience: 'Teachers & Staff',
    channel: 'Staff communication',
    mechanic: 'Salary banking / loans',
    cta: 'Apply online',
    metric: 'Leads',
    color: 'blue',
    badge: 'Staff Banking',
  },
  {
    id: 'future-ready',
    title: 'Grade 12 Future-Ready Banking',
    audience: 'Matric Learners',
    channel: 'Study platform',
    mechanic: 'University readiness',
    cta: 'Transact account',
    metric: 'Activations',
    color: 'teal',
    badge: 'School-to-Varsity',
  },
  {
    id: 'back-to-school',
    title: 'Back-to-School Budget Challenge',
    audience: 'Parents',
    channel: 'Back-to-school campaign',
    mechanic: 'Budget tool',
    cta: 'Product interest',
    metric: 'Completions',
    color: 'orange',
    badge: 'Parent Engagement',
  },
  {
    id: 'digital-communities',
    title: 'Digital Banking for School Communities',
    audience: 'School Communities',
    channel: 'SMS + app',
    mechanic: 'App download',
    cta: 'Digital banking',
    metric: 'Registrations',
    color: 'purple',
    badge: 'Digital Inclusion',
  },
  {
    id: 'entrepreneurship',
    title: 'Absa Youth Entrepreneurship Challenge',
    audience: 'Learners',
    channel: 'School events',
    mechanic: 'Business skills',
    cta: 'Account + investment',
    metric: 'Entries',
    color: 'indigo',
    badge: 'Entrepreneurship',
  },
];

// ── Measurement Dashboard Metrics ──────────────────────────────────
export const DASHBOARD_METRICS = [
  { id: 'parent-reach', label: 'Parent Reach', value: 'TBD', unit: 'parents/mo', description: 'Monthly unique parent impressions across channels' },
  { id: 'learner-reach', label: 'Learner Reach', value: 'TBD', unit: 'learners/mo', description: 'Monthly learner audience across participating schools' },
  { id: 'teacher-reach', label: 'Teacher Reach', value: 'TBD', unit: 'teachers/mo', description: 'Staff and educator engagement touchpoints' },
  { id: 'impressions', label: 'Impressions', value: 'TBD', unit: 'per campaign', description: 'Total campaign impressions across school network' },
  { id: 'content-completion', label: 'Content Completion', value: 'TBD', unit: '% rate', description: 'Financial literacy module completion rate' },
  { id: 'leads', label: 'Leads Generated', value: 'TBD', unit: 'per month', description: 'Qualified product interest leads from school campaigns' },
  { id: 'account-clicks', label: 'Account Application Clicks', value: 'TBD', unit: 'click-throughs', description: 'Direct application link engagements' },
  { id: 'literacy-engagement', label: 'Financial Literacy Engagement', value: 'TBD', unit: 'sessions', description: 'Active financial education content sessions' },
  { id: 'payment-enquiries', label: 'School Payment Enquiries', value: 'TBD', unit: 'per quarter', description: 'Inbound enquiries for school payment solutions' },
  { id: 'conversion-rate', label: 'Conversion Rate', value: 'TBD', unit: '% of leads', description: 'Lead-to-application conversion benchmarked post-pilot' },
];

// ── Sponsorship Packages ───────────────────────────────────────────
export const SPONSORSHIP_PACKAGES = [
  {
    id: 'headline',
    option: 'Option 1',
    title: 'Headline Financial Inclusion Partner',
    tagline: 'Named financial empowerment partner across provinces',
    description: 'Absa becomes the named financial inclusion and education partner of SchoolBridge and ProvinceBridge, with headline branding, province-wide campaigns and priority channel access.',
    inclusions: [
      'Named headline sponsorship across all provinces',
      'Financial literacy content channel ownership',
      'Parent, learner and teacher campaign access',
      'Province-level measurement dashboard',
      'Executive impact report',
      'First-mover exclusivity window',
    ],
    borderColor: 'border-[#A6192E]',
    badgeColor: 'bg-[#A6192E]',
    highlight: true,
  },
  {
    id: 'youth',
    option: 'Option 2',
    title: 'Youth Banking Growth Partner',
    tagline: 'Learners 15–19, financial literacy, first account, study-readiness',
    description: 'A focused youth acquisition partnership targeting school leavers and Grade 10–12 learners with financial literacy content, youth account journeys and matric-to-varsity transitions.',
    inclusions: [
      'Youth audience campaign access (Grade 10–12)',
      'Financial literacy content module',
      'First account acquisition journey',
      'Study-readiness and university transition campaigns',
      'Learner engagement measurement',
      'Youth banking brand positioning',
    ],
    borderColor: 'border-[#F5A623]',
    badgeColor: 'bg-[#F5A623]',
    highlight: false,
  },
  {
    id: 'payments',
    option: 'Option 3',
    title: 'School Payments & Parent Banking Partner',
    tagline: 'Payment, wallet, savings, parent financial planning',
    description: 'A parent and school payments-focused partnership that positions Absa products at the point of real school-life financial decisions — fees, budgeting, savings and family financial wellness.',
    inclusions: [
      'Parent audience campaign channel access',
      'School payments promotion and product pathway',
      'Family savings and budgeting content',
      'Parent financial wellness campaigns',
      'School payment solution integration pathway',
      'Parent engagement and lead measurement',
    ],
    borderColor: 'border-[#071A2F]',
    badgeColor: 'bg-[#071A2F]',
    highlight: false,
  },
];

// ── Pilot Proposal ─────────────────────────────────────────────────
export const PILOT_STRUCTURE = [
  { label: 'Schools', value: '50–100', icon: 'School' },
  { label: 'Duration', value: '90 Days', icon: 'Calendar' },
  { label: 'Districts', value: '1–2', icon: 'MapPin' },
  { label: 'Campaigns', value: '4 Streams', icon: 'Megaphone' },
  { label: 'Deliverable', value: 'Dashboard', icon: 'BarChart2' },
  { label: 'Report', value: 'Executive', icon: 'FileText' },
];

export const PILOT_CAMPAIGNS = [
  'Financial literacy content module (learners)',
  'Youth account awareness journey (Grade 11–12)',
  'Parent banking campaign (fees planning + savings)',
  'Teacher financial wellness campaign (salary banking)',
];

export const PILOT_SUCCESS_METRICS = [
  'Active reach across schools',
  'Campaign engagement rate',
  'Leads generated per stream',
  'Account interest and clicks',
  'Content completion rate',
  'School adoption and retention',
];
