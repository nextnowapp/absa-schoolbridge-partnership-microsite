'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Users, Home as HomeIcon, BookOpen, CreditCard, Shield, Smartphone,
  GraduationCap, Briefcase, BarChart2, Calendar, MapPin,
  Megaphone, FileText, School, ArrowRight, ExternalLink,
  ChevronRight, Target, Zap, Globe,
  CheckCircle, Star
} from 'lucide-react';
import { ABSA_SOURCES } from '@/data/absaSources';
import {
  HERO_METRICS,
  COMPETITIVE_ITEMS,
  FAB_ROWS,
  PRODUCT_OPPORTUNITIES,
  CAMPAIGN_TILES,
  DASHBOARD_METRICS,
  SPONSORSHIP_PACKAGES,
  PILOT_STRUCTURE,
  PILOT_CAMPAIGNS,
  PILOT_SUCCESS_METRICS,
} from '@/data/absaPartnerData';

// ── Icon map ────────────────────────────────────────────────────────
const ICONS: Record<string, React.ElementType> = {
  Users, Home: HomeIcon, BookOpen, CreditCard, Shield, Smartphone,
  GraduationCap, Briefcase, BarChart2, Calendar, MapPin,
  Megaphone, FileText, School, ArrowRight, ExternalLink,
};

function getIcon(name: string) {
  return ICONS[name] || Target;
}

// ── Reveal wrapper ──────────────────────────────────────────────────
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Nav links ───────────────────────────────────────────────────────
const NAV_LINKS = [
  { href: '#opportunity', label: 'Opportunity' },
  { href: '#competitive', label: 'Competitive' },
  { href: '#products', label: 'Products' },
  { href: '#campaigns', label: 'Campaigns' },
  { href: '#pilot', label: 'Pilot' },
];

// ── Main component ──────────────────────────────────────────────────
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
      setNavScrolled(scrollTop > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Hanken Grotesk', sans-serif", background: '#071A2F', color: '#F4F6F8' }}>
      {/* Progress bar */}
      <div
        id="progress-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #A6192E, #F5A623)',
          zIndex: 9999,
          transition: 'width 0.1s linear',
        }}
      />

      {/* Sticky nav */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          background: navScrolled ? 'rgba(7, 26, 47, 0.92)' : 'rgba(7, 26, 47, 0.5)',
          borderBottom: navScrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
          transition: 'all 0.3s',
          padding: '12px 32px',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, fontSize: '14px', color: '#F4F6F8', letterSpacing: '0.02em' }}>
            Absa × SchoolBridge
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontSize: '13px', color: 'rgba(244,246,248,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#F4F6F8'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(244,246,248,0.7)'; }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pilot"
              style={{
                background: '#A6192E',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
                padding: '8px 20px',
                borderRadius: '24px',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              Present
            </a>
          </div>
        </div>
      </nav>

      {/* ── SECTION 1: HERO ───────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 32px 80px',
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(166,25,46,0.25) 0%, #071A2F 60%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow orb */}
        <div style={{
          position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(166,25,46,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', width: '100%', textAlign: 'center', position: 'relative' }}>
          {/* Kicker */}
          <Reveal>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(166,25,46,0.15)', border: '1px solid rgba(166,25,46,0.4)',
              borderRadius: '24px', padding: '6px 16px', marginBottom: '32px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#A6192E', display: 'inline-block' }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#F5A623', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Partner Microsite · Confidential
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#F4F6F8',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}>
              Win the Next Generation<br />
              <span style={{ color: '#A6192E' }}>Before They Choose</span> Their First Bank
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p style={{ fontSize: '1.125rem', color: 'rgba(244,246,248,0.75)', maxWidth: '680px', margin: '0 auto 40px', lineHeight: 1.7 }}>
              A first-mover school ecosystem partnership that gives Absa a trusted digital channel to learners, parents, teachers and school communities.
            </p>
          </Reveal>

          {/* SVG Flow */}
          <Reveal delay={0.3}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '8px', flexWrap: 'wrap', marginBottom: '48px',
            }}>
              {['Absa', '→', 'SchoolBridge', '→', 'Schools', '→'].map((item, i) => (
                <span key={i} style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: item === '→' ? '20px' : '13px',
                  color: item === '→' ? '#A6192E' : '#F4F6F8',
                  fontWeight: item === '→' ? 400 : 600,
                  background: item === '→' ? 'transparent' : 'rgba(255,255,255,0.07)',
                  padding: item === '→' ? '0' : '6px 14px',
                  borderRadius: '20px',
                  border: item === '→' ? 'none' : '1px solid rgba(255,255,255,0.1)',
                }}>
                  {item}
                </span>
              ))}
              {['Parents', 'Learners', 'Teachers', 'Communities'].map((aud, i) => (
                <span key={aud} style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px', color: '#F5A623',
                  background: 'rgba(245,166,35,0.12)',
                  border: '1px solid rgba(245,166,35,0.3)',
                  padding: '5px 12px', borderRadius: '20px',
                }}>
                  {aud}
                </span>
              ))}
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.35}>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '72px' }}>
              <a href="#opportunity" style={{
                background: '#A6192E', color: '#fff', fontWeight: 700,
                padding: '14px 32px', borderRadius: '32px', textDecoration: 'none',
                fontSize: '15px', transition: 'background 0.2s',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                View Strategic Opportunity <ArrowRight size={16} />
              </a>
              <a href="#products" style={{
                background: 'transparent', color: '#F4F6F8',
                border: '1.5px solid rgba(244,246,248,0.3)',
                fontWeight: 600, padding: '14px 32px', borderRadius: '32px',
                textDecoration: 'none', fontSize: '15px', transition: 'border-color 0.2s',
              }}>
                Explore Commercial Value
              </a>
            </div>
          </Reveal>

          {/* Hero Metric Cards */}
          <Reveal delay={0.4}>
            <div style={{ marginBottom: '16px' }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'rgba(244,246,248,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Strategic Opportunity
              </span>
            </div>
          </Reveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px', maxWidth: '1100px',
          }}>
            {HERO_METRICS.map((m, i) => {
              const Icon = getIcon(m.icon);
              return (
                <Reveal key={m.id} delay={0.45 + i * 0.07}>
                  <div style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: '16px',
                    padding: '24px',
                    backdropFilter: 'blur(12px)',
                    textAlign: 'left',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <div style={{ background: 'rgba(166,25,46,0.2)', borderRadius: '8px', padding: '8px' }}>
                        <Icon size={18} color="#A6192E" />
                      </div>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {m.label}
                      </span>
                    </div>
                    <p style={{ fontFamily: "'Fraunces', serif", fontSize: '1.1rem', fontWeight: 600, color: '#F4F6F8', marginBottom: '8px' }}>
                      {m.headline}
                    </p>
                    <p style={{ fontSize: '13px', color: 'rgba(244,246,248,0.6)', lineHeight: 1.6 }}>
                      {m.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY SCHOOLS ────────────────────────────────── */}
      <section id="opportunity" style={{ background: '#071A2F', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              The Missing Channel
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#F4F6F8', margin: '16px 0', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Most Youth Banking Strategies Begin Too Late
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: '1.05rem', color: 'rgba(244,246,248,0.7)', maxWidth: '640px', lineHeight: 1.75, marginBottom: '56px' }}>
              By university or first employment, competitors may already own the relationship. SchoolBridge enables earlier engagement — in a trusted, utility-based channel that parents, learners and teachers already use daily.
            </p>
          </Reveal>

          {/* Audience chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '56px' }}>
            {[
              { label: 'Grade 8–12', icon: '🎓' },
              { label: 'Learners 15–19', icon: '👤' },
              { label: 'Parents & Guardians', icon: '🏠' },
              { label: 'Teachers & Staff', icon: '📚' },
              { label: 'School Administrators', icon: '🏫' },
              { label: 'School Communities', icon: '🌍' },
            ].map((chip, i) => (
              <Reveal key={chip.label} delay={0.2 + i * 0.05}>
                <div style={{
                  background: 'rgba(166,25,46,0.12)',
                  border: '1px solid rgba(166,25,46,0.3)',
                  borderRadius: '32px', padding: '10px 20px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                  <span style={{ fontSize: '16px' }}>{chip.icon}</span>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#F4F6F8', fontWeight: 500 }}>
                    {chip.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Key message panel */}
          <Reveal delay={0.5}>
            <div style={{
              background: 'rgba(166,25,46,0.1)',
              border: '1px solid rgba(166,25,46,0.3)',
              borderLeft: '4px solid #A6192E',
              borderRadius: '12px',
              padding: '28px 32px',
            }}>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: '1.2rem', color: '#F4F6F8', fontStyle: 'italic', margin: 0 }}>
                "The school ecosystem is the pre-varsity acquisition layer — and it remains largely unclaimed by major banks."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 3: COMPETITIVE CONTEXT ───────────────────────── */}
      <section id="competitive" style={{ background: '#0D2340', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Competitive Context
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#F4F6F8', margin: '16px 0 48px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              The Race for the Next Banking Customer<br />Has Already Started
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '48px' }}>
            {COMPETITIVE_ITEMS.map((item, i) => (
              <Reveal key={item.id} delay={0.15 + i * 0.08}>
                <div style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderLeft: '3px solid #A6192E',
                  height: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {item.competitor}
                    </span>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
                      background: 'rgba(255,255,255,0.07)', color: 'rgba(244,246,248,0.5)',
                      padding: '3px 8px', borderRadius: '8px',
                    }}>
                      {item.stage}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.05rem', fontWeight: 600, color: '#F4F6F8', marginBottom: '12px' }}>
                    {item.initiative}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'rgba(244,246,248,0.7)', lineHeight: 1.65, marginBottom: '16px' }}>
                    {item.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#20B2AA', flexShrink: 0 }} />
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: 'rgba(244,246,248,0.45)' }}>
                      Source: {item.sourceLabel} — {item.caveat}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div style={{
              background: 'rgba(166,25,46,0.1)',
              border: '1px solid rgba(166,25,46,0.3)',
              borderLeft: '4px solid #A6192E',
              borderRadius: '12px', padding: '28px 32px',
            }}>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: '1.15rem', color: '#F4F6F8', fontStyle: 'italic', margin: 0 }}>
                "Absa needs a school-level footprint before competitors own the pre-varsity relationship."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 4: THE ABSA OPPORTUNITY ──────────────────────── */}
      <section style={{ background: '#071A2F', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              The Absa Opportunity
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#F4F6F8', margin: '16px 0 48px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Move Earlier. Build Trust Sooner. Convert Better.
            </h2>
          </Reveal>

          {/* 3 acquisition layer cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '56px' }}>
            {[
              {
                label: 'School Learners',
                sub: 'Before University',
                desc: 'Future account holders — introduce Absa youth banking before competitors capture them through varsity platforms, student discounts or first-job banking.',
                icon: '🎓',
                products: ['Youth accounts', 'App registration', 'Financial literacy'],
              },
              {
                label: 'Parents & Guardians',
                sub: 'Household Banking',
                desc: 'Reach parents in a financially engaged mindset — already thinking about fees, savings and their child\'s future. The highest-value audience in the school ecosystem.',
                icon: '🏠',
                products: ['Savings accounts', 'Insurance', 'Credit products'],
              },
              {
                label: 'Teachers & Staff',
                sub: 'Salaried Professionals',
                desc: 'A large, stable salaried workforce with recurring income. Salary banking, vehicle finance, home loans and investment products.',
                icon: '📚',
                products: ['Salary banking', 'Vehicle finance', 'Home loans'],
              },
            ].map((card, i) => (
              <Reveal key={card.label} delay={0.15 + i * 0.1}>
                <div style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '32px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{card.icon}</div>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {card.sub}
                  </span>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.3rem', fontWeight: 700, color: '#F4F6F8', margin: '8px 0 12px' }}>
                    {card.label}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'rgba(244,246,248,0.65)', lineHeight: 1.7, marginBottom: '20px' }}>
                    {card.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {card.products.map((p) => (
                      <span key={p} style={{
                        fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
                        background: 'rgba(166,25,46,0.15)', border: '1px solid rgba(166,25,46,0.25)',
                        color: '#F4F6F8', padding: '4px 10px', borderRadius: '12px',
                      }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Positioning chips */}
          <Reveal delay={0.45}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {[
                'Financial Literacy Partner',
                'Youth Banking Partner',
                'School Payments Partner',
                'Parent Financial Wellness',
                'Digital Banking Adoption',
                'Education Ecosystem Sponsor',
              ].map((chip) => (
                <span key={chip} style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
                  background: 'rgba(245,166,35,0.12)', border: '1px solid rgba(245,166,35,0.3)',
                  color: '#F5A623', padding: '8px 18px', borderRadius: '24px',
                }}>
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 5: FAB TABLE ─────────────────────────────────── */}
      <section style={{ background: '#F4F6F8', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#A6192E', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Partnership Value Framework
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#071A2F', margin: '16px 0 48px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Features · Advantages · Benefits
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(7,26,47,0.1)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '16px', overflow: 'hidden' }}>
                <thead>
                  <tr style={{ background: '#071A2F' }}>
                    {['Feature', 'Advantage', 'Benefit'].map((col) => (
                      <th key={col} style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em',
                        color: '#F5A623', padding: '16px 24px', textAlign: 'left',
                      }}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FAB_ROWS.map((row, i) => (
                    <tr key={i} style={{
                      background: i % 2 === 0 ? '#fff' : '#F9FAFB',
                      borderBottom: i < FAB_ROWS.length - 1 ? '1px solid rgba(7,26,47,0.06)' : 'none',
                    }}>
                      <td style={{ padding: '20px 24px', fontSize: '14px', color: '#1F2933', lineHeight: 1.6, fontWeight: 500, maxWidth: '240px' }}>
                        {row.feature}
                      </td>
                      <td style={{ padding: '20px 24px', fontSize: '13px', color: '#4A5568', lineHeight: 1.6 }}>
                        {row.advantage}
                      </td>
                      <td style={{ padding: '20px 24px', fontSize: '13px', color: '#1F2933', lineHeight: 1.6 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <CheckCircle size={14} color="#A6192E" style={{ flexShrink: 0, marginTop: '2px' }} />
                          {row.benefit}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 6: PRODUCT OPPORTUNITY MAP ───────────────────── */}
      <section id="products" style={{ background: '#071A2F', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Product Strategy
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#F4F6F8', margin: '16px 0 48px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Absa Product Opportunity Map
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {PRODUCT_OPPORTUNITIES.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.id} delay={0.15 + i * 0.07}>
                  <div style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '20px', padding: '28px',
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                  >
                    <div style={{ background: 'rgba(166,25,46,0.15)', borderRadius: '12px', padding: '10px', width: 'fit-content', marginBottom: '16px' }}>
                      <Icon size={22} color="#A6192E" />
                    </div>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {p.subtitle}
                    </span>
                    <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.15rem', fontWeight: 700, color: '#F4F6F8', margin: '8px 0 12px' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'rgba(244,246,248,0.65)', lineHeight: 1.7 }}>
                      {p.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: TRUSTED CHANNEL ───────────────────────────── */}
      <section style={{ background: '#F4F6F8', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#A6192E', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Channel Differentiator
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#071A2F', margin: '16px 0 16px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              A Channel Parents Open Because<br />It&apos;s About Their Child
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: '1.05rem', color: '#4A5568', maxWidth: '600px', lineHeight: 1.75, marginBottom: '48px' }}>
              SchoolBridge is not an advertising channel — it&apos;s a utility platform. The engagement is driven by school life, not promotional push. This changes how branded content lands.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { label: 'Utility-based, not interruption-based', desc: 'Opens driven by school communication, not ads.', icon: Zap },
              { label: 'Parents open it for their child', desc: 'Highest-attention context — about what matters most.', icon: HomeIcon },
              { label: 'Learners use it for school life', desc: 'Functional app usage builds organic engagement.', icon: BookOpen },
              { label: 'Teachers use it operationally', desc: 'Staff presence creates a trusted workplace layer.', icon: Briefcase },
              { label: 'Schools can endorse relevant campaigns', desc: 'School-backed positioning creates institutional trust.', icon: Shield },
              { label: 'ProvinceBridge coordinates at scale', desc: 'District and province-level reach enables scalable campaigns.', icon: Globe },
              { label: 'Community-embedded context', desc: 'SchoolBridge is part of the school community, not external.', icon: Users },
            ].map((item, i) => (
              <Reveal key={item.label} delay={0.2 + i * 0.06}>
                <div style={{
                  background: '#fff',
                  border: '1px solid rgba(7,26,47,0.08)',
                  borderRadius: '16px', padding: '24px',
                  display: 'flex', gap: '16px', alignItems: 'flex-start',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
                >
                  <div style={{ background: 'rgba(166,25,46,0.1)', borderRadius: '8px', padding: '8px', flexShrink: 0 }}>
                    <item.icon size={16} color="#A6192E" />
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#071A2F', marginBottom: '4px' }}>{item.label}</p>
                    <p style={{ fontSize: '12px', color: '#6B7280', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: PARTNERSHIP OBJECTIVES ────────────────────── */}
      <section style={{ background: '#0D2340', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Partnership Objectives
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#F4F6F8', margin: '16px 0 48px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Commercial + Strategic Outcomes
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
            {[
              {
                title: 'Commercial Objectives',
                color: '#A6192E',
                items: [
                  'Acquire youth customers earlier in the banking lifecycle',
                  'Drive parent & teacher acquisition through trusted school context',
                  'Open a school payments product channel',
                  'Build trust in underserved and township communities',
                  'Advance financial inclusion positioning and narrative',
                  'Defend against competitor moves at the school layer',
                ],
              },
              {
                title: 'Strategic Objectives',
                color: '#F5A623',
                items: [
                  'Become the financial empowerment partner of the school ecosystem',
                  'Build relationship with future earners before career entry',
                  'Support national education and financial literacy goals',
                  'Establish a scalable financial inclusion channel',
                  'Create a data-informed, measurable sponsorship asset',
                  'Build a pre-varsity competitive moat',
                ],
              },
            ].map((col) => (
              <Reveal key={col.title} delay={0.2}>
                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                    <div style={{ width: '4px', height: '24px', background: col.color, borderRadius: '2px' }} />
                    <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.2rem', fontWeight: 700, color: '#F4F6F8' }}>
                      {col.title}
                    </h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {col.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px' }}>
                        <ChevronRight size={14} color={col.color} style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '13px', color: 'rgba(244,246,248,0.75)', lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CAMPAIGN EXAMPLES ─────────────────────────── */}
      <section id="campaigns" style={{ background: '#071A2F', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Campaign Examples
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#F4F6F8', margin: '16px 0 12px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Illustrative Campaign Concepts
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: '13px', color: 'rgba(244,246,248,0.5)', marginBottom: '48px', fontFamily: "'IBM Plex Mono', monospace" }}>
              Illustrative examples — actual campaigns to be co-developed with Absa marketing team
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {CAMPAIGN_TILES.map((tile, i) => (
              <Reveal key={tile.id} delay={0.15 + i * 0.06}>
                <div style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px', padding: '24px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
                      background: 'rgba(166,25,46,0.2)', color: '#F5A623',
                      padding: '4px 10px', borderRadius: '10px',
                    }}>
                      {tile.badge}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: 'rgba(244,246,248,0.35)' }}>
                      #{i + 1}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1rem', fontWeight: 700, color: '#F4F6F8', marginBottom: '16px', lineHeight: 1.4 }}>
                    {tile.title}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {[
                      { key: 'Audience', val: tile.audience },
                      { key: 'Channel', val: tile.channel },
                      { key: 'Mechanic', val: tile.mechanic },
                      { key: 'CTA', val: tile.cta },
                      { key: 'Metric', val: tile.metric },
                    ].map((row) => (
                      <div key={row.key} style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: 'rgba(244,246,248,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 }}>
                          {row.key}
                        </span>
                        <span style={{ fontSize: '12px', color: 'rgba(244,246,248,0.8)', textAlign: 'right' }}>
                          {row.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: MEASUREMENT DASHBOARD ────────────────────── */}
      <section style={{ background: '#0D2340', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Measurement Framework
              </span>
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
                background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.3)',
                color: '#F5A623', padding: '3px 10px', borderRadius: '10px',
              }}>
                PROPOSED — ILLUSTRATIVE
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#F4F6F8', margin: '0 0 48px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Partnership Dashboard
            </h2>
          </Reveal>

          <div style={{
            background: 'rgba(7,26,47,0.8)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px', padding: '32px',
            backdropFilter: 'blur(16px)',
          }}>
            <div style={{ marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: 'rgba(244,246,248,0.5)' }}>
                Absa × SchoolBridge · Proposed Measurement Framework · Values to be benchmarked post-pilot
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
              {DASHBOARD_METRICS.map((m, i) => (
                <Reveal key={m.id} delay={0.15 + i * 0.05}>
                  <div style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '12px', padding: '20px',
                  }}>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                      {m.label}
                    </div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: '1.4rem', fontWeight: 700, color: '#A6192E', marginBottom: '4px' }}>
                      {m.value}
                    </div>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: 'rgba(244,246,248,0.4)' }}>
                      {m.unit}
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(244,246,248,0.5)', marginTop: '8px', lineHeight: 1.5 }}>
                      {m.description}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: SPONSORSHIP PACKAGES ─────────────────────── */}
      <section style={{ background: '#071A2F', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Partnership Models
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#F4F6F8', margin: '16px 0 48px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Sponsorship &amp; Partnership Options
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {SPONSORSHIP_PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.id} delay={0.15 + i * 0.1}>
                <div style={{
                  background: pkg.highlight ? 'rgba(166,25,46,0.08)' : 'rgba(255,255,255,0.03)',
                  border: `2px solid ${pkg.highlight ? '#A6192E' : i === 1 ? '#F5A623' : 'rgba(7,26,47,0.8)'}`,
                  borderRadius: '20px', padding: '32px', height: '100%',
                  position: 'relative',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 24px 48px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
                >
                  {pkg.highlight && (
                    <div style={{
                      position: 'absolute', top: '-12px', left: '24px',
                      background: '#A6192E', color: '#fff',
                      fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
                      fontWeight: 600, padding: '4px 12px', borderRadius: '12px',
                      textTransform: 'uppercase', letterSpacing: '0.08em',
                    }}>
                      Recommended
                    </div>
                  )}
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: 'rgba(244,246,248,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {pkg.option}
                  </span>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.2rem', fontWeight: 700, color: '#F4F6F8', margin: '8px 0 6px' }}>
                    {pkg.title}
                  </h3>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: i === 1 ? '#F5A623' : '#A6192E', marginBottom: '16px' }}>
                    {pkg.tagline}
                  </p>
                  <p style={{ fontSize: '13px', color: 'rgba(244,246,248,0.65)', lineHeight: 1.7, marginBottom: '24px' }}>
                    {pkg.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {pkg.inclusions.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '10px' }}>
                        <CheckCircle size={13} color={i === 1 ? '#F5A623' : '#A6192E'} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13px', color: 'rgba(244,246,248,0.75)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FIRST-MOVER ADVANTAGE ────────────────────── */}
      <section style={{ background: '#0A0F1A', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              First-Mover Advantage
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#F4F6F8', margin: '16px 0 48px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              The First Bank to Own the School Channel<br />Owns the Pre-Varsity Relationship
            </h2>
          </Reveal>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {[
              'Earlier than Varsity Vibe-style platforms',
              'Parent & learner household relationship',
              'Trusted school context',
              'Province & district scalability',
              'Measurable digital engagement',
              'Product cross-sell pathways',
              'Financial inclusion credibility',
              'Competitive moat',
            ].map((chip, i) => (
              <Reveal key={chip} delay={0.15 + i * 0.05}>
                <div style={{
                  background: 'rgba(166,25,46,0.12)',
                  border: '1px solid rgba(166,25,46,0.3)',
                  borderRadius: '32px', padding: '12px 24px',
                  display: 'flex', alignItems: 'center', gap: '10px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(166,25,46,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(166,25,46,0.12)';
                }}
                >
                  <Star size={12} color="#F5A623" />
                  <span style={{ fontSize: '14px', color: '#F4F6F8', fontWeight: 500 }}>{chip}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 13: PILOT PROPOSAL ───────────────────────────── */}
      <section id="pilot" style={{ background: '#F4F6F8', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#A6192E', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Pilot Proposal
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#071A2F', margin: '16px 0 8px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              50–100 Schools. 90-Day Pilot.<br />Measurable Results.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: '1.05rem', color: '#4A5568', maxWidth: '580px', lineHeight: 1.75, marginBottom: '48px' }}>
              A structured pilot designed to demonstrate measurable impact, test Absa product pathways, and build the case for a province-wide partnership.
            </p>
          </Reveal>

          {/* Pilot structure grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginBottom: '48px' }}>
            {PILOT_STRUCTURE.map((item, i) => {
              const Icon = getIcon(item.icon);
              return (
                <Reveal key={item.label} delay={0.2 + i * 0.06}>
                  <div style={{
                    background: '#fff', border: '1px solid rgba(7,26,47,0.08)',
                    borderRadius: '16px', padding: '24px', textAlign: 'center',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                  >
                    <div style={{ background: 'rgba(166,25,46,0.08)', borderRadius: '10px', padding: '10px', width: 'fit-content', margin: '0 auto 12px' }}>
                      <Icon size={20} color="#A6192E" />
                    </div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: '1.3rem', fontWeight: 700, color: '#A6192E', marginBottom: '4px' }}>
                      {item.value}
                    </div>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {item.label}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <Reveal delay={0.45}>
              <div style={{ background: '#fff', border: '1px solid rgba(7,26,47,0.08)', borderRadius: '20px', padding: '32px' }}>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.1rem', fontWeight: 700, color: '#071A2F', marginBottom: '20px' }}>
                  Pilot Campaign Streams
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {PILOT_CAMPAIGNS.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#A6192E', flexShrink: 0, marginTop: '6px' }} />
                      <span style={{ fontSize: '13px', color: '#4A5568', lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div style={{ background: '#fff', border: '1px solid rgba(7,26,47,0.08)', borderRadius: '20px', padding: '32px' }}>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.1rem', fontWeight: 700, color: '#071A2F', marginBottom: '20px' }}>
                  Success Metrics
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {PILOT_SUCCESS_METRICS.map((m) => (
                    <span key={m} style={{
                      fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px',
                      background: 'rgba(166,25,46,0.08)', border: '1px solid rgba(166,25,46,0.2)',
                      color: '#071A2F', padding: '6px 14px', borderRadius: '20px',
                    }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 14: SOCIAL IMPACT & ESG ──────────────────────── */}
      <section style={{ background: '#071A2F', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Social Impact &amp; ESG
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#F4F6F8', margin: '16px 0 16px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              The Strongest Partnerships Combine<br />Social Impact with Commercial Growth
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: '1.05rem', color: 'rgba(244,246,248,0.7)', maxWidth: '640px', lineHeight: 1.75, marginBottom: '12px' }}>
              Absa can support genuine financial inclusion and education transformation while building measurable commercial growth — this is not a CSI-only story.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: 'rgba(244,246,248,0.4)', marginBottom: '48px' }}>
              Avoid CSI-only framing — position this as integrated commercial + social value creation
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Financial Literacy', desc: 'Deliver practical financial skills to learners, equipping the next generation with money management tools before they enter the economy.', icon: BookOpen },
              { title: 'Digital Inclusion', desc: 'Drive digital banking access in communities where app-based financial services remain underutilised — building Absa\'s digital footprint.', icon: Smartphone },
              { title: 'Youth Readiness', desc: 'Prepare school leavers for financial independence — from opening a first account to understanding credit, savings and investment basics.', icon: GraduationCap },
              { title: 'Parent Empowerment', desc: 'Equip parents with financial planning tools tied to real school-life moments — fees, savings goals, family insurance and budget management.', icon: HomeIcon },
              { title: 'Teacher Financial Wellness', desc: 'Support the financial wellness of teachers — a workforce that disproportionately carries household and community financial responsibility.', icon: Briefcase },
              { title: 'Township & Rural Access', desc: 'Extend Absa\'s inclusion agenda into township and rural school communities where financial services trust and access remain a challenge.', icon: Globe },
            ].map((card, i) => (
              <Reveal key={card.title} delay={0.25 + i * 0.07}>
                <div style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px', padding: '28px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
                >
                  <div style={{ background: 'rgba(245,166,35,0.12)', borderRadius: '12px', padding: '10px', width: 'fit-content', marginBottom: '16px' }}>
                    <card.icon size={20} color="#F5A623" />
                  </div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.1rem', fontWeight: 700, color: '#F4F6F8', marginBottom: '12px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'rgba(244,246,248,0.65)', lineHeight: 1.7 }}>
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 15: CLOSING ───────────────────────────────────── */}
      <section style={{ background: '#0A0F1A', padding: '120px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              The Opportunity
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700, color: '#F4F6F8', margin: '20px 0 24px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Absa Can Become<br />
              <span style={{ color: '#A6192E' }}>the Bank of the School Ecosystem</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontSize: '1.1rem', color: 'rgba(244,246,248,0.75)', lineHeight: 1.8, marginBottom: '48px' }}>
              Before learners become university students, employees, entrepreneurs or parents, they pass through school. SchoolBridge gives Absa the opportunity to build the relationship first — in a trusted, utility-based channel that no major bank has yet claimed.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="#pilot"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#A6192E', color: '#fff',
                fontWeight: 700, fontSize: '16px',
                padding: '18px 40px', borderRadius: '40px', textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#C8102E';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#A6192E';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Pilot the Absa × SchoolBridge Partnership <ArrowRight size={18} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── PUBLIC DATA SOURCES ───────────────────────────────────── */}
      <section style={{ background: '#071A2F', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Sources
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.4rem', fontWeight: 700, color: '#F4F6F8', margin: '16px 0 8px' }}>
              Public Data &amp; Reference Sources
            </h3>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: '13px', color: 'rgba(244,246,248,0.5)', marginBottom: '32px', fontFamily: "'IBM Plex Mono', monospace" }}>
              All competitive references are based on publicly available information. No exclusive or confidential relationships are implied.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
            {ABSA_SOURCES.map((source, i) => (
              <Reveal key={source.id} delay={0.2 + i * 0.04}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '12px', padding: '16px',
                    textDecoration: 'none', transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#20B2AA', flexShrink: 0, marginTop: '5px' }} />
                  <div>
                    <p style={{ fontSize: '13px', color: '#F4F6F8', marginBottom: '4px', lineHeight: 1.4 }}>{source.title}</p>
                    <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: 'rgba(244,246,248,0.45)' }}>
                      {source.publisher} · {source.date}
                    </p>
                  </div>
                  <ExternalLink size={12} color="rgba(244,246,248,0.3)" style={{ flexShrink: 0, marginLeft: 'auto', marginTop: '2px' }} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer style={{ background: '#050C18', padding: '40px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', color: 'rgba(244,246,248,0.6)', marginBottom: '12px' }}>
            SchoolBridge | ProvinceBridge | Partner Microsite for Absa
          </p>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'rgba(244,246,248,0.3)', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
            All partnership models and metrics shown are proposed frameworks. Competitive landscape references are based on public information. Commercial proposals are indicative only.
          </p>
        </div>
      </footer>
    </div>
  );
}
