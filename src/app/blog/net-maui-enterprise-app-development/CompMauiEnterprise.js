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
import Blog4 from "@/blog-dot-net-maui-ideal-choice.webp";
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
    { id: "section2", label: "What is .NET MAUI?" },
    { id: "section3", label: "Single Codebase for Cross-Platform Development" },
    { id: "section4", label: "Native Performance Without Compromise" },
    { id: "section5", label: "Seamless Integration with Enterprise Ecosystems" },
    { id: "section6", label: "Cost-Effective Development Strategy" },
    { id: "section7", label: "Faster Time-to-Market" },
    { id: "section8", label: "Enterprise-Grade Security" },
    { id: "section9", label: "Scalability for Growing Businesses" },
    { id: "section10", label: "Consistent User Experience Across Platforms" },
    { id: "section11", label: "Conclusion" },
];

const CompMauiEnterprise = () => {
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
                                    <Image src={Blog4} alt="net-maui-enterprise-app-development" />
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
                                                Why .NET MAUI is the Ideal Choice for Cross-Platform Enterprise Apps
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
                                                23rd April, 2026
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
                                    In today’s digital-first enterprise environment, organizations are expected to deliver seamless application experiences across multiple devices while maintaining speed, security, and scalability. Whether it’s a healthcare dashboard used by doctors, a logistics tracking app for field agents, or a financial reporting system for executives, applications must perform consistently across Android, iOS, Windows, and macOS. However, managing separate development cycles for each platform creates inefficiencies, increases costs, and slows down innovation.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This is where NET MAUI (Multi-platform App UI), developed by Microsoft, becomes a game-changing solution. It allows enterprises to build high-performance, native applications using a single codebase, enabling faster delivery while maintaining enterprise-grade quality.
                                    <br />
                                    <br />
                                    For example, a logistics company managing fleet operations across multiple countries can use a single MAUI-based app for drivers (mobile), managers (desktop), and analysts (tablet), ensuring consistent data flow and user experience without maintaining separate apps.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. What is .NET MAUI?
                                </Typography>
                                <Typography variant="body1">
                                    .NET MAUI is a modern cross-platform framework that evolved from Xamarin.Forms, designed to simplify application development by unifying all platforms under one project structure. Developers can use C# and XAML to build applications that run natively on multiple platforms, eliminating the need to rewrite code for each operating system. This unified structure is particularly beneficial for enterprises where applications require continuous updates, feature enhancements, and long-term maintenance.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Additionally, <Link href="https://www.universalstreamsolution.com/blog/modern-backend-development-cloud-computing">.NET MAUI backend integration</Link> enables these applications to seamlessly connect with cloud-based services, APIs, and enterprise systems, ensuring real-time data synchronization, scalability, and high performance across all platforms.
                                    <br />
                                    <br />
                                    For instance, consider a healthcare organization building a patient management system. With MAUI, they can create one application that works for doctors using tablets, administrative staff on desktops, and patients accessing mobile apps. Instead of maintaining three separate systems, everything is managed through a single, centralized codebase—reducing complexity and improving efficiency.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Single Codebase for Cross-Platform Development
                                </Typography>
                                <Typography variant="body1">
                                    One of the biggest advantages of .NET MAUI is its single codebase approach, which directly solves the challenge of fragmented development. Enterprises traditionally require separate teams for Android, iOS, and desktop applications, leading to duplicated effort and inconsistencies.
                                    <br />
                                    <br />
                                    With MAUI, businesses can build once and deploy everywhere. For example, a retail company developing an inventory management system can ensure that warehouse staff using Android devices and managers using iPads or Windows laptops all access the same application with identical functionality.
                                    <br />
                                    <br />
                                    When a new feature—like real-time stock alerts—is added, it automatically becomes available across all platforms without additional development effort.
                                    <br />
                                    <br />
                                    This not only reduces development time but also ensures consistency in user experience, which is critical for enterprise operations.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Native Performance Without Compromise
                                </Typography>
                                <Typography variant="body1">
                                    Performance is crucial for enterprise applications, especially those handling real-time data and critical operations. .NET MAUI provides true native performance by directly interacting with platform-specific APIs, ensuring smooth execution and responsiveness.
                                    <br />
                                    <br />
                                    For example, in a financial services company, a trading dashboard built with MAUI can process live market data and update charts in real time without lag. Similarly, in a logistics application, GPS tracking and route optimization features can run efficiently, providing real-time updates to drivers and managers.
                                    <br />
                                    <br />
                                    Unlike hybrid frameworks that rely on web views, MAUI ensures that applications feel fast and responsive, which is essential for productivity-driven enterprise environments.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Seamless Integration with Enterprise Ecosystems
                                </Typography>
                                <Typography variant="body1">
                                    Enterprise applications often need to integrate with multiple systems such as CRMs, ERPs, and cloud platforms. NET MAUI plays a key role in <Link href="/solutions/custom-business-application">.NET MAUI enterprise application development</Link> by enabling seamless integration with Microsoft technologies like Azure, ASP.NET Core, and SQL Server, making it easier to connect with existing infrastructure while ensuring scalability, real-time data flow, and efficient system interoperability across enterprise environments.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For example, a manufacturing company can build a MAUI app that connects with its ERP system to track production, inventory, and supply chain operations in real time. Managers can access dashboards on their desktops, while field workers update data via mobile devices—all synchronized through cloud services.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This level of integration ensures smooth data flow across departments, improving decision-making and operational efficiency.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Cost-Effective Development Strategy
                                </Typography>
                                <Typography variant="body1">
                                    Cost optimization is a major concern for enterprises, and .NET MAUI significantly reduces development and maintenance costs. By using a single codebase, businesses can eliminate the need for multiple development teams and reduce duplication of effort.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For example, a startup in the fintech space can build its mobile banking app for both Android and iOS using MAUI, instead of hiring separate teams for each platform. This not only reduces initial development costs but also lowers long-term maintenance expenses, as updates and bug fixes are implemented in one place.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Over time, this approach leads to better resource utilization and higher ROI, making MAUI a cost-effective choice for enterprises of all sizes.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Faster Time-to-Market
                                </Typography>
                                <Typography variant="body1">
                                    In competitive industries, speed is critical. Enterprises need to launch applications quickly to stay ahead of competitors and meet customer expectations. .NET MAUI accelerates development with features like Hot Reload, enabling developers to see changes instantly without rebuilding the app.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For instance, an eCommerce company launching a new mobile app can quickly test features like product search, checkout, and payment integration across platforms simultaneously. This reduces development cycles and allows faster deployment.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    By shortening time-to-market, MAUI helps businesses respond quickly to market demands and seize new opportunities.
                                </Typography>
                            </Box>


                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Enterprise-Grade Security
                                </Typography>
                                <Typography variant="body1">
                                    Security is a top priority for enterprise applications, especially those handling sensitive data. .NET MAUI leverages the robust security features of the .NET ecosystem, including encryption, secure authentication, and compliance with industry standards.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For example, a healthcare app built with MAUI can securely store patient records and ensure compliance with regulations. Similarly, a banking application can implement multi-factor authentication and secure transactions to protect user data.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This makes MAUI a reliable choice for industries where data security is critical.
                                </Typography>
                            </Box>


                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. Scalability for Growing Businesses
                                </Typography>
                                <Typography variant="body1">
                                    As businesses grow, their applications must scale to handle increasing users and data. .NET MAUI supports scalability by integrating with cloud platforms and enabling modular architecture.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For example, a SaaS company can start with a basic application and gradually add features like analytics dashboards, AI-based recommendations, and third-party integrations without rebuilding the system.
                                    <br />
                                    <br />
                                    This flexibility ensures that applications can evolve alongside the business, providing long-term value.
                                </Typography>
                            </Box>

                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    9. Consistent User Experience Across Platforms
                                </Typography>
                                <Typography variant="body1">
                                    Maintaining a consistent user experience across platforms is essential for enterprise success. .NET MAUI ensures that applications have a unified design while still allowing platform-specific customization.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    For example, a corporate HR app can provide the same interface and features for employees accessing it via mobile or desktop, ensuring a seamless experience. At the same time, platform-specific optimizations can be applied to enhance usability.
                                    <br />
                                    <br />
                                    This consistency improves user satisfaction and strengthens brand identity.
                                </Typography>
                            </Box>

                            {/* Section 11 */}
                            <Box id="section11" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Conclusion
                                </Typography>
                                <Typography variant="body1">
                                    .NET MAUI is not just a development framework—it’s a strategic tool for enterprises looking to build scalable, high-performance, and cost-efficient applications. With its unified codebase, native performance, seamless integrations, and real-world applicability across industries, it stands out as one of the best choices for cross-platform enterprise development. For organizations aiming to innovate and stay competitive, it also provides a strong foundation to <Link href="https://calendly.com/jvaghasiya-universalstreamsolution/30min?month=2026-04">explore custom software solutions</Link> tailored to specific business needs, workflows, and long-term growth strategies.
                                    <br />
                                    <br />
                                    From logistics and healthcare to finance and retail, businesses can leverage MAUI to streamline operations, reduce costs, and accelerate innovation. For enterprises aiming to stay competitive in the digital era, adopting .NET MAUI is a smart and future-ready decision.
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

export default CompMauiEnterprise;
