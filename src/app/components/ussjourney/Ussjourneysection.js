"use client";

import React from "react";
import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import {  Mousewheel } from "swiper/modules";
import {
  Box,
  Typography,
  Container,
  Grid,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";
import BlueCircle from "@/bluecircle.webp";


import Ussjournery1 from "@/ussjournery1.webp";
import Ussjournery2 from "@/ussjournery2.webp";
import Ussjournery3 from "@/ussjournery3.webp";
import Ussjournery4 from "@/ussjournery4.webp";
import Ussjournery5 from "@/ussjournery5.webp";
import Ussjournery6 from "@/ussjournery6.webp";


const journeyData = [
  {
    year: "2013",
    title: "USS Born",
    description:
      "When we started Universal Stream Solution back in 2013, it was just four of us — a small team with big dreams. We didn’t have a fancy office or a big budget, but we had something stronger: passion, determination, and a vision to create reliable and meaningful tech solutions for businesses.",
    image: Ussjournery1,
    priority: true,
    alttext: "USS Born"
  },
  {
    year: "2014",
    title: "Going Global",
    description:
      "2014, we had the opportunity to expand into the US and Canadian markets. That was a big step for us. It pushed us to level up — not just in terms of technical skills, but also in how we approached service, communication, and quality. Working with global clients helped us mature quickly and strengthened our belief in what we were building.",
    image: Ussjournery2,
    alttext: "USS Globalization",
  },
  {
    year: "2015",
    title: "Stepping into Healthcare",
    description:
      "2015, we entered the pharmacy and healthcare space. This move was deeply meaningful to us. We started creating digital tools that helped pharmacies manage prescriptions, connect with patients, and stay compliant. It wasn’t just about software anymore — it was about improving lives through technology, and that felt incredibly rewarding.",
    image: Ussjournery3,
    alttext: "Enter Healthcare Industry",
  },
  {
    year: "2017",
    title: "Expanding Services",
    description:
      "2017, we knew it was time to offer more. We expanded our services beyond web development to include mobile app development and digital marketing. Our goal was to provide full digital support — from idea to launch and beyond.",
    image: Ussjournery4,
    alttext: "Expanding USS Services",
  },
  {
    year: "2023",
    title: "A New Chapter",
    description:
      "Then came 2023, a proud moment in our journey — we officially became a Private Limited Company. For us, it marked our evolution from a humble startup to a more structured, reliable, and mature business. It also opened doors to bigger opportunities and helped build even more trust with our partners and clients.",
    image: Ussjournery5,
    alttext: "New USS Journey Begin",
  },
  {
    year: "2025",
    title: "Stronger Than Ever",
    description:
      "Today, in 2025, we’re a growing team of 20 talented people — developers, designers, project managers, marketers — all aligned by a shared purpose. We’re still as passionate as we were on day one, but now we have the experience, structure, and support to do even more impactful work.",
    image: Ussjournery6,
    alttext: "Expand USS Employee",
  },
];

export default function Ussjourneysection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeImageSrc, setActiveImageSrc] = useState(BlueCircle.src);

  const [journeyIndex, setJourneyIndex] = useState(0);
  const journeySwiperRef = useRef(null);
  const sectionRef = useRef(null);

  const handleTabChange = (event, newValue) => {
    setJourneyIndex(newValue);
    if (journeySwiperRef.current && journeySwiperRef.current.swiper) {
      journeySwiperRef.current.swiper.slideTo(newValue);
    }
  };



  return (
    <>
      {/* Journey Section */}
      <Box className="journey-main-wrapper" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Container
          ref={sectionRef}
          className={`custom-container journey-sticky-box ${journeyIndex === journeyData.length - 1 ? "unsticky" : ""}`}
          maxWidth="lg"
        >
          {/* Heading */}
          <Box className="heading-content">
            <Typography variant="h2" sx={{ mt: 2, mb: 5, fontWeight: 700 }}>
              USS{" "}
              <span className="primary-color">
                Jo
                <span className="span-text">
                  urney
                  <div className="line-container">
                    <div className="line-wrapper"></div>
                    <div className="line"></div>
                    <div className="moving-box"></div>
                  </div>
                </span>
              </span>
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ position: "relative" }}>
            {/* Left: Swiper */}
            <Grid size={{ xs: 12, sm: 10 }} className="journey-tab-content-wrapper">
              <Swiper
                ref={journeySwiperRef}
                direction={isMobile ? "horizontal" : "vertical"}
                slidesPerView={1}
                spaceBetween={0}
                // mousewheel={{ enabled: false, forceToAxis: true, releaseOnEdges: true }}
                speed={700}
                // modules={[Mousewheel]}
                // onSwiper={(swiper) => {
                //   journeySwiperRef.current = { swiper };
                //   // expose globally and track animation state
                //   window.__journeySwiper = swiper;
                //   window.__journeySwiperAnimating = false;
                //   try {
                //     swiper.on('slideChangeTransitionStart', function(){ window.__journeySwiperAnimating = true; });
                //     swiper.on('slideChangeTransitionEnd', function(){ window.__journeySwiperAnimating = false; });
                //     swiper.on('transitionEnd', function(){ window.__journeySwiperAnimating = false; });
                //   } catch(e) {}
                // }}
                onSlideChange={(swiper) => setJourneyIndex(swiper.activeIndex)}
                className="journey-swiper"
              >
                {journeyData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Grid container spacing={2} alignItems="center">
                          {/* Image */}
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                            >
                              <Image
                                src={item.image}
                                alt={item.alttext}
                                width={800}
                                height={600}
                                className="journey-image"
                              />
                            </motion.div>
                          </Grid>

                          {/* Text */}
                          <Grid size={{ xs: 12, sm: 6 }} className="journey-detail-box">
                            <motion.div
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                            >
                              <Typography variant="h5">
                                {item.title}
                              </Typography>
                              <Typography variant="body1" sx={{ color: "#333" }}>
                                {item.description}
                              </Typography>
                            </motion.div>
                          </Grid>
                        </Grid>
                      </motion.div>
                    </AnimatePresence>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Lock page scroll until journey swiper finishes in current scroll direction */}
              {/* <script dangerouslySetInnerHTML={{ __html: `
                (function(){
                  function isCentered(el){
                    if(!el) return false;
                    var rect = el.getBoundingClientRect();
                    var vpH = window.innerHeight || document.documentElement.clientHeight;
                    var center = vpH / 2;
                    var elCenter = rect.top + rect.height/2;
                    var threshold = Math.max(120, rect.height * 0.15);
                    return Math.abs(elCenter - center) <= threshold;
                  }

                  function updateMousewheel(){
                    var sw = window.__journeySwiper;
                    if(!sw) return;
                    var container = document.querySelector('.journey-swiper');
                    var shouldEnable = isCentered(container);
                    if(shouldEnable && !(sw.params.mousewheel && sw.params.mousewheel.enabled)){
                      if(!sw.params.mousewheel) sw.params.mousewheel = {};
                      sw.params.mousewheel.enabled = true;
                      if(sw.mousewheel && sw.mousewheel.enable) sw.mousewheel.enable();
                    } else if(!shouldEnable && sw.params.mousewheel && sw.params.mousewheel.enabled){
                      sw.params.mousewheel.enabled = false;
                      if(sw.mousewheel && sw.mousewheel.disable) sw.mousewheel.disable();
                    }
                  }

                  var __journeyLastWheelAt = 0;
                  var __journeyLockDir = null; // 'down'|'up'|null
                  function wheelGuard(e){
                    var sw = window.__journeySwiper;
                    var container = document.querySelector('.journey-swiper');
                    if(!sw || !container) return;
                    if(!(sw.params.mousewheel && sw.params.mousewheel.enabled)) return;
                    if(!isCentered(container) && !__journeyLockDir) return;
                    if(window.__journeySwiperAnimating){ e.preventDefault(); return; }
                    var dy = e.deltaY || 0; if(dy === 0) return;
                    if(!__journeyLockDir){ if(dy > 0) __journeyLockDir = 'down'; if(dy < 0) __journeyLockDir = 'up'; }

                    if(__journeyLockDir){
                      if(__journeyLockDir === 'down'){
                        if(!sw.isEnd){ e.preventDefault(); }
                        if(sw.isEnd){ __journeyLockDir = null; return; }
                      }
                      if(__journeyLockDir === 'up'){
                        if(!sw.isBeginning){ e.preventDefault(); }
                        if(sw.isBeginning){ __journeyLockDir = null; return; }
                      }
                    }

                    var now = Date.now();
                    if(now - __journeyLastWheelAt < 180) return;
                    __journeyLastWheelAt = now;
                    var targetInside = container.contains(e.target);
                    var goNext = dy > 0;
                    if(goNext && !sw.isEnd){ if(!targetInside) sw.slideNext(); }
                    if(!goNext && !sw.isBeginning){ if(!targetInside) sw.slidePrev(); }
                  }

                  var throttled = false;
                  function onScroll(){
                    if(throttled) return; throttled = true;
                    requestAnimationFrame(function(){ updateMousewheel(); throttled = false; });
                  }

                  window.addEventListener('scroll', onScroll, { passive: true });
                  window.addEventListener('resize', onScroll);
                  document.addEventListener('DOMContentLoaded', updateMousewheel);
                  setTimeout(updateMousewheel, 200);
                  window.addEventListener('wheel', wheelGuard, { passive: false });
                })();
              ` }} /> */}
            </Grid>

            {/* Right: Tabs */}
            <Grid size={{ xs: 12, sm: 2 }} className="journey-tab-wrapper">
              <Tabs
                orientation={isMobile ? "horizontal" : "vertical"}
                variant="scrollable"
                value={journeyIndex}
                onChange={handleTabChange}
                className="journey-tab-box"
              >
                {journeyData.map((item, index) => (
                  <Tab key={index} label={item.year} className="journey-verticle-tab" />
                ))}
              </Tabs>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
