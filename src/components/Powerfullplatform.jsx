"use client"
import PowerfullplatformIcon1 from "@/assets/svg/PowerfullplatformIcon1";
import PowerfullplatformIcon2 from "@/assets/svg/PowerfullplatformIcon2";
import PowerfullplatformIcon3 from "@/assets/svg/PowerfullplatformIcon3";
import PowerfullplatformIcon4 from "@/assets/svg/PowerfullplatformIcon4";
import PowerfullplatformIcon5 from "@/assets/svg/PowerfullplatformIcon5";
import PowerfullplatformIcon6 from "@/assets/svg/PowerfullplatformIcon6";
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
// import Power1 from "../assets/svg/powerfullplatformIcon1"
// import Power2 from "../assets/svg/powerfullplatformIcon2"
// import Power3 from "../assets/svg/powerfullplatformIcon3"
// import Power4 from "../assets/svg/powerfullplatformIcon4"
// import Power5 from "../assets/svg/powerfullplatformIcon5"
// import Power6 from "../assets/svg/powerfullplatformIcon6"




const Section = styled.section({
  paddingBlock: "3.5rem",
  "& .centerized": {
    display: "flex",
    justifyContent: "center",
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
      display: "inline-block"
    }
  },
});
const Subtitle = styled.p({
  fontSize: "1.125rem",
  color: "#64748B",
  maxWidth: "38rem",
  margin: "0 auto",
  lineHeight: 1.7,
  textAlign: "center",
});
const Badge = styled.h3({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.625rem 1.25rem",
  borderRadius: "3rem",
  background: "linear-gradient(135deg, #EEF2FF 0%, #FDF4FF 100%)",
  border: "1px solid rgba(71, 111, 255, 0.15)",
  marginBlockEnd: "1.5rem",
  boxShadow: "0 4px 15px rgba(71, 111, 255, 0.08)",
  "& svg": {
    width: "1.125rem",
    height: "1.125rem",
  },
  "& span": {
    fontSize: "0.875rem",
    fontWeight: 600,
    background: "linear-gradient(90deg, #476FFF 0%, #7B60FF 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
})
const SectionRow = styled.div({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginBlockStart: "2.625rem",
  overflow: "hidden",
  "@media (max-width: 991px)": {
    flexDirection: "column",
  },
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
      overflow: "hidden",
      padding: "1.875rem 1.563rem",
      "@media (max-width: 1199px)": {
        padding: "1.875rem 0.875rem",
      },
      '&:after': {
        content: "''",
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: '0',
        top: '0',
        background: "linear-gradient(90deg, #FFD7BC 0%, #D9D1FF 106.8%)",
        zIndex: "0",
        transition: "all 0.4s ease",
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
      "&:hover::after": {
        background: "linear-gradient(140.97deg, #476cfd0a 3.17%, #4600b617 72.79%)",
        transition: "all 0.4s ease",
      },
      "&:hover::before": {
        display: "none",
      },
      "& div": {
        position: "relative",
        zIndex: "3",
        display: "flex",
        gap: "0.5rem",
        marginBlockEnd: "1.25rem",
        "& span": {
          height: "2.5rem",
          width: "2.5rem",
          display: "flex",
          alignItems: "start",
          transition: "all 0.4s ease",
          flex: "0 0 2.5rem",
          "& svg": {
            height: "100%",
            width: "100%",
            transition: "all 0.4s ease",
          }
        },
        "& h4": {
          marginBlockEnd: "0rem",
          transition: "all 0.4s ease",
          transform: "translateX(0)",
        },
      },
      "& p": {
        marginBlockEnd: "0rem",
        position: "relative",
        zIndex: "3",
        textAlign: "start",
        transition: "all 0.4s ease",
        transform: "translateY(0)",
      },
      "&:hover p": {
        transform: "translateY(-0.375rem)",
      },
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
      icon: <PowerfullplatformIcon1 />
    },
    {
      title: "Zero Overtime Disputes",
      description: "Salary mismatches creating conflicts",
      icon: <PowerfullplatformIcon2 />
    },
    {
      title: "Real-Time accuracy",
      description: "No idea where workers are",
      icon: <PowerfullplatformIcon3 />
    },
    {
      title: "Multi-Branch Control",
      description: "Scattered workforce across locations",
      icon: <PowerfullplatformIcon4 />
    },
    {
      title: "60% Less HR Work For you",
      description: "Drowning in manual paperwork",
      icon: <PowerfullplatformIcon5 />
    },
    {
      title: "Compliance on Autopilot",
      description: "Government filing stress & penalties",
      icon: <PowerfullplatformIcon6 />
    },
  ]


  return (
    <Section>
      <div className="container">
        <div className="centerized">
          <Badge>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span>Powerful Feature</span>
          </Badge>
        </div>
        <h2>Everything You Need in<br /><span>One Powerful Platform</span></h2>
        <Subtitle>One unified platform for HR, Attendance, Payroll, Compliance, and Analytics — built for complex shift-based operations across all industries.</Subtitle>
        <SectionRow ref={sectionRef}>
          <Left className="animate">
            <ul>
              {features?.map((item, index) => (
                <li key={index}>
                  <div>
                    <span>
                      {/* <Image src={item?.icon} alt="icon" /> */}
                      {item?.icon}
                    </span>
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
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
