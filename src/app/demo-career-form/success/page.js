import Link from "next/link";

export const metadata = {
  title: "Demo Form Submitted | USS IT Services",
  robots: {
    index: false,
    follow: false,
  },
};

const DemoFormSuccess = () => {
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
        <h1 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
          Thank you!
        </h1>
        <p style={{ fontSize: "1.125rem", marginBottom: "32px" }}>
          Your demo application has been received. We will review your details
          and get back to you soon.
        </p>
        <Link href="/" className="main-primary-btn">
          Back to Home
        </Link>
      </section>
    </main>
  );
};

export default DemoFormSuccess;

