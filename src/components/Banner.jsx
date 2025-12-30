"use client"

import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

const Section = styled.section({
  paddingBlock: "10rem 5rem",
});

const Wrapper = styled.div({
  textAlign: "center",
  margin: "0 auto",
  maxWidth: "760px",
  "& h1":{
    fontWeight:"700",
    marginBlockEnd:"0rem",
  }
});

const Badge = styled.div({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem 0.875rem",
  borderRadius: "999px",
  background: "#F3F6FF",
  fontSize: "0.875rem",
  fontWeight: 600,
  marginBottom: "1.5rem",
});

const Heading = styled.div({
  fontSize: "3.25rem",
  fontWeight: 800,
  lineHeight: 1.15,
  marginBottom: "1.5rem",

  "@media (max-width: 768px)": {
    fontSize: "2.25rem",
  },
});



const GradientTextWrap = styled.span({
  display: "inline-block",
  height: "3.75rem",
  overflow: "hidden",
  verticalAlign: "bottom",

  "@media (max-width: 768px)": {
    height: "2.75rem",
  },
})

const GradientText = styled.div({
  background: "linear-gradient(90deg, #FF6600 0%, #7B60FF 106.8%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBlockEnd:"1rem",
});


const ButtonGroup = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "1.25rem",
  flexWrap: "wrap",
})

const PrimaryButton = styled.button({
  padding: "0.875rem 1.75rem",
  borderRadius: "0.875rem",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  background: "linear-gradient(151deg, #476FFF, #4600B6)",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 700,
  cursor: "pointer",
  transition: "all .3s ease",
  "& span": {
    height: "0.875rem",
    width: "0.875rem",
    display: "flex",
  },
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 12px 30px rgba(70,0,182,.35)",
  },
});

const SecondaryButton = styled.button({
  padding: "0.875rem 1.75rem",
  borderRadius: "0.875rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  background: "#fff",
  border: "2px solid #6B5CFF",
  color: "#000",
  fontSize: "1rem",
  fontWeight: 700,
  cursor: "pointer",
  transition: "all .3s ease",
  "& span": {
    height: "0.875rem",
    width: "0.875rem",
    display: "flex",
  },
  "&:hover": {
    background: "linear-gradient(151deg, #D1FFFF, #BFB6FF)",
    borderColor: "rgb(161, 97, 176, 0.2)",
  },
});

export default function Banner() {
  return (
    <Section>
      <div className="container">
        <Wrapper>
          <Badge>
            ⚙️ Built for Complex Shift-Based Operations
            <span style={{ color: "#6B5CFF" }}>New</span>
          </Badge>

          <Heading>
            <h1>Powerful HRMS for </h1>
            <GradientTextWrap>
              <Swiper
                direction="vertical"
                slidesPerView={1}
                loop
                modules={[Autoplay]}
                autoplay={{
                  delay: 1800,
                  disableOnInteraction: false,
                }}
                speed={600}
                allowTouchMove={false}
              >
                {[
                  "Shift-Based Industries",
                  "Shift-Based Performance",
                  "Shift-Based Solutions",
                ].map((text, index) => (
                  <SwiperSlide key={index}>
                    <GradientText>{text}</GradientText>
                  </SwiperSlide>
                ))}
              </Swiper>
            </GradientTextWrap>
          </Heading>
          <p>
            Complete workforce management solution built for complex operations —
            from manufacturing floors to healthcare facilities, logistics centers
            to service industries.
          </p>

          <ButtonGroup>
            <PrimaryButton>
              <span></span>
              Watch Demo
            </PrimaryButton>
            <SecondaryButton>
              <span></span>
              Get Started Free
            </SecondaryButton>
          </ButtonGroup>
        </Wrapper>
      </div>
    </Section>
  )
}
