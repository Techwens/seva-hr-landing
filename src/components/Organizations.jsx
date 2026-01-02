"use client"
import React from "react"

import styled from "styled-components"

import Spotify from "../assets/image 1.svg"
import Airbnb from "../assets/image 2.svg"
import Google from "../assets/image 3.svg"
import Star from "../assets/Star.svg"
import Slack from "../assets/image 4.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"

import "swiper/css"
import "swiper/css/free-mode"

const Section = styled.section({
  paddingBlock: "3.5rem",
})

const SectionRow = styled.div({
  display: "flex",
  alignItems: "flex-start",
  "@media (max-width: 767px)": {
    flexDirection: "column",
  },
})

const Left = styled.div({
  width: "35%",
  "@media (max-width: 767px)": {
    width: "100%",
  },
  "& h2": {
    fontSize: "1.688rem",
    fontWeight: 700,
    "@media (max-width: 1199px)": {
      fontSize: "1rem",
    },
  },
  "& div": {
    display: "flex",
    alignItems: "center",
    gap:"0.5rem",
    marginBlockEnd:"0.5rem",
    "& span": {
      height: "1.5rem",
      width: "1.5rem",
      display: "flex",
      alignItems: "center",
      "& img": {
        height: "100% !important",
        width: "100% !important"
      }
    },
  }
});

const BrandLogo = styled.div({
  width: "100px",
  height: "2.813rem",
  "& img": {
    width: "100% !important",
    height: "100% !important",
    objectFit: "contain",
  },
});

const Right = styled.div({
  width: "65%",
  background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
  position: "relative",
  "@media (max-width: 767px)": {
    width: "100%",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(270deg,rgba(255, 255, 255, 0) 79%, rgba(255, 255, 255, 1) 100%)",
    pointerEvents: "none",
    zIndex: 2,
  },
  "& .logo-swiper .swiper-wrapper": {
    transitionTimingFunction: "linear !important",
  },
});

const logos = [
  Spotify,
  Airbnb,
  Google,
  Slack,
]

export default function Organizations() {
  return (
    <Section>
      <div className="container">
        <SectionRow>
          <Left>
            <div>
              <span>
                <img src={Star?.src} alt="star-icon" />
              </span>
              <span>
                <img src={Star?.src} alt="star-icon" />
              </span>
              <span>
                <img src={Star?.src} alt="star-icon" />
              </span>
              <span>
                <img src={Star?.src} alt="star-icon" />
              </span>
              <span>
                <img src={Star?.src} alt="star-icon" />
              </span>
            </div>
            <h2>Trusted by 15+ organizations</h2>
          </Left>
          <Right>
            <Swiper
              dir="rtl"
              modules={[Autoplay, FreeMode]}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                600: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={56}
              loop={true}
              freeMode={{
                enabled: true,
                momentum: false,
              }}
              speed={7000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              allowTouchMove={false}
              className="logo-swiper"
            >
              {[...logos, ...logos].map((logo, index) => (
                <SwiperSlide key={index} style={{ width: "auto" }}>
                  <BrandLogo>
                    <img
                      src={logo?.src}
                      alt="organization logo"
                      width={100}
                      height={100}
                    />
                  </BrandLogo>
                </SwiperSlide>
              ))}
            </Swiper>
          </Right>
        </SectionRow>
      </div>
    </Section>
  )
}
