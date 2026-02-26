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
import Blog16 from "@/blog-ehr-erm-patient-record.webp";
import Blog17 from "@/blog-travel-industry.webp";
import Blog18 from "@/blog-real-estate-crm-soft.webp";
import Blog19 from "@/blog-ui-dev-guide.webp";
import Blog20 from "@/blog-backend-dev-cloud-computing.webp";
import Blog21 from "@/blog-future-of-ai-research.webp";
import Blog22 from "@/blog-role-of-electronic.webp";
import Blog23 from "@/blog-mastering-vue-js.webp";
import Blog24 from "@/blog-ux-developers.webp";
import Blog25 from "@/blog-digital-transformation-airlines.webp";
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
  "DevOps",
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
    viewport: { once: true, amount: 0.1 },
  };


  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    viewport: { once: true, amount: 0.1 }
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
    { id: "p20", title: "EHR/EMR Systems: Optimizing Patient Records with IT Solutions", excerpt: "When you walk into a clinic or hospital today, you expect one thing above all else: that your medical history, test results, and treatment plans are available instantly when needed. That seems natural — after all, it’s about your health. But until...", author: "Kinjal Vaghasiya", date: "January 5th, 2026", readTime: "6 min read", category: "Business Strategy", image: Blog16, avatarImage: "/images/written-by-kinjal.webp", featured: false, url: "/blog/ehr-emr-systems-patient-record-management" },
    { id: "p21", title: "How IT Solutions Are Revolutionizing the Travel Industry", excerpt: "The travel industry has undergone a remarkable transformation over the last few decades. From the days of paper tickets and walk-in travel agents to the era of online booking platforms and mobile apps, the way people plan, book, and experience travel has changed dramatically...", author: "Jignesh Vaghasiya", date: "January 8th, 2026", readTime: "6 min read", category: "Business Strategy", image: Blog17, avatarImage: "/images/written-by-jignesh.webp", featured: false, url: "/blog/it-solutions-revolutionizing-travel-industry" },
    { id: "p22", title: "From Listings to Leads: How Real Estate CRM Software Boosts Sales", excerpt: "The real estate industry has always been about relationships. Long before digital platforms, successful agents were those who remembered client preferences, followed up consistently, and stayed top of mind. Today, while the medium has changed, the principle remains...", author: "Kinjal Vaghasiya", date: "January 13th, 2026", readTime: "6 min read", category: "Business Strategy", image: Blog18, avatarImage: "/images/written-by-kinjal.webp", featured: false, url: "/blog/real-estate-crm-software-boosts-sales" },
    { id: "p23", title: "Complete Guide to UI Development: From Basics to Advanced Techniques ", excerpt: "User Interface (UI) development has evolved far beyond arranging buttons and choosing colors. Today, it plays a central role in shaping how users perceive, trust, and interact with digital products. Whether it’s a mobile app, a web platform, or enterprise software, the quality of...", author: "Sandeep Dodiya", date: "January 16th, 2026", readTime: "6 min read", category: "Web Development", image: Blog19, avatarImage: "/images/written-by-sandip.webp", featured: false, url: "/blog/ui-development-guide-basics-advanced" },
    {
      id: "p24", title: "Backend Development in the Era of Cloud Computing", excerpt: "Backend development has undergone a massive transformation in the last decade, and cloud computing has been the biggest driving force behind this change. Earlier, backend systems were tightly coupled with physical servers, limited infrastructure, and rigid deployment processes. Today...", author: "Bharat Katariya", date: "January 28th, 2026", readTime: "6 min read", category: "DevOps", image: Blog20, avatarImage: "/images/blog-avtar-bharat.webp", featured: false, url: "blog/modern-backend-development-cloud-computing",
    },
    { id: "p25", title: "Future of AI Research: Trends & Predictions", excerpt: "Artificial Intelligence (AI) has rapidly evolved from a niche research area into a transformative force shaping industries, economies, and everyday life. From recommendation engines and voice assistants to autonomous vehicles and medical diagnostics, AI systems...", author: "Jignesh Vaghasiya", date: "January 31st, 2026", readTime: "6 min read", category: "Business Strategy", image: Blog21, avatarImage: "/images/written-by-jignesh.webp", featured: false, url: "/blog/future-of-ai-research-trends-predictions" },
    { id: "p26", title: "The Role of Electronic Health Records (EHR) in Modern Healthcare", excerpt: "Electronic Health Records (EHR) have become a cornerstone of modern healthcare, transforming how patient information is collected, stored, and utilized. As healthcare systems move away from paper-based records, EHR in modern healthcare enables faster access...", author: "Kinjal Vaghasiya", date: "February 3rd, 2026", readTime: "6 min read", category: "Business Strategy", image: Blog22, avatarImage: "/images/written-by-kinjal.webp", featured: false, url: "/blog/role-of-electronic-health-records-ehr-in-modern-healthcare" },
    { id: "p27", title: "Mastering Vue.js 3: A Complete Guide to Building Modern Web Applications", excerpt: "Modern web applications demand speed, scalability, maintainability, and an excellent user experience. JavaScript frameworks play a crucial role in meeting these expectations, and Vue.js 3 has emerged as one of the most powerful and developer-friendly...", author: "Hitesh Khatwani", date: "February 9th, 2026", readTime: "6 min read", category: "Web Development", image: Blog23, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog/mastering-vuejs-3-modern-web-development" },
    { id: "p28", title: "Dark Mode Design: Best Practices for UI/UX Developers", excerpt: "Dark mode is no longer a “nice-to-have” feature—it’s an expectation. Users now actively look for dark mode in mobile apps, websites, dashboards, and enterprise applications. Poorly implemented dark mode can lead to eye strain...", author: "Sandeep Dodiya", date: "February 12th, 2026", readTime: "6 min read", category: "Web Development", image: Blog24, avatarImage: "/images/written-by-sandip.webp", featured: false, url: "/blog/dark-mode-design-ui-ux-developers-digital-solutions-provider" },
    // feb advance blog
    // { id: "p25", title: "Complete Guide to UI Development: From Basics to Advanced Techniques ", excerpt:"The debate between Android and iOS has been ongoing for over a decade, but in 2026, it has evolved far beyond smartphones. It’s no longer just about device preferences — it’s about ecosystems, AI integration, privacy, cross-device functionality, monetization, and user experience...", author: "Raj Shah", date: "January 16th, 2026", readTime: "6 min read", category: "Mobile App Development", image: Blog19, avatarImage: "/images/written-by-raj.webp", featured: false, url: "/blog/android-vs-ios-2026-ecosystem-comparison" },
    // { id: "p26", title: "How Mobile Apps Are Transforming Real Estate Client Experience", excerpt:"The real estate industry has witnessed a major digital transformation over the past decade, and mobile applications are at the forefront of this revolution. What was once a highly traditional and paper-based industry has evolved into a tech-driven sector, with mobile apps dramatically enhancing the way clients search...", author: "Raj Shah", date: "January 16th, 2026", readTime: "6 min read", category: "Mobile App Development", image: Blog19, avatarImage: "/images/written-by-raj.webp", featured: false, url: "/blog/mobile-app-services-real-estate-crm-client-experience" },
    { id: "p29", title: "Digital Transformation in Airlines: Faster Check-ins, Smarter Operations", excerpt: "The airline industry is undergoing one of the most significant transformations in its history. Rising passenger expectations, intense competition, operational complexity, and the need for cost efficiency have pushed airlines to embrace digital transformation at an unprecedented...", author: "Jignesh Vaghasiya", date: "February 16th, 2026", readTime: "6 min read", category: "Business Strategy", image: Blog25, avatarImage: "/images/written-by-jignesh.webp", featured: false, url: "/blog/digital-transformation-airlines-faster-check-ins" },
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
              /* ishita 9/1 */
              slotProps={{
                scrollButtons: {
                  disableRipple: true,
                },
              }}
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
