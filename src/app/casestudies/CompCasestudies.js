"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import CountUp from "react-countup";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Mousewheel, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import CursorImg from "@/cursor-img.webp";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import CircleType from "circletype";

import RxValetLogo from "@/companylogo/rxvalet.svg?url";
import AdvancePharmacyLogo from "@/companylogo/advance-pharmacy.svg?url";
import CasestudiesProject1 from "@/casestudies-project1.webp";
import CasestudiesProject2 from "@/casestudies-project2.webp";
import CasestudiesProject3 from "@/casestudies-project3.webp";
import CasestudiesProject4 from "@/casestudies-project4.webp";
import CasestudiesProject5 from "@/casestudies-project5.webp";
import CasestudiesProject6 from "@/casestudies-project6.webp";
import TestimonialBobthompson from "@/bobthompson.webp";
import TestimonialGreg from "@/greg.webp";
import TestimonialTinarockwell from "@/tinarockwell.webp";
import ShieldLogo from "@/companylogo/icon-shield-review.svg?url";
import TestimonialShape1 from "@/testimonial-shape1.svg?url";
import TestimonialShape2 from "@/testimonial-shape2.svg?url";
import ArrowBackIcon from "@/right-arrow.svg?url";
import ArrowForwardIcon from "@/left-arrow.svg?url";
import LogoDribbble from "@/logo-dribbble.svg?url";
import ImgDribbble from "@/img-dribble.svg?url";
import LogoBehance from "@/logo-behance.svg?url";
import ImgBehance from "@/img-behance.svg?url";
import LogoLinkedin from "@/logo-linkedin.svg?url";
import ImgLinkedin from "@/img-linkin.svg?url";
import LogoInstagram from "@/logo-instagram.svg?url";
import ImgInstagram from "@/img-instagram.svg?url";
import ArrowUpRightBlack from "@/arrow-up-right-black.svg?url";
import callIcon from "@/call-icon.svg?url";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";

import CEO2 from "@/ceo2.webp";
import CEO3 from "@/ceo3.webp";
import Metadata from "~/meta/Metadata";
import { motion } from "framer-motion";
import Companylogos from "~/companylogoes/Companylogos";
import Contactcareer from "~/contact/Contactcareer";

const trustBoxes = [
  {
    title: "Doctor Centric",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Secure Privacy",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Seamless Integration",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Custom Solutions",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Ongoing Support",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Clinic Trusted",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
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
  delhi: [
    "/images/trip-image1.webp",
    "/images/trip-image2.webp",
    "/images/trip-image1.webp",
    "/images/trip-image2.webp",
    "/images/trip-image1.webp",
    "/images/trip-image2.webp",
    "/images/trip-image1.webp",
    "/images/trip-image2.webp",
  ],
  goa: [
    "/images/trip-image2.webp",
    "/images/trip-image2.webp",
    "/images/trip-image1.webp",
    "/images/trip-image2.webp",
  ],
  jaipur: ["/images/trip-image1.webp", "/images/trip-image2.webp"],
  kerala: [
    "/images/trip-image2.webp",
    "/images/trip-image1.webp",
    "/images/trip-image1.webp",
    "/images/trip-image2.webp",
  ],
  manali: ["/images/trip-image1.webp"],
};

const TOTAL_TABS = 4;

const contactInfoMap = {
  IN: {
    email: "sales@universalstreamsolution.com",
    visitUrl: "https://goo.gl/maps/india-google-map-link", // replace with actual URL
    call: "+91 9638225579",
  },
  US: {
    email: "infous@universalstreamsolution.com",
    visitUrl: "https://goo.gl/maps/usa-google-map-link", // replace with actual URL
    call: "+1 (678) 720-4961",
  },
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
  viewport: { once: true, amount: 0.2 }
};


const CompCasestudies = (options = {}) => {
  // const [activeContent, setActiveContent] = useState(null);
  const [hoverContent, setHoverContent] = useState(null);

  const handleHover = (title) => {
    const content = trustBoxes.find((item) => item.title === title);
    if (content && content.title !== hoverContent?.title) {
      setHoverContent(content);
    }
  };

  const handleMouseLeave = () => {
    setHoverContent(null);
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
  const [journeyIndex, setjourneyIndex] = useState(0);

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

  // video play push
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // play only when 50% or more is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

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

  const testimonials = [
    {
      logo: AdvancePharmacyLogo,
      feedback:
        "“Jignesh really helped us grow — we started seeing way more sign-ups and orders once the new system was live. The best part was how easy he was to work with… very professional but also friendly, so the whole process felt effortless.”",
      name: "Bob Thompson",
      role: "Founder",
      photo: TestimonialBobthompson,
    },
    {
      logo: RxValetLogo,
      feedback:
        "“What I appreciated most about the Universal Stream Solution team was how responsive they were. Anytime we needed a tweak or had a question, they handled it quickly. The final product turned out solid, reliable, and exactly what we wanted.”",
      name: "Greg.",
      role: "Founder",
      photo: TestimonialGreg,
    },
    {
      logo: ShieldLogo,
      feedback:
        "“Working with the team felt like having an in-house partner. They took the time to understand our business, delivered on every promise, and made sure the solution was built around our needs, not just a template.”",
      name: "Tina Rockwell",
      role: "Founder",
      photo: TestimonialTinarockwell,
    },
  ];

  // card animation
  // useEffect(() => {
  //   const cards = document.querySelectorAll(".design-we-share-main");
  //   const offsetTrigger = 200;

  //   const animateCards = () => {
  //     const windowHeight = window.innerHeight;

  //     cards.forEach((card, index) => {
  //       const rect = card.getBoundingClientRect();
  //       const cardTop = rect.top;

  //       const start = windowHeight - offsetTrigger;
  //       const end = 200; // Card finishes animation at 200px from top

  //       const scrollProgress = (start - cardTop) / (start - end);
  //       const clamped = Math.min(Math.max(scrollProgress, 0), 1);

  //       const maxTranslate = 480;
  //       const moveX =
  //         index % 2 === 0
  //           ? -maxTranslate + maxTranslate * clamped
  //           : maxTranslate - maxTranslate * clamped;

  //       const rotate = (index % 2 === 0 ? -15 : 15) * (1 - clamped);
  //       const opacity = clamped;

  //       card.style.transform = `translateX(${moveX}px) rotateZ(${rotate}deg)`;
  //       card.style.opacity = opacity;
  //     });
  //   };

  //   window.addEventListener("scroll", animateCards);
  //   window.addEventListener("load", animateCards);

  //   return () => {
  //     window.removeEventListener("scroll", animateCards);
  //     window.removeEventListener("load", animateCards);
  //   };
  // }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".design-we-share-main");
    const offsetTrigger = 200;

    const animateCards = () => {
      const windowHeight = window.innerHeight;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardTop = rect.top;

        const start = windowHeight - offsetTrigger;
        const end = 100; // extend scroll range for smoother delay

        const scrollProgress = (start - cardTop) / (start - end);
        const clamped = Math.min(Math.max(scrollProgress, 0), 1);

        const delay = index * 0.2; // slightly reduce delay step
        const delayBuffer = 0.1; // ✅ add a buffer to allow smoother entry

        // Avoid division by zero
        const available = 1 - delay - delayBuffer;
        let delayedProgress = available > 0 ? (clamped - delay) / available : 0;

        delayedProgress = Math.min(Math.max(delayedProgress, 0), 1); // clamp again

        const maxTranslate = 480;
        const moveX =
          index % 2 === 0
            ? -maxTranslate + maxTranslate * delayedProgress
            : maxTranslate - maxTranslate * delayedProgress;

        const rotate = (index % 2 === 0 ? -15 : 15) * (1 - delayedProgress);
        const opacity = delayedProgress;

        card.style.transform = `translateX(${moveX}px) rotateZ(${rotate}deg)`;
        card.style.opacity = opacity;
      });
    };

    window.addEventListener("scroll", animateCards);
    window.addEventListener("load", animateCards);

    return () => {
      window.removeEventListener("scroll", animateCards);
      window.removeEventListener("load", animateCards);
    };
  }, []);

  return (
    <>

      {/* <Metadata
        title="Custom Software Case Studies | USS Projects "
        description="Explore real-world projects where USS delivered scalable, smart IT solutions that drive business growth. "
      /> */}

      {/* casestudies-banner-section */}
      <motion.section {...fadeIn}>
        <Box
          className="top-banner-section-bg casestudies-banner-section"
          sx={{ pb: 2 }}
        >
          <Container className="custom-container" maxWidth="lg">
            {/* Your existing header content */}
            <Grid container spacing={2} justifyContent="center">
              <Grid size={8}>
                <Box className="heading-content heading-content-spacing">
                  <Typography variant="h1" sx={{ color: "#f28c38", mb: 5 }}>
                    Results You Can Measure. Stories You Can Trust.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            {/* <Grid container spacing={2} justifyContent="center">
              <Grid size={12}>
                <Box className="casestudies-video-wrapper">
                  <video
                    ref={videoRef}
                    poster="/images/casestudies-video.webp"
                    muted
                    loop
                    playsInline
                    style={{ width: "100%", borderRadius: "12px" }}
                  >
                    <source
                      src="/images/casestudies-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </Box>
              </Grid>
            </Grid> */}
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

      {/*Inside the Projects of Company */}
      <Box sx={{ py: 4 }} className="heartbeat-section">
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography
              variant="h2"
              align="left"
              sx={{ my: 2, fontWeight: 700 }}
            >
              Inside the{" "}
              <span className="primary-color">
                Projects That Made a{" "}
                <span className="span-text">
                  Difference
                  <div className="line-container">
                    <div className="line-wrapper"></div>
                    <div className="line"></div>
                    <div className="moving-box"></div>
                  </div>
                </span>
              </span>
            </Typography>
            <Typography
              variant="h6"
              align="left"
              sx={{ mb: 3 }}
              style={{ color: "#4E4E4E" }}
            >
              Explore how we deliver, scale, and succeed with our clients.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
              <Box className="projects-list-main">
                <Box className="project-list-wrapper">
                  <Box className="project-image">
                    <Link href="/casestudies/rxvalet-case-study">
                      <Image
                        src={CasestudiesProject1}
                        className="project-img"
                        alt="Detailed about Rxvalet Project"
                      />
                    </Link>
                  </Box>
                  <Box className="project-details">
                    <Typography variant="h5">RxValet</Typography>
                    <Typography variant="body1" sx={{ color: "#333", mt: 1 }}>
                      Tech Stack:{" "}
                      <Typography variant="span">Android</Typography>{" "}
                      <Typography variant="span">Ios</Typography>{" "}
                      <Typography variant="span">CI</Typography>{" "}
                      <Typography variant="span">php</Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box className="projects-list-main">
                <Box className="project-list-wrapper">
                  <Box className="project-image">
                    <Link href="/casestudies/pb-case-study">
                      <Image
                        src={CasestudiesProject2}
                        className="project-img"
                        alt="Detailed about Prescription Bliss Project"
                      />
                    </Link>
                  </Box>
                  <Box className="project-details">
                    <Typography variant="h5">Prescription Bliss</Typography>
                    <Typography variant="body1" sx={{ color: "#333", mt: 1 }}>
                      Tech Stack:{" "}
                      <Typography variant="span">Next.js</Typography>{" "}
                      <Typography variant="span">React.js</Typography>{" "}
                      <Typography variant="span">Node.js</Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box className="projects-list-main">
                <Box className="project-list-wrapper">
                  <Box className="project-image">
                    <Link href="/casestudies/cosmo-chem-case-study">
                      <Image
                        src={CasestudiesProject3}
                        className="project-img"
                        alt="Detailed About Cosmos Chemistry Project"
                      />
                    </Link>
                  </Box>
                  <Box className="project-details">
                    <Typography variant="h5">Cosmo</Typography>
                    <Typography variant="body1" sx={{ color: "#333", mt: 1 }}>
                      Tech Stack:{" "}
                      <Typography variant="span">Wordpress</Typography>{" "}
                      <Typography variant="span">php</Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* Swiper Logo Section */}
      <Box sx={{ py: 4 }}>
        <Box className="logo-swiper-box-title">
          <Container className="custom-container" maxWidth="lg" sx={{ mb: 4 }}>
            <Typography variant="h1" className="animate-heading">
              <span className="text-line">
                We've Helped{" "}
                <span style={{ color: "#03B0EF" }}>
                  50+ Healthcare and Pharmacy
                </span>
              </span>
              <span className="text-line">
                <span style={{ color: "#03B0EF" }}> Companies</span> to
                Streamline Their Processes
              </span>
              <span className="text-line">with Intelligent IT Solutions.</span>
            </Typography>
          </Container>
        </Box>
        <motion.section {...fadeInUp}>
          <Companylogos />
        </motion.section>
      </Box>

      {/* testimonials Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ py: 4, mt: 5 }} className="testimonial-section-wrapper">
          <Box className="testi-shape1">
            <Image src={TestimonialShape1} alt="Back" width={24} height={24} />
          </Box>
          <Box className="testi-shape2">
            <Image src={TestimonialShape2} alt="Back" width={24} height={24} />
          </Box>

          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content">
              <Typography
                variant="h2"
                align="center"
                sx={{ my: 2, fontWeight: 700 }}
              >
                Our{" "}
                <span className="primary-color">
                  Happy Cl
                  <span className="span-text">
                    ients
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>

            <Box
              sx={{ position: "relative", mt: 4 }}
              className="testimonial-section"
            >
              {/* Left Arrow */}
              <IconButton
                onClick={() => swiperRef.current?.slidePrev()}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  zIndex: 10,
                  transform: "translateY(-50%)",
                }}
              >
                <Image src={ArrowBackIcon} alt="Prev" width={24} height={24} />
              </IconButton>

              {/* Right Arrow */}
              <IconButton
                onClick={() => swiperRef.current?.slideNext()}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  zIndex: 10,
                  transform: "translateY(-50%)",
                }}
              >
                <Image src={ArrowForwardIcon} alt="Next" width={24} height={24} />
              </IconButton>

              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={80}
                slidesPerView={1}
                loop={true}
                className="testimonial-swiper"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Box
                      sx={{
                        bgcolor: "#fff",
                        borderRadius: 3,
                        p: 2,
                      }}
                    >
                      <Grid container spacing={2} alignItems="center">
                        {/* Left Content - 9 columns */}
                        <Grid
                          size={{ xs: 15, sm: 8.3 }}
                          className="testimonial-content"
                        >
                          <Box className="testimonial-content-logo">
                            <Image
                              src={item.logo}
                              alt="Client Logo"
                              width={150}
                              height={40}
                            />
                          </Box>
                          <Typography
                            variant="body1"
                            className="testimonial-content-disc"
                          >
                            {item.feedback}
                          </Typography>
                          <Box>
                            <Typography
                              variant="p"
                              className="testimonial-content-name"
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              className="testimonial-content-role"
                            >
                              {item.role}
                            </Typography>
                          </Box>
                        </Grid>

                        {/* Right Image - 3 columns */}
                        <Grid size={{ xs: 15, sm: 3.7 }}>
                          <Box
                            className="testimonial-image"
                            sx={{
                              borderRadius: 2,
                            }}
                          >
                            <Image
                              src={item.photo}
                              alt={item.name}
                              width={200}
                              height={250}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            <Box className="testimonial-fullscreen-text">
              <Typography variant="h1">Testimonials</Typography>
            </Box>
          </Container>
        </Box>
      </motion.section>

      {/*We Design. We Share. We Inspire */}
      <Box sx={{ py: 4 }} className="heartbeat-section">
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography
              variant="h2"
              align="left"
              sx={{ my: 2, fontWeight: 700 }}
            >
              We Design.{" "}
              <span className="primary-color">
                We Share. We{" "}
                <span className="span-text">
                  Inspire
                  <div className="line-container">
                    <div className="line-wrapper"></div>
                    <div className="line"></div>
                    <div className="moving-box"></div>
                  </div>
                </span>
              </span>
            </Typography>
            <Typography
              variant="h6"
              align="left"
              sx={{ mb: 3 }}
              style={{ color: "#4E4E4E" }}
            >
              Check out our portfolio across the top creative platforms.
            </Typography>
          </Box>

          <Grid container sx={{ py: 5, overflow: "hidden" }} spacing={4}>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box className="design-we-share-main box-dribble">
                <Box className="design-we-share-wrapper">
                  <Box className="design-we-share-image">
                    <Image
                      src={LogoDribbble}
                      className="design-we-share-img"
                      alt="Logo Dribbble"
                    />
                  </Box>
                  <Box className="design-we-share-details">
                    <Typography variant="h5">
                      Quick peeks, bold visuals—explore our latest creative
                      drops now live on Dribbble.
                    </Typography>
                    <Link href="https://dribbble.com/universalstreamsolution" target="_blank" className="btn-bottom-black">
                      Explore More{" "}
                      <Image
                        src={ArrowUpRightBlack}
                        className="arrow-up-right-black-img"
                        alt="arrow up right black"
                      />
                    </Link>
                  </Box>
                </Box>
                <Image
                  src={ImgDribbble}
                  className="design-we-share-shape"
                  alt="Img Dribbble"
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box className="design-we-share-main box-behance">
                <Box className="design-we-share-wrapper">
                  <Box className="design-we-share-image">
                    <Image
                      src={LogoBehance}
                      className="design-we-share-img"
                      alt="Logo Behance"
                    />
                  </Box>
                  <Box className="design-we-share-details">
                    <Typography variant="h5">
                      Deep dives into design—explore bold ideas and finished projects now on Behance.
                    </Typography>
                    <Link href="https://www.behance.net/ussllc" target="_blank" className="btn-bottom-black">
                      Explore More{" "}
                      <Image
                        src={ArrowUpRightBlack}
                        className="arrow-up-right-black-img"
                        alt="arrow up right black"
                      />
                    </Link>
                  </Box>
                </Box>
                <Image
                  src={ImgBehance}
                  className="design-we-share-shape"
                  alt="Img Behance"
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box className="design-we-share-main box-linkedin">
                <Box className="design-we-share-wrapper">
                  <Box className="design-we-share-image">
                    <Image
                      src={LogoLinkedin}
                      className="design-we-share-img"
                      alt="Logo Linkedin"
                    />
                  </Box>
                  <Box className="design-we-share-details">
                    <Typography variant="h5">
                      The professional side of creativity—discover our team, culture, and achievements on LinkedIn.
                    </Typography>
                    <Link href="https://www.linkedin.com/company/universalstreamsolution/posts/?feedView=all" target="_blank" className="btn-bottom-black">
                      Explore More{" "}
                      <Image
                        src={ArrowUpRightBlack}
                        className="arrow-up-right-black-img"
                        alt="arrow up right black"
                      />
                    </Link>
                  </Box>
                </Box>
                <Image
                  src={ImgLinkedin}
                  className="design-we-share-shape"
                  alt="Img Linkedin"
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box className="design-we-share-main box-instagram">
                <Box className="design-we-share-wrapper">
                  <Box className="design-we-share-image">
                    <Image
                      src={LogoInstagram}
                      className="design-we-share-img"
                      alt="Logo Instagram"
                    />
                  </Box>
                  <Box className="design-we-share-details">
                    <Typography variant="h5">
                      Design snapshots, process peeks, and pixel-perfect posts—follow us on Instagram.
                    </Typography>
                    <Link href="https://www.instagram.com/universalstreamsolution/" target="_blank" className="btn-bottom-black">
                      Explore More{" "}
                      <Image
                        src={ArrowUpRightBlack}
                        className="arrow-up-right-black-img"
                        alt="arrow up right black"
                      />
                    </Link>
                  </Box>
                </Box>
                <Image
                  src={ImgInstagram}
                  className="design-we-share-shape"
                  alt="Img Instagram"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* call-to-action Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ mt: 6, mb: 6 }} className="call-to-action-wrapper">
          <Container className="custom-container" maxWidth="lg">
            <Box
              sx={{ p: 4, backgroundColor: "#222222", borderRadius: 3 }}
              className="call-to-action-innerbox"
            >
              <Box className="heading-content">
                <Typography variant="h2" sx={{ my: 2, color: "white" }}>
                  Your Project Could Be Our Next <br></br> Case Study
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

      {/* contact form */}
      <motion.section {...fadeInUp}>
        <Box className="contatct-form-section">
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 12 }}>
                <Box className="heading-content">
                  <Typography
                    variant="h2"
                    align="center"
                    sx={{ mt: 0, mb: 4, fontWeight: 700 }}
                  >
                    Have a{" "}
                    <span className="primary-color">
                      Project in Mind? Let's{" "}
                      <span className="span-text">
                        {" "}
                        Connect
                        <div className="line-container">
                          <div className="line-wrapper"></div>
                          <div className="line"></div>
                          <div className="moving-box"></div>
                        </div>
                      </span>
                    </span>
                  </Typography>
                </Box>
                <Box className="content-form-wrapper">
                  <Contactcareer />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.section>
    </>
  );
};

export default CompCasestudies;
