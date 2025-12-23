"use client"
import React from "react"
import styled from "styled-components"
import Badge from "../assets/badge1.svg";
import Image from 'next/image';

const Section = styled.section({
  paddingBlock: "3.5rem",
})

const SectionRow = styled.div({
  display: "flex",
  alignItems: "flex-start",
  gap: "2.5rem",
})

/* LEFT 40% */
const Left = styled.div({
  width: "40%",

  '& h2': {
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.3,
    marginBlock: "0.75rem 1rem",
  },

  '& p': {
    fontSize: "0.95rem",
    color: "#555",
    maxWidth: "90%",
  },
})

/* RIGHT 60% */
const Right = styled.div({
  width: "60%",
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
  padding: "1.25rem 1.1rem",
  borderRadius: "0.75rem",
  border: "1px solid transparent",
  transition: "all .25s ease",
  cursor: "default",

  '&:hover': {
    border: "1px solid #e5e7eb",
    backgroundColor: "#fff",
  },

  '& h4': {
    fontSize: "0.95rem",
    fontWeight: 600,
    marginBlock: "0.75rem 0.25rem",
  },

  '& span': {
    fontSize: "0.8rem",
    color: "#555",
  },
})

export default function Revoluationhr() {
  return (
    <Section>
      <div className="container">
        <SectionRow>
          {/* LEFT */}
          <Left>
            <span>✨ We are Seva HR</span>
            <h2>Revolutionize Your<br />HR Management</h2>
            <p>
              Complete workforce management solution built for complex
              operations — from manufacturing floors, healthcare facilities,
              logistics centers to service industries.
            </p>
          </Left>
          {/* RIGHT */}
          <Right>
            <CardList>
              <Card>
                <div>
                  <Image src={Badge} alt="Logo" width={60} height={60} />
                </div>
                <div>
                  <h4>ISO 27001</h4>
                  <span>Certified Ready</span>
                </div>
              </Card>
              <Card>
                <h4>Bank-Grade</h4>
                <span>Security</span>
              </Card>
              <Card>
                <h4>Fully Compliant</h4>
                <span>EPF, ESI, TDS</span>
              </Card>
              <Card>
                <h4>100+</h4>
                <span>Organisations</span>
              </Card>
              <Card>
                <h4>10,000+</h4>
                <span>Employees Managed</span>
              </Card>
              <Card>
                <h4>100%</h4>
                <span>Compliance Rate</span>
              </Card>
            </CardList>
          </Right>
        </SectionRow>
      </div>
    </Section>
  )
}
