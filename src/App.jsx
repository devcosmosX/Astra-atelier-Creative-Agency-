import { Suspense, lazy } from 'react';
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

const stats = [
  { value: '42+', label: 'launches shaped for premium-first brands' },
  { value: '12w', label: 'average timeline from strategy to go-live' },
  { value: '91%', label: 'retainer extension rate across long-term partners' },
];

const detailedServices = [
  {
    icon: '01',
    category: 'Positioning',
    title: 'Brand Strategy & Market Narrative',
    description:
      'Clarify who you are, what you stand for, and why premium buyers should trust you before a single screen is designed.',
    timeline: '2–3 weeks',
    bestFor: 'Early-stage founders, repositioning brands, premium service firms',
    deliverables: ['Positioning framework', 'Messaging architecture', 'Audience tension map', 'Offer hierarchy'],
    benefits: ['Sharper differentiation', 'Better investor and customer communication', 'Faster downstream creative decisions'],
  },
  {
    icon: '02',
    category: 'Identity',
    title: 'Visual Identity Systems',
    description:
      'Build a modern identity language with scalable typography, palette logic, layout rhythm, and premium brand assets.',
    timeline: '3–4 weeks',
    bestFor: 'Founders needing a complete visual system for launch or growth',
    deliverables: ['Logo direction', 'Type and color system', 'Art direction principles', 'Brand guideline kit'],
    benefits: ['Cohesive brand presence', 'Stronger memorability', 'Asset consistency across channels'],
  },
  {
    icon: '03',
    category: 'Web',
    title: 'Premium Website Design & Build',
    description:
      'Design and develop a high-conviction marketing site that blends editorial polish, conversion clarity, and responsive performance.',
    timeline: '5–8 weeks',
    bestFor: 'Agency sites, SaaS launches, portfolio brands, high-ticket offers',
    deliverables: ['UX structure', 'Responsive UI design', 'Motion direction', 'Production-ready front-end build'],
    benefits: ['Stronger first impressions', 'Higher inquiry quality', 'Better storytelling at every breakpoint'],
  },
  {
    icon: '04',
    category: 'Launch',
    title: 'Launch Campaign Systems',
    description:
      'Create a full launch ecosystem with landing pages, rollout sequencing, campaign assets, and clear narrative control.',
    timeline: '3–5 weeks',
    bestFor: 'Product launches, service launches, event campaigns, founder announcements',
    deliverables: ['Launch landing page', 'Creative rollout plan', 'Asset direction', 'Campaign messaging toolkit'],
    benefits: ['Aligned multi-channel rollout', 'Cleaner go-to-market execution', 'More premium launch perception'],
  },
  {
    icon: '05',
    category: 'Content',
    title: 'Content & Editorial Systems',
    description:
      'Translate brand strategy into repeatable content formats, page modules, storytelling templates, and editorial direction.',
    timeline: '2–4 weeks',
    bestFor: 'Teams needing a smarter ongoing content engine',
    deliverables: ['Content pillars', 'Page module library', 'Editorial tone guide', 'Campaign prompt systems'],
    benefits: ['Less content chaos', 'Faster asset production', 'More strategic publishing consistency'],
  },
  {
    icon: '06',
    category: 'Motion',
    title: 'Motion Direction & Interaction Design',
    description:
      'Use motion intentionally to shape attention, improve flow, and make the interface feel distinctly premium without becoming noisy.',
    timeline: '2–3 weeks',
    bestFor: 'Brands that want cinematic polish and interaction detail',
    deliverables: ['Motion principles', 'Micro-interaction spec', 'Scroll choreography', 'Prototype direction'],
    benefits: ['Higher perceived quality', 'Better engagement depth', 'More memorable interface behavior'],
  },
  {
    icon: '07',
    category: 'Conversion',
    title: 'Conversion UX & Offer Architecture',
    description:
      'Refine how users move from curiosity to confidence with better page sequencing, trust framing, and action design.',
    timeline: '2–3 weeks',
    bestFor: 'High-ticket offers, agencies, consultants, B2B lead generation',
    deliverables: ['Conversion audit', 'CTA framework', 'Trust asset planning', 'Offer page optimization'],
    benefits: ['Improved lead quality', 'Reduced friction', 'Stronger inquiry intent'],
  },
  {
    icon: '08',
    category: 'Partnership',
    title: 'Embedded Creative Retainer',
    description:
      'Operate with a strategic creative partner across design, messaging, web iteration, and campaign rollout over time.',
    timeline: 'Monthly engagement',
    bestFor: 'Growing teams needing senior creative continuity without full-time overhead',
    deliverables: ['Monthly strategy sprints', 'Creative production support', 'Website iteration queue', 'Campaign refinement'],
    benefits: ['Faster execution cadence', 'Consistent creative quality', 'Long-term brand system evolution'],
  },
];

const pricingPackages = [
  {
    icon: '01',
    tier: 'Starter',
    label: 'Foundational launch',
    title: 'A focused identity package for early stage brands.',
    description: 'Clear scope for teams that need a polished launch presence.',
    price: '$3.8k',
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
    price: '$8.9k',
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
    price: '$16k+',
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
    title: 'Discovery & Positioning',
    copy: 'We identify the category tension, your unfair advantage, and the emotional narrative customers should remember.',
  },
  {
    step: '02',
    title: 'Creative Direction',
    copy: 'We develop the site’s visual behavior, content hierarchy, motion grammar, and premium interaction system.',
  },
  {
    step: '03',
    title: 'Build & Iterate',
    copy: 'We turn the direction into a responsive launch-ready experience, then optimize the story based on real feedback.',
  },
];

const showcaseCards = [
  {
    category: 'Luxury Real Estate',
    title: 'Elevated a boutique developer with a cinematic conversion journey.',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'AI SaaS',
    title: 'Reframed complex product value into a sharp founder-led narrative.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Fashion Commerce',
    title: 'Built a launch system that merged editorial energy with sales clarity.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
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
    title: 'Brand strategy that gives premium businesses a sharper point of view.',
    body:
      'We define the market narrative positioning framework and message architecture so every visual decision is grounded in strategic clarity.',
    notes: ['Audience tension mapping', 'Offer hierarchy', 'Message pillars', 'Category framing'],
  },
  {
    kicker: 'Core service',
    number: '02',
    title: 'Identity systems that feel refined scalable and unmistakably modern.',
    body:
      'We create visual systems that hold up across digital touchpoints with disciplined typography layout logic and art direction detail.',
    notes: ['Logo system', 'Typography scale', 'Color architecture', 'Guideline deck'],
  },
  {
    kicker: 'Core service',
    number: '03',
    title: 'Web design and front end execution built for premium conversion.',
    body:
      'From content hierarchy to interaction rhythm we shape website experiences that feel editorial immersive and commercially sharp.',
    notes: ['UX structure', 'Responsive UI', 'Motion layer', 'Production build'],
  },
  {
    kicker: 'Core service',
    number: '04',
    title: 'Launch systems that turn creative direction into visible momentum.',
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
    title: 'Asymmetric layouts that feel editorial rather than templated.',
    copy: 'Each section is designed to guide attention in a more cinematic sequence with contrast depth and spatial rhythm.',
  },
  {
    label: 'Conversion aware',
    title: 'Creative systems that stay commercially focused.',
    copy: 'Aesthetic detail is always connected to message clarity action design and trust building across the journey.',
  },
  {
    label: 'Built to scale',
    title: 'A visual system that grows with the brand.',
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
            <h2>Four high impact service offers presented with the same premium structure and clarity as the wider brand system.</h2>
            <p>
              The homepage now surfaces only the most important offers first so the experience stays focused.
              Visitors can then move into a dedicated services page for the full strategic picture.
            </p>
          </div>

          <div className="services-side-stack">
            <div className="services-side-note">
              <span>Preview logic</span>
              <p>A concise homepage preview keeps attention on the strongest offer categories without overwhelming the initial journey.</p>
            </div>
            <div className="services-side-note">
              <span>Next step</span>
              <p>The dedicated services page expands the offer system into a more immersive editorial and interactive presentation.</p>
            </div>
          </div>
        </div>

        <div className="services-feature-band">
          <div className="services-band-copy">
            <span className="section-kicker">Creative systems</span>
            <h3>Each homepage card introduces a service clearly while the full services page reveals the deeper methodology behind it.</h3>
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
                </div>
              </div>

              <div className="service-detail-main">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <div className="service-quick-facts">
                <div>
                  <span>Timeline</span>
                  <strong>{service.timeline}</strong>
                </div>
                <div>
                  <span>Best for</span>
                  <strong>{service.bestFor}</strong>
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

                <div className="service-list-block">
                  <span>Benefits</span>
                  <ul>
                    {service.benefits.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="service-card-footer">
                <Link to="/services">Show more</Link>
                <span>View full service page</span>
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
          <div className="eyebrow-row">
            <span className="eyebrow-meta">Strategy • Design • Motion • Launch Systems</span>
          </div>

          <div className="hero-grid hero-grid--single">
            <div className="hero-copy hero-copy--wide">
              <h1>
                {removePunctuation('We build digital brands that feel cinematic, clear, and conversion-ready.')}
              </h1>
              <p className="hero-description">
                Astra Atelier is a creative partner for ambitious founders, modern agencies, and
                premium teams that need strategy, storytelling, and web execution to move as one.
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
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="statement-section section-frame">
        <ScrollReveal
          baseOpacity={0}
          enableBlur
          baseRotation={4}
          blurStrength={8}
          textClassName="statement-text"
        >
          The best agency websites do more than look impressive. They clarify value, build
          emotional authority, and create momentum at every scroll depth. We design for that exact
          outcome.
        </ScrollReveal>
      </section>

      <HomepageServicesPreview />

      <section className="pricing-section section-frame" id="pricing" aria-labelledby="pricing-heading">
        <div className="pricing-shell">
          <div className="section-heading pricing-heading">
            <span className="section-kicker">Pricing structure</span>
            <h2 id="pricing-heading">Three clear engagement options designed for modern creative agency clients.</h2>
            <p>
              A simplified pricing system with focused scope premium positioning and professional content
              for founders teams and long term partners.
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
                              {isPremium ? '◆' : '•'}
                            </span>
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <a className="pricing-cta" href="#contact">
                    {pkg.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bento-section-wrapper section-frame">
        <div className="section-heading narrow">
          <span className="section-kicker">Capability map</span>
          <h2>Interactive systems for modern creative operations.</h2>
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
          <h2>A strategic workflow that turns abstract ambition into concrete market presence.</h2>
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
          <h2>The kind of embedded partner founders call when brand and build must align.</h2>
        </div>

        <div className="team-grid">
          <div className="team-copy">
            <p>
              We work like an in-house creative director, digital strategist, and product-minded
              developer in one rhythm. That means faster decisions, cleaner launches, and fewer
              disconnects between what the brand says and what the website actually does.
            </p>
            <ul className="team-points">
              <li>Founder-led strategy and presentation systems</li>
              <li>Responsive execution with high-end interaction design</li>
              <li>Launch content, campaign assets, and motion cohesion</li>
            </ul>
          </div>

          <div className="team-card-wrap">
            <Suspense fallback={<div className="profile-card-fallback" aria-hidden="true" />}>
              <ProfileCard
                name="Aria Bennett"
                title="Creative Director & Digital Strategist"
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
          <h2>Visual references curated with premium editorial energy.</h2>
          <p>
            Imagery is sourced from Unsplash-style editorial photography to keep the concept sharp,
            aspirational, and presentation-ready.
          </p>
        </div>

        <div className="showcase-grid">
          {showcaseCards.map((card) => (
            <article className="showcase-card" key={card.title}>
              <img src={card.image} alt={card.title} loading="lazy" decoding="async" />
              <div className="showcase-copy">
                <span>{card.category}</span>
                <h3>{card.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section section-frame" id="contact">
        <div className="cta-panel">
          <div>
            <span className="section-kicker">Next step</span>
            <h2>Need an agency site that feels custom, premium, and strategically intentional?</h2>
          </div>
          <div className="cta-actions">
            <a className="primary-button" href="mailto:hello@astraatelier.studio">
              hello@astraatelier.studio
            </a>
            <p>Creative direction, UX, motion systems, and launch-ready implementation.</p>
          </div>
        </div>
      </section>
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
            <span className="section-kicker">Dedicated services page</span>
            <h1>Creative services designed as a full premium system rather than a generic agency menu.</h1>
            <p>
              This page expands the service architecture into a more immersive experience with layered storytelling
              gradient cards interactive sections and award-style layouts that match the site visual language.
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
          <span className="section-kicker">Core offers</span>
          <h2>Four principal service tracks that anchor the entire creative engagement model.</h2>
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
          <span className="section-kicker">Creative section one</span>
          <h2>A bento style capability layout with layered gradients and hover shifts.</h2>
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
          <span className="section-kicker">Creative section two</span>
          <h2>A staggered timeline that presents the service journey with more rhythm and depth.</h2>
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
          <span className="section-kicker">Section four</span>
          <h2>Capability layers arranged as asymmetric content blocks for a more editorial feel.</h2>
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
          <span className="section-kicker">Creative section three</span>
          <h2>Offset feature blocks inspired by award winning agency layouts and parallax style composition.</h2>
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
          <span className="section-kicker">Section six</span>
          <h2>The service experience is built to create clarity speed and a stronger premium perception across every stage.</h2>
        </div>

        <div className="services-proof-panel">
          <div>
            <strong>Strategic alignment</strong>
            <p>Every engagement starts by reducing confusion and establishing a clearer route toward creative and commercial focus.</p>
          </div>
          <div>
            <strong>Refined execution</strong>
            <p>Layouts motion and systems are developed with restraint so the work feels elevated rather than overloaded.</p>
          </div>
          <div>
            <strong>Long term value</strong>
            <p>The output is designed to support launches future iterations and a more consistent brand presence over time.</p>
          </div>
        </div>
      </section>

      <section className="services-page-section section-frame services-faq-section">
        <div className="section-heading narrow">
          <span className="section-kicker">Section seven</span>
          <h2>Questions that help clients understand how the services can be structured.</h2>
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
            Book a service consultation
          </a>
        </div>
      </section>
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
