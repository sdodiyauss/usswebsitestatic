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
import Blog4 from "@/blog-industry-skill-expert.webp";
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
    { id: "section2", label: "Why AI Literacy Is Becoming a Core Business Skill" },
    { id: "section3", label: "The Real Power of Strategic Thinking in a Noisy Digital World" },
    { id: "section4", label: "Moving Beyond Data Collection to Data Interpretation" },
    { id: "section5", label: "Personal Branding Is the New Resume" },
    { id: "section6", label: "Adaptability: The Skill That Keeps You Relevant" },
    { id: "section7", label: "The Growing Importance of Human Skills in a Tech-Driven World" },
    { id: "section8", label: "Collaboration Is the New Competitive Advantage" },
    { id: "section9", label: "Execution: Turning Knowledge Into Results" },
    { id: "section10", label: "Building a Future-Ready Mindset" },
    { id: "section11", label: "Conclusion" },
];

const CompSkillIndustryExperts = () => {
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
                                    <Image src={Blog4} alt="Custom-vs-Off-the-Shelf-Software" />
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
                                                Custom vs Off-the-Shelf Software: What Growing Businesses Should Choose
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
                                                1st April, 2026
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
                                    The expectations from industry experts have shifted dramatically over the past few years. Earlier, deep knowledge in a single domain was enough to establish authority. Today, however, expertise is judged by how well you can integrate knowledge, technology, and strategy to create real-world impact. In 2026, professionals are not just expected to “know” things—they are expected to apply, adapt, and scale their knowledge in dynamic environments.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This shift is largely driven by the rise of AI, global digital transformation, and evolving consumer behavior. Businesses are no longer looking for specialists who work in isolation; they want professionals who can think holistically, collaborate effectively, and drive measurable outcomes. This is why building a multi-dimensional skillset is no longer optional—it’s a necessity.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Why AI Literacy Is Becoming a Core Business Skill
                                </Typography>
                                <Typography variant="body1">
                                    AI is transforming how decisions are made, how content is created, and how businesses operate. But beyond tools and automation, what truly differentiates an expert is their ability to <strong>use AI strategically rather than blindly.</strong> In 2026, professionals who understand how to guide AI tools with clear instructions, refine outputs, and integrate them into workflows will outperform those who simply “use AI casually.”
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    AI literacy also involves understanding where human judgment is still critical. For instance, while AI can generate reports or content, it lacks contextual awareness, emotional nuance, and business intuition. Experts who combine AI efficiency with human insight will create more accurate, relevant, and impactful outcomes.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. The Real Power of Strategic Thinking in a Noisy Digital World
                                </Typography>
                                <Typography variant="body1">
                                    With information overload becoming the norm, strategic thinking has become one of the most underrated yet powerful skills. It’s easy to get lost in tactics—posting content daily, running ads, or implementing tools—but without a clear strategy, these efforts often fail to deliver meaningful results.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    An industry expert in 2026 must be able to step back and ask the right questions:
                                    <br />
                                    <br />
                                </Typography>
                                <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="What problem are we solving?" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Is this aligned with long-term business goals?" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="What are the risks and opportunities?" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1">
                                    Strategic thinking allows professionals to prioritize effectively, allocate resources wisely, and focus on initiatives that drive real growth rather than vanity metrics.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Moving Beyond Data Collection to Data Interpretation
                                </Typography>
                                <Typography variant="body1">
                                    Many professionals today have access to data, but very few truly understand how to interpret it—making this one of the most critical skills required for IT jobs in 2026. The real advantage no longer lies in simply having data, but in making sense of it quickly and accurately to drive meaningful outcomes.
                                    <br />
                                    <br />
                                    Industry experts must develop the ability to connect data points with business results. For example, instead of just tracking website traffic, professionals should analyze user behavior, conversion patterns, and drop-off points to uncover actionable opportunities. This shift from basic reporting to deep insight generation is what defines the <Link href="/career">skills required for IT jobs in 2026</Link> and separates average performers from high-impact decision-makers.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Personal Branding Is the New Resume
                                </Typography>
                                <Typography variant="body1">
                                    In a digital-first world, your online presence speaks before you do. Whether someone is hiring, collaborating, or evaluating your expertise—especially in a scalable software development company environment—they will likely check your digital footprint first. This makes personal branding a critical skill for professionals in 2026.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    But personal branding is not just about posting content—it’s about positioning yourself with clarity and consistency. Whether you're working in or representing a <strong>scalable software development company</strong>, you need to clearly communicate what you stand for, the problems you solve, and the value you bring to the table. What do you stand for? What problems do you solve? What insights can you offer?
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Experts who share valuable perspectives, real experiences, and actionable knowledge consistently build trust and credibility over time. This not only opens doors to opportunities but also strengthens their authority within their industry, especially for professionals associated with a <Link href="/about-us">scalable software development company</Link> aiming to build long-term digital credibility.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Adaptability: The Skill That Keeps You Relevant
                                </Typography>
                                <Typography variant="body1">
                                    If there’s one skill that ensures long-term success, it’s adaptability. The pace of change in technology, business models, and market demands means that what works today may become obsolete tomorrow.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Professionals who resist change often find themselves struggling to keep up, while those who embrace learning stay ahead. Adaptability is not just about learning new tools—it’s about being open to new ways of thinking, experimenting with new approaches, and evolving your mindset.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    In 2026, the most successful experts will not be the ones who know everything, but the ones who are willing to learn anything.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. The Growing Importance of Human Skills in a Tech-Driven World
                                </Typography>
                                <Typography variant="body1">
                                    While technology is advancing rapidly, human skills are becoming even more valuable. Emotional intelligence, communication, and empathy are now essential for leadership, collaboration, and client relationships.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    In high-stakes business environments, decisions are not made purely on logic—they are influenced by trust, relationships, and understanding. Experts who can communicate ideas clearly, handle conflicts effectively, and build strong professional relationships will always have an edge.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This balance between technical expertise and human understanding is what defines a truly well-rounded professional.
                                </Typography>
                            </Box>


                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Collaboration Is the New Competitive Advantage
                                </Typography>
                                <Typography variant="body1">
                                    No major success today happens in isolation. Whether it’s launching a product, running a campaign, or scaling a business, collaboration across teams is essential.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    In 2026, industry experts must be comfortable working with people from different backgrounds, skill sets, and perspectives. This requires not only communication skills but also the ability to align everyone toward a common goal.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Cross-functional collaboration leads to better ideas, faster execution, and more innovative solutions. Experts who can bridge gaps between teams—such as marketing and tech or sales and operations—become invaluable assets to any organization.
                                </Typography>
                            </Box>


                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. Execution: Turning Knowledge Into Results
                                </Typography>
                                <Typography variant="body1">
                                    Knowledge without execution has no value. One of the biggest gaps in today’s professional world is the ability to turn ideas into action.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Industry experts must develop a strong execution mindset—setting clear goals, taking ownership, and consistently delivering results. This includes tracking performance, identifying what’s working, and optimizing strategies accordingly.
                                    <br />
                                    <br />
                                    In a competitive landscape, those who execute effectively will always outperform those who only plan or analyze.
                                </Typography>
                            </Box>

                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    9. Building a Future-Ready Mindset
                                </Typography>
                                <Typography variant="body1">
                                    Ultimately, success in 2026 is not just about skills—it’s about mindset. A future-ready professional is someone who is curious, proactive, and resilient. They don’t wait for change to happen; they anticipate it and prepare for it.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This mindset allows experts to stay ahead of trends, identify opportunities early, and navigate challenges with confidence. It also encourages continuous improvement, which is essential in a world where standing still means falling behind.
                                </Typography>
                            </Box>

                            {/* Section 11 */}
                            <Box id="section11" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    10. Conclusion
                                </Typography>
                                <Typography variant="body1">
                                    The concept of being an “industry expert” is no longer static. It’s dynamic, evolving, and deeply connected to how well you can adapt to change, leverage technology, and deliver meaningful results.
                                    <br />
                                    <br />
                                    In 2026, expertise will be defined by a combination of AI understanding, strategic thinking, data intelligence, communication skills, and execution ability. Professionals who invest in these areas will not only stay relevant but also lead their industries.
                                    <br />
                                    <br />
                                    The future belongs to those who are not just skilled—but continuously evolving.
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
                                    Bharat Katariya is a seasoned executive at Universal Stream Solution LLC, bringing a strong track record of leadership and commercial strategy. With robust experience in driving business growth and operational transformation, he empowers organizations to build scalable, efficient solutions. Bharat is committed to delivering strategic value through innovation, collaboration, and integrity.
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

export default CompSkillIndustryExperts;
