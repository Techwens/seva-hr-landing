"use client"
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import EffortlesslyImg from "../assets/effortlessly.svg"
import Image from 'next/image';
const SectionRow = styled.div({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginBlockStart: "2.625rem",
  overflow: "hidden",
});

const Left = styled.div({
  width: "60%",
  opacity: 0,
  transform: "translateX(-3rem)",
  transition: "all 0.8s ease",
  paddingInlineEnd: "1rem",
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
  "& ul": {
    padding: "0rem",
    margin: "0rem",
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    "& li": {
      width: "calc((100% - 2rem) / 3)",
      padding: "0.063rem",
      position: "relative",
      borderRadius: "1.188rem",
      boxShadow: "0px 4px 36px 0px #00000014",
      overflow: "hidden",
      padding: "1.875rem 1.563rem",
      '&:after': {
        content: "''",
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: '0',
        top: '0',
        background: "linear-gradient(90deg, #FFD7BC 0%, #D9D1FF 106.8%)",
        zIndex: "0",
      },
      '&:before': {
        content: "''",
        position: 'absolute',
        height: 'calc(100% - 0.125rem)',
        width: 'calc(100% - 0.125rem)',
        left: '1px',
        top: '1px',
        background: "#fff",
        zIndex: "1",
        borderRadius: "1.125rem",
      },
      "& div": {
        position: "relative",
        zIndex: "3",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBlockEnd: "1.25rem",
        "& span": {
          height: "2.5rem",
          width: "2.5rem",
          display: "flex",
          alignItems: "center",
          "& svg": {
            height: "100%",
            width: "100%",
          }
        },
        "& h4": {
          marginBlockEnd: "0rem",
        },
      },
      "& p": {
        marginBlockEnd: "0rem",
        position: "relative",
        zIndex: "3",
        textAlign: "start",
      }
    }
  }
});

export const Right = styled.div({
  width: "40%",
  opacity: 0,
  transform: "translateX(3rem)",
  transition: "all 0.8s ease",
  "& ul": {
    padding: "1.5rem",
    margin: "0rem",
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    "& li": {
      width: "calc((100% - 1rem) / 2)",
      padding: "1rem",
      position: "relative",
      borderRadius: "1.125rem",
      display: "flex",
      alignItems: "center",
      boxShadow: "0px 4px 36px 0px #0010EF26",
      gap: "0.5rem",
      "& div": {
        height: "1.188rem",
        width: "1.188rem",
        "& svg": {
          height: "100%",
          width: "100%",
        }
      },
      "& h5": {
        background: 'linear-gradient(90deg, #002BFF -36.06%, #BC1DAF 96.9%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        marginBlockEnd: "0rem",
        fontSize: "0.813rem",
        fontWeight: "600",
      }
    }


  },
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const CtaList = styled.div({
  "& h4": {
    fontSize: "1.875rem",
    marginBlockEnd: "0.5rem",
    fontWeight: "700",
  },
  "& p": {
    textAlign: "start",
  },
  "& ol": {
    padding: "0rem",
    margin: "0rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    "& li": {
      fontSize: " 1rem",
      width: "100%",
      display: 'flex',
      gap: "0.5rem",
      flexDirection: "row",
      "& div": {
        height: '0.875rem',
        width: '0.875rem',
        "& svg": {
          height: '100%',
          width: '100%',
        }
      }
    },
  }
})

const Buttonwrap = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

});

const CtaButton = styled.button({
  position: "relative",
  overflow: "hidden",
  padding: "1rem",
  borderRadius: "1.125rem",
  border: "none",
  color: "#fff",
  fontSize: "1.125rem",
  fontWeight: 700,
  cursor: "pointer",
  width: "calc(100% - 3rem)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  background:"linear-gradient(151.19deg, #476FFF 1.77%, #4600B6 71.94%)",
  transition: "color 0.5s ease",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    background:"linear-gradient(331.19deg, #476FFF 1.77%, #4600B6 71.94%)",
    opacity: 0,
    transition: "opacity 0.5s ease",
    zIndex: 0,
    pointerEvents: "none",
  },
  "&:hover::after": {
    opacity: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
});

const GetStartButton = styled.button({
  padding: "1rem",
  borderRadius: "1.125rem",
  border: "0.063rem solid #d9dcfe",
  background: "#fff",
  color: "#000",
  fontSize: "1.125rem",
  fontWeight: 700,
  cursor: "pointer",
  width: "calc(100% - 3rem)",
  marginBlockStart: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
  "&:hover": {
    boxShadow: "0 0 0.75rem #c9ffda",
    borderColor: "#c9ffda",
  },
});

const Effortlessly = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <SectionRow ref={sectionRef}>
        <Left className="animate">
          <h3>✨ Enterprise Security</h3>
          <CtaList>
            <h4>Ready to Transform?</h4>
            <p>Experience the future of manufacturing HR management</p>
            <ol>
              <li>
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
                Smart Automation</li>
              <li>
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
                Zero Manual Work</li>
              <li>
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
                Instant Insights</li>
            </ol>
          </CtaList>
          <Buttonwrap>
            <CtaButton>
              <span>Book your demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                <path d="M6.71165 12.8863L5.22869 11.4161L9.12145 7.52339H0V5.36288H9.12145L5.22869 1.47652L6.71165 -4.45843e-05L13.1548 6.44314L6.71165 12.8863Z" fill="white" />
              </svg>
            </CtaButton>
          </Buttonwrap>
        </Left>
        <Right className="animate">
          <Image src={EffortlesslyImg} />

        </Right>
      </SectionRow >
    </>
  )
}

export default Effortlessly