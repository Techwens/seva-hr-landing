"use client"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"




const Section = styled.section({
  paddingBlock: "3.5rem",
  "& .centerized": {
    display: "flex",
    justifyContent: "center",
  },
  "& h3": {
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.3,
    color: '#000',
    marginBlockEnd: "0.625rem",
    borderRadius: '1.875rem',
    background: 'linear-gradient(54.19deg, #D9DBFF 17.15%, #CAFFDB 75.24%)',
    padding: '0.625rem 1.25rem 0.625rem 3.5rem',
    display: 'inline-block',
    position: 'relative',
    '&:after': {
      content: "''",
      position: 'absolute',
      height: '1.313rem',
      width: '1.875rem',
      left: '1rem',
      top: '50%',
      transform: "translateY(-50%)",
      backgroundImage: 'url(../assets/sparkle.svg)',
      backgroundRepeat: 'no-repeat',
    }
  },
  "& h2": {
    textAlign: 'center',
    marginBlockEnd: '0.938rem',
    '& span': {
      background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
    }
  },
  "& p": {
    textAlign: 'center',
  }
})
const SectionRow = styled.div({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginBlockStart: "2.625rem",
  overflow: "hidden",
})

const Left = styled.div({
  width: "36%",
  opacity: 0,
  transform: "translateX(-3rem)",
  transition: "all 0.8s ease",

  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
})





export const Right = styled.div({
  width: "56%",
  opacity: 0,
  transform: "translateX(3rem)",
  transition: "all 0.8s ease",

  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
});












export default function Powerfullplatform() {
  const sectionRef = useRef(null);
  const [accuracyVisible, setAccuracyVisible] = React.useState(false);


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
    <Section>
      <div className="container">
        <div className="centerized">
          <h3>Powerful Features</h3>
        </div>
        <h2>Everything You Need in <span>One Powerful Platform</span></h2>
        <p>One unified platform for HR, Attendance, Payroll, Compliance, and Analytics — built for complex shift-based operations across all industries.</p>
        <SectionRow ref={sectionRef}>
          <Left className="animate">
             
     
          </Left>
          <Right className="animate">
           
       
          </Right>

        </SectionRow>


      </div>
    </Section>
  )
}
