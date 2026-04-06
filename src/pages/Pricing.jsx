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

/* -- Pricing cards grid -- */
const CardGrid = styled.ul({
  listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
  '@media (max-width: 575px)': { gap: '0.5rem' },
  '& li': {
    width: 'calc(33.333% - 0.84rem)',
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

/* -- Checklist grid -- */
const CheckGrid = styled.div({
  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem 3rem', maxWidth: '44rem', margin: '0 auto',
  '@media (max-width: 575px)': { gridTemplateColumns: '1fr', gap: '0.5rem' },
})
const CheckItem = styled.div({
  display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
  '& p': { fontSize: '0.95rem', color: '#334155', margin: 0, lineHeight: 1.6, '@media (max-width: 575px)': { fontSize: '0.875rem' } },
})
const CheckIcon = styled.div({
  flexShrink: 0, width: '1.5rem', height: '1.5rem', borderRadius: '50%',
  background: 'linear-gradient(135deg, #EEF2FF 0%, #FDF4FF 100%)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.15rem',
  '& svg': { width: '0.875rem', height: '0.875rem', stroke: '#476FFF', fill: 'none', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' },
})

/* -- Mid section (light) for Free Trial -- */
const MidSection = styled.section({
  position: 'relative', overflow: 'hidden',
  background: '#F8FAFC',
  paddingBlock: '4rem', '@media (max-width: 575px)': { paddingBlock: '2rem' },
})
/* -- Dark CTA section -- */
const DarkSection = styled.section({
  position: 'relative', overflow: 'hidden',
  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
  paddingBlock: '4rem', '@media (max-width: 575px)': { paddingBlock: '2rem' },
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
const pricingCards = [
  { title: 'Per-Employee Pricing', desc: 'Pay only for the employees you manage. Pricing scales with your team.', icon: 'users' },
  { title: 'Module-Based', desc: 'Choose the modules you need. Start with core HR and add more as you grow.', icon: 'grid' },
  { title: 'Monthly or Annual', desc: 'Flexible billing. Annual plans come with a discount.', icon: 'calendar' },
]

const includedLeft = [
  'Unlimited admin users',
  'Employee Self-Service mobile app',
  'Multi-branch support',
  'Statutory compliance (EPF, ESI, PT, LWF, TDS)',
  'Payslip generation',
  'Attendance & shift management',
]

const includedRight = [
  'Leave management',
  'Dedicated onboarding & training',
  'Email & phone support',
  'Data migration assistance',
  'Regular feature updates',
  '99.9% uptime SLA',
]

const getIcon = (name) => {
  switch (name) {
    case 'users': return <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    case 'grid': return <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    case 'calendar': return <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
    default: return null
  }
}

export const Pricing = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <PageWrapper>
      {/* -- Hero -- */}
      <HeroSection>
        <Orb $top="-10%" $left="-5%" $size="30rem" $delay="0s" />
        <Orb $top="30%" $right="-8%" $size="22rem" $color="radial-gradient(circle, rgba(123,96,255,0.12) 0%, transparent 70%)" $delay="2s" />
        <Grid />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <HeroBadge><Sparkle /><span>Pricing</span></HeroBadge>
          <HeroTitle>Simple, Transparent <span>Pricing</span></HeroTitle>
          <HeroSub>
            Custom pricing based on your team size and the modules you need. No hidden fees, no long-term lock-in.
          </HeroSub>
        </div>
      </HeroSection>

      {/* -- How Pricing Works -- */}
      <Section $bg="#fff">
        <div className="container">
          <div className="centerized">
            <LightBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>How Pricing Works</span>
            </LightBadge>
          </div>
          <Heading>Flexible Plans for <span>Every Team</span></Heading>
          <SubText>No one-size-fits-all. Your plan is built around what you actually use.</SubText>
          <CardGrid>
            {pricingCards.map((c, i) => (
              <li key={i}>
                <Card>
                  <IconWrap>{getIcon(c.icon)}</IconWrap>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </Card>
              </li>
            ))}
          </CardGrid>
        </div>
      </Section>

      {/* -- What's Included -- */}
      <Section $bg="#F8FAFC">
        <div className="container">
          <div className="centerized">
            <LightBadge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>What You Get</span>
            </LightBadge>
          </div>
          <Heading>Everything <span>Included</span></Heading>
          <SubText>Every plan comes with the full platform experience.</SubText>
          <CheckGrid>
            {includedLeft.map((item, i) => (
              <CheckItem key={`l-${i}`}>
                <CheckIcon><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg></CheckIcon>
                <p>{item}</p>
              </CheckItem>
            ))}
            {includedRight.map((item, i) => (
              <CheckItem key={`r-${i}`}>
                <CheckIcon><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg></CheckIcon>
                <p>{item}</p>
              </CheckItem>
            ))}
          </CheckGrid>
        </div>
      </Section>

      {/* -- Free Trial (light, prominent) -- */}
      <MidSection>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <CtaWrap>
            <Heading>Start with a <span>14-Day Free Trial</span></Heading>
            <SubText>
              Full access to all available modules. No credit card required. Our team will set you up and walk you through the platform.
            </SubText>
            <PrimaryBtn href="/contact" style={{ background: 'linear-gradient(135deg, #476FFF, #7B60FF)', color: '#fff', boxShadow: '0 4px 20px rgba(71,111,255,0.3)' }}>Start Free Trial</PrimaryBtn>
          </CtaWrap>
        </div>
      </MidSection>

      {/* -- Custom Quote CTA (dark) -- */}
      <DarkSection style={{ background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)' }}>
        <Grid />
        <div className="container">
          <CtaWrap>
            <CtaTitle>Need a <span>Custom Quote?</span></CtaTitle>
            <SubText style={{ color: 'rgba(255,255,255,0.8)' }}>
              Tell us about your team size and requirements. We will put together a plan that works for your organization.
            </SubText>
            <PrimaryBtn href="/contact">Get Custom Quote</PrimaryBtn>
          </CtaWrap>
        </div>
      </DarkSection>
    </PageWrapper>
  )
}

export default Pricing
