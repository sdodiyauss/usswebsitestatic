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

import callIcon from "@/call-icon.svg?url";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import IconCCCShieldSecurityCloud from "@/icon-cc-shield-security-cloud.svg?url";
import IconIndustry from "@/icon-industry.svg?url";

import IconCCCMaximize from "@/icon-cc-maximize.svg?url";


import ImageFintech from "@/image-fintech.webp";
import ImageRealEstate from "@/image-real-estate.webp";
import ImageTravel from "@/image-travel.webp";

import CheckCircleIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Close';
import WarningAmberIcon from '@mui/icons-material/Warning';


import SayGoodbyeImg from "@/say-goodbye-img.webp";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";

import IconScalableArchitecture from "@/icon-scalable-architecture.svg?url";
import IconMonitorMobile from "@/icon-monitor-mobile.svg?url";
import IconBox2 from "@/icon-box2.svg?url";
import IconSecurityUser from "@/icon-security-user.svg?url";
import IconMonitorMobbileBlue from "@/icon-monitor-mobbile-blue.svg?url";
import IconAutomatedWorkflows from "@/icon-automated-workflows.svg?url";
import iconChart from "@/icon-solution-chart.svg?url";

import IconBDEData from "@/icon-bde-data.svg?url";
import IconSearchStatus from "@/icon-search-status.svg?url";
import DrivingDigitalImg1 from "@/driving-digital-img1.webp";
import DrivingDigitalImg2 from "@/driving-digital-img2.webp";
import DrivingDigitalImg3 from "@/driving-digital-img3.webp";
import DrivingDigitalImg4 from "@/driving-digital-img4.webp";
import DrivingDigitalImg5 from "@/driving-digital-img5.webp";
import DrivingDigitalImg6 from "@/driving-digital-img6.webp";

import Contact from "~/contact/Contact";
import Metadata from "~/meta/Metadata";
import { motion, AnimatePresence } from "framer-motion";
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
    title: " Purpose-Built Platforms",
    description:
      "Your business isn't like anyone else's—so your technology shouldn't be either. We design solutions that reflect how you actually work, not how others think you should.",
    icon: IconMonitorMobile,
    active: true,
  },
  {
    title: "Seamless Integrations",
    description:
      "You've already invested in tools that work for you. We connect the dots, bringing everything together so your systems talk to each other and your team stays in sync.",
    icon: IconBDEData,
  },
  {
    title: " Enterprise-Grade Protection",
    description:
      "Protecting sensitive data is non-negotiable. We follow your industry's strictest rules and build in the kind of security that never gets in your way.",
    icon: IconCCCShieldSecurityCloud,
  },
  {
    title: " Industry-Agnostic Flexibility",
    description:
      "Whatever space you're in, we adapt. From retail to education to logistics and beyond, our platforms are built to serve the way your industry works.",
    icon: IconIndustry,
  },
  {
    title: "Real-Time Insights",
    description:
      "No more chasing numbers or exporting spreadsheets. Get a clear view of what's happening now—so you can act faster, smarter, and with more confidence.",
    icon: IconSearchStatus,
  },
  {
    title: "Flexible Infrastructure",
    description:
      "Growth brings change. Our systems are designed to flex and expand as your team, customers, or goals evolve—without needing to start from scratch.",
    icon: IconCCCMaximize,
  },
];

const smartFeaturesSlides = [
  {
    title: "Smart Project Management With Enterprise Insights",
    description:
      "Power your teams with automation, collaboration, and real-time visibility — all in one smart dashboard.",
    image: ImageFintech,
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
      "Power your teams with automation, collaboration, and real-time visibility — all in one smart dashboard.",
    image: ImageRealEstate,
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
    image: ImageTravel,
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
    icon: IconBox2,
    title: "User-Centric Design",
    text: "We design tools with clean, intuitive interfaces that people actually enjoy using.",
  },
  {
    icon: IconSecurityUser,
    title: "Enterprise-Grade Security",
    text: "Our solutions meet industry standards with strong security and built-in compliance.",
  },
  {
    icon: IconScalableArchitecture,
    title: "Scalable Architecture",
    text: "We build systems that scale with your growth and expansion.",
  },
  {
    icon: IconMonitorMobbileBlue,
    title: "Connected Platforms ",
    text: "We connect your systems for seamless data flow and one source of truth.",
  },
  {
    icon: IconAutomatedWorkflows,
    title: "Workflow Automation",
    text: "We automate manual tasks to cut errors, save time, and boost efficiency.",
  },
  {
    icon: iconChart,
    title: "Real-Time Analytics",
    text: "Access live data anywhere to make faster, smarter decisions.",
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


const CompOtherIndustryExpertise = () => {
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

  const drivingDigitalData = [
    {
      title: "Oil & Gas",
      description:
        "Worksites are unpredictable, but your data shouldn't be. We've built tools that help field teams capture info quickly—even with gloves on—and stay connected to the office without delays. You'll see what's going on, even if it's 100 km out in the middle of nowhere. No fluff. Just what's needed to keep things running safely.",
      image: DrivingDigitalImg1,
      bgColor: "#D0ECC0",
      translateTop: "0rem",
      alttext: "Oil and Gas Industry",
    },
    {
      title: "Real Estate",
      description:
        "You know how messy things get when lease renewals, maintenance, and tenant questions pile up. We build simple systems to keep that chaos under control. You'll spend less time chasing emails and more time focusing on the stuff that actually grows your business.",
      image: DrivingDigitalImg2,
      bgColor: "#ECC0C1",
      translateTop: "1rem",
      alttext: "Real Estate Industry",
    },
    {
      title: "Banking & FinTech",
      description:
        "In this space, even small glitches can cost trust. That's why we build with stability first. The apps and tools we create are simple for users, tough for threats, and flexible enough to keep up with new rules and market shifts. We're not chasing buzz—just building what works.",
      image: DrivingDigitalImg3,
      bgColor: "#ECC0E7",
      translateTop: "2rem",
      alttext: "Banking and FinTech Industry",
    },
    {
      title: "Retails",
      description:
        "Some days it's slow traffic, other days your online orders crash your backend. Either way, we've seen how frustrating it gets. We work on the boring backend stuff—like real-time stock updates and smoother checkout pages—so your team can focus on keeping customers happy, not fixing tech issues.",
      image: DrivingDigitalImg4,
      bgColor: "#CBC0EC",
      translateTop: "3rem",
      alttext: "Retail Industry",
    },
    {
      title: "Education & eLearning",
      description:
        "Most digital learning tools try to do too much and end up overwhelming teachers and students. We keep it focused. The goal is simple: better engagement, easier tracking, and tools that work well whether someone's on campus or halfway across the world.",
      image: DrivingDigitalImg5,
      bgColor: "#C0DBEC",
      translateTop: "4rem",
      alttext: "Education and E-Learning Industry",
    },
    {
      title: "Manufacturing",
      description:
        "We've walked into factories still running on Excel. No judgment—just saying there's a better way. Our job is to help you track what's happening in real time, link your machines and teams, and cut down on small delays that add up over time. You don't need a flashy interface—you need clarity.",
      image: DrivingDigitalImg6,
      bgColor: "#C0ECD8",
      translateTop: "4rem",
      alttext: "Manufacturing Industry",
    },
  ];
  return (
    <>
      <Metadata
        title="Enterprise & Industry Software Development Services"
        description="Custom software for enterprises & industries—healthcare, e‑commerce, finance, manufacturing & more. Secure, scalable & tailored to your business."
      />

      {/* patient-banner */}
      <motion.section {...fadeIn}>
        <Box className="healthcare-banner-section">
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Box className="heading-content heading-content-spacing">
                  <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                    Other Industry Expertise
                  </Typography>
                  <Typography variant="h6" paragraph sx={{ mb: 5 }}>
                    From emerging startups to established sectors, our
                    cross-industry expertise powers innovation, efficiency, and
                    growth—no matter the field.
                  </Typography>
                </Box>
                <Box className="heading-content" align="center">
                  <Link href="/contactus" variant="contained" className="main-primary-btn">
                    Explore Our Capabilities
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
                Smart Features{" "}
                <span style={{ color: "#009FE3" }}>
                  for Any Sector, Any{" "}
                  <span className="span-text">
                    Scale
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

      {/* driving-digital */}
      <Box
        className="driving-digital-section"
        sx={{ py: { xs: 3, md: 4, lg: 5 } }}
      >
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography
              variant="h2"
              align="center"
              sx={{ mb: 5, fontWeight: 700 }}
            >
              Driving Digital{" "}
              <span style={{ color: "#009FE3" }}>
                Impact Across Diverse Indu
                <span className="span-text">
                  stries
                  <div className="line-container">
                    <div className="line-wrapper"></div>
                    <div className="line"></div>
                    <div className="moving-box"></div>
                  </div>
                </span>
              </span>
            </Typography>
          </Box>

          {/* <Box className="driving-digital-main">
            <Box className="driving-digital-list">
              <Grid container className="driving-digital-row" spacing={3}>
                <Grid className="driving-digital-text" size={{ xs: 12, sm: 6, md: 6 }}>
                  <Box className="driving-digital-inner">
                    <Typography variant="h3">Oil & Gas</Typography>
                    <Typography variant="body1">
                      Worksites are unpredictable, but your data shouldn't be.
                      We've built tools that help field teams capture info
                      quickly—even with gloves on—and stay connected to the
                      office without delays. You'll see what's going on, even if
                      it's 100 km out in the middle of nowhere. No fluff. Just
                      what's needed to keep things running safely.
                    </Typography>
                  </Box>
                </Grid>
                <Grid className="driving-digital-image" size={{ xs: 12, sm: 6, md: 6 }}>
                  <Box className="driving-digital-image">
                    <Image
                      src={DrivingDigitalImg1}
                      alt="driving-digital-img1"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box> */}

          <Box className="driving-digital-main">
            {drivingDigitalData.map((item, index) => (
              <Box
                className="driving-digital-list"
                key={index}
                style={{
                  background: item.bgColor,
                  transform: `translateY(${item.translateTop})`,
                }}
              >
                <Grid container className="driving-digital-row" spacing={3}>
                  <Grid
                    className="driving-digital-text"
                    size={{ xs: 12, sm: 6, md: 6 }}
                  >
                    <Box className="driving-digital-inner">
                      <Typography variant="h3">{item.title}</Typography>
                      <Typography variant="body1">
                        {item.description}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    className="driving-digital-image"
                    size={{ xs: 12, sm: 6, md: 6 }}
                  >
                    <Box className="driving-digital-image">
                      <Image src={item.image} alt={item.alttext} />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
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
                  Struggling With Industry-Specific Challenges?
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

      {/* From Bottlenecks to Breakthroughs: Solving What Slows You Down */}
      <Box className="lets-show-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Box className="heading-content">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 5, fontWeight: 700, color: "#ffffff" }}
          >
            From Bottlenecks{" "}
            <span style={{ color: "#009FE3" }}>
              to Breakthroughs: Solving What Slows You{" "}
              <span className="span-text">
                Down
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
                    Broken Communication
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Most companies still rely on outdated, disconnected
                    tools—slowing decisions and causing costly miscommunication.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list limited-reach">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Repetitive Tasks
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Manual tasks like data entry and paper logs are error-prone
                    and drain productivity—especially as you grow.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list manual-management">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Missing Insights
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Without real-time insights, teams react to problems instead of
                    preventing them.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list high-overheads">
                  <Typography variant="h6" className="pain-point-solution-title">
                    User Frustration
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Clunky software frustrates users and hurts adoption,
                    efficiency, and trust.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list slow-checkout">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Compliance Pressure
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Constantly changing regulations and cyber threats make
                    security and compliance a daily challenge.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list traditional-marketing">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Scaling Without Chaos
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    As businesses grow, outdated systems cause bottlenecks, data
                    chaos, and lost control across teams.
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

      {/* Connected Platforms*/}
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
              Talk to{" "}
              <span style={{ color: "#009FE3" }}>
                {" "}
                Industry Ex
                <span className="span-text">
                  perts
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

export default CompOtherIndustryExpertise;
