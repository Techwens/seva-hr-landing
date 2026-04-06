import { useEffect, useState } from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div({
  minHeight: '100vh',
  background: '#F8FAFC',
})

/* ── Hero (light) ── */
const HeroSection = styled.section({
  background: '#fff',
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
  background: 'linear-gradient(135deg, #EEF2FF 0%, #FDF4FF 100%)',
  border: '1px solid rgba(71,111,255,0.15)',
  boxShadow: '0 4px 15px rgba(71,111,255,0.08)',
  fontSize: '0.875rem',
  marginBottom: '1rem',
  '@media (max-width: 575px)': { padding: '0.3rem 0.6rem', fontSize: '0.688rem', gap: '0.25rem' },
  '& span': { fontSize: '0.875rem', fontWeight: 600, background: 'linear-gradient(90deg, #476FFF 0%, #7B60FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', '@media (max-width: 575px)': { fontSize: '0.688rem' } },
})
const HeroTitle = styled.h1({
  color: '#1a1a2e', marginBottom: '1rem',
  '& span': {
    background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    backgroundClip: 'text', color: 'transparent',
  },
})
const HeroSubtitle = styled.p({
  color: '#64748B', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7,
})
const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#sg2)" />
    <defs><linearGradient id="sg2" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="#60A5FA" /><stop offset="1" stopColor="#A78BFA" />
    </linearGradient></defs>
  </svg>
)

/* ── Category tabs ── */
const CategoryNav = styled.div({
  display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.625rem',
  marginBottom: '2.5rem',
  '@media (max-width: 575px)': { gap: '0.375rem', marginBottom: '1.5rem' },
})
const CategoryTab = styled.button(({ $active }) => ({
  padding: '0.5rem 1.25rem', borderRadius: '2rem', cursor: 'pointer',
  fontSize: '0.875rem', fontWeight: 600, fontFamily: 'inherit',
  border: $active ? '1px solid rgba(71,111,255,0.3)' : '1px solid #E2E8F0',
  background: $active ? 'linear-gradient(135deg, #EEF2FF 0%, #FDF4FF 100%)' : '#fff',
  color: $active ? '#476FFF' : '#64748B',
  transition: 'all 0.25s ease',
  boxShadow: $active ? '0 4px 15px rgba(71,111,255,0.08)' : 'none',
  '&:hover': { borderColor: 'rgba(71,111,255,0.3)', color: '#476FFF' },
  '@media (max-width: 575px)': { padding: '0.35rem 0.75rem', fontSize: '0.75rem' },
}))

/* ── Accordion ── */
const ContentSection = styled.section({
  paddingBlock: '4rem',
  '@media (max-width: 575px)': { paddingBlock: '2rem' },
})
const AccordionList = styled.div({
  maxWidth: '48rem', margin: '0 auto',
})
const AccordionItem = styled.div({
  background: '#fff', borderRadius: '1rem', marginBottom: '0.75rem',
  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  overflow: 'hidden', transition: 'box-shadow 0.3s ease',
  '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.08)' },
  '@media (max-width: 575px)': { borderRadius: '0.75rem', marginBottom: '0.5rem' },
})
const AccordionQuestion = styled.button(({ $open }) => ({
  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '1.25rem 1.5rem', background: 'none', border: 'none',
  cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
  fontSize: '1rem', fontWeight: 600, color: $open ? '#476FFF' : '#1a1a2e',
  lineHeight: 1.5, gap: '1rem', transition: 'color 0.25s ease',
  '@media (max-width: 575px)': { padding: '1rem', fontSize: '0.9rem' },
}))
const ChevronWrap = styled.span(({ $open }) => ({
  flexShrink: 0, width: '1.75rem', height: '1.75rem',
  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: $open ? 'linear-gradient(135deg, #476FFF, #7B60FF)' : '#F1F5F9',
  transition: 'all 0.3s ease',
  '& svg': {
    width: '0.75rem', height: '0.75rem',
    transform: $open ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  },
}))
const AccordionAnswer = styled.div(({ $open }) => ({
  maxHeight: $open ? '600px' : '0', overflow: 'hidden',
  transition: 'max-height 0.35s ease',
}))
const AnswerContent = styled.div({
  padding: '0 1.5rem 1.25rem',
  borderTop: '1px solid #F1F5F9',
  paddingTop: '1rem',
  '& p': { fontSize: '0.95rem', color: '#333', lineHeight: 1.75, margin: 0 },
  '& a': { color: '#476FFF', textDecoration: 'none', fontWeight: 500, '&:hover': { textDecoration: 'underline' } },
  '@media (max-width: 575px)': { padding: '0 1rem 1rem', paddingTop: '0.75rem', '& p': { fontSize: '0.875rem' } },
})

/* ── CTA ── */
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
const CtaSub = styled.p({
  color: 'rgba(255,255,255,0.8)', maxWidth: '36rem', margin: '0 auto 2rem', lineHeight: 1.7,
  '@media (max-width: 575px)': { fontSize: '0.875rem' },
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

/* ── FAQ Data ── */
const faqData = [
  {
    category: 'General',
    items: [
      { q: 'What is SEVA HR?', a: 'SEVA HR is a cloud-based Human Resource Management System (HRMS) built for Indian businesses. It covers employee management, payroll, attendance, leave, and statutory compliance — with new modules actively being added.' },
      { q: 'Who is SEVA HR designed for?', a: 'SEVA HR is designed for businesses of all sizes across industries — IT services, manufacturing, healthcare, logistics, retail, education, hospitality, and more. Whether you have 10 employees or 10,000, the platform scales to fit.' },
      { q: 'Is there a mobile app?', a: 'Yes. The SEVA HR Employee Self-Service (ESS) app is available for Android (iOS coming soon). Employees can mark attendance, apply for leave, view payslips, submit expenses, and more — all from their phone.' },
    ],
  },
  {
    category: 'Setup',
    items: [
      { q: 'How long does it take to set up?', a: 'Most organizations are up and running within 24-48 hours. Our team handles the setup, data migration, and configuration — no technical expertise required from your end.' },
      { q: 'Can I import existing employee data?', a: 'Yes. SEVA HR supports bulk import of employee data, attendance records, and leave balances via Excel/CSV files. Our team assists with data migration to ensure a smooth transition.' },
      { q: 'Is training provided?', a: 'Yes. Our onboarding team provides hands-on training for your HR staff. We walk you through every module your organization uses and stay available for questions during the transition period.' },
    ],
  },
  {
    category: 'Features',
    items: [
      { q: 'What modules are available?', a: 'Available modules include Employee Management, Payroll Processing, Attendance & Shift Management, Leave Management, and Statutory Compliance (EPF, ESI, PT, LWF, TDS) with a complete Employee Self-Service mobile app. Additional modules like Performance Management, Recruitment, Expense Management, and Asset Management are actively being rolled out.' },
      { q: 'Does it handle multi-branch organizations?', a: 'Yes. The platform supports multi-branch setups with location-specific configurations for shifts, holidays, attendance policies, and statutory compliance (state-wise Professional Tax, LWF, etc.).' },
      { q: 'Can I customize salary structures?', a: 'Absolutely. SEVA HR supports unlimited salary components with formula-based calculations. You can create multiple salary structures and assign them by grade, designation, or individual employee.' },
    ],
  },
  {
    category: 'Compliance',
    items: [
      { q: 'Which statutory compliances are covered?', a: 'EPF (Employee Provident Fund), ESI (Employee State Insurance), Professional Tax (all Indian states), LWF (Labor Welfare Fund), TDS (Tax Deducted at Source), and Form 16 generation. All calculations are auto-generated and audit-ready.' },
      { q: 'Does it handle state-wise Professional Tax?', a: 'Yes. Professional Tax slabs vary by state, and SEVA HR auto-calculates PT based on the state where each branch is registered. Multi-state organizations are fully supported.' },
    ],
  },
  {
    category: 'Security',
    items: [
      { q: 'Where is my data stored?', a: 'Your data is hosted on secure cloud infrastructure (AWS) with AES-256 encryption at rest and TLS 1.2+ encryption in transit. All data is stored in India.' },
      { q: "Is my organization's data isolated?", a: "Yes. SEVA HR uses a multi-tenant architecture with strict data isolation. Each organization's data is logically separated at the database level. An employee of one organization can never access another organization's data." },
      { q: "Is SEVA HR compliant with India's data protection laws?", a: 'Yes. SEVA HR is compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act) and the IT (Intermediary Guidelines) Rules, 2021. We have a designated Grievance Officer and follow data minimization principles.' },
    ],
  },
  {
    category: 'Billing',
    items: [
      { q: 'Is there a free trial?', a: 'Yes. We offer a 14-day free trial with full access to all available modules. No credit card is required to start.' },
      { q: 'How does pricing work?', a: 'Pricing is based on the number of employees and modules selected. Contact our team for a personalized quote. We offer both monthly and annual billing options.' },
      { q: 'What is the cancellation policy?', a: 'You can cancel your subscription at any time. Access continues until the end of your current billing period.', link: { text: 'View Refund & Cancellation Policy', href: '/refund-policy' } },
    ],
  },
]

export const Faq = () => {
  const [openItems, setOpenItems] = useState({})
  const [activeCategory, setActiveCategory] = useState('General')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const toggleItem = (key) => setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))

  const activeSection = faqData.find(s => s.category === activeCategory)

  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <HeroSection>
        <div className="container">
          <Badge><SparkleIcon /><span>FAQ</span></Badge>
          <HeroTitle>Frequently Asked <span>Questions</span></HeroTitle>
          <HeroSubtitle>Everything you need to know about SEVA HR. Can't find what you're looking for? Contact us.</HeroSubtitle>
        </div>
      </HeroSection>

      {/* ── FAQ Content ── */}
      <ContentSection>
        <div className="container">
          <CategoryNav>
            {faqData.map((s) => (
              <CategoryTab
                key={s.category}
                $active={activeCategory === s.category}
                onClick={() => { setActiveCategory(s.category); setOpenItems({}) }}
              >
                {s.category}
              </CategoryTab>
            ))}
          </CategoryNav>

          <AccordionList>
            {activeSection && activeSection.items.map((item, idx) => {
              const key = `${activeCategory}-${idx}`
              const isOpen = !!openItems[key]
              return (
                <AccordionItem key={key}>
                  <AccordionQuestion $open={isOpen} onClick={() => toggleItem(key)}>
                    <span>{item.q}</span>
                    <ChevronWrap $open={isOpen}>
                      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke={isOpen ? '#fff' : '#64748B'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </ChevronWrap>
                  </AccordionQuestion>
                  <AccordionAnswer $open={isOpen}>
                    <AnswerContent>
                      <p>{item.a}</p>
                      {item.link && (
                        <p style={{ marginTop: '0.75rem' }}>
                          <a href={item.link.href}>{item.link.text}</a>
                        </p>
                      )}
                    </AnswerContent>
                  </AccordionAnswer>
                </AccordionItem>
              )
            })}
          </AccordionList>
        </div>
      </ContentSection>

      {/* ── CTA ── */}
      <CtaSection>
        <GridOverlay />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <CtaTitle>Still Have <span>Questions</span>?</CtaTitle>
          <CtaSub>Our team is ready to help. Reach out and we will get back to you within 24 hours.</CtaSub>
          <CtaButton href="/contact">Contact Us</CtaButton>
        </div>
      </CtaSection>
    </PageWrapper>
  )
}

export default Faq
