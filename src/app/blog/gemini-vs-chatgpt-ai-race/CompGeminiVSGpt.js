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
import NextLink from "next/link";

import BtnIcon from "@/btn-icon.svg?url";

import Blog2 from "@/blog-webdevelopment.webp";
import Blog3 from "@/blog-appdevelopment.webp";
import Blog5 from "@/blog-backenddevelopment.webp";
import Blog6 from "@/blog-gemini-vs-gpt.webp"

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
    { id: "section1", label: "Introduction" },
    { id: "section2", label: "Why the AI Race Matters" },
    { id: "section3", label: "Gemini 1.5: Google’s Enterprise Powerhouse" },
    { id: "section4", label: "ChatGPT 5: OpenAI’s Creative Genius " },
    { id: "section5", label: "Key Differences at a Glance " },
    { id: "section6", label: "Verdict: Who Comes Out on Top? " },
    { id: "section7", label: "Looking Ahead: The Future of AI" },
];

const CompGeminiVSGpt = () => {
    const [activeId, setActiveId] = useState("section1");
    const sectionRefs = useRef({});
    const tocButtonRefs = useRef({});
    const [isMobile, setIsMobile] = useState(false);
    const HEADER_OFFSET = isMobile ? 80 : 100;

    useEffect(() => {
        let timeoutId;

        // Detect mobile device
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Function to find the active section based on scroll position
        const findActiveSection = () => {
            const scrollPosition = window.scrollY + HEADER_OFFSET + 50;

            for (let i = tocItems.length - 1; i >= 0; i--) {
                const section = document.getElementById(tocItems[i].id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (scrollPosition >= sectionTop) {
                        return tocItems[i].id;
                    }
                }
            }
            return tocItems[0].id; // Default to first section
        };

        // Scroll event handler
        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const newActiveId = findActiveSection();
                setActiveId(prevActiveId => {
                    if (newActiveId && newActiveId !== prevActiveId) {
                        // Smoothly scroll the TOC button into view if needed
                        const tocButton = tocButtonRefs.current[newActiveId];
                        if (tocButton && !isMobile) {
                            tocButton.scrollIntoView({
                                behavior: "smooth",
                                block: "nearest",
                            });
                        }
                        return newActiveId;
                    }
                    return prevActiveId;
                });
            }, 50);
        };

        // Set up scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initial check
        handleScroll();

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, [isMobile, HEADER_OFFSET]); // Add dependencies

    const handleClick = (id) => {
        // Highlight immediately on click for instant feedback
        setActiveId(id);
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -HEADER_OFFSET; // offset from top to clear sticky header
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

            // Use requestAnimationFrame to ensure smooth scrolling
            requestAnimationFrame(() => {
                window.scrollTo({ top: y, behavior: "smooth" });
            });
        }
    };

    // Demo posts data with same dummy content; replace with real data later
    const posts = [
        { id: "p6", title: "The Ultimate Frontend Face-Off: AngularJS vs ReactJS", excerpt: "In today’s fast-moving world of frontend web development, one debate keeps coming up among develop...", author: "Hitesh khatwani", date: "May 5th, 2025", readTime: "6 min read", category: "Web Development", image: Blog2, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog/angularjs-vs-reactjs-frontend-faceoff" },
        { id: "p7", title: "Why Flutter Remains the MVP King in 2025", excerpt: "In today’s fast-paced digital landscape, launching a Minimum Viable Product (MVP) swiftly and effi...", author: "Bharat Katariya", date: "May 28th, 2025", readTime: "6 min read", category: "Mobile App Development", image: Blog3, avatarImage: "/images/blog-avtar-bharat.webp", featured: false, url: "/blog/flutter-mvp-king-2025" },
        // { id: "p8", title: "DeepSeek vs ChatGPT: A Comprehensive Comparison of AI-Powered Chatbots", excerpt: "Artificial Intelligence (AI) has transformed the way we engage with technology, and AI-driven cha...", author: "Dilip Tiwari", date: "March 10th, 2025", readTime: "6 min read", category: "AI", image: Blog4, featured: false, url: "/blog-details8" },
        { id: "p9", title: "Django vs. Flask: Which Web Framework Should You Choose?", excerpt: "Introduction: Choosing Your Python Web Framework In the world of Python web development, two framew...", author: "Hitesh Khatwani", date: "April 14th, 2025", readTime: "6 min read", category: "Web Development", image: Blog5, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog/django-vs-flask-which-python-web-framework" },
    ];


    const getPostsForCategory = (category) => {
        if (category === "All") return posts;
        return posts.filter((p) => p.category === category);
    };


    const renderExploreMore = () => {
        const explorePosts = posts.filter((p) => !p.featured).slice(0, 9);
        if (!explorePosts.length) return null;

        return (
            <Grid container spacing={4}>
                {explorePosts.map((post) => (
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
                                            src={post.avatarImage || post.avtarimage || "/images/blog-avtar.webp"}
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

            <Box sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
                <Container className="custom-container" maxWidth="lg">
                    <Grid container spacing={4} className="pt-100">
                        <Grid size={{ xs: 12 }}>
                            <Card
                                className="blog-card blog-card-active justify-start"
                                elevation={0}
                            >
                                <CardMedia className="blog-card-image">
                                    <Image src={Blog6} alt="Gemini 1.5 vs ChatGPT 5: AI Showdown 2025 – Who’s Ahead " />
                                </CardMedia>

                                <CardContent className="blog-card-content">
                                    <Box>
                                        <Chip
                                            label="AI"
                                            size="small"
                                            className="blog-card-chip"
                                        />

                                        <Box className="blog-card-title-row">
                                            <Typography variant="h5" className="blog-card-title">
                                                Gemini 1.5 vs ChatGPT 5: Who's Really Leading the AI Race?
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="blog-card-meta" sx={{ mb: 3 }}>
                                        <Box className="avtar-box">
                                            <Avatar
                                                alt="Jignesh Vaghasiya"
                                                src="/images/written-by-jignesh.webp"
                                                className="blog-card-avatar"
                                            />
                                            <Typography
                                                variant="caption"
                                                className="blog-card-author"
                                            >
                                                Jignesh Vaghasiya
                                            </Typography>
                                        </Box>

                                        <Box className="blog-card-date-item">
                                            <Image
                                                src={Calender}
                                                alt="Date"
                                                className="blog-meta-icon"
                                            />
                                            <Typography variant="caption" className="blog-card-date">
                                                7th November, 2025
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
                                                    tocButtonRefs.current[item.id] = el;
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
                            <Box id="section1" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Introduction
                                </Typography>
                                <Typography variant="body1">
                                    AI is moving at lightning speed. From chatbots that answer simple questions to models that can generate complex content, it’s reshaping the way we work, create, and communicate. In 2025, two names are making headlines: Google’s Gemini 1.5 and OpenAI’s ChatGPT 5. Both are powerful, but which one deserves the crown?
                                    <br />
                                    <br />
                                    Let’s dive in and explore their strengths, weaknesses, and real-world applications — and see how businesses can make the most of AI for content creation, marketing, and digital strategies.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Why the AI Race Matters
                                </Typography>
                                <Typography variant="body1">
                                    AI isn’t just a tech trend anymore. It’s a game-changer for businesses. Imagine being able to:
                                    <br />
                                    <br />
                                </Typography>

                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Create content automatically" />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Provide instant medical advice" />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Launch marketing campaigns faster and smarter " />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Engage customers in ways that feel personal" />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Analyze complex data in minutes instead of hours" />
                                        </ListItem>
                                    </List>
                                    <Typography variant="body1">
                                        In our previous blog <Link href="https://www.universalstreamsolution.com/blog/deepseek-vs-chatgpt-ai-chatbot">DeepSeek vs ChatGPT</Link>, we explored emerging AI challengers. Now, with Gemini 1.5 vs ChatGPT 5, the spotlight is on two global tech giants. This isn’t just about performance — it’s about how AI is shaping entire industries, from marketing and e-commerce to research and enterprise solutions
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Gemini 1.5: Google’s Enterprise Powerhouse
                                </Typography>
                                <Typography variant="body1">
                                    Google DeepMind’s Gemini 1.5 is built with something called a Mixture of Experts (MoE) architecture. In simple terms, it can “call in” specialized neural networks depending on the task, making it both efficient and precise.
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    One of its standout features? A context window of up to 1 million tokens. That’s huge. It means Gemini 1.5 can handle long documents, transcripts, or even massive codebases without forgetting the details.
                                    <br />
                                </Typography>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="body1">
                                        Here’s why businesses love it:
                                        <br />
                                    </Typography>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="It handles multimodal data — text, images, audio, and video — seamlessly." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Integration with Google tools like Docs, Sheets, and Search makes workflows smooth." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Its “Gemini Flash” model is designed to be fast and cost-effective." />
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="body1">
                                        Where it falls short:
                                        <br />
                                    </Typography>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Gemini 1.5 isn’t as creative as ChatGPT 5." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="It’s more geared toward developers and enterprise clients than casual users." />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. ChatGPT 5: OpenAI’s Creative Genius
                                </Typography>
                                <Typography variant="body1">
                                    If Gemini is the “analytical powerhouse,” ChatGPT 5 is the creative one. Building on GPT-4, it can understand text, images, audio, and limited video. OpenAI emphasizes reasoning, creativity, and natural conversation, which makes it perfect for tasks that require both logic and human-like interaction.
                                    <br />
                                    <br />
                                </Typography>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="body1">
                                        What makes it special?
                                        <br />
                                    </Typography>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="It can reason step by step and solve complex problems. " />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="It remembers user context across sessions, which feels more personal." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="It excels in creative generation — blogs, scripts, social media content, and storytelling." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Works seamlessly with Microsoft Copilot, Bing, and other apps." />
                                        </ListItem>
                                    </List>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        Limitations:
                                    </Typography>

                                    <Box>
                                        <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Token limits are lower than Gemini 1.5.  " />
                                            </ListItem>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Subscription limits apply, and occasionally, it may provide incorrect information. " />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        Real-World Applications
                                    </Typography>

                                    <Box>
                                        <Typography variant="body1">
                                            Content Creation:
                                            <br />
                                        </Typography>
                                        <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="ChatGPT 5 is ideal for creating engaging blogs, social media posts, and marketing scripts. " />
                                            </ListItem>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Gemini 1.5 is better for structured, research-heavy documents." />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        Coding & Development:
                                    </Typography>

                                    <Box>
                                        <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="ChatGPT 5 helps with coding, debugging, and automation. " />
                                            </ListItem>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Gemini 1.5 integrates well with Google Colab for enterprise-level machine learning projects" />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        Business Intelligence:
                                    </Typography>

                                    <Box>
                                        <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Gemini 1.5 processes long reports, analyzes trends, and generates insights." />
                                            </ListItem>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="ChatGPT 5 summarizes data and gives content or strategy recommendations. " />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        Multimedia:
                                    </Typography>

                                    <Box>
                                        <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Gemini 1.5 can understand video, audio, and images in context. " />
                                            </ListItem>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="ChatGPT 5 creates visual content and interprets media, though video integration is limited." />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>

                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Key Differences at a Glance
                                </Typography>
                                <Typography variant="body1">
                                    Feature | Gemini 1.5 | ChatGPT 5
                                    <br />
                                    <br />
                                </Typography>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        Developer:
                                    </Typography>

                                    <Box>
                                        <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Gemini 1.5 → Google DeepMind" />
                                            </ListItem>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="ChatGPT 5 → OpenAI" />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        Strength:
                                    </Typography>

                                    <Box>
                                        <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Gemini 1.5 → Accuracy & real-time knowledge " />
                                            </ListItem>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="ChatGPT 5 → Creativity & reasoning " />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        Context Window:
                                    </Typography>

                                    <Box>
                                        <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Gemini 1.5 → Up to 1 million tokens" />
                                            </ListItem>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="ChatGPT 5 → 256k–512k tokens" />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        Multimodal Support:
                                    </Typography>

                                    <Box>
                                        <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Gemini 1.5 → Text, image, video, code" />
                                            </ListItem>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="ChatGPT 5 → Text, image, audio " />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        Integration:
                                    </Typography>

                                    <Box>
                                        <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Gemini 1.5 → Google Workspace, Search, Android" />
                                            </ListItem>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="ChatGPT 5 → Microsoft Copilot, Bing" />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        Best For:
                                    </Typography>

                                    <Box>
                                        <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Gemini 1.5 → Enterprises & researchers " />
                                            </ListItem>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="ChatGPT 5 → Creators & professionals " />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        Pricing:
                                    </Typography>

                                    <Box>
                                        <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Pricing:  " />
                                            </ListItem>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="ChatGPT 5 → Free / subscription / enterprise " />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Verdict: Who Comes Out on Top?
                                </Typography>
                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Box>
                                        <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="Gemini 1.5: Great for enterprises and data-heavy tasks. " />
                                            </ListItem>
                                            <ListItem component="li" disablePadding>
                                                <ListItemText primary="ChatGPT 5: Excels in creativity, conversation, and accessibility." />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>
                                <Typography variant="body1">
                                    Honestly, there’s no clear “winner.” Many businesses benefit from using both together. Combining the analytical power of Gemini 1.5 with the creative genius of ChatGPT 5 can boost content creation, SEO, and audience engagement. Our <Link href="/how-we-help/digital-marketing">Digital Marketing Services</Link> help brands merge AI insights with creativity for better online visibility.

                                </Typography>
                            </Box>


                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Looking Ahead: The Future of AI
                                </Typography>
                                <Typography variant="body1">
                                    The next wave — Gemini 2.0 and GPT-6 — is already on the horizon. Expect smarter reasoning, stronger multimodal capabilities, and more automation. Responsible AI adoption will be crucial. Companies that plan ahead and integrate AI into workflows will gain a major advantage.
                                </Typography>
                            </Box>

                            <Box className="written-by-box">
                                <Box className="written-by-box-header">
                                    <Avatar
                                        src="/images/written-by-jignesh.webp" // Replace with actual image
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
                                                Jignesh Vaghasiya
                                            </Typography>
                                            <Link
                                                href="https://www.linkedin.com/in/jignesh-vaghasiya24/"
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
                                    Jignesh Vaghasiya is a visionary tech entrepreneur and CEO with over 15 years of experience in driving digital transformation and business growth. He specializes in AI, mobile app innovation, and scalable tech strategies that empower global enterprises. 
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

                    {renderExploreMore()}
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

export default CompGeminiVSGpt;
