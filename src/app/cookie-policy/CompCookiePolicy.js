"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import IconCall from "@/telephone-icon.png";
import IconMessage from "@/email-icon.png";

import Metadata from "~/meta/Metadata";

const CompCookiePolicy = (options = {}) => {


  return (
    <>
      {/* <Metadata
        title="Cookie Policy – How We Use Cookies for Better Service"
        description="Learn how our Cookie Policy helps improve your browsing experience. We use cookies to enhance site performance, personalize content, and ensure security."
      /> */}

      {/* contactus-banner-section */}
      <Box className="top-banner-section-bg contactus-banner-section privacy-policy-banner">
        <Container className="custom-container" maxWidth="lg">
          {/* Your existing header content */}
          <Grid container spacing={2} justifyContent="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="heading-content heading-content-spacing">
                <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                  Cookie Policy
                </Typography>
                <Typography variant="h6" paragraph sx={{ mb: 5 }}>
                  This page explains how we use cookies and similar tools to make your time on our website better and more personalized.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Box className="privacy-policy-main">
                <Box className="privacy-policy-info">
                  <Typography variant="h5">What Are Cookies?</Typography>
                  <Typography variant="p" paragraph>
                    Cookies are small text files saved on your device when you visit a website. They help us remember your preferences, understand how you use our site, and make everything work more smoothly.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Types of Cookies We Use</Typography>
                  <Typography variant="p" paragraph>
                    Essential Cookies – Keep the site running and enable core features. Performance Cookies – Show us how people use the site so we can improve it. Functional Cookies – Remember your preferences and settings. Marketing Cookies – Help us show you content and ads that matter to you.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Why We Use Cookies</Typography>
                  <Typography variant="p" paragraph sx={{ mb: 0 }}>
                    We use cookies to:
                  </Typography>
                  <Typography variant="p" paragraph>
                    Keep the site working properly, Make your experience more personal, Understand site traffic and performance, Share content and offers you'll find relevant
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Managing Cookies</Typography>
                  <Typography variant="p" paragraph>
                    You can choose to control or delete cookies through your browser settings.  If you turn them off, some parts of the site may not work as intended.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Third-Party Cookies</Typography>
                  <Typography variant="p" paragraph>
                    Sometimes we use cookies from trusted partners, like analytics or advertising providers,  to help us improve our services and reach the right audience.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Updates to This Policy</Typography>
                  <Typography variant="p" paragraph>
                    We may change this Cookie Policy from time to time.  Any updates will be posted here with the date of the change.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Contact Us</Typography>
                  <Typography variant="p" paragraph>
                    If you have any questions about our Cookie Policy, you can reach us at:
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Image src={IconMessage} alt="Email Icon" width={24} height={24} style={{ marginRight: '12px' }} />
                    <Typography variant="p" paragraph sx={{ mb: 0 }}>
                      Email: sales@universalstreamsolution.com
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Image src={IconCall} alt="Phone Icon" width={24} height={24} style={{ marginRight: '12px' }} />
                    <Typography variant="p" paragraph sx={{ mb: 0 }}>
                      Phone: +91 9638225579
                    </Typography>
                  </Box>
                </Box>
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
        <Image src={BlueStar} alt="shape" className="star3" />
      </Box>


    </>
  );
};

export default CompCookiePolicy;
