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

import WebDesignBG from "@/web-design-bg.webp";


import PuzzlePice from "@/puzzle-pice.svg?url";
import Monitor from "@/monitor.svg?url";
import Setting3 from "@/setting-3.svg?url";
import DocumentText from "@/document-text.svg?url";
import CodeCircle from "@/code-circle.svg?url";
import PenTool2 from "@/pen-tool-2.svg?url";

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
    title: "Full Stack Development",
    description:
      "We offer full-stack development—from front-end to back-end—so you don't need multiple teams. Whether it's a new build or an upgrade, our experts deliver seamless, scalable solutions.",
    icon: CodeCircle,
  },
  {
    title: "Enterprise Web Application",
    description: (
      <>
        Our <Link href="/solutions/enterprise-software-development" className="text-600 secondary-color">enterprise web application services</Link> deliver secure, reliable solutions built to handle complex business needs. We tailor every application to fit your unique workflows and scale as your business grows.,
      </>
    ),
    icon: Monitor,
  },
  {
    title: "Progressive Web App Development ",
    description:
      "We build fast, mobile-friendly PWAs that work offline and feel like native apps—no separate builds needed. Enjoy seamless performance and better user engagement on any device.",
    icon: Setting3,
  },
  {
    title: "Content Management Systems (CMS)",
    description:
      "Our CMS solutions make content management easy—no coding required. We tailor it to your workflow so your team can update and publish quickly.",
    icon: DocumentText,
  },
  {
    title: "UI/UX Modernization",
    description:
      "We modernize outdated UI/UX with sleek design and better usability—boosting user experience, engagement, and keeping your platform competitive.",
    icon: PenTool2,
  },
  {
    title: "Integration, Upgradation & Migration",
    description:
      "Stay current with seamless technology integration, system upgrades, and secure data migrations—stress-free and reliable. We help your business adapt quickly and efficiently to evolving tech demands.",
    icon: PuzzlePice,
  },
];


const accordionItems = [
  {
    title: "Custom Web Design Solutions",
    description:
      "We deliver custom web design solutions tailored to your unique business—no templates, just your brand's true voice.",
  },
  {
    title: "Responsive Website Development",
    description:
      "Today's users switch devices instantly. With our responsive website development, your site looks great and works perfectly on every screen—no glitches, just smooth experiences.",
  },
  {
    title: "Front-End & Back-End Development",
    description:
      "Great websites work as well as they look. With our front-end and back-end development services, we create intuitive interfaces and powerful, secure systems that work seamlessly together.",
  },
  {
    title: "UI/UX Design & Strategy",
    description: (
      <>
        Good design feels effortless. <Link href="/how-we-help/graphics-and-ui-ux-design" className="text-600"> Our UI/UX design services </Link> create clear, intuitive experiences that turn clicks into action—beautiful and effective.
      </>
    ),
  },
  {
    title: "CMS Integration",
    description:
      "Don't rely on developers for every update. Our CMS development and integration services give you full control—whether WordPress, Webflow, or a custom platform.",
  },
  {
    title: "eCommerce Web Development",
    description:
      "Selling online? Our eCommerce web development services deliver secure, high-performance stores with smooth checkouts—customized for Shopify, WooCommerce, or your unique needs.",
  },
  {
    title: "Website Speed & Performance Optimization",
    description:
      "Nobody likes slow sites—not users or search engines. Our speed optimization cleans code, compresses media, and ensures fast loading for better SEO and happier visitors.",
  },
  {
    title: "Website Maintenance & Support",
    description:
      "A great website evolves. Our ongoing maintenance keeps it updated, secure, and running smoothly—bugs, updates, and improvements handled.",
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


const CompWebDesignDevelopment = () => {
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
        title="Web Design & Development Services – USS"
        description="Build stunning, high-performance websites with USS. We design and develop user-friendly, responsive, and SEO-optimized sites that drive real results."
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
                    Custom Web Design. Scalable, High-Impact Development
                  </Typography>
                  <Typography variant="h6" paragraph>
                    We craft responsive websites with intuitive UI/UX and fast,
                    high-performing code to grow your brand.
                  </Typography>
                  <Link href="/contactus" variant="contained" className="main-primary-btn">
                    Launch Your New Site Today
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
                            {startCount ? <CountUp end={95} duration={3} /> : 0}%
                          </Typography>
                          <Typography variant="body2" color="white" mt={1}>
                            On-Time Project Delivery
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
                            {startCount ? <CountUp end={98} duration={3} /> : 0}%
                          </Typography>
                          <Typography variant="body2" color="white" mt={1}>
                            Bug-Free Launch Rate
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
                            Client Satisfaction Score
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
          <Grid container spacing={2} justifyContent="center">
            <Grid size={12}>
              <Image
                src={WebDesignBG}
                alt="Custom Web Design"
                className="career-banner"
              />
            </Grid>
          </Grid>
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
                Custom Web{" "}
                <span className="primary-color">
                  Design Fea
                  <span className="span-text">
                    tures
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
                Custom Web{" "}
                <span className="primary-color">
                  Design Sol
                  <span className="span-text">
                    ultions
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
              <Typography variant="h6" paragraph sx={{ mb: 3 }}>
                Tailored designs that reflect your brand, engage users, and drive
                real results.
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
                  Start Building Your Custom Website with Us Today
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
                Start Your Web Project? Let'{" "}
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

export default CompWebDesignDevelopment;
