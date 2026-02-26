"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
  AvatarGroup, useMediaQuery, useTheme
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";

import callIcon from "@/call-icon.svg?url";
import CircleType from "circletype";

import DigitalMap from "~/verticalmap.json";
import DigitalMapMobile from "~/horizontalmap.json";
import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import TrustIcon1 from "@/multi-specialty.svg?url";
import TrustIcon2 from "@/stethoscope.svg?url";
import TrustIcon3 from "@/lock.svg?url";
import TrustIcon4 from "@/hierarchy-2.svg?url";
import TrustIcon5 from "@/medical-kit.svg?url";
import TrustIcon6 from "@/setting-2.svg?url";

import ActiveBG from "@/trust-uss-vector.svg?url";
import EmrErhBanner from "@/ehr-emr-bg.svg?url";

import Slider1 from "@/slider1.webp";
import Slider2 from "@/slider2.webp";
import Slider3 from "@/slider3.webp";
import Slider4 from "@/slider4.webp";
import Slider5 from "@/slider5.webp";
import Slider6 from "@/slider6.webp";
import Slider7 from "@/slider7.webp";
import RoundOrangeRighticon from "@/round-orange-right.svg?url";

import CodeCircle from "@/code-circle.svg?url";
import ShieldSecurity from "@/shield-security.svg?url";
import Monitor from "@/monitor.svg?url";
import MonitorMobile from "@/monitor-mobbile.svg?url";
import Data from "@/data.svg?url";
import Support24 from "@/24-support.svg?url";

import opportunity3 from "@/opportunity3.webp";
import opportunity1 from "@/opportunity1.webp";
import opportunity2 from "@/opportunity2.webp";

import Contact from "~/contact/Contact";
import Link from "next/link";
import Metadata from "~/meta/Metadata";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";

const features = [
  {
    number: "01",
    title: "Customizable Workflows",
    description:
      "Easily tailor workflows to fit your specialty and daily processes for smoother adoption and better productivity. Empower your team with tools that adapt to them—not the other way around. Deliver care your way, with a system built around your unique practice needs.",
  },
  {
    number: "02",
    title: "Secure Patient Data Management",
    description:
      "Keep sensitive health information safe. Our HIPAA‑compliant encryption protects patient data while allowing secure, anytime access for authorized users. Give patients and providers peace of mind knowing their data is always protected.",
  },
  {
    number: "03",
    title: "Interoperability & Integration",
    description:
      "Connect effortlessly with labs, pharmacies, imaging centers, and other systems so you always have a complete, up‑to‑date patient record in one place. Improve collaboration and care coordination with a fully connected healthcare ecosystem.",
  },
  {
    number: "04",
    title: "Advanced Clinical Decision Support",
    description:
      "Get real time guidance when it matters most. AI powered alerts, reminders, and evidence‑based recommendations help you make faster, more accurate clinical decisions. Reduce errors and enhance patient outcomes with intelligent support at every step.",
  },
  {
    number: "05",
    title: "E-Prescribing & Medication Management",
    description:
      "Send prescriptions directly to pharmacies in seconds. Track refills, monitor drug interactions, and cut down on medication errors with built‑in safety checks. Improve medication accuracy and save valuable time for both providers and patients.",
  },
  {
    number: "06",
    title: "Analytics & Reporting",
    description:
      "Build a secure, HIPAA‑compliant EHR/EMR system tailored to your workflow. Enhance patient care, streamline operations, and accelerate decision making. Empower your practice with technology designed for the future of healthcare.",
  },
];

const trustBoxes = [
  {
    title: "Doctor Centric",
    description:
      "We collaborate closely with healthcare teams to design practical, real-world workflows that simplify operations and truly fit clinical needs.",
  },
  {
    title: "Secure Privacy",
    description:
      "HIPAA, GDPR, and FHIR compliant system ensures your patients' sensitive data is always protected, encrypted, and handled with care.",
  },
  {
    title: "Seamless Integration",
    description:
      "From EHRs to billing, our portal seamlessly integrates with your current systems — no disruptions, just smooth and simple connectivity.",
  },
  {
    title: "Custom Solutions",
    description:
      "Fits solo clinics or multi-location hospitals — the portal is fully customizable to match your workflows, scale, and daily operations.",
  },
  {
    title: "Ongoing Support",
    description:
      "Real support, real people — our team's always here to help, with healthcare expertise and zero chatbot frustration.",
  },
  {
    title: "Clinic Trusted",
    description:
      "Our portal streamlines check-ins, enhances communication, and creates a smoother, more satisfying experience for both healthcare staff and patients alike.",
  },
];

const cardData = [
  {
    title: "Patient Management Portal for your Clinic",
    desc: "Streamline clinic operations with a secure, intuitive patient management portal for scheduling, records, and seamless communication.",
    image: Slider1,
    link: "/healthcare-tech/patient-management-portal",
  },
  {
    title: "Online/Offline Pharmacy Development",
    desc: "Revolutionize pharmacy operations with a smart, hybrid platform for effortless prescriptions, inventory sync, and seamless customer care.",
    image: Slider2,
    link: "/healthcare-tech/online-offline-pharmacy",
  },
  {
    title: "Prescription Assistance Portal(PAP)",
    desc: "Effortlessly manage PAP cases with an intuitive portal offering patient intake, case progress tracking, and communication.",
    image: Slider3,
    link: "/healthcare-tech/prescription-assistance-portal",
  },
  {
    title: "Medical Billing Portal Development",
    desc: "Revolutionize pharmacy operations with a smart, hybrid platform for effortless prescriptions, inventory sync, and seamless customer care.",
    image: Slider4,
    link: "/healthcare-tech/medical-billing",
  },
  {
    title: "EHR/EMR Development",
    desc: "Develop intelligent EHR/EMR solutions with secure data, automated workflows, and real-time patient management to enhance efficiency, accuracy, & healthcare delivery.",
    image: Slider5,
    link: "/healthcare-tech/ehr-emr-development",
  },
  {
    title: "Hospital Management Portal Development",
    desc: "Create a smart hospital management portal with automated workflows, real-time data access, and secure patient administration for enhanced efficiency and care delivery.",
    image: Slider6,
    link: "/healthcare-tech/hospital-management",
  },
  {
    title: "Compliance Software Development",
    desc: "Ensure regulatory compliance with intelligent software featuring automated audits, real-time tracking, and secure data management.",
    image: Slider7,
    link: "/healthcare-tech/compliance-software",
  },
];

const solutions = [
  {
    title: "Custom EHR/EMR Development",
    description:
      "Your practice is unique, and your EHR/EMR should be too. We build systems from the ground up that match your specialty, simplify your workflow, and stay fully compliant with healthcare regulations.",
    icon: CodeCircle,
  },
  {
    title: "Legacy System Modernization",
    description:
      "Still using an outdated system? We'll help you upgrade to a faster, more connected platform without slowing down your work. Seamlessly transition to modern technology and stay ahead in healthcare innovation.",
    icon: Monitor,
  },
  {
    title: "Third Party System Integration",
    description:
      "No more jumping between platforms. We connect your EHR/EMR with labs, pharmacies, billing systems & imaging tools so everything you need is in one place. Work smarter with a unified system that saves time & reduces error.",
    icon: Data,
  },
  {
    title: "Mobile & Web App Development",
    description:
      "Access patient records anytime, anywhere. Our secure, intuitive apps let providers and staff work on the go without compromising security. Deliver faster, informed care with instant data access.",
    icon: MonitorMobile,
  },
  {
    title: "Data Migration & Security",
    description:
      "Switching systems doesn't have to be risky. We handle migration with precision, ensuring every record is secure, accurate, & HIPAA compliant. Make the move confidently, knowing your data is safe every step of the way.",
    icon: ShieldSecurity,
  },
  {
    title: "Ongoing Support & Maintenance",
    description:
      "Technology should keep improving. We provide continuous support, timely updates, and performance checks so your EHR/EMR always runs smoothly. Focus on patient care while we keep your system at peak performance.",
    icon: Support24,
  },
];

const CompEhrEmrDevelopment = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  //trust-uss
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
        title="EHR & EMR Development Services"
        description="Custom EHR/EMR solutions to digitize patient records, streamline workflows, and ensure secure, HIPAA‑compliant healthcare management."
      /> */}

      {/* patient-banner */}
      <Box className="healthcare-banner-section">
        <Container className="custom-container" maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            <Grid size={{ xs: 12, md: 10 }}>
              <Box className="heading-content healthcare-banner-content">
                <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                  EHR/EMR Development
                </Typography>
                <Typography variant="h6" paragraph sx={{ mb: 3 }}>
                  Build a secure, HIPAA‑compliant EHR/EMR system tailored to
                  your workflow. Enhance patient care, streamline operations,
                  and accelerate decision‑making.
                </Typography>
              </Box>
              <Box className="heading-content" align="center">
                <Link href="/contactus" variant="contained" className="main-primary-btn">
                  Request Free Consultation
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

      <Box className="patient-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Container className="custom-container" maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="patient-left">
                <Box className="heading-content">
                  <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
                    EHR/EMR Features{" "}
                    <span className="primary-color">
                      That Transform{" "}
                      <span className="span-text">
                        Care
                        <div className="line-container">
                          <div className="line-wrapper"></div>
                          <div className="line"></div>
                          <div className="moving-box"></div>
                        </div>
                      </span>
                    </span>
                  </Typography>
                  <Typography className="patient-subheading">
                    From secure data to AI support, our EHR/ EMR streamlines
                    care.
                  </Typography>
                </Box>
                <Box className="patient-image-wrapper">
                  <Image
                    src={EmrErhBanner}
                    alt="Medical Billing Features"
                    width={400}
                    height={300}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Right Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container direction="column" spacing={3}>
                {features.map(({ number, title, description }) => (
                  <Grid size={{ xs: 12 }} key={number}>
                    <Box className="feature-box">
                      <Box className="feature-number">{number}</Box>
                      <Box className="feature-content">
                        <Typography variant="h6" className="feature-title">
                          {title}
                        </Typography>
                        <Typography
                          variant="body1"
                          className="feature-description"
                        >
                          {description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="opportunity-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Container className="custom-container" maxWidth="lg">
          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className="opportunity-card-wrapper">
                <Box className="opportunity-card opportunity-text-card md-order-1">
                  <Box className="heading-content">
                    <Typography variant="h2" sx={{ mb: 5, fontWeight: 700 }}>
                      Expand business opportunities <br />
                      <span className="span-text primary-color">
                        of Software
                        <div className="line-container">
                          <div className="line-wrapper"></div>
                          <div className="line"></div>
                          <div className="moving-box"></div>
                        </div>
                      </span>
                    </Typography>
                  </Box>
                  <Box className="opportunity-clients">
                    <AvatarGroup max={3} className="avatar-group">
                      <Avatar
                        alt="Client 1"
                        className="opportunity-client-img"
                        src="/images/client1.webp"
                      />
                      <Avatar
                        alt="Client 2"
                        className="opportunity-client-img"
                        src="/images/client2.webp"
                      />
                      <Avatar
                        alt="Client 3"
                        className="opportunity-client-img"
                        src="/images/client3.webp"
                      />
                    </AvatarGroup>
                    <Typography className="opportunity-client-count">
                      100+ Clients
                    </Typography>
                  </Box>
                </Box>
                <Box className="opportunity-card opportunity-image-card">
                  <Image
                    src={opportunity1}
                    alt="Tablet Doctor"
                    width={400}
                    height={250}
                    className="opportunity-image"
                  />
                </Box>
              </Box>
            </Grid>

            {/* Middle Column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className="opportunity-card opportunity-image-card opportunity-tall-image">
                <Lottie
                  animationData={isMobile ? DigitalMapMobile : DigitalMap}
                  loop={true}
                />
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className="opportunity-card-wrapper">
                <Box className="opportunity-card opportunity-image-card md-order-1">
                  <Image
                    src={opportunity3}
                    alt="Futuristic Icons"
                    width={400}
                    height={250}
                    className="opportunity-image"
                  />
                </Box>

                <Box className="opportunity-card opportunity-text-card">
                  <Typography
                    variant="body2"
                    className="opportunity-description"
                  >
                    Our Patient Management Portal helps you scale smart — with
                    online bookings, teleconsults, and real-time insights. Serve
                    more patients, reduce no-shows, and explore new revenue
                    streams, all while keeping your workflow smooth and your
                    team focused.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* smart solution */}
      <Box
        className="smart-solutions-section"
        sx={{ py: { xs: 3, md: 4, lg: 5 } }}
      >
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography
              variant="h2"
              align="center"
              sx={{ mb: 5, fontWeight: 700 }}
            >
              End to End{" "}
              <span className="primary-color">
                EHR/EMR Development Solutions for Modern Heal
                <span className="span-text">
                  thcare
                  <div className="line-container">
                    <div className="line-wrapper"></div>
                    <div className="line"></div>
                    <div className="moving-box"></div>
                  </div>
                </span>
              </span>
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {solutions.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box className="solution-card">
                  <Box className="solution-icon">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                    />
                  </Box>
                  <Typography variant="h6" className="solution-title">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" className="solution-description">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* call-to-action Section */}
      <Box sx={{ mt: 4 }} className="call-to-action-wrapper">
        <Container className="custom-container" maxWidth="lg">
          <Box
            sx={{ p: 4, backgroundColor: "#222222", borderRadius: 3 }}
            className="call-to-action-innerbox"
          >
            <Box className="heading-content pr">
              <Typography variant="h2" sx={{ my: 2, color: "white" }}>
                Let's Build Your Next‑Gen EHR/EMR Together
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

      {/* trust-uss */}
      <Box className="trust-uss-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography variant="h2" sx={{ mb: 5, mt: 3, fontWeight: 700 }}>
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
                onMouseEnter={() => handleHover("Doctor Centric")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("Doctor Centric")}
              >
                <Image src={TrustIcon2} alt="TrustIcon1" />
                <Typography variant="h6">Doctor Centric</Typography>
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
                onMouseEnter={() => handleHover("Secure Privacy")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("Secure Privacy")}
              >
                <Image src={TrustIcon3} alt="TrustIcon1" />
                <Typography variant="h6">Secure Privacy</Typography>
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
                onMouseEnter={() => handleHover("Seamless Integration")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("Seamless Integration")}
              >
                <Image src={TrustIcon4} alt="TrustIcon1" />
                <Typography variant="h6">Seamless Integration</Typography>
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
                onMouseEnter={() => handleHover("Custom Solutions")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("Custom Solutions")}
              >
                <Image src={TrustIcon1} alt="TrustIcon1" />
                <Typography variant="h6">Custom Solutions</Typography>
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
                onMouseEnter={() => handleHover("Ongoing Support")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("Ongoing Support")}
              >
                <Image src={TrustIcon6} alt="TrustIcon1" />
                <Typography variant="h6">Ongoing Support</Typography>
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
                onMouseEnter={() => handleHover("Clinic Trusted")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("Clinic Trusted")}
              >
                <Image src={TrustIcon5} alt="TrustIcon1" />
                <Typography variant="h6">Clinic Trusted</Typography>
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

      {/* Healthcare Tech Solution Swiper Section */}
      <Box
        sx={{ py: { xs: 3, md: 4, lg: 5 } }}
        className="healthcare-section patient-healthcare-section"
      >
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography
              variant="h2"
              align="center"
              sx={{ mb: 5, fontWeight: 700 }}
            >
              Next-Gen{" "}
              <span className="primary-color">
                Healthcar
                <span className="span-text">
                  e Tech
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

        <Grid container spacing={4}>
          <Grid size={{ xs: 12 }}>
            <Swiper
              className="healthcare-swiper patient-healthcare-swiper"
              modules={[Mousewheel, Navigation]}
              loop={false}
              navigation
              mousewheel={{
                sensitivity: 1,
                releaseOnEdges: true,
              }}
              spaceBetween={20}
              slidesPerView={2.5}
              breakpoints={{
                0: { slidesPerView: 1.3 },
                768: { slidesPerView: 2.3 },
                1024: { slidesPerView: 2.5 },
                1200: { slidesPerView: 3.8 },
              }}
            >
              {cardData.map((card, index) => (
                <SwiperSlide key={index} className="slide-box">
                  <Paper elevation={0} className="slide-box-main">
                    <Box>
                      <Box className="title-box">
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, mb: 1 }}
                        >
                          {card.title}
                        </Typography>
                        <Link href={card.link || "#"} className="inline-flex">
                          <Image src={RoundOrangeRighticon} alt={card.title} />
                        </Link>
                      </Box>
                      <Box className="gray-spacer"></Box>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {card.desc}
                      </Typography>
                    </Box>
                    <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={500}
                        height={300}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Paper>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </Box>

      {/* contact form */}
      <Container className="custom-container" maxWidth="lg">
        <Box className="heading-content">
          <Typography
            variant="h2"
            align="center"
            sx={{ mt: 6, mb: 4, fontWeight: 700 }}
          >
            Talk to{" "}
            <span className="primary-color">
              {" "}
              an EHR Expert{" "}
              <span className="span-text">
                Today
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
    </>
  );
};

export default CompEhrEmrDevelopment;
