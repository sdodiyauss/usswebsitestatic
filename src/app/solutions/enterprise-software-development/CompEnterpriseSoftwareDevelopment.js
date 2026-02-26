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
import IconDocumentText from "@/icon-document-text.svg?url";

import IconCCCMaximize from "@/icon-cc-maximize.svg?url";

import SmartFeaturesShape from "@/smart-feature-shape.svg?url";

import ImgEnterprise1 from "@/img-enterprise1.webp";
import ImgEnterprise2 from "@/img-enterprise2.webp";
import ImgEnterprise3 from "@/img-enterprise3.webp";

import CheckCircleIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Close';
import WarningAmberIcon from '@mui/icons-material/Warning';


import SayGoodbyeImg from "@/say-goodbye-img.webp";

import IconScalableArchitecture from "@/icon-scalable-architecture.svg?url";
import IconIntegratedDataSystems from "@/icon-integrated-data-systems.svg?url";
import IconEnterpriseGradeSecurity from "@/icon-enterprise-grade-security.svg?url";
import IconPresentionChart from "@/icon-presention-chart.svg?url";
import IconShare from "@/icon-share.svg?url";
import IconGrid3 from "@/icon-grid3.svg?url";
import IconHierarchy2 from "@/icon-hierarchy2.svg?url";
import IconBDEData from "@/icon-bde-data.svg?url";

import IconChartWave from "@/icon-chart-wave.svg?url";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";

import Contact from "~/contact/Contact";
import { motion, AnimatePresence } from "framer-motion";
import Metadata from "~/meta/Metadata";
import Link from "next/link";
import TechnologyStacks from "~/technologystackssection/TechnologyStacks";
import Timelinewrapper from "~/timelinewrapper/Timelinewrapper";
import CircleType from "circletype";

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
    title: "Custom-Built for Your Business",
    description:
      "No two businesses work the same way—so why should your software? We design solutions around you—your processes, your team, your goals. You get only what you need, nothing you don't.",
    icon: IconPresentionChart,
    active: true,
  },
  {
    title: "Advanced Security & Compliance",
    description:
      "We take security seriously. Your data stays protected with the latest encryption, user access controls, and full compliance with industry standards like GDPR or HIPAA.",
    icon: IconCCCShieldSecurityCloud,
  },
  {
    title: "Scalable Architecture",
    description:
      "As your business grows, your software will keep up— whether you're adding more users, teams, or handling bigger data loads. It stays fast and reliable no matter how big things get.",
    icon: IconCCCMaximize,
  },
  {
    title: "Centralized Data & Reporting",
    description:
      "Tired of jumping between systems or digging through spreadsheets? Our software brings everything into one place with real-time dashboards & reports that actually make sense.",
    icon: IconDocumentText,
  },
  {
    title: "Seamless System Integration",
    description:
      "Already using tools like CRMs, ERPs, or payment systems? Great. We make sure your new software connects smoothly with everything you're already using—no disruptions, no rework.",
    icon: IconBDEData,
  },
  {
    title: "High Performance & Reliability",
    description:
      "Your business runs on software—you need it to work, always.  We build high-performance systems that are fast, stable, and ready 24/7, so your team never slows down.",
    icon: IconChartWave,
  },
];

const smartFeaturesSlides = [
  {
    title: "Smart Project Management With Enterprise Insights",
    description:
      "Power your teams with automation, collaboration, and real-time visibility — all in one smart dashboard.",
    image: ImgEnterprise1,
    alttext: "Smart Project Management",
    features: [
      {
        title: "Task & Workflow Automation",
        description:
          "Automate tasks and approvals to avoid follow-ups & keep work moving smoothly",
      },
      {
        title: "Resource Management",
        description:
          "Track task time and allocate resources efficiently to avoid overwork.",
      },
      {
        title: "Milestone & Progress Tracking",
        description:
          "Track milestones in real time to stay aligned with goals and client expectations.",
      },
      {
        title: "Custom Project Templates",
        description:
          "Kick off quickly with reusable templates for repeatable work or onboarding.",
      },
      {
        title: "Team Collaboration Tools",
        description:
          "Centralize notes, comments, and files within each task or project.",
      },
      {
        title: "Live Analytics",
        description:
          "Make smart decisions with dashboards showing bottlenecks, workload, & KPIs.",
      },
    ],
  },
  {
    title: "Smart CRM Management",
    description:
      "Seamlessly manage leads, clients, pipelines, and communication — all from one intelligent platform.",
    image: ImgEnterprise2,
    alttext: "Smart CRM Management",
    features: [
      {
        title: "Client & Contact Management",
        description:
          "Centralize client interactions and history for stronger relationships.",
      },
      {
        title: "Automated Follow-Ups",
        description: "Set follow-up rules and reminders to never miss a lead.",
      },
      {
        title: "Lead Capture & Scoring",
        description:
          "Auto-collect and qualify leads to focus on top prospects.",
      },
      {
        title: "Email & Call Integration",
        description:
          "Sync email and call logs to your CRM for seamless tracking.",
      },
      {
        title: "Sales Pipeline Tracking",
        description:
          "Track and manage deals from inquiry to closure with real-time updates.",
      },
      {
        title: "Reports & Forecasts",
        description:
          "Track trends, win rates, and revenue with actionable CRM analytics.",
      },
    ],
  },
  {
    title: "Automated CI/CD for Faster, Safer Deployments",
    description:
      "Streamline your development lifecycle with build automation, zero-downtime releases, and real-time monitoring.",
    image: ImgEnterprise3,
    alttext: "CI/CD Pipelines",
    features: [
      {
        title: "Automated Build Pipelines",
        description:
          "Auto-build with every code push for fast, continuous integration.",
      },
      {
        title: "Code Quality & Testing",
        description:
          "Catch issues early with built-in tests, analysis, and linting.",
      },
      {
        title: "Zero-Downtime Deployments",
        description: "Deploy updates with no downtime and safe rollbacks.",
      },
      {
        title: "Release Versioning & Rollbacks",
        description:
          "Track releases and roll back instantly with version control.",
      },
      {
        title: "Environment Management",
        description:
          "Switch between dev, staging, & production with consistent, version-controlled setups.",
      },
      {
        title: "Real-Time Monitoring & Alerts",
        description:
          "Get real-time build and deployment updates with dashboards.",
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
    icon: IconEnterpriseGradeSecurity,
    title: "Enterprise-Grade Security",
    text: "Your data stays protected with the latest security practices and full compliance baked in.",
  },
  {
    icon: IconShare,
    title: "Agile Development Process",
    text: "We move fast, adapt quickly, and deliver updates that actually keep up with your business.",
  },
  {
    icon: IconGrid3,
    title: "Real-Time Dashboards",
    text: "Get instant visibility into what's working (and what's not) with easy-to-read reports and insights.",
  },
  {
    icon: IconIntegratedDataSystems,
    title: "Custom-Built Solutions ",
    text: "We build software around your needs—so your team can work the way it works best.",
  },
  {
    icon: IconHierarchy2,
    title: "Seamless Integrations",
    text: "No more juggling tools—we make sure everything connects smoothly with what you already use.",
  },
  {
    icon: IconScalableArchitecture,
    title: "Scalable Architecture",
    text: "Your software grows with you—whether it's 10 users or 10,000, it stays fast and reliable.",
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


const CompEnterpriseSoftwareDevelopment = () => {
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
        title="Enterprise Software Development Solutions"
        description="Custom enterprise software to streamline operations, boost productivity, and drive growth with secure, scalable technology solutions."
      /> */}

      {/* patient-banner */}
      <motion.section {...fadeIn}>
        <Box className="healthcare-banner-section">
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Box className="heading-content heading-content-spacing">
                  <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                    Enterprise Software Development
                  </Typography>
                  <Typography variant="h6" paragraph sx={{ mb: 5 }}>
                    Build scalable, secure, and tailored enterprise applications
                    to streamline operations and boost performance.
                  </Typography>
                </Box>
                <Box className="heading-content" align="center">
                  <Link href="/contactus" variant="contained" className="main-primary-btn">
                    Get Your Custom Solution
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
                What You{" "}
                <span style={{ color: "#009FE3" }}>
                  Get with Custom Enterprise Software Deve
                  <span className="span-text">
                    lopment
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
                Powerful Enterprise{" "}
                <span style={{ color: "#009FE3" }}>
                  Control Panel to Manage Teams, Tools &{" "}
                  <span className="span-text">
                    Data
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
              <Box className="smart-features-wrapper enterprise-software-swiper">
                <Swiper
                  key={`swiper-${isMobile ? 'mobile' : 'desktop'}`}
                  direction={isMobile ? "horizontal" : "vertical"}
                  autoHeight={isMobile}
                  spaceBetween={20}
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
                              className="smart-features-image"
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
                  Start Building Your Custom Enterprise Software Today
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

      {/* From Roadblocks to Results: Turning Pain Points into Progress */}
      <Box className="lets-show-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Box className="heading-content">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 5, fontWeight: 700, color: "#ffffff" }}
          >
            From Roadblocks{" "}
            <span style={{ color: "#009FE3" }}>
              to Results: Turning Pain Points into Pro
              <span className="span-text">
                gress
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
            <Image src={SayGoodbyeImg} alt="Say Goodbye Img" />

            <Box className="pain-point-solution-wrapper">
              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list time-restrictions">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Limited Flexibility
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    You're forced to adapt to the tool, instead of the tool
                    adapting to you.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list limited-reach">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Integration Issues
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    New software often doesn't play well with the systems you
                    already rely on.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list manual-management">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Scalability Gaps
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    As your business grows, the system starts to slow you down
                    instead of speeding things up.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list high-overheads">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Security Risks
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Without the right safeguards, you're one step away from a
                    breach or regulatory trouble.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list slow-checkout">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Delayed Delivery
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    By the time it's ready, your team's needs have already moved
                    on. give me all heading in two words only
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list traditional-marketing">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Data Blindspots
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    You can't manage what you can't see—especially when data is
                    outdated or scattered.
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

      {/* Custom-Built Solutions*/}
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
              Start Your{" "}
              <span style={{ color: "#009FE3" }}>
                {" "}
                Custom Software Jo
                <span className="span-text">
                  urney
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

export default CompEnterpriseSoftwareDevelopment;
