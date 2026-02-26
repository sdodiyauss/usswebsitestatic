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
import { Navigation } from "swiper/modules";
import "swiper/css";

import PagesBannerBg from "@/healthcare-bg.webp";
import PatientBanner from "@/patient-banner.svg?url";
import opportunity3 from "@/opportunity3.webp";
import opportunity1 from "@/opportunity1.webp";
// import ExpandbusinessImge from "@/expand-business-img.webp";
// import PagesBannerBg from "@/pages-banner-bg.webp";
import DigitalMap from "~/verticalmap.json";
import DigitalMapMobile from "~/horizontalmap.json";
import callIcon from "@/call-icon.svg?url";

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

import Slider1 from "@/slider1.webp";
import Slider2 from "@/slider2.webp";
import Slider3 from "@/slider3.webp";
import Slider4 from "@/slider4.webp";
import Slider5 from "@/slider5.webp";
import Slider6 from "@/slider6.webp";
import Slider7 from "@/slider7.webp";
import RoundOrangeRighticon from "@/round-orange-right.svg?url";

import Frame from "@/frame.svg?url";
import Note from "@/note.svg?url";
import Message from "@/messages-3.svg?url";
import WalletMoney from "@/wallet-money.svg?url";
import StatusUp from "@/status-up.svg?url";
import ShieldTick from "@/shield-tick.svg?url";

import Contact from "~/contact/Contact";
import Link from "next/link";

import CircleType from "circletype";
import Metadata from "~/meta/Metadata";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";

const features = [
  {
    number: "01",
    title: "Secure Registration & Patient Profile Management",
    description:
      "Register patients in seconds and track every detail—from first visit to follow-up. No digging through files or toggling between tabs—just clean, connected records at your fingertips. Secure, intuitive, and built for teams who'd rather spend time on people, not paperwork.",
  },
  {
    number: "02",
    title: "Appointment Schedule & Reminder",
    description:
      "Let patients book appointments anytime with ease, while automated reminders reduce no-shows. Save staff time, streamline scheduling, and keep your clinic running smoothly, on time, and hassle-free—every single day, without manual follow-ups.",
  },
  {
    number: "03",
    title: "Telehealth & Virtual Consultations",
    description:
      "Connect with patients anytime, anywhere through secure telehealth and virtual consultations. Provide timely, flexible care beyond clinic walls, reduce waiting room visits, and make healthcare more accessible — all from a single, easy-to-use platform.",
  },
  {
    number: "04",
    title: "Medical History & Documentation",
    description:
      "Tired of flipping through files to find patient details?Access complete medical histories, notes, and documents instantly — all in one place. Stay informed, make faster decisions, and deliver better care. Try smarter record-keeping today!",
  },
  {
    number: "05",
    title: "Billing & Insurance Integration",
    description:
      "Still juggling invoices and insurance claims manually? Integrate billing and insurance into one seamless flow. Track payments, file claims faster, and reduce errors — all while giving patients a smoother, transparent experience. Simplify billing today!",
  },
  {
    number: "06",
    title: "Patient Centric Care Delivery",
    description:
      "Put patients at the center with personalized care plans, seamless communication, and ongoing engagement—making every interaction meaningful, efficient, and truly focused on their comfort, outcomes, and overall well-being.",
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
    title: "Centralized Patient Information",
    description:
      "Avoid scattered records by storing patient histories, appointments, and medical updates in one secure, centralized system that's easy to access, manage, and update from anywhere, at any time.",
    icon: Frame,
  },
  {
    title: "Smart Appointment Management",
    description:
      "Empower patients to schedule, cancel, or reschedule appointments anytime, while you maintain an organized, efficient calendar that enhances workflow, reduces no-shows, and supports smooth, hassle-free operations daily.",
    icon: Note,
  },
  {
    title: "Seamless Patient Communication",
    description:
      "Secure chat features and automated reminders foster trust; improve communication and significantly reduce no-shows—ensuring both patients and providers stay informed, connected, and on schedule effortlessly.",
    icon: Message,
  },
  {
    title: "Simplified Billing & Payments",
    description:
      "Easily manage invoices, insurance claims, and online payments from a single, integrated platform—eliminating the need for extra tools and streamlining your entire billing workflow seamlessly.",
    icon: WalletMoney,
  },
  {
    title: "Real-Time Insights & Reports",
    description:
      "Monitor everything across your clinic—patient flow, staff activity, and performance trends—using intuitive, easy-to-read dashboards that provide real-time insights to support smarter, faster decision-making every day.",
    icon: StatusUp,
  },
  {
    title: "HIPAA & Global Compliance",
    description:
      "The portal is designed to comply with healthcare regulations like HIPAA, GDPR, and more—ensuring patient data stays secure while keeping your practice fully compliant and protected.",
    icon: ShieldTick,
  },
];

const CompPatientManagentPortal = () => {
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
      //   rotation += 0.5; 
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
        title="Patient Management Software for Clinics & Hospitals | USS"
        description="USS offers patient management software for hospitals and clinics with features like appointment scheduling, EHR integration, billing, and secure data handling."
      /> */}

      {/* patient-banner */}
      <Box className="healthcare-banner-section-inner">
        <Image
          src={PagesBannerBg}
          fill
          alt="Patient Management Portal Banner"
          className="pages-banner-bg-main"
          priority
          fetchPriority="high"
        />
        <Container className="custom-container" maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            <Grid size={{ xs: 12, md: 10 }}>
              <Box className="heading-content healthcare-banner-content">
                <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                  Patient Management Portal
                </Typography>
                <Typography variant="h6" paragraph sx={{ mb: 3 }}>
                  A centralized platform to manage patient records,
                  appointments, billing, and communication. Designed to
                  streamline clinical workflows and enhance the overall patient
                  experience.
                </Typography>
              </Box>
              <Box className="heading-content" align="center">
                <Link href="/contactus" variant="contained" className="main-primary-btn">
                  Get Started
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
        {/* <Image src={PagesBannerBg} alt="shape" className="pages-banner-bg-main" priority={true}
          fetchPriority="high" /> */}

        <Image src={HalfBlue} alt="shape" className="half-blue-shape" />
        <Image
          src={HalfOrange}
          alt="shape"
          className="half-orange-shape"
        />
        <Image src={OrangeStar} alt="shape" className="star1" loading="lazy" />
        <Image src={OrangeStar} alt="shape" className="star2" loading="lazy" />
        <Image src={BlueStar} alt="shape" className="star3" loading="lazy" />
        <Image src={BlueStar} alt="shape" className="star4" loading="lazy" />
        <Image src={BlueStar} alt="shape" className="star5" loading="lazy" />
      </Box>

      <Box className="patient-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Container className="custom-container" maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="patient-left">
                <Box className="heading-content">
                  <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
                    Smart & Simplified{" "}
                    <span className="primary-color">
                      Patient Manag
                      <span className="span-text">
                        ement
                        <div className="line-container">
                          <div className="line-wrapper"></div>
                          <div className="line"></div>
                          <div className="moving-box"></div>
                        </div>
                      </span>
                    </span>
                  </Typography>
                  <Typography className="patient-subheading">
                    Everything you need — from appointments to billing — in one
                    seamless, easy-to-use Patient Management portal
                  </Typography>
                </Box>
                <Box className="patient-image-wrapper">
                  <Image
                    src={PatientBanner}
                    alt="Smart & Simplified Patient Management"
                    width={400}
                    height={300}
                    priority={true}
                    fetchPriority="high"
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
                    loading="lazy"
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
                {/* <Image
                    src={ExpandbusinessImge}
                    alt="Expand business Imge"
                    width={450}
                    height={874}
                    className="expand-business-image"
                    loading="lazy"
                  /> */}
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
                    loading="lazy"
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
              Explore Our Smart{" "}
              <span className="primary-color">
                Solutions for your Bu
                <span className="span-text">
                  siness
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
                      loading="lazy"
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
                Experience Hassle-Free Patient Management Transform How You
                Manage Patients
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
                <Image src={TrustIcon2} alt="TrustIcon1" loading="lazy" />
                <Typography variant="h6">Doctor Centric</Typography>
              </Box>
              <Image
                src={OrangeStar}
                alt="shape"
                className="corner-star star-a" loading="lazy"
              />
              <Image
                src={BlueStar}
                alt="shape"
                className="corner-star star-b" loading="lazy"
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
                <Image src={TrustIcon3} alt="TrustIcon1" loading="lazy" />
                <Typography variant="h6">Secure Privacy</Typography>
              </Box>
              <Image
                src={BlueStar}
                alt="shape"
                className="corner-star star-c" loading="lazy"
              />
              <Image
                src={OrangeStar}
                alt="shape"
                className="corner-star star-d" loading="lazy"
              />
              <Image
                src={OrangeStar}
                alt="shape"
                className="corner-star star-md-d" loading="lazy"
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
                loading="lazy"
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
                className="corner-star star-e" loading="lazy"
              />
              <Image
                src={OrangeStar}
                alt="shape"
                className="corner-star star-f" loading="lazy"
              />
              <Image
                src={BlueStar}
                alt="shape"
                className="corner-star star-md-f" loading="lazy"
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
                <Image src={TrustIcon4} alt="TrustIcon1" loading="lazy" />
                <Typography variant="h6">Seamless Integration</Typography>
              </Box>
              <Image
                src={OrangeStar}
                alt="shape"
                className="corner-star star-g" loading="lazy"
              />
              <Image
                src={BlueStar}
                alt="shape"
                className="corner-star star-h" loading="lazy"
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
                <Image src={TrustIcon1} alt="TrustIcon1" loading="lazy" />
                <Typography variant="h6">Custom Solutions</Typography>
              </Box>
              <Image
                src={BlueStar}
                alt="shape"
                className="corner-star star-i" loading="lazy"
              />
              <Image
                src={BlueStar}
                alt="shape"
                className="corner-star star-md-i" loading="lazy"
              />
              <Image
                src={OrangeStar}
                alt="shape"
                className="corner-star star-j" loading="lazy"
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
                <Image src={TrustIcon6} alt="TrustIcon1" loading="lazy" />
                <Typography variant="h6">Ongoing Support</Typography>
              </Box>
              <Image
                src={OrangeStar}
                alt="shape"
                className="corner-star star-k" loading="lazy"
              />
              <Image
                src={BlueStar}
                alt="shape"
                className="corner-star star-l" loading="lazy"
              />
              <Image
                src={BlueStar}
                alt="shape"
                className="corner-star star-md-l" loading="lazy"
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
                <Image src={TrustIcon5} alt="TrustIcon1" loading="lazy" />
                <Typography variant="h6">Clinic Trusted</Typography>
              </Box>
              <Image
                src={OrangeStar}
                alt="shape"
                className="corner-star star-m" loading="lazy"
              />
              <Image
                src={BlueStar}
                alt="shape"
                className="corner-star star-n" loading="lazy"
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
              // modules={[Mousewheel, Navigation]}
              modules={[Navigation]}
              loop={false}
              navigation
              // mousewheel={{
              //   sensitivity: 1,
              //   releaseOnEdges: true,
              // }}
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
                          <Image src={RoundOrangeRighticon} alt={card.title} loading="lazy" />
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
                        }} loading="lazy"
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
            Need A Custom Patient Portal?
            <span className="primary-color">
              {" "}
              We're Here To{" "}
              <span className="span-text">
                Help
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

export default CompPatientManagentPortal;
