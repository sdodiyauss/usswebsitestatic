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

const CompDisclaimer = (options = {}) => {


  return (
    <>
      {/* <Metadata
        title="Disclaimer – Important Information & Limitations"
        description="Read our Disclaimer to understand the limits of liability, accuracy of information, and how to use our content responsibly for informed decisions."
      /> */}

      {/* contactus-banner-section */}
      <Box className="top-banner-section-bg contactus-banner-section privacy-policy-banner">
        <Container className="custom-container" maxWidth="lg">
          {/* Your existing header content */}
          <Grid container spacing={2} justifyContent="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="heading-content heading-content-spacing">
                <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                  Disclaimer
                </Typography>
                <Typography variant="h6" paragraph sx={{ mb: 5 }}>
                  The information here is for general purposes and may not always be complete, accurate, or suitable for every situation.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Box className="privacy-policy-main">
                <Box className="privacy-policy-info">
                  <Typography variant="h5">No Professional Advice</Typography>
                  <Typography variant="p" paragraph>
                    Nothing here should be taken as legal, financial, or professional advice. For matters specific to you, it's always best to speak directly with a qualified professional.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Use at Your Own Risk</Typography>
                  <Typography variant="p" paragraph>
                    Any decision you make based on the information here is entirely your responsibility. We can't be held responsible for any loss, damage, or issues that may arise from its use.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">External Links</Typography>
                  <Typography variant="p" paragraph sx={{ mb: 0 }}>
                    From time to time, we may link to other websites for your convenience. We have no control over their content, accuracy, or policies, so visiting them is your own choice.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Service Availability</Typography>
                  <Typography variant="p" paragraph>
                    We work to keep our services running smoothly, but we can't promise the site will always be available, uninterrupted, or free from errors.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Changes to This Disclaimer</Typography>
                  <Typography variant="p" paragraph>
                    We may make updates to this Disclaimer as needed. Whenever we do, the latest version will be posted here with the date it was updated.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Contact Us</Typography>
                  <Typography variant="p" paragraph>
                    If you have any questions about this Disclaimer, we're happy to help.
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

export default CompDisclaimer;
