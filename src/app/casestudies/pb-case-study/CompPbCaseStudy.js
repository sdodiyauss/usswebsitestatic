"use client";

import { Box, Container, Grid, Typography, Link } from "@mui/material";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import Metadata from "~/meta/Metadata";

import PBCaseStudy from "@/pb-banner.webp";
import PBInsight from "@/pb-insight.webp";
import Vector1 from "@/vector1.svg?url";
import Vector2 from "@/vector2.svg?url";
import Vector3 from "@/vector3.svg?url";
import Vector7 from "@/vector7.svg?url";
import Vector4 from "@/vector4.svg?url";
import Vector5 from "@/vector5.svg?url";
import Vector6 from "@/vector6.svg?url";
import ChecksVector from "@/checks-vector.svg?url";
import ChecksVector2 from "@/checks-vector2.svg?url";
import PBImpact from "@/pb-impact.webp";
import PBLogo from "@/companylogo/pb.svg?url";
import ApproachGroup from "@/pb-approach-group.svg?url";
import PBApproach from "@/pb-approach.webp";
import PB1 from "@/pb1.webp";
import PB2 from "@/pb2.webp";
import PB3 from "@/pb3.webp";
import PB4 from "@/pb4.webp";
import ThanksImg1 from "@/pb-m1.webp";
import ThanksImg2 from "@/pb-m2.webp";
import ThanksImg3 from "@/pb-m3.webp";
import ThanksImg4 from "@/pb-m4.webp";
import ThanksImg5 from "@/pb-m5.webp";
import ThanksImg6 from "@/pb-m6.webp";
import ThanksImg7 from "@/pb-m7.webp";
import ThanksImg8 from "@/pb-m8.webp";
import ThanksImg9 from "@/pb-m9.webp";
import ThanksImg10 from "@/pb-m10.webp";

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

const CompPbCaseStudy = () => {
  return (
    <>
      {/* <Metadata
                title="Prescription Bliss: Affordable Brand-Name Medications | Case Study"
                description="Struggling with high prescription costs? Prescription Bliss helps you get brand-name medications affordably. We handle applications for numerous medications, ensuring high approval rates."
            /> */}

      {/* pb-casestudy-banner */}
      <motion.section {...fadeIn}>
        <Box className="casestudy-banner-section-bg pb">
          <Image
            src={PBCaseStudy}
            placeholder="empty" // 🔑 KEY LINE
            priority={false}
            alt="PB Case-study"
          />
        </Box>
      </motion.section>

      <motion.section {...fadeInUp}>
        <Box sx={{ py: { xs: 3, md: 8 } }} className="insight-section">
          <Container className="custom-container" maxWidth="lg">
            <Box className="insight-heading">
              {/* Heading */}
              <Typography variant="h2" className="pb-gradient-heading-text">
                Project Insight
              </Typography>

              {/* Description */}
              <Typography variant="body1">
                Prescription Bliss LLC, A U.S.-Based PAP Advocacy Group, Helps
                Patients Access Life-Saving Medications At Little To No Cost. To
                Improve Access And Reduce Errors, They Needed A Digital Platform
                To Replace Manual Processes.
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
              className="pb-gradient-heading-text"
              sx={{ textAlign: "start", my: 4 }}
            >
              Operational Bottlenecks
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="end">
            <Grid size={{ xs: 12, md: 7, xl: 6 }}>
              <Box className="operational-content-box-wrapper">
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  Prescription Bliss faced multiple inefficiencies in its
                  existing workflow. Patient information was first collected
                  through WordPress forms and then manually transferred into PAP
                  Tracker, a process that was both time-consuming and
                  error-prone. Gathering documents and securing HIPAA-compliant
                  e-signatures required repeated exchanges between patients and
                  staff, creating delays that directly impacted timely access to
                  care.
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  Manual follow-ups with patients and healthcare providers
                  further slowed the process, while payment handling lacked
                  automation and posed risks of inconsistency. These fragmented
                  operations made the overall system cumbersome, reducing
                  efficiency for staff and leaving patients with a longer, less
                  transparent enrollment experience.
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
              className="pb-gradient-heading-text"
              sx={{ textAlign: "end", mb: 4 }}
            >
              The Digital Remedy
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="start">
            <Grid size={{ xs: 12, md: 7, xl: 6 }}>
              <Box className="operational-content-box-wrapper">
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  To address these roadblocks, Prescription Bliss adopted a
                  fully digital platform built on Next.js, designed to simplify
                  and automate the patient assistance process. The new patient
                  portal streamlined enrollment with a guided, step-by-step flow
                  covering personal, household, financial, doctor, medication,
                  and billing information. Integrated HIPAA-compliant
                  e-signatures provided security and legal reliability, while
                  Google Maps autocomplete reduced errors in address entry.
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  On the administrative side, a centralized panel allowed staff
                  to review cases, prequalify medications, generate dynamic
                  PDFs, and send faxes automatically. Secure payment processing
                  was integrated within the platform, replacing manual methods
                  and ensuring a smoother transaction flow. Automation through
                  cron jobs and webhooks eliminated repetitive tasks, and
                  role-based access controls enhanced compliance and security.
                  The result was faster onboarding, reduced errors, and a
                  transparent, patient-friendly system.
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
                The platform reduced manual data entry by 70% and accelerated
                patient onboarding by 80%. Automated workflows improved
                compliance and speed, replacing slow, manual processes with
                self-service enrollment, e-signatures, automated faxes, and
                real-time document handling, creating a smoother experience for
                patients and administrators.
              </Typography>
            </Box>
          </Container>

          <Image
            src={PBImpact}
            placeholder="empty" // 🔑 KEY LINE
            priority={false}
            alt="Impact"
          />

          <Box className="impact-heading" sx={{ pb: 2, px: 2 }}>
            {/* Heading */}
            <Typography variant="h1" sx={{ textAlign: "start" }}>
              Business Impact
            </Typography>
          </Box>
        </Box>
      </motion.section>

      <Box sx={{ pt: 8, position: "relative" }} className="approach-section">
        <Container className="custom-container" maxWidth="lg">
          <Box className="approach-heading" sx={{ mb: 7 }}>
            <Typography variant="h2" className="pb-gradient-heading-text">
              Design Approach
            </Typography>

            <Typography variant="body1">
              The design focused on clarity and usability, with guided forms,
              HIPAA e-signatures, and a calming, readable interface. Admin
              dashboards featured quick actions and streamlined reviews. Fully
              responsive layouts ensured smooth desktop and mobile use.
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
              <span className="blue-color">Spectral</span> &nbsp;&nbsp;
              <span className="green-color">Noto Sans</span>
            </Typography>
          </Box>

          <Box sx={{ mb: 8, textAlign: "center" }} className="approach-heading">
            <Typography
              variant="h5"
              sx={{ color: "#333333", mb: 2, fontWeight: 600 }}
            >
              Logo
            </Typography>
            <Image src={PBLogo} alt="PB logo" />
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
              alt="Appoach"
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
              <Box className="pb-img-box-wrapper pb1-img">
                <Image src={PB1} alt="PB1" className="" />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} sx={{ order: { xs: 1 } }}>
              <Box className="pb-content-heading content-box-wrapper">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Real-Time Savings Calculator
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  This screen provides users with detailed information about
                  their prescribed medication, including pricing, enrollment
                  status, and available offers. The interface highlights key
                  offers and expiration dates, allowing patients to make
                  informed decisions quickly and efficiently.
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
              <Box className="pb-content-heading content-box-wrapper">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Medication Overview & Personalized Savings
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  Users can instantly see potential savings on their medications
                  by entering the monthly cost. Prescription Bliss offers
                  flexible payment options—pay-as-you-go, subscription, or
                  insurance—helping users make informed decisions while
                  showcasing total savings delivered since 2018.
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
              <Box className="pb-img-box-wrapper pb2-img">
                <Image src={PB2} alt="PB2" />
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{ mt: { xs: 2, sm: 14, lg: 18, xl: 20 }, order: { xs: 4 } }}
            >
              <Box className="pb-img-box-wrapper pb3-img">
                <Image src={PB3} alt="PB3" className="" />
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{ mt: { xs: 2, sm: 14, lg: 18, xl: 20 }, order: { xs: 5 } }}
            >
              <Box className="pb-content-heading content-box-wrapper">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Medication Access & Eligibility
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  Explore over 1,500 brand-name medications available through
                  Prescription Bliss. Utilize the comprehensive search and
                  filter tools to find specific medications by condition or drug
                  name.
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
              <Box className="pb-content-heading content-box-wrapper">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Referral Program
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                  Help others access affordable medications by referring them to
                  Prescription Bliss. Healthcare providers, friends, and family
                  can submit referrals, and our team will guide them through
                  eligibility and enrollment. Track your impact and be
                  recognized for making a difference.
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
              <Box className="pb-img-box-wrapper pb4-img">
                <Image src={PB4} alt="PB4" />
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
        <Box
          className="marquee-swiper"
          sx={{
            mb: 1,
          }}
        >
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

        <Box
          className="marquee-swiper2"
          sx={{
            mb: 1,
          }}
        >
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

        <Box
          className="marquee-swiper3"
          sx={{
            mb: 1,
          }}
        >
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
          <Typography variant="h1" sx={{ color: "#B5D77E", mb: 2 }}>
            Thank You
          </Typography>
          <Typography variant="h4" sx={{ color: "#ffffff", mb: 4 }}>
            Streamlining patient access, one step at a time.
          </Typography>
          <Link
            href="/contactus"
            variant="contained"
            className="main-primary-btn white-btn"
          >
            Explore the Platform
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default CompPbCaseStudy;
