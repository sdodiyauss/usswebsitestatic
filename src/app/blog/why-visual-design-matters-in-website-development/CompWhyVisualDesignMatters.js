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
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";

import BtnIcon from "@/btn-icon.svg?url";

import Blog2 from "@/blog-webdevelopment.webp";
import Blog3 from "@/blog-appdevelopment.webp";
import Blog5 from "@/blog-backenddevelopment.webp";
import Blog9 from "@/blog-why-visual-design-matters.webp";


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
    { id: "section2", label: "What Is Visual Design in Website Development?" },
    { id: "section3", label: "Why Visual Design Matters in Website Development" },
    { id: "section4", label: "Key Elements of Effective Visual Design" },
    { id: "section5", label: "Visual Design and Website Conversions" },
    { id: "section6", label: "Visual Design and SEO" },
    { id: "section7", label: "Common Visual Design Mistakes" },
    { id: "section8", label: "How Developers and Designers Can Work Together" },
    { id: "section9", label: "How to Improve Your Website's Visual Design" },
    { id: "section10", label: "Visual Design for Different Types of Websites" },
    { id: "section11", label: "Why Businesses Should Invest in Professional Website Design" },
    { id: "section12", label: "Final Thoughts" },
];

const CompWhyVisualDesignMatters = () => {
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
        { id: "p6", title: "The Ultimate Frontend Face-Off: AngularJS vs ReactJS", excerpt: "In today’s fast-moving world of frontend web development, one debate keeps coming up among develop...", author: "Hitesh khatwani", date: "April 14th, 2025", readTime: "6 min read", category: "Web Development", image: Blog2, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog/angularjs-vs-reactjs-frontend-faceoff" },
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
                                    <Image src={Blog9} alt="product-design-user-experience-revenue" />
                                </CardMedia>

                                <CardContent className="blog-card-content">
                                    <Box>
                                        <Chip
                                            label="UI/UX Design"
                                            size="small"
                                            className="blog-card-chip"
                                        />

                                        <Box className="blog-card-title-row">
                                            <Typography variant="h5" className="blog-card-title">
                                                Why Visual Design Matters in Website Development
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="blog-card-meta" sx={{ mb: 3 }}>
                                        <Box className="avtar-box">
                                            <Avatar
                                                alt="nirav mehta"
                                                src="/images/written-by-nirav.webp"
                                                className="blog-card-avatar"
                                            />
                                            <Typography
                                                variant="caption"
                                                className="blog-card-author"
                                            >
                                                Nirav Mehta
                                            </Typography>
                                        </Box>

                                        <Box className="blog-card-date-item">
                                            <Image
                                                src={Calender}
                                                alt="Date"
                                                className="blog-meta-icon"
                                            />
                                            <Typography variant="caption" className="blog-card-date">
                                                26th august, 2026
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
                                    A website is often the first interaction a customer has with a business. Before visitors read your services, compare your products, or contact your team, they notice how your website looks and feels. This is why <strong>visual design in website development</strong> plays an important role in creating a strong online presence.
                                    <br />
                                    <br />
                                    Visual design is more than choosing attractive colors, images, fonts, or layouts. It combines these elements to create a website that is easy to understand, visually consistent, trustworthy, and simple to navigate.
                                    <br />
                                    <br />
                                    A well-designed website can help businesses make a positive first impression, improve user experience, increase engagement, and support conversions. On the other hand, a website with poor visual design can make even high-quality products or services difficult to discover and understand.
                                    <br />
                                    <br />
                                    In this article, we will explore <strong>why visual design matters in website development</strong>, the key elements of effective website design, and how businesses can use visual design to create better digital experiences.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. What Is Visual Design in Website Development?
                                </Typography>
                                <Typography variant="body1">
                                    Visual design refers to the appearance and presentation of a website. It focuses on how different visual elements work together to communicate information and guide users through the website.
                                    <br />
                                    <br />
                                    Important visual design elements include:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Color schemes" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Typography" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Images and graphics" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="White space" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Page layouts" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Icons" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Buttons" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Visual hierarchy" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Branding" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Responsive design" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Animations and interactive elements" />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    The goal is not simply to make a website look attractive. Good visual design should make the website <strong>clear, usable, accessible, and aligned with the business's objectives</strong>.
                                    <br />
                                    <br />
                                    For example, an eCommerce website may use large product images, clear pricing, prominent call-to-action buttons, and simple navigation. A healthcare website may prioritize readability, trust, accessibility, and easy access to important information.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Why Visual Design Matters in Website Development
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    a. Creates a Strong First Impression
                                </Typography>

                                <Typography variant="body1">
                                    Visitors can form an initial opinion about a website very quickly. If a website looks outdated, cluttered, confusing, or unprofessional, users may leave before exploring the business.
                                    <br />
                                    <br />
                                    A modern and professional visual design can immediately communicate quality and credibility.
                                    <br />
                                    <br />
                                    For example, imagine two software development companies offering similar services. One website has a clean layout, consistent branding, professional graphics, and simple navigation. The other has outdated graphics, inconsistent fonts, and crowded pages.
                                    <br />
                                    <br />
                                    Most users are more likely to trust and explore the first website.
                                    <br />
                                    <br />
                                    This makes <strong>website visual design</strong> an important part of building a positive first impression.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    b. Improves User Experience
                                </Typography>

                                <Typography variant="body1">
                                    Visual design and user experience are closely connected.
                                    <br />
                                    <br />
                                    A website can contain excellent information, but if visitors cannot find what they need easily, the website will not perform effectively.
                                    <br />
                                    <br />
                                    Good visual design helps users understand:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Where they are on the website" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="What information is important" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Where they should click" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="How to move between pages" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="What action they should take next" />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    For example, using a noticeable button such as <strong>"Request a Free Consultation"</strong> can help visitors understand the next step.
                                    <br />
                                    <br />
                                    Clear headings, readable text, logical spacing, and intuitive navigation can also make the browsing experience easier.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    c. Builds Brand Identity
                                </Typography>

                                <Typography variant="body1">
                                    Your website is an important part of your brand identity.
                                    <br />
                                    <br />
                                    Colors, typography, imagery, graphics, icons, and design patterns can create a consistent visual identity across your digital presence.
                                    <br />
                                    <br />
                                    For example, a technology company may use a modern interface with clean typography and technology-focused graphics. A luxury brand may use minimal layouts, premium imagery, and elegant typography.
                                    <br />
                                    <br />
                                    Consistent website design helps visitors recognize your business and remember your brand.
                                    <br />
                                    <br />
                                    A strong visual identity should ideally remain consistent across:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Website pages" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Social media" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Digital advertisements" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Email campaigns" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Landing pages" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Mobile applications" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Marketing materials" />
                                    </ListItem>
                                </List>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    d. Helps Communicate Information Clearly
                                </Typography>

                                <Typography variant="body1">
                                    A website often contains a large amount of information. Without proper visual organization and the right <Link href="https://www.universalstreamsolution.com/blog/essential-tools-modern-ui-ux-designer-should-master">UI/UX tools designers</Link> <strong>use</strong>, visitors may find it difficult to understand and navigate the content.
                                    <br />
                                    <br />
                                    Visual design helps organize information into logical sections.
                                    <br />
                                    <br />
                                    For example, a service page can use:
                                    <br />
                                    <br />
                                    <strong>Headline → Short explanation → Benefits → Features → Process → FAQs → Call to action</strong>
                                    <br />
                                    <br />
                                    This structure makes the content easier to scan.
                                    <br />
                                    <br />
                                    Visual hierarchy can also help users understand which information should receive the most attention.
                                    <br />
                                    <br />
                                    Large headings can introduce topics, subheadings can divide sections, and supporting text can provide additional details.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    e. Makes Navigation Easier
                                </Typography>

                                <Typography variant="body1">
                                    Website navigation is one of the most important components of usability.
                                    <br />
                                    <br />
                                    Visitors should be able to move between pages without confusion.
                                    <br />
                                    <br />
                                    A good visual design can make navigation more intuitive through:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Clear menu labels" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Logical page hierarchy" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Consistent navigation" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Breadcrumbs" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Visible buttons" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Search functionality" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Clear links" />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    For example, instead of using vague navigation labels such as "Solutions," a business might use specific categories such as "Healthcare Solutions," "Enterprise Software," and "Mobile App Development."
                                    <br />
                                    <br />
                                    Clear navigation helps users reach their desired information faster.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    f. Supports Mobile Users
                                </Typography>

                                <Typography variant="body1">
                                    Today, websites need to work across smartphones, tablets, laptops, and desktop computers.
                                    <br />
                                    <br />
                                    This is where <strong>responsive web design</strong> becomes important.
                                    <br />
                                    <br />
                                    Responsive design allows a website layout to adapt to different screen sizes.
                                    <br />
                                    <br />
                                    Visual elements such as images, buttons, menus, text, and forms should remain usable on smaller screens.
                                    <br />
                                    <br />
                                    For example, a desktop website may display a horizontal navigation menu, while the mobile version may use a hamburger menu.
                                    <br />
                                    <br />
                                    A responsive visual design can improve usability and help businesses provide a consistent experience across devices.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Key Elements of Effective Visual Design
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Color
                                </Typography>

                                <Typography variant="body1">
                                    Color can influence how users perceive a brand and interact with a website.
                                    <br />
                                    <br />
                                    Different colors can communicate different emotions and associations. Blue is commonly associated with trust and professionalism, while green can be associated with growth or health.
                                    <br />
                                    <br />
                                    However, businesses should not choose colors based only on trends. Colors should match the brand identity and maintain sufficient contrast for readability.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Typography
                                </Typography>

                                <Typography variant="body1">
                                    Typography affects both appearance and readability.
                                    <br />
                                    <br />
                                    A website should use fonts that are easy to read across different devices.
                                    <br />
                                    <br />
                                    Important typography considerations include:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Font family" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Font size" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Font weight" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Line spacing" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Heading hierarchy" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Text contrast" />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    Using too many font styles can make a website look inconsistent.
                                    <br />
                                    <br />
                                    A simple typography system with clear heading levels usually creates a more professional experience.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Images and Graphics
                                </Typography>

                                <Typography variant="body1">
                                    Images can communicate information faster than large blocks of text.
                                    <br />
                                    <br />
                                    High-quality images, illustrations, icons, diagrams, and graphics can make website content more engaging.
                                    <br />
                                    <br />
                                    However, visual content should support the message rather than simply decorate the page.
                                    <br />
                                    <br />
                                    For example, a healthcare software company could use product screenshots or workflow illustrations to explain how its solution works.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    White Space
                                </Typography>

                                <Typography variant="body1">
                                    White space refers to the empty space between visual elements.
                                    <br />
                                    <br />
                                    It does not mean wasted space.
                                    <br />
                                    <br />
                                    Proper white space helps separate sections, improve readability, and reduce visual clutter.
                                    <br />
                                    <br />
                                    A page with too many elements placed close together can feel overwhelming. Adding sufficient spacing can make the same content much easier to understand.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Visual Hierarchy
                                </Typography>

                                <Typography variant="body1">
                                    Visual hierarchy determines which elements users notice first.
                                    <br />
                                    <br />
                                    Designers can create hierarchy using:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Size" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Position" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Color" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Contrast" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Spacing" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Typography" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Images" />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    For example, a page might have a large headline followed by a supporting description and a prominent CTA button.
                                    <br />
                                    <br />
                                    This creates a natural visual path for the user.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Visual Design and Website Conversions
                                </Typography>
                                <Typography variant="body1">
                                    Good visual design can also support conversion optimization.
                                    <br />
                                    <br />
                                    A conversion could be:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Submitting a contact form" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Requesting a consultation" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Booking a demo" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Purchasing a product" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Downloading an ebook" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Signing up for a newsletter" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Calling a business" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Starting a free trial" />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    Visual design can guide users toward these actions.
                                    <br />
                                    <br />
                                    For example, if a website wants users to request a consultation, the CTA should be easy to find without overwhelming the rest of the page.
                                    <br />
                                    <br />
                                    Landing pages can use visual hierarchy to highlight the main value proposition, benefits, social proof, form, and CTA.
                                    <br />
                                    <br />
                                    However, design alone does not guarantee conversions. It needs to work together with strong messaging, relevant content, page speed, usability, and a clear conversion strategy.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Visual Design and SEO
                                </Typography>
                                <Typography variant="body1">
                                    Visual design and SEO may seem like separate areas, but they can influence each other.
                                    <br />
                                    <br />
                                    Search engines primarily need to understand the content and structure of a website, while users need to understand and interact with that content. This is why <Link href="https://www.universalstreamsolution.com/blog/product-design-user-experience-revenue">how UX design impacts revenue</Link> is important when creating a website that supports both user needs and business goals.
                                    <br />
                                    <br />
                                    Good design can support SEO by improving user experience.
                                    <br />
                                    <br />
                                    Important areas include:
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Mobile-Friendliness
                                </Typography>
                                <Typography variant="body1">
                                    A responsive website provides a better experience for users accessing pages from mobile devices.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Page Speed
                                </Typography>
                                <Typography variant="body1">
                                    Large images, unnecessary animations, and poorly optimized design elements can negatively affect page performance.
                                    <br />
                                    <br />
                                    Images should be compressed and appropriately sized to avoid unnecessary loading time.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Content Structure
                                </Typography>
                                <Typography variant="body1">
                                    Visual design should work with a logical content structure.
                                    <br />
                                    <br />
                                    Use:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="One clear H1" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Relevant H2 and H3 headings" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Short paragraphs" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Bullet points" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Descriptive links" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Useful images" />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    This makes content easier for users to scan and understand.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Accessibility
                                </Typography>

                                <Typography variant="body1">
                                    Accessible design helps more people use your website.
                                    <br />
                                    <br />
                                    Businesses should consider:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Sufficient color contrast" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Readable font sizes" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Keyboard navigation" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Alternative text for meaningful images" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Clear form labels" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Accessible buttons" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Avoiding excessive animations" />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    Accessibility is not just a design consideration. It is an important part of creating an inclusive digital experience.
                                </Typography>
                            </Box>


                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Common Visual Design Mistakes
                                </Typography>
                                <Typography variant="body1">
                                    Even attractive websites can have visual design problems.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Too Much Information
                                </Typography>

                                <Typography variant="body1">
                                    Putting too much information on one page can overwhelm visitors.
                                    <br />
                                    <br />
                                    The solution is to organize information into sections and prioritize the most important content.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Inconsistent Branding
                                </Typography>

                                <Typography variant="body1">
                                    Using different fonts, colors, button styles, and design patterns across pages can make a website feel unprofessional.
                                    <br />
                                    <br />
                                    A consistent design system can help solve this problem.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Poor Color Contrast
                                </Typography>

                                <Typography variant="body1">
                                    Light text on a light background can be difficult to read.
                                    <br />
                                    <br />
                                    Always prioritize readability when selecting colors.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Too Many Animations
                                </Typography>

                                <Typography variant="body1">
                                    Animations can make a website engaging, but excessive movement can distract users and affect performance.
                                    <br />
                                    <br />
                                    Use animations when they have a clear purpose.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Complicated Navigation
                                </Typography>

                                <Typography variant="body1">
                                    If users cannot quickly understand where to find information, they may leave the website.
                                    <br />
                                    <br />
                                    Navigation should be simple, descriptive, and consistent.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Ignoring Mobile Design
                                </Typography>

                                <Typography variant="body1">
                                    A website that looks good on desktop but performs poorly on mobile can lose potential customers.
                                    <br />
                                    <br />
                                    Design should consider mobile users from the beginning of the development process.
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. How Developers and Designers Can Work Together
                                </Typography>
                                <Typography variant="body1">
                                    Visual design should not be treated as something added after website development.
                                    <br />
                                    <br />
                                    Designers and developers should collaborate from the beginning.
                                    <br />
                                    <br />
                                    The process can include:
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Step 1: Understand the Business
                                </Typography>

                                <Typography variant="body1">
                                    Identify the company's goals, audience, services, and competitors.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Step 2: Define the User Journey
                                </Typography>

                                <Typography variant="body1">
                                    Understand what visitors need and what actions the website should encourage.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Step 3: Create Wireframes
                                </Typography>

                                <Typography variant="body1">
                                    Wireframes establish the structure and layout before detailed visual design begins.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Step 4: Develop the Visual Design
                                </Typography>

                                <Typography variant="body1">
                                    Designers define colors, typography, components, images, and other visual elements.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Step 5: Build the Website
                                </Typography>

                                <Typography variant="body1">
                                    Developers convert the design into a functional website.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Step 6: Test the Experience
                                </Typography>

                                <Typography variant="body1">
                                    Test the website across devices, browsers, and screen sizes.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Step 7: Measure Performance
                                </Typography>

                                <Typography variant="body1">
                                    Use analytics and user behavior data to identify areas for improvement.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    This collaborative approach can produce websites that are both visually appealing and technically functional.
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. How to Improve Your Website's Visual Design
                                </Typography>
                                <Typography variant="body1">
                                    If your website feels outdated or difficult to use, you do not always need to redesign everything immediately.
                                    <br />
                                    <br />
                                    Start by reviewing the most important pages.
                                    <br />
                                    <br />
                                    Consider improving:
                                    <br />
                                </Typography>

                                <List component="ol" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Homepage layout" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Navigation" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Typography" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Color consistency" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="CTA placement" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Images" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Spacing" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Mobile responsiveness" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Forms" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Page loading performance" />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    You can also review user behavior using tools such as Google Analytics 4 and Google Search Console.
                                    <br />
                                    <br />
                                    For example, if a landing page receives significant traffic but very few form submissions, investigate whether the page clearly communicates its value and provides an obvious next step.
                                </Typography>
                            </Box>

                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    9. Visual Design for Different Types of Websites
                                </Typography>
                                <Typography variant="body1">
                                    Visual design requirements can vary depending on the type of website.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Business Websites
                                </Typography>

                                <Typography variant="body1">
                                    Business websites should communicate credibility, services, expertise, and trust.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    eCommerce Websites
                                </Typography>

                                <Typography variant="body1">
                                    eCommerce websites should prioritize product imagery, pricing, filters, navigation, reviews, and a smooth checkout experience.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Healthcare Websites
                                </Typography>

                                <Typography variant="body1">
                                    Healthcare websites should emphasize readability, accessibility, trust, and easy access to important information.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    SaaS Websites
                                </Typography>

                                <Typography variant="body1">
                                    SaaS websites often need clear product explanations, screenshots, feature comparisons, pricing information, and strong CTAs.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Portfolio Websites
                                </Typography>

                                <Typography variant="body1">
                                    Portfolio websites can use visual storytelling to showcase projects, skills, case studies, and results.
                                    <br />
                                    <br />
                                    The best design approach depends on the target audience and business objectives.
                                </Typography>
                            </Box>

                            {/* Section 11 */}
                            <Box id="section11" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    10. Why Businesses Should Invest in Professional Website Design
                                </Typography>
                                <Typography variant="body1">
                                    A website is not simply an online brochure. For many businesses, it is an important part of their sales and marketing process.
                                    <br />
                                    <br />
                                    Professional <strong>website design and development</strong> can help businesses create a digital experience that reflects their brand and makes it easier for visitors to take action.
                                    <br />
                                    <br />
                                    A professional approach considers both aesthetics and functionality.
                                    <br />
                                    <br />
                                    The goal is to create a website that is:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Visually appealing" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Easy to navigate" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Mobile-friendly" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Fast" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Accessible" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="SEO-friendly" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Consistent with the brand" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Focused on user needs" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Designed around business goals" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* Section 12 */}
                            <Box id="section12" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Final Thoughts
                                </Typography>
                                <Typography variant="body1">
                                    Visual design plays an important role in modern <strong>website development</strong>. It influences how visitors perceive a brand, understand information, navigate pages, and interact with a website.
                                    <br />
                                    <br />

                                    However, good visual design is not about making a website look beautiful alone. It is about creating a meaningful connection between <strong>design, usability, content, technology, and business objectives</strong>.
                                    <br />
                                    <br />

                                    A successful website combines an attractive interface with clear messaging, intuitive navigation, responsive layouts, strong performance, accessibility, and a well-planned user journey.
                                    <br />
                                    <br />

                                    Whether you are building a business website, eCommerce platform, SaaS product, healthcare portal, or enterprise application, investing in thoughtful visual design can create a better experience for your users and support long-term digital growth.
                                    <br />
                                    <br />

                                    If your website looks outdated, has high bounce rates, receives traffic without generating leads, or is difficult to use on mobile devices, it may be time to evaluate its visual design and overall user experience.
                                    <br />
                                    <br />

                                    Good visual design does not simply make a website look better—it helps people understand, trust, and use it more effectively. If you want to create a website with a strong visual experience, you can{' '}
                                    <Link href="https://calendly.com/jvaghasiya-universalstreamsolution/30min?month=2026-08">speak with a software development expert</Link>{' '}
                                    to discuss your project requirements.
                                </Typography>
                            </Box>

                            <Box className="written-by-box">
                                <Box className="written-by-box-header">
                                    <Avatar
                                        src="/images/written-by-nirav.webp" // Replace with actual image
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
                                                Nirav Mehta
                                            </Typography>
                                            <Link
                                                href="https://www.linkedin.com/in/niravmehta03/"
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
                                    Nirav Mehta is an innovative UI/UX Designer with a passion for crafting user-friendly and visually compelling digital experiences. Skilled in user research, interface design, and product usability, he focuses on creating designs that balance creativity with functionality. Nirav’s design philosophy centers on empathy, simplicity, and seamless user interaction.
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

export default CompWhyVisualDesignMatters;
