"use client";

import {
  Box,
  Button,
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


import IconMonitor from "@/icon-monitor.svg?url";
import IconCCCBox from "@/icon-cc-box.svg?url";
import IconCCCShieldSecurityCloud from "@/icon-cc-shield-security-cloud.svg?url";
import IconCCCloudAdd from "@/icon-cc-cloud-add.svg?url";
import IconCCCMaximize from "@/icon-cc-maximize.svg?url";
import IconCCCWarning from "@/icon-cc-warning.svg?url";

import SmartFeaturesShape from "@/smart-feature-shape.svg?url";

import CybersecurityImage1 from "@/cybersecurity-image1.webp";

import CheckCircleIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Close';
import WarningAmberIcon from '@mui/icons-material/Warning';



import SayGoodbyeImg from "@/say-goodbye-img.webp";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";


import IconSecurityPolicyManagement from "@/icon-security-policy-management.svg?url";
import IconDanger from "@/icon-danger.svg?url";
import IconData from "@/icon-data.svg?url";
import IconClipboardTick from "@/icon-clipboard-tick.svg?url";
import IconShieldTick from "@/icon-shield-tick.svg?url";
import IconCyberMonitor from "@/icon-cyber-monitor.svg?url";

import Contact from "~/contact/Contact";
import { motion, AnimatePresence } from "framer-motion";
import Metadata from "~/meta/Metadata";
import TechnologyStacks from "~/technologystackssection/TechnologyStacks";
import Link from "next/link";
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
    title: "Strengthening Cloud & Cybersecurity",
    description:
      "We help protect your data and systems from online threats. Our team keeps your cloud safe, secure, & always running smoothly. Stay compliant and confident with trusted cloud security.",
    icon: IconMonitor,
    active: true,
  },
  {
    title: "Comprehensive Cybersecurity & Cloud Management",
    description:
      "We plan ahead so your systems stay fast and reliable. With backups and daily checks, everything stays under control. Enjoy smooth cloud performance with proactive monitoring.",
    icon: IconCCCBox,
  },
  {
    title: "Securing and Optimizing Infrastructure",
    description:
      "Good security doesn't have to be complicated. We make sure everything works fast, stays safe, and is easy to manage. Get simple, effective cloud security built for performance.",
    icon: IconCCCShieldSecurityCloud,
  },
  {
    title: "Differentiating Our Cloud Security Services",
    description:
      "We don't give you a one-size-fits-all plan. We listen, understand your needs, and build what works best for you. Get custom cloud solutions designed for your business goals.",
    icon: IconCCCloudAdd,
  },
  {
    title: "Protecting, Managing, and Scaling Your Cloud",
    description:
      "You don't need to worry about your cloud setup. We handle the security and updates, so you can focus on your business.Enjoy hassle-free cloud management with built-in protection.",
    icon: IconCCCMaximize,
  },
  {
    title: "Automating Compliance & Risk Mitigation",
    description:
      "We don't apply generic compliance solutions. We assess your risks, understand regulations, and build secure systems that keep you protected and audit-ready.",
    icon: IconCCCWarning,
  },
];

const smartFeaturesSlides = [
  {
    title: "Security Admin Panel",
    description:
      "Easily manage store operations with a secure, intuitive admin panel—control products, pricing, inventory, and orders from one centralized dashboard.",
    image: CybersecurityImage1,
    alttext: "Security Admin Panel",
    features: [
      {
        title: "Access Management",
        description:
          "Manage your cloud team and access securely with roles and 2-step verification.",
      },
      {
        title: "Automated Backups",
        description:
          "Set it once and relax your data backs up automatically and restores anytime.",
      },
      {
        title: "Proactive Threat Detection",
        description:
          "Detects suspicious activity and alerts you instantly for quick action.",
      },
      {
        title: "Ingress/Egress Control",
        description:
          "Control traffic & access with custom rules for better security and workload isolation.",
      },
      {
        title: "Simplified Cloud Management",
        description:
          "No more switching tabs manage servers, storage, and cloud tools all in one place.",
      },
      {
        title: "Activity Tracking",
        description:
          "Track all changes, logins, and alerts with detailed audit-ready logs",
      },
    ],
  },
  {
    title: "Slide 2 Title",
    description: "Slide 2 Description",
    image: CybersecurityImage1,
    alttext: "Slide 2 Alt Text",
    features: [
      {
        title: "Wishlist Functionality",
        description:
          "Let customers save favorites to a wishlist for easy access later.",
      },
      {
        title: "Smart Search",
        description:
          "Smart search suggests as you type, fixes typos, and filters results in real-time.",
      },
      {
        title: "Recently Viewed Products",
        description:
          "A quick reminder to revisit items they liked but didn't add to cart.",
      },
      {
        title: "Product Recommendations",
        description:
          "Suggest products based on browsing or purchases to boost engagement and sales.",
      },
      {
        title: "Product Comparison Tool",
        description:
          "Help users compare products side by side for easier decisions.",
      },
      {
        title: "Quick View Option",
        description:
          "Shoppers can preview product details right on the page for a smoother journey.",
      },
    ],
  },
  {
    title: "Slide 3 Title",
    description: "Slide 3 Description",
    image: CybersecurityImage1,
    alttext: "Slide 3 Alt Text",
    features: [
      {
        title: "Wishlist Functionality",
        description:
          "Let customers save favorites to a wishlist for easy access later.",
      },
      {
        title: "Smart Search",
        description:
          "Smart search suggests as you type, fixes typos, and filters results in real-time.",
      },
      {
        title: "Recently Viewed Products",
        description:
          "A quick reminder to revisit items they liked but didn't add to cart.",
      },
      {
        title: "Product Recommendations",
        description:
          "Suggest products based on browsing or purchases to boost engagement and sales.",
      },
      {
        title: "Product Comparison Tool",
        description:
          "Help users compare products side by side for easier decisions.",
      },
      {
        title: "Quick View Option",
        description:
          "Shoppers can preview product details right on the page for a smoother journey.",
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
    icon: IconData,
    title: "Multi-Factor Authentication (MFA)",
    text: "Adds an extra layer of login  protection to prevent unauthorized access.",
  },
  {
    icon: IconDanger,
    title: "Firewall & Intrusion Prevention",
    text: "Blocks malicious traffic and defends against unauthorized intrusions at the network level.",
  },
  {
    icon: IconSecurityPolicyManagement,
    title: "Security Policy Management",
    text: "Lets you define, enforce, and update security rules across users and systems from one place.",
  },
  {
    icon: IconClipboardTick,
    title: "Compliance & Risk Reporting ",
    text: "Generates reports aligned with standards like ISO, GDPR, or HIPAA to keep you audit-ready.",
  },
  {
    icon: IconShieldTick,
    title: "Automated Incident Response",
    text: "Triggers quick actions like isolating devices or alerting admins during a security event.",
  },
  {
    icon: IconCyberMonitor,
    title: "Real-Time Threat Monitoring",
    text: "Continuously scans your systems to detect and alert you about threats before they cause harm.",
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


const CompCyberSecurityCloudManagement = () => {
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
        title="Cybersecurity & Cloud Management Services | Secure IT"
        description="Protect your business with advanced cybersecurity and cloud management. Secure, monitor, and scale your IT infrastructure with expert support."
      /> */}
      {/* patient-banner */}
      <motion.section {...fadeIn}>
        <Box className="healthcare-banner-section">
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Box className="heading-content heading-content-spacing">
                  <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                    Cyber Security & Cloud Management
                  </Typography>
                  <Typography variant="h6" paragraph sx={{ mb: 5 }}>
                    Protect your business from threats and optimize cloud
                    performance with end-to-end security, monitoring, and
                    management tailored to your infrastructure.
                  </Typography>
                </Box>
                <Box className="heading-content" align="center">
                  <Button variant="contained" className="main-primary-btn">
                    Talk to a Cloud Expert
                  </Button>
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
                Comprehensive{" "}
                <span style={{ color: "#009FE3" }}>
                  Cybersecurity & Cloud Management Capa
                  <span className="span-text">
                    bilities
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
                Smart Cloud{" "}
                <span style={{ color: "#009FE3" }}>
                  Management with Enterprise-Grade{" "}
                  <span className="span-text">
                    Security
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
              <Box className="smart-features-wrapper">
                <Swiper
                  direction={"vertical"}
                  pagination={{ clickable: true }}
                  spaceBetween={20}
                  mousewheel={{
                    sensitivity: 1,
                    releaseOnEdges: true,
                  }}
                  modules={[Pagination, Mousewheel]}
                  className="mySwiper"
                >
                  {smartFeaturesSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <Grid
                        container
                        spacing={2}
                        className="smart-features-grid"
                      >
                        <Grid className="smart-features-wrapper" size={{ xs: 12, sm: 6, md: 8 }}>
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

                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                          <Box className="smart-features-image">
                            <Image
                              src={slide.image}
                              alt={slide.alttext}
                            />
                          </Box>
                        </Grid>
                      </Grid>

                      <Image
                        src={SmartFeaturesShape}
                        className="smart-features-shape"
                        alt="smart-features-shape"
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
                  Ready to Secure and Simplify Your Cloud?
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

      {/* Powerful Protection Meets Seamless Cloud Performance */}
      <Box className="lets-show-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Box className="heading-content">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 5, fontWeight: 700, color: "#ffffff" }}
          >
            Powerful Protection{" "}
            <span style={{ color: "#009FE3" }}>
              Meets Seamless Cloud{" "}
              <span className="span-text">
                Performance
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
                    Cloud Blindspots
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    It's hard to monitor everything at once leading to missed
                    threats & unmanaged risks.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list limited-reach">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Delayed Threat Response
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Without real-time alerts, security issues are often caught too
                    late, after damage is already done.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list manual-management">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Advanced Access Control
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Managing who has access to what — and ensuring it's secure —
                    can quickly become confusing and risky.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list high-overheads">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Compliance Challenges
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Keeping up with evolving standards like GDPR, HIPAA, or ISO is
                    time-consuming and overwhelming.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list slow-checkout">
                  <Typography variant="h6" className="pain-point-solution-title">
                    High Cloud Spend
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Unused or oversized resources lead to wasted spend, budget
                    overruns, and reduced cloud efficiency.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list traditional-marketing">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Fragmented Tools
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Using separate systems for security, monitoring, and cloud
                    operations causes delays and confusion.
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

      {/* Security Policy Management */}
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
                Strengthen Your Cloud Security?
                <span className="span-text">
                  Let's Talk.
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

export default CompCyberSecurityCloudManagement;
