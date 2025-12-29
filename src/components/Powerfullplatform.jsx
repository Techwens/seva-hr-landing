"use client"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Power1 from "../assets/power1.svg"
import Power2 from "../assets/power2.svg"
import Power3 from "../assets/power3.svg"
import Power4 from "../assets/power4.svg"
import Power5 from "../assets/power5.svg"
import Power6 from "../assets/power6.svg"
import Image from "next/image"
import bojroBidduyt from "../assets/bojro-bidduyt.svg"


const Section = styled.section({
  paddingBlock: "3.5rem",
  "& .centerized": {
    display: "flex",
    justifyContent: "center",
  },
  "& h3": {
    fontWeight: 600,
    lineHeight: 1.3,
    color: '#000',
    marginBlockEnd: "0.625rem",
    borderRadius: '1.875rem',
    background: 'linear-gradient(54.19deg, #D9DBFF 17.15%, #CAFFDB 75.24%)',
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
      backgroundImage: `url(${bojroBidduyt.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize:'contain'
    }
  },
  "& h2": {
    textAlign: 'center',
    marginBlockEnd: '0.938rem',
    '& span': {
      background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
    }
  },
  "& p": {
    textAlign: 'center',
  }
});
const SectionRow = styled.div({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginBlockStart: "2.625rem",
  overflow: "hidden",
});

const Left = styled.div({
  width: "60%",
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
  "& ul": {
    padding: "0rem",
    margin: "0rem",
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    "& li": {
      width: "calc((100% - 2rem) / 3)",
      padding: "0.063rem",
      position: "relative",
      borderRadius: "1.188rem",
      boxShadow: "0px 4px 36px 0px #00000014",
      overflow: "hidden",
      padding: "1.875rem 1.563rem",
      '&:after': {
        content: "''",
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: '0',
        top: '0',
        background: "linear-gradient(90deg, #FFD7BC 0%, #D9D1FF 106.8%)",
        zIndex: "0",
      },
      '&:before': {
        content: "''",
        position: 'absolute',
        height: 'calc(100% - 0.125rem)',
        width: 'calc(100% - 0.125rem)',
        left: '1px',
        top: '1px',
        background: "#fff",
        zIndex: "1",
        borderRadius: "1.125rem",
      },
      "& div": {
        position: "relative",
        zIndex: "3",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBlockEnd: "1.25rem",
        "& span": {
          height: "2.5rem",
          width: "2.5rem",
          display: "flex",
          alignItems: "center",
          "& svg": {
            height: "100%",
            width: "100%",
          }
        },
        "& h4": {
          marginBlockEnd: "0rem",
        },
      },
      "& p": {
        marginBlockEnd: "0rem",
        position: "relative",
        zIndex: "3",
        textAlign: "start",
      }
    }
  }
});





export const Right = styled.div({
  width: "40%",
  opacity: 0,
  transform: "translateX(3rem)",
  transition: "all 0.8s ease",
  "& ul": {
    padding: "1.5rem",
    margin: "0rem",
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    "& li": {
      width: "calc((100% - 1rem) / 2)",
      padding: "1rem",
      position: "relative",
      borderRadius: "1.125rem",
      display: "flex",
      alignItems: "center",
      boxShadow: "0px 4px 36px 0px #0010EF26",
      gap: "0.5rem",
      "& div": {
        height: "1.188rem",
        width: "1.188rem",
        "& svg": {
          height: "100%",
          width: "100%",
        }
      },
      "& h6": {
        background: 'linear-gradient(90deg, #002BFF -36.06%, #BC1DAF 96.9%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        marginBlockEnd: "0rem",
        fontSize: "0.813rem",
        fontWeight: "600",
      }
    }


  },
  "@media (max-width: 991px)": {
    width: "100%",
  },
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const Buttonwrap = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

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
  width: "calc(100% - 3rem)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  background:"linear-gradient(151.19deg, #476FFF 1.77%, #4600B6 71.94%)",
  transition: "color 0.5s ease",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    background:"linear-gradient(331.19deg, #476FFF 1.77%, #4600B6 71.94%)",
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

const GetStartButton = styled.button({
  padding: "1rem",
  borderRadius: "1.125rem",
  border: "0.063rem solid #d9dcfe",
  background: "#fff",
  color: "#000",
  fontSize: "1.125rem",
  fontWeight: 700,
  cursor: "pointer",
  width: "calc(100% - 3rem)",
  marginBlockStart: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
  "&:hover": {
    boxShadow: "0 0 0.75rem #c9ffda",
    borderColor: "#c9ffda",
  },
});











export default function Powerfullplatform() {
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
  const features = [
    {
      title: "One Smart Shift Management",
      description: "Manual shift registers causing errors",
      icon: Power1
    },
    {
      title: "Zero Overtime Disputes",
      description: "Salary mismatches creating conflicts",
      icon: Power2
    },
    {
      title: "Real-Time accuracy",
      description: "No idea where workers are",
      icon: Power3
    },
    {
      title: "Multi-Branch Control",
      description: "Scattered workforce across locations",
      icon: Power4
    },
    {
      title: "60% Less HR Work For you",
      description: "Drowning in manual paperwork",
      icon: Power5
    },
    {
      title: "Compliance on Autopilot",
      description: "Government filing stress & penalties",
      icon: Power6
    },
  ]


  return (
    <Section>
      <div className="container">
        <div className="centerized">
          <h3>Powerful Features</h3>
        </div>
        <h2>Everything You Need in <span>One Powerful Platform</span></h2>
        <p>One unified platform for HR, Attendance, Payroll, Compliance, and Analytics — built for complex shift-based operations across all industries.</p>
        <SectionRow ref={sectionRef}>
          <Left className="animate">
            <ul>
              {features?.map((item, index) => (
                <li key={index}>
                  <div>
                    <Image src={item?.icon} />
                    <h4 className="bold">{item?.title}</h4>
                  </div>
                  <p>{item?.description}</p>
                </li>
              ))}
            </ul>

          </Left>
          <Right className="animate">
            <ul>
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
                <h6>Employee Lifecycle Management</h6>
              </li>
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
                <h6>Smart Shift & Attendance</h6>
              </li>
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
                <h6>Multi-Level Payroll Engine</h6>
              </li>
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
                <h6>Geo-Fencing & GPS Tracking</h6>
              </li>
            </ul>
            <Buttonwrap>
              <CtaButton>
              <span>Book your demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M6.71165 12.8863L5.22869 11.4161L9.12145 7.52339H0V5.36288H9.12145L5.22869 1.47652L6.71165 -4.45843e-05L13.1548 6.44314L6.71165 12.8863Z" fill="white" />
                </svg>
              </CtaButton>
              <GetStartButton>Get Started Free
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M6.71165 12.8863L5.22869 11.4161L9.12145 7.52339H0V5.36288H9.12145L5.22869 1.47652L6.71165 -4.45843e-05L13.1548 6.44314L6.71165 12.8863Z" fill="black" />
                </svg>
              </GetStartButton>
            </Buttonwrap>

          </Right>
        </SectionRow>
      </div>
    </Section>
  )
}
