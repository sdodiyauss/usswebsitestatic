"use client";

import { Box, Container, Grid, Typography, Link } from "@mui/material";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Metadata from "~/meta/Metadata";
import { motion, AnimatePresence } from "framer-motion";

import PBCaseStudy from "@/rx-banner.webp";
import PBInsight from "@/rxvalet-insight.webp";
import Vector1 from "@/vector8.svg?url";
import Vector2 from "@/vector9.svg?url";
import Vector3 from "@/vector11.svg?url";
import Vector7 from "@/vector10.svg?url";
import Vector4 from "@/vector4.svg?url";
import Vector5 from "@/vector5.svg?url";
import Vector6 from "@/vector6.svg?url";
import ChecksVector from "@/checks-vector3.svg?url";
import ChecksVector2 from "@/checks-vector4.svg?url";
import PBImpact from "@/rxvalet-impact.webp";
import ApproachGroup from "@/rx-approach-group.svg?url";
import PBApproach from "@/rx-approach.webp";
import PB1 from "@/rx1.webp";
import PB2 from "@/rx2.webp";
import PB3 from "@/rx3.webp";
import PB4 from "@/rx4.webp";
import RxValetLogo from "@/rx-valet.webp";
import ThanksImg1 from "@/rx-m1.webp";
import ThanksImg2 from "@/rx-m2.webp";
import ThanksImg3 from "@/rx-m3.webp";
import ThanksImg4 from "@/rx-m4.webp";
import ThanksImg5 from "@/rx-m5.webp";
import ThanksImg6 from "@/rx-m6.webp";
import ThanksImg7 from "@/rx-m7.webp";
import ThanksImg8 from "@/rx-m8.webp";
import ThanksImg9 from "@/rx-m9.webp";
import ThanksImg10 from "@/rx-m10.webp";

const ThanksSwiper1 = [ThanksImg1, ThanksImg2, ThanksImg3];
const ThanksSwiper2 = [ThanksImg4, ThanksImg5, ThanksImg6, ThanksImg7];
const ThanksSwiper3 = [ThanksImg8, ThanksImg9, ThanksImg10];

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

const CompRxvaletCaseStudy = () => {
  return (
    <>
      {/* <Metadata
                title="Rx Valet: Prescription Savings & Home Delivery | Case Study|"
                description="Rx Valet offers multiple ways to save up to 80% on prescriptions. Choose home delivery with FREE standard shipping, local retail pickup, or Prescription Assistance Programs."
            /> */}

      {/* pb-casestudy-banner */}
      <motion.section {...fadeIn}>
        <Box className="casestudy-banner-section-bg rxvalet">
          <Image
            src={PBCaseStudy}
            alt="RX Valet Case-study"
            placeholder="empty" // 🔑 KEY LINE
            priority={false}
          />
        </Box>
      </motion.section>

      <motion.section {...fadeInUp}>
        <Box sx={{ py: { xs: 3, md: 8 } }} className="insight-section">
          <Container className="custom-container" maxWidth="lg">
            <Box className="insight-heading">
              {/* Heading */}
              <Typography
                variant="h2"
                className="rxvalet-gradient-heading-text"
              >
                Project Insight
              </Typography>

              {/* Description */}
              <Typography variant="body1">
                The platform offered secure PCI-DSS transactions, real-time
                order updates, a mobile-first design for seamless ordering, and
                a scalable CodeIgniter-MySQL architecture for smooth
                performance.
              </Typography>
            </Box>
          </Container>
        </Box>
      </motion.section>

      <motion.section {...fadeInUp}>
        <Box className="insight-img">
          <Image
            src={PBInsight}
            placeholder="empty" // 🔑 KEY LINE
            priority={false}
            alt="Project mockup"
          />
        </Box>
      </motion.section>

      <Box className="operational" sx={{ position: "relative" }}>
        <Container className="custom-container" maxWidth="lg">
          <Box className="insight-heading">
            {/* Heading */}
            <Typography
              variant="h2"
              className="rxvalet-gradient-heading-text"
              sx={{ textAlign: "start", my: 4 }}
            >
              Challenges
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="end">
            <Grid size={{ xs: 12, md: 7, xl: 6 }}>
              <Box className="operational-content-box-wrapper">
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  The project faced key challenges in ensuring data security,
                  healthcare compliance, and a smooth patient experience for
                  browsing medicines, uploading prescriptions, and tracking
                  orders. Pharmacies needed efficient inventory, prescription
                  validation, and real-time notifications. Balancing usability,
                  security, and scalability required careful planning and
                  execution.
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  Another challenge was seamlessly integrating payment gateways,
                  SMS alerts, invoicing, and pharmacy systems while handling
                  high user volumes. The platform needed to remain fast,
                  reliable, scalable, and user-friendly across mobile and
                  desktop devices.
                </Typography>
                <Image src={Vector4} alt="vector" className="vector4" />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Image src={ChecksVector} alt="check-vector" className="checks-shape" />
      </Box>

      <Box
        className="operational"
        sx={{ position: "relative", mb: 8, pt: { xs: 4, md: 22 } }}
      >
        <Container className="custom-container" maxWidth="lg">
          <Box className="insight-heading">
            {/* Heading */}
            <Typography
              variant="h2"
              className="rxvalet-gradient-heading-text"
              sx={{ textAlign: "end", mb: 4 }}
            >
              Proposed Solutions
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="start">
            <Grid size={{ xs: 12, md: 7, xl: 6 }}>
              <Box className="operational-content-box-wrapper">
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  The team built a scalable ePharmacy platform with a responsive
                  frontend (HTML5, CSS3, Bootstrap, jQuery) and a structured
                  CodeIgniter-PHP backend with MySQL. Integrations included
                  Authorize.net for payments, TCPDF for invoices, and Telnyx for
                  SMS. Security measures like SSL/TLS, SQL injection, and XSS
                  protection ensured data safety.
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  The platform included a dynamic catalog, prescription upload,
                  shopping cart, secure checkout, pharmacy inventory and order
                  management, and real-time tracking. It enabled patients to
                  order and track medicines efficiently and pharmacies to manage
                  stock and fulfill orders, with scalability for future
                  AI-driven personalization and analytics.
                </Typography>
                <Image src={Vector5} alt="vector" className="vector5" />
                <Image src={Vector6} alt="vector" className="vector6" />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Image
          src={ChecksVector2}
          alt="check-vector"
          className="checks-shape2"
        />
      </Box>

      <motion.section {...fadeInUp}>
        <Box sx={{ backgroundColor: "#000", pt: 4 }} className="impact-section">
          <Container className="custom-container" maxWidth="lg">
            <Box className="impact-heading">
              {/* Description */}
              <Typography variant="body1">
                The ePharmacy platform delivered a secure, scalable, and
                user-friendly solution. Patients enjoyed intuitive ordering and
                safe payments, while pharmacies gained efficient management
                tools. The system also supports future AI-driven personalization
                and analytics for sustained digital healthcare growth.
              </Typography>
            </Box>
          </Container>

          <Box className="impact-img">
            <Image
              src={PBImpact}
              placeholder="empty" // 🔑 KEY LINE
              priority={false}
              alt="Impact"
            />
          </Box>
        </Box>
      </motion.section>

      <Box sx={{ pt: 8, position: "relative" }} className="approach-section">
        <Container className="custom-container" maxWidth="lg">
          <Box className="approach-heading" sx={{ mb: 7 }}>
            <Typography variant="h2" className="rxvalet-gradient-heading-text">
              Design Approach
            </Typography>

            <Typography variant="body1">
              The design emphasized trust, clarity, and accessibility, using a
              healthcare-inspired color palette, clean typography, and grid
              layouts for intuitive navigation. Icons simplified actions like
              prescription uploads and order tracking.
            </Typography>
          </Box>

          <Box sx={{ mb: 8, textAlign: "center" }} className="approach-heading">
            <Typography
              variant="h5"
              sx={{ color: "#333333", mb: 2, fontWeight: 600 }}
            >
              Typography
            </Typography>
            <Typography className="font-family-name" variant="h3">
              <span className="light-green-color">Filson Pro</span>
            </Typography>
          </Box>

          <Box sx={{ mb: 8, textAlign: "center" }} className="approach-heading">
            <Typography
              variant="h5"
              sx={{ color: "#333333", mb: 2, fontWeight: 600 }}
            >
              Logo
            </Typography>
            <Image src={RxValetLogo} alt="RX-Valet Logo" />
          </Box>

          <Box sx={{ mb: 8, textAlign: "center" }} className="approach-heading">
            <Typography
              variant="h5"
              sx={{ color: "#333333", mb: 2, fontWeight: 600 }}
            >
              Colors
            </Typography>
            <Image
              src={ApproachGroup}
              alt="Approach"
              className="approacg-group-img"
            />
          </Box>
        </Container>
        <Image
          src={ChecksVector}
          alt="check-vector"
          className="checks-shape4"
        />
        <Image
          src={ChecksVector2}
          alt="check-vector"
          className="checks-shape5"
        />
      </Box>

      <motion.section {...fadeInUp}>
        <Box className="approach-img">
          <Image src={PBApproach} alt="Approach" />
        </Box>
      </motion.section>

      <Box
        className="connecting-section"
        sx={{ position: "relative", mb: 10, pt: { xs: 5, md: 8 } }}
      >
        <Container className="custom-container" maxWidth="lg">
          <Grid container spacing={2} justifyContent="start">
            <Grid size={{ xs: 12, sm: 6 }} sx={{ order: { xs: 0 } }}>
              <Box className="pb-img-box-wrapper rx1-img">
                <Image src={PB1} alt="RX-Valet1" className="" />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} sx={{ order: { xs: 1 } }}>
              <Box className="rx-content-heading content-box-wrapper">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  User Profile Management
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  This screen centralizes user information, allowing easy
                  management of personal details, addresses, and preferences. It
                  enhances the user experience by providing a clear overview of
                  account settings and order history, ensuring a seamless and
                  personalized interaction with the platform.
                </Typography>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{
                mt: { xs: 2, sm: 14, lg: 18, xl: 20 },
                order: { xs: 3, sm: 2 },
              }}
            >
              <Box className="rx-content-heading content-box-wrapper">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Purchase History
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  The Purchase History screen provides a chronological record of
                  all past orders, including medication details, order dates,
                  and delivery status. In the case study, it demonstrates how
                  users can track purchases, reorder medications easily, and
                  maintain organized records. The design emphasizes clarity and
                  accessibility, improving convenience and trust.
                </Typography>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{
                mt: { xs: 2, sm: 14, lg: 18, xl: 20 },
                order: { xs: 2, sm: 3 },
              }}
            >
              <Box className="pb-img-box-wrapper rx2-img">
                <Image src={PB2} alt="RX-Valet2" />
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{ mt: { xs: 2, sm: 14, lg: 18, xl: 20 }, order: { xs: 4 } }}
            >
              <Box className="pb-img-box-wrapper rx3-img">
                <Image src={PB3} alt="RX-Valet3" className="" />
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{ mt: { xs: 2, sm: 14, lg: 18, xl: 20 }, order: { xs: 5 } }}
            >
              <Box className="rx-content-heading content-box-wrapper">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Advanced Search Functionality
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  The platform integrates an advanced search system that enables
                  users to quickly locate medicines by typing partial names.
                  This eliminates the need for manual scrolling through long
                  lists, enhancing efficiency and improving the overall user
                  experience.
                </Typography>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{
                mt: { xs: 2, sm: 14, lg: 18, xl: 20 },
                order: { xs: 7, sm: 6 },
              }}
            >
              <Box className="rx-content-heading content-box-wrapper">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Checkout & Order Processing
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  The Checkout screen streamlines the final steps of the
                  purchasing journey. Users can review their cart, select
                  delivery options, enter payment details, and confirm their
                  order. The interface emphasizes clarity and efficiency,
                  minimizing friction and ensuring a smooth, secure, and
                  reliable checkout experience for all users.
                </Typography>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{
                mt: { xs: 2, sm: 14, lg: 18, xl: 20 },
                order: { xs: 6, sm: 7 },
              }}
            >
              <Box className="pb-img-box-wrapper rx4-img">
                <Image src={PB4} alt="RX-Valet4" />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Image src={Vector1} alt="vector" className="vector1" />
        <Image src={Vector2} alt="vector" className="vector2" />
        <Image src={Vector7} alt="vector" className="vector7" />
        <Image src={Vector3} alt="vector" className="vector3" />
      </Box>

      <Box
        className="marquee-swiper-wrapper"
        sx={{
          overflow: "hidden",
          width: "100%",
          mt: { xs: 5, lg: 8 },
          position: "relative",
        }}
      >
        <Box className="marquee-swiper" sx={{ mb: 1 }}>
          {ThanksSwiper1.concat(ThanksSwiper1).map((img, index) => (
            <Box
              key={index}
              className="marquee-swiper-img"
              sx={{ mx: 1, flexShrink: 0 }}
            >
              <Image
                src={img}
                alt="thanks-img"
                // style={{ width: "100%", height: "auto" }}
              />
            </Box>
          ))}
        </Box>

        <Box className="marquee-swiper2" sx={{ mb: 1 }}>
          {ThanksSwiper2.concat(ThanksSwiper2).map((img, index) => (
            <Box
              key={index}
              className="marquee-swiper-img"
              sx={{ minWidth: 200, mx: 1, flexShrink: 0 }}
            >
              <Image
                src={img}
                alt="thanks-img"
                // style={{ width: "100%", height: "auto" }}
              />
            </Box>
          ))}
        </Box>

        <Box className="marquee-swiper3" sx={{ mb: 1 }}>
          {ThanksSwiper3.concat(ThanksSwiper3).map((img, index) => (
            <Box
              key={index}
              className="marquee-swiper-img"
              sx={{ minWidth: 200, mx: 1, flexShrink: 0 }}
            >
              <Image
                src={img}
                alt="thanks-img"
                // style={{ width: "100%", height: "auto" }}
              />
            </Box>
          ))}
        </Box>

        <Box className="thank-you-wrapper">
          <Typography variant="h1" sx={{ color: "#55CA15", mb: 2 }}>
            Thank You
          </Typography>
          <Typography variant="h4" sx={{ color: "#ffffff", mb: 4 }}>
            Delivering secure and patient-friendly healthcare solutions.
          </Typography>
          <Link
            href="/contactus"
            variant="contained"
            className="main-primary-btn white-btn"
          >
            Get in touch to start your project.
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default CompRxvaletCaseStudy;
