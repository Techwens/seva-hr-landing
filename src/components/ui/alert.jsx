"use client";

import * as React from "react";
import styled from "styled-components";

// Styled Alert container
const StyledAlert = styled.div((props) => ({
  position: "relative",
  width: "100%",
  borderRadius: "8px",
  padding: "12px 16px",
  display: "grid",
  gridTemplateColumns: "0 1fr",
  gap: "2px",
  alignItems: "start",
  fontSize: "14px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",

  // Variant handling
  backgroundColor: props.variant === "destructive" ? "#fef2f2" : "#f8fafc",
  color: props.variant === "destructive" ? "#991b1b" : "#1e293b",
  borderLeft: `4px solid ${props.variant === "destructive" ? "#dc2626" : "#3b82f6"}`,
}));

// Title
const StyledAlertTitle = styled.div({
  gridColumnStart: 2,
  fontWeight: 500,
  minHeight: "16px",
  lineHeight: 1.2,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

// Description
const StyledAlertDescription = styled.div({
  gridColumnStart: 2,
  display: "grid",
  justifyItems: "start",
  gap: "4px",
  fontSize: "14px",
  color: "#475569",
  lineHeight: 1.5,
});

// Components
function Alert({ variant = "default", children, ...props }) {
  return (
    <StyledAlert variant={variant} role="alert" {...props}>
      {children}
    </StyledAlert>
  );
}

function AlertTitle({ children, ...props }) {
  return <StyledAlertTitle {...props}>{children}</StyledAlertTitle>;
}

function AlertDescription({ children, ...props }) {
  return <StyledAlertDescription {...props}>{children}</StyledAlertDescription>;
}

export { Alert, AlertTitle, AlertDescription };
