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
// import Blog1 from "@/blog-healthcare.webp";
// import Blog2 from "@/blog2.webp";
// import Blog3 from "@/blog3.webp";

import Blog1 from "@/blog-healthcare.webp";
import Blog2 from "@/blog-webdevelopment.webp";
import Blog3 from "@/blog-appdevelopment.webp";
import Blog4 from "@/blog-ai.webp";
import Blog5 from "@/blog-backenddevelopment.webp";
import Blog6 from "@/blog-ai-and-ml.webp";

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
    { id: "section2", label: "Building a Smarter Digital Backbone" },
    { id: "section3", label: "Diagnostics That Are Faster and More Accurate" },
    { id: "section4", label: "Predictive Analytics: Preventing Health Problems" },
    { id: "section5", label: "Modernizing Pharmacies" },
    { id: "section6", label: "Streamlining Hospital Operations" },
    { id: "section7", label: "Telemedicine and Remote Monitoring" },
    { id: "section8", label: "AI-Supported Clinical Decision Making" },
    { id: "section9", label: "Keeping Healthcare Human" },
    { id: "section10", label: "Leading The Transformation" },
    { id: "section11", label: "Transform Your Healthcare Practice with Smart Technology" },
];

const CompBlogAIAndMachineLearning = () => {
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
        { id: "p6", title: "The Ultimate Frontend Face-Off: AngularJS vs ReactJS", excerpt: "In today’s fast-moving world of frontend web development, one debate keeps coming up among develop...", author: "Hitesh Khatwani", date: "May 5th, 2025", readTime: "6 min read", category: "Web Development", image: Blog2, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog-web-development" },
        { id: "p7", title: "Why Flutter Remains the MVP King in 2025", excerpt: "In today’s fast-paced digital landscape, launching a Minimum Viable Product (MVP) swiftly and effi...", author: "Bharat Katariya", date: "May 28th, 2025", readTime: "6 min read", category: "Mobile App Development", image: Blog3, avatarImage: "/images/blog-avtar-bharat.webp", featured: false, url: "/blog-mobile-app-development" },
        // { id: "p8", title: "DeepSeek vs ChatGPT: A Comprehensive Comparison of AI-Powered Chatbots", excerpt: "Artificial Intelligence (AI) has transformed the way we engage with technology, and AI-driven cha...", author: "Dilip Tiwari", date: "March 10th, 2025", readTime: "6 min read", category: "AI", image: Blog4, featured: false, url: "/blog-details8" },
        { id: "p9", title: "Django vs. Flask: Which Web Framework Should You Choose?", excerpt: "Introduction: Choosing Your Python Web Framework In the world of Python web development, two framew...", author: "Hitesh Khatwani", date: "April 14th, 2025", readTime: "6 min read", category: "Web Development", image: Blog5, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog-django-vs-flask" },
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
                                    <Image src={Blog6} alt="How AI and Machine Learning Are Transforming Healthcare" />
                                </CardMedia>

                                <CardContent className="blog-card-content">
                                    <Box>
                                        <Chip
                                            label="Artificial intelligence (AI)"
                                            size="small"
                                            className="blog-card-chip"
                                        />

                                        <Box className="blog-card-title-row">
                                            <Typography variant="h5" className="blog-card-title">
                                                AI and Machine Learning Are Transforming Healthcare
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
                                                3rd November, 2025
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
                                    Healthcare has changed dramatically over the last decade. A few years ago, patient records were scattered across labs, clinics, and paper files. Doctors spent more time looking for information than treating patients.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Today, artificial intelligence (AI) and machine learning (ML) help healthcare teams make smarter decisions. They don’t replace doctors—they give clinicians more time to focus on patients and improve care quality.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Building a Smarter Digital Backbone
                                </Typography>
                                <Typography variant="body1">
                                    Have you ever walked into a clinic and wished the doctor had your complete records instantly? With a digital healthcare platform, this is now possible. Clinics partnering with a <Link
                                        href="/healthcare-tech/online-offline-pharmacy"> healthcare app development company for clinic</Link> or a trusted technology partner can centralize patient data, appointments, and treatment history in a single, secure system.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Diagnostics That Are Faster and More Accurate
                                </Typography>
                                <Typography variant="body1">
                                    Medical imaging has seen a remarkable transformation. AI algorithms can analyze thousands of scans in minutes, catching subtle patterns that humans might miss. Tiny lung nodules, early diabetic retinopathy, or small mammogram anomalies can be flagged automatically.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    When a clinic software solution integrates AI tools, even mid-sized hospitals can provide advanced diagnostics without investing in costly equipment. In many cases, partnering with a digital healthcare platform provider ensures these insights reach clinicians in real-time, improving patient care.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For instance, a patient at a community clinic avoided a late-stage diagnosis because AI-assisted imaging identified the problem early. Early detection like this can be life-changing.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Predictive Analytics: Preventing Health Problems
                                </Typography>
                                <Typography variant="body1">
                                    Imagine if doctors could predict potential health issues before symptoms appear. Predictive analytics makes this possible. By analyzing patient history, wearable device data, and genetic information, AI can identify risks for heart disease, diabetes, and hypertension.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Clinics using dashboards created by a technology partner for clinic operations can take early action. Patients may receive preventive guidance or lifestyle recommendations before complications arise. Integrating these dashboards into a digital healthcare platform ensures data is easy for staff to use and apply.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Proactive care improves outcomes and reduces unnecessary hospital visits. Patients get tailored care before emergencies happen.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Modernizing Pharmacies
                                </Typography>
                                <Typography variant="body1">
                                    Pharmacies are no longer just dispensaries. With <Link href="/how-we-help/mobile-application-devlopment"> pharmacy mobile app development</Link>, pharmacists can track inventory, manage prescriptions, and communicate efficiently with patients. AI can remind patients to refill medications, suggest alternatives if a drug is unavailable, and forecast local demand. Using a mobile pharmacy solution mid-workflow helps ensure the right medicines reach the right patients at the right time.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For example, a rural patient avoided traveling 50 miles for a prescription because an AI-enabled pharmacy app arranged timely delivery. Small improvements like this have a huge impact on everyday healthcare experiences.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Accelerating Drug Discovery
                                </Typography>
                                <Typography variant="body1">
                                    Developing new drugs used to take a decade or more. AI changes this by analyzing molecular interactions and predicting promising compounds.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Pharmaceutical companies working with a digital healthcare platform provider can screen vast chemical libraries in days, not years. Integrating a clinic software solution allows patient data and research findings to inform the discovery process, speeding up innovation.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Real-world results show that AI-assisted drug discovery reduces the time from lab to patient dramatically.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Streamlining Hospital Operations
                                </Typography>
                                <Typography variant="body1">
                                    AI also improves hospital administration. Predictive models estimate patient admissions, helping staff allocation and resource planning. Virtual assistants manage appointments, follow-ups, and insurance questions, while billing systems detect errors automatically.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Hospitals that integrate these capabilities with a clinic software solution streamline workflows across departments. Combining this with services from a digital healthcare platform provider ensures staff and patients experience efficiency throughout their care journey.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Even small operational improvements make a noticeable difference in both patient satisfaction and staff productivity.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Telemedicine and Remote Monitoring
                                </Typography>
                                <Typography variant="body1">
                                    Telemedicine is no longer optional—it’s essential. AI-enabled platforms let patients consult doctors from home, while wearables track heart rate, oxygen levels, and glucose continuously.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    If readings are abnormal, AI notifies both the patient and provider. When combined with a mobile pharmacy solution, patients can refill prescriptions, schedule follow-ups, and monitor their conditions remotely.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    A post-surgery patient, for instance, could recover safely at home while being continuously monitored. Convenience, safety, and continuity of care are seamlessly combined through these technologies.
                                </Typography>
                            </Box>


                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. AI-Supported Clinical Decision Making
                                </Typography>
                                <Typography variant="body1">
                                    AI doesn’t replace human expertise—it enhances it. Decision-support tools analyze millions of cases and suggest optimal treatments or drug combinations.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Hospitals partnering with a digital healthcare platform provider integrate AI insights into real-time clinical workflows. Surgeons can receive guidance during operations, and doctors get evidence-backed recommendations. Embedding a clinic software solution ensures all relevant patient data is available when needed.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This hybrid model—human expertise plus AI—produces the best outcomes.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Ethics, Privacy, and Responsible AI
                                </Typography>
                                <Typography variant="body1">
                                    Patient trust is vital. AI systems must comply with HIPAA, GDPR, and other regulations. They must also be secure, fair, and transparent.
                                    Working with a clinic technology partner helps hospitals ensure Al systems are encrypted and follow ethical frameworks. Integrating these capabilities with a digital healthcare platform makes compliance manageable and reliable.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Responsible Al protects patients and allows innovation to continue safely.
                                </Typography>
                            </Box>


                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. Keeping Healthcare Human
                                </Typography>
                                <Typography variant="body1">
                                    Even with AI, healthcare is about people. Technology should reduce repetitive work and give clinicians more time for meaningful interactions.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    From predictive analytics to telemedicine, AI-supported decision making, and digital pharmacies, intelligent systems create efficient, compassionate care. Patients receive faster, safer treatment. Doctors focus on connecting with and helping patients. Using a mobile pharmacy solution in combination with a clinic software solution makes care seamless from start to finish.
                                </Typography>
                            </Box>

                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    9. Leading the Transformation
                                </Typography>
                                <Typography variant="body1">
                                    Al adoption isn't just a technology upgrade-it's a healthcare transformation. Predictive analytics, telemedicine, AI-assisted decisions, and digital pharmacies are reshaping patient care.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Partnering with a trusted partner for clinic software solutions ensures secure, scalable, patient-focused systems. When combined with pharmacy mobile app development, hospitals provide connected, efficient, and human-centered care.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    The future is intelligent, data-driven, and human at its core. Hospitals that embrace Al today are shaping the standard for tomorrow.
                                </Typography>
                            </Box>

                            {/* Section 11 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    10. Transform Your Healthcare Practice with Smart Technology 
                                </Typography>
                                <Typography variant="body1">
                                    Ready to take your clinic or hospital to the next level? Partner with a leading <Link href="/how-we-help/custom-software-development">healthcare app development company</Link> offering customized digital healthcare solutions, clinic management software, and pharmacy software services. Empower your team with AI-driven tools, streamline operations, and deliver seamless patient experiences. Get in touch today to build a smarter, more connected future in healthcare.
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
                                    <br/>
                                    <br/>
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="written-by-box-description"
                                >
                                     Connect with her on <Link href="https://www.linkedin.com/in/kinjalvaghasiya" target="_blank">LinkedIn</Link> for more insights on digital healthcare trends.
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

export default CompBlogAIAndMachineLearning;
