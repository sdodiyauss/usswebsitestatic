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



import Cloud from "@/cloud-connection.svg?url";
import Cube from "@/3d-cube-scan.svg?url";
import CloudAdd from "@/cloud-add.svg?url";
import Setting from "@/setting-3.svg?url";
import Box2 from "@/box2.svg?url";
import CPU from "@/cpu.svg?url";

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
import Metadata from "~/meta/Metadata";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import TechnologyStacks from "~/technologystackssection/TechnologyStacks";
import Companylogos from "~/companylogoes/Companylogos";
import Timelinewrapper from "~/timelinewrapper/Timelinewrapper";
import Casestudyoverview from "~/casestudyoverview/Casestudyoverview";
import Comanblogssection from "~/comanblogs/Comanblogssection";

import CircleType from "circletype";
const solutions = [
  {
    title: "AI & ML Solutions",
    description:
      "We use AI and machine learning to help businesses automate tasks, predict trends, and make smarter decisions with less guesswork. Our solutions are tailored to your workflows for measurable, real-world impact.",
    icon: CPU,
  },
  {
    title: "Blockchain & Web3",
    description:
      "We build secure, scalable Blockchain and Web3 solutions—from payment systems to decentralized apps—designed for transparency, trust, and future-ready innovation tailored to your digital goals.",
    icon: Box2,
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "Our IoT solutions connect devices, deliver real-time insights, and enable smarter decisions. From smart homes to industrial systems, we build scalable, secure, and reliable connected ecosystems for your business.",
    icon: Cloud,
  },
  {
    title: "AR & VR Solutions",
    description:
      "Want to bring your product or service to life? We design engaging AR and VR experiences that blend the real and digital world for deeper customer interaction. Our immersive solutions are perfect for training, virtual tours and more.",
    icon: Cube,
  },
  {
    title: "Robotic Process Automation (RPA)",
    description:
      "Our RPA services automate repetitive tasks, helping your team save time and focus on high-value work. Bots integrate smoothly into your systems, boosting efficiency without disrupting operations.",
    icon: Setting,
  },
  {
    title: "Edge Computing & Cloud Technologies",
    description:
      "We combine edge computing and cloud technologies to ensure fast, reliable app performance with real-time processing, low latency, and scalable infrastructure—so your business runs smoothly anywhere, anytime.",
    icon: CloudAdd,
  },
];


const accordionItems = [
  {
    title: "Smarter Decisions with AI",
    description:
      "We use Artificial Intelligence to help you automate processes, analyze data faster, and make decisions with confidence.",
  },
  {
    title: "Machine Learning That Learns Your Business",
    description:
      "Our custom machine learning models adapt to your unique data— so your systems keep improving over time.",
  },
  {
    title: "Blockchain You Can Trust",
    description:
      "With secure and scalable Blockchain solutions, we build systems that are transparent, tamper-proof, and ready for the future.",
  },
  {
    title: "Building on Web3 for the Next Digital Era",
    description:
      "Whether it's DeFi, NFTs, or DAOs, our Web3 development helps you create decentralized platforms with real-world value.",
  },
  {
    title: "Real-Time Control with IoT",
    description:
      "We connect devices and build smart IoT solutions that let you monitor, manage, and optimize operations in real time.",
  },
  {
    title: "Immersive AR/VR Experiences",
    description:
      "From virtual stores to hands-on training, we design AR and VR experiences that make your brand more interactive and memorable.",
  },
  {
    title: "Simplify Workflows with RPA",
    description:
      "Using Robotic Process Automation, we automate routine tasks so your team can focus on high-value work.",
  },
  {
    title: "Faster, Smarter Tech with Edge & Cloud",
    description:
      "We combine edge computing and cloud technologies to give you faster data processing and scalable infrastructure—wherever you need it.",
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
  viewport: { once: true, amount: 0.2 },
};


const CompEmergingTechnology = () => {
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
      <Metadata
        title="Emerging Technology Solutions – Future-Ready by USS"
        description="Unlock innovation with USS. Explore AI, Blockchain, IoT, AR/VR, and more—cutting-edge tech tailored to modern business challenges."
      />

      {/* mobile-app-banner */}
      <motion.section {...fadeInUp}>
        <Box
          className="healthcare-banner-section"
          sx={{ pb: { xs: 3, md: 4 } }}
        >
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Box className="heading-content heading-content-spacing">
                  <Typography variant="h1" sx={{ mb: 3, color: "#f28c38" }}>
                    Power Your Future with Emerging Tech Solutions
                  </Typography>
                  <Typography variant="h6" paragraph>
                    Let me know if you want alternatives focused on specific
                    technologies like AI, IoT, or Blockchain.
                  </Typography>
                  <Link
                    href="/contactus"
                    variant="contained"
                    className="main-primary-btn"
                  >
                    Let's Innovate
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Image
            src={HalfBlue}
            alt="shape"
            className="half-blue-shape"
          />
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

      {/* Swiper Logo Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ pt: { xs: 3, md: 4, lg: 5 } }}>
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
                Our Cutting -{" "}
                <span className="primary-color">
                  Edge Tech Se
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
                    <Typography
                      variant="body2"
                      className="solution-description"
                    >
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
                Emerging Technology{" "}
                <span className="primary-color">
                  Solutions That Drive Real I
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
              <Typography variant="h6" paragraph sx={{ mb: 3 }}>
                Explore AI, Blockchain, IoT, AR/VR, RPA, and Cloud solutions
                built for modern business challenges.
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
                        <Collapse
                          in={isOpen}
                          className="accordion-desc-wrapper"
                        >
                          <Typography
                            variant="body1"
                            className="accordion-desc"
                          >
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
                        <Collapse
                          in={isOpen}
                          className="accordion-desc-wrapper"
                        >
                          <Typography
                            variant="body1"
                            className="accordion-desc"
                          >
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
                  Start Your Innovation Journey Today
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
                      <Typography
                        variant="body2"
                        className="impact-description"
                      >
                        Fast, iterative delivery with continuous feedback to
                        keep your project on track and aligned with your vision.
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
                      <Typography
                        variant="body2"
                        className="impact-description"
                      >
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
                      <Typography
                        variant="body2"
                        className="impact-description"
                      >
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
                      <Typography
                        variant="body2"
                        className="impact-description"
                      >
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
                      <Typography
                        variant="body2"
                        className="impact-description"
                      >
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
                      <Typography
                        variant="body2"
                        className="impact-description"
                      >
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
                Embrace the Future? Let'
                <span className="span-text">
                  s Talk.
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

export default CompEmergingTechnology;
