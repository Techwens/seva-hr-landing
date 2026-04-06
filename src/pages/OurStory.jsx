import { useEffect } from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div({ minHeight: '100vh', background: '#F8FAFC' })

/* -- Hero (dark) -- */
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
const HeroBadge = styled.h3({
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

/* -- Prose block for story sections -- */
const Prose = styled.div({
  maxWidth: '42rem', margin: '0 auto', textAlign: 'center',
  '& p': { color: '#64748B', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 1rem',
    '@media (max-width: 575px)': { fontSize: '0.875rem' },
  },
})
const DarkProse = styled.div({
  maxWidth: '42rem', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2,
  '& p': { color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 1rem',
    '@media (max-width: 575px)': { fontSize: '0.875rem' },
  },
})

/* -- Stats row -- */
const StatsRow = styled.div({
  display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', marginTop: '1rem',
  '@media (max-width: 575px)': { gap: '1.5rem' },
})
const StatItem = styled.div({
  textAlign: 'center',
  '& h3': {
    fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.25rem',
    background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent',
    '@media (max-width: 575px)': { fontSize: '1.75rem' },
  },
  '& p': { color: '#64748B', fontSize: '0.875rem', fontWeight: 600, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' },
})

/* -- Mid sections (light) -- */
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
  padding: '1.5rem', transition: 'all 0.3s ease',
  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  '&:hover': { boxShadow: '0 6px 20px rgba(0,0,0,0.08)', transform: 'translateY(-4px)' },
  '& h4': { color: '#1a1a2e', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.5rem' },
  '& p': { color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 },
  '@media (max-width: 575px)': { padding: '1rem' },
})
const LightIcon = styled.div({
  width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', marginBottom: '0.75rem',
  background: 'linear-gradient(135deg, #EEF2FF, #FDF4FF)',
  border: '1px solid rgba(71,111,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center',
  '& svg': { width: '1.25rem', height: '1.25rem', stroke: '#476FFF', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
})
/* -- Dark CTA section -- */
const DarkSection = styled.section({
  position: 'relative', overflow: 'hidden',
  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
  paddingBlock: '4rem', '@media (max-width: 575px)': { paddingBlock: '2rem' },
})

/* -- Feature cards (light bg) -- */
const CardGrid = styled.ul({
  listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
  '@media (max-width: 575px)': { gap: '0.5rem' },
  '& li': {
    width: 'calc(25% - 0.94rem)',
    '@media (max-width: 991px)': { width: 'calc(50% - 0.625rem)' },
    '@media (max-width: 575px)': { width: '100%' },
  },
})
const Card = styled.div({
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
const roadmapItems = [
  { title: 'Performance Management', desc: 'OKR/KRA frameworks, 360 feedback, appraisal workflows', icon: 'target' },
  { title: 'Recruitment & ATS', desc: 'Job postings, applicant tracking, AI resume parsing', icon: 'search' },
  { title: 'Expense Management', desc: 'Policy-based claims, receipt uploads, approval workflows', icon: 'receipt' },
  { title: 'SevaAttendance', desc: 'Facial recognition kiosk for touchless office attendance', icon: 'scan' },
]

const values = [
  { title: 'Compliance First', desc: 'Every feature is built with Indian labor laws and statutory requirements at the core.', icon: 'shield' },
  { title: 'Guided Onboarding', desc: 'We do not just hand you software. Our team walks you through setup, migration, and training.', icon: 'compass' },
  { title: 'Security', desc: 'Enterprise-grade encryption, role-based access, and audit trails for every action.', icon: 'lock' },
  { title: 'Customer Success', desc: 'Dedicated support and regular check-ins to ensure the platform works for your team.', icon: 'headphones' },
]

const stats = [
  { value: '10,000+', label: 'Employees' },
  { value: '100+', label: 'Organizations' },
  { value: '99.9%', label: 'Uptime' },
  { value: 'And', label: 'Growing' },
]

const getIcon = (name) => {
  switch (name) {
    case 'target': return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    case 'search': return <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    case 'receipt': return <svg viewBox="0 0 24 24"><path d="M21 12V7H5a2 2 0 010-4h14v4"/><path d="M3 5v14a2 2 0 002 2h16v-5"/><path d="M18 12a2 2 0 100 4h4v-4h-4z"/></svg>
    case 'scan': return <svg viewBox="0 0 24 24"><path d="M2 7l1-4h4"/><path d="M17 2l4 1v4"/><path d="M22 17l-1 4h-4"/><path d="M7 22l-4-1v-4"/><rect x="7" y="7" width="10" height="10" rx="1"/></svg>
    case 'shield': return <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    case 'compass': return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
    case 'lock': return <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    case 'headphones': return <svg viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>
    default: return null
  }
}

export const OurStory = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <PageWrapper>
      {/* -- Hero -- */}
      <HeroSection>
        <Orb $top="-10%" $left="-5%" $size="30rem" $delay="0s" />
        <Orb $top="30%" $right="-8%" $size="22rem" $color="radial-gradient(circle, rgba(123,96,255,0.12) 0%, transparent 70%)" $delay="2s" />
        <Grid />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <HeroBadge><Sparkle /><span>Our Story</span></HeroBadge>
          <HeroTitle>The Story Behind <span>SEVA HR</span></HeroTitle>
          <HeroSub>
            How a simple frustration with HR compliance in India led to building a platform that now manages 10,000+ employees.
          </HeroSub>
        </div>
      </HeroSection>

      {/* -- The Problem -- */}
      <MidSection>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem', position: 'relative', zIndex: 2 }}>
            <LightBadge><Sparkle /><span>The Problem</span></LightBadge>
          </div>
          <Prose>
            <p>
              Indian businesses face unique HR challenges. Multi-state statutory compliance, complex salary structures, attendance fraud, and manual processes that eat into productivity. Most HRMS platforms are built for global markets and retrofitted for India — they miss the nuances of EPF calculations, state-wise Professional Tax slabs, and the reality of managing a diverse workforce.
            </p>
          </Prose>
        </div>
      </MidSection>

      {/* -- The Beginning (light) -- */}
      <Section $bg="#fff">
        <div className="container">
          <div className="centerized">
            <LightBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
              <span>The Beginning</span>
            </LightBadge>
          </div>
          <Heading>Built in India, <span>for India</span></Heading>
          <Prose>
            <p>
              SEVA HR was born in Howrah, West Bengal. Founded by Koushik Sen, we started with a simple goal: build an HRMS that truly understands Indian businesses. Not a global product with an India checkbox — but a platform designed from day one for Indian labor laws, Indian statutory compliance, and the way Indian companies actually operate.
            </p>
          </Prose>
        </div>
      </Section>

      {/* -- Where We Are Today (light, stats) -- */}
      <Section $bg="#F8FAFC">
        <div className="container">
          <div className="centerized">
            <LightBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
              <span>Where We Are Today</span>
            </LightBadge>
          </div>
          <Heading>Growing <span>Every Day</span></Heading>
          <StatsRow>
            {stats.map((s, i) => (
              <StatItem key={i}>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </StatItem>
            ))}
          </StatsRow>
        </div>
      </Section>

      {/* -- What We're Building Next -- */}
      <MidSection>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <LightBadge><Sparkle /><span>Roadmap</span></LightBadge>
          </div>
          <Heading>What We Are <span>Building Next</span></Heading>
          <SubText>New capabilities on the way to make SEVA HR even more powerful.</SubText>
          <LightGrid>
            {roadmapItems.map((item, i) => (
              <LightCard key={i}>
                <LightIcon>{getIcon(item.icon)}</LightIcon>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </LightCard>
            ))}
          </LightGrid>
        </div>
      </MidSection>

      {/* -- Our Values (light) -- */}
      <Section $bg="#fff">
        <div className="container">
          <div className="centerized">
            <LightBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
              <span>Our Values</span>
            </LightBadge>
          </div>
          <Heading>What Drives <span>Us</span></Heading>
          <SubText>The principles behind every decision we make.</SubText>
          <CardGrid>
            {values.map((v, i) => (
              <li key={i}>
                <Card>
                  <IconWrap>{getIcon(v.icon)}</IconWrap>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </Card>
              </li>
            ))}
          </CardGrid>
        </div>
      </Section>

      {/* -- CTA -- */}
      <DarkSection style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' }}>
        <Grid />
        <div className="container">
          <CtaWrap>
            <CtaTitle>Join the <span>Journey</span></CtaTitle>
            <SubText style={{ color: 'rgba(255,255,255,0.8)' }}>
              We are building the future of HR management for Indian businesses. See how SEVA HR can work for your organization.
            </SubText>
            <PrimaryBtn href="/contact">Get in Touch</PrimaryBtn>
          </CtaWrap>
        </div>
      </DarkSection>
    </PageWrapper>
  )
}

export default OurStory
