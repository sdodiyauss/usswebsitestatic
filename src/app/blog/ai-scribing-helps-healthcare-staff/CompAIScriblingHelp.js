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
import Blog6 from "@/blog-how-ai-scribing-helps-healthcare-staff.webp";

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
    { id: "section2", label: "What Is AI Scribing in Healthcare?" },
    { id: "section3", label: "Why Documentation Takes So Much Time" },
    { id: "section4", label: "How AI Scribing Reduces Documentation Work" },
    { id: "section5", label: "More Time for Patients" },
    { id: "section6", label: "AI Scribing and EHR Integration" },
    { id: "section7", label: "Connecting Documentation With the Larger Healthcare Workflow" },
    { id: "section8", label: "What Healthcare Organizations Should Consider Before Implementing AI Scribing" },
    { id: "section9", label: "The Future of AI Medical Software" },
    { id: "section10", label: "Conclusion" },
];

const CompAIScriblingHelp = () => {
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
                                    <Image src={Blog6} alt="how-ai-scribing-helps-healthcare-staff" />
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
                                                How AI Scribing Helps Healthcare Staff Spend Less Time on Documentation
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
                                                12th october, 2026
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
                                    Patient documentation is an essential part of healthcare, but it can also take a significant amount of time. Physicians, nurses, and other healthcare professionals may spend hours documenting patient visits, updating records, reviewing notes, and completing administrative tasks after the patient has left.
                                    <br />
                                    <br />
                                    For USA-based healthcare organizations, the challenge is not whether documentation is necessary. It is how to complete it efficiently without taking attention away from patients.
                                    <br />
                                    <br />
                                    AI scribing is becoming an important <Link href="/healthcare">healthcare technology</Link>. AI scribes listen to the patient and doctor talk, identify relevant information and create a structured draft of the clinical note for review purposes. Research and real-world implementations have reported reductions in documentation time, although results can vary by workflow, specialty, and implementation.
                                    <br />
                                    <br />
                                    An AI scribing device uses a microphone to capture the conversation between a healthcare provider and a patient. Using artificial intelligence, speech recognition, and natural language processing, it can identify relevant information from the conversation and help turn it into clinical documentation.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. What Is AI Scribing in Healthcare?
                                </Typography>
                                <Typography variant="body1">
                                    An AI scribing device uses a microphone to capture the conversation between a healthcare provider and a patient. Using artificial intelligence, speech recognition, and natural language processing, it can identify relevant information from the conversation and help turn it into clinical documentation.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Instead of asking providers to type every detail during or after an appointment, an AI medical scribe can capture the conversation, organise the key information, and create a draft clinical note.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    The provider remains in control. They can review the generated note, make corrections, add important details, and approve the final documentation. The goal is not to replace clinical judgment; it is to reduce repetitive documentation work and give healthcare professionals more time to focus on their patients.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Modern AI scribing solutions can also support documentation related to symptoms, medical history, assessments, treatment plans, medications, referrals, and other important details discussed during a patient visit.
                                </Typography>

                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Why Documentation Takes So Much Time
                                </Typography>
                                <Typography variant="body1">
                                    Documentation involves much more than typing a few sentences.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Healthcare staff may need to:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Record patient symptoms and medical history" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Document assessments and treatment plans" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Update electronic health records" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Enter medications and orders" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Prepare referrals" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Review previous patient information" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Complete documentation after appointments" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Coordinate information with billing and administrative teams" />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    When these tasks are repeated throughout a busy day, even a few extra minutes per patient can become hours of administrative work each week.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    A <strong>2024 healthcare survey</strong> cited by reported that <strong>59%</strong> of respondents spent five or more hours per week on documentation.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. How AI Scribing Reduces Documentation Work
                                </Typography>
                                <Typography variant="body1">
                                    An AI scribe can help medical staff move documentation from a manual, after-the-visit task toward a more automated workflow.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    During a patient consultation, the system can capture the conversation and convert relevant discussion into structured information. It can then generate a draft note that the provider reviews and edits before finalising.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    This can reduce repetitive typing and information entry.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    <strong>For Example:</strong> Instead of spending additional time reconstructing a conversation after a patient visit, a provider can review an AI-generated draft, correct anything necessary, and complete the record.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Recent research has found that ambient AI scribe use can be associated with reductions in documentation time, although the actual benefit depends on the clinical environment and how the technology is used.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. More Time for Patients
                                </Typography>
                                <Typography variant="body1">
                                    One of the most practical benefits of AI scribing is the potential to reduce screen time during patient discussions.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    When providers are not constantly switching between conversation and manual note-taking, they can maintain more attention on the patient.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    This does not mean technology should replace documentation. Instead, the goal is to allow technology to handle repetitive documentation while healthcare professionals remain responsible for listening, assessing, communicating, and making clinical decisions.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Healthcare organisations using AI scribing have reported that time saved from documentation can be redirected toward patient care, additional clinical responsibilities, or completing work during normal business hours.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. AI Scribing and EHR Integration
                                </Typography>
                                <Typography variant="body1">
                                    AI scribing becomes more useful when it works with the healthcare organization's existing technology.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    <strong>For Example:</strong> <Link href="/healthcare-tech/emr-software-development-company"><strong>EHR Software Development</strong></Link> can incorporate AI-powered documentation into broader electronic health record workflows. Instead of creating another disconnected application, healthcare organisations can design Software Solutions that connect documentation, patient records, scheduling, billing, and other operational processes.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    This is where Custom Software Development can provide flexibility. A healthcare organisation may have specific documentation requirements that cannot be addressed effectively by a generic application.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    With the right architecture, <Link href="/how-we-help/web-design-and-development"><strong>.NET Software Development</strong></Link> can also be used to build secure healthcare applications, APIs, workflow systems, and integrations that connect different healthcare platforms.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Connecting Documentation With the Larger Healthcare Workflow
                                </Typography>
                                <Typography variant="body1">
                                    AI scribing should not be viewed as an isolated technology.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Documentation is connected to many other healthcare processes. Once information is captured correctly, it may support billing, reporting, patient communication, clinical workflows, and administrative operations.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    <strong>For Example:</strong> Organisations investing in Medical Billing Software can consider how clinical documentation connects with billing workflows. Similarly, AI Medical Billing Software can support automation and data processing around revenue-cycle activities.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Other healthcare applications can also benefit from connected workflows, including Hospital Pharmacy Software, patient portals, scheduling systems, and clinical management platforms.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    The objective is to create a connected technology environment where information moves efficiently instead of being manually entered multiple times.
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. What Healthcare Organizations Should Consider Before Implementing AI Scribing
                                </Typography>
                                <Typography variant="body1">
                                    AI scribing can provide meaningful workflow benefits, but implementation requires careful planning.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Healthcare organisations should consider:
                                    <br />
                                    <br />
                                    <strong>EHR Integration:</strong> Can an AI scribe connect with the organisation's current EHR and workflow?
                                    <br />
                                    <br />
                                    <strong>Accuracy and Review:</strong> Can providers easily review, correct, and approve generated documentation?
                                    <br />
                                    <br />
                                    <strong>Privacy and Security:</strong> Does the solution support appropriate healthcare data protection and organisational security requirements?
                                    <br />
                                    <br />
                                    <strong>Workflow Fit:</strong> Will the technology simplify the existing process or create another system that staff must manage?
                                    <br />
                                    <br />
                                    <strong>Scalability:</strong> Can the solution support additional providers, locations, specialties, and future healthcare technology requirements?
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    A successful implementation should focus on the complete workflow rather than simply adding an AI tool.
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. The Future of AI Medical Software
                                </Typography>
                                <Typography variant="body1">
                                    AI is becoming part of a broader transformation in healthcare technology. <Link href="/how-we-help/emerging-technology"><strong>AI Medical Software</strong></Link> can support documentation, workflow automation, patient communication, medical billing, analytics, and other administrative processes.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    AI scribing is one practical solution because it addresses a common problem: the amount of time healthcare professionals spend documenting patient encounters.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    The most effective approach is not necessarily about adding more technology. It is about using technology where it can remove repetitive work while keeping healthcare professionals in control of important decisions.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    For healthcare organisations considering their next technology investment, AI scribing can be one component of a larger digital strategy that connects EHR systems, billing, pharmacy, patient engagement, and operational workflows.
                                </Typography>
                            </Box>

                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Conclusion
                                </Typography>
                                <Typography variant="body1">
                                    AI scribing can help healthcare organisations reduce the time and effort spent on routine patient documentation. By capturing patient and doctor conversations and turning relevant information into draft clinical notes, it allows providers to spend less time typing and more time focusing on patient care.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    The real value comes when AI scribing works as part of a healthcare technology environment. With the right <strong>EHR Software Development</strong>, <strong>Custom Software Development</strong>, and <Link href="/how-we-help/emerging-technology"><strong>AI Medical Software</strong></Link>, organisations can build workflows that connect documentation with billing, patient records, pharmacy, and other daily operations.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    If your healthcare team is looking for ways to reduce manual documentation and improve workflow efficiency, exploring an AI-powered software solution could be a practical next step.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Ready to explore a healthcare software solution built around your workflow?
                                </Typography>

                                <Typography variant="body1">
                                    <Link href="https://calendly.com/jvaghasiya-universalstreamsolution/30min">
                                        <strong>Contact our team</strong>
                                    </Link><strong> to discuss your requirements and find the right approach for your organisation.</strong>
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

export default CompAIScriblingHelp;
