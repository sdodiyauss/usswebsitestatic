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
import Blog7 from "@/top-mobile-app-dev.webp";

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
    { id: "section2", label: "AI-Powered Mobile Apps" },
    { id: "section3", label: "Augmented Reality (AR) and Virtual Reality (VR) Apps" },
    { id: "section4", label: "5G-Optimized Mobile Apps" },
    { id: "section5", label: "Internet of Things (IoT) Integration" },
    { id: "section6", label: "Voice-Enabled Mobile Apps" },
    { id: "section7", label: "Mobile Commerce and Payment Solutions" },
    { id: "section8", label: "Cross-Platform Mobile Development" },
    { id: "section9", label: "Enhanced Mobile App Security" },
    { id: "section10", label: "Wearable Technology Apps" },
    { id: "section11", label: "Subscription-Based and On-Demand Apps" },
    { id: "section12", label: "Hyper-Personalization in Mobile Apps" },
    { id: "section13", label: "Progressive Web Apps (PWAs)" },
    { id: "section14", label: "Sustainable and Eco-Friendly Apps" },
    { id: "section15", label: "Subscription-Based and On-Demand Apps" },
    { id: "section16", label: "Conclusion: Build Experiences, Not Just Apps" },
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
        { id: "p6", title: "The Ultimate Frontend Face-Off: AngularJS vs ReactJS", excerpt: "In today’s fast-moving world of frontend web development, one debate keeps coming up among develop...", author: "Hitesh khatwani", date: "May 5th, 2025", readTime: "6 min read", category: "Web Development", image: Blog2, avatarImage: "/images/blog-avtar-hitesh.webp", featured: false, url: "/blog/angularjs-vs-reactjs-frontend-faceoff" },
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
                                    <Image src={Blog7} alt="Top Mobile App Development Trends to Watch in 2025" />
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
                                                Top Mobile App Development Trends to Watch in 2025
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
                                                19th November, 2025
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
                                    Mobile apps… wow, they’ve really changed, haven’t they? Not just tiny tools anymore. Now they’re more like experiences, sometimes even the first handshake between a brand and a user. And in 2025? The pace is only speeding up. Businesses, startups, and developers are all scrambling to make apps smarter, faster, and more indispensable. From AI-powered features to immersive AR/VR experiences, the trends shaping mobile app development this year are massive.
                                    <br />
                                    <br />
                                    Whether you’re a business owner aiming to scale digitally or a developer trying to stay ahead, knowing these trends isn’t optional—it’s survival.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. AI-Powered Mobile Apps
                                </Typography>
                                <Typography variant="body1">
                                    AI isn’t some distant future concept—it’s already here. And in 2025, apps will get even smarter. Think chatbots that can answer almost anything, predictive analytics anticipating what users need before they even know, and personalized experiences that actually feel personal.
                                    <br />
                                    <br />
                                    For example, e-commerce apps can now recommend products based on what users browse or like, and healthcare apps can analyze patient data to suggest tailored routines or treatments. Funny enough, I saw a friend get a workout suggestion perfectly timed to their mood—it almost felt spooky. This is exactly why businesses investing in<Link href="https://www.universalstreamsolution.com/how-we-help/mobile-application-devlopment"> mobile app development services</Link> are ahead of the curve. AI isn’t just a trend—it’s transforming how users interact and engage with apps.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Augmented Reality (AR) and Virtual Reality (VR) Apps
                                </Typography>
                                <Typography variant="body1">
                                    Remember when AR and VR were mostly for games? Yeah… those days are gone. Today, retail, education, and real estate are using these technologies to make apps immersive. Virtual try-ons, interactive learning, virtual property tours—you name it.
                                    <br />
                                    <br />
                                    AR-enabled shopping apps, for instance, let you see products in your own space before buying. Users love that. It makes decision-making easier, reduces returns, and keeps them engaged. Honestly, when you try one of these apps, it almost feels magical. This is a huge opportunity for businesses to make their apps not just functional, but memorable.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. 5G-Optimized Mobile Apps
                                </Typography>
                                <Typography variant="body1">
                                    5G isn’t just hype. With it becoming mainstream, apps can deliver smoother performance and handle real-time data like never before. Streaming apps, live games, IoT-enabled apps—they all benefit.
                                    <br />
                                    <br />
                                    And here’s the thing: 5G isn’t just speed, it’s enabling possibilities. AR/VR apps suddenly run seamlessly. Even complex features that used to lag are now instant. Businesses ignoring this? They’re leaving users frustrated, and that’s the last thing you want. Optimizing for 5G now isn’t optional—it’s expected.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Internet of Things (IoT) Integration
                                </Typography>
                                <Typography variant="body1">
                                    IoT is everywhere. Smart homes, wearable devices, connected cars—you name it. Mobile apps are the hub connecting them all.
                                    <br />
                                    <br />
                                    Picture a fitness app that automatically pulls data from your smartwatch, treadmill, and nutrition tracker. Or a smart home app that adjusts lighting and temperature based on habits. Integrating IoT isn’t just trendy—it’s essential. Businesses using tailored <strong>mobile app development services</strong> to merge IoT into apps will see huge gains in functionality and user satisfaction.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Voice-Enabled Mobile Apps
                                </Typography>
                                <Typography variant="body1">
                                    Voice commands are not just convenient—they’re becoming standard. Siri, Alexa, Google Assistant… they’ve trained users to expect hands-free interactions.
                                    <br />
                                    <br />
                                    In 2025, voice-enabled apps will dominate sectors like travel, e-commerce, and productivity. They don’t just make life easier—they improve accessibility and user convenience. If your app can respond naturally to voice input, it instantly feels modern and user-friendly.
                                </Typography>
                            </Box>


                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Mobile Commerce and Payment Solutions
                                </Typography>
                                <Typography variant="body1">
                                    Mobile commerce is exploding. Apps are no longer optional for purchasing behavior—they’re central.
                                    <br />
                                    <br />
                                    Seamless and secure mobile payments are essential. Digital wallets, one-click payments, even crypto integration—users expect fast, reliable transactions. Friction here can make users abandon carts in seconds. A smooth, secure experience? That boosts trust, conversion, and loyalty.
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Cross-Platform Mobile Development
                                </Typography>
                                <Typography variant="body1">
                                    Users are on Android, iOS, tablets, foldables… you get the point. Businesses want apps everywhere without doubling costs. Cross-platform tools like Flutter, React Native, and Xamarin are lifesavers.
                                    <br />
                                    <br />
                                    Write once, deploy anywhere. Fast, cheap, consistent. And honestly, users notice when apps feel consistent across devices. It’s one of those subtle things that really builds loyalty.
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. Enhanced Mobile App Security
                                </Typography>
                                <Typography variant="body1">
                                    Cyber threats aren’t slowing down, so security can’t either. Multi-factor authentication, end-to-end encryption, secure cloud integration—these are must-haves in 2025.
                                    <br />
                                    <br />
                                    Businesses handling sensitive data—finance, healthcare, personal information—can’t compromise. One breach, and users leave. Security isn’t optional; it’s trust in action.
                                </Typography>
                            </Box>

                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    9. Wearable Technology Apps
                                </Typography>
                                <Typography variant="body1">
                                    Wearables are no longer just fitness trackers. Smartwatches, AR glasses, even medical devices are growing more capable every day.
                                    <br />
                                    <br />
                                    Apps need to sync instantly with these devices to provide real-time insights, notifications, and health data. Lag? Users notice. Seamless integration keeps engagement high and enhances the value of wearable devices in everyday life.
                                </Typography>
                            </Box>

                            {/* Section 11 */}
                            <Box id="section11" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    10. Subscription-Based and On-Demand Apps
                                </Typography>
                                <Typography variant="body1">
                                    Subscriptions aren’t just Netflix anymore. Learning, fitness, niche services—they’re all subscription-driven. On-demand apps—food delivery, rides, services—still dominate engagement.
                                    <br />
                                    <br />
                                    Apps in 2025 must handle dynamic pricing, seamless subscription management, and personalized recommendations. Users love flexibility. Miss it, and someone else will fill the gap.
                                </Typography>
                            </Box>

                            {/* Section 12 */}
                            <Box id="section12" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    11. Hyper-Personalization in Mobile Apps
                                </Typography>
                                <Typography variant="body1">
                                    Users expect apps to “get” them. Hyper-personalization—leveraging AI, machine learning, and analytics—makes apps feel intuitive.
                                    <br />
                                    <br />
                                    From personalized notifications to tailored content and offers, businesses can dramatically increase engagement. The key? Making each interaction feel natural, helpful, and timely.
                                </Typography>
                            </Box>

                            {/* Section 13 */}
                            <Box id="section13" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    12. Progressive Web Apps (PWAs)
                                </Typography>
                                <Typography variant="body1">
                                    PWAs combine the best of web and mobile. Users get app-like experiences without installing anything. They’re fast, responsive, and highly accessible.
                                    <br />
                                    <br />
                                    Startups and SMEs especially benefit—they reduce costs but maintain performance. In 2025, PWAs will become mainstream, offering flexibility while reaching more users.
                                </Typography>
                            </Box>

                            {/* Section 14 */}
                            <Box id="section14" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    13. Sustainable and Eco-Friendly Apps
                                </Typography>
                                <Typography variant="body1">
                                    Sustainability is no longer optional. Apps reducing energy consumption, optimizing data, or supporting green initiatives are increasingly appreciated.
                                    <br />
                                    <br />
                                    Forward-thinking businesses can collaborate with a<Link href="https://www.universalstreamsolution.com/"> custom software development company</Link> to build apps that are secure, scalable, future-ready, and eco-conscious. Even small touches, like dark mode or optimized data usage, make users feel your brand cares.
                                </Typography>
                            </Box>

                            {/* Section 15 */}
                            <Box id="section15" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    14. Subscription-Based and On-Demand Apps
                                </Typography>
                                <Typography variant="body1">
                                    Subscriptions aren’t just Netflix anymore. Learning, fitness, niche services—they’re all subscription-driven. On-demand apps—food delivery, rides, services—still dominate engagement.
                                    <br />
                                    <br />
                                    Apps in 2025 must handle dynamic pricing, seamless subscription management, and personalized recommendations. Users love flexibility. Miss it, and someone else will fill the gap.
                                </Typography>
                            </Box>

                            {/* Section 16 */}
                            <Box id="section16" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Conclusion: Build Experiences, Not Just Apps
                                </Typography>
                                <Typography variant="body1">
                                    2025 is shaping up to be a landmark year for mobile apps. From AI and AR/VR to 5G, IoT, hyper-personalization, and sustainability, the trends are driving smarter, faster, and more user-centric experiences.
                                    <br />
                                    <br />
                                    Businesses that embrace these trends and work with skilled custom software development companies will lead the market. Staying updated ensures apps meet user expectations, create loyalty, and set new standards for innovation.
                                    <br />
                                    <br />
                                    In the digital world of 2025, don’t just build an app—create an experience that users love, remember, and return to.
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
