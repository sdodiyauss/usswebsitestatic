import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Demo Form Error | USS IT Services",
  robots: {
    index: false,
    follow: false,
  },
};

const DemoFormError = ({ searchParams }) => {
  const rawMessage =
    typeof searchParams?.message === "string" ? searchParams.message : "";
  const message = rawMessage
    ? decodeURIComponent(rawMessage)
    : "We could not submit your request in this browser. Please open the form in Chrome, Safari, or Edge.";

  return (
    <main style={{ padding: "120px 0" }}>
      <section
        style={{
          maxWidth: 560,
          margin: "0 auto",
          textAlign: "center",
          padding: "0 16px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "16px", color: "#d32f2f" }}>
          Something went wrong
        </h1>
        <p style={{ fontSize: "1.125rem", marginBottom: "32px" }}>{message}</p>
        <Link href="/demo-career-form" className="main-primary-btn">
          Try Again
        </Link>
      </section>
    </main>
  );
};

export default DemoFormError;

