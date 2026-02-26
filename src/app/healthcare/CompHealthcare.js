"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";

import callIcon from "@/call-icon.svg?url";

import BtnIcon from "@/btn-icon.svg?url";
import CircleType from "circletype";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import TrustIcon1 from "@/multi-specialty.svg?url";
import TrustIcon2 from "@/heart-pulse.svg?url";
import TrustIcon3 from "@/profile-user.svg?url";
import TrustIcon4 from "@/health.svg?url";
import TrustIcon5 from "@/diagnostics.svg?url";
import TrustIcon6 from "@/pen-tool.svg?url";

import ActiveBG from "@/trust-uss-vector.svg?url";


// import Cursor1 from "@/cursor-1.webp"
import Cursor1 from "@/cursor-1.webp";
import Cursor2 from "@/cursor-2.webp";
import Cursor3 from "@/cursor-3.webp";
import Cursor4 from "@/cursor-4.webp";
import Cursor5 from "@/cursor-5.webp";
import Cursor6 from "@/cursor-6.webp";
import Cursor7 from "@/cursor-7.webp";

import Contact from "~/contact/Contact";
import Timelinewrapper from "~/timelinewrapper/Timelinewrapper";
import Casestudyoverview from "~/casestudyoverview/Casestudyoverview";
import Comanblogssection from "~/comanblogs/Comanblogssection";
import Metadata from "~/meta/Metadata";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";

const trustBoxes = [
  {
    title: "Clinical Workflow Expertise",
    description:
      "We don't just build software — we understand OPD/IPD flows, EMR structures, care coordination, patient journeys, and hospital admin pain points.",
  },
  {
    title: "EHR Implementation",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Digital Health Platforms",
    description:
      "We create patient portals, doctor dashboards, teleconsultation modules, e-prescription tools, remote monitoring systems — all under one secure, scalable ecosystem.",
  },
  {
    title: "Healthcare-Centric UX",
    description:
      "Interfaces tailored for medical staff — fewer clicks, faster documentation, and intuitive navigation during critical workflows.",
  },
  {
    title: "Diagnostics Integration",
    description:
      "We integrate effortlessly with PACS, LIS, RIS, and lab dashboards, enabling a unified and faster decision-making process for clinicians.",
  },
  {
    title: "Multi-Specialty Custom Solutions",
    description:
      "Whether you're a cardiology chain, diagnostic lab, fertility center, or rural clinic — our tech adapts to your protocols, forms, and specialties.",
  },
];
const imageList = [
  {
    title: "Patient Management Portal",
    sub: "All your appointments, records, and patient messages — finally in one place, stress-free.",
    image: "patient-management",
    src: Cursor1,
    url: "/healthcare-tech/patient-management-portal",
  },
  {
    title: "Online/Offline Pharmacy",
    sub: "Prescriptions delivered or picked up — fast, secure, and easy for everyone.",
    image: "pharmacy",
    src: Cursor2,
    url: "/healthcare-tech/online-offline-pharmacy",
  },
  {
    title: "Prescription Assistance Portal(PAP)",
    sub: "Create and manage accurate prescriptions in seconds — no errors, no delays.",
    image: "pap",
    src: Cursor3,
    url: "/healthcare-tech/prescription-assistance-portal",
  },
  {
    title: "Medical Billing",
    sub: "Simplify claims and automate billing so your team can breathe easy.",
    image: "medical-billing",
    src: Cursor4,
    url: "/healthcare-tech/medical-billing",
  },
  {
    title: "EHR/EMR Development",
    sub: "Doctor-friendly EHRs that are fast, secure, and built for real-time care.",
    image: "ehr-development",
    src: Cursor5,
    url: "/healthcare-tech/ehr-emr-development",
  },
  {
    title: "Hospital Management",
    sub: "One system to run your entire hospital — smooth, smart, and connected.",
    image: "hospital-management",
    src: Cursor6,
    url: "/healthcare-tech/hospital-management",
  },
  {
    title: "Compliance Software",
    sub: "Stay fully compliant and audit-ready — with your data always protected.",
    image: "compliance-software",
    src: Cursor7,
    url: "/healthcare-tech/compliance-software",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 45 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  viewport: { once: true, amount: 0.2 }
};

// Blur to clear variant for smooth reveal at section edges
const blurReveal = {
  initial: { opacity: 0, filter: "blur(10px)" },
  whileInView: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" }
  },
  viewport: { once: true, amount: 0.25 }
};

// Bidirectional blur reveal (animates in when entering, animates out when leaving)
const blurRevealBidirectional = {
  hiddenDown: { opacity: 0, filter: "blur(10px)", y: 20 },
  hiddenUp: { opacity: 0, filter: "blur(10px)", y: -20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function ServiceTeaser({ title, sub, image, url }) {
  const ref = React.useRef(null);
  const controls = useAnimationControls();
  const hasMountedRef = React.useRef(false);
  const lastScrollYRef = React.useRef(0);
  const [scrollDirection, setScrollDirection] = React.useState("up");

  React.useEffect(() => {
    hasMountedRef.current = true;
    return () => {
      hasMountedRef.current = false;
    };
  }, []);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrollDirection(y > lastScrollYRef.current ? "up" : "down");
      lastScrollYRef.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="service-hero-teaser-wrapper"
      variants={blurRevealBidirectional}
      initial="hiddenDown"
      animate={controls}
      viewport={{ amount: 0.35 }}
      onViewportEnter={() => {
        if (hasMountedRef.current) {
          controls.start("visible");
        }
      }}
      onViewportLeave={() => {
        if (hasMountedRef.current) {
          controls.start(scrollDirection === "up" ? "hiddenUp" : "hiddenDown");
        }
      }}
    >
      <Box className="services-wrapper" data-image={image}>
        <MuiLink
          href={url}
          underline="none"
          className="headline-services-wrapper"
        >
          <span className="text-mask">{title}</span>
        </MuiLink>
        <Typography className="subline-services">{sub}</Typography>
      </Box>
      <Link href={url} >
        <Box className="specialized-more">
          <Image src={BtnIcon} alt="btn-icon" />
        </Box>
      </Link>
    </motion.div>
  );
}


const CompHealthcare = () => {
  // const [activeContent, setActiveContent] = useState(null);
  // const [hoverContent, setHoverContent] = useState(null);

  // const handleHover = (title) => {
  //   const content = trustBoxes.find((item) => item.title === title);
  //   if (content && content.title !== hoverContent?.title) {
  //     setHoverContent(content);
  //   }
  // };

  // const handleMouseLeave = () => {
  //   setHoverContent(null);
  // };

  const [hoverContent, setHoverContent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const hoverBoxRef = useRef(null);

  const handleHover = (title) => {
    const content = trustBoxes.find((item) => item.title === title);
    if (!content) return;

    // Trigger fade-out before changing content
    setIsVisible(false);
    setTimeout(() => {
      setHoverContent(content);
      setIsVisible(true);
    }, 300); // match this with fade-out duration
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    setTimeout(() => setHoverContent(null), 200);
  };

  const handleClick = (title) => {
    handleHover(title);
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setTimeout(() => {
        const el = hoverBoxRef?.current;
        if (!el) return;
        const headerOffset = 80;
        const rect = el.getBoundingClientRect();
        const scrollY = rect.top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: scrollY, behavior: "smooth" });
      }, 350);
    }
  };


  //heading animation
  useEffect(() => {
    const headings = document.querySelectorAll(".animate-heading");

    headings.forEach((heading) => {
      // Wrap text in span.letter
      const wrapTextWithSpans = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const fragment = document.createDocumentFragment();
          node.textContent.split("").forEach((char) => {
            const span = document.createElement("span");
            span.className = "letter";
            span.textContent = char === " " ? "\u00A0" : char;
            fragment.appendChild(span);
          });
          return fragment;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const clone = node.cloneNode(false);
          node.childNodes.forEach((child) => {
            clone.appendChild(wrapTextWithSpans(child));
          });
          return clone;
        } else {
          return node.cloneNode(true);
        }
      };

      // Apply spans
      const newContent = wrapTextWithSpans(heading);
      heading.innerHTML = "";
      heading.appendChild(newContent);

      const letters = heading.querySelectorAll(".letter");

      // Observe with IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              letters.forEach((letter, index) => {
                letter.classList.add("visible");
                letter.style.transitionDelay = `${index * 20}ms`;
              });
            } else {
              letters.forEach((letter, index) => {
                letter.classList.remove("visible");
                letter.style.transitionDelay = `${(letters.length - index) * 15
                  }ms`;
              });
            }
          });
        },
        {
          root: null,
          threshold: 0,
          rootMargin: "0px 0px -250px 0px", // 250px before bottom
        }
      );

      observer.observe(heading);

      // Add scroll listener to stop animation when top <= 0
      const handleScroll = () => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 0) {
          letters.forEach((letter) => {
            letter.classList.add("visible");
            letter.style.transitionDelay = "0ms";
          });
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup
      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    });
  }, []);

  //cursor effect
  useEffect(() => {
    const cursor = document.querySelector(".cursor-wrapper");
    const links = document.querySelectorAll("[data-image]");
    const images = document.querySelectorAll(".services-background-image");

    document.addEventListener("mousemove", (e) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    });

    links.forEach((link) => {
      const imageClass = link.getAttribute("data-image");
      const image = document.querySelector(
        `.services-background-image.${imageClass}`
      );
      if (!image) return;

      link.addEventListener("mouseenter", (e) => {
        images.forEach((img) => {
          img.style.opacity = "0";
          img.style.display = "none";
        });

        image.style.display = "block";
        image.style.opacity = "1";
        // image.style.transform = `scale3d(50, 50, 0)`;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const x = (e.clientX / vw) * 100;
        const y = (e.clientY / vh) * 100;
        image.style.transform = `translate3d(${x}vw, ${y}vh, 0px) scale3d(50, 50, 1)`;

        link.classList.add("active-video-title");
      });

      link.addEventListener("mousemove", (e) => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const x = (e.clientX / vw) * 100;
        const y = (e.clientY / vh) * 100;
        image.style.transform = `translate3d(${x}vw, ${y}vh, 0px) scale3d(50, 50, 1)`;
      });

      link.addEventListener("mouseleave", () => {
        image.style.opacity = "0";
        image.style.display = "none";

        link.classList.remove("active-video-title");
      });
    });
  }, []);

  //circle text
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      const circleType = new CircleType(textRef.current);
      circleType.radius(80); // smaller radius to fit in 200x200 circle
      textRef.current.style.fontSize = "15px"; // adjust to fit in circle

      // let rotation = 0;
      // let animationFrame;

      // const animate = () => {
      //   rotation += 0.5; // rotation speed (degrees per frame)
      //   textRef.current.style.transform = `rotate(${rotation}deg)`;
      //   animationFrame = requestAnimationFrame(animate);
      // };

      // animate();

      // return () => cancelAnimationFrame(animationFrame);
    }
  }, []);

  return (
    <>
      {/* <Metadata
        title="Custom Healthcare Software & IT Services Company | USS"
        description="USS offers custom healthcare IT solutions including patient portals, hospital systems, telehealth platforms, and EHR integrations for clinics and hospitals."
      /> */}
      {/* healthcare-banner */}
      <motion.section {...fadeIn}>
        <Box className="healthcare-banner-section">
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12, md: 10 }}>
                <Box className="heading-content heading-content-spacing">
                  <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                    Health Meets Tech, Without Compromise
                  </Typography>
                  <Typography className="mb-20" variant="h6" paragraph sx={{ mb: 3 }}>
                    Delivering robust healthcare IT solutions—built for
                    compliance, designed for better lives.
                  </Typography>

                  <Link href={'#contactformscroll'}
                    variant="contained"
                    className="main-primary-btn"
                  >
                    Inquiry Now
                  </Link>
                </Box>

              </Grid>
            </Grid>
          </Container>
          <Image src={HalfBlue} alt="shape" className="half-blue-shape" />
          <Image
            src={HalfOrange}
            alt="shape"
            className="half-orange-shape"
          />
          <Image src={OrangeStar} alt="shape" className="star1" />
          <Image src={OrangeStar} alt="shape" className="star2" />
          <Image src={BlueStar} alt="shape" className="star3" />
          <Image src={BlueStar} alt="shape" className="star4" />
          <Image src={BlueStar} alt="shape" className="star5" />
        </Box>
      </motion.section>

      {/* trust-uss */}
      <motion.section {...fadeInUp}>
        <Box className="trust-uss-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content">
              <Typography variant="h2" sx={{ mb: 5, fontWeight: 700 }}>
                Why Healthcare Client{" "}
                <span className="primary-color">
                  Trus
                  <span className="span-text">
                    t USS
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>

            <Grid container className="trust-uss-content" sx={{ pt: 2 }}>
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                className="trust-uss-box-wrapper bb-0 bl-0 br-0"
              >
                <Box
                  className="trust-uss-box"
                  onMouseEnter={() => handleHover("Clinical Workflow Expertise")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("Clinical Workflow Expertise")}
                >
                  <Image src={TrustIcon3} alt="TrustIcon1" />
                  <Typography variant="h6">
                    Clinical Workflow Expertise
                  </Typography>
                </Box>
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-a"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-b"
                />
              </Grid>

              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                className="trust-uss-box-wrapper bb-0 br-0"
              >
                <Box
                  className="trust-uss-box"
                  onMouseEnter={() => handleHover("EHR Implementation")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("EHR Implementation")}
                >
                  <Image src={TrustIcon2} alt="TrustIcon1" />
                  <Typography variant="h6">EHR Implementation</Typography>
                </Box>
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-c"
                />
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-d"
                />
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-md-d"
                />
              </Grid>

              <Grid
                size={{ xs: 12, md: 6 }}
                className="trust-uss-box-wrapper bb-0 br-0 bl-md-0"
              >
                <Image
                  src={ActiveBG}
                  alt="Active Background"
                  className="hover-content-bg"
                />
                <Box ref={hoverBoxRef} className={`hover-content-box ${isVisible ? 'visible' : ''}`}>
                  {hoverContent && (
                    <>
                      <Typography variant="h6" className="trust-title">
                        {/* {(hoverContent ?? activeContent)?.title} */}
                        {hoverContent.title}
                      </Typography>
                      <Typography variant="body1" className="trust-description">
                        {/* {(hoverContent ?? activeContent)?.description} */}
                        {hoverContent.description}
                      </Typography>
                    </>
                  )}
                </Box>

                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-e"
                />
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-f"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-md-f"
                />
              </Grid>

              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                className="trust-uss-box-wrapper br-0 bl-0"
              >
                <Box
                  className="trust-uss-box"
                  onMouseEnter={() => handleHover("Digital Health Platforms")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("Digital Health Platforms")}
                >
                  <Image src={TrustIcon4} alt="TrustIcon1" />
                  <Typography variant="h6">Digital Health Platforms</Typography>
                </Box>
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-g"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-h"
                />
              </Grid>

              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                className="trust-uss-box-wrapper br-0"
              >
                <Box
                  className="trust-uss-box"
                  onMouseEnter={() => handleHover("Healthcare-Centric UX")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("Healthcare-Centric UX")}
                >
                  <Image src={TrustIcon6} alt="TrustIcon1" />
                  <Typography variant="h6">Healthcare-Centric UX</Typography>
                </Box>
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-i"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-md-i"
                />
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-j"
                />
              </Grid>

              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                className="trust-uss-box-wrapper br-0 bl-md-0"
              >
                <Box
                  className="trust-uss-box"
                  onMouseEnter={() => handleHover("Diagnostics Integration")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("Diagnostics Integration")}
                >
                  <Image src={TrustIcon5} alt="TrustIcon1" />
                  <Typography variant="h6">Diagnostics Integration</Typography>
                </Box>
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-k"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-l"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-md-l"
                />
              </Grid>

              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                className="trust-uss-box-wrapper br-0"
              >
                <Box
                  className="trust-uss-box"
                  onMouseEnter={() =>
                    handleHover("Multi-Specialty Custom Solutions")
                  }
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("Multi-Specialty Custom Solutions")}
                >
                  <Image src={TrustIcon1} alt="TrustIcon1" />
                  <Typography variant="h6">
                    Multi-Specialty Custom Solutions
                  </Typography>
                </Box>
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-m"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-n"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.section>

      {/* Cursor */}
      <Box
        className="cursor-section-main">
        <Container
          className="custom-container"
          maxWidth="lg"
          sx={{ py: { xs: 3, md: 4, lg: 5 } }}
        >
          <motion.div {...blurReveal}>
            <Box className="heading-content">
              <Typography
                variant="h2"
                align="center"
                sx={{ mt: 3, mb: 5, fontWeight: 700, color: '#222222', }}
              >
                Our Specialized{" "}
                <span className="primary-color">
                  Healthcare IT Of
                  <span className="span-text">
                    ferings
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>
          </motion.div>

          {/* <Box className="cursor-effects">
                    <Box className="cursor-wrapper">
                        <img src="https://cdn.prod.website-files.com/5fb3954fbe37c82c4fcd35e9/60ee950b042e4b1c3b2fcfe3_ViewButton.png" alt="" class="cursor-view-case"></img>
                    </Box>
                </Box> */}

          {/* Background images */}
          {imageList.map(({ image, src }, i) => (
            <Image
              key={i}
              src={src}
              alt={image}
              width={800}
              height={800}
              className={`services-background-image ${image}`}
              unoptimized
            />
          ))}

          {/* Content */}
          <Box className="content-wrapper-1600">
            {imageList.map(({ title, sub, image, url }, i) => (
              <ServiceTeaser key={i} title={title} sub={sub} image={image} url={url} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* case-study */}
      <Casestudyoverview />

      {/* Process line Section */}
      <motion.section {...fadeInUp}>
        <Container
          className="custom-container"
          maxWidth="lg"
          sx={{ py: { xs: 3, md: 4, lg: 5 } }}
        >
          <Box className="heading-content logo-swiper-box-title">
            <Typography
              variant="h2"
              align="center"
              sx={{ mt: 2, mb: 5, fontWeight: 700 }}
            >
              How We Ensure{" "}
              <span className="primary-color">
                Successful Del
                <span className="span-text">
                  ivery
                  <div className="line-container">
                    <div className="line-wrapper"></div>
                    <div className="line"></div>
                    <div className="moving-box"></div>
                  </div>
                </span>
              </span>
            </Typography>
            <Typography variant="h1" align="center" className="animate-heading">
              <span className="text-line">
                We believe in{" "}
                <span style={{ color: "#F58436" }}>Human Intelligence.</span>
              </span>
              <span className="text-line">
                {" "}
                The Best Results Emerge from the Collaboration of
              </span>
              <span className="text-line">
                <span className="primary-color">AI</span> &
                <span style={{ color: "#F58436" }}>HI</span>
              </span>
            </Typography>
          </Box>
        </Container>
      </motion.section>
      <Timelinewrapper />

      {/* call-to-action Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ mt: 6 }} className="call-to-action-wrapper">
          <Container className="custom-container" maxWidth="lg">
            <Box
              sx={{ p: 4, backgroundColor: "#222222", borderRadius: 3 }}
              className="call-to-action-innerbox"
            >
              <Box className="heading-content">
                <Typography variant="h2" sx={{ my: 2, color: "white" }}>
                  Want to Transform Your Healthcare Operations?
                </Typography>
                <Typography variant="h6" paragraph sx={{ color: "white" }}>
                  Partner with USS — a Trusted Healthcare IT Solutions Company
                  Powering Digital Health Across the USA, India & Beyond.
                </Typography>
              </Box>

              <Box className="circle-wrapper">
                <Box className="call-logo-inner">
                  <Link
                    target="_blank"
                    href="https://calendly.com/jvaghasiya-universalstreamsolution/30min"
                  >
                    <Lottie
                      animationData={minitsCircle} width={'250px'} height={'250px'}
                      loop={true}
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </motion.section>

      {/* blog */}
      <motion.section {...fadeInUp}>
        <Box className="blog-uss-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content">
              <Typography variant="h2" sx={{ mb: 5, fontWeight: 700 }}>
                Healthcare{" "}
                <span className="primary-color">
                  Tech{" "}
                  <span className="span-text">
                    Blogs
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>
          </Container>
          <Comanblogssection />
        </Box>
      </motion.section>

      {/* contact form */}
      <motion.section {...fadeInUp}>
        <Container className="custom-container" maxWidth="lg" id="contactformscroll" >
          <Box className="heading-content">
            <Typography
              variant="h2"
              align="center"
              sx={{ mt: 6, mb: 5, fontWeight: 700 }}
            >
              Talk to{" "}
              <span className="primary-color">
                {" "}
                Our Healthcare IT E
                <span className="span-text">
                  xperts
                  <div className="line-container">
                    <div className="line-wrapper"></div>
                    <div className="line"></div>
                    <div className="moving-box"></div>
                  </div>
                </span>
              </span>
            </Typography>
          </Box>
        </Container>
        <Contact />
      </motion.section>
    </>
  );
};

export default CompHealthcare;
