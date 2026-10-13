"use client";
import React from "react";
import {
    Box,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemButton,
    Container,
    Link,
    Chip,
    Avatar,
    Card,
    CardContent,
    CardMedia,
    ListItemText,
    ListItemAvatar,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";

import BtnIcon from "@/btn-icon.svg?url";
import Blog2 from "@/blog-webdevelopment.webp";
import Blog3 from "@/blog-appdevelopment.webp";
import Blog5 from "@/blog-backenddevelopment.webp";
import Blog6 from "@/blog-custom-wordpress-development-vs-ready-made-themes.webp";

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
    { id: "section2", label: "What Is Custom WordPress Development?" },
    { id: "section3", label: "What Are Ready-Made WordPress Themes?" },
    { id: "section4", label: "Custom WordPress Development vs. Ready-Made Themes" },
    { id: "section5", label: "Key Points to Consider" },
    { id: "section6", label: "Which Option Should Your Business Choose?" },
    { id: "section7", label: "Conclusion" },
];

const CompWPdevVSReadyMadeTheme = () => {
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
                                    <Image src={Blog6} alt="custom-wordpress-development-vs-ready-made-themes" />
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
                                                Custom WordPress Development vs. Ready-Made Themes: Which Is Better?
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="blog-card-meta" sx={{ mb: 3 }}>
                                        <Box className="avtar-box">
                                            <Avatar
                                                alt="Sandeep Dodiya"
                                                src="/images/blog-avtar-sandip.webp"
                                                className="blog-card-avatar"
                                            />
                                            <Typography
                                                variant="caption"
                                                className="blog-card-author"
                                            >
                                                Sandeep Dodiya
                                            </Typography>
                                        </Box>

                                        <Box className="blog-card-date-item">
                                            <Image
                                                src={Calender}
                                                alt="Date"
                                                className="blog-meta-icon"
                                            />
                                            <Typography variant="caption" className="blog-card-date">
                                                14th September, 2026
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
                                    Choosing custom WordPress theme development and ready-made website templates is one of the biggest, important decisions a business makes when building its online presence. This guide breaks down the real differences in cost, performance, design flexibility, and long-term value, so you can decide which path fits your goals and budget.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Build a professional website is an important decision for any business. <Link href="https://wordpress.com/"><strong>WordPress</strong></Link> gives businesses several ways to create a website, but two common options are custom WordPress development and ready-made themes. Both approaches have their advantages, and the right choice depends on your budget, business goals, design requirements, and future plans.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    A ready-made theme can help you launch a website quickly, while a custom solution gives you greater control over the website's design and functionality. Before choosing between the two, it is important to understand how each option works and what you can expect in terms of cost, flexibility, performance, and scalability.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. What Is Custom WordPress Development?
                                </Typography>
                                <Typography variant="body1">
                                    Custom WordPress development involves creating a website specifically around your business requirements. Instead of starting with a pre-designed layout, a WordPress Developer can build a design using various types of plugins, such as Elementor, Visual Composer, SeedProd, and others, and add features, navigation, and functionality according to your needs.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    With Custom WordPress theme development, your website can have a unique appearance that reflects your brand rather than looking like other websites using the same theme. A development team can also integrate specific features, plugins, payment systems, customer portals, booking functionality, or other business-specific requirements.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    This approach is generally suitable for businesses that want a unique online presence and expect their website to grow over time. Professional <Link href="/how-we-help/web-design-and-development"><strong>WordPress site development services</strong></Link> can also focus on areas such as website speed, security, responsive design, search engine optimization, and ongoing maintenance.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. What Are Ready-Made WordPress Themes?
                                </Typography>
                                <Typography variant="body1">
                                    Ready-made website themes are pre-designed website layouts that can be installed and customized within WordPress. They are often available with different layouts, colors, typography options, page designs, and built-in features.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    <strong>Ready-Made Website Templates</strong> are popular because they can reduce the time and initial effort required to launch a website. A small business, freelancer, blogger, or startup may be able to select a suitable design and customize it without building everything from the beginning.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Ready-made WordPress Templates and Themes can have limitations. You may need to adjust your business requirements to fit the theme's existing structure. Some themes may also include features you do not need, which can affect website performance or make future customization more complicated.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Custom WordPress Development vs. Ready-Made Themes
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    a. Custom WordPress Development
                                </Typography>

                                <Typography variant="body1">
                                    <strong>Design:</strong> Fully customised to match your brand and business requirements
                                    <br />
                                    <strong>Development Time:</strong> Usually takes more time because the website is built from scratch
                                    <br />
                                    <strong>Initial Cost:</strong> Generally higher due to custom design and development
                                    <br />
                                    <strong>Flexibility:</strong> High flexibility for design, features, and functionality
                                    <br />
                                    <strong>Branding:</strong> Creates a unique website that reflects your brand
                                    <br />
                                    <strong>Features & Functionality:</strong> Features can be developed specifically for your business needs
                                    <br />
                                    <strong>Scalability:</strong> Easier to plan and customize as your business grows
                                    <br />
                                    <strong>Performance:</strong> Can be optimised specifically for your website's requirements
                                    <br />
                                    <strong>SEO:</strong> Can be structured and optimized according to your SEO requirements and use the related plugin setup
                                    <br />
                                    <strong>Security:</strong> Security measures can be incorporated based on your website's requirements
                                    <br />
                                    <strong>Maintenance:</strong> Requires ongoing maintenance, updates, and professional support
                                    <br />
                                    <strong>Customisation:</strong> Almost every aspect can be customized
                                    <br />
                                    <strong>Best For:</strong> Businesses that need unique designs, advanced features, and long-term scalability
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    b. Ready-Made WordPress Themes
                                </Typography>

                                <Typography variant="body1">
                                    <strong>Design:</strong> Pre-designed layouts with limited customisation options
                                    <br />
                                    <strong>Development Time:</strong> Faster to launch because the basic design is already available
                                    <br />
                                    <strong>Initial Cost:</strong> Generally lower because the core design is already built
                                    <br />
                                    <strong>Flexibility:</strong> Flexibility depends on the theme and its customisation options
                                    <br />
                                    <strong>Branding:</strong> May look like other websites using the same theme
                                    <br />
                                    <strong>Features & Functionality:</strong> Features are usually pre-built and may require additional plugins or customisation
                                    <br />
                                    <strong>Scalability:</strong> May require additional customisation or a theme change as needs increase
                                    <br />
                                    <strong>Performance:</strong> Performance depends on the theme's code, features, and plugins
                                    <br />
                                    <strong>SEO:</strong> SEO capabilities depend on the theme and additional SEO plugin setup as required by the theme
                                    <br />
                                    <strong>Security:</strong> Security depends on the theme developer, updates, plugins, and configuration
                                    <br />
                                    <strong>Maintenance:</strong> Requires theme, WordPress, and plugin updates
                                    <br />
                                    <strong>Customisation:</strong> Customisation is limited to the options supported by the theme
                                    <br />
                                    <strong>Best For:</strong> Startups, small businesses, and individuals looking for a faster and more affordable launch
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Key Points to Consider
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    a. Budget vs. Long-Term Value
                                </Typography>

                                <Typography variant="body1">
                                    If your budget is tight and you need a simple online presence quickly, a ready-made theme is the practical choice. But if your website is central to your business revenue, custom development can provide better long-term value through better performance, fewer plugin conflicts, and lower maintenance challenges over time.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    b. Brand Identity
                                </Typography>

                                <Typography variant="body1">
                                    Your website is the first impression of your business. WordPress Templates and Themes can look polished, but they rarely feel unique to your brand. Custom development gives you complete control over colors, typography, animations, and layout so your brand stands out.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    c. Functionality
                                </Typography>

                                <Typography variant="body1">
                                    Need a custom booking system, a membership portal, or a unique product configurator? A template may require you to use multiple plugins and ensure they work well together. A WordPress Developer can build exactly what you need without unnecessary functionality or plugin bloat.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    d. Speed and SEO
                                </Typography>

                                <Typography variant="body1">
                                    Google considers website performance and page experience when evaluating websites. Ready-made Website Templates often load numerous scripts and stylesheets that you may never use. Custom builds can include only the functionality necessary for your website, which can help improve loading performance and provide a better user experience.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    e. Future-Proofing
                                </Typography>

                                <Typography variant="body1">
                                    Businesses change and markets shift. With a custom website, you can adapt features and design as your business grows. With a template, you may be more limited by the theme's original structure, and major changes can sometimes require significant redevelopment or even a complete theme change.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Which Option Should Your Business Choose?
                                </Typography>
                                <Typography variant="body1">
                                    The best option depends on what you need from your website.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    If your priority is <strong>speed, affordability, and a relatively simple website</strong>, a ready-made theme may be the practical choice. It can help you establish an online presence without the time and investment required for a fully custom project.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    On the other hand, if your website is an important part of your business, custom WordPress development may offer greater long-term value. Businesses with unique design requirements, advanced functionality, specific integrations, or ambitious growth plans can benefit from working with an experienced WordPress Developer.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Conclusion
                                </Typography>
                                <Typography variant="body1">
                                    There is no single solution that is best for every business. Ready-made WordPress Templates and Themes can be an effective option when you need a website quickly and have standard requirements. Custom WordPress development is generally a better choice when you need flexibility, unique branding, advanced functionality, and room for future growth.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Before deciding, consider your budget, project timeline, required features, expected traffic, branding goals, and long-term plans. If you are unsure which approach is suitable, discussing your requirements with a professional WordPress website development provider can help you make a more informed decision.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    <strong>In short:</strong> Choose a ready-made theme for simplicity and speed, but consider custom WordPress development when your website needs to be a unique, scalable, and strategically important part of your business.
                                </Typography>
                            </Box>

                            <Box className="written-by-box">
                                <Box className="written-by-box-header">
                                    <Avatar
                                        src="/images/written-by-sandip.webp" // Replace with actual image
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
                                                Sandeep Dodiya
                                            </Typography>
                                            <Link
                                                href="https://www.linkedin.com/in/sandeep-dodiya-596a05120/"
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
                                    Sandeep Dodiya is a UI Developer Expert specializing in creating intuitive, high-performance user interfaces for web applications. He combines design insight with coding expertise to deliver seamless digital experiences.
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

export default CompWPdevVSReadyMadeTheme;
