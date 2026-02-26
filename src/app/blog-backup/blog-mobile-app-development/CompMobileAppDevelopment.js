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
    { id: "section2", label: "Accelerated MVP Development with Flutter" },
    { id: "section3", label: "Exceptional UI/UX Design Capabilities" },
    { id: "section4", label: "High-Performance Cross-Platform Applications" },
    { id: "section5", label: "Versatility Across Multiple Platforms" },
    { id: "section6", label: "Real-Time Updates with Hot Reload" },
    { id: "section7", label: "Cost-Effective Development Solutions" },
    { id: "section8", label: "Integration with Advanced Technologies" },
    { id: "section9", label: "Who Should Choose Flutter in 2025?" },
];

const CompMobileAppDevelopment = () => {
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
                                    <Image src={Blog3} alt="DeepSeek vs ChatGPT" />
                                </CardMedia>

                                <CardContent className="blog-card-content">
                                    <Box>
                                        <Chip
                                            label="Mobile App Development"
                                            size="small"
                                            className="blog-card-chip"
                                        />

                                        <Box className="blog-card-title-row">
                                            <Typography variant="h5" className="blog-card-title">
                                                Why Flutter Remains the MVP King in 2025
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
                                    In today’s fast-paced digital landscape, launching a Minimum Viable Product (MVP) swiftly and efficiently is crucial for startups and businesses aiming to validate their ideas and capture market share. Flutter, Google’s open-source UI toolkit, continues to dominate as the preferred framework for MVP development in 2025.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    The combination of performance, flexibility, cost-effectiveness, and development speed makes Flutter a top choice, especially for companies delivering modern mobile app development services.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Accelerated MVP Development with Flutter
                                </Typography>
                                <Typography variant="body1">
                                    Imagine being a startup founder with a limited budget and a tight deadline. You want to launch your idea quickly to validate it before investing more. Flutter’s efficiency makes this entirely possible.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Thanks to Flutter’s single codebase, developers can write once and deploy across Android and iOS, reducing both time and cost significantly. No need to manage separate teams or codebases. This has made Flutter a darling for every Flutter app development company that works with time-sensitive MVPs.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    You can roll out your MVP and start getting user feedback faster than ever. For a business, that means faster go-to-market and quicker pivots based on real-time feedback.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Exceptional UI/UX Design Capabilities
                                </Typography>
                                <Typography variant="body1">
                                    When you’re presenting an MVP, first impressions matter. Your users might forgive limited features but not a clunky experience. That’s where Flutter really shines.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Its widget-based architecture gives developers access to beautiful, highly customizable design components. Whether you’re building a fintech app, a health tracker, or a ride-hailing solution, Flutter UI/UX design tools let you create elegant interfaces that look and feel native.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Companies offering UI/UX development services swear by Flutter for its pixel-perfect rendering. It lets you provide a polished, professional app that doesn’t feel like a ‘first version’ at all.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. High-Performance Cross-Platform Applications
                                </Typography>
                                <Typography variant="body1">
                                    MVPs shouldn’t mean sacrificing performance. Slow, buggy apps can ruin your first impression. Flutter, compiled to native ARM code, ensures smooth animations and fast load times, delivering near-native app performance.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This makes Flutter a natural fit for businesses focused on cross-platform app development, where performance parity across devices is key. The days of sacrificing speed for portability are long gone.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Many mobile application development services now recommend Flutter as the default for clients needing reliable, high-performance apps.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Versatility Across Multiple Platforms
                                </Typography>
                                <Typography variant="body1">
                                    Think beyond just mobile. Flutter has matured to support multi-platform app development, including web, desktop, and even embedded devices.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Let’s say you’re building a productivity tool. You can create a mobile version for on-the-go use, a desktop app for workstations, and even a web portal—all using the same codebase. For startups, this is a cost and resource game-changer.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    If your business also provides web development services, integrating Flutter into your stack helps deliver consistency and reduce project overhead.
                                </Typography>
                            </Box>


                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Real-Time Updates with Hot Reload
                                </Typography>
                                <Typography variant="body1">
                                    Developers know that testing can often become the bottleneck in app development. Flutter’s Hot Reload allows for instant previews of code changes. This feature alone makes development dramatically faster and more interactive.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    If you’re practicing agile mobile app development, where iterations are frequent and client feedback is ongoing, Hot Reload is a dream. Teams can tweak UI elements, fix bugs, and push changes without wasting time on restarts.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For MVPs, this rapid iteration helps get to a functional and tested version quickly—making MVP app development with Flutter more efficient and enjoyable.
                                </Typography>
                            </Box>


                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Cost-Effective Development Solutions
                                </Typography>
                                <Typography variant="body1">
                                    Flutter is a gift to startups and entrepreneurs trying to build more with less. You don’t need to hire separate iOS and Android developers. You don’t need to double your QA efforts. You don’t need multiple backend integrations.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Cost-effective app development is possible because of code reusability, quick debugging, and lower testing overhead. Companies that provide affordable Flutter development can pass those savings on to their clients.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For founders bootstrapping their MVP or working on a lean budget, this can mean the difference between launching and stalling.
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Integration with Advanced Technologies
                                </Typography>
                                <Typography variant="body1">
                                    Today’s MVPs aren’t just simple forms and login screens. Startups want chatbots, real-time tracking, machine learning recommendations, push notifications, and more.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Flutter supports seamless integration with advanced tools like Firebase, third-party SDKs, and AI/ML libraries. Whether you’re working on Flutter healthcare app development, e-commerce solutions, or on-demand app development services, the ecosystem is rich and robust.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    You can build smarter apps, not just faster ones.
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. Who Should Choose Flutter in 2025?
                                </Typography>
                                <Typography variant="body1" style={{ fontWeight: 700 }}>
                                    Let’s say you’re a:
                                    <br />
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="– Startup founder wanting to launch your MVP fast." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Tech lead looking for cost-efficient scalability." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Entrepreneur searching to hire Flutter developers or outsource your project to a Flutter app development company." />
                                    </ListItem>
                                </List>
                                <Typography variant="body1" style={{ fontWeight: 700 }}>
                                    Flutter is built for you.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    You get performance, flexibility, beauty, and speed—without blowing your budget or timeline. Businesses of all sizes can benefit, from small startups to large enterprises testing new features via MVPs.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    With the growing availability of custom Flutter app development and Flutter outsourcing services, you can access global talent and execution without the hassle.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    We specialize in cost-effective app development, ensuring you get enterprise-level quality within startup budgets. Our experience in custom Flutter app development and building cross-platform mobile apps means you can trust us to create solutions that not only work — they wow.
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
                                    Bharat Katariya is Digital Marketing Expert at USS LLC he likes to share Tips on Digital Marketing Services, Google ads management, Amazon ads management, and other blogs ideas.
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

export default CompMobileAppDevelopment;
