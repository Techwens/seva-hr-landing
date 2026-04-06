import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div({ minHeight: '100vh', background: '#F8FAFC' })

/* ── Hero (dark) ── */
const HeroSection = styled.section({
  position: 'relative', overflow: 'hidden',
  background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
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
  background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.1)', color: '#fff',
  fontSize: '0.875rem', marginBottom: '1rem',
  '@media (max-width: 575px)': { padding: '0.3rem 0.6rem', fontSize: '0.688rem', gap: '0.25rem' },
  '& span': { fontWeight: 600 },
})
const HeroTitle = styled.h1({
  color: '#fff', marginBottom: '1rem',
  '& span': { background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
})
const HeroSub = styled.p({ color: 'rgba(255,255,255,0.85)', maxWidth: '40rem', margin: '0 auto', lineHeight: 1.7 })
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
const ComingSoon = styled.span({
  display: 'inline-block', marginTop: '0.75rem', padding: '0.375rem 1rem', borderRadius: '2rem',
  background: 'linear-gradient(135deg, #EEF2FF 0%, #FDF4FF 100%)', border: '1px solid rgba(71,111,255,0.15)',
  color: '#64748B', fontSize: '0.813rem', fontWeight: 500, letterSpacing: '0.02em',
})

/* ── Data ── */
const painPoints = [
  { title: 'Annual reviews based on recency bias', icon: 'calendar-x' },
  { title: 'No structured goal-setting framework', icon: 'target-off' },
  { title: 'Feedback scattered across emails and meetings', icon: 'messages' },
  { title: 'Inconsistent ratings without calibration', icon: 'scale' },
]

const capabilities = [
  { title: 'Goal Setting (OKR/KRA Frameworks)', desc: 'Set measurable goals using OKR or KRA frameworks with cascading alignment from company objectives to individual targets.', icon: 'target' },
  { title: '360-Degree Feedback Collection', desc: 'Collect structured feedback from peers, managers, direct reports, and self-assessments for a complete performance picture.', icon: 'users' },
  { title: 'Self & Manager Appraisals', desc: 'Run self and manager appraisal cycles with configurable forms, rating scales, and multi-level review workflows.', icon: 'clipboard' },
  { title: 'Review Cycle Management', desc: 'Schedule review cycles with defined timelines, automatic reminders, and progress tracking across the organization.', icon: 'calendar' },
  { title: 'Rating Calibration Tools', desc: 'Calibrate ratings across managers and departments to ensure fairness, consistency, and alignment with bell-curve targets.', icon: 'sliders' },
  { title: 'Continuous Feedback & Kudos', desc: 'Enable real-time recognition and feedback between team members, building a culture of continuous improvement.', icon: 'heart' },
  { title: 'Performance Improvement Plans (PIP)', desc: 'Create structured PIPs with clear milestones, review checkpoints, and documented outcomes for underperformers.', icon: 'trending-up' },
  { title: 'KPI Tracking Dashboards', desc: 'Monitor individual and team KPIs through visual dashboards with trend analysis and progress indicators.', icon: 'bar-chart' },
]

const stats = [
  { value: 'Continuous', label: 'Feedback loop' },
  { value: 'Fair', label: 'Calibrated ratings' },
  { value: 'Linked', label: 'To compensation' },
  { value: 'Complete', label: 'Performance history' },
]

const getIcon = (name) => {
  switch (name) {
    case 'target': return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    case 'users': return <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    case 'clipboard': return <svg viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
    case 'calendar': return <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
    case 'sliders': return <svg viewBox="0 0 24 24"><path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/></svg>
    case 'heart': return <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
    case 'trending-up': return <svg viewBox="0 0 24 24"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>
    case 'bar-chart': return <svg viewBox="0 0 24 24"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
    case 'calendar-x': return <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M10 14l4 4"/><path d="M14 14l-4 4"/></svg>
    case 'target-off': return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
    case 'messages': return <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
    case 'scale': return <svg viewBox="0 0 24 24"><path d="M16 3l-4 4-4-4"/><path d="M12 7v14"/><path d="M4 14l4-4-4-4"/><path d="M20 14l-4-4 4-4"/></svg>
    default: return null
  }
}

export const FeaturePerformance = () => {
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
        <Orb $top="-10%" $left="-5%" $size="30rem" $delay="0s" />
        <Orb $top="30%" $right="-8%" $size="22rem" $color="radial-gradient(circle, rgba(123,96,255,0.12) 0%, transparent 70%)" $delay="2s" />
        <Grid />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <DarkBadge><Sparkle /><span>Performance</span></DarkBadge>
          <HeroTitle>Performance Management That<br /><span>Drives Growth</span></HeroTitle>
          <HeroSub>
            Set goals, collect 360-degree feedback, and run fair appraisals — all
            in one connected system.
          </HeroSub>
          <ComingSoon>(Coming Soon)</ComingSoon>
        </div>
      </HeroSection>

      {/* ── Pain Points (light) ── */}
      <LightDarkSection>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="centerized" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <DarkBadge><Sparkle /><span>The Problem</span></DarkBadge>
          </div>
          <Heading>Why Reviews <span>Fall Flat</span></Heading>
          <SubText>Traditional performance reviews fail both managers and employees.</SubText>
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

      {/* ── Capabilities (light) ── */}
      <Section $bg="#F8FAFC" ref={sectionRef}>
        <div className="container">
          <div className="centerized">
            <LightBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M23 6l-9.5 9.5-5-5L1 18"/><path strokeLinecap="round" strokeLinejoin="round" d="M17 6h6v6"/></svg>
              <span>Capabilities</span>
            </LightBadge>
          </div>
          <Heading>A Complete <span>Performance</span> System</Heading>
          <SubText>From goal-setting to calibration, everything connected.</SubText>
          <FeatureGrid>
            {capabilities.map((f, i) => (
              <li key={i}>
                <FeatureCard>
                  <IconWrap>{getIcon(f.icon)}</IconWrap>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </FeatureCard>
              </li>
            ))}
          </FeatureGrid>
        </div>
      </Section>

      {/* ── Stats (light) ── */}
      <LightDarkSection>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="centerized" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <DarkBadge><Sparkle /><span>Impact</span></DarkBadge>
          </div>
          <Heading>Results That <span>Matter</span></Heading>
          <SubText style={{ marginBottom: '2.5rem' }}>Built for fair, continuous performance culture.</SubText>
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
            <CtaTitle>Ready to Elevate <span>Performance</span>?</CtaTitle>
            <SubText style={{ color: 'rgba(255,255,255,0.8)' }}>
              See how SevaHR connects goals, feedback, and appraisals into a unified
              system that drives real employee growth.
            </SubText>
            <PrimaryBtn href="/contact">Book a Demo</PrimaryBtn>
          </CtaWrap>
        </div>
      </DarkSection>
    </PageWrapper>
  )
}

export default FeaturePerformance
