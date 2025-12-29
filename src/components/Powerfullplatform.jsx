"use client"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Power1 from "../assets/power1.svg"
import Power2 from "../assets/power2.svg"
import Power3 from "../assets/power3.svg"
import Power4 from "../assets/power4.svg"
import Power5 from "../assets/power5.svg"
import Image from "next/image"



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
  width: "60%",
  opacity: 0,
  transform: "translateX(-3rem)",
  transition: "all 0.8s ease",
  paddingInlineEnd:"1rem",
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
  "& ul":{
    padding:"0rem",
    margin:"0rem",
    listStyle:"none",
    display:"flex",
    flexWrap:"wrap",
    gap:"1rem",
    "& li":{
      width:"calc((100% - 2rem) / 3)",
      padding:"0.063rem",
      position:"relative",
      borderRadius:"1.188rem",
      boxShadow: "0px 4px 36px 0px #00000014",
      overflow:"hidden",
      padding:"1.875rem 1.563rem",
        '&:after': {
          content: "''",
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: '0',
          top: '0',
          background: "linear-gradient(90deg, #FFD7BC 0%, #D9D1FF 106.8%)",
          zIndex:"0",
        },
        '&:before': {
          content: "''",
          position: 'absolute',
          height: 'calc(100% - 0.125rem)',
          width: 'calc(100% - 0.125rem)',
          left: '1px',
          top: '1px',
          background: "#fff",
          zIndex:"1",
          borderRadius:"1.125rem",
        },
      "& div":{
        position:"relative",
        zIndex:"3",
        display:"flex",
        alignItems:"center",
        gap:"0.5rem",
        marginBlockEnd:"1.25rem",
        "& span":{
          height:"2.5rem",
          width:"2.5rem",
          display:"flex",
          alignItems:"center",
          "& svg":{
            height:"100%",
            width:"100%",
          }
        },
        "& h4":{
        marginBlockEnd:"0rem",
        },
      },
      "& p":{
        marginBlockEnd:"0rem",
        position:"relative",
        zIndex:"3",
        textAlign:"start",
      }
    }
  }
})





export const Right = styled.div({
  width: "40%",
  opacity: 0,
  transform: "translateX(3rem)",
  transition: "all 0.8s ease",
  "& ul":{
    padding:"1.5rem",
    margin:"0rem",
    listStyle:"none",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    gap:"1rem",
    "& li":{
      width:"calc((100% - 1rem) / 2)",
      padding:"1rem",
      position:"relative",
      borderRadius:"1.125rem",
      display:"flex",
      alignItems:"center",
      boxShadow: "0px 4px 36px 0px #0010EF26",
      gap:"0.5rem",
      "& div":{
        height:"1.188rem",
        width:"1.188rem",
        "& img":{
          height:"100%",
          width:"100%",
        }
      },
      "& h5":{
      background: 'linear-gradient(90deg, #002BFF -36.06%, #BC1DAF 96.9%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
      marginBlockEnd:"0rem",
      fontSize:"0.813rem",
      fontWeight:"600",
      }
    }
  

  },
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
});












export default function Powerfullplatform() {
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
  const features = [
    {
      title: "One Smart Shift Management",
      description: "Manual shift registers causing errors",
      icon: Power1
    },
  ]


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
            <ul>
              {features?.map((item, index) => (
                <li key={index}>
                  <div>
                    <Image src={item?.icon}/>
                    <h4 className="bold">{item?.title}</h4>
                  </div>
                  <p>{item?.description}</p>
                </li>
              ))}
            </ul>

          </Left>
          <Right className="animate">
            <ul>
              <li>
                <div>

                </div>
                <h5>Employee Lifecycle Management</h5>
              </li>
                  <li>
                <div>

                </div>
                <h5>Smart Shift & Attendance</h5>
              </li>
                  <li>
                <div>

                </div>
                <h5>Multi-Level Payroll Engine</h5>
              </li>
                  <li>
                <div>

                </div>
                <h5>Geo-Fencing & GPS Tracking</h5>
              </li>
            </ul>
          </Right>
        </SectionRow>
      </div>
    </Section>
  )
}
