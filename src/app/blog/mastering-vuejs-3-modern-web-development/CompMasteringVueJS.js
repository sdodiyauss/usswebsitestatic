"use client";
import React from "react";
import {
    Box,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
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
import Blog6 from "@/blog-web-dev.webp";
import Blog7 from "@/blog-mastering-vue-js.webp";

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
    { id: "section2", label: "What Is Vue.js 3?" },
    { id: "section3", label: "Why Choose Vue.js 3 for Modern Web Development?" },
    { id: "section4", label: "Setting Up a Vue.js 3 Project" },
    { id: "section5", label: "Understanding Vue.js 3 Core Concepts" },
    { id: "section6", label: "Composition API vs Options API" },
    { id: "section7", label: "Reactivity System in Vue.js 3" },
    { id: "section8", label: "Vue.js 3 Templates and Directives" },
    { id: "section9", label: "State Management with Pinia" },
    { id: "section10", label: "Routing with Vue Router" },
    { id: "section11", label: "Handling Forms and Validation" },
    { id: "section12", label: "API Integration and Data Fetching" },
    { id: "section13", label: "Performance Optimization in Vue.js 3" },
    { id: "section14", label: "Testing Vue.js 3 Applications" },
    { id: "section15", label: "Deploying Vue.js 3 Applications" },
    { id: "section16", label: "SEO Best Practices with Vue.js 3" },
    { id: "section17", label: "Real-World Use Cases of Vue.js 3" },
    { id: "section18", label: "Future of Vue.js 3 " },
    { id: "section19", label: "Conclusion" },
];

const CompMasteringVueJS = () => {
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
                                    <Image src={Blog7} alt="mastering-vuejs-3-modern-web-development" />
                                </CardMedia>

                                <CardContent className="blog-card-content">
                                    <Box>
                                        <Chip
                                            label="web development"
                                            size="small"
                                            className="blog-card-chip"
                                        />

                                        <Box className="blog-card-title-row">
                                            <Typography variant="h5" className="blog-card-title">
                                                Mastering Vue.js 3: A Complete Guide to Building Modern Web Applications
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="blog-card-meta" sx={{ mb: 3 }}>
                                        <Box className="avtar-box">
                                            <Avatar
                                                alt="Hitesh Khatwani"
                                                src="/images/blog-avtar-hitesh.webp"
                                                className="blog-card-avatar"
                                            />
                                            <Typography
                                                variant="caption"
                                                className="blog-card-author"
                                            >
                                                Hitesh Khatwani
                                            </Typography>
                                        </Box>

                                        <Box className="blog-card-date-item">
                                            <Image
                                                src={Calender}
                                                alt="Date"
                                                className="blog-meta-icon"
                                            />
                                            <Typography variant="caption" className="blog-card-date">
                                                9th February, 2026
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
                                    Modern web applications demand speed, scalability, maintainability, and an excellent user experience. JavaScript frameworks play a crucial role in meeting these expectations, and <strong>Vue.js 3</strong> has emerged as one of the most powerful and developer-friendly options available today.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Vue.js 3 is not just an upgrade from Vue 2—it is a complete re-engineering of the framework with improved performance, better TypeScript support, and a more flexible architecture. Whether you’re a beginner stepping into frontend development or an experienced developer looking to build scalable web applications, mastering Vue.js 3 can significantly elevate your development workflow.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This guide will walk you through everything you need to know about Vue.js 3, from core concepts to advanced features, helping you build modern, high-performance web applications with confidence.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. What Is Vue.js 3?
                                </Typography>
                                <Typography variant="body1">
                                    Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications (SPAs), making it a popular choice for delivering <Link href="/how-we-help/web-design-and-development">custom web design services</Link> with dynamic and interactive experiences. Vue.js 3 is the latest major release, designed to be faster, more modular, and easier to maintain for modern web development needs.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Highlights of Vue.js 3
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improved performance with a rewritten virtual DOM" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Composition API for better code organization " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Enhanced TypeScript integration" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Smaller bundle size " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Better scalability for large applications " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Vue.js 3 focuses on developer productivity while ensuring applications remain lightweight and performant.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Why Choose Vue.js 3 for Modern Web Development?
                                </Typography>

                                <Typography variant="body1">
                                    Choosing the right framework is critical for long-term project success. Vue.js 3 offers a perfect balance between simplicity and power.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    High Performance
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Vue.js 3 introduces a new rendering engine that is significantly faster than Vue 2. Applications load quicker and respond more smoothly, even with complex UI logic.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Easy Learning Curve
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Vue’s syntax is intuitive and beginner friendly. Developers with basic knowledge of HTML, CSS, and JavaScript can quickly start building applications.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Flexible Architecture
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Vue.js 3 supports both small widgets and large-scale enterprise applications. You can adopt it incrementally or use it as a full SPA framework.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Strong Ecosystem
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    With tools like Vue Router, Pinia, Vite, and Vue DevTools, Vue.js 3 offers a complete ecosystem for modern frontend development.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Setting Up a Vue.js 3 Project
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Using Vite (Recommended)
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Vite is the official build tool for Vue.js 3 and provides lightning-fast development experience.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Steps to create a Vue.js 3 project:</strong>
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Install Node.js (LTS version recommended) " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Run the command:npm create vue@latest" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Configure project options (TypeScript, Router, State Management) " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Install dependencies and start the dev server " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Vite ensures faster hot module replacement and optimized builds for production.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Understanding Vue.js 3 Core Concepts
                                </Typography>

                                <Typography variant="body1">
                                    To master Vue.js 3, it’s essential to understand its fundamental building blocks.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Components in Vue.js 3
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Components are reusable, self-contained UI elements. Vue applications are built by combining multiple components.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    <strong>enefits of Components </strong>
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reusability" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Better code organization " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Easier maintenance " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improved scalability " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    <strong>Each component consists of: </strong>
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Template – HTML structure " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Script – Logic and data " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Style – CSS styling " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Vue.js 3 supports <strong>Single File Components (SFCs)</strong>, which bundle all three into one .vue file.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Composition API vs Options API
                                </Typography>
                                <Typography variant="body1">
                                    Vue.js 3 introduces the <strong>Composition API</strong>, which works alongside the traditional Options API.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Options API
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Data, methods, computed, lifecycle hooks are separated " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Easy for beginners " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Can become complex in large components " />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Composition API
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Groups logic by feature " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improves reusability " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Better for large and complex applications " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Enhanced TypeScript support " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    The Composition API is one of the biggest reasons developers are switching to Vue.js 3.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Reactivity System in Vue.js 3
                                </Typography>
                                <Typography variant="body1">
                                    Vue.js 3 uses a Proxy-based reactivity system that is faster and more reliable.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Reactive APIs
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="ref() – For primitive values " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="reactive() – For objects " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="computed() – Derived reactive values " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="watch() – Observing state changes " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    This reactivity system ensures automatic UI updates whenever the underlying data changes.
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Vue.js 3 Templates and Directives
                                </Typography>
                                <Typography variant="body1">
                                    Vue templates extend HTML with powerful features.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Common Directives
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="v-bind – Bind attributes dynamically " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="v-model – Two-way data binding " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="v-if / v-else – Conditional rendering " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="v-for – List rendering " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="v-on – Event handling " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    These directives make it easy to create dynamic and interactive user interfaces.
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. State Management with Pinia
                                </Typography>
                                <Typography variant="body1">
                                    State management is crucial for large applications. Vue.js 3 officially recommends <strong>Pinia</strong> as the state management library.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Why Pinia?
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Lightweight and simple " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Built for Vue.js 3 " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Excellent TypeScript support " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Easy to scale " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Pinia replaces Vuex with a more intuitive and modular approach to managing application state.
                                </Typography>
                            </Box>

                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    9. Routing with Vue Router
                                </Typography>
                                <Typography variant="body1">
                                    Vue Router enables navigation between different views in a single-page application.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Features
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Dynamic routing " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Nested routes " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Route guards for authentication " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Lazy loading for better performance " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Vue Router integrates seamlessly with Vue.js 3, making it easy to build multi-page experiences within SPAs.
                                </Typography>
                            </Box>
                            {/* Section 11 */}
                            <Box id="section11" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    10. Handling Forms and Validation
                                </Typography>
                                <Typography variant="body1">
                                    Forms are a core part of web applications.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Vue.js 3 Form Handling
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Use v-model for form inputs " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reactive form state " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Custom validation logic " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Popular libraries like <strong>VeeValidate</strong> and <strong>Yup</strong> can be integrated for advanced form validation and error handling.
                                </Typography>
                            </Box>
                            {/* Section 12 */}
                            <Box id="section12" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    11. API Integration and Data Fetching
                                </Typography>
                                <Typography variant="body1">
                                    Modern applications rely heavily on APIs.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Best Practices
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Use Axios or Fetch API " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Handle loading and error states " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Use composables for reusable API logic" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Vue.js 3’s Composition API makes API integration cleaner and more maintainable.
                                </Typography>
                            </Box>
                            {/* Section 13 */}
                            <Box id="section13" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    12. Performance Optimization in Vue.js 3
                                </Typography>
                                <Typography variant="body1">
                                    Vue.js 3 is designed with performance in mind, but optimization is still important, especially for developers who want to learn <Link href="https://www.universalstreamsolution.com/blog/angularjs-vs-reactjs-frontend-faceoff">how Vue.js 3 compares with AngularJS and ReactJS</Link> in real-world applications.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Optimization Techniques
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Lazy loading components " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Code splitting " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Using v-memo for static sections " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Avoiding unnecessary reactivity " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    These practices ensure smooth performance even in large-scale applications.
                                </Typography>
                            </Box>

                            {/* Section 14 */}
                            <Box id="section14" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    13. Testing Vue.js 3 Applications
                                </Typography>
                                <Typography variant="body1">
                                    Testing improves reliability and reduces bugs.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Common Testing Tools
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Vitest " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Jest " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cypress for end-to-end testing " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Vue.js 3 provides excellent support for unit and component testing.
                                </Typography>
                            </Box>

                            {/* Section 15 */}
                            <Box id="section15" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    14. Deploying Vue.js 3 Applications
                                </Typography>
                                <Typography variant="body1">
                                    Once development is complete, deployment is the final step.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Popular Deployment Platforms
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Vercel " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Netlify " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AWS " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Firebase Hosting " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Vite generates optimized production builds that are fast and SEO-friendly.
                                </Typography>
                            </Box>

                            {/* Section 16 */}
                            <Box id="section16" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    15. SEO Best Practices with Vue.js 3
                                </Typography>
                                <Typography variant="body1">
                                    Search engine optimization is essential for web visibility.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Vue.js 3 SEO Tips
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Use server-side rendering (SSR) with Nuxt 3 " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Optimize meta tags " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improve page load speed " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Use semantic HTML " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Vue.js 3 combined with Nuxt 3 is an excellent choice for SEO-focused applications.
                                </Typography>
                            </Box>

                            {/* Section 17 */}
                            <Box id="section17" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    16. Real-World Use Cases of Vue.js 3 
                                </Typography>
                                <Typography variant="body1">
                                    Vue.js 3 is widely adopted across industries. 
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Common Applications 
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="SaaS platforms " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="E-commerce websites " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Dashboards and admin panels " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Progressive Web Apps (PWAs) " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Companies prefer Vue.js 3 for its flexibility and performance. 
                                </Typography>
                            </Box>

                            {/* Section 18 */}
                            <Box id="section18" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    17. Future of Vue.js 3 
                                </Typography>
                                <Typography variant="body1">
                                    Vue.js continues to evolve with strong community support and regular updates. With its modern architecture, Vue.js 3 is future-ready and well-positioned for long-term projects. 
                                </Typography>
                            </Box>

                             {/* Section 19 */}
                            <Box id="section19" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Conclusion  
                                </Typography>
                                <Typography variant="body1">
                                    Mastering Vue.js 3 opens the door to building fast, scalable, and modern web applications. With its improved performance, Composition API, strong ecosystem, and developer-friendly design, Vue.js 3 stands out as a top choice for frontend development and is often discussed during a <strong>web development consultation booking</strong> for businesses planning modern digital solutions. 
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Whether you’re creating a simple website or a complex enterprise application, Vue.js 3 provides the tools and flexibility needed to deliver exceptional user experiences, making it an ideal focus point during a web development consultation booking to define the right frontend strategy. 
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Vue.js 3 is not just a framework upgrade—it’s a modern foundation for building the future of web applications and a strong recommendation highlighted in every strategic <Link href="https://calendly.com/jvaghasiya-universalstreamsolution/30min?month=2026-02">web development consultation booking</Link>. 
                                </Typography>
                            </Box>

                            <Box className="written-by-box">
                                <Box className="written-by-box-header">
                                    <Avatar
                                        src="/images/written-by-hitesh.webp" // Replace with actual image
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
                                                Hitesh Khatwani
                                            </Typography>
                                            <Link
                                                href="https://www.linkedin.com/in/hitesh-khatwani-399b62a9/"
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
                                    Hitesh Khatwani is a passionate Web Developer with expertise in building scalable, high-performance websites and applications. With hands-on experience in PHP, JavaScript, and modern frameworks like React and Node.js, he combines creativity and functionality to craft seamless digital experiences.
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

export default CompMasteringVueJS;
