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
import Blog6 from "@/blog-real-estate-crm-soft.webp";

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
    { id: "section2", label: "Understanding the Real Estate Sales Challenge" },
    { id: "section3", label: "What Is Real Estate CRM Software?" },
    { id: "section4", label: "Turning Listings into Lead Magnets" },
    { id: "section5", label: "Centralized Lead Management: No More Missed Opportunities" },
    { id: "section6", label: "Faster and Smarter Follow-Ups" },
    { id: "section7", label: "Personalized Client Experiences at Scale" },
    { id: "section8", label: "Streamlining Site Visits and Property Tours" },
    { id: "section9", label: "Improving Team Collaboration and Accountability" },
    { id: "section10", label: "Data-Driven Decision Making" },
    { id: "section11", label: "Enhancing Post-Sale Relationships and Referrals" },
    { id: "section12", label: "Automation Without Losing the Human Touch" },
    { id: "section13", label: "Scaling Your Real Estate Business with Confidence" },
    { id: "section14", label: "Choosing the Right Real Estate CRM" },
    { id: "section15", label: "Final Thoughts" },
];

const CompRealEstateCrmSoft = () => {
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
                                    <Image src={Blog6} alt="real-estate-crm-software-boosts-sales" />
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
                                                From Listings to Leads: How Real Estate CRM Software Boosts Sales
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="blog-card-meta" sx={{ mb: 3 }}>
                                        <Box className="avtar-box">
                                            <Avatar
                                                alt="Kinjal Vaghasiya"
                                                src="/images/blog-avtar-kinjal.webp"
                                                className="blog-card-avatar"
                                            />
                                            <Typography
                                                variant="caption"
                                                className="blog-card-author"
                                            >
                                                Kinjal Vaghasiya
                                            </Typography>
                                        </Box>

                                        <Box className="blog-card-date-item">
                                            <Image
                                                src={Calender}
                                                alt="Date"
                                                className="blog-meta-icon"
                                            />
                                            <Typography variant="caption" className="blog-card-date">
                                                13th January, 2026
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
                                    The real estate industry has always been about relationships. Long before digital platforms, successful agents were those who remembered client preferences, followed up consistently, and stayed top of mind. Today, while the medium has changed, the principle remains the same. The difference is scale.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Modern real estate professionals manage hundreds of listings, inquiries from multiple channels, follow-ups, site visits, negotiations, and post-sale relationships—all at the same time. Relying on spreadsheets, notebooks, or memory alone is no longer practical. This is where real estate CRM software becomes not just helpful, but essential.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    A well-implemented CRM (Customer Relationship Management) system transforms scattered listings into qualified leads and casual inquiries into closed deals. It acts as the backbone of a sales-driven real estate operation, helping agents work smarter rather than harder.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Understanding the Real Estate Sales Challenge
                                </Typography>
                                <Typography variant="body1">
                                    Before diving into how CRM software boosts sales, it’s important to understand the core challenges real estate professionals face today.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    First, lead sources are fragmented. Inquiries come from property portals, social media ads, websites, WhatsApp messages, emails, phone calls, and walk-ins. Without a central system, leads often get lost or delayed.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Second, follow-ups are inconsistent. Many deals are lost not because the client wasn’t interested, but because the agent failed to follow up at the right time. According to industry observations, most buyers require multiple follow-ups before making a decision.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Third, data overload slows productivity. Property details, client preferences, documents, and communication history are often scattered across multiple tools and devices, making it difficult for teams to act quickly or make informed decisions. When professionals<Link href="/contactus"> use CRM for real estate business</Link>, all this information is centralized, reducing confusion and saving valuable time.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Finally, scaling becomes difficult as operations expand. As teams grow, coordination turns into a challenge, and without clear visibility into performance, managers struggle to understand what’s working and what isn’t. When companies<strong> use CRM for real estate business</strong>, they gain real-time insights across every stage of the sales funnel, enabling better collaboration, accountability, and consistent growth.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. What Is Real Estate CRM Software?
                                </Typography>

                                <Typography variant="body1">
                                    Real estate CRM software is a centralized platform designed specifically to manage property listings, leads, clients, communication, and sales workflows. Unlike generic CRM tools, real estate CRMs are tailored to industry-specific needs such as site visits, inventory management, deal stages, and broker coordination.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    At its core, a CRM stores and organizes data. But its real value lies in how it helps agents act on that data—faster, smarter, and more consistently.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Turning Listings into Lead Magnets
                                </Typography>
                                <Typography variant="body1">
                                   Listings are the foundation of any real estate business. However, simply having properties listed online does not guarantee leads.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                   A real estate CRM helps optimize listings by connecting them directly to lead capture systems. When a prospect clicks on a property ad, fills out a form, or sends an inquiry, the CRM instantly records the lead along with the property they are interested in.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                   This creates immediate context. Instead of calling a lead blindly, the agent knows exactly what the prospect viewed, which location they prefer, and their budget range. This makes the first interaction more personalized and relevant.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Additionally, many CRMs allow tagging and categorization of listings based on price, location, project status, and property type. This makes it easier to match new leads with the most suitable inventory, increasing conversion chances.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Centralized Lead Management: No More Missed Opportunities
                                </Typography>

                                <Typography variant="body1">
                                    One of the biggest advantages of real estate CRM software is centralized lead management.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Every inquiry, regardless of its source, flows into a single dashboard. Whether a lead comes from a property portal, social media campaign, website chatbot, or referral, it is captured automatically and assigned to the appropriate agent.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This eliminates manual entry and reduces human error. More importantly, it ensures that no lead goes unattended.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    With features like lead status tracking, agents can instantly see whether a lead is new, contacted, interested, scheduled for a site visit, or closed. This visibility helps prioritize efforts and focus on high-intent prospects.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Faster and Smarter Follow-Ups
                                </Typography>
                                <Typography variant="body1">
                                    Follow-up timing can make or break a deal. Studies consistently show that leads contacted within the first few minutes have a significantly higher chance of conversion.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Real estate CRM software enables automated follow-ups through emails, SMS, and messaging apps. Agents can set reminders, schedule callbacks, and even trigger automated messages based on lead behavior.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    For example:
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="If a lead views the same property multiple times, the CRM can alert the agent." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="If a prospect hasn’t responded in a few days, the system can send a gentle follow-up." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="After a site visit, an automated message can ask for feedback." />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                   This structured follow-up system ensures consistency without sounding robotic, especially when templates are personalized properly.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Personalized Client Experiences at Scale
                                </Typography>
                                <Typography variant="body1">
                                    Modern buyers and investors expect personalized experiences. They don’t want generic property suggestions; they want options that match their lifestyle, budget, and future plans.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    CRM software stores detailed client profiles, including preferences, past interactions, visited properties, and communication history. Over time, this data builds a clear picture of what each client is looking for.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    With this information, agents can:
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Share relevant listings instead of mass messages" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reference previous conversations naturally " />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Anticipate objections and questions" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Build trust through informed interactions" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                   Personalization is one of the strongest drivers of sales, and CRM systems make it scalable.
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Streamlining Site Visits and Property Tours
                                </Typography>
                                <Typography variant="body1">
                                    Site visits are a critical stage in the real estate sales process. Managing schedules, confirmations, and follow-ups manually can be time-consuming and error-prone.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Real estate CRMs simplify this by allowing agents to schedule site visits directly within the system. Clients receive automatic confirmations and reminders, reducing no-shows. 
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    After the visit, agents can record notes, client reactions, and next steps. This information is invaluable for future follow-ups and negotiations.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For team-based operations, managers can track how many site visits are happening, which properties are generating the most interest, and which agents are performing best.
                                    <br />
                                    <br />
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. Improving Team Collaboration and Accountability
                                </Typography>
                                <Typography variant="body1">
                                    In growing real estate firms, multiple agents often interact with the same lead at different stages. Without a shared system, this can lead to confusion, duplication, or missed communication.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    CRM software creates transparency. Every call, message, email, and meeting is logged under the lead’s profile. Team members can see what has already been discussed and what needs to be done next. 
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Managers benefit from real-time performance insights. They can track:
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Lead response times" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Conversion rates" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Pipeline value" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Agent productivity" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    This data-driven approach replaces guesswork with clarity and accountability.
                                </Typography>
                            </Box>

                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    9. Data-Driven Decision Making
                                </Typography>
                                <Typography variant="body1">
                                    One of the most powerful yet underutilized benefits of real estate CRM software is analytics.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    CRMs generate reports that reveal patterns and trends, such as:
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Which lead sources generate the highest-quality prospects" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Which properties convert faster" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Where leads drop off in the sales funnel" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="How long it takes to close a deal" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    With these insights, businesses can optimize marketing budgets, refine sales strategies, and focus on what truly drives revenue.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Instead of relying on intuition alone, decisions are backed by real data.
                                </Typography>
                            </Box>

                            {/* Section 11 */}
                            <Box id="section11" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    10. Enhancing Post-Sale Relationships and Referrals
                                </Typography>
                                <Typography variant="body1">
                                    The sale doesn’t end at closing. In real estate, referrals and repeat business are major growth drivers that depend heavily on how well relationships are maintained after the deal is done. CRM systems help manage post-sale engagement by storing important dates such as possession timelines, lease renewals, or anniversaries, ensuring no client interaction is overlooked.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    When combined with broader operational tools like<Link href="https://www.universalstreamsolution.com/blog/erp-systems-real-estate-development-2025"> ERP systems for real estate development</Link>, businesses can align client relationship data with project timelines, financial planning, and long-term asset management. Automated messages and updates allow agents to check in, share relevant market insights, and stay connected without manual effort.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Satisfied clients who feel remembered and valued are far more likely to recommend an agent to friends and family. Over time, this builds a strong referral network powered by consistent, well-structured relationship management rather than one-time transactions.
                                </Typography>
                            </Box>

                            {/* Section 12 */}
                            <Box id="section12" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    11. Automation Without Losing the Human Touch
                                </Typography>
                                <Typography variant="body1">
                                    A common misconception is that CRM automation makes interactions feel impersonal. In reality, it does the opposite when used correctly.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Automation handles repetitive tasks like data entry, reminders, and routine follow-ups. This frees agents to focus on meaningful conversations, negotiations, and client relationships.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    The key is to use automation as a support system, not a replacement for human interaction. Well-written templates, thoughtful timing, and personalized details ensure communication still feels genuine.
                                </Typography>
                            </Box>

                            {/* Section 13 */}
                            <Box id="section13" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    12. Scaling Your Real Estate Business with Confidence
                                </Typography>
                                <Typography variant="body1">
                                    As real estate businesses grow, complexity increases. More listings, more leads, larger teams, and higher expectations.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    CRM software provides the structure needed to scale without chaos. It creates repeatable processes, ensures consistency, and maintains quality even as volume increases.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Whether it’s a solo agent looking to improve efficiency or a large brokerage managing hundreds of transactions, CRM acts as the foundation for sustainable growth.
                                </Typography>
                            </Box>

                            {/* Section 14 */}
                            <Box id="section14" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    13. Choosing the Right Real Estate CRM
                                </Typography>
                               <Typography variant="body1">
                                    Not all CRM solutions are created equal. When selecting a real estate CRM, it’s important to consider factors such as: 
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Ease of use" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Customization options" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Integration with property portals and marketing tools" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Mobile accessibility" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reporting and analytics" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Customer support" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    The best CRM is one that fits your workflow and is adopted consistently by your team.
                                </Typography>
                            </Box>

                            {/* Section 15 */}
                            <Box id="section15" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    14. Final Thoughts
                                </Typography>
                                <Typography variant="body1">
                                    From listings to leads and from leads to loyal clients, real estate CRM software plays a crucial role in modern sales success. It bridges the gap between opportunity and execution, ensuring that no inquiry goes unnoticed and no relationship is neglected.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    In an industry driven by trust, timing, and personalization, CRM is no longer a luxury—it is a competitive necessity.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Agents who embrace CRM technology don’t just manage properties better; they build stronger relationships, close more deals, and create businesses that are ready for the future.
                                </Typography>
                            </Box>

                            <Box className="written-by-box">
                                <Box className="written-by-box-header">
                                    <Avatar
                                        src="/images/written-by-kinjal.webp" // Replace with actual image
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
                                                Kinjal Vaghasiya
                                            </Typography>
                                            <Link
                                                href="https://www.linkedin.com/in/kinjalvaghasiya/"
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
                                    Kinjal Vaghasiya is a healthcare industry expert and digital transformation strategist with over nine years of experience in driving innovation, app development, and AI-powered healthcare solutions. She is passionate about using technology to enhance patient care and operational efficiency.
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

export default CompRealEstateCrmSoft;
