"use client"
import React from "react"
import styled from "styled-components"
import SparkleBg from "../assets/sparkle.svg"
import Calculator from "@/assets/svg/Calculator"
import PayrollIcon from "@/assets/svg/PayrollIcon"
import Location from "@/assets/svg/Location"
import Privacy from "@/assets/svg/Privacy"
import Watch from "@/assets/svg/Watch"

// Reusable checkmark icon component
const CheckIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="#4F6BFF" />
    <path d="M14 24.5L21 31L34 17" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Reusable arrow icon component
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M5.33325 16H26.6666M26.6666 16L18.6666 8M26.6666 16L18.6666 24" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Section = styled.section({
  paddingBlock: "3rem",
  background: "#F8FAFC",
  "& .centerized": {
    display: "flex",
    justifyContent: "center",
  },
  "& h2": {
    textAlign: 'center',
    '& span': {
      background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
    }
  },
  "& p": {
    color: "#64748B",
    textAlign: "center",
  }
});
const Badge = styled.h3({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.625rem 1.25rem",
  borderRadius: "3rem",
  background: "linear-gradient(135deg, #EEF2FF 0%, #FDF4FF 100%)",
  border: "1px solid rgba(71, 111, 255, 0.15)",
  boxShadow: "0 4px 15px rgba(71, 111, 255, 0.08)",
  "@media (max-width: 991px)": {
    padding: "0.35rem 0.7rem",
  },
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


const FeatureList = styled.ul({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  width: "100%",
  marginBlockStart: "2rem",
  "@media (max-width: 1199px)": {
    gap: "1rem",
  },
  '& li': {
    width: "calc((100% - 6rem) / 4)",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    "@media (max-width: 1199px)": {
      gap: "1rem",
      width: "calc((100% - 3rem) / 4)",
    },
    "@media (max-width: 991px)": {
      width: "calc((100% - 2rem) / 2)",
    },
    "@media (max-width: 575px)": {
      width: "100%",
    },
    "&:hover .IconWrap": {
      opacity: 0,
      transform: "translateY(-1rem)",
      transition: "all 0.75s ease",
    },
    "&:hover .FeatureItem": {
      background: "linear-gradient(151.19deg, #ff7f0f1a 1.77%, #0036f50a 71.94% 71.94%)",
      transition: "all 1s ease",
      "& h4, p": {
        transform: "translateY(-3rem)",
        color: "#000",
      },
      "& h5, span": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
    '& .activity': {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& span": {
        height: "1.5rem",
        width: "1.5rem",
        display: "flex",
        flex: "0 0 1.5rem",
        alignItems: "center",
        opacity: 1,
        "& svg": {
          height: "100%",
          width: "100%",
        }
      }
    },
  }
});

const FeatureItem = styled.div({
  background: "#fff",
  borderRadius: "1rem",
  padding: "1.5rem",
  height: "100%",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  transition: "all 0.5s ease",
  "@media (max-width: 1199px)": {
    padding: "1rem",
  },
  '& h4': {
    fontWeight: '700',
    marginBlockEnd: '0.5rem',
    maxWidth: '80%',
    transition: "all 0.45s ease",
  },
  '& p': {
    marginBlockEnd: '0rem',
    fontSize: '0.875rem',
    maxWidth: '80%',
    textAlign: 'start',
    lineHeight: '1.7',
    transition: "all 0.45s ease",
  },
  '& .activity': {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& span": {
      height: "1.5rem",
      width: "1.5rem",
      display: "flex",
      alignItems: "center",
      opacity: 0,
      transform: "translateY(3rem)",
      transition: "all 0.45s ease",
      "& svg": {
        height: "100%",
        width: "100%",
      }
    }
  },
  "& h5": {
    fontWeight: 600,
    lineHeight: 1.3,
    marginBlock: "0.625rem",
    borderRadius: '1.875rem',
    backgroundColor: '#fff',
    padding: '0.625rem 1.25rem 0.625rem 2.5rem',
    display: 'inline-block',
    position: 'relative',
    opacity: 0,
    transform: "translateY(3rem)",
    transition: "all 0.45s ease",
    "@media (max-width: 991px)": {
      opacity: 1,
      transform: "translateY(0rem)",
      background: "linear-gradient(151.19deg, #ff7f0f1a 1.77%, #0036f50a 71.94% 71.94%)",
      fontSize:"0.875rem",
    },
    '&:after': {
      content: "''",
      position: 'absolute',
      height: '1rem',
      width: '1rem',
      left: '1rem',
      top: '50%',
      transform: "translateY(-50%)",
      backgroundImage: `url(${SparkleBg.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "contain",
      backgroundPosition: "center",
    }
  },
});

const IconWrap = styled.div({
  width: "3.625rem",
  height: "3.625rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  marginBlockEnd: "0.938rem",
  transition: "all 0.45s ease",
  "@media (max-width: 991px)": {
    width: "2.5rem",
    height: "2.5rem",
  },
  "& svg": {
    height: "100% !important",
    width: "100% !important",
  }

})


const StatItem = styled.div({
  background: "#fff",
  borderRadius: "1rem",
  padding: "1.5rem",
  height: "100%",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  "@media (max-width: 1199px)": {
    padding: "1rem",
  },
  '& h4': {
    marginBlockEnd: '0rem',
    fontSize: '2.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #476FFF 0%, #7B60FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    "@media (max-width: 991px)": {
      fontSize: '1.5rem',
    },
  },
  '& p': {
    textAlign: 'start',
    marginBlockEnd: '0rem',
    color: '#64748B',
    "@media (max-width: 1199px)": {
      fontSize: "0.875rem",
    },
  }
});
const CtaList = styled.div({
  "& h4": {
    fontSize: "1.875rem",
    marginBlockEnd: "0.5rem",
    fontWeight: "700",
    "@media (max-width: 1199px)": {
      fontSize: "1.5rem",
    },
  },
  "& p": {
    textAlign: "start",
    "@media (max-width: 1199px)": {
      fontSize: "0.875rem",
    },
  },
  "& ol": {
    padding: "0rem",
    margin: "0rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    "@media (max-width: 991px)": {
      gap: "0.2rem",
    },
    "& li": {
      fontSize: " 1rem",
      width: "100%",
      display: 'flex',
      gap: "0.5rem",
      flexDirection: "row",
      "@media (max-width: 991px)": {
        fontSize: "0.875rem",
      },
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
  padding: "1rem 2rem",
  borderRadius: "3rem",
  border: "none",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 700,
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  background: "linear-gradient(151.19deg, #476FFF 1.77%, #4600B6 71.94%)",
  transition: "all 0.4s ease",
  boxShadow: "0 4px 20px rgba(71, 111, 255, 0.3)",
          "@media (max-width: 991px)": {
      fontSize: "0.875rem",
        height: "2.625rem",
        borderRadius:"0.75rem",

    },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    background: "linear-gradient(331.19deg, #476FFF 1.77%, #4600B6 71.94%)",
    opacity: 0,
    transition: "opacity 0.5s ease",
    zIndex: 0,
  },
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 30px rgba(71, 111, 255, 0.4)",
  },
  "&:hover::after": {
    opacity: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
});

export default function Features() {
  return (
    <Section>
      <div className="container">
        <div className="centerized">
          <Badge>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span>Powerful Features</span>
          </Badge>
        </div>
        <h2>Built for<br /><span>Operational Excellence</span></h2>
        <p>Purpose-built for shift-based, multi-location operations with transparent automation and real-time visibility</p>
        <FeatureList role="list" aria-label="Key features of SevaHR">
          <li>
            <FeatureItem className="FeatureItem">
              <IconWrap className="IconWrap">
                <Watch />
              </IconWrap>
              <h4>Smart Attendance & Productivity</h4>
              <p>Automated time tracking with intelligent shift management and real-time insights</p>
              <div className="activity">
                <h5>98.4% Accuracy</h5>
                {/* <span><ArrowIcon /></span> */}
              </div>
            </FeatureItem>
          </li>

          <li>
            <FeatureItem className="FeatureItem">
              <IconWrap className="IconWrap">
                {/* <Image src={calculator} alt="" aria-hidden="true" /> */}
                <Calculator />
              </IconWrap>
              <h4>Transparent Salary Calculation</h4>
              <p>Auto-computed payroll with audit-ready accuracy, eliminating disputes completely</p>
              <div className="activity">
                <h5>Zero Disputes</h5>
                {/* <span><ArrowIcon /></span> */}
              </div>
            </FeatureItem>
          </li>

          <li>
            <FeatureItem className="FeatureItem">
              <IconWrap className="IconWrap">
                <PayrollIcon />
              </IconWrap>
              <h4>Multi-Level Payroll Engine</h4>
              <p>Scalable framework built specifically for factories with unlimited configurations</p>
              <div className="activity">
                <h5>Unlimited Configs</h5>
                {/* <span><ArrowIcon /></span> */}
              </div>
            </FeatureItem>
          </li>

          <li>
            <FeatureItem className="FeatureItem">
              <IconWrap className="IconWrap">
                {/* <Image src={location} alt="" aria-hidden="true" /> */}
                <Location />
              </IconWrap>
              <h4>Geo-Fencing & Live Tracking</h4>
              <p>Location-verified attendance with live workforce visibility for on-site accountability</p>
              <div className="activity">
                <h5>Real-time GPS</h5>
                {/* <span><ArrowIcon /></span> */}
              </div>
            </FeatureItem>
          </li>

          <li>
            <FeatureItem className="FeatureItem">
              <IconWrap className="IconWrap">
                {/* <Image src={privacy} alt="" aria-hidden="true" /> */}
                <Privacy />
              </IconWrap>
              <h4>100% Compliance Automation</h4>
              <p>EPF, ESI, PT, LWF, TDS fully auto-generated with state-wise accuracy</p>
              <div className="activity">
                <h5>100% Audit-Ready</h5>
                {/* <span><ArrowIcon /></span> */}
              </div>
            </FeatureItem>
          </li>

          <li>
            <StatItem>
              <div className="activity">
                <h4>5+</h4>
                <span><ArrowIcon /></span>
              </div>
              <p>Core Modules</p>
            </StatItem>
            <StatItem>
              <div className="activity">
                <h4>Cloud</h4>
                <span><ArrowIcon /></span>
              </div>
              <p>Based Platform</p>
            </StatItem>
          </li>
          <li>
            <StatItem>
              <div className="activity">
                <h4>20+</h4>
                <span><ArrowIcon /></span>
              </div>
              <p>Smart Features</p>
            </StatItem>
            <StatItem>
              <div className="activity">
                <h4>99.9%</h4>
                <span><ArrowIcon /></span>
              </div>
              <p>System Uptime</p>
            </StatItem>
          </li>
          <li>
            <CtaList>
              <h4>Ready to Transform?</h4>
              <p>Experience the future of manufacturing HR management</p>
              <ol>
                <li>
                  <div><CheckIcon /></div>
                  Free 14-day Trial
                </li>
                <li>
                  <div><CheckIcon /></div>
                  Setup in 24 Hours
                </li>
                <li>
                  <div><CheckIcon /></div>
                  Dedicated Support
                </li>
              </ol>
            </CtaList>
            <CtaButton type="button" aria-label="Book a free demo of SevaHR">
              <span>Book Free Demo</span>
            </CtaButton>
          </li>
        </FeatureList>
      </div>
    </Section>
  )
}
