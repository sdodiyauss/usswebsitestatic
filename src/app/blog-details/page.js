"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Link,
  Chip,
  Avatar,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import BtnIcon from "@/btn-icon.svg?url";
import Blog1 from "@/blog1.webp";
import Blog2 from "@/blog2.webp";
import Blog3 from "@/blog3.webp";

import SmallLinkedIN from "@/linkedin-icon.svg?url";
import LinkedIN from "@/linkedin-border-icon.svg?url";
import FB from "@/facebook-border-icon.svg?url";
import Twitter from "@/twitter-border-icon.svg?url";
import Pintrest from "@/pintrest-border-icon.svg?url";

import Calender from "@/calendar.svg?url";
import Clock from "@/clock.svg?url";

import Contact from "~/contact/Contact";
import Metadata from "~/meta/Metadata";

const tocItems = [
  { id: "section1", label: "Lorem ipsum1" },
  { id: "section2", label: "Lorem ipsum2" },
  { id: "section3", label: "Lorem ipsum3" },
  { id: "section4", label: "Lorem ipsum4" },
  { id: "section5", label: "Lorem ipsum5" },
  { id: "section6", label: "Lorem ipsum6" },
];

const page = () => {
  const [activeId, setActiveId] = useState("section1");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0.5 }
    );

    tocItems.forEach((item) => {
      const ref = document.getElementById(item.id);
      if (ref) {
        observer.observe(ref);
        sectionRefs.current[item.id] = ref;
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // 100px offset from top
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <Metadata
        title="USS Blog – Insights, Tips & Tech Updates"
        description="Explore the USS blog for expert insights, industry trends, and actionable tips on tech, innovation, and business growth."
      />

      <Box sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Container className="custom-container" maxWidth="lg">
          <Grid container spacing={4} className="pt-100">
            <Grid size={{ xs: 12 }}>
              <Card
                className="blog-card blog-card-active justify-start"
                elevation={0}
              >
                <CardMedia className="blog-card-image">
                  <Image src={Blog1} alt="DeepSeek vs ChatGPT" />
                </CardMedia>

                <CardContent className="blog-card-content">
                  <Box>
                    <Chip
                      label="AI-Chatbots"
                      size="small"
                      className="blog-card-chip"
                    />

                    <Box className="blog-card-title-row">
                      <Typography variant="h5" className="blog-card-title">
                        DeepSeek vs ChatGPT: A Comprehensive Comparison of
                        AI-Powered Chatbots
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="blog-card-meta" sx={{ mb: 3 }}>
                    <Box className="avtar-box">
                      <Avatar
                        alt="Jane Doe"
                        src="/images/blog-avtar.webp"
                        className="blog-card-avatar"
                      />
                      <Typography
                        variant="caption"
                        className="blog-card-author"
                      >
                        Jane Doe
                      </Typography>
                    </Box>

                    <Box className="blog-card-date-item">
                      <Image
                        src={Calender}
                        alt="Date"
                        className="blog-meta-icon"
                      />
                      <Typography variant="caption" className="blog-card-date">
                        02 Mar 2024
                      </Typography>
                    </Box>

                    <Box className="blog-card-date-item">
                      <Image
                        src={Clock}
                        alt="Read Time"
                        className="blog-meta-icon"
                      />
                      <Typography variant="caption" className="blog-card-date">
                        6 min read
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="blog-card-share">
                    <Typography variant="body2" className="blog-share-label">
                      Share this post
                    </Typography>
                    <Box className="blog-social-icons">
                      <Image src={LinkedIN} alt="LinkedIn" />
                      <Image src={FB} alt="Facebook" />
                      <Image src={Twitter} alt="X" />
                      <Image src={Pintrest} alt="Pinterest" />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ pt: 5 }}>
            {/* Left Sticky TOC */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className="toc-wrapper">
                <Typography variant="h6">Table Of Contents</Typography>
                <List component="ul" className="toc-list">
                  {tocItems.map((item) => (
                    <ListItem component="li" key={item.id} disablePadding>
                      <ListItemButton
                        ref={(el) => {
                          if (el && item.id === activeId) {
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "nearest",
                            });
                          }
                        }}
                        selected={activeId === item.id}
                        onClick={() => handleClick(item.id)}
                      >
                        {item.label}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>

            {/* Right Content Section */}
            <Grid size={{ xs: 12, md: 8 }}>
              {/* Section 1 */}
              <Box id="section1" className="toc-content" sx={{ mb: 6 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Section 1: Lorem Ipsum
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur. Et tincidunt justo
                  libero mauris. Purus dictum faucibus praesent ac a suspendisse
                  id senectus. Eleifend tortor consequat blandit suspendisse
                  purus. Lacus pretium amet eu risus sed posuere. Faucibus et
                  leo volutpat mattis ac. Purus lacus phasellus sit nulla
                  pellentesque sapien faucibus urna quam.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Et tincidunt justo
                  libero mauris. Purus dictum faucibus praesent ac a suspendisse
                  id senectus. Eleifend tortor consequat blandit suspendisse
                  purus. Lacus pretium amet eu risus sed posuere. Faucibus et
                  leo volutpat.
                </Typography>
              </Box>

              {/* Section 2 */}
              <Box id="section2" className="toc-content" sx={{ mb: 6 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Section 2: Aliquam Tellus
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur. Et tincidunt justo
                  libero mauris. Purus dictum faucibus praesent ac a suspendisse
                  id senectus. Eleifend tortor consequat blandit suspendisse
                  purus. Lacus pretium amet eu risus sed posuere. Faucibus et
                  leo volutpat mattis ac. Purus lacus phasellus sit nulla
                  pellentesque sapien faucibus urna quam.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Et tincidunt justo
                  libero mauris. Purus dictum faucibus praesent ac a suspendisse
                  id senectus. Eleifend tortor consequat blandit suspendisse
                  purus. Lacus pretium amet eu risus sed posuere. Faucibus et
                  leo volutpat.
                </Typography>
              </Box>

              {/* Section 3 */}
              <Box id="section3" className="toc-content" sx={{ mb: 6 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Section 3: Another Unique Section
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur. Et tincidunt justo
                  libero mauris. Purus dictum faucibus praesent ac a suspendisse
                  id senectus. Eleifend tortor consequat blandit suspendisse
                  purus. Lacus pretium amet eu risus sed posuere. Faucibus et
                  leo volutpat mattis ac. Purus lacus phasellus sit nulla
                  pellentesque sapien faucibus urna quam.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Et tincidunt justo
                  libero mauris. Purus dictum faucibus praesent ac a suspendisse
                  id senectus. Eleifend tortor consequat blandit suspendisse
                  purus. Lacus pretium amet eu risus sed posuere. Faucibus et
                  leo volutpat.
                </Typography>
              </Box>

              {/* Section 4 */}
              <Box id="section4" className="toc-content" sx={{ mb: 6 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Section 4: Custom Heading
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur. Et tincidunt justo
                  libero mauris. Purus dictum faucibus praesent ac a suspendisse
                  id senectus. Eleifend tortor consequat blandit suspendisse
                  purus. Lacus pretium amet eu risus sed posuere. Faucibus et
                  leo volutpat mattis ac. Purus lacus phasellus sit nulla
                  pellentesque sapien faucibus urna quam.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Et tincidunt justo
                  libero mauris. Purus dictum faucibus praesent ac a suspendisse
                  id senectus. Eleifend tortor consequat blandit suspendisse
                  purus. Lacus pretium amet eu risus sed posuere. Faucibus et
                  leo volutpat.
                </Typography>
              </Box>

              {/* Section 5 */}
              <Box id="section5" className="toc-content" sx={{ mb: 6 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Section 5: Deeper Dive
                </Typography>
                <Typography variant="body1">
                  PLorem ipsum dolor sit amet consectetur. Et tincidunt justo
                  libero mauris. Purus dictum faucibus praesent ac a suspendisse
                  id senectus. Eleifend tortor consequat blandit suspendisse
                  purus. Lacus pretium amet eu risus sed posuere. Faucibus et
                  leo volutpat mattis ac. Purus lacus phasellus sit nulla
                  pellentesque sapien faucibus urna quam.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Et tincidunt justo
                  libero mauris. Purus dictum faucibus praesent ac a suspendisse
                  id senectus. Eleifend tortor consequat blandit suspendisse
                  purus. Lacus pretium amet eu risus sed posuere. Faucibus et
                  leo volutpat.
                </Typography>
              </Box>

              {/* Section 6 */}
              <Box id="section6" className="toc-content" sx={{ mb: 6 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Section 6: Final Notes
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur. Et tincidunt justo
                  libero mauris. Purus dictum faucibus praesent ac a suspendisse
                  id senectus. Eleifend tortor consequat blandit suspendisse
                  purus. Lacus pretium amet eu risus sed posuere. Faucibus et
                  leo volutpat mattis ac. Purus lacus phasellus sit nulla
                  pellentesque sapien faucibus urna quam.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Et tincidunt justo
                  libero mauris. Purus dictum faucibus praesent ac a suspendisse
                  id senectus. Eleifend tortor consequat blandit suspendisse
                  purus. Lacus pretium amet eu risus sed posuere. Faucibus et
                  leo volutpat.
                </Typography>
              </Box>

              <Box className="written-by-box">
                <Box className="written-by-box-header">
                  <Avatar
                    src="/images/written-by-bharat.webp" // Replace with actual image
                    alt="Author"
                    className="written-by-box-avatar"
                  />
                  <Box className="written-by-box-info">
                    <Typography
                      variant="caption"
                      className="written-by-box-label"
                    >
                      Written by
                    </Typography>
                    <Box className="written-by-box-name-row">
                      <Typography
                        variant="body1"
                        className="written-by-box-name"
                      >
                        Lorem ipsum
                      </Typography>
                      <Link
                        href="https://linkedin.com"
                        className="written-by-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={SmallLinkedIN} alt="linkedin" />
                      </Link>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  className="written-by-box-description"
                >
                  Lorem ipsum dolor sit amet consectetur. Et tincidunt justo
                  libero mauris. Purus dictum faucibus praesent ac a suspendisse
                  id senectus. Eleifend tortor consequat blandit suspendisse
                  purus. Lacus pretium amet eu risus sed posuere. Faucibus et
                  leo
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              Related{" "}
              <span className="span-text primary-color">
                Blogs
                <div className="line-container">
                  <div className="line-wrapper"></div>
                  <div className="line"></div>
                  <div className="moving-box"></div>
                </div>
              </span>
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ pt: 4 }}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card className="blog-card" elevation={0}>
                <CardMedia className="blog-card-image">
                  <Image src={Blog1} alt="DeepSeek vs ChatGPT" />
                </CardMedia>

                <CardContent className="blog-card-content">
                  <Chip
                    label="AI-Chatbots"
                    size="small"
                    className="blog-card-chip"
                  />

                  {/* Title + Icon */}
                  <Box className="blog-card-title-row">
                    <Typography variant="h6" className="blog-card-title">
                      DeepSeek vs ChatGPT: A Comprehensive Comparison of
                      AI-Powered Chatbots
                    </Typography>
                    <Image src={BtnIcon} alt="btn-icon" />
                  </Box>

                  {/* Author Info */}
                  <Box className="blog-card-meta">
                    <Box className="avtar-box">
                      <Avatar
                        alt="Jane Doe"
                        src="/images/blog-avtar.webp"
                        className="blog-card-avatar"
                      />
                      <Typography
                        variant="caption"
                        className="blog-card-author"
                      >
                        Jane Doe
                      </Typography>
                    </Box>
                    <Typography variant="caption" className="blog-card-date">
                      02 Mar 2024 | 6 min read
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card className="blog-card" elevation={0}>
                <CardMedia className="blog-card-image">
                  <Image src={Blog2} alt="DeepSeek vs ChatGPT" />
                </CardMedia>

                <CardContent className="blog-card-content">
                  <Chip
                    label="AI-Chatbots"
                    size="small"
                    className="blog-card-chip"
                  />

                  {/* Title + Icon */}
                  <Box className="blog-card-title-row">
                    <Typography variant="h6" className="blog-card-title">
                      DeepSeek vs ChatGPT: A Comprehensive Comparison of
                      AI-Powered Chatbots
                    </Typography>
                    <Image src={BtnIcon} alt="btn-icon" />
                  </Box>

                  {/* Author Info */}
                  <Box className="blog-card-meta">
                    <Box className="avtar-box">
                      <Avatar
                        alt="Jane Doe"
                        src="/images/blog-avtar.webp"
                        className="blog-card-avatar"
                      />
                      <Typography
                        variant="caption"
                        className="blog-card-author"
                      >
                        Jane Doe
                      </Typography>
                    </Box>
                    <Typography variant="caption" className="blog-card-date">
                      02 Mar 2024 | 6 min read
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card className="blog-card" elevation={0}>
                <CardMedia className="blog-card-image">
                  <Image src={Blog3} alt="DeepSeek vs ChatGPT" />
                </CardMedia>

                <CardContent className="blog-card-content">
                  <Chip
                    label="AI-Chatbots"
                    size="small"
                    className="blog-card-chip"
                  />

                  {/* Title + Icon */}
                  <Box className="blog-card-title-row">
                    <Typography variant="h6" className="blog-card-title">
                      DeepSeek vs ChatGPT: A Comprehensive Comparison of
                      AI-Powered Chatbots
                    </Typography>
                    <Image src={BtnIcon} alt="btn-icon" />
                  </Box>

                  {/* Author Info */}
                  <Box className="blog-card-meta">
                    <Box className="avtar-box">
                      <Avatar
                        alt="Jane Doe"
                        src="/images/blog-avtar.webp"
                        className="blog-card-avatar"
                      />
                      <Typography
                        variant="caption"
                        className="blog-card-author"
                      >
                        Jane Doe
                      </Typography>
                    </Box>
                    <Typography variant="caption" className="blog-card-date">
                      02 Mar 2024 | 6 min read
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* contact form */}
      <Container className="custom-container" maxWidth="lg">
        <Box className="heading-content">
          <Typography
            variant="h2"
            align="center"
            sx={{ mt: 6, mb: 4, fontWeight: 700 }}
          >
            Have A{" "}
            <span className="primary-color">
              Project In{" "}
              <span className="span-text">
                Mind?
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
      <Contact />
    </>
  );
};

export default page;
