import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div({
  minHeight: '100vh',
  background: '#F8FAFC',
})

/* ── Hero (dark) ── */
const HeroSection = styled.section({
  background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
  position: 'relative', overflow: 'hidden',
  paddingBlock: '8rem 5rem',
  textAlign: 'center',
  '@media (max-width: 575px)': { paddingBlock: '6rem 3rem' },
})
const HeroOrb = styled.div(({ $top, $left, $right, $size, $color, $delay }) => ({
  position: 'absolute', top: $top || 'auto', left: $left || 'auto', right: $right || 'auto',
  width: $size || '20rem', height: $size || '20rem', borderRadius: '50%',
  background: $color || 'radial-gradient(circle, rgba(71,111,255,0.15) 0%, transparent 70%)',
  filter: 'blur(3rem)', pointerEvents: 'none',
  animation: `heroFloat 8s ease-in-out ${$delay || '0s'} infinite`,
  '@keyframes heroFloat': {
    '0%, 100%': { transform: 'translate(0,0) scale(1)' },
    '50%': { transform: 'translate(1rem,-1rem) scale(1.05)' },
  },
}))
const GridOverlay = styled.div({
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
  backgroundSize: '4rem 4rem',
})

const Badge = styled.h3({
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.625rem 1.25rem', borderRadius: '3rem',
  background: 'rgba(255,255,255,0.08)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff',
  fontSize: '0.875rem',
  marginBottom: '1rem',
  '@media (max-width: 575px)': { padding: '0.3rem 0.6rem', fontSize: '0.688rem', gap: '0.25rem' },
  '& span': {
    fontSize: '0.875rem', fontWeight: 600,
    '@media (max-width: 575px)': { fontSize: '0.688rem' },
  },
})

const HeroTitle = styled.h1({
  color: '#fff', marginBottom: '1rem',
  '& span': {
    background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    backgroundClip: 'text', color: 'transparent',
  },
})
const HeroSubtitle = styled.p({
  color: 'rgba(255,255,255,0.85)', maxWidth: '40rem', margin: '0 auto', lineHeight: 1.7,
})

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#sg1)" />
    <defs><linearGradient id="sg1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="#60A5FA" /><stop offset="1" stopColor="#A78BFA" />
    </linearGradient></defs>
  </svg>
)

/* ── Company (light, like Features) ── */
const Section = styled.section(({ $bg }) => ({
  paddingBlock: '4rem',
  background: $bg || '#F8FAFC',
  '@media (max-width: 575px)': { paddingBlock: '2rem' },
  '& .centerized': { display: 'flex', justifyContent: 'center' },
}))

const SectionBadge = styled.h3({
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.625rem 1.25rem', borderRadius: '3rem',
  background: 'linear-gradient(135deg, #EEF2FF 0%, #FDF4FF 100%)',
  border: '1px solid rgba(71,111,255,0.15)',
  boxShadow: '0 4px 15px rgba(71,111,255,0.08)',
  '@media (max-width: 575px)': { padding: '0.2rem 0.5rem', gap: '0.2rem' },
  '& span': {
    fontSize: '0.875rem', fontWeight: 600,
    background: 'linear-gradient(90deg, #476FFF 0%, #7B60FF 100%)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    '@media (max-width: 575px)': { fontSize: '0.688rem' },
  },
})

const SectionHeading = styled.h2({
  textAlign: 'center', marginBottom: '0.5rem',
  '& span': {
    background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    backgroundClip: 'text', color: 'transparent',
  },
})
const SectionSub = styled.p({
  color: '#64748B', textAlign: 'center', maxWidth: '38rem', margin: '0 auto 2rem',
  '@media (max-width: 575px)': { fontSize: '0.875rem' },
})

const CompanyText = styled.div({
  maxWidth: '44rem', margin: '0 auto', textAlign: 'center',
  '& p': { lineHeight: 1.8, color: '#333', marginBottom: '1rem' },
  '& strong': { color: '#1a1a2e', fontWeight: 600 },
})

/* ── Mission / Vision (light section) ── */
const DarkSection = styled.section({
  paddingBlock: '4rem',
  background: '#F8FAFC',
  '@media (max-width: 575px)': { paddingBlock: '2rem' },
})
const MvGrid = styled.div({
  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', position: 'relative', zIndex: 1,
  '@media (max-width: 991px)': { gridTemplateColumns: '1fr' },
})
const GlassCard = styled.div({
  background: '#fff',
  border: '1px solid #E2E8F0', borderRadius: '1rem',
  padding: '2.5rem 2rem', transition: 'all 0.3s ease',
  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  '&:hover': { boxShadow: '0 6px 20px rgba(0,0,0,0.08)', transform: 'translateY(-4px)' },
  '& h3': { color: '#1a1a2e', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' },
  '& p': { color: '#64748B', lineHeight: 1.75, margin: 0 },
  '@media (max-width: 575px)': { padding: '1.5rem 1.25rem' },
})

/* ── What We Do (styled like Powerfullplatform cards) ── */
const CardGrid = styled.div({
  display: 'flex', flexWrap: 'wrap', gap: '1rem',
  '& > div': {
    width: 'calc(50% - 0.5rem)', padding: '0.063rem', position: 'relative',
    borderRadius: '1.188rem', overflow: 'hidden', padding: '1.875rem 1.563rem',
    '&:after': {
      content: "''", position: 'absolute', height: '100%', width: '100%', left: 0, top: 0,
      background: 'linear-gradient(90deg, #FFD7BC 0%, #D9D1FF 106.8%)', zIndex: 0,
      transition: 'all 0.4s ease',
    },
    '&:before': {
      content: "''", position: 'absolute', height: 'calc(100% - 0.125rem)', width: 'calc(100% - 0.125rem)',
      left: '1px', top: '1px', background: '#fff', zIndex: 1, borderRadius: '1.125rem',
    },
    '&:hover::after': { background: 'linear-gradient(140.97deg, #476cfd0a 3.17%, #4600b617 72.79%)' },
    '&:hover::before': { display: 'none' },
    '&:hover p': { transform: 'translateY(-0.375rem)' },
    '@media (max-width: 991px)': { width: 'calc(50% - 0.5rem)', padding: '1rem 0.875rem' },
    '@media (max-width: 575px)': { width: '100%', borderRadius: '0.75rem', padding: '0.875rem 0.75rem' },
  },
  '& h4': { position: 'relative', zIndex: 3, fontWeight: 700, marginBottom: '0.5rem', transition: 'all 0.4s ease' },
  '& p': { position: 'relative', zIndex: 3, color: '#64748B', textAlign: 'start', lineHeight: 1.7, margin: 0, transition: 'all 0.4s ease',
    '@media (max-width: 575px)': { fontSize: '0.813rem' },
  },
})

const CardIcon = styled.div({
  position: 'relative', zIndex: 3, display: 'flex', gap: '0.5rem', marginBottom: '1.25rem',
  '@media (max-width: 575px)': { marginBottom: '0.5rem' },
  '& span': {
    height: '2.5rem', width: '2.5rem', display: 'flex', alignItems: 'center', flex: '0 0 2.5rem',
    '@media (max-width: 575px)': { height: '1.5rem', width: '1.5rem', flex: '0 0 1.5rem' },
    '& svg': { height: '100%', width: '100%' },
  },
})

/* ── Stats (matches Organizations) ── */
const StatRow = styled.div({
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap',
  '@media (max-width: 575px)': { flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' },
})
const StatItem = styled.div({
  textAlign: 'center',
  '@media (max-width: 575px)': { textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem' },
})
const StatValue = styled.div({
  fontSize: '2.25rem', fontWeight: 800, lineHeight: 1.1,
  background: 'linear-gradient(90deg, #476FFF 0%, #7B60FF 100%)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
  '@media (max-width: 575px)': { fontSize: '1.5rem' },
})
const StatLabel = styled.p({ margin: 0, fontSize: '0.875rem', color: '#64748B', fontWeight: 500, marginTop: '0.25rem' })
const Divider = styled.div({
  width: '1px', height: '3rem',
  background: 'linear-gradient(180deg, transparent, #E2E8F0, transparent)',
  '@media (max-width: 575px)': { display: 'none' },
})

/* ── Values (white cards) ── */
const ValuesGrid = styled.div({
  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', position: 'relative', zIndex: 1,
  '@media (max-width: 767px)': { gridTemplateColumns: '1fr' },
})
const ValueCard = styled.div({
  padding: '1.5rem', borderRadius: '1rem', transition: 'all 0.3s ease', cursor: 'default',
  display: 'flex', alignItems: 'flex-start', gap: '1rem',
  background: '#fff',
  border: '1px solid #E2E8F0',
  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  '&:hover': { boxShadow: '0 6px 20px rgba(0,0,0,0.08)', transform: 'translateY(-4px)' },
  '& h4': { fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.25rem' },
  '& p': { fontSize: '0.875rem', fontWeight: 500, color: '#64748B', lineHeight: 1.6, margin: 0 },
  '@media (max-width: 575px)': { padding: '1rem 0.75rem' },
})
const ValueIcon = styled.div({
  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  height: '2.5rem', width: '2.5rem', borderRadius: '0.75rem',
  background: 'linear-gradient(135deg, #EEF2FF, #FDF4FF)',
  border: '1px solid rgba(71,111,255,0.15)',
  '@media (max-width: 575px)': { height: '2rem', width: '2rem' },
  '& svg': { width: '1.25rem', height: '1.25rem', stroke: '#476FFF', fill: 'none', strokeWidth: 2 },
})

/* ── CTA (gradient, matches site style) ── */
const CtaSection = styled.section({
  position: 'relative', overflow: 'hidden',
  background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
  paddingBlock: '4rem', textAlign: 'center',
  '@media (max-width: 575px)': { paddingBlock: '2rem' },
})
const CtaTitle = styled.h2({
  color: '#fff', marginBottom: '0.5rem',
  '& span': {
    background: 'linear-gradient(90deg, #476FFF 0%, #7B60FF 50%, #FF6B6B 100%)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
  },
})
const CtaButton = styled.a({
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
  padding: '1rem 2.5rem', borderRadius: '3rem', border: 'none', background: '#fff',
  color: '#0F172A', fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
  cursor: 'pointer', transition: 'all 0.4s ease',
  boxShadow: '0 4px 20px rgba(255,255,255,0.2)',
  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 15px 40px rgba(255,255,255,0.3)' },
  '@media (max-width: 575px)': { fontSize: '0.813rem', padding: '0.75rem 1.5rem' },
})

/* ── Contact (light) ── */
const ContactGrid = styled.div({
  display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap',
})
const ContactItem = styled.div({
  background: '#fff', borderRadius: '1rem', padding: '1.5rem 2rem',
  boxShadow: '0 1px 3px rgba(0,0,0,0.08)', textAlign: 'center', width: '15rem',
  transition: 'all 0.3s ease',
  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' },
  '& h4': { fontWeight: 700, color: '#1a1a2e', marginBottom: '0.25rem' },
  '& p': { color: '#64748B', fontSize: '0.875rem', margin: 0 },
  '& a': { color: '#476FFF', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { textDecoration: 'underline' } },
})

/* ── Data ── */
const whatWeDo = [
  { title: 'Workforce Management', desc: 'Complete employee lifecycle from onboarding to offboarding. Digital document collection, centralized records, org hierarchy, and position tracking.', icon: 'users' },
  { title: 'Payroll & Compliance', desc: 'Multi-component payroll with formula-based calculations. PF, ESI, Professional Tax, LWF, and TDS auto-computed and audit-ready.', icon: 'wallet' },
  { title: 'Attendance & Shifts', desc: 'GPS-verified mobile attendance, geofencing, multi-shift scheduling, overtime auto-calculation, and real-time workforce visibility.', icon: 'clock' },
  { title: 'Employee Self-Service', desc: 'Mobile app for employees to mark attendance, apply for leave, view payslips, submit expenses, and manage approvals on the go.', icon: 'phone' },
]

const values = [
  { title: 'Compliance First', desc: 'Every feature is built with Indian labor law compliance at its core. PF, ESI, Professional Tax, LWF — all calculated accurately.', icon: 'shield' },
  { title: 'Guided Onboarding', desc: 'Our team configures the platform for you, migrates your data, and provides hands-on training so your HR team is productive from day one.', icon: 'rocket' },
  { title: 'Security', desc: 'AES-256 encryption, multi-tenant data isolation, and secure authentication. Your employee data is protected at every layer.', icon: 'lock' },
  { title: 'Customer Success', desc: 'Dedicated support with personalized onboarding. We work with you until your organization is fully up and running.', icon: 'heart' },
]

const getIcon = (name) => {
  const props = { viewBox: '0 0 24 24', fill: 'none', stroke: '#476FFF', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'users': return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
    case 'wallet': return <svg {...props}><path d="M21 12V7H5a2 2 0 010-4h14v4" /><path d="M3 5v14a2 2 0 002 2h16v-5" /><path d="M18 12a2 2 0 100 4h4v-4h-4z" /></svg>
    case 'clock': return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
    case 'phone': return <svg {...props}><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
    case 'shield': return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    case 'rocket': return <svg {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
    case 'lock': return <svg {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
    case 'heart': return <svg {...props}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
    default: return null
  }
}

export const About = () => {
  const whatWeDoRef = useRef(null)
  const valuesRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.querySelectorAll('.animate').forEach(el => el.classList.add('in-view'))
      },
      { threshold: 0.2 }
    )
    if (whatWeDoRef.current) observer.observe(whatWeDoRef.current)
    if (valuesRef.current) observer.observe(valuesRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <HeroSection>
        <HeroOrb $top="-10%" $left="-5%" $size="30rem" $delay="0s" />
        <HeroOrb $top="30%" $right="-8%" $size="22rem" $color="radial-gradient(circle, rgba(123,96,255,0.12) 0%, transparent 70%)" $delay="2s" />
        <GridOverlay />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Badge><SparkleIcon /><span>About Seva HR</span></Badge>
          <HeroTitle>Building HR Management<br />for <span>Indian Businesses</span></HeroTitle>
          <HeroSubtitle>
            SEVA HR is built by Techwens Software Private Limited — a software company based in
            Howrah, West Bengal, India. We are on a mission to simplify complex HR operations
            for businesses of all sizes.
          </HeroSubtitle>
        </div>
      </HeroSection>

      {/* ── Company ── */}
      <Section $bg="#fff">
        <div className="container">
          <div className="centerized">
            <SectionBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0V21" />
              </svg>
              <span>Our Story</span>
            </SectionBadge>
          </div>
          <SectionHeading>From Howrah to <span>Across India</span></SectionHeading>
          <CompanyText>
            <p>
              We understand the unique challenges of managing a workforce in India — from multi-state
              statutory compliance to complex shift scheduling across multiple branches. SEVA HR is
              designed ground-up for the Indian regulatory environment.
            </p>
            <p>
              From IT companies and startups to manufacturing, healthcare, retail, and education —
              we help organizations manage their workforce efficiently so they can focus on what
              matters most: their people.
            </p>
          </CompanyText>
        </div>
      </Section>

      {/* ── Mission / Vision ── */}
      <DarkSection>
        <div className="container">
          <MvGrid>
            <GlassCard>
              <h3>Our Mission</h3>
              <p>To make comprehensive HR management accessible, compliant, and effortless for every Indian business — regardless of size or industry.</p>
            </GlassCard>
            <GlassCard>
              <h3>Our Vision</h3>
              <p>To become India's most trusted HRMS platform — known for compliance accuracy, operational reliability, and customer success.</p>
            </GlassCard>
          </MvGrid>
        </div>
      </DarkSection>

      {/* ── What We Do ── */}
      <Section $bg="#F8FAFC" ref={whatWeDoRef}>
        <div className="container">
          <div className="centerized">
            <SectionBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span>What We Do</span>
            </SectionBadge>
          </div>
          <SectionHeading>Everything Your HR <span>Team Needs</span></SectionHeading>
          <SectionSub>Core capabilities that power your workforce management today — with new modules shipping regularly.</SectionSub>
          <CardGrid>
            {whatWeDo.map((item, i) => (
              <div key={i}>
                <CardIcon><span>{getIcon(item.icon)}</span><h4>{item.title}</h4></CardIcon>
                <p>{item.desc}</p>
              </div>
            ))}
          </CardGrid>
        </div>
      </Section>

      {/* ── Numbers ── */}
      <Section $bg="#fff">
        <div className="container">
          <StatRow>
            <StatItem><StatValue>10,000+</StatValue><StatLabel>Employees Managed</StatLabel></StatItem>
            <Divider />
            <StatItem><StatValue>100+</StatValue><StatLabel>Organizations</StatLabel></StatItem>
            <Divider />
            <StatItem><StatValue>99.9%</StatValue><StatLabel>Uptime</StatLabel></StatItem>
            <Divider />
            <StatItem><StatValue>100%</StatValue><StatLabel>Compliance Rate</StatLabel></StatItem>
          </StatRow>
        </div>
      </Section>

      {/* ── Values ── */}
      <DarkSection ref={valuesRef} style={{ background: '#fff' }}>
        <div className="container">
          <div className="centerized" style={{ justifyContent: 'center', display: 'flex', marginBottom: '0.5rem' }}>
            <Badge><SparkleIcon /><span>Our Values</span></Badge>
          </div>
          <SectionHeading>What Drives <span>SEVA HR</span></SectionHeading>
          <SectionSub>The principles behind every feature we build.</SectionSub>
          <ValuesGrid>
            {values.map((item, i) => (
              <ValueCard key={i}>
                <ValueIcon>{getIcon(item.icon)}</ValueIcon>
                <div><h4>{item.title}</h4><p>{item.desc}</p></div>
              </ValueCard>
            ))}
          </ValuesGrid>
        </div>
      </DarkSection>

      {/* ── Contact ── */}
      <Section $bg="#F8FAFC">
        <div className="container">
          <div className="centerized">
            <SectionBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>Get in Touch</span>
            </SectionBadge>
          </div>
          <SectionHeading>Reach <span>Out to Us</span></SectionHeading>
          <SectionSub>We would love to hear from you.</SectionSub>
          <ContactGrid>
            <ContactItem>
              <h4>Email</h4>
              <a href="mailto:hello@sevahr.com">hello@sevahr.com</a>
            </ContactItem>
            <ContactItem>
              <h4>Phone</h4>
              <a href="tel:+919477047816">+91-94770-47816</a>
            </ContactItem>
            <ContactItem>
              <h4>Office</h4>
              <p>33/25/1 Belgachia Road, Liluah</p>
              <p>Howrah - 711204, WB, India</p>
            </ContactItem>
          </ContactGrid>
        </div>
      </Section>

      {/* ── CTA ── */}
      <CtaSection>
        <GridOverlay />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <CtaTitle>Ready to <span>Transform</span> Your HR?</CtaTitle>
          <SectionSub style={{ color: 'rgba(255,255,255,0.8)' }}>
            See how SEVA HR can streamline your workforce management, ensure compliance, and empower your employees.
          </SectionSub>
          <CtaButton href="/contact">Contact Us</CtaButton>
        </div>
      </CtaSection>
    </PageWrapper>
  )
}

export default About
