"use client"
import React from "react"
import styled from "styled-components"
import TextureBg from "../assets/TextureBg.png"
const Section = styled.section({
  paddingBlockEnd: "3.5rem",
  position:"relative",
  "&::after":{
    content: '""',
    width: '50vw',
    height: '80vh',
    borderRadius: '50%',
    backgroundColor: 'rgb(255 127 15 / 12%)',
    filter: 'blur(3.75rem)',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex:"-1",
  },
});

const CtaWrap = styled.div({
  borderRadius: "1.75rem",
  padding: "1.875rem 2.5rem",
  backgroundImage: `linear-gradient(117deg,rgba(70, 106, 250, 0.86) 0%, rgba(19, 19, 176, 0.87) 100%),url(${TextureBg.src})`,
  color: "#fff",
  position: "relative",
  overflow: "hidden",

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:"radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15), transparent 40%)",pointerEvents: "none",
  },

  "@media (max-width: 991px)": {
    padding: "2rem",
  },
});

const SectionRow = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "2.5rem",
  "@media (max-width: 767px)": {
    flexDirection: "column",
  },
});

const Left = styled.div({
  width: "45%",
  "@media (max-width: 767px)": {
    width: "100%",
  },

  "& h2": {
    fontSize: "1.875rem",
    fontWeight: 700,
    lineHeight: 1.3,
    marginBlockEnd: "0.5rem",
  },

  "& p": {
    marginBlockEnd: "1.25rem",
  },

  "& button": {
    padding: "1rem 1.5rem",
    width: "100%",
    borderRadius: "1.2rem",
    border: "none",
    background: "#fff",
    color: "#000",
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    justifyContent: "center",
  },
});

const Right = styled.div({
  width: "55%",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  background: "rgba(255, 255, 255, 0.1)",
  padding: "1.5rem 1rem",
  borderRadius: "1.3rem",

  "@media (max-width: 767px)": {
    width: "100%",
  },
});

const FeaturePill = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem 1rem",
  borderRadius: "1rem",
  border: "1px solid rgba(255,255,255,0.4)",
  fontSize: "0.875rem",
  fontWeight: 700,
  whiteSpace: "nowrap",

  "& span": {
    width: "1rem",
    height: "1rem",
    borderRadius: "50%",
    background: "#fff",
    color: "#000",
    fontSize: "0.65rem",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Getstarted() {
  return (
    <Section>
      <div className="container">
        <CtaWrap>
          <SectionRow>
            <Left>
              <h2>Ready to Get Started?</h2>
              <p>Simple process, powerful results</p>
              <button>
                Get Started Free <span>→</span>
              </button>
            </Left>

            <Right>
              <FeaturePill>
                <span>✓</span> One Stop solution
              </FeaturePill>
              <FeaturePill>
                <span>✓</span> 1-Click
              </FeaturePill>
              <FeaturePill>
                <span>✓</span> 3 Steps
              </FeaturePill>
              <FeaturePill>
                <span>✓</span> Auto Compliance
              </FeaturePill>
              <FeaturePill>
                <span>✓</span> Easy UI
              </FeaturePill>
            </Right>
          </SectionRow>
        </CtaWrap>
      </div>
    </Section>
  )
}
