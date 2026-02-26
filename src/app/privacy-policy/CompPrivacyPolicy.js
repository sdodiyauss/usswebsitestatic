"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import Image from "next/image";


import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import IconCall from "@/telephone-icon.png";
import IconMessage from "@/email-icon.png";

import Metadata from "~/meta/Metadata";

const CompPrivacyPolicy = (options = {}) => {


  return (
    <>
      {/* <Metadata
        title="Privacy Policy – Your Data, Our Commitment"
        description="Read our Privacy Policy to learn how we collect, use, and protect your personal information with strict security measures and complete transparency."
      /> */}

      {/* contactus-banner-section */}
      <Box className="top-banner-section-bg contactus-banner-section privacy-policy-banner">
        <Container className="custom-container" maxWidth="lg">
          {/* Your existing header content */}
          <Grid container spacing={2} justifyContent="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="heading-content heading-content-spacing">
                <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                  Privacy Policy
                </Typography>
                <Typography variant="h6" paragraph sx={{ mb: 5 }}>
                  We value your privacy and explain how we collect, use, and protect your information.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{mt:3}}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Box className="privacy-policy-main">
                <Box className="privacy-policy-info">
                  <Typography variant="h5">Information We Collect</Typography>
                  <Typography variant="p" paragraph>
                    We may collect personal details such as your name, email address, phone number, company information, and any other data you provide when you:
                  </Typography>

                  <List sx={{ pl: 2 }}>
                    <ListItem sx={{ display: "list-item", pl: 0 }}>
                      <Typography variant="p" paragraph sx={{ mb: 0 }}>
                        Fill out forms on our website
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 0 }}>
                      <Typography variant="p" paragraph sx={{ mb: 0 }}>
                        Request information or services
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 0 }}>
                      <Typography variant="p" paragraph sx={{ mb: 0 }}>
                        Subscribe to our newsletters
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 0 }}>
                      <Typography variant="p" paragraph sx={{ mb: 0 }}>
                        Engage with us on social media or via other communication channels
                      </Typography>
                    </ListItem>
                  </List>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">How We Use Your Information</Typography>
                  <Typography variant="p" paragraph>
                    We use the information we collect for purposes such as:
                  </Typography>

                  <List sx={{ pl: 2 }}>
                    <ListItem sx={{ display: "list-item", pl: 0 }}>
                      <Typography variant="p" paragraph sx={{ mb: 0 }}>
                        Providing and improving our services
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 0 }}>
                      <Typography variant="p" paragraph sx={{ mb: 0 }}>
                        Responding to inquiries or requests
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 0 }}>
                      <Typography variant="p" paragraph sx={{ mb: 0 }}>
                        Sending updates, offers, and service-related communications
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 0 }}>
                      <Typography variant="p" paragraph sx={{ mb: 0 }}>
                        Personalizing your user experience
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 0 }}>
                      <Typography variant="p" paragraph sx={{ mb: 0 }}>
                        Complying with legal obligations
                      </Typography>
                    </ListItem>
                  </List>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Data Security</Typography>
                  <Typography variant="p" paragraph>
                    We take appropriate technical and organizational measures to safeguard your personal data against unauthorized access, alteration, disclosure, or destruction.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Cookies and Tracking Technologies</Typography>
                  <Typography variant="p" paragraph>
                    Our website uses cookies and similar technologies to enhance functionality, analyze usage, and deliver a better experience. You can manage cookie preferences through your browser settings.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Third-Party Sharing</Typography>
                  <Typography variant="p" paragraph>
                    We do not sell or rent your personal information. We may share your data with trusted partners or service providers only to the extent necessary to deliver our services, comply with the law, or protect our rights.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Your Rights</Typography>
                  <Typography variant="p" paragraph>
                    You have the right to:
                  </Typography>

                  <List sx={{ pl: 2 }}>
                    <ListItem sx={{ display: "list-item", pl: 0 }}>
                      <Typography variant="p" paragraph sx={{ mb: 0 }}>
                        Access, update, or delete your personal information
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 0 }}>
                      <Typography variant="p" paragraph sx={{ mb: 0 }}>
                        Withdraw consent at any time
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 0 }}>
                      <Typography variant="p" paragraph sx={{ mb: 0 }}>
                        Request details about how your data is processed
                      </Typography>
                    </ListItem>
                  </List>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Policy Updates</Typography>
                  <Typography variant="p" paragraph>
                    We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated revision date.
                  </Typography>
                </Box>

                <Box className="privacy-policy-info">
                  <Typography variant="h5">Contact Us</Typography>
                  <Typography variant="p" paragraph>
                    If you have questions about this Privacy Policy or our data practices, please contact us at:
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

export default CompPrivacyPolicy;
