"use client"
import React from "react"
import styled from "styled-components"

const Section = styled.section({
  paddingBlock: "3rem",
})

const ContentWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2rem",
  "@media (max-width: 1199px)": {
    flexDirection: "column",
    gap: "1.5rem",
  },
})

const LeftSection = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "2.5rem",
  "@media (max-width: 575px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.5rem",
  },
})

const StatItem = styled.div({
  textAlign: "center",
  "@media (max-width: 575px)": {
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
})

const StatValue = styled.div({
  fontSize: "2.25rem",
  fontWeight: 800,
  background: "linear-gradient(90deg, #476FFF 0%, #7B60FF 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  lineHeight: 1.1,
  "@media (max-width: 767px)": {
    fontSize: "1.75rem",
  },
})

const StatLabel = styled.p({
  margin: 0,
  fontSize: "0.875rem",
  color: "#64748B",
  fontWeight: 500,
  marginBlockStart: "0.25rem",
  "@media (max-width: 767px)": {
    marginBlockStart: 0,
  },
})

const Divider = styled.div({
  width: "1px",
  height: "3rem",
  background: "linear-gradient(180deg, transparent, #E2E8F0, transparent)",
  "@media (max-width: 767px)": {
    display: "none",
  },
})

const RightSection = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
})

const IndustryLabel = styled.span({
  fontSize: "0.875rem",
  color: "#64748B",
  fontWeight: 500,
  whiteSpace: "nowrap",
})

const IndustryTags = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.625rem",
  "@media (max-width: 991px)": {
    gap: "0.5rem",
  },

})

const IndustryTag = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem 1rem",
  background: "#fff",
  borderRadius: "2rem",
  border: "1px solid #E2E8F0",
  transition: "all 0.2s ease",
  "@media (max-width: 991px)": {
    padding: "0.3rem 0.5rem",
    gap: "0.25rem",

  },
  "&:hover": {
    borderColor: "rgba(71, 111, 255, 0.3)",
    background: "#F8FAFC",
    transform: "translateY(-1px)",
  },
  "& svg": {
    width: "1.125rem",
    height: "1.125rem",
    color: "#476FFF",
  },
  "& span": {
    fontSize: "0.813rem",
    fontWeight: 500,
    color: "#374151",
    pointerEvents:"none",
  },
})

const industries = [
  {
    name: "Manufacturing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: "Healthcare",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Logistics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    name: "Retail",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    name: "Hospitality",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

export default function Organizations() {
  return (
    <Section>
      <div className="container">
        <ContentWrapper>
          <LeftSection>
            <StatItem>
              <StatValue>10,000+</StatValue>
              <StatLabel>Employees Managed</StatLabel>
            </StatItem>
            <Divider />
            <StatItem>
              <StatValue>100%</StatValue>
              <StatLabel>Compliance Rate</StatLabel>
            </StatItem>
            <Divider />
            <StatItem>
              <StatValue>99.9%</StatValue>
              <StatLabel>Uptime</StatLabel>
            </StatItem>
          </LeftSection>

          <RightSection>
            <IndustryLabel>Built for:</IndustryLabel>
            <IndustryTags>
              {industries.map((industry, index) => (
                <IndustryTag key={index}>
                  {industry.icon}
                  <span>{industry.name}</span>
                </IndustryTag>
              ))}
            </IndustryTags>
          </RightSection>
        </ContentWrapper>
      </div>
    </Section>
  )
}
