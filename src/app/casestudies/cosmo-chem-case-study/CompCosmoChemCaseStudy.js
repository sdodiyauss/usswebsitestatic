"use client";

import { Box, Container, Grid, Typography, Link } from "@mui/material";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import Metadata from "~/meta/Metadata";

import PBCaseStudy from "@/cosmo-banner.webp";
import PBInsight from "@/cosmo-insight.webp";
import Vector1 from "@/vector15.svg?url";
import Vector2 from "@/vector16.svg?url";
import Vector3 from "@/vector17.svg?url";
import Vector7 from "@/vector18.svg?url";
import Vector4 from "@/vector12.svg?url";
import Vector5 from "@/vector13.svg?url";
import Vector6 from "@/vector14.svg?url";
import ChecksVector from "@/checks-vector5.svg?url";
import ChecksVector2 from "@/checks-vector6.svg?url";
import PBImpact from "@/cosmo-impact.webp";
import ApproachGroup from "@/cosmo-approach-img.svg?url";
import PBApproach from "@/cosmo-approach.webp";
import PB1 from "@/cosmo1.webp";
import PB2 from "@/cosmo2.webp";
import PB3 from "@/cosmo3.webp";
import PB4 from "@/cosmo4.webp";
import RxValetLogo from "@/cosmochem.svg?url";
import ThanksImg1 from "@/cosmo-m1.webp";
import ThanksImg2 from "@/cosmo-m2.webp";
import ThanksImg3 from "@/cosmo-m3.webp";
import ThanksImg4 from "@/cosmo-m4.webp";
import ThanksImg5 from "@/cosmo-m5.webp";
import ThanksImg6 from "@/cosmo-m6.webp";
import ThanksImg7 from "@/cosmo-m7.webp";
import ThanksImg8 from "@/cosmo-m8.webp";
import ThanksImg9 from "@/cosmo-m9.webp";
import ThanksImg10 from "@/cosmo-m10.webp";

const ThanksSwiper1 = [ThanksImg1, ThanksImg2, ThanksImg3, ThanksImg2];
const ThanksSwiper2 = [ThanksImg4, ThanksImg5, ThanksImg6, ThanksImg7];
const ThanksSwiper3 = [ThanksImg8, ThanksImg9, ThanksImg10, ThanksImg9];

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

const CompCosmoChemCaseStudy = () => {
  return (
    <>
      {/* <Metadata
                title="Chemical Contract Manufacturing India | Talc Supplier | CosmoChem"
                description="CosmoChem provides chemical contract manufacturing and is India's premier Talc supplier. We deliver cost-optimized, sustainable solutions across 10+ industries with 5+ years of expertise."
            /> */}

      {/* pb-casestudy-banner */}
      <motion.section {...fadeIn}>
        <Box className="casestudy-banner-section-bg cosmo">
          <Image
            src={PBCaseStudy}
            alt="Cosmo-Chem case study"
            placeholder="empty" // 🔑 KEY LINE
            priority={false}
            unoptimized
          />
        </Box>
      </motion.section>

      <motion.section {...fadeInUp}>
        <Box sx={{ py: { xs: 3, md: 8 } }} className="insight-section">
          <Container className="custom-container" maxWidth="lg">
            <Box className="insight-heading">
              {/* Heading */}
              <Typography variant="h2" className="cosmo-gradient-heading-text">
                Project Highlights
              </Typography>

              {/* Description */}
              <Typography variant="body1">
                The project streamlined management of 200+ brochures and product
                documents with zero downtime. Custom UI/UX improved navigation,
                while WordPress optimizations enhanced performance and enabled
                independent content management.
              </Typography>
            </Box>
          </Container>
        </Box>
      </motion.section>

      <motion.section {...fadeInUp}>
        <Box className="insight-img">
          <Image
            src={PBInsight}
            alt="Project mockup"
            placeholder="empty" // 🔑 KEY LINE
            priority={false}
            unoptimized
          />
        </Box>
      </motion.section>

      <Box className="operational" sx={{ position: "relative" }}>
        <Container className="custom-container" maxWidth="lg">
          <Box className="insight-heading">
            {/* Heading */}
            <Typography
              variant="h2"
              className="cosmo-gradient-heading-text"
              sx={{ textAlign: "start", my: 4 }}
            >
              Problems Faced
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="end">
            <Grid size={{ xs: 12, md: 7, xl: 6 }}>
              <Box className="operational-content-box-wrapper">
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  Cosmo Chemistry faced slowdowns and failures with large file
                  uploads (200+ brochures) in WordPress. Confusing UI/UX made
                  navigation difficult and fell short of client expectations.
                  Additionally, the platform lacked scalability and performance
                  to efficiently handle a growing content library.
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  The platform struggled with slow load times and an inefficient
                  backend, lacking the scalability to manage large content
                  libraries effectively. This caused delays in content updates,
                  increased dependency on developers, and hindered overall user
                  productivity.
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
              className="cosmo-gradient-heading-text"
              sx={{ textAlign: "end", mb: 4 }}
            >
              How We Solved It
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="start">
            <Grid size={{ xs: 12, md: 7, xl: 6 }}>
              <Box className="operational-content-box-wrapper">
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  The team used a Waterfall approach to revamp WordPress,
                  implementing custom upload functionality and optimized servers
                  for smooth management of 200+ brochures. They also redesigned
                  the UI/UX to simplify navigation and enhance user experience.
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  UI/UX was redesigned with clean, responsive Elementor layouts
                  and custom pages for easier navigation. The backend was
                  optimized with faster load times and structured tools to
                  manage large document libraries efficiently. 
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
                The revamped platform enabled seamless management of 200+
                brochures without errors and improved navigation with clean,
                structured pages. The client gained independence in content
                management, with faster load times, stable backend performance,
                and scalable support for future growth.
              </Typography>
            </Box>
          </Container>

          <Box className="impact-img">
            <Image
              src={PBImpact}
              alt="Impact-img"
              placeholder="empty" // 🔑 KEY LINE
              priority={false}
              unoptimized
            />
          </Box>
        </Box>
      </motion.section>

      <Box sx={{ pt: 8, position: "relative" }} className="approach-section">
        <Container className="custom-container" maxWidth="lg">
          <Box className="approach-heading" sx={{ mb: 7 }}>
            <Typography variant="h2" className="cosmo-gradient-heading-text">
              Design Approach
            </Typography>

            <Typography variant="body1">
              The design focused on clarity and usability, with responsive
              Elementor layouts and custom pages for easy content discovery.
              Backend improvements enabled independent management of large
              brochure volumes.
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
              <span className="orange-color">Lexend</span>
            </Typography>
          </Box>

          <Box sx={{ mb: 8, textAlign: "center" }} className="approach-heading">
            <Typography
              variant="h5"
              sx={{ color: "#333333", mb: 2, fontWeight: 600 }}
            >
              Logo
            </Typography>
            <Image src={RxValetLogo} alt="Cosmo-chem logo" />
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
          <Image src={PBApproach} alt="Approach" unoptimized />
        </Box>
      </motion.section>

      <Box
        className="connecting-section"
        sx={{ position: "relative", mb: 10, pt: { xs: 5, md: 8 } }}
      >
        <Container className="custom-container" maxWidth="lg">
          <Grid container spacing={2} justifyContent="start">
            <Grid size={{ xs: 12, sm: 6 }} sx={{ order: { xs: 0 } }}>
              <Box className="pb-img-box-wrapper cosmo1-img">
                <Image src={PB1} alt="Cosmo1" className="" unoptimized />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} sx={{ order: { xs: 1 } }}>
              <Box className="cosmo-content-heading content-box-wrapper">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Dyes & Color Solutions
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  Explore a vibrant range of dyes and colorants for multiple
                  industries. From dispersing and wetting agents to UV
                  absorbers, pigments, and specialty effect colors, we provide
                  tailored solutions to meet your product development needs with
                  quality and consistency.
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
              <Box className="cosmo-content-heading content-box-wrapper">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Chemical Product Details
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  View complete information about the chemical product,
                  including its name, category, composition, safety data, and
                  usage instructions. Easily track inventory and access
                  important details for safe handling and storage.
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
              <Box className="pb-img-box-wrapper cosmo2-img">
                <Image src={PB2} alt="Cosmo2" unoptimized />
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{ mt: { xs: 2, sm: 14, lg: 18, xl: 20 }, order: { xs: 4 } }}
            >
              <Box className="pb-img-box-wrapper cosmo3-img">
                <Image src={PB3} alt="Cosmo3" className="" unoptimized />
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{ mt: { xs: 2, sm: 14, lg: 18, xl: 20 }, order: { xs: 5 } }}
            >
              <Box className="cosmo-content-heading content-box-wrapper">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Cosmo Features
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  Explore the key features of Cosmo that simplify chemical
                  management. From seamless inventory tracking to detailed
                  product insights, discover how Cosmo makes handling chemicals
                  safer, faster, and more efficient.
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
              <Box className="cosmo-content-heading content-box-wrapper">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Water Treatment Solutions
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  Discover effective water treatment products and solutions.
                  View detailed information on chemical composition, usage
                  guidelines, safety measures, and performance benefits to
                  ensure clean and safe water management.
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
              <Box className="pb-img-box-wrapper cosmo4-img">
                <Image src={PB4} alt="Cosmo4" unoptimized />
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
        className="marquee-swiper-wrapper cosmo-thanks"
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
                unoptimized
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
                unoptimized
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
                unoptimized
                // style={{ width: "100%", height: "auto" }}
              />
            </Box>
          ))}
        </Box>

        <Box className="thank-you-wrapper">
          <Typography variant="h1" sx={{ color: "#7F63A8", mb: 2 }}>
            Thank You
          </Typography>
          <Typography variant="h4" sx={{ color: "#4E4E4E", mb: 4 }}>
            Making large content management simple and efficient.
          </Typography>
          <Link
            href="/contactus"
            variant="contained"
            className="main-primary-btn black-btn"
          >
            Optimize your WordPress now.
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default CompCosmoChemCaseStudy;
