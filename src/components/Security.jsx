"use client"
import React from "react"
import styled from "styled-components"

const Section = styled.section({
  paddingBlock: "3rem 5rem",
  position: "relative",
  overflow: "hidden",
  background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F0F4FF 100%)",
  "@media (max-width: 1199px)": {
    paddingBlock: "3rem",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "10%",
    left: "-10%",
    width: "35rem",
    height: "35rem",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(71, 111, 255, 0.08) 0%, transparent 60%)",
    pointerEvents: "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "5%",
    right: "-15%",
    width: "40rem",
    height: "40rem",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(123, 96, 255, 0.06) 0%, transparent 60%)",
    pointerEvents: "none",
  },
})

const Container = styled.div({
  position: "relative",
  zIndex: 1,
})

// Floating accent shapes
const FloatingShape = styled.div(({ $top, $left, $right, $bottom, $size, $color, $delay }) => ({
  position: "absolute",
  width: $size || "3rem",
  height: $size || "3rem",
  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
  background: $color || "linear-gradient(135deg, rgba(71, 111, 255, 0.1) 0%, rgba(123, 96, 255, 0.1) 100%)",
  top: $top,
  left: $left,
  right: $right,
  bottom: $bottom,
  animation: `float 6s ease-in-out infinite`,
  animationDelay: $delay || "0s",
  "@keyframes float": {
    "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
    "50%": { transform: "translateY(-1rem) rotate(10deg)" },
  },
  "@media (max-width: 991px)": {
    display: "none",
  },
}))

const HeaderSection = styled.div({
  textAlign: "center",
  marginBlockEnd: "4rem",
  position: "relative",
})

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
})

const Title = styled.h2({
  "& span": {
    display: "inline-block",
    background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)',
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
})

const Subtitle = styled.p({
  color: "#64748B",
  maxWidth: "38rem",
  margin: "0 auto",
})

// Main content with asymmetric layout
const MainGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: "4rem",
  alignItems: "start",
  "@media (max-width: 1199px)": {
    gap: "2rem",
  },
  "@media (max-width: 991px)": {
    gridTemplateColumns: "1fr",
    gap: "3rem",
  },
})

// Left side - staggered cards
const LeftContent = styled.div({
  position: "relative",
})

const CertRow = styled.div({
  display: "flex",
  gap: "0.5rem",
  marginBlockEnd: "2rem",
  flexWrap: "wrap",
})

const CertBadge = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: "0.875rem",
  background: "#fff",
  borderRadius: "1rem",
  border: "1px solid rgba(16, 185, 129, 0.15)",
  boxShadow: "0 4px 20px rgba(16, 185, 129, 0.08)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 8px 30px rgba(16, 185, 129, 0.15)",
  },
})

const CertIcon = styled.div({
  width: "2.25rem",
  height: "2.25rem",
  borderRadius: "0.75rem",
  background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    width: "1.125rem",
    height: "1.125rem",
    color: "#fff",
  },
})

const CertText = styled.div({
  "& p": {
    margin: 0,
    fontSize: "0.875rem",
    fontWeight: 700,
    color: "#1a1a1a",
  },
  "& span": {
    fontSize: "0.75rem",
    color: "#64748B",
    fontWeight: 500,
  },
})

// Feature cards with stagger effect
const FeatureStack = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "@media (max-width: 991px)": {
    gap: "0.5rem",

  },
})

const FeatureCard = styled.div(({ $offset }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
  padding: "1.5rem",
  background: "#fff",
  borderRadius: "1.25rem",
  border: "1px solid rgba(71, 111, 255, 0.08)",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)",
  marginLeft: $offset || "0",
  transition: "all 0.4s ease",
  position: "relative",
  "@media (max-width: 991px)": {
    padding: "0.75rem 1rem ",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    padding: "2px",
    background: "linear-gradient(135deg, rgba(71, 111, 255, 0.2) 0%, rgba(123, 96, 255, 0.2) 100%)",
    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover": {
    transform: "translateX(0.5rem) translateY(-3px)",
    boxShadow: "0 12px 40px rgba(71, 111, 255, 0.12)",
    "&::before": {
      opacity: 1,
    },
  },
  "@media (max-width: 768px)": {
    marginLeft: "0",
  },
}))

const FeatureIcon = styled.div({
  width: "3.25rem",
  height: "3.25rem",
  borderRadius: "1rem",
  background: "linear-gradient(135deg, #476FFF 0%, #7B60FF 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  "@media (max-width: 991px)": {
    width: "2.85rem",
    height: "2.85rem",
  },
  "& svg": {
    width: "1.5rem",
    height: "1.5rem",
    color: "#fff",
  },
})

const FeatureContent = styled.div({
  flex: 1,
  "& h4": {
    fontSize: "1.125rem",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBlockEnd: "0.25rem",
  },
  "& p": {
    fontSize: "0.875rem",
    color: "#64748B",
    margin: 0,
    lineHeight: 1.5,
  },
})

const FeatureCheck = styled.div({
  width: "1.75rem",
  height: "1.75rem",
  borderRadius: "50%",
  background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    width: "1rem",
    height: "1rem",
    color: "#10B981",
  },
})

// Right side - visual showcase
const RightContent = styled.div({
  position: "relative",
})

// Shield visual with animated rings
const ShieldSection = styled.div({
  position: "relative",
  padding: "2rem",
  marginBlockEnd: "2rem",
  maxWidth: "31.25rem",
  marginInline: "auto",
  "@media (max-width: 1199px)": {
    marginBlockEnd: "0rem",
  },
})

const ShieldVisual = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  height: "16rem",
})

const AnimatedRing = styled.div(({ $size, $delay, $opacity }) => ({
  position: "absolute",
  width: $size,
  height: $size,
  borderRadius: "50%",
  border: `2px solid rgba(71, 111, 255, ${$opacity || 0.1})`,
  animation: "pulse 3s ease-in-out infinite",
  animationDelay: $delay || "0s",
  "@keyframes pulse": {
    "0%, 100%": { transform: "scale(1)", opacity: 1 },
    "50%": { transform: "scale(1.05)", opacity: 0.7 },
  },
}))

const ShieldCore = styled.div({
  position: "relative",
  zIndex: 2,
  width: "6rem",
  height: "7rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    width: "100%",
    height: "100%",
    filter: "drop-shadow(0 10px 30px rgba(71, 111, 255, 0.3))",
  },
})

// Stats floating around shield
const FloatingStat = styled.div(({ $top, $left, $right, $bottom }) => ({
  position: "absolute",
  top: $top,
  left: $left,
  right: $right,
  bottom: $bottom,
  padding: "0.875rem 1.25rem",
  background: "#fff",
  borderRadius: "1rem",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
  border: "1px solid rgba(71, 111, 255, 0.1)",
  animation: "floatStat 4s ease-in-out infinite",
  "@keyframes floatStat": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-0.5rem)" },
  },
  "& .value": {
    fontSize: "1.5rem",
    fontWeight: 800,
    background: "linear-gradient(135deg, #476FFF 0%, #7B60FF 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  "& .label": {
    fontSize: "0.75rem",
    color: "#64748B",
    fontWeight: 500,
  },
  "@media (max-width: 575px)": {
    display: "none",
  },
}))


const ComplianceSection = styled.div({
  background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
  borderRadius: "1.5rem",
  padding: "2rem",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "0",
    right: "0",
    width: "15rem",
    height: "15rem",
    background: "radial-gradient(circle, rgba(71, 111, 255, 0.2) 0%, transparent 60%)",
    pointerEvents: "none",
  },
})

const ComplianceHeader = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBlockEnd: "1.25rem",
  position: "relative",
  zIndex: 1,
  "& h4": {
    fontSize: "1.125rem",
    fontWeight: 700,
    color: "#fff",
    margin: 0,
  },
})

const AutoBadge = styled.span({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.375rem",
  padding: "0.5rem 0.875rem",
  borderRadius: "2rem",
  background: "rgba(16, 185, 129, 0.15)",
  color: "#10B981",
  fontSize: "0.75rem",
  fontWeight: 600,
  "& svg": {
    width: "0.75rem",
    height: "0.75rem",
  },
})

const ComplianceTags = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.625rem",
  position: "relative",
  zIndex: 1,
})

const Tag = styled.span({
  padding: "0.625rem 1rem",
  borderRadius: "0.75rem",
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  fontSize: "0.813rem",
  color: "#fff",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  transition: "all 0.2s ease",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.12)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    transform: "translateY(-2px)",
  },
  "& svg": {
    width: "0.875rem",
    height: "0.875rem",
    color: "#10B981",
  },
})

// Bottom trust bar - full width
const TrustBar = styled.div({
  marginTop: "4rem",
  padding: "1.5rem 2rem",
  background: "#fff",
  borderRadius: "1.25rem",
  border: "1px solid rgba(71, 111, 255, 0.1)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.04)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2rem",
  flexWrap: "wrap",
  "@media (max-width: 768px)": {
    justifyContent: "center",
    textAlign: "center",
  },
})




const securityFeatures = [
  {
    title: "AES-256 Encryption",
    desc: "Military-grade encryption protecting all data at rest and in transit",
    icon: "lock",
  },
  {
    title: "Role-Based Access Control",
    desc: "Granular permissions ensuring right people access right data",
    icon: "users",
  },
  {
    title: "Secure Document Vault",
    desc: "Encrypted storage for sensitive employee records and files",
    icon: "folder",
  },
  {
    title: "24/7 Monitoring",
    desc: "Real-time protection power for all",
    icon: "globe",
  },
]

const complianceItems = ["EPF Returns", "ESI Compliance", "TDS Filing", "Form 16", "PT & LWF", "Labour Laws"]

export default function Security() {
  const getIcon = (type) => {
    switch (type) {
      case "lock":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        )
      case "users":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
        )
      case "folder":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
          </svg>
        )
      case "globe":
        return (

          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <Section>
      {/* Floating decorative shapes */}
      <FloatingShape $top="15%" $left="5%" $size="4rem" $delay="0s" />
      <FloatingShape $top="60%" $right="8%" $size="3rem" $color="linear-gradient(135deg, rgba(255, 102, 0, 0.1) 0%, rgba(255, 102, 0, 0.05) 100%)" $delay="1s" />
      <FloatingShape $bottom="5%" $left="10%" $size="2.5rem" $delay="2s" />

      <Container className="container">
        <HeaderSection>
          <Badge>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span>Enterprise-Grade Security</span>
          </Badge>
          <Title>
            Your Data. Fully Protected.<br />
            <span>Fully Encrypted. Fully Compliant.</span>
          </Title>
          <Subtitle>
            Bank-level security meets statutory compliance automation. Your workforce data is safe, secure, and always audit-ready.
          </Subtitle>
        </HeaderSection>

        <MainGrid>
          <LeftContent>
            <CertRow>
              <CertBadge>
                <CertIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </CertIcon>
                <CertText>
                  <p>ISO 27001</p>
                  <span>Certified Ready</span>
                </CertText>
              </CertBadge>
              <CertBadge>
                <CertIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </CertIcon>
                <CertText>
                  <p>SOC 2 Type II</p>
                  <span>Compliant</span>
                </CertText>
              </CertBadge>
              <CertBadge>
                <CertIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                  </svg>
                </CertIcon>
                <CertText>
                  <p>100+ Enterprises</p>
                  <span>Trust our platform</span>
                </CertText>
              </CertBadge>
              <CertBadge>
                <CertIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </CertIcon>
                <CertText>
                  <p>100% Audit Pass</p>
                  <span>Every time</span>
                </CertText>
              </CertBadge>
            </CertRow>

            <FeatureStack>
              {securityFeatures.map((feature, index) => (
                <FeatureCard
                // key={index} $offset={index === 1 ? "2rem" : index === 2 ? "1rem" : "0"}
                >
                  <FeatureIcon>{getIcon(feature.icon)}</FeatureIcon>
                  <FeatureContent>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </FeatureContent>
                  <FeatureCheck>
                    <svg viewBox="0 0 14 14" fill="none">
                      <path d="M11.5 3.5L5.25 9.75 2.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </FeatureCheck>
                </FeatureCard>
              ))}
            </FeatureStack>
          </LeftContent>

          <RightContent>
            <ShieldSection>
              <ShieldVisual>
                <AnimatedRing $size="14rem" $delay="0s" $opacity="0.1" />
                <AnimatedRing $size="10rem" $delay="0.5s" $opacity="0.15" />
                <AnimatedRing $size="6rem" $delay="1s" $opacity="0.2" />

                <ShieldCore>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      fill="url(#shield-grad)"
                      stroke="url(#shield-stroke)"
                      strokeWidth="0.5"
                    />
                    <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="shield-grad" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#476FFF" />
                        <stop offset="1" stopColor="#7B60FF" />
                      </linearGradient>
                      <linearGradient id="shield-stroke" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#476FFF" />
                        <stop offset="1" stopColor="#7B60FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </ShieldCore>

                <FloatingStat $top="0" $left="0">
                  <div className="value">50K+</div>
                  <div className="label">Records Protected</div>
                </FloatingStat>
                <FloatingStat $top="20%" $right="0">
                  <div className="value">0</div>
                  <div className="label">Data Breaches</div>
                </FloatingStat>
                <FloatingStat $bottom="0" $left="20%">
                  <div className="value">99.9%</div>
                  <div className="label">Uptime SLA</div>
                </FloatingStat>
              </ShieldVisual>
            </ShieldSection>

            <ComplianceSection>
              <ComplianceHeader>
                <h4>Statutory Compliance</h4>
                <AutoBadge>
                  <svg viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5 2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Auto-Generated
                </AutoBadge>
              </ComplianceHeader>
              <ComplianceTags>
                {complianceItems.map((item, index) => (
                  <Tag key={index}>
                    <svg viewBox="0 0 14 14" fill="none">
                      <path d="M11.5 3.5L5.25 9.75 2.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </Tag>
                ))}
              </ComplianceTags>
            </ComplianceSection>
          </RightContent>
        </MainGrid>

        {/* <TrustBar>
          <TrustItem>
            <TrustIcon style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#476FFF" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </TrustIcon>
            <TrustText>
              <p>256-bit Encryption</p>
              <span>Bank-grade security</span>
            </TrustText>
          </TrustItem>
          <TrustItem>
            <TrustIcon style={{ background: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </TrustIcon>
            <TrustText>
              <p>24/7 Monitoring</p>
              <span>Real-time protection</span>
            </TrustText>
          </TrustItem>
          <TrustItem>
            <TrustIcon style={{ background: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
              </svg>
            </TrustIcon>
            <TrustText>
              <p>100+ Enterprises</p>
              <span>Trust our platform</span>
            </TrustText>
          </TrustItem>
          <TrustItem>
            <TrustIcon style={{ background: "linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#DB2777" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </TrustIcon>
            <TrustText>
              <p>100% Audit Pass</p>
              <span>Every time</span>
            </TrustText>
          </TrustItem>
        </TrustBar> */}
      </Container>
    </Section>
  )
}
