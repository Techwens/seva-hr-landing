"use client"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Image from "next/image"
import RoadMap from "../assets/roadmap.svg"
import WebinarPlay from "../assets/webinar-play.svg"
import cirtificate from "../assets/Vector.svg"
import packlock from "../assets/padlock-check 2.svg"
import SparkleBg from "../assets/sparkle.svg"

const employeeRanges = [
  { value: "", label: "Select Range" },
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-100", label: "51-100 employees" },
  { value: "101-250", label: "101-250 employees" },
  { value: "251-500", label: "251-500 employees" },
  { value: "501-1000", label: "501-1000 employees" },
  { value: "1000+", label: "1000+ employees" },
];

const securityData = [
  {
    title: "Personalised Demo",
    desc: "Custom walkthrough tailored to your specific industry requirements",
    icon: WebinarPlay,
  },
  {
    title: "Implementation Roadmap",
    desc: "Clear timeline and step-by-step migration strategy for seamless onboarding",
    icon: RoadMap,
  },
  {
    title: "ROI Analysis",
    desc: "See exactly how much time and money you'll save with detailed projections",
    icon: cirtificate,
  },
  {
    title: "Free Trial",
    desc: "No credit card required — start exploring with zero commitment",
    icon: cirtificate,
  },
]

const Section = styled.section({
  paddingBlock: "3.5rem",
  position: "relative",
  "&::after": {
    content: '""',
    width: '40vw',
    height: '60vh',
    borderRadius: '50%',
    backgroundColor: 'rgb(123 96 255 / 8%)',
    filter: 'blur(5rem)',
    position: 'absolute',
    bottom: '0',
    right: '0',
    zIndex: "-1",
  },
  "& .centerized": {
    display: "flex",
    justifyContent: "center",
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

});
const Badge = styled.h3({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.625rem 1.25rem",
  borderRadius: "3rem",
  background: "linear-gradient(135deg, #EEF2FF 0%, #FDF4FF 100%)",
  border: "1px solid rgba(71, 111, 255, 0.15)",
  marginBlockEnd: "1.5rem",
  boxShadow: "0 4px 15px rgba(71, 111, 255, 0.08)",
  "& svg": {
    width: "1.125rem",
    height: "1.125rem",
  },
  "& span": {
    fontSize: "0.875rem",
    fontWeight: 600,
    background: "linear-gradient(90deg, #476FFF 0%, #7B60FF 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
});
const Subtitle = styled.p({
  fontSize: "1.125rem",
  color: "#64748B",
  maxWidth: "38rem",
  margin: "0 auto",
  lineHeight: 1.7,
  textAlign: "center",
});
const SectionRow = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBlockStart: "2.625rem",
  overflow: "hidden",
  "@media (max-width: 991px)": {
    flexDirection: "column",
  },
});

const Left = styled.div({
  width: "50%",
  opacity: 0,
  transform: "translateX(-3rem)",
  transition: "all 0.8s ease",
  "@media (max-width: 991px)": {
    width: "100%",
  },
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const CardList = styled.ul({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  "& li": {
    padding: "1.25rem 1.5rem",
    borderRadius: "1.25rem",
    background: "#fff",
    border: "1px solid #D5D3FF",
    boxShadow: "0px 2px 10px 0px #00000012",
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    transition: "background 0.4s ease",
    "& p": {
      textAlign: "start",
      transition: "all 0.4s ease",
      transform: "translateY(0)",
    },
    "&:hover": {
      border: "1px solid #ffead8",
      background: "linear-gradient(151.19deg, #ffffff 1.77%, #ff7f0f17 71.94%)",
    },
    "&:hover h4": {
      transform: "translateX(-2rem)",
    },
    "&:hover p": {
      transform: "translateY(-0.375rem)",
    },
    "&:hover .HeaderRow div": {
      opacity: 0,
      transform: "translateX(-1.5rem)",
    },
  },
});
const HeaderRow = styled.div({
  display: "flex",
  alignItems: "center",
  gap: ".75rem",
  "& div": {
    width: "1.438rem",
    height: "1.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexShrink: 0,
    transition: "all 0.4s ease",
    "& img": {
      height: "100% !important",
      width: "100% !important",
    }
  },
  "& h4": {
    marginBlockEnd: "0rem",
    fontWeight: "700",
    transition: "all 0.4s ease",
    transform: "translateX(0)",
  }
});

export const Right = styled.div({
  width: "50%",
  opacity: 0,
  padding: "2rem",
  transform: "translateX(3rem)",
  transition: "all 0.8s ease",
  "@media (max-width: 991px)": {
    width: "100%",
  },
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
});


export const FormCard = styled.div({
  background: "#fff",
  borderRadius: "1.5rem",
  padding: "2.5rem",
  boxShadow: "0px 10px 40px rgba(0,0,0,0.06)",

  "& h4": {
    fontSize: "1.75rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
  },

  "& p": {
    fontSize: "0.95rem",
    marginBottom: "2rem",
    textAlign: "start",
  },

  "@media (max-width: 768px)": {
    padding: "1.75rem",
  },
});

export const FormGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",

  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
  },
});

export const FormGroup = styled.div(({ $hasError }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  "& label": {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#111",
  },

  "& input, & select": {
    height: "3.25rem",
    padding: "0 1rem",
    borderRadius: "1rem",
    border: $hasError ? "1px solid #EF4444" : "1px solid #e6e6e6",
    fontSize: "0.875rem",
    outline: "none",
    background: $hasError ? "#FEF2F2" : "#fafafa",
    transition: "all .25s ease",
    "&:focus": {
      borderColor: $hasError ? "#EF4444" : "#476FFF",
      background: "#fff",
      boxShadow: $hasError ? "0 0 0 3px rgba(239,68,68,0.12)" : "0 0 0 3px rgba(71,111,255,0.12)",
    },
  },

  "& select": {
    appearance: "none",
    cursor: "pointer",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='8'%3E%3Cpath d='M1 1l6 6 6-6' stroke='%23000' fill='none' stroke-width='2'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
  },
}));

export const ErrorText = styled.span({
  fontSize: "0.75rem",
  color: "#EF4444",
  marginTop: "-0.25rem",
});

export const SuccessMessage = styled.div({
  padding: "1.5rem",
  background: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)",
  borderRadius: "1rem",
  textAlign: "center",
  "& h5": {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#065F46",
    marginBottom: "0.5rem",
  },
  "& p": {
    color: "#047857",
    margin: 0,
    textAlign: "center",
  },
});

export const ButtonWrap = styled.div({
  display: "flex",
  alignItems: "flex-end",
  "@media (max-width: 768px)": {
    marginTop: "0.5rem",
  },
  "& button": {
    width: "100%",
    height: "3.5rem",
    borderRadius: "1.125rem",
    border: "none",
    fontSize: "1rem",
    fontWeight: 700,
    cursor: "pointer",
    color: "#fff",
    background: "linear-gradient(90deg, #FF6600 0%, #7B60FF 106.8%)",
    transition: "all .3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0px 10px 25px rgba(127,63,255,0.35)",
    },
  }
});



export const PrivacyText = styled.div({
  marginTop: "1.75rem",
  fontSize: "0.85rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  "& div": {
    height: "1.5rem",
    width: "1.5rem",
    "& img": {
      height: "100% !important",
      width: "100%  !important",
    }
  }
});












export default function Actionform() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    employees: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.employees) {
      newErrors.employees = "Please select employee range";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setFormData({
      fullName: "",
      company: "",
      phone: "",
      email: "",
      employees: "",
    });
  };

  return (
    <Section>
      <div className="container">
        <div className="centerized">

          <Badge>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#476FFF">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span>Get Started Now</span>
          </Badge>
        </div>
        <h2>See <span>SEVA HRMS in Action</span></h2>
        <Subtitle>Book your personalized demo and discover how SEVA HRMS handles your industry&apos;s unique workforce challenges</Subtitle>
        <SectionRow ref={sectionRef}>
          <Left className="animate">
            <CardList role="list" aria-label="What you'll get with your demo">
              {securityData?.map((item, index) => (
                <li key={index}>
                  <HeaderRow className="HeaderRow">
                    <div>
                      <Image src={item?.icon} alt="" aria-hidden="true" width={100} height={100} />
                    </div>
                    <h4>{item?.title}</h4>
                  </HeaderRow>
                  <p>{item?.desc}</p>
                </li>
              ))}
            </CardList>
          </Left>
          <Right className="animate">
            <FormCard>
              <h4 id="form-title">Book Your Free Demo</h4>
              <p id="form-description">We&apos;ll contact you within 24 hours</p>

              {isSubmitted ? (
                <SuccessMessage role="alert" aria-live="polite">
                  <h5>Thank You!</h5>
                  <p>We&apos;ve received your request. Our team will contact you within 24 hours.</p>
                </SuccessMessage>
              ) : (
                <form onSubmit={handleSubmit} aria-labelledby="form-title" aria-describedby="form-description" noValidate>
                  <FormGrid>
                    <FormGroup $hasError={!!errors.fullName}>
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      />
                      {errors.fullName && <ErrorText id="fullName-error" role="alert">{errors.fullName}</ErrorText>}
                    </FormGroup>

                    <FormGroup $hasError={!!errors.company}>
                      <label htmlFor="company">Company *</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? "company-error" : undefined}
                      />
                      {errors.company && <ErrorText id="company-error" role="alert">{errors.company}</ErrorText>}
                    </FormGroup>

                    <FormGroup $hasError={!!errors.phone}>
                      <label htmlFor="phone">Phone *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && <ErrorText id="phone-error" role="alert">{errors.phone}</ErrorText>}
                    </FormGroup>

                    <FormGroup $hasError={!!errors.email}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && <ErrorText id="email-error" role="alert">{errors.email}</ErrorText>}
                    </FormGroup>

                    <FormGroup $hasError={!!errors.employees}>
                      <label htmlFor="employees">Number of Employees *</label>
                      <select
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.employees}
                        aria-describedby={errors.employees ? "employees-error" : undefined}
                      >
                        {employeeRanges.map((range) => (
                          <option key={range.value} value={range.value}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                      {errors.employees && <ErrorText id="employees-error" role="alert">{errors.employees}</ErrorText>}
                    </FormGroup>

                    <ButtonWrap>
                      <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Book a Demo"}
                      </button>
                    </ButtonWrap>
                  </FormGrid>
                </form>
              )}
              <PrivacyText>
                <div>
                  <Image src={packlock} alt="" aria-hidden="true" width={100} height={100} />
                </div>
                Your information is secure. We respect your privacy.
              </PrivacyText>
            </FormCard>
          </Right>
        </SectionRow>
      </div>
    </Section>
  )
}
