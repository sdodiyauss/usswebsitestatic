"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Chip,
  TextField,
  useMediaQuery,
  useTheme,
  Collapse,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BtnIcon from "@/btn-icon.svg?url";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import callIcon from "@/call-icon.svg?url";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import CustomSoftBG from "@/custom-software-bg.webp";


import Mobile from "@/mobile.svg?url";
import MonitorMobbile from "@/monitor-mobbile.svg?url";
import CodeCircle from "@/code-circle.svg?url";
import PenTool2 from "@/pen-tool-2.svg?url";
import CPU from "@/cpu.svg?url";
import Data from "@/data.svg?url";

import ImpactSupport from "@/impact-support.svg?url";
import ImpactShieldTick from "@/impact-shield-tick.svg?url";
import ImpactBezier from "@/impact-bezier.svg?url";
import ImpactCodeCircle from "@/impact-code-circle.svg?url";
import ImpactSearchStatus from "@/impact-search-status.svg?url";
import ImpactMessages from "@/impact-messages.svg?url";

import support from "@/support.gif";
import design from "@/design.gif";
import code from "@/code.gif";
import analysis from "@/analysis.gif";
import launch from "@/launch.gif";
import USSLogo from "@/logo-gif.gif";

import CaseStudy1 from "@/case-study1.webp";
import NextTab from "@/right-blue.svg?url";

import Blog1 from "@/blog1.webp";
import Blog2 from "@/blog2.webp";
import Blog3 from "@/blog3.webp";

import Contact from "~/contact/Contact";
import { Monitor } from "@mui/icons-material";
import Metadata from "~/meta/Metadata";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import TechnologyStacks from "~/technologystackssection/TechnologyStacks";
import Companylogos from "~/companylogoes/Companylogos";
import Timelinewrapper from "~/timelinewrapper/Timelinewrapper";
import Casestudyoverview from "~/casestudyoverview/Casestudyoverview";
import Comanblogssection from "~/comanblogs/Comanblogssection";
import CircleType from "circletype";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";


const solutions = [
  {
    title: "Custom Software Development",
    description:
      (
        <>
          We help businesses build software from the ground up.Our  <Link href="/" className="text-600 secondary-color">custom software development services</Link> cover everything—ideas, planning, coding, launch, and updates for scalable digital solutions.
        </>
      ),
    icon: Mobile,
  },
  {
    title: "Enterprise Software Solutions",
    description:
      "Our enterprise software solutions are built to handle real-world complexity.From internal operations to scaling teams and systems, we create secure, robust enterprise tools that just make work easier.",
    icon: Data,
  },
  {
    title: "Web-Based Application Development",
    description:
      "Whether it's a portal for users or a backend tool for your team,we develop responsive, secure web-based applications that run smoothly, fast, and reliably on every device.",
    icon: MonitorMobbile,
  },
  {
    title: "Software Product Development",
    description:
      "Got a product in mind? We'll help you shape it, build it, and get it to market.Our software product development process is grounded in user insights, agile planning, and clean code.",
    icon: CodeCircle,
  },
  {
    title: "API Development & Integration",
    description:
      "Systems shouldn't feel disconnected. We handle API development and integration so your software works with CRMs, ERPs, payment gateways—whatever you need—without breaking a sweat.",
    icon: CPU,
  },
  {
    title: "UI/UX Design for Software Interfaces",
    description:
      "Design should make things easier, not harder.Our UI/UX design for software is clean, intuitive, and conversion-friendly, helping users do what they came to do—without confusion.",
    icon: PenTool2,
  },
];


const accordionItems = [
  {
    title: "Tailor-Made Business Applications",
    description:
      "We build custom software solutions that match your specific business needs—no off-the-shelf limitations. Get a tailored system to automate processes, manage data, and improve workflow across your team.",
  },
  {
    title: "Cross-Platform Web Applications",
    description: (
      <>
        We develop  <Link href="/how-we-help/web-design-and-development" className="text-600">responsive web applications</Link> designed to deliver a consistent experience across all devices. Whether it's internal or customer-facing, our apps help you boost productivity and user satisfaction.
      </>
    ),
  },
  {
    title: "Enterprise-Grade Software Solutions",
    description:
      "Our enterprise software solutions support complex operations and growing teams. We help businesses streamline operations, enhance data security, and scale without performance issues.",
  },
  {
    title: "Software Product Development",
    description:
      "Have a software product idea? We help startups and enterprises develop custom software products—from MVP to full launch—built to solve real user problems and adapt as you grow.",
  },
  {
    title: "API Development & System Integration",
    description:
      "We build robust APIs and provide seamless third-party integration to keep your tools connected. Our solutions help reduce manual work and ensure data flows securely between systems.",
  },
  {
    title: "Cloud-Based Software Solutions",
    description:
      "We design and deploy cloud-native software applications that scale as your business grows. With AWS, Azure, or Google Cloud, you'll benefit from high uptime, performance, and infrastructure flexibility.",
  },
  {
    title: "Legacy Software Modernization",
    description:
      "Still relying on old systems? We help modernize legacy applications with better speed, UI, and features—so you can improve efficiency, reduce tech debt, and support your current business goals.",
  },
  {
    title: "Ongoing Maintenance & Support",
    description:
      "Our custom software support services include updates, security patches, and ongoing improvements. Stay ahead of bugs and downtime while keeping your software aligned with evolving user needs.",
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

const tabVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  viewport: { once: true, amount: 0.2 }
};


const CompCustomSoftwareDevelopment = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [TechnologyIndex, setTechnologyIndex] = useState(0);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.7 });
  const [startCount, setStartCount] = useState(false);

  //Milestone counter
  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

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

  //accordian
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  //case study
  const [activeCaseStudyTab, setActiveCaseStudyTab] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveCaseStudyTab(0);
      },
      { threshold: 0.5 }
    );

    const el = sectionRef.current;
    el && observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  const handleCaseTabClick = (index) => {
    setActiveCaseStudyTab(index);
  };

  //nexttab mobile
  const goToNextTab = () => {
    setActiveCaseStudyTab((prev) => (prev + 1) % TOTAL_TABS);
  };

  return (
    <>
      {/* <Metadata
        title="Custom Software Development Services – USS"
        description="Get tailor-made software solutions with USS. We develop scalable, secure, and efficient systems that fit your unique business goals and workflows."
      /> */}

      {/* mobile-app-banner */}
      <motion.section {...fadeIn}>
        <Box
          className="healthcare-banner-section"
          sx={{ pb: { xs: 3, md: 4, lg: 5 } }}
        >
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Box className="heading-content heading-content-spacing">
                  <Typography variant="h1" sx={{ mb: 3, color: "#f28c38" }}>
                    Custom Software Development Services
                  </Typography>
                  <Typography variant="h6" paragraph>
                    We build scalable, secure, and future-ready software solutions
                    for startups, enterprises, and everything in between.
                  </Typography>
                  <Link href="/contactus" variant="contained" className="main-primary-btn">
                    Talk to Our Experts
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

      <motion.section {...fadeIn}>
        <Box sx={{ pb: { xs: 3, md: 4, lg: 5 } }}>
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={12}>
                <Image
                  src={CustomSoftBG}
                  alt="Custom Software Development Services"
                  className="career-banner"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.section>

      {/* Swiper Logo Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
          <Companylogos />
        </Box>
      </motion.section>

      {/* smart solution */}
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
                Custom Software{" "}
                <span className="primary-color">
                  Features Built for Your Business{" "}
                  <span className="span-text">
                    Goals
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
      </motion.section>

      {/* accordian */}
      <motion.section {...fadeInUp}>
        <Box
          className="accordion-grid-wrapper"
          sx={{ py: { xs: 3, md: 4, lg: 5 } }}
        >
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content" sx={{ mb: 4 }}>
              <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
                Custom Software{" "}
                <span className="primary-color">
                  Development So
                  <span className="span-text">
                    lutions
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
              <Typography variant="h6" paragraph sx={{ mb: 3 }}>
                Subline: Unlock long-term value, flexibility, and control with
                custom software built around your business.
              </Typography>
            </Box>

            <Grid container spacing={{ md: 5 }} alignItems="flex-start">
              <Grid size={{ xs: 12, md: 6 }}>
                {accordionItems
                  .slice(0, Math.ceil(accordionItems.length / 2))
                  .map((item, index) => {
                    const actualIndex = index;
                    const isOpen = actualIndex === openIndex;
                    return (
                      <Box
                        key={actualIndex}
                        className={`accordion-grid-item ${isOpen ? "active" : ""
                          }`}
                      >
                        <Box
                          className="accordion-header"
                          onClick={() => handleToggle(actualIndex)}
                        >
                          <IconButton
                            className={`circle-icon ${isOpen ? "rotate-icon" : ""
                              }`}
                          >
                            {isOpen ? <CloseIcon /> : <AddIcon />}
                          </IconButton>
                          <Typography variant="h6" fontWeight={600}>
                            {item.title}
                          </Typography>
                        </Box>
                        <Collapse in={isOpen} className="accordion-desc-wrapper">
                          <Typography variant="body1" className="accordion-desc">
                            {item.description}
                          </Typography>
                        </Collapse>
                      </Box>
                    );
                  })}
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                {accordionItems
                  .slice(Math.ceil(accordionItems.length / 2))
                  .map((item, index) => {
                    const actualIndex =
                      index + Math.ceil(accordionItems.length / 2);
                    const isOpen = actualIndex === openIndex;
                    return (
                      <Box
                        key={actualIndex}
                        className={`accordion-grid-item ${isOpen ? "active" : ""
                          }`}
                      >
                        <Box
                          className="accordion-header"
                          onClick={() => handleToggle(actualIndex)}
                        >
                          <IconButton
                            className={`circle-icon ${isOpen ? "rotate-icon" : ""
                              }`}
                          >
                            {isOpen ? <CloseIcon /> : <AddIcon />}
                          </IconButton>
                          <Typography variant="h6" fontWeight={600}>
                            {item.title}
                          </Typography>
                        </Box>
                        <Collapse in={isOpen} className="accordion-desc-wrapper">
                          <Typography variant="body1" className="accordion-desc">
                            {item.description}
                          </Typography>
                        </Collapse>
                      </Box>
                    );
                  })}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.section>

      {/* technology tab Section */}
      <TechnologyStacks />

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
                  Get your custom software built by our expert team—start today!
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
          </Box>
        </Container>
      </motion.section>
      <Timelinewrapper />

      {/* impact */}
      <motion.section {...fadeInUp}>
        <Box className="impact-wrapper" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content logo-swiper-box-title">
              <Typography
                variant="h2"
                align="center"
                sx={{ mt: 2, mb: 4, fontWeight: 700 }}
              >
                Build With{" "}
                <span className="primary-color">
                  Confidence, Launch With I
                  <span className="span-text">
                    mpact
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>

            <Grid container justifyContent="space-between" className='build-with-confidence'>
              {/* Left Impact Column */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box className="impact-column impact-left">
                  <Box className="impact-card with-connector1">
                    <Image
                      src={ImpactCodeCircle}
                      alt="Agile"
                      width={32}
                      height={32}
                    />
                    <Box>
                      <Typography variant="body1" className="impact-title">
                        Agile Development Approach
                      </Typography>
                      <Typography variant="body2" className="impact-description">
                        Fast, iterative delivery with continuous feedback to keep
                        your project on track and aligned with your vision.
                      </Typography>
                    </Box>
                    <Box className="impact-blue-dot connect-dot-1"></Box>
                  </Box>

                  <Box className="impact-card with-connector2">
                    <Image
                      src={ImpactSearchStatus}
                      alt="Hiring"
                      width={32}
                      height={32}
                    />
                    <Box>
                      <Typography variant="body1" className="impact-title">
                        Flexible Hiring Models
                      </Typography>
                      <Typography variant="body2" className="impact-description">
                        We offer flexible hiring models to scale your team as
                        needed—dedicated, part-time, or project-based.
                      </Typography>
                    </Box>
                    <Box className="impact-blue-dot connect-dot-2"></Box>
                  </Box>

                  <Box className="impact-card with-connector3">
                    <Image
                      src={ImpactSupport}
                      alt="Support"
                      width={32}
                      height={32}
                    />
                    <Box>
                      <Typography variant="body1" className="impact-title">
                        Support & Maintenance
                      </Typography>
                      <Typography variant="body2" className="impact-description">
                        Ongoing support to keep your app secure, updated, and
                        running smoothly after launch.
                      </Typography>
                    </Box>
                    <Box className="impact-blue-dot connect-dot-3"></Box>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 2 }} className="impact-center">
                <Box className="impact-circle ripple-gray">
                  <Image
                    src={USSLogo}
                    alt="React Icon"
                    className="impact-center-img"
                  />
                </Box>
              </Grid>

              {/* Right Impact Column */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box className="impact-column impact-right">
                  <Box className="impact-card with-connector4">
                    <Image
                      src={ImpactBezier}
                      alt="UI/UX"
                      width={32}
                      height={32}
                    />
                    <Box>
                      <Typography variant="body1" className="impact-title">
                        Creative UI/UX
                      </Typography>
                      <Typography variant="body2" className="impact-description">
                        Our designers create intuitive, eye-catching interfaces
                        that boost engagement and drive conversions.
                      </Typography>
                    </Box>
                    <Box className="impact-blue-dot connect-dot-4"></Box>
                  </Box>

                  <Box className="impact-card with-connector5">
                    <Image
                      src={ImpactShieldTick}
                      alt="Security"
                      width={32}
                      height={32}
                    />
                    <Box>
                      <Typography variant="body1" className="impact-title">
                        Security & Compliance
                      </Typography>
                      <Typography variant="body2" className="impact-description">
                        We build apps with top-tier security, following industry
                        standards for data protection and compliance.
                      </Typography>
                    </Box>
                    <Box className="impact-blue-dot connect-dot-5"></Box>
                  </Box>

                  <Box className="impact-card with-connector6">
                    <Image
                      src={ImpactMessages}
                      alt="Communication"
                      width={32}
                      height={32}
                    />
                    <Box>
                      <Typography variant="body1" className="impact-title">
                        Transparent Communication
                      </Typography>
                      <Typography variant="body2" className="impact-description">
                        Clear, proactive updates and dedicated project managers
                        ensure you're always in the loop.
                      </Typography>
                    </Box>
                    <Box className="impact-blue-dot connect-dot-6"></Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.section>

      {/* case-study */}
      <Casestudyoverview />

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
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography
              variant="h2"
              align="center"
              sx={{ mt: 6, mb: 4, fontWeight: 700 }}
            >
              Ready to{" "}
              <span className="primary-color">
                Start Your Custom Software Pr
                <span className="span-text">
                  oject?
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

export default CompCustomSoftwareDevelopment;
