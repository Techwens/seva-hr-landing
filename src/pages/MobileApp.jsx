import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div({ minHeight: '100vh', background: '#F8FAFC' })

/* ── Hero (dark) ── */
const HeroSection = styled.section({
  background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
  position: 'relative', overflow: 'hidden',
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
  background: 'rgba(255,255,255,0.08)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff',
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

/* ── Feature grid (matches Features.jsx cards) ── */
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

/* ── Section (security, steps — now light; CTA stays dark via inline style) ── */
const DarkSection = styled.section({
  paddingBlock: '4rem', background: '#F8FAFC',
  '@media (max-width: 575px)': { paddingBlock: '2rem' },
})
const GlassGrid = styled.div({
  display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem',
  '@media (max-width: 991px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '@media (max-width: 575px)': { gridTemplateColumns: '1fr', gap: '0.5rem' },
})
const GlassCard = styled.div({
  background: '#fff',
  border: '1px solid #E2E8F0', borderRadius: '1rem',
  padding: '1.5rem', textAlign: 'center', transition: 'all 0.3s ease',
  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  '&:hover': { boxShadow: '0 6px 20px rgba(0,0,0,0.08)', transform: 'translateY(-4px)' },
  '& h4': { color: '#1a1a2e', fontSize: '0.95rem', fontWeight: 600, margin: 0 },
  '@media (max-width: 575px)': { padding: '1rem' },
})
const GlassIcon = styled.div({
  width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', margin: '0 auto 0.75rem',
  background: 'linear-gradient(135deg, #EEF2FF, #FDF4FF)',
  border: '1px solid rgba(71,111,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center',
  '& svg': { width: '1.25rem', height: '1.25rem', stroke: '#476FFF', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
})

/* ── Steps (matches Getstarted) ── */
const StepsTrack = styled.div({
  display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '1rem', position: 'relative',
  '@media (max-width: 575px)': { flexDirection: 'column', alignItems: 'center', gap: '0.5rem' },
})
const StepCard = styled.div(({ $delay }) => ({
  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
  padding: '1.5rem', width: '14rem',
  background: '#fff', borderRadius: '1.5rem',
  border: '1px solid #E2E8F0', transition: 'all 0.4s ease',
  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  animation: `stepPulse 3s ease-in-out ${$delay || '0s'} infinite`,
  '@keyframes stepPulse': { '0%,100%': { boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }, '50%': { boxShadow: '0 4px 20px rgba(71,111,255,0.1)' } },
  '&:hover': { boxShadow: '0 6px 20px rgba(0,0,0,0.08)', transform: 'translateY(-0.5rem)' },
  '@media (max-width: 575px)': { width: '100%', maxWidth: '15rem', padding: '0.75rem', borderRadius: '0.75rem' },
}))
const StepNum = styled.div({
  width: '3.5rem', height: '3.5rem', borderRadius: '1rem',
  background: 'linear-gradient(135deg, #476FFF, #7B60FF)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontWeight: 800, fontSize: '1.25rem', color: '#fff', marginBottom: '1rem',
  boxShadow: '0 10px 20px rgba(71,111,255,0.3)',
  '@media (max-width: 575px)': { width: '2.5rem', height: '2.5rem', fontSize: '1rem', marginBottom: '0.5rem' },
})

/* ── CTA ── */
const CtaWrap = styled.div({ textAlign: 'center', position: 'relative', zIndex: 2 })
const CtaTitle = styled.h2({
  color: '#fff', marginBottom: '0.5rem',
  '& span': { background: 'linear-gradient(90deg, #476FFF, #7B60FF 50%, #FF6B6B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
})
const BtnGroup = styled.div({
  display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem',
  '@media (max-width: 575px)': { gap: '0.5rem' },
})
const PrimaryBtn = styled.a({
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '1rem 2.5rem', borderRadius: '3rem', border: 'none', background: '#fff',
  color: '#0F172A', fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
  cursor: 'pointer', transition: 'all 0.4s ease', boxShadow: '0 4px 20px rgba(255,255,255,0.2)',
  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 15px 40px rgba(255,255,255,0.3)' },
  '@media (max-width: 575px)': { fontSize: '0.813rem', padding: '0.75rem 1.5rem' },
})
const SecondaryBtn = styled.a({
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '1rem 2.5rem', borderRadius: '3rem', background: 'transparent',
  border: '2px solid rgba(255,255,255,0.3)', color: '#fff', fontWeight: 600, fontSize: '1rem',
  textDecoration: 'none', cursor: 'pointer', transition: 'all 0.4s ease',
  '&:hover': { borderColor: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.08)', transform: 'translateY(-3px)' },
  '@media (max-width: 575px)': { fontSize: '0.813rem', padding: '0.75rem 1.5rem' },
})

/* ── Data ── */
const features = [
  { title: 'GPS-Verified Attendance', desc: 'Check in and check out with GPS verification. Geofence-based auto-attendance when entering work locations.', icon: 'map-pin' },
  { title: 'Leave Management', desc: 'Apply for leave, view balances, track approvals in a few taps. Multiple leave types and half-day options.', icon: 'calendar' },
  { title: 'Instant Payslips', desc: 'View and download monthly payslips with complete earnings and deductions breakdown anytime.', icon: 'file-text' },
  { title: 'Expense Claims', desc: 'Submit reimbursement claims with photo receipts. Track approval status in real-time.', icon: 'receipt' },
  { title: 'Manager Approvals', desc: 'Approve or reject leave, expense claims, and loans with one tap. Delegation support when away.', icon: 'check-circle' },
  { title: 'Company Feed', desc: 'Stay updated with company announcements, birthdays, anniversaries, and team recognitions.', icon: 'bell' },
  { title: 'Document Access', desc: 'Upload and manage ID proofs, certificates, and tax forms — all securely stored.', icon: 'folder' },
  { title: 'Profile Management', desc: 'Update personal details, emergency contacts, family info, and nominees from the app.', icon: 'user' },
  { title: 'Push Notifications', desc: 'Real-time alerts for approvals, payslip availability, attendance reminders, and announcements.', icon: 'zap' },
]

const securityItems = [
  { title: 'Biometric Auth', icon: 'fingerprint' },
  { title: 'Passcode Lock', icon: 'lock' },
  { title: 'Encrypted Storage', icon: 'shield' },
  { title: 'Session Management', icon: 'refresh' },
]

const steps = [
  { num: '1', title: 'Account Activation', desc: 'Your employer activates your account and assigns your role' },
  { num: '2', title: 'Download & Log In', desc: 'Get the app from Google Play and set up biometric auth' },
  { num: '3', title: 'Start Managing', desc: 'Attendance, leave, payslips, expenses — all from your phone' },
]

const getIcon = (name) => {
  switch (name) {
    case 'map-pin': return <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
    case 'calendar': return <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
    case 'file-text': return <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
    case 'receipt': return <svg viewBox="0 0 24 24"><path d="M21 12V7H5a2 2 0 010-4h14v4"/><path d="M3 5v14a2 2 0 002 2h16v-5"/><path d="M18 12a2 2 0 100 4h4v-4h-4z"/></svg>
    case 'check-circle': return <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
    case 'bell': return <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
    case 'folder': return <svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
    case 'user': return <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    case 'zap': return <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z"/></svg>
    case 'fingerprint': return <svg viewBox="0 0 24 24"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 018 4"/><path d="M5 19.5C5.5 18 6 15 6 12c0-3.3 2.7-6 6-6s6 2.7 6 6c0 1-.1 2-.3 3"/><path d="M12 12v4"/></svg>
    case 'lock': return <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    case 'shield': return <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    case 'refresh': return <svg viewBox="0 0 24 24"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
    default: return null
  }
}

export const MobileApp = () => {
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
          <DarkBadge><Sparkle /><span>Mobile App</span></DarkBadge>
          <HeroTitle>Employee Self-Service<br />in <span>Your Pocket</span></HeroTitle>
          <HeroSub>
            Everything your employees need — attendance, leave, payslips, expenses — in one
            powerful mobile app. Available on Android, iOS coming soon.
          </HeroSub>
        </div>
      </HeroSection>

      {/* ── Why Mobile ── */}
      <Section $bg="#fff">
        <div className="container">
          <div className="centerized">
            <LightBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              <span>Why Mobile</span>
            </LightBadge>
          </div>
          <Heading>HR at Their <span>Fingertips</span></Heading>
          <SubText>
            Give your employees the freedom to manage their work life from anywhere.
            Reduce dependency on HR teams, eliminate paperwork, and keep everyone connected in real time.
          </SubText>
        </div>
      </Section>

      {/* ── Features ── */}
      <Section $bg="#F8FAFC">
        <div className="container">
          <div className="centerized">
            <LightBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>
              <span>Key Features</span>
            </LightBadge>
          </div>
          <Heading>Complete <span>Self-Service</span> Experience</Heading>
          <SubText>Everything an employee or manager needs, designed for mobile.</SubText>
          <FeatureGrid>
            {features.map((f, i) => (
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

      {/* ── Security ── */}
      <DarkSection>
        <div className="container">
          <div className="centerized" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <DarkBadge><Sparkle /><span>Built for Security</span></DarkBadge>
          </div>
          <Heading>Your Data, <span>Fully Protected</span></Heading>
          <SubText>Multiple layers of security at every level of the app.</SubText>
          <GlassGrid>
            {securityItems.map((s, i) => (
              <GlassCard key={i}>
                <GlassIcon>{getIcon(s.icon)}</GlassIcon>
                <h4>{s.title}</h4>
              </GlassCard>
            ))}
          </GlassGrid>
        </div>
      </DarkSection>

      {/* ── How It Works (steps) ── */}
      <DarkSection ref={sectionRef} style={{ background: '#fff' }}>
        <div className="container">
          <div className="centerized" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <DarkBadge><Sparkle /><span>How It Works</span></DarkBadge>
          </div>
          <Heading>Three Simple <span>Steps</span></Heading>
          <SubText style={{ marginBottom: '2.5rem' }}>Getting started with the SEVA HR mobile app.</SubText>
          <StepsTrack>
            {steps.map((s, i) => (
              <StepCard key={i} $delay={`${i * 0.5}s`}>
                <StepNum>{s.num}</StepNum>
                <h4 style={{ color: '#1a1a2e', fontWeight: 700, marginBottom: '0.25rem' }}>{s.title}</h4>
                <p style={{ color: '#64748B', fontSize: '0.875rem', margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
              </StepCard>
            ))}
          </StepsTrack>
        </div>
      </DarkSection>

      {/* ── CTA (dark) ── */}
      <DarkSection style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' }}>
        <Grid />
        <div className="container">
          <CtaWrap>
            <CtaTitle>Get the <span>SEVA HR</span> App</CtaTitle>
            <SubText style={{ color: 'rgba(255,255,255,0.8)' }}>
              Available on Google Play. Empower your workforce with self-service HR on the go.
            </SubText>
            <BtnGroup>
              <PrimaryBtn href="/contact">Get the App</PrimaryBtn>
              <SecondaryBtn href="/contact">Book a Demo</SecondaryBtn>
            </BtnGroup>
          </CtaWrap>
        </div>
      </DarkSection>
    </PageWrapper>
  )
}

export default MobileApp
