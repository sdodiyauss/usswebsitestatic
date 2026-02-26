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

const CompTermsConditions = (options = {}) => {


  return (
    <>
      {/* <Metadata
        title="Terms & Conditions – Your Rights & Responsibilities"
        description="Review our Terms & Conditions to understand your rights, obligations, and how we ensure a safe, transparent, and fair experience for all users."
      /> */}

      {/* contactus-banner-section */}
      <Box className="top-banner-section-bg contactus-banner-section privacy-policy-banner">
        <Container className="custom-container" maxWidth="lg">
          {/* Your existing header content */}
          <Grid container spacing={2} justifyContent="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="heading-content heading-content-spacing">
                <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                  Terms & conditions
                </Typography>
                <Typography variant="h6" paragraph sx={{ mb: 5 }}>
                  By using our website, products, or services, you agree to the terms outlined below.
                  Please read them carefully before proceeding.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Box className="privacy-policy-main">
                <Box className="privacy-policy-info">
                  <Typography variant="h5">Use of Our Services</Typography>
                  <Typography variant="p" paragraph>
                    You agree to use our website and services only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use of the site.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Intellectual Property</Typography>
                  <Typography variant="p" paragraph>
                    All content on this site — including text, images, graphics, and designs — is owned by us or licensed to us. You may not copy, reproduce, or distribute it without our written permission.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Account & Responsibilities</Typography>
                  <Typography variant="p" paragraph>
                    If you create an account with us, you are responsible for keeping your login details secure and for all activities under your account.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Service Changes</Typography>
                  <Typography variant="p" paragraph>
                    We may update, modify, or discontinue any part of our website or services at any time without prior notice.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Limitation of Liability</Typography>
                  <Typography variant="p" paragraph>
                    We work hard to keep our site and services accurate and reliable, but we are not liable for any losses or damages arising from their use.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Third-Party Links</Typography>
                  <Typography variant="p" paragraph>
                    Our website may contain links to other sites. We are not responsible for the content, policies, or practices of these third-party websites.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Governing Law</Typography>
                  <Typography variant="p" paragraph>
                    These terms are governed by the laws of India. Any disputes will be handled in the courts of Gujarat.
                  </Typography>
                </Box>
                <Box className="privacy-policy-info">
                  <Typography variant="h5">Changes to These Terms</Typography>
                  <Typography variant="p" paragraph>
                    We may revise these Terms & Conditions from time to time. Updates will be posted here with the new revision date.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Contact Us</Typography>
                  <Typography variant="p" paragraph>
                    For questions about these terms, please contact us at:
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

export default CompTermsConditions;
