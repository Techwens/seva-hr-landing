"use client"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"

import RoadMap from "../assets/roadmap.svg"
import WebinarPlay from "../assets/webinar-play.svg"
import cirtificate from "../assets/Vector.svg"
import packlock from "../assets/padlock-check 2.svg"
import SparkleBg from "../assets/sparkle.svg"
const securityData = [
  {
    title: "Personalised Demo",
    desc: "Custom walkthrough tailored to your industry needs \ed to your industry needs",
    icon: WebinarPlay,
  },
  {
    title: "Implementation Roadmap",
    desc: "Clear timeline and migration strategy Custom walkthrough tailored to your industry needs \ed to your industry needs",
    icon: RoadMap,
  },
  {
    title: "ROI Analysis",
    desc: "See exactly how much time and money you'll save to your industry needs \ed to your industry needs",
    icon: cirtificate,
  },
  {
    title: "Free Trial",
    desc: "No credit card required, cancel anytime tailored to your industry needs \ed to your industry needs",
    icon: cirtificate,
  },
]

const Section = styled.section({
  paddingBlock: "3.5rem",
  position:"relative",
  "&::after":{
    content: '""',
    width: '50vw',
    height: '80vh',
    borderRadius: '50%',
    backgroundColor: 'rgb(123 96 255 / 17%)',
    filter: 'blur(3.75rem)',
    position: 'absolute',
    bottom: '0',
    right: '0',
    zIndex:"-1",
  },
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
    background: 'linear-gradient(311.72deg, #B9D9FF 30.95%, #FFF9CA 70.45%)',
    padding: '0.625rem 1.25rem 0.625rem 2.8rem',
    display: 'inline-block',
    position: 'relative',
    '&:after': {
      content: "''",
      position: 'absolute',
      height: '1.313rem',
      width: '1.5rem',
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
  alignItems: "center",
  justifyContent: "space-between",
  marginBlockStart: "2.625rem",
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
  "@media (max-width: 991px)": {
    width: "100%",
  },
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const CardList = styled.ul({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  "& li": {
    padding: "1.25rem 1.5rem",
    borderRadius: "1.25rem",
    background: "#fff",
    border: "1px solid #D5D3FF",
    boxShadow: "0px 2px 10px 0px #00000012",
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    transition: "background 0.4s ease",
    "& p": {
      textAlign: "start",
      transition: "all 0.4s ease",
      transform: "translateY(0)",
    },
    "&:hover": {
      background:"linear-gradient(151.19deg, #476FFF 1.77%, #4600B6 71.94%)",
    },
    "&:hover h4": {
      color: "#fff",
      transform: "translateX(-2rem)",
    },
    "&:hover p": {
      color: "#fff",
      transform: "translateY(-0.375rem)",
    },
    "&:hover .HeaderRow div": {
      opacity: 0,
      transform: "translateX(-1.5rem)",
    },
  },
});
const HeaderRow = styled.div({
  display: "flex",
  alignItems: "center",
  gap: ".75rem",
  "& div": {
    width: "1.438rem",
    height: "1.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexShrink: 0,
    transition: "all 0.4s ease",
    "& img": {
      height: "100% !important",
      width: "100% !important",
    }
  },
  "& h4": {
    marginBlockEnd: "0rem",
    fontWeight: "700",
    transition: "all 0.4s ease",
    transform: "translateX(0)",
  }
});

export const Right = styled.div({
  width: "50%",
  opacity: 0,
  padding:"2rem",
  transform: "translateX(3rem)",
  transition: "all 0.8s ease",
  "@media (max-width: 991px)": {
    width: "100%",
  },
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
});


export const FormCard = styled.div({
  background: "#fff",
  borderRadius: "1.5rem",
  padding: "2.5rem",
  boxShadow: "0px 10px 40px rgba(0,0,0,0.06)",

  "& h4": {
    fontSize: "1.75rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
  },

  "& p": {
    fontSize: "0.95rem",
    marginBottom: "2rem",
    textAlign: "start",
  },

  "@media (max-width: 768px)": {
    padding: "1.75rem",
  },
});

export const FormGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",

  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
  },
});

export const FormGroup = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  "& label": {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#111",
  },

  "& input, & select": {
    height: "3.25rem",
    padding: "0 1rem",
    borderRadius: "1rem",
    border: "1px solid #e6e6e6",
    fontSize: "0.875rem",
    outline: "none",
    background: "#fafafa",
    transition: "all .25s ease",
    "&:focus": {
      borderColor: "#476FFF",
      background: "#fff",
      boxShadow: "0 0 0 3px rgba(71,111,255,0.12)",
    },
  },

  "& select": {
    appearance: "none",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='8'%3E%3Cpath d='M1 1l6 6 6-6' stroke='%23000' fill='none' stroke-width='2'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
  },
});

export const ButtonWrap = styled.div({
  display: "flex",
  alignItems: "flex-end",
  "@media (max-width: 768px)": {
    marginTop: "0.5rem",
  },
  "& button": {
    width: "100%",
    height: "3.5rem",
    borderRadius: "1.125rem",
    border: "none",
    fontSize: "1rem",
    fontWeight: 700,
    cursor: "pointer",
    color: "#fff",
    background: "linear-gradient(90deg, #FF6600 0%, #7B60FF 106.8%)",
    transition: "all .3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0px 10px 25px rgba(127,63,255,0.35)",
    },
  }
});



export const PrivacyText = styled.p({
  marginTop: "1.75rem",
  fontSize: "0.85rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  "& div": {
    height: "1.5rem",
    width: "1.5rem",
    "& img": {
      height: "100% !important",
      width: "100%  !important",
    }
  }
});












export default function Actionform() {
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
    <Section>
      <div className="container">
        <div className="centerized">
          <h3>Get Started Now</h3>
        </div>
        <h2>See <span>SEVA HRMS in Action</span></h2>
        <p>Book your personalized demo and discover how SEVA HRMS handles your industry's unique workforce challenges</p>
        <SectionRow ref={sectionRef}>
          <Left className="animate">
            <CardList>
              {securityData?.map((item, index) => (
                <li key={index}>
                  <HeaderRow className="HeaderRow">
                    <div>
                      <img src={item?.icon?.src} alt="icon" width={100} height={100} />
                    </div>
                    <h4>{item?.title}</h4>
                  </HeaderRow>
                  <p>{item?.desc}</p>
                </li>
              ))}
            </CardList>
          </Left>
          <Right className="animate">
            <FormCard>
              <h4>Book Your Free Demo</h4>
              <p>We’ll contact you within 24 hours</p>

              <FormGrid>
                <FormGroup>
                  <label>Full Name *</label>
                  <input placeholder="John Doe" />
                </FormGroup>

                <FormGroup>
                  <label>Company *</label>
                  <input placeholder="Company Name 1" />
                </FormGroup>

                <FormGroup>
                  <label>Phone *</label>
                  <input placeholder="+91 234..." />
                </FormGroup>

                <FormGroup>
                  <label>Email Address *</label>
                  <input placeholder="email@company.com" />
                </FormGroup>

                <FormGroup>
                  <label>Number of Employees *</label>
                  <select>
                    <option>Select Range</option>
                  </select>
                </FormGroup>

                <ButtonWrap>
                  <button>Book a Demo</button>
                </ButtonWrap>
              </FormGrid>
              <PrivacyText>
                <div>
                  <img src={packlock?.src} alt="icon" width={100} height={100} />
                </div>
                Your information is secure. We respect your privacy.
              </PrivacyText>
            </FormCard>
          </Right>
        </SectionRow>
      </div>
    </Section>
  )
}
