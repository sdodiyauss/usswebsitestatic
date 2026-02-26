"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  InputBase,
  Link,
  Chip,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Tab,
  Tabs,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import NextLink from "next/link";

import BtnIcon from "@/btn-icon.svg?url";
import callIcon from "@/call-icon.svg?url";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import Blog1 from "@/blog-healthcare.webp";
import Blog2 from "@/blog-webdevelopment.webp";
import Blog3 from "@/blog-appdevelopment.webp";
import Blog4 from "@/blog-ai.webp";
import Blog5 from "@/blog-backenddevelopment.webp";
import Blog6 from "@/blog-ai-and-ml.webp";
import Blog7 from "@/blog-gemini-vs-gpt.webp";
import Blog8 from "@/top-mobile-app-dev.webp";
import Blog9 from "@/blog-web-dev.webp";
import Blog10 from "@/blog-mhealth-apps-empower-img.webp";
import Blog11 from "@/blog-erp-systems-real-estate-development.webp";
import Blog12 from "@/blog-minimalist-vs-maximalist-branding.webp";
import Blog13 from "@/blog-digital-banking-property-financing.webp";
import Blog14 from "@/blog-image-ai-powered-custom-software-solutions.webp";
import Blog15 from "@/blog-small-businesses.webp";
import CircleType from "circletype";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";


import Contact from "~/contact/Contact";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Metadata from "~/meta/Metadata";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Healthcare",
  "Web Development",
  "Mobile App Development",
  "AI",
  "UI/UX Design",
  "Business Strategy",
];

const CompBlog = () => {
  //tab
  const [activeTab, setActiveTab] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setSelectedCategory(newValue);
  };

  // const handleSelectChange = (event) => {
  //   const value = event.target.value;
  //   setSelectedCategory(value);
  //   setActiveTab(value);
  // };

  //circle text
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      const circleType = new CircleType(textRef.current);
      circleType.radius(80); // smaller radius to fit in 200x200 circle
      textRef.current.style.fontSize = "15px"; // adjust to fit in circle

      // let rotation = 0;
      // let animationFrame;

      // const animate = () => {
      //   rotation += 0.5; // rotation speed (degrees per frame)
      //   textRef.current.style.transform = `rotate(${rotation}deg)`;
      //   animationFrame = requestAnimationFrame(animate);
      // };

      // animate();

      // return () => cancelAnimationFrame(animationFrame);
    }
  }, []);


  const fadeInUp = {
    initial: { opacity: 0, y: 45 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
    viewport: { once: true, amount: 0.2 },
  };


  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    viewport: { once: true, amount: 0.2 }
  };

  // Demo posts data with same dummy content; replace with real data later
  const posts = [
    {
      id: "p1",
      title: "The Future of Telemedicine & Prescription Delivery",
      excerpt: "The healthcare sector is experiencing a huge shift, fuelled by developments in digital technology. Once considered futuristic concepts, telemedicine and prescription delivery are now integral parts of modern healthcare. The COVID-19 pandemic accelerated their adoption, proving that remote healthcare services are both...",
      author: "Bharat Katariya",
      date: "April 28th, 2025",
      readTime: "6 min read",
      category: "Healthcare",
      image: Blog1,
      avatarImage: "/images/blog-avtar-bharat.webp",
      featured: true,
      url: "/blog/future-telemedicine-prescription-delivery",
    },
    {
      id: "p2",
      title: "The Ultimate Frontend Face-Off: AngularJS vs ReactJS",
      excerpt: "In today’s fast-moving world of frontend web development, one debate keeps coming up among developers: ReactJS or AngularJS—which is the better choice for your project? Each has its strengths, benefits, and use cases, making them formidable contenders in the frontend arena. Let’s dive into this ultimate face-off...",
      author: "Hitesh Khatwani",
      date: "May 5th, 2025",
      readTime: "6 min read",
      category: "Web Development",
      image: Blog2,
      avatarImage: "/images/blog-avtar-hitesh.webp",
      featured: true,
      url: "/blog/angularjs-vs-reactjs-frontend-faceoff",
    },
    {
      id: "p3",
      title: "Why Flutter Remains the MVP King in 2025",
      excerpt: "In today’s fast-paced digital landscape, launching a Minimum Viable Product (MVP) swiftly and efficiently is crucial for startups and businesses aiming to validate their ideas and capture market share. Flutter, Google’s open-source UI toolkit, continues to dominate as the preferred framework for MVP development...",
      author: "Bharat Katariya",
      date: "May 28th, 2025",
      readTime: "6 min read",
      category: "Mobile App Development",
      image: Blog3,
      avatarImage: "/images/blog-avtar-bharat.webp",
      featured: true,
      url: "/blog/flutter-mvp-king-2025",
    },
    {
      id: "p4",
      title: "DeepSeek vs ChatGPT: A Comprehensive Comparison of AI-Powered Chatbots",
      excerpt: "Artificial Intelligence (AI) has transformed the way we engage with technology, and AI-driven chatbots are leading the charge. DeepSeek and ChatGPT are two of the leading players in this field. Both are sophisticated conversational AI models that can help users perform a variety of tasks, from answering questions to...",
      author: "Bharat Katariya",
      date: "March 10th, 2025",
      readTime: "6 min read",
      category: "AI",
      image: Blog4,
      avatarImage: "/images/blog-avtar-bharat.webp",
      featured: true,
      url: "blog/deepseek-vs-chatgpt-ai-chatbot",
    },
    // List posts
    // { id: "p5", title: "The Future of Telemedicine & Prescription Delivery", excerpt: "Introduction The healthcare sector is experiencing a huge shift, fuelled by developments in digital...", author: "Bharat Katariya", date: "April 28th, 2025", readTime: "6 min read", category: "Healthcare", image: Blog1, avatarImage: "/images/blog-avtar-bharat.webp", featured: false, url: "/blog/future-telemedicine-prescription-delivery" },
    // { id: "p6", title: "The Ultimate Frontend Face-Off: AngularJS vs ReactJS", excerpt: "In today’s fast-moving world of frontend web development, one debate keeps coming up among develop...", author: "Hitesh Khatwani", date: "May 5th, 2025", readTime: "6 min read", category: "Web Development", image: Blog2, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog/angularjs-vs-reactjs-frontend-faceoff" },
    // { id: "p7", title: "Why Flutter Remains the MVP King in 2025", excerpt: "In today’s fast-paced digital landscape, launching a Minimum Viable Product (MVP) swiftly and effi...", author: "Bharat Katariya", date: "May 28th, 2025", readTime: "6 min read", category: "Mobile App Development", image: Blog3, avatarImage: "/images/blog-avtar-bharat.webp", featured: false, url: "/blog/flutter-mvp-king-2025" },
    // { id: "p8", title: "DeepSeek vs ChatGPT: A Comprehensive Comparison of AI-Powered Chatbots", excerpt: "Artificial Intelligence (AI) has transformed the way we engage with technology, and AI-driven cha...", author: "Bharat Katariya", date: "March 10th, 2025", readTime: "6 min read", category: "AI", image: Blog4, avatarImage: "/images/blog-avtar-bharat.webp", featured: false, url: "blog/deepseek-vs-chatgpt-ai-chatbot" },
    { id: "p9", title: "Django vs. Flask: Which Web Framework Should You Choose?", excerpt: "In the world of Python web development, two frameworks stand tall: Django and Flask. These powerful tools have revolutionized how developers build web applications, but they take fundamentally different approaches. At USSLLC, we’ve helped countless clients navigate this critical decision – and today, we’re sharing our expert...", author: "Hitesh Khatwani", date: "April 14th, 2025", readTime: "6 min read", category: "Web Development", image: Blog5, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog/django-vs-flask-which-python-web-framework" },
    { id: "p10", title: "AI and Machine Learning Are Transforming Healthcare", excerpt: "Healthcare has changed dramatically over the last decade. A few years ago, patient records were scattered across labs, clinics, and paper files. Doctors spent more time looking for information than treating patients. Today, artificial intelligence (AI) and machine learning (ML) help healthcare teams make smarter decisions...", author: "Kinjal Vaghasiya", date: "November 3rd, 2025", readTime: "6 min read", category: "AI", image: Blog6, avatarImage: "/images/blog-avtar-kinjal.webp", featured: false, url: "/blog/ai-machine-learning-transforming-healthcare" },
    { id: "p11", title: "Gemini 1.5 vs ChatGPT 5: Who’s Really Leading the AI Race? ", excerpt: "AI is moving at lightning speed. From chatbots that answer simple questions to models that can generate complex content, it’s reshaping the way we work, create, and communicate. In 2025, two names are making headlines: Google’s Gemini 1.5 and OpenAI’s ChatGPT 5. Both...", author: "Jignesh Vaghasiya", date: "November 7th, 2025", readTime: "6 min read", category: "AI", image: Blog7, avatarImage: "/images/written-by-jignesh.webp", featured: false, url: "/blog/gemini-vs-chatgpt-ai-race" },
    { id: "p12", title: "Top Mobile App Development Trends to Watch in 2025", excerpt: "Mobile apps… wow, they’ve really changed, haven’t they? Not just tiny tools anymore. Now they’re more like experiences, sometimes even the first handshake between a brand and a user. And in 2025? The pace is only speeding up. Businesses, startups, and developers are all scrambling to make apps smarter, faster, and more indispensable. From AI-powered features to immersive...", author: "Raj Shah", date: "November 19th, 2025", readTime: "6 min read", category: "Mobile App Development", image: Blog8, avatarImage: "/images/written-by-raj.webp", featured: false, url: "/blog/mobile-app-development-trends-2025" },
    { id: "p13", title: "Top Web App Development Trends for 2025", excerpt: "Web applications have changed drastically over the last few years. Looking ahead to 2025, users expect apps that are fast, smart, and easy to use. If your web app feels outdated, it’s easy for users to move to competitors who offer smoother experiences...", author: "Hitesh Khatwani", date: "November 27th, 2025", readTime: "6 min read", category: "Web Development", image: Blog9, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog/top-web-app-trends-2025" },
    { id: "p14", title: "How mHealth Apps Are Empowering Patients and Doctors Alike ", excerpt: "Ever wondered what happens when healthcare meets smartphones in a really thoughtful way? Over the last few years, mobile health—“mHealth”—apps have quietly turned into something much more than just health‑trackers. They’re evolving into tools that shift power back to patients, streamline doctors’ workflows, and make hospitals run smoother...", author: "Kinjal Vaghasiya", date: "December 2nd, 2025", readTime: "6 min read", category: "Healthcare", image: Blog10, avatarImage: "/images/blog-avtar-kinjal.webp", featured: false, url: "/blog/mhealth-apps-empowering-patients-doctors" },
    { id: "p15", title: "How ERP Systems Streamline Real Estate Development Project ", excerpt: "Real estate development is complicated. You’re juggling land, construction, approvals, contractors, budgets, sales, and handovers—all at the same time. Miss one step, and suddenly costs rise, timelines slip, and stress goes through the roof...", author: "Raj Shah", date: "December 12th, 2025", readTime: "6 min read", category: "Mobile App Development", image: Blog11, avatarImage: "/images/written-by-raj.webp", featured: false, url: "/blog/erp-systems-real-estate-development-2025" },
    { id: "p16", title: "Minimalist vs Maximalist Branding: Which Works Best in 2025?  ", excerpt: "Branding conversations in 2025 look very different from even a few years ago. Today, it’s no longer just about logos, colors, or visual trends. It’s about how quickly users understand you, how confidently they trust you, and how strongly they remember you...", author: "Nirav Mehta", date: "December 16th, 2025", readTime: "6 min read", category: "UI/UX Design", image: Blog12, avatarImage: "/images/written-by-nirav.webp", featured: false, url: "/blog/minimalist-vs-maximalist-branding" },
    { id: "p17", title: "How Digital Banking is Changing Property Financing ", excerpt: "Buying a property is exciting. It really is. But let’s be honest—it can also be stressful. Picking the right home, figuring out how to pay for it, and then dealing with the loan process… it’s a lot...", author: "Hitesh Khatwani", date: "December 19th, 2025", readTime: "6 min read", category: "Web Development", image: Blog13, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog/digital-banking-property-financing " },
    { id: "p18", title: "The Role of Artificial Intelligence in Custom Software Development ", excerpt: "Artificial Intelligence (AI) has rapidly evolved from an emerging technology into a core driver of digital transformation. Businesses across industries are embracing AI not just to automate tasks, but to build intelligent systems that adapt, learn, and improve over time. One of the most significant areas where AI is creating lasting impact is custom software development...", author: "Jignesh Vaghasiya", date: "December 23th, 2025", readTime: "6 min read", category: "AI", image: Blog14, avatarImage: "/images/written-by-jignesh.webp", featured: false, url: "/blog/ai-powered-custom-software-solutions" },
    { id: "p19", title: "How Small Businesses Survive Without Big Budgets ", excerpt: "Running a small business without a big budget is no longer an exception — it is the norm. Across industries, entrepreneurs are learning that success does not always come from how much money you invest, but from how intelligently you use the resources you already have. In a market dominated by large corporations and well-funded startups, small businesses...", author: "Kinjal Vaghasiya", date: "December 30th, 2025", readTime: "6 min read", category: "Business Strategy", image: Blog15, avatarImage: "/images/written-by-kinjal.webp", featured: false, url: "/blog/how-small-businesses-survive-without-big-budgets" },
  ];


  const getPostsForCategory = (category) => {
    if (category === "All") return posts;
    return posts.filter((p) => p.category === category);
  };

  const renderCategorySection = (category) => {
    const list = getPostsForCategory(category);
    if (!list.length) return null;

    // const sorted = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    // const [featuredPost, ...restPosts] = sorted;
    // const limitedRestPosts = restPosts.slice(0, 3);

    // Copy list to avoid mutating original
    const sorted = [...list];

    // FEATURED = last item in array
    const featuredPost = sorted[sorted.length - 1];

    // LAST 3 posts before featured post
    const limitedRestPosts = sorted.slice(-4, -1).reverse();

    return (
      <Box className={category === "All" ? "all-blog-wrapper" : "category-blog-wrapper"} sx={{ py: 4 }}>
        <Container className="custom-container" maxWidth="lg">
          {featuredPost && (
            <Grid container spacing={4}>
              <Grid size={{ xs: 12 }}>
                <Card className="blog-card blog-card-active" elevation={0}>
                  <CardMedia className="blog-card-image">
                    <Image src={featuredPost.image} alt={featuredPost.title} />
                  </CardMedia>

                  <CardContent className="blog-card-content">
                    <Box>
                      <Chip label={featuredPost.category} size="small" className="blog-card-chip" />
                      <Box className="blog-card-title-row">
                        <Typography component={NextLink} href={featuredPost.url} variant="h5" className="blog-card-title">
                          {featuredPost.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#333" }}>
                          {featuredPost.excerpt}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="blog-card-meta">
                      <Box className="avtar-box">
                        <Avatar
                          alt={featuredPost.author}
                          src={featuredPost.avatarImage || featuredPost.avtarimage || "/images/blog-avtar-bharat.webp"}
                          className="blog-card-avatar"
                        />
                        <Typography variant="caption" className="blog-card-author">
                          {featuredPost.author}
                        </Typography>
                      </Box>
                      <Typography variant="caption" className="blog-card-date">
                        {featuredPost.date} | {featuredPost.readTime}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
          {!!limitedRestPosts.length && (
            <Grid container spacing={4} sx={{ pt: 4 }}>
              {limitedRestPosts.map((post) => (
                <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card className="blog-card" elevation={0}>
                    <CardMedia className="blog-card-image">
                      <Image src={post.image} alt={post.title} />
                    </CardMedia>
                    <CardContent className="blog-card-content">
                      <Chip label={post.category} size="small" className="blog-card-chip" />
                      <Box className="blog-card-title-row">
                        <Typography component={NextLink} href={post.url} variant="h6" className="blog-card-title">
                          {post.title}
                        </Typography>
                        <Image src={BtnIcon} alt="btn-icon" />
                      </Box>
                      <Box className="blog-card-meta">
                        <Box className="avtar-box">
                          <Avatar
                            alt={post.author}
                            src={post.avatarImage || post.avtarimage || "/images/blog-avtar-hitesh.webp"}
                            className="blog-card-avatar"
                          />
                          <Typography variant="caption" className="blog-card-author">
                            {post.author}
                          </Typography>
                        </Box>
                        <Typography variant="caption" className="blog-card-date">
                          {post.date} | {post.readTime}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    );
  };

  const renderExploreMore = () => {
    // const explorePosts = posts.filter((p) => !p.featured).slice(0, 9);
    // if (!explorePosts.length) return null;

    return (
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid key={`explore-${post.id}`} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card className="blog-card" elevation={0}>
              <CardMedia className="blog-card-image">
                <Image src={post.image} alt={post.title} />
              </CardMedia>

              <CardContent className="blog-card-content">
                <Chip label={post.category} size="small" className="blog-card-chip" />

                <Box className="blog-card-title-row">
                  <Typography component={NextLink} href={post.url} variant="h6" className="blog-card-title">
                    {post.title}
                  </Typography>
                  <Image src={BtnIcon} alt="btn-icon" />
                </Box>

                <Box className="blog-card-meta">
                  <Box className="avtar-box">
                    <Avatar
                      alt={post.author}
                      src={post.avatarImage || post.avtarimage || "/images/blog-avtar-hitesh.webp"}
                      className="blog-card-avatar"
                    />
                    <Typography variant="caption" className="blog-card-author">
                      {post.author}
                    </Typography>
                  </Box>
                  <Typography variant="caption" className="blog-card-date">
                    {post.date} | {post.readTime}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };


  return (
    <>
      {/* <Metadata
        title="USS Blog – Insights, Tips & Tech Updates"
        description="Explore the USS blog for expert insights, industry trends, and actionable tips on tech, innovation, and business growth."
      /> */}

      {/* healthcare-banner */}
      <motion.section {...fadeIn}>
        <Box className="healthcare-banner-section">
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12, md: 10 }}>
                <Box className="heading-content heading-content-spacing">
                  <Typography variant="h1" sx={{ color: "#f28c38", mb: 2 }}>
                    Insights, Ideas & Innovations
                  </Typography>
                  <Typography variant="h6" paragraph sx={{ mb: 3 }}>
                    Discover fresh perspectives, expert tips, and stories shaping
                    the digital world.
                  </Typography>
                </Box>
                {/* <Box className="main-box">
                  <Box className="email-box-content">
                    <InputBase
                      placeholder="Search Blogs"
                      className="email-input"
                    />
                  </Box>
                  <Box className="heading-content">
                    <Button
                      variant="contained"
                      className="main-primary-btn search-btn"
                    >
                      Search
                    </Button>
                  </Box>
                </Box> */}
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
          <Image src={OrangeStar} alt="shape" className="star2" />
          <Image src={BlueStar} alt="shape" className="star3" />
          <Image src={BlueStar} alt="shape" className="star4" />
          <Image src={BlueStar} alt="shape" className="star5" />
        </Box>
      </motion.section>

      {/* Filter Section */}
      <Box className="blog-filter-header">
        <Container className="custom-container" maxWidth="lg">
          <Box className="blog-filter-controls w-100">
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              textColor="primary"
              indicatorColor="primary"
              className="blog-filter-tabs w-100"
            >
              {categories.map((cat) => (
                <Tab
                  key={cat}
                  label={cat}
                  value={cat}
                  className="blog-filter-tab"
                />
              ))}
            </Tabs>

            {/* <Select
              IconComponent={KeyboardArrowDownIcon}
              value={selectedCategory}
              onChange={handleSelectChange}
              displayEmpty
              size="small"
              className="blog-filter-select"
            >
              <MenuItem value="" className="blog-select">
                Select Category
              </MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select> */}
          </Box>
        </Container>
      </Box>

      {/* Blog Content (Dynamic) */}
      {renderCategorySection(activeTab)}

      {/* removed duplicated Healthcare section in favor of dynamic renderer */}

      {/* removed duplicated Web Development section in favor of dynamic renderer */}

      {/* removed duplicated Mobile App Development section in favor of dynamic renderer */}

      {/* removed duplicated AI section in favor of dynamic renderer */}



      {/* Blog content here */}
      <motion.section {...fadeInUp}>
        <Box className="blog-uss-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content">
              <Typography
                variant="h2"
                align="center"
                sx={{ mb: 5, fontWeight: 700 }}
              >
                Explore{" "}
                <span className="span-text primary-color">
                  More
                  <div className="line-container">
                    <div className="line-wrapper"></div>
                    <div className="line"></div>
                    <div className="moving-box"></div>
                  </div>
                </span>
              </Typography>
            </Box>

            {renderExploreMore()}

            {/* <Grid container spacing={4} mt={4} justifyContent={'center'}>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Box className="heading-content text-center">
                  <Button variant="contained" className="main-primary-btn">
                    Load more
                  </Button>
                </Box>
              </Grid>
            </Grid> */}
          </Container>
        </Box>
      </motion.section>

      {/* call-to-action Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ mt: 6 }} className="call-to-action-wrapper">
          <Container className="custom-container" maxWidth="lg">
            <Box
              sx={{ p: 4, backgroundColor: "#222222", borderRadius: 3 }}
              className="call-to-action-innerbox"
            >
              <Box className="heading-content pr">
                <Typography variant="h2" sx={{ my: 2, color: "white" }}>
                  Explore Ideas, Insights & Innovation That Matter
                </Typography>
              </Box>

              <Box className="circle-wrapper">
                <Box className="call-logo-inner">
                  <Link
                    target="_blank"
                    href="https://calendly.com/jvaghasiya-universalstreamsolution/30min"
                  >
                    <Lottie
                      animationData={minitsCircle} width={'250px'} height={'250px'}
                      loop={true}
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </motion.section>

      {/* contact form */}
      <motion.section {...fadeInUp}>
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography
              variant="h2"
              align="center"
              sx={{ mt: 6, mb: 4, fontWeight: 700 }}
            >
              Let’s Talk{" "}
              <span className="primary-color">
                {" "}
                Blog, Ideas &
                <span className="span-text">
                  More
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
      </motion.section>
    </>
  );
};

export default CompBlog;
