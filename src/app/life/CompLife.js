"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from "react-countup";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";


import PerksIcon1 from "@/briefcase-icon.svg?url";
import PerksIcon2 from "@/healthy-work-life-integration-icon.svg?url";
import PerksIcon3 from "@/career-advancement-opportunities-icon.svg?url";
import PerksIcon4 from "@/leave-encashment-policy-icon.svg?url";
import PerksIcon5 from "@/cultural-festive-events-icon.svg?url";
import PerksIcon6 from "@/modern-interactive-office-design-icon.svg?url";

import ActiveBG from "@/trust-uss-vector.svg?url";

import CursorImg from "@/cursor-img.webp";


import LifeImage from "@/life-image-main.webp";
import callIcon from "@/call-icon.svg?url";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion, AnimatePresence } from "framer-motion";
import Ussjourneysection from "~/ussjourney/Ussjourneysection";
import Link from "next/link";
import CircleType from "circletype";
import Metadata from "~/meta/Metadata";

const trustBoxes = [
  {
    title: "Dynamic Work Environment",
    description:
      "Thrive in a lively, team-driven atmosphere that encourages creativity and open collaboration.",
  },
  {
    title: "Healthy Work-Life Integration",
    description:
      "Flexible work hours and hybrid options help you maintain personal and professional harmony.",
  },
  {
    title: "Career Advancement Opportunities",
    description:
      "Structured growth paths, mentorship programs, and internal mobility to elevate your career.",
  },
  {
    title: "Leave Encashment Policy",
    description:
      "Unused paid leaves can be converted into additional earnings — because your time is valuable.",
  },
  {
    title: "Cultural & Festive Events",
    description:
      "Enjoy vibrant celebrations, themed days, and cultural fests that bring everyone together.",
  },
  {
    title: "Modern & Interactive Office Design",
    description:
      "Work in a thoughtfully designed space with breakout zones, collaboration hubs, and chill corners.",
  },

];

const imageList = [
  {
    title: "Patient Management Portal",
    sub: "appointments, records, and patient messages — finally in one place, stress-free.",
    image: "ux-research",
    src: CursorImg,
  },
  {
    title: "Online/Offline Pharmacy",
    sub: "Prescriptions delivered or picked up — fast, secure, and easy for everyone.",
    image: "agile-development",
    src: CursorImg,
  },
  {
    title: "Prescription Assistance Portal(PAP)",
    sub: "Create and manage accurate prescriptions in seconds — no errors, no delays.",
    image: "brand-driven-ux-design",
    src: CursorImg,
  },
  {
    title: "Medical Billing",
    sub: "Simplify claims and automate billing so your team can breathe easy.",
    image: "brand-driven-ux-design",
    src: CursorImg,
  },
  {
    title: "EHR/EMR Development",
    sub: "Doctor-friendly EHRs that are fast, secure, and built for real-time care.",
    image: "brand-driven-ux-design",
    src: CursorImg,
  },
  {
    title: "Hospital Management",
    sub: "One system to run your entire hospital — smooth, smart, and connected.",
    image: "brand-driven-ux-design",
    src: CursorImg,
  },
  {
    title: "Compliance Software",
    sub: "Stay fully compliant and audit-ready — with your data always protected.",
    image: "brand-driven-ux-design",
    src: CursorImg,
  },
];

const counterData = [
  { value: 12, label: "Years of Experience" },
  { value: 35, label: "Happy Clients" },
  { value: 500, label: "Successful Projects" },
  { value: 15, label: "Spread Services" },
];

const tripImages = {
  potluck: [
    "/images/potluckimg1.webp",
    "/images/potluckimg2.webp",
    "/images/potluckimg3.webp",
    "/images/potluckimg4.webp",
  ],
  diwali: [
    "/images/diwaliimg1.webp",
    "/images/diwaliimg2.webp",
    "/images/diwaliimg3.webp",
  ],
  delhitrip: [
    "/images/delhitripimg1.webp",
    "/images/delhitripimg2.webp",
    "/images/delhitripimg3.webp",
    "/images/delhitripimg4.webp",
    "/images/delhitripimg5.webp",
  ],
  funactivity: [
    "/images/funactivityimg1.webp",
    // "/images/funactivityimg2.webp",
    "/images/funactivityimg3.webp",
  ],
  udaipurtrip: [
    "/images/udaipurtripimg1.webp",
    "/images/udaipurtripimg2.webp",
    "/images/udaipurtripimg3.webp",
    "/images/udaipurtripimg4.webp",
  ],
  openingdoors: [
    "/images/openingdoors1.webp",
    "/images/openingdoors2.webp",
    "/images/openingdoors3.webp",
    "/images/openingdoors4.webp",
    "/images/openingdoors5.webp",
    "/images/openingdoors6.webp",
    "/images/openingdoors7.webp",
  ],
};

// Custom titles for each trip group
const tripTitles = {
  potluck: "Savor & Share: Potluck Moments",
  diwali: "Diwali Dhamaka: Fun & Games",
  delhitrip: "Delhi Diaries: Adventure Awaits",
  funactivity: "Play, Laugh, Celebrate!",
  udaipurtrip: "Jaipur Diaries: Adventure Awaits", 
  openingdoors: "Opening Doors to Success This Diwali",
};

const fadeInUp = {
  initial: { opacity: 0, y: 45 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  viewport: { once: true, amount: 0.2 },
};

const TOTAL_TABS = 4;


const CompLife = (options = {}) => {
  // const [activeContent, setActiveContent] = useState(null);
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
      }, 100);
    }
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.7 });
  const [startCount, setStartCount] = useState(false);

  // const handleClick = (title) => {
  //     const content = trustBoxes.find((item) => item.title === title);
  //     if (content) {
  //         setActiveContent(content);
  //     }
  // };

  const [activeCaseStudyTab, setActiveCaseStudyTab] = useState(0);
  const sectionRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //journey section
  const [journeyIndex, setJourneyIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const journeySwiperRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTabChange = (event, newValue) => {
    setJourneyIndex(newValue);
    if (journeySwiperRef.current && journeySwiperRef.current.swiper) {
      journeySwiperRef.current.swiper.slideTo(newValue);
    }
  };

  const [root, setRoot] = useState(null);
  const swiperRef = useRef(null);

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

  //heading animation
  useEffect(() => {
    const headings = document.querySelectorAll(".animate-heading");

    headings.forEach((heading) => {
      // Wrap text in span.letter
      const wrapTextWithSpans = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const fragment = document.createDocumentFragment();
          node.textContent.split("").forEach((char) => {
            const span = document.createElement("span");
            span.className = "letter";
            span.textContent = char === " " ? "\u00A0" : char;
            fragment.appendChild(span);
          });
          return fragment;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const clone = node.cloneNode(false);
          node.childNodes.forEach((child) => {
            clone.appendChild(wrapTextWithSpans(child));
          });
          return clone;
        } else {
          return node.cloneNode(true);
        }
      };

      // Apply spans
      const newContent = wrapTextWithSpans(heading);
      heading.innerHTML = "";
      heading.appendChild(newContent);

      const letters = heading.querySelectorAll(".letter");

      // Observe with IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              letters.forEach((letter, index) => {
                letter.classList.add("visible");
                letter.style.transitionDelay = `${index * 20}ms`;
              });
            } else {
              letters.forEach((letter, index) => {
                letter.classList.remove("visible");
                letter.style.transitionDelay = `${(letters.length - index) * 15
                  }ms`;
              });
            }
          });
        },
        {
          root: null,
          threshold: 0,
          rootMargin: "0px 0px -250px 0px", // 250px before bottom
        }
      );

      observer.observe(heading);

      // Add scroll listener to stop animation when top <= 0
      const handleScroll = () => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 0) {
          letters.forEach((letter) => {
            letter.classList.add("visible");
            letter.style.transitionDelay = "0ms";
          });
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup
      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    });
  }, []);

  //particles
  const particlesInit = async (engine) => {
    await loadSlim(engine); // or loadFull(engine)
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  //Milestone counter
  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  //   image curser
  useEffect(() => {
    const cursorWrapper = document.querySelector(".celebrating-custom-cursor");
    const hoverImages = document.querySelectorAll(".swiper-slide-cursor");

    const moveCursor = (e) => {
      if (cursorWrapper) {
        cursorWrapper.style.left = `${e.clientX}px`;
        cursorWrapper.style.top = `${e.clientY}px`;
      }
    };

    const showCursor = () => {
      if (cursorWrapper) cursorWrapper.style.display = "flex";
      document.addEventListener("mousemove", moveCursor);
    };

    const hideCursor = () => {
      if (cursorWrapper) cursorWrapper.style.display = "none";
      document.removeEventListener("mousemove", moveCursor);
    };

    // Show/hide cursor on hover
    hoverImages.forEach((img) => {
      img.addEventListener("mouseenter", showCursor);
      img.addEventListener("mouseleave", hideCursor);
    });

    // Fancybox open/close hooks
    const onFancyboxOpen = () => hideCursor();
    const onFancyboxClose = () => {
      // Add a small delay in case mouse is still inside slide
      setTimeout(() => {
        const hovered = Array.from(hoverImages).some((img) =>
          img.matches(":hover")
        );
        if (hovered) showCursor();
      }, 100);
    };

    // Add Fancybox event listeners
    document.addEventListener("fancybox:open", onFancyboxOpen);
    document.addEventListener("fancybox:close", onFancyboxClose);

    // Cleanup
    return () => {
      hoverImages.forEach((img) => {
        img.removeEventListener("mouseenter", showCursor);
        img.removeEventListener("mouseleave", hideCursor);
      });
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("fancybox:open", onFancyboxOpen);
      document.removeEventListener("fancybox:close", onFancyboxClose);
    };
  }, []);

  // Optional: Initialize manually (once is enough)
  useEffect(() => {
    if (!swiperRef.current) return;

    // Wait for Swiper to render and then bind
    const timeout = setTimeout(() => {
      Fancybox.bind("[data-fancybox]", {
        Toolbar: {
          display: [
            "zoom",
            "slideshow",
            "fullscreen",
            "download",
            "thumbs",
            "close",
          ],
        },
        Thumbs: {
          autoStart: true,
        },
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      Fancybox.unbind("[data-fancybox]");
    };
  }, [tripImages]);

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

  return (
    <>
      {/* <Metadata
        title="Life at USS – Culture, Careers & Team Spirit"
        description="Discover what it's like to work at USS. Explore our vibrant culture, team stories, growth opportunities, and what makes our workplace truly unique."
      /> */}

      {/* healthcare-banner */}
      <motion.section {...fadeIn}>
        <Box className="top-banner-section-bg healthcare-banner-section">
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content healthcare-banner-content">
              <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                Culture = How We Show Up Every Day
              </Typography>
              <Typography variant="h6" paragraph sx={{ mb: 3 }}>
                It's in the feedback loops, the Friday fun, and the freedom to
                speak up.
              </Typography>
            </Box>
            <Box className="life-image-main margin-top-50">
              <Image src={LifeImage} alt="LifeImage" priority fetchPriority="high" />
            </Box>
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

      {/* Milestone Section */}
      <motion.section {...fadeInUp}>
        <Box
          className="milestone-section"
          ref={ref}
          py={6}
          bgcolor="#000000"
          position="relative"
          overflow="hidden"
          minHeight="315px"
        >
          {/* Particles restricted to section only */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fullScreen: {
                enable: false,
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: { enable: true, mode: "push" },
                  onHover: { enable: true, mode: "repulse" },
                  resize: true,
                },
                modes: {
                  push: { quantity: 4 },
                  repulse: { distance: 200, duration: 0.4 },
                },
              },
              particles: {
                color: { value: "#03B0EF" },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.1,
                  width: 1,
                },
                collisions: { enable: true },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "bounce" },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: { enable: true, area: 800 },
                  value: 60,
                },
                opacity: { value: 0.2 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 4 } },
              },
              detectRetina: true,
            }}
          />

          {/* Content container above particles */}
          <Container
            className="custom-container"
            maxWidth="lg"
            sx={{ position: "relative", zIndex: 1 }}
          >
            <Box className="heading-content" pb={4}>
              <Typography
                variant="h2"
                align="center"
                sx={{ my: 2, color: "white", fontWeight: 700 }}
              >
                Milestone{" "}
                <span className="primary-color">
                  That Def
                  <span className="span-text">
                    ine Us
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>

            <Grid
              container
              rowGap={{ xs: 5, sm: 0 }}
              justifyContent="center"
              alignItems="center"
            >
              {counterData.map((item, index) => (
                <Grid
                  size={{ xs: 6, sm: 3 }}
                  key={index}
                  className={`counter-box ${index % 2 === 0 ? "even" : "odd"}`}
                >
                  <Typography variant="h4" fontWeight={600} color="white">
                    {startCount ? <CountUp end={item.value} duration={3} /> : 0}
                    +
                  </Typography>

                  <Typography variant="body2" color="white" mt={1}>
                    {item.label}
                  </Typography>

                  {/* Vertical Divider */}
                  {index !== counterData.length - 1 && (
                    <Divider
                      orientation="vertical"
                      className="counter-vertical-divider"
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </motion.section>

      {/* Journey Section */}
      <Ussjourneysection />

      {/* trust-uss */}
      <motion.section {...fadeInUp}>
        <Box className="trust-uss-section" sx={{ py: 4 }}>
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content">
              <Typography variant="h2" sx={{ mb: 5, fontWeight: 700 }}>
                Perks of{" "}
                <span className="primary-color">
                  {" "}
                  being{" "}
                  <span className="span-text">
                    {" "}
                    a USS
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
                  onMouseEnter={() => handleHover("Dynamic Work Environment")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("Dynamic Work Environment")}
                >
                  <Image src={PerksIcon1} alt="PerksIcon1" />
                  <Typography variant="h6">Dynamic Work Environment</Typography>
                </Box>
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-a"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-b"
                />
              </Grid>

              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                className="trust-uss-box-wrapper bb-0 br-0"
              >
                <Box
                  className="trust-uss-box"
                  onMouseEnter={() => handleHover("Healthy Work-Life Integration")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("Healthy Work-Life Integration")}
                >
                  <Image src={PerksIcon2} alt="PerksIcon2" />
                  <Typography variant="h6">Healthy Work-Life Integration</Typography>
                </Box>
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-c"
                />
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-d"
                />
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-md-d"
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
                />
                <Box
                  ref={hoverBoxRef}
                  className={`hover-content-box ${isVisible ? "visible" : ""}`}
                >
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
                  className="corner-star star-e"
                />
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-f"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-md-f"
                />
              </Grid>

              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                className="trust-uss-box-wrapper br-0 bl-0"
              >
                <Box
                  className="trust-uss-box"
                  onMouseEnter={() => handleHover("Career Advancement Opportunities")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("Career Advancement Opportunities")}
                >
                  <Image src={PerksIcon3} alt="PerksIcon3" />
                  <Typography variant="h6">Career Advancement Opportunities</Typography>
                </Box>
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-g"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-h"
                />
              </Grid>

              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                className="trust-uss-box-wrapper br-0"
              >
                <Box
                  className="trust-uss-box"
                  onMouseEnter={() => handleHover("Leave Encashment Policy")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("Leave Encashment Policy")}
                >
                  <Image src={PerksIcon4} alt="PerksIcon4" />
                  <Typography variant="h6">Leave Encashment Policy</Typography>
                </Box>
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-i"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-md-i"
                />
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-j"
                />
              </Grid>

              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                className="trust-uss-box-wrapper br-0 bl-md-0"
              >
                <Box
                  className="trust-uss-box"
                  onMouseEnter={() => handleHover("Cultural & Festive Events")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("Cultural & Festive Events")}
                >
                  <Image src={PerksIcon5} alt="PerksIcon5" />
                  <Typography variant="h6">Cultural & Festive Events</Typography>
                </Box>
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-k"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-l"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-md-l"
                />
              </Grid>

              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                className="trust-uss-box-wrapper br-0"
              >
                <Box
                  className="trust-uss-box"
                  onMouseEnter={() => handleHover("Modern & Interactive Office Design")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("Modern & Interactive Office Design")}
                >
                  <Image src={PerksIcon6} alt="PerksIcon6" />
                  <Typography variant="h6">Modern & Interactive Office Design</Typography>
                </Box>
                <Image
                  src={OrangeStar}
                  alt="shape"
                  className="corner-star star-m"
                />
                <Image
                  src={BlueStar}
                  alt="shape"
                  className="corner-star star-n"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.section>

      {/* Celebrating Every Step Together */}
      <Box className="case-studies-section" sx={{ pt: 4 }}>
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography variant="h2" sx={{ mb: 5, fontWeight: 700 }}>
              Celebrating{" "}
              <span className="primary-color">
                {" "}
                Every{" "}
                <span className="span-text">
                  {" "}
                  Step Together
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

        <Box className="celebrating-every-step-slider-main" ref={swiperRef}>
          <Swiper
            slidesPerView={2.2}
            centeredSlides={true}
            loop={true}
            spaceBetween={20}
            updateOnWindowResize={true}
            observer={true}
            observeParents={true}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              480: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.2,
              },
            }}
            className="mySwiper celebrating-every-step-slider"
          >
            {Object.entries(tripImages).map(([tripKey, images], index) => (
              <SwiperSlide className="swiper-slide-cursor" key={index}>
                <Box className="image-wrapper">
                  {/* Main Image (first one clickable) */}
                  <a data-fancybox={`${tripKey}`} href={images[0]}>
                    <Image
                      src={images[0]}
                      alt={`${tripKey} trip`}
                      width={800} // increase dimensions if needed
                      height={600}
                      className="image-wrapper-cursor"
                      unoptimized={true} // disables automatic optimization
                      style={{
                        width: "100%",
                        height: "400px",
                        borderRadius: "12px",
                        objectFit: "cover", // or 'contain' depending on your need
                      }}
                    />
                  </a>
                  {/* Overlay for better text contrast */}
                  <span className="image-overlay" />

                  {/* Hidden images in group */}
                  {images.slice(1).map((img, i) => (
                    <a
                      key={i}
                      data-fancybox={`${tripKey}`}
                      href={img}
                      style={{ display: "none" }}
                    />
                  ))}

                  <Typography variant="h5" align="center" mt={1}>
                    {tripTitles[tripKey] || `Trip to ${tripKey.charAt(0).toUpperCase() + tripKey.slice(1)}`}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box className="celebrating-custom-cursor">View</Box>
      </Box>

      {/* call-to-action Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ mb: 6 }} className="call-to-action-wrapper">
          <Container className="custom-container" maxWidth="lg">
            <Box
              sx={{ p: 4, backgroundColor: "#222222", borderRadius: 3 }}
              className="call-to-action-innerbox"
            >
              <Box className="heading-content">
                <Typography variant="h2" sx={{ my: 2, color: "white" }}>
                  Let's Build, Travel, and Celebrate <br></br> Together
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
    </>
  );
};

export default CompLife;
