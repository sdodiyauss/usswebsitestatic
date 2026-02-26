"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Collapse,
} from "@mui/material";
import CountUp from "react-countup";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import callIcon from "@/call-icon.svg?url";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import GraphicsBG from "@/graphics-bg.webp";


import Mobile from "@/mobile.svg?url";
import MonitorMobbile from "@/monitor-mobbile.svg?url";
import Monitor from "@/monitor.svg?url";
import PenTool2 from "@/pen-tool-2.svg?url";
import Path from "@/path.svg?url";
import Element from "@/element-2.svg?url";

import ImpactSupport from "@/impact-support.svg?url";
import ImpactShieldTick from "@/impact-shield-tick.svg?url";
import ImpactBezier from "@/impact-bezier.svg?url";
import ImpactCodeCircle from "@/impact-code-circle.svg?url";
import ImpactSearchStatus from "@/impact-search-status.svg?url";
import ImpactMessages from "@/impact-messages.svg?url";


import USSLogo from "@/logo-gif.gif";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";


import Contact from "~/contact/Contact";
import { motion, AnimatePresence } from "framer-motion";
import Metadata from "~/meta/Metadata";
import Link from "next/link";
import TechnologyStacks from "~/technologystackssection/TechnologyStacks";
import Companylogos from "~/companylogoes/Companylogos";
import Timelinewrapper from "~/timelinewrapper/Timelinewrapper";
import Casestudyoverview from "~/casestudyoverview/Casestudyoverview";
import Comanblogssection from "~/comanblogs/Comanblogssection";
import CircleType from "circletype";

const solutions = [
  {
    title: "User Interface (UI) Design",
    description:
      "We offer UI design services that focus on more than just looks. By creating intuitive interfaces and clean layouts, we make sure your product is both easy to use and enjoyable—leading to better user engagement.",
    icon: PenTool2,
  },
  {
    title: "User Experience (UX) Design",
    description:
      "Our UX design services are rooted in real-world usability. We take a close look at how people use your product and build user-friendly experiences that feel natural, smooth, and frustration-free.",
    icon: Path,
  },
  {
    title: "Mobile App UI/UX Design",
    description:
      "Mobile app UI/UX design is all about the details—clear buttons, smart layouts, and responsive mobile interfaces. We help you build apps that users love to engage with, no matter the screen size.",
    icon: Mobile,
  },
  {
    title: "Web App UI/UX Design",
    description:
      "With our web app UI/UX design, we create responsive layouts that adjust to any screen. Easy navigation and thoughtful user experience design come together to help your app do more—and work better.",
    icon: Monitor,
  },
  {
    title: "Interaction Design",
    description:
      "We believe interaction design should feel invisible—in a good way. Every scroll, tap, or transition is built to guide users naturally while improving usability and supporting smooth digital interactions.",
    icon: MonitorMobbile,
  },
  {
    title: "Wire framing & Prototyping",
    description:
      "Before diving into development, we use wireframing and prototyping to bring structure and ideas to life. This helps us test flows early, prep for usability testing, and avoid major fixes later.",
    icon: Element,
  },
];


const accordionItems = [
  {
    title: "Brand Identity Design",
    description:
      "Your brand deserves more than just a logo. We help craft a complete visual identity—from color palettes and fonts to style direction—that reflects who you are and builds recognition across every touchpoint.",
  },
  {
    title: "UI/UX Design for Web & Mobile",
    description: (
      <>
        User experience matters. We design intuitive, responsive interfaces for websites and  <Link href="/how-we-help/mobile-application-devlopment" className="text-600">mobile apps</Link> that are easy to navigate, visually engaging, and built to keep users coming back.
      </>
    ),
  },
  {
    title: "Graphic Design for Marketing",
    description:
      "Need visuals that work as hard as your message? We create marketing graphics for social media, ads, presentations, and more—designed to capture attention and clearly communicate your brand.",
  },
  {
    title: "Interaction Design",
    description:
      "We focus on the details that shape how users interact with your product. From micro-animations to transitions, we design digital moments that feel natural and improve usability.",
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "Before we jump into final designs, we map out structure and flow. Wireframes and interactive prototypes give you a clear look at how things will function—and allow for smart changes early on.",
  },
  {
    title: "Visual Content Creation",
    description:
      "Illustrations, icons, infographics— we design custom visual content that supports your brand and makes information easier to understand at a glance.",
  },
  {
    title: "Usability & Accessibility Design",
    description:
      "Design should work for everyone. We follow accessibility best practices and test for usability to make sure your digital product is clear, comfortable, and inclusive for all users.",
  },
  {
    title: "UI Design Systems & Style Guides",
    description:
      "Consistency is key—especially as your product grows. We create UI design systems and style guides that keep your brand visuals aligned and make future design work faster and easier.",
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

const CompGraphicsUiUxDesign = () => {
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
        title="Graphics & UI/UX Design Services – USS"
        description="USS crafts stunning visuals and intuitive interfaces. Elevate your brand with creative graphic design and seamless UI/UX experiences that engage users."
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
                    Expert Graphic & UI/UX Design to Elevate Your Brand
                  </Typography>
                  <Typography variant="h6" paragraph>
                    Crafting intuitive interfaces and stunning visuals that boost
                    user engagement and drive business growth.
                  </Typography>
                  <Link href="/contactus" variant="contained" className="main-primary-btn">
                    Start Your Design Project
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
        <Box sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Image
                  src={GraphicsBG}
                  alt="Graphic and UI/UX Design Services"
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
                Transforming{" "}
                <span className="primary-color">
                  Ideas into Visual Exper
                  <span className="span-text">
                    iences
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
                Creative Graphic{" "}
                <span className="primary-color">
                  & UI/UX Solutions That Bring Ideas to{" "}
                  <span className="span-text">
                    Life
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
              <Typography variant="h6" paragraph sx={{ mb: 3 }}>
                From brand visuals to user journeys, we design experiences that
                look great and feel even better.
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
                  Ready to level up your design? Let's bring your ideas to life.
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
              Have a design{" "}
              <span className="primary-color">
                project in mind? Let's chat and bring it t
                <span className="span-text">
                  o life.
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

export default CompGraphicsUiUxDesign;
