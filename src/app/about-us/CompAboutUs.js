"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Typography,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

import Lottie from "lottie-react";
import missionanimationData from "~/mission.json";

import OurVision from "@/our-vision.gif";

import Contact from "~/contact/Contact";
import Calltoaction from "~/cta/Calltoaction";

import AboutBanner from "@/about-banner.webp";


import Joinus from "@/join-us-icon.svg?url";

import USSgallery1 from "@/uss-gallery1.webp";
import USSgallery2 from "@/uss-gallery2.webp";
import USSgallery3 from "@/uss-gallery3.webp";
import USSgallery4 from "@/uss-gallery4.webp";
import USSgallery5 from "@/uss-gallery5.webp";
import USSgallery6 from "@/uss-gallery6.webp";
import USSgallery7 from "@/uss-gallery7.webp";
import USSgallery8 from "@/uss-gallery8.webp";
import USSgallery9 from "@/uss-gallery9.webp";
import USSgallery10 from "@/uss-gallery10.webp";
import USSgallery11 from "@/uss-gallery11.webp";
import USSgallery12 from "@/uss-gallery12.webp";
import Metadata from "~/meta/Metadata";
import { motion, AnimatePresence } from "framer-motion";
import Ussjourneysection from "~/ussjourney/Ussjourneysection";

import BharatBhai from "@/uss-employee/bharatbhai.webp";
import PrashantBhai from "@/uss-employee/prashantbhai.webp";
import Zeel from "@/uss-employee/zeel.webp";
import Maitri from "@/uss-employee/maitri.webp";
import HiteshBhai from "@/uss-employee/hiteshbhai.webp";
import ArzebBhai from "@/uss-employee/arzebbhai.webp";
import Palak from "@/uss-employee/palak.webp";
import Tasmin from "@/uss-employee/tasmin.webp";
import RajBhai from "@/uss-employee/rajbhai.webp";
import SandipBhai from "@/uss-employee/sandipbhai.webp";
import Ishita from "@/uss-employee/ishita.webp";
import Vaishali from "@/uss-employee/vaishali.webp";
import NiravBhai from "@/uss-employee/niravbhai.webp";
import Niti from "@/uss-employee/niti.webp";
import Urja from "@/uss-employee/urja.webp";
import Sakshi from "@/uss-employee/sakshi.webp";

import jigneshsir from "@/uss-employee/jigneshsir.webp";
import kinjalmam from "@/uss-employee/kinjalmam.webp";

const employees = [
  { name: "Bharat Katariya", role: "Team Leader", image: BharatBhai },
  { name: "Prashant Chudasama", role: "Sr. Dot Net Developer", image: PrashantBhai },
  { name: "Zeel Patel", role: "Jr. Dot Net Developer", image: Zeel },
  { name: "Maitri Patel", role: "Jr. Project Manager", image: Maitri },
  { name: "Hitesh Khatwani", role: "Sr. Full Stack Developer", image: HiteshBhai },
  { name: "Arzeb Mansuri", role: "Sr. Full Stack Developer", image: ArzebBhai },
  { name: "Palak Hirani", role: "Sr. PHP Developer", image: Palak },
  { name: "Tasmin Hirapara", role: "Jr. Developer", image: Tasmin },
  { name: "Raj Shah", role: "Sr. React Native Developer", image: RajBhai },
  { name: "Sandeep Dodiya", role: "Sr. Frontend Developer", image: SandipBhai },
  { name: "Ishita Mangaroliya", role: "Jr. Frontend Developer", image: Ishita },
  { name: "Vaishali Gadher", role: "QA Engineer", image: Vaishali },
  { name: "Nirav Mehta", role: "Sr. Designer", image: NiravBhai },
  { name: "Niti Tilva", role: "Jr. Designer", image: Niti },
  { name: "Urja Shah", role: "Jr. Business Development Executive", image: Urja },
  { name: "Sakshi Dixit", role: "Sr. SEO  Executive", image: Sakshi },
];

const USSGalleryimages1 = [
  USSgallery1,
  USSgallery2,
  USSgallery3,
  USSgallery4,
  USSgallery5,
  USSgallery6,
];
const USSGalleryimages2 = [
  USSgallery7,
  USSgallery8,
  USSgallery9,
  USSgallery10,
  USSgallery11,
  USSgallery12,
];

const values = [
  "Accountability",
  "Collaboration",
  "Trust",
  "Growth",
  "Respect",
  "Accountability",
  "Collaboration",
  "Trust",
  "Growth",
  "Respect",
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

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  viewport: { once: true, amount: 0.2 },
};


const CompAboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [journeyIndex, setJourneyIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const journeySwiperRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTabChange = (event, newValue) => {
    setJourneyIndex(newValue);
    if (journeySwiperRef.current && journeySwiperRef.current.swiper) {
      journeySwiperRef.current.swiper.slideTo(newValue);
    }
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

  return (
    <>
      {/* <Metadata
        title="About Us | USS - Software Development Company"
        description="Learn about USS, a software development company offering IT services and digital solutions to startups and enterprises worldwide."
      /> */}

      {/* Banner Section */}
      <motion.section {...fadeIn}>
        <Box className="about-banner-section">
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12, md: 10, lg: 8 }}>
                <Box className="heading-content about-banner-content">
                  <Typography variant="h6" sx={{ mb: 1 }} paragraph>
                    Turning Vision into Value Through Smart Innovation
                  </Typography>
                  <Typography variant="h1" sx={{ color: "#f28c38", mb: 1 }}>
                    Building Tommorrow, One Line Of Code At A Time
                  </Typography>
                  <Typography variant="h6" paragraph>
                    We're not just developers—we're dreamers shaping the digital
                    future.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box className="about-banner-image" sx={{ py: 3 }}>
              <Image src={AboutBanner} alt="About USS" />
              <Box className="about-banner-wwa">
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Who we are
                </Typography>
                <Typography variant="h6" paragraph>
                  Started in 2013, USS began with a small but passionate team
                  driven by one goal: to make technology meaningful. Today,
                  we're a global group of innovators, problem solvers, and
                  creators who partner with companies across industries — from
                  startups to established enterprises — delivering software that
                  truly makes a difference.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </motion.section>

      {/* Journey Section */}
      <Ussjourneysection />

      {/* vision-mission Section */}
      <Box
        className="vision-mission-wrapper"
        sx={{ py: 6, my: { xs: 3, md: 4, lg: 5 } }}
      >
        <Container className="custom-container" maxWidth="lg">
          <Grid
            container
            spacing={4}
            className="vision-mission-grid"
            maxWidth="lg"
            mx="auto"
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={3}>
                {/* Vision */}
                <Grid size={{ xs: 12 }} className="vision-mission-box">
                  <Box className="card-box">
                    <Box className="icon-box">
                      {/* <Lottie animationData={visionanimationData} loop={true} /> */}
                      <Image src={OurVision} alt="our-vision" />
                    </Box>
                    <Box className="card-box-description">
                      <Typography variant="h5" className="card-title">
                        Our Vision
                      </Typography>
                      <Typography variant="body1" className="card-description">
                        Our vision is to be the trusted partner for businesses
                        needing more than solutions — a team that understands,
                        adapts, and builds for what's next.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Mission */}
                <Grid size={{ xs: 12 }} className="vision-mission-box">
                  <Box className="card-box">
                    <Box className="icon-box">
                      <Lottie
                        animationData={missionanimationData}
                        loop={true}
                      />
                    </Box>
                    <Box className="card-box-description">
                      <Typography variant="h5" className="card-title">
                        Our Mission
                      </Typography>
                      <Typography variant="body1" className="card-description">
                        At USS, we create digital solutions that drive progress.
                        With strategy, creativity, and tech, we help businesses
                        grow and lead with purpose.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Right Column */}
            <Grid size={{ xs: 12, md: 6 }} className="vision-mission-box">
              <Box className="card-box full-height">
                <Box className="scroll-wrapper">
                  <Swiper
                    direction="vertical"
                    slidesPerView={5}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    className="value-list"
                  >
                    {values.map((val, index) => (
                      <SwiperSlide key={`${val}-${index}`}>
                        <Box className="value-item">{val}</Box>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>

                <Box className="value-text-box">
                  <Typography variant="h5" className="card-title">
                    Our Values
                  </Typography>
                  <Typography variant="body1" className="card-description">
                    At USS, we lead with integrity, stay curious, and put people
                    first. Our values guide how we work, build partnerships, and
                    own everything we create.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Heartbeat of Company */}
      <motion.section {...fadeInUp}>
        <Box sx={{ py: { xs: 3, md: 4, lg: 5 } }} className="heartbeat-section">
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content">
              <Typography
                variant="h2"
                align="center"
                sx={{ my: 2, fontWeight: 700 }}
              >
                Meet the{" "}
                <span className="primary-color">
                  Heartbeat of Our C
                  <span className="span-text">
                    ompany
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
              <Typography variant="h6" paragraph align="center" sx={{ mb: 5 }}>
                The people behind the passion, creativity, and drive that keep
                us moving forward — one great idea at a time.
              </Typography>
            </Box>

            <Grid
              container
              spacing={{ xs: 2, sm: 3, md: 4 }}
              sx={{ justifyContent: "center" }}
            >
              <Grid size={{ xs: 6, sm: 6, md: 4 }}>
                <Box className="heartbeat-box-wrapper">
                  <Box className="heartbeat-box ceo1">
                    <Image src={jigneshsir} alt="Jignesh Vaghasiya" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Jignesh Vaghasiya</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 6, md: 4 }}>
                <Box className="heartbeat-box-wrapper">
                  <Box className="heartbeat-box ceo2">
                    <Image src={kinjalmam} alt="Kinjal Vaghasiya" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Kinjal Vaghasiya</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      Managing Director
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* <Grid size={{ xs: 6, sm: 6, md: 4 }}>
                <Box className="heartbeat-box-wrapper">
                  <Box className="heartbeat-box ceo3">
                    <Image src={CEO3} alt="ceo3" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Nimisha Trivedi</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid> */}
            </Grid>
          </Container>
        </Box>
      </motion.section>

      {/* USS Family */}
      <motion.section {...fadeInUp}>
        {/* <Box sx={{ py: { xs: 1, md: 4, lg: 5 } }} className="employee-section">
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content">
              <Typography variant="h2" sx={{ mt: 2, mb: 5, fontWeight: 700 }}>
                Our{" "}
                <span className="primary-color">
                  USS F
                  <span className="span-text">
                    amily{" "}
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
              spacing={{ xs: 2, sm: 3 }}
              sx={{ justifyContent: "center" }}
            >
              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Jignesh Vaghasiya</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Jignesh Vaghasiya</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Kinjal Vaghasiya</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Nimisha Trivedi</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Nimisha Trivedi</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Nimisha Trivedi</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Nimisha Trivedi</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Nimisha Trivedi</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Nimisha Trivedi</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Nimisha Trivedi</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Nimisha Trivedi</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Nimisha Trivedi</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Nimisha Trivedi</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Nimisha Trivedi</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="employee-box-wrapper">
                  <Box className="employee-box">
                    <Image src={Employee} alt="employee" />
                  </Box>
                  <Box className="detail-box">
                    <Typography variant="h5">Nimisha Trivedi</Typography>
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="join-box-wrapper">
                  <Box className="join-box heading-content">
                    <Image src={Joinus} alt="employee" />
                    <Typography variant="p" sx={{ color: "#333" }}>
                      This could be you—join now and become part of the USS
                      team!
                    </Typography>
                    <Link href="/career" variant="contained" className="main-primary-btn">
                      Join Us
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box> */}
        <Box id="Ouremployee" sx={{ py: { xs: 1, md: 4, lg: 5 } }} className="employee-section">
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content">
              <Typography variant="h2" sx={{ mt: 2, mb: 5, fontWeight: 700 }}>
                Our{" "}
                <span className="primary-color">
                  USS F
                  <span className="span-text">
                    amily{" "}
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>

            <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ justifyContent: "start" }}>
              {employees.map((employee, index) => (
                <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
                  <Box className="employee-box-wrapper">
                    <Box className="employee-box">
                      <Image src={employee.image} alt={employee.name} />
                    </Box>
                    <Box className="detail-box">
                      <Typography variant="h5">{employee.name}</Typography>
                      <Typography variant="body1" sx={{ color: "#333" }}>
                        {employee.role}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}

              {/* Join Us box */}
              <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                <Box className="join-box-wrapper">
                  <Box className="join-box heading-content">
                    <Image src={Joinus} alt="Join Us" />
                    <Typography variant="body1" sx={{ color: "#333" }}>
                      This could be you—join now and become part of the USS team!
                    </Typography>
                    <Link href="/career" className="main-primary-btn">
                      Join Us
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.section>

      {/* call-to-action Section */}
      <motion.section {...fadeInUp}>
        <Calltoaction />
      </motion.section>

      {/* USS Gallery */}
      <Box sx={{ pt: { xs: 3, md: 4, lg: 6 } }} className="uss-gallery-swiper">
        <Container
          className="custom-container gallery-heading-wrapper"
          sx={{ mb: 2 }}
          maxWidth="lg"
        >
          <Box className="heading-content">
            <Typography variant="h2" sx={{ mt: 2, mb: 5, fontWeight: 700 }}>
              Life A
              <span>
                t{" "}
                <span className="span-text primary-color">
                  {" "}
                  USS
                  <div className="line-container">
                    <div className="line-wrapper"></div>
                    <div className="line"></div>
                    <div className="moving-box"></div>
                  </div>
                </span>
              </span>
            </Typography>
          </Box>
          <Box className="heading-content">
            <Link href="/life" variant="contained" className="main-primary-btn">
              Explore More
            </Link>
          </Box>
        </Container>

        {/* <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={"auto"}
          direction="horizontal"
          spaceBetween={20}
          freeMode={{ enabled: true, momentum: false, momentumBounce: false }}
          loop={true}
          grabCursor={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
            reverseDirection: true,
          }}
          style={{ marginBottom: "30px" }}
          className="uss-gallery-swiper1"
        >
          {USSGalleryimages1.map((img, index) => (
            <SwiperSlide key={`row1-${index}`}>
              <Image
                src={img}
                alt={`ussgallery-${index}`}
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={"auto"}
          spaceBetween={20}
          loop={true}
          speed={8000}
          freeMode={true}
          freeModeMomentum={false}
          allowTouchMove={false}
          loopAdditionalSlides={10}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: false,
          }}
          className="uss-gallery-swiper2"
        >
          {USSGalleryimages2.map((img, index) => (
            <SwiperSlide key={`row2-${index}`}>
              <Image
                src={img}
                alt={`ussgallery-${index}`}
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}

        <Box className="uss-gallery-wrapper">
          {/* Row 1 (reverse direction) */}
          <Box className="marquee marquee-reverse">
            <Box className="marquee__group">
              {USSGalleryimages1.map((img, i) => (
                <Image
                  key={`row1-${i}`}
                  src={img}
                  alt={`ussgallery-${i}`}
                  width={200}
                  height={150}
                  style={{ borderRadius: 8 }}
                />
              ))}
              {/* Duplicate images for seamless loop */}
              {USSGalleryimages1.map((img, i) => (
                <Image
                  key={`row1-dup-${i}`}
                  src={img}
                  alt={`ussgallery-dup-${i}`}
                  width={200}
                  height={150}
                  style={{ borderRadius: 8 }}
                />
              ))}
            </Box>
          </Box>

          {/* Row 2 (normal direction) */}
          <Box className="marquee">
            <Box className="marquee__group">
              {USSGalleryimages2.map((img, i) => (
                <Image
                  key={`row2-${i}`}
                  src={img}
                  alt={`ussgallery-${i}`}
                  width={200}
                  height={150}
                  style={{ borderRadius: 8 }}
                />
              ))}
              {USSGalleryimages2.map((img, i) => (
                <Image
                  key={`row2-dup-${i}`}
                  src={img}
                  alt={`ussgallery-dup-${i}`}
                  width={200}
                  height={150}
                  style={{ borderRadius: 8 }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Container
          className="custom-container logo-swiper-box-title"
          maxWidth="lg"
          sx={{ mt: 4 }}
        >
          <Typography variant="h1" className="animate-heading">
            <span className="text-line">
              Join the <span style={{ color: "#03B0EF" }}> Universal </span>{" "}
              team — <span style={{ color: "#f58436" }}> Stream </span>{" "}
              innovation into
            </span>
            <span className="text-line">
              reality with smart tech
              <span style={{ color: "#03B0EF" }}> Solutions</span> for
            </span>
            <span className="text-line">global business success.</span>
          </Typography>
        </Container>
      </Box>

      {/* contact form */}
      <motion.section {...fadeInUp}>
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography
              variant="h2"
              align="center"
              sx={{ mt: 6, mb: 5, fontWeight: 700 }}
            >
              From Our{" "}
              <span className="primary-color">
                Team to Yours—Let's Colla
                <span className="span-text">
                  borate
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

export default CompAboutUs;
