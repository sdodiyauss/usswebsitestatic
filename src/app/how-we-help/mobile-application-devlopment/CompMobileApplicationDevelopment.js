"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
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

import MobileAppBG from "@/mobile-app-bg.webp";


import Android from "@/android-gray-icon.svg?url";
import Apple from "@/apple.svg?url";
import Mobile from "@/mobile.svg?url";
import MonitorMobbile from "@/monitor-mobbile.svg?url";
import CodeCircle from "@/code-circle.svg?url";
import ReactNative from "@/reactnative.svg?url";

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
    title: "Android App Development",
    description:
      "We offer custom Android app development tailored for performance, security, and Google Play success.Hire expert Android app developers to build scalable mobile solutions for your business.",
    icon: Android,
  },
  {
    title: "IOS App Development",
    description:
      "Get sleek and intuitive iOS app development for iPhones and iPads, built for App Store compliance.Our iOS app developers ensure smooth performance and native user experiences.",
    icon: Apple,
  },
  {
    title: "React App Development",
    description:
      "We build high-performance mobile apps with React Native for faster, cost-effective delivery.Use our React app development services to create cross-platform apps with native feel.",
    icon: ReactNative,
  },
  {
    title: "Native App Development",
    description:
      "Native app development with Swift and Kotlin delivers unmatched performance and UX.Hire native mobile app developers for platform-optimized Android and iOS applications.",
    icon: Mobile,
  },
  {
    title: "Cross Platform App Development",
    description:
      "Create Android and iOS apps from a single codebase with cross platform app development.Our services reduce development time and cost while ensuring seamless user experience.",
    icon: MonitorMobbile,
  },
  {
    title: "Custom App Development",
    description:
      "We provide custom app development services tailored to your unique business goals.From strategy to deployment, get fully customized mobile apps that scale with your needs.",
    icon: CodeCircle,
  },
];


const accordionItems = [
  {
    title: "Custom App Development",
    description:
      "When your business needs more than an off-the-shelf solution, we build apps around your workflows, goals, and users—nothing generic.",
  },
  {
    title: "Mobile App Strategy",
    description:
      "A good app starts with a smart plan. With our mobile app strategy services, we help you define your audience, map key features, and choose the right tech stack—before a single screen is designed.",
  },
  {
    title: "App Store Deployment",
    description:
      "Ensuring smooth app store deployment with full compliance, optimized listings, and end-to-end support for both iOS and Android platforms.",
  },
  {
    title: "Hybrid App Development",
    description:
      "Apps need care after launch. Our app maintenance and support services cover updates, OS compatibility, bug fixes, and enhancements—so your users always get the best experience.",
  },
  {
    title: "Enterprise Mobility",
    description:
      "Your teams need access to the right tools, wherever they are. Our enterprise mobility solutions help businesses streamline operations, improve communication, and keep data secure across devices.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Data isn't just nice to have—it's essential. We bake analytics and reporting into your mobile app so you can track real-time usage, measure engagement, and make smarter product decisions.",
  },
  {
    title: "App Maintenance & Support",
    description:
      "Publishing your app shouldn't be a headache. With our app store deployment support, we take care of store guidelines, screenshots, metadata, and submission, so your launch goes smoothly.",
  },
  {
    title: "Backend Development & API Integration",
    description:
      "Want one app that works on both iOS and Android? Our hybrid app development approach uses tools like Flutter or React Native to build cost-effective apps without compromising quality.",
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


const CompMobileApplicationDevelopment = () => {
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
        title="Mobile Application Development Services | USS"
        description="Get custom mobile application development with native and cross-platform solutions. USS builds secure, scalable apps tailored to your business goals."
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
                    End-to-End Mobile App Development Services
                  </Typography>
                  <Typography variant="h6" paragraph>
                    From idea to launch—we build intuitive, high-performing apps
                    users love.
                  </Typography>
                  <Link href="/contactus" variant="contained" className="main-primary-btn">
                    Get a Free App Consultation
                  </Link>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 10 }}>
                {/* Milestone Section */}
                <Box className="milestone-section" ref={ref} py={6}>
                  {/* Content container above particles */}
                  <Container
                    className="custom-container"
                    maxWidth="lg"
                    sx={{ position: "relative", zIndex: 1 }}
                  >
                    <Grid
                      container
                      rowGap={{ xs: 5, sm: 0 }}
                      justifyContent="center"
                      alignItems="center"
                      className="mobileapp-counter-box"
                    >
                      {/* Counter 1 */}
                      <Grid
                        size={{ xs: 6, sm: 4 }}
                        className="counter-box even"
                        alignItems="flex-start"
                      >
                        <Box className="counter-box-inner">
                          <Typography variant="h4" fontWeight={600} color="white">
                            {startCount ? <CountUp end={89} duration={3} /> : 0}%
                          </Typography>
                          <Typography variant="body2" color="white" mt={1}>
                            client retention rate
                          </Typography>
                          <Divider
                            orientation="vertical"
                            className="counter-vertical-divider"
                          />
                        </Box>
                      </Grid>

                      {/* Counter 2 */}
                      <Grid
                        size={{ xs: 6, sm: 4 }}
                        className="counter-box odd"
                        alignItems="center"
                      >
                        <Box className="counter-box-inner">
                          <Typography variant="h4" fontWeight={600} color="white">
                            {startCount ? <CountUp end={99} duration={3} /> : 0}%
                          </Typography>
                          <Typography variant="body2" color="white" mt={1}>
                            project profitability rate
                          </Typography>
                          <Divider
                            orientation="vertical"
                            className="counter-vertical-divider"
                          />
                        </Box>
                      </Grid>

                      {/* Counter 3 */}
                      <Grid
                        size={{ xs: 6, sm: 4 }}
                        className="counter-box even"
                        alignItems="flex-end"
                      >
                        <Box className="counter-box-inner">
                          <Typography variant="h4" fontWeight={600} color="white">
                            {startCount ? <CountUp end={100} duration={3} /> : 0}%
                          </Typography>
                          <Typography variant="body2" color="white" mt={1}>
                            Accurate Market Analysis
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Container>
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
                  src={MobileAppBG}
                  alt="Mobile App Development Services"
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
                App Crafting{" "}
                <span className="primary-color">
                  Se
                  <span className="span-text">
                    rvices
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
                Next-Gen Mobility{" "}
                <span className="primary-color">
                  Sol
                  <span className="span-text">
                    ution
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
              <Typography variant="h6" paragraph sx={{ mb: 3 }}>
                Explore expert Next-Gen Mobility Solutions tailored to fit diverse
                business goals and needs.
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
                  Turn Ideas Into Impact—Let's Build Your App.
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
              Let’s Turn{" "}
              <span className="primary-color">
                Your App Idea Into R
                <span className="span-text">
                  eality
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

export default CompMobileApplicationDevelopment;
