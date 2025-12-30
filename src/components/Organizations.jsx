"use client"
import React from "react"
import '../scss/variable.scss';
import styled from "styled-components"
import Image from "next/image"
import Spotify from "../assets/image 1.svg"
import Airbnb from "../assets/image 2.svg"
import Google from "../assets/image 3.svg"
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
  "@media (max-width: 991px)": {
    flexDirection: "column",
  },
})

const Left = styled.div({
  width: "35%",
  "@media (max-width: 991px)": {
    width: "100%",
  },
  "& h2": {
    fontSize: "1.688rem",
    fontWeight: 700,
    "@media (max-width: 1199px)": {
      fontSize: "1rem",
    },
  },
})

const Right = styled.div({
  width: "65%",
  background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
  position:"relative",
  "@media (max-width: 991px)": {
    width: "100%",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:"linear-gradient(270deg,rgba(255, 255, 255, 0) 79%, rgba(255, 255, 255, 1) 100%)",
    pointerEvents: "none",
    zIndex: 2,
  },
  "& .logo-swiper .swiper-wrapper": {
    transitionTimingFunction: "linear !important",
  },
})

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
            <span>⭐⭐⭐⭐⭐</span>
            <h2>Trusted by 15+ organizations</h2>
          </Left>
          <Right>
            <Swiper
              dir="rtl"
              modules={[Autoplay, FreeMode]}
              slidesPerView="auto"
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
                  <Image
                    src={logo}
                    alt="organization logo"
                    width={120}
                    height={40}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Right>
        </SectionRow>
      </div>
    </Section>
  )
}
