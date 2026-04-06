import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div({ minHeight: '100vh', background: '#F8FAFC' })

/* ── Hero (light) ── */
const HeroSection = styled.section({
  position: 'relative', overflow: 'hidden',
  background: '#fff',
  paddingBlock: '8rem 5rem', textAlign: 'center',
  '@media (max-width: 575px)': { paddingBlock: '6rem 3rem' },
})
const Orb = styled.div(({ $top, $left, $right, $size, $color, $delay }) => ({
  position: 'absolute', top: $top || 'auto', left: $left || 'auto', right: $right || 'auto',
  width: $size || '20rem', height: $size || '20rem', borderRadius: '50%',
  background: $color || 'radial-gradient(circle, rgba(71,111,255,0.15) 0%, transparent 70%)',
  filter: 'blur(3rem)', pointerEvents: 'none',
  animation: `orbF 8s ease-in-out ${$delay || '0s'} infinite`,
  '@keyframes orbF': { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(1rem,-1rem) scale(1.05)' } },
}))
const Grid = styled.div({
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
  backgroundSize: '4rem 4rem',
})
const DarkBadge = styled.h3({
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.625rem 1.25rem', borderRadius: '3rem',
  background: 'linear-gradient(135deg, #EEF2FF 0%, #FDF4FF 100%)',
  border: '1px solid rgba(71,111,255,0.15)', boxShadow: '0 4px 15px rgba(71,111,255,0.08)',
  fontSize: '0.875rem', marginBottom: '1rem',
  '@media (max-width: 575px)': { padding: '0.3rem 0.6rem', fontSize: '0.688rem', gap: '0.25rem' },
  '& span': { fontWeight: 600, background: 'linear-gradient(90deg, #476FFF, #7B60FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
})
const HeroTitle = styled.h1({
  color: '#1a1a2e', marginBottom: '1rem',
  '& span': { background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
})
const HeroSub = styled.p({ color: '#64748B', maxWidth: '40rem', margin: '0 auto', lineHeight: 1.7 })
const Sparkle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#sm)"/><defs><linearGradient id="sm" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#60A5FA"/><stop offset="1" stopColor="#A78BFA"/></linearGradient></defs></svg>
)

/* ── Light section shell ── */
const Section = styled.section(({ $bg }) => ({
  paddingBlock: '4rem', background: $bg || '#F8FAFC',
  '@media (max-width: 575px)': { paddingBlock: '2rem' },
  '& .centerized': { display: 'flex', justifyContent: 'center' },
}))
const LightBadge = styled.h3({
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.625rem 1.25rem', borderRadius: '3rem',
  background: 'linear-gradient(135deg, #EEF2FF 0%, #FDF4FF 100%)',
  border: '1px solid rgba(71,111,255,0.15)', boxShadow: '0 4px 15px rgba(71,111,255,0.08)',
  '@media (max-width: 575px)': { padding: '0.2rem 0.5rem', gap: '0.2rem' },
  '& span': { fontSize: '0.875rem', fontWeight: 600, background: 'linear-gradient(90deg, #476FFF, #7B60FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    '@media (max-width: 575px)': { fontSize: '0.688rem' },
  },
})
const Heading = styled.h2({
  textAlign: 'center', marginBottom: '0.5rem',
  '& span': { background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
})
const SubText = styled.p({ color: '#64748B', textAlign: 'center', maxWidth: '38rem', margin: '0 auto 2rem', '@media (max-width: 575px)': { fontSize: '0.875rem' } })

/* ── Feature grid ── */
const FeatureGrid = styled.ul({
  listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
  '@media (max-width: 575px)': { gap: '0.5rem' },
  '& li': {
    width: 'calc(33.333% - 0.84rem)',
    '@media (max-width: 991px)': { width: 'calc(50% - 0.625rem)' },
    '@media (max-width: 575px)': { width: '100%' },
  },
})
const FeatureCard = styled.div({
  background: '#fff', borderRadius: '1rem', padding: '1.5rem', height: '100%',
  boxShadow: '0 1px 3px rgba(0,0,0,0.08)', transition: 'all 0.4s ease',
  '&:hover': { background: 'linear-gradient(151.19deg, #ff7f0f1a 1.77%, #0036f50a 71.94%)', transform: 'translateY(-4px)', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' },
  '@media (max-width: 575px)': { padding: '1rem 0.75rem' },
  '& h4': { fontWeight: 700, marginBottom: '0.5rem' },
  '& p': { fontSize: '0.875rem', color: '#64748B', lineHeight: 1.7, margin: 0, textAlign: 'start', '@media (max-width: 575px)': { fontSize: '0.813rem' } },
})
const IconWrap = styled.div({
  width: '2.5rem', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
  marginBottom: '0.75rem', borderRadius: '0.75rem',
  background: 'linear-gradient(135deg, #EEF2FF 0%, #FDF4FF 100%)',
  '@media (max-width: 575px)': { width: '2rem', height: '2rem', marginBottom: '0.5rem' },
  '& svg': { width: '1.25rem', height: '1.25rem', stroke: '#476FFF', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
})

/* ── Statute group styling ── */
const StatuteGroup = styled.div({ marginBottom: '2rem' })
const StatuteGroupTitle = styled.h3({
  fontSize: '1.1rem', fontWeight: 700, color: '#1E293B', marginBottom: '1rem', paddingLeft: '0.75rem',
  borderLeft: '3px solid transparent',
  borderImage: 'linear-gradient(180deg, #476FFF, #7B60FF) 1',
  '@media (max-width: 575px)': { fontSize: '1rem' },
})

/* ── Dark sections (CTA only) ── */
const DarkSection = styled.section({
  position: 'relative', overflow: 'hidden',
  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
  paddingBlock: '4rem', '@media (max-width: 575px)': { paddingBlock: '2rem' },
})
/* ── Light section for pain points & stats ── */
const LightDarkSection = styled.section({
  position: 'relative', overflow: 'hidden',
  background: '#F8FAFC',
  paddingBlock: '4rem', '@media (max-width: 575px)': { paddingBlock: '2rem' },
})
const GlassGrid = styled.div({
  display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem',
  '@media (max-width: 991px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '@media (max-width: 575px)': { gridTemplateColumns: '1fr', gap: '0.5rem' },
})
const GlassCard = styled.div({
  background: '#fff', border: '1px solid #E2E8F0', borderRadius: '1rem',
  padding: '1.5rem', textAlign: 'center', transition: 'all 0.3s ease',
  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  '&:hover': { boxShadow: '0 6px 20px rgba(0,0,0,0.08)', transform: 'translateY(-4px)' },
  '& h4': { color: '#1a1a2e', fontSize: '0.95rem', fontWeight: 600, margin: 0 },
  '@media (max-width: 575px)': { padding: '1rem' },
})
const GlassIcon = styled.div({
  width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', margin: '0 auto 0.75rem',
  background: 'linear-gradient(135deg, #EEF2FF, #FDF4FF)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  '& svg': { width: '1.25rem', height: '1.25rem', stroke: '#476FFF', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
})

/* ── Stats ── */
const StatsRow = styled.div({
  display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap',
  '@media (max-width: 575px)': { gap: '1.5rem' },
})
const StatItem = styled.div({
  textAlign: 'center',
  '& .value': { fontSize: '1.75rem', fontWeight: 800, background: 'linear-gradient(90deg, #476FFF, #7B60FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
  '& .label': { fontSize: '0.875rem', color: '#64748B', marginTop: '0.25rem' },
})
const StatDivider = styled.div({
  width: '1px', height: '3rem', background: '#E2E8F0',
  '@media (max-width: 575px)': { display: 'none' },
})

/* ── CTA ── */
const CtaWrap = styled.div({ textAlign: 'center', position: 'relative', zIndex: 2 })
const CtaTitle = styled.h2({
  color: '#fff', marginBottom: '0.5rem',
  '& span': { background: 'linear-gradient(90deg, #476FFF, #7B60FF 50%, #FF6B6B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
})
const PrimaryBtn = styled.a({
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '1rem 2.5rem', borderRadius: '3rem', border: 'none', background: '#fff',
  color: '#0F172A', fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
  cursor: 'pointer', transition: 'all 0.4s ease', boxShadow: '0 4px 20px rgba(255,255,255,0.2)',
  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 15px 40px rgba(255,255,255,0.3)' },
  '@media (max-width: 575px)': { fontSize: '0.813rem', padding: '0.75rem 1.5rem' },
})

/* ── Data ── */
const painPoints = [
  { title: 'Missing filing deadlines leads to penalties', icon: 'alert-triangle' },
  { title: 'State-wise rules constantly changing', icon: 'refresh' },
  { title: 'Error-prone manual challans', icon: 'x-circle' },
  { title: 'Audit preparations take weeks', icon: 'search' },
]

const statuteGroups = [
  {
    title: 'EPF',
    items: [
      { title: 'Auto Contribution Calculation', desc: 'Employee and employer contributions computed automatically based on latest EPF rules and wage ceilings.', icon: 'calculator' },
      { title: 'UAN Management', desc: 'Track and manage Universal Account Numbers for all employees with bulk upload and verification support.', icon: 'key' },
      { title: 'Monthly ECR Generation', desc: 'Generate Electronic Challan-cum-Return files ready for upload to the EPFO portal every month.', icon: 'file-text' },
    ],
  },
  {
    title: 'ESI',
    items: [
      { title: 'Eligibility Tracking', desc: 'Auto-identify ESI-eligible employees based on gross salary thresholds and employment type.', icon: 'user-check' },
      { title: 'Contribution Calculation', desc: 'Compute employee and employer ESI contributions accurately every pay cycle.', icon: 'calculator' },
      { title: 'Half-Yearly Return Data', desc: 'Prepare consolidated data for half-yearly ESI returns with employee-wise breakdowns.', icon: 'calendar' },
    ],
  },
  {
    title: 'Professional Tax',
    items: [
      { title: 'State-Wise Slab Calculation', desc: 'Auto-apply the correct PT slab based on the employee\'s work state and salary bracket.', icon: 'layers' },
      { title: 'Multi-State Support', desc: 'Handle PT deductions for multi-branch organizations with employees across different Indian states.', icon: 'globe' },
    ],
  },
  {
    title: 'LWF',
    items: [
      { title: 'State-Wise Contributions', desc: 'Calculate and track LWF contributions based on state-specific rates and applicable employee categories.', icon: 'heart' },
    ],
  },
  {
    title: 'TDS',
    items: [
      { title: 'Auto TDS Calculation', desc: 'Compute monthly TDS based on projected annual income, declared investments, and chosen tax regime.', icon: 'percent' },
      { title: 'Tax Declaration Processing', desc: 'Collect and verify employee investment declarations under 80C, 80D, HRA, and other sections.', icon: 'clipboard' },
      { title: 'Old vs New Tax Regime', desc: 'Support both tax regimes with automatic comparison and regime-specific slab computation.', icon: 'git-branch' },
      { title: 'Form 16 Generation', desc: 'Auto-generate Form 16 Part A and Part B at financial year end for all employees.', icon: 'file-text' },
    ],
  },
  {
    title: 'Compliance Engine',
    items: [
      { title: 'Compliance Calendar', desc: 'Visual calendar showing all upcoming regulatory deadlines with automated reminders and alerts.', icon: 'calendar' },
      { title: 'Filing Tracker Dashboard', desc: 'Monitor filing status across all statutes — see what is completed, pending, or overdue at a glance.', icon: 'bar-chart' },
      { title: 'Audit-Ready Documentation', desc: 'All computation records, challans, and returns stored and indexed for instant retrieval during audits.', icon: 'archive' },
    ],
  },
]

const stats = [
  { value: '100%', label: 'Audit-ready' },
  { value: 'All States', label: 'Indian states covered' },
  { value: 'Zero', label: 'Missed deadlines' },
  { value: 'Auto', label: 'Generated challans' },
]

const getIcon = (name) => {
  switch (name) {
    case 'calculator': return <svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h4"/><path d="M8 18h4"/></svg>
    case 'key': return <svg viewBox="0 0 24 24"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
    case 'file-text': return <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
    case 'user-check': return <svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M17 11l2 2 4-4"/></svg>
    case 'calendar': return <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
    case 'layers': return <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    case 'globe': return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
    case 'heart': return <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
    case 'percent': return <svg viewBox="0 0 24 24"><path d="M19 5L5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
    case 'clipboard': return <svg viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
    case 'git-branch': return <svg viewBox="0 0 24 24"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 01-9 9"/></svg>
    case 'bar-chart': return <svg viewBox="0 0 24 24"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
    case 'archive': return <svg viewBox="0 0 24 24"><path d="M21 8v13H3V8"/><rect x="1" y="3" width="22" height="5"/><path d="M10 12h4"/></svg>
    case 'alert-triangle': return <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
    case 'refresh': return <svg viewBox="0 0 24 24"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
    case 'x-circle': return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6"/><path d="M9 9l6 6"/></svg>
    case 'search': return <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    default: return null
  }
}

export const FeatureCompliance = () => {
  const sectionRef = useRef(null)
  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.querySelectorAll('.animate').forEach(el => el.classList.add('in-view')) }, { threshold: 0.2 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <HeroSection>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <DarkBadge><Sparkle /><span>Statutory Compliance</span></DarkBadge>
          <HeroTitle>Compliance on<br /><span>Autopilot</span></HeroTitle>
          <HeroSub>
            EPF, ESI, Professional Tax, LWF, TDS — auto-calculated, auto-filed,
            always audit-ready for every Indian state.
          </HeroSub>
        </div>
      </HeroSection>

      {/* ── Pain Points (light) ── */}
      <LightDarkSection>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="centerized" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <DarkBadge><Sparkle /><span>The Problem</span></DarkBadge>
          </div>
          <Heading>Why Compliance Keeps You <span>Up at Night</span></Heading>
          <SubText>Manual statutory management is a ticking time bomb.</SubText>
          <GlassGrid>
            {painPoints.map((p, i) => (
              <GlassCard key={i}>
                <GlassIcon>{getIcon(p.icon)}</GlassIcon>
                <h4>{p.title}</h4>
              </GlassCard>
            ))}
          </GlassGrid>
        </div>
      </LightDarkSection>

      {/* ── Capabilities grouped by statute (light) ── */}
      <Section $bg="#F8FAFC" ref={sectionRef}>
        <div className="container">
          <div className="centerized">
            <LightBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Statutory Coverage</span>
            </LightBadge>
          </div>
          <Heading>Comprehensive <span>Compliance</span> Coverage</Heading>
          <SubText>Every Indian statute handled, every state covered.</SubText>

          {statuteGroups.map((group, gi) => (
            <StatuteGroup key={gi}>
              <StatuteGroupTitle>{group.title}</StatuteGroupTitle>
              <FeatureGrid>
                {group.items.map((f, fi) => (
                  <li key={fi}>
                    <FeatureCard>
                      <IconWrap>{getIcon(f.icon)}</IconWrap>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </FeatureCard>
                  </li>
                ))}
              </FeatureGrid>
            </StatuteGroup>
          ))}
        </div>
      </Section>

      {/* ── Stats (light) ── */}
      <LightDarkSection>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="centerized" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <DarkBadge><Sparkle /><span>Impact</span></DarkBadge>
          </div>
          <Heading>Always <span>Audit-Ready</span></Heading>
          <SubText style={{ marginBottom: '2.5rem' }}>Stay compliant across every statute, every state.</SubText>
          <StatsRow>
            {stats.map((s, i) => (
              <div key={i} style={{ display: 'contents' }}>
                <StatItem>
                  <div className="value">{s.value}</div>
                  <div className="label">{s.label}</div>
                </StatItem>
                {i < stats.length - 1 && <StatDivider />}
              </div>
            ))}
          </StatsRow>
        </div>
      </LightDarkSection>

      {/* ── CTA ── */}
      <DarkSection style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' }}>
        <Grid />
        <div className="container">
          <CtaWrap>
            <CtaTitle>Ready to Put Compliance on <span>Autopilot</span>?</CtaTitle>
            <SubText style={{ color: 'rgba(255,255,255,0.8)' }}>
              See how SevaHR auto-calculates every statutory deduction, tracks every
              deadline, and keeps you audit-ready year-round.
            </SubText>
            <PrimaryBtn href="/contact">Book a Demo</PrimaryBtn>
          </CtaWrap>
        </div>
      </DarkSection>
    </PageWrapper>
  )
}

export default FeatureCompliance
