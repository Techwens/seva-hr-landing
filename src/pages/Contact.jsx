import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { submitDemoRequest } from '../config/api'

const PageWrapper = styled.div({ minHeight: '100vh', background: '#F8FAFC' })

/* ── Hero (light) ── */
const HeroSection = styled.section({
  background: '#fff',
  paddingBlock: '8rem 5rem', textAlign: 'center',
  '@media (max-width: 575px)': { paddingBlock: '6rem 3rem' },
})
const Orb = styled.div(({ $top, $left, $right, $size, $color, $delay }) => ({
  position: 'absolute', top: $top || 'auto', left: $left || 'auto', right: $right || 'auto',
  width: $size || '20rem', height: $size || '20rem', borderRadius: '50%',
  background: $color || 'radial-gradient(circle, rgba(71,111,255,0.15) 0%, transparent 70%)',
  filter: 'blur(3rem)', pointerEvents: 'none',
  animation: `orbC 8s ease-in-out ${$delay || '0s'} infinite`,
  '@keyframes orbC': { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(1rem,-1rem) scale(1.05)' } },
}))
const Grid = styled.div({
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
  backgroundSize: '4rem 4rem',
})
const Badge = styled.h3({
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.625rem 1.25rem', borderRadius: '3rem',
  background: 'linear-gradient(135deg, #EEF2FF 0%, #FDF4FF 100%)',
  border: '1px solid rgba(71,111,255,0.15)',
  boxShadow: '0 4px 15px rgba(71,111,255,0.08)',
  fontSize: '0.875rem', marginBottom: '1rem',
  '@media (max-width: 575px)': { padding: '0.3rem 0.6rem', fontSize: '0.688rem', gap: '0.25rem' },
  '& span': { fontWeight: 600, background: 'linear-gradient(90deg, #476FFF 0%, #7B60FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
})
const HeroTitle = styled.h1({
  color: '#1a1a2e', marginBottom: '1rem',
  '& span': { background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
})
const HeroSub = styled.p({ color: '#64748B', maxWidth: '38rem', margin: '0 auto', lineHeight: 1.7 })
const Sparkle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#sc)"/><defs><linearGradient id="sc" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#60A5FA"/><stop offset="1" stopColor="#A78BFA"/></linearGradient></defs></svg>
)

/* ── Content ── */
const ContentSection = styled.section({
  paddingBlock: '4rem',
  '@media (max-width: 575px)': { paddingBlock: '2rem' },
})
const TwoCol = styled.div({
  display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '2.5rem', alignItems: 'start',
  '@media (max-width: 991px)': { gridTemplateColumns: '1fr', gap: '2rem' },
})

/* ── Left: info cards ── */
const InfoCol = styled.div({})
const InfoTitle = styled.h2({
  marginBottom: '0.5rem',
  '& span': { background: 'linear-gradient(90deg, #FF6600, #7B60FF 80.8%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
})
const InfoSub = styled.p({ color: '#64748B', lineHeight: 1.7, marginBottom: '1.5rem' })
const InfoCard = styled.div({
  background: '#fff', borderRadius: '1rem', padding: '1.25rem 1.5rem',
  boxShadow: '0 1px 3px rgba(0,0,0,0.06)', marginBottom: '0.75rem',
  display: 'flex', alignItems: 'flex-start', gap: '1rem',
  transition: 'all 0.3s ease',
  '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(0,0,0,0.08)' },
  '@media (max-width: 575px)': { padding: '1rem', gap: '0.75rem' },
})
const InfoIcon = styled.div({
  width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', flexShrink: 0,
  background: 'linear-gradient(135deg, #EEF2FF, #FDF4FF)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  '& svg': { width: '1.25rem', height: '1.25rem', stroke: '#476FFF', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
})
const InfoText = styled.div({
  '& h4': { fontWeight: 700, color: '#1a1a2e', marginBottom: '0.15rem', fontSize: '0.95rem' },
  '& p': { color: '#64748B', fontSize: '0.875rem', margin: 0, lineHeight: 1.5 },
  '& a': { color: '#476FFF', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { textDecoration: 'underline' } },
})
const HighlightBox = styled.div({
  background: 'linear-gradient(135deg, #EEF2FF, #FDF4FF)',
  border: '1px solid rgba(71,111,255,0.15)',
  borderRadius: '1rem', padding: '1.25rem 1.5rem', marginTop: '0.75rem',
  '& p': { color: '#333', fontSize: '0.875rem', margin: 0, lineHeight: 1.6 },
  '& strong': { color: '#1a1a2e' },
})

/* ── Right: form ── */
const FormCard = styled.div({
  background: '#fff', borderRadius: '1.25rem', padding: '2.5rem',
  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
  border: '1px solid rgba(71,111,255,0.08)',
  '@media (max-width: 575px)': { padding: '1.5rem', borderRadius: '1rem' },
})
const FormTitle = styled.h2({
  marginBottom: '0.25rem',
  '& span': { background: 'linear-gradient(90deg, #476FFF, #7B60FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
})
const FormSub = styled.p({ color: '#64748B', fontSize: '0.875rem', marginBottom: '1.5rem' })
const FormGroup = styled.div({
  marginBottom: '1.15rem',
  '& label': { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1a1a2e', marginBottom: '0.35rem' },
  '& input, & select, & textarea': {
    width: '100%', padding: '0.7rem 0.9rem', fontSize: '0.9rem',
    border: '1px solid #E2E8F0', borderRadius: '0.75rem', background: '#F8FAFC',
    color: '#333', outline: 'none', transition: 'all 0.2s ease',
    boxSizing: 'border-box', fontFamily: 'inherit',
    '&:focus': { borderColor: '#476FFF', boxShadow: '0 0 0 3px rgba(71,111,255,0.1)', background: '#fff' },
  },
  '& textarea': { resize: 'vertical' },
  '& select': {
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath fill=\'%23666\' d=\'M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6z\'/%3E%3C/svg%3E")',
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.9rem center', paddingRight: '2.5rem',
  },
})
const SubmitBtn = styled.button({
  position: 'relative', overflow: 'hidden', width: '100%',
  padding: '0.9rem', borderRadius: '0.875rem', border: 'none',
  background: 'linear-gradient(151.19deg, #476FFF 1.77%, #4600B6 71.94%)',
  color: '#fff', fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
  transition: 'all 0.4s ease', boxShadow: '0 4px 20px rgba(71,111,255,0.3)',
  '&::after': {
    content: '""', position: 'absolute', inset: 0, borderRadius: 'inherit',
    background: 'linear-gradient(331.19deg, #476FFF 1.77%, #4600B6 71.94%)',
    opacity: 0, transition: 'opacity 0.5s ease', zIndex: 0,
  },
  '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 30px rgba(71,111,255,0.4)' },
  '&:hover::after': { opacity: 1 },
  '& > *': { position: 'relative', zIndex: 1 },
})
const SuccessBox = styled.div({
  background: 'linear-gradient(135deg, #EEF2FF, #FDF4FF)',
  border: '1px solid rgba(71,111,255,0.15)',
  borderRadius: '1rem', padding: '2rem', textAlign: 'center',
  '& h3': { color: '#476FFF', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' },
  '& p': { color: '#333', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 },
})
const PrivacyNote = styled.p({
  fontSize: '0.75rem', color: '#94A3B8', marginTop: '1rem', textAlign: 'center', lineHeight: 1.5,
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem',
  '& svg': { width: '0.75rem', height: '0.75rem', stroke: '#94A3B8', fill: 'none', strokeWidth: 2 },
})

const subjectOptions = ['General Inquiry', 'Book a Demo', 'Technical Support', 'Billing & Subscription', 'Partnership', 'Other']

export const Contact = () => {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    try {
      await submitDemoRequest({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      })
      setSubmitted(true)
    } catch (err) {
      setSubmitError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <HeroSection>
        <div className="container">
          <Badge><Sparkle /><span>Contact Us</span></Badge>
          <HeroTitle>Let's <span>Talk</span></HeroTitle>
          <HeroSub>Have a question, need help, or want to see SEVA HR in action? Our team will get back to you within 24 hours.</HeroSub>
        </div>
      </HeroSection>

      {/* ── Content ── */}
      <ContentSection>
        <div className="container">
          <TwoCol>
            {/* Left */}
            <InfoCol>
              <InfoTitle>Get in <span>Touch</span></InfoTitle>
              <InfoSub>Whether you need a demo, technical support, or just have questions — we are here to help.</InfoSub>

              <InfoCard>
                <InfoIcon>
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                </InfoIcon>
                <InfoText>
                  <h4>Email Us</h4>
                  <p><a href="mailto:hello@sevahr.com">hello@sevahr.com</a></p>
                  <p><a href="mailto:support@sevahr.com">support@sevahr.com</a> (technical)</p>
                </InfoText>
              </InfoCard>

              <InfoCard>
                <InfoIcon>
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </InfoIcon>
                <InfoText>
                  <h4>Call Us</h4>
                  <p><a href="tel:+919477047816">+91-94770-47816</a></p>
                  <p>Mon-Fri, 10 AM - 7 PM IST</p>
                </InfoText>
              </InfoCard>

              <InfoCard>
                <InfoIcon>
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </InfoIcon>
                <InfoText>
                  <h4>Visit Us</h4>
                  <p>33/25/1 Belgachia Road, Liluah</p>
                  <p>Howrah - 711204, WB, India</p>
                </InfoText>
              </InfoCard>

              <HighlightBox>
                <p><strong>Support Hours:</strong> Monday to Friday, 10:00 AM - 7:00 PM IST</p>
                <p style={{ marginTop: '0.25rem' }}>Typical response time: Within 24 hours</p>
              </HighlightBox>
            </InfoCol>

            {/* Right */}
            <FormCard>
              <FormTitle>Send us a <span>Message</span></FormTitle>
              <FormSub>Fill out the form below and we will respond promptly.</FormSub>

              {submitted ? (
                <SuccessBox>
                  <h3>Thank You!</h3>
                  <p>We have received your message and will respond within 24 hours.</p>
                </SuccessBox>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <label htmlFor="fullName">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" value={form.fullName} onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" value={form.phone} onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="subject">Subject *</label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                      <option value="" disabled>Select a subject</option>
                      {subjectOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} required />
                  </FormGroup>
                  {submitError && <p style={{ color: '#EF4444', fontSize: '0.875rem', marginBottom: '0.75rem' }}>{submitError}</p>}
                  <SubmitBtn type="submit" disabled={isSubmitting}><span>{isSubmitting ? 'Sending...' : 'Send Message'}</span></SubmitBtn>
                  <PrivacyNote>
                    <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                    Your information is secure and will only be used to respond to your inquiry.
                  </PrivacyNote>
                </form>
              )}
            </FormCard>
          </TwoCol>
        </div>
      </ContentSection>
    </PageWrapper>
  )
}

export default Contact
