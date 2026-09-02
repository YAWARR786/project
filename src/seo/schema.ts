export const SITE_URL = 'https://ranknconvert.com';
export const SITE_NAME = 'Rank N Convert';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

export type PageSEO = {
  title: string;
  description: string;
  noindex?: boolean;
};

export type ServiceSEO = {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  audienceType: string;
};

export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/in/yawar-khan-97727a20a',
  'https://x.com/YawarKh0558563',
  'https://www.instagram.com/__yawar_khan__',
];

export const PAGE_SEO: Record<string, PageSEO> = {
  '/': {
    title: 'SEO Services & SEO Consultant | Rank N Convert',
    description:
      'Grow organic traffic with expert SEO services covering technical SEO, keyword research, content strategy, local SEO, international SEO and analytics.',
  },
  '/services': {
    title: 'SEO Services: Technical, Content, Local & More | Rank N Convert',
    description:
      'Explore SEO services for technical SEO audits, keyword strategy, content, local SEO, international SEO, analytics, SEO blogs and GEO optimization.',
  },
  '/services/technical-seo-audit': {
    title: 'Technical SEO Audit Services | Rank N Convert',
    description:
      'Find crawl, indexing, site architecture and performance issues with technical SEO audit services designed to improve organic search visibility.',
  },
  '/services/content-strategy': {
    title: 'SEO Content Strategy Services | Rank N Convert',
    description:
      'Build an SEO content strategy based on search intent, topical opportunities and organic growth goals to attract qualified search traffic.',
  },
  '/services/keyword-strategy': {
    title: 'SEO Keyword Research & Strategy Services | Rank N Convert',
    description:
      'Discover high-value search opportunities with SEO keyword research and keyword strategy focused on intent, relevance and organic growth.',
  },
  '/services/seo-analytics': {
    title: 'SEO Analytics & Reporting Services | Rank N Convert',
    description:
      'Turn organic search data into clear actions with SEO analytics, performance reporting, KPI tracking and insights that support better SEO decisions.',
  },
  '/services/seo-blogs': {
    title: 'SEO Blog Writing Services | Rank N Convert',
    description:
      'Create search-focused blog content with SEO blog writing services built around keyword intent, topical relevance and useful content for readers.',
  },
  '/services/local-seo': {
    title: 'Local SEO Services & Optimization | Rank N Convert',
    description:
      'Improve local search visibility with local SEO services covering location targeting, on-page optimization and strategies to reach nearby customers.',
  },
  '/services/custom-ai-agent-creation': {
    title: 'Custom AI Agent Development Services | Rank N Convert',
    description:
      'Build custom AI agents for SEO, research, content workflows and business automation with solutions designed around your processes and goals.',
  },
  '/services/international-seo': {
    title: 'International SEO Services | Rank N Convert',
    description:
      'Expand organic visibility across countries and languages with international SEO services covering targeting, site structure and search strategy.',
  },
  '/services/seo-content-briefs': {
    title: 'SEO Content Brief Services | Rank N Convert',
    description:
      'Give writers clear search-focused direction with SEO content briefs built around keywords, search intent, topics, structure and competitor insights.',
  },
  '/services/geo': {
    title: 'Generative Engine Optimization (GEO) Services | Rank N Convert',
    description:
      'Improve brand visibility across AI-powered search and answer engines with Generative Engine Optimization (GEO) strategy and content optimization.',
  },
  '/about': {
    title: 'About Rank N Convert | SEO Consultant & Strategist',
    description:
      'Learn about Yawar Khan, the SEO consultant behind Rank N Convert, and his approach to technical SEO, content strategy, keyword research and organic growth.',
  },
  '/process': {
    title: 'SEO Process & Organic Growth Strategy | Rank N Convert',
    description:
      'See the SEO process used to identify opportunities, prioritize technical and content improvements, implement changes and measure organic growth.',
  },
  '/contact': {
    title: 'Contact Rank N Convert | SEO Services',
    description:
      'Contact Rank N Convert to discuss technical SEO, keyword research, content strategy, local SEO, international SEO or broader organic growth needs.',
  },
  '/blog': {
    title: 'SEO Blog: Technical SEO, Content & Growth | Rank N Convert',
    description:
      'Read practical SEO insights covering technical SEO, keyword research, content strategy, organic traffic, search visibility and sustainable growth.',
  },
  '/book-call': {
    title: 'Book an SEO Strategy Call | Rank N Convert',
    description:
      'Book a call with Rank N Convert to discuss your website, SEO challenges, organic growth opportunities and the right SEO services for your goals.',
    noindex: true,
  },
  '/privacy': {
    title: 'Privacy Policy | Rank N Convert',
    description: 'Read the Rank N Convert privacy policy.',
    noindex: true,
  },
  '/terms': {
    title: 'Terms of Service | Rank N Convert',
    description: 'Read the Rank N Convert terms of service.',
    noindex: true,
  },
};

export const SERVICES: Record<string, ServiceSEO> = {
  '/services/technical-seo-audit': {
    path: '/services/technical-seo-audit',
    name: 'Technical SEO Audit Services',
    serviceType: 'Technical SEO Audit',
    description: PAGE_SEO['/services/technical-seo-audit'].description,
    audienceType: 'Businesses that need crawlability, indexing, site architecture and technical SEO improvements',
  },
  '/services/content-strategy': {
    path: '/services/content-strategy',
    name: 'SEO Content Strategy Services',
    serviceType: 'SEO Content Strategy',
    description: PAGE_SEO['/services/content-strategy'].description,
    audienceType: 'Businesses that need a search-led content strategy for qualified organic traffic and growth',
  },
  '/services/keyword-strategy': {
    path: '/services/keyword-strategy',
    name: 'SEO Keyword Research & Strategy Services',
    serviceType: 'SEO Keyword Research and Keyword Strategy',
    description: PAGE_SEO['/services/keyword-strategy'].description,
    audienceType: 'Businesses that need keyword research, search intent mapping and organic search opportunity analysis',
  },
  '/services/seo-analytics': {
    path: '/services/seo-analytics',
    name: 'SEO Analytics & Reporting Services',
    serviceType: 'SEO Analytics and Reporting',
    description: PAGE_SEO['/services/seo-analytics'].description,
    audienceType: 'Businesses that need SEO performance measurement, reporting and organic search insights',
  },
  '/services/seo-blogs': {
    path: '/services/seo-blogs',
    name: 'SEO Blog Writing Services',
    serviceType: 'SEO Blog Writing',
    description: PAGE_SEO['/services/seo-blogs'].description,
    audienceType: 'Businesses that need search-focused blog content designed around relevant keywords and user intent',
  },
  '/services/local-seo': {
    path: '/services/local-seo',
    name: 'Local SEO Services',
    serviceType: 'Local SEO Optimization',
    description: PAGE_SEO['/services/local-seo'].description,
    audienceType: 'Local and multi-location businesses that want stronger visibility in location-based search results',
  },
  '/services/custom-ai-agent-creation': {
    path: '/services/custom-ai-agent-creation',
    name: 'Custom AI Agent Development Services',
    serviceType: 'Custom AI Agent Development for SEO and Business Workflows',
    description: PAGE_SEO['/services/custom-ai-agent-creation'].description,
    audienceType: 'Businesses and SEO teams that want custom AI agents for research, content and workflow automation',
  },
  '/services/international-seo': {
    path: '/services/international-seo',
    name: 'International SEO Services',
    serviceType: 'International SEO',
    description: PAGE_SEO['/services/international-seo'].description,
    audienceType: 'Businesses expanding organic search visibility across multiple countries, markets or languages',
  },
  '/services/seo-content-briefs': {
    path: '/services/seo-content-briefs',
    name: 'SEO Content Brief Services',
    serviceType: 'SEO Content Briefs',
    description: PAGE_SEO['/services/seo-content-briefs'].description,
    audienceType: 'Content teams and writers that need keyword, intent, topic and structure guidance for search-focused content',
  },
  '/services/geo': {
    path: '/services/geo',
    name: 'Generative Engine Optimization (GEO) Services',
    serviceType: 'Generative Engine Optimization (GEO)',
    description: PAGE_SEO['/services/geo'].description,
    audienceType: 'Brands that want greater visibility across AI-powered search, answer engines and generative discovery experiences',
  },
};

export const normalizePath = (pathname: string) => {
  if (pathname === '/') return '/';
  return pathname.replace(/\/+$/, '').toLowerCase();
};

const absoluteUrl = (path: string) => `${SITE_URL}${path === '/' ? '/' : path}`;

const breadcrumbName = (path: string) => {
  if (path === '/services') return 'SEO Services';
  if (path === '/about') return 'About';
  if (path === '/process') return 'SEO Process';
  if (path === '/contact') return 'Contact';
  if (path === '/blog') return 'SEO Blog';
  if (path === '/book-call') return 'Book an SEO Strategy Call';
  if (path === '/privacy') return 'Privacy Policy';
  if (path === '/terms') return 'Terms of Service';
  return SERVICES[path]?.name || PAGE_SEO[path]?.title.split('|')[0].trim() || 'Page';
};

const makeBreadcrumb = (path: string) => {
  if (path === '/') return null;

  const items: Array<{ name: string; url: string }> = [
    { name: 'Home', url: absoluteUrl('/') },
  ];

  if (path.startsWith('/services/')) {
    items.push({ name: 'SEO Services', url: absoluteUrl('/services') });
  }

  items.push({ name: breadcrumbName(path), url: absoluteUrl(path) });

  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

const personEntity = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Yawar Khan',
  url: `${SITE_URL}/about`,
  jobTitle: 'SEO Consultant & Strategist',
  sameAs: SOCIAL_PROFILES,
  knowsAbout: [
    'SEO Services',
    'Technical SEO',
    'SEO Audits',
    'Keyword Research',
    'SEO Content Strategy',
    'Local SEO',
    'International SEO',
    'SEO Analytics',
    'SEO Content Writing',
    'Generative Engine Optimization',
  ],
};

const professionalServiceEntity = {
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#professional-service`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  description:
    'SEO consulting and SEO services covering technical SEO audits, keyword research, content strategy, local SEO, international SEO, SEO analytics, SEO content and Generative Engine Optimization.',
  founder: { '@id': `${SITE_URL}/#person` },
  image: DEFAULT_OG_IMAGE,
};

const websiteEntity = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#professional-service` },
  inLanguage: 'en',
};

const serviceCatalogEntity = {
  '@type': 'ItemList',
  '@id': `${SITE_URL}/services#service-list`,
  name: 'Rank N Convert SEO Services',
  itemListElement: Object.values(SERVICES).map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: absoluteUrl(service.path),
    name: service.name,
  })),
};

export const buildStructuredData = (path: string, pageSEO: PageSEO) => {
  const canonical = absoluteUrl(path);
  const graph: Record<string, unknown>[] = [
    personEntity,
    professionalServiceEntity,
    websiteEntity,
  ];

  if (path === '/') {
    graph.push({
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: pageSEO.title,
      description: pageSEO.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#professional-service` },
      mainEntity: { '@id': `${SITE_URL}/#professional-service` },
      inLanguage: 'en',
    });
  } else if (path === '/services') {
    graph.push({
      '@type': 'CollectionPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: pageSEO.title,
      description: pageSEO.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#professional-service` },
      mainEntity: { '@id': `${SITE_URL}/services#service-list` },
      breadcrumb: { '@id': `${canonical}#breadcrumb` },
      inLanguage: 'en',
    });
    graph.push(serviceCatalogEntity);
  } else {
    const service = SERVICES[path];
    const pageType = path === '/about'
      ? 'AboutPage'
      : path === '/contact'
        ? 'ContactPage'
        : path === '/blog'
          ? 'CollectionPage'
          : 'WebPage';

    graph.push({
      '@type': pageType,
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: pageSEO.title,
      description: pageSEO.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: service
        ? { '@id': `${canonical}#service` }
        : { '@id': `${SITE_URL}/#professional-service` },
      ...(service ? { mainEntity: { '@id': `${canonical}#service` } } : {}),
      breadcrumb: { '@id': `${canonical}#breadcrumb` },
      inLanguage: 'en',
    });

    if (service) {
      graph.push({
        '@type': 'Service',
        '@id': `${canonical}#service`,
        name: service.name,
        url: canonical,
        description: service.description,
        serviceType: service.serviceType,
        category: 'SEO Services',
        provider: { '@id': `${SITE_URL}/#professional-service` },
        audience: {
          '@type': 'Audience',
          audienceType: service.audienceType,
        },
        mainEntityOfPage: { '@id': `${canonical}#webpage` },
      });
    }
  }

  const breadcrumb = makeBreadcrumb(path);
  if (breadcrumb) graph.push(breadcrumb);

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};

export const stringifyStructuredData = (value: unknown) =>
  JSON.stringify(value).replace(/</g, '\\u003c');
