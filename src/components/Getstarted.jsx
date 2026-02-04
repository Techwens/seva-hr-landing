import React, { useEffect, useRef } from "react"
import styled from "styled-components"

const Section = styled.section({
  position: "relative",
  overflow: "hidden",

  "& h3": {
    fontWeight: 600,
    lineHeight: 1.3,
    color: "#fff",
    marginBlockEnd: "0.625rem",
    borderRadius: "1.875rem",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "0.625rem 1.25rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    fontSize: "0.875rem",
    "@media (max-width: 575px)": {
      gap: "0.2rem",
      padding: "0.2rem 0.5rem",
      fontSize: "0.688rem",
    },
  },
});

// Curved wave separator at top
const WaveSeparator = styled.div({
  position: "relative",
  height: "6rem",
  background: "#f2f5ff",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    background: "#0F172A",
    clipPath: "ellipse(60% 110% at 50% 130%)",
  },
  "@media (max-width: 767px)": {
    height: "4rem",
  },
  "@media (max-width: 575px)": {
    height: "2rem",
  },
});

const MainContent = styled.div({
  background: "linear-gradient(180deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
  paddingBlockEnd: "5rem",
  position: "relative",
  "@media (max-width: 767px)": {
    paddingBlock: "3rem",
  },
  "@media (max-width: 575px)": {
    paddingBlock: "1rem 1.5rem",
  },
});

// Animated floating orbs
const FloatingOrb = styled.div(({ $top, $left, $right, $size, $color, $delay }) => ({
  position: "absolute",
  top: $top || "auto",
  left: $left || "auto",
  right: $right || "auto",
  width: $size || "20rem",
  height: $size || "20rem",
  borderRadius: "50%",
  background: $color || "radial-gradient(circle, rgba(71, 111, 255, 0.2) 0%, transparent 70%)",
  filter: "blur(3rem)",
  animation: `orbFloat 8s ease-in-out ${$delay || "0s"} infinite`,
  pointerEvents: "none",
  "@keyframes orbFloat": {
    "0%, 100%": { transform: "translate(0, 0) scale(1)" },
    "33%": { transform: "translate(2rem, -1rem) scale(1.1)" },
    "66%": { transform: "translate(-1rem, 1rem) scale(0.95)" },
  },
}));

// Grid pattern overlay
const GridOverlay = styled.div({
  position: "absolute",
  inset: 0,
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
  `,
  backgroundSize: "4rem 4rem",
  pointerEvents: "none",
});

const ContentWrapper = styled.div({
  position: "relative",
  zIndex: 2,
});

const HeaderSection = styled.div({
  textAlign: "center",
  marginBlockEnd: "3rem",
  opacity: 0,
  transform: "translateY(1rem)",
  transition: "all 0.8s ease",
  "@media (max-width: 575px)": {
    marginBlockEnd: "1rem",
  },
  "&.in-view": {
    opacity: 1,
    transform: "translateY(0)",
  },
});



const Title = styled.h2({
  color: "#fff",
  "& span": {
    background: "linear-gradient(90deg, #476FFF 0%, #7B60FF 50%, #FF6B6B 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
});

const Subtitle = styled.p({
  color: "#fff",
  maxWidth: "40rem",
  margin: "0 auto",
});

// Horizontal steps with connecting line
const StepsSection = styled.div({
  marginBlockEnd: "3rem",
  opacity: 0,
  transform: "translateY(1rem)",
  transition: "all 0.8s ease 0.2s",
  "@media (max-width: 575px)": {
    marginBlockEnd: "1rem",
  },
  "&.in-view": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const StepsTrack = styled.div({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "1rem",
  position: "relative",
  "@media (max-width: 575px)": {
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  },
});




const StepCard = styled.div(({ $delay }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "1.5rem",
  width: "14rem",
  background: "rgba(255, 255, 255, 0.03)",
  borderRadius: "1.5rem",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  transition: "all 0.4s ease",
  position: "relative",
  animation: `stepPulse 3s ease-in-out ${$delay || "0s"} infinite`,

  "@keyframes stepPulse": {
    "0%, 100%": { boxShadow: "0 0 0 0 rgba(71, 111, 255, 0)" },
    "50%": { boxShadow: "0 0 30px 5px rgba(71, 111, 255, 0.1)" },
  },
  "&:hover": {
    background: "rgba(255, 255, 255, 0.06)",
    borderColor: "rgba(71, 111, 255, 0.3)",
    transform: "translateY(-0.5rem)",
  },
  "@media (max-width: 767px)": {
    width: "100%",
    maxWidth: "20rem",
  },
  "@media (max-width: 575px)": {
    padding: "0.75rem",
    maxWidth: "15rem",
    borderRadius: "0.75rem",
  },
}));

const StepNumber = styled.div({
  width: "4rem",
  height: "4rem",
  borderRadius: "1rem",
  background: "linear-gradient(135deg, #476FFF 0%, #7B60FF 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 800,
  fontSize: "1.5rem",
  color: "#fff",
  marginBlockEnd: "1rem",
  position: "relative",
  boxShadow: "0 10px 20px rgba(71, 111, 255, 0.3)",
  "@media (max-width: 1199px)": {
    width: "3.25rem",
    height: "3.25rem",
  },
  "@media (max-width: 575px)": {
    width: "2.25rem",
    height: "2.25rem",
    borderRadius: "0.688rem",
    fontSize: "0.938rem",
    marginBlockEnd: "0.25rem",
  },
});

const StepTitle = styled.h4({
  fontSize: "1.125rem",
  fontWeight: 700,
  color: "#fff",
  marginBlockEnd: "0.5rem",
  "@media (max-width: 575px)": {
    marginBlockEnd: "0.15rem",
  },
});

const StepDescription = styled.p({
  fontSize: "0.875rem",
  color: "#fff",
  marginBlockEnd: 0,
  lineHeight: 1.5,
  "@media (max-width: 575px)": {
    fontSize: "0.813rem",
  }
});

// CTA Buttons section
const CtaSection = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5rem",
  opacity: 0,
  transform: "translateY(1rem)",
  transition: "all 0.8s ease 0.4s",
    "@media (max-width: 575px)": {
    gap: "0.5rem",
  },
  "&.in-view": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const ButtonGroup = styled.div({
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  justifyContent: "center",
  "@media (max-width: 575px)": {
    gap: "0.5rem",
  }
});

const PrimaryButton = styled.button({
  padding: "1rem 2.5rem",
  borderRadius: "3rem",
  border: "none",
  background: "#fff",
  color: "#0F172A",
  fontWeight: 700,
  fontSize: "1rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  justifyContent: "center",
  transition: "all 0.4s ease",
  boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
  "@media (max-width: 991px)": {
    fontSize: "0.875rem",
    height: "2.625rem",
    borderRadius: "0.75rem",
  },
  "@media (max-width: 575px)": {
    fontSize: "0.75rem",
    height: "2.3rem",
    borderRadius: "0.75rem",
    paddingInline: "0.65rem",
  },
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 15px 40px rgba(255, 255, 255, 0.3)",
  },
});

const SecondaryButton = styled.button({
  padding: "1rem 2.5rem",
  borderRadius: "3rem",
  border: "2px solid rgba(255, 255, 255, 0.3)",
  background: "transparent",
  color: "#fff",
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  justifyContent: "center",
  transition: "all 0.4s ease",
  "@media (max-width: 991px)": {
    fontSize: "0.875rem",
    height: "2.625rem",
    borderRadius: "0.75rem",
  },
  "@media (max-width: 575px)": {
    fontSize: "0.75rem",
    height: "2.3rem",
    borderRadius: "0.75rem",
    paddingInline: "0.65rem",
  },
  "&:hover": {
    borderColor: "rgba(255, 255, 255, 0.6)",
    background: "rgba(255, 255, 255, 0.08)",
    transform: "translateY(-3px)",
  },
});

const TrustText = styled.p({
  fontSize: "0.875rem",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginBlockEnd:"0rem",
  "@media (max-width: 575px)": {
    fontSize: "0.688rem",
    gap: "0.25rem",
  },
  "& svg": {
    color: "#22C55E",
      "@media (max-width: 575px)": {
    height: "0.5rem",
    width : "0.5rem",
  },
  },
});


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

const RightSection = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  marginBlockStart: "2rem",
    "@media (max-width: 575px)": {
    flexDirection: "column",
    gap: "0.5rem",
   
  },
})

const IndustryLabel = styled.span({
  fontSize: "0.875rem",
  color: "#fff",
  fontWeight: 500,
  whiteSpace: "nowrap",
})

const IndustryTags = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.625rem",
    "@media (max-width: 575px)": {
    gap: "0.25rem",
     justifyContent:"center",
  },
})

const IndustryTag = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem 1rem",
  borderRadius: "2rem",
  background: "rgba(255, 255, 255, 0.03)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  transition: "all 0.2s ease",
  "@media (max-width: 991px)": {
    padding: "0.3rem 0.5rem",
    gap: "0.25rem",
  },
  "@media (max-width: 575px)": {
    padding: "0.2rem 0.4rem",
    gap: "0.2rem",
  },
  "&:hover": {
    borderColor: "rgba(71, 111, 255, 0.3)",
    background: "#F8FAFC",
    transform: "translateY(-1px)",
    "& span": {
      color: "#000",
    }
  },
  "& svg": {
    width: "1.125rem",
    height: "1.125rem",
    color: "#476FFF",
        "@media (max-width: 575px)": {
      width: "0.813rem",
      height: "0.813rem",
    },
  },
  "& span": {
    fontSize: "0.813rem",
    fontWeight: 500,
    color: "#fff",
    pointerEvents: "none",
        "@media (max-width: 575px)": {
      fontSize: "0.688rem",
    },
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

export default function Getstarted() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const steps = [
    { number: "1", title: "Sign Up Free", description: "Create your account in under 2 minutes" },
    { number: "2", title: "Add Your Team", description: "Import or add employees with ease" },
    { number: "3", title: "Go Live", description: "Start managing HR in 24 hours" },
  ];

  return (
    <Section id="get-started">
      <WaveSeparator />

      <MainContent ref={sectionRef}>
        {/* Floating orbs */}
        <FloatingOrb $top="-10%" $left="-5%" $size="30rem" $color="radial-gradient(circle, rgba(71, 111, 255, 0.15) 0%, transparent 70%)" $delay="0s" />
        <FloatingOrb $top="20%" $right="-10%" $size="25rem" $color="radial-gradient(circle, rgba(123, 96, 255, 0.12) 0%, transparent 70%)" $delay="3s" />
        <FloatingOrb $top="60%" $left="30%" $size="20rem" $color="radial-gradient(circle, rgba(255, 107, 107, 0.08) 0%, transparent 70%)" $delay="5s" />

        <GridOverlay />

        <div className="container">
          <ContentWrapper>
            <HeaderSection className="animate">

              <h3>
                <SparkleIcon />
                Get Started Today
              </h3>
              <Title>Ready to <span>Transform</span> Your HR?</Title>
              <Subtitle>
                Join hundreds of businesses simplifying their workforce management with SEVA HR.
                Setup takes less than 24 hours.
              </Subtitle>
            </HeaderSection>

            <StepsSection className="animate">
              <StepsTrack>

                {steps.map((step, index) => (
                  <StepCard key={index} $delay={`${index * 0.5}s`}>
                    <StepNumber>{step.number}</StepNumber>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepCard>
                ))}
              </StepsTrack>
            </StepsSection>

            <CtaSection className="animate">
              <ButtonGroup>
                <PrimaryButton type="button" aria-label="Get started with SevaHR for free">
                  Get Started Free
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </PrimaryButton>
                <SecondaryButton type="button" aria-label="Book a demo of SevaHR">
                  Book a Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                  </svg>
                </SecondaryButton>
              </ButtonGroup>

              <TrustText>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.5l7-7-1.414-1.414L10.5 13.672l-2.586-2.586L6.5 12.5l4 4z" />
                </svg>
                No credit card required • Free 14-day trial • Cancel anytime
              </TrustText>
            </CtaSection>

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
      </MainContent>

    </Section>
  )
}
