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

import Blog1 from "@/blog-healthcare.webp";
import Blog2 from "@/blog-webdevelopment.webp";
import Blog3 from "@/blog-appdevelopment.webp";
import Blog4 from "@/blog-ai.webp";
import Blog5 from "@/blog-backenddevelopment.webp";
import Blog6 from "@/blog-mhealth-apps-empower-img.webp";

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
    { id: "section1", label: "Why mHealth Is More Than Just a Trend " },
    { id: "section2", label: "What Patients Gain — Real Benefits in Everyday Life " },
    { id: "section3", label: "How Doctors & Healthcare Providers Benefit " },
    { id: "section4", label: "Why Healthcare Institutions Are Adopting mHealth Solutions " },
    { id: "section5", label: "Common Use Cases for mHealth Adoption " },
    { id: "section6", label: "What the Future Might Bring " },
    { id: "section7", label: "A Quick Word on Trust, Privacy, and Digital Ethics " },
    { id: "section8", label: "Final Thoughts: A New Era of Collaborative, Accessible Healthcare" },
];

const CompBlogMhealthApps = () => {
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
                                    <Image src={Blog6} alt="How mHealth Apps Empower Patients and Doctors" />
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
                                                How mHealth Apps Are Empowering Patients and Doctors Alike
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
                                                2nd December, 2025
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
                                    1. Why mHealth Is More Than Just a Trend
                                </Typography>
                                <Typography variant="body1">
                                    Think about how much of your daily life is on your phone: messages, banking, shopping, reminders, maps. Now imagine if your health care could plug into that same ecosystem. That’s what’s happening now.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Smartphones, wearables, and secure cloud‑based systems are giving ordinary people access to ongoing health information. That’s a big departure from the old model—when checking your lab results, scheduling a follow‑up, or refilling a prescription meant calling, traveling, sometimes waiting for days.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    More than convenience, mHealth is about <strong>choice, clarity, and control</strong>. Patients no longer need to chase records or dig through paperwork. They don’t have to depend entirely on memory or rely on hand‑written notes. Digital health gives them a consistent, accessible place to manage their care.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. What Patients Gain — Real Benefits in Everyday Life
                                </Typography>
                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                        Instant Access to Health Information
                                    </Typography>
                                    <Typography variant="body1">
                                        With mobile health tools, patients can view lab reports, medical records, and consultation summaries right on their phone. No more waiting for reports to be printed or for a folder to arrive from some distant clinic archive
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="body1">
                                        This easy access means better continuity of care. Patients can check their health data before a follow-up, compare past results, and make sense of their progress. It’s especially helpful for those managing ongoing or chronic conditions over long periods.
                                    </Typography>
                                </Box>
                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                        Medication Management Made Simple
                                    </Typography>
                                    <Typography variant="body1">
                                        One of the biggest hurdles in treatment compliance is managing medication correctly—remembering doses, tracking refills, handling multiple prescriptions. That’s where digital prescription tools shine.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="body1">
                                        A well‑designed solution like a <Link href="https://www.universalstreamsolution.com/healthcare-tech/prescription-assistance-portal" >Digital Prescription App</Link> brings clarity and convenience. It helps patients keep track of prescribed medicines, sends reminders, stores past prescriptions, and can even flag possible conflicts.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="body1">
                                        For someone juggling daily medicines, this can cut down mistakes and make treatment feel a lot less intimidating.
                                    </Typography>
                                </Box>
                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                        Remote Consultations — Care Without Barriers
                                    </Typography>
                                    <Typography variant="body1">
                                        Not everyone lives near a hospital or clinic. For many people, especially in rural or remote regions, visiting a doctor can mean traveling long distances. Telemedicine features in mHealth apps change that.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="body1">
                                        Through video calls, secure chats, or message-based consultations, patients can get medical advice without leaving their home. That’s more inclusive, more accessible, and sometimes the difference between timely care and delayed treatment.
                                    </Typography>
                                </Box>
                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                        Proactive Monitoring and Health Awareness
                                    </Typography>
                                    <Typography variant="body1">
                                        Some apps allow tracking of vitals, symptoms, lifestyle habits, diet, and sleep. Over time, this helps users notice patterns—maybe stress affects their sleep, or blood pressure spikes after a certain meal.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="body1">
                                        This deeper awareness lets people make informed choices, catch red flags early, and help their doctors make more accurate assessments. Preventive care becomes easier when data isn’t lost, and health isn’t treated only when things go wrong.
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. How Doctors & Healthcare Providers Benefit
                                </Typography>
                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                        Cleaner Workflows, Less Paperwork
                                    </Typography>
                                    <Typography variant="body1">
                                        Doctors and clinics often grapple with stacks of files, manual record‑keeping, and repetitive administrative tasks. mHealth solutions streamline many of these tasks: digital records, online prescriptions, scheduling, follow-ups—all handled in one place.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="body1">
                                        The result is less time spent on clerical work and more focus on actual patient care. Clinics can operate more smoothly, avoid misfiling, and reduce manual errors.
                                    </Typography>
                                </Box>
                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                        Better Clinical Decisions Through Full Picture Data
                                    </Typography>
                                    <Typography variant="body1">
                                        Instead of relying on snapshots—one lab result here, one check‑up there—doctors can now see a more continuous picture of a patient’s health over time. Trends emerge: blood sugar fluctuations, blood pressure patterns, sleep quality, medication adherence.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="body1">
                                        Armed with that data, providers can make treatment plans that reflect real day-to-day life instead of isolated visits. It’s a more holistic, personalized approach.
                                    </Typography>
                                </Box>
                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                        Faster, Safer Communication
                                    </Typography>
                                    <Typography variant="body1">
                                        With secure, app-based patient‑doctor communication, sharing lab reports, prescribing medications, adjusting dosages, or clarifying symptoms becomes easier and safer. No risk of lost papers, no misread handwriting.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="body1">
                                        Patients get clarity, and doctors get confirmation. Everyone stays on the same page — quite literally.
                                    </Typography>
                                </Box>
                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                        Remote Monitoring & Timely Intervention
                                    </Typography>
                                    <Typography variant="body1">
                                        For patients needing ongoing care—say chronic illness sufferers or post‑surgery patients—remote monitoring is a boon. Apps can flag concerning vitals or alert doctors when patterns go off-track.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="body1">
                                        This early warning system can prevent complications, reduce unnecessary hospital visits, and sometimes save lives. It turns care from reactive to proactive.
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Why Healthcare Institutions Are Adopting mHealth Solutions
                                </Typography>
                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                        Improved Patient Experience
                                    </Typography>
                                    <Typography variant="body1">
                                        Patients appreciate transparency and convenience. Online scheduling, instant lab access, prescription tracking—all add up to fewer hassles and more trust. Hospitals that adopt these features often see better patient satisfaction and loyalty.
                                    </Typography>
                                </Box>
                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                        Efficiency and Cost Reduction
                                    </Typography>
                                    <Typography variant="body1">
                                        Digital workflows reduce overhead—less paperwork, fewer errors, no lost files, less staff time wasted on manual tasks. Over time, that translates to cost savings and more efficient resource use.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="body1">
                                        In a world of increasing demand, limited staff, and rising costs, that kind of efficiency isn’t just nice to have — it’s essential.
                                    </Typography>
                                </Box>
                                <Box className="blog-sub-content" sx={{ mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                        Data‑Driven Hospital Management
                                    </Typography>
                                    <Typography variant="body1">
                                        With aggregated data (anonymized or with consent), hospitals can analyse patterns — common illnesses, peak patient load hours, treatment effectiveness. This helps in resource planning, staffing, and improving overall quality of care.
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Common Use Cases for mHealth Adoption
                                </Typography>

                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Chronic Disease Management: Apps help manage long-term conditions like diabetes, hypertension, heart disease with daily tracking and alerts. " />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Teleconsultations: Patients can consult doctors remotely—ideal for rural patients, elderly, or those with mobility constraints. " />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Prescription & Pharmacy Coordination: Digital prescriptions reduce confusion, help with dosage tracking, and streamline refills. " />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Preventive Health & Wellness: Lifestyle tracking, reminders for check-ups or screenings, early detection of health issues.  " />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Post‑Discharge Monitoring: Patients recovering from procedures can share recovery data remotely, enabling follow-up without repeated hospital visits.  " />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. What the Future Might Bring
                                </Typography>
                                <Typography variant="body1">
                                    We’re only scratching the surface. In coming years, expect deeper integration between mHealth apps, wearable devices, AI‑driven analytics, and even predictive health alerts.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Picture an app that watches your daily patterns, flags deviations before symptoms show up, and messages you—or your doctor—to take preventive action. Or hospitals using aggregated health data (with consent) to design public wellness programs.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    The possibilities are huge—and exciting.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. A Quick Word on Trust, Privacy, and Digital Ethics
                                </Typography>
                                <Typography variant="body1">
                                    Of course, with all this convenience comes responsibility. Data privacy, secure communication, informed consent — these must stay top priorities.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Patients must trust that their sensitive health information is kept safe. Developers and healthcare providers must follow ethical guidelines. And transparency about what data is collected, how it’s used, and who can access it should remain clear.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Good digital health platforms balance innovation with integrity.
                                </Typography>
                            </Box>


                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. Final Thoughts: A New Era of Collaborative, Accessible Healthcare
                                </Typography>
                                <Typography variant="body1">
                                    mHealth apps are more than just digital tools. They are catalysts for change — helping patients stay connected, doctors offer better care, and hospitals run smoother.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    They turn healthcare from something you only visit when sick, into something you manage every day — with clarity, connection, and confidence.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    If you want a deeper look at how these ideas are being put into action right now, explore this <Link href="https://www.universalstreamsolution.com/casestudies/pb-case-study" > Patient Experience Case </Link>. It shows how digital solutions can improve patient engagement, streamline care, and bring more humanity into modern healthcare.
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
                                {/* <Typography
                                    variant="body1"
                                    className="written-by-box-description"
                                >
                                    Connect with her on <Link href="https://www.linkedin.com/in/kinjalvaghasiya" target="_blank">LinkedIn</Link> for more insights on digital healthcare trends.
                                </Typography> */}
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

export default CompBlogMhealthApps;
