"use client"
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import LogoImg from "../../assets/Logo.svg";
import CallIcon from "../../assets/callIcon.svg";
import PlayBtnIcon from "../../assets/playButton.svg";
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

const HeaderLayout = styled.header({
  position: "fixed",
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 100,
  backgroundColor: '#fff',
  transition: 'all .3s',
  boxShadow: '0px 2px 12px 0px rgba(0,0,0,0.06)',
  '&.sticky': {
    backgroundColor: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(0.5rem)',
  },
});

const HeaderContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBlock: '0.5rem',
});

const Brand = styled.div({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '3rem',
  position: 'relative',
  zIndex: 101,
  '& img': {
    height: '100%',
    width: 'auto',
  }
});

const NavStyle = styled.nav(({ $isOpen }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  '@media (max-width: 991px)': {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '50%',
    height: '100vh',
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: "start",
    transform: $isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 99,
    paddingBlockStart: "8rem",
  },
  '@media (max-width: 575px)': {
    width: '73%',
  },
  '& ul': {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    gap: '0.5rem',
    '@media (max-width: 991px)': {
      flexDirection: 'column',
      gap: '1rem',
      width: '100%',
      padding: '0 2rem',
    },
    '& li': {
      '@media (max-width: 991px)': {
        width: '100%',
        textAlign: 'center',
      },
    },
    '& li:last-child': {
      padding: "1px",
      borderRadius: '0.625rem',
      fontWeight: '600',
      transition: "all 0.25s ease",
      background: "linear-gradient(151.19deg, #476FFF 1.77%, #4600B6 71.94%)",
      "@media (max-width: 991px)": {
        marginTop: '1rem',
      },
      "&:hover": {
        boxShadow: '0 4px 16px rgba(71, 111, 255, 0.3)',
      },
      '& a': {
        padding: '0.625rem 1rem',
        background: "#fff",
        borderRadius: '0.5rem',
        color: "#476FFF",
        fontWeight: '600',
        '&:hover': {
          backgroundColor: '#fff',
        },
      }
    },
    '& li:nth-last-child(2)': {
      '& a': {
        color: '#374151',
        fontWeight: '500',
      },
    },
    '& a': {
      position: 'relative',
      color: '#000',
      textDecoration: 'none',
      padding: '0.75rem 1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '0.9375rem',
      borderRadius: '0.5rem',
      transition: 'background-color 0.2s ease',
      '&:hover': {
        backgroundColor: 'rgba(71, 111, 255, 0.06)',
      },
      '&.active': {
        backgroundColor: 'rgba(71, 111, 255, 0.08)',
        color: '#476FFF',
      },
      'span': {
        height: '0.875rem',
        width: '0.875rem',
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: '0.2rem',
        '& img': {
          height: '100% !important',
          width: '100% !important',
        },
      }
    }
  }
}));

const HamburgerButton = styled.button(({ $isOpen }) => ({
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '1.75rem',
  height: '1.25rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  zIndex: 101,
  position: 'relative',
  '@media (max-width: 991px)': {
    display: 'flex',
  },
  '& span': {
    display: 'block',
    width: '100%',
    height: '2px',
    backgroundColor: '#1a1a1a',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
    transformOrigin: 'center',
  },
  '& span:nth-child(1)': {
    transform: $isOpen ? 'rotate(45deg) translate(0.35rem, 0.35rem)' : 'rotate(0)',
  },
  '& span:nth-child(2)': {
    opacity: $isOpen ? 0 : 1,
  },
  '& span:nth-child(3)': {
    transform: $isOpen ? 'rotate(-45deg) translate(0.35rem, -0.35rem)' : 'rotate(0)',
  },
}));

const Overlay = styled.div(({ $isOpen }) => ({
  display: 'none',
  '@media (max-width: 991px)': {
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: $isOpen ? 1 : 0,
    visibility: $isOpen ? 'visible' : 'hidden',
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
    zIndex: 98,
  },
}));

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <HeaderLayout className={isSticky ? 'sticky' : ''}>
        <HeaderContainer className="container">
          <Brand>
            <Image src={LogoImg} alt="SevaHR - HRMS Platform Logo" width={60} height={60} loading="eager" priority />
          </Brand>

          <HamburgerButton
            $isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>

          <NavStyle $isOpen={isMenuOpen}>
            <ul>
              <li>
                <ScrollLink to="features-section" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="customization-section" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                  Customization
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="compliance-section" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                  Compliance
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact-section" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                  Contact
                </ScrollLink>
              </li>
              <li>
                <a href="tel:+918045678900" aria-label="Call us at +91-80-4567-8900">
                  <span>
                    <Image src={CallIcon} alt="" aria-hidden="true" />
                  </span>
                  +91-80-4567-8900
                </a>
              </li>
              <li>
                <ScrollLink to="features-section" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                  <span>
                    <Image src={PlayBtnIcon} alt="" aria-hidden="true" />
                  </span>
                  View Demo
                </ScrollLink>
              </li>
            </ul>
          </NavStyle>
        </HeaderContainer>
      </HeaderLayout>
      <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  );
}
