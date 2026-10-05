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
import Blog6 from "@/blog-patient-appointment-booking-ai.webp";

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
    { id: "section2", label: "Why Patient Appointment Management Matters" },
    { id: "section3", label: "What Should Healthcare Practices Consider Before Implementing AI?" },
    { id: "section4", label: "The Future of Patient Appointment Booking" },
    { id: "section5", label: "Improve Your Healthcare Appointment Workflow" },
];

const CompPatientAppointment = () => {
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
                                    <Image src={Blog6} alt="patient-appointment-booking-ai-driven-strategies" />
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
                                                How to Manage Patient Appointment Booking: AI-Driven Strategies for Best Practices
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
                                                5th September, 2026
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
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    <strong>"AI is changing work patterns across industries, and its impact is being felt worldwide."</strong>
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Managing patient appointments sounds simple, but for many healthcare practices, it can become one of the most time-consuming parts of daily operations. Phone calls, cancellations, rescheduling requests, missed appointments, reminder messages, and last-minute schedule changes can quickly create extra work for front-desk teams.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    For medical practices in the <strong>United States and Canada</strong>, improving the appointment process is not only about filling the calendar. It is also about making healthcare easier to access and creating a smoother experience for patients and staff.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Modern <Link href="/healthcare-tech/patient-management-system-solution"><strong>Patient Appointment Booking</strong></Link> solutions are changing how practices handle this process. Online scheduling, automated reminders, patient portals, and artificial intelligence (AI) can help reduce repetitive administrative work while keeping patients informed throughout the appointment journey.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Research has consistently found that appointment reminders can improve attendance. One systematic review found that patients receiving electronic notifications were more likely to attend appointments and less likely to miss them, with multiple notifications showing additional benefit in the studies reviewed.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    AI adds another opportunity: instead of treating every appointment in exactly the same way, healthcare organizations can use data and automation to identify patterns and support more personalized scheduling workflows.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Why Patient Appointment Management Matters
                                </Typography>
                                <Typography variant="body1">
                                    A missed appointment can affect more than a single time slot. When a patient does not attend and does not cancel in advance, the practice may have limited opportunity to offer that appointment to someone else.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    For patients, missed appointments can also mean delays in follow-up care or preventive services. For healthcare staff, frequent cancellations and no-shows can create an unpredictable schedule and additional administrative work.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    A systematic review of appointment scheduling research identified factors such as longer waiting periods before an appointment and previous no-show history as commonly associated with missed appointments.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    This is why an effective appointment strategy should look at the entire process, from booking to confirmation, reminders, rescheduling, and follow-up.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    a. Make Patient Appointment Booking Easy
                                </Typography>

                                <Typography variant="body1">
                                    The first step is to make scheduling convenient.
                                    <br />
                                    <br />
                                    Patients increasingly expect to be able to interact with businesses online, and healthcare scheduling is no exception. An online <strong>Patient Appointment Booking</strong> system can allow patients to request or schedule available appointments without always needing to call the office.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Depending on the practice and technology platform, patients may be able to:
                                    <br />
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="View available appointment times" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Request an appointment online" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Select a provider or appointment type" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Receive confirmation" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Cancel or reschedule" />
                                    </ListItem>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Complete selected information before the visit" />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    A simpler scheduling experience can reduce unnecessary back-and-forth communication and give front-desk staff more time for tasks that require personal attention.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    b. Use an Appointment Scheduling App for Better Organization
                                </Typography>

                                <Typography variant="body1">
                                    An <Link href="https://www.universalstreamsolution.com/healthcare-tech/patient-management-system-solution"><strong>Appointment Scheduling App</strong></Link> can help connect patients, providers, and administrative teams through one scheduling workflow.
                                    <br />
                                    <br />
                                    Rather than maintaining appointment information across multiple systems, practices can use scheduling technology to organize calendars, appointment types, provider availability, and patient requests.
                                    <br />
                                    <br />
                                    For larger practices, this can become particularly useful when multiple providers, locations, or specialties are involved.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    c. Send Automated Appointment Reminders
                                </Typography>

                                <Typography variant="body1">
                                    Even when patients intend to attend an appointment, it is easy to forget the date or become unavailable.
                                    <br />
                                    <br />
                                    Automated reminders can provide a simple way to keep the appointment visible. Depending on the system and patient preferences, reminders may be delivered through text messages, email, automated voice calls, or a patient portal.
                                    <br />
                                    <br />
                                    Evidence supports the use of appointment reminders. A systematic review found that reminder systems consistently improved appointment attendance across healthcare settings and could also encourage patients to cancel or reschedule appointments they could no longer attend.
                                    <br />
                                    <br />
                                    The message does not need to be complicated. A useful reminder can clearly communicate the appointment date, time, provider or location, and available options for confirmation or rescheduling.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    d. Give Patients an Easy Way to Reschedule
                                </Typography>

                                <Typography variant="body1">
                                    A patient who cannot attend an appointment should have an easy alternative to simply missing it.
                                    <br />
                                    <br />
                                    <strong>For Example:</strong> Someone may receive a reminder and realise they have a work commitment or another important responsibility. If rescheduling requires several phone calls, the patient may delay acting.
                                    <br />
                                    <br />
                                    A connected scheduling system can provide options such as confirming the appointment, requesting another time, or contacting the office.
                                    <br />
                                    <br />
                                    This can help convert some potential no-shows into cancellations or rescheduled appointments, allowing the practice to reuse the open time.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    e. Connect Scheduling with a Patient Management System
                                </Typography>

                                <Typography variant="body1">
                                    Appointment scheduling works best when it is connected to other administrative workflows.
                                    <br />
                                    <br />
                                    A <strong>Patient Management System</strong> can bring together information related to appointments, communication, patient requests, and follow-up activities. The exact features will vary by platform, but the overall objective is to reduce fragmented workflows.
                                    <br />
                                    <br />
                                    For healthcare organisations considering <strong>Patient Management Software</strong>, integration should be an important consideration. A scheduling tool that cannot communicate effectively with the practice's existing systems may create another information silo.
                                    <br />
                                    <br />
                                    A connected system can give staff better visibility into appointment activity and help reduce repetitive data entry.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    f. Use AI to Identify Scheduling Patterns
                                </Typography>

                                <Typography variant="body1">
                                    AI can add another layer to appointment management by analysing historical information and identifying patterns.
                                    <br />
                                    <br />
                                    <strong>For Example:</strong> An AI-enabled system may help identify appointment groups that have historically experienced higher cancellation or no-show rates. Staff can then consider whether additional reminders or outreach may be appropriate.
                                    <br />
                                    <br />
                                    The Locust Grove Family Medicine (LGFM) that inspired this blog post highlights AI-supported approaches such as identifying patients who may be at higher risk of missing appointments, increasing targeted outreach, and supporting rescheduling.
                                    <br />
                                    <br />
                                    This does not mean AI should make assumptions about individual patients. Instead, it can provide information that helps staff decide where additional attention may be useful.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    g. Use an AI Chatbot for Routine Questions
                                </Typography>

                                <Typography variant="body1">
                                    An <strong>AI chatbot</strong> can help patients with basic administrative questions before they speak with a member of the healthcare team.
                                    <br />
                                    <br />
                                    <strong>For Example:</strong> A chatbot on a medical practice website might help answer questions about appointment availability, office hours, scheduling procedures, locations, or how to contact the practice.
                                    <br />
                                    <br />
                                    This can be particularly useful outside normal office hours when front-desk staff may not be available.
                                    <br />
                                    <br />
                                    However, healthcare chatbots need clear boundaries. They should not be presented as a replacement for physicians or used to make clinical decisions on their own. The American Medical Association has emphasised that AI should support healthcare professionals rather than replace physician judgment, with appropriate transparency and oversight.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    h. Create a Better Patient Communication Portal
                                </Typography>

                                <Typography variant="body1">
                                    Scheduling does not end after the appointment is booked.
                                    <br />
                                    <br />
                                    A <Link href="https://www.universalstreamsolution.com/healthcare"><strong>Patient Communication Portal</strong></Link> can provide a centralised way for patients to receive appointment information and communicate with the practice.
                                    <br />
                                    <br />
                                    Instead of relying entirely on phone calls, a portal may support appointment-related notifications, messages, confirmations, and other administrative interactions.
                                    <br />
                                    <br />
                                    For practices serving patients across different age groups and technology preferences, offering multiple communication options can be helpful. Some patients may prefer text messages, while others may prefer email, phone calls, or a portal.
                                    <br />
                                    <br />
                                    The objective should be flexibility rather than forcing every patient into one communication method.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    i. Manage Cancellations and Open Appointment Slots
                                </Typography>

                                <Typography variant="body1">
                                    Cancellations are a normal part of healthcare scheduling. The challenge is what happens after a slot becomes available.
                                    <br />
                                    <br />
                                    A practice can maintain a waitlist of patients who are interested in earlier appointments. When a suitable time becomes available, the practice can contact patients who have expressed interest.
                                    <br />
                                    <br />
                                    AI and automation may help organise these workflows by matching available appointment types with patients waiting for an earlier time.
                                    <br />
                                    <br />
                                    This approach can help practices use available capacity more efficiently without simply adding more administrative work for staff.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    j. Keep Humans in the Loop
                                </Typography>

                                <Typography variant="body1">
                                    Technology can improve appointment management, but healthcare is still a human-centred industry.
                                    <br />
                                    <br />
                                    Not every patient situation can be handled through automation. Some patients may have accessibility needs, complex scheduling requirements, language preferences, or questions that require staff assistance.
                                    <br />
                                    <br />
                                    For this reason, AI should generally be viewed as a support tool rather than a replacement for the healthcare team.
                                    <br />
                                    <br />
                                    The best workflow combines automation for repetitive tasks with human support when judgment, empathy, or clarification is needed.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. What Should Healthcare Practices Consider Before Implementing AI?
                                </Typography>
                                <Typography variant="body1">
                                    Before selecting AI Medical Software or an appointment platform, practices should first understand their existing workflow.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Ask a few practical questions:
                                    <br />
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Where are most scheduling delays happening?" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="How are appointment reminders currently sent?" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="How are cancellations handled?" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Can patients reschedule easily?" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="How much staff time is spent answering routine scheduling questions?" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Can the new system integrate with existing healthcare technology?" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="How will patient privacy and security be addressed?" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="When should an automated interaction be transferred to staff?" />
                                    </ListItem>
                                </List>

                                <Typography variant="body1">
                                    These questions can help practices choose technology based on actual operational needs rather than simply selecting a platform because it includes AI.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. The Future of Patient Appointment Booking
                                </Typography>
                                <Typography variant="body1">
                                    AI-driven appointment management is not about making healthcare less personal. Done thoughtfully, it can remove some of the repetitive administrative work that takes time away from patients.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    A modern <strong>Patient Appointment Booking</strong> strategy can combine online scheduling, automated reminders, patient communication, waitlists, AI-assisted workflows, and human support.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    For healthcare practices across the <strong>USA and Canada</strong>, the right approach will vary based on specialty, practice size, patient population, existing systems, and operational requirements.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    The most practical starting point is often simple: make appointments easier to book, make reminders easier to manage, make rescheduling convenient, and give staff better visibility into the schedule. AI can then be introduced where it provides meaningful support.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Improve Your Healthcare Appointment Workflow
                                </Typography>
                                <Typography variant="body1">
                                    If your practice is still managing scheduling through disconnected tools, repeated phone calls, spreadsheets, or manual follow-ups, there may be an opportunity to simplify the process.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Modern <strong>Patient Management Software, Appointment Scheduling Apps, Patient Communication Portals, AI Medical Software, and AI chatbots</strong> can support a more connected patient experience when implemented around real healthcare workflows.
                                    <br />
                                    <br />
                                </Typography>

                                <Link
                                    href="https://calendly.com/jvaghasiya-universalstreamsolution/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <strong><Typography variant="h6">Improve your workflow. Reduce the workload. Talk to us.</Typography></strong>
                                </Link>

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

export default CompPatientAppointment;
