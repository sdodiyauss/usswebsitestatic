"use client";

import React from "react";
import {
    Box,
    Typography,
    Container,
} from "@mui/material";
import "swiper/css";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import homestep1Icon from "~/homestep1.json";
import homestep2Icon from "~/homestep2.json";
import homestep3Icon from "~/homestep3.json";
import homestep4Icon from "~/homestep4.json";
import homestep5Icon from "~/homestep5.json";

const fadeInUp = {
    initial: { opacity: 0, y: 45 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
    },
    viewport: { once: true, amount: 0.3 },
};


export default function Timelinewrapper() {

    //progress line
    // useEffect(() => {
    //   const progressLine = document.querySelector('.progress-line');
    //   const steps = document.querySelectorAll('.timeline-step');
    //   const wrapper = document.querySelector('.timeline-wrapper');
    //   let animationInterval = null;
    //   let animationTimeout = null;

    //   function resetSteps() {
    //     steps.forEach(step => step.classList.remove('active'));
    //   }

    //   function resetProgressLine() {
    //     const isMobile = window.innerWidth <= 560;
    //     progressLine.style.transition = 'none';
    //     if (isMobile) {
    //       progressLine.style.height = '0%';
    //       progressLine.style.width = '2px';
    //     } else {
    //       progressLine.style.width = '0%';
    //       progressLine.style.height = '2px';
    //     }
    //   }

    //   function updateActiveSteps() {
    //     const isMobile = window.innerWidth <= 560;
    //     const progressRect = progressLine.getBoundingClientRect();

    //     steps.forEach(step => {
    //       const stepRect = step.getBoundingClientRect();
    //       let stepCenter = isMobile ? stepRect.top - 10 : stepRect.left - 50;
    //       let progressEnd = isMobile
    //         ? progressRect.top + progressRect.height
    //         : progressRect.left + progressRect.width;

    //       if (stepCenter < progressEnd) {
    //         step.classList.add('active');
    //       } else {
    //         step.classList.remove('active');
    //       }
    //     });
    //   }

    //   function animateProgress() {
    //     resetSteps();
    //     resetProgressLine();

    //     requestAnimationFrame(() => {
    //       requestAnimationFrame(() => {
    //         const isMobile = window.innerWidth <= 560;
    //         progressLine.style.transition = isMobile ? 'height 7s linear' : 'width 7s linear';
    //         if (isMobile) {
    //           progressLine.style.height = '100%';
    //         } else {
    //           progressLine.style.width = '100%';
    //         }

    //         animationInterval = setInterval(updateActiveSteps, 400);

    //         // Looping disabled
    //         // animationTimeout = setTimeout(() => {
    //         //   clearInterval(animationInterval);
    //         //   animateProgress(); // loop again
    //         // }, 10000);
    //       });
    //     });
    //   }

    //   function stopAnimation() {
    //     clearInterval(animationInterval);
    //     clearTimeout(animationTimeout);
    //     resetSteps();
    //     resetProgressLine();
    //   }

    //   const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //       if (entry.isIntersecting) {
    //         animateProgress();
    //       } else {
    //         stopAnimation();
    //       }
    //     });
    //   }, { threshold: 0.5 });

    //   if (wrapper) {
    //     observer.observe(wrapper);
    //   }

    //   return () => {
    //     observer.disconnect();
    //     clearInterval(animationInterval);
    //     clearTimeout(animationTimeout);
    //   };
    // }, []);

    return (
        <>
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
                                <Lottie
                                    animationData={homestep1Icon}
                                    loop={true}
                                    style={{ width: 40, height: 40 }}
                                />
                                <Typography variant="body1" className="step-text-description">
                                    We analysis at micro level
                                </Typography>
                            </Box>

                            <Box className="timeline-step even">
                                <Typography variant="body1" className="step-text-description">
                                    We design with integrity
                                </Typography>
                                <Lottie
                                    animationData={homestep2Icon}
                                    loop={true}
                                    style={{ width: 50, height: 50 }}
                                />
                                <Typography variant="body1" className="step-text">
                                    Step 2
                                </Typography>
                            </Box>

                            <Box className="timeline-step odd">
                                <Typography variant="body1" className="step-text">
                                    Step 3
                                </Typography>
                                <Lottie
                                    animationData={homestep3Icon}
                                    loop={true}
                                    style={{ width: 50, height: 50 }}
                                />
                                <Typography variant="body1" className="step-text-description">
                                    We develop securely
                                </Typography>
                            </Box>

                            <Box className="timeline-step even">
                                <Typography variant="body1" className="step-text-description">
                                    We Launch Confidently
                                </Typography>
                                <Lottie
                                    animationData={homestep4Icon}
                                    loop={true}
                                    style={{ width: 50, height: 50 }}
                                />
                                <Typography variant="body1" className="step-text">
                                    Step 4
                                </Typography>
                            </Box>

                            <Box className="timeline-step odd">
                                <Typography variant="body1" className="step-text">
                                    Step 5
                                </Typography>
                                <Lottie
                                    animationData={homestep5Icon}
                                    loop={true}
                                    style={{ width: 50, height: 50 }}
                                />
                                <Typography variant="body1" className="step-text-description">
                                    We Ensure In-Depth & Consistent Support
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </motion.section>
        </>
    );
}
