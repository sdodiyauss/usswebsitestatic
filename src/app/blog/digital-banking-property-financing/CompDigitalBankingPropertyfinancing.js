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
import Blog6 from "@/blog-web-dev.webp";
import Blog7 from "@/blog-digital-banking-property-financing.webp";

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
    { id: "section2", label: "Loans That Don’t Feel Like a Chore " },
    { id: "section3", label: "Paperwork, Meet Your End " },
    { id: "section4", label: "Transparency, Finally " },
    { id: "section5", label: "Loans That Fit You, Not the Other Way Around " },
    { id: "section6", label: "Security That Actually Works " },
    { id: "section7", label: "Developers: Less Stress, More Control " },
    { id: "section8", label: "Finance From Anywhere " },
    { id: "section9", label: "Automation: A Lifesaver " },
    { id: "section10", label: "Compliance Without Headaches  " },
    { id: "section11", label: "The Future Is Already Here " },
    { id: "section12", label: "Why Adapting Matters " },
    { id: "section13", label: "Wrapping Up" },
];

const CompDigitalBankingPropertyfinancing = () => {
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
                                    <Image src={Blog7} alt="How Digital Banking is Changing Property Financing" />
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
                                                How Digital Banking is Changing Property Financing
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
                                                19th December, 2025
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
                                    Buying a property is exciting. It really is. But let’s be honest—it can also be stressful. Picking the right home, figuring out how to pay for it, and then dealing with the loan process… it’s a lot.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Remember the old days? You had to stand in line at a bank, hand over stacks of papers, wait weeks, sometimes months, just to know if your loan got approved. And if you’re a developer… don’t get me started. A delay in funds could mess up your construction schedule, and suddenly everyone’s stressed.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Well, those days? They’re fading fast. Digital tools are quietly changing the way property financing works. And it’s not just about doing things online—it’s about <strong>making the whole process faster, simpler, and way more transparent.</strong> Whether you’re buying your first home, investing in commercial property, or juggling multiple development projects, this matters to you.
                                    <br />
                                    <br />
                                </Typography>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    1. Loans That Don’t Feel Like a Chore
                                </Typography>
                                <Typography variant="body1">
                                    Ever waited weeks just to see if your home loan was approved? Yeah… frustrating, right?
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Now you can apply from your laptop, or even your phone while sipping coffee. Upload your documents, fill in your info, hit submit—and in a few days, you get a response. Banks are using clever platforms—like <strong>digital industry solutions</strong>—to check documents automatically, review credit history, and flag potential problems before they slow things down.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    And for developers? Faster approvals mean cash keeps flowing, deadlines are met, and everyone breathes a little easier. Real estate moves fast. Prices shift. Opportunities don’t wait around. Being able to act quickly is huge.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    2. Paperwork, Meet Your End
                                </Typography>

                                <Typography variant="body1">
                                    Paperwork has always been the worst part of financing. IDs, proof of income, property agreements… one missing piece and everything stops.
                                    <br />
                                    <br />
                                </Typography>

                                <Typography variant="body1">
                                    Now? Upload everything digitally, sign online, track your progress. Done. Simple. No more trips to the bank, no more lost documents.
                                </Typography>
                                <Typography variant="body1">
                                    Some platforms using <Link href="https://www.universalstreamsolution.com/contactus"> technology solutions </Link> make this process ridiculously smooth. The paperwork that once took hours—or days—is now gone in minutes.
                                    <br />
                                    <br />
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    3. Transparency, Finally
                                </Typography>
                                <Typography variant="body1">
                                    Do you know what’s happening with your loan? If the answer is no, you’re not alone. Before, buyers and developers were often left guessing.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Now, online tools give you real-time updates. Interest rates, repayment schedules, loan status—all visible instantly. Developers can see which payments went through, which are pending. Everyone knows what’s happening. Fewer surprises. Less stress. Better planning.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    4. Loans That Fit You, Not the Other Way Around
                                </Typography>

                                <Typography variant="body1">
                                    Not everyone’s finances are the same. Some people want smaller monthly payments, some want shorter terms. Old loans often treated everyone the same.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Now, banks use data to personalize loans. Interest rates, repayment schedules, and tenure are tailored to you.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Take Rajesh, for example. First-time buyer, nervous, unsure about monthly payments. He got a plan that stretched the payments out with smaller monthly installments. Meanwhile, Priya, an investor buying commercial property, got terms that fit her cash flow cycles. Personalized loans make sense—and finally, it feels fair.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    5. Security That Actually Works
                                </Typography>
                                <Typography variant="body1">
                                    High-value transactions. Sensitive info. Security is everything.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Online platforms use encryption, secure servers, and multi-factor authentication. And suspicious activity? Flagged immediately. Unlike manual record-keeping, digital systems make it easier to catch fraud. Buyers, developers, and banks all breathe a little easier.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    6. Developers: Less Stress, More Control
                                </Typography>
                                <Typography variant="body1">
                                    Handling multiple projects is tough. Cash flow, client payments, loans—it’s a lot to keep track of. Digital tools make it easier.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Developers can automate collections, monitor funds, and generate reports in seconds. Mistakes? Fewer. Stress? Less. Focus? Back on construction quality and timelines. And yes, even developers quietly celebrate when funds arrive on time—it really does make a difference. Integration with <Link href="https://www.universalstreamsolution.com/solutions/other-industry-expertise"> digital industry solutions </Link> keeps everything centralized.
                                </Typography>
                            </Box>

                            {/* Section 8 */}
                            <Box id="section8" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    7. Finance From Anywhere
                                </Typography>
                                <Typography variant="body1">
                                    Location? Doesn’t matter anymore. Investors can apply for loans, verify documents, and transfer funds online—even from another country.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    This opens global opportunities. Developers can attract international buyers. Buyers can invest in properties they might never have considered. Convenience meets opportunity.
                                </Typography>
                            </Box>

                            {/* Section 9 */}
                            <Box id="section9" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    8. Automation: A Lifesaver
                                </Typography>
                                <Typography variant="body1">
                                    Credit checks, risk assessment, and document verification are automated now. Banks can scale operations without sacrificing quality. Borrowers get faster approvals. Errors? Minimized. Experience? Smoother.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Automation doesn’t just speed things up—it also reduces human error and makes the whole process feel easier and less scary.
                                </Typography>
                            </Box>

                            {/* Section 10 */}
                            <Box id="section10" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    9. Compliance Without Headaches
                                </Typography>
                                <Typography variant="body1">
                                    Real estate rules are complicated. Digital banking platforms handle the tedious parts—reports, record-keeping, audits.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Lenders reduce mistakes. Buyers and developers avoid legal pitfalls. Everyone can focus on what really matters: the property itself.
                                </Typography>
                            </Box>
                            {/* Section 11 */}
                            <Box id="section11" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    10. The Future Is Already Here
                                </Typography>
                                <Typography variant="body1">
                                    AI-driven analytics, connected banking systems, and automated approvals are making loans faster, safer, and easier.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Imagine a system that predicts the best loan for you, flags risks before they happen, and lets you finalize financing while traveling. Sounds futuristic? It’s already happening.
                                </Typography>
                            </Box>
                            {/* Section 12 */}
                            <Box id="section12" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    11. Why Adapting Matters
                                </Typography>
                                <Typography variant="body1">
                                    Real estate is competitive. Buyers want convenience. Investors want clarity. Developers want reliable cash flow. Companies embracing digital tools are ahead of the curve.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    The key: platforms that understand both finance and real estate. Smooth workflows. Secure transactions. Scalable solutions. Do it right, and it pays off.
                                </Typography>
                            </Box>
                            {/* Section 13 */}
                            <Box id="section13" className="toc-content" sx={{ mb: 6, scrollMarginTop: isMobile ? 80 : HEADER_OFFSET + 20 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    12. Wrapping Up
                                </Typography>
                                <Typography variant="body1">
                                    Digital banking isn’t a trend—it’s transforming property financing. Faster approvals, paperless processes, transparency, personalized loans, and strong security make the process easier and more reliable for everyone.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body1">
                                    Whether you’re buying your first home, investing in commercial property, or managing large-scale development, adopting digital tools isn’t just convenient—it’s essential. Those who embrace these solutions now are positioning themselves for <strong>long-term success and sustainable growth.</strong>
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
                                    Digital banking isn’t a trend—it’s transforming property financing. Faster approvals, paperless processes, transparency, personalized loans, and strong security make the process easier and more reliable for everyone.
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

export default CompDigitalBankingPropertyfinancing;
