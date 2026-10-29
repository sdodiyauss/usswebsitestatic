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
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";

import BtnIcon from "@/btn-icon.svg?url";

import Blog2 from "@/blog-webdevelopment.webp";
import Blog3 from "@/blog-appdevelopment.webp";
import Blog5 from "@/blog-backenddevelopment.webp";
import Blog8 from "@/blog-healthcare-application-development-with-ai.webp";

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
    { id: "section2", label: "Practical Development Workflow" },
    { id: "section3", label: "Healthcare Workflow Requirements" },
    { id: "section4", label: "Choose the Right Application Architecture" },
    { id: "section5", label: "AI Into Practical Healthcare Workflows" },
    { id: "section6", label: "Develop a HIPAA-Compliant Application with Security in Mind" },
    { id: "section7", label: "Connect the Application with EHR and Existing Systems" },
    { id: "section8", label: "Test, Deploy, and Improve the Application" },
    { id: "section9", label: "Conclusion: Build Healthcare Technology Around People" },
];

const CompMobileAppDev = () => {
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
                                    <Image src={Blog8} alt="Healthcare Application Development with AI Workflow Integration: A Practical Guide" />
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
                                                Healthcare Application Development with AI Workflow Integration: A Practical Guide
                                            </Typography>
                                            <Typography variant="body1" className="blog-card-excerpt">
                                                Healthcare applications are not just about building digital. It is about connecting people, clinical information, and everyday workflows to help healthcare teams deliver more coordinated, accessible and efficient care.
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="blog-card-meta" sx={{ mb: 3 }}>
                                        <Box className="avtar-box">
                                            <Avatar
                                                alt="Raj Shah"
                                                src="/images/blog-avtar-raj.webp"
                                                className="blog-card-avatar"
                                            />
                                            <Typography
                                                variant="caption"
                                                className="blog-card-author"
                                            >
                                                Raj Shah
                                            </Typography>
                                        </Box>

                                        <Box className="blog-card-date-item">
                                            <Image
                                                src={Calender}
                                                alt="Date"
                                                className="blog-meta-icon"
                                            />
                                            <Typography variant="caption" className="blog-card-date">
                                                15th October, 2026
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
                                    Healthcare organizations across the United States are using digital technologies to manage patient information, streamline administrative processes and improve communication between patients and providers. From appointment scheduling and electronic health records to AI-assisted documentation, modern <Link href="https://www.universalstreamsolution.com/how-we-help/mobile-application-devlopment">healthcare applications</Link> are becoming an important part of daily operations.
                                    <br />
                                    <br />
                                    Clinicians are already using AI, so it is not a side experiment. The American Medical Association's 2026 survey found that 81 percent of physicians use AI in their practices, up from 38 percent in 2023. Physicians also reported an average of 2.3 use cases each, compared with 1.1 in 2023. The most common uses are documentation and research summaries, which are the same tasks that consume the most time in a clinic day.
                                    <br />
                                    <br />
                                    This practical guide explains how healthcare organizations can approach application development with AI workflow integration, from identifying operational needs to deployment and ongoing improvements.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Practical Development Workflow
                                </Typography>
                                <Typography variant="body1">
                                    Analyse Healthcare Requirements and Workflow → Application Planning and UI/UX Design → Application Development → AI Integration to proper workflow and Automation → AI Integration to proper workflow and Automation → EHR/EMR and Third-Party System Integration → Data Security with HIPAA Compliance → Testing on check Clinical Workflow Validation → Deployment, Staff Training and Maintenance
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Healthcare Workflow Requirements
                                </Typography>
                                <Typography variant="body1">
                                    Before starting healthcare application development, the first step is. All these regions to some different requirement on healthcare industries for example: USA based healthcare organizations need to first identify the operational challenges the application should address. A family medicine practice, a hospital and a specialty clinic may have different requirements, even when they use similar technologies.
                                    <br />
                                    <br />
                                    For example, a medical practice may struggle with appointment scheduling, repetitive documentation work, patient follow-ups delayed or disconnected billing systems. These problems can directly affect staff workload and the patient experience.
                                    <br />
                                    <br />
                                    First step is to map the existing workflow from patient registration and appointment booking to consultation, documentation, medical billing and patient follow-up. Talking with physicians, nurses, administrative staff, and patient's helps development teams understand where delays occur and which tasks could benefit from automation.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Choose the Right Application Architecture
                                </Typography>
                                <Typography variant="body1">
                                    First to requirements are defined and the next step is selecting an application structure that supports the organization's daily operations and future growth.
                                    <br />
                                    <br />
                                    Mobile App can provide patients with convenient access to appointments, prescriptions documentation, patient reminders and health information. For healthcare professionals, mobile applications can support secure access to schedules, clinical records and relevant patient updates.
                                    <br />
                                    <br />
                                    Custom application development is useful when an organization needs features that are not adequately supported by existing software. A clinic may require a patient portal connected to its scheduling system, while a larger healthcare organization may need a mobile application integrated with multiple clinical and administrative platforms.
                                    <br />
                                    <br />
                                    The architecture should also consider whether the application will operate on iOS, Android, web browsers or a combination of platforms. Cloud infrastructure, reliable APIs and modular services can help applications exchange information and accommodate future enhancements.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. AI Into Practical Healthcare Workflows
                                </Typography>
                                <Typography variant="body1">
                                    <Link href="https://www.universalstreamsolution.com/">Healthcare AI Technology</Link> can support several administrative and clinical workflows when implemented with appropriate oversight. Its value depends on the quality of the data, the purpose of the application and how healthcare professionals interact with its outputs.
                                    <br />
                                    <br />
                                    Consider a patient appointment workflow. When a patient submits an appointment request, an AI-enabled application may categorize the request, identify missing information and direct it to the appropriate administrative team. Automated reminders can then help patients prepare for scheduled visits.
                                    <br />
                                    <br />
                                    During consultations, AI documentation tools may generate draft clinical notes from conversations. A physician can review, correct and approve the notes before they become part of the official medical record.
                                    <br />
                                    <br />
                                    AI can also help summarize lengthy patient histories, organize incoming messages and identify documentation that may require attention. These capabilities can reduce repetitive administrative work, although their actual impact should be measured through testing in the intended clinical environment.
                                    <br />
                                    <br />
                                    The U.S. Food and Drug Administration distinguishes between certain clinical decision support functions and software functions that may fall under medical device oversight. Its January 2026 guidance explains that regulatory status depends on the software's intended use and specific functionality, including whether it provides certain patient-specific diagnostic or treatment outputs.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Develop a HIPAA-Compliant Application with Security in Mind
                                </Typography>
                                <Typography variant="body1">
                                    Patient privacy and information security should be considered from the beginning of development not added after the application is completed.
                                    <br />
                                    <br />
                                    A HIPAA Compliant Application must be designed around the applicable requirements of the HIPAA Privacy, Security and Breach Notification Rules, depending on the organization's role and how protected health information is handled.
                                    <br />
                                    <br />
                                    The HHS Security Rule establishes administrative, physical and technical safeguards for electronic protected health information. These include risk assessment, access controls, authentication, audit controls and transmission security.
                                    <br />
                                    <br />
                                    Practical developers should implement role-based permissions so employees can access only the information necessary for their responsibilities. Encryption, secure authentication, activity logs, regular security testing and controlled data retention can support a broader security program.
                                    <br />
                                    <br />
                                    Healthcare organizations review third-party AI services, cloud providers, analytics tools and integration partners that may handle protected health information. Where required, business associate agreements and appropriate safeguards must be established.
                                    <br />
                                    <br />
                                    HIPAA compliance is not achieved through a particular technology or a single security certificate. It requires ongoing organizational policies, risk management and technical controls appropriate to the system.
                                </Typography>
                            </Box>


                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Connect the Application with EHR and Existing Systems
                                </Typography>
                                <Typography variant="body1">
                                    Healthcare applications often need to exchange information with existing electronic health records, practice management platforms, laboratories, pharmacies and billing systems.
                                    <br />
                                    <br />
                                    <Link href="https://www.universalstreamsolution.com/healthcare-tech/emr-software-development-company">Custom EHR Development</Link> may be appropriate when an organization needs a specialized electronic health record system designed around its clinical workflows. However not every healthcare business needs to replace its existing EHR.
                                    <br />
                                    <br />
                                    For example: A patient-facing application could retrieve authorized appointment information from an existing EHR, allow patients to complete intake forms and send submitted information to the appropriate clinical workflow.
                                    <br />
                                    <br />
                                    Integration planning should address data formats, system permissions, identity matching, error handling and the accuracy of transferred records. Healthcare teams should test whether information remains consistent across connected systems.
                                    <br />
                                    <br />
                                    Interoperability standards and well-designed APIs can help support data exchange, but successful integration also depends on the capabilities and configuration of the systems involved.
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Test, Deploy, and Improve the Application
                                </Typography>
                                <Typography variant="body1">
                                    Before deployment application should undergo functional, security, integration and usability testing. Testing should include realistic workflows involving patients, administrative staff, and healthcare professionals.
                                    <br />
                                    <br />
                                    AI-enabled features require additional evaluation. Teams should check the accuracy of generated summaries, the handling of incomplete information and the system's behaviour when it encounters unexpected inputs. Clinical users should have a clear way to correct errors and report problems.
                                    <br />
                                    <br />
                                    A phased rollout can help organizations identify issues before expanding access across the entire practice. Staff training, documentation and a defined support process are also important for adoption. 
                                    <br />
                                    <br />
                                    After launch performance can be monitored through measures such as appointment completion rates, documentation time, application usage, error frequency and patient feedback. These measurements provide practical information about where improvements may be needed.
                                    <br />
                                    <br />
                                    <Link href="https://www.universalstreamsolution.com/healthcare">Healthcare application development</Link> is an ongoing process. Software updates, security reviews, user feedback, and changes in operational requirements should be included in the maintenance plan.
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Conclusion: Build Healthcare Technology Around People
                                </Typography>
                                <Typography variant="body1">
                                    Successful healthcare application development brings together practical workflows, secure information management, reliable integrations and carefully evaluated AI capabilities.
                                    <br />
                                    <br />
                                    For healthcare organizations, the development process should begin with real operational needs and continue through testing, deployment and ongoing improvement. Whether the project involves mobile applications, <Link href="https://www.universalstreamsolution.com/how-we-help/emerging-technology">AI workflows</Link> or custom EHR development, technology should support healthcare professionals while keeping patient privacy and safety central to the design.
                                    <br />
                                    <br />
                                    Organizations evaluating Health tech Solutions or Healthcare Application Development Services in USA can use this structured approach to define requirements, assess technical options and plan applications that fit their clinical and administrative environments.
                                </Typography>
                            </Box>


                            <Box className="written-by-box">
                                <Box className="written-by-box-header">
                                    <Avatar
                                        src="/images/written-by-raj.webp" // Replace with actual image
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
                                                Raj Shah
                                            </Typography>
                                            <Link
                                                href="https://www.linkedin.com/in/rajshah5599/"
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
                                    Raj Shah is a seasoned full-stack developer and technology leader specializing in Android, iOS and cross-platform solutions such as React Native and Kotlin. With extensive hands-on experience architecting next-gen mobile applications, Raj drives innovation, user-centric design and scalable digital platforms.
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

export default CompMobileAppDev;
