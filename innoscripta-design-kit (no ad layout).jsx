import React, { useState } from 'react';

const InnoDesignKit = () => {
  const [activeSection, setActiveSection] = useState('colors');
  const [copiedColor, setCopiedColor] = useState(null);

  const copyToClipboard = (text, colorName) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // BRAND COLORS - Based on actual Innoscripta website
  // ═══════════════════════════════════════════════════════════════════════════
  const colors = {
    primaryBlueDark: {
      name: 'Primary Blue Dark',
      hex: '#0A607E',
      rgb: 'rgb(10, 96, 126)',
      cssVar: '--primary-blue-dark',
      usage: 'Logo text, primary branding, dark accents'
    },
    primaryBlueLight: {
      name: 'Primary Blue Light',
      hex: '#2B8AAF',
      rgb: 'rgb(43, 138, 175)',
      cssVar: '--primary-blue-light',
      usage: 'Links, interactive elements, icons'
    },
    tealBlue: {
      name: 'Teal Blue',
      hex: '#2186AB',
      rgb: 'rgb(33, 134, 171)',
      cssVar: '--teal-blue',
      usage: 'Gradient end color, secondary accents'
    },
    warningGreen: {
      name: 'Warning Green',
      hex: '#A9CF73',
      rgb: 'rgb(169, 207, 115)',
      cssVar: '--warning-green-light',
      usage: 'CTAs, highlights, gradient start, success states'
    },
    warningGreenDark: {
      name: 'Warning Green Dark',
      hex: '#8AB860',
      rgb: 'rgb(138, 184, 96)',
      cssVar: '--warning-green-dark',
      usage: 'Hover states for green elements'
    },
    darkBlue: {
      name: 'Dark Blue',
      hex: '#1A3A5C',
      rgb: 'rgb(26, 58, 92)',
      cssVar: '--dark-blue',
      usage: 'Primary text, headings, dark backgrounds'
    },
    primaryBg: {
      name: 'Primary Background',
      hex: '#0D4A63',
      rgb: 'rgb(13, 74, 99)',
      cssVar: '--primary-bg',
      usage: 'Footer, dark sections, hero backgrounds'
    },
    white: {
      name: 'White',
      hex: '#FFFFFF',
      rgb: 'rgb(255, 255, 255)',
      cssVar: '--white',
      usage: 'Backgrounds, text on dark surfaces'
    },
    grey100: {
      name: 'Grey 100',
      hex: '#F5F7FA',
      rgb: 'rgb(245, 247, 250)',
      cssVar: '--grey-100',
      usage: 'Section backgrounds, cards'
    },
    grey500: {
      name: 'Grey 500',
      hex: '#9CA3AF',
      rgb: 'rgb(156, 163, 175)',
      cssVar: '--grey-500',
      usage: 'Borders, disabled states, secondary text'
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // TYPOGRAPHY
  // ═══════════════════════════════════════════════════════════════════════════
  const typography = {
    display: { name: 'Display', size: '56px', weight: '700', lineHeight: '1.1', font: 'Raleway' },
    h1: { name: 'Header 44', size: '44px', weight: '700', lineHeight: '1.2', font: 'Raleway' },
    h2: { name: 'Header 32', size: '32px', weight: '700', lineHeight: '1.25', font: 'Raleway' },
    h3: { name: 'Sub Header 22', size: '22px', weight: '600', lineHeight: '1.3', font: 'Raleway' },
    h4: { name: 'Header 14', size: '14px', weight: '700', lineHeight: '1.35', font: 'Raleway' },
    body20: { name: 'Body 20', size: '20px', weight: '400', lineHeight: '1.6', font: 'Raleway' },
    body: { name: 'Body 16', size: '16px', weight: '400', lineHeight: '1.6', font: 'Raleway' },
    inline14: { name: 'Inline 14', size: '14px', weight: '400', lineHeight: '1.5', font: 'Raleway' },
    inline12: { name: 'Inline 12', size: '12px', weight: '500', lineHeight: '1.4', font: 'Raleway' }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // HEADLINE PATTERNS
  // ═══════════════════════════════════════════════════════════════════════════
  const headlinePatterns = [
    {
      type: 'Tagline + Headline',
      tagline: 'More innovation budget, less bureaucracy.',
      headline: 'Efficient use of',
      highlight: 'research allowance',
      description: 'Secondary statement above, primary headline with highlighted keyword'
    },
    {
      type: 'Benefit Statement',
      tagline: null,
      headline: 'Save Time & Money with',
      highlight: 'innoscripta',
      description: 'Direct benefit + brand name highlight'
    },
    {
      type: 'Stat-Driven',
      tagline: null,
      headline: 'Maximum Funding through the',
      highlight: 'inno-SCAN',
      description: 'Feature/product name as highlight'
    },
    {
      type: 'Percentage Lead',
      tagline: null,
      headline: '80% Less',
      highlight: 'Administrative Effort',
      description: 'Big number followed by benefit'
    }
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // STATISTICS
  // ═══════════════════════════════════════════════════════════════════════════
  const statistics = [
    { value: '40%', label: 'more funding', description: 'than when applying independently' },
    { value: '80%', label: 'less effort', description: 'administrative workload reduction' },
    { value: '35%', label: 'tax credit', description: 'for eligible R&D personnel costs' },
    { value: '100+', label: 'experts', description: 'funding specialists on your side' }
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // CTA OPTIONS
  // ═══════════════════════════════════════════════════════════════════════════
  const ctaOptions = {
    primary: [
      'Request a demo',
      'Book your interview',
      'Request a free consultation',
      'Get started'
    ],
    secondary: [
      'Learn more',
      'View all solutions',
      'Discover insights',
      'See how it works'
    ]
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // INDUSTRIES
  // ═══════════════════════════════════════════════════════════════════════════
  const industries = [
    { name: 'IT & Software Development', tags: ['AI & Machine Learning', 'Cloud-native Architectures', 'DevOps'] },
    { name: 'Mechanical Engineering', tags: ['Automation', 'Robotics', 'CAD/CAM'] },
    { name: 'Automotive Industry', tags: ['E-Mobility', 'Autonomous Driving', 'Connected Cars'] },
    { name: 'Pharmaceutical Industry', tags: ['Drug Development', 'Clinical Trials', 'Biotech'] },
    { name: 'Chemical Industry', tags: ['Process Optimization', 'Green Chemistry', 'Materials'] },
    { name: 'Food & Beverage', tags: ['Food Tech', 'Sustainability', 'Processing'] },
    { name: 'Manufacturing', tags: ['Industry 4.0', 'Smart Factory', 'IoT'] },
    { name: 'Construction', tags: ['BIM', 'Sustainable Building', 'Materials'] },
    { name: 'Textile Industry', tags: ['Smart Textiles', 'Sustainability', 'Innovation'] }
  ];

  const sections = [
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'headlines', label: 'Headlines' },
    { id: 'statistics', label: 'Statistics' },
    { id: 'components', label: 'Components' },
    { id: 'industries', label: 'Industries' },
    { id: 'artstyles', label: 'Art Styles' },
    { id: 'guidelines', label: 'Guidelines' }
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // ART STYLES
  // ═══════════════════════════════════════════════════════════════════════════
  const artStyles = [
    {
      name: 'Neo-Brutalist Editorial SaaS Design',
      prompt: 'Neo-Brutalist Editorial SaaS Design Style, bold shapes, experimental typography, strong contrast, unconventional layout, modern tech editorial advertising visual',
      tags: ['Bold', 'Experimental', 'High Contrast'],
      preview: 'linear-gradient(135deg, #1a1a1a 0%, #333 50%, #A9CF73 100%)',
      bestFor: 'Brand awareness, disruptive messaging'
    },
    {
      name: 'Premium Minimal Product Visualization',
      prompt: 'Premium Minimal Product Visualization Style, soft 3D product mockup, neutral background, subtle shadows, elegant lighting, high-end modern tech advertising visual',
      tags: ['Soft 3D', 'Elegant', 'Premium'],
      preview: 'linear-gradient(180deg, #f5f5f5 0%, #e8e8e8 100%)',
      bestFor: 'Product showcases, premium positioning'
    },
    {
      name: 'Conceptual Minimalist Editorial',
      prompt: 'Conceptual Minimalist Editorial Style, single strong visual metaphor, clean background, minimal color palette, bold headline space, modern professional advertising visual, high contrast, print-editorial quality',
      tags: ['Metaphor', 'Clean', 'Editorial'],
      preview: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 100%)',
      bestFor: 'Thought leadership, conceptual campaigns'
    },
    {
      name: 'Modern Flat SaaS Illustration',
      prompt: 'Modern Flat SaaS Illustration Style, clean vector shapes, simplified UI elements, bright but controlled color palette, product explainer advertising visual, modern tech aesthetic',
      tags: ['Vector', 'Flat', 'Explainer'],
      preview: 'linear-gradient(135deg, #A9CF73 0%, #2186AB 100%)',
      bestFor: 'Feature explanations, product tours'
    },
    {
      name: 'Bold Typography-Led Brand',
      prompt: 'Bold Typography-Led Brand Advertising Style, large expressive text, minimal or no imagery, high contrast background, strong brand presence, modern digital ad layout',
      tags: ['Typography', 'Minimal', 'Bold'],
      preview: 'linear-gradient(180deg, #0D4A63 0%, #0A607E 100%)',
      bestFor: 'Brand statements, headline-driven ads'
    },
    {
      name: 'Human-Centered Product-Led SaaS',
      prompt: 'Human-Centered Product-Led SaaS Style, real person using a digital product, realistic environment, UI overlays integrated into the scene, modern professional advertising visual',
      tags: ['Human', 'Realistic', 'Product-Led'],
      preview: 'linear-gradient(135deg, #2B8AAF 0%, #0D4A63 100%)',
      bestFor: 'Use-case demos, relatable scenarios'
    },
    {
      name: 'Testimonial-Driven Minimalist',
      prompt: 'Testimonial-Driven Minimalist Design Style, clean white space, real person portrait, quote-focused layout, calm professional tone, high-trust digital advertising visual',
      tags: ['Trust', 'Quote', 'Portrait'],
      preview: 'linear-gradient(180deg, #ffffff 0%, #F5F7FA 100%)',
      bestFor: 'Social proof, customer stories'
    },
    {
      name: 'Playful Flat Illustration SaaS',
      prompt: 'Playful Flat Illustration SaaS Style, colorful flat icons, friendly shapes, simple symbolic visuals, modern digital advertising illustration',
      tags: ['Playful', 'Icons', 'Friendly'],
      preview: 'linear-gradient(135deg, #A9CF73 0%, #8AB860 50%, #2186AB 100%)',
      bestFor: 'Approachable messaging, icon-driven ads'
    }
  ];

  const ColorSwatch = ({ color, colorKey }) => (
    <div 
      className="group cursor-pointer transition-all duration-300 hover:scale-105"
      onClick={() => copyToClipboard(color.hex, colorKey)}
    >
      <div 
        className="h-20 rounded-xl shadow-lg relative overflow-hidden"
        style={{ backgroundColor: color.hex }}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
          {copiedColor === colorKey ? (
            <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded-full">Copied!</span>
          ) : (
            <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
          )}
        </div>
      </div>
      <div className="mt-2">
        <p className="font-semibold text-gray-900 text-sm">{color.name}</p>
        <p className="text-xs text-gray-500 font-mono">{color.hex}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 28 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.44 33.29C16.01 30.72 10.98 29.15 5.61 28.71L6.50 30.72C6.62 30.97 6.85 31.17 7.13 31.21C11.64 31.83 15.93 33.39 19.66 35.65L20.61 33.89C20.72 33.68 20.64 33.42 20.44 33.30Z" fill="url(#grad1)"/>
                <path d="M3.51 24.72L5.50 28.68L7.05 28.82C7.38 28.85 7.78 28.88 8.24 28.90C8.96 28.95 9.69 28.98 10.42 28.98C14.16 28.98 17.82 28.29 21.15 27.08C21.34 27.01 21.49 26.86 21.59 26.68L24.39 21.07C25.16 19.54 25.74 17.92 26.09 16.24C26.23 15.58 26.32 14.93 26.32 14.40C26.32 5.67 16.92 -1.05 7.85 4.35C6.42 5.19 5.29 6.45 4.37 7.81C1.81 11.60 1.94 16.23 3.59 19.62L6.36 25.12C5.04 24.95 4.41 24.86 3.94 24.79C3.66 24.75 3.42 24.57 3.30 24.32L1.49 20.70C0.55 18.78 0 16.65 0 14.40C0 4.04 11.18 -3.91 21.69 2.04C23.63 3.14 25.51 4.95 26.69 7.06C29.22 11.59 29.18 16.27 27.56 20.05L24.84 25.44L23.26 28.60C23.17 28.77 23.02 28.91 22.84 28.98C19.00 30.52 14.81 31.37 10.42 31.37C9.32 31.37 8.23 31.32 7.16 31.21C6.89 31.19 6.65 31.02 6.52 30.77L3.51 24.72Z" fill="#0A607E"/>
                <defs>
                  <linearGradient id="grad1" x1="20.94" y1="34.93" x2="6.91" y2="29.33" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="0.99" stopColor="#0A607E"/>
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <span className="text-lg font-bold" style={{ color: '#0A607E', fontFamily: 'Raleway, sans-serif' }}>innoscripta</span>
                <p className="text-xs text-gray-500">Design Kit for Static Ads</p>
              </div>
            </div>
            <nav className="flex gap-1 flex-wrap">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeSection === section.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 hover:bg-slate-100'
                  }`}
                  style={activeSection === section.id ? { backgroundColor: '#0A607E' } : {}}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* ═══════════════════════════════════════════════════════════════════════
            COLORS SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        {activeSection === 'colors' && (
          <div className="space-y-10 animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Color Palette</h2>
              <p className="text-gray-600 text-sm">Click any swatch to copy the hex value.</p>
            </div>

            {/* Primary Colors */}
            <section>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0A607E' }}></span>
                Primary Colors
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                <ColorSwatch color={colors.primaryBlueDark} colorKey="primaryBlueDark" />
                <ColorSwatch color={colors.primaryBlueLight} colorKey="primaryBlueLight" />
                <ColorSwatch color={colors.tealBlue} colorKey="tealBlue" />
                <ColorSwatch color={colors.darkBlue} colorKey="darkBlue" />
                <ColorSwatch color={colors.primaryBg} colorKey="primaryBg" />
              </div>
            </section>

            {/* Accent Colors */}
            <section>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A9CF73' }}></span>
                Accent Colors (CTA Green)
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                <ColorSwatch color={colors.warningGreen} colorKey="warningGreen" />
                <ColorSwatch color={colors.warningGreenDark} colorKey="warningGreenDark" />
              </div>
            </section>

            {/* Neutral Colors */}
            <section>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                Neutrals
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                <ColorSwatch color={colors.white} colorKey="white" />
                <ColorSwatch color={colors.grey100} colorKey="grey100" />
                <ColorSwatch color={colors.grey500} colorKey="grey500" />
              </div>
            </section>

            {/* Gradients */}
            <section>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Brand Gradients</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-24 rounded-xl flex items-end p-4" style={{ background: 'linear-gradient(to right, #A9CF73, #2186AB)' }}>
                  <div>
                    <span className="text-white text-sm font-medium">Brand Gradient</span>
                    <p className="text-white/70 text-xs font-mono">#A9CF73 → #2186AB</p>
                  </div>
                </div>
                <div className="h-24 rounded-xl flex items-end p-4" style={{ background: 'linear-gradient(135deg, #0A607E, #0D4A63)' }}>
                  <div>
                    <span className="text-white text-sm font-medium">Dark Gradient</span>
                    <p className="text-white/70 text-xs font-mono">#0A607E → #0D4A63</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Approved Combinations */}
            <section>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Approved Color Combinations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden">
                  <div className="h-16 flex items-center justify-center text-white font-semibold" style={{ backgroundColor: '#0D4A63' }}>
                    Dark BG + White Text
                  </div>
                  <div className="h-8 flex items-center justify-center text-white text-sm font-semibold" style={{ backgroundColor: '#A9CF73' }}>
                    Green CTA
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-16 flex items-center justify-center font-semibold" style={{ backgroundColor: '#F5F7FA', color: '#1A3A5C' }}>
                    Light BG + Dark Text
                  </div>
                  <div className="h-8 flex items-center justify-center text-white text-sm font-semibold" style={{ backgroundColor: '#0A607E' }}>
                    Blue CTA
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-16 flex items-center justify-center text-white font-semibold" style={{ background: 'linear-gradient(to right, #A9CF73, #2186AB)' }}>
                    Gradient BG
                  </div>
                  <div className="h-8 flex items-center justify-center text-sm font-semibold" style={{ backgroundColor: 'white', color: '#0A607E' }}>
                    White CTA
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════════
            TYPOGRAPHY SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        {activeSection === 'typography' && (
          <div className="space-y-10 animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Typography</h2>
              <p className="text-gray-600 text-sm">Raleway is the primary typeface across all materials.</p>
            </div>

            {/* Font Family */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg font-bold" style={{ backgroundColor: '#0A607E' }}>Aa</span>
                <div>
                  <p className="font-semibold text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>Raleway</p>
                  <p className="text-xs text-gray-500">Variable weight: 100-900</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mt-4">
                {[300, 400, 500, 600, 700, 900].map(weight => (
                  <div key={weight} className="text-center">
                    <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: weight }} className="text-2xl text-gray-800">Ag</p>
                    <p className="text-xs text-gray-500">{weight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Type Scale */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Type Scale</h3>
              <div className="space-y-4">
                {Object.entries(typography).map(([key, style]) => (
                  <div key={key} className="flex items-baseline gap-4 py-2 border-b border-slate-100 last:border-0">
                    <div className="w-24 flex-shrink-0">
                      <p className="text-xs font-medium text-gray-900">{style.name}</p>
                      <p className="text-xs text-gray-400 font-mono">{style.size}</p>
                    </div>
                    <p 
                      className="text-gray-900"
                      style={{ 
                        fontFamily: 'Raleway, sans-serif',
                        fontSize: style.size, 
                        fontWeight: style.weight, 
                        lineHeight: style.lineHeight 
                      }}
                    >
                      Innovation
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════════
            HEADLINES SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        {activeSection === 'headlines' && (
          <div className="space-y-10 animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Headline Patterns</h2>
              <p className="text-gray-600 text-sm">Approved headline structures with highlighted keywords in green.</p>
            </div>

            {/* Headline Patterns */}
            <section className="space-y-4">
              {headlinePatterns.map((pattern, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#A9CF73', color: 'white' }}>
                      {pattern.type}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {pattern.tagline && (
                      <p className="text-lg text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>{pattern.tagline}</p>
                    )}
                    <h3 className="text-3xl font-bold" style={{ fontFamily: 'Raleway, sans-serif', color: '#1A3A5C' }}>
                      {pattern.headline} <span style={{ color: '#A9CF73' }}>{pattern.highlight}</span>
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">{pattern.description}</p>
                </div>
              ))}
            </section>

            {/* CTA Text Options */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Approved CTA Text</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">Primary CTAs</p>
                  <div className="flex flex-wrap gap-2">
                    {ctaOptions.primary.map((cta, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 text-white text-xs font-bold uppercase tracking-wide"
                        style={{ backgroundColor: '#A9CF73', borderRadius: '6.25rem', fontFamily: 'Raleway, sans-serif' }}
                      >
                        {cta}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">Secondary CTAs</p>
                  <div className="flex flex-wrap gap-2">
                    {ctaOptions.secondary.map((cta, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 text-xs font-bold uppercase tracking-wide border-2"
                        style={{ color: '#0A607E', borderColor: '#0A607E', borderRadius: '6.25rem', fontFamily: 'Raleway, sans-serif' }}
                      >
                        {cta}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Copy Guidelines */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Copy Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">Tone of Voice</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Professional but approachable</li>
                    <li>• Confident, not aggressive</li>
                    <li>• Solution-oriented</li>
                    <li>• Clear and jargon-free</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">Character Limits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Headline: 6-10 words max</li>
                    <li>• Tagline: 4-8 words</li>
                    <li>• Description: 15-25 words</li>
                    <li>• CTA: 2-4 words</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════════
            STATISTICS SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        {activeSection === 'statistics' && (
          <div className="space-y-10 animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Statistics Display</h2>
              <p className="text-gray-600 text-sm">Approved statistics and display patterns for ads.</p>
            </div>

            {/* Stats Values */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Approved Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-5xl font-bold" style={{ color: '#A9CF73', fontFamily: 'Raleway, sans-serif' }}>{stat.value}</p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">{stat.label}</p>
                    <p className="text-xs text-gray-500">{stat.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Stat Display Styles */}
            <section>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Display Variations</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {/* Style 1: Dark Card */}
                <div className="rounded-2xl p-6" style={{ backgroundColor: '#0D4A63' }}>
                  <p className="text-xs font-medium uppercase tracking-wide" style={{ color: '#A9CF73' }}>Efficiency</p>
                  <p className="text-6xl font-bold text-white mt-2" style={{ fontFamily: 'Raleway, sans-serif' }}>80%</p>
                  <p className="text-sm text-white/70 mt-2">Less Administrative Effort</p>
                </div>

                {/* Style 2: Light Card with Accent */}
                <div className="rounded-2xl p-6 bg-white border border-slate-200">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Funding Increase</p>
                  <p className="text-6xl font-bold mt-2" style={{ color: '#0A607E', fontFamily: 'Raleway, sans-serif' }}>40%</p>
                  <p className="text-sm text-gray-600 mt-2">More than independent applications</p>
                </div>

                {/* Style 3: Gradient Card */}
                <div className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #A9CF73, #2186AB)' }}>
                  <p className="text-xs font-medium uppercase tracking-wide text-white/80">Tax Credit</p>
                  <p className="text-6xl font-bold mt-2" style={{ fontFamily: 'Raleway, sans-serif' }}>35%</p>
                  <p className="text-sm text-white/80 mt-2">On eligible R&D costs</p>
                </div>
              </div>
            </section>

            {/* Inline Stats */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Inline Stat Highlights</h3>
              <div className="space-y-4">
                <p className="text-xl" style={{ fontFamily: 'Raleway, sans-serif', color: '#1A3A5C' }}>
                  Securing on average <span className="font-bold" style={{ color: '#A9CF73' }}>40% more funding</span> than when applying independently.
                </p>
                <p className="text-xl" style={{ fontFamily: 'Raleway, sans-serif', color: '#1A3A5C' }}>
                  Reduce administrative workload by <span className="font-bold" style={{ color: '#A9CF73' }}>up to 80%</span> with our software.
                </p>
                <p className="text-xl" style={{ fontFamily: 'Raleway, sans-serif', color: '#1A3A5C' }}>
                  Now <span className="font-bold" style={{ color: '#A9CF73' }}>35% tax credit</span> for eligible R&D personnel costs.
                </p>
              </div>
            </section>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════════
            COMPONENTS SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        {activeSection === 'components' && (
          <div className="space-y-10 animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Components</h2>
              <p className="text-gray-600 text-sm">Reusable elements for static ad composition.</p>
            </div>

            {/* Buttons */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Buttons</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-gray-500 mb-3">Primary (Green)</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 text-white font-bold text-sm uppercase tracking-wide" style={{ backgroundColor: '#A9CF73', borderRadius: '6.25rem', fontFamily: 'Raleway, sans-serif' }}>
                      Request a demo
                    </button>
                    <button className="px-5 py-2.5 text-white font-bold text-xs uppercase tracking-wide" style={{ backgroundColor: '#A9CF73', borderRadius: '6.25rem', fontFamily: 'Raleway, sans-serif' }}>
                      Learn more
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-3">Secondary (Blue)</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 text-white font-bold text-sm uppercase tracking-wide" style={{ backgroundColor: '#0A607E', borderRadius: '6.25rem', fontFamily: 'Raleway, sans-serif' }}>
                      Book your interview
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-3">Outline</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 font-bold text-sm uppercase tracking-wide border-2" style={{ color: '#0A607E', borderColor: '#0A607E', borderRadius: '6.25rem', fontFamily: 'Raleway, sans-serif' }}>
                      Learn more
                    </button>
                    <button className="px-6 py-3 font-bold text-sm uppercase tracking-wide border-2 bg-transparent" style={{ color: 'white', borderColor: 'white', borderRadius: '6.25rem', fontFamily: 'Raleway, sans-serif', backgroundColor: '#0D4A63' }}>
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Feature Cards */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Feature Cards</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-lg border border-slate-100">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'linear-gradient(135deg, #A9CF73, #2186AB)' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold mb-1" style={{ color: '#1A3A5C', fontFamily: 'Raleway, sans-serif' }}>Maximum Funding</h4>
                  <p className="text-xs text-gray-600">40% more funding on average</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-lg border border-slate-100">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'linear-gradient(135deg, #A9CF73, #2186AB)' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold mb-1" style={{ color: '#1A3A5C', fontFamily: 'Raleway, sans-serif' }}>Save Time</h4>
                  <p className="text-xs text-gray-600">80% less admin effort</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-lg border border-slate-100">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'linear-gradient(135deg, #A9CF73, #2186AB)' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold mb-1" style={{ color: '#1A3A5C', fontFamily: 'Raleway, sans-serif' }}>Audit Security</h4>
                  <p className="text-xs text-gray-600">GoBD compliant documentation</p>
                </div>
              </div>
            </section>

            {/* Trust Bar */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Trust Elements</h3>
              <div className="space-y-4">
                <p className="text-xs text-gray-500">Client Logo Strip (grayscale)</p>
                <div className="flex items-center justify-between gap-8 py-4 border-y border-slate-100">
                  {['BREUNINGER', 'COMPANY', 'BRAND', 'CLIENT', 'PARTNER'].map((name, i) => (
                    <div key={i} className="text-gray-400 font-bold text-sm tracking-wider">{name}</div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">Badges</p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-gray-700">Certified Partner</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#A9CF73', color: 'white' }}>New</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#0A607E', color: 'white' }}>Expert Team</span>
                </div>
              </div>
            </section>

            {/* Logo */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Logo Placements</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-6 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#0D4A63' }}>
                  <div className="flex items-center gap-2">
                    <svg width="24" height="28" viewBox="0 0 28 46" fill="none">
                      <path d="M3.51 24.72L5.50 28.68L7.05 28.82C7.38 28.85 7.78 28.88 8.24 28.90C8.96 28.95 9.69 28.98 10.42 28.98C14.16 28.98 17.82 28.29 21.15 27.08C21.34 27.01 21.49 26.86 21.59 26.68L24.39 21.07C25.16 19.54 25.74 17.92 26.09 16.24C26.23 15.58 26.32 14.93 26.32 14.40C26.32 5.67 16.92 -1.05 7.85 4.35C6.42 5.19 5.29 6.45 4.37 7.81C1.81 11.60 1.94 16.23 3.59 19.62L6.36 25.12C5.04 24.95 4.41 24.86 3.94 24.79C3.66 24.75 3.42 24.57 3.30 24.32L1.49 20.70C0.55 18.78 0 16.65 0 14.40C0 4.04 11.18 -3.91 21.69 2.04C23.63 3.14 25.51 4.95 26.69 7.06C29.22 11.59 29.18 16.27 27.56 20.05L24.84 25.44L23.26 28.60C23.17 28.77 23.02 28.91 22.84 28.98C19.00 30.52 14.81 31.37 10.42 31.37C9.32 31.37 8.23 31.32 7.16 31.21C6.89 31.19 6.65 31.02 6.52 30.77L3.51 24.72Z" fill="white"/>
                    </svg>
                    <span className="text-white font-semibold text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>innoscripta</span>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-xl border border-slate-200 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <svg width="24" height="28" viewBox="0 0 28 46" fill="none">
                      <path d="M3.51 24.72L5.50 28.68L7.05 28.82C7.38 28.85 7.78 28.88 8.24 28.90C8.96 28.95 9.69 28.98 10.42 28.98C14.16 28.98 17.82 28.29 21.15 27.08C21.34 27.01 21.49 26.86 21.59 26.68L24.39 21.07C25.16 19.54 25.74 17.92 26.09 16.24C26.23 15.58 26.32 14.93 26.32 14.40C26.32 5.67 16.92 -1.05 7.85 4.35C6.42 5.19 5.29 6.45 4.37 7.81C1.81 11.60 1.94 16.23 3.59 19.62L6.36 25.12C5.04 24.95 4.41 24.86 3.94 24.79C3.66 24.75 3.42 24.57 3.30 24.32L1.49 20.70C0.55 18.78 0 16.65 0 14.40C0 4.04 11.18 -3.91 21.69 2.04C23.63 3.14 25.51 4.95 26.69 7.06C29.22 11.59 29.18 16.27 27.56 20.05L24.84 25.44L23.26 28.60C23.17 28.77 23.02 28.91 22.84 28.98C19.00 30.52 14.81 31.37 10.42 31.37C9.32 31.37 8.23 31.32 7.16 31.21C6.89 31.19 6.65 31.02 6.52 30.77L3.51 24.72Z" fill="#0A607E"/>
                    </svg>
                    <span className="font-semibold text-sm" style={{ color: '#0A607E', fontFamily: 'Raleway, sans-serif' }}>innoscripta</span>
                  </div>
                </div>
                <div className="p-6 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F5F7FA' }}>
                  <div className="flex items-center gap-2">
                    <svg width="24" height="28" viewBox="0 0 28 46" fill="none">
                      <path d="M3.51 24.72L5.50 28.68L7.05 28.82C7.38 28.85 7.78 28.88 8.24 28.90C8.96 28.95 9.69 28.98 10.42 28.98C14.16 28.98 17.82 28.29 21.15 27.08C21.34 27.01 21.49 26.86 21.59 26.68L24.39 21.07C25.16 19.54 25.74 17.92 26.09 16.24C26.23 15.58 26.32 14.93 26.32 14.40C26.32 5.67 16.92 -1.05 7.85 4.35C6.42 5.19 5.29 6.45 4.37 7.81C1.81 11.60 1.94 16.23 3.59 19.62L6.36 25.12C5.04 24.95 4.41 24.86 3.94 24.79C3.66 24.75 3.42 24.57 3.30 24.32L1.49 20.70C0.55 18.78 0 16.65 0 14.40C0 4.04 11.18 -3.91 21.69 2.04C23.63 3.14 25.51 4.95 26.69 7.06C29.22 11.59 29.18 16.27 27.56 20.05L24.84 25.44L23.26 28.60C23.17 28.77 23.02 28.91 22.84 28.98C19.00 30.52 14.81 31.37 10.42 31.37C9.32 31.37 8.23 31.32 7.16 31.21C6.89 31.19 6.65 31.02 6.52 30.77L3.51 24.72Z" fill="#0A607E"/>
                    </svg>
                    <span className="font-semibold text-sm" style={{ color: '#0A607E', fontFamily: 'Raleway, sans-serif' }}>innoscripta</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════════
            INDUSTRIES SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        {activeSection === 'industries' && (
          <div className="space-y-10 animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Industry Targeting</h2>
              <p className="text-gray-600 text-sm">Pre-defined industry categories for targeted ad campaigns.</p>
            </div>

            {/* Industry Cards */}
            <section className="grid md:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="rounded-xl p-5 text-white relative overflow-hidden"
                  style={{ backgroundColor: '#0D4A63' }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10" style={{ background: 'linear-gradient(135deg, #A9CF73, #2186AB)', transform: 'translate(30%, -30%)' }}></div>
                  <h4 className="font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>{industry.name}</h4>
                  <div className="flex flex-wrap gap-1">
                    {industry.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-xs bg-white/10">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Industry-Specific Headlines */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Industry-Specific Headline Templates</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">IT & Software</p>
                  <p className="text-lg font-semibold" style={{ color: '#1A3A5C', fontFamily: 'Raleway, sans-serif' }}>
                    R&D Tax Credit for <span style={{ color: '#A9CF73' }}>Software Development</span>
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Automotive</p>
                  <p className="text-lg font-semibold" style={{ color: '#1A3A5C', fontFamily: 'Raleway, sans-serif' }}>
                    Funding for <span style={{ color: '#A9CF73' }}>E-Mobility</span> Innovation
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Pharmaceutical</p>
                  <p className="text-lg font-semibold" style={{ color: '#1A3A5C', fontFamily: 'Raleway, sans-serif' }}>
                    Maximize <span style={{ color: '#A9CF73' }}>Drug Development</span> Funding
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════════
            ART STYLES SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        {activeSection === 'artstyles' && (
          <div className="space-y-10 animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Art Styles</h2>
              <p className="text-gray-600 text-sm">Approved visual styles for generating static ad imagery. Use these prompts for consistent brand-aligned visuals.</p>
            </div>

            {/* Art Style Cards */}
            <section className="grid md:grid-cols-2 gap-6">
              {artStyles.map((style, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                  {/* Preview Bar */}
                  <div 
                    className="h-24 flex items-end p-4"
                    style={{ background: style.preview }}
                  >
                    <div className="flex gap-2">
                      {style.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 rounded text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>{style.name}</h4>
                      <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#0A607E' }}>
                        {index + 1}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-500 mb-3">
                      <span className="font-medium text-gray-700">Best for:</span> {style.bestFor}
                    </p>
                    
                    {/* Prompt Box */}
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">Image Generation Prompt</p>
                      <p className="text-xs text-gray-700 font-mono leading-relaxed">{style.prompt}</p>
                    </div>
                    
                    {/* Copy Button */}
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(style.prompt);
                        setCopiedColor(style.name);
                        setTimeout(() => setCopiedColor(null), 2000);
                      }}
                      className="mt-3 w-full py-2 text-xs font-medium rounded-lg transition-all"
                      style={{ 
                        backgroundColor: copiedColor === style.name ? '#A9CF73' : '#F5F7FA',
                        color: copiedColor === style.name ? 'white' : '#0A607E'
                      }}
                    >
                      {copiedColor === style.name ? '✓ Copied!' : 'Copy Prompt'}
                    </button>
                  </div>
                </div>
              ))}
            </section>

            {/* Style Selection Guide */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Style Selection Guide</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">By Campaign Goal</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A9CF73' }}></span>
                      <span className="text-sm text-gray-700"><strong>Brand Awareness:</strong> Neo-Brutalist, Typography-Led</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2B8AAF' }}></span>
                      <span className="text-sm text-gray-700"><strong>Lead Generation:</strong> Human-Centered, Testimonial</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0A607E' }}></span>
                      <span className="text-sm text-gray-700"><strong>Product Education:</strong> Flat Illustration, Conceptual</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1A3A5C' }}></span>
                      <span className="text-sm text-gray-700"><strong>Premium Positioning:</strong> Minimal Product, Editorial</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">By Platform</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
                      <span className="text-sm text-gray-700"><strong>LinkedIn:</strong> Human-Centered, Testimonial, Conceptual</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
                      <span className="text-sm text-gray-700"><strong>Google Display:</strong> Typography-Led, Flat Illustration</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
                      <span className="text-sm text-gray-700"><strong>Meta/Instagram:</strong> Neo-Brutalist, Playful Flat</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
                      <span className="text-sm text-gray-700"><strong>Premium Publications:</strong> Minimal Product, Editorial</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Prompt Modifiers */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Prompt Modifiers</h3>
              <p className="text-xs text-gray-500 mb-4">Add these to any base prompt to customize the output.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-2">Brand Colors</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 rounded text-xs bg-slate-100 font-mono">teal blue accent</span>
                    <span className="px-2 py-1 rounded text-xs bg-slate-100 font-mono">lime green highlights</span>
                    <span className="px-2 py-1 rounded text-xs bg-slate-100 font-mono">dark navy background</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-2">Mood</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 rounded text-xs bg-slate-100 font-mono">professional</span>
                    <span className="px-2 py-1 rounded text-xs bg-slate-100 font-mono">trustworthy</span>
                    <span className="px-2 py-1 rounded text-xs bg-slate-100 font-mono">innovative</span>
                    <span className="px-2 py-1 rounded text-xs bg-slate-100 font-mono">approachable</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-2">Industry Context</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 rounded text-xs bg-slate-100 font-mono">fintech aesthetic</span>
                    <span className="px-2 py-1 rounded text-xs bg-slate-100 font-mono">B2B SaaS feel</span>
                    <span className="px-2 py-1 rounded text-xs bg-slate-100 font-mono">enterprise software</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Reference */}
            <section className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
              <h3 className="text-sm font-semibold mb-4">Quick Reference: All Prompts</h3>
              <div className="space-y-3 font-mono text-xs">
                {artStyles.map((style, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#A9CF73', color: '#0A607E' }}>
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">{style.name}</p>
                      <p className="text-green-400 leading-relaxed">{style.prompt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════════
            GUIDELINES SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        {activeSection === 'guidelines' && (
          <div className="space-y-10 animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Design Guidelines</h2>
              <p className="text-gray-600 text-sm">Rules and best practices for static ad creation.</p>
            </div>

            {/* Key Brand Rules */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Key Brand Rules</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">Buttons</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Border radius: <code className="text-xs bg-slate-100 px-1 rounded">6.25rem</code> (pill)</li>
                    <li>• Text: <code className="text-xs bg-slate-100 px-1 rounded">UPPERCASE</code></li>
                    <li>• Font weight: <code className="text-xs bg-slate-100 px-1 rounded">700</code></li>
                    <li>• Primary: Warning Green (#A9CF73)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">Text</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Font: Raleway only</li>
                    <li>• Highlights: Warning Green</li>
                    <li>• Dark text: #1A3A5C</li>
                    <li>• Never use pure black (#000)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Do's and Don'ts */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Do's and Don'ts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A9CF73' }}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-semibold text-gray-900 text-sm">Do</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#A9CF73' }}>•</span>
                      Use pill-shaped buttons with uppercase text
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#A9CF73' }}>•</span>
                      Highlight keywords in Warning Green
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#A9CF73' }}>•</span>
                      Use gradient decorative elements
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#A9CF73' }}>•</span>
                      Place logo in bottom corner
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#A9CF73' }}>•</span>
                      Lead with statistics when possible
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span className="font-semibold text-gray-900 text-sm">Don't</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Use sharp-cornered buttons
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Mix fonts or use non-Raleway
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Use off-brand colors
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Make CTAs lowercase
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Clutter with too many elements
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CSS Variables */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">CSS Variables Reference</h3>
              <div className="bg-gray-900 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-green-400">
{`:root {
  /* Primary Colors */
  --primary-blue-dark: #0A607E;
  --primary-blue-light: #2B8AAF;
  --teal-blue: #2186AB;
  --dark-blue: #1A3A5C;
  --primary-bg: #0D4A63;
  
  /* Accent Colors */
  --warning-green-light: #A9CF73;
  --warning-green-dark: #8AB860;
  
  /* Neutrals */
  --white: #FFFFFF;
  --grey-100: #F5F7FA;
  --grey-500: #9CA3AF;
  
  /* Button */
  --landing-button-border-radius: 6.25rem;
  
  /* Gradients */
  --brand-gradient: linear-gradient(to right, #A9CF73, #2186AB);
  --dark-gradient: linear-gradient(135deg, #0A607E, #0D4A63);
}`}
                </pre>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-12" style={{ backgroundColor: '#0D4A63' }}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/70">Innoscripta Design Kit for Static Ads</p>
            <p className="text-xs text-white/50">v2.0</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700;900&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default InnoDesignKit;
