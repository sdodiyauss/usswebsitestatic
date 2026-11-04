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
import Blog6 from "@/blog-how-to-build-a-hipaa-compliant.webp";

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
    { id: "section2", label: "Define Your Telehealth Platform’s Requirements" },
    { id: "section3", label: "Make HIPAA Compliance Part of the Architecture" },
    { id: "section4", label: "Choose a Scalable Technology Stack" },
    { id: "section5", label: "Integrate EMR and EHR Systems" },
    { id: "section6", label: "Automate Workflows and Introduce AI Carefully" },
    { id: "section7", label: "Test, Launch, and Maintain the Platform" },
    { id: "section8", label: "Build a Telehealth Platform That Can Grow with You" },
    { id: "section9", label: "Conclusion" },
];

const CompBuildHippaCompliant = () => {
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
                                    <Image src={Blog6} alt="build-hipaa-compliant-telehealth-platform" />
                                </CardMedia>

                                <CardContent className="blog-card-content">
                                    <Box>
                                        <Chip
                                            label="Healthcare"
                                            size="small"
                                            className="blog-card-chip"
                                        />

                                        <Box className="blog-card-title-row">
                                            <Typography variant="h5" className="blog-card-title">
                                                How to Build a HIPAA-Compliant Telehealth Platform for Healthcare Providers
                                            </Typography>
                                            <Typography variant="body1" className="blog-card-excerpt">
                                                Telehealth software platforms are changing how healthcare providers care, communicate with doctors and reach patients across locations. But creating a successful virtual care platform takes more than adding video calls. Healthcare organizations most importantly need secure data exchange, effective clinical...
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
                                                4th November, 2026
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
                                    Telehealth software platforms are changing how healthcare providers care, communicate with doctors and reach patients across locations. But creating a successful virtual care platform takes more than adding video calls. Healthcare organizations most importantly need secure data exchange, effective clinical workflows, reliable integrations, and a user-friendly experience.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    For healthcare technology leaders, product owners, and clinical decisionmakers in the United States and Canada, <Link href="/how-we-help/custom-software-development">Healthcare software development</Link> should balance patient privacy, operational efficiency, and long-term scalability.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    So, how do you build a platform that meets healthcare requirements while supporting business growth? Here are the essential steps.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Define Your Telehealth Platform’s Requirements
                                </Typography>
                                <Typography variant="body1">
                                    Start by identifying the problems your platform needs to solve. A virtual care solution for behavioural health providers may require different workflows than one designed for primary care, specialist consultations, or remote patient monitoring.
                                    <br />
                                    <br />
                                    Define your target users, care delivery model, and expected patient volume. Then map the complete journey, from consultation requests and appointment scheduling to specialist assignment, documentation, and follow-up.
                                    <br />
                                    <br />
                                    For example, a provider-to-provider telehealth platform should help hospitals request specialist consultations, coordinate availability, and securely share relevant patient information.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Prioritise an initial set of features:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Secure video consultations and messaging." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Appointment scheduling and specialist coordination." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Role-based access for clinicians and administrative staff." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Patient records and clinical documentation." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Integration with existing electronic health record (EHR) systems." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Reporting and operational analytics." />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    A clearly defined scope helps prevent unnecessary complexity and keeps development aligned with clinical needs.
                                </Typography>

                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Make HIPAA Compliance Part of the Architecture
                                </Typography>
                                <Typography variant="body1">
                                    <Link href="/healthcare"><strong>HIPAA-compliant telehealth software</strong></Link> must protect electronic protected health information (ePHI) throughout its lifecycle, including collection, transmission, storage, and access.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Under the HIPAA Security Rule, covered entities and business associates must implement appropriate administrative, physical, and technical safeguards. Compliance is not achieved simply by choosing a secure cloud provider or enabling encryption.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Your architecture should include:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Encryption for data in transit and at rest." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Strong authentication and role-based access controls." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Audit logs that record access to sensitive information." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Secure backups and disaster recovery procedures." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Documented incident response and risk management processes." />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Business associate agreements (BAAs) with applicable vendors handling PHI." />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    Conduct a security risk analysis before launch and repeat it as your platform evolves. Your team should also assess third-party integrations, user permissions, and data retention policies.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    For healthcare organisations serving multiple U.S. states or Canadian provinces, evaluate applicable state, provincial, and federal privacy requirements separately. HIPAA does not automatically cover every Canadian healthcare organisation, and additional privacy obligations may apply.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Choose a Scalable Technology Stack
                                </Typography>
                                <Typography variant="body1">
                                    Your technology stack should support secure communication, system integration, and growth without requiring a complete rebuild as your organization expands.
                                    <br />
                                    <br />
                                    Cloud platforms such as Microsoft Azure or AWS can provide infrastructure for healthcare applications, provided the specific services, configurations, and contractual arrangements support your compliance obligations.
                                    <br />
                                    <br />
                                    A modular architecture makes it easier to update individual components, onboard new healthcare partners, and maintain performance as consultation volumes increase.
                                    <br />
                                    <br />
                                    Consider using secure APIs and healthcare interoperability standards such as HL7 and FHIR to exchange information with existing EHR systems. This helps clinicians access relevant records without repeatedly entering the same information.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Integrate EMR and EHR Systems
                                </Typography>
                                <Typography variant="body1">
                                    Disconnected systems create extra administrative work and increase the risk of incomplete records. Custom EMR Solutions can help providers connect virtual consultations with clinical documentation, patient histories, and follow-up recommendations.
                                    <br />
                                    <br />
                                    Plan integrations around the systems your partners already use, such as Epic, Oracle Health, or MEDITECH. Define how consultation requests, clinical notes, patient identifiers, and status updates will move between systems.
                                    <br />
                                    <br />
                                    Its team developed a cloud-based platform for behavioural health coordination, supporting specialist assignments, consultation workflows, and integrations with partner EHR systems. The solution was projected to reduce manual coordination work by up to 40%.
                                    <br />
                                    <br />
                                    The takeaway is simple: design integrations around real clinical workflows, not just technical connectivity.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Automate Workflows and Introduce AI Carefully
                                </Typography>
                                <Typography variant="body1">
                                    Once the core platform is reliable, automation can reduce repetitive tasks and help teams manage growing workloads.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    <Link href="/how-we-help/emerging-technology"><strong>AI-powered healthcare software solutions</strong></Link> may support appointment prioritisation, administrative document drafting, workload balancing, and operational reporting. However, AI should be introduced with clear boundaries, appropriate validation, and human oversight for clinical decisions.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Avoid sending PHI to AI services unless their data handling, contractual terms, and configurations have been reviewed for compliance. Build appropriate access controls, logging, and review procedures into AI-enabled workflows.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Start with measurable administrative improvements before expanding into more complex clinical applications.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Test, Launch, and Maintain the Platform
                                </Typography>
                                <Typography variant="body1">
                                    Before launch, test security, usability, performance, integration reliability, and recovery procedures. Include clinicians and care coordinators in usability testing to identify workflow issues early.
                                    <br />
                                    <br />
                                    After deployment, monitor system performance, review access logs, address vulnerabilities, and update risk assessments as the platform changes. Compliance requires ongoing attention rather than a one-time technical check.
                                    <br />
                                    <br />
                                    For organizations seeking HIPAA Compliant Software USA development expertise or HIPAA Compliant Software Development Georgia Usa services, evaluate potential partners on healthcare experience, security practices, interoperability expertise, and post-launch support not location or marketing claims alone.
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Build a Telehealth Platform That Can Grow with You
                                </Typography>
                                <Typography variant="body1">
                                    Building a secure telehealth platform requires more than video functionality. It takes thoughtful architecture, practical clinical workflows, reliable integrations, and ongoing compliance management.
                                    <br />
                                    <br />
                                    For U.S. and Canadian healthcare decisionmakers, the strongest approach is to begin with clear requirements, prioritize patient privacy, and scale features as operational needs evolve.
                                    <br />
                                    <br />
                                    Ready to turn your telehealth idea into a secure, scalable healthcare solution? Partner with an experienced healthcare software development team to assess your requirements, define your architecture and plan.
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Conclusion
                                </Typography>
                                <Typography variant="body1">
                                    Building a HIPAA-compliant telehealth platform requires the right combination of security, scalable architecture, seamless EHR integration, and user-friendly clinical workflows. For healthcare providers across the USA and Canada, investing in reliable Healthcare Software Development can improve care coordination, reduce administrative burdens, and support long-term digital growth.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Whether you're launching a new virtual care platform or modernising an existing system, the key is to prioritise patient privacy, interoperability, and continuous improvement from day one.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    <strong>Ready to build a secure, scalable telehealth solution for your healthcare organisation?</strong>{" "}
                                    <Link href="https://www.universalstreamsolution.com/contact">
                                        <strong>Connect with our healthcare software development experts</strong>
                                    </Link>
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

export default CompBuildHippaCompliant;
