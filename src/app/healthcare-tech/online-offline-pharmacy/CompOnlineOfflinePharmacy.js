"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
  AvatarGroup, useMediaQuery, useTheme
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";

import CircleType from "circletype";
import DigitalMap from "~/verticalmap.json";
import DigitalMapMobile from "~/horizontalmap.json";
import callIcon from "@/call-icon.svg?url";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import TrustIcon1 from "@/multi-specialty.svg?url";
import TrustIcon2 from "@/stethoscope.svg?url";
import TrustIcon3 from "@/lock.svg?url";
import TrustIcon4 from "@/hierarchy-2.svg?url";
import TrustIcon5 from "@/medical-kit.svg?url";
import TrustIcon6 from "@/setting-2.svg?url";

import ActiveBG from "@/trust-uss-vector.svg?url";
import PharmacyBanner from "@/pharmacy-bg.svg?url";

import Slider1 from "@/slider1.webp";
import Slider2 from "@/slider2.webp";
import Slider3 from "@/slider3.webp";
import Slider4 from "@/slider4.webp";
import Slider5 from "@/slider5.webp";
import Slider6 from "@/slider6.webp";
import Slider7 from "@/slider7.webp";
import RoundOrangeRighticon from "@/round-orange-right.svg?url";

import CubeBox from "@/box.svg?url";
import Note from "@/note.svg?url";
import BagTimer from "@/bag-timer.svg?url";
import Wallet from "@/wallet.svg?url";
import chart from "@/chart.svg?url";
import ShieldTick from "@/shield-tick.svg?url";

import opportunity3 from "@/opportunity3.webp";
import opportunity1 from "@/opportunity1.webp";
import opportunity2 from "@/opportunity2.webp";

import Contact from "~/contact/Contact";
import Link from "next/link";
import Metadata from "~/meta/Metadata";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";

const features = [
  {
    number: "01",
    title: "Unified Sales Management",
    description:
      "Run your online medicine orders and walk‑in pharmacy sales from the same system. No switching tabs, no duplicate work — just one smooth process that keeps everything in sync for you and your customers. Save time every day while delivering a faster, better service.",
  },
  {
    number: "02",
    title: "Smart Inventory Tracking",
    description:
      "Know exactly what's on your pharmacy shelves at any moment. Get a heads‑up when medicines are running low so you can restock before a customer ever has to hear “out of stock.” Keep your shelves full and your customers satisfied.",
  },
  {
    number: "03",
    title: "Digital Prescription Handling",
    description:
      "Accept and check prescriptions digitally, then store them safely for easy access later. It keeps orders moving quickly and your patient records neat, secure, and easy to find. Reduce paperwork and focus more on serving your customers.",
  },
  {
    number: "04",
    title: "Integrated Billing & Payments",
    description:
      "Bill in seconds and get paid any way your customers prefer — cash, card, UPI, or wallet. All your invoices are GST ready, so you spend less time on paperwork and more on customers. Make every transaction quick, accurate, and hassle free.",
  },
  {
    number: "05",
    title: "Customer Order History",
    description:
      "Pull up a customer's complete medicine and prescription history in just a click. It's easy to repeat past orders, offer better suggestions, and keep customers coming back. Build stronger relationships and increase customer loyalty effortlessly.",
  },
  {
    number: "06",
    title: "Performance Insights",
    description:
      "See how your pharmacy is performing with clear reports on sales, profit, and trends. Spot what's working, fix what's not, and make smarter decisions that grow your business. Turn insights into action and drive long‑term success.",
  },
];

const trustBoxes = [
  {
    title: "Doctor Centric",
    description:
      "We collaborate closely with healthcare teams to design practical, real-world workflows that simplify operations and truly fit clinical needs.",
  },
  {
    title: "Secure Privacy",
    description:
      "HIPAA, GDPR, and FHIR compliant system ensures your patients' sensitive data is always protected, encrypted, and handled with care.",
  },
  {
    title: "Seamless Integration",
    description:
      "From EHRs to billing, our portal seamlessly integrates with your current systems — no disruptions, just smooth and simple connectivity.",
  },
  {
    title: "Custom Solutions",
    description:
      "Fits solo clinics or multi-location hospitals — the portal is fully customizable to match your workflows, scale, and daily operations.",
  },
  {
    title: "Ongoing Support",
    description:
      "Real support, real people — our team's always here to help, with healthcare expertise and zero chatbot frustration.",
  },
  {
    title: "Clinic Trusted",
    description:
      "Our portal streamlines check-ins, enhances communication, and creates a smoother, more satisfying experience for both healthcare staff and patients alike.",
  },
];

const cardData = [
  {
    title: "Patient Management Portal for your Clinic",
    desc: "Streamline clinic operations with a secure, intuitive patient management portal for scheduling, records, and seamless communication.",
    image: Slider1,
    link: "/healthcare-tech/patient-management-portal",
  },
  {
    title: "Online/Offline Pharmacy Development",
    desc: "Revolutionize pharmacy operations with a smart, hybrid platform for effortless prescriptions, inventory sync, and seamless customer care.",
    image: Slider2,
    link: "/healthcare-tech/online-offline-pharmacy",
  },
  {
    title: "Prescription Assistance Portal(PAP)",
    desc: "Effortlessly manage PAP cases with an intuitive portal offering patient intake, case progress tracking, and communication.",
    image: Slider3,
    link: "/healthcare-tech/prescription-assistance-portal",
  },
  {
    title: "Medical Billing Portal Development",
    desc: "Revolutionize pharmacy operations with a smart, hybrid platform for effortless prescriptions, inventory sync, and seamless customer care.",
    image: Slider4,
    link: "/healthcare-tech/medical-billing",
  },
  {
    title: "EHR/EMR Development",
    desc: "Develop intelligent EHR/EMR solutions with secure data, automated workflows, and real-time patient management to enhance efficiency, accuracy, & healthcare delivery.",
    image: Slider5,
    link: "/healthcare-tech/ehr-emr-development",
  },
  {
    title: "Hospital Management Portal Development",
    desc: "Create a smart hospital management portal with automated workflows, real-time data access, and secure patient administration for enhanced efficiency and care delivery.",
    image: Slider6,
    link: "/healthcare-tech/hospital-management",
  },
  {
    title: "Compliance Software Development",
    desc: "Ensure regulatory compliance with intelligent software featuring automated audits, real-time tracking, and secure data management.",
    image: Slider7,
    link: "/healthcare-tech/compliance-software",
  },
];

const solutions = [
  {
    title: "Centralized Order Management",
    description:
      "Manage online medicine orders and in‑store pharmacy sales from a single dashboard. Keep everything organized, avoid duplication, and deliver a smooth buying experience to every customer.",
    icon: CubeBox,
  },
  {
    title: "Real Time Inventory Control",
    description:
      "Track your pharmacy stock in real time and get instant alerts before essential medicines run out. Keep shelves fully stocked so customers never leave empty‑handed and prevent revenue loss.",
    icon: Note,
  },
  {
    title: "Secure Digital Prescription Handling",
    description:
      "Accept, verify, and store prescriptions digitally for faster processing. Keep records secure, easy to retrieve, and compliant with regulations while reducing errors for a smoother customer experience.",
    icon: ShieldTick,
  },
  {
    title: "Seamless Billing & Payments",
    description:
      "Create GST ready invoices instantly and accept payments via cash, card, UPI, or mobile wallets. Offer customers a quick & convenient checkout every time. Simplify transactions and keep your billing process error free.",
    icon: Wallet,
  },
  {
    title: "Detailed Customer Purchase History",
    description:
      "Access complete order and prescription history for each customer. Make reorders easy, recommend the right medicines, and build long‑term loyalty. Strengthen relationships with personalized service every time.",
    icon: BagTimer,
  },
  {
    title: "Sales & Performance Insights",
    description:
      "Get in depth reports on pharmacy sales, profit margins, & growth trends. Use data driven insights to make smarter decisions & boost profitability. Track performance over time & identify new opportunities for growth.",
    icon: chart,
  },
];

const CompOnlineOfflinePharmacy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  //trust-uss
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
      }, 350);
    }
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


  return (
    <>
      {/* <Metadata
        title="Online & Offline Pharmacy Software Solutions"
        description="Manage your pharmacy online & offline with secure software—inventory, billing, prescriptions & compliance, all in one platform."
      /> */}

      {/* patient-banner */}
      <Box className="healthcare-banner-section">
        <Container className="custom-container" maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            <Grid size={{ xs: 12, md: 10 }}>
              <Box className="heading-content healthcare-banner-content">
                <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                  Online/Offline Pharmacy
                </Typography>
                <Typography variant="h6" paragraph sx={{ mb: 3 }}>
                  Streamline your pharmacy operations with an all-in-one
                  solution for online orders and in-store sales.
                </Typography>
              </Box>
              <Box className="heading-content" align="center">
                <Link href="/contactus" variant="contained" className="main-primary-btn">
                  Get Started Today
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

      <Box className="patient-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Container className="custom-container" maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="patient-left">
                <Box className="heading-content">
                  <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
                    All in One{" "} <br />
                    <span className="primary-color">
                      Pharmacy Mana
                      <span className="span-text">
                        gement
                        <div className="line-container">
                          <div className="line-wrapper"></div>
                          <div className="line"></div>
                          <div className="moving-box"></div>
                        </div>
                      </span>
                    </span>
                  </Typography>
                  <Typography className="patient-subheading">
                    Manage online orders, in‑store sales, prescriptions,
                    inventory, and payments all from one platform.
                  </Typography>
                </Box>
                <Box className="patient-image-wrapper">
                  <Image
                    src={PharmacyBanner}
                    alt="All in One Pharmacy Management"
                    width={400}
                    height={300}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Right Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container direction="column" spacing={3}>
                {features.map(({ number, title, description }) => (
                  <Grid size={{ xs: 12 }} key={number}>
                    <Box className="feature-box">
                      <Box className="feature-number">{number}</Box>
                      <Box className="feature-content">
                        <Typography variant="h6" className="feature-title">
                          {title}
                        </Typography>
                        <Typography
                          variant="body1"
                          className="feature-description"
                        >
                          {description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="opportunity-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Container className="custom-container" maxWidth="lg">
          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className="opportunity-card-wrapper">
                <Box className="opportunity-card opportunity-text-card md-order-1">
                  <Box className="heading-content">
                    <Typography variant="h2" sx={{ mb: 5, fontWeight: 700 }}>
                      Expand business opportunities <br />
                      <span className="span-text primary-color">
                        of Software
                        <div className="line-container">
                          <div className="line-wrapper"></div>
                          <div className="line"></div>
                          <div className="moving-box"></div>
                        </div>
                      </span>
                    </Typography>
                  </Box>
                  <Box className="opportunity-clients">
                    <AvatarGroup max={3} className="avatar-group">
                      <Avatar
                        alt="Client 1"
                        className="opportunity-client-img"
                        src="/images/client1.webp"
                      />
                      <Avatar
                        alt="Client 2"
                        className="opportunity-client-img"
                        src="/images/client2.webp"
                      />
                      <Avatar
                        alt="Client 3"
                        className="opportunity-client-img"
                        src="/images/client3.webp"
                      />
                    </AvatarGroup>
                    <Typography className="opportunity-client-count">
                      100+ Clients
                    </Typography>
                  </Box>
                </Box>
                <Box className="opportunity-card opportunity-image-card">
                  <Image
                    src={opportunity1}
                    alt="Tablet Doctor"
                    width={400}
                    height={250}
                    className="opportunity-image"
                  />
                </Box>
              </Box>
            </Grid>

            {/* Middle Column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className="opportunity-card opportunity-image-card opportunity-tall-image">
                <Lottie
                  animationData={isMobile ? DigitalMapMobile : DigitalMap}
                  loop={true}
                />
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className="opportunity-card-wrapper">
                <Box className="opportunity-card opportunity-image-card md-order-1">
                  <Image
                    src={opportunity3}
                    alt="Futuristic Icons"
                    width={400}
                    height={250}
                    className="opportunity-image"
                  />
                </Box>

                <Box className="opportunity-card opportunity-text-card">
                  <Typography
                    variant="body2"
                    className="opportunity-description"
                  >
                    Our healthcare management platform makes running your
                    practice easier. Patients can book appointments online or
                    connect via secure teleconsultations. Digital records keep
                    patient history easy to access, and e‑prescription tools
                    send prescriptions directly to patients or partner
                    pharmacies.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* smart solution */}
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
              <span className="primary-color">
                for Online & Offline Pharmacy Mana
                <span className="span-text">
                  gement
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

      {/* call-to-action Section */}
      <Box sx={{ mt: 4 }} className="call-to-action-wrapper">
        <Container className="custom-container" maxWidth="lg">
          <Box
            sx={{ p: 4, backgroundColor: "#222222", borderRadius: 3 }}
            className="call-to-action-innerbox"
          >
            <Box className="heading-content pr">
              <Typography variant="h2" sx={{ my: 2, color: "white" }}>
                Start Your Free Demo and Experience Smarter Pharmacy Management
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

      {/* trust-uss */}
      <Box className="trust-uss-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography variant="h2" sx={{ mb: 5, mt: 3, fontWeight: 700 }}>
              Why Healthcare Client{" "}
              <span className="primary-color">
                Trus
                <span className="span-text">
                  t USS
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
                onMouseEnter={() => handleHover("Doctor Centric")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("Doctor Centric")}
              >
                <Image src={TrustIcon2} alt="TrustIcon1" />
                <Typography variant="h6">Doctor Centric</Typography>
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
                onMouseEnter={() => handleHover("Secure Privacy")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("Secure Privacy")}
              >
                <Image src={TrustIcon3} alt="TrustIcon1" />
                <Typography variant="h6">Secure Privacy</Typography>
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
              <Box ref={hoverBoxRef} className={`hover-content-box ${isVisible ? 'visible' : ''}`}>
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
                onMouseEnter={() => handleHover("Seamless Integration")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("Seamless Integration")}
              >
                <Image src={TrustIcon4} alt="TrustIcon1" />
                <Typography variant="h6">Seamless Integration</Typography>
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
                onMouseEnter={() => handleHover("Custom Solutions")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("Custom Solutions")}
              >
                <Image src={TrustIcon1} alt="TrustIcon1" />
                <Typography variant="h6">Custom Solutions</Typography>
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
                onMouseEnter={() => handleHover("Ongoing Support")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("Ongoing Support")}
              >
                <Image src={TrustIcon6} alt="TrustIcon1" />
                <Typography variant="h6">Ongoing Support</Typography>
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
                onMouseEnter={() => handleHover("Clinic Trusted")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("Clinic Trusted")}
              >
                <Image src={TrustIcon5} alt="TrustIcon1" />
                <Typography variant="h6">Clinic Trusted</Typography>
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

      {/* Healthcare Tech Solution Swiper Section */}
      <Box
        sx={{ py: { xs: 3, md: 4, lg: 5 } }}
        className="healthcare-section patient-healthcare-section"
      >
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography
              variant="h2"
              align="center"
              sx={{ mb: 5, fontWeight: 700 }}
            >
              Next-Gen{" "}
              <span className="primary-color">
                Healthcar
                <span className="span-text">
                  e Tech
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

        <Grid container spacing={4}>
          <Grid size={{ xs: 12 }}>
            <Swiper
              className="healthcare-swiper patient-healthcare-swiper"
              modules={[Mousewheel, Navigation]}
              loop={false}
              navigation
              mousewheel={{
                sensitivity: 1,
                releaseOnEdges: true,
              }}
              spaceBetween={20}
              slidesPerView={2.5}
              breakpoints={{
                0: { slidesPerView: 1.3 },
                768: { slidesPerView: 2.3 },
                1024: { slidesPerView: 2.5 },
                1200: { slidesPerView: 3.8 },
              }}
            >
              {cardData.map((card, index) => (
                <SwiperSlide key={index} className="slide-box">
                  <Paper elevation={0} className="slide-box-main">
                    <Box>
                      <Box className="title-box">
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, mb: 1 }}
                        >
                          {card.title}
                        </Typography>
                        <Link href={card.link || "#"} className="inline-flex">
                          <Image src={RoundOrangeRighticon} alt={card.title} />
                        </Link>
                      </Box>
                      <Box className="gray-spacer"></Box>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {card.desc}
                      </Typography>
                    </Box>
                    <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={500}
                        height={300}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Paper>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </Box>

      {/* contact form */}
      <Container className="custom-container" maxWidth="lg">
        <Box className="heading-content">
          <Typography
            variant="h2"
            align="center"
            sx={{ mt: 6, mb: 4, fontWeight: 700 }}
          >
            Let's Talk
            <span className="primary-color">
              {" "}
              About Your Pharmacy G
              <span className="span-text">
                rowth
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
    </>
  );
};

export default CompOnlineOfflinePharmacy;
