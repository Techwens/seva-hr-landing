"use client"

import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"



export const GlobalStyle = createGlobalStyle`
  @keyframes ringWave {
    0% {
      transform: translate(-50%, -50%) scale(0.12);
      opacity: 1;
    }
    15% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.2;
    }
  }
`;



const Section = styled.section({
  position: "relative",
  paddingBlock: "8rem 2rem",
  overflow: "hidden",
  "@media (max-width: 575px)": {
    paddingBlock: "6rem 2rem",
  },
});



const RingWrapper = styled.div({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
});

const AnimatedRing = styled.div(({ $delay, $opacity }) => ({
  position: "absolute",
  left: "50%",
  top: "90%",
  width: "140vw",
  height: "140vw",
  maxWidth: "140vh",
  maxHeight: "140vh",
  borderRadius: "50%",
  transform: "translate(-50%, -50%) scale(0.15)",
  border: "0.088rem solid rgba(170, 210, 255, 0.55)",
  boxShadow: `
      0 0 8px rgba(170, 210, 255, 0.10),
    0 0 18px rgba(160, 180, 255, 0.08),
    0 0 36px rgba(180, 200, 255, 0.06),
    0 0 60px rgba(200, 240, 255, 0.05)
  `,
  opacity: $opacity,
  pointerEvents: "none",
  animation: "ringWave 12s linear infinite",
  animationDelay: $delay,
}));

const OriginGlow = styled.div({
  position: "absolute",
  left: "50%",
  bottom: "-15%",
  width: "18rem",
  height: "18rem",
  transform: "translateX(-50%)",
  borderRadius: "50%",
  background: `
  radial-gradient(circle, rgb(242 153 62 / 24%) 0%, rgb(170 140 255 / 12%) 35%, rgb(120 255 230 / 10%) 55%, rgb(120 250 255 / 6%) 70%, transparent 80%);
  `,
  filter: "blur(22px)",
  opacity: 0.9,
  pointerEvents: "none",
});



const Wrapper = styled.div({
  textAlign: "center",
  margin: "0 auto",
  maxWidth: "760px",
  position: "relative",
  zIndex: 1,
});
const Badge = styled.div({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.625rem",
  fontWeight: 600,
  marginBottom: "2.5rem",
  fontSize: "0.688rem",
  "@media (max-width: 575px)": {
    marginBottom: "1rem",
    gap: "0.5rem",
  },
  "& .icon": {
    height: "1.5rem",
    width: "1.5rem",
    "@media (max-width: 575px)": {
      height: "1rem",
      width: "1rem",
    },
    "& svg": {
      height: "100%",
      width: "100%",
    }
  },
  "& .new": {
    background: "linear-gradient(89.97deg, #FFA12F 0.03%, #5433F8 88.44%)",
    borderRadius: "2.5rem",
    fontSize: "0.875rem",
    color: "#fff",
    padding: "0.2rem 0.6rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.313rem",
    "@media (max-width: 575px)": {
      padding: "0.1rem 0.3rem",
      fontSize: "0.688rem",
    },
    "& span": {
      height: "1rem",
      width: "1rem",
      display: "flex",
      alignItems: "center",
      "@media (max-width: 575px)": {
        height: "0.6rem",
        width: "0.6rem",
      },
      "& svg": {
        height: "100%",
        width: "100%",
      }
    }
  }
});

const Heading = styled.h1({
  lineHeight: 1.15,
  marginBlockEnd: "0.5rem",
});
const Subtitle = styled.p({
  color: "#64748B",
  textAlign: "center",
});

const GradientTextWrap = styled.span({
  display: "inline-block",
  height: "4rem",
  overflow: "hidden",
  verticalAlign: "bottom",

  "& .swiper": {
    height: "100%",
  },

  "@media (max-width: 768px)": {
    height: "3rem",
  },
});

const GradientText = styled.div({
  background: "linear-gradient(90deg, #FF4D00, #6B4EFF, #476FFF)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundSize: "200% auto",
  animation: "gradientShift 3s ease infinite",

  "@keyframes gradientShift": {
    "0%": { backgroundPosition: "0% center" },
    "50%": { backgroundPosition: "100% center" },
    "100%": { backgroundPosition: "0% center" },
  },
});

const ButtonGroup = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "1.25rem",
  flexWrap: "wrap",
  marginTop: "2.5rem",
  "@media (max-width: 575px)": {
    gap: "0.5rem",
    marginTop: "1.5rem",
  },

});

const PrimaryButton = styled.button({
  padding: "0.875rem 1.75rem",
  borderRadius: "0.875rem",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  background: "linear-gradient(151deg, #476FFF, #4600B6)",
  "@media (max-width: 991px)": {
    fontSize: "0.875rem",
    height: "2.625rem",
    borderRadius: "0.75rem",
  },
  "@media (max-width: 575px)": {
    fontSize: "0.75rem",
    height: "2.3rem",
    paddingInline:"0.65rem"
  },
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 700,
  cursor: "pointer",
  transition: "all .3s ease",
  "& span": {
    height: "0.875rem",
    width: "0.875rem",
    display: "flex",
    "@media (max-width: 575px)": {
    height: "0.5rem",
    width: "0.5rem",
    },
    "& svg": {
      height: "100%",
      width: "100%",
    }
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
  "@media (max-width: 991px)": {
    fontSize: "0.875rem",
    height: "2.625rem",
    borderRadius: "0.75rem",
  },
    "@media (max-width: 575px)": {
    fontSize: "0.75rem",
    height: "2.3rem",
    paddingInline:"0.65rem"
  },
  "& span": {
    height: "0.875rem",
    width: "0.875rem",
    display: "flex",
    "@media (max-width: 575px)": {
    height: "0.5rem",
    width: "0.5rem",
    },
    "& svg": {
      height: "100%",
      width: "100%",
    }
  },
  "&:hover": {
    background: "linear-gradient(151deg, #D1FFFF, #BFB6FF)",
    borderColor: "rgb(161, 97, 176, 0.2)",
  },
});



export default function Banner() {
  return (
    <>
      <GlobalStyle />

      <Section>
        <RingWrapper>
          <OriginGlow />
          <AnimatedRing $delay="0s" $opacity="0.30" />
          <AnimatedRing $delay="-2s" $opacity="0.26" />
          <AnimatedRing $delay="-4s" $opacity="0.22" />
          <AnimatedRing $delay="-6s" $opacity="0.18" />
          <AnimatedRing $delay="-8s" $opacity="0.14" />
          <AnimatedRing $delay="-10s" $opacity="0.10" />
          <AnimatedRing $delay="-12s" $opacity="0.06" />
          <AnimatedRing $delay="-14s" $opacity="0.04" />
        </RingWrapper>

        <div className="container">
          <Wrapper>
            <Badge>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17.1742 8.963C16.7552 8.249 15.8352 8.009 15.1212 8.429L14.6522 8.704C14.3292 8.471 13.9422 8.3 13.4992 8.184V7.5C13.4992 6.672 12.8272 6 11.9992 6C11.1712 6 10.4992 6.672 10.4992 7.5V8.184C10.0562 8.3 9.66924 8.47 9.34624 8.704L8.87724 8.429C8.16324 8.01 7.24324 8.249 6.82424 8.963C6.40524 9.677 6.64424 10.597 7.35824 11.016L8.02724 11.409C8.00924 11.597 7.99824 11.793 7.99824 12.001C7.99824 12.209 8.00924 12.404 8.02724 12.593L7.35824 12.986C6.64424 13.405 6.40424 14.325 6.82424 15.039C7.24324 15.753 8.16324 15.993 8.87724 15.573L9.34624 15.298C9.66924 15.531 10.0562 15.702 10.4992 15.818V16.502C10.4992 17.33 11.1712 18.002 11.9992 18.002C12.8272 18.002 13.4992 17.33 13.4992 16.502V15.818C13.9422 15.702 14.3292 15.532 14.6522 15.298L15.1212 15.573C15.8352 15.992 16.7552 15.753 17.1742 15.039C17.5932 14.325 17.3542 13.405 16.6402 12.986L15.9712 12.593C15.9892 12.405 16.0002 12.209 16.0002 12.001C16.0002 11.793 15.9892 11.598 15.9712 11.409L16.6402 11.016C17.3542 10.597 17.5942 9.677 17.1742 8.963ZM12.0002 13.5C10.8082 13.5 10.5002 13.192 10.5002 12C10.5002 10.808 10.8082 10.5 12.0002 10.5C13.1922 10.5 13.5002 10.808 13.5002 12C13.5002 13.192 13.1922 13.5 12.0002 13.5ZM22.9952 12.531C22.8462 19.771 19.4542 23 12.0002 23C8.50724 23 6.00324 22.31 4.22624 20.864L2.88824 22.202C2.61524 22.475 2.21024 22.569 1.84824 22.448C1.48324 22.326 1.21824 22.008 1.16324 21.626C0.946238 20.1 0.946238 18.552 1.16324 17.027C1.22724 16.58 1.57824 16.228 2.02624 16.164C2.78924 16.055 3.55824 16 4.32624 16C5.09424 16 5.86424 16.055 6.62724 16.164C7.00824 16.218 7.32624 16.484 7.44724 16.849C7.56924 17.214 7.47424 17.617 7.20224 17.889L6.36924 18.722C7.60024 19.585 9.41724 20.001 11.9992 20.001C17.7872 20.001 19.8792 18.03 19.9952 12.47C20.0112 11.642 20.7012 10.983 21.5262 11.002C22.3542 11.019 23.0112 11.704 22.9942 12.533L22.9952 12.531ZM1.00524 11.469C1.15524 4.229 4.54624 1 12.0002 1C15.4822 1 18.0022 1.691 19.7762 3.134L21.1122 1.798C21.3852 1.525 21.7902 1.431 22.1532 1.552C22.5182 1.674 22.7832 1.992 22.8382 2.374C23.0552 3.9 23.0552 5.448 22.8382 6.974C22.7742 7.421 22.4232 7.773 21.9752 7.837C21.2122 7.946 20.4432 8.001 19.6752 8.001C18.9072 8.001 18.1372 7.946 17.3742 7.837C16.9932 7.783 16.6752 7.517 16.5542 7.152C16.4322 6.787 16.5272 6.384 16.7992 6.112L17.6402 5.271C16.6562 4.586 15.0022 4.001 12.0012 4.001C6.21324 4.001 4.12124 5.972 4.00524 11.532C3.98824 12.349 3.32024 13.001 2.50624 13.001C1.66724 13.001 0.988238 12.31 1.00624 11.47L1.00524 11.469Z" fill="#476FFF" />
                </svg>
              </div>
              Built for Complex Shift-Based Operations
              <div className="new">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                    <path d="M-2.40413e-07 5.5L4.43022 4.06104L6 6.91406e-07L7.56978 4.06104L12 5.5L7.56978 6.93896L6 11L4.43022 6.93896L-2.40413e-07 5.5Z" fill="url(#paint0_linear_3927_989)" />
                    <defs>
                      <linearGradient id="paint0_linear_3927_989" x1="3.75" y1="3.20833" x2="7.15548" y2="7.17107" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9EECFF" />
                        <stop offset="1" stopColor="#FFFDCE" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                New
              </div>
            </Badge>
            <Heading>
              <div>Powerful HRMS for</div>
              <GradientTextWrap>
                <Swiper
                  direction="vertical"
                  slidesPerView={1}
                  loop
                  modules={[Autoplay]}
                  autoplay={{ delay: 1800 }}
                  speed={800}
                  allowTouchMove={false}
                >
                  {[
                    "Shift-Based Industries",
                    "Workforce Fairness",
                    "High Productivity",
                  ].map((text, i) => (
                    <SwiperSlide key={i}>
                      <GradientText>{text}</GradientText>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </GradientTextWrap>
            </Heading>

            <Subtitle>
              plete workforce management solution built for complex operations — from manufacturing floors to healthcare facilities, logistics centers to service industries.
            </Subtitle>

            <ButtonGroup>
              <PrimaryButton>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                  <path d="M0 7.0286V2.46182C0 0.569748 2.0486 -0.613826 3.68528 0.333582L7.64243 2.61835L11.5996 4.90311C13.239 5.84777 13.239 8.21492 11.5996 9.15958L7.64243 11.4443L3.68528 13.7291C2.0486 14.671 0 13.4902 0 11.5981V7.0286Z" fill="white" />
                </svg></span>
                Watch Demo
              </PrimaryButton>
              <SecondaryButton>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="black" />
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="url(#paint0_linear_3927_981)" />
                    <defs>
                      <linearGradient id="paint0_linear_3927_981" x1="-3.68589e-07" y1="11.5" x2="8.5" y2="3" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF6600" />
                        <stop offset="1" stopColor="#7B60FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                Get Started Free
              </SecondaryButton>
            </ButtonGroup>
          </Wrapper>
        </div>
      </Section>
    </>
  )
}
