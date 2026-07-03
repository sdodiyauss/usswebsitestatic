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
import Blog6 from "@/blog-top-career-skills-companies.webp";

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
    { id: "section2", label: "Why Skills Matter More Than Ever in 2026" },
    { id: "section3", label: "How to Build These Skills Before 2026" },
    { id: "section4", label: "Industries Hiring for These Skills" },
    { id: "section5", label: "The Technologies Driving the Digital Front Door" },
    { id: "section6", label: "The Future Belongs to Lifelong Learners" },
];

const CompCareerSkillCompanies = () => {
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
        { id: "p6", title: "The Ultimate Frontend Face-Off: AngularJS vs ReactJS", excerpt: "In today’s fast-moving world of frontend web development, one debate keeps coming up among develop...", author: "Hitesh Khatwani", date: "April 14th, 2025", readTime: "6 min read", category: "Web Development", image: Blog2, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog/angularjs-vs-reactjs-frontend-faceoff" },
        { id: "p7", title: "Why Flutter Remains the MVP King in 2025", excerpt: "In today’s fast-paced digital landscape, launching a Minimum Viable Product (MVP) swiftly and effi...", author: "Bharat Katariya", date: "April 28th, 2025", readTime: "6 min read", category: "Mobile App Development", image: Blog3, avatarImage: "/images/blog-avtar-bharat.webp", featured: false, url: "/blog/flutter-mvp-king-2025" },
        // { id: "p8", title: "DeepSeek vs ChatGPT: A Comprehensive Comparison of AI-Powered Chatbots", excerpt: "Artificial Intelligence (AI) has transformed the way we engage with technology, and AI-driven cha...", author: "Dilip Tiwari", date: "March 10th, 2025", readTime: "6 min read", category: "AI", image: Blog4, featured: false, url: "/blog-details8" },
        { id: "p9", title: "Django vs. Flask: Which Web Framework Should You Choose?", excerpt: "Introduction: Choosing Your Python Web Framework In the world of Python web development, two framew...", author: "Hitesh Khatwani", date: "May 28th, 2025", readTime: "6 min read", category: "Web Development", image: Blog5, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog/django-vs-flask-which-python-web-framework" },
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
                                <Box>
                                    <Chip label={post.category} size="small" className="blog-card-chip" />

                                    <Box className="blog-card-title-row">
                                        <Typography component={NextLink} href={post.url} variant="h6" className="blog-card-title">
                                            {post.title}
                                        </Typography>
                                        <Image src={BtnIcon} alt="btn-icon" />
                                    </Box>
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
                                    <Image src={Blog6} alt="top-career-skills-companies-will-value-in-2026" />
                                </CardMedia>

                                <CardContent className="blog-card-content">
                                    <Box>
                                        <Chip
                                            label="Business Strategy"
                                            size="small"
                                            className="blog-card-chip"
                                        />

                                        <Box className="blog-card-title-row">
                                            <Typography variant="h5" className="blog-card-title">
                                                Top Career Skills Companies Will Value in 2026
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="blog-card-meta" sx={{ mb: 3 }}>
                                        <Box className="avtar-box">
                                            <Avatar
                                                alt="Kinjal Vaghasiya"
                                                src="/images/blog-avtar-kinjal.webp"
                                                className="blog-card-avatar"
                                            />
                                            <Typography
                                                variant="caption"
                                                className="blog-card-author"
                                            >
                                                Kinjal Vaghasiya
                                            </Typography>
                                        </Box>

                                        <Box className="blog-card-date-item">
                                            <Image
                                                src={Calender}
                                                alt="Date"
                                                className="blog-meta-icon"
                                            />
                                            <Typography variant="caption" className="blog-card-date">
                                                2nd July, 2026
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
                                    The workplace is evolving faster than ever. Artificial intelligence, automation, hybrid work, digital transformation, and changing customer expectations are redefining what companies expect from employees. While technical expertise remains important, employers in 2026 are increasingly looking for professionals who combine digital knowledge with creativity, adaptability, and strong human skills.
                                    <br />
                                    <br />
                                    The reality is simple: <strong>degrees may help you get noticed, but skills will determine your long-term success.</strong>
                                    <br />
                                    <br />
                                    Whether you're a student, job seeker, working professional, freelancer, or business owner, understanding the <strong>top career skills companies will value in 2026</strong> can help you stay competitive in an AI-driven job market.
                                    <br />
                                    <br />
                                    In this guide, we'll explore the most in-demand workplace skills, why employers prioritize them, and practical ways to develop them.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Why Skills Matter More Than Ever in 2026
                                </Typography>
                                <Typography variant="body1">
                                    Over the last few years, businesses have rapidly adopted AI tools, cloud technologies, automation platforms, and data-driven decision-making. As routine tasks become automated, companies are shifting their hiring focus toward professionals who can solve complex problems, collaborate effectively, and work alongside AI instead of competing with it.
                                    <br />
                                    <br />
                                    Organizations no longer ask:
                                    <br />
                                    "Can this person perform repetitive tasks?"
                                    Instead, they ask:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Can they solve business problems?" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Can they adapt to new technology?" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Can they learn continuously?" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Can they communicate ideas clearly?" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Can they use AI responsibly?" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    The professionals who answer "yes" to these questions will become the most valuable employees in 2026.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    a. AI Literacy
                                </Typography>
                                <Typography variant="body1">
                                    Artificial Intelligence is no longer limited to developers or data scientists.
                                    <br />
                                    Marketing teams use AI for content creation.
                                    <br />
                                    HR teams use AI for recruitment.
                                    <br />
                                    Finance departments automate reporting.
                                    <br />
                                    Customer service teams rely on AI assistants.
                                    <br />
                                    Sales professionals use AI-powered CRMs.
                                    <br />
                                    In 2026, almost every industry will expect employees to understand the basics of AI.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    What AI Literacy Means
                                </Typography>
                                <Typography variant="body1">
                                    It doesn't mean building machine learning models.
                                    <br />
                                    <br />
                                    Instead, it means understanding:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="How AI works" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="When to use AI" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Prompt engineering basics" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI limitations" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Ethical AI practices" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI-assisted decision making" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Popular AI Tools
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="ChatGPT" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Microsoft Copilot" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Google Gemini" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Claude" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Perplexity AI" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Notion AI" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Grammarly AI" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Why Companies Value It
                                </Typography>
                                <Typography variant="body1">
                                    Employees who know how to leverage AI can:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Complete tasks faster" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improve productivity" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reduce manual work" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Generate ideas quickly" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Analyze information efficiently" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    b. Critical Thinking and Problem Solving
                                </Typography>
                                <Typography variant="body1">
                                    AI can provide information.
                                    <br />
                                    Humans provide judgment.
                                    <br />
                                    Companies increasingly need professionals who can evaluate situations, identify risks, and make informed decisions rather than simply following instructions.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Employers Look For
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Logical thinking" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Root cause analysis" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Data interpretation" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Decision making" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Strategic planning" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Example
                                </Typography>
                                <Typography variant="body1">
                                    Instead of asking:

                                    "Why did website traffic decrease?"

                                    A critical thinker investigates:
                                    <br />
                                    Humans provide judgment.
                                    <br />
                                    Companies increasingly need professionals who can evaluate situations, identify risks, and make informed decisions rather than simply following instructions.
                                    <br />
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Technical SEO issues" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Algorithm updates" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="User behavior" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Competitor changes" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Content quality" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Then develops a solution backed by evidence.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    c. Digital Communication
                                </Typography>
                                <Typography variant="body1">
                                    Hybrid work has made communication one of the most valuable professional skills.
                                    <br />
                                    <br />
                                    Employees now communicate through:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Video meetings" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Slack" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Microsoft Teams" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Emails" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="LinkedIn" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Project management tools" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Clear communication prevents misunderstandings, improves collaboration, and builds trust.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Communication Skills
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Business writing" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Presentation skills" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Active listening" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Virtual meeting etiquette" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Professional email writing" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cross-cultural communication" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    d. Adaptability and Continuous Learning
                                </Typography>
                                <Typography variant="body1">
                                    Technology changes every few months.
                                    <br />
                                    Job roles evolve constantly.
                                    <br />
                                    Companies prefer employees who enjoy learning rather than resisting change.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Examples
                                </Typography>
                                <Typography variant="body1">
                                    A digital marketer today should learn:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI SEO" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Generative Engine Optimization (GEO)" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Answer Engine Optimization (AEO)" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="GA4" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Automation tools" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    A software developer may need to learn:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI-assisted coding" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cloud technologies" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="DevOps" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cybersecurity basics" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Learning never stops in 2026.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    e. Data Literacy
                                </Typography>
                                <Typography variant="body1">
                                    Every business makes decisions using data.
                                    <br />
                                    You don't need to become a data scientist.
                                    <br />
                                    But you should know how to understand and interpret data.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Important Skills
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reading dashboards" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Understanding KPIs" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Google Analytics" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Excel" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Power BI" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="SQL basics" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Data visualization" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Benefits
                                </Typography>
                                <Typography variant="body1">
                                    Data-literate employees:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Make smarter decisions" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improve marketing campaigns" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Identify customer trends" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reduce business risks" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    f. Emotional Intelligence (EQ)
                                </Typography>
                                <Typography variant="body1">
                                    As AI handles technical tasks, emotional intelligence becomes even more valuable.
                                    <br />
                                    <br />
                                    People still prefer working with professionals who understand emotions, build relationships, and resolve conflicts effectively. If you're developing these essential workplace skills and are ready to apply them in a collaborative environment, <Link href="/career">join our development team to work</Link> on innovative projects, grow alongside experienced professionals, and build a future-ready career.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Emotional Intelligence Includes
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Empathy" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Self-awareness" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Relationship management" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Conflict resolution" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Leadership" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Collaboration" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    High EQ creates stronger teams and better workplace culture.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    g. Creativity
                                </Typography>
                                <Typography variant="body1">
                                    AI generates content.
                                    <br />
                                    Humans generate original ideas.
                                    <br />
                                    Creativity will remain one of the most valuable workplace skills because innovation drives business growth.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Creativity Includes
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Brainstorming" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Product innovation" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Marketing campaigns" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Storytelling" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Design thinking" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Business strategy" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Companies need employees who can imagine solutions beyond AI-generated suggestions.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    h. Cybersecurity Awareness
                                </Typography>
                                <Typography variant="body1">
                                    Cyber threats continue to grow every year.
                                    <br />
                                    Every employee—not just IT teams—plays a role in protecting company data.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Basic Cybersecurity Skills
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Strong passwords" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Multi-factor authentication" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Recognizing phishing emails" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Secure file sharing" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Privacy awareness" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Safe remote working" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    One careless click can cost a company millions.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    i. Project Management
                                </Typography>
                                <Typography variant="body1">
                                    Companies increasingly hire professionals who can organize work efficiently.
                                    <br />
                                    Project management isn't limited to managers anymore.
                                    <br />
                                    Even individual contributors benefit from planning, prioritization, and execution skills.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Popular Project Management Tools
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Trello" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Asana" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Jira" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="ClickUp" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Monday.com" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Notion" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Valuable Skills
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Time management" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Resource planning" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Goal setting" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Team coordination" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Risk management" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    j. AI + Human Collaboration
                                </Typography>
                                <Typography variant="body1">
                                    Rather than replacing employees, AI is becoming a workplace partner.
                                    <br />
                                    <br />
                                    Successful professionals know when to rely on AI—and when human judgment is essential.
                                    <br />
                                    <br />
                                    Examples include:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI drafts content; humans refine the message." />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI analyzes trends; humans make strategic decisions." />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI writes code; developers review and optimize it." />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI summarizes meetings; teams decide next steps." />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Companies value professionals who use AI responsibly while maintaining quality, ethics, and creativity.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    k. Leadership Without a Title
                                </Typography>
                                <Typography variant="body1">
                                    Leadership is no longer reserved for managers.
                                    <br />
                                    <br />
                                    Companies value employees who:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Take ownership" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Mentor teammates" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Solve problems proactively" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Support collaboration" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Communicate clearly" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    These qualities often lead to faster career growth.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    l. Customer-Centric Thinking
                                </Typography>
                                <Typography variant="body1">
                                    Regardless of your role, understanding customer needs is increasingly important.
                                    <br />
                                    <br />
                                    Whether you're in:
                                    Companies value employees who:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Marketing" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Sales" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Software development" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Customer support" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Product management" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="HR" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Thinking from the customer's perspective improves business outcomes.
                                    <br />
                                    <br />
                                    Ask yourself:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Does this solve a real problem?" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Is it easy to use?" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Does it create value?" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Customer-focused employees contribute directly to business success.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    m. Personal Branding
                                </Typography>
                                <Typography variant="body1">
                                    Recruiters increasingly search LinkedIn before scheduling interviews.
                                    <br />
                                    <br />
                                    A strong personal brand can significantly improve career opportunities.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Build Your Personal Brand By
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Sharing industry insights" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Publishing articles" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Networking consistently" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Showcasing achievements" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Building an online portfolio" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Engaging with professionals" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Your online presence often becomes your digital resume.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    n. Technical Skills That Complement Every Career
                                </Typography>
                                <Typography variant="body1">
                                    While soft skills are essential, employers also expect professionals to understand relevant technologies.
                                    <br />
                                    <br />
                                    Popular technical skills include:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cloud computing" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="SEO" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Digital marketing" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Automation" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="CRM platforms" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="No-code tools" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="API basics" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Prompt engineering" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Business intelligence" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Workflow automation" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Learning one new technical skill every year can significantly improve career prospects.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    o. Time Management and Productivity
                                </Typography>
                                <Typography variant="body1">
                                    Modern workplaces involve multiple projects, meetings, and deadlines.
                                    <br />
                                    <br />
                                    Professionals who manage their time effectively consistently outperform others.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Best Practices
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Prioritize high-impact work" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reduce unnecessary meetings" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Automate repetitive tasks" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Use productivity apps" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Plan daily goals" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Avoid multitasking" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Working smarter—not longer—is becoming the new productivity standard.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. How to Build These Skills Before 2026
                                </Typography>
                                <Typography variant="body1">
                                    Developing future-ready skills doesn't require returning to university. A structured learning plan and consistent practice can make a significant difference.
                                    <br />
                                    <br />
                                    Here are practical steps:
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Learn Online
                                </Typography>
                                <Typography variant="body1">
                                    Use trusted learning platforms to build technical and professional skills.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Learn Online
                                </Typography>
                                <Typography variant="body1">
                                    Use trusted learning platforms to build technical and professional skills.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Practice With Real Projects
                                </Typography>
                                <Typography variant="body1">
                                    Apply your knowledge by creating portfolios, contributing to open-source projects, writing blogs, or volunteering.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Use AI Daily
                                </Typography>
                                <Typography variant="body1">
                                    Experiment with AI tools to automate repetitive work, generate ideas, summarize documents, and improve workflows.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Read Industry News
                                </Typography>
                                <Typography variant="body1">
                                    Stay informed about trends in your field through blogs, newsletters, podcasts, and webinars.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Build Your Network
                                </Typography>
                                <Typography variant="body1">
                                    Connect with professionals, attend virtual events, and participate in online communities to exchange ideas and discover new opportunities.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Request Feedback
                                </Typography>
                                <Typography variant="body1">
                                    Regular feedback from managers, mentors, and peers helps identify strengths and areas for improvement.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Industries Hiring for These Skills
                                </Typography>
                                <Typography variant="body1">
                                    These future-focused skills are valuable across industries, including:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Information Technology" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Artificial Intelligence" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Software Development" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Healthcare" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="FinTech" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="E-commerce" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Manufacturing" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Education" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Digital Marketing" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="SaaS" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Consulting" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Logistics" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Human Resources" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Media and Entertainment" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    No matter your field, combining technical expertise with adaptability and strong interpersonal skills will help you develop <Link href="https://www.universalstreamsolution.com/blog/essential-skills-industry-experts-2026">industry expert skills</Link> that make you a more competitive candidate in today's evolving job market.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. The Technologies Driving the Digital Front Door
                                </Typography>
                                <Typography variant="body1">
                                    As workplaces evolve, avoid these career-limiting habits:
                                    <br />
                                </Typography>
                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Relying only on traditional degrees without updating your skills." />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Ignoring AI tools because they seem complex or unfamiliar." />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Focusing exclusively on technical skills while neglecting communication and collaboration." />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Resisting organizational or technological change." />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Waiting for employers to provide all learning opportunities." />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Overlooking the importance of networking and personal branding." />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Treating learning as a one-time event instead of an ongoing process." />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Professionals who embrace lifelong learning are more likely to thrive in a rapidly changing job market.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    The Future Belongs to Lifelong Learners
                                </Typography>
                                <Typography variant="body1">
                                    The workplace of 2026 will reward professionals who combine technology with human strengths. While AI and automation will continue to reshape industries, qualities like creativity, empathy, strategic thinking, and adaptability will remain uniquely valuable.
                                    <br />
                                    <br />
                                    Success is no longer about mastering a single skill and relying on it for decades. It's about continuously learning, embracing new technologies, and staying curious. Professionals who invest in AI literacy, data skills, communication, leadership, and continuous improvement will be well-positioned for long-term career growth.
                                    <br />
                                    <br />
                                    Instead of asking, <strong>"Will AI replace my job?"</strong>, the better question is, <strong>"How can I use AI and future-ready skills to become more valuable?"</strong> Those who answer that question with action will be the professionals companies are eager to hire in 2026 and beyond.
                                </Typography>

                            </Box>

                            <Box className="written-by-box">
                                <Box className="written-by-box-header">
                                    <Avatar
                                        src="/images/written-by-kinjal.webp" // Replace with actual image
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
                                                Kinjal Vaghasiya
                                            </Typography>
                                            <Link
                                                href="https://www.linkedin.com/in/kinjalvaghasiya/"
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
                                    Kinjal Vaghasiya is a healthcare industry expert and digital transformation strategist with over nine years of experience in driving innovation, app development, and AI-powered healthcare solutions. She is passionate about using technology to enhance patient care and operational efficiency.
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

export default CompCareerSkillCompanies;
