import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import LogoImg from '../../assets/Logo.svg'
import { Link, useLocation } from 'react-router-dom'

const HeaderLayout = styled.header({
  position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
  backgroundColor: '#fff', transition: 'all .3s',
  boxShadow: '0px 2px 12px 0px rgba(0,0,0,0.06)',
  '&.sticky': { backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(0.5rem)' },
})

const HeaderContainer = styled.div({
  display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '0.5rem',
})

const Brand = styled.div({
  display: 'inline-flex', alignItems: 'center', height: '3rem', position: 'relative', zIndex: 101,
  '@media (max-width: 575px)': { height: '2.25rem' },
  '& img': { height: '100%', width: 'auto' },
})

/* ── Desktop Nav ── */
const Nav = styled.nav(({ $isOpen }) => ({
  display: 'inline-flex', alignItems: 'center',
  '@media (max-width: 991px)': {
    position: 'fixed', top: 0, right: 0, width: '65%', height: '100vh',
    backgroundColor: '#fff', flexDirection: 'column', justifyContent: 'start',
    transform: $isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out', zIndex: 99, paddingTop: '5rem',
    overflowY: 'auto',
  },
  '@media (max-width: 575px)': { width: '80%' },
}))

const NavList = styled.ul({
  display: 'flex', alignItems: 'center', listStyle: 'none', padding: 0, margin: 0, gap: '0.25rem',
  '@media (max-width: 991px)': {
    flexDirection: 'column', gap: 0, width: '100%', padding: '0 1.5rem',
  },
})

const NavItem = styled.li({
  position: 'relative',
  '@media (max-width: 991px)': { width: '100%', borderBottom: '1px solid #F1F5F9' },
})

const NavLink = styled.a({
  display: 'flex', alignItems: 'center', gap: '0.3rem',
  padding: '0.65rem 0.875rem', fontSize: '0.9375rem', fontWeight: 500,
  color: '#333', textDecoration: 'none', borderRadius: '0.5rem',
  cursor: 'pointer', transition: 'all 0.2s ease', whiteSpace: 'nowrap',
  '&:hover': { backgroundColor: 'rgba(71,111,255,0.06)', color: '#476FFF' },
  '@media (max-width: 991px)': { padding: '0.875rem 0', fontWeight: 600, fontSize: '0.9rem' },
  '@media (max-width: 575px)': { fontSize: '0.85rem' },
})

const DropdownChevron = styled.span(({ $open }) => ({
  display: 'inline-flex', marginLeft: '0.15rem',
  '& svg': { width: '0.625rem', height: '0.625rem', transition: 'transform 0.2s ease', transform: $open ? 'rotate(180deg)' : 'rotate(0)' },
}))

/* ── Dropdown ── */
const DropdownWrap = styled.div(({ $open }) => ({
  position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
  paddingTop: '0.5rem', opacity: $open ? 1 : 0, visibility: $open ? 'visible' : 'hidden',
  transition: 'opacity 0.2s ease, visibility 0.2s ease',
  '@media (max-width: 991px)': {
    position: 'static', transform: 'none', paddingTop: 0,
    maxHeight: $open ? '500px' : '0', overflow: 'hidden',
    transition: 'max-height 0.3s ease, opacity 0.2s ease',
    opacity: 1, visibility: 'visible',
  },
}))

const DropdownPanel = styled.div({
  background: '#fff', borderRadius: '0.75rem', border: '1px solid #E2E8F0',
  boxShadow: '0 10px 40px rgba(0,0,0,0.1)', padding: '0.5rem', minWidth: '13rem',
  '@media (max-width: 991px)': {
    boxShadow: 'none', border: 'none', borderRadius: 0, padding: '0 0 0 1rem',
  },
})

const DropdownLink = styled.a({
  display: 'flex', alignItems: 'center', gap: '0.625rem',
  padding: '0.625rem 0.875rem', fontSize: '0.875rem', fontWeight: 500,
  color: '#333', textDecoration: 'none', borderRadius: '0.5rem',
  transition: 'all 0.15s ease',
  '&:hover': { backgroundColor: 'rgba(71,111,255,0.06)', color: '#476FFF' },
  '@media (max-width: 991px)': { padding: '0.625rem 0', fontSize: '0.85rem' },
  '& .dd-icon': {
    width: '1.75rem', height: '1.75rem', borderRadius: '0.375rem', display: 'flex',
    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    background: 'linear-gradient(135deg, #EEF2FF, #FDF4FF)',
    '@media (max-width: 991px)': { display: 'none' },
    '& svg': { width: '0.875rem', height: '0.875rem', stroke: '#476FFF', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
  },
})

const DropdownLabel = styled.span({ '& strong': { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1a1a2e' } })

/* ── CTA Button ── */
const CtaLink = styled.a({
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
  padding: '0.6rem 1.25rem', borderRadius: '0.625rem', fontWeight: 600, fontSize: '0.875rem',
  background: 'linear-gradient(151deg, #476FFF, #4600B6)', color: '#fff',
  textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
  whiteSpace: 'nowrap', border: 'none',
  '&:hover': { transform: 'translateY(-1px)', boxShadow: '0 6px 20px rgba(70,0,182,0.3)' },
  '@media (max-width: 991px)': { width: '100%', marginTop: '1rem', padding: '0.75rem' },
})

/* ── Hamburger ── */
const Hamburger = styled.button(({ $isOpen }) => ({
  display: 'none', flexDirection: 'column', justifyContent: 'space-between',
  width: '1.75rem', height: '1.25rem', background: 'transparent', border: 'none',
  cursor: 'pointer', padding: 0, zIndex: 101, position: 'relative',
  '@media (max-width: 991px)': { display: 'flex' },
  '& span': {
    display: 'block', width: '100%', height: '3px', borderRadius: '2px',
    background: 'linear-gradient(270deg, rgba(255,127,15,1) 0%, rgba(29,58,95,1) 100%)',
    transition: 'all 0.3s ease', transformOrigin: 'center',
  },
  '& span:nth-child(1)': { transform: $isOpen ? 'rotate(45deg) translate(0.5rem, 0.35rem)' : 'rotate(0)' },
  '& span:nth-child(2)': { opacity: $isOpen ? 0 : 1 },
  '& span:nth-child(3)': { transform: $isOpen ? 'rotate(-45deg) translate(0.375rem, -0.35rem)' : 'rotate(0)' },
}))

const Overlay = styled.div(({ $isOpen }) => ({
  display: 'none',
  '@media (max-width: 991px)': {
    display: 'block', position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)', opacity: $isOpen ? 1 : 0,
    visibility: $isOpen ? 'visible' : 'hidden', transition: 'opacity 0.3s ease, visibility 0.3s ease', zIndex: 98,
  },
}))

/* ── Dropdown hook ── */
const useDropdown = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const timeout = useRef(null)
  const onEnter = () => { clearTimeout(timeout.current); setOpen(true) }
  const onLeave = () => { timeout.current = setTimeout(() => setOpen(false), 150) }
  const toggle = () => setOpen(p => !p)
  return { open, ref, onEnter, onLeave, toggle }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const location = useLocation()
  const platform = useDropdown()
  const company = useDropdown()
  const resources = useDropdown()

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  useEffect(() => { setIsMenuOpen(false) }, [location.pathname])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <HeaderLayout className={isSticky ? 'sticky' : ''}>
        <HeaderContainer className="container">
          <Brand>
            <Link to="/"><img src={LogoImg} alt="SevaHR - HRMS Platform Logo" width={60} height={60} /></Link>
          </Brand>

          <Hamburger $isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} type="button">
            <span /><span /><span />
          </Hamburger>

          <Nav $isOpen={isMenuOpen}>
            <NavList>
              {/* Our Platform */}
              <NavItem ref={platform.ref} onMouseEnter={platform.onEnter} onMouseLeave={platform.onLeave}>
                <NavLink onClick={platform.toggle}>
                  Our Platform
                  <DropdownChevron $open={platform.open}><svg viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></DropdownChevron>
                </NavLink>
                <DropdownWrap $open={platform.open}>
                  <DropdownPanel>
                    <DropdownLink href="/features/employee-management">
                      <div className="dd-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
                      <DropdownLabel><strong>Employee Management</strong></DropdownLabel>
                    </DropdownLink>
                    <DropdownLink href="/features/payroll">
                      <div className="dd-icon"><svg viewBox="0 0 24 24"><path d="M21 12V7H5a2 2 0 010-4h14v4"/><path d="M3 5v14a2 2 0 002 2h16v-5"/><path d="M18 12a2 2 0 100 4h4v-4h-4z"/></svg></div>
                      <DropdownLabel><strong>Payroll Processing</strong></DropdownLabel>
                    </DropdownLink>
                    <DropdownLink href="/features/attendance">
                      <div className="dd-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
                      <DropdownLabel><strong>Attendance & Shifts</strong></DropdownLabel>
                    </DropdownLink>
                    <DropdownLink href="/features/compliance">
                      <div className="dd-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                      <DropdownLabel><strong>Statutory Compliance</strong></DropdownLabel>
                    </DropdownLink>
                    <DropdownLink href="/mobile-app">
                      <div className="dd-icon"><svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>
                      <DropdownLabel><strong>Mobile App (ESS)</strong></DropdownLabel>
                    </DropdownLink>
                  </DropdownPanel>
                </DropdownWrap>
              </NavItem>

              {/* Pricing */}
              <NavItem>
                <NavLink href="/pricing">Pricing</NavLink>
              </NavItem>

              {/* Solutions */}
              <NavItem>
                <NavLink href="/solutions">Solutions</NavLink>
              </NavItem>

              {/* Company */}
              <NavItem ref={company.ref} onMouseEnter={company.onEnter} onMouseLeave={company.onLeave}>
                <NavLink onClick={company.toggle}>
                  Company
                  <DropdownChevron $open={company.open}><svg viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></DropdownChevron>
                </NavLink>
                <DropdownWrap $open={company.open}>
                  <DropdownPanel>
                    <DropdownLink href="/about">
                      <div className="dd-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg></div>
                      <DropdownLabel><strong>About Us</strong></DropdownLabel>
                    </DropdownLink>
                    <DropdownLink href="/our-story">
                      <div className="dd-icon"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></div>
                      <DropdownLabel><strong>Our Story</strong></DropdownLabel>
                    </DropdownLink>
                    <DropdownLink href="/contact">
                      <div className="dd-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg></div>
                      <DropdownLabel><strong>Contact Us</strong></DropdownLabel>
                    </DropdownLink>
                  </DropdownPanel>
                </DropdownWrap>
              </NavItem>

              {/* Why SevaHR */}
              <NavItem>
                <NavLink href="/why-sevahr">Why SevaHR</NavLink>
              </NavItem>

              {/* Resources */}
              <NavItem ref={resources.ref} onMouseEnter={resources.onEnter} onMouseLeave={resources.onLeave}>
                <NavLink onClick={resources.toggle}>
                  Resources
                  <DropdownChevron $open={resources.open}><svg viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></DropdownChevron>
                </NavLink>
                <DropdownWrap $open={resources.open}>
                  <DropdownPanel>
                    <DropdownLink href="/faq">
                      <div className="dd-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></div>
                      <DropdownLabel><strong>FAQ</strong></DropdownLabel>
                    </DropdownLink>
                    <DropdownLink href="/data-security">
                      <div className="dd-icon"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></div>
                      <DropdownLabel><strong>Data Security</strong></DropdownLabel>
                    </DropdownLink>
                    <DropdownLink href="/privacy-policy">
                      <div className="dd-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg></div>
                      <DropdownLabel><strong>Privacy Policy</strong></DropdownLabel>
                    </DropdownLink>
                    <DropdownLink href="/terms-of-service">
                      <div className="dd-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg></div>
                      <DropdownLabel><strong>Terms of Service</strong></DropdownLabel>
                    </DropdownLink>
                  </DropdownPanel>
                </DropdownWrap>
              </NavItem>
            </NavList>

            {/* CTA */}
            <CtaLink href="/contact">Book a Demo</CtaLink>
          </Nav>
        </HeaderContainer>
      </HeaderLayout>
      <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  )
}
