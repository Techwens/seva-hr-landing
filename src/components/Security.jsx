"use client"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import TextureBg from "../assets/TextureBg.png"
import Image from "next/image"
import brand from "../assets/image 4.svg"
import packlock from "../assets/padlock-check 1.svg"
import cirtificate from "../assets/Vector.svg"

const securityData = [
  {
    title: "ISO 27001 Ready",
    desc: "Following international standards for information security management",
    icon: cirtificate,
  },
  {
    title: "AES-256 Encryption",
    desc: "Military-grade encryption for all your sensitive data",
    icon: cirtificate,
  },
  {
    title: "Secure Document Vault",
    desc: "Protected storage for employee documents and records",
    icon: cirtificate,
  },
  {
    title: "Role-based Access",
    desc: "Controlled access ensuring data visibility by role",
    icon: cirtificate,
  },
]

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
    background: 'linear-gradient(311.72deg, #B9D9FF 30.95%, #FFF9CA 70.45%)',
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
  "@media (max-width: 991px)": {
    width: "100%",
  },
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
})
const CardListHeading = styled.div({
  background: 'linear-gradient(180deg, #476FFF 1.77%, #4600B6 71.94%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  fontSize: "1.125rem",
  fontWeight: "700",
  display: "flex",
  gap: "0.5rem",
  marginBlockEnd: "1.5rem",
  "& div": {
    height: "1.5rem",
    width: "1.5rem",
    "& img": {
      height: "100% !important",
      width: "100%  !important",
    }
  }
})
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
    boxShadow: '0px 2px 10px 0px #00000012',
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    "& p": {
      textAlign: "start",
    }
  }
})
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
    "& img": {
      height: "100% !important",
      width: "100% !important",
    }
  },
  "& h4": {
    marginBlockEnd: "0rem",
    fontWeight: "700",
  }
})


export const Right = styled.div({
  width: "56%",
  opacity: 0,
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

export const FloatingWrap = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: "3rem 0rem 0rem 0rem",
  display: "flex",
  gap: "0.688rem",
  alignItems: "center",
  "@keyframes floatUp": {
    "0%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-16px)" },
    "100%": { transform: "translateY(0)" },
  },

  "@keyframes floatDown": {
    "0%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(16px)" },
    "100%": { transform: "translateY(0)" },
  },

  "& li": {
    animationDuration: "4s",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    minWidth: "100px",
    padding: "1rem 1.5rem",
    borderRadius: "1.125rem",
    background: "#fff",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: ".25rem",
    "& h5": {
      margin: 0,
      fontSize: "1rem",
      fontWeight: 700,
      textAlign: "start",
    },
    "& p": {
      margin: 0,
      fontSize: "0.813rem",
      textAlign: "start",
    },
    "&:nth-child(odd)": {
      animationName: "floatUp",
      marginBlockEnd: "-3rem",
    },
    "&:nth-child(even)": {
      animationName: "floatDown",
      marginBlockStart: "-3rem",
    },
    "&:last-child": {
      background: "linear-gradient(135deg, #FF6A00, #7C3AED)",
      flexDirection: "row",
      gap: "0.8rem",
      "& span": {
        widows: "1.938rem",
        height: "2.25",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }
    },
  },
})
export const Brand = styled.div({
  margin: "6rem 0rem 1rem 0rem",
  width: "8.75rem",
  height: "auto",
  "& img": {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  }
})
export const Detailslist = styled.ul({
  listStyle: "none",
  margin: "0",
  padding: 0,
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  "& li": {
    width: "calc((100% - 1rem) / 2)",
    padding: "0.125rem",
    borderRadius: "1.125rem",
    background: "linear-gradient(270deg, #9ED5FF 0%, #FFFFFF 100%)",
    "& > div": {
      height: "100%",
      width: "100%",
      padding: "1rem 1.25rem",
      borderRadius: "1rem",
      backgroundRepeat: "repeat",
      "& p": {
        marginBlockEnd: "0.5rem",
        textAlign: "start",
      },
      "& h4": {
        marginBlockEnd: "0.5rem",
        fontWeight: "700",
        fontSize: "1.875rem",
      },
      "& h6": {
        marginBlockEnd: "0rem",
        textAlign: "end",
        fontWeight: "700",
      }
    },

    /* ===== 1st card ===== */
    "&:nth-child(1)": {
      background: "linear-gradient(107.86deg, #FFFFFF -1.72%, #81C8FF 92.86%)",
      "& > div": {
        backgroundImage: `
        linear-gradient(117deg, rgba(250, 244, 212, 0.86) 0%, rgba(201, 229, 255, 0.87) 100%),
        url(${TextureBg.src})
      `,
      },
    },
    /* ===== 2nd card ===== */
    "&:nth-child(2)": {
      background: "linear-gradient(107.86deg, #FFFFFF -1.72%, #FFB99D 92.86%)",
      "& > div": {
        backgroundImage: `
        linear-gradient(117deg,rgba(221, 250, 239, 0.86) 0%, rgba(242, 212, 254, 0.87) 100%),
        url(${TextureBg.src})
      `,
      },
    },

    /* ===== 3rd card ===== */
    "&:nth-child(3)": {
      background: "linear-gradient(107.86deg, #FFFFFF -1.72%, #C0AFFF 92.86%)",
      "& > div": {
        backgroundImage: `
        linear-gradient(117deg,rgba(242, 212, 254, 0.86) 0%, rgba(215, 253, 207, 0.87) 100%),
        url(${TextureBg.src})
      `,
      },
    },

    /* ===== 4th card ===== */
    "&:nth-child(4)": {
      background: "linear-gradient(107.86deg, #FFFFFF -1.72%, #C7FFCE 92.86%)",
      "& > div": {
        backgroundImage: `
        linear-gradient(117deg,rgba(211, 242, 249, 0.86) 0%, rgba(250, 218, 197, 0.87) 100%),
        url(${TextureBg.src})
      `,
      },
    },
  }
})
export const Accuracy = styled.div({
  "& h4": {
    fontSize: "1.688rem",
    marginBlockEnd: "0.5rem",
  },
  "& p": {
    textAlign: "start",
  }
})
export const AccuracyList = styled.ul({
  listStyle: "none",
  padding: 0,
  margin: "1.5rem 0 0.875rem 0",
  display: "flex",
  gap: "1.25rem",
});

export const AccuracyItem = styled.li({
  width: "calc((100% - 1.25rem) / 2)",
  display: "flex",
  flexDirection: "column",
  gap: "0.375rem",
});

export const AccuracyHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& span": {
    fontSize: "0.875rem",
    fontWeight: 600,
    flex: "0 0 auto",
    marginInlineEnd: "0.5rem",
  },
});

export const Value = styled.div({
  fontSize: "0.875rem",
  fontWeight: 600,
  textAlign: "end",
});
export const AccuracyTrack = styled.div({
  width: "100%",
  height: "0.375rem",
  background: "#E6E6E6",
  borderRadius: "1rem",
  overflow: "hidden",
});

export const AccuracyFill = styled.div({
  height: "100%",
  width: "0%",
  borderRadius: "1rem",
  background: "linear-gradient(90deg, #5B2EFF 0%, #8F6BFF 100%)",
  transition: "width 1.4s ease",
});









export default function Security() {
  const sectionRef = useRef(null);
  const [accuracyVisible, setAccuracyVisible] = React.useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll(".animate")
            .forEach(el => el.classList.add("in-view"));

          setAccuracyVisible(true); // 👈 ADD THIS LINE HERE
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
          <h3>✨ Enterprise Security</h3>
        </div>
        <h2>Your Data. <span>Fully Encrypted. Fully Compliant.</span></h2>
        <p>Bank-level security meets statutory compliance automation. Your workforce data is safe, secure, and always audit-ready.</p>
        <SectionRow ref={sectionRef}>
          <Left className="animate">
            <CardListHeading>
              <div>
                <Image src={packlock} alt="" width={100} height={100} />
              </div>
              Security Features
            </CardListHeading>
            <CardList>
              {securityData?.map((item, index) => (
                <li key={index}>
                  <HeaderRow>
                    <div>
                      <Image src={item?.icon} alt="" width={100} height={100} />
                    </div>
                    <h4>{item?.title}</h4>
                  </HeaderRow>
                  <p>{item?.desc}</p>
                </li>
              ))}
            </CardList>
          </Left>
          <Right className="animate">
            <FloatingWrap>
              <li>
                <h5>15+</h5>
                <p>Companies</p>
              </li>

              <li>
                <h5>5K+</h5>
                <p>Employees</p>
              </li>

              <li>
                <h5>Cloud</h5>
                <p>Based</p>
              </li>

              <li>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="37" viewBox="0 0 31 37" fill="none">
                    <path d="M31 34.7359C31 35.5696 30.4213 36.2462 29.7083 36.2462H3.875C1.73858 36.2462 0 34.2133 0 31.7154V1.51026C0 0.676595 0.578667 0 1.29167 0C2.00467 0 2.58333 0.676595 2.58333 1.51026V31.7154C2.58333 32.5475 3.16329 33.2256 3.875 33.2256H29.7083C30.4213 33.2256 31 33.9022 31 34.7359ZM27.125 7.55128H21.9583C21.2453 7.55128 20.6667 8.22788 20.6667 9.06154C20.6667 9.8952 21.2453 10.5718 21.9583 10.5718H26.5605L20.2869 17.6806C19.8 18.2514 18.9487 18.2514 18.4618 17.6806C18.4088 17.6202 16.8614 16.3319 16.8614 16.3319C15.3915 14.7114 12.887 14.7718 11.4855 16.4089L5.56192 23.0752C5.04783 23.6536 5.03233 24.6096 5.52704 25.2107C5.7815 25.5188 6.11862 25.6744 6.45833 25.6744C6.78125 25.6744 7.10417 25.5339 7.35346 25.253L13.2951 18.5656C13.7821 17.9947 14.6333 17.9947 15.1202 18.5656C15.1732 18.626 16.7206 19.9142 16.7206 19.9142C18.1918 21.5363 20.6938 21.4789 22.0991 19.8327L28.4154 12.6741V18.1216C28.4154 18.9552 28.994 19.6318 29.707 19.6318C30.42 19.6318 30.9987 18.9552 30.9987 18.1216V12.0805C30.9987 9.58258 29.2601 7.54977 27.1237 7.54977L27.125 7.55128Z" fill="white" />
                  </svg>
                </span>
                <div>
                  <h5 className="text-white">60% Faster</h5>
                  <p className="text-white">Processing</p>
                </div>

              </li>
            </FloatingWrap>
            <Brand>
              <Image src={brand} />
            </Brand>
            <Detailslist>
              <li>
                <div>
                  <p>Activity Workers</p>
                  <h4>1,247</h4>
                  <h6>+12%</h6>
                </div>
              </li>
              <li>
                <div>
                  <p>Attendance Rate</p>
                  <h4>98.4%</h4>
                  <h6>+2.1%</h6>
                </div>
              </li>
              <li>
                <div>
                  <p>Payroll Processeds</p>
                  <h4>₹2.4Cr</h4>
                  <h6>On-time</h6>
                </div>
              </li>
              <li>
                <div>
                  <p>Activity Workers</p>
                  <h4>100%</h4>
                  <h6>Perfect</h6>
                </div>
              </li>
            </Detailslist>
            <Accuracy>
              <AccuracyList>
                <AccuracyItem>
                  <Value>95%</Value>
                  <AccuracyHeader>
                    <span>HR Automation</span>
                    <AccuracyTrack>
                      <AccuracyFill style={{ width: accuracyVisible ? "95%" : "0%" }} />
                    </AccuracyTrack>
                  </AccuracyHeader>
                </AccuracyItem>

                <AccuracyItem>
                  <Value>100%</Value>
                  <AccuracyHeader>
                    <span>Compliance Status</span>
                    <AccuracyTrack>
                      <AccuracyFill style={{ width: accuracyVisible ? "100%" : "0%" }} />
                    </AccuracyTrack>
                  </AccuracyHeader>
                </AccuracyItem>
              </AccuracyList>

              <h4 className="bold">State-wise Accuracy</h4>
              <p>Our compliance engine automatically adjusts to state-specific rules and regulations, ensuring 100% accuracy across all locations.</p>
            </Accuracy>
          </Right>

        </SectionRow>


      </div>
    </Section>
  )
}
