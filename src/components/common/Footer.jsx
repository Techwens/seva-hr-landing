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
});

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
      textDecoration: "underline",
    },
  },
});

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
});

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
    "& span": {
      display: "flex",
      alignItems: "center",
      height: "0.938rem",
      width: "0.938rem",
      "& img": {
        height: "100%",
        width: "100%",
      }
    }

  }
});

const Copyright = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  marginBlockStart: "3.125rem",
  padding: "0.75rem 1.5rem",
  borderRadius: "0.75rem",
  background: "#5559DE",
  fontWeight: 500,
  fontSize: "0.875rem",
  "& span": {
    display: "flex",
    gap: "0.25rem",
    alignItems: "center",
    "& div": {
      height: "0.938rem",
      width: "0.75rem",
      display:"flex",
      "& svg": {
        height: "100%",
        width: "100%",
      }
    },
  },
  "& .terms": {
    display: "flex",
    gap: "3.125rem",
    "& a": {
      textDecoration: "none",
      transition: "opacity .2s ease",
      color: "#fff"
    },
    "& a:hover": {
      color: "#ff7f0f",
      textDecoration: "underline",
    },
  },
  "@media (max-width: 768px)": {
    flexDirection: "column",
    textAlign: "center",
    gap: "0.5rem",
  },
});




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
        <Copyright>
          <span>© 2025 SevaHR. All rights reserved.</span>
          <span>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
                <path d="M12 6.34254C12.0021 5.31797 11.7684 4.30817 11.3188 3.39991C10.8693 2.49166 10.2174 1.71209 9.41925 1.12821C8.62106 0.544334 7.7004 0.173593 6.73638 0.0478463C5.77237 -0.0779004 4.79382 0.0451073 3.88482 0.4063C2.97582 0.767493 2.16356 1.35607 1.51781 2.12146C0.87206 2.88685 0.412143 3.80617 0.177574 4.80042C-0.0569955 5.79467 -0.0592028 6.83413 0.171142 7.82948C0.401486 8.82483 0.857495 9.74631 1.49999 10.5147V17.0222C1.49998 17.3948 1.59974 17.7598 1.78778 18.0752C1.97583 18.3905 2.2445 18.6435 2.56286 18.8049C2.88122 18.9662 3.23631 19.0295 3.58726 18.9873C3.9382 18.9451 4.2707 18.7992 4.54649 18.5665L5.99999 17.3387L7.45349 18.5649C7.72917 18.7976 8.06154 18.9434 8.41234 18.9857C8.76315 19.0279 9.11813 18.9648 9.43644 18.8036C9.75474 18.6424 10.0234 18.3897 10.2116 18.0746C10.3997 17.7595 10.4997 17.3947 10.5 17.0222V10.5147C11.4662 9.36387 11.9998 7.87982 12 6.34254ZM5.99999 1.59601C6.89 1.59601 7.76003 1.87439 8.50005 2.39594C9.24007 2.9175 9.81685 3.65881 10.1574 4.52612C10.498 5.39344 10.5872 6.34781 10.4135 7.26855C10.2399 8.18928 9.8113 9.03504 9.18197 9.69885C8.55263 10.3627 7.75081 10.8147 6.87789 10.9979C6.00498 11.181 5.10018 11.087 4.27791 10.7278C3.45564 10.3685 2.75284 9.76014 2.25837 8.97958C1.76391 8.19901 1.49999 7.28132 1.49999 6.34254C1.50118 5.08407 1.97567 3.8775 2.81932 2.98762C3.66298 2.09775 4.80688 1.59727 5.99999 1.59601ZM8.78774 17.3767C8.72428 17.4098 8.6531 17.423 8.58273 17.4146C8.51236 17.4061 8.44579 17.3765 8.39099 17.3292L5.99999 15.3111L3.60974 17.3292C3.5547 17.3758 3.48832 17.4051 3.41823 17.4136C3.34813 17.4222 3.27716 17.4098 3.21347 17.3777C3.14978 17.3457 3.09596 17.2953 3.0582 17.2324C3.02043 17.1695 3.00026 17.0967 2.99999 17.0222V11.8153C3.91046 12.3758 4.94576 12.6712 5.99999 12.6712C7.05421 12.6712 8.08951 12.3758 8.99999 11.8153V17.0222C9.00082 17.0966 8.98122 17.1697 8.94356 17.2326C8.9059 17.2955 8.85178 17.3455 8.78774 17.3767Z" fill="white" />
              </svg>
            </div>
            Made in India | ISO 27001 Certified | GDPR Compliant</span>

          <div className="terms">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Data Security</a>
          </div>
        </Copyright>

      </div>
    </FooterWrapper>
  )
}

export default Footer
