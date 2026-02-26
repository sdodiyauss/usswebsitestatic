"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";

import callIcon from "@/call-icon.svg?url";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import IconMonitor from "@/icon-monitor.svg?url";
import IconMobile from "@/icon-mobile.svg?url";
import IconWalletMoney from "@/icon-wallet-money.svg?url";
import IconBoxTick from "@/icon-box-tick.svg?url";
import IconBag from "@/icon-bag.svg?url";
import IconDiagram from "@/icon-diagram.svg?url";

import SmartFeaturesImage1 from "@/smart-feature-image1.webp";
import SmartFeaturesImage3 from "@/smart-feature-image3.webp";
import SmartFeaturesImage5 from "@/smart-feature-image5.webp";
import SmartFeaturesShape from "@/smart-feature-shape.svg?url";

import CheckCircleIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Close';
import WarningAmberIcon from '@mui/icons-material/Warning';


import CircleType from "circletype";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";

import SayGoodbyeImg from "@/say-goodbye-img.webp";

import iconSupport from "@/icon-solution-24-support.svg?url";
import iconProfile from "@/icon-solution-profile-circle.svg?url";
import iconChart from "@/icon-solution-chart.svg?url";
import iconCard from "@/icon-solution-card.svg?url";
import iconMobile from "@/icon-solution-mobile.svg?url";
import iconClock from "@/icon-solution-clock.svg?url";

import Contact from "~/contact/Contact";
import { motion, AnimatePresence } from "framer-motion";
import Metadata from "~/meta/Metadata";
import Link from "next/link";
import TechnologyStacks from "~/technologystackssection/TechnologyStacks";
import Timelinewrapper from "~/timelinewrapper/Timelinewrapper";

const trustBoxes = [
  {
    title: "Clinical Workflow Expertise",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "EHR Implementation",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Digital Health Platforms",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Healthcare-Centric UX",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Diagnostics Integration",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
  {
    title: "Multi-Specialty Custom Solutions",
    description:
      "From custom EHR development to integrating with top platforms like Epic, Cerner, and OpenEMR — our solutions are designed for real-time data access and interoperability.",
  },
];

const solutions = [
  {
    title: "Custom eCommerce Website Design",
    description:
      "We create unique, brand-driven online storefronts tailored for high performance and maximum conversions—designed to reflect your identity, engage visitors, and turn clicks into loyal customers.",
    icon: IconMonitor,
    active: true,
  },
  {
    title: "Mobile-Responsive Shopping Experience",
    description:
      "We craft unique, brand-aligned online storefronts. Built for speed, performance, and seamless shopping experiences. Designed to boost engagement and drive higher conversions.",
    icon: IconMobile,
  },
  {
    title: "Secure Payment & Checkout Integration",
    description:
      "Secure, lightning-fast payment processing every time. Supports multiple gateways like Razorpay, Stripe, and PayPal. Encrypted transactions to keep your customers safe and confident.",
    icon: IconWalletMoney,
  },
  {
    title: "Product & Inventory Management",
    description:
      "Stay in control with a user-friendly admin dashboard. Manage stock, pricing, and product categories instantly. Make real-time updates without any technical hassle.",
    icon: IconBoxTick,
  },
  {
    title: "Order & Shipping Management",
    description:
      "Manage the entire order journey from one place. Track shipping, delivery status, and customer updates in real time. End-to-end tools that keep your logistics smooth and visible.",
    icon: IconBag,
  },
  {
    title: "Admin Panel & Real-time Analytics",
    description:
      "Unlock valuable insights with real-time analytics. Track sales, monitor user behavior, and measure performance.Make smarter decisions to grow your store faster.",
    icon: IconDiagram,
  },
];

const smartFeaturesSlides = [
  {
    title: "Customer Experience Tools",
    description:
      "Improve retention and loyalty with wishlist features, recently viewed items, product comparisons, and smart search suggestions",
    image: SmartFeaturesImage1,
    alttext: "Customer Experience Tool",
    features: [
      {
        title: "Wishlist Functionality",
        description:
          "Let customers save favorites to a wishlist for easy access later.",
      },
      {
        title: "Smart Search",
        description:
          "Smart search suggests as you type, fixes typos, and filters results in real-time.",
      },
      {
        title: "Recently Viewed Products",
        description:
          "A quick reminder to revisit items they liked but didn't add to cart.",
      },
      {
        title: "Product Recommendations",
        description:
          "Suggest products based on browsing or purchases to boost engagement and sales.",
      },
      {
        title: "Product Comparison Tool",
        description:
          "Help users compare products side by side for easier decisions.",
      },
      {
        title: "Quick View Option",
        description:
          "Shoppers can preview product details right on the page for a smoother journey.",
      },
    ],
  },
  {
    title: "Customer Panel",
    description: "Offer a seamless shopping experience with an easy-to-use customer panel Customers can browse, order, and track deliveries effortlessly",
    image: SmartFeaturesImage5,
    alttext: "Custom Panel",
    features: [
      {
        title: "Smart Filters",
        description:
          "Easily filter products by price, brand, size, ratings for faster, personalized shopping.",
      },
      {
        title: "Wishlist Reorder",
        description:
          "Save favorites and reorder from history for faster, personalized shopping.",
      },
      {
        title: "Easy Login",
        description:
          "Register via phone, email, or social login with secure, fast authentication.",
      },
      {
        title: "Order Tracking",
        description:
          "Get real-time delivery updates and track orders directly from your account easily.",
      },
      {
        title: "Secure Payments",
        description:
          "Pay via UPI, cards, wallets, net banking, or cash on delivery—flexible options.",
      },
      {
        title: "User Reviews",
        description:
          "Leave feedback, read reviews, and share your experience to guide other shoppers.",
      },
    ],
  },
  {
    title: "Vendor / Seller Panel",
    description: "Empower sellers with a dedicated panel to manage their storefront. They can add products, track orders, manage inventory, and monitor earnings—all in one place",
    image: SmartFeaturesImage3,
    alttext: "Vendor Panel",
    features: [
      {
        title: "Product Management",
        description:
          "Manage products with images, descriptions, and details from dashboard.",
      },
      {
        title: "Earnings Dashboard",
        description:
          "Track payouts, commissions, and settlements in one place.",
      },
      {
        title: "Inventory Control",
        description:
          "Manage stock, update prices, and apply discounts instantly to stay competitive.",
      },
      {
        title: "Custom Deals",
        description:
          "Create exclusive promotions or bundles to attract customers & boost sales effectively.",
      },
      {
        title: "Order Panel",
        description:
          "View and process orders, manage shipping smoothly from your seller panel.",
      },
      {
        title: "Admin Communication",
        description:
          "Directly contact admin for support, approvals, or feedback quick & hasslefree.",
      },
    ],
  },

];

const comparisonData = [
  {
    label: "Bug Fixes",
    uss: {
      icon: <CheckCircleIcon sx={{ color: "#00e676" }} />,
      text: "Covered in Plan",
    },
    others: {
      icon: <WarningAmberIcon sx={{ color: "#ffeb3b" }} />,
      text: "Extra Cost or Delayed",
    },
    vsIcon: (
      <Image
        src="/images/icon-bug.svg?url"
        alt="Bug"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    label: "24×7 Availability",
    uss: {
      icon: <CheckCircleIcon sx={{ color: "#00e676" }} />,
      text: "Yes",
    },
    others: {
      icon: <CancelIcon sx={{ color: "#f44336" }} />,
      text: "No or Limited",
    },
    vsIcon: (
      <Image
        src="/images/icon-24-support.svg?url"
        alt="24x7"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    label: "Hidden Charges",
    uss: {
      icon: <CancelIcon sx={{ color: "#f44336" }} />,
      text: "None",
    },
    others: {
      icon: <WarningAmberIcon sx={{ color: "#ffeb3b" }} />,
      text: "Very Common Post-Launch",
    },
    vsIcon: (
      <Image
        src="/images/icon-dollar-circle.svg?url"
        alt="Charges"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    label: "Post-Launch Support",
    uss: {
      icon: <CheckCircleIcon sx={{ color: "#00e676" }} />,
      text: "Included",
    },
    others: {
      icon: <CancelIcon sx={{ color: "#f44336" }} />,
      text: "Chargeable / Not Available",
    },
    vsIcon: (
      <Image
        src="/images/icon-rocket.svg?url"
        alt="Support"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    label: "Backup & Recovery",
    uss: {
      icon: <CheckCircleIcon sx={{ color: "#00e676" }} />,
      text: "Regular & Automated",
    },
    others: {
      icon: <CancelIcon sx={{ color: "#f44336" }} />,
      text: "Rarely Configured",
    },
    vsIcon: (
      <Image
        src="/images/icon-database.svg?url"
        alt="Backup"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
  },
];

const dotsData = [
  {
    icon: iconClock,
    title: "Real-Time Inventory",
    text: "Track and manage stock automatically with zero manual errors.",
  },
  {
    icon: iconMobile,
    title: "Mobile-Optimized Experience",
    text: "Let customers shop easily on any device, anytime.",
  },
  {
    icon: iconProfile,
    title: "Customer-Centric Personalization",
    text: "AI-based suggestions and email campaigns to keep buyers coming back.",
  },
  {
    icon: iconCard,
    title: "Multiple Payment Gateways",
    text: "From UPI to cards to wallets—make checkout frictionless.",
  },
  {
    icon: iconChart,
    title: "Analytics-Driven Growth",
    text: "See what's working. Know what's not. Adapt faster.",
  },
  {
    icon: iconSupport,
    title: "24/7 Accessibility",
    text: "Your store is always open—no staff required, no missed sales.",
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

const fadeLeft = {
  initial: { opacity: 0, x: 30 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  viewport: { once: true, amount: 0.2 }
};


const CompOnlineStoreDevelopment = () => {
  //trust-uss
  const [hoverContent, setHoverContent] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const [TechnologyIndex, setTechnologyIndex] = useState(0);

  const handleHover = (title) => {
    const content = trustBoxes.find((item) => item.title === title);
    if (content && content.title !== hoverContent?.title) {
      setHoverContent(content);
    }
  };

  const handleMouseLeave = () => {
    setHoverContent(null);
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

  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const dotCircleRef = useRef(null);
  const itemDotsRef = useRef([]);

  // Arrange dots in circle on mount & on window resize
  useEffect(() => {
    const arrangeDots = () => {
      const container = dotCircleRef.current;
      if (!container) return;

      const dots = itemDotsRef.current;
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      const radius = width / 2.5;
      const angleStep = (2 * Math.PI) / dots.length;
      let angle = 0;

      dots.forEach((dot) => {
        if (!dot) return;
        const x = Math.round(
          width / 2 + radius * Math.cos(angle) - dot.offsetWidth / 2
        );
        const y = Math.round(
          height / 2 + radius * Math.sin(angle) - dot.offsetHeight / 2
        );
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        angle += angleStep;
      });
    };

    arrangeDots();
    window.addEventListener("resize", arrangeDots);
    return () => window.removeEventListener("resize", arrangeDots);
  }, []);

  // Handle click on a dot
  const handleDotClick = (index) => {
    setActiveDotIndex(index);
  };

  // Animate rotation & dot inverse rotation
  useEffect(() => {
    const rotationDeg = 360 - activeDotIndex * 60;
    if (dotCircleRef.current) {
      dotCircleRef.current.style.transition = "transform 2s";
      dotCircleRef.current.style.transform = `rotate(${rotationDeg}deg)`;
    }

    // Inverse rotate each dot so icons remain upright
    itemDotsRef.current.forEach((dot, idx) => {
      if (!dot) return;
      dot.style.transition = "transform 1s";
      dot.style.transform = `rotate(${activeDotIndex * 60}deg)`;
    });
  }, [activeDotIndex]);

  // Auto rotate every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDotIndex((prev) => (prev + 1) % dotsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* <Metadata
        title="Online Store Development Services – USS"
        description="Launch a powerful eCommerce store with USS. We build secure, scalable, and user-friendly online stores that drive sales and enhance customer experience."
      /> */}

      {/* patient-banner */}
      <motion.section {...fadeIn}>
        <Box className="healthcare-banner-section">
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Box className="heading-content heading-content-spacing">
                  <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                    Online Store Development
                  </Typography>
                  <Typography variant="h6" paragraph sx={{ mb: 5 }}>
                    We don't just design eCommerce stores—we build experiences
                    that feel effortless. From the very first click to the final
                    checkout, every step is crafted to keep your customers coming
                    back.
                  </Typography>
                </Box>
                <Box className="heading-content" align="center">
                  <Link href="/contactus" variant="contained" className="main-primary-btn">
                    Start Building Today
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

      {/* What We Bring to Your Online Store */}
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
                What We{" "}
                <span style={{ color: "#009FE3" }}>
                  Bring to Your Online{" "}
                  <span className="span-text">
                    Store
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
                <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                  <Box className="solution-card online-store-solution-card">
                    <Box className="solution-online-store-details">
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
                    <Box className="solution-icon">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        className="solution-icon-svg"
                      />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </motion.section>

      {/* Smart Features That Power Your Online Store */}
      <Box
        className="smart-solutions-section"
        sx={{ py: { xs: 3, md: 4, lg: 5 } }}
      >
        <Container className="custom-container" maxWidth="lg">
          <motion.section {...fadeInUp}>
            <Box className="heading-content">
              <Typography
                variant="h2"
                align="center"
                sx={{ mb: 5, fontWeight: 700 }}
              >
                Smart Features{" "}
                <span style={{ color: "#009FE3" }}>
                  That Power Your Online{" "}
                  <span className="span-text">
                    Store
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>
          </motion.section>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12 }}>
              <Box className="smart-features-wrapper online-store-development-swiper">
                <Swiper
                  key={`swiper-${isMobile ? 'mobile' : 'desktop'}`}
                  direction={isMobile ? "horizontal" : "vertical"}
                  autoHeight={isMobile}
                  spaceBetween={20}
                  pagination={{ clickable: true }}
                  mousewheel={isMobile ? false : { sensitivity: 1, releaseOnEdges: true }}
                  modules={isMobile ? [Pagination] : [Pagination, Mousewheel]}
                  onSwiper={(swiper) => {
                    if (isMobile && swiper?.mousewheel && typeof swiper.mousewheel.disable === 'function') {
                      swiper.mousewheel.disable();
                    }
                  }}
                  className="mySwiper"
                >
                  {smartFeaturesSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <Grid
                        container
                        alignItems={{ xs: "flex-start", md: "end" }}
                        spacing={2}
                        className="smart-features-grid"
                      >
                        <Grid className="smart-features-wrapper" size={{ xs: 12, sm: 6, md: 8 }} sx={{ order: { xs: 2, sm: 1 } }}>
                          <Box className="smart-features-content">
                            <Box className="smart-features-text">
                              <Typography variant="h5" sx={{ mb: 2 }}>
                                {slide.title}
                              </Typography>
                              <Typography variant="body1" sx={{ mb: 2 }}>
                                {slide.description}
                              </Typography>
                            </Box>

                            {slide.features.length > 0 && (
                              <Box className="smart-features-list">
                                {slide.features.map((feature, idx) => (
                                  <Box
                                    className="smart-features-inner"
                                    key={idx}
                                  >
                                    <Typography variant="h6" sx={{ mb: 2 }}>
                                      {feature.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 2 }}>
                                      {feature.description}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            )}
                          </Box>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ order: { xs: 1, sm: 2 } }}>
                          <Box className="smart-features-image">
                            <Image
                              src={slide.image}
                              sx={{ width: "100%", height: "auto" }}
                              alt={slide.alttext}
                            />
                          </Box>
                        </Grid>
                      </Grid>

                      <Image
                        src={SmartFeaturesShape}
                        className="smart-features-shape"
                        alt="Smart Features Shape"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Let's Show You What Makes Us Different */}
      <Box className="lets-show-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Box className="heading-content">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 5, fontWeight: 700, color: "#ffffff" }}
          >
            Let's Show{" "}
            <span style={{ color: "#009FE3" }}>
              You What Makes Us{" "}
              <span className="span-text">
                Different
                <div className="line-container">
                  <div className="line-wrapper"></div>
                  <div className="line"></div>
                  <div className="moving-box"></div>
                </div>
              </span>
            </span>
          </Typography>
        </Box>
        <Box className="lets-show-content">
          <Container className="custom-container" maxWidth="lg" disableGutters>
            {/* Header Row */}
            <Grid
              container
              className="lets-show-inner-row"
              sx={{ textAlign: "center", mb: 2 }}
            >
              <Grid
                size={{ xs: 4, sm: 4, md: 4 }}
                className="lets-show-inner-column column-first"
              >
                <Typography variant="h6">USS</Typography>
              </Grid>
              <Grid
                size={{ xs: 4, sm: 4, md: 4 }}
                className="lets-show-inner-column column-center"
                sx={{ backgroundColor: "#111" }}
              >
                <Typography variant="h6">V / S</Typography>
              </Grid>
              <Grid
                size={{ xs: 4, sm: 4, md: 4 }}
                className="lets-show-inner-column column-last"
              >
                <Typography variant="h6">Others</Typography>
              </Grid>
            </Grid>

            {/* Data Rows */}
            {comparisonData.map((item, index) => (
              <Grid
                container
                key={index}
                className="lets-show-inner-row"
                sx={{ textAlign: "center", borderTop: "1px solid #333" }}
              >
                {/* USS */}
                <Grid
                  size={{ xs: 4, sm: 4, md: 4 }}
                  className="lets-show-inner-column column-first"
                >
                  <Box className="lets-show-inner-text" sx={{ py: 2 }}>
                    {item.uss.icon}
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {item.uss.text}
                    </Typography>
                  </Box>
                </Grid>

                {/* VS */}
                <Grid
                  size={{ xs: 4, sm: 4, md: 4 }}
                  className="lets-show-inner-column column-center"
                  sx={{ backgroundColor: "#111" }}
                >
                  <Box className="lets-show-inner-text" sx={{ py: 2 }}>
                    {item.vsIcon}
                    <Typography variant="body2" sx={{ mt: 1, color: "#aaa" }}>
                      {item.label}
                    </Typography>
                  </Box>
                </Grid>

                {/* Others */}
                <Grid
                  size={{ xs: 4, sm: 4, md: 4 }}
                  className="lets-show-inner-column column-last"
                >
                  <Box className="lets-show-inner-text" sx={{ py: 2 }}>
                    {item.others.icon}
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {item.others.text}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Container>
        </Box>
      </Box>

      {/* call-to-action Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ mt: 6, mb: 3 }} className="call-to-action-wrapper">
          <Container className="custom-container" maxWidth="lg">
            <Box
              sx={{ p: 4, backgroundColor: "#222222", borderRadius: 3 }}
              className="call-to-action-innerbox"
            >
              <Box className="heading-content pr">
                <Typography variant="h2" sx={{ my: 2, color: "white" }}>
                  Get Your E-Commerce Website Now.
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

      {/* technology tab Section */}
      <TechnologyStacks />

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
              <span style={{ color: "#009FE3" }}>
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

      {/* Say Goodbye to Store Stress Go Digital with Confidence */}
      <Box className="lets-show-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Box className="heading-content">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 5, fontWeight: 700, color: "#ffffff" }}
          >
            Say Goodbye to{" "}
            <span style={{ color: "#009FE3" }}>
              Store Stress Go Digital with{" "}
              <span className="span-text">
                Confidence
                <div className="line-container">
                  <div className="line-wrapper"></div>
                  <div className="line"></div>
                  <div className="moving-box"></div>
                </div>
              </span>
            </span>
          </Typography>
        </Box>
        <Box className="pain-points-solutions-main">
          <Typography variant="h1" className="pain-points-big-text">
            Pain Points
          </Typography>
          <Box className="pain-points-solutions-inner">
            <Image src={SayGoodbyeImg} alt="Say-Goodbye Img" />

            <Box className="pain-point-solution-wrapper">
              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list time-restrictions">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Time Restrictions
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    When your store closes, sales stop—losing customers who shop
                    after hours or weekends.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list limited-reach">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Limited Reach
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Traditional stores limit to local walk-ins; expanding requires
                    costly investments, restricting growth potential.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list manual-management">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Manual Management
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Manual billing and inventory cause errors, delays, stock
                    issues—resulting in lost sales and unhappy customers.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list high-overheads">
                  <Typography variant="h6" className="pain-point-solution-title">
                    High Overheads
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Physical stores have high fixed costs—rent, utilities,
                    staff—that reduce profits during slow seasons.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list slow-checkout">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Slow Checkout
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Manual billing slows checkout, causes long lines, and
                    frustrates customers—hurting both sales and satisfaction.
                  </Typography>
                </Box>
              </motion.section>

              <motion.section {...fadeInUp}>
                <Box className="pain-point-solution-list traditional-marketing">
                  <Typography variant="h6" className="pain-point-solution-title">
                    Traditional Marketing
                  </Typography>
                  <Typography
                    variant="body2"
                    className="pain-point-solution-description"
                  >
                    Traditional marketing lacks tracking, making it guesswork to
                    measure reach, effectiveness, or improve strategies.
                  </Typography>
                </Box>
              </motion.section>
            </Box>
          </Box>
          <Typography variant="h1" className="pain-points-big-text text-end">
            Solutions
          </Typography>
        </Box>
      </Box>

      {/* solution process section */}
      <Box className="solution-process-section">
        <Container className="custom-container" maxWidth="lg">
          <motion.section {...fadeLeft}>
            <Grid container className="solution-process-inner">
              <Grid className='solution-process-column' size={{ xs: 12, sm: 12, md: 12, lg: 10, xl: 6 }}>
                <Box className="holderCircle">
                  <Box className="round" />
                  <Box className="dotCircle" ref={dotCircleRef}>
                    {dotsData.map((dot, i) => (
                      <Box
                        key={i}
                        className={`itemDot ${activeDotIndex === i ? "active" : ""
                          }`}
                        data-tab={i + 1}
                        onClick={() => handleDotClick(i)}
                        ref={(el) => (itemDotsRef.current[i] = el)}
                      >
                        <Image
                          src={dot.icon}
                          alt={dot.title}
                          width={36}
                          height={36}
                        />
                        <span className="forActive"></span>
                      </Box>
                    ))}
                  </Box>

                  <Box className="contentCircle">
                    {dotsData.map((dot, i) => (
                      <Box
                        key={i}
                        className={`CirItem ${activeDotIndex === i ? "active" : ""
                          } CirItem${i + 1} title-box`}
                      >
                        <h2 className="title">
                          <span>{dot.title}</span>
                        </h2>
                        <p>{dot.text}</p>
                        <i className={`fa ${dot.icon}`} />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </motion.section>
        </Container>
      </Box>

      {/* contact form */}
      <motion.section {...fadeInUp}>
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography
              variant="h2"
              align="center"
              sx={{ mt: 6, mb: 4, fontWeight: 700 }}
            >
              Need a{" "}
              <span style={{ color: "#009FE3" }}>
                {" "}
                Custom Online Store? Le
                <span className="span-text">
                  t's Talk
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

export default CompOnlineStoreDevelopment;
