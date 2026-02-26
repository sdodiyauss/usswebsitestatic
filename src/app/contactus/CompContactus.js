"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Link as MuiLink,

  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from "react-countup";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import CursorImg from "@/cursor-img.webp";
import IconCall from "@/icon-call.svg?url";
import IconMap from "@/icon-map.svg?url";
import IconMessage from "@/icon-message.svg?url";

import ImageContactForm from "@/image-contact-form.webp";
import ImageGoodfirms from "@/image-goodfirms.webp";
import ImageCluthc from "@/image-cluthc.webp";
import ImageWadline from "@/image-wadline.webp";
import ImageAppfuturaBadge from "@/image-appfutura-badge.webp";


import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Contactformsecond from "~/contact/Contactformsecond";


import { motion } from "framer-motion";
import Companylogos from "~/companylogoes/Companylogos";
import Metadata from "~/meta/Metadata";

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
    visitUrl: "https://maps.app.goo.gl/xPK9n1RcUQSeo2RB9", // replace with actual URL
    call: "+91 9638225579",
  },
  US: {
    email: "sales@universalstreamsolution.com",
    visitUrl: "https://maps.app.goo.gl/de9QjcMnb6Gw25DB8", // replace with actual URL
    call: "+1 (678) 720-4961",
  },
};

// const logoList = [
//   RxValetLogo,
//   SimpleScriptsRxLogo,
//   ShieldLogo,
//   PBLogo,
//   RxFree4MeLogo,
//   CLSLogo,
//   LGFMLogo,
//   MissMatchLogo,
// ];

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

const CompContactus = (options = {}) => {
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

  // World map
  const [selectedCountry, setSelectedCountry] = useState("IN"); // default India

  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        pinchZoom: false,
        projection: am5map.geoMercator(),
      })
    );

    root._logo?.set("forceHidden", true);

    const baseColor = am5.color("#43CDFF");
    const hoverColor = am5.color("#03B0EF");
    const defaultColor = am5.color("#D9D9D9");
    const activeColor = am5.color("#03B0EF"); // Dark blue active color
    const highlightCountries = ["IN", "US"];

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        valueField: "value",
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
      fill: defaultColor,
    });

    polygonSeries.mapPolygons.template.events.on("pointerover", (ev) => {
      const polygon = ev.target;
      const id = polygon.dataItem?.dataContext?.id;
      if (highlightCountries.includes(id)) {
        polygon.set("fill", am5.Color.brighten(hoverColor, 0.0));
      }
    });

    polygonSeries.mapPolygons.template.events.on("pointerout", (ev) => {
      const polygon = ev.target;
      const id = polygon.dataItem?.dataContext?.id;
      if (highlightCountries.includes(id)) {
        // If polygon is active, keep activeColor, else default
        if (polygon === activePolygon) {
          polygon.set("fill", activeColor);
        } else {
          polygon.set("fill", baseColor);
        }
      } else {
        polygon.set("fill", defaultColor);
      }
    });

    // polygonSeries.events.on("datavalidated", () => {
    //   polygonSeries.mapPolygons.each((polygon) => {
    //     const id = polygon.dataItem?.dataContext?.id;
    //     if (highlightCountries.includes(id)) {
    //       polygon.set("fill", baseColor);
    //       polygon.set("active", false);
    //     } else {
    //       polygon.set("fill", defaultColor);
    //       polygon.set("active", false);
    //     }
    //   });
    // });

    // Track the active polygon
    let activePolygon = null;

    polygonSeries.events.on("datavalidated", () => {
      polygonSeries.mapPolygons.each((polygon) => {
        const id = polygon.dataItem?.dataContext?.id;
        if (highlightCountries.includes(id)) {
          if (id === "IN") {
            // Set India as default active
            polygon.set("fill", activeColor);
            polygon.set("active", true);
            activePolygon = polygon;
          } else {
            polygon.set("fill", baseColor);
            polygon.set("active", false);
          }
        } else {
          polygon.set("fill", defaultColor);
          polygon.set("active", false);
        }
      });
    });

    polygonSeries.mapPolygons.template.events.on("click", (ev) => {
      const polygon = ev.target;
      const id = polygon.dataItem?.dataContext?.id;

      // Debug logging to see what id contains
      console.log("Clicked polygon id:", id, "Type:", typeof id);

      // Ensure id is a string
      const countryId = typeof id === 'string' ? id : String(id);

      if (highlightCountries.includes(countryId)) {
        if (activePolygon && activePolygon !== polygon) {
          activePolygon.set("fill", baseColor);
          activePolygon.set("active", false);
        }
        polygon.set("fill", activeColor);
        polygon.set("active", true);
        activePolygon = polygon;

        setSelectedCountry(countryId);
      }
    });

    // Create point series for clickable country markers
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        valueField: "value",
        calculateAggregates: true,
      })
    );

    // Define coordinates for IN and US
    const pins = [
      {
        id: "IN",
        title: "India",
        geometry: { type: "Point", coordinates: [75.9629, 23.5937] },
      },
      {
        id: "US",
        title: "United States",
        geometry: { type: "Point", coordinates: [-108.7129, 40.0902] },
      },
    ];

    pointSeries.data.setAll(pins);

    // Add glowing animated dot as a bullet
    pointSeries.bullets.push(() => {
      const isMobileViewport = typeof window !== "undefined" && window.innerWidth <= 768;
      const circle = am5.Circle.new(root, {
        radius: isMobileViewport ? 3.5 : 6.5, // mobile 3.5, desktop 6.5
        fill: am5.color(0xf58436),
        stroke: am5.color(0xffffff),
        strokeWidth: 1.5,
        tooltipText: "{title}",
        shadowColor: am5.color(0x00b0ff),
        shadowBlur: 8,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowOpacity: 1,
      });

      // Add pulsing animation
      circle.animate({
        key: "scale",
        from: 1,
        to: 1.4,
        duration: 1000,
        loops: true,
        easing: am5.ease.inOut(am5.ease.cubic),
        yoyo: true,
      });

      return am5.Bullet.new(root, { sprite: circle });
    });

    return () => {
      root.dispose();
    };
  }, []);

  // Use selectedCountry state to render contact info dynamically
  const contact = contactInfoMap[selectedCountry] || contactInfoMap["IN"]; // fallback to India

  return (
    <>
      {/* <Metadata
        title="Contact USS – Get in Touch Today"
        description="Have questions or need support? Contact USS for quick help, expert advice, or custom solutions tailored to your business needs."
      /> */}

      {/* contactus-banner-section */}
      <motion.section {...fadeIn}>
        <Box className="top-banner-section-bg contactus-banner-section">
          <Container className="custom-container" maxWidth="lg">
            {/* Your existing header content */}
            <Grid container spacing={2} justifyContent="center">
              <Grid size={8}>
                <Box className="heading-content heading-content-spacing">
                  <Typography variant="h6" paragraph sx={{ mb: 2 }}>
                    We'd Love to Hear From You
                  </Typography>
                  <Typography variant="h1" sx={{ color: "#f28c38", mb: 5 }}>
                    Whether it's a quick question or a big idea—drop us a line.
                  </Typography>
                </Box>
              </Grid>
              <Grid size={12}>
                <Box
                  id="chartdiv"
                  sx={{
                    width: "100%",
                    height: "100vh",
                  }}
                />
              </Grid>
            </Grid>

            {/* Contact details update dynamically based on selectedCountry */}
            <motion.section {...fadeInUp}>
              <Grid container spacing={2} justifyContent={"center"}>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box className="contactus-box">
                    <Box>
                      <Image
                        src={IconMessage}
                        alt="IconCall"
                        className="icon-contact"
                        width={'40'} height={'40'}
                      />
                      <Box className="contact-info">
                        <Typography variant="h5">Email</Typography>
                        <Typography variant="h6">
                          Have a question? Drop us a line anytime.
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      className="main-outline-primary-btn text-transform-normal"
                    >
                      {contact.email}
                    </Button>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box className="contactus-box">
                    <Box>
                      <Image src={IconMap} alt="IconMap" width={'40'} height={'40'} className="icon-contact" />
                      <Box className="contact-info">
                        <Typography variant="h5">Visit Us</Typography>
                        <Typography variant="h6">
                          Stop by for a chat—we'd love to meet you.
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      className="main-outline-primary-btn"
                      component="a"
                      href={contact?.visitUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit on Google Map
                    </Button>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box className="contactus-box">
                    <Box>
                      <Image src={IconCall} alt="IconCall" width={'40'} height={'40'} className="icon-contact" />
                      <Box className="contact-info">
                        <Typography variant="h5">Call Us</Typography>
                        <Typography variant="h6">
                          Talk to our team directly—we're here to help.
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      className="main-outline-primary-btn"
                    >
                      {contact.call}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </motion.section>
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

      {/* contact form */}
      <motion.section {...fadeInUp}>
        <Box className="contatct-form-section">
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={{ xs: 3, md: 4 }}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Box className="heading-content">
                  <Typography
                    variant="h2"
                    align="left"
                    sx={{ mt: 0, mb: 4, fontWeight: 700 }}
                  >
                    Tell Us{" "}
                    <span className="primary-color">
                      {" "}
                      What's on{" "}
                      <span className="span-text">
                        {" "}
                        Your Mind
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
                  <Contactformsecond />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box className="contact-image-wrapper">
                  <Image
                    src={ImageContactForm}
                    alt="USS at Global Establishment"
                    className="contact-form-image"
                  />
                </Box>
                <Box className="our-achievements-wrapper">
                  <Box className="heading-content">
                    <Typography variant="h5" content="h5" sx={{ mb: 2, mt: 2 }}>
                      Our Achievements
                    </Typography>
                  </Box>
                  <Box className="our-achievements-cirtificate">
                    <Image
                      src={ImageGoodfirms}
                      alt="Contact Form Image"
                      className="contact-form-image"
                    />
                    <Image
                      src={ImageCluthc}
                      alt="Contact Form Image"
                      className="contact-form-image"
                    />
                    <Image
                      src={ImageWadline}
                      alt="Contact Form Image"
                      className="contact-form-image"
                    />
                    <Image
                      src={ImageAppfuturaBadge}
                      alt="Contact Form Image"
                      className="contact-form-image"
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.section>

      {/* Milestone Section */}
      <motion.section {...fadeInUp}>
        <Box
          className="milestone-section"
          ref={ref}
          py={6}
          mt={{ xs: 3, md: 4, lg: 5 }}
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
                    {startCount ? <CountUp end={item.value} duration={3} /> : 0}+
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

      {/* Growth Collaborators Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ pt: 8, pb: 8 }} className="growth-collaborators-section">
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content">
              <Typography
                variant="h2"
                sx={{ mt: 2, mb: 3, fontWeight: 700, textAlign: "center" }}
              >
                Growth{" "}
                <span className="primary-color">
                  Collabo
                  <span className="span-text">
                    rators
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>
            <Grid container spacing={2} justifyContent={"center"}>
              <Grid size={{ xs: 12, md: 12 }}>
                <Companylogos />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.section>
    </>
  );
};

export default CompContactus;
