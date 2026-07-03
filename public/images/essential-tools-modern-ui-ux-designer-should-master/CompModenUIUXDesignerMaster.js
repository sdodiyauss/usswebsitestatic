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
import Blog9 from "@/blog-modern-ui-ux-designer-master.webp";


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
    { id: "section2", label: "Why UI/UX Tools Matter in Modern Design" },
    { id: "section3", label: "Figma – The Collaborative Design Powerhouse" },
    { id: "section4", label: "Adobe XD – Powerful Prototyping and Interaction Design" },
    { id: "section5", label: "Sketch – A Longtime Favorite for UI Design" },
    { id: "section6", label: "InVision – Transforming Designs into Interactive Experiences" },
    { id: "section7", label: "Axure RP – Advanced Prototyping for Complex Projects" },
    { id: "section8", label: "Balsamiq – Rapid Wireframing Made Simple" },
    { id: "section9", label: "Maze – User Testing and Feedback Platform" },
    { id: "section10", label: "Zeplin – Bridging the Gap Between Designers and Developers" },
    { id: "section11", label: "Miro – Collaborative Brainstorming and User Journey Mapping" },
    { id: "section12", label: "Hotjar – Understanding Real User Behavior" },
    { id: "section13", label: "How Choosing the Right Tools Improves UX Design" },
    { id: "section14", label: "Future Trends in UI/UX Design Tools" },
    { id: "section15", label: "Final Thoughts" },
];

const CompModenUIUXDesignerMaster = () => {
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
                                    <Image src={Blog9} alt="Essential Tools Every Modern UI/UX Designer Should Master" />
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
                                                Essential Tools Every Modern UI/UX Designer Should Master
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="blog-card-meta" sx={{ mb: 3 }}>
                                        <Box className="avtar-box">
                                            <Avatar
                                                alt="Raj Shah"
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
                                                6th March, 2026
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
                                    In today’s digital-first world, <strong>UI/UX design plays a critical role in shaping how users interact with websites, applications, and digital products.</strong> A well-designed interface not only looks appealing but also provides a seamless and intuitive experience that keeps users engaged.
                                    <br />
                                    <br />
                                    For modern businesses, investing in high-quality user experience is no longer optional. According to industry research, companies that prioritize UX design often see <strong>higher conversion rates, improved customer satisfaction, and stronger brand loyalty.</strong>
                                    <br />
                                    <br />
                                    However, achieving great design requires more than creativity. <strong>Modern UI/UX designers rely on powerful tools that help them research, prototype, collaborate, and test their designs efficiently.</strong> These tools streamline workflows, enhance collaboration among teams, and ensure that design decisions are based on data and user insights.
                                    <br />
                                    <br />
                                    In this blog, we’ll explore the <strong>essential tools every modern UI/UX designer should master</strong> to stay competitive in the evolving digital landscape.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Why UI/UX Tools Matter in Modern Design
                                </Typography>
                                <Typography variant="body1">
                                    Before diving into the tools themselves, it’s important to understand why they are essential.
                                    <br />
                                    <br />
                                    Modern design projects involve multiple stages including research, wireframing, prototyping, collaboration, testing, and handoff to developers. Without the right tools, managing this workflow can become inefficient and time-consuming.
                                    <br />
                                    <br />
                                    <strong>UI/UX tools help designers:</strong>
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Create visually appealing and user-friendly interfaces" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Prototype and test ideas quickly" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Collaborate with developers and stakeholders" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Conduct usability testing and gather feedback" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improve overall productivity and design consistency" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    By mastering these tools, designers can transform creative ideas into <strong>functional, user-centered digital experiences.</strong>
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Figma – The Collaborative Design Powerhouse
                                </Typography>
                                <Typography variant="body1">
                                    Figma has become one of the most popular tools in the UI/UX design industry due to its <strong>cloud-based collaboration capabilities.</strong>
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Unlike traditional design tools, Figma allows multiple designers, developers, and stakeholders to work on the same project simultaneously.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Features
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Real-time collaboration " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Vector editing tools " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Interactive prototyping " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Design systems and reusable components " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cloud-based accessibility " />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Why Designers Love Figma
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Figma simplifies teamwork by enabling instant feedback and collaboration. Designers can create <strong>responsive layouts, interactive prototypes, and scalable design systems</strong> without switching between multiple tools.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For modern teams working remotely or across different locations, <strong>Figma significantly improves workflow efficiency.</strong>
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Adobe XD – Powerful Prototyping and Interaction Design
                                </Typography>
                                <Typography variant="body1">
                                    Adobe XD is another widely used UI/UX design tool that focuses on <strong>creating wireframes, interactive prototypes, and user flows.</strong>
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Part of the Adobe Creative Cloud ecosystem, Adobe XD integrates seamlessly with tools like Photoshop and Illustrator.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Features
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Interactive prototyping " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Auto-animate transitions " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Voice interface design " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Design system libraries" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Design system libraries" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Why It’s Important
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Adobe XD allows designers to <strong>quickly transform static layouts into interactive experiences,</strong> helping stakeholders understand how a product will function before development begins.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This reduces misunderstandings and accelerates product development.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Sketch – A Longtime Favorite for UI Design
                                </Typography>
                                <Typography variant="body1">
                                    Sketch has been a staple tool for UI designers for many years, particularly among macOS users.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    It is widely recognized for its <strong>vector-based interface design capabilities</strong> and extensive plugin ecosystem.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Features
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Vector-based design tools " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reusable symbols and components " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Design libraries " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Third-party plugin integrations " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Collaborative workflows " />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Why Designers Use Sketch
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Sketch allows designers to create <strong>highly detailed user interfaces while maintaining consistency across projects.</strong>
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Its plugin ecosystem provides additional capabilities such as animation tools, usability testing integrations, and developer handoff features.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. InVision – Transforming Designs into Interactive Experiences
                                </Typography>
                                <Typography variant="body1">
                                    InVision is a powerful platform that helps designers turn static screens into <strong>fully interactive prototypes.</strong>
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    It enables teams to visualize user flows and interactions before development begins.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Features
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Interactive prototyping " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Design collaboration " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Real-time feedback and comments " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Design handoff for developers " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Workflow management tools" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Benefits for UI/UX Designers
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    InVision makes it easier to present design concepts to stakeholders and clients. Instead of explaining how a product will work, designers can demonstrate a fully interactive prototype.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This improves communication and reduces the risk of costly design revisions, making it an essential approach for businesses investing in <Link href="/how-we-help/graphics-and-ui-ux-design">UI/UX design services</Link> to create efficient and user-centered digital products.
                                </Typography>
                            </Box>


                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Axure RP – Advanced Prototyping for Complex Projects
                                </Typography>
                                <Typography variant="body1">
                                    Axure RP is a powerful tool used for <strong>creating detailed wireframes and complex interactive prototypes.</strong>
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Unlike simpler prototyping tools, Axure allows designers to simulate advanced user interactions and logic.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Features
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Advanced wireframing capabilities " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Conditional logic and dynamic content " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Detailed documentation " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Interactive prototypes " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Team collaboration tools " />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Why It Stands Out
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Axure is particularly useful for <strong>enterprise-level applications or complex digital products</strong> where user flows and interactions are more advanced.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Designers can create highly functional prototypes that closely mimic real-world applications.
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Balsamiq – Rapid Wireframing Made Simple
                                </Typography>
                                <Typography variant="body1">
                                    Balsamiq is a tool specifically designed for<strong> low-fidelity wireframing. </strong>
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Its hand-drawn style encourages designers to focus on structure and functionality rather than visual details.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Features
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Drag-and-drop interface " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Pre-built UI components " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Simple wireframe creation " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Quick idea visualization " />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Why It’s Useful
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Balsamiq helps teams quickly <strong>brainstorm and visualize ideas without getting distracted by design aesthetics. </strong>
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    It’s especially valuable during the early stages of product design when concepts are still evolving.
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. Maze – User Testing and Feedback Platform
                                </Typography>
                                <Typography variant="body1">
                                    Designing a beautiful interface is not enough. <strong>Understanding how real users interact with your product is essential. </strong>
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Maze is a usability testing platform that integrates with popular design tools like Figma and Adobe XD.
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Features
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="User testing and analytics " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Task-based usability testing " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Heatmaps and interaction data " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Design validation " />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Why It Matters
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Maze helps designers <strong>make data-driven decisions</strong> by providing insights into how users navigate and interact with their designs.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This ensures that design improvements are based on actual user behavior rather than assumptions.
                                </Typography>
                            </Box>

                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    9. Zeplin – Bridging the Gap Between Designers and Developers
                                </Typography>
                                <Typography variant="body1">
                                    One of the biggest challenges in UI/UX design is the <strong>handoff process between designers and developers. </strong>
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Zeplin simplifies this process by converting design files into developer-friendly specifications.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Features
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Design specifications " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Style guides " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Asset management " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Collaboration tools" />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Benefits
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Zeplin ensures that developers receive <strong>accurate measurements, colors, fonts, and assets,</strong> reducing miscommunication and speeding up development.
                                </Typography>
                            </Box>

                            {/* Section 11 */}
                            <Box id="section11" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    10. Miro – Collaborative Brainstorming and User Journey Mapping
                                </Typography>
                                <Typography variant="body1">
                                    UI/UX design often begins with <strong>brainstorming, user journey mapping, and ideation.</strong>
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Miro is a collaborative online whiteboard that helps teams visualize ideas and plan product experiences.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Features
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Infinite canvas for brainstorming " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="User journey mapping templates" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Team collaboration tools " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Team collaboration tools " />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Why It’s Valuable
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Miro helps teams align their ideas before moving into design, ensuring that <strong>every design decision supports the overall user experience strategy.</strong>
                                </Typography>
                            </Box>

                            {/* Section 12 */}
                            <Box id="section12" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    11. Hotjar – Understanding Real User Behavior
                                </Typography>
                                <Typography variant="body1">
                                    Hotjar is a behavioral analytics tool that helps designers understand <strong>how users interact with websites and applications. </strong>
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Features
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Heatmaps " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Session recordings " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="User surveys " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Feedback tools " />
                                    </ListItem>
                                </List>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Why Designers Use It
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Hotjar provides valuable insights into <strong>user behavior, navigation patterns, and usability issues,</strong>  allowing designers to improve digital experiences based on real data.
                                </Typography>
                            </Box>
                            {/* Section 13 */}
                            <Box id="section13" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    12. How Choosing the Right Tools Improves UX Design
                                </Typography>
                                <Typography variant="body1">
                                    The right combination of UI/UX tools allows designers to:
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Improve design efficiency " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Test and validate ideas faster " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Collaborate better with teams " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Create consistent design systems " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Deliver user-centered digital products" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Modern UI/UX designers often combine multiple tools to create a <strong>complete design workflow from research to development handoff.</strong>
                                </Typography>
                            </Box>

                            {/* Section 14 */}
                            <Box id="section14" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    13. Future Trends in UI/UX Design Tools
                                </Typography>
                                <Typography variant="body1">
                                    The UI/UX design landscape is evolving rapidly. Emerging technologies are shaping the future of design tools.
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Some key trends include: 
                                    <br /> 
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    AI-Powered Design Assistance 
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    AI tools are helping designers automate repetitive tasks such as layout generation, design suggestions, and accessibility improvements. 
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Real-Time Collaboration 
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Cloud-based platforms are making it easier for distributed teams to collaborate in real time. 
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Advanced Prototyping 
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Future tools will allow designers to create <strong>highly realistic simulations of digital products</strong> before development begins.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Integration with Development Platforms 
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Modern design tools are increasingly integrating with coding environments to streamline the transition from design to development. 
                                    <br />
                                    <br />
                                </Typography>
                            </Box>

                            {/* Section 15 */}
                            <Box id="section15" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Final Thoughts
                                </Typography>
                                <Typography variant="body1">
                                    The role of a UI/UX designer has evolved significantly over the past decade. Today’s designers are expected to combine creativity with technical knowledge, research skills, and data-driven decision-making. 
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Mastering the right tools is essential for delivering intuitive, engaging, and high-performing digital experiences. 
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    From collaborative platforms like Figma to usability testing tools like Maze and Hotjar, each tool plays a unique role in the design process. By leveraging these technologies effectively, designers can build products that not only look great but also provide meaningful value to users. 
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                   As digital experiences continue to evolve, staying updated with the latest UI/UX design tools and trends will be key to remaining competitive in the industry. If you want to create user-focused digital products for your business, <Link href="/contactus">speak with our experts</Link> to explore the best UI/UX design strategies tailored to your needs. 
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

export default CompModenUIUXDesignerMaster;
