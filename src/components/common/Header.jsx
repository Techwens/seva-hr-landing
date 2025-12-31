"use client"
import React from 'react'
import styled from 'styled-components';
import LogoImg from "../../assets/Logo.svg";
import CallIcon from "../../assets/callIcon.svg";
import PlayBtnIcon from "../../assets/playButton.svg";
import Image from 'next/image';
// import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
const HeaderLayout = styled.header({
  position: "fixed", top: 0, left: 0, width: '100%', zIndex: 10, backgroundColor: '#fff', transition: 'all .3s', boxShadow: '0px 4px 4px 0px #BDD8FF33', overflow: 'hidden',
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
    '& li:last-child': {
      padding: "1px",
      borderRadius: '0.875rem',
      fontWeight: '600',
      transition: "box-shadow 0.35s ease-in-out",
      background: "linear-gradient(151.19deg, #476FFF 1.77%, #4600B6 71.94%)",
      "&:hover": {
        boxShadow: `0 0 0.5rem rgba(79, 70, 229, 0.35), 0 0 1.25rem rgba(124, 58, 237, 0.3), 0 0 2.5rem rgba(124, 58, 237, 0.2)`,
        transition: "box-shadow 0.35s ease-in-out",
      },
      '& a': {
        padding: '0.625rem 1.125rem',
        background: "#fff",
        borderRadius: "0.875rem",
        color: "#4600B6",
        '&::after': {
          display: 'none',
        },
        '&::before': {
          display: 'none',
        },
      }
    },
    '& li:nth-last-child(2)': {
      fontWeight: '600',
      '& a': {
        '&::after': {
          display: 'none',
        },
        '&::before': {
          display: 'none',
        },
      },
    },
    '& a': {
      position: 'relative',
      color: '#000',
      textDecoration: 'none',
      paddingBlock: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: "0rem",
        left: 0,
        width: '100%',
        height: '2px',
        background: '#FF7F0F',
        background: 'linear-gradient(90deg, rgba(255, 127, 15, 1) 0%, rgba(93, 62, 195, 1) 100%)',
        boxShadow: '0px 4px 4px 0px #BDD8FF33',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: "0rem",
        left: 0,
        width: '100%',
        height: '7px',
        background: '#FF7F0F',
        background: 'linear-gradient(90deg, rgba(255, 127, 15, 1) 0%, rgba(93, 62, 195, 1) 100%)',
        boxShadow: '0px 4px 4px 0px #BDD8FF33',
        transform: 'scaleX(0)',
        filter: 'blur(10px)',
      },
      '&:hover::after, &.active::after, &:hover::before, &.active::before': {
        transform: 'scaleX(1)',
      },
      '&:hover::after, &:hover::before': {
        opacity: "0.7",
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
});

export default function Header() {
  return (
    <>
      <HeaderLayout>
        <HeaderContainer className="container">
          <Brand>
            <Image src={LogoImg} alt="Logo" width={60} height={60} />
          </Brand>
          <NavStyle>
            <ul>
              <li>
                <ScrollLink to="features-section" smooth={true} duration={500} offset={-80}>
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="customization-section" smooth={true} duration={500} offset={-80}>
                  Customization
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="compliance-section" smooth={true} duration={500} offset={-80}>
                  Compliance
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact-section" smooth={true} duration={500} offset={-80}>
                  Contact
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact-section" smooth={true} duration={500}>
                  <span>
                    <Image src={CallIcon} alt='callicon' />
                  </span>
                  +91-80-4567-8900
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="">
                  <span>
                    <Image src={PlayBtnIcon} alt='callicon' />
                  </span>
                  View Demo
                </ScrollLink>
              </li>
            </ul>
          </NavStyle>
        </HeaderContainer>
      </HeaderLayout>
    </>
  );
}
