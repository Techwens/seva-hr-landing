"use client"
import React from 'react'
import styled from 'styled-components';
import LogoImg from "../../assets/Logo.svg";
import Image from 'next/image';
// import { NavLink } from "react-router-dom";
const HeaderLayout = styled.header({
  position: "fixed", top: 0, left: 0, width: '100%', paddingBlockStart: '1rem', zIndex: 10, backgroundColor: 'transparent', transition: 'all .3s', boxShadow: '0px 4px 4px 0px #BDD8FF33', overflow: 'hidden',
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
      border: '1px solid #000',
      borderRadius: '5px',
      fontWeight: '600',
      '& a': {
        padding: '0.625rem 1.125rem',
        '&::after': {
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
      },
    },
    '& a': {
      position: 'relative',
      color: '#000',
      textDecoration: 'none',
      paddingBlock: '1rem 2rem',
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
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
        filter: 'blur(10px)',
      },
      '&:hover::after, &.active::after, &:hover::before, &.active::before': {
        transform: 'scaleX(1)',
      },
      '&:hover::after, &:hover::before': {
        opacity: "0.7",
      },
      'span': {
        height: '1.3rem',
        width: '1.3rem',
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: '0.2rem',
        '& svg': {
          height: '100%',
          width: '100%',
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
                  <span>
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="callGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stop-color="#F2A65A" />
                          <stop offset="100%" stop-color="#6B7280" />
                        </linearGradient>
                      </defs>
                      <path
                        d="
                          M42 10
                          C28 10 20 20 20 34
                          C20 60 36 82 56 100
                          C66 110 76 112 86 106
                          L102 96
                          C110 90 110 78 102 72
                          L84 60
                          C76 54 70 56 64 64
                          L58 72
                          C50 66 42 56 38 48
                          L46 40
                          C52 34 52 26 46 18
                          L42 10
                          Z
                        "
                        fill="url(#callGradient)"
                      />
                    </svg>
                  </span>
                  +91-80-4567-8900
                </a>
              </li>
              <li>
                <a to={'/contact'}>
                  <span>
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="playGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stop-color="#F36C21" />
                          <stop offset="100%" stop-color="#4B3F8F" />
                        </linearGradient>
                      </defs>
                      <path
                        d="
                          M38 18
                          C24 18 16 30 16 44
                          V76
                          C16 90 24 102 38 102
                          H42
                          L92 68
                          C100 62 100 58 92 52
                          L42 18
                          H38
                          Z
                        "
                        fill="url(#playGradient)"
                      />
                    </svg>
                  </span>
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
