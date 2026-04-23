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
import Blog6 from "@/blog-transparency-or-overexposure.webp";

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
    { id: "section1", label: "Introduction: The Changing Nature of Trust at Work" },
    { id: "section2", label: "The Meaning of Workplace Transparency in Today’s Organizations" },
    { id: "section3", label: "Why Transparency Became a Modern Workplace Ideal" },
    { id: "section4", label: "When Transparency Starts Becoming Overexposure" },
    { id: "section5", label: "The Hidden Cost of Too Much Information" },
    { id: "section6", label: "Psychological Impact: Why Overexposure Reduces Trust" },
    { id: "section7", label: "The Communication Trap in Modern Workplaces" },
    { id: "section8", label: "Remote Work Has Amplified the Problem" },
    { id: "section9", label: "Strategic Transparency: The Smarter Alternative" },
    { id: "section10", label: "How Leaders Can Build Trust Without Overexposure" },
    { id: "section11", label: "The Future of Workplace Transparency" },
    { id: "section12", label: "Conclusion: Redefining Trust for Modern Workplaces" },
];

const CompTransparencyVSOverexposure = () => {
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
        { id: "p6", title: "The Ultimate Frontend Face-Off: AngularJS vs ReactJS", excerpt: "In today’s fast-moving world of frontend web development, one debate keeps coming up among develop...", author: "Hitesh khatwani", date: "May 5th, 2025", readTime: "6 min read", category: "Web Development", image: Blog2, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog/angularjs-vs-reactjs-frontend-faceoff" },
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
                                    <Image src={Blog6} alt="Buying vs Building Software: What Smart Businesses Are Doing Today" />
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
                                                Transparency or Overexposure? Redefining Trust in Modern Workplaces
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="blog-card-meta" sx={{ mb: 3 }}>
                                        <Box className="avtar-box">
                                            <Avatar
                                                alt="Jignesh Vaghasiya"
                                                src="/images/written-by-jignesh.webp"
                                                className="blog-card-avatar"
                                            />
                                            <Typography
                                                variant="caption"
                                                className="blog-card-author"
                                            >
                                                Jignesh Vaghasiya
                                            </Typography>
                                        </Box>

                                        <Box className="blog-card-date-item">
                                            <Image
                                                src={Calender}
                                                alt="Date"
                                                className="blog-meta-icon"
                                            />
                                            <Typography variant="caption" className="blog-card-date">
                                                17th April, 2026
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
                                    Introduction: The Changing Nature of Trust at Work
                                </Typography>
                                <Typography variant="body1">
                                    In modern workplaces, trust is no longer built only through policies, leadership behavior, or performance outcomes. It is increasingly shaped by how information flows inside an organization. Companies today are more connected, more digital, and more communicative than ever before.
                                    <br />
                                    <br />
                                   Transparency has become a symbol of healthy workplace culture. Leaders are encouraged to be open, share decisions, involve teams, and reduce secrecy. However, as organizations push toward greater openness, a new challenge has emerged that is often ignored<strong>—overexposure of information.</strong>
                                    <br />
                                    <br />
                                    While transparency is meant to build clarity and confidence, too much uncontrolled visibility can actually create confusion, emotional overload, and decision fatigue. Employees may feel informed, but not necessarily reassured.
                                    <br />
                                    <br />
                                    This raises a critical question for modern organizations: 
                                    <br />
                                    <strong>When does transparency stop building trust and start breaking it?</strong>
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. The Meaning of Workplace Transparency in Today’s Organizations
                                </Typography>
                                <Typography variant="body1">
                                    Workplace transparency refers to the intentional sharing of relevant information that helps employees understand business direction, decisions, and expectations. It is rooted in openness, honesty, and accountability.
                                    <br />
                                    <br />
                                    In healthy organizations, transparency ensures that employees are not left in the dark about major changes. It helps teams align with company goals and reduces uncertainty in day-to-day operations.
                                    <br />
                                    <br />
                                   However, transparency is not meant to eliminate boundaries. It is not about exposing every conversation, draft idea, or leadership debate. Instead, it is about structured communication that delivers clarity without unnecessary complexity.
                                    <br />
                                    <br />
                                    True transparency should simplify understanding—not multiply confusion.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Why Transparency Became a Modern Workplace Ideal
                                </Typography>
                                <Typography variant="body1">
                                    The rise of remote work, global teams, and digital collaboration tools has made transparency more important than ever. Employees no longer rely on physical proximity to understand what is happening within their organization.
                                    <br />
                                    <br />
                                    As a result, companies began adopting more open communication systems. Dashboards, shared documents, all-hands meetings, and instant messaging platforms became standard tools for visibility.
                                    <br />
                                    <br />
                                    The intention was positive: reduce hierarchy, increase inclusion, and build trust through openness. However, in practice, this shift also created an unintended consequence<strong>—information overload.</strong>
                                    <br />
                                    <br />
                                    The more organizations try to communicate everything, the harder it becomes for employees to identify what actually matters. 
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. When Transparency Starts Becoming Overexposure
                                </Typography>
                                <Typography variant="body1">
                                    Overexposure occurs when transparency goes beyond its purpose and begins to overwhelm employees with excessive, unfiltered, or premature information.
                                    <br />
                                    <br />
                                    Instead of clarity, employees are exposed to fragmented updates, evolving discussions, and incomplete decisions. This creates a sense of instability, even when no real problem exists.
                                    <br />
                                    <br />
                                    In such environments, employees may start to feel: 
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Constantly “plugged in” to internal noise" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Mentally drained by continuous updates" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Confused by changing directions" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Unsure about what information is actually important" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Overexposure does not increase awareness—it increases cognitive load.
                                    <br />
                                    <br />
                                    And when cognitive load increases, clarity decreases.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. The Hidden Cost of Too Much Information
                                </Typography>
                                <Typography variant="body1">
                                    Many leaders assume that more information automatically leads to better decision-making and stronger alignment. However, when it comes to <Link href="https://www.universalstreamsolution.com/blog/essential-skills-industry-experts-2026">emerging skills for professionals 2026</Link>, psychology suggests the opposite can often be true. 
                                    <br />
                                    <br />
                                    Human attention is limited. When employees are exposed to too many internal signals at once, their ability to prioritize weakens. They may spend more time processing updates than executing meaningful work.
                                    <br />
                                    <br />
                                    Over time, this leads to:
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reduced productivity due to constant context switching" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Emotional fatigue from continuous organizational updates" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Loss of focus on core responsibilities" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Decreased engagement with important priorities" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Instead of feeling empowered, employees may feel mentally scattered.
                                    <br />
                                    <br />
                                    This is the silent cost of overexposure.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Psychological Impact: Why Overexposure Reduces Trust 
                                </Typography>
                                <Typography variant="body1">
                                    Trust is not only a rational concept—it is deeply emotional. Employees do not just evaluate what they are told; they also evaluate how information makes them feel.
                                    <br />
                                    <br />
                                    Three psychological factors are especially important: 
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Cognitive Clarity
                                </Typography>
                                <Typography variant="body1">
                                    Employees need clear, structured information. When updates are fragmented or excessive, the brain struggles to form a stable understanding of reality.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Emotional Stability
                                </Typography>
                                <Typography variant="body1">
                                    Constant exposure to shifting decisions or internal debates can create anxiety. Even neutral updates may feel alarming when context is missing.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Perceived Control
                                </Typography>
                                <Typography variant="body1">
                                    Trust increases when employees feel they understand their environment. Overexposure can create the opposite effect—making people feel overwhelmed and less in control. 
                                    <br />
                                    <br />
                                    When these three elements are disrupted, trust naturally weakens.
                                </Typography>
                            </Box>


                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. The Communication Trap in Modern Workplaces
                                </Typography>
                                <Typography variant="body1">
                                    Many organizations fall into a communication trap: they believe that silence creates distrust, so they respond by increasing communication volume.
                                    <br />
                                    <br />
                                     However, this often results in a noisy environment where important messages get buried under routine updates.
                                    <br />
                                    <br />
                                     In the context of <Link  href="https://www.linkedin.com/pulse/building-company-culture-outperforms-strategy-jignesh-vaghasiya-vwlmc">organizational culture and business success</Link>, such systems cause employees to ignore communication altogether not because they lack interest, but because they cannot mentally process everything they receive. 
                                    <br />
                                    <br />
                                     This leads to a paradox: 
                                    <br />
                                    <br />
                                    <strong>The more organizations communicate, the less communication is actually absorbed. </strong>
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Remote Work Has Amplified the Problem
                                </Typography>
                                <Typography variant="body1">
                                    The shift toward remote and hybrid work has significantly increased transparency—but also increased exposure to unnecessary information. 
                                    <br />
                                    <br />
                                    Digital platforms make it easy to share updates instantly, but they also remove natural filters that previously existed in physical workplaces.
                                    <br />
                                    <br />
                                    As a result, employees are now exposed to: 
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Constant notifications across multiple platforms" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Real-time visibility into unfinished discussions" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Written communication without emotional context" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Continuous updates across time zones" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    This creates an environment where employees are always “on,” even when they are not working.
                                    <br />
                                    <br />
                                    Without boundaries, transparency becomes digital exhaustion. 
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. Strategic Transparency: The Smarter Alternative
                                </Typography>
                                <Typography variant="body1">
                                    The solution is not to reduce transparency, but to make it more intentional. This approach is known as strategic transparency.
                                    <br />
                                    <br />
                                   Strategic transparency focuses on delivering the right level of information based on relevance, timing, and audience.
                                    <br />
                                    <br />
                                    Instead of sharing everything broadly, organizations should focus on: 
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Delivering summarized insights instead of raw data  " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Sharing finalized decisions instead of early-stage confusion" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Tailoring communication based on role relevance" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Providing context along with every update" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    This ensures that employees receive clarity without being overwhelmed.
                                    <br />
                                    <br />
                                    Strategic transparency is not about restriction—it is about precision.
                                </Typography>
                            </Box>

                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    9. How Leaders Can Build Trust Without Overexposure
                                </Typography>
                                <Typography variant="body1">
                                    Leadership plays a central role in balancing transparency and information overload. Effective leaders act as filters, not just broadcasters.
                                    <br />
                                    <br />
                                    They ensure that employees are informed, but not overloaded. They provide context, not just updates. And most importantly, they understand that trust is built through clarity, not volume. 
                                    <br />
                                    <br />
                                    Strong leadership communication focuses on: 
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Explaining the “why” behind decisions" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Avoiding unnecessary internal noise" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Communicating uncertainty responsibly" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Maintaining consistency across messages" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    When leaders communicate with intention, transparency becomes a source of stability rather than stress. 
                                </Typography>
                            </Box>

                            {/* Section 11 */}
                            <Box id="section11" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    10. The Future of Workplace Transparency
                                </Typography>
                                <Typography variant="body1">
                                    As workplaces continue to evolve, transparency will remain a core expectation. However, its definition is shifting. 
                                    <br />
                                    <br />
                                    The future will not reward organizations that share the most information. Instead, it will reward those that share information in the most meaningful way.
                                    <br />
                                    <br />
                                    Artificial intelligence, automation, and digital tools will continue to increase visibility inside organizations. But without thoughtful communication design, this visibility can quickly turn into overload.
                                    <br />
                                    <br />
                                    The most successful companies of the future will not practice radical transparency—they will practice <strong>balanced transparency.</strong>
                                    <br />
                                    <br />
                                    They will understand that trust is not built by showing everything, but by showing what truly matters.
                                </Typography>
                            </Box>

                            {/* Section 12 */}
                            <Box id="section12" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Conclusion: Redefining Trust for Modern Workplaces
                                </Typography>
                                <Typography variant="body1">
                                   Transparency remains one of the most important pillars of modern organizational culture. However, when it becomes excessive or unstructured, it turns into overexposure—creating confusion instead of clarity. 
                                    <br />
                                    <br />
                                    The key to building long-term trust is not maximum openness, but meaningful communication. In today’s digital landscape, the <Link  href="/about-us">role of technology in business growth</Link> also plays a crucial part in enabling structured and effective communication. 
                                    <br />
                                    <br />
                                     When organizations learn to balance transparency with structure, employees feel informed without being overwhelmed, included without being exposed, and engaged without being mentally overloaded.
                                    <br />
                                    <br />
                                    In the end, true workplace trust is not about how much people know—it is about how clearly they understand what they need to know. 
                                </Typography>
                            </Box>

                            <Box className="written-by-box">
                                <Box className="written-by-box-header">
                                    <Avatar
                                        src="/images/written-by-jignesh.webp" // Replace with actual image
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
                                                Jignesh Vaghasiya
                                            </Typography>
                                            <Link
                                                href="https://www.linkedin.com/in/jignesh-vaghasiya24/"
                                                className="written-by-icon"
                                                
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
                                    Jignesh Vaghasiya is a visionary tech entrepreneur and CEO with over 15 years of experience in driving digital transformation and business growth. He specializes in AI, mobile app innovation, and scalable tech strategies that empower global enterprises.
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

export default CompTransparencyVSOverexposure;
