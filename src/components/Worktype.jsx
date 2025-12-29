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
  },
]



const Section = styled.section({
  paddingBlock: "3.5rem",
  "& .centerized": {
    display: "flex",
    justifyContent: "center",
  },
  "& h3": {
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.3,
    color: '#000',
    marginBlockEnd: "0.625rem",
    borderRadius: '1.875rem',
    background: 'linear-gradient(90deg, #D6FCFF 0%, #FFF2D8 100%)',
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
      backgroundImage: 'url(../assets/sparkle.svg)',
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
});
const SectionRow = styled.div({
  borderRadius: "2.5rem",
  boxShadow: "0px 4px 36px 0px #0000001A",
  background: "#fff",
  padding: "2rem 4rem",
});



export const CardGrid = styled.ul({
  listStyle: "none",
  padding: 0,
  margin: "3.75rem 0 0 0",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "3.125rem",
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
  "& p": {
    textAlign: "start",
    marginBlockEnd: "0.75rem",
    fontSize: "0.875rem",
  },
  "& h4": {
    fontSize: "1.125rem",
    marginBlockEnd: "0.5rem",
    transition: "all 0.5s ease",
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
});

export const IconBox = styled.div({
  width: "2.75rem",
  height: "2.75rem",
  marginBlockEnd: "0.75rem",
  display: "flex",
  alignItems: "center",
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
            <h3>Simple Processs</h3>
          </div>
          <h2>How <span>SEVA HRMS Works</span></h2>
          <p>Three simple steps to transform your workforce management from chaos to control</p>
          <CardGrid>
            {featureData.map((item, index) => (
              <FeatureCard key={index}>
                <Step className="step">{item?.step}</Step>
                <IconBox>
                  {/* Your SVG icon here */}
                </IconBox>
                <h4 className="bold">{item?.title}</h4>
                <p>{item.desc}</p>
                <Points>
                  {item.points.map((point, i) => (
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
