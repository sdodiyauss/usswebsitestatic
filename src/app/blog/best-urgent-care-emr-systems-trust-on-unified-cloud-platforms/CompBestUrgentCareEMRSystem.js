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
import Blog6 from "@/blog-best-urgent-care-emr-systems.webp";

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
    { id: "section2", label: "Why Urgent Care Needs a Different Approach to EMR Technology" },
    { id: "section3", label: "One Platform Can Connect the Patient Journey" },
    { id: "section4", label: "Cloud Technology Makes Accessibility More Practical" },
    { id: "section5", label: "Interoperability Is Just as Important as the Cloud" },
    { id: "section6", label: "Where AI Can Add Value" },
    { id: "section7", label: "Customization Matters as Urgent Care Organizations Grow" },
    { id: "section8", label: "Choosing the Right Technology Stack" },
    { id: "section9", label: "What Should Urgent Care Organizations Look For?" },
    { id: "section10", label: "Conclusion" },
];

const CompBestUrgentCareEMRSystem = () => {
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
                                    <Image src={Blog6} alt="why-the-best-urgent-care-emr-systems-trust-on-unified-cloud-platforms" />
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
                                                Why the Best Urgent Care EMR Systems Trust on Unified Cloud Platforms
                                            </Typography>
                                            <Typography variant="body1" className="blog-card-excerpt">
                                                Five minutes at the clinic's front desk can change the whole day. Urgent medical care depends on speed. Patients always need easy access, clinicians need complete information and staff have to manage registration, documentation, billing and follow-up, causing unnecessary...
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
                                                21st October, 2026
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
                                    Five minutes at the clinic's front desk can change the whole day.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Urgent medical care depends on speed. Patients need easy access to care, clinicians need complete information, and staff have to manage registration, documentation, billing, and follow-up, all of which can cause unnecessary delays. When these activities depend on separate systems that do not communicate well, even a simple patient visit can become more complicated than it needs to be.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    This is one reason modern urgent care organisations are moving towards integrated cloud-based <Link href="/healthcare-tech/emr-software-development-company"><strong>EMR platforms</strong></Link>. Instead of connecting various disconnected applications, an integrated platform brings important clinical and administrative workflows into a single environment. The goal is not simply to have more technology. It is to create a smoother workflow for patients, providers, and staff.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Why Urgent Care Needs a Different Approach to EMR Technology
                                </Typography>
                                <Typography variant="body1">
                                    Urgent care clinics operate differently from traditional medical practices. Patient volumes can change quickly, visits are often unscheduled and providers need to make decisions with limited time. A patient may arrive with little medical history available, while the care team still needs accurate information provided about medications, allergies, previous conditions and recent treatment.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    A strong urgent care EMR system therefore needs to support more than digital documentation. Patient registration, intake, clinical notes, orders, medication management, coding, billing, reporting, and patient communication should work together.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    A collection of disconnected healthcare applications can create higher costs, IT problems, and workflow delays. A unified cloud platform can reduce these gaps by allowing connected systems to share information instead of requiring staff to move data manually between applications.
                                </Typography>

                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. One Platform Can Connect the Patient Journey
                                </Typography>
                                <Typography variant="body1">
                                    Consider a typical urgent care visit. A patient completes registration, provides insurance information, describes symptoms, gets treatment and eventually leaves with instructions or a prescription. Behind that simple experience are multiple operational steps.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    When each step is handled in a separate application, information may have to be entered more than once. A unified system can connect these activities so that information collected during intake can become part of the clinical workflow and later support billing and reporting.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    This type of integration is particularly valuable when an urgent care organization operates multiple locations. Cloud-based systems can give authorized users access to current information across locations, helping organizations maintain more consistent workflows as they grow.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Cloud Technology Makes Accessibility More Practical
                                </Typography>
                                <Typography variant="body1">
                                    A cloud-based EMR changes how healthcare organisations access and maintain their software. Instead of depending entirely on systems installed and managed at one physical location, authorised users can access applications through a secure internet connection.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    For urgent care groups with multiple facilities, this can simplify technology management. Updates, data availability, integrations, and system administration can be handled through a centralised environment rather than maintaining separate technology stacks at every location.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    However, cloud adoption should not be treated as a shortcut to security. Healthcare organisations still need appropriate access controls, encryption, monitoring, backups, vendor agreements, and compliance processes. Cloud technology is valuable because it can support centralised management, but the architecture still needs to be designed responsibly.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    This is where <Link href="/healthcare"><strong>HIPAA-compliant software development</strong></Link> and other healthcare-focused development approaches become relevant. Compliance should be considered from the architecture and development stages rather than added as an afterthought.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Interoperability Is Just as Important as the Cloud
                                </Typography>
                                <Typography variant="body1">
                                    A cloud-based EMR is only as useful as its ability to exchange information with other healthcare systems.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Patients may receive care from hospitals, primary care centres, laboratories, medical specialists, and other urgent care centres. Their information may exist across various systems. A modern EMR therefore needs practical interoperability capabilities.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    FHIR, or Fast Healthcare Interoperability Resources, is one of the important standards used for exchanging healthcare information. The Office of the National Coordinator for Health Information Technology explains that FHIR is designed to enable clinical and administrative health data to be exchanged efficiently and includes API specifications based on established web standards.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    This matters because an urgent care provider should not have to depend entirely on information manually entered by a patient or staff member when relevant information may already exist elsewhere.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    A well-designed platform can use APIs and healthcare interoperability standards to connect with appropriate external systems while maintaining proper authorisation and security controls.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Where AI Can Add Value
                                </Typography>
                                <Typography variant="body1">
                                    Artificial intelligence is becoming another component of modern healthcare technology, but it should support clinical workflows rather than create additional complexity.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    For example: AI can assist with documentation, information summarization, administrative processes, coding support and other repetitive activities. The Universal Stream Solution reference describes AI-assisted medical documentation and patient-record search as examples of how AI can be integrated into an urgent care workflow.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    The important point is integration. An AI tool that produces information but requires staff to copy and paste everything into an EMR may not provide much practical benefit.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    That is why Healthcare AI Technology should be evaluated according to how naturally it fits into the existing workflow. Similarly, AI Software Development for healthcare needs to consider data privacy, human oversight, clinical context, accuracy, and integration not simply the use of an AI model.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Customization Matters as Urgent Care Organizations Grow
                                </Typography>
                                <Typography variant="body1">
                                    Not every urgent care organisation operates in the same way. One practice may need occupational health workflows, while another may operate several locations with different staffing models and reporting requirements.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    This is where <Link href="/healthcare-tech/emr-software-development-company"><strong>custom EMR development</strong></Link> can provide an alternative to forcing every organisation into the same workflow. A customised platform can be designed around specific clinical processes, patient journeys, integrations, dashboards, and administrative requirements.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Customisation can also extend beyond the EMR itself. A custom business application can connect scheduling, operations, staff management, analytics, communication, billing, and other business processes with healthcare workflows.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    The objective should not be customisation for its own sake. A good system should make important processes simpler, reduce duplicate work, and provide useful information when people need it.
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Choosing the Right Technology Stack
                                </Typography>
                                <Typography variant="body1">
                                    The technology underneath a healthcare platform also matters. Development teams need to think about scalability, security, integrations, maintainability, performance, and long-term support.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    For organizations working with Microsoft technologies, .Net software development in USA can be used to build secure and scalable healthcare applications, APIs, business systems, and integration services. The technology itself, however, is only one part of the solution. Healthcare applications require experienced architecture and development practices that account for clinical workflows and regulatory expectations.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    This broader approach is often described as <strong>Healthtech Solutions</strong>—technology designed around the actual needs of healthcare organizations rather than simply adapting generic business software to a medical environment.
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. What Should Urgent Care Organizations Look For?
                                </Typography>
                                <Typography variant="body1">
                                    When evaluating an EMR platform, healthcare leaders should look beyond a feature checklist. The more important question is whether the system connects the workflows that staff and providers use every day.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Look for a platform that supports patient intake, clinical documentation, interoperability, billing, reporting, patient engagement, security, and scalability within a connected architecture. It should also provide a practical path for integrating emerging technologies such as AI without disrupting established workflows.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    A unified cloud platform does not automatically make an EMR successful. The quality of implementation, usability, interoperability, security, support, and ongoing optimization all matter.
                                </Typography>
                            </Box>

                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Conclusion
                                </Typography>
                                <Typography variant="body1">
                                    The future of urgent care technology is not simply about moving EMR software to the cloud. It is about creating connected systems that help information move securely between the right people and processes at the right time.
                                    <br />
                                    <br />
                                    For urgent care organizations, that can mean a more efficient patient journey, less repetitive administrative work, better access to information, and stronger visibility into daily operations.
                                    <br />
                                    <br />
                                    Whether an organization chooses an established platform or invests in customized healthcare software, the underlying principle remains the same: <strong>technology should fit the workflow, not make the workflow fit the technology.</strong>
                                    <br />
                                    <br />
                                    As urgent care continues to evolve, unified cloud platforms, interoperability, responsible AI, and healthcare-focused software development will increasingly shape how practices deliver efficient, connected care.
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

export default CompBestUrgentCareEMRSystem;
