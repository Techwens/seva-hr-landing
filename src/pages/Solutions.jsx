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

/* ── Industry grid (light cards) ── */
const IndustryGrid = styled.ul({
  listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
  '@media (max-width: 575px)': { gap: '0.5rem' },
  '& li': {
    width: 'calc(33.333% - 0.84rem)',
    '@media (max-width: 991px)': { width: 'calc(50% - 0.625rem)' },
    '@media (max-width: 575px)': { width: '100%' },
  },
})
const IndustryCard = styled.div({
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
const industries = [
  { title: 'IT & Software Services', desc: 'Remote and hybrid attendance tracking, project-based workforce management, and CTC-heavy salary structures with complex component breakdowns.', icon: 'code' },
  { title: 'Manufacturing', desc: 'Multi-shift management, overtime tracking, factory floor attendance with biometric integration, and labor law compliance across states.', icon: 'factory' },
  { title: 'Healthcare', desc: '24/7 shift rotation scheduling, credential and license tracking, and specialized compliance requirements for medical staff.', icon: 'heart-pulse' },
  { title: 'Retail & E-Commerce', desc: 'Multi-location workforce management, handling high employee turnover, flexible scheduling, and part-time staff tracking.', icon: 'store' },
  { title: 'Education', desc: 'Academic calendar integration, department-based hierarchy management, part-time and contractual staff handling with varied pay cycles.', icon: 'graduation' },
  { title: 'Logistics & Warehousing', desc: 'GPS-based attendance for field workers and drivers, multi-branch tracking across locations, and overtime management for warehouse staff.', icon: 'truck' },
  { title: 'Hospitality', desc: 'Seasonal workforce onboarding, tip and service charge management, varied shift patterns across front-of-house and back-of-house teams.', icon: 'building' },
  { title: 'Professional Services', desc: 'Consultant and contractor management, project-based billing alignment, flexible leave policies, and multi-entity payroll.', icon: 'briefcase' },
]

const everyIndustryItems = [
  { title: 'Multi-Branch Support', desc: 'Manage employees across offices, factories, stores, and remote locations from a single dashboard.', icon: 'branches' },
  { title: 'State-Wise Compliance', desc: 'Automatic EPF, ESI, Professional Tax, and LWF calculations based on each branch location.', icon: 'shield' },
  { title: 'Mobile ESS App', desc: 'Attendance, leave, payslips, and expenses from the Android app for every employee.', icon: 'smartphone' },
  { title: 'Dedicated Onboarding', desc: 'Our team configures your account, migrates data, and trains your HR team hands-on.', icon: 'users' },
]

const getIcon = (name) => {
  switch (name) {
    case 'code': return <svg viewBox="0 0 24 24"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
    case 'factory': return <svg viewBox="0 0 24 24"><path d="M2 20V8l4 4V8l4 4V8l4 4h8v8H2z"/><path d="M17 8V2h4v6"/></svg>
    case 'heart-pulse': return <svg viewBox="0 0 24 24"><path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1112 6.006a5 5 0 017.5 6.572z"/><path d="M3 12h4l2-4 4 8 2-4h6"/></svg>
    case 'store': return <svg viewBox="0 0 24 24"><path d="M3 9l1-4h16l1 4"/><path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9"/><path d="M9 21V13h6v8"/><path d="M3 9h18"/></svg>
    case 'graduation': return <svg viewBox="0 0 24 24"><path d="M22 10l-10-5L2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/><path d="M22 10v6"/></svg>
    case 'truck': return <svg viewBox="0 0 24 24"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    case 'building': return <svg viewBox="0 0 24 24"><path d="M3 21V3h18v18H3z"/><path d="M9 21v-6h6v6"/><path d="M7 7h2M7 11h2M7 15h2M15 7h2M15 11h2"/></svg>
    case 'briefcase': return <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
    case 'branches': return <svg viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v3a6 6 0 006 6h3"/><path d="M6 9v9"/></svg>
    case 'shield': return <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    case 'smartphone': return <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
    case 'users': return <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    default: return null
  }
}

export const Solutions = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <HeroSection>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <HeroBadge><Sparkle /><span>Solutions</span></HeroBadge>
          <HeroTitle>Built for <span>Every Industry</span></HeroTitle>
          <HeroSub>
            SevaHR adapts to the unique HR challenges of your industry — from compliance
            requirements to workforce patterns.
          </HeroSub>
        </div>
      </HeroSection>

      {/* ── Industry Cards ── */}
      <Section $bg="#fff">
        <div className="container">
          <div className="centerized">
            <LightBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/></svg>
              <span>Industry Solutions</span>
            </LightBadge>
          </div>
          <Heading>One Platform, <span>Every Workforce</span></Heading>
          <SubText>Whether you run a software company or a manufacturing plant, SevaHR handles the HR complexity so you can focus on growth.</SubText>
          <IndustryGrid>
            {industries.map((ind, i) => (
              <li key={i}>
                <IndustryCard>
                  <IconWrap>{getIcon(ind.icon)}</IconWrap>
                  <h4>{ind.title}</h4>
                  <p>{ind.desc}</p>
                </IndustryCard>
              </li>
            ))}
          </IndustryGrid>
        </div>
      </Section>

      {/* ── What Every Industry Gets ── */}
      <MidSection>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="centerized" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <LightBadge><Sparkle /><span>What Every Industry Gets</span></LightBadge>
          </div>
          <Heading>Core Capabilities <span>Across Industries</span></Heading>
          <SubText>Regardless of your sector, every SevaHR customer gets these built-in advantages.</SubText>
          <LightGrid>
            {everyIndustryItems.map((item, i) => (
              <LightCard key={i}>
                <LightIcon>{getIcon(item.icon)}</LightIcon>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </LightCard>
            ))}
          </LightGrid>
        </div>
      </MidSection>

      {/* ── CTA ── */}
      <DarkSection style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' }}>
        <Grid />
        <div className="container">
          <CtaWrap>
            <CtaTitle>See How SevaHR Fits <span>Your Industry</span></CtaTitle>
            <SubText style={{ color: 'rgba(255,255,255,0.8)' }}>
              Tell us about your workforce and we will show you a tailored walkthrough of SevaHR for your industry.
            </SubText>
            <PrimaryBtn href="/contact">Talk to Our Team</PrimaryBtn>
          </CtaWrap>
        </div>
      </DarkSection>
    </PageWrapper>
  )
}

export default Solutions
