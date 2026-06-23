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
import Blog4 from "@/blog-dot-net-game-changer.webp";
import Blog5 from "@/blog-backenddevelopment.webp";

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
    { id: "section2", label: "What Is .NET 8?" },
    { id: "section3", label: "Major Reasons Why .NET 8 Is a Game-Changer for Enterprise Applications" },
    { id: "section4", label: "Industries Benefiting from .NET 8 Enterprise Applications" },
    { id: "section5", label: "Why Businesses Should Upgrade to .NET 8" },
    { id: "section6", label: "Challenges Enterprises Should Consider" },
    { id: "section7", label: "Future of Enterprise Development with .NET 8" },
    { id: "section8", label: "Final Thoughts" },
];

const CompMauiEnterprise = () => {
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
        { id: "p6", title: "The Ultimate Frontend Face-Off: AngularJS vs ReactJS", excerpt: "In today’s fast-moving world of frontend web development, one debate keeps coming up among develop...", author: "Hitesh Khatwani", date: "May 5th, 2025", readTime: "6 min read", category: "Web Development", image: Blog2, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog/angularjs-vs-reactjs-frontend-faceoff" },
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
                                    <Image src={Blog4} alt="net-maui-enterprise-app-development" />
                                </CardMedia>

                                <CardContent className="blog-card-content">
                                    <Box>
                                        <Chip
                                            label="Web Development"
                                            size="small"
                                            className="blog-card-chip"
                                        />

                                        <Box className="blog-card-title-row">
                                            <Typography variant="h5" className="blog-card-title">
                                                Why .NET 8 Is a Game-Changer for Enterprise Applications
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="blog-card-meta" sx={{ mb: 3 }}>
                                        <Box className="avtar-box">
                                            <Avatar
                                                alt="Bharat Katariya"
                                                src="/images/blog-avtar-bharat.webp"
                                                className="blog-card-avatar"
                                            />
                                            <Typography
                                                variant="caption"
                                                className="blog-card-author"
                                            >
                                                Bharat Katariya
                                            </Typography>
                                        </Box>

                                        <Box className="blog-card-date-item">
                                            <Image
                                                src={Calender}
                                                alt="Date"
                                                className="blog-meta-icon"
                                            />
                                            <Typography variant="caption" className="blog-card-date">
                                                28th May, 2026
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
                                    Modern enterprises are under constant pressure to deliver scalable, secure, and high-performing digital solutions faster than ever before. Businesses today need software platforms that support cloud-native development, microservices architecture, AI integration, cross-platform compatibility, and enterprise-grade security — all while reducing operational costs and development complexity.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This is where NET 8 becomes a major breakthrough for enterprise software development.
                                    <br />
                                    <br />
                                    Released as a Long-Term Support (LTS) version by <Link href="https://dotnet.microsoft.com/en-us/download/dotnet/8.0?utm_source=chatgpt.com">Microsoft</Link>, .NET 8 introduces substantial improvements in performance, cloud optimization, developer productivity, native AI capabilities, and application modernization. It is not just another framework upgrade; it represents a significant shift in how enterprises can build future-ready digital ecosystems.
                                    <br />
                                    <br />
                                    In this article, we will explore why .NET 8 is becoming the preferred framework for modern enterprise applications and how organizations can leverage its capabilities to stay competitive in the rapidly evolving digital landscape.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. What Is .NET 8?
                                </Typography>
                                <Typography variant="body1">
                                    NET 8 is the latest version of Microsoft’s open-source development platform used for building web applications, APIs, cloud services, desktop applications, mobile apps, IoT systems, and enterprise software solutions.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    As an LTS release, .NET 8 receives long-term support, security updates, and stability improvements, making it ideal for enterprise-grade production environments.
                                    <br />
                                    <br />
                                    It supports:
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cloud-native application development" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cross-platform deployment" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Microservices architecture  " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI-powered enterprise solutions" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="High-performance APIs" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Containerized applications" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Scalable backend systems" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Real-time enterprise applications" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    For organizations planning digital transformation initiatives, .NET 8 offers a future-proof technology stack that aligns with modern business needs.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Major Reasons Why .NET 8 Is a Game-Changer for Enterprise Applications
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                    Exceptional Performance Improvements
                                </Typography>
                                <Typography variant="body1">
                                    Performance is one of the most important factors in enterprise application development. Large-scale business systems process millions of requests, transactions, and data operations every day.
                                    <br />
                                    <br />
                                    .NET 8 delivers significant runtime and memory optimizations compared to previous versions.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Performance Enhancements
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Faster API response times" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reduced memory consumption" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improved garbage collection" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Optimized Just-In-Time (JIT) compilation" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Better startup performance" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Enhanced container efficiency" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    These upgrades allow enterprises to build applications that can handle heavy workloads with improved reliability and lower infrastructure costs.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Why This Matters for Enterprises
                                </Typography>
                                <Typography variant="body1">
                                    Faster applications directly improve:
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="User experience" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="System scalability" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Operational efficiency" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Customer satisfaction" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cloud cost optimization" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    For industries like fintech, healthcare, logistics, SaaS, and eCommerce, these performance improvements can significantly impact business outcomes.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                    Cloud-Native Development Capabilities
                                </Typography>
                                <Typography variant="body1">
                                    Cloud computing is now the backbone of enterprise IT infrastructure. Organizations are increasingly migrating workloads to platforms like Microsoft Azure, Amazon Web Services, and Google Cloud to support scalable and secure <Link href="https://www.universalstreamsolution.com/blog/modern-backend-development-cloud-computing">cloud-based backend development</Link> for modern enterprise applications.
                                    <br />
                                    <br />
                                    .NET 8 is designed specifically for cloud-native application development.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Cloud Features in .NET 8
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Native container support" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Kubernetes optimization" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Microservices architecture support" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Simplified cloud deployment" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improved observability and monitoring" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Built-in resiliency tools" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Distributed application support" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    The introduction of .NET Aspire also simplifies the development of distributed enterprise applications by improving orchestration, service discovery, logging, and monitoring.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    WEnterprise Benefits
                                </Typography>
                                <Typography variant="body1">
                                    Businesses can:
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Scale applications faster" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improve deployment efficiency" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reduce infrastructure complexity" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Increase application reliability" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Accelerate DevOps workflows" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    This makes .NET 8 highly suitable for modern enterprise ecosystems that rely on cloud infrastructure and distributed systems.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                    Long-Term Support (LTS) Stability
                                </Typography>
                                <Typography variant="body1">
                                    Enterprises require stability and long-term maintainability for mission-critical systems.
                                    <br />
                                    <br />
                                    As an LTS release, NET 8 provides:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Long-term security updates" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Extended Microsoft support" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Stable enterprise deployment" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reduced migration frequency" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Better compliance management" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    This is especially important for industries with strict regulatory requirements such as:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Banking" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Insurance" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Healthcare" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Government" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Enterprise SaaS" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Manufacturing" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Organizations can confidently build large-scale applications without worrying about short-term framework deprecation.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                    Improved Developer Productivity
                                </Typography>
                                <Typography variant="body1">
                                    Development speed is crucial in today’s competitive market.
                                    <br />
                                    <br />
                                    .NET 8 introduces several features that improve developer experience and productivity.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Productivity Enhancements
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Simplified coding patterns" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Better diagnostics tools" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Faster build times" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improved debugging" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Advanced Hot Reload functionality" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Enhanced minimal APIs" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cleaner architecture support" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    These improvements help development teams:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reduce development time" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Minimize bugs" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Accelerate feature delivery" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improve collaboration" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Increase software quality" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    For enterprises managing multiple software projects simultaneously, these productivity gains can create substantial operational advantages while improving the efficiency and scalability of <Link href="https://www.universalstreamsolution.com/blog/custom-vs-off-the-shelf-software-for-growing-businesses">modern custom software systems</Link>.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                    Native AI Integration Support
                                </Typography>
                                <Typography variant="body1">
                                    Artificial Intelligence is becoming a major component of enterprise software solutions.
                                    <br />
                                    <br />
                                    .NET 8 provides better support for AI-powered applications through integrations with:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Machine learning frameworks" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI APIs" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Intelligent automation tools" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cloud AI services" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    This allows enterprises to build:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI chatbots" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Recommendation engines" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Predictive analytics systems" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Intelligent automation platforms" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Smart business applications" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    With AI rapidly transforming industries, .NET 8 positions enterprises for next-generation innovation.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                    Better Microservices Architecture Support
                                </Typography>
                                <Typography variant="body1">
                                    Modern enterprise systems increasingly use microservices architecture for scalability and flexibility.
                                    <br />
                                    <br />
                                    .NET 8 significantly improves microservices development with:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Lightweight APIs" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improved containerization" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Better orchestration support" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Distributed tracing" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Enhanced service communication" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cloud-native tooling" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Why Enterprises Prefer Microservices
                                </Typography>
                                <Typography variant="body1">
                                    Microservices enable businesses to:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Scale individual services independently" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improve deployment flexibility" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reduce downtime risks" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Accelerate development cycles" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improve fault isolation" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    .NET 8 makes building and managing microservices much easier compared to previous framework versions.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                    Enhanced Security Features
                                </Typography>
                                <Typography variant="body1">
                                    Cybersecurity remains one of the biggest concerns for enterprises.
                                    <br />
                                    <br />
                                    .NET 8 strengthens application security through:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improved authentication mechanisms" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Better authorization controls" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Enhanced encryption support" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Secure API development" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Identity management improvements" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Security patching via LTS support" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Enterprise Security Advantages
                                </Typography>
                                <Typography variant="body1">
                                    Organizations can better protect:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Customer data" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Financial transactions" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Enterprise systems" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Internal APIs" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cloud workloads" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    For regulated industries, these security enhancements help support compliance and risk management initiatives.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                    Cross-Platform Enterprise Development
                                </Typography>
                                <Typography variant="body1">
                                    Today’s enterprise applications often need to run across multiple operating systems and environments to support scalable and flexible <Link href="https://www.universalstreamsolution.com/solutions/custom-business-application">enterprise digital solutions</Link> for modern businesses.
                                    <br />
                                    <br />
                                    .NET 8 provides strong cross-platform compatibility for:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Windows" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Linux" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="macOS" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cloud environments" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Containers" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Mobile platforms" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    This allows enterprises to develop applications once and deploy them across diverse infrastructures.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Business Advantages
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reduced development costs" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Easier maintenance" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Greater deployment flexibility" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Faster scalability" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improved infrastructure compatibility" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Cross-platform capabilities are especially valuable for organizations operating hybrid IT environments.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                    Modern API Development
                                </Typography>
                                <Typography variant="body1">
                                    APIs are at the core of enterprise digital ecosystems.
                                    <br />
                                    <br />
                                    .NET 8 introduces major improvements in API development through:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Minimal APIs" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Faster request handling" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Better OpenAPI support" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improved serialization" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Native HTTP optimizations" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Enterprise Use Cases
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="SaaS platforms" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Mobile backends" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Third-party integrations" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="ERP systems" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="CRM platforms" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Payment gateways" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Modern API development in .NET 8 helps enterprises create highly scalable digital platforms.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                    Cost Optimization for Enterprises
                                </Typography>
                                <Typography variant="body1">
                                    Technology decisions are heavily influenced by operational costs.
                                    <br />
                                    <br />
                                    .NET 8 helps reduce costs through:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Lower cloud resource consumption" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improved application efficiency" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Faster development cycles" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reduced maintenance overhead" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Better scalability" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Open-source ecosystem advantages" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Financial Impact
                                </Typography>
                                <Typography variant="body1">
                                    Enterprises can achieve:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Lower hosting expenses" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reduced infrastructure requirements" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Faster time-to-market" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improved ROI on software investments" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    This makes .NET 8 attractive for both startups and large enterprises seeking sustainable digital growth.
                                    <br />
                                    <br />
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Industries Benefiting from .NET 8 Enterprise Applications
                                </Typography>
                                <Typography variant="body1">
                                    Several industries are rapidly adopting NET 8 for digital transformation initiatives.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Healthcare
                                </Typography>
                                <Typography variant="body1">
                                    Healthcare organizations use .NET 8 for:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Patient management systems" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Telemedicine platforms" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Healthcare analytics" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Secure medical applications" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Fintech
                                </Typography>
                                <Typography variant="body1">
                                    Financial companies leverage .NET 8 for:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Banking platforms" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Payment systems" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Fraud detection" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Trading applications" />
                                    </ListItem>
                                </List>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    eCommerce
                                </Typography>
                                <Typography variant="body1">
                                    Retail businesses build:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="High-performance online stores" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Inventory systems" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Recommendation engines" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Omnichannel commerce platforms" />
                                    </ListItem>
                                </List>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Logistics & Supply Chain
                                </Typography>
                                <Typography variant="body1">
                                    Logistics enterprises use .NET 8 for:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Fleet management" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Real-time tracking" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Warehouse automation" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="ERP integration" />
                                    </ListItem>
                                </List>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Enterprise SaaS
                                </Typography>
                                <Typography variant="body1">
                                    SaaS providers benefit from:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Multi-tenant architecture" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Scalable APIs" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cloud-native infrastructure" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Subscription management systems" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Why Businesses Should Upgrade to .NET 8
                                </Typography>
                                <Typography variant="body1">
                                    Organizations still using older frameworks may face:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Performance limitations" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Security vulnerabilities" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Higher infrastructure costs" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Compatibility issues" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Maintenance challenges" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Migrating to .NET 8 offers:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Future-ready architecture" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Better scalability" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Enhanced cloud compatibility" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Modern security standards" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improved developer efficiency" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Businesses planning long-term digital strategies should strongly consider adopting .NET 8 as part of their modernization roadmap.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Challenges Enterprises Should Consider
                                </Typography>
                                <Typography variant="body1">
                                    Although .NET 8 offers substantial advantages, enterprises should still plan migrations carefully.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Common Migration Considerations
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Legacy application compatibility" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Third-party library updates" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Infrastructure modernization" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Staff training" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="DevOps adjustments" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Working with experienced enterprise software development teams can help ensure smoother transitions and optimized implementation strategies.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Future of Enterprise Development with .NET 8
                                </Typography>
                                <Typography variant="body1">
                                    The future of enterprise software development is centered around:
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Common Migration Considerations
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cloud-native architecture" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI-powered systems" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Microservices" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Scalable APIs" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Intelligent automation" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cross-platform ecosystems" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    NET 8 aligns perfectly with these evolving technology trends.
                                    <br />
                                    <br />
                                    As organizations continue investing in digital transformation, .NET 8 provides the flexibility, scalability, and performance required to support next-generation enterprise applications.
                                </Typography>
                            </Box>


                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Final Thoughts
                                </Typography>
                                <Typography variant="body1">
                                    .NET 8 is more than just a framework upgrade — it is a strategic technology platform for modern enterprise software development.
                                    <br />
                                    <br />
                                    Its combination of:
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Common Migration Considerations
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="High performance" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cloud-native capabilities" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI readiness" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Enterprise security" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cross-platform support" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Long-term stability" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cost efficiency" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    makes it one of the most powerful enterprise development frameworks available today.
                                    <br />
                                    <br />
                                    Businesses looking to modernize legacy systems, improve scalability, accelerate digital transformation, and future-proof their technology infrastructure should seriously evaluate .NET 8 for their upcoming enterprise application initiatives.
                                    <br />
                                    <br />
                                    As enterprise technology continues evolving rapidly, adopting modern frameworks like .NET 8 can provide organizations with a strong competitive advantage in the digital economy.
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
                                                Bharat Katariya
                                            </Typography>
                                            <Link
                                                href="https://www.linkedin.com/in/bharat-katariya-3827251a3/"
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
                                    Bharat Katariya is a seasoned executive at Universal Stream Solution LLC, bringing a strong track record of leadership and commercial strategy. With robust experience in driving business growth and operational transformation, he empowers organizations to build scalable, efficient solutions. Bharat is committed to delivering strategic value through innovation, collaboration, and integrity.
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

export default CompMauiEnterprise;
