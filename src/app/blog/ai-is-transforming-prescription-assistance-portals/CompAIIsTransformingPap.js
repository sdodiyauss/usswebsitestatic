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
import Blog6 from "@/blog-ai-is-transforming-pap-healthcare.webp";

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
    { id: "section2", label: "From Static Forms to Smart, Responsive Portals" },
    { id: "section3", label: "What Is a Prescription Assistance Portal?" },
    { id: "section4", label: "How AI Is Improving Prescription Assistance Portals" },
    { id: "section5", label: "The Role of Artificial Intelligence Tools Behind the Scenes" },
    { id: "section6", label: "Privacy, Accuracy, and Human Oversight Matter" },
    { id: "section7", label: "Conclusion" },
];

const CompAIIsTransformingPap = () => {
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
                                    <Image src={Blog6} alt="future-of-enterprise-software-ai-era" />
                                </CardMedia>

                                <CardContent className="blog-card-content">
                                    <Box>
                                        <Chip
                                            label="AI"
                                            size="small"
                                            className="blog-card-chip"
                                        />

                                        <Box className="blog-card-title-row">
                                            <Typography variant="h5" className="blog-card-title">
                                                How AI Is Transforming Prescription Assistance Portals in Healthcare
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
                                                10th September, 2026
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
                                    Prescription assistance portals have an important part of the healthcare experience, It's portals used to be simple digital forms is helping patients understand medication costs, find financial assistance, complete details, and track the status of support programs. However, many of these processes still involve manual data entry, complex eligibility requirements, phone calls, and long wait times.
                                    <br />
                                    <br />
                                    Today, Artificial intelligence experience looks very different. Hospitals or pharmacy and network health insurers are rebuilding these portals around intelligent systems that can read a prescription, flag a drug interaction than data analysis, natural language processing, and personalized digital support. <Link href="https://www.universalstreamsolution.com/healthcare">Healthcare automation</Link> can make prescription assistance easier to navigate while reducing administrative work.
                                    <br />
                                    <br />
                                    This shift is part of the broader growth of Artificial Intelligence in healthcare, where technology is increasingly being used to support administrative workflows, patient communication, and care delivery. HHS and CMS are also advancing interoperability and electronic prior authorization to reduce administrative friction around access to care.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. From Static Forms to Smart, Responsive Portals
                                </Typography>
                                <Typography variant="body1">
                                    Older prescription assistance portals work through one-way communication and manual data entry. Patients submit forms and details, and then human reviewers check and validate all the information, such as the disease, insurance, request, and doctor availability.
                                    <br />
                                    <br />
                                    Newer-generation portals built through modern AI healthcare software development work differently. They can read documents and submitted details, automatically send requests to the right department, check insurance availability faster, guide users, quickly show doctor availability, and ask relevant questions during the process.
                                    <br />
                                    <br />
                                    To support this process, technologies such as Natural Language Processing (NLP), predictive models, and automated document verification work together.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. What Is a Prescription Assistance Portal?
                                </Typography>
                                <Typography variant="body1">
                                    A <Link href="https://www.universalstreamsolution.com/healthcare-tech/prescription-assistance-portal">prescription assistance portal</Link> is a digital platform that helps patients and healthcare teams manage medication access programs.
                                    <br />
                                    <br />
                                    Depending on the organization, it may support:
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Prescription assistance program applications" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Patient eligibility screening" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Insurance and benefits information" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Prior authorization workflows" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Financial assistance documentation" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Application status tracking" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Patient notifications" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Communication between patients, providers, pharmacies, and support teams" />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    Traditional portals depend heavily on users entering information manually. This can create friction, particularly when patients need to understand complicated eligibility rules or provide documents from different sources.
                                    <br />
                                    <br />

                                    AI chatbot can make these interactions more responsive and personalized.
                                    <br />
                                    <br />
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. How AI Is Improving Prescription Assistance Portals
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    a. Smarter Eligibility Screening
                                </Typography>

                                <Typography variant="body1">
                                    AI can analyse patient information such as insurance status, medication, income, and program requirements to identify potentially relevant assistance programs. Instead of searching through multiple programs, patients can be guided toward options that may fit their situation. The eligibility result is only an indication, as final approval may require program-specific verification.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    b. More Personalized Patient Guidance
                                </Typography>

                                <Typography variant="body1">
                                    Prescription assistance can be confusing when patients are unsure about required documents, submission steps, or application status. Conversational AI can provide step-by-step guidance, explain why a document is needed, remind patients about incomplete sections, and answer common application questions. This is one way <strong>AI transforms patient engagement in healthcare</strong> by making the digital experience more responsive to patient needs.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    c. Automating Administrative Tasks
                                </Typography>

                                <Typography variant="body1">
                                    Healthcare staff often spend significant time reviewing forms, checking information, sending reminders, and updating application statuses. AI and workflow automation can help identify missing information, classify uploaded documents, route requests to the appropriate team, and generate routine notifications. With <strong>AI software development</strong>, repetitive tasks can be reduced while staff focus on cases that require human judgment or direct patient support.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    d. Supporting Prior Authorization
                                </Typography>

                                <Typography variant="body1">
                                    Prior authorization remains a major administrative challenge in healthcare. AI-enabled prescription portals can help organize clinical and administrative information before a request is submitted. They can identify potentially missing documentation, summarize relevant information for staff review, and route authorization requests through the appropriate workflow. AI should support these processes rather than independently replace clinical or coverage decisions.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    e. Predictive Reminders and Follow-Up
                                </Typography>

                                <Typography variant="body1">
                                    Patients may miss deadlines, forget to upload documents, or overlook application messages. AI can help identify when follow-up may be useful. A portal can send reminders when an application has been inactive or provide additional guidance when a patient appears to be stuck during the process. This can make prescription assistance more proactive instead of waiting for patients to contact support.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    f. Better Integration With Healthcare Systems
                                </Typography>

                                <Typography variant="body1">
                                    Modern prescription assistance platforms increasingly need to connect with electronic health records, payer systems, pharmacy workflows, and other healthcare applications. <Link href="/how-we-help/emerging-technology">AI healthcare software development</Link> can support this integration and improve information exchange through APIs and standards such as FHIR. The goal is to create a connected workflow where relevant information can move securely between systems while reducing repetitive data entry.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. The Role of Artificial Intelligence Tools Behind the Scenes
                                </Typography>
                                <Typography variant="body1">
                                    None of this happens without the right technical foundation. Healthcare providers are increasingly relying on a mix of artificial intelligence tools, machine learning models for eligibility prediction, optical character recognition (OCR) for scanning physical prescriptions, and rules-based engines that keep everything aligned with regulatory requirements like HIPAA.
                                    <br />
                                    <br />
                                    Building these systems responsibly requires careful AI software development practice: rigorous testing, human oversight at key decision points, and transparent logic that can be reviewed when a compliance team or regulator asks how a decision was made. This is a space where accuracy and accountability matter as much as speed, so organisations that invest in this technology tend to work with development teams who understand both software engineering and healthcare regulation.
                                </Typography>

                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Privacy, Accuracy, and Human Oversight Matter
                                </Typography>
                                <Typography variant="body1">
                                    Prescription assistance portals handle sensitive health and financial information, making privacy and security essential.
                                    <br />
                                    <br />
                                    AI systems also need safeguards against inaccurate recommendations, incomplete information, bias, and inappropriate automation. Human review remains important when decisions could affect medication access or patient care.
                                    <br />
                                    <br />
                                    Healthcare organizations should establish clear governance, monitor system performance, protect patient data, and provide patients with ways to reach a human representative when needed.
                                </Typography>

                            </Box>


                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Conclusion
                                </Typography>

                                <Typography variant="body1">
                                    AI is making prescription assistance portals more useful, easier to navigate, and less dependent on manual processes. From checking eligibility and guiding patients to managing documents, supporting prior authorization, and sending follow-up reminders, these capabilities can help simplify the overall assistance process.
                                    <br />
                                    <br />
                                    Healthcare organizations, the focus should not be on using AI everywhere, but on using it where it can solve real workflow and patient-access challenges. With proper privacy, security, accuracy checks, and human oversight, AI can support healthcare teams while giving patients a clearer and more convenient way to find and manage prescription assistance.
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

export default CompAIIsTransformingPap;
