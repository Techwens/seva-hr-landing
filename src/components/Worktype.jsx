"use client"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"


const featureData = [
  {
    step: 1,
    title: "Automate Time & Attendance",
    desc: "Geo-Attendance → Smart Overtime → Productivity Tracking",
    points: [
      "GPS-verified clock in/out",
      "Automatic shift detection",
      "Real-time attendance dashboard",
    ],
    svg: <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="iconGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stop-color="#FF6A00" />
          <stop offset="100%" stop-color="#7C3AED" />
        </linearGradient>
      </defs>

      <path
        d="M20.5 41C9.19596 41 0 31.804 0 20.5C0 9.19596 9.19596 0 20.5 0C31.804 0 41 9.19596 41 20.5C41 31.804 31.804 41 20.5 41ZM20.5 3.41667C11.0803 3.41667 3.41667 11.0803 3.41667 20.5C3.41667 29.9198 11.0803 37.5833 20.5 37.5833C29.9198 37.5833 37.5833 29.9198 37.5833 20.5C37.5833 11.0803 29.9198 3.41667 20.5 3.41667ZM29.0417 20.5C29.0417 19.5553 28.278 18.7917 27.3333 18.7917H22.2083V10.25C22.2083 9.30529 21.443 8.54167 20.5 8.54167C19.557 8.54167 18.7917 9.30529 18.7917 10.25V20.5C18.7917 21.4447 19.557 22.2083 20.5 22.2083H27.3333C28.278 22.2083 29.0417 21.4447 29.0417 20.5Z"
        fill="url(#iconGradient)"
      />
    </svg>

  },
  {
    step: 2,
    title: "Run Payroll in 3 Clicks",
    desc: "Attendance → Deductions → Net Salary → Compliance Files",
    points: [
      "One-click payroll processing",
      "Auto salary components calculation",
      "Instant payslip generation",
    ],
    svg: <svg width="43" height="41" viewBox="0 0 43 41" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FF6600" />
          <stop offset="106.8%" stop-color="#7B60FF" />
        </linearGradient>
      </defs>

      <path
        d="M29.9615 3.15385H28.3846V1.57692C28.3846 0.704885 27.6797 0 26.8077 0C25.9357 0 25.2308 0.704885 25.2308 1.57692V3.15385H12.6154V1.57692C12.6154 0.704885 11.9105 0 11.0385 0C10.1664 0 9.46154 0.704885 9.46154 1.57692V3.15385H7.88461C3.53704 3.15385 0 6.69088 0 11.0385V29.9615C0 34.3091 3.53704 37.8462 7.88461 37.8462H22.0769C22.949 37.8462 23.6538 37.1413 23.6538 36.2692C23.6538 35.3972 22.949 34.6923 22.0769 34.6923H7.88461C5.27638 34.6923 3.15385 32.5698 3.15385 29.9615V15.7692H26.8077C27.6797 15.7692 28.3846 15.0643 28.3846 14.1923C28.3846 13.3203 27.6797 12.6154 26.8077 12.6154H3.15385V11.0385C3.15385 8.43023 5.27638 6.30769 7.88461 6.30769H29.9615C32.5698 6.30769 34.6923 8.43023 34.6923 11.0385V14.1923C34.6923 15.0643 35.3972 15.7692 36.2692 15.7692C37.1413 15.7692 37.8462 15.0643 37.8462 14.1923V11.0385C37.8462 6.69088 34.3091 3.15385 29.9615 3.15385Z"
        fill="url(#iconGradient)"
      />

      <path
        d="M35.0425 40.9998C34.4318 40.9998 33.8458 40.7587 33.4119 40.3289L25.9584 32.9468C25.4929 32.4858 25.231 31.8577 25.231 31.2025C25.231 29.8466 26.3301 28.7475 27.686 28.7475H30.4068C31.9793 28.7475 33.1559 28.4195 33.9365 27.7632C34.7171 27.1071 35.1074 26.1511 35.1074 24.8954V24.8614C35.1074 23.5717 34.7171 22.6101 33.9365 21.9765C33.1559 21.3317 31.9793 21.0093 30.4068 21.0093H26.6819C25.8806 21.0093 25.231 20.3597 25.231 19.5583C25.231 18.757 25.8806 18.1074 26.6819 18.1074H32.1207C33.7724 18.1074 35.1866 18.3733 36.3631 18.905C37.5398 19.4367 38.4448 20.2117 39.0784 21.2299C39.7119 22.2481 40.0287 23.4869 40.0287 24.9463V24.9802C40.0287 26.4283 39.7119 27.6897 39.0784 28.7644C38.4448 29.8279 37.5284 30.6595 36.3292 31.2591C35.1413 31.8473 33.7102 32.1414 32.0359 32.1414H30.4872C30.08 32.1414 29.8713 31.6535 30.1524 31.359L36.6562 37.0194C38.1499 38.4688 37.1239 40.9998 35.0425 40.9998Z"
        fill="url(#iconGradient)"
      />
    </svg>

  },
  {
    step: 3,
    title: "Stay Audit-Ready Always",
    desc: "EPF/ESI/PT/TDS Challans → Form 16 → Labour Registers",
    points: [
      "Auto-generated compliance reports",
      "State-wise statutory filing",
      "Digital labour registers",
    ],
    svg: <svg width="41" height="41" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FF6600" />
          <stop offset="106.8%" stop-color="#7B60FF" />
        </linearGradient>
      </defs>
      <path d="M39.4095 15.2588C37.2893 13.1405 33.8401 13.1405 31.7217 15.2588L23.002 23.9782C21.3892 25.5908 20.5009 27.7348 20.5009 30.0171V32.4583C20.5009 33.403 21.2662 34.1667 22.2093 34.1667H24.6506C26.9313 34.1667 29.0753 33.2766 30.6915 31.664L39.4112 22.9446C41.5296 20.8263 41.5296 17.3755 39.4112 15.2571L39.4095 15.2588ZM36.9938 20.5308L28.2741 29.2501C27.3054 30.217 26.0173 30.7517 24.6489 30.7517H23.916V30.0188C23.916 28.6693 24.4626 27.3504 25.4159 26.3955L34.1356 17.6761C34.9232 16.8886 36.2045 16.8886 36.9904 17.6761C37.7779 18.4637 37.7779 19.7449 36.9904 20.5325L36.9938 20.5308Z" fill="url(#iconGradient)" />
      <path d="M27.3891 10.0382C27.6249 9.12421 28.5543 8.56558 29.4717 8.81158C30.22 9.00292 30.9375 9.29846 31.6072 9.68454C32.4238 10.156 32.704 11.2015 32.2325 12.0181C31.9147 12.5648 31.3424 12.8723 30.7513 12.8723C30.4626 12.8723 30.1687 12.7988 29.8988 12.6434C29.4973 12.411 29.0651 12.2351 28.6175 12.1172C27.7035 11.8815 27.1551 10.9487 27.3909 10.0365L27.3891 10.0382Z" fill="url(#iconGradient)" />
      <path d="M34.7336 36.7309C33.2097 39.3634 30.3754 41 27.3345 41H13.6672C8.95716 41 5.12521 37.1682 5.12521 32.4583V29.0417C5.12521 28.097 5.89058 27.3333 6.83362 27.3333C7.77666 27.3333 8.54202 28.097 8.54202 29.0417V32.4583C8.54202 35.2839 10.8415 37.5833 13.6672 37.5833H27.3345C29.159 37.5833 30.8606 36.601 31.7746 35.0191C32.2478 34.2025 33.2934 33.9207 34.1083 34.3973C34.9266 34.8688 35.2068 35.9143 34.7336 36.7309Z" fill="url(#iconGradient)" />
      <path d="M23.9177 11.9583C23.9177 5.36588 18.5533 0 11.9588 0C5.36439 0 0 5.36588 0 11.9583C0 18.5508 5.36439 23.9167 11.9588 23.9167C18.5533 23.9167 23.9177 18.5508 23.9177 11.9583ZM3.41681 11.9583C3.41681 7.24846 7.24876 3.41667 11.9588 3.41667C16.6689 3.41667 20.5009 7.24846 20.5009 11.9583C20.5009 16.6682 16.6689 20.5 11.9588 20.5C7.24876 20.5 3.41681 16.6682 3.41681 11.9583Z" fill="url(#iconGradient)" />
      <path d="M13.6331 15.9319C12.8609 16.6938 11.8358 17.0782 10.8091 17.0782C9.78232 17.0782 8.75216 16.6938 7.96629 15.9268L6.03238 14.034C5.35756 13.3728 5.34731 12.2915 6.00675 11.6184C6.66619 10.9436 7.74761 10.9333 8.42243 11.591L10.3563 13.4839C10.6024 13.7265 11.0038 13.7248 11.2481 13.4839L15.0459 9.83829C15.7259 9.18742 16.809 9.20621 17.4616 9.88783C18.1159 10.5677 18.0937 11.6491 17.4121 12.3034L13.6331 15.9319Z" fill="url(#iconGradient)" />
    </svg>

  },
]



const Section = styled.section({
  paddingBlock: "3.5rem",
  position: "relative",
      "@media (max-width: 991px)": {
  paddingBlock: "2rem",
  },
  "&::after": {
    content: '""',
    width: '50vw',
    height: '80vh',
    borderRadius: '50%',
    backgroundColor: 'rgb(36 166 252 / 15%)',
    filter: 'blur(3.75rem)',
    position: 'absolute',
    top: '-5rem',
    right: '0',
    zIndex: "-1",
  },
  "&::before": {
    content: '""',
    width: '50vw',
    height: '80vh',
    borderRadius: '50%',
    backgroundColor: 'rgb(123 96 255 / 17%)',
    filter: 'blur(3.75rem)',
    position: 'absolute',
    top: '-5rem',
    left: '0',
    zIndex: "-1",
  },
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
    padding: "0.5rem 0.9rem",
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
});
const Subtitle = styled.p({
  color: "#64748B",
  maxWidth: "38rem",
  margin: "0 auto",
  textAlign: "center",
});
const SectionRow = styled.div({
  borderRadius: "2.5rem",
  boxShadow: "0px 4px 36px 0px #0000001A",
  background: "#fff",
  padding: "2rem 4rem",
  "@media (max-width: 991px)": {
    padding: "2rem 1rem",
  },
});



export const CardGrid = styled.ul({
  listStyle: "none",
  padding: 0,
  margin: "3.75rem 0 0 0",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "3.125rem",
  "@media (max-width: 1199px)": {
    gap: "1rem",
  },
    "@media (max-width: 991px)": {
    gap: "0.5rem",
      margin: "3.75rem 0 0 0",
  },
  "@media (max-width: 575px)": {
    gridTemplateColumns: "1fr",
  },
});

export const FeatureCard = styled.li({
  position: "relative",
  padding: "1.75rem",
  borderRadius: "1.25rem",
  background: "#fff",
  border: "1px solid #E6E9FF",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  transition: "all 0.35s ease",
  "@media (max-width: 991px)": {
    padding: "1rem",
  },
  "& p": {
    textAlign: "start",
    marginBlockEnd: "0.75rem",
    fontSize: "0.875rem",
  },
  "& h4": {
    fontSize: "1.125rem",
    marginBlockEnd: "0.5rem",
    transition: "all 0.5s ease",
    "@media (max-width: 991px)": {
    fontSize: "0.875rem",
  },
  },
  "&:hover": {
    borderColor: "#f5630f",
    boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
  },
  "&:hover .step": {
    background: "linear-gradient(90deg, #FF6600 0%, #7B60FF 106.8%)",
    color: "#fff",
    transition: "all 0.5s ease",
  },
  "&:hover h4": {
    background: "linear-gradient(90deg, #FF6A00, #7C3AED)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  "&:hover .IconBox": {
    "& svg": {
      "& path": {
        fill: "url(#iconGradient)",
      }
    }
  },
});

export const Step = styled.div({
  position: "absolute",
  top: "-2rem",
  right: "0rem",
  width: "5rem",
  height: "5rem",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2.5rem",
  fontWeight: 700,
  background: "linear-gradient(169.67deg, #EEFFFF 7.71%, #EEE2FF 92.75%)",
  color: "#000",
  transition: "all 0.5s ease",
    "@media (max-width: 991px)": {
      width: "3.25rem",
  height: "3.25rem",
  fontSize: "1.5rem",
  top: "-1rem",


  },
});

export const IconBox = styled.div({
  width: "2.75rem",
  height: "2.75rem",
  marginBlockEnd: "0.75rem",
  display: "flex",
  alignItems: "center",
  "@media (max-width: 991px)": {
      width: "1.75rem",
  height: "1.75rem",
  },
  "& svg": {
    height: "100%",
    width: "100%",
    "& path": {
      fill: "#000",
    }
  }
});

export const Points = styled.ol({
  paddingInlineStart: "1.25rem",
  listStyle: "none",
  margin: 0,
  padding: "0rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  "& li": {
    display: 'flex',
    gap: "0.5rem",
    fontSize: "0.875rem",
    "& div": {
      height: '0.75rem',
      width: '0.75rem',
      "& svg": {
        height: '100%',
        width: '100%',
      }
    }
  },
})


export default function Worktype() {
  return (
    <Section>
      <div className="container">
        <SectionRow>
          <div className="centerized">
            <Badge>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span>Simple Process</span>
            </Badge>
          </div>
          <h2>How<br /><span>SEVA HRMS Works</span></h2>
          <Subtitle>Three simple steps to transform your workforce management from chaos to control</Subtitle>
          <CardGrid>
            {featureData.map((item, index) => (
              <FeatureCard key={index}>
                <Step className="step">{item?.step}</Step>
                <IconBox className="IconBox">
                  {item?.svg}
                </IconBox>
                <h4 className="bold">{item?.title}</h4>
                <p>{item?.desc}</p>
                <Points>
                  {item?.points.map((point, i) => (
                    <li key={i}>
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
                      {point}</li>
                  ))}
                </Points>
              </FeatureCard>
            ))}
          </CardGrid>
        </SectionRow>
      </div>
    </Section>
  )
}
