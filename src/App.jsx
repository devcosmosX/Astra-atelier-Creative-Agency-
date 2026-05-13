import { Suspense, lazy } from 'react';
import skitroImage from './images/SKITRO.png';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ScrollReveal from './components/ScrollReveal';
import './App.css';

const SoftAurora = lazy(() => import('./components/SoftAurora'));
const MagicRings = lazy(() => import('./components/MagicRings'));
const ScrollStackModule = lazy(() => import('./components/ScrollStack'));
const MagicBento = lazy(() => import('./components/MagicBento'));
const StaggeredMenu = lazy(() => import('./components/StaggeredMenu'));
const ProfileCard = lazy(() => import('./components/ProfileCard'));

const removePunctuation = (text) => text.replace(/[^A-Za-z\s]/g, '');

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home section', link: '#home' },
  { label: 'Services', ariaLabel: 'Go to services section', link: '#services' },
  { label: 'Pricing', ariaLabel: 'Go to pricing section', link: '#pricing' },
  { label: 'Process', ariaLabel: 'Go to process section', link: '#process' },
  { label: 'Team', ariaLabel: 'Go to team section', link: '#team' },
  { label: 'Contact', ariaLabel: 'Go to contact section', link: '#contact' },
];

const mobileMenuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Services', ariaLabel: 'Go to services page', link: '/services' },
  { label: 'Pricing', ariaLabel: 'Go to pricing section', link: '/#pricing' },
  { label: 'Process', ariaLabel: 'Go to process section', link: '/#process' },
  { label: 'Team', ariaLabel: 'Go to team section', link: '/#team' },
  { label: 'Contact', ariaLabel: 'Go to contact section', link: '/#contact' },
];

const socialItems = [
  { label: 'Instagram', link: 'https://www.instagram.com/' },
  { label: 'Behance', link: 'https://www.behance.net/' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/' },
];

const footerNavigation = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Process', href: '/#process' },
    ],
  },
  {
    title: 'Capabilities',
    links: [
      { label: 'Brand Strategy', href: '/services' },
      { label: 'Identity Systems', href: '/services' },
      { label: 'Website Design', href: '/services' },
      { label: 'Launch Support', href: '/services' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello at astraatelier dot studio', href: 'mailto:hello@astraatelier.studio' },
      { label: 'India studio contact line', href: 'tel:+910000000000' },
      { label: 'Schedule intro call', href: 'mailto:hello@astraatelier.studio?subject=Project%20Inquiry' },
      { label: 'Mumbai and remote worldwide', href: '#contact' },
    ],
  },
];

const stats = [
  { value: '42', label: 'Launches', tone: 'violet' },
  { value: '12 W', label: 'Timeline', tone: 'cyan' },
  { value: '90%', label: 'Retention', tone: 'neutral' },
];

const detailedServices = [
  {
    icon: '01',
    category: 'Positioning',
    title: 'Brand Strategy and Market Narrative',
    description:
      'Clarify your brand position market voice and business value so customers in India and worldwide markets understand why your company matters before design begins.',
    timeline: '2 to 3 weeks',
    bestFor: 'Early stage founders repositioning brands premium service firms',
    deliverables: ['Positioning framework', 'Messaging architecture', 'Audience tension map', 'Offer hierarchy'],
    benefits: ['Sharper differentiation', 'Better customer communication', 'Faster creative decisions'],
  },
  {
    icon: '02',
    category: 'Identity',
    title: 'Visual Identity Systems',
    description:
      'Build a premium visual identity system with scalable typography color logic and brand assets that support digital growth across India and global audiences.',
    timeline: '3 to 4 weeks',
    bestFor: 'Founders needing a complete visual system for launch or growth',
    deliverables: ['Logo direction', 'Type and color system', 'Art direction principles', 'Brand guideline kit'],
    benefits: ['Cohesive brand presence', 'Stronger memorability', 'Asset consistency across channels'],
  },
  {
    icon: '03',
    category: 'Web',
    title: 'Premium Website Design and Build',
    description:
      'Design and develop a high performance marketing website that combines premium design responsive development and conversion focused user journeys for modern businesses.',
    timeline: '5 to 8 weeks',
    bestFor: 'Agency sites SaaS launches portfolio brands high ticket offers',
    deliverables: ['UX structure', 'Responsive UI design', 'Motion direction', 'Production ready front end build'],
    benefits: ['Stronger first impressions', 'Higher inquiry quality', 'Better storytelling at every breakpoint'],
  },
  {
    icon: '04',
    category: 'Launch',
    title: 'Launch Campaign Systems',
    description:
      'Create a launch system with landing pages rollout planning and campaign assets that help brands in India and global markets go live with clarity and confidence.',
    timeline: '3 to 5 weeks',
    bestFor: 'Product launches service launches event campaigns founder announcements',
    deliverables: ['Launch landing page', 'Creative rollout plan', 'Asset direction', 'Campaign messaging toolkit'],
    benefits: ['Aligned launch rollout', 'Cleaner market execution', 'More premium launch perception'],
  },
  {
    icon: '05',
    category: 'Content',
    title: 'Content and Editorial Systems',
    description:
      'Turn strategy into content systems page structures and editorial direction that help your business publish with consistency and improve search visibility.',
    timeline: '2 to 4 weeks',
    bestFor: 'Teams needing a smarter ongoing content engine',
    deliverables: ['Content pillars', 'Page module library', 'Editorial tone guide', 'Campaign prompt systems'],
    benefits: ['Less content chaos', 'Faster asset production', 'More strategic publishing consistency'],
  },
  {
    icon: '06',
    category: 'Motion',
    title: 'Motion Direction and Interaction Design',
    description:
      'Use motion design and interaction systems to guide attention improve page flow and elevate the digital experience without distracting from your message.',
    timeline: '2 to 3 weeks',
    bestFor: 'Brands that want cinematic polish and interaction detail',
    deliverables: ['Motion principles', 'Micro interaction spec', 'Scroll choreography', 'Prototype direction'],
    benefits: ['Higher perceived quality', 'Better engagement depth', 'More memorable interface behavior'],
  },
  {
    icon: '07',
    category: 'Conversion',
    title: 'Conversion UX and Offer Architecture',
    description:
      'Refine the customer journey with stronger page sequencing trust content and call to action strategy that improves lead quality and inquiry intent.',
    timeline: '2 to 3 weeks',
    bestFor: 'High ticket offers agencies consultants B2B lead generation',
    deliverables: ['Conversion audit', 'CTA framework', 'Trust asset planning', 'Offer page optimization'],
    benefits: ['Improved lead quality', 'Reduced friction', 'Stronger inquiry intent'],
  },
  {
    icon: '08',
    category: 'Partnership',
    title: 'Embedded Creative Retainer',
    description:
      'Work with a long term creative partner for ongoing design messaging website improvements and campaign support as your business grows.',
    timeline: 'Monthly engagement',
    bestFor: 'Growing teams needing senior creative continuity without full time overhead',
    deliverables: ['Monthly strategy sprints', 'Creative production support', 'Website iteration queue', 'Campaign refinement'],
    benefits: ['Faster execution cadence', 'Consistent creative quality', 'Long term brand system evolution'],
  },
];

const pricingPackages = [
  {
    icon: '01',
    tier: 'Starter',
    label: 'Foundational launch',
    title: 'A focused identity package for early stage brands.',
    description: 'Clear scope for teams that need a polished launch presence.',
    price: 'Starting at 3 point 8k',
    billing: 'one time project',
    timeline: '2 to 3 weeks',
    accent: 'Core',
    featured: false,
    features: ['Brand direction', 'Visual identity', 'Typography system', 'Color system', 'Landing page design', 'Responsive handoff'],
    premiumFeatures: ['Responsive handoff'],
    cta: 'Choose Starter',
  },
  {
    icon: '02',
    tier: 'Professional',
    label: 'Growth ready system',
    title: 'A complete brand and website package for modern businesses.',
    description: 'Built for teams that need stronger positioning and a premium digital presence.',
    price: 'Starting at 8 point 9k',
    billing: 'full scope engagement',
    timeline: '5 to 7 weeks',
    accent: 'Most selected',
    featured: true,
    features: ['Brand strategy', 'Messaging direction', 'Identity system', 'Multi page website', 'Motion design', 'Conversion structure', 'Development build', 'Launch support'],
    premiumFeatures: ['Motion design', 'Launch support'],
    cta: 'Choose Professional',
  },
  {
    icon: '03',
    tier: 'Enterprise',
    label: 'Embedded creative partner',
    title: 'A long term creative system for ambitious and scaling teams.',
    description: 'Designed for brands that need strategy design and rollout support at a higher level.',
    price: 'Starting at 16k and above',
    billing: 'project and ongoing support',
    timeline: '8 to 12 weeks and retainer',
    accent: 'Priority',
    featured: false,
    features: ['Advanced positioning', 'Full brand system', 'Website ecosystem', 'Campaign planning', 'Priority execution', 'Team workshops', 'Iteration support', 'Monthly creative support'],
    premiumFeatures: ['Priority execution', 'Monthly creative support'],
    cta: 'Book Enterprise Call',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Strategy and clarity',
    copy: 'We audit your market offer and audience tension to define the strategic direction that should guide every page and every message.',
    detail: 'Research positioning workshops message framing and conversion priorities create the foundation before visuals begin.',
  },
  {
    step: '02',
    title: 'Creative system design',
    copy: 'We shape the visual language interface rhythm and storytelling structure into one premium direction that feels intentional at every breakpoint.',
    detail: 'This phase aligns art direction content hierarchy interaction patterns and brand atmosphere into a cohesive experience.',
  },
  {
    step: '03',
    title: 'Launch ready execution',
    copy: 'We build refine and prepare the experience for launch so the transition from concept to live website feels polished stable and commercially focused.',
    detail: 'Responsive implementation QA launch preparation and final refinement ensure the section flows naturally into the rest of the website.',
  },
];

const showcaseCards = [
  {
    category: 'Brand Direction',
    title: 'Premium product storytelling with a clean editorial layout',
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1400&q=80',
  },
  {
    category: 'Website Experience',
    title: 'Creative teams shaping refined digital journeys and modern interfaces',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
  },
  {
    category: 'Launch Campaign',
    title: 'Visual systems built for campaigns content and brand growth',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1400&q=80',
  },
];

const servicesHeroStats = [
  { value: '08', label: 'specialized service systems' },
  { value: '360', label: 'brand to launch creative scope' },
  { value: '01', label: 'partner model with end to end control' },
];

const servicePageSections = [
  {
    kicker: 'Core service',
    number: '01',
    title: 'Brand strategy that gives premium businesses a sharper point of view',
    body:
      'We define the market narrative positioning framework and message architecture so every visual decision is grounded in strategic clarity.',
    notes: ['Audience tension mapping', 'Offer hierarchy', 'Message pillars', 'Category framing'],
  },
  {
    kicker: 'Core service',
    number: '02',
    title: 'Identity systems that feel refined scalable and unmistakably modern',
    body:
      'We create visual systems that hold up across digital touchpoints with disciplined typography layout logic and art direction detail.',
    notes: ['Logo system', 'Typography scale', 'Color architecture', 'Guideline deck'],
  },
  {
    kicker: 'Core service',
    number: '03',
    title: 'Web design and front end execution built for premium conversion',
    body:
      'From content hierarchy to interaction rhythm we shape website experiences that feel editorial immersive and commercially sharp.',
    notes: ['UX structure', 'Responsive UI', 'Motion layer', 'Production build'],
  },
  {
    kicker: 'Core service',
    number: '04',
    title: 'Launch systems that turn creative direction into visible momentum',
    body:
      'We align pages rollout assets and campaign sequencing so launches feel coordinated elevated and ready for attention.',
    notes: ['Launch page', 'Campaign assets', 'Rollout sequence', 'Creative toolkit'],
  },
];

const serviceBentoCards = [
  {
    title: 'Creative Retainers',
    text: 'Long term embedded support for teams that need continuity across brand web and campaigns.',
  },
  {
    title: 'Offer Architecture',
    text: 'Service packaging and decision clarity designed to improve perception and inquiry quality.',
  },
  {
    title: 'Editorial Systems',
    text: 'Content structures and page modules that keep every launch narrative aligned.',
  },
  {
    title: 'Motion Language',
    text: 'Interaction principles that add polish depth and a stronger sense of premium craft.',
  },
  {
    title: 'Design Ops',
    text: 'Fast feedback loops smarter asset planning and production systems that scale.',
  },
  {
    title: 'Campaign Direction',
    text: 'Visual and messaging systems that keep launch moments unified across channels.',
  },
];

const serviceTimeline = [
  { phase: 'Phase 01', title: 'Audit and orientation', copy: 'We review the current brand website and market landscape to identify the gaps that matter most.' },
  { phase: 'Phase 02', title: 'Direction and concept', copy: 'We shape positioning visual references content structure and interaction principles into one creative route.' },
  { phase: 'Phase 03', title: 'Design and system build', copy: 'We expand the direction into modular pages scalable assets and a more cohesive digital brand system.' },
  { phase: 'Phase 04', title: 'Launch and refinement', copy: 'We deliver implementation support refinement rounds and rollout clarity for a stronger public release.' },
];

const capabilityColumns = [
  {
    title: 'What every engagement includes',
    items: ['Strategic alignment', 'Senior creative direction', 'Responsive design thinking', 'Presentation ready execution'],
  },
  {
    title: 'Where we add more depth',
    items: ['Launch planning', 'Motion systems', 'Content structuring', 'Retainer support'],
  },
];

const parallaxFeatures = [
  {
    label: 'Narrative led',
    title: 'Asymmetric layouts that feel editorial rather than templated',
    copy: 'Each section is designed to guide attention in a more cinematic sequence with contrast depth and spatial rhythm.',
  },
  {
    label: 'Conversion aware',
    title: 'Creative systems that stay commercially focused',
    copy: 'Aesthetic detail is always connected to message clarity action design and trust building across the journey.',
  },
  {
    label: 'Built to scale',
    title: 'A visual system that grows with the brand',
    copy: 'From a single launch page to a larger website ecosystem the design language stays controlled and recognizable.',
  },
];

const servicesFaq = [
  {
    question: 'Who is this designed for',
    answer: 'Founders studios and premium businesses that need stronger strategic direction and a more elevated digital presence.',
  },
  {
    question: 'Can services be combined',
    answer: 'Yes every engagement can be structured as a focused sprint or combined into a broader brand and website system.',
  },
  {
    question: 'Do you support launch after design',
    answer: 'Yes implementation support refinement and campaign rollout planning can be included depending on the engagement model.',
  },
];

function ProcessSection() {
  return (
    <section className="process-section section-frame" id="process">
      <div className="process-shell">
        <div className="section-heading process-heading">
          <span className="section-kicker">Process from strategy to launch</span>
          <h2>A clearer process with one continuous page scroll and a more guided story.</h2>
          <p>
            This section now moves with the main website scroll so visitors stay oriented while each stage layers in and
            releases naturally back into the rest of the page.
          </p>
        </div>

        <div className="process-overview">
          <div className="process-overview-card">
            <span>Why this changed</span>
            <p>
              The previous stacked area introduced a separate scrollbar which made the experience feel isolated from the
              website flow.
            </p>
          </div>
          <div className="process-overview-card">
            <span>What is better now</span>
            <p>
              Visitors scroll once through the page while the cards animate in sequence then hand off smoothly to the
              next section without confusion.
            </p>
          </div>
        </div>

        <Suspense fallback={<div className="section-block-fallback section-block-fallback--tall" aria-hidden="true" />}>
          <ScrollStackModule
            className="process-stack"
            itemDistance={90}
            itemScale={0.03}
            itemStackDistance={28}
            stackPosition="18%"
            scaleEndPosition="8%"
            baseScale={0.88}
            rotationAmount={-2}
            blurAmount={0.8}
            useWindowScroll
          >
            {processSteps.map((item) => (
              <ScrollStackModule.ScrollStackItem key={item.step} itemClassName="process-stack-card">
                <article className="process-card">
                  <div className="process-card__top">
                    <span className="process-card__step">{item.step}</span>
                    <span className="process-card__eyebrow">Astra Atelier methodology</span>
                  </div>

                  <div className="process-card__body">
                    <div className="process-card__headline">
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>

                    <div className="process-card__detail">
                      <span>Phase focus</span>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                </article>
              </ScrollStackModule.ScrollStackItem>
            ))}
          </ScrollStackModule>
        </Suspense>
      </div>
    </section>
  );
}

function DesktopNavigation() {
  return (
    <div className="hero-nav desktop-nav">
      <div className="brand-mark">
        <span className="brand-dot" />
        <span className="brand-name">Astra Atelier</span>
      </div>
      <nav className="hero-links" aria-label="Primary navigation">
        <Link to="/" className="nav-mirror-link" aria-label="Go to home page">
          <span className="nav-flip-stack">
            <span className="nav-flip-face nav-flip-face--front">Home</span>
            <span className="nav-flip-face nav-flip-face--back">Home</span>
          </span>
        </Link>
        <Link to="/services" className="nav-mirror-link" aria-label="Go to services page">
          <span className="nav-flip-stack">
            <span className="nav-flip-face nav-flip-face--front">Services</span>
            <span className="nav-flip-face nav-flip-face--back">Services</span>
          </span>
        </Link>
        {menuItems.filter((item) => item.label !== 'Home' && item.label !== 'Services').map((item) => (
          <a key={item.label} href={`/${item.link}`} className="nav-mirror-link" aria-label={item.ariaLabel}>
            <span className="nav-flip-stack">
              <span className="nav-flip-face nav-flip-face--front">{item.label}</span>
              <span className="nav-flip-face nav-flip-face--back">{item.label}</span>
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}

function MobileNavigation() {
  return (
    <div className="mobile-nav">
      <Suspense fallback={<button className="mobile-nav-fallback" type="button">Menu</button>}>
        <StaggeredMenu
          isFixed
          items={mobileMenuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering
          menuButtonColor="#ffffff"
          openMenuButtonColor="#111111"
          changeMenuColorOnOpen
          colors={['#ceb7ff', '#8d5bff']}
          accentColor="#6d4aff"
          logoUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=120&q=80"
        />
      </Suspense>
    </div>
  );
}

function HomepageServicesPreview() {
  return (
    <section className="services-section section-frame" id="services">
      <div className="services-shell">
        <div className="services-intro">
          <div className="section-heading services-heading">
            <span className="section-kicker">Service architecture</span>
            <h2>Creative agency services for brands in India and worldwide.</h2>
            <p>
              Explore our core services in brand strategy website design and launch support.
            </p>
          </div>

          <div className="services-side-stack">
            <div className="services-side-note">
              <span>Preview logic</span>
              <p>A simple preview helps visitors understand the main service categories fast.</p>
            </div>
            <div className="services-side-note">
              <span>Next step</span>
              <p>The full services page shares more detail for search visibility and lead generation.</p>
            </div>
          </div>
        </div>

        <div className="services-feature-band">
          <div className="services-band-copy">
            <span className="section-kicker">Creative systems</span>
            <h3>Each card highlights one core service with a clear and simple overview.</h3>
          </div>
          <div className="services-band-visual" aria-hidden="true">
            <Suspense fallback={<div className="section-block-fallback" aria-hidden="true" />}>
              <MagicRings
                color="#8d5bff"
                colorTwo="#67e8f9"
                ringCount={5}
                speed={0.65}
                attenuation={12}
                lineThickness={1.4}
                baseRadius={0.26}
                radiusStep={0.09}
                scaleRate={0.08}
                opacity={0.95}
                blur={0}
                noiseAmount={0.04}
                rotation={14}
                ringGap={1.45}
                fadeIn={0.7}
                fadeOut={0.5}
                followMouse={false}
                hoverScale={1.05}
                parallax={0.03}
                clickBurst={false}
              />
            </Suspense>
          </div>
        </div>

        <div className="services-grid">
          {detailedServices.slice(0, 4).map((service) => (
            <article className="service-detail-card" key={service.title}>
              <div className="service-detail-top">
                <div className="service-icon-badge">{service.icon}</div>
                <div className="service-meta-block">
                  <span className="service-category">{service.category}</span>
                  <span className="service-card-index">
                    {String(detailedServices.indexOf(service) + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="service-detail-main">
                <div className="service-detail-heading">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-feature-strip">
                  {service.deliverables.slice(0, 2).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="service-quick-facts">
                <div>
                  <span>Timeline</span>
                  <strong>{removePunctuation(service.timeline)}</strong>
                </div>
                <div>
                  <span>Best for</span>
                  <strong>{removePunctuation(service.bestFor)}</strong>
                </div>
              </div>

              <div className="service-detail-columns">
                <div className="service-list-block">
                  <span>Deliverables</span>
                  <ul>
                    {service.deliverables.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-list-block service-list-block--benefits">
                  <span>Results</span>
                  <ul>
                    {service.benefits.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="service-card-footer">
                <div className="service-card-footer__meta">
                  <span>Explore the full service breakdown</span>
                </div>
                <Link to="/services">Show more</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="services-show-more-wrap">
          <Link className="services-show-more-button" to="/services">
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer section-frame">
      <div className="site-footer__panel">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <span className="section-kicker">Astra Atelier</span>
            <h2>Creative agency for premium brands in India and worldwide.</h2>
            <p>
              Brand strategy website design and launch support for founders and growing businesses.
            </p>

            <div className="site-footer__contact-cards">
              <a className="site-footer__contact-card" href="mailto:hello@astraatelier.studio">
                <span>Email</span>
                <strong>hello@astraatelier.studio</strong>
              </a>
              <a className="site-footer__contact-card" href="tel:+910000000000">
                <span>Call</span>
                <strong>India studio contact line</strong>
              </a>
            </div>
          </div>

          <div className="site-footer__nav-grid">
            {footerNavigation.map((group) => (
              <div className="site-footer__nav-group" key={group.title}>
                <span>{group.title}</span>
                <ul>
                  {group.links.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="site-footer__nav-group">
              <span>Social</span>
              <ul>
                {socialItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__middle">
          <div className="site-footer__insight">
            <span>Availability</span>
            <strong>Available for selected website launches and brand projects.</strong>
          </div>
          <div className="site-footer__insight">
            <span>Best fit</span>
            <strong>Best for founders teams and premium businesses that need strategy design and execution.</strong>
          </div>
          <div className="site-footer__insight">
            <span>Delivery mode</span>
            <strong>Remote first with clear milestones weekly reviews and launch support.</strong>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 Astra Atelier. Designed for premium digital launches and modern brand systems.</p>
          <div className="site-footer__bottom-links">
            <a href="/#home">Back to top</a>
            <a href="/services">Full services</a>
            <a href="mailto:hello@astraatelier.studio">Start a project</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="agency-page">
      <section className="hero-section" id="home">
        <div className="hero-aurora">
          <Suspense fallback={<div className="hero-aurora-fallback" aria-hidden="true" />}>
            <SoftAurora
              speed={0.45}
              scale={1.3}
              brightness={0.9}
              color1="#ffffff"
              color2="#8b5cf6"
              noiseFrequency={2.2}
              noiseAmplitude={0.9}
              bandHeight={0.42}
              bandSpread={1.3}
              colorSpeed={0.8}
              mouseInfluence={0.18}
            />
          </Suspense>
        </div>

        <div className="hero-noise" />
        <DesktopNavigation />
        <MobileNavigation />

        <div className="hero-content section-frame">
          <div className="hero-grid hero-grid--single">
            <div className="hero-copy hero-copy--wide">
              <h1>{removePunctuation('Astra Atelier creative agency for branding websites and digital growth')}</h1>
              <p className="hero-description">
                Astra Atelier helps modern brands grow with premium website design branding and digital strategy.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="#contact">
                  Start a project
                </a>
                <Link className="secondary-button" to="/services">
                  Explore services
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-stats">
            {stats.map((item) => (
              <div className={`stat-card stat-card--${item.tone}`} key={item.value}>
                <span className="stat-card__label">{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="statement-section section-frame">
        <ScrollReveal
          baseOpacity={0.08}
          enableBlur
          baseRotation={2}
          blurStrength={6}
          rotationEnd="bottom center"
          wordAnimationEnd="bottom 62%"
          textClassName="statement-text"
        >
          Great agency websites improve search visibility, build trust, and turn visitors into qualified leads through strategic design, compelling content, and seamless user experiences that guide prospects through every stage of the buyer journey while showcasing expertise and establishing credibility as visitors scroll and explore.
        </ScrollReveal>
      </section>

      <HomepageServicesPreview />

      <section className="pricing-section section-frame" id="pricing" aria-labelledby="pricing-heading">
        <div className="pricing-shell">
          <div className="section-heading pricing-heading">
            <span className="section-kicker">Pricing structure</span>
            <h2 id="pricing-heading">Simple pricing for creative projects and website growth.</h2>
            <p>
              Choose the right plan for your brand website and launch goals.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPackages.map((pkg) => (
              <article
                key={pkg.tier}
                className={`pricing-card${pkg.featured ? ' pricing-card--featured' : ''}`}
                aria-label={`${pkg.tier} package`}
              >
                <div className="pricing-card__gradient" aria-hidden="true" />
                <div className="pricing-card__inner">
                  <div className="pricing-card__top">
                    <div className="pricing-card__badge">{pkg.icon}</div>
                    <div className="pricing-card__eyebrow-group">
                      <span className="pricing-card__label">{pkg.label}</span>
                      <span className="pricing-card__accent">{pkg.accent}</span>
                    </div>
                  </div>

                  <div className="pricing-card__hero">
                    <div className="pricing-card__headline">
                      <h3>{pkg.tier}</h3>
                      <p>{pkg.title}</p>
                    </div>

                    <div className="pricing-card__price-block">
                      <div className="pricing-card__price-line">
                        <strong>{pkg.price}</strong>
                        <span>{pkg.billing}</span>
                      </div>
                      <p>{pkg.description}</p>
                    </div>
                  </div>

                  <div className="pricing-card__meta">
                    <div className="pricing-meta-pill">
                      <span>Timeline</span>
                      <strong>{pkg.timeline}</strong>
                    </div>
                  </div>

                  <div className="pricing-features">
                    <span className="pricing-features__title">Included deliverables</span>
                    <ul>
                      {pkg.features.map((feature) => {
                        const isPremium = pkg.premiumFeatures.includes(feature);
                        return (
                          <li
                            key={feature}
                            className={isPremium ? 'pricing-feature pricing-feature--premium' : 'pricing-feature'}
                          >
                            <span className="pricing-feature__icon" aria-hidden="true">
                              {isPremium ? 'Premium' : 'Included'}
                            </span>
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="pricing-card__footer">
                    <a className="pricing-cta" href="#contact">
                      {pkg.cta}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bento-section-wrapper section-frame">
        <div className="section-heading narrow">
          <span className="section-kicker">Capability map</span>
          <h2>Creative capabilities for strategy design and digital growth.</h2>
        </div>
        <Suspense fallback={<div className="section-block-fallback" aria-hidden="true" />}>
          <MagicBento
            textAutoHide={false}
            enableStars={false}
            enableSpotlight={false}
            enableBorderGlow
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={false}
            spotlightRadius={320}
            particleCount={6}
            glowColor="109, 74, 255"
          />
        </Suspense>
      </section>

      <section className="process-section section-frame" id="process">
        <div className="section-heading">
          <span className="section-kicker">Process</span>
          <h2>A clear process from strategy to launch.</h2>
        </div>

        <div className="stack-shell">
          <Suspense fallback={<div className="section-block-fallback section-block-fallback--tall" aria-hidden="true" />}>
            <ScrollStackModule
              itemDistance={90}
              itemScale={0.04}
              itemStackDistance={24}
              stackPosition="18%"
              scaleEndPosition="12%"
              baseScale={0.9}
              rotationAmount={-2}
              blurAmount={0.6}
            >
              {processSteps.map((item) => (
                <div key={item.step} className="scroll-stack-card process-card process-card-fallback">
                  <div className="process-step">{item.step}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </div>
              ))}
            </ScrollStackModule>
          </Suspense>
        </div>
      </section>

      <section className="team-section section-frame" id="team">
        <div className="section-heading narrow">
          <span className="section-kicker">Creative lead</span>
          <h2>A creative partner for strategy design and launch support.</h2>
        </div>

        <div className="team-grid">
          <div className="team-copy">
            <p>
              We bring strategy design and website thinking into one focused workflow for faster and clearer execution.
            </p>
            <ul className="team-points">
              <li>Founder led strategy and presentation systems</li>
              <li>Responsive execution with premium website interaction design</li>
              <li>Launch content campaign assets and digital brand cohesion</li>
            </ul>
          </div>

          <div className="team-card-wrap">
            <Suspense fallback={<div className="profile-card-fallback" aria-hidden="true" />}>
              <ProfileCard
                name="Aria Bennett"
                title="Creative Director and Digital Strategist"
                handle="ariaatelier"
                status="Available for select Q3 projects"
                contactText="Book intro call"
                avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80"
                miniAvatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                iconUrl="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80"
                grainUrl="https://images.unsplash.com/photo-1528459105426-b9548367069b?auto=format&fit=crop&w=500&q=80"
                showUserInfo
                enableTilt={false}
                enableMobileTilt={false}
                behindGlowEnabled={false}
                innerGradient="linear-gradient(145deg, rgba(96, 73, 110, 0.55) 0%, rgba(113, 196, 255, 0.22) 100%)"
              />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="showcase-section section-frame">
        <div className="section-heading">
          <span className="section-kicker">Selected directions</span>
          <h2>Selected brand and website references.</h2>
          <p>
            A quick look at the visual quality and direction behind our work.
          </p>
        </div>

        <div className="showcase-editorial-layout">
          <article className="showcase-feature-card">
            <div className="showcase-feature-card__media">
              <img src={skitroImage} alt="Selected brand and website reference project preview" loading="lazy" decoding="async" />
            </div>
            <div className="showcase-feature-card__content">
              <span className="showcase-feature-card__eyebrow">Featured direction</span>
              <h3>Creative website references shaped with stronger imagery layout rhythm and premium digital storytelling.</h3>
              <p>
                This section now presents a more editorial visual mood with layered imagery stronger hierarchy and a more curated creative presentation.
              </p>
            </div>
          </article>

          <div className="showcase-grid">
            {showcaseCards.map((card) => (
              <article className="showcase-card" key={card.title}>
                <div className="showcase-card__image-wrap">
                  <img src={card.image} alt={card.title} loading="lazy" decoding="async" />
                </div>
                <div className="showcase-copy">
                  <span>{card.category}</span>
                  <h3>{card.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-frame" id="contact">
        <div className="cta-panel">
          <div>
            <span className="section-kicker">Next step</span>
            <h2>Need a website that builds trust and drives leads</h2>
          </div>
          <div className="cta-actions">
            <a className="primary-button" href="mailto:hello@astraatelier.studio">
              hello at astraatelier dot studio
            </a>
            <p>Creative direction website design development and launch support.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function ServicesPage() {
  return (
    <main className="agency-page services-page">
      <section className="services-hero-section">
        <div className="hero-aurora">
          <Suspense fallback={<div className="hero-aurora-fallback" aria-hidden="true" />}>
            <SoftAurora
              speed={0.4}
              scale={1.2}
              brightness={0.88}
              color1="#ffffff"
              color2="#8b5cf6"
              noiseFrequency={2.1}
              noiseAmplitude={0.8}
              bandHeight={0.4}
              bandSpread={1.2}
              colorSpeed={0.7}
              mouseInfluence={0.14}
            />
          </Suspense>
        </div>
        <div className="hero-noise" />
        <DesktopNavigation />
        <MobileNavigation />

        <div className="services-hero-content section-frame">
          <div className="section-heading narrow">
            <span className="section-kicker">Creative services page</span>
            <h1>Creative agency services for businesses in India and worldwide brands seeking premium digital growth.</h1>
            <p>
              Explore a complete service system covering brand strategy visual identity website design launch planning
              and conversion focused creative support for modern companies.
            </p>
          </div>

          <div className="services-hero-stats">
            {servicesHeroStats.map((item) => (
              <article className="services-hero-stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-page-section section-frame">
        <div className="section-heading">
          <span className="section-kicker">Core service offers</span>
          <h2>Four core service tracks that define our creative agency model for premium businesses.</h2>
        </div>

        <div className="services-page-grid">
          {servicePageSections.map((section) => (
            <article className="services-page-card" key={section.number}>
              <div className="services-page-card__number">{section.number}</div>
              <span className="services-page-card__kicker">{section.kicker}</span>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
              <div className="services-page-card__notes">
                {section.notes.map((note) => (
                  <span key={note}>{note}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page-section section-frame services-creative-bento">
        <div className="section-heading narrow">
          <span className="section-kicker">Creative capability blocks</span>
          <h2>Specialist creative capabilities that support brand growth website performance and stronger digital presence.</h2>
        </div>

        <div className="services-bento-grid">
          {serviceBentoCards.map((card, index) => (
            <article className={`services-bento-card services-bento-card--${(index % 3) + 1}`} key={card.title}>
              <span>{card.title}</span>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page-section section-frame services-timeline-section">
        <div className="section-heading">
          <span className="section-kicker">Service journey</span>
          <h2>A clear project timeline showing how strategy design and launch move from discovery to delivery.</h2>
        </div>

        <div className="services-timeline">
          {serviceTimeline.map((item) => (
            <article className="services-timeline-card" key={item.phase}>
              <span className="services-timeline-card__phase">{item.phase}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page-section section-frame services-capability-section">
        <div className="section-heading narrow">
          <span className="section-kicker">Capability layers</span>
          <h2>Creative capability layers organised to show strategy design content and launch support in one system.</h2>
        </div>

        <div className="services-capability-layout">
          {capabilityColumns.map((column) => (
            <article className="services-capability-card" key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page-section section-frame services-parallax-section">
        <div className="section-heading narrow">
          <span className="section-kicker">Featured advantages</span>
          <h2>Key service advantages that help brands improve visibility trust and premium customer perception online.</h2>
        </div>

        <div className="services-parallax-grid">
          {parallaxFeatures.map((item, index) => (
            <article className={`services-parallax-card services-parallax-card--offset-${index + 1}`} key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page-section section-frame services-proof-section">
        <div className="section-heading">
          <span className="section-kicker">Service outcomes</span>
          <h2>Every service engagement is built to create clarity speed and long term premium brand value.</h2>
        </div>

        <div className="services-proof-panel">
          <div>
            <strong>Strategic alignment</strong>
            <p>Every engagement starts by creating a clearer direction for brand positioning website goals and commercial growth.</p>
          </div>
          <div>
            <strong>Refined execution</strong>
            <p>Layouts motion and content systems are developed with discipline so the experience feels premium clear and effective.</p>
          </div>
          <div>
            <strong>Long term value</strong>
            <p>The final output is designed to support launch success future updates and a more consistent brand presence across channels.</p>
          </div>
        </div>
      </section>

      <section className="services-page-section section-frame services-faq-section">
        <div className="section-heading narrow">
          <span className="section-kicker">Service questions</span>
          <h2>Frequently asked questions that explain how our creative services are structured for modern businesses.</h2>
        </div>

        <div className="services-faq-grid">
          {servicesFaq.map((item) => (
            <article className="services-faq-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>

        <div className="services-page-cta">
          <Link className="primary-button" to="/">
            Back to home
          </Link>
          <a className="secondary-button" href="mailto:hello@astraatelier.studio">
            Book a creative service consultation
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Made with Bob
