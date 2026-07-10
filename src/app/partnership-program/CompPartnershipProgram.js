"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
    Box,
    Typography,
    Container,
    Grid,
    useMediaQuery,
    useTheme,
    IconButton,
    Card,
    CardContent,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import PartnershipBanner from "@/partnership-bg.webp";
import Tech from "@/partnership-tech.svg?url";
import Business from "@/partnership-business.svg?url";
import Skills from "@/partnership-skills.svg?url";
import Profitability from "@/partnership-profitability.svg?url";
import Rocket from "@/partnership-rocket.svg?url";

// import BlackBG from "@/partnership-black-bg.svg?url"

import RxValetLogo from "@/companylogo/rxvalet.svg?url";
import AdvancePharmacyLogo from "@/companylogo/advance-pharmacy.svg?url";
import TestimonialBobthompson from "@/bobthompson.webp";
import TestimonialGreg from "@/greg.webp";
import TestimonialTinarockwell from "@/tinarockwell.webp";
import ShieldLogo from "@/companylogo/icon-shield-review.svg?url";
import TestimonialShape1 from "@/testimonial-shape1.svg?url";
import TestimonialShape2 from "@/testimonial-shape2.svg?url";
import ArrowBackIcon from "@/right-arrow.svg?url";
import ArrowForwardIcon from "@/left-arrow.svg?url";

import Data from "@/partner-data.svg?url";
import ShieldTick from "@/partner-shield-tick.svg?url";
import MedalStar from "@/partner-medal-star.svg?url";
import Message from "@/message.svg?url";
import Eye from "@/eye.svg?url";
// import Tailored from "@/tailored.svg?url";
// import Tailored from "@/tailored2.svg?url";
import Tailored from "@/tailored3.svg?url";

import { motion, AnimatePresence } from "framer-motion";
import PartnershipContact from "~/contact/PartnershipContact";
import Metadata from "~/meta/Metadata";


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

const items = [
    {
        title: "We Understand Your Vision",
        desc: "We take time to deeply understand your goals, challenges, and industry before creating solutions.",
        img: Eye,
    },
    {
        title: "Tailored Solutions, Not Templates",
        desc: "Every project is built from scratch to fit your unique needs — no cookie-cutter approaches.",
        img: Tailored,
    },
    {
        title: "Direct & Transparent Communication",
        desc: "You work directly with our dedicated team, ensuring clarity, quick decisions, and zero communication gaps.",
        img: Message,
    },
    {
        title: "Commitment To Quality",
        desc: "We treat every project like our own, with attention to detail and a focus on long-term results.",
        img: MedalStar,
    },
    {
        title: "Dynamic & Reliable",
        desc: "We adapt to your timelines, requirements, and evolving business needs — while staying dependable.",
        img: ShieldTick,
    },
    {
        title: "Cooperative Approach",
        desc: "We’re not just here to deliver a project; we’re here to be a long-term ally in your growth and success.",
        img: Data,
    },
];

const fadeInUp = {
    initial: { opacity: 0, y: 45 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
    viewport: { once: true, amount: 0.2 },
};


const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    viewport: { once: true, amount: 0.2 }
};

const CompPartnershipProgram = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [journeyIndex, setjourneyIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const safeItem = items[activeIndex] || items[0];
    const bgSrc = typeof safeItem?.img === "string" ? safeItem.img : safeItem?.img?.src || "";

    const swiperRef = useRef(null);

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
                title="Partnership – Collaborate & Grow Together"
                description="Explore partnership opportunities with us to innovate, expand reach, and achieve mutual growth through collaboration, trust, and shared expertise."
            /> */}

            {/* Banner Section */}
            <motion.section {...fadeIn}>
                <Box className="about-banner-section">
                    <Container className="custom-container" maxWidth="lg">
                        <Grid container spacing={2} justifyContent="center">
                            <Grid size={{ xs: 12, md: 10, lg: 8 }}>
                                <Box className="heading-content about-banner-content">
                                    <Typography variant="h1" sx={{ color: "#f28c38", mb: 1 }}>
                                        Power your business with the right IT partner
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box className="about-banner-image" sx={{ py: 3 }}>
                            <Image src={PartnershipBanner} alt="Partnership" />
                            <Box className="about-banner-wwa">
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                    Growth Through Partnership
                                </Typography>
                                <Typography variant="h6" paragraph>
                                    Since 2013, we've partnered with businesses built on trust, collaboration & shared vision. From concept to support, we combine strategy, creativity & expertise to turn ideas into results & drive growth together. Our commitment is to be your long term partner in innovation & success. Together, we can turn today's challenges into tomorrow's opportunities.
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </motion.section>

            {/* partnership-benefits Section */}
            <motion.section {...fadeInUp}>
                <Box
                    className="partnership-benefits-wrapper"
                    sx={{ my: { xs: 3, md: 4, lg: 6 } }}
                >
                    <Container className="custom-container" maxWidth="lg">

                        <Box className="heading-content">
                            <Typography variant="h2" sx={{ mb: 5, fontWeight: 700 }}>
                                B<span className="span-text">
                                    enefits
                                    <div className="line-container">
                                        <div className="line-wrapper"></div>
                                        <div className="line"></div>
                                        <div className="moving-box"></div>
                                    </div>
                                </span>
                            </Typography>
                        </Box>

                        <Grid container spacing={3}>
                            {/* Access to Latest Technologies */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Card className="partnership-card tech-card">
                                    <CardContent className="partnership-card-inner">
                                        <Box className="partnership-image">
                                            <Image src={Tech} alt="Latest Technologies" />
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" className="partnership-title">
                                                Access to Latest Technologies
                                            </Typography>
                                            <Typography variant="body1" className="partnership-text">
                                                Organizations invest in tools, frameworks, and training so you
                                                get modern, future-proof solutions.
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Business-Centric Approach */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Card className="partnership-card business-card">
                                    <CardContent className="partnership-card-inner">
                                        <Box className="partnership-image">
                                            <Image src={Business} alt="Business-Centric" />
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" className="partnership-title">
                                                Business-Centric Approach
                                            </Typography>
                                            <Typography variant="body1" className="partnership-text">
                                                Teams strategically align technology with your business goals,
                                                not just code to meet specs.
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Quick & Scalable */}
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Card className="partnership-card quick-card">
                                    <CardContent className="partnership-card-inner">
                                        <Box className="partnership-image">
                                            <Image src={Rocket} alt="Quick & Scalable" />
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" className="partnership-title">
                                                Quick & Scalable
                                            </Typography>
                                            <Typography variant="body1" className="partnership-text">
                                                Multiple experts working in parallel means projects get done
                                                faster and can scale.
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Higher Profitability */}
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Card className="partnership-card profit-card">
                                    <CardContent className="partnership-card-inner">
                                        <Box className="partnership-image">
                                            <Image src={Profitability} alt="Profitability" />
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" className="partnership-title">
                                                Higher Profitability
                                            </Typography>
                                            <Typography variant="body1" className="partnership-text">
                                                We help you cut costs, increase efficiency, and boost revenue
                                                for greater profitability.
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* All-in-One Skills */}
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Card className="partnership-card skills-card">
                                    <CardContent className="partnership-card-inner">
                                        <Box className="partnership-image">
                                            <Image src={Skills} alt="Skills" />
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" className="partnership-title">
                                                All-in-One Skills
                                            </Typography>
                                            <Typography variant="body1" className="partnership-text">
                                                From strategy to design, development, testing, and support — all
                                                under one roof.
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </motion.section>

            <motion.section {...fadeInUp}>
                <Box
                    className="partnership-black-wrapper"
                    sx={{ py: 6, mb: { xs: 3, md: 4, lg: 5 } }}
                >
                    {/* <Image src={BlackBG} alt="about-banner" className="black-bg-shape" /> */}
                    <Container className="custom-container" maxWidth="lg">

                        <Box className="heading-content" pb={4}>
                            <Typography
                                variant="h2"
                                align="center"
                                sx={{ my: 2, color: "white", fontWeight: 700 }}
                            >
                                What Makes{" "}
                                <span className="primary-color">
                                    Us the Right Pa
                                    <span className="span-text">
                                        rtner
                                        <div className="line-container">
                                            <div className="line-wrapper"></div>
                                            <div className="line"></div>
                                            <div className="moving-box"></div>
                                        </div>
                                    </span>
                                </span>
                            </Typography>
                        </Box>

                        <Box className="communication-section">
                            {/* Background images */}
                            <Box className="bg-wrapper">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={bgSrc}
                                        src={bgSrc}
                                        alt={safeItem.title}
                                        className="bg-image"
                                        initial={{ opacity: 0, x: 15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </AnimatePresence>
                            </Box>

                            {/* Text grid */}
                            <Grid container direction="column" spacing={3}>
                                {items.map((item, index) => (
                                    <Grid
                                        item
                                        key={index}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        className={`communication-item ${activeIndex === index ? "active" : ""
                                            }`}
                                    >
                                        <Typography variant="h6" className="communication-title">
                                            {item.title}
                                        </Typography>

                                        <AnimatePresence>
                                            {activeIndex === index && (
                                                <Box
                                                    component={motion.div}
                                                    className="communication-desc"
                                                    initial={{ opacity: 0, x: 30 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <Typography>{item.desc}</Typography>
                                                </Box>
                                            )}
                                        </AnimatePresence>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                    </Container>
                </Box>
            </motion.section>

            {/* testimonials Section */}
            <Box
                sx={{ py: 4, my: 5 }}
                id="next-section"
                className="testimonial-section-wrapper"
            >
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
                            <Image src={ArrowBackIcon} alt="Back" width={24} height={24} />
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
                            <Image src={ArrowForwardIcon} alt="Back" width={24} height={24} />
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
                                                        style={{ width: "auto", height: "100%" }}
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


            {/* contact form */}
            <motion.section {...fadeInUp}>
                <Container className="custom-container" maxWidth="lg">
                    <Box className="heading-content">
                        <Typography
                            variant="h2"
                            align="center"
                            sx={{ mt: 6, mb: 5, fontWeight: 700 }}
                        >
                            Let's Build{" "}
                            <span className="primary-color">
                                Success To
                                <span className="span-text">
                                    gether
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
                <PartnershipContact />
            </motion.section>
        </>
    );
};

export default CompPartnershipProgram;
