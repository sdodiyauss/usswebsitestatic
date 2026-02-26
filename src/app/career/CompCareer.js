"use client";

import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    Dialog,
    DialogContent,
    List,
    ListItem,
    IconButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";

import CloseIcon from "@/close-vector.svg?url";

import MicrosoftDOTNETIcon from "@/microsoftdotnet.svg?url";
import hrIcon from "@/hr.svg?url";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import WorkImg from "@/work-img.svg?url";
import FestImg from "@/fest-img.svg?url";
import MoneyImg from "@/money-img.svg?url";
import InsuranceImg from "@/insurance-img.svg?url";
import FunImg from "@/fun-img.svg?url";
import OutingImg from "@/outing-img.svg?url";

import Profile from "@/profile.svg?url";
import MedalStar from "@/medal-star.svg?url";
import Location from "@/location.svg?url";

import Apply from "@/apply.gif";
import FinalOfr from "@/final-ofr.gif";
import Intro from "@/intro.gif";
import ResumeReview from "@/resume-review.gif";
import Skills from "@/skills.gif";

import WhoWeAre from "@/who-we-are.webp";


import Contact from "~/contact/Contactformsecond";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import Contactcareer from "~/contact/Contactcareer";
import Metadata from "~/meta/Metadata";

import BharatBhai from "@/uss-employee/bharatbhai.webp";
import HiteshBhai from "@/uss-employee/hiteshbhai.webp";
import Tasmin from "@/uss-employee/tasmin.webp";
import Ishita from "@/uss-employee/ishita.webp";
import Vaishali from "@/uss-employee/vaishali.webp";
import Urja from "@/uss-employee/urja.webp";

export const jobData = [
    {
        title: "Jr. Dot Net Developer",
        logo: MicrosoftDOTNETIcon,
        alt: ".NET",
        position: "01 Position",
        experience: "1+ years",
        location: "Ahmedabad",
        aboutRole: "We are looking for a motivated Jr. .NET Developer to join our dynamic development team. You will work on designing, developing, and maintaining web and desktop applications using the .NET framework. This is an excellent opportunity for a passionate developer to grow their career in a collaborative environment.",
        responsibilities: [
            "Develop, test, and maintain web and desktop applications using C#, ASP.NET, and .NET Core.",
            "Collaborate with senior developers, project managers, and QA teams to deliver high-quality software solutions.",
            "Troubleshoot, debug, and resolve application issues in a timely manner.",
            "Participate in code reviews and contribute to team knowledge sharing.",
            "Assist in documentation of technical specifications and user manuals.",
            "Stay up-to-date with emerging .NET technologies and best practices."
        ],
        requiredSkills: [
            "1+ years of experience in .NET development (ASP.NET, .NET Core, C#).",
            "Basic knowledge of SQL Server, database design, and querying.",
            "Familiarity with HTML, CSS, JavaScript, and front-end frameworks is a plus.",
            "Understanding of OOP concepts, design patterns, and software development lifecycle.",
            "Strong problem-solving skills and attention to detail.",
            "Ability to work independently and collaboratively in a team environment.",
        ]
    },
    {
        title: "HR Executive",
        logo: hrIcon,
        alt: "HR",
        position: "01 Position",
        experience: "0-1 years",
        location: "Ahmedabad",
        aboutRole: "We are looking for an enthusiastic HR Executive to join our growing team. The ideal candidate will be responsible for handling the end-to-end recruitment process, employee engagement activities, and HR operations. This is a great opportunity for someone who wants to start their career in human resources and grow in a dynamic and supportive environment.",
        responsibilities: [
            "Manage the recruitment and onboarding process.",
            "Conduct employee engagement activities to build a positive work culture.",
            "Maintain HR documentation and employee records.",
            "Support daily HR operations and assist with payroll coordination.",
            "Ensure compliance with company policies and labor laws.",
            "Assist in performance management and employee relations.",
        ],
        requiredSkills: [
            "Master's Degree in MBA (Human Resources).",
            "Excellent communication and interpersonal skills.",
            "Good understanding of HR policies, procedures, and documentation.",
            "Strong organizational and multitasking abilities.",
            "Detail-oriented with problem-solving and teamwork skills.",
            "Proficiency in MS Office tools (Word, Excel, PowerPoint).",
        ]
    }
];

export const teamDescriptions = {
    "Urja Shah":
        "USS has best culture, has the best working environment. All the employees are very friendly nature and are always ready to help.",
    "Bharat Katariya":
        "USS offers a supportive, family-like environment with a positive and collaborative culture, helping employees learn, grow, and thrive both personally and professionally.",
    "Tasmin Hirapara":
        "Grateful to start my career with Universal Stream Solution! The supportive team, real-world MERN projects, & friendly environment make it a perfect place to grow and learn.",
    "Ishita Mangaroliya":
        "Working at USS as a Jr. Frontend Developer has been a good start to my career. I learned many new things, got real project experience, and always felt supported by my team.",
    "Vaishali Gadher":
        "USS offers a great work environment with supportive colleagues, creative projects, and endless learning opportunities — a perfect place to grow, collaborate, and enjoy work.",
    "Hitesh Khatwani":
        "Over eight years at USS, I grew from Junior PHP Developer to Senior Full Stack Developer, gaining diverse tech experience, leadership skills, and immense professional growth.",
};

const teamMembers = [
    { name: "Bharat Katariya", role: "Team Leader", image: BharatBhai },
    { name: "Hitesh Khatwani", role: "Sr. Full Stack Developer", image: HiteshBhai },
    { name: "Vaishali Gadher", role: "QA Engineer", image: Vaishali },
    { name: "Urja Shah", role: "Jr. Business Development Executive", image: Urja },
    { name: "Tasmin Hirapara", role: "Jr. Developer", image: Tasmin },
    { name: "Ishita Mangaroliya", role: "Jr. Frontend Developer", image: Ishita },
];


const fadeInUp = {
    initial: { opacity: 0, y: 45 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
    },
    viewport: { once: true, amount: 0.3 },
};

const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    viewport: { once: true, amount: 0.2 }
};

const CompCareer = () => {
    //heading animation
    useEffect(() => {
        const headings = document.querySelectorAll(".animate-heading");

        headings.forEach((heading) => {
            // Wrap text in span.letter
            const wrapTextWithSpans = (node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const fragment = document.createDocumentFragment();
                    node.textContent.split("").forEach((char) => {
                        const span = document.createElement("span");
                        span.className = "letter";
                        span.textContent = char === " " ? "\u00A0" : char;
                        fragment.appendChild(span);
                    });
                    return fragment;
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    const clone = node.cloneNode(false);
                    node.childNodes.forEach((child) => {
                        clone.appendChild(wrapTextWithSpans(child));
                    });
                    return clone;
                } else {
                    return node.cloneNode(true);
                }
            };

            // Apply spans
            const newContent = wrapTextWithSpans(heading);
            heading.innerHTML = "";
            heading.appendChild(newContent);

            const letters = heading.querySelectorAll(".letter");

            // Observe with IntersectionObserver
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            letters.forEach((letter, index) => {
                                letter.classList.add("visible");
                                letter.style.transitionDelay = `${index * 20}ms`;
                            });
                        } else {
                            letters.forEach((letter, index) => {
                                letter.classList.remove("visible");
                                letter.style.transitionDelay = `${(letters.length - index) * 15
                                    }ms`;
                            });
                        }
                    });
                },
                {
                    root: null,
                    threshold: 0,
                    rootMargin: "0px 0px -250px 0px", // 250px before bottom
                }
            );

            observer.observe(heading);

            // Add scroll listener to stop animation when top <= 0
            const handleScroll = () => {
                const rect = heading.getBoundingClientRect();
                if (rect.top <= 0) {
                    letters.forEach((letter) => {
                        letter.classList.add("visible");
                        letter.style.transitionDelay = "0ms";
                    });
                }
            };

            window.addEventListener("scroll", handleScroll);

            // Cleanup
            return () => {
                observer.disconnect();
                window.removeEventListener("scroll", handleScroll);
            };
        });
    }, []);

    const [open, setOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const handleOpen = (job) => {
        setSelectedJob(job);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedJob(null);
    };

    const [projectStatus, setProjectStatus] = useState("");

    return (
        <>
            {/* <Metadata
        title="Join Our Team | Careers at Universal Stream Solution"
        description="Discover growth, learning, and innovation. Join a team where your ideas matter. Start your journey with Universal Stream Solution today."
      /> */}

            {/* career-banner */}
            <motion.section {...fadeIn}>
                <Box
                    className="healthcare-banner-section"
                    sx={{ pb: { xs: 3, md: 4, lg: 5 } }}
                >
                    <Container className="custom-container" maxWidth="lg">
                        <Grid container spacing={2} justifyContent="center">
                            <Grid size={{ xs: 12, md: 8 }}>
                                <Box className="heading-content heading-content-spacing">
                                    <Typography variant="h6" paragraph sx={{ mb: 3 }}>
                                        We don't do boring. We do bugs, builds, and big ideas.
                                    </Typography>
                                    <Typography variant="h1" sx={{ color: "#f28c38" }}>
                                        Bring Your Skills, Quirks & Headphones - Your Seat's Waiting
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                    <Image src={HalfBlue} alt="shape" className="half-blue-shape" />
                    <Image
                        src={HalfOrange}
                        alt="shape"
                        className="half-orange-shape"
                    />
                    <Image src={OrangeStar} alt="shape" className="star1" />
                    <Image src={OrangeStar} alt="shape" className="star2" />
                    <Image src={BlueStar} alt="shape" className="star3" />
                    <Image src={BlueStar} alt="shape" className="star4" />
                    <Image src={BlueStar} alt="shape" className="star5" />
                </Box>
            </motion.section>

            <motion.section {...fadeInUp}>
                <Box>
                    <Container className="custom-container" maxWidth="lg">
                        <Grid container spacing={2} justifyContent="center">
                            <Grid size={12}>
                                <Image
                                    src={WhoWeAre}
                                    alt="USS Career"
                                    className="career-banner"
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </motion.section>

            {/* open job role */}
            <Container
                className="custom-container jobs-container"
                maxWidth="lg"
                sx={{ py: { xs: 3, md: 4, lg: 5 } }}
            >
                <motion.section {...fadeInUp}>
                    <Box className="heading-content" sx={{ my: 2 }}>
                        <Typography
                            variant="h2"
                            align="center"
                            sx={{ mb: 1, fontWeight: 700 }}
                        >
                            Your Next Exciting{" "}
                            <span className="primary-color">
                                Opportunity A
                                <span className="span-text">
                                    waits
                                    <div className="line-container">
                                        <div className="line-wrapper"></div>
                                        <div className="line"></div>
                                        <div className="moving-box"></div>
                                    </div>
                                </span>
                            </span>
                        </Typography>
                        <Typography variant="h6" paragraph align="center" sx={{ mb: 4 }}>
                            Join a team where Mondays feel less Monday-ish.
                        </Typography>
                    </Box>
                </motion.section>

                <motion.section {...fadeIn}>
                    <Grid container spacing={3}>
                        {jobData.map((job, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Box className="job-card">
                                    <Box className="job-header">
                                        <Typography variant="h6" className="job-title">
                                            {job.title}
                                        </Typography>
                                        <Image
                                            src={job.logo}
                                            alt={job.alt}
                                            width={40}
                                            height={40}
                                            className="job-logo"
                                        />
                                    </Box>

                                    <Box className="job-info">
                                        <Box className="info-row">
                                            <Image src={Profile} alt="position" />
                                            <Typography>{job.position}</Typography>
                                        </Box>
                                        <Box className="info-row">
                                            <Image src={MedalStar} alt="Experience" />
                                            <Typography>{job.experience}</Typography>
                                        </Box>
                                        <Box className="info-row">
                                            <Image src={Location} alt="Location" />
                                            <Typography>{job.location}</Typography>
                                        </Box>
                                    </Box>

                                    <Box className="heading-content">
                                        <Button
                                            variant="contained"
                                            className="main-primary-btn apply-btn"
                                            sx={{ width: "100%" }}
                                            onClick={() => handleOpen(job)}
                                        >
                                            Apply
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}

                        <Dialog
                            className="job-modal-box-wrapper"
                            open={open}
                            onClose={handleClose}
                            maxWidth="md"
                            fullWidth
                        >
                            {/* Close Button */}
                            <IconButton className="modal-close-icon" onClick={handleClose}>
                                <Image src={CloseIcon} alt="close" />
                            </IconButton>

                            <DialogContent className="job-modal-box">
                                {selectedJob && (
                                    <Box className="job-modal-content job-card">
                                        <Box className="job-header modal-header">
                                            <Box className="w-70">
                                                <Typography variant="h5" className="job-title">
                                                    {selectedJob.title}
                                                </Typography>
                                                <Box className="job-info modal-info-row">
                                                    <Box className="info-row">
                                                        <Image src={Profile} alt="position" />
                                                        <Typography>{selectedJob.position}</Typography>
                                                    </Box>
                                                    <Box className="info-row">
                                                        <Image src={MedalStar} alt="Experience" />
                                                        <Typography>{selectedJob.experience}</Typography>
                                                    </Box>
                                                    <Box className="info-row">
                                                        <Image src={Location} alt="Location" />
                                                        <Typography>{selectedJob.location}</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Image
                                                src={selectedJob.logo}
                                                alt={selectedJob.alt}
                                                width={40}
                                                height={40}
                                                className="job-logo"
                                            />
                                        </Box>

                                        {/* About */}
                                        <Box className="modal-section">
                                            <Typography variant="h6" fontWeight="bold">
                                                About this role
                                            </Typography>
                                            <Typography variant="body2" className="modal-text">
                                                {selectedJob.aboutRole}
                                            </Typography>
                                        </Box>

                                        <Box className="modal-section">
                                            <Typography variant="h6" fontWeight="bold">
                                                Roles & Responsibilities
                                            </Typography>
                                            <List className="modal-list" component="ul">
                                                {selectedJob.responsibilities.map((item, index) => (
                                                    <ListItem
                                                        key={index}
                                                        disableGutters
                                                        component="li"
                                                        className="modal-list-item"
                                                    >
                                                        {item}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Box>

                                        <Box className="modal-section">
                                            <Typography variant="h6" fontWeight="bold">
                                                Required Skills & Qualifications
                                            </Typography>
                                            <List className="modal-list" component="ul">
                                                {selectedJob.requiredSkills.map((item, index) => (
                                                    <ListItem
                                                        key={index}
                                                        disableGutters
                                                        component="li"
                                                        className="modal-list-item"
                                                    >
                                                        {item}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Box>

                                        {/* Apply Button */}
                                        <Box className="heading-content">
                                            <Button
                                                variant="contained"
                                                className="main-primary-btn apply-btn"
                                                sx={{ mt: 2 }}
                                                onClick={() => {
                                                    setOpen(false);
                                                    setFormOpen(true);
                                                }}
                                            >
                                                Apply
                                            </Button>
                                        </Box>
                                    </Box>
                                )}
                            </DialogContent>
                        </Dialog>

                        <Dialog
                            className="job-modal-box-wrapper"
                            open={formOpen}
                            onClose={() => setFormOpen(false)}
                            maxWidth="md"
                            fullWidth
                        >
                            <IconButton
                                className="modal-close-icon"
                                onClick={() => setFormOpen(false)}
                            >
                                <Image src={CloseIcon} alt="close" />
                            </IconButton>

                            <DialogContent className="job-modal-box">
                                {selectedJob && (
                                    <Box className="job-modal-content job-card">
                                        <Box className="job-header modal-header">
                                            <Box className="w-70">
                                                <Typography variant="h5" className="job-title">
                                                    Apply for {selectedJob.title}
                                                </Typography>
                                                <Box className="job-info modal-info-row">
                                                    <Box className="info-row">
                                                        <Image src={Profile} alt="position" />
                                                        <Typography>{selectedJob.position}</Typography>
                                                    </Box>
                                                    <Box className="info-row">
                                                        <Image src={MedalStar} alt="Experience" />
                                                        <Typography>{selectedJob.experience}</Typography>
                                                    </Box>
                                                    <Box className="info-row">
                                                        <Image src={Location} alt="Location" />
                                                        <Typography>{selectedJob.location}</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Image
                                                src={selectedJob.logo}
                                                alt={selectedJob.alt}
                                                width={40}
                                                height={40}
                                                className="job-logo"
                                            />
                                        </Box>

                                        <Box sx={{ pt: 4 }}>
                                            <Box className="career-contact-form">
                                                <Contactcareer selectedJobTitle={selectedJob.title} />
                                            </Box>
                                        </Box>
                                    </Box>
                                )}
                            </DialogContent>
                        </Dialog>
                    </Grid>
                </motion.section>
            </Container>


            {/* Process line Section */}
            <motion.section {...fadeInUp}>
                <Container
                    className="custom-container"
                    maxWidth="lg"
                    sx={{ py: { xs: 3 } }}
                >
                    <Box className="heading-content logo-swiper-box-title">
                        <Typography
                            variant="h2"
                            align="center"
                            sx={{ mt: 2, mb: 3, fontWeight: 700 }}
                        >
                            From Scroll to Signed Offer{" "}
                            <span className="primary-color">
                                — What Happens in B
                                <span className="span-text">
                                    etween
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
            </motion.section>
            <motion.section {...fadeInUp}>
                <Box className="timeline-wrapper">
                    <Box className="timeline-line"></Box>
                    <Box className="progress-line"></Box>

                    <Container className="custom-container">
                        <Box className="timeline-container">
                            <Box className="timeline-step odd">
                                <Typography variant="body1" className="step-text">
                                    Step 1
                                </Typography>
                                <Image
                                    src={Apply}
                                    alt="Apply"
                                    width={100}
                                    height={100}
                                    unoptimized
                                />
                                <Typography variant="body1" className="step-text-description">
                                    Hit "Apply"
                                </Typography>
                            </Box>

                            <Box className="timeline-step even">
                                <Typography variant="body1" className="step-text-description">
                                    The Stare-At-Your-Resume Phase
                                </Typography>
                                <Image
                                    src={ResumeReview}
                                    alt="Resume Review"
                                    width={100}
                                    height={100}
                                    unoptimized
                                />
                                <Typography variant="body1" className="step-text">
                                    Step 2
                                </Typography>
                            </Box>

                            <Box className="timeline-step odd">
                                <Typography variant="body1" className="step-text">
                                    Step 3
                                </Typography>
                                <Image
                                    src={Intro}
                                    alt="Introduction"
                                    width={100}
                                    height={100}
                                    unoptimized
                                />
                                <Typography variant="body1" className="step-text-description">
                                    The Friendly Interrogation
                                </Typography>
                            </Box>

                            <Box className="timeline-step even">
                                <Typography variant="body1" className="step-text-description">
                                    Prove Your Superpowers
                                </Typography>
                                <Image
                                    src={Skills}
                                    alt="Prove Skills"
                                    width={100}
                                    height={100}
                                    unoptimized
                                />
                                <Typography variant="body1" className="step-text">
                                    Step 4
                                </Typography>
                            </Box>

                            <Box className="timeline-step odd">
                                <Typography variant="body1" className="step-text">
                                    Step 5
                                </Typography>
                                <Image
                                    src={FinalOfr}
                                    alt="Final Offer"
                                    width={100}
                                    height={100}
                                    unoptimized
                                />
                                <Typography variant="body1" className="step-text-description">
                                    Meet the Squad & Get the Offer
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </motion.section>

            {/* environment */}
            <motion.section {...fadeInUp}>
                <Box className="environment-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
                    <Container className="custom-container" maxWidth="lg">
                        <Box className="heading-content">
                            <Typography variant="h2" sx={{ mb: 5, fontWeight: 700 }}>
                                And the Cherry on Top?{" "}
                                <span className="primary-color">
                                    Sweet Extras Coming Yo
                                    <span className="span-text">
                                        ur Way
                                        <div className="line-container">
                                            <div className="line-wrapper"></div>
                                            <div className="line"></div>
                                            <div className="moving-box"></div>
                                        </div>
                                    </span>
                                </span>
                            </Typography>
                        </Box>

                        <Box className="environment-wrapper">
                            <Grid container spacing={3}>
                                {/* Row 1 */}
                                <Grid container spacing={3}>
                                    {/* Left Column - 4 cols */}
                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <Box className="environment-card env-purple">
                                            <Box className="env-purple-inner-box">
                                                <Typography variant="h5">Work life balance</Typography>
                                                <Image
                                                    src={WorkImg}
                                                    alt="Work Life Balance"
                                                    className="env-image md-env-img"
                                                />
                                                <Typography variant="body1">
                                                    We believe in work-life balance so strong, even your
                                                    calendar starts taking weekends seriously.
                                                </Typography>
                                            </Box>
                                            <Image
                                                src={WorkImg}
                                                alt="Work Life Balance"
                                                className="env-image md-none-env-img"
                                            />
                                        </Box>
                                    </Grid>

                                    {/* Right Column - 8 cols */}
                                    <Grid container size={{ xs: 12, md: 8 }} spacing={3}>
                                        {/* Top row full width */}
                                        <Grid size={{ xs: 12 }}>
                                            <Box className="environment-card env-pink">
                                                <Box>
                                                    <Typography variant="h5">
                                                        Festival Celebration
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        Festivals with colors, sweets, dance, joy, and awkward
                                                        group photos.
                                                    </Typography>
                                                </Box>
                                                <Image
                                                    src={FestImg}
                                                    alt="Festive Celebration"
                                                    className="env-image"
                                                />
                                            </Box>
                                        </Grid>

                                        {/* Bottom row two cols */}
                                        <Grid size={{ xs: 12, md: 6 }}>
                                            <Box className="environment-card env-yellow">
                                                <Box>
                                                    <Typography variant="h5">
                                                        Competitive Package
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        We pay what you're worth—no discounts on real talent.
                                                    </Typography>
                                                </Box>
                                                <Image src={MoneyImg} alt="Competitive Package" className="env-image" />
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 12, md: 6 }}>
                                            <Box className="environment-card env-green">
                                                <Box>
                                                    <Typography variant="h5">Health Insurance</Typography>
                                                    <Typography variant="body1">
                                                        Health first—solid insurance that covers your back,
                                                        heart, and teeth.
                                                    </Typography>
                                                </Box>
                                                <Image
                                                    src={InsuranceImg}
                                                    alt="Health Insurance"
                                                    className="env-image"
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* Row 2 */}
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Box className="environment-card env-peach">
                                            <Box>
                                                <Typography variant="h5">Fun Activities</Typography>
                                                <Typography variant="body1">
                                                    Monthly fun, team face-offs, dancefloor chaos—scheduled
                                                    joy, not optional.
                                                </Typography>
                                            </Box>
                                            <Image src={FunImg} alt="Fun Activities at USS" className="env-image" />
                                        </Box>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Box className="environment-card env-blue">
                                            <Box>
                                                <Typography variant="h5">Team Outings</Typography>
                                                <Typography variant="body1">
                                                    Legendary outings—treks, tacos, no Zoom, all
                                                    Instagram-worthy moments.
                                                </Typography>
                                            </Box>
                                            <Image src={OutingImg} alt="Team Outing" className="env-image" />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </motion.section>

            {/* teams Swiper Section */}
            <Box sx={{ py: { xs: 3, md: 4, lg: 5 } }} className="healthcare-section">
                <Grid container spacing={4} alignItems="center">
                    {/* Left Side */}
                    <Grid size={{ xs: 12, sm: 5, md: 4 }} className="heading-content">
                        <Box>
                            <Typography variant="h2" sx={{ my: 2, fontWeight: 700 }}>
                                Honest reviews,{" "}
                                <span className="primary-color">
                                    no HR-approved s
                                    <span className="span-text">
                                        cripts.
                                        <div className="line-container">
                                            <div className="line-wrapper"></div>
                                            <div className="line"></div>
                                            <div className="moving-box"></div>
                                        </div>
                                    </span>
                                </span>
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Swiper Cards */}
                    <Grid size={{ xs: 12, sm: 7, md: 8 }}>
                        <Swiper
                            className="team-swiper"
                            modules={[Mousewheel, Navigation]}
                            loop={true}
                            navigation
                            mousewheel={{ sensitivity: 1, releaseOnEdges: true }}
                            spaceBetween={24}
                            slidesPerView={4.3}
                            breakpoints={{
                                0: { slidesPerView: 1.2 },
                                768: { slidesPerView: 1.2 },
                                1024: { slidesPerView: 2.3 },
                                1921: { slidesPerView: 2.3 },
                            }}
                        >
                            {teamMembers.map((member, index) => (
                                <SwiperSlide key={index}>
                                    <Box className="team-card">
                                        <Box className="image-container">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                className="team-image"
                                            />
                                            {/* <Tooltip
                        title={
                          <Typography sx={{ fontSize: 14, lineHeight: 1.4 }}>
                            {teamDescriptions[member.name]}
                          </Typography>
                        }
                        placement="top"
                        arrow
                        componentsProps={{
                          tooltip: {
                            sx: {
                              backgroundColor: "rgba(51, 51, 51, 0.9)", 
                              color: "#fff",        
                              fontSize: 14,
                              fontFamily: "var(--font-outfit)",
                              padding: "12px 16px",
                              borderRadius: "8px",
                              maxWidth: 500,
                              textAlign: "center",
                              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                            },
                          },
                          arrow: {
                            sx: {
                              color: "#333", 
                            },
                          },
                        }}
                      > */}
                                            <Box className="hover-description" >
                                                <Typography variant="body2" className="hover-text">
                                                    {teamDescriptions[member.name]}
                                                </Typography>
                                            </Box>
                                            {/* </Tooltip> */}
                                        </Box>
                                        <Box className="text-content">
                                            <Typography variant="body1" className="member-name">
                                                {member.name}
                                            </Typography>
                                            <Typography variant="caption" className="member-role">
                                                {member.role}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Grid>
                </Grid>
            </Box>

            {/* culture section */}
            <motion.section {...fadeInUp}>
                <Box
                    className="culture-section"
                    sx={{ py: { xs: 3, md: 4, lg: 5 }, my: { xs: 3, md: 4, lg: 5 } }}
                    bgcolor="#000000"
                >
                    {/* Content container above particles */}
                    <Container className="custom-container" maxWidth="lg">
                        <Box className="heading-content" pb={4}>
                            <Typography
                                variant="h2"
                                align="center"
                                sx={{ my: 2, color: "white", fontWeight: 700 }}
                            >
                                Culture That{" "}
                                <span className="primary-color">
                                    Codes &{" "}
                                    <span className="span-text">
                                        Cackles
                                        <div className="line-container">
                                            <div className="line-wrapper"></div>
                                            <div className="line"></div>
                                            <div className="moving-box"></div>
                                        </div>
                                    </span>
                                </span>
                            </Typography>
                        </Box>
                        <Grid container spacing={4} className="culture-vibes">
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box className="vibe-item">
                                    <Typography variant="h6" className="vibe-title">
                                        Multiverse Vibes Only 🌌
                                    </Typography>
                                    <Typography className="vibe-desc">
                                        Anime, AI, astrology—fandoms welcome.
                                    </Typography>
                                </Box>
                                <Box className="vibe-item">
                                    <Typography variant="h6" className="vibe-title">
                                        Friends? Nah. We're Family 👊
                                    </Typography>
                                    <Typography className="vibe-desc">
                                        Colleagues who roast and support.
                                    </Typography>
                                </Box>
                                <Box className="vibe-item">
                                    <Typography variant="h6" className="vibe-title">
                                        Main Character Vibes
                                    </Typography>
                                    <Typography className="vibe-desc">
                                        Not colleagues—friends who've got you.
                                    </Typography>
                                </Box>
                                <Box className="vibe-item">
                                    <Typography variant="h6" className="vibe-title">
                                        No Judgement, Just Juice 🧃
                                    </Typography>
                                    <Typography className="vibe-desc">
                                        Weird lunches, loud playlists, good vibes.
                                    </Typography>
                                </Box>
                                <Box className="vibe-item">
                                    <Typography variant="h6" className="vibe-title">
                                        We Don't 'Network' — We Bond 💫
                                    </Typography>
                                    <Typography className="vibe-desc">
                                        Memes, chai, no trust falls.
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box className="vibe-item">
                                    <Typography variant="h6" className="vibe-title">
                                        Deadlines Are Real, So Is Karaoke 🎤
                                    </Typography>
                                    <Typography className="vibe-desc">
                                        Code fast, scream 90s bops.
                                    </Typography>
                                </Box>
                                <Box className="vibe-item">
                                    <Typography variant="h6" className="vibe-title">
                                        Feedback, Not Feuds 🧠
                                    </Typography>
                                    <Typography className="vibe-desc">
                                        Feedback, sarcasm, donuts—no filters.
                                    </Typography>
                                </Box>
                                <Box className="vibe-item">
                                    <Typography variant="h6" className="vibe-title">
                                        Desk = Shrine Of Personality 🧸
                                    </Typography>
                                    <Typography className="vibe-desc">
                                        Anime figs, Gary, decorate freely.
                                    </Typography>
                                </Box>
                                <Box className="vibe-item">
                                    <Typography variant="h6" className="vibe-title">
                                        Work Hard, Meme Harder 💻🔥
                                    </Typography>
                                    <Typography className="vibe-desc">
                                        Build cool stuff, never skip memes.
                                    </Typography>
                                </Box>
                                <Box className="vibe-item">
                                    <Typography variant="h6" className="vibe-title">
                                        We're All About “BLEMS” 🧩
                                    </Typography>
                                    <Typography className="vibe-desc">
                                        Vibes, memes, sarcasm—you're in.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </motion.section>

            {/* contact form */}
            <motion.section {...fadeInUp}>
                <Container className="custom-container" maxWidth="lg">
                    <Box className="heading-content">
                        <Typography
                            variant="h2"
                            align="center"
                            sx={{ mt: 6, mb: 4, fontWeight: 700 }}
                        >
                            Your Dream Job?{" "}
                            <span className="primary-color">
                                {" "}
                                It Starts{" "}
                                <span className="span-text">
                                    Here
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
                <Box sx={{ pb: { xs: 3, md: 4, lg: 5 } }}>
                    <Contact />
                </Box>
            </motion.section>
        </>
    );
};

export default CompCareer;
