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
// import Blog1 from "@/blog-healthcare.webp";
// import Blog2 from "@/blog2.webp";
// import Blog3 from "@/blog3.webp";

import Blog1 from "@/blog-healthcare.webp";
import Blog2 from "@/blog-webdevelopment.webp";
import Blog3 from "@/blog-appdevelopment.webp";
import Blog4 from "@/blog-ai.webp";
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
    { id: "section2", label: "Understanding the Contenders" },
    { id: "section3", label: "Head-to-Head Comparison" },
    { id: "section4", label: "When to Choose Each Framework" },
    { id: "section5", label: "USSLLC’s Expert Recommendations" },
    { id: "section6", label: "Conclusion: Making Your Decision" },
];

const CompDjangoFlask = () => {
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
        { id: "p6", title: "The Ultimate Frontend Face-Off: AngularJS vs ReactJS", excerpt: "In today’s fast-moving world of frontend web development, one debate keeps coming up among develop...", author: "Hitesh Khatwani", date: "May 5th, 2025", readTime: "6 min read", category: "Web Development", image: Blog2, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog-web-development" },
        { id: "p7", title: "Why Flutter Remains the MVP King in 2025", excerpt: "In today’s fast-paced digital landscape, launching a Minimum Viable Product (MVP) swiftly and effi...", author: "Bharat Katariya", date: "May 28th, 2025", readTime: "6 min read", category: "Mobile App Development", image: Blog3, avatarImage: "/images/blog-avtar-bharat.webp", featured: false, url: "/blog-mobile-app-development" },
        // { id: "p8", title: "DeepSeek vs ChatGPT: A Comprehensive Comparison of AI-Powered Chatbots", excerpt: "Artificial Intelligence (AI) has transformed the way we engage with technology, and AI-driven cha...", author: "Dilip Tiwari", date: "March 10th, 2025", readTime: "6 min read", category: "AI", image: Blog4, featured: false, url: "/blog-details8" },
       { id: "p9", title: "Django vs. Flask: Which Web Framework Should You Choose?", excerpt: "Introduction: Choosing Your Python Web Framework In the world of Python web development, two framew...", author: "Hitesh Khatwani", date: "April 14th, 2025", readTime: "6 min read", category: "Web Development", image: Blog5, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog-django-vs-flask" },
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
                                    <Image src={Blog5} alt="DeepSeek vs ChatGPT" />
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
                                                Django vs. Flask: Which Web Framework Should You Choose?
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
                                                28th April, 2025
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
                                    In the world of Python web development, two frameworks stand tall: Django and Flask. These powerful tools have revolutionized how developers build web applications, but they take fundamentally different approaches. At USSLLC, we’ve helped countless clients navigate this critical decision – and today, we’re sharing our expert insights to help you choose the right framework for your project.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Understanding the Contenders
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Flask: The Minimalist Powerhouse
                                </Typography>
                                <Typography variant="body1">
                                    Flask is a microframework that includes only the bare essentials for web development. Its “less is more” philosophy gives developers maximum flexibility to build exactly what they need.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Advantages:
                                </Typography>
                                <Typography variant="body1">
                                    Feather-light with minimal overhead
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Unopinionated structure for complete control
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Easy to learn with a gentle learning curve
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Perfect for APIs and microservices
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Extensive ecosystem of extensions
                                    <br />
                                    <br />
                                </Typography>


                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Who Uses Flask?
                                </Typography>
                                <Typography variant="body1">
                                    Netflix (backend services)
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Uber (internal tools)
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Airbnb (select microservices)
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Django: The Full-Featured Framework
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Django follows a “batteries-included” approach, offering everything you need to build Complex web applications right out of the box.
                                    <br />
                                    <br />
                                </Typography>


                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Advantages:
                                </Typography>
                                <Typography variant="body1">
                                    Built-in admin interface
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Powerful ORM for database management
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Robust security features
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Automatic admin UI generation
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Excellent for rapid development
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Who Uses Django?
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Instagram (handling 500M+ users)
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Spotify (data management)
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Pinterest (content infrastructure)
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Head-to-Head Comparison
                                </Typography>


                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Architecture & Flexibility
                                </Typography>
                                <Typography variant="body1">
                                    Flask: Unopinionated structure lets you choose your own architecture
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Django: Follows strict MVT (Model-View-Template) pattern
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    USSLLC Insight: Flask wins for custom projects, Django for standardized applications
                                    <br />
                                    <br />
                                </Typography>


                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Database Handling
                                </Typography>
                                <Typography variant="body1">
                                    Flask: No built-in ORM (use SQLAlchemy, Peewee, etc.)
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Django: Powerful ORM with migration support
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    USSLLC Case Study: We reduced development time by 40% using Django’s ORM for a client’s e-commerce platform
                                    <br />
                                </Typography>


                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Performance Considerations
                                </Typography>
                                <Typography variant="body1">
                                    Flask: Faster for simple applications (less overhead)
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Django: Optimized for complex applications at scale
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Performance Tip: For high-traffic APIs, we often recommend Flask with async extensions
                                    <br />
                                    <br />
                                </Typography>


                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Security Features
                                </Typography>
                                <Typography variant="body1">
                                    Django: Built-in protections (CSRF, XSS, SQL injection)
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Flask: Requires security extensions
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Security Note: Both can be secure, but Django provides more out-of-the-box
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. When to Choose Each Framework
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Choose Flask When:
                                </Typography>
                                <Typography variant="body1">
                                    ✅ Building microservices or APIs
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    ✅ Need maximum flexibility
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    ✅ Creating a prototype or MVP
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    ✅ Have specific performance requirements
                                    <br />
                                    <br />
                                </Typography>


                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Choose Django When:
                                </Typography>
                                <Typography variant="body1">
                                    ✅ Developing complex web applications
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    ✅ Need rapid development
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    ✅ Require built-in admin interfaces
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    ✅ Security is a top priority
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. USSLLC’s Expert Recommendations
                                </Typography>

                                <Typography variant="body1">
                                    Through our experience with hundreds of projects, we’ve developed these guidelines:
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For startups: Flask often works better for MVPs that need to pivot quickly
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For enterprise: Django’s structure helps maintain large codebases
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For APIs: Flask with Flask-RESTful provides excellent flexibility
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For content sites: Django’s admin panel is unbeatable
                                    <br />
                                    <br />
                                </Typography>


                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Migration Considerations
                                </Typography>
                                <Typography variant="body1">
                                    Many clients ask about switching between frameworks. Here’s what we’ve learned:
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Flask to Django: Worthwhile when projects outgrow microframework capabilities
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Django to Flask: Rare, but done when extreme customization is needed
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Pro Tip: We’ve developed proven migration strategies at USSLLC to make these transitions smooth
                                    <br />
                                    <br />
                                </Typography>


                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    The Future of Both Framework
                                </Typography>
                                <Typography variant="body1">
                                    Django: Improving async support and frontend integration
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Flask: Growing in serverless and microservices spaces
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Conclusion: Making Your Decision
                                </Typography>
                                <Typography variant="body1">
                                    There’s no one-size-fits-all answer, but here’s our framework (pun intended) for deciding:
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Assess your project size and complexity
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Evaluate your team’s expertise
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Consider long-term maintenance needs
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Determine your performance requirements
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    At USSLLC, we’ve helped businesses of all sizes make this critical decision. Whether you need:
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    A scalable web application (Django)
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    A high-performance API (Flask)
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Expert guidance on your specific needs
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    📞 Contact USSLLC today for a free consultation with our Python framework experts!
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

export default CompDjangoFlask;
