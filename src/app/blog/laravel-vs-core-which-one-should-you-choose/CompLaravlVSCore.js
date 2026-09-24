"use client";
import React from "react";
import {
    Box,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
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
import Blog6 from "@/blog-web-dev.webp";
import Blog7 from "@/blog-laravel-vs-core-php.webp";

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
    { id: "section2", label: "What Is Laravel?" },
    { id: "section3", label: "What Is Core PHP?" },
    { id: "section4", label: "Laravel vs Core PHP: Key Differences" },
    { id: "section5", label: "Laravel Advantages" },
    { id: "section6", label: "Core PHP Advantages" },
    { id: "section7", label: "Laravel or Core PHP: Which Is Better for Your Project?" },
    { id: "section8", label: "Final Thoughts" },
];

const CompLaravlVSCore = () => {
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
                                    <Image src={Blog7} alt="laravel-vs-core-php-which-one-should-you-choose" />
                                </CardMedia>

                                <CardContent className="blog-card-content">
                                    <Box>
                                        <Chip
                                            label="web development"
                                            size="small"
                                            className="blog-card-chip"
                                        />

                                        <Box className="blog-card-title-row">
                                            <Typography variant="h5" className="blog-card-title">
                                                Laravel vs Core PHP: Which One Should You Choose?
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
                                                18th September, 2026
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
                                    Starting a new web project, setting up the right technology can have a major impact on project development speed, scalability, security, and maintenance. Two options in PHP web development are Laravel and Core PHP. While both can be used to build dynamic websites and web application.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Laravel vs PHP: The real question is not if one technology is better. Alternatively, it is about before starting your project understanding requirements and then deciding if Laravel or Core PHP is the better fit for your project. This guidepost compares their features, advantages, use cases, and development considerations to help you make an informed decision.
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. What Is Laravel?
                                </Typography>
                                <Typography variant="body1">
                                    Laravel is an open-source PHP framework designed to simplify modern{' '}
                                    <Link href="https://www.universalstreamsolution.com/how-we-help/web-design-and-development">
                                        <strong>web application development</strong>
                                    </Link>
                                    . It follows the Model-View-Controller (MVC) architectural pattern and provides built-in tools for common development tasks.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    The <Link href="https://laravel.com/"><strong>Laravel</strong></Link> <strong>framework</strong> helps developers handle routing, authentication, database operations, validation, caching, queues, and other application requirements without building everything from scratch.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Key Laravel Features:
                                </Typography>

                                <Typography variant="body1">
                                    <strong>MVC Architecture:</strong> Separates application logic, user interface, and data management, making applications easier to maintain.
                                    <br />
                                    <br />

                                    <strong>Eloquent ORM (Object-Relational Mapping):</strong> Makes database interactions more convenient through a meaningful object-oriented programming (OOP) approach.
                                    <br />
                                    <br />

                                    <strong>Routing:</strong> Provides a structured way to define application URLs and handle incoming requests.
                                    <br />
                                    <br />

                                    <strong>Authentication Tools:</strong> Simplifies common login, registration, and authentication requirements.
                                    <br />
                                    <br />

                                    <strong>Blade Templating:</strong> Helps developers create reusable and organized application views.
                                    <br />
                                    <br />

                                    <strong>Artisan CLI:</strong> Provides commands for development, database migrations, testing, and maintenance.
                                    <br />
                                    <br />

                                    <strong>Security Features:</strong> Includes tools for password hashing, CSRF protection, validation, and other common security requirements.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    These capabilities can reduce repetitive coding and help teams follow consistent development practices.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. What Is Core PHP?
                                </Typography>

                                <Typography variant="body1">
                                    <Link href="https://www.php.net/"><strong>Core PHP</strong>
                                    </Link> refers to developing applications directly with the PHP programming language without relying on a full-stack framework such as Laravel. Developers can use PHP's built-in capabilities and add third-party libraries or custom components when necessary.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Core PHP gives developers considerable control over the application's architecture. However, that flexibility also means developers typically need to make more decisions about project structure, security implementation, database handling, routing, and reusable components.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Common Core PHP Features:
                                </Typography>

                                <Typography variant="body1">
                                    <strong>Direct PHP Control:</strong> Developers have greater freedom over application structure and implementation.
                                    <br />
                                    <br />

                                    <strong>Simple Setup:</strong> Basic PHP applications can be started without installing a large framework.
                                    <br />
                                    <br />

                                    <strong>Database Connectivity:</strong> PHP supports connections to popular database systems through appropriate extensions.
                                    <br />
                                    <br />

                                    <strong>Custom Architecture:</strong> Developers can custom-design the application according to specific requirements.
                                    <br />
                                    <br />

                                    <strong>Lightweight Applications:</strong> Smaller projects may not need the supplementary components provided by a framework.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    For simple websites or highly customized applications, this flexibility can be useful.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Laravel vs Core PHP: Key Differences
                                </Typography>
                                <Typography variant="body1">
                                    The biggest difference between Laravel and Core PHP is the level of abstraction and built-in functionality they provide. Laravel gives developers a structured development environment, while Core PHP provides a more open-ended approach.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Laravel
                                </Typography>

                                <Typography variant="body1">
                                    <strong>Development Approach:</strong> Laravel is a full-featured PHP framework that provides predefined tools, libraries, and development conventions to streamline application development.
                                    <br />
                                    <br />

                                    <strong>Application Architecture:</strong> Laravel follows the <strong>MVC (Model-View-Controller)</strong> architecture, which helps separate application logic, data, and presentation for better organisation and maintenance.
                                    <br />
                                    <br />

                                    <strong>Development Speed:</strong> Laravel can accelerate development by providing ready-to-use features for routing, authentication, database management, validation, caching, and other common requirements.
                                    <br />
                                    <br />

                                    <strong>Built-in Features:</strong> Includes a wide range of built-in tools and features that support modern web application development and reduce repetitive coding.
                                    <br />
                                    <br />

                                    <strong>Database Management:</strong> Laravel's <strong>Eloquent ORM</strong> and query builder simplify database operations, migrations, relationships, and data management.
                                    <br />
                                    <br />

                                    <strong>Routing:</strong> Laravel provides a dedicated routing system for defining clean URLs, HTTP methods, route parameters, middleware, and route groups.
                                    <br />
                                    <br />

                                    <strong>Authentication & Authorization:</strong> Laravel provides tools and packages that simplify user authentication, authorization, password handling, and access control.
                                    <br />
                                    <br />

                                    <strong>Security:</strong> Laravel includes predefined functions and development practices that help address common security concerns, such as CSRF protection, password hashing, and input validation.
                                    <br />
                                    <br />

                                    <strong>Code Organisation:</strong> Laravel encourages a consistent project structure, making it easier to organise files, logic, controllers, models, and views.
                                    <br />
                                    <br />

                                    <strong>Reusable Components:</strong> Laravel offers reusable framework components, packages, helpers, and services that can reduce development effort across different parts of an application.
                                    <br />
                                    <br />

                                    <strong>Customisation:</strong> Laravel offers extensive customization while maintaining the framework's conventions and architecture.
                                    <br />
                                    <br />

                                    <strong>Scalability:</strong> Laravel is well-suited for applications that may grow in functionality, users, and complexity, provided the application is properly designed and optimized.
                                    <br />
                                    <br />

                                    <strong>Learning Curve:</strong> Developers need to understand PHP fundamentals along with Laravel concepts such as MVC, routing, middleware, Eloquent, Artisan, and service containers.
                                    <br />
                                    <br />

                                    <strong>Maintenance:</strong> Laravel's standardized structure and conventions can make ongoing maintenance and collaboration easier, particularly for larger development teams.
                                    <br />
                                    <br />

                                    <strong>Community & Ecosystem:</strong> Laravel has a large developer community, extensive documentation, packages, tools, and a broad ecosystem for modern PHP development.
                                    <br />
                                    <br />

                                    <strong>Testing Support:</strong> Laravel provides convenient tools and integrations that make application and feature testing easier to organise.
                                    <br />
                                    <br />

                                    <strong>Project Setup:</strong> Laravel requires framework installation and configuration, but it provides a structured foundation for development once set up.
                                    <br />
                                    <br />

                                    <strong>Performance:</strong> Laravel adds framework overhead, but properly designed and optimized Laravel applications can deliver strong performance for many business applications.
                                    <br />
                                    <br />

                                    <strong>Best Suited For:</strong> Modern websites, business applications, SaaS platforms, e-commerce applications, APIs, portals, and other feature-rich or scalable web projects.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Core PHP
                                </Typography>

                                <Typography variant="body1">
                                    <strong>Development Approach:</strong> Core PHP involves building applications directly with the PHP language, giving developers more freedom to decide how different components are implemented.
                                    <br />
                                    <br />

                                    <strong>Application Architecture:</strong> Core PHP does not require a specific architecture. Developers can choose their own structure, but maintaining a consistent architecture may require additional planning.
                                    <br />
                                    <br />

                                    <strong>Development Speed:</strong> Development may take longer for complex applications because many common features need to be created, configured, or integrated manually.
                                    <br />
                                    <br />

                                    <strong>Built-in Features:</strong> Provides PHP's core functionality, while additional features generally need to be developed manually or added through external libraries.
                                    <br />
                                    <br />

                                    <strong>Database Management:</strong> Developers typically work directly with PHP database extensions such as PDO or MySQLi, requiring more manual database-related implementation.
                                    <br />
                                    <br />

                                    <strong>Routing:</strong> Routing generally needs to be handled through custom PHP logic or additional libraries, depending on the project's architecture.
                                    <br />
                                    <br />

                                    <strong>Authentication & Authorization:</strong> Authentication and authorization systems usually need to be designed and implemented manually, giving developers more control but requiring additional development effort.
                                    <br />
                                    <br />

                                    <strong>Security:</strong> Security depends on the developer's implementation. Developers must correctly handle validation, authentication, sessions, database queries, and other security requirements.
                                    <br />
                                    <br />

                                    <strong>Code Organisation:</strong> Developers have more freedom, but without proper coding standards and architecture, larger Core PHP projects can become harder to manage.
                                    <br />
                                    <br />

                                    <strong>Reusable Components:</strong> Reusable components can be created, but developers generally need to build or integrate them independently.
                                    <br />
                                    <br />

                                    <strong>Customisation:</strong> Core PHP provides a high degree of freedom because developers are not required to follow a specific framework structure.
                                    <br />
                                    <br />

                                    <strong>Scalability:</strong> Core PHP can also support scalable applications, but achieving scalability may require more custom architecture, optimization, and development planning.
                                    <br />
                                    <br />

                                    <strong>Learning Curve:</strong> The initial learning process can be more straightforward for beginners who are focusing on PHP fundamentals without learning an additional framework.
                                    <br />
                                    <br />

                                    <strong>Maintenance:</strong> Maintenance depends heavily on the quality and consistency of the custom codebase and architecture created by the development team.
                                    <br />
                                    <br />

                                    <strong>Community & Ecosystem:</strong> PHP itself has a very large community and ecosystem, although Core PHP applications may require developers to evaluate and integrate individual libraries separately.
                                    <br />
                                    <br />

                                    <strong>Testing Support:</strong> Testing is possible with Core PHP, but developers may need to configure testing tools and establish their own testing structure.
                                    <br />
                                    <br />

                                    <strong>Project Setup:</strong> Basic Core PHP projects can be started with relatively little setup, especially for simple websites or scripts.
                                    <br />
                                    <br />

                                    <strong>Performance:</strong> Core PHP can have lower overhead because developers can execute only the code and components required by the application.
                                    <br />
                                    <br />

                                    <strong>Best Suited For:</strong> Simple websites, small applications, custom solutions, prototypes, scripts, and projects where direct control and minimal framework overhead are priorities.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Laravel Advantages
                                </Typography>

                                <Typography variant="body1">
                                    Laravel has become popular in professional <strong>PHP development</strong> because it provides a broad set of tools within one ecosystem. It can be particularly useful when developers are building applications with multiple features and long-term maintenance requirements.
                                    <br />
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Faster Development" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Organized Application Structure" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Strong Ecosystem" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Built-in Development Tools" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Suitable for Scalable Projects" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Core PHP Advantages
                                </Typography>
                                <Typography variant="body1">
                                    Core PHP remains relevant because not every website needs a full framework. For smaller projects, its simplicity and flexibility can be valuable.
                                    <br />
                                    <br />
                                </Typography>

                                <List component="ul" className="list-style-disc" sx={{ pb: 2, pt: 0 }}>
                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Greater Control" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Potentially Simpler for Small Projects" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="No Framework Dependency" />
                                    </ListItem>

                                    <ListItem component="li" disablePadding>
                                        <ListItemText primary="Useful for Learning PHP Fundamentals" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Laravel or Core PHP: Which Is Better for Your Project?
                                </Typography>
                                <Typography variant="body1">
                                    The choice mostly depends on your project requirements. For a simple website, Core PHP may be a suitable option. But for a business application, SaaS platform, e-commerce website, API, or other complex project, Laravel can provide a more organised and efficient development solution.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Before Choosing, Consider:
                                </Typography>

                                <Typography variant="body1">
                                    <strong>Project Size:</strong> Core PHP works well for small projects, while Laravel can be more suitable for larger applications with multiple features.
                                    <br />
                                    <br />

                                    <strong>Development Time:</strong> Laravel offers predefined features and development tools that can help speed up the development process.
                                    <br />
                                    <br />

                                    <strong>Team Size:</strong> A framework like Laravel can make teamwork, code organisation, and collaboration easier by providing a consistent project structure.
                                    <br />
                                    <br />

                                    <strong>Maintenance:</strong> Laravel's structured approach and conventions can make long-term maintenance and updates easier.
                                    <br />
                                    <br />

                                    <strong>Customization:</strong> Core PHP gives developers more control over how the application is structured and built.
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Final Thoughts
                                </Typography>
                                <Typography variant="body1">
                                    If we selecting between Laravel and Core PHP is ultimately a project-specific decision. Laravel provides an organised ecosystem and features that can streamline the development of complex web applications. Core PHP offers flexibility and direct control, which can be useful for simpler or highly customised projects.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    <strong>For My Thought:</strong> When planning long-term{' '}
                                    <Link href="https://www.universalstreamsolution.com/how-we-help/web-design-and-development">
                                        <strong>PHP web development</strong>
                                    </Link>
                                    , Laravel can provide a practical foundation for building and maintaining feature-rich applications. For smaller projects with straightforward requirements, Core PHP may be a more direct approach.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    <strong>Important Note:</strong> Choose the technology that best suits your project, team, budget, and long-term goals, rather than simply choosing the one with more features.
                                </Typography>
                            </Box>


                            <Box className="written-by-box">
                                <Box className="written-by-box-header">
                                    <Avatar
                                        src="/images/written-by-hitesh.webp" // Replace with actual image
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

export default CompLaravlVSCore;
