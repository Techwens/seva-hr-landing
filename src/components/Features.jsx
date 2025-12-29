"use client"
import React from "react"
import styled from "styled-components"
// import Image from "../assets/TextureBg.png"
import TextureBg from "../assets/TextureBg.png"
import SparkleBg from "../assets/sparkle.svg"
import Image from "next/image"
import calculator from "../assets/calculator.svg"
import email from "../assets/email.svg"
import location from "../assets/location.svg"
import privacy from "../assets/privacy.svg"
import watch from "../assets/watch.svg"
import Spotify from "../assets/image 1.svg"

const Section = styled.section({
  paddingBlock: "3.5rem",
  background: "#BBD8F2",
  backgroundImage: `linear-gradient(186deg, rgb(187 216 242 / 93%) 0%, rgb(237 240 206 / 83%) 100%), url(${TextureBg.src})`,
  backgroundRepeat: "repeat",

  "& .centerized": {
    display: "flex",
    justifyContent: "center",
  },
  "& h3": {
    fontWeight: 600,
    lineHeight: 1.3,
    color: '#004CAE',
    marginBlockEnd: "0.625rem",
    borderRadius: '1.875rem',
    backgroundColor: '#fff',
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
  '& li': {
    width: "calc((100% - 6rem) / 4)",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    gap: "2rem",

    "@media (max-width: 991px)": {
      width: "calc((100% - 2rem) / 2)",
    },

    "@media (max-width: 575px)": {
      width: "100%",
    },
  }
})

const FeatureItem = styled.div({
  background: "#fff",
  borderRadius: "1rem",
  padding: "1.5rem",
  height: "100%",
  '& h4': {
    fontWeight: '700',
    marginBlockEnd: '0.5rem',
    maxWidth: '80%',
  },
  '& p': {
    marginBlockEnd: '0rem',
    fontSize: '0.875rem',
    maxWidth: '80%',
    textAlign: 'start',
    lineHeight: '1.7',
  }
})


const IconWrap = styled.div({
  width: "3.625rem",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  marginBlockEnd: "0.938rem",
    "& img":{
      height:"100% !important",
      width:"100% !important",
    }
})

const StatItem = styled.div({
  background: "#fff",
  borderRadius: "1rem",
  padding: "1.5rem",
  height: "100%",
  '& h4': {
    marginBlockEnd: '0rem',
    fontSize: '2.5rem',
    fontWeight: '700',
    background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 43.8%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  },
  '& p': {
    textAlign: 'start',
    marginBlockEnd: '0rem',
  }
})




const CtaList = styled.div({
  "& h4": {
    fontSize: "1.875rem",
    marginBlockEnd: "0.5rem",
    fontWeight: "700",
  },
  "& p": {
    textAlign: "start",
  },
  "& ol": {
    padding: "0rem",
    margin: "0rem",
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
})

const CtaButton = styled.button({
  padding: "1rem 1rem",
  borderRadius: "999px",
  border: "none",
  background: "linear-gradient(151.19deg, #476FFF 1.77%, #4600B6 71.94%)",
  color: "#fff",
  fontSize: "1.125rem",
  fontWeight: 700,
  cursor: "pointer",
  maxWidth: "14.375rem",
})

export default function Features() {
  return (
    <Section>
      <div className="container">
        <div className="centerized">
          <h3>Powerful Features</h3>
        </div>
        <h2>Built for <span>Operational Excellence</span></h2>
        <p>Purpose-built for shift-based, multi-location operations with transparent automation and real-time visibility</p>
        <FeatureList>
          <li>
            <FeatureItem>
              <IconWrap>
                <Image src={watch}/>
              </IconWrap>
              <h4>Smart Attendance & Productivity</h4>
              <p>Automated time tracking with intelligent shift management and real-time insights</p>
            </FeatureItem>
          </li>

          <li>
            <FeatureItem>
              <IconWrap>
                <Image src={calculator}/>
              </IconWrap>
              <h4>Transparent Salary Calculation</h4>
              <p>Auto-computed payroll with audit-ready accuracy, eliminating disputes completely</p>
            </FeatureItem>
          </li>

          <li>
            <FeatureItem>
              <IconWrap>
                <Image src={email}/>
              </IconWrap>
              <h4>Multi-Level Payroll Engine</h4>
              <p>Scalable framework built specifically for factories with unlimited configurations</p>
            </FeatureItem>
          </li>


          <li>
            <FeatureItem>
              <IconWrap>
                <Image src={location}/>
              </IconWrap>
              <h4>Geo-Fencing & Live Tracking</h4>
              <p>Location-verified attendance with live workforce visibility for on-site accountability</p>
            </FeatureItem>
          </li>

          <li>
            <FeatureItem>
              <IconWrap>
                <Image src={privacy}/>
              </IconWrap>
              <h4>100% Compliance Automation</h4>
              <p>EPF, ESI, PT, LWF, TDS fully auto-generated with state-wise accuracy</p>
            </FeatureItem>
          </li>

          <li>
            <StatItem>
              <h4>5+</h4>
              <p>Core Modules</p>
            </StatItem>
            <StatItem>
              <h4>Cloud</h4>
              <p>Based Platform</p>
            </StatItem>
          </li>
          <li>
            <StatItem>
              <h4>20+</h4>
              <p>Smart Features</p>
            </StatItem>
            <StatItem>
              <h4>99.9%</h4>
              <p>System Uptime</p>
            </StatItem>
          </li>
          <li>
            <CtaList>
              <h4>Ready to Transform?</h4>
              <p>Experience the future of manufacturing HR management</p>
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
            <CtaButton>Book Free Demo</CtaButton>
          </li>
        </FeatureList>
      </div>
    </Section>
  )
}
