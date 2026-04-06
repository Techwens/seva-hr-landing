import { useEffect } from 'react'
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
const HeroBadge = styled.h3({
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.625rem 1.25rem', borderRadius: '3rem',
  background: 'linear-gradient(135deg, #EEF2FF 0%, #FDF4FF 100%)',
  border: '1px solid rgba(71,111,255,0.15)', boxShadow: '0 4px 15px rgba(71,111,255,0.08)',
  fontSize: '0.875rem', marginBottom: '1rem',
  '@media (max-width: 575px)': { padding: '0.3rem 0.6rem', fontSize: '0.688rem', gap: '0.25rem' },
  '& span': { fontWeight: 600, background: 'linear-gradient(90deg, #476FFF 0%, #7B60FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
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

/* ── Feature grid (light cards) ── */
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

/* ── Mid section (light) ── */
const MidSection = styled.section({
  position: 'relative', overflow: 'hidden',
  background: '#F8FAFC',
  paddingBlock: '4rem', '@media (max-width: 575px)': { paddingBlock: '2rem' },
})
const LightGrid = styled.div({
  display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem',
  '@media (max-width: 991px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '@media (max-width: 575px)': { gridTemplateColumns: '1fr', gap: '0.5rem' },
})
const LightCard = styled.div({
  background: '#fff', border: '1px solid #E2E8F0', borderRadius: '1rem',
  padding: '1.5rem', textAlign: 'center', transition: 'all 0.3s ease',
  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  '&:hover': { boxShadow: '0 6px 20px rgba(0,0,0,0.08)', transform: 'translateY(-4px)' },
  '& h4': { color: '#1a1a2e', fontSize: '0.95rem', fontWeight: 600, margin: 0 },
  '& p': { color: '#64748B', fontSize: '0.813rem', lineHeight: 1.6, marginTop: '0.5rem', marginBottom: 0 },
  '@media (max-width: 575px)': { padding: '1rem' },
})
const LightIcon = styled.div({
  width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', margin: '0 auto 0.75rem',
  background: 'linear-gradient(135deg, #EEF2FF, #FDF4FF)',
  border: '1px solid rgba(71,111,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center',
  '& svg': { width: '1.25rem', height: '1.25rem', stroke: '#476FFF', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
})
/* ── Dark CTA section ── */
const DarkSection = styled.section({
  position: 'relative', overflow: 'hidden',
  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
  paddingBlock: '4rem', '@media (max-width: 575px)': { paddingBlock: '2rem' },
})

/* ── Stats ── */
const StatsRow = styled.div({
  display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '3rem',
  '@media (max-width: 991px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '@media (max-width: 575px)': { gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '2rem' },
})
const StatItem = styled.div({
  textAlign: 'center',
  '& h3': {
    fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.25rem',
    background: 'linear-gradient(90deg, #476FFF, #7B60FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
    '@media (max-width: 575px)': { fontSize: '1.5rem' },
  },
  '& p': { color: '#64748B', fontSize: '0.875rem', margin: 0, '@media (max-width: 575px)': { fontSize: '0.75rem' } },
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
const differenceItems = [
  { title: 'Built for India', desc: 'Designed specifically for Indian statutory compliance — EPF, ESI, Professional Tax, LWF, TDS. Not a global product retrofitted for India.', icon: 'flag' },
  { title: 'Guided Onboarding', desc: 'Our team sets up, configures, and trains. You do not figure it out alone from documentation. Hands-on from day one.', icon: 'handshake' },
  { title: 'All-in-One Platform', desc: 'Employee management, payroll, attendance, leave, compliance, and mobile app in one place. No stitching together multiple tools.', icon: 'layers' },
  { title: 'Mobile-First ESS', desc: 'Employees manage attendance, leave, payslips, and expenses from their phone. Available on Android with GPS verification.', icon: 'smartphone' },
  { title: 'Multi-Branch Ready', desc: 'Manage workforce across locations with state-wise compliance, location-specific shifts, and branch-level reporting.', icon: 'branches' },
  { title: 'Actively Growing', desc: 'New modules and features shipping regularly. Performance management, recruitment, expense management — all on the roadmap.', icon: 'trending' },
]

const customerGetsItems = [
  { title: '24-Hour Setup', desc: 'Most organizations go live within a day of signing up.', icon: 'clock' },
  { title: 'Hands-On Training', desc: 'We train your HR team on every module they will use.', icon: 'users' },
  { title: 'Ongoing Support', desc: 'Dedicated support team, not just a helpdesk ticket system.', icon: 'headphones' },
  { title: '14-Day Free Trial', desc: 'Full access to every feature, no credit card required.', icon: 'gift' },
]

const stats = [
  { value: '10,000+', label: 'Employees Managed' },
  { value: '100+', label: 'Organizations' },
  { value: '99.9%', label: 'Uptime' },
  { value: '100%', label: 'Compliance Rate' },
]

const getIcon = (name) => {
  switch (name) {
    case 'flag': return <svg viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/></svg>
    case 'handshake': return <svg viewBox="0 0 24 24"><path d="M11 17l-5-5 2.5-2.5L11 12l5-5 2.5 2.5z"/><path d="M2 9l3-3 4 4"/><path d="M22 9l-3-3-4 4"/><path d="M14 17l3 3"/><path d="M7 17l-3 3"/></svg>
    case 'layers': return <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    case 'smartphone': return <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
    case 'branches': return <svg viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v3a6 6 0 006 6h3"/><path d="M6 9v9"/></svg>
    case 'trending': return <svg viewBox="0 0 24 24"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>
    case 'clock': return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    case 'users': return <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    case 'headphones': return <svg viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>
    case 'gift': return <svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 010-5C9 3 12 8 12 8s3-5 4.5-5a2.5 2.5 0 010 5"/></svg>
    default: return null
  }
}

export const WhySevaHR = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <HeroSection>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <HeroBadge><Sparkle /><span>Why SevaHR</span></HeroBadge>
          <HeroTitle>Why Indian Businesses <span>Choose SevaHR</span></HeroTitle>
          <HeroSub>
            A comprehensive HRMS built ground-up for the Indian regulatory environment,
            with hands-on onboarding and dedicated support.
          </HeroSub>
        </div>
      </HeroSection>

      {/* ── The SevaHR Difference ── */}
      <Section $bg="#fff">
        <div className="container">
          <div className="centerized">
            <LightBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"/></svg>
              <span>The SevaHR Difference</span>
            </LightBadge>
          </div>
          <Heading>What Sets Us <span>Apart</span></Heading>
          <SubText>Built from scratch for Indian businesses, not adapted from a global template.</SubText>
          <FeatureGrid>
            {differenceItems.map((item, i) => (
              <li key={i}>
                <FeatureCard>
                  <IconWrap>{getIcon(item.icon)}</IconWrap>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </FeatureCard>
              </li>
            ))}
          </FeatureGrid>
        </div>
      </Section>

      {/* ── What Our Customers Get ── */}
      <MidSection>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="centerized" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <LightBadge><Sparkle /><span>What Our Customers Get</span></LightBadge>
          </div>
          <Heading>From Signup to <span>Go-Live</span></Heading>
          <SubText>We do the heavy lifting so your HR team can focus on people, not software.</SubText>
          <LightGrid>
            {customerGetsItems.map((item, i) => (
              <LightCard key={i}>
                <LightIcon>{getIcon(item.icon)}</LightIcon>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </LightCard>
            ))}
          </LightGrid>

          {/* ── Stats ── */}
          <StatsRow>
            {stats.map((s, i) => (
              <StatItem key={i}>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </StatItem>
            ))}
          </StatsRow>
        </div>
      </MidSection>

      {/* ── CTA ── */}
      <DarkSection style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' }}>
        <Grid />
        <div className="container">
          <CtaWrap>
            <CtaTitle>Ready to See the <span>Difference</span>?</CtaTitle>
            <SubText style={{ color: 'rgba(255,255,255,0.8)' }}>
              Start your 14-day free trial today. Full access, no credit card, and our team will help you get set up.
            </SubText>
            <PrimaryBtn href="/contact">Start Free Trial</PrimaryBtn>
          </CtaWrap>
        </div>
      </DarkSection>
    </PageWrapper>
  )
}

export default WhySevaHR
