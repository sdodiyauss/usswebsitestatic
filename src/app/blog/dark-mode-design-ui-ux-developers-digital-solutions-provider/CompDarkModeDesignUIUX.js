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
import Blog6 from "@/blog-ux-developers.webp";

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
    { id: "section2", label: "Why Dark Mode Matters for Developers" },
    { id: "section3", label: "Use CSS Variables & Design Tokens" },
    { id: "section4", label: "Detect & Respect User Preferences" },
    { id: "section5", label: "Maintain Proper Contrast" },
    { id: "section6", label: "Handle Shadows, Elevation & Depth" },
    { id: "section7", label: "Typography Adjustments" },
    { id: "section8", label: "Icons & Illustrations" },
    { id: "section9", label: "Accessibility Considerations" },
    { id: "section10", label: "Testing in Real-World Conditions" },
    { id: "section11", label: "Performance & Optimization" },
    { id: "section12", label: "Build Light and Dark Modes Simultaneously" },
    { id: "section13", label: "Common Mistakes to Avoid" },
    { id: "section14", label: "Tools Every UI/UX Developer Should Use" },
    { id: "section15", label: "SEO & Business Perspective" },
    { id: "section16", label: "The Future of Dark Mode for Developers" },
    { id: "section17", label: "Final Thoughts" },
];

const CompDarkModeDesignUIUX = () => {
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
                                    <Image src={Blog6} alt="dark-mode-design-ui-ux-developers-digital-solutions-provider" />
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
                                                Dark Mode Design: Best Practices for UI/UX Developers
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
                                                12th February, 2026
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
                                    Dark mode is no longer a “nice-to-have” feature—it’s an expectation. Users now actively look for dark mode in mobile apps, websites, dashboards, and enterprise applications. Poorly implemented dark mode can lead to eye strain, accessibility issues, and decreased user engagement.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For <strong>UI/UX developers</strong>, dark mode isn’t just about changing colors—it’s about implementing robust, scalable, and accessible themes that work seamlessly across devices, platforms, and user preferences. In this guide, we’ll explore <strong>practical dark mode implementation strategies, accessibility considerations, performance optimization, and best practices</strong> developers need to know.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Why Dark Mode Matters for Developers
                                </Typography>
                                <Typography variant="body1">
                                    Dark mode impacts multiple aspects of application development and is a key consideration in <Link href="https://www.universalstreamsolution.com/blog/ui-development-guide-basics-advanced"> advanced UI development techniques.</Link>.
                                    <br />
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="User Comfort: Reduces eye strain in low-light environments. " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="User Comfort: Reduces eye strain in low-light environments. " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="User Preferences: Users expect customizable experiences with light and dark themes. " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Accessibility: Helps users with light sensitivity or visual impairments." />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Popular platforms like <strong>Google, Apple, Instagram, Twitter/X, YouTube, and Figma</strong> all support dark mode, setting a standard developers must follow.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Use CSS Variables & Design Tokens
                                </Typography>
                                <Typography variant="body1">
                                    A <strong>scalable and maintainable approach</strong> is essential for dark mode implementation. Using <strong>CSS variables</strong> or <strong>design tokens</strong> allows developers to manage colors, typography, and component states consistently across the application.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Example CSS Variables:
                                    <br />
                                </Typography>
                                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                    {`:root {
                                      --bg-color: #ffffff;
                                      --text-color: #121212;
                                      --primary-color: #0066FF;
                                      --card-bg: #F5F5F5;
                                    }
                                    `}
                                    <br />
                                    {`[data-theme="dark"] { 
                                     --bg-color: #121212; 
                                     --text-color: #E0E0E0; 
                                     --primary-color: #4D8DFF; 
                                     --card-bg: #1E1E1E; 
                                    } 
                                    `}
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Advantages:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Centralized theme management " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Easy updates without touching component code " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Smooth integration with JavaScript theme toggles" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Detect & Respect User Preferences
                                </Typography>
                                <Typography variant="body1">
                                    Modern browsers and operating systems allow developers to detect user theme preferences. Respecting these preferences improves UX and accessibility.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    JavaScript Example:
                                </Typography>
                                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                    {`if (window.matchMedia('(prefers-color-scheme: dark)').matches) { 
document.documentElement.setAttribute('data-theme', 'dark'); 
} else { 
document.documentElement.setAttribute('data-theme', 'light'); 
} 
`}
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Tip:</strong> Always provide a <strong>manual toggle</strong> so users can override system settings, storing their preference in localStorage or cookies.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Maintain Proper Contrast
                                </Typography>
                                <Typography variant="body1">
                                    Contrast is crucial for readability. Developers must ensure that <strong>text and UI elements comply with accessibility standards.</strong>
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Recommended Contrast Ratios (WCAG):
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Body Text: 4.5:1 " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Headings: 3:1 minimum " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="UI Elements: 3:1 minimum " />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Best Practices:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Avoid pure white text (#FFFFFF); use off-white (#E0E0E0 or #DADADA)." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Dynamically adjust text contrast if backgrounds change using CSS color-contrast() or custom JavaScript logic." />
                                    </ListItem>
                                </List>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Example CSS:
                                </Typography>
                                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                    {`body { 
color: var(--text-color); 
} 
 `}
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Handle Shadows, Elevation & Depth
                                </Typography>
                                <Typography variant="body1">
                                    Shadows in dark mode work differently than in light mode. Traditional shadows may disappear or feel harsh. Developers must use <strong>soft glows, layered backgrounds, and subtle borders</strong> to maintain depth and hierarchy.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Example:
                                    <br />
                                </Typography>
                                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                    {`.card { 
background-color: var(--card-bg); 
border-radius: 12px; 
box-shadow: 0 2px 4px rgba(255, 255, 255, 0.05); /* subtle light shadow */ 
padding: 16px; 
} 
`}
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Tips:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Use multiple background layers for depth. " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Adjust shadows dynamically for different UI components." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Avoid pure black backgrounds for components; opt for dark gray tones. " />
                                    </ListItem>
                                </List>

                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Typography Adjustments
                                </Typography>
                                <Typography variant="body1">
                                    Dark mode affects text readability. Developers should implement <strong>typography adjustments programmatically:</strong>
                                    <br />
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Increase font weight slightly: Regular → Medium " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Adjust line height to 1.5–1.7 for better scanning " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Add slight letter spacing for small text" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    CSS Example:
                                    <br />
                                </Typography>
                                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                    {`body { 
font-weight: 400; 
line-height: 1.6; 
} 
 `}
                                    <br />
                                    {`[data-theme="dark"] body { 
font-weight: 500; 
line-height: 1.7; 
} 
 `}
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Icons & Illustrations
                                </Typography>
                                <Typography variant="body1">
                                    UI assets often need adaptation for dark mode:
                                    <br />
                                    <br />
                                    A component might include:
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Avoid pure white icons; use light gray (#BDBDBD). " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reduce contrast for illustrations. " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Provide dual assets for light and dark themes. " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Swap images dynamically via JavaScript: " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                    {`const theme = document.documentElement.getAttribute('data-theme'); 
document.querySelectorAll('.icon').forEach(icon => { 
icon.src = theme === 'dark' ? icon.dataset.dark : icon.dataset.light; 
}); 
`}
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. Accessibility Considerations
                                </Typography>
                                <Typography variant="body1">
                                    Dark mode can enhance accessibility, but developers must:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Ensure WCAG contrast compliance " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Use semantic HTML and ARIA attributes for screen readers " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Avoid relying solely on color to indicate states " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Test with color-blind simulators " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    <strong>Tools:</strong> Stark, aXe, Lighthouse for automated accessibility checks.
                                </Typography>
                            </Box>

                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    9. Testing in Real-World Conditions
                                </Typography>
                                <Typography variant="body1">
                                    Developers must test dark mode across multiple environments:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Low-light conditions " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Different device types (OLED vs LCD) " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Variable brightness levels " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Long reading sessions " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Testing ensures readability, visual comfort, and functional consistency.
                                </Typography>
                            </Box>

                            {/* Section 11 */}
                            <Box id="section11" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    10. Performance & Optimization
                                </Typography>
                                <Typography variant="body1">
                                    Dark mode implementation can impact performance if not done carefully:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Use CSS variables instead of inline styles to reduce repaint and reflow. " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Lazy-load images for both themes. " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Avoid heavy JavaScript animations during theme switching." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cache user preferences to prevent unnecessary re-renders. " />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* Section 12 */}
                            <Box id="section12" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    11. Build Light and Dark Modes Simultaneously
                                </Typography>
                                <Typography variant="body1">
                                    Creating dark mode as an afterthought leads to technical debt and inconsistencies, making it essential to follow best practices in <Link href="https://www.universalstreamsolution.com/how-we-help/graphics-and-ui-ux-design">UI/UX design for web and apps.</Link>
                                    <br />
                                    <br />
                                    Developers should:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Build light and dark themes together " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Use design tokens and reusable component libraries " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Maintain consistency across typography, spacing, and UI elements " />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* Section 13 */}
                            <Box id="section13" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    12. Common Mistakes to Avoid
                                </Typography>
                                <Typography variant="body1">
                                    Even experienced developers make mistakes in dark mode:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Using pure black backgrounds (#000000) " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Ignoring accessibility standards " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Copying light mode code without adjustments " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Overusing high-saturation colors or pure white elements " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Neglecting testing across devices and conditions " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Avoiding these mistakes improves <strong>readability, usability, and overall UX.</strong>
                                </Typography>
                            </Box>

                            {/* Section 14 */}
                            <Box id="section14" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    13. Tools Every UI/UX Developer Should Use
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Figma / Adobe XD – For reference and design handoff " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Stark / aXe / Lighthouse – Accessibility testing " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Chrome DevTools – Device simulation and CSS debugging " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Material Theme Builder – Prebuilt dark mode tokens and guidelines " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Using these tools helps developers <strong>implement dark mode efficiently and reliably.</strong>
                                </Typography>
                            </Box>

                            {/* Section 15 */}
                            <Box id="section15" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    14. SEO & Business Perspective
                                </Typography>
                                <Typography variant="body1">
                                    Properly implemented dark mode affects business metrics:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Lower bounce rate – Users stay longer in comfortable environments " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Higher engagement – Less eye strain leads to better focus " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Better conversion rates – Accessible and readable interfaces build trust " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Developers play a <strong>critical role in ensuring that dark mode supports these business outcomes.</strong>
                                </Typography>
                            </Box>

                            {/* Section 16 */}
                            <Box id="section16" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    15. The Future of Dark Mode for Developers
                                </Typography>
                                <Typography variant="body1">
                                    Dark mode is evolving with new technologies:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Adaptive themes based on ambient lighting " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="AI-driven color adjustments for readability " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Context-aware UI modes for night, work, or leisure " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Personalized accessibility settings" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    UI/UX developers who master dark mode today are <strong>future-proofing their skills</strong> for the next generation of user-centered digital experiences.
                                </Typography>
                            </Box>

                            {/* Section 17 */}
                            <Box id="section17" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Final Thoughts
                                </Typography>
                                <Typography variant="body1">
                                    For UI/UX developers, dark mode implementation is about more than aesthetic adjustments. Proper dark mode enhances user experience and functionality, making it a critical consideration for any <Link href="https://www.universalstreamsolution.com/">digital solutions provider.</Link>
                                    <br />
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Usability – Easy on the eyes, reduces cognitive fatigue" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Accessibility – Inclusive design for all users " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Performance – Efficient and scalable code " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Brand Perception – Modern, polished interfaces that inspire trust " />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Done right, dark mode is seamless, intentional, and flexible. Done poorly, it frustrates users and damages credibility.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Dark mode is now a <strong>core responsibility for UI/UX developers</strong>, and mastering its implementation will make your applications <strong>accessible, performant, and visually compelling.</strong>
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

export default CompDarkModeDesignUIUX;
