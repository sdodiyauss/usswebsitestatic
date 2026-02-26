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
    { id: "section2", label: "What is React?" },
    { id: "section3", label: "Why Choose React Over Angular?" },
    { id: "section4", label: "What is Angular?" },
    { id: "section5", label: "What Does Angular Have Over React?" },
    { id: "section6", label: "Google Trends: React vs Angular Popularity" },
    { id: "section7", label: "Benefits of React JS" },
    { id: "section8", label: "Benefits of Angular" },
    { id: "section9", label: "Use Cases" },
    { id: "section10", label: "How to Decide Which One Suits Your Project" },
    { id: "section11", label: "Conclusion" },
];

const CompWebDevelopment = () => {
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
                                    <Image src={Blog2} alt="DeepSeek vs ChatGPT" />
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
                                                The Ultimate Frontend Face-Off: AngularJS vs ReactJS
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="blog-card-meta" sx={{ mb: 3 }}>
                                        <Box className="avtar-box">
                                        <Avatar
                                            alt="Hitesh Khatwani"
                                            src="/images/blog-avtar-hitesh.webp"
                                            className="blog-card-avatar"
                                        />
                                            <Typography
                                                variant="caption"
                                                className="blog-card-author"
                                            >
                                                Hitesh Khatwani
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
                                    In today’s fast-moving world of frontend web development, one debate keeps coming up among developers: ReactJS or AngularJS—which is the better choice for your project? Each has its strengths, benefits, and use cases, making them formidable contenders in the frontend arena. Let’s dive into this ultimate face-off to help you make an informed decision.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. What is React?
                                </Typography>
                                <Typography variant="body1">
                                    React, designed by Facebook in 2013, is a JavaScript library applied to building user interfaces, notably single-page applications. Its architecture, based on components, enables developers to build reusable UI components, and this promotes efficiency and maintainability. React operates on a virtual DOM, which optimizes rendering and enhances performance, making it particularly swift when updating the user interface. With strong community backing and a rich ecosystem, React has quickly gained popularity among developers.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Why Choose React Over Angular?
                                </Typography>
                                <Typography variant="body1">
                                    One of the major strengths React possesses over Angular is simplicity and flexibility. React’s concentration on the view layer allows it to be incorporated into other libraries or projects without any hassle. Additionally, the component-driven structure facilitates a smoother learning curve for newcomers. React also provides better performance due to its virtual DOM, allowing for faster user interactions without compromising on efficiency. Furthermore, the unidirectional data flow in React leads to easier debugging and improved reliability in applications.
                                </Typography>

                                {/* <Box className="blog-sub-content" sx={{ mb: 3 }}>
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

                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        d. Blockchain for Secure Prescription Management
                                    </Typography>
                                    <Typography variant="body1">
                                        Blockchain technology will enhance prescription security by:
                                        <br />
                                        <br />
                                    </Typography>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
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
                                </Box> */}
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. What is Angular?
                                </Typography>
                                <Typography variant="body1">
                                    Angular, built by Google, is a complete framework for building dynamic web apps. Initially launched in 2010 under the name AngularJS and later rewritten with Angular 2+, it is loaded with numerous built-in features like dependency injection, two-way data binding, and high-performance routing support. The CLI (command-line interface) of Angular, being highly powerful, speeds up development activities through templates and options to scaffold. Its rigid focus on convention and structure makes it a great option for big applications.
                                </Typography>

                                {/* <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        a. Regulatory & Licensing Barriers
                                    </Typography>

                                    <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
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

                                    <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
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

                                    <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Poorly connected rural regions might not be able to adapt to telemedicine." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Elderly and low-income populations need affordable access to technology." />
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        d. Over-Reliance on Automation
                                    </Typography>

                                    <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="AI should assist, not replace, human doctors." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Misdiagnoses by AI could have serious consequences." />
                                        </ListItem>
                                    </List>
                                </Box> */}
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. What Does Angular Have Over React?
                                </Typography>
                                <Typography variant="body1">
                                    Angular shines in its all-encompassing framework approach. With features like two-way data binding, developers can easily sync data between the model and the view, streamlining the development process. Angular also provides a more opinionated framework, which can lead to better organization and architecture, particularly in larger projects. Its extensive tooling and robust development environment further enhance the developer experience, making it easier to maintain and scale applications.
                                </Typography>
                                {/* <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
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
                                </Box> */}
                            </Box>


                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Google Trends: React vs Angular Popularity
                                </Typography>
                                <Typography variant="body1">
                                    A glance at Google Trends reveals a clear narrative: React has consistently outpaced Angular in terms of search interest and popularity. This trend reflects a broader adoption within the developer community, driven by React’s flexibility and ease of use. While Angular remains a powerful tool, many modern developers gravitate towards React for new projects, indicating a shift in the industry landscape.
                                </Typography>
                                {/* <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
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
                                </Box> */}
                            </Box>


                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Benefits of React JS
                                </Typography>
                                <Typography variant="body1">
                                    React offers several benefits, including
                                    <br />
                                    <br />
                                </Typography>
                                <Box className="blog-sub-content" sx={{ mb: 0 }}>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Component Reusability: Developers can reuse components, saving time and resources." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Performance Optimization: Virtual DOM reduces direct manipulation of the actual DOM, enhancing application performance." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Strong Ecosystem: A wealth of libraries and tools complement React, providing additional functionality." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Rich Community Support: A vast user base means extensive resources, tutorials, and forums available for troubleshooting." />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Benefits of Angular
                                </Typography>
                                <Typography variant="body1">
                                    Angular provides its unique advantages, such as:
                                    <br />
                                    <br />
                                </Typography>
                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 0, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Comprehensive Framework: Angular offers a full-fledged framework, reducing the need for multiple external libraries." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Dependency Injection: Simplifies code management and testing by allowing components to be dependent on external services." />
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Two-Way Data Binding: Simplifies data synchronization between the view and the model for a uniform user experience." />
                                        </ListItem>
                                    </List>
                                </Box>
                                <Typography variant="body1">
                                    Key Differences
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    While both frameworks aim to streamline the process of building engaging web applications, key differences exist. React focuses primarily on the UI layer and values flexibility, while Angular adopts a full framework approach, providing extensive features out of the box. Additionally, React uses a virtual DOM for efficient rendering, whereas Angular manipulates the real DOM directly, although it’s optimized through change detection strategies.
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. Use Cases
                                </Typography>
                                <Typography variant="body1">
                                    When it comes to choosing between Angular and React, it often depends on the project requirements. React is favoured for smaller projects and applications requiring rapid development
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    cycles, while Angular is ideal for complex and large-scale enterprise-level applications where structure and consistency are paramount.
                                </Typography>
                            </Box>


                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    9. How to Decide Which One Suits Your Project
                                </Typography>
                                <Typography variant="body1">
                                    In the end, your project goals, team capabilities, and the particular needs of your application will determine whether you choose React or Angular. React can be your best option if you’re searching for a versatile, lightweight solution with a large community following. Conversely, if your project demands a robust framework with numerous built-in features, Angular could be the way to go.
                                </Typography>
                            </Box>

                            {/* Section 11 */}
                            <Box id="section11" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Conclusion
                                </Typography>
                                <Typography variant="body1">
                                    Both AngularJS and ReactJS have carved significant niches in the frontend development landscape. The choice between them hinges on specific project requirements, team expertise, and long-term maintenance considerations.
                                </Typography>

                                <Box className="blog-sub-content" sx={{ mb: 3 }}>
                                    <List component="ul" className=" list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Choose AngularJS if:" />
                                            <List component="ul" className=" list-style-nulldisc" sx={{ pb: 2, pt: 2 }}>
                                                <ListItem component="li" disablePadding>
                                                    <ListItemText primary="You require a comprehensive framework with built-in functionalities." />
                                                </ListItem>
                                                <ListItem component="li" disablePadding>
                                                    <ListItemText primary="Your project is large-scale, demanding a structured and standardized approach." />
                                                </ListItem>
                                                <ListItem component="li" disablePadding>
                                                    <ListItemText primary="You prefer TypeScript and a strong emphasis on object-oriented programming." />
                                                </ListItem>
                                            </List>
                                        </ListItem>
                                        <ListItem component="li" disablePadding>
                                            <ListItemText primary="Choose ReactJS if:" />
                                            <List component="ul" className=" list-style-nulldisc" sx={{ pb: 2, pt: 2 }}>
                                                <ListItem component="li" disablePadding>
                                                    <ListItemText primary="You need a flexible, component-based library for building dynamic UIs." />
                                                </ListItem>
                                                <ListItem component="li" disablePadding>
                                                    <ListItemText primary="Rapid development and performance optimization are top priorities." />
                                                </ListItem>
                                                <ListItem component="li" disablePadding>
                                                    <ListItemText primary="You prefer JavaScript and wish to integrate various libraries as per project needs." />
                                                </ListItem>
                                            </List>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>

                            <Box className="written-by-box">
                                <Box className="written-by-box-header">
                                    <Avatar
                                        src="/images/written-by-hitesh.webp"
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
                                                Hitesh Khatwani
                                            </Typography>
                                            <Link
                                                href="https://www.linkedin.com/in/hitesh-khatwani-399b62a9/"
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
                                    Hitesh Khatwani is a passionate Web Developer with expertise in building scalable, high-performance websites and applications. With hands-on experience in PHP, JavaScript, and modern frameworks like React and Node.js, he combines creativity and functionality to craft seamless digital experiences. 
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

export default CompWebDevelopment;
