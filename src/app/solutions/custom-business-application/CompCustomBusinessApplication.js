"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";

import callIcon from "@/call-icon.svg?url";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import IconCCCShieldSecurityCloud from "@/icon-cc-shield-security-cloud.svg?url";
import IconCCCMaximize from "@/icon-cc-maximize.svg?url";

import SmartFeaturesShape from "@/smart-feature-shape.svg?url";

import ImageFintech from "@/image-fintech.webp";
import ImageRealEstate from "@/image-real-estate.webp";
import ImageTravel from "@/image-travel.webp";

import CheckCircleIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Close';
import WarningAmberIcon from '@mui/icons-material/Warning';


import CircleType from "circletype";

import SayGoodbyeImg from "@/say-goodbye-img.webp";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";

import IconScalableArchitecture from "@/icon-scalable-architecture.svg?url";
import IconIntegratedDataSystems from "@/icon-integrated-data-systems.svg?url";
import IconCentralizedCollaboration from "@/icon-centralized-collaboration.svg?url";
import IconEnterpriseGradeSecurity from "@/icon-enterprise-grade-security.svg?url";
import IconAutomatedWorkflows from "@/icon-automated-workflows.svg?url";
import IconTailoredFunctionality from "@/icon-tailored-functionality.svg?url";
import IconBDEMobile from "@/icon-bde-mobile.svg?url";
import IconBDEData from "@/icon-bde-data.svg?url";
import IconBDESetting from "@/icon-bde-setting.svg?url";
import IconBDESlimless from "@/icon-bde-slimless.svg?url";

import Contact from "~/contact/Contact";
import { motion, AnimatePresence } from "framer-motion";
import Metadata from "~/meta/Metadata";
import Link from "next/link";
import TechnologyStacks from "~/technologystackssection/TechnologyStacks";
import Timelinewrapper from "~/timelinewrapper/Timelinewrapper";

const trustBoxes = [
  {
    title: "Clinical Workflow Expertise",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "EHR Implementation",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Digital Health Platforms",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Healthcare-Centric UX",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Diagnostics Integration",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Multi-Specialty Custom Solutions",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
];

const solutions = [
  {
    title: "Tailored App Development",
    description:
      "We build custom business applications aligned with your unique workflows and goals. No templates just purpose-built solutions. From concept to code, every feature fits your business perfectly.",
    icon: IconBDEMobile,
    active: true,
  },
  {
    title: "Workflow Automation Solutions",
    description:
      "We turn tasks into smart, automated workflows. Save time, cut errors, and boost productivity across teams. Let your team focus on what matters while systems handle routine.",
    icon: IconBDEData,
  },
  {
    title: "End-to-End Development Services",
    description:
      "From planning to launch, we manage the full app lifecycle. Get web and mobile apps delivered with precision and speed. Stay in control with clear processes, updates, & on-time deliver",
    icon: IconBDESetting,
  },
  {
    title: "Secure & Compliant Applications",
    description:
      "Data protection is built in from day one. Meet standards like GDPR, HIPAA, and more with confidence. From secure logins to encrypted storage, your data stays safe.",
    icon: IconCCCShieldSecurityCloud,
  },
  {
    title: "Scalable & High-Performance Apps",
    description:
      "Your app is designed to grow with your business. Expect fast performance, reliability, and future-ready architecture. Easily scale features, users, and integrations as your needs evolve.",
    icon: IconCCCMaximize,
  },
  {
    title: "Seamless System Integrations",
    description:
      "Connect your app with CRM, ERP, payment systems, and APIs. Enjoy a fully integrated, efficient digital ecosystem.Streamline operations and eliminate data silos with seamless connectivity.",
    icon: IconBDESlimless,
  },
];

const smartFeaturesSlides = [
  {
    title: "Fintech – Intelligent Finance Hub",
    description: "Control, track, and optimize finances with precision.",
    image: ImageFintech,
    alttext: "Fintech Application",
    features: [
      {
        title: "User & Role Management",
        description:
          "All your balances and cards in one clean, live dashboard.",
      },
      {
        title: "Automated Payments",
        description: "Set recurring payments and never miss a due date.",
      },
      {
        title: "Smart Budgeting Tools ",
        description:
          "Set goals, limit overspending, and get nudges when you drift.",
      },
      {
        title: "Real-Time Risk Alerts",
        description: "Get notified instantly if anything looks suspicious.",
      },
      {
        title: "Searchable Transaction Logs",
        description: "Easily find any payment, filter by vendor or amount.",
      },
      {
        title: "Tax-Ready Reports ",
        description: "One-click export of categorized financials for tax time.",
      },
    ],
  },
  {
    title: "Real Estate – Digital Property Companion",
    description: "Manage listings, leads, and visits effortlessly.",
    image: ImageRealEstate,
    alttext: "Real-estate Application",
    features: [
      {
        title: "Advanced Property Filters ",
        description: "Help users search smarter by location, budget, or vibe.",
      },
      {
        title: "Visual Showcase ",
        description: "Add rich media like 360° views, videos, and floor plans.",
      },
      {
        title: "Map-Based Discovery",
        description:
          "Show listings with real-world area context. Highlight nearby landmarks & amenities.",
      },
      {
        title: "Agent-Led CRM ",
        description: "Route leads to agents based on interest or region.",
      },
      {
        title: "Visit Booking Portal",
        description: "Let buyers schedule walkthroughs without a phone call.",
      },
      {
        title: "Virtual Tours ",
        description: "Allow remote buyers to walk properties from their couch.",
      },
    ],
  },
  {
    title: "Travel – Seamless Trip Manager",
    description:
      "Simplify travel planning and bookings under one digital roof.",
    image: ImageTravel,
    alttext: "Travel Industry",
    features: [
      {
        title: "All-in-One Reservations ",
        description:
          "Book flights, stays, rides, and tours from a single screen.",
      },
      {
        title: "Document Safe Space",
        description: "Store tickets, IDs, and bookings securely in-app.",
      },
      {
        title: "Live Price Alerts",
        description: "Get real-time deal drops and price comparisons.",
      },
      {
        title: "One-Tap Reschedules",
        description:
          "Modify bookings without the headache. Update dates, details.",
      },
      {
        title: "Drag-and-Drop Itinerary",
        description: "Personalize your travel days with a visual planner.",
      },
      {
        title: "Smart Travel Alerts ",
        description: "Flight delays? Weather changes? You'll know right away.",
      },
    ],
  },
];

const comparisonData = [
  {
    label: "Bug Fixes",
    uss: {
      icon: <CheckCircleIcon sx={{ color: "#00e676" }} />,
      text: "Covered in Plan",
    },
    others: {
      icon: <WarningAmberIcon sx={{ color: "#ffeb3b" }} />,
      text: "Extra Cost or Delayed",
    },
    vsIcon: (
      <Image
        src="/images/icon-bug.svg?url"
        alt="Bug"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    label: "24×7 Availability",
    uss: {
      icon: <CheckCircleIcon sx={{ color: "#00e676" }} />,
      text: "Yes",
    },
    others: {
      icon: <CancelIcon sx={{ color: "#f44336" }} />,
      text: "No or Limited",
    },
    vsIcon: (
      <Image
        src="/images/icon-24-support.svg?url"
        alt="24x7"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    label: "Hidden Charges",
    uss: {
      icon: <CancelIcon sx={{ color: "#f44336" }} />,
      text: "None",
    },
    others: {
      icon: <WarningAmberIcon sx={{ color: "#ffeb3b" }} />,
      text: "Very Common Post-Launch",
    },
    vsIcon: (
      <Image
        src="/images/icon-dollar-circle.svg?url"
        alt="Charges"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    label: "Post-Launch Support",
    uss: {
      icon: <CheckCircleIcon sx={{ color: "#00e676" }} />,
      text: "Included",
    },
    others: {
      icon: <CancelIcon sx={{ color: "#f44336" }} />,
      text: "Chargeable / Not Available",
    },
    vsIcon: (
      <Image
        src="/images/icon-rocket.svg?url"
        alt="Support"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    label: "Backup & Recovery",
    uss: {
      icon: <CheckCircleIcon sx={{ color: "#00e676" }} />,
      text: "Regular & Automated",
    },
    others: {
      icon: <CancelIcon sx={{ color: "#f44336" }} />,
      text: "Rarely Configured",
    },
    vsIcon: (
      <Image
        src="/images/icon-database.svg?url"
        alt="Backup"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
  },
];

const dotsData = [
  {
    icon: IconCentralizedCollaboration,
    title: "Centralized Collaboration",
    text: "Bring your team together with shared dashboards, real-time updates, and built-in tools that make working together seamless.",
  },
  {
    icon: IconScalableArchitecture,
    title: "Scalable Architecture",
    text: "As your business grows, your app grows with it — no slowdowns, no rebuilds, just smooth scaling.",
  },
  {
    icon: IconIntegratedDataSystems,
    title: "Integrated Data Systems",
    text: "Break down silos between departments. We connect your systems so data flows freely and decisions are based on the full picture.",
  },
  {
    icon: IconEnterpriseGradeSecurity,
    title: "Enterprise-Grade Security ",
    text: "Protect your business with strong security built in — from encrypted data to smart permissions and full audit tracking.",
  },
  {
    icon: IconAutomatedWorkflows,
    title: "Automated Workflows",
    text: "Stop wasting time on repetitive tasks — we help you automate the everyday so your team can focus on what really matters.",
  },
  {
    icon: IconTailoredFunctionality,
    title: "Tailored Functionality",
    text: "No more workarounds. Get features designed specifically for how your business runs — everything you need, nothing you don't.",
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

const fadeLeft = {
  initial: { opacity: 0, x: 30 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  viewport: { once: true, amount: 0.2 }
};


const CompCustomBusinessApplication = () => {
  //trust-uss
  const [hoverContent, setHoverContent] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [TechnologyIndex, setTechnologyIndex] = useState(0);

  const handleHover = (title) => {
    const content = trustBoxes.find((item) => item.title === title);
    if (content && content.title !== hoverContent?.title) {
      setHoverContent(content);
    }
  };

  const handleMouseLeave = () => {
    setHoverContent(null);
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

  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const dotCircleRef = useRef(null);
  const itemDotsRef = useRef([]);

  // Arrange dots in circle on mount & on window resize
  useEffect(() => {
    const arrangeDots = () => {
      const container = dotCircleRef.current;
      if (!container) return;

      const dots = itemDotsRef.current;
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      const radius = width / 2.5;
      const angleStep = (2 * Math.PI) / dots.length;
      let angle = 0;

      dots.forEach((dot) => {
        if (!dot) return;
        const x = Math.round(
          width / 2 + radius * Math.cos(angle) - dot.offsetWidth / 2
        );
        const y = Math.round(
          height / 2 + radius * Math.sin(angle) - dot.offsetHeight / 2
        );
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        angle += angleStep;
      });
    };

    arrangeDots();
    window.addEventListener("resize", arrangeDots);
    return () => window.removeEventListener("resize", arrangeDots);
  }, []);

  // Handle click on a dot
  const handleDotClick = (index) => {
    setActiveDotIndex(index);
  };

  // Animate rotation & dot inverse rotation
  useEffect(() => {
    const rotationDeg = 360 - activeDotIndex * 60;
    if (dotCircleRef.current) {
      dotCircleRef.current.style.transition = "transform 2s";
      dotCircleRef.current.style.transform = `rotate(${rotationDeg}deg)`;
    }

    // Inverse rotate each dot so icons remain upright
    itemDotsRef.current.forEach((dot, idx) => {
      if (!dot) return;
      dot.style.transition = "transform 1s";
      dot.style.transform = `rotate(${activeDotIndex * 60}deg)`;
    });
  }, [activeDotIndex]);

  // Auto rotate every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDotIndex((prev) => (prev + 1) % dotsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* <Metadata
        title="Custom Business Applications | Tailored Software Solutions"
        description="Build custom business apps designed for your workflow. Scalable, efficient, and built to match your exact needs—boost productivity and performance"
      /> */}

      {/* patient-banner */}
      <motion.section {...fadeIn}>
        <Box className="healthcare-banner-section">
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Box className="heading-content heading-content-spacing">
                  <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                    Custom Business Application
                  </Typography>
                  <Typography variant="h6" paragraph sx={{ mb: 5 }}>
                    From automation to analytics, we build scalable, secure, and
                    intuitive apps designed around your unique workflows — not the
                    other way around.
                  </Typography>
                </Box>
                <Box className="heading-content" align="center">
                  <Link href="https://calendly.com/jvaghasiya-universalstreamsolution/30min" target="_blank" rel="noopener noreferrer" variant="contained" className="main-primary-btn">
                    Book a Free Consultation
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

      {/* What We Bring to Your Online Store */}
      <motion.section {...fadeInUp}>
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
                Our Custom{" "}
                <span style={{ color: "#009FE3" }}>
                  Business Application Development{" "}
                  <span className="span-text">
                    Expertise
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
                <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                  <Box className="solution-card online-store-solution-card">
                    <Box className="solution-online-store-details">
                      <Typography variant="h6" className="solution-title">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="solution-description"
                      >
                        {item.description}
                      </Typography>
                    </Box>
                    <Box className="solution-icon">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        className="solution-icon-svg"
                      />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </motion.section>

      {/* Smart Cloud Management with Enterprise-Grade Security */}
      <Box
        className="smart-solutions-section"
        sx={{ py: { xs: 3, md: 4, lg: 5 } }}
      >
        <Container className="custom-container" maxWidth="lg">
          <motion.section {...fadeInUp}>
            <Box className="heading-content">
              <Typography
                variant="h2"
                align="center"
                sx={{ mb: 5, fontWeight: 700 }}
              >
                Smart,{" "}
                <span style={{ color: "#009FE3" }}>
                  Scalable Features Built for Real Business{" "}
                  <span className="span-text">
                    Needs
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>
          </motion.section>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
              <Box className="smart-features-wrapper smart-section">
                <Swiper
                  key={`swiper-${isMobile ? 'mobile' : 'desktop'}`}
                  direction={isMobile ? "horizontal" : "vertical"}
                  spaceBetween={20}
                  autoHeight={isMobile}
                  pagination={{ clickable: true }}
                  mousewheel={isMobile ? false : {
                    sensitivity: 1,
                    releaseOnEdges: true,
                  }}
                  modules={isMobile ? [Pagination] : [Pagination, Mousewheel]}
                  onSwiper={(swiper) => {
                    if (isMobile && swiper?.mousewheel && typeof swiper.mousewheel.disable === 'function') {
                      swiper.mousewheel.disable();
                    }
                  }}
                  className="mySwiper"
                >
                  {smartFeaturesSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <Grid
                        container
                        alignItems={{ xs: "flex-start", md: "end" }}
                        spacing={2}
                        className="smart-features-grid"
                      >
                        <Grid className="smart-features-wrapper" size={{ xs: 12, sm: 6, md: 8 }} sx={{ order: { xs: 2, sm: 1 } }}>
                          <Box className="smart-features-content">
                            <Box className="smart-features-text">
                              <Typography variant="h5" sx={{ mb: 2 }}>
                                {slide.title}
                              </Typography>
                              <Typography variant="body1" sx={{ mb: 2 }}>
                                {slide.description}
                              </Typography>
                            </Box>

                            {slide.features.length > 0 && (
                              <Box className="smart-features-list">
                                {slide.features.map((feature, idx) => (
                                  <Box
                                    className="smart-features-inner"
                                    key={idx}
                                  >
                                    <Typography variant="h6" sx={{ mb: 2 }}>
                                      {feature.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 2 }}>
                                      {feature.description}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            )}
                          </Box>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ order: { xs: 1, sm: 2 } }}>
                          <Box className="smart-features-image">
                            <Image
                              src={slide.image}
                              sx={{ width: "100%", height: "auto" }}
                              alt={slide.alttext}
                            />
                          </Box>
                        </Grid>
                      </Grid>

                      <Image
                        src={SmartFeaturesShape}
                        className="smart-features-shape"
                        alt="Smart Features Shape"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Let's Show You What Makes Us Different */}
      <Box className="lets-show-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Box className="heading-content">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 5, fontWeight: 700, color: "#ffffff" }}
          >
            Let's Show{" "}
            <span style={{ color: "#009FE3" }}>
              You What Makes Us{" "}
              <span className="span-text">
                Different
                <div className="line-container">
                  <div className="line-wrapper"></div>
                  <div className="line"></div>
                  <div className="moving-box"></div>
                </div>
              </span>
            </span>
          </Typography>
        </Box>
        <Box className="lets-show-content">
          <Container className="custom-container" maxWidth="lg" disableGutters>
            {/* Header Row */}
            <Grid
              container
              className="lets-show-inner-row"
              sx={{ textAlign: "center", mb: 2 }}
            >
              <Grid
                size={{ xs: 4, sm: 4, md: 4 }}
                className="lets-show-inner-column column-first"
              >
                <Typography variant="h6">USS</Typography>
              </Grid>
              <Grid
                size={{ xs: 4, sm: 4, md: 4 }}
                className="lets-show-inner-column column-center"
                sx={{ backgroundColor: "#111" }}
              >
                <Typography variant="h6">V / S</Typography>
              </Grid>
              <Grid
                size={{ xs: 4, sm: 4, md: 4 }}
                className="lets-show-inner-column column-last"
              >
                <Typography variant="h6">Others</Typography>
              </Grid>
            </Grid>

            {/* Data Rows */}
            {comparisonData.map((item, index) => (
              <Grid
                container
                key={index}
                className="lets-show-inner-row"
                sx={{ textAlign: "center", borderTop: "1px solid #333" }}
              >
                {/* USS */}
                <Grid
                  size={{ xs: 4, sm: 4, md: 4 }}
                  className="lets-show-inner-column column-first"
                >
                  <Box className="lets-show-inner-text" sx={{ py: 2 }}>
                    {item.uss.icon}
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {item.uss.text}
                    </Typography>
                  </Box>
                </Grid>

                {/* VS */}
                <Grid
                  size={{ xs: 4, sm: 4, md: 4 }}
                  className="lets-show-inner-column column-center"
                  sx={{ backgroundColor: "#111" }}
                >
                  <Box className="lets-show-inner-text" sx={{ py: 2 }}>
                    {item.vsIcon}
                    <Typography variant="body2" sx={{ mt: 1, color: "#aaa" }}>
                      {item.label}
                    </Typography>
                  </Box>
                </Grid>

                {/* Others */}
                <Grid
                  size={{ xs: 4, sm: 4, md: 4 }}
                  className="lets-show-inner-column column-last"
                >
                  <Box className="lets-show-inner-text" sx={{ py: 2 }}>
                    {item.others.icon}
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {item.others.text}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Container>
        </Box>
      </Box>

      {/* call-to-action Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ mt: 6, mb: 3 }} className="call-to-action-wrapper">
          <Container className="custom-container" maxWidth="lg">
            <Box
              sx={{ p: 4, backgroundColor: "#222222", borderRadius: 3 }}
              className="call-to-action-innerbox"
            >
              <Box className="heading-content pr">
                <Typography variant="h2" sx={{ my: 2, color: "white" }}>
                  Start your journey with a fully tailored business application.
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

      {/* technology tab Section */}
      <TechnologyStacks />

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
              sx={{ mt: 2, mb: 3, fontWeight: 700 }}
            >
              How We Ensure{" "}
              <span style={{ color: "#009FE3" }}>
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
          </Box>
        </Container>
      </motion.section>
      <Timelinewrapper />

      {/* Real Problems. Smarter Solutions. Built for You. */}
      <Box className="lets-show-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Box className="heading-content">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 5, fontWeight: 700, color: "#ffffff" }}
          >
            Real Problems.{" "}
            <span style={{ color: "#009FE3" }}>
              Smarter Solutions. Built for{" "}
              <span className="span-text">
                You.
                <div className="line-container">
                  <div className="line-wrapper"></div>
                  <div className="line"></div>
                  <div className="moving-box"></div>
                </div>
              </span>
            </span>
          </Typography>
        </Box>
        <Box className="pain-points-solutions-main">
          <Typography variant="h1" className="pain-points-big-text">
            Pain Points
          </Typography>
          <Box className="pain-points-solutions-inner">
            <Image src={SayGoodbyeImg} alt="Say-Goodbye Img" />

            <Box className="pain-point-solution-wrapper">
              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list time-restrictions">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Manual Chaos
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Too many spreadsheets, emails, and disconnected tools slow
                    down your operations.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list limited-reach">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Generic Software
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Generic SaaS platforms don't match your specific workflow or
                    business needs.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list manual-management">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Poor Collaboration
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Lack of real-time updates and centralized communication leads
                    to confusion and delays.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list high-overheads">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Limited Scalability
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Your current tools can't keep up as your business grows or
                    evolves.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list slow-checkout">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Data Silos
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Information is trapped in different systems, making reporting
                    and decision-making harder.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list traditional-marketing">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Weak Security
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Off-the-shelf software may not meet industry-specific
                    compliance or security standards.
                  </Typography>
                </Box>
              </motion.section>
            </Box>
          </Box>
          <Typography variant="h1" className="pain-points-big-text text-end">
            Solutions
          </Typography>
        </Box>
      </Box>

      {/* Automated Workflows*/}
      <Box className="solution-process-section">
        <Container className="custom-container" maxWidth="lg">
          <motion.section {...fadeLeft}>
            <Grid container className="solution-process-inner">
              <Grid
                className="solution-process-column"
                size={{ xs: 12, sm: 12, md: 12, lg: 10, xl: 6 }}
              >
                <Box className="holderCircle">
                  <Box className="round" />
                  <Box className="dotCircle" ref={dotCircleRef}>
                    {dotsData.map((dot, i) => (
                      <Box
                        key={i}
                        className={`itemDot ${activeDotIndex === i ? "active" : ""
                          }`}
                        data-tab={i + 1}
                        onClick={() => handleDotClick(i)}
                        ref={(el) => (itemDotsRef.current[i] = el)}
                      >
                        <Image
                          src={dot.icon}
                          alt={dot.title}
                          width={36}
                          height={36}
                        />
                        <span className="forActive"></span>
                      </Box>
                    ))}
                  </Box>

                  <Box className="contentCircle">
                    {dotsData.map((dot, i) => (
                      <Box
                        key={i}
                        className={`CirItem ${activeDotIndex === i ? "active" : ""
                          } CirItem${i + 1} title-box`}
                      >
                        <h2 className="title">
                          <span>{dot.title}</span>
                        </h2>
                        <p>{dot.text}</p>
                        <i className={`fa ${dot.icon}`} />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </motion.section>
        </Container>
      </Box>

      {/* contact form */}
      <motion.section {...fadeInUp}>
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography
              variant="h2"
              align="center"
              sx={{ mt: 6, mb: 4, fontWeight: 700 }}
            >
              Ready to{" "}
              <span style={{ color: "#009FE3" }}>
                {" "}
                Streamline Your Bu
                <span className="span-text">
                  siness?
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

export default CompCustomBusinessApplication;
