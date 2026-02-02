"use client"
import React from "react"
import styled from "styled-components"
import Image from "next/image"
import Badge1 from "../assets/badge1.svg"
import Badge2 from "../assets/badge2.svg"
import Badge3 from "../assets/badge3.svg"

const Section = styled.section({
  paddingBlockEnd: "3.5rem",
    "@media (max-width: 575px)": {
    paddingBlockEnd: "1.5rem",
  },
})

const SectionRow = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "3rem",
  background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
  padding: "2.5rem",
  borderRadius: "2rem",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-20%",
    width: "60%",
    height: "100%",
    background: "radial-gradient(circle, rgba(71, 111, 255, 0.15) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-30%",
    right: "-10%",
    width: "50%",
    height: "80%",
    background: "radial-gradient(circle, rgba(123, 96, 255, 0.12) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  "@media (max-width: 1199px)": {
    flexDirection: "column",
    padding: "2rem",
    gap: "0.5rem",
  },
  "@media (max-width: 575px)": {
    padding: "1rem 0.75rem",
    borderRadius: "1rem",
  },
})

const Left = styled.div({
  width: "35%",
  position: "relative",
  zIndex: 1,
  "@media (max-width: 1199px)": {
    width: "100%",
  },
  "& h3": {
    color: "#fff",
    borderRadius: "1.875rem",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "0.625rem 1.25rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    fontSize: "0.875rem",
    "@media (max-width: 991px)": {
      padding: "0.35rem 0.7rem",
    },
    "@media (max-width: 575px)": {
      padding: "0.2rem 0.5rem",
      fontSize: "0.688rem",
      gap: "0.2rem",
    },
  },
  "& h2": {
    fontSize: "2.25rem",
    background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)',
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    "@media (max-width: 991px)": {
      fontSize: "2rem",
    },
    "@media (max-width: 575px)": {
      fontSize: "1.5rem",
    },
  },
  "& p": {
    color: "#fff",
  },
})

const Right = styled.div({
  width: "65%",
  position: "relative",
  zIndex: 1,
  "@media (max-width: 1199px)": {
    width: "100%",
  },
})

const CardList = styled.ul({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
  listStyle: "none",
  padding: 0,
  margin: 0,
  "@media (max-width: 767px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
    "@media (max-width: 575px)": {
      gap: "0.5rem",
  },
})

const Card = styled.li({
  padding: "1.25rem",
  borderRadius: "1rem",
  transition: "all .3s ease",
  cursor: "default",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  '@media (max-width: 991px)': {
    padding: "0.75rem 1rem",
  },
  "@media (max-width: 575px)": {
    padding: "0.2rem 0.5rem",
    borderRadius: "0.688rem",
    gap: "0.5rem",
  },
  "&:hover": {
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    transform: "translateY(-2px)",
  },

  "& h4": {
    fontSize: "1.125rem",
    fontWeight: "700",
    marginBlockEnd: "0.125rem",
    color: "#fff",
    "@media (max-width: 1199px)": {
      fontSize: "1rem",
    },
    "@media (max-width: 575px)": {
      fontSize: "0.875rem",
      marginBlockEnd:"0rem",
    },
  },

  "& span": {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#fff",
    "@media (max-width: 575px)": {
      fontSize: "0.75rem",
    },
  },
})

const Icon = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "2.5rem",
  width: "2.5rem",
  borderRadius: "0.75rem",
  background: "linear-gradient(135deg, rgba(71, 111, 255, 0.3) 0%, rgba(123, 96, 255, 0.3) 100%)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  flexShrink: 0,
  "@media (max-width: 575px)": {
    height: "1.25rem",
    width: "1.25rem",
    borderRadius: "0.325rem",
  },
  "& img": {
    height: "1.25rem",
    width: "1.25rem",
    filter: "brightness(0) invert(1)",
    "@media (max-width: 575px)": {
      height: "0.75rem",
      width: "0.75rem",
      borderRadius: "0.325rem",
    },
  },
})

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#sparkleGrad)" />
    <defs>
      <linearGradient id="sparkleGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA" />
        <stop offset="1" stopColor="#A78BFA" />
      </linearGradient>
    </defs>
  </svg>
)

const cardData = [
  {
    title: "ISO 27001",
    subtitle: "Certified Ready",
    image: Badge1,
  },
  {
    title: "Bank-Grade",
    subtitle: "Security",
    image: Badge1,
  },
  {
    title: "Fully Compliant",
    subtitle: "EPF, ESI, TDS",
    image: Badge2,
  },
  {
    title: "100+",
    subtitle: "Organisations",
    image: Badge2,
  },
  {
    title: "10,000+",
    subtitle: "Employees Managed",
    image: Badge3,
  },
  {
    title: "100%",
    subtitle: "Compliance Rate",
    image: Badge3,
  },
]

export default function Revolutionhr() {
  return (
    <Section>
      <div className="container">
        <SectionRow>
          <Left>
            <h3>
              <SparkleIcon />
              We are Seva HR
            </h3>
            <h2>
              Revolutionize Your HR Management
            </h2>
            <p>
              Complete workforce management solution built for complex
              operations — from manufacturing floors, healthcare facilities,
              logistics centers to service industries.
            </p>
          </Left>

          <Right>
            <CardList>
              {cardData.map((item, index) => (
                <Card key={index}>
                  <Icon>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={60}
                      height={60}
                    />
                  </Icon>

                  <div className="points">
                    <h4>{item.title}</h4>
                    <span>{item.subtitle}</span>
                  </div>
                </Card>
              ))}
            </CardList>
          </Right>
        </SectionRow>
      </div>
    </Section>
  )
}
