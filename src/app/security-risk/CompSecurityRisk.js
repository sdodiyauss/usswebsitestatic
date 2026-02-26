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

const CompSecurityRisk = (options = {}) => {


  return (
    <>
      {/* <Metadata
        title="Security Policy – Protecting Your Data & Privacy"
        description="Our Security Policy outlines how we safeguard your personal information with encryption, secure servers, and strict measures against unauthorized access."
      /> */}

      {/* contactus-banner-section */}
      <Box className="top-banner-section-bg contactus-banner-section privacy-policy-banner">
        <Container className="custom-container" maxWidth="lg">
          {/* Your existing header content */}
          <Grid container spacing={2} justifyContent="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="heading-content heading-content-spacing">
                <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                  Security Risk
                </Typography>
                <Typography variant="h6" paragraph sx={{ mb: 5 }}>
                  We take protecting your information seriously — not just because it's part of our job, but because we know it matters to you.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Box className="privacy-policy-main">
                <Box className="privacy-policy-info">
                  <Typography variant="h5"> How We Keep Things Secure</Typography>
                  <Typography variant="p" paragraph>
                    We use a mix of trusted security tools and common-sense practices. That means encryption to protect data while it's moving or stored, secure servers and firewalls to keep threats out, and regular checks to make sure everything's running as it should.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Your Role in Security</Typography>
                  <Typography variant="p" paragraph>
                    While we do our part, security works best when we work together. That means keeping your passwords and devices safe, not sharing login details, and letting us know right away if something doesn't look right.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Working With Others</Typography>
                  <Typography variant="p" paragraph sx={{ mb: 0 }}>
                    Sometimes we use trusted third-party services to help run things smoothly. When we do, we make sure they follow the same high standards for keeping your information safe.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">If Something Happens</Typography>
                  <Typography variant="p" paragraph>
                    On the rare chance something does go wrong, we act fast. If you ever suspect your account or our systems might have been compromised, get in touch with us immediately so we can investigate and fix the issue.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Keeping This Policy Updated</Typography>
                  <Typography variant="p" paragraph>
                    Security changes all the time, and so might this policy. Whenever we make updates, we'll post the latest version here along with the date it was changed.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Contact Us</Typography>
                  <Typography variant="p" paragraph>
                    If you've got questions, concerns, or need to report a security issue, here's how to reach us:
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

export default CompSecurityRisk;
