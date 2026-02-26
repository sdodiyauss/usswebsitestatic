"use client";

import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    List,
    ListItem,
    Link,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import CaseStudy1 from "@/casestudyoverviewimg1.webp";
import CaseStudy2 from "@/casestudyoverviewimg2.webp";
import CaseStudy3 from "@/casestudyoverviewimg3.webp";
import CaseStudy4 from "@/casestudyoverviewimg4.webp";

import NextTab from "@/right-blue.svg?url";



const TOTAL_TABS = 4;

const tabVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
};




const Casestudyoverview = () => {

    const [activeCaseStudyTab, setActiveCaseStudyTab] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setActiveCaseStudyTab(0);
            },
            { threshold: 0.3 }
        );

        const el = sectionRef.current;
        el && observer.observe(el);
        return () => el && observer.unobserve(el);
    }, []);

    const handleCaseTabClick = (index) => {
        setActiveCaseStudyTab(index);
    };

    //nexttab mobile
    const goToNextTab = () => {
        setActiveCaseStudyTab((prev) => (prev + 1) % TOTAL_TABS);
    };


    return (
        <>
            <Box
                className="case-studies-section"
                sx={{ py: { xs: 3, md: 4, lg: 5 } }}
                ref={sectionRef}
            >
                <Container className="custom-container" maxWidth="lg">
                    <Box className="heading-content">
                        <Typography variant="h2" sx={{ mb: 5, fontWeight: 700 }}>
                            Case{" "}
                            <span className="primary-color">
                                S
                                <span className="span-text">
                                    tudies
                                    <div className="line-container">
                                        <div className="line-wrapper"></div>
                                        <div className="line"></div>
                                        <div className="moving-box"></div>
                                    </div>
                                </span>
                            </span>
                        </Typography>
                    </Box>

                    {/* Tabs */}
                    <Box className="case-tab-container">
                        <Box className="case-tab-wrapper">
                            <Box
                                className={`case-tab-button ${activeCaseStudyTab === 0 ? "active" : ""
                                    }`}
                                onClick={() => handleCaseTabClick(0)}
                            >
                                <span className="case-tab-badge">1</span>
                                <Typography variant="h6" className="case-tab-label">
                                    RX Valet
                                </Typography>
                            </Box>
                            <Box
                                className={`case-tab-button ${activeCaseStudyTab === 1 ? "active" : ""
                                    }`}
                                onClick={() => handleCaseTabClick(1)}
                            >
                                <span className="case-tab-badge">2</span>
                                <Typography variant="h6" className="case-tab-label">
                                    Prescription Bliss
                                </Typography>
                            </Box>
                            <Box
                                className={`case-tab-button ${activeCaseStudyTab === 2 ? "active" : ""
                                    }`}
                                onClick={() => handleCaseTabClick(2)}
                            >
                                <span className="case-tab-badge">3</span>
                                <Typography variant="h6" className="case-tab-label">
                                    Palmstown Hall
                                </Typography>
                            </Box>
                            <Box
                                className={`case-tab-button ${activeCaseStudyTab === 3 ? "active" : ""
                                    }`}
                                onClick={() => handleCaseTabClick(3)}
                            >
                                <span className="case-tab-badge">4</span>
                                <Typography variant="h6" className="case-tab-label">
                                    Cosmo Chemistry
                                </Typography>
                            </Box>
                        </Box>

                        {/* NEXT Button */}
                        <Box className="case-tab-next" onClick={goToNextTab}>
                            <Image src={NextTab} alt="nexttab" />
                        </Box>
                    </Box>

                    {/* Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCaseStudyTab} // <-- changed from "tab-0" to activeCaseStudyTab
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                        >
                            {activeCaseStudyTab === 0 && (
                                <Grid container spacing={5} className="case-tab-content">
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Image
                                            src={CaseStudy1}
                                            alt="Rxvalet Case study"
                                            // width={300}
                                            // height={600}
                                            className="case-image"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }} className="case-description">
                                        <Box>
                                            <Typography variant="h5" className="case-title">
                                                Rx Valet: Pharmacy Savings, Prescription Discount, lower Prices Drugs Valet
                                            </Typography>

                                            <List className="case-list" component="ul">
                                                <ListItem component="li" disableGutters>
                                                    100% Secure transactions with PCI-DSS compliance
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Real-time notifications for orders and prescriptions
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Responsive design for seamless mobile access
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Scalable architecture built on CodeIgniter & MySQL
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Pharmacy portal for streamlined inventory & orders
                                                </ListItem>
                                            </List>
                                        </Box>

                                        <Box className="heading-content">
                                            <Link href="/casestudies/rxvalet-case-study" >
                                            <Button variant="contained" className="main-primary-btn">
                                                Explore More
                                            </Button>
                                            </Link>
                                        </Box>
                                    </Grid>
                                </Grid>
                            )}
                            {activeCaseStudyTab === 1 && (
                                <Grid container spacing={5} className="case-tab-content">
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Image
                                            src={CaseStudy2}
                                            alt="Prescription Bliss Case Study"
                                            // width={300}
                                            // height={600}
                                            className="case-image"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }} className="case-description">
                                        <Box>
                                            <Typography variant="h5" className="case-title">
                                                Prescription Bliss: Patient Portal &
                                                Admin Panel
                                            </Typography>

                                            <List className="case-list" component="ul">
                                                <ListItem component="li" disableGutters>
                                                    70% reduction in manual data entry workload
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    80% faster patient onboarding process
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Automated follow-ups boosted provider response rates
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    HIPAA-compliant e-signatures & document storage
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Automated payments & document management
                                                </ListItem>
                                            </List>
                                        </Box>

                                        <Box className="heading-content">
                                            <Link href="/casestudies/pb-case-study" >
                                            <Button variant="contained" className="main-primary-btn">
                                                Explore More
                                            </Button>
                                            </Link>
                                        </Box>
                                    </Grid>
                                </Grid>
                            )}
                            {activeCaseStudyTab === 2 && (
                                <Grid container spacing={5} className="case-tab-content">
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Image
                                            src={CaseStudy3}
                                            alt="Palmstown Hall Case Study"
                                            // width={300}
                                            // height={600}
                                            className="case-image"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }} className="case-description">
                                        <Box>
                                            <Typography variant="h5" className="case-title">
                                                Palmstown Hall Communication Platform (PTH): Centralized Member & Staff Communication
                                            </Typography>

                                            <List className="case-list" component="ul">
                                                <ListItem component="li" disableGutters>
                                                    70%+ boost in member engagement via chats and blogs
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Real-time visitor alerts cut gatekeeper workload
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Instant broadcasts improved admin communication
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Centralized platform replaced fragmented tools
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Secure role-based access for all users
                                                </ListItem>
                                            </List>
                                        </Box>

                                        <Box className="heading-content">
                                            <Link href="/" >
                                            <Button variant="contained" className="main-primary-btn">
                                                Explore More
                                            </Button>
                                            </Link>
                                        </Box>
                                    </Grid>
                                </Grid>
                            )}
                            {activeCaseStudyTab === 3 && (
                                <Grid container spacing={5} className="case-tab-content">
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Image
                                            src={CaseStudy4}
                                            alt="Cosmo Chemistry Case Study"
                                            // width={300}
                                            // height={600}
                                            className="case-image"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }} className="case-description">
                                        <Box>
                                            <Typography variant="h5" className="case-title">
                                                Cosmo Chemistry: Optimizing WordPress for Large Content Management
                                            </Typography>

                                            <List className="case-list" component="ul">
                                                <ListItem component="li" disableGutters>
                                                    200+ brochures managed seamlessly
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Custom UI/UX improved navigation and client experience
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Optimized WordPress backend enhanced performance
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Client managed content independently
                                                </ListItem>
                                                <ListItem component="li" disableGutters>
                                                    Scalable setup ensured long-term stability
                                                </ListItem>
                                            </List>
                                        </Box>

                                        <Box className="heading-content">
                                            <Link href="/casestudies/cosmo-chem-case-study" >
                                            <Button variant="contained" className="main-primary-btn">
                                                Explore More
                                            </Button>
                                            </Link>
                                        </Box>
                                    </Grid>
                                </Grid>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </Container>
            </Box>
        </>
    );
};

export default Casestudyoverview;
