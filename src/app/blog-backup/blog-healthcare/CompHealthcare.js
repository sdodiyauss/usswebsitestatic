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
    { id: "section2", label: "The Rise of Telemedicine: A New Era of Healthcare" },
    { id: "section3", label: "The Future of Prescription Delivery: Convenience at Your Doorstep" },
    { id: "section4", label: "Challenges & Ethical Considerations" },
    { id: "section5", label: "The Global Impact: A More Connected Healthcare System" },
    { id: "section6", label: "Conclusion" },
];

const CompHealthcare = () => {
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
        { id: "p6", title: "The Ultimate Frontend Face-Off: AngularJS vs ReactJS", excerpt: "In today’s fast-moving world of frontend web development, one debate keeps coming up among develop...", author: "Hitesh khatwani", date: "May 5th, 2025", readTime: "6 min read", category: "Web Development", image: Blog2, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog-web-development" },
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
                                    <Image src={Blog1} alt="DeepSeek vs ChatGPT" />
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
                                                The Future of Telemedicine & Prescription Delivery
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
                                                28th April, 2025
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
                                    The healthcare sector is experiencing a huge shift, fuelled by developments in digital technology.
                                    Once considered futuristic concepts, telemedicine and prescription delivery are now integral parts
                                    of modern healthcare. The COVID-19 pandemic accelerated their adoption, proving that remote
                                    healthcare services are both convenient and often essential.
                                    <br />
                                    <br />
                                    As we look ahead, telemedicine and prescription delivery are poised to become even more sophisticated,
                                    personalized, and accessible. This blog explores the future of these innovations, examining emerging trends,
                                    technological advancements, challenges, and their potential impact on global healthcare.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. The Rise of Telemedicine: A New Era of Healthcare
                                </Typography>
                                <Typography variant="body1">
                                    Telemedicine—the remote diagnosis and treatment of patients via telecommunications technology—has evolved from simple phone consultations to comprehensive virtual care platforms. Here’s what the future holds:
                                    <br />
                                    <br />
                                </Typography>

                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        a. AI-Powered Virtual Health Assistants
                                    </Typography>
                                    <Typography variant="body1">
                                        Artificial Intelligence (AI) is revolutionizing telemedicine by enabling smarter virtual consultations. AI-driven chatbots and virtual assistants can:
                                        <br />
                                        <br />
                                    </Typography>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Conduct preliminary symptom checks" />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Provide instant medical advice" />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Schedule follow-ups with doctors" />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Monitor chronic conditions in real-time" />
                                        </ListItem>
                                    </List>
                                    <Typography variant="body1">
                                        Companies like Babylon Health and Ada Health are already using AI to enhance patient interactions, reducing wait times and improving diagnostic accuracy.
                                    </Typography>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        b. Wearable Technology & Remote Monitoring
                                    </Typography>
                                    <Typography variant="body1">
                                        Wearable devices (e.g., smartwatches, ECG monitors, glucose trackers) allow continuous health monitoring. Future telemedicine will integrate these devices with electronic health records (EHRs), enabling doctors to:
                                        <br />
                                        <br />
                                    </Typography>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Track patients’ vitals remotely" />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Detect early signs of health deterioration" />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Adjust treatments in real-time" />
                                        </ListItem>
                                    </List>
                                    <Typography variant="body1">
                                        This proactive approach will be crucial for managing chronic diseases like diabetes, hypertension, and heart conditions.
                                    </Typography>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        c. Virtual Reality (VR) & Augmented Reality (AR) in Telemedicine
                                    </Typography>
                                    <Typography variant="body1">
                                        VR and AR are set to transform medical training and patient care:
                                        <br />
                                        <br />
                                    </Typography>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Medical Education: Surgeons can rehearse advanced procedures in virtual space." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Mental Health Therapy: VR-based exposure therapy helps treat PTSD, anxiety, and phobias." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Remote Surgeries: AR-assisted surgeries allow specialists to guide procedures from afar." />
                                        </ListItem>
                                    </List>
                                </Box>


                                <Box className="blog-sub-content" sx={{ mb: 0 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        d. Expansion of Specialty Telemedicine
                                    </Typography>
                                    <Typography variant="body1">
                                        While primary care telemedicine is common, specialty care is catching up. Future advancements will include:
                                        <br />
                                        <br />
                                    </Typography>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Telestroke Services: Immediate neurology consultations for stroke patients." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Telepsychiatry: Wider access to mental health professionals." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Tele-dermatology: AI-assisted skin condition diagnosis via image analysis." />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. The Future of Prescription Delivery: Convenience at Your Doorstep
                                </Typography>
                                <Typography variant="body1">
                                    Prescription delivery services have eliminated the need for in-person pharmacy visits, offering speed, privacy, and accessibility. Here’s how they will evolve:
                                    <br />
                                    <br />
                                </Typography>

                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        a. Drone & Autonomous Vehicle Deliveries
                                    </Typography>
                                    <Typography variant="body1">
                                        Companies such as Amazon Pharmacy and UPS are testing drone delivery of medications. Advantages are:
                                        <br />
                                        <br />
                                    </Typography>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Faster delivery in urban and rural areas" />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Reduced traffic congestion and carbon emissions" />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Emergency medication drops in disaster zones" />
                                        </ListItem>
                                    </List>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        b. Smart Pill Dispensers & Medication Adherence Tech
                                    </Typography>
                                    <Typography variant="body1">
                                        Non-adherence to medication is a major healthcare challenge. Future solutions include:
                                        <br />
                                        <br />
                                    </Typography>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="AI-Powered Pill Dispensers: Devices that remind patients to take meds and notify doctors if doses are missed." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Edible Sensors: Pills with ingestible sensors that track consumption and send data to healthcare providers." />
                                        </ListItem>
                                    </List>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        c. Personalized & On-Demand Pharmacy Services
                                    </Typography>
                                    <Typography variant="body1">
                                        Pharmacies will leverage AI and big data to offer:
                                        <br />
                                        <br />
                                    </Typography>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Customized Medication Plans: Based on genetics, lifestyle, and real-time health data." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Same-Day & Subscription-Based Deliveries: Ensuring patients never run out of critical medications." />
                                        </ListItem>
                                    </List>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 0 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        d. Blockchain for Secure Prescription Management
                                    </Typography>
                                    <Typography variant="body1">
                                        Blockchain technology will enhance prescription security by:
                                        <br />
                                        <br />
                                    </Typography>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Preventing counterfeit drugs" />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Ensuring tamper-proof prescription records" />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Streamlining insurance claims" />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Challenges & Ethical Considerations
                                </Typography>
                                <Typography variant="body1">
                                    Telemedicine and prescription delivery, despite their potential, have challenges:
                                    <br />
                                    <br />
                                </Typography>

                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        a. Regulatory & Licensing Barriers
                                    </Typography>

                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Different countries (and even states) have varying telemedicine laws." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Standardizing regulations will be key for global adoption." />
                                        </ListItem>
                                    </List>
                                </Box>

                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        b. Data Privacy & Cybersecurity Risks
                                    </Typography>

                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Protecting sensitive patient data from breaches is critical." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Compliance with HIPAA (U.S.) and GDPR (EU) is mandatory." />
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        c. Digital Divide & Accessibility Issues
                                    </Typography>

                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Poorly connected rural regions might not be able to adapt to telemedicine." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Elderly and low-income populations need affordable access to technology." />
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box className="blog-sub-content" sx={{ mb: 0 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        d. Over-Reliance on Automation
                                    </Typography>

                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="AI should assist, not replace, human doctors." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Misdiagnoses by AI could have serious consequences." />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. The Global Impact: A More Connected Healthcare System
                                </Typography>
                                <Typography variant="body1">
                                    The future of telemedicine and prescription delivery will create a more efficient, patient-centric healthcare system:
                                    <br />
                                    <br />
                                </Typography>
                                <Box className="blog-sub-content" sx={{ mb: 0 }}>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Reduced Healthcare Costs: Fewer hospital visits lower expenses for patients and providers." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Better Chronic Disease Management: Continuous monitoring prevents complications." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Global Health Equity: Remote care bridges gaps in underserved regions." />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Conclusion
                                </Typography>
                                <Typography variant="body1">
                                    Telemedicine and prescription delivery are not just trends—they are the future of healthcare. With AI, IoT, blockchain, and automation, these services will become faster, smarter, and more personalized. However, overcoming regulatory, ethical, and accessibility challenges will be crucial for widespread success.
                                    <br />
                                    <br />
                                    As technology continues to evolve, one thing is clear: healthcare is moving toward a more connected, convenient, and patient-focused model.
                                    <br />
                                    <br />
                                    The future of healthcare is digital, fast, and patient-centric—but with rapid innovation comes new challenges in security, compliance, and seamless operations.
                                    <br />
                                    <br />
                                    At Universal Stream Solution (USSLLC), we empower healthcare providers, pharmacies, and telemedicine startups with cutting-edge technology and cybersecurity solutions to deliver safe, efficient, and compliant care.
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

export default CompHealthcare;
