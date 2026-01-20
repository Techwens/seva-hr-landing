"use client";
import styled from "styled-components";

const StyledErrorText = styled.p({
  marginTop: "6px",
  fontSize: "13px",
  color: "#dc2626",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  lineHeight: 1.4,
});

function ErrorText({ children, ...props }) {
  if (!children) return null;
  return <StyledErrorText {...props}>{children}</StyledErrorText>;
}

export { ErrorText };
