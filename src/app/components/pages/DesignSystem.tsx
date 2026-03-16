import { motion } from "motion/react";

export function DesignSystem() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-14 py-20 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="mb-16">
          <h1 
            className="font-['Space_Grotesk'] text-6xl md:text-7xl font-bold text-[#0B1B4A] mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Design System
          </h1>
          <p className="font-['Space_Grotesk'] text-lg text-[#0B1B4A]/65 max-w-2xl">
            Complete documentation of design elements, inspirations, and technical specifications for the USER_ portfolio website.
          </p>
        </div>

        {/* Design Philosophy */}
        <Section title="Design Philosophy">
          <p className="text-[#0B1B4A]/75 leading-relaxed mb-4">
            The USER_ portfolio embodies a <strong>bold, editorial, agency-grade aesthetic</strong> that combines behavioral design principles with sophisticated visual craft. The design language is intentionally non-standard, featuring:
          </p>
          <ul className="space-y-2 text-[#0B1B4A]/75 ml-6">
            <li>• <strong>Magazine-like scroll experience</strong> with full-height section snapping</li>
            <li>• <strong>Floating/non-grid layouts</strong> for editorial dynamism</li>
            <li>• <strong>Oversized typography</strong> with dramatic scale contrasts</li>
            <li>• <strong>Subtle micro-interactions</strong> including custom cursor and hover states</li>
            <li>• <strong>Clean white background</strong> (#FFFFFF) for maximum content focus</li>
          </ul>
        </Section>

        {/* Color Palette */}
        <Section title="Color Palette">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ColorSwatch
              name="Primary Dark"
              hex="#0B1B4A"
              usage="Headlines, body text, primary UI elements"
              rgb="11, 27, 74"
            />
            <ColorSwatch
              name="Accent Blue"
              hex="#3350FF"
              usage="Interactive elements, call-to-action, emphasis"
              rgb="51, 80, 255"
            />
            <ColorSwatch
              name="Background White"
              hex="#FFFFFF"
              usage="Main background (changed from #EDF1F8)"
              rgb="255, 255, 255"
            />
            <ColorSwatch
              name="Soft Glow"
              hex="#B8C9EE"
              usage="Portrait glow effect, subtle accents"
              rgb="184, 201, 238"
            />
          </div>
          <div className="bg-[#0B1B4A]/[0.03] rounded-2xl p-6">
            <h4 className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#0B1B4A]/60 mb-4">Opacity Scale</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <OpacityDemo label="100%" opacity={1} />
              <OpacityDemo label="75%" opacity={0.75} />
              <OpacityDemo label="65%" opacity={0.65} />
              <OpacityDemo label="60%" opacity={0.60} />
              <OpacityDemo label="50%" opacity={0.50} />
              <OpacityDemo label="20%" opacity={0.20} />
              <OpacityDemo label="10%" opacity={0.10} />
              <OpacityDemo label="6%" opacity={0.06} />
            </div>
          </div>
        </Section>

        {/* Typography */}
        <Section title="Typography System">
          <div className="space-y-8">
            <div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#0B1B4A] mb-3">Primary Font: Space Grotesk</h3>
              <p className="text-[#0B1B4A]/65 mb-4">
                <strong>Source:</strong> Google Fonts<br />
                <strong>Weights:</strong> 400 (Regular), 600 (Semi-Bold), 700 (Bold)<br />
                <strong>Usage:</strong> Headlines, body text, primary content
              </p>
              <div className="space-y-3">
                <TypeDemo size="140px" weight={700} text="Display Headline" label="clamp(64px, 13vw, 200px) · Weight 700" />
                <TypeDemo size="140px" weight={700} text="Hero Title" label="clamp(46px, 9vw, 140px) · Weight 700" />
                <TypeDemo size="1rem" weight={400} text="Body text is set at 1rem (16px) with weight 400 for optimal readability" label="1rem · Weight 400" />
              </div>
            </div>

            <div>
              <h3 className="font-['Space_Mono'] text-2xl font-bold text-[#0B1B4A] mb-3">Secondary Font: Space Mono</h3>
              <p className="text-[#0B1B4A]/65 mb-4">
                <strong>Source:</strong> Google Fonts<br />
                <strong>Weight:</strong> 400 (Regular)<br />
                <strong>Usage:</strong> Labels, eyebrows, navigation, metadata<br />
                <strong>Styling:</strong> Uppercase with expanded letter-spacing (0.3em - 0.45em)
              </p>
              <div className="space-y-3">
                <div className="font-['Space_Mono'] text-[11px] tracking-[0.45em] uppercase text-[#0B1B4A]/50">
                  EYEBROW LABEL · 11px · tracking: 0.45em
                </div>
                <div className="font-['Space_Mono'] text-[11px] tracking-[0.3em] uppercase text-[#0B1B4A]/60">
                  NAVIGATION ITEM · 11px · tracking: 0.3em
                </div>
              </div>
            </div>

            <div className="bg-[#0B1B4A]/[0.03] rounded-2xl p-6">
              <h4 className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#0B1B4A]/60 mb-4">Typography Fixes (Implemented)</h4>
              <ul className="space-y-2 text-[#0B1B4A]/75 text-sm">
                <li>✓ Minimum font size increased to 11-12px (from 8-10px)</li>
                <li>✓ Body text weight changed from 300 to 400 for better readability</li>
                <li>✓ Text opacity improved for better contrast (65% minimum)</li>
                <li>✓ Paragraph sizes standardized to 1rem</li>
                <li>✓ Line-height optimized for reading comfort (1.65-1.7)</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Layout & Grid */}
        <Section title="Layout Architecture">
          <div className="space-y-6">
            <div>
              <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#0B1B4A] mb-2">Scroll Snapping System</h4>
              <p className="text-[#0B1B4A]/65 mb-3">
                Each major section uses <code className="bg-[#0B1B4A]/[0.06] px-2 py-1 rounded text-sm">snap-start snap-always</code> with 100vh height, creating a magazine-like page-turning experience.
              </p>
              <CodeBlock>
{`className="h-screen snap-start snap-always overflow-hidden"
scroll-snap-type: y mandatory;
scroll-behavior: smooth;`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#0B1B4A] mb-2">Container System</h4>
              <ul className="space-y-2 text-[#0B1B4A]/75">
                <li>• <strong>Max-width:</strong> 1400px (content container)</li>
                <li>• <strong>Padding:</strong> px-6 (mobile) → px-14 (desktop)</li>
                <li>• <strong>Vertical rhythm:</strong> Multiples of 4 (py-4, py-10, mt-8, etc.)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#0B1B4A] mb-2">Positioning Strategy</h4>
              <p className="text-[#0B1B4A]/65">
                Non-grid floating layouts achieved through:
              </p>
              <ul className="space-y-2 text-[#0B1B4A]/75 mt-2">
                <li>• Absolute positioning for decorative elements</li>
                <li>• Flexbox with custom gaps and alignment</li>
                <li>• CSS transforms for dynamic positioning</li>
                <li>• Z-index layers: 1 (content), 10 (UI), 50 (navigation)</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Animation System */}
        <Section title="Animation & Interactions">
          <div className="space-y-6">
            <div>
              <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#0B1B4A] mb-2">Framer Motion (motion/react)</h4>
              <p className="text-[#0B1B4A]/65 mb-3">
                <strong>Package:</strong> motion (formerly Framer Motion)<br />
                <strong>Import:</strong> <code className="bg-[#0B1B4A]/[0.06] px-2 py-1 rounded text-sm">import {`{ motion }`} from "motion/react"</code>
              </p>
            </div>

            <div>
              <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#0B1B4A] mb-2">Key Animation Patterns</h4>
              
              <AnimationPattern 
                title="Slide-up Text Reveal"
                description="Used for large headlines with overflow-hidden wrapper"
                code={`initial={{ y: "108%" }}
animate={{ y: "0%" }}
transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}`}
              />

              <AnimationPattern 
                title="Fade + Translate"
                description="Subtle entrance for paragraphs and UI elements"
                code={`initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.3 }}`}
              />

              <AnimationPattern 
                title="Rotating Text Animation"
                description="Hero section word cycling (2-second intervals)"
                code={`<AnimatePresence mode="wait">
  <motion.span
    key={currentIndex}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -20, opacity: 0 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  />
</AnimatePresence>`}
              />

              <AnimationPattern 
                title="Infinite Marquee"
                description="Client logo scrolling animation"
                code={`animate={{ x: ["0%", "-50%"] }}
transition={{ duration: 22, repeat: Infinity, ease: "linear" }}`}
              />

              <AnimationPattern 
                title="Hover Scale"
                description="Button micro-interactions"
                code={`whileHover={{ scale: 1.04 }}
whileTap={{ scale: 0.96 }}`}
              />
            </div>

            <div className="bg-[#0B1B4A]/[0.03] rounded-2xl p-6">
              <h4 className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#0B1B4A]/60 mb-3">Easing Curves</h4>
              <ul className="space-y-2 text-[#0B1B4A]/75 text-sm font-mono">
                <li>• <strong>Primary:</strong> [0.16, 1, 0.3, 1] (smooth deceleration)</li>
                <li>• <strong>Linear:</strong> "linear" (marquee, continuous loops)</li>
                <li>• <strong>Ease Out:</strong> "easeOut" (navigation entrance)</li>
                <li>• <strong>Ease In Out:</strong> "easeInOut" (floating elements)</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Components Catalog */}
        <Section title="Component Architecture">
          <div className="space-y-6">
            <ComponentDoc
              name="Navigation (Nav.tsx)"
              description="Fixed top navigation with center-aligned links, logo left, contact button right"
              features={[
                "Context-aware scroll state (transparent → frosted glass)",
                "Smooth anchor scrolling to sections",
                "React Router integration for project pages",
                "Mobile hamburger menu with slide-down animation",
                "Custom cursor data attributes"
              ]}
              tech="Framer Motion, React Router, Lucide Icons"
            />

            <ComponentDoc
              name="Custom Cursor (CustomCursor.tsx)"
              description="Replaces default cursor with animated circular follower"
              features={[
                "Context-aware sizing based on data-cursor attributes",
                "Smooth spring physics for natural movement",
                "Hide on mobile/touch devices",
                "Blend mode effects for visual interest"
              ]}
              tech="Framer Motion, useEffect for mouse tracking"
            />

            <ComponentDoc
              name="Hero Section (Hero.tsx)"
              description="Primary landing section with animated headline and portrait"
              features={[
                "Rotating word animation (knowledge/insights → results/designs)",
                "Slide-up text reveals with staggered delays",
                "Floating portrait with pulsing glow effect",
                "Stats badges with subtle hover states",
                "Infinite client logo marquee"
              ]}
              tech="Framer Motion, useInView for scroll triggers"
            />

            <ComponentDoc
              name="Quote Break (QuoteBreak.tsx)"
              description="Full-screen manifesto section with oversized typography"
              features={[
                "Gradient background overlay",
                "Positioned tagline (upper right)",
                "4-line stacked quote with mixed text styles",
                "Bottom action bar with Let's Talk CTA",
                "Scroll exploration cue with animated arrow"
              ]}
              tech="Framer Motion, Lucide Icons"
            />

            <ComponentDoc
              name="Services Section (Services.tsx)"
              description="Expandable service rows with hover interactions"
              features={[
                "Hover-expand rows revealing detailed descriptions",
                "Smooth height/opacity transitions",
                "Index numbers with reduced opacity",
                "Arrow indicators for expandable state"
              ]}
              tech="React useState, Framer Motion"
            />

            <ComponentDoc
              name="Methodology Section (Methodology.tsx)"
              description="4-step process visualization with cards"
              features={[
                "Numbered step indicators",
                "Icon integration for visual hierarchy",
                "Responsive grid layout",
                "Subtle hover lift effects"
              ]}
              tech="Lucide Icons, Framer Motion"
            />

            <ComponentDoc
              name="Projects Section (Projects.tsx)"
              description="Portfolio grid with image-led project cards"
              features={[
                "Non-uniform grid with varied card sizes",
                "Image hover overlays with gradient masks",
                "Tag system for categorization",
                "React Router navigation to project details",
                "Unsplash integration for imagery"
              ]}
              tech="React Router, Framer Motion, Unsplash"
            />

            <ComponentDoc
              name="Project Detail (ProjectDetail.tsx)"
              description="Full-page project case study template"
              features={[
                "Hero image with project metadata",
                "Challenge/Solution/Impact structure",
                "Metrics showcase with animated counters",
                "Image galleries with captions",
                "Related projects navigation"
              ]}
              tech="React Router params, Framer Motion"
            />

            <ComponentDoc
              name="About Section (About.tsx)"
              description="Team/founder profile with credentials"
              features={[
                "Portrait photography integration",
                "Timeline or credential list",
                "Quote or philosophy statement",
                "Call-to-action to contact"
              ]}
              tech="Framer Motion, Unsplash"
            />

            <ComponentDoc
              name="Contact Section (Contact.tsx)"
              description="Footer contact information and form"
              features={[
                "Email/phone/location information",
                "Social media links",
                "Optional contact form",
                "Copyright and legal information"
              ]}
              tech="Framer Motion"
            />
          </div>
        </Section>

        {/* Technical Stack */}
        <Section title="Technical Stack">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TechStack
              category="Framework & Build"
              items={[
                { name: "React 18+", purpose: "UI component library" },
                { name: "TypeScript", purpose: "Type safety" },
                { name: "Vite", purpose: "Build tool and dev server" },
              ]}
            />
            <TechStack
              category="Styling"
              items={[
                { name: "Tailwind CSS v4", purpose: "Utility-first styling" },
                { name: "Custom CSS", purpose: "Theme tokens and fonts" },
                { name: "/src/styles/theme.css", purpose: "CSS custom properties" },
                { name: "/src/styles/fonts.css", purpose: "Font imports" },
              ]}
            />
            <TechStack
              category="Animation & Interaction"
              items={[
                { name: "motion (Framer Motion)", purpose: "Declarative animations" },
                { name: "Lucide React", purpose: "Icon library" },
              ]}
            />
            <TechStack
              category="Routing & State"
              items={[
                { name: "React Router v7", purpose: "Client-side routing" },
                { name: "React Hooks", purpose: "State management (useState, useEffect, useRef)" },
              ]}
            />
          </div>
        </Section>

        {/* File Structure */}
        <Section title="Project Structure">
          <CodeBlock language="bash">
{`/src
  /app
    /components
      /layouts
        MainLayout.tsx       # Root layout wrapper
      /pages
        HomePage.tsx         # Main portfolio page
        ProjectDetail.tsx    # Individual project pages
        DesignSystem.tsx     # This documentation page
      Nav.tsx                # Navigation component
      CustomCursor.tsx       # Cursor follower
      Hero.tsx               # Hero section
      QuoteBreak.tsx         # Manifesto section
      Services.tsx           # Services section
      Methodology.tsx        # Process section
      Projects.tsx           # Portfolio grid
      About.tsx              # About section
      Contact.tsx            # Contact/footer
    App.tsx                  # Root component
    routes.tsx               # React Router config
  /styles
    fonts.css                # Google Fonts imports
    theme.css                # CSS custom properties
    globals.css              # Base styles
  /imports                   # Figma assets (if any)`}
          </CodeBlock>
        </Section>

        {/* Design Inspirations */}
        <Section title="Design Inspirations & References">
          <div className="space-y-6">
            <InspirationSource
              title="Editorial Magazine Layouts"
              description="The non-grid, floating layouts and oversized typography draw from contemporary editorial design seen in publications like Kinfolk, Monocle, and It's Nice That."
              influence="Layout structure, typography scale, white space usage"
            />

            <InspirationSource
              title="Agency Portfolio Standards"
              description="Inspired by leading design agencies like Pentagram, MetaLab, and Instrument — focusing on bold imagery, clear case studies, and minimal chrome."
              influence="Project presentation, navigation simplicity, content-first approach"
            />

            <InspirationSource
              title="Scandinavian Minimalism"
              description="Copenhagen-based aesthetic emphasizing clarity, functionality, and restrained color palette. Clean backgrounds with strategic pops of color."
              influence="Color restraint, white space, typography choices"
            />

            <InspirationSource
              title="Behavioral Design Principles"
              description="The site practices what it preaches — using visual hierarchy, progressive disclosure (expandable services), and clear CTAs to guide user behavior."
              influence="Interaction patterns, information architecture"
            />

            <InspirationSource
              title="Modern SaaS Landing Pages"
              description="Influence from product sites like Linear, Stripe, and Vercel — featuring smooth scroll animations, frosted glass effects, and micro-interactions."
              influence="Glassmorphism nav, scroll snapping, animation timing"
            />
          </div>
        </Section>

        {/* Assets & Resources */}
        <Section title="External Resources & Assets">
          <div className="space-y-4">
            <ResourceLink
              name="Google Fonts"
              url="https://fonts.google.com"
              items={[
                "Space Grotesk (weights: 400, 600, 700)",
                "Space Mono (weight: 400)"
              ]}
            />

            <ResourceLink
              name="Unsplash"
              url="https://unsplash.com"
              items={[
                "Portrait photography for founder/team",
                "Project imagery and case study visuals",
                "All images must be replaced with real photography in production"
              ]}
            />

            <ResourceLink
              name="Lucide Icons"
              url="https://lucide.dev"
              items={[
                "Arrow icons (ArrowRight, ArrowDown, ArrowUpRight)",
                "UI icons (Menu, X for mobile nav)",
                "Methodology step icons"
              ]}
            />
          </div>
        </Section>

        {/* Implementation Notes */}
        <Section title="Implementation Notes for Export">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
            <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-yellow-900 mb-3">⚠️ Critical Checklist</h4>
            <ul className="space-y-2 text-yellow-900/80 text-sm">
              <li>✓ Replace all Unsplash images with real photography</li>
              <li>✓ Update project data in Projects.tsx with real case studies</li>
              <li>✓ Verify Google Fonts are loaded in production environment</li>
              <li>✓ Test cursor: none on body is supported (fallback for browsers)</li>
              <li>✓ Ensure React Router basename is configured for deployment path</li>
              <li>✓ Add real contact form backend integration if needed</li>
              <li>✓ Implement analytics tracking (GA4, Plausible, etc.)</li>
              <li>✓ Add SEO meta tags and Open Graph images</li>
              <li>✓ Test scroll snapping across browsers (Safari, Firefox, Chrome)</li>
              <li>✓ Optimize images (WebP format, responsive sizes)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#0B1B4A] mb-2">Package Installation</h4>
              <CodeBlock language="bash">
{`npm install motion react-router lucide-react
# or
pnpm add motion react-router lucide-react
# or
yarn add motion react-router lucide-react`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#0B1B4A] mb-2">Font Loading (fonts.css)</h4>
              <CodeBlock language="css">
{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400&display=swap');`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#0B1B4A] mb-2">Scroll Behavior (globals.css)</h4>
              <CodeBlock language="css">
{`html {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

body {
  cursor: none; /* For custom cursor */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#0B1B4A] mb-2">Browser Support</h4>
              <p className="text-[#0B1B4A]/65 mb-2">Tested and optimized for:</p>
              <ul className="space-y-1 text-[#0B1B4A]/75 text-sm ml-6">
                <li>• Chrome/Edge 90+</li>
                <li>• Firefox 88+</li>
                <li>• Safari 14+</li>
                <li>• Mobile Safari (iOS 14+)</li>
                <li>• Chrome Mobile (Android 10+)</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Version History */}
        <Section title="Design Evolution">
          <div className="space-y-4">
            <VersionEntry
              version="v1.0 - Initial Build"
              changes={[
                "Established color palette with #EDF1F8 background",
                "Implemented animated blob background layer",
                "Created 7-section architecture",
                "Built project showcase with React Router"
              ]}
            />
            <VersionEntry
              version="v1.1 - Visual Simplification"
              changes={[
                "Removed animated blob background for cleaner aesthetic",
                "Changed background from #EDF1F8 to white (#FFFFFF)",
                "Simplified visual layers and reduced visual noise"
              ]}
            />
            <VersionEntry
              version="v1.2 - Typography & Accessibility"
              changes={[
                "Increased minimum font sizes to 11-12px",
                "Changed body text weight from 300 to 400",
                "Improved text opacity for better contrast (65% minimum)",
                "Standardized paragraph sizes to 1rem"
              ]}
            />
            <VersionEntry
              version="v1.3 - Scroll Experience"
              changes={[
                "Implemented full scroll snapping system",
                "Added smooth scroll animations between sections",
                "Created magazine-like page-turning experience"
              ]}
            />
            <VersionEntry
              version="v1.4 - Hero Enhancements"
              changes={[
                "Added animated rotating headline in Hero section",
                "Implemented \"Let's turn [word] into [word]\" animation",
                "2-second word cycling with smooth fade transitions"
              ]}
            />
            <VersionEntry
              version="v1.5 - Navigation Refinement (Current)"
              changes={[
                "Centered navigation links",
                "Removed USER_ | Copenhagen | EST 2014 from QuoteBreak",
                "Removed 'Guiding principle' label",
                "Moved Let's Talk button to lower right",
                "Repositioned 'Behavioral science meets...' to upper right"
              ]}
            />
          </div>
        </Section>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-[#0B1B4A]/[0.06]">
          <p className="text-[#0B1B4A]/50 text-sm text-center">
            Design System Documentation · USER_ Portfolio · {new Date().getFullYear()}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Helper Components

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold text-[#0B1B4A] mb-6 border-b border-[#0B1B4A]/[0.08] pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ColorSwatch({ name, hex, usage, rgb }: { name: string; hex: string; usage: string; rgb: string }) {
  return (
    <div className="flex gap-4">
      <div 
        className="w-20 h-20 rounded-xl flex-shrink-0 border border-[#0B1B4A]/[0.08]"
        style={{ background: hex }}
      />
      <div>
        <h4 className="font-['Space_Grotesk'] font-semibold text-[#0B1B4A] mb-1">{name}</h4>
        <p className="font-mono text-sm text-[#0B1B4A]/65 mb-1">{hex}</p>
        <p className="font-mono text-xs text-[#0B1B4A]/50 mb-2">rgb({rgb})</p>
        <p className="text-sm text-[#0B1B4A]/65">{usage}</p>
      </div>
    </div>
  );
}

function OpacityDemo({ label, opacity }: { label: string; opacity: number }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div 
        className="w-full h-12 rounded-lg"
        style={{ background: `rgba(11, 27, 74, ${opacity})` }}
      />
      <span className="font-['Space_Mono'] text-[10px] tracking-wider text-[#0B1B4A]/60">{label}</span>
    </div>
  );
}

function TypeDemo({ size, weight, text, label }: { size: string; weight: number; text: string; label: string }) {
  return (
    <div className="mb-4">
      <div 
        className="font-['Space_Grotesk'] text-[#0B1B4A] mb-2"
        style={{ fontSize: size === "1rem" ? size : "clamp(32px, 5vw, 48px)", fontWeight: weight, letterSpacing: "-0.02em" }}
      >
        {text}
      </div>
      <p className="font-['Space_Mono'] text-[10px] tracking-wider text-[#0B1B4A]/50 uppercase">{label}</p>
    </div>
  );
}

function CodeBlock({ children, language = "tsx" }: { children: string; language?: string }) {
  return (
    <div className="relative">
      <div className="absolute top-3 right-3">
        <span className="font-['Space_Mono'] text-[10px] tracking-wider text-[#0B1B4A]/30 uppercase">{language}</span>
      </div>
      <pre className="bg-[#0B1B4A]/[0.04] rounded-xl p-6 overflow-x-auto">
        <code className="font-mono text-sm text-[#0B1B4A]/80 whitespace-pre">
          {children}
        </code>
      </pre>
    </div>
  );
}

function AnimationPattern({ title, description, code }: { title: string; description: string; code: string }) {
  return (
    <div className="mb-6">
      <h5 className="font-['Space_Grotesk'] font-semibold text-[#0B1B4A] mb-1">{title}</h5>
      <p className="text-sm text-[#0B1B4A]/60 mb-3">{description}</p>
      <CodeBlock>{code}</CodeBlock>
    </div>
  );
}

function ComponentDoc({ name, description, features, tech }: { name: string; description: string; features: string[]; tech: string }) {
  return (
    <div className="border border-[#0B1B4A]/[0.08] rounded-2xl p-6">
      <h4 className="font-['Space_Grotesk'] text-xl font-semibold text-[#0B1B4A] mb-2">{name}</h4>
      <p className="text-[#0B1B4A]/65 mb-4">{description}</p>
      <div className="mb-4">
        <h5 className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#0B1B4A]/50 mb-2">Features</h5>
        <ul className="space-y-1">
          {features.map((feature, i) => (
            <li key={i} className="text-sm text-[#0B1B4A]/70">• {feature}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-['Space_Mono'] text-[10px] tracking-widest uppercase text-[#0B1B4A]/40">Tech:</span>
        {tech.split(', ').map((t, i) => (
          <span key={i} className="bg-[#0B1B4A]/[0.06] px-2 py-1 rounded text-xs text-[#0B1B4A]/70">{t}</span>
        ))}
      </div>
    </div>
  );
}

function TechStack({ category, items }: { category: string; items: { name: string; purpose: string }[] }) {
  return (
    <div>
      <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#0B1B4A] mb-3">{category}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex flex-col">
            <span className="font-['Space_Mono'] text-sm text-[#0B1B4A] font-semibold">{item.name}</span>
            <span className="text-sm text-[#0B1B4A]/60">{item.purpose}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InspirationSource({ title, description, influence }: { title: string; description: string; influence: string }) {
  return (
    <div className="border-l-2 border-[#3350FF] pl-6">
      <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#0B1B4A] mb-2">{title}</h4>
      <p className="text-[#0B1B4A]/65 mb-2">{description}</p>
      <p className="text-sm text-[#3350FF] font-semibold">Influence: {influence}</p>
    </div>
  );
}

function ResourceLink({ name, url, items }: { name: string; url: string; items: string[] }) {
  return (
    <div className="bg-[#0B1B4A]/[0.03] rounded-xl p-5">
      <div className="flex items-baseline gap-3 mb-2">
        <h4 className="font-['Space_Grotesk'] font-semibold text-[#0B1B4A]">{name}</h4>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#3350FF] hover:underline">
          {url}
        </a>
      </div>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-[#0B1B4A]/70">• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function VersionEntry({ version, changes }: { version: string; changes: string[] }) {
  return (
    <div className="border-l-2 border-[#0B1B4A]/[0.15] pl-6">
      <h4 className="font-['Space_Mono'] text-sm tracking-widest uppercase text-[#0B1B4A]/60 mb-2">{version}</h4>
      <ul className="space-y-1">
        {changes.map((change, i) => (
          <li key={i} className="text-sm text-[#0B1B4A]/70">• {change}</li>
        ))}
      </ul>
    </div>
  );
}
