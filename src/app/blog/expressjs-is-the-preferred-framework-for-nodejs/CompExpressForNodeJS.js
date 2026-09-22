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
import Blog4 from "@/blog-expressjs-for-nodejs.webp";
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
    { id: "section2", label: "What Is Express.js and Why Is It Used With Node.js?" },
    { id: "section3", label: "Understanding Express.js Architecture" },
    { id: "section4", label: "Why Express.js Works Well for Web Application Development" },
    { id: "section5", label: "Is Express.js Good for Node.js Development?" },
    { id: "section6", label: "Express.js for Custom Healthcare Software" },
    { id: "section7", label: "When Should a Business Choose Express.js?" },
];

const CompExpressForNodeJS = () => {
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
                                    <Image src={Blog4} alt="why-expressjs-is-the-preferred-framework-for-nodejs-development" />
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
                                                Why Express.js Is the Preferred Framework for Node.js Development
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="blog-card-meta" sx={{ mb: 3 }}>
                                        <Box className="avtar-box">
                                            <Avatar
                                                alt="Arzeb Mansuri"
                                                src="/images/blog-avtar-arzeb.webp"
                                                className="blog-card-avatar"
                                            />
                                            <Typography
                                                variant="caption"
                                                className="blog-card-author"
                                            >
                                                Arzeb Mansuri
                                            </Typography>
                                        </Box>

                                        <Box className="blog-card-date-item">
                                            <Image
                                                src={Calender}
                                                alt="Date"
                                                className="blog-meta-icon"
                                            />
                                            <Typography variant="caption" className="blog-card-date">
                                                22nd September, 2026
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
                                    When an organisation plans a new web application, the backend framework can have a lasting impact on development, maintenance, integrations, and future growth. For organisations using Node.js, Express.js is one of the most widely considered options because it offers a simple foundation without placing unnecessary restrictions on how an application should be built.
                                    <br />
                                    <br />
                                    Express.js is a simple and scalable Node.js web app framework. It provides practical features for routing, middleware, HTTP requests, and API development while allowing developers to decide how the rest of the application should be organised. This balance is suitable for everything from small applications to big digital platforms.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. What Is Express.js and Why Is It Used With Node.js?
                                </Typography>
                                <Typography variant="body1">
                                    Express.js is a Node.js web framework that makes it easier to create and manage web servers and APIs. It helps handle requests and responses, manage routes, run server-side code, and add features such as authentication and security.
                                    <br />
                                    <br />
                                    In a Node.js provides the runtime environment for executing JavaScript on the server. Express.js works on top of Node.js and simplifies many of the tasks involved in creating a backend application.
                                    <br />
                                    <br />
                                    Developers can use Express.js to create routes, process incoming requests, return responses, build APIs, manage middleware, and connect different application services. Rather than creating these functions independently, teams can use Express as a starting point and customize the rest of the technology stack around the project's needs.
                                    <br />
                                    <br />
                                    This flexibility is particularly useful when a business expects its application to evolve over time.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Understanding Express.js Architecture
                                </Typography>
                                <Typography variant="body1">
                                    Architecture is most important aspects to understand when evaluating Express.js. Unlike some frameworks that provide a highly prescribed application structure, Express.js gives developers more freedom to organise code.
                                    <br />
                                    <br />
                                    A typical Express.js application can be divided into several layers:
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Routes
                                </Typography>
                                <Typography variant="body1">
                                    Routes explain how the application responds to requests to specific URLs and HTTP methods. For EX: separate routes can handle customers, products, payments, appointments, or user accounts.
                                    <br />
                                    <br />
                                    Keeping routes organized by business function makes a larger application easier to navigate.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Middleware
                                </Typography>
                                <Typography variant="body1">
                                    Middleware functions rest between a request and the final response. They can perform specific tasks before the request passes to the main application logic.
                                    <br />
                                    <br />
                                    Common examples include authentication, authorisation, request validation, logging, error handling, and data processing.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Controllers
                                </Typography>
                                <Typography variant="body1">
                                    Controllers handle the application's request-and-response logic. They receive information from routes, call the appropriate business services and determine what information should be returned to the client.
                                    <br />
                                    <br />
                                    Separating this responsibility from routing can make the application easier to maintain.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Services
                                </Typography>
                                <Typography variant="body1">
                                    The service layer generally contains business rules and application-specific operations.
                                    <br />
                                    <br />
                                    For EX: A <Link href="/how-we-help/mobile-application-devlopment">healthcare application</Link> might have services for patient records, appointments, Patient billing, or notifications.
                                    <br />
                                    <br />
                                    Keeping business logic separate from routes helps developers update individual functions without affecting unrelated parts of the system.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Data Access Layer
                                </Typography>
                                <Typography variant="body1">
                                    It handles communication with the database and other data sources. It takes care of common operations such as fetching, adding, updating, and deleting data.
                                    <br />
                                    <br />
                                    Separating data access from the main application logic makes the code easier to maintain and makes it simpler to switch or update the database in the future.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Database
                                </Typography>
                                <Typography variant="body1">
                                    Express.js developer doesn't need to use a particular database. A project can use a database technology that matches its data requirements, expected performance and existing infrastructure.
                                    <br />
                                    <br />
                                    One more example of the framework's flexible approach.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    API Response
                                </Typography>
                                <Typography variant="body1">
                                    After the request passes through the necessary layers, the application sends a response back to the client. This could be data for a web interface, information requested by a mobile application, or a response consumed by another service.
                                    <br />
                                    <br />
                                    Simple Express.js architecture flow:
                                    <br />
                                    <strong>“Add an image to this location, pasting its link into the "Blog Other Image" cell in the sheet.”</strong>
                                    <br />
                                    <br />
                                    <strong>Client → Routes → Middleware → Controllers → Services → Data Access → Database → Response</strong>
                                    <br />
                                    <br />
                                    This structure is not mandatory for every Express project. The exact architecture should be determined by application complexity and business requirements.
                                </Typography>

                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Why Express.js Works Well for Web Application Development
                                </Typography>
                                <Typography variant="body1">
                                    A major reason companies consider Express.js is that it provides the basic backend capabilities developers need without creating excessive complexity.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Lightweight and Flexible
                                </Typography>
                                <Typography variant="body1">
                                    Express.js follows a minimalist approach. Developers can add only the libraries and components required by the application instead of working with a large collection of built-in features.
                                    <br />
                                    <br />
                                    This gives development teams more control over technology choices and application structure.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Easy API Development
                                </Typography>
                                <Typography variant="body1">
                                    Modern applications regularly rely on APIs to connect websites, mobile app, payment platforms, CRM systems, databases, and third-party services.
                                    <br />
                                    <br />
                                    Express.js provides routing and HTTP capabilities that make it practical for developing these APIs. This can be especially useful for businesses planning products that need several connected systems.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Modular Development
                                </Typography>
                                <Typography variant="body1">
                                    Modular development through routing and middleware. Different parts of an app can be separated into manageable components instead of keeping everything in one large codebase.
                                    <br />
                                    <br />
                                    As new features are introduced, developers can expand the application without necessarily transforming the entire backend.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Large Node.js Ecosystem
                                </Typography>
                                <Typography variant="body1">
                                    Express.js benefits from the broader Node.js ecosystem. Developers have access to a wide range of packages and tools for authentication, validation, database connectivity, testing, security, logging, and other application requirements.
                                    <br />
                                    <br />
                                    This can help teams select established solutions instead of developing every supporting feature internally.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Is Express.js Good for Node.js Development?
                                </Typography>
                                <Typography variant="body1">
                                    Many projects, yes. Express.js is a practical <strong>Node.js backend framework</strong> when flexibility, API development, and a relatively lightweight architecture are important considerations.
                                    <br />
                                    <br />
                                    It can be suitable for SaaS platforms, e-commerce applications, customer portals, business applications, mobile backends and enterprise systems.
                                    <br />
                                    <br />
                                    Express.js should not be selected simply because it is popular. The right technology depends on the application's functionality, expected workload, security requirements, integrations, development team, and long-term maintenance plans.
                                    <br />
                                    CTA Button:  <Link href="https://calendly.com/jvaghasiya-universalstreamsolution/30min">Book a Free Consulting Call</Link>
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Express.js for Custom Healthcare Software
                                </Typography>
                                <Typography variant="body1">
                                    Healthcare applications often have more complex requirements than standard business software. They may involve multiple user roles, sensitive information, clinical workflows, external integrations, audit requirements, and strict access controls.
                                    <br />
                                    <br />
                                    For organisations developing <Link href="https://www.universalstreamsolution.com/healthcare">Custom Healthcare Software</Link>, Express.js can be used as part of a backend architecture when its capabilities align with the project's requirements.
                                    <br />
                                    <br />
                                    For EX: <strong>Custom EMR Solutions</strong> may need to connect patient information, healthcare professionals, administrative users, scheduling systems, billing functions, and external healthcare services.
                                    <br />
                                    <br />
                                    In these situations, the framework itself is only one component of the solution. Application architecture, security controls, data management, infrastructure, monitoring, and compliance considerations should be addressed from the beginning.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    When Should a Business Choose Express.js?
                                </Typography>
                                <Typography variant="body1">
                                    The right project structure depends on the type and requirements of the project. Express.js can be used to build a wide range of applications like E-Commerce APIs, Food Delivery APIs, Real-Time Chat applications and many other backend systems.
                                    <br />
                                    <br />
                                    Express.js is a strong choice when a project needs a flexible backend, API-driven functionality, modular development, and access to the Node.js ecosystem. It gives developers the freedom to organise the application based on their specific needs instead of forcing them to follow a fixed or rigid structure.
                                    <br />
                                    <br />
                                    For businesses that already have a Node.js development team, Express.js can also be a familiar and practical foundation for building, maintaining, and scaling server-side applications.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Ready to Discuss Your Project?
                                </Typography>
                                <Typography variant="body1">
                                    Whether you're planning a new web application, upgrading an existing backend, or exploring <Link href="https://www.universalstreamsolution.com/">Healthcare Technology</Link> solutions, an initial technical discussion can help you understand whether Express.js and Node.js are the right fit.
                                </Typography>
                            </Box>


                            <Box className="written-by-box">
                                <Box className="written-by-box-header">
                                    <Avatar
                                        src="/images/written-by-arzeb.webp" // Replace with actual image
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
                                                Arzeb Mansuri
                                            </Typography>
                                            <Link
                                                href="https://www.linkedin.com/in/arzeb-mansuri-168933134/"
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
                                    Arzeb Mansuri is a full-stack developer with expertise in Next.js, React.js, Node.js, TypeScript, JavaScript and PHP, delivering high-quality digital solutions in fast-moving environments. With a strong focus on building user-centric web applications, Arzeb helps organizations enhance their digital presence and operational performance.
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

export default CompExpressForNodeJS;
