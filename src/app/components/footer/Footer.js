"use client";

import React, { useState, useEffect, useRef } from "react";
import { Grid, Box, Container, Typography, Link } from "@mui/material";
import NextLink from "next/link";
import { useTheme, useMediaQuery } from '@mui/material';
import Image from "next/image";
import MapImage from "@/map-image.svg?url";
import IconPhone from "@/icon-phone.svg?url";
import IconEmail from "@/icon-sms.svg?url";
import IconLinkin from "@/icon-linkedin.svg?url";
import IconInstgram from "@/icon-instagram.svg?url";
import IconFacebook from "@/icon-facebook.svg?url";
import IconBehance from "@/icon-behance.svg?url";
import IconDribble from "@/icon-dribbble.svg?url";
import IconTwiter from "@/icon-twitter.svg?url";
import IconPointer from "@/icon-pintrest.svg?url";
import CirfitificateImg1 from "@/cirfitificate-img1.webp";
import CirfitificateImg2 from "@/cirfitificate-img2.webp";
import CirfitificateImg3 from "@/cirfitificate-img3.webp";
import CirfitificateImg4 from "@/cirfitificate-img4.webp";

const Footer = () => {

  const [activeLocation, setActiveLocation] = useState("india"); // controls line animation
  const [showLocationInfo, setShowLocationInfo] = useState("india"); // controls visible info
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Old h3-based gradient tracking removed; SVG mouse tracking is used instead.

  const handleDotClick = (location) => {
    if (location === activeLocation) return;

    setActiveLocation(location); // starts line animation
    setTimeout(() => {
      setShowLocationInfo(location); // changes info AFTER animation
    }, 900); // match line animation duration
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const companyName = "Universal Stream Solution Pvt Ltd";
  const usaCircleRef = useRef(null);
  const indCircleRef = useRef(null);

  const handleSvgMouseMove = (e, circleRef) => {
    if (!circleRef?.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    circleRef.current.setAttribute("cx", `${x}%`);
    circleRef.current.setAttribute("cy", `${y}%`);
  };

  const handleSvgMouseEnter = (circleRef) => {
    if (!circleRef?.current) return;
    circleRef.current.setAttribute("r", "10%");
  };

  const handleSvgMouseLeave = (circleRef) => {
    if (!circleRef?.current) return;
    circleRef.current.setAttribute("r", "0%");
  };

  return (
    <Box className="footer-main">
      <Container className="custom-container">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 12 }}>
            <Box className="footer-top">
              <Grid
                container
                direction="row"
                sx={{ justifyContent: "center", alignItems: "center" }}
                spacing={2}
              >
                <Grid size={{ xs: 12, sm: 12, md: 8 }}>
                  <Box className="company-address">
                    <Box className="company-image">
                      <Image
                        src={MapImage}
                        alt="Map"
                        className="company-image-box"
                      />
                      <Box className="map-pin-main">
                        {/* <Box
                          className={`blue-dot blue-dot1 ${activeLocation === "usa" ? "animate-line" : ""
                            }`}
                          onClick={() => setActiveLocation("usa")}
                        >
                          <Box className="dot-design"></Box>
                        </Box>
                        <Box
                          className={`blue-dot blue-dot2 ${activeLocation === "india" ? "animate-line" : ""
                            }`}
                          onClick={() => setActiveLocation("india")}
                        >
                          <Box className="dot-design"></Box>
                        </Box> */}
                        <Box
                          className={`blue-dot blue-dot1 ${activeLocation === "usa" ? "animate-line" : ""}`}
                          onClick={() => handleDotClick("usa")}
                        >
                          <Box className="dot-design" />
                        </Box>
                        <Box
                          className={`blue-dot blue-dot2 ${activeLocation === "india" ? "animate-line" : ""}`}
                          onClick={() => handleDotClick("india")}
                        >
                          <Box className="dot-design" />
                        </Box>

                      </Box>
                    </Box>

                    {/* India Address */}
                    <Box
                      className={`company-address-details ${showLocationInfo === "india" ? "show" : "hide"}`}
                      id="india-info"
                    >
                      <Typography variant="h4">India</Typography>
                      <Typography variant="h3">
                        Universal Stream Solution Pvt. Ltd.
                      </Typography>
                      <Typography variant="body1">
                        712/713, Shaligram Arcade, Ambali T Junction, Vakil Bridge, Bopal, Ahmedabad, Gujarat - 380058
                      </Typography>
                      <Link href="tel:+919638225579" sx={{ textDecoration: "none" }}>
                        <Typography variant="h5">
                          <Image
                            src={IconPhone}
                            alt="Phone"
                            className="icon-call"
                          />{" "}
                          +91 9638225579
                        </Typography>
                      </Link>
                    </Box>

                    {/* USA Address */}
                    <Box
                      className={`company-address-details ${showLocationInfo === "usa" ? "show" : "hide"}`}
                      id="atlanta-info"
                    >
                      <Typography variant="h4">United States</Typography>
                      <Typography variant="h3">
                        Universal Stream Solution LLC
                      </Typography>
                      <Typography variant="body1">
                        {isMobile ? (
                          "3778 HWY 42, Suite B, Locust Grove – 30248, Atlanta, Georgia, USA."
                        ) : (
                          <>
                            3778 HWY 42, Suite B, <br />
                            Locust Grove – 30248, <br />
                            Atlanta, Georgia, USA.
                          </>
                        )}
                      </Typography>
                      <Link href="tel:+16787204961" sx={{ textDecoration: "none" }} >
                        <Typography variant="h5">
                          <Image
                            src={IconPhone}
                            alt="Phone"
                            className="icon-call"
                          />{" "}
                          +1 (678) 720-4961
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                  <Box className="helping-you-text">
                    <Typography variant="h3">
                      Helping you move forward with{" "}
                      <Typography component="span">confidence.</Typography>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box className="footer-middale">
              <Grid container direction="row" spacing={{ xs: 4, md: 2, lg: 3 }}>
                {/* <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}> */}
                {/* <Grid container direction="row" spacing={3}> */}
                <Grid size={{ xs: 12, sm: 4, md: 4, lg: 2 }}>
                  <Box className="important-link">
                    <Typography variant="h3">Company</Typography>
                    <Box className="important-link-inner">
                      <NextLink href="/about-us">About Us</NextLink>
                      <NextLink href="/career">Career</NextLink>
                      <NextLink href="/blog">Our Blog</NextLink>
                      <NextLink href="/life">Life @ USS</NextLink>
                      <NextLink href="/partnership-program">USS Partnership Programmers</NextLink>
                      <NextLink href="/contactus">Contact Us</NextLink>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 4, md: 4, lg: 2.6 }}>
                  <Box className="important-link">
                    <Typography variant="h3">
                      Our Core Services
                    </Typography>
                    <Box className="important-link-list">
                      <Box className="important-link-inner">
                        <NextLink href="/how-we-help/web-design-and-development">Web Design &  Development </NextLink>
                        <NextLink href="/how-we-help/mobile-application-devlopment">Mobile App Development </NextLink>
                        <NextLink href="/how-we-help/custom-software-development">Custom Software Development</NextLink>
                        <NextLink href="/how-we-help/graphics-and-ui-ux-design">Graphic & Product Design </NextLink>
                        <NextLink href="/how-we-help/digital-marketing">Digital Marketing</NextLink>
                        <NextLink href="/how-we-help/emerging-technology">Emerging Technology</NextLink>
                        <NextLink href="/how-we-help/testing-and-quality-control">Testing & Quality Control </NextLink>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                {/* </Grid> */}
                {/* </Grid> */}
                {/* <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}> */}
                {/* <Grid container direction="row" spacing={3}> */}
                <Grid size={{ xs: 12, sm: 4, md: 4, lg: 2.6 }}>
                  <Box className="important-link">
                    <Typography variant="h3">Digital Solutions</Typography>
                    <Box className="important-link-inner">
                      {/* <Link href="/healthcare-tech/cyber-security-and-cloud-management">Cyber Security & Cloud</Link> */}
                      {/* <Link href="#">Cyber Security & Cloud</Link> */}
                      <NextLink href="/solutions/enterprise-software-development">Enterprise Solutions</NextLink>
                      <NextLink href="/solutions/online-store-development">Online Store Development</NextLink>
                      <NextLink href="/solutions/custom-business-application">Custom Business Application</NextLink>
                      <NextLink href="/healthcare">Healthcare Tech Solutions</NextLink>
                      <NextLink href="/solutions/other-industry-expertise">Other Industry Expertise</NextLink>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 4, md: 4, lg: 2 }}>
                  <Box className="important-link">
                    <Typography variant="h3">Quick Links</Typography>
                    <Box className="important-link-inner">
                      <NextLink href="/cookie-policy">Cookie Policy</NextLink>
                      <NextLink href="/disclaimer">Disclaimer</NextLink>
                      <NextLink href="/security-risk">Security Policy</NextLink>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.6 }}>
                  <Box className="important-link">
                    <Typography variant="h3">Email</Typography>
                    <Box className="important-link-email">
                      <Link href="mailto:sales@universalstreamsolution.com">
                        <Image
                          src={IconEmail}
                          alt="Phone"
                          className="icon-call"
                        />{" "}
                        sales@universalstreamsolution.com
                      </Link>
                    </Box>
                  </Box>
                  <Box className="important-link" mt={2}>
                    <Typography variant="h3">Follow Us</Typography>
                    <Box className="important-link-email">
                      <Link href="https://www.linkedin.com/company/universalstreamsolution/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                        <Image
                          src={IconLinkin}
                          alt="IconLinkin"
                          className="icon-call"
                        />
                      </Link>
                      <Link href="https://www.facebook.com/universalstreamsolution" target="_blank" rel="noopener noreferrer">
                        <Image
                          src={IconFacebook}
                          alt="IconFacebook"
                          className="icon-call"
                        />
                      </Link>
                      <Link href="https://www.instagram.com/universalstreamsolution/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src={IconInstgram}
                          alt="IconInstgram"
                          className="icon-call"
                        />
                      </Link>
                      <Link href="https://www.behance.net/ussllc" target="_blank" rel="noopener noreferrer">
                        <Image
                          src={IconBehance}
                          alt="IconBehance"
                          className="icon-call"
                        />
                      </Link>
                      <Link href="https://dribbble.com/universalstreamsolution" target="_blank" rel="noopener noreferrer">
                        <Image
                          src={IconDribble}
                          alt="IconDribble"
                          className="icon-call"
                        />
                      </Link>
                      <Link href="https://x.com/ussllc_" target="_blank" rel="noopener noreferrer">
                        <Image
                          src={IconTwiter}
                          alt="IconTwiter"
                          className="icon-call"
                        />
                      </Link>
                      <Link href="https://in.pinterest.com/universalstreamsolution/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src={IconPointer}
                          alt="IconPointer"
                          className="icon-call"
                        />
                      </Link>
                    </Box>

                    <Box className="cirfitificate-image" mt={2}>
                      <Link href="/">
                        <Image
                          src={CirfitificateImg1}
                          alt="CirfitificateImg1"
                          className="icon-call"
                        />
                      </Link>
                      <Link href="/">
                        <Image
                          src={CirfitificateImg2}
                          alt="CirfitificateImg2"
                          className="icon-call"
                        />
                      </Link>
                      <Link href="/">
                        <Image
                          src={CirfitificateImg3}
                          alt="CirfitificateImg3"
                          className="icon-call"
                        />
                      </Link>
                      <Link href="/">
                        <Image
                          src={CirfitificateImg4}
                          alt="CirfitificateImg4"
                          className="icon-call"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Grid>
                {/* </Grid> */}
                {/* </Grid> */}
              </Grid>
            </Box>

            <Box className="footer-company-name">
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 12 }}>
                  <Box className="company-name-double-text">
                    {/* <Box className="company-name-animation-container">
                      <Typography 
                        variant="h3"
                        className={`company-name-text ${showLocationInfo === "usa" ? "active" : "inactive"}`}
                        data-company="usa"
                      >
                        Universal Stream Solution LLC
                      </Typography>
                      <Typography 
                        variant="h3"
                        className={`company-name-text ${showLocationInfo === "india" ? "active" : "inactive"}`}
                        data-company="india"
                      >
                        Universal Stream Solution Pvt Ltd
                      </Typography>
                    </Box> */}

                    <Box className="company-name-animation-container">
                      {/* USA Version with Animated SVG */}
                      <Box
                        className={`company-name-text ${showLocationInfo === "usa" ? "active" : "inactive"}`}
                        data-company="usa"
                        onMouseMove={(e) => handleSvgMouseMove(e, usaCircleRef)}
                        onMouseEnter={() => handleSvgMouseEnter(usaCircleRef)}
                        onMouseLeave={() => handleSvgMouseLeave(usaCircleRef)}
                      >
                        <svg
                          viewBox="0 0 1000 120"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ width: "100%", height: "auto" }}
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <defs>
                            {/* Gradient for fill */}
                            <linearGradient id="textGradientUSA" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#03b0ef" />
                              <stop offset="50%" stopColor="#f58436" />
                              <stop offset="100%" stopColor="#03b0ef" />
                            </linearGradient>

                            {/* Soft-edge blur filter for circular mask */}
                            <filter id="featherUSA" x="-50%" y="-50%" width="200%" height="200%">
                              <feGaussianBlur stdDeviation="8" />
                            </filter>

                            {/* Circle mask for rounded cursor */}
                            <mask id="textMaskUSA" maskUnits="objectBoundingBox">
                              <rect width="100%" height="100%" fill="black" />
                              <circle ref={usaCircleRef} cx="70%" cy="70%" r="0%" fill="white" filter="url(#featherUSA)" />
                            </mask>
                          </defs>

                          {/* Base stroke (neutral line text) */}
                          <text
                            x="0"
                            y="50%"
                            dy=".35em"
                            textAnchor="start"
                            fill="none"
                            stroke="#6b7280"
                            strokeWidth="0.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                            style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "bold", fontSize: "clamp(2rem, 7vw, 4.2rem)" }}
                          >
                            Universal Stream Solution LLC
                          </text>

                          {/* Gradient FILL revealed only under mask */}
                          <text
                            x="0"
                            y="50%"
                            dy=".35em"
                            textAnchor="start"
                            fill="url(#textGradientUSA)"
                            mask="url(#textMaskUSA)"
                            style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "bold", fontSize: "clamp(2rem, 7vw, 4.2rem)" }}
                          >
                            Universal Stream Solution LLC
                          </text>
                        </svg>
                      </Box>

                      {/* India Version */}
                      <Box
                        className={`company-name-text ${showLocationInfo === "india" ? "active" : "inactive"}`}
                        data-company="india"
                        onMouseMove={(e) => handleSvgMouseMove(e, indCircleRef)}
                        onMouseEnter={() => handleSvgMouseEnter(indCircleRef)}
                        onMouseLeave={() => handleSvgMouseLeave(indCircleRef)}
                      >
                        <svg
                          viewBox="0 0 1000 120"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ width: "100%", height: "auto" }}
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <defs>
                            {/* Gradient for fill */}
                            <linearGradient id="textGradientIND" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#03b0ef" />
                              <stop offset="50%" stopColor="#f58436" />
                              <stop offset="100%" stopColor="#03b0ef" />
                            </linearGradient>

                            {/* Soft-edge blur filter for circular mask */}
                            <filter id="featherIND" x="-50%" y="-50%" width="200%" height="200%">
                              <feGaussianBlur stdDeviation="8" />
                            </filter>

                            {/* Circle mask for rounded cursor */}
                            <mask id="textMaskIND" maskUnits="objectBoundingBox">
                              <rect width="100%" height="100%" fill="black" />
                              <circle ref={indCircleRef} cx="70%" cy="70%" r="0%" fill="white" filter="url(#featherIND)" />
                            </mask>
                          </defs>

                          {/* Base stroke (neutral line text) */}
                          <text
                            x="0"
                            y="50%"
                            dy=".35em"
                            textAnchor="start"
                            fill="none"
                            stroke="#6b7280"
                            strokeWidth="0.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                            style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "bold", fontSize: "clamp(2rem, 7vw, 3.85rem)" }}
                          >
                            Universal Stream Solution Pvt Ltd
                          </text>

                          {/* Gradient FILL revealed only under mask */}
                          <text
                            x="0"
                            y="50%"
                            dy=".35em"
                            textAnchor="start"
                            fill="url(#textGradientIND)"
                            mask="url(#textMaskIND)"
                            style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "bold", fontSize: "clamp(2rem, 7vw, 3.85rem)" }}
                          >
                            Universal Stream Solution Pvt Ltd
                          </text>
                        </svg>
                      </Box>
                    </Box>

                    {/* Cursor following circle */}
                    <div className="cursor-circle"></div>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box className="footer-copyright-section">
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box className="copyright-text">
                    <Typography variant="p">
                      © Copyright 2025 USS Pvt Ltd. All rights reserved.
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box className="important-link-inner copyright-link">
                    <NextLink href="/privacy-policy">Privacy Policy</NextLink>
                    <NextLink href="/terms-conditions">Terms & Conditions</NextLink>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
