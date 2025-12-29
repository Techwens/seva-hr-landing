"use client"
import React from "react"
import styled from "styled-components"
import TextureBg from "../../assets/TextureBg.png"
import Image from "next/image"
import WhiteBrandIcon from "../../assets/white-brand-icon.svg";
import WhiteCallIcon from "../../assets/white-call-icon.svg";
import WhiteEmailIcon from "../../assets/white-email-icon.svg";

const FooterWrapper = styled.footer({
  backgroundImage: `linear-gradient(180deg, #4b3effe6 0%, #200484f5 100%), url(${TextureBg.src})`,
  padding: "2rem 0",
  color: "#fff",
})

const FooterList = styled.ul({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  justifyContent: "space-between",
  gap: "2rem",

  "@media (max-width: 991px)": {
    flexDirection: "column",
  },

  "& > li": {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },

  "& .col-brand": {
    width: "30%",
  },
  "& .col-features": {
    width: "23.33%",
  },
  "& .col-compliance": {
    width: "23.33%",
  },
  "& .col-support": {
    width: "23.33%",
  },

  "@media (max-width: 991px)": {
    "& .col-brand, & .col-features, & .col-compliance, & .col-support": {
      width: "100%",
    },
  },

  "& h4": {
    fontWeight: 600,
    marginBottom: "1.5rem",
  },

  "& p": {
    fontSize: "0.875rem",
    lineHeight: 1.6,
    opacity: 0.9,
  },

  "& ul": {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  "& ul li": {
    cursor: "pointer",
    transition: "opacity 0.25s ease",
    "&:hover": {
      color: "#ff7f0f",
      textDecoration:"underline",
    },
  },
})

const Logo = styled.div({
  height: "2.5rem",
  width: "auto",
  display: "flex",
  alignItems: "center",
  "& img": {
    height: "100%",
    width: "auto",
    objectFit: "contain",
  },
})

const Contact = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "0.375rem",
  fontSize: "0.875rem",
  opacity: 0.9,
  "& div": {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    "& span":{
      display:"flex",
      alignItems:"center",
      height: "0.938rem",
      width: "0.938rem",
      "& img": {
        height: "100%",
        width: "100%",
    }
    }
  
  }
})

/* =======================
   Component
======================= */

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterList>
          <li className="col-brand">
            <Logo>
              <Image src={WhiteBrandIcon} alt="icon" />
            </Logo>
            <p>
              Modern HRMS built for Indian businesses. Clean, customizable, and
              completely compliant with all regulatory requirements.
            </p>
            <Contact>
              <div>
                <span>
                  <Image src={WhiteCallIcon} alt="call" />
                </span>
                +91-80-4567-8900
              </div>
              <div>
                <span>
                  <Image src={WhiteEmailIcon} alt="mail" />
                </span>
                hello@sevahr.com
              </div>
            </Contact>
          </li>
          <li className="col-features">
            <h4>Features</h4>
            <ul>
              <li>Employee Management</li>
              <li>Payroll Processing</li>
              <li>Attendance Tracking</li>
              <li>Performance Reviews</li>
            </ul>
          </li>
          <li className="col-compliance">
            <h4>Compliance</h4>
            <ul>
              <li>EPF & ESI Returns</li>
              <li>TDS Calculations</li>
              <li>Form 16 Generation</li>
              <li>Labor Law Updates</li>
            </ul>
          </li>
          <li className="col-support">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Documentation</li>
              <li>Video Tutorials</li>
              <li>Contact Support</li>
            </ul>
          </li>
        </FooterList>
      </div>
    </FooterWrapper>
  )
}

export default Footer
