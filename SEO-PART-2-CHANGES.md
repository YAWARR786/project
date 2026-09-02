# SEO Part 2 — Schema + Service SEO

This phase builds directly on the Part 1 codebase. No page layout, styling, animation, component structure, or visible service copy was redesigned.

## Implemented

### 1. Site entity structured data
Added a reusable JSON-LD graph containing:
- `Person` — Yawar Khan, SEO Consultant & Strategist
- `ProfessionalService` — Rank N Convert
- `WebSite` — Rank N Convert website entity

The graph uses stable `@id` values so pages reference the same entities consistently.

### 2. Service structured data
Every public SEO service page now outputs a dedicated `Service` entity with:
- service name
- service type
- SEO-focused description
- provider relationship
- audience definition
- canonical service URL
- relationship to the main web page

Covered service URLs:
- `/services/technical-seo-audit`
- `/services/content-strategy`
- `/services/keyword-strategy`
- `/services/seo-analytics`
- `/services/seo-blogs`
- `/services/local-seo`
- `/services/custom-ai-agent-creation`
- `/services/international-seo`
- `/services/seo-content-briefs`
- `/services/geo`

### 3. Services collection entity
The `/services` page now contains:
- `CollectionPage`
- an `ItemList` of all canonical SEO service pages

This reinforces the relationship between the service hub and individual service pages.

### 4. Breadcrumb structured data
Added `BreadcrumbList` schema for the main public pages and all service pages. Service pages use the hierarchy:

`Home > SEO Services > [Service]`

### 5. Page entity types
Added appropriate page-level schema relationships:
- Homepage: `WebPage`
- Services: `CollectionPage`
- About: `AboutPage`
- Contact: `ContactPage`
- Other public static pages: `WebPage`

### 6. Service keyword/entity targeting
Schema names and descriptions naturally reinforce the site's actual service topics, including:
- SEO services
- technical SEO audit
- SEO content strategy
- SEO keyword research
- keyword strategy
- SEO analytics and reporting
- SEO blog writing
- local SEO services
- international SEO services
- SEO content briefs
- Generative Engine Optimization (GEO)
- custom AI agents for SEO workflows

No obsolete `meta keywords` tag was added because major search engines do not use it as a ranking signal.

### 7. Metadata refinement
Retained all Part 1 metadata and added:
- `og:locale`
- `og:image:secure_url`
- `og:image:type`
- Twitter image alt text
- a more explicit About page description naming Yawar Khan

## Intentionally not added

To keep structured data accurate and policy-safe, this phase does **not** invent:
- ratings/review aggregates
- pricing
- physical addresses
- phone numbers
- awards
- certifications
- service areas not stated on the site

FAQ rich-result markup was also not added in this phase.

## WordPress note
Blog article structured data is intentionally left for Part 3 so it can be generated from each WordPress post/Yoast payload without conflicting with the article component.

## Front-end impact
There are no intended visual changes. The additions are metadata and JSON-LD in the document head plus a refactor of SEO configuration into `src/seo/schema.ts`.
