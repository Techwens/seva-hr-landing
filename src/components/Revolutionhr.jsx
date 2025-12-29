"use client"
import React from "react"
import styled from "styled-components"
import Image from "next/image"
import Badge1 from "../assets/badge1.svg"
import Badge2 from "../assets/badge2.svg"
import Badge3 from "../assets/badge3.svg"
import Badge4 from "../assets/sparkle.svg"




const Section = styled.section({
  paddingBlockEnd: "3.5rem",
})

const SectionRow = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "2.5rem",
  background: "linear-gradient(220.61deg, #FBFDFF -17.83%, #F2F8FF 72.58%)",
  padding: "2.813rem",
  borderRadius: "2.5rem",
  boxShadow: "0px 9px 14px 0px #16517A1A",
  "@media (max-width: 991px)": {
    flexDirection: "column",
  },
})


const Left = styled.div({
  width: "30%",
  "@media (max-width: 991px)": {
      width: "100%",
    },
  "& h3": {
    fontWeight: 600,
    lineHeight: 1.3,
    color:'#004CAE',
    marginBlockEnd: "0.625rem",
    borderRadius:'1.875rem',
    backgroundColor:'#fff',
    padding: '0.625rem 1.25rem 0.625rem 3.5rem',
    display:'inline-block',
    position:'relative',
    '&:after':{
      content:"''",
      position:'absolute',
      height:'1.313rem',
      width:'1.875rem',
      left: '1rem',
      top: '50%',
      transform: "translateY(-50%)",
      backgroundImage:'url(../assets/sparkle.svg)',
      backgroundRepeat:'no-repeat',
    }
  },
  "& h2": {
    fontSize: "2.188rem",
    fontWeight: 700,
    lineHeight: 1.3,
    marginBlock: "0.75rem 1rem",
  },
})


const Right = styled.div({
  width: "70%",
    "@media (max-width: 991px)": {
      width: "100%",
    },
})

const CardList = styled.ul({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1.25rem",
  listStyle: "none",
  padding: 0,
  margin: 0,
})

const Card = styled.li({
  padding: "1rem",
  borderRadius: "1.563rem",
  transition: "all .25s ease",
  cursor: "default",
  display: "flex",
  gap: "1rem",
  border: "0.063rem solid #fff",
  boxShadow: '-2px -3px 1px 0px #FFFFFF inset',
  '& .points':{
    position:'relative',
    '&:after':{
      content:"''",
      position:'absolute',
      height:'100%',
      width:'0.0625rem',
      backgroundColor:'#e5e7eb',
      left:'-0.7rem',
      top:'0',
      opacity: 0,
      transition: "opacity .25s ease",
    },
  },
  "&:hover": {
    border: "1px solid #e5e7eb",
    backgroundColor: "$white",
    boxShadow:'none',
    
  },
  "&:hover .points::after": {
    opacity: 1,
  },

  "& h4": {
    fontSize: "1.25rem",
    fontWeight: "700",
    marginBlockEnd: "0.25rem",
    "@media (max-width: 1199px)": {
      fontSize:"1.063rem",
    },
  },

  "& span": {
    fontSize: "1rem",
    fontWeight: "500",
  },
})

const Icon = styled.div({
  display: "flex",
  height: "1.563rem",
  width: "1.563rem",

  "& img": {
    height: "100%",
    width: "100%",
  },
})



const cardData = [
  {
    title: "ISO 27001",
    subtitle: "Certified Ready",
    image: Badge1,
  },
  {
    title: "Bank-Grade",
    subtitle: "Security",
    image: Badge1,
  },
  {
    title: "Fully Compliant",
    subtitle: "EPF, ESI, TDS",
    image: Badge2,
  },
  {
    title: "100+",
    subtitle: "Organisations",
    image: Badge2,
  },
  {
    title: "10,000+",
    subtitle: "Employees Managed",
    image: Badge3,
  },
  {
    title: "100%",
    subtitle: "Compliance Rate",
    image: Badge3,
  },
]



export default function Revoluationhr() {
  return (
    <Section>
      <div className="container">
        <SectionRow>
          <Left>
            <h3>We are Seva HR</h3>
            <h2>
              Revolutionize Your
              <br />
              HR Management
            </h2>
            <p>
              Complete workforce management solution built for complex
              operations — from manufacturing floors, healthcare facilities,
              logistics centers to service industries.
            </p>
          </Left>

          <Right>
            <CardList>
              {cardData.map((item, index) => (
                <Card key={index}>
                  <Icon>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={60}
                      height={60}
                    />
                  </Icon>

                  <div className="points">
                    <h4>{item.title}</h4>
                    <span>{item.subtitle}</span>
                  </div>
                </Card>
              ))}
            </CardList>
          </Right>
        </SectionRow>
      </div>
    </Section>
  )
}
