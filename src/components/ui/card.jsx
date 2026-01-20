"use client";

import * as React from "react";
import styled from "styled-components";

// ---------- Card Container ----------
const StyledCard = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  borderRadius: "16px",
  border: "1px solid #e5e7eb", 
  backgroundColor: "#ffffff",
  color: "#111827", 
  paddingBottom: "24px",
  marginBottom: "24px",
  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  overflow:"hidden"
});

// ---------- Card Header ----------
const StyledCardHeader = styled.div({
  display: "grid",
  gridAutoRows: "min-content",
  gap: "6px",
  padding: "0 24px",
  alignItems: "start",
  borderBottom: "1px solid #e5e7eb",
  paddingBlock:"1rem",
});

// ---------- Card Title ----------
const StyledCardTitle = styled.div({
  fontWeight: 600,
  lineHeight: 1,
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#111827",
});

// ---------- Card Description ----------
const StyledCardDescription = styled.div({
  fontSize: "14px",
  color: "#6b7280", 
});

// ---------- Card Action ----------
const StyledCardAction = styled.div({
  gridColumnStart: 2,
  gridRowStart: 1,
  gridRowEnd: 3,
  justifySelf: "end",
  alignSelf: "start",
});

// ---------- Card Content ----------
const StyledCardContent = styled.div({
  padding: "0 24px",
  paddingTop: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

// ---------- Card Footer ----------
const StyledCardFooter = styled.div({
  display: "flex",
  alignItems: "center",
  padding: "24px",
  borderTop: "1px solid #e5e7eb",
  paddingTop: "24px",
});

// ---------- Components ----------
function Card({ children, ...props }) {
  return <StyledCard {...props}>{children}</StyledCard>;
}

function CardHeader({ children, ...props }) {
  return <StyledCardHeader {...props}>{children}</StyledCardHeader>;
}

function CardTitle({ children, ...props }) {
  return <StyledCardTitle {...props}>{children}</StyledCardTitle>;
}

function CardDescription({ children, ...props }) {
  return <StyledCardDescription {...props}>{children}</StyledCardDescription>;
}

function CardAction({ children, ...props }) {
  return <StyledCardAction {...props}>{children}</StyledCardAction>;
}

function CardContent({ children, ...props }) {
  return <StyledCardContent {...props}>{children}</StyledCardContent>;
}

function CardFooter({ children, ...props }) {
  return <StyledCardFooter {...props}>{children}</StyledCardFooter>;
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
