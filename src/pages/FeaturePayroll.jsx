import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div({ minHeight: '100vh', background: '#F8FAFC' })

/* -- Hero (light) -- */
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
  animation: `orbPR 8s ease-in-out ${$delay || '0s'} infinite`,
  '@keyframes orbPR': { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(1rem,-1rem) scale(1.05)' } },
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
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#spr)"/><defs><linearGradient id="spr" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#60A5FA"/><stop offset="1" stopColor="#A78BFA"/></linearGradient></defs></svg>
)

/* -- Light section shell -- */
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

/* -- Feature grid (light section cards) -- */
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

/* -- Dark section (used for CTA only) -- */
const DarkSection = styled.section({
  position: 'relative', overflow: 'hidden',
  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
  paddingBlock: '4rem', '@media (max-width: 575px)': { paddingBlock: '2rem' },
})
/* -- Light section for pain points & stats -- */
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
  '& p': { color: '#64748B', fontSize: '0.813rem', lineHeight: 1.6, margin: '0.5rem 0 0' },
  '@media (max-width: 575px)': { padding: '1rem' },
})
const GlassIcon = styled.div({
  width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', margin: '0 auto 0.75rem',
  background: 'linear-gradient(135deg, #EEF2FF, #FDF4FF)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  '& svg': { width: '1.25rem', height: '1.25rem', stroke: '#476FFF', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
})

/* -- Stats -- */
const StatsRow = styled.div({
  display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2rem',
  '@media (max-width: 575px)': { gap: '1.5rem' },
})
const StatItem = styled.div({
  textAlign: 'center', position: 'relative',
  '&:not(:last-child)::after': {
    content: '""', position: 'absolute', right: '-1rem', top: '10%', height: '80%', width: '1px',
    background: '#E2E8F0',
    '@media (max-width: 575px)': { display: 'none' },
  },
})
const StatNumber = styled.div({
  fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2,
  background: 'linear-gradient(90deg, #476FFF, #7B60FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
  '@media (max-width: 575px)': { fontSize: '1.75rem' },
})
const StatLabel = styled.div({ color: '#64748B', fontSize: '0.875rem', marginTop: '0.25rem', '@media (max-width: 575px)': { fontSize: '0.75rem' } })

/* -- CTA -- */
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

/* -- Data -- */
const painPoints = [
  { title: 'Manual Salary Calculations', desc: 'Spreadsheet-based payroll with manual formulas leads to frequent errors, delayed salaries, and frustrated employees every month.', icon: 'calculator' },
  { title: 'Missed Statutory Deadlines', desc: 'Keeping up with EPF, ESI, PT, and TDS filing deadlines across multiple states is a constant compliance risk.', icon: 'clock' },
  { title: 'Salary Transparency Issues', desc: 'Without clear payslip breakdowns, employees raise disputes and HR spends hours explaining deductions and components.', icon: 'eye-off' },
  { title: 'Complex Salary Structures', desc: 'Managing multi-component CTC breakdowns with varying rules per grade, location, and employment type overwhelms manual processes.', icon: 'puzzle' },
]

const capabilities = [
  { title: 'Multi-Component Salary Structures', desc: 'Configure unlimited salary components -- Basic, HRA, DA, Special Allowance, and custom heads per grade or location.', icon: 'sliders' },
  { title: 'Formula-Based Calculations', desc: 'Build custom salary formulas that auto-compute component values based on CTC, basic pay, or other derived inputs.', icon: 'cpu' },
  { title: 'Auto EPF/ESI/PT/LWF/TDS Deductions', desc: 'Statutory deductions calculated automatically based on latest government rules, slabs, and state-specific rates.', icon: 'shield' },
  { title: 'Payslip Generation', desc: 'Generate and distribute detailed, branded payslips to all employees with a single click after payroll finalization.', icon: 'file-text' },
  { title: 'Bank File Generation', desc: 'Export salary disbursement files in your bank\'s format for seamless bulk salary transfers every pay cycle.', icon: 'download' },
  { title: 'Bonus & Arrears Processing', desc: 'Process performance bonuses, festival advances, and salary arrears with proper tax treatment in any pay period.', icon: 'gift' },
  { title: 'Tax Declaration Management', desc: 'Employees declare investments under 80C, 80D, HRA, and other sections. HR verifies proofs for accurate TDS.', icon: 'file-check' },
  { title: 'Form 16 Generation', desc: 'Auto-generate Form 16 Part A and Part B for all employees at financial year end with zero manual effort.', icon: 'printer' },
  { title: 'Incentive & Commission Management', desc: 'Define variable pay structures tied to performance, sales targets, or custom KPIs with flexible payout schedules.', icon: 'target' },
]

const stats = [
  { number: 'Zero', label: 'Calculation errors' },
  { number: '100%', label: 'Statutory compliance' },
  { number: '3 Clicks', label: 'Run full payroll' },
  { number: 'Unlimited', label: 'Salary components' },
]

const getIcon = (name) => {
  switch (name) {
    case 'calculator': return <svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="16" y2="18"/></svg>
    case 'clock': return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    case 'eye-off': return <svg viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
    case 'puzzle': return <svg viewBox="0 0 24 24"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 01-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 10-3.214 3.214c.446.166.855.497.925.968a.979.979 0 01-.276.837l-1.61 1.61a2.404 2.404 0 01-1.705.707 2.402 2.402 0 01-1.704-.706l-1.568-1.568a1.026 1.026 0 00-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 11-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 00-.289-.877l-1.568-1.568A2.402 2.402 0 011.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 01.837-.276c.47.07.802.48.968.925a2.501 2.501 0 103.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 01.276-.837l1.61-1.61a2.404 2.404 0 011.705-.707c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 113.237 3.237c-.464.18-.894.527-.967 1.02z"/></svg>
    case 'sliders': return <svg viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
    case 'cpu': return <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
    case 'shield': return <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    case 'file-text': return <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
    case 'download': return <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
    case 'gift': return <svg viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>
    case 'file-check': return <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M9 15l2 2 4-4"/></svg>
    case 'printer': return <svg viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
    case 'target': return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    default: return null
  }
}

export const FeaturePayroll = () => {
  const sectionRef = useRef(null)
  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.querySelectorAll('.animate').forEach(el => el.classList.add('in-view')) }, { threshold: 0.2 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <PageWrapper>
      {/* -- Hero -- */}
      <HeroSection>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <DarkBadge><Sparkle /><span>Payroll</span></DarkBadge>
          <HeroTitle>Payroll Processing,<br /><span>Simplified</span></HeroTitle>
          <HeroSub>
            Run error-free payroll with auto-computed statutory deductions and multi-component salary structures.
          </HeroSub>
        </div>
      </HeroSection>

      {/* -- Pain Points (light) -- */}
      <LightDarkSection>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="centerized" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <DarkBadge><Sparkle /><span>The Problem</span></DarkBadge>
          </div>
          <Heading>Why Payroll Feels <span>Broken</span></Heading>
          <SubText>Common payroll pain points that cost you time, money, and employee trust.</SubText>
          <GlassGrid>
            {painPoints.map((p, i) => (
              <GlassCard key={i}>
                <GlassIcon>{getIcon(p.icon)}</GlassIcon>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </GlassCard>
            ))}
          </GlassGrid>
        </div>
      </LightDarkSection>

      {/* -- Capabilities (light) -- */}
      <Section $bg="#F8FAFC">
        <div className="container">
          <div className="centerized">
            <LightBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>
              <span>Capabilities</span>
            </LightBadge>
          </div>
          <Heading>Everything You Need to <span>Run Payroll</span></Heading>
          <SubText>From salary configuration to Form 16 -- a complete payroll engine.</SubText>
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

      {/* -- Stats (light) -- */}
      <LightDarkSection ref={sectionRef}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="centerized" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <DarkBadge><Sparkle /><span>By the Numbers</span></DarkBadge>
          </div>
          <Heading>Payroll That <span>Delivers</span></Heading>
          <SubText style={{ marginBottom: '2.5rem' }}>Measurable impact from automating your payroll operations.</SubText>
          <StatsRow>
            {stats.map((s, i) => (
              <StatItem key={i}>
                <StatNumber>{s.number}</StatNumber>
                <StatLabel>{s.label}</StatLabel>
              </StatItem>
            ))}
          </StatsRow>
        </div>
      </LightDarkSection>

      {/* -- CTA -- */}
      <DarkSection style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' }}>
        <Grid />
        <div className="container">
          <CtaWrap>
            <CtaTitle>Ready to Simplify Your <span>Payroll</span>?</CtaTitle>
            <SubText style={{ color: 'rgba(255,255,255,0.8)' }}>
              Automate salary calculations, statutory deductions, and payslip distribution with SEVA HR.
            </SubText>
            <PrimaryBtn href="/contact">Get Started</PrimaryBtn>
          </CtaWrap>
        </div>
      </DarkSection>
    </PageWrapper>
  )
}

export default FeaturePayroll
