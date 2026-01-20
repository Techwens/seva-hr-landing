"use client";
import styled from "styled-components";


const StyledInput = styled.input(({ error }) => ({
  width: "100%",
  minWidth: 0,
  height: "44px",
  padding: "6px 12px",
  fontSize: "14px",
  borderRadius: "6px",
  border: `1px solid ${error ? "#ef4444" : "#d1d5db"}`, // red if error, else gray
  backgroundColor: "transparent",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",

  "::placeholder": {
    color: "#9ca3af",
  },

  ":focus-visible": {
    borderColor: error ? "#ef4444" : "#6366f1", // red if error, else blue
    boxShadow: error
      ? "0 0 0 3px rgba(239, 68, 68, 0.25)" // red glow if error
      : "0 0 0 3px rgba(99, 102, 241, 0.35)", // blue glow if focused
  },

  ":disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },

  "::file-selector-button": {
    height: "28px",
    border: "none",
    backgroundColor: "transparent",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
  },
}));



function Input({ type = "text", error, ...props }) {
  return <StyledInput type={type} error={error} {...props} />;
}

export { Input };
