"use client"
import React from "react"
import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
// import WhiteBrandIcon from "../../assets/white-brand-icon.svg";
import WhiteCallIcon from "../../assets/white-call-icon.svg";
import WhiteEmailIcon from "../../assets/white-email-icon.svg";
import WhiteBrandIcon from "@/assets/svg/WhiteBrandIcon"

// Social media icons
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FooterWrapper = styled.footer({
  background: "#0F172A",
  padding: "3rem 0 0",

  color: "#d6d6d6",
});

const FooterList = styled.ul({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  justifyContent: "space-between",
  gap: "2rem",
  flexWrap: "wrap",
  "@media (max-width: 991px)": {
    gap: "1rem",
  },
  "& > li": {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    "@media (max-width: 575px)": {
      gap: "0rem",
    },
  },

  "& .col-brand": {
    width: "30%",
    "@media (max-width: 575px)": {
      width: "100%",
    },
  },
  "& .col-features": {
    width: "20%",
    "@media (max-width: 575px)": {
      width: "28%",
    },
  },
  "& .col-compliance": {
    width: "20%",
    "@media (max-width: 575px)": {
      width: "28%",
    },
  },
  "& .col-support": {
    width: "20%",
    "@media (max-width: 575px)": {
      width: "28%",
    },
  },
  "& h4": {
    fontWeight: 600,
    marginBottom: "1.5rem",
    color: "#fff",
    "@media (max-width: 991px)": {
      marginBottom: "0.5rem",
    },
  },



  "& ul": {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    "@media (max-width: 991px)": {
      gap: "0.5rem",
    },
  },

  "& ul li": {
    cursor: "pointer",
    transition: "color 0.25s ease",
    "&:hover": {
      color: "#fff",
    },
  },
});

const Logo = styled.div({
  height: "2.5rem",
  width: "auto",
  display: "flex",
  alignItems: "center",
  marginBlockEnd: "0.5rem",
  "@media (max-width: 991px)": {
    height: "1.5rem",
  },
  "& svg": {
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
  "& a": {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    color: "#d6d6d6",
    textDecoration: "none",
    transition: "color 0.2s ease",
    "&:hover": {
      color: "#fff",
    },
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

const SocialLinks = styled.div({
  display: "flex",
  gap: "0.75rem",
  marginBlockStart: "1rem",
  "& a": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.25rem",
    height: "2.25rem",
    borderRadius: "0.5rem",
    background: "rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.75)",
    transition: "all 0.2s ease",
    "&:hover": {
      background: "rgba(255,255,255,0.2)",
      color: "#fff",
      transform: "translateY(-2px)",
    },
    "& svg": {
      width: "1.125rem",
      height: "1.125rem",
    }
  }
});

const Copyright = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  marginBlockStart: "2.5rem",
  padding: "1rem 0",
  borderTop: "1px solid rgba(255,255,255,0.1)",
  fontWeight: 500,
  fontSize: "0.875rem",
  color: "#d6d6d6",
  "@media (max-width: 991px)": {
    flexDirection: "column",
    textAlign: "center",
    gap: "0rem",
  },
  "@media (max-width: 575px)": {
    marginBlockStart: "1rem",
    fontSize: "0.625rem",
  padding: "0.75rem 0",

  },
  "& span": {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    "& div": {
      height: "0.938rem",
      width: "0.75rem",
      display: "flex",
      "& svg": {
        height: "100%",
        width: "100%",
      }
    },
  },
  "& .terms": {
    display: "flex",
    gap: "2rem",
    "& a": {
      textDecoration: "none",
      transition: "color .2s ease",
      color: "#d6d6d6",
    },
    "& a:hover": {
      color: "#fff",
    },
  },

});




const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterList>
          <li className="col-brand">
            <Logo>
              <WhiteBrandIcon />
            </Logo>
            <p>
              Modern HRMS built for Indian businesses. Clean, customizable, and
              completely compliant with all regulatory requirements.
            </p>
            <Contact>
              <a href="tel:+918045678900" aria-label="Call SevaHR at +91-80-4567-8900">
                <span>
                  <Image src={WhiteCallIcon} alt="" aria-hidden="true" width={15} height={15} />
                </span>
                +91-80-4567-8900
              </a>
              <a href="mailto:hello@sevahr.com" aria-label="Email SevaHR at hello@sevahr.com">
                <span>
                  <Image src={WhiteEmailIcon} alt="" aria-hidden="true" width={15} height={15} />
                </span>
                hello@sevahr.com
              </a>
            </Contact>
            <SocialLinks>
              <a href="https://linkedin.com/company/sevahr" target="_blank" rel="noopener noreferrer" aria-label="Follow SevaHR on LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://twitter.com/sevahr" target="_blank" rel="noopener noreferrer" aria-label="Follow SevaHR on X (Twitter)">
                <TwitterIcon />
              </a>
              <a href="https://facebook.com/sevahr" target="_blank" rel="noopener noreferrer" aria-label="Follow SevaHR on Facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com/sevahr" target="_blank" rel="noopener noreferrer" aria-label="Follow SevaHR on Instagram">
                <InstagramIcon />
              </a>
            </SocialLinks>
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
          <span>© {new Date().getFullYear()} SevaHR. All rights reserved.</span>
          <span>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none" aria-hidden="true">
                <path d="M12 6.34254C12.0021 5.31797 11.7684 4.30817 11.3188 3.39991C10.8693 2.49166 10.2174 1.71209 9.41925 1.12821C8.62106 0.544334 7.7004 0.173593 6.73638 0.0478463C5.77237 -0.0779004 4.79382 0.0451073 3.88482 0.4063C2.97582 0.767493 2.16356 1.35607 1.51781 2.12146C0.87206 2.88685 0.412143 3.80617 0.177574 4.80042C-0.0569955 5.79467 -0.0592028 6.83413 0.171142 7.82948C0.401486 8.82483 0.857495 9.74631 1.49999 10.5147V17.0222C1.49998 17.3948 1.59974 17.7598 1.78778 18.0752C1.97583 18.3905 2.2445 18.6435 2.56286 18.8049C2.88122 18.9662 3.23631 19.0295 3.58726 18.9873C3.9382 18.9451 4.2707 18.7992 4.54649 18.5665L5.99999 17.3387L7.45349 18.5649C7.72917 18.7976 8.06154 18.9434 8.41234 18.9857C8.76315 19.0279 9.11813 18.9648 9.43644 18.8036C9.75474 18.6424 10.0234 18.3897 10.2116 18.0746C10.3997 17.7595 10.4997 17.3947 10.5 17.0222V10.5147C11.4662 9.36387 11.9998 7.87982 12 6.34254ZM5.99999 1.59601C6.89 1.59601 7.76003 1.87439 8.50005 2.39594C9.24007 2.9175 9.81685 3.65881 10.1574 4.52612C10.498 5.39344 10.5872 6.34781 10.4135 7.26855C10.2399 8.18928 9.8113 9.03504 9.18197 9.69885C8.55263 10.3627 7.75081 10.8147 6.87789 10.9979C6.00498 11.181 5.10018 11.087 4.27791 10.7278C3.45564 10.3685 2.75284 9.76014 2.25837 8.97958C1.76391 8.19901 1.49999 7.28132 1.49999 6.34254C1.50118 5.08407 1.97567 3.8775 2.81932 2.98762C3.66298 2.09775 4.80688 1.59727 5.99999 1.59601ZM8.78774 17.3767C8.72428 17.4098 8.6531 17.423 8.58273 17.4146C8.51236 17.4061 8.44579 17.3765 8.39099 17.3292L5.99999 15.3111L3.60974 17.3292C3.5547 17.3758 3.48832 17.4051 3.41823 17.4136C3.34813 17.4222 3.27716 17.4098 3.21347 17.3777C3.14978 17.3457 3.09596 17.2953 3.0582 17.2324C3.02043 17.1695 3.00026 17.0967 2.99999 17.0222V11.8153C3.91046 12.3758 4.94576 12.6712 5.99999 12.6712C7.05421 12.6712 8.08951 12.3758 8.99999 11.8153V17.0222C9.00082 17.0966 8.98122 17.1697 8.94356 17.2326C8.9059 17.2955 8.85178 17.3455 8.78774 17.3767Z" fill="white" />
              </svg>
            </div>
            Made in India | ISO 27001 Certified | GDPR Compliant</span>

          <nav className="terms" aria-label="Legal links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/data-security">Data Security</Link>
          </nav>
        </Copyright>

      </div>
    </FooterWrapper>
  )
}

export default Footer
