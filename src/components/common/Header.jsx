"use client"
import React from 'react'
import styled from 'styled-components';
import LogoImg from "../../assets/Logo.svg";
import Image from 'next/image';
// import { NavLink } from "react-router-dom";
const HeaderLayout = styled.header({
  position: "fixed", top: 0, left: 0, width: '100%', paddingBlock: '1rem', zIndex: 10, backgroundColor: 'transparent', transition: 'all .3s',
  '&.sticky': { backgroundColor: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(0.375rem)', },
  '@media (max-width: 550px)': {
    padding: ' 0.625rem 1.25rem',
  },
});
const HeaderContainer = styled.div({ display: 'flex', alignItems: 'center', });
const Brand = styled.div({ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '3.75rem' });
const NavStyle = styled.nav({
  display: 'inline-flex',
  alignItems: 'center',
  marginInlineStart: 'auto',
  '& ul': {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    gap: '1.875rem',
    '& a': {
      position: 'relative',
      color: '#000',
      textDecoration: 'none',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: "-0.3rem",
        left: 0,
        width: '70%',
        height: '3px',
        backgroundColor: '#00d392',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
      },
      '&:hover::after, &.active::after': {
        transform: 'scaleX(1)',
      },
      '&:hover::after': {
        opacity: "0.3",
      },
    }
  }
});

export default function Header() {
  return (
    <>
      <HeaderLayout>
        <HeaderContainer className="container">
          <Brand>
            <Image src={LogoImg} alt="Logo" width={60} height={60} />
            logo
          </Brand>
          <NavStyle>
            <ul>
              <li>
                <a to={'/'}>Features</a>
              </li>
              <li>
                <a to={'/'}>Customization</a>
              </li>
              <li>
                <a to={'/'}>Compliance</a>
              </li>
              <li>
                <a to={'/'}>Contact</a>
              </li>
              <li>
                <a to={'/'}>
                  <span></span>
                  +91-80-4567-8900
                </a>
              </li>
              <li>
                <a to={'/contact'}>
                  <span></span>
                  View Demo
                </a>
              </li>
            </ul>
          </NavStyle>
        </HeaderContainer>
      </HeaderLayout>
    </>
  );
}
