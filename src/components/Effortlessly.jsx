"use client"
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import EffortlesslyImg from "../assets/EffortlesslyImg.svg";
import SparkleBg from "../assets/sparkle.svg"
import Image from 'next/image';


const Section = styled.section({
  paddingBlock: "3.5rem",
  "& h3": {
    
    fontWeight: 600,
    lineHeight: 1.3,
    color: '#000',
    marginBlockEnd: "0.625rem",
    borderRadius: '1.875rem',
    background: "linear-gradient(54.19deg, #D5FEFF 17.15%, #FFD5CA 109.72%)",
    padding: '0.625rem 1.25rem 0.625rem 3.5rem',
    display: 'inline-block',
    position: 'relative',
    '&:after': {
      content: "''",
      position: 'absolute',
      height: '1.313rem',
      width: '1.875rem',
      left: '1rem',
      top: '50%',
      transform: "translateY(-50%)",
      backgroundImage: `url(${SparkleBg.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "contain",
      backgroundPosition:"center",
    }
  },
  "& h2": {
    marginBlockEnd: '0.938rem',
    background: 'linear-gradient(73.29deg, #9300AD 18.02%, #00BBFF 83.69%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  },
  "& p": {
    textAlign: 'center',
  }
})
const SectionRow = styled.div({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  borderRadius: "2.5rem",
  boxShadow: "0px 4px 36px 0px #0000001A",
  background: "#fff",
  padding: "3rem",
  overflow: "hidden",
  "@media (max-width: 991px)": {
    flexDirection: "column",
  },
});

const Left = styled.div({
  width: "50%",
  opacity: 0,
  transform: "translateX(-3rem)",
  transition: "all 0.8s ease",
  paddingInlineEnd: "1rem",
  "@media (max-width: 991px)": {
    width: "100%",
  },
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },

});

const CtaList = styled.div({
  "& h4": {
    marginBlockEnd: "0.5rem",
    fontWeight: "700",
    '& span': {
      background: 'linear-gradient(73.29deg, #9300AD 18.02%, #00BBFF 83.69%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
    }
  },
  "& p": {
    textAlign: "start",
  },
  "& ol": {
    padding: "0rem",
    margin: "0rem 0rem 2rem 0rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    "& li": {
      fontSize: " 1rem",
      width: "100%",
      display: 'flex',
      gap: "0.5rem",
      flexDirection: "row",
      "& div": {
        height: '0.875rem',
        width: '0.875rem',
        "& svg": {
          height: '100%',
          width: '100%',
        }
      }
    },
  }
});

const CtaButton = styled.button({
  position: "relative",
  overflow: "hidden",
  padding: "1rem",
  borderRadius: "1.125rem",
  border: "none",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 700,
  cursor: "pointer",
  maxWidth: "14.375rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  background: "linear-gradient(151.19deg, #476FFF 1.77%, #4600B6 71.94%)",
  transition: "color 0.5s ease",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    background: "linear-gradient(331.19deg, #476FFF 1.77%, #4600B6 71.94%)",
    opacity: 0,
    transition: "opacity 0.5s ease",
    zIndex: 0,
    pointerEvents: "none",
  },
  "&:hover::after": {
    opacity: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
});

export const Right = styled.div({
  width: "50%",
  display:"flex",
  justifyContent:"center",
  opacity: 0,
  transform: "translateX(3rem)",
  transition: "all 0.8s ease",
  "& img":{
    height:"auto",
    width:"100%",
    objectFit:"contain",
  },
  "@media (max-width: 991px)": {
    width: "100%",
  },
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
});



const Effortlessly = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll(".animate")
            .forEach(el => el.classList.add("in-view"));
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Section>
        <div className="container">
          <SectionRow ref={sectionRef}>
            <Left className="animate">
              <h3>Effortlessly Simple for Everyone</h3>
              <h2>A User-Friendly HRMS Anyone Can Operate</h2>
              <CtaList>
                <h4><span>No training required</span> — SEVA HR is built with simplicity at its core.</h4>
                <p>SEVA HR is designed to make HR tasks effortless for every user, regardless of technical expertise. The clean, intuitive interface ensures that employees, managers, and HR teams can easily navigate the platform from day one.</p>
                <h4><span>Benefit Highlights</span></h4>
                <ol>
                  <li>
                    <div>
                      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#4F6BFF" />
                        <path
                          d="M14 24.5L21 31L34 17"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Smart Automation</li>
                  <li>
                    <div>
                      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#4F6BFF" />
                        <path
                          d="M14 24.5L21 31L34 17"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Zero Manual Work</li>
                  <li>
                    <div>
                      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#4F6BFF" />
                        <path
                          d="M14 24.5L21 31L34 17"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Instant Insights</li>
                </ol>
              </CtaList>
              <CtaButton>
                <span>Book Free Demo</span>
              </CtaButton>
            </Left>
            <Right className="animate">
              <Image src={EffortlesslyImg} alt='effort banner'/>
            </Right>
          </SectionRow>
        </div>
      </Section>
    </>
  )
}

export default Effortlessly