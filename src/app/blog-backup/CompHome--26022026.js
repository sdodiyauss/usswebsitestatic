"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  Divider,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CountUp from "react-countup";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";

import CloseIcon from "@/close-vector.svg?url";
import Contact from "~/contact/Contact";
import Calltoaction from "~/cta/Calltoaction";
import Metadata from "~/meta/Metadata";

import RxValetLogo from "@/companylogo/rxvalet.svg?url";
import AdvancePharmacyLogo from "@/companylogo/advance-pharmacy.svg?url";


import Slider1 from "@/slider1.webp";
import Slider2 from "@/slider2.webp";
import Slider3 from "@/slider3.webp";
import Slider4 from "@/slider4.webp";
import Slider5 from "@/slider5.webp";
import Slider6 from "@/slider6.webp";
import Slider7 from "@/slider7.webp";
import healthcareicon from "@/healthcaregif.gif";
import RoundOrangeRighticon from "@/round-orange-right.svg?url";

import blueArrow from "@/blue-arrow.svg?url";
import Slider8 from "@/slider8.webp";
import Slider9 from "@/slider9.webp";
import Slider11 from "@/slider11.webp";
import Slider12 from "@/slider12.webp";
import Slider13 from "@/slider13.webp";
import Slider14 from "@/slider14.webp";
import Slider15 from "@/slider15.webp";
import Slider16 from "@/slider16.webp";

import UIcon from "@/u.webp";
import SIcon from "@/s.webp";
import SOrangeIcon from "@/oranges.webp";
import OrangeCircle from "@/orangecircle.webp";
import BlueCircle from "@/bluecircle.webp";
import Uninterrupted from "@/uninterrupted.webp";
import Secure from "@/secure.webp";
import Scalable from "@/scalable.webp";

import Hover from "@/hover.webp";
import Hover1 from "@/hover1.webp";
import Hover2 from "@/hover2.webp";
import Hover3 from "@/hover3.webp";
import Hover4 from "@/hover4.webp";
import Hover5 from "@/hover5.webp";
import Hover6 from "@/hover6.webp";



import TestimonialBobthompson from "@/bobthompson.webp";
import TestimonialGreg from "@/greg.webp";
import TestimonialTinarockwell from "@/tinarockwell.webp";
import ShieldLogo from "@/companylogo/icon-shield-review.svg?url";

import TestimonialShape1 from "@/testimonial-shape1.svg?url";
import TestimonialShape2 from "@/testimonial-shape2.svg?url";
import ArrowBackIcon from "@/right-arrow.svg?url";
import ArrowForwardIcon from "@/left-arrow.svg?url";

import PopupImg from "@/popup-img.svg?url";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import TechnologyStacks from "~/technologystackssection/TechnologyStacks";
import Companylogos from "~/companylogoes/Companylogos";
import Ussjourneysection from "~/ussjourney/Ussjourneysection";
import Timelinewrapper from "~/timelinewrapper/Timelinewrapper";


const cardData = [
  {
    title: "Patient Management Portal for your Clinic",
    desc: "Streamline clinic operations with a secure, intuitive patient management portal for scheduling, records, and seamless communication.",
    image: Slider1,
    link: "/healthcare-tech/patient-management-portal",
    alttext: "Patient Mangement Portal Services",
  },
  {
    title: "Online/Offline Pharmacy Development",
    desc: "Revolutionize pharmacy operations with a smart, hybrid platform for effortless prescriptions, inventory sync, and seamless customer care.",
    image: Slider2,
    link: "/healthcare-tech/online-offline-pharmacy",
    alttext: "Online/Offline Pharmacy Services",
  },
  {
    title: "Prescription Assistance Portal(PAP)",
    desc: "Effortlessly manage PAP cases with an intuitive portal offering patient intake, case progress tracking, and communication.",
    image: Slider3,
    link: "/healthcare-tech/prescription-assistance-portal",
    alttext: "Prescription Assistance Portal Services",
  },
  {
    title: "Medical Billing Portal Development",
    desc: "Revolutionize pharmacy operations with a smart, hybrid platform for effortless prescriptions, inventory sync, and seamless customer care.",
    image: Slider4,
    link: "/healthcare-tech/medical-billing",
    alttext: "Medical Billing Portal Development Services",
  },
  {
    title: "EHR/EMR Development",
    desc: "Develop intelligent EHR/EMR solutions with secure data, automated workflows, and real-time patient management to enhance efficiency, accuracy, & healthcare delivery.",
    image: Slider5,
    link: "/healthcare-tech/ehr-emr-development",
    alttext: "EHR/EMR Development Services",
  },
  {
    title: "Hospital Management Portal Development",
    desc: "Create a smart hospital management portal with automated workflows, real-time data access, and secure patient administration for enhanced efficiency and care delivery.",
    image: Slider6,
    link: "/healthcare-tech/hospital-management",
    alttext: "Hospital Management Portal Development Services",
  },
  {
    title: "Compliance Software Development",
    desc: "Ensure regulatory compliance with intelligent software featuring automated audits, real-time tracking, and secure data management.",
    image: Slider7,
    link: "/healthcare-tech/compliance-software",
    alttext: "Compliance Software Development Services",
  },
];

const hoverCardData = [
  {
    name: "Healthcare",
    description:
      "Building tech that makes healthcare smarter, safer, and more connected.",
    image: Hover,
  },
  {
    name: "Real Estate",
    description:
      "Helping you sell, rent, or manage properties with smart digital tools.",
    image: Hover1,
  },
  {
    name: "Oil & Gas",
    description:
      "Tech that keeps your energy operations smooth, safe, and efficient.",
    image: Hover2,
  },
  {
    name: "Banking & Fintech",
    description:
      "Powering next-gen banking with secure, user-friendly fintech solutions.",
    image: Hover3,
  },
  {
    name: "Manufacturing",
    description:
      "Smarter systems to streamline production and boost factory performance.",
    image: Hover4,
  },
  {
    name: "Education & eLearning",
    description:
      "Creating digital learning tools that make education more engaging.",
    image: Hover5,
  },
  {
    name: "Retail",
    description:
      "Helping brands sell smarter with modern retail and eCommerce tech.",
    image: Hover6,
  },
];

const counterData = [
  { value: 12, label: "Years of Experience" },
  { value: 35, label: "Happy Clients" },
  { value: 500, label: "Successful Projects" },
  { value: 15, label: "Spread Services" },
];

const testimonials = [
  {
    logo: AdvancePharmacyLogo,
    feedback:
      "“Jignesh really helped us grow — we started seeing way more sign-ups and orders once the new system was live. The best part was how easy he was to work with… very professional but also friendly, so the whole process felt effortless.”",
    name: "Bob Thompson",
    role: "Founder",
    photo: TestimonialBobthompson,
  },
  {
    logo: RxValetLogo,
    feedback:
      "“What I appreciated most about the Universal Stream Solution team was how responsive they were. Anytime we needed a tweak or had a question, they handled it quickly. The final product turned out solid, reliable, and exactly what we wanted.”",
    name: "Greg.",
    role: "Founder",
    photo: TestimonialGreg,
  },
  {
    logo: ShieldLogo,
    feedback:
      "“Working with the team felt like having an in-house partner. They took the time to understand our business, delivered on every promise, and made sure the solution was built around our needs, not just a template.”",
    name: "Tina Rockwell",
    role: "Founder",
    photo: TestimonialTinarockwell,
  },
];

// const stageData = [
//   {
//     title: "RX Valet",
//     techtext: "Tech Stack:",
//     techimage1: appleIcon,
//     techimage2: androidIcon,
//     desc2:
//       "Lorem ipsum dolor sit amet consectetur. Dui duis sed venenatis nunc fames donec eu feugiat ac. Morbi quisque pretium.",
//     image:
//       "https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66c46332f4c126638f4aab2e_startup-1.webp",
//   },
//   {
//     title: "Seed",
//     techtext: "Tech Stack:",
//     techimage1: appleIcon,
//     techimage2: androidIcon,
//     desc2:
//       "More than 25% of our clients get Series A investments to build full-scale product and start marketing",
//     image:
//       "https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66c46332e77197f7d0a36ead_startup-2.webp",
//   },
//   {
//     title: "Series A",
//     techtext: "Tech Stack:",
//     techimage1: appleIcon,
//     techimage2: androidIcon,
//     desc2:
//       "We've helped every start-up we worked with at this stage to cut costs and improve user experience",
//     image:
//       "https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66c46332a94d7b4ba339bb39_startup-3.webp",
//   },
// ];


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



export default function CompHome() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageSrc, setActiveImageSrc] = useState(BlueCircle.src);

  const [TechnologyIndex, setTechnologyIndex] = useState(0);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.7 });
  const [startCount, setStartCount] = useState(false);

  //journey section
  // const [journeyIndex, setJourneyIndex] = useState(0);
  // const sectionRef = useRef(null);
  // const isScrolling = useRef(false);

  // useEffect(() => {
  //   const handleWheel = (e) => {
  //     const stickyEl = document.querySelector(".journey-sticky-box");
  //     if (!stickyEl) return;

  //     const stickyRect = stickyEl.getBoundingClientRect();
  //     const isStickyActive =
  //       stickyRect.top <= 0 && stickyRect.bottom >= window.innerHeight;

  //     const atFirst = journeyIndex === 0;
  //     const atLast = journeyIndex === 4;

  //     if (!isStickyActive) return;

  //     if (isScrolling.current) return;

  //     if (e.deltaY > 0 && !atLast) {
  //       e.preventDefault();
  //       isScrolling.current = true;
  //       setJourneyIndex((prev) => prev + 1);
  //     } else if (e.deltaY < 0 && !atFirst) {
  //       e.preventDefault();
  //       isScrolling.current = true;
  //       setJourneyIndex((prev) => prev - 1);
  //     }

  //     // Reduce lock delay for smoother feeling
  //     setTimeout(() => {
  //       isScrolling.current = false;
  //     }, 400); // Shorter delay than 800
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => window.removeEventListener("wheel", handleWheel);
  // }, [journeyIndex]);

  // const sectionRef = useRef(null);
  // const [journeyIndex, setJourneyIndex] = useState(0);
  // const isScrolling = useRef(false);
  // const totalSlides = 5;

  // useEffect(() => {
  //   const handleWheel = (e) => {
  //     const stickyEl = document.querySelector(".journey-sticky-box");
  //     if (!stickyEl) return;

  //     const rect = stickyEl.getBoundingClientRect();
  //     const isInView =
  //       rect.top <= 100 && rect.bottom > window.innerHeight * 0.3;

  //     if (!isInView) return;

  //     const atFirst = journeyIndex === 0;
  //     const atLast = journeyIndex === totalSlides - 1;

  //     // Block default scroll only if not at edges
  //     if ((e.deltaY > 0 && !atLast) || (e.deltaY < 0 && !atFirst)) {
  //       e.preventDefault();
  //     }

  //     if (isScrolling.current) return;

  //     if (e.deltaY > 0 && !atLast) {
  //       isScrolling.current = true;
  //       setJourneyIndex((prev) => prev + 1);
  //     } else if (e.deltaY < 0 && !atFirst) {
  //       isScrolling.current = true;
  //       setJourneyIndex((prev) => prev - 1);
  //     }

  //     setTimeout(() => {
  //       isScrolling.current = false;
  //     }, 500);
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, [journeyIndex]);

  // const [journeyIndex, setJourneyIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const journeySwiperRef = useRef(null);
  const testimonialSwiperRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // toggle sticky on benefits header when second box touches the first
  useEffect(() => {
    const stickyMain = document.querySelector('.sticky-group-main');
    const secondHeading = document.querySelector(
      '.main-benefit-box.second .benefits-title-box.first.sticky-heading'
    );

    if (!stickyMain || !secondHeading) return;

    const onScroll = () => {
      const headingRect = secondHeading.getBoundingClientRect();

      // Check if the heading reaches 450px from top of viewport
      if (headingRect.top <= 450) {
        stickyMain.classList.add('unstick');
      } else {
        stickyMain.classList.remove('unstick');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll(); // Run once on mount

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);


  // const handleTabChange = (event, newValue) => {
  //   setJourneyIndex(newValue);
  //   if (journeySwiperRef.current && journeySwiperRef.current.swiper) {
  //     journeySwiperRef.current.swiper.slideTo(newValue);
  //   }
  // };

  // const ellipseRef = useRef(null);
  // const itemsRef = useRef([]);

  //popup form
  const [formOpen, setFormOpen] = useState(false);

  // const handleOpen = () => {
  //   setFormOpen(true);
  // };

  //Milestone counter
  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

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


  // display-on-scroll
  const lastImageUrlRef = useRef(null);
  useEffect(() => {
    const stickyGroups = document.querySelectorAll(".sticky-group");
    const activeImage = document.querySelector("#active-image img");
    const stickyGroup1 = document.querySelector(".sticky-group1");
    const stickyGroup2 = document.querySelector(".sticky-group2");
    const stickyGroup3 = document.querySelector(".sticky-group3");
    const firstStickyGroup = document.querySelector(".first-sticky-group");

    // if (activeImage) activeImage.style.opacity = 0;

    function handleScrollDesktop() {
      let found = false;
      const center = window.innerHeight / 4;
      const center2 = window.innerHeight / 5;

      // FIRST GROUP VISIBILITY CHECK
      let firstRect = null;
      if (firstStickyGroup && stickyGroup1) {
        firstRect = firstStickyGroup.getBoundingClientRect();
        stickyGroup1.style.opacity = firstRect.top <= center ? 0 : 1;
      }
      if (firstStickyGroup && stickyGroup2) {
        firstRect = firstStickyGroup.getBoundingClientRect();
        stickyGroup2.style.opacity = firstRect.top <= center ? 0 : 1;
      }
      if (firstStickyGroup && stickyGroup3) {
        firstRect = firstStickyGroup.getBoundingClientRect();
        stickyGroup3.style.opacity = firstRect.top <= center ? 0 : 1;
      }

      stickyGroups.forEach((group) => {
        const rect = group.getBoundingClientRect();
        const imageUrl = group.getAttribute("data-image");
        const heading = group.querySelector(".sticky-heading1");

        if (!found && rect.bottom >= center2 && rect.top <= center) {
          group.classList.add("active");

          if (heading && firstRect) {
            heading.style.opacity = firstRect.top <= center ? 1 : 0;
          }

          if (imageUrl && imageUrl !== lastImageUrlRef.current) {
            if (activeImage) activeImage.classList.remove("show");

            setTimeout(() => {
              setActiveImageSrc(imageUrl);
              lastImageUrlRef.current = imageUrl;

              requestAnimationFrame(() => {
                if (activeImage) activeImage.classList.add("show");
              });
            }, 500);
          }

          found = true;
        } else {
          group.classList.remove("active");

          if (heading && firstRect) {
            heading.style.opacity = firstRect.top <= center ? 1 : 0;
          }
        }
      });

      // don't remove "show" unless no group matched
      if (!found && activeImage) {
        activeImage.classList.remove("show");
        lastImageUrlRef.current = null;
      }
    }



    function handleScrollMobile() {
      const center = window.innerHeight / 5;
      let found = false;

      stickyGroups.forEach((group) => {
        const rect = group.getBoundingClientRect();
        const heading = group.querySelector(".sticky-heading1");
        const benefitImgWrapper = group.querySelector(".benefit-mobile-img");
        const paragraph = group.querySelector(".paragraph");

        if (heading) heading.style.opacity = 1;

        if (!found && rect.bottom > 0 && rect.top <= center) {
          group.classList.add("active");
          if (benefitImgWrapper) benefitImgWrapper.style.opacity = 1;
          if (paragraph) paragraph.style.opacity = 1;
          found = true;
        }
      });
    }

    function handleScroll() {
      if (window.innerWidth < 560) {
        handleScrollMobile();
      } else {
        handleScrollDesktop();
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    document.addEventListener("DOMContentLoaded", handleScroll);

    // Initial call
    handleScroll();
  }, [activeImageSrc]);



  //particles
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  //heading animation
  useEffect(() => {
    const headings = document.querySelectorAll(".animate-heading");

    headings.forEach((heading) => {
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
          rootMargin: "0px 0px -250px 0px",
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

  //rotate wheel
  useEffect(() => {
    const rotateElement = document.querySelector(".rotate-ellipse-2");
    const section = document.querySelector(".section.is-cases-new");

    const handleScroll = () => {
      if (!rotateElement || !section) return;

      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Skip if section is out of view
      if (sectionRect.bottom < 0 || sectionRect.top > windowHeight) return;

      // Scroll progress within the section
      const sectionHeight = section.offsetHeight;
      const scrollYWithinSection = window.scrollY - section.offsetTop;
      const progress = Math.min(
        1,
        Math.max(0, scrollYWithinSection / (sectionHeight - windowHeight))
      );

      // Apply transformations (same ranges)
      const minAngle = -27;
      const maxAngle = 14;
      const rotationZ = minAngle + progress * (maxAngle - minAngle);

      const minTranslateY = -2;
      const maxTranslateY = 8;
      const translateY =
        minTranslateY + progress * (maxTranslateY - minTranslateY);

      rotateElement.style.transform = `
      translate3d(0px, ${translateY}%, 0px)
      scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg)
      rotateZ(${rotationZ}deg)
      skew(0deg, 0deg)
    `;
      rotateElement.style.willChange = "transform";
      rotateElement.style.transformStyle = "preserve-3d";
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // call initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coreServices = [
    {
      title: "SEO & Digital Marketing",
      desc:
        "Getting found online is tough—we make it easier. Our SEO services and digital marketing strategies boost visibility, traffic, and convert visitors to customers.",
      image: Slider15,
      bgColor: "#E64D61",
      link: "/how-we-help/digital-marketing",
      alttext: "SEO and Digital Marketing",
    },
    {
      title: "Mobile Application Development",
      desc:
        "Need a secure, scalable app for iOS, Android, or cross-platform? We craft end-to-end mobile application development for your business goals.",
      image: Slider9,
      bgColor: "#848EF3",
      link: "/how-we-help/mobile-application-devlopment",
      alttext: "Mobile Application Development Services",
    },
    {
      title: "Graphic & Product Design",
      desc:
        "We combine creativity and functionality to deliver stunning graphic design and UI/UX services, from logos to full product interface design.",
      image: Slider13,
      bgColor: "#4D99E6",
      link: "/how-we-help/graphics-and-ui-ux-design",
      alttext: "Graphic and Product Design Services",
    },
    {
      title: "Custom Software Development",
      desc:
        "No two businesses are the same. We create custom software solutions tailored to your needs, delivering bespoke development that drives results and growth.",
      image: Slider12,
      bgColor: "#6EE64D",
      link: "/how-we-help/custom-software-development",
      alttext: "Custom Software Development Services",
    },
    {
      title: "Online Store Development",
      desc:
        "Want to sell online? We design custom eCommerce portals with secure payments, inventory tracking, and a seamless shopping experience for repeat customers.",
      image: Slider14,
      bgColor: "#4DE6CA",
      link: "/solutions/online-store-development",
      alttext: "Online Store Development Services",
    },
    {
      title: "Web design & Development",
      desc:
        "Your website is your first impression. We create fast, responsive sites tailored to your brand and business goals using the latest tech.",
      image: Slider11,
      bgColor: "#C04DE6",
      link: "/how-we-help/web-design-and-development",
      alttext: "Web Design and Development Services",
    },
    {
      title: "Emerging Technology",
      desc:
        "We offer complete product development services—ideation to launch—creating user-centric solutions tailored to meet evolving market & business demands.",
      image: Slider16,
      bgColor: "#E6834D",
      link: "/how-we-help/emerging-technology",
      alttext: "Emerging Technology Services",
    },
    {
      title: "Enterprise Software Development",
      desc:
        "We offer custom enterprise software solutions to streamline operations and  drive growth with secure, scalable development.",
      image: Slider8,
      bgColor: "#4D99E6",
      link: "/solutions/enterprise-software-development",
      alttext: "Enterprise Software Development Services ",
    },
  ];

  return (
    <>
      {/* Banner Section */}
      <motion.section {...fadeIn}>
        <Box className="banner-section" sx={{ mb: { xs: 3, md: 4, lg: 5 } }}>
          <Box className="banner-overlay" />
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12, md: 10 }}>
                <Box className="heading-content banner-content">
                  <Typography variant="h2">
                    Building the Future of Healthcare with
                  </Typography>
                  <Typography variant="h1" sx={{ color: "#f28c38" }}>
                    Unbeatable Software Solutions
                    <span style={{ color: "#FFFFFF" }}>(USS)</span>
                  </Typography>
                  <Box className="spacer"></Box>
                  <Typography variant="h6" paragraph>
                    From EMRs to pharmacy management systems, we deliver scalable,
                    secure, and HIPAA-Compliant{" "}
                    <span style={{ color: "#f58436" }}>
                      Custom Healthcare Software
                    </span>{" "}
                    tailored to your business needs.
                  </Typography>
                  <Link href="/about-us" variant="contained" className="main-primary-btn">
                    Explore More
                  </Link>
                  {/* <Button variant="contained" className="main-primary-btn">
                    Explore More
                  </Button> */}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.section>

      {/* Swiper Logo Section */}
      <Box sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Box className="logo-swiper-box-title">
          <Container className="custom-container" maxWidth="lg" sx={{ mb: 4 }}>
            <Typography variant="h1" className="animate-heading">
              <span className="text-line">
                We've Helped{" "}
                <span style={{ color: "#03B0EF" }}>
                  50+ Healthcare and Pharmacy
                </span>
              </span>
              <span className="text-line">
                <span style={{ color: "#03B0EF" }}> Companies</span> to
                Streamline Their Processes
              </span>
              <span className="text-line">with Intelligent IT Solutions.</span>
            </Typography>
          </Container>
        </Box>

        <motion.section {...fadeInUp}>
          <Companylogos />
        </motion.section>
      </Box>

      {/* Healthcare Tech Solution Swiper Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ py: { xs: 3, md: 4, lg: 5 } }} className="healthcare-section">
          <Grid container spacing={4} alignItems="center">
            {/* Left Side */}
            <Grid size={{ xs: 12, sm: 5, md: 4 }} className="heading-content">
              <Box>
                <Image
                  src={healthcareicon}
                  alt="Healthcare"
                  width={70}
                  height={70}
                  unoptimized
                />
                <Typography variant="h2" sx={{ my: 2, fontWeight: 700 }}>
                  Healthcare{" "}
                  <span className="primary-color">
                    Tech So
                    <span className="span-text">
                      lution
                      <div className="line-container">
                        <div className="line-wrapper"></div>
                        <div className="line"></div>
                        <div className="moving-box"></div>
                      </div>
                    </span>
                  </span>
                </Typography>
                <Typography variant="h6" paragraph sx={{ mb: 3 }}>
                  Transforming Care with Custom Healthcare Software Development
                </Typography>
                <Link href="/healthcare" variant="contained"
                  className="main-primary-btn">
                  Explore More
                </Link>
              </Box>
            </Grid>

            {/* Right Swiper Cards */}
            <Grid size={{ xs: 12, sm: 7, md: 8 }}>
              <Swiper
                className="healthcare-swiper"
                modules={[Navigation]}
                loop={true}
                // autoplay={true}
                spaceBetween={20}
                slidesPerView={2.5}
                navigation
                breakpoints={{
                  0: { slidesPerView: 1.3 },
                  1024: { slidesPerView: 1.8 },
                  1200: { slidesPerView: 2.5 },
                }}
              >
                {cardData.map((card, index) => (
                  <SwiperSlide key={index} className="slide-box">
                    <Paper elevation={0} className="slide-box-main">
                      <Box>
                        <Box className="title-box">
                          <Link href={card.link || "#"}>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: 600, mb: 1 }}
                            >
                              {card.title}
                            </Typography>
                          </Link>
                          <Link href={card.link || "#"} className="inline-flex">
                            <Image src={RoundOrangeRighticon} alt="explore more"  />
                          </Link>
                        </Box>
                        <Box className="gray-spacer"></Box>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                          {card.desc}
                        </Typography>
                      </Box>
                      <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
                        <Image
                          src={card.image}
                          alt={card.alttext}
                          width={500}
                          height={300}
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                    </Paper>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </Box>
      </motion.section>

      {/* Our Core Services Section */}
      <motion.section {...fadeInUp}>
        <Container className="custom-container" maxWidth="lg" sx={{ mb: { xs: 0, sm: 5 } }}>
          <Grid container alignItems="center">
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
              <Box className="heading-content" sx={{ pt: { xs: 3, md: 4, lg: 5 } }}>
                <Typography variant="h2" align="center" sx={{ mb: { xs: 3, sm: 5 } }}>
                  Our Core{" "}
                  <span className="primary-color span-text">
                    Services
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{ pb: { xs: 3, md: 4, lg: 5 }, overflowX: "hidden" }}
          className="healthcare-section"
        >
          {/** Data source for dynamic slides */}
          <Swiper
            className="service-swiper"
            modules={[Mousewheel, Navigation]}
            loop={false}
            navigation
            mousewheel={{
              enabled: false,
              sensitivity: 1,
              releaseOnEdges: true,
            }}
            spaceBetween={24}
            slidesPerView={4.3}
            onSwiper={(sw) => {
              // Store swiper and track animation state
              window.__serviceSwiper = sw;
              window.__serviceSwiperAnimating = false;
              if (sw && sw.on) {
                try {
                  sw.on('slideChangeTransitionStart', function () { window.__serviceSwiperAnimating = true; });
                  sw.on('slideChangeTransitionEnd', function () { window.__serviceSwiperAnimating = false; });
                  sw.on('transitionEnd', function () { window.__serviceSwiperAnimating = false; });
                } catch (e) { }
              }
            }}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              768: { slidesPerView: 2.3 },
              1024: { slidesPerView: 3.4 },
              1921: { slidesPerView: 4.3 },
            }}
          >
            {coreServices.map((service, index) => (
              <SwiperSlide key={service.title}>
                <Paper
                  elevation={0}
                  className={`slide-box-main2 ${index % 2 === 0 ? "odd" : "even"} item${index + 1}`}
                >
                  <Box
                    sx={{
                      position: "relative",
                      mb: 2,
                      overflow: "hidden",
                      borderRadius: 2,
                    }}
                  >
                    <Image src={service.image} alt={service.alttext} className="slider-img-box" />
                    <Box className="color-bg" sx={{ backgroundColor: service.bgColor }}></Box>
                  </Box>
                  <Box>
                    <Box className="title-box">
                      <Link href={service.link || "#"}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {service.title}
                        </Typography>
                      </Link>
                      <Link href={service.link || "#"} className="inline-flex">
                        <Image src={blueArrow} className="arrow-rotate" alt="Explore more" />
                      </Link>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {service.desc}
                    </Typography>
                  </Box>
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Deterministic wheel locking: finish all slides before page scroll (both directions) */}
          <script dangerouslySetInnerHTML={{
            __html: `
            (function(){
              var LOCK_NONE = null;
              var LOCK_DOWN = 'down';
              var LOCK_UP = 'up';
              var __svcLockDir = LOCK_NONE;   // current locked direction
              var __svcLastTriggerAt = 0;     // debounce
              var __svcManual = true;         // we control wheel; keep module disabled

              function isCentered(el){
                if(!el) return false;
                var rect = el.getBoundingClientRect();
                var vpH = window.innerHeight || document.documentElement.clientHeight;
                var center = vpH / 2;
                var elCenter = rect.top + rect.height/2;
                var threshold = Math.max(120, rect.height * 0.15);
                return Math.abs(elCenter - center) <= threshold;
              }

              function ensureModuleDisabled(){
                var sw = window.__serviceSwiper;
                if(!sw || !sw.params || !sw.params.mousewheel) return;
                if(sw.params.mousewheel.enabled){
                  try {
                    if(sw.mousewheel && sw.mousewheel.disable) sw.mousewheel.disable();
                  } catch(_){}
                  sw.params.mousewheel.enabled = false;
                }
              }

              function trySlide(goNext){
                var sw = window.__serviceSwiper;
                if(!sw) return false;
                if(window.__serviceSwiperAnimating) return true; // still animating; we consumed the wheel
                if(goNext){
                  if(!sw.isEnd){ sw.slideNext(); return true; }
                  return false;
                } else {
                  if(!sw.isBeginning){ sw.slidePrev(); return true; }
                  return false;
                }
              }

              function wheelHandler(e){
                var sw = window.__serviceSwiper;
                var container = document.querySelector('.service-swiper');
                if(!sw || !container) return;

                // only engage when section is centered OR if a lock is already active
                var centered = isCentered(container);
                if(!centered && !__svcLockDir) return;

                var dy = e.deltaY || 0;
                if(dy === 0) return;

                // initialize lock when first wheel while centered
                if(!__svcLockDir){
                  __svcLockDir = dy > 0 ? LOCK_DOWN : LOCK_UP;
                }

                // while locked, prevent page scroll until we reach swiper boundary in the lock direction
                if(__svcLockDir){
                  ensureModuleDisabled(); // always keep native mousewheel off for deterministic control

                  var goNext = __svcLockDir === LOCK_DOWN;
                  var atBoundary = goNext ? sw.isEnd : sw.isBeginning;

                  if(atBoundary){
                    // release and allow this very wheel event to scroll the page
                    __svcLockDir = LOCK_NONE;
                    return; // no preventDefault here so page moves immediately
                  }

                  // not at boundary → consume the wheel and slide
                  var now = Date.now();
                  // Debounce fast wheels/touchpads a bit; allow new trigger only after 120ms if not animating
                  if(window.__serviceSwiperAnimating && (now - __svcLastTriggerAt < 120)){
                    e.preventDefault();
                    return;
                  }

                  e.preventDefault();
                  var didSlide = trySlide(goNext);
                  if(didSlide){
                    __svcLastTriggerAt = now;
                  }
                  return; // keep lock until boundary reached
                }
              }

              function onScrollOrResize(){
                // No-op; we rely on isCentered each wheel. Keep here in case future tweaks needed.
              }

              // listeners
              window.addEventListener('wheel', wheelHandler, { passive: false });
              window.addEventListener('scroll', onScrollOrResize, { passive: true });
              window.addEventListener('resize', onScrollOrResize, { passive: true });
              document.addEventListener('DOMContentLoaded', ensureModuleDisabled);
              setTimeout(ensureModuleDisabled, 200);
            })();
          ` }} />
        </Box>
      </motion.section>

      {/* Benefits Section */}
      <Box sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography variant="h2" sx={{ my: 2, fontWeight: 700 }}>
              The Benefits Of{" "}
              <span className="primary-color">
                Partnering With T
                <span className="span-text">
                  he USS
                  <div className="line-container">
                    <div className="line-wrapper"></div>
                    <div className="line"></div>
                    <div className="moving-box"></div>
                  </div>
                </span>
              </span>
            </Typography>
            <Typography variant="h6" paragraph sx={{ mb: 3 }}>
              With an industry-driven approach, here are the key benefits you
              can leverage by <Link className="primary-color-link" href="/partnership-program">partnering with USS.</Link>
            </Typography>
          </Box>

          <Box className="benefits-wrapper-section">
            <Grid
              container
              spacing={4}
              alignItems="center"
              className="sticky-group-main"
            >
              <Grid size={{ xs: 4 }}>
                <Box className="benefits-title-box first">
                  <Box className="benefits-title-image">
                    <Image src={UIcon} alt="Uninterrupted" width={70} height={70} />
                    <Image
                      src={OrangeCircle}
                      alt="Uninterrupted"
                      className="benefits-title-image-bg"
                    />
                  </Box>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 700 }}>
                      Uninterrupted
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 4 }}>
                <Box className="benefits-title-box sticky-group2">
                  <Box className="benefits-title-image">
                    <Image
                      src={SOrangeIcon}
                      alt="Scalable"
                      width={70}
                      height={70}
                    />
                    <Image
                      src={BlueCircle}
                      alt="Scalable"
                      className="benefits-title-image-bg"
                    />
                  </Box>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 700 }}>
                      Scalable
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 4 }}>
                <Box className="benefits-title-box sticky-group3">
                  <Box className="benefits-title-image">
                    <Image src={SIcon} alt="Secure" width={70} height={70} />
                    <Image
                      src={OrangeCircle}
                      alt="Secure"
                      className="benefits-title-image-bg"
                    />
                  </Box>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 700 }}>
                      Secure
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={4}
              alignItems="center"
              className="after-sticky-group1"
            >
              <Grid size={{ xs: 12, sm: 7 }} className="column1">
                <Box className="main-benefit-box first">
                  <Box
                    className="sticky-group first-sticky-group"
                    data-image={Uninterrupted.src}
                  >
                    <Box className="benefits-title-box first sticky-heading sticky-heading1 mobilevisible-title-box">
                      <Box className="benefits-title-image">
                        <Image
                          src={UIcon}
                          alt="Uninterrupted"
                          width={70}
                          height={70}
                        />
                        <Image
                          src={OrangeCircle}
                          alt="Uninterrupted"
                          className="benefits-title-image-bg"
                        />
                      </Box>
                      <Box>
                        <Typography variant="h3" sx={{ fontWeight: 700 }}>
                          Uninterrupted
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="paragraph">
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        We keep your projects running smoothly with clear
                        communication and a team that truly supports you, we
                        stay by your side to ensure everything works without
                        interruption.
                      </Typography>
                      <Box>
                        <List className="benefits-lists">
                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            Clear and simple communication
                          </ListItem>

                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            Friendly and reliable team
                          </ListItem>

                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            Flexible work options
                          </ListItem>

                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            Continuous project support
                          </ListItem>

                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            Smooth and steady delivery
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                    <Box className="benefit-mobile-img">
                      <Image src={Uninterrupted} alt="Uninterrupted" style={{ width: "100%", height: "auto" }} />
                    </Box>
                  </Box>
                </Box>
                <Box className="main-benefit-box second">
                  <Box
                    className="sticky-group"
                    data-image={Secure.src}
                    sx={{ mt: 4 }}
                  >
                    <Box className="benefits-title-box first sticky-heading">
                      <Box className="benefits-title-image">
                        <Image
                          src={SOrangeIcon}
                          alt="Scalable"
                          width={70}
                          height={70}
                        />
                        <Image
                          src={BlueCircle}
                          alt="Scalable"
                          className="benefits-title-image-bg"
                        />
                      </Box>
                      <Box>
                        <Typography variant="h3" sx={{ fontWeight: 700 }}>
                          Scalable
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="paragraph">
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        We build custom IT solutions that grow with your
                        business — whether you're starting out or scaling up.
                        With a future-ready approach, we're here for the long
                        run, ready to evolve as you do.
                      </Typography>
                      <Box>
                        <List className="benefits-lists">
                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            Custom-built IT solutions
                          </ListItem>

                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            Services that grow with you
                          </ListItem>

                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            Long-term partnership approach
                          </ListItem>

                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            Easy to expand and upgrade
                          </ListItem>

                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            Future-ready technologies
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                    <Box className="benefit-mobile-img">
                      <Image src={Secure} alt="Scalable" style={{ width: "100%", height: "auto" }} />
                    </Box>
                  </Box>
                </Box>
                <Box className="main-benefit-box thired">
                  <Box
                    className="sticky-group"
                    data-image={Scalable.src}
                    sx={{ mt: 4 }}
                  >
                    <Box className="benefits-title-box first sticky-heading">
                      <Box className="benefits-title-image">
                        <Image
                          src={SIcon}
                          alt="Secure"
                          width={70}
                          height={70}
                        />
                        <Image
                          src={OrangeCircle}
                          alt="Secure"
                          className="benefits-title-image-bg"
                        />
                      </Box>
                      <Box>
                        <Typography variant="h3" sx={{ fontWeight: 700 }}>
                          Secure
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="paragraph">
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        Security is at the heart of every solution we build —
                        safeguarding your data from start to finish. Through
                        trusted practices and full-service delivery, your
                        business remains safe and risk-free.
                      </Typography>
                      <Box>
                        <List className="benefits-lists">
                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            End-to-end secure development
                          </ListItem>

                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            Strong data protection practices
                          </ListItem>

                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            All-in-one trusted service delivery
                          </ListItem>

                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            Compliance and safe integration
                          </ListItem>

                          <ListItem sx={{ display: "list-item", pl: 2 }}>
                            Risk-free and reliable operations
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                    <Box className="benefit-mobile-img">
                      <Image src={Scalable} alt="Secure" style={{ width: "100%", height: "auto" }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 5 }} className="column2">
                <Box className="benefits-image-display" id="active-image">
                  <Image
                    src={activeImageSrc}
                    alt="active-image"
                    width={600}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Industries Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
          <Container className="custom-container" maxWidth="lg">
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Grid size={{ xs: 12, sm: 10, md: 7 }} >
                <Box className="heading-content">
                  <Typography
                    variant="h2"
                    align="center"
                    sx={{ my: 2, fontWeight: 700 }}
                  >
                    Industries{" "}
                    <span className="primary-color">
                      We{" "}
                      <span className="span-text">
                        Serve
                        <div className="line-container">
                          <div className="line-wrapper"></div>
                          <div className="line"></div>
                          <div className="moving-box"></div>
                        </div>
                      </span>
                    </span>
                  </Typography>
                  <Typography variant="h6" paragraph align="center" sx={{ mb: 5 }}>
                    Our services span a wide range of industries and domains,
                    providing intelligent solutions to address business complexities
                    and challenges.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box className="cards">
              {hoverCardData.map((card, index) => (
                <Box
                  key={index}
                  className="card"
                  {...(index === activeIndex ? { active: "" } : {})}
                  onMouseEnter={() => setActiveIndex(index)}
                  sx={{ cursor: "pointer" }}
                >
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={400}
                    height={300}
                    className="card__image"
                  />
                  <Box className="card__overlay" />
                  <Box className="card__infos title-box">
                    <Typography variant="h6" className="card__name">
                      {card.name}
                    </Typography>
                    <Typography variant="body2" className="card__description">
                      {card.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </motion.section>

      {/* Process line Section */}
      <Container
        className="custom-container"
        maxWidth="lg"
        sx={{ py: { xs: 3, md: 4, lg: 5 } }}
      >
        <Box className="heading-content logo-swiper-box-title">
          <Typography
            variant="h2"
            align="center"
            sx={{ mt: 2, mb: 5, fontWeight: 700 }}
          >
            How We Ensure{" "}
            <span className="primary-color">
              Successful Del
              <span className="span-text">
                ivery
                <div className="line-container">
                  <div className="line-wrapper"></div>
                  <div className="line"></div>
                  <div className="moving-box"></div>
                </div>
              </span>
            </span>
          </Typography>
          <Typography variant="h1" align="center" className="animate-heading">
            <span className="text-line">
              We believe in{" "}
              <span style={{ color: "#F58436" }}>Human Intelligence.</span>
            </span>
            <span className="text-line">
              {" "}
              The Best Results Emerge from the Collaboration of
            </span>
            <span className="text-line">
              <span className="primary-color">AI</span> &
              <span style={{ color: "#F58436" }}>HI</span>
            </span>
          </Typography>
        </Box>
      </Container>
      <Timelinewrapper />

      {/* technology tab Section */}
      <TechnologyStacks />

      {/* Milestone Section */}
      <Box
        id="prev-section"
        className="milestone-section"
        ref={ref}
        py={6}
        my={{ xs: 3, md: 4, lg: 5 }}
        bgcolor="#000000"
        position="relative"
        overflow="hidden"
        minHeight="315px"
      >
        {/* Particles restricted to section only */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: false,
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#03B0EF" },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              collisions: { enable: true },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 60,
              },
              opacity: { value: 0.2 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 4 } },
            },
            detectRetina: true,
          }}
        />

        {/* Content container above particles */}
        <Container
          className="custom-container"
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Box className="heading-content" pb={4}>
            <Typography
              variant="h2"
              align="center"
              sx={{ my: 2, color: "white", fontWeight: 700 }}
            >
              Milestone{" "}
              <span className="primary-color">
                That Def
                <span className="span-text">
                  ine Us
                  <div className="line-container">
                    <div className="line-wrapper"></div>
                    <div className="line"></div>
                    <div className="moving-box"></div>
                  </div>
                </span>
              </span>
            </Typography>
          </Box>

          <Grid
            container
            rowGap={{ xs: 5, sm: 0 }}
            justifyContent="center"
            alignItems="center"
          >
            {counterData.map((item, index) => (
              <Grid
                size={{ xs: 6, sm: 3 }}
                key={index}
                className={`counter-box ${index % 2 === 0 ? "even" : "odd"}`}
              >
                <Typography variant="h4" fontWeight={600} color="white">
                  {startCount ? <CountUp end={item.value} duration={3} /> : 0}+
                </Typography>

                <Typography variant="body2" color="white" mt={1}>
                  {item.label}
                </Typography>

                {/* Vertical Divider */}
                {index !== counterData.length - 1 && (
                  <Divider
                    orientation="vertical"
                    className="counter-vertical-divider"
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Journey Section */}
      <Ussjourneysection />

      {/* <Box
        sx={{ py: { xs: 3, md: 4, lg: 5 } }} className="journey-main-wrapper"
      // ref={sectionRef}
      // className={`journey-main-wrapper ${expanded ? "expanded" : ""}`}
      >
        <Container
          ref={sectionRef}
          className={`custom-container journey-sticky-box ${journeyIndex === journeyData.length ? "unsticky" : ""
            }`}
          maxWidth="lg"
        >

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

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 10 }} className="journey-tab-content-wrapper">
              <Box sx={{ flex: 1 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={journeyIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Grid container spacing={2} alignItems="center">
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Image
                            src={journeyData[journeyIndex].image}
                            alt={journeyData[journeyIndex].title}
                            width={800}
                            height={600}
                            priority={journeyData[journeyIndex].priority || false}
                            className="journey-image"
                          />
                        </motion.div>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }} className="journey-detail-box">
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                          <Typography variant="h5">
                            {journeyData[journeyIndex].title}
                          </Typography>
                          <Typography variant="body1" sx={{ color: "#333" }}>
                            {journeyData[journeyIndex].description}
                          </Typography>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 2 }} className="journey-tab-wrapper">
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={journeyIndex}
                onChange={(e, newValue) => setJourneyIndex(newValue)}
                className="journey-tab-box"
              >
                {journeyData.map((item, index) => (
                  <Tab
                    key={index}
                    label={item.year}
                    className="journey-verticle-tab"
                  />
                ))}
              </Tabs>
            </Grid>
          </Grid>
        </Container>

        {journeyIndex === journeyData.length - 1 && (
          <Box
            className="journey-spacer"
            sx={{ height: "100vh", background: "transparent" }}
          />
        )}
      </Box> */}

      {/* products Section */}
      {/* ---------------- Desktop Section ---------------- */}
      {/* <Box
        component="section"
        className="section is-cases-new show-desktop"
        section-color="black"
      >
        <Box className="height-cases">
          <Box className="cases-sticky-wrap">
            <Box className="cards-cases">
              <Box className="cards-cases-left">
                <Box className="cards-cases-left-wrap">
                  {stageData.map((item, i) => (
                    <Box
                      className={`cases-cards-left-item ${i === 0 ? "first" : ""
                        }`}
                      key={i}
                      ref={(el) => (itemsRef.current[i] = el)} // Attach refs
                    >
                      <Box className="heading-content">
                        <Typography
                          variant="h2"
                          sx={{ my: 2, fontWeight: 700 }}
                        >
                          <span className="primary-color">
                            {item.title}
                            <span className="span-text">
                              <div className="line-container">
                                <div className="line-wrapper"></div>
                                <div className="line"></div>
                                <div className="moving-box"></div>
                              </div>
                            </span>
                          </span>
                        </Typography>
                      </Box>

                      <Box className="cases-cards-left-item-text-wrap">
                        {item.techtext && (
                          <Typography className="cases-cards-left-item-text text-white">
                            {item.techtext}
                          </Typography>
                        )}

                        {(item.techimage1 || item.techimage2) && (
                          <Box
                            className="tech-icons"
                            sx={{ display: "flex", gap: 2, mt: 1 }}
                          >
                            {item.techimage1 && (
                              <Image
                                src={item.techimage1}
                                alt="techimage1"
                                width={32}
                                height={32}
                              />
                            )}
                            {item.techimage2 && (
                              <Image
                                src={item.techimage2}
                                alt="techimage2"
                                width={32}
                                height={32}
                              />
                            )}
                          </Box>
                        )}

                        {item.desc2 && (
                          <Typography
                            className="cases-cards-left-item-text text-white"
                            sx={{ mt: 2 }}
                          >
                            <span className="text-color-white">
                              {item.desc2}
                            </span>
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box className="top-gradient"></Box>
                <Box className="top-gradient-copy"></Box>
              </Box>

              <Box className="cards-cases-right">
                <Box className="rotate-cards-flexbox-2">
                  <Box className="rotate-ellipse-2" ref={ellipseRef}>
                    {stageData.map((item, idx) => (
                      <Box
                        className={`rotate-card-2 card-${idx + 2}`}
                        key={idx}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className={`case-rotate-img set-${idx}`}
                          loading="lazy"
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box> */}

      {/* ---------------- Mobile Section ---------------- */}
      {/* <Box
        component="section"
        className="section is-cases-mobile show-mobile"
        section-color="black"
      >
        <Box className="cards-cases-mobile">
          {stageData.map((item, idx) => (
            <Box className="mobile-item" key={idx}>
              <Box className="mobile-img-wrap">
                <img
                  src={item.image}
                  alt=""
                  className="case-rotate-img"
                  loading="lazy"
                />
              </Box>
              <Box className="cases-cards-left-item-text-wrap">
                <Box className="heading-content">
                  <Typography variant="h2" sx={{ my: 2, fontWeight: 700 }}>
                    <span className="primary-color">
                      {item.title}
                      <span className="span-text">
                        <div className="line-container">
                          <div className="line-wrapper"></div>
                          <div className="line"></div>
                          <div className="moving-box"></div>
                        </div>
                      </span>
                    </span>
                  </Typography>
                </Box>

                {item.techtext && (
                  <Typography className="cases-cards-left-item-text text-white">
                    {item.techtext}
                  </Typography>
                )}

                {(item.techimage1 || item.techimage2) && (
                  <Box
                    className="tech-icons"
                    sx={{ display: "flex", gap: 2, mt: 1 }}
                  >
                    {item.techimage1 && (
                      <Image
                        src={item.techimage1}
                        alt="techimage1"
                        width={32}
                        height={32}
                      />
                    )}
                    {item.techimage2 && (
                      <Image
                        src={item.techimage2}
                        alt="techimage2"
                        width={32}
                        height={32}
                      />
                    )}
                  </Box>
                )}

                {item.desc2 && (
                  <Typography
                    className="cases-cards-left-item-text text-white"
                    sx={{ mt: 2 }}
                  >
                    <span className="text-color-white">{item.desc2}</span>
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
          <Box className="heading-content">
            <Button variant="contained" className="main-primary-btn">
              View All
            </Button>
          </Box>
        </Box>
      </Box> */}

      {/* testimonials Section */}
      <motion.section {...fadeInUp}>
        <Box
          sx={{ py: 4, my: 5 }}
          id="next-section"
          className="testimonial-section-wrapper"
        >
          <Box className="testi-shape1">
            <Image src={TestimonialShape1} alt="Prev" width={24} height={24} />
          </Box>
          <Box className="testi-shape2">
            <Image src={TestimonialShape2} alt="Next" width={24} height={24} />
          </Box>

          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content">
              <Typography
                variant="h2"
                align="center"
                sx={{ my: 2, fontWeight: 700 }}
              >
                Our{" "}
                <span className="primary-color">
                  Happy Cl
                  <span className="span-text">
                    ients
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>

            <Box
              sx={{ position: "relative", mt: 4 }}
              className="testimonial-section"
            >
              {/* Left Arrow */}
              <IconButton
                onClick={() => testimonialSwiperRef.current?.slidePrev()}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  zIndex: 10,
                  transform: "translateY(-50%)",
                }}
              >
                <Image src={ArrowBackIcon} alt="Prev" width={24} height={24} />
              </IconButton>

              {/* Right Arrow */}
              <IconButton
                onClick={() => testimonialSwiperRef.current?.slideNext()}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  zIndex: 10,
                  transform: "translateY(-50%)",
                }}
              >
                <Image src={ArrowForwardIcon} alt="Next" width={24} height={24} />
              </IconButton>

              <Swiper
                onSwiper={(swiper) => (testimonialSwiperRef.current = swiper)}
                spaceBetween={80}
                slidesPerView={1}
                loop={true}
                className="testimonial-swiper"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Box
                      sx={{
                        bgcolor: "#fff",
                        borderRadius: 3,
                        p: 2,
                      }}
                    >
                      <Grid container spacing={2} alignItems="center">
                        {/* Left Content - 9 columns */}
                        <Grid
                          size={{ xs: 15, sm: 8.3 }}
                          className="testimonial-content"
                        >
                          <Box className="testimonial-content-logo">
                            <Image
                              src={item.logo}
                              alt="Company Logo"
                              width={150}
                              height={40}
                            />
                          </Box>
                          <Typography
                            variant="body1"
                            className="testimonial-content-disc"
                          >
                            {item.feedback}
                          </Typography>
                          <Box>
                            <Typography
                              variant="p"
                              className="testimonial-content-name"
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              className="testimonial-content-role"
                            >
                              {item.role}
                            </Typography>
                          </Box>
                        </Grid>

                        {/* Right Image - 3 columns */}
                        <Grid size={{ xs: 15, sm: 3.7 }}>
                          <Box
                            className="testimonial-image"
                            sx={{
                              borderRadius: 2,
                            }}
                          >
                            <Image
                              src={item.photo}
                              alt={item.name}
                              width={200}
                              height={250}
                              style={{ width: "auto", height: "100%" }}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            <Box className="testimonial-fullscreen-text">
              <Typography variant="h1">Testimonials</Typography>
            </Box>
          </Container>
        </Box>
      </motion.section>

      {/* call-to-action Section */}
      <motion.section {...fadeInUp}>
        <Calltoaction />
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
      </motion.section>

      {/* popup form */}
      <Dialog
        className="job-modal-box-wrapper home-page-popup"
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
          <Box className="job-modal-content job-card">
            <Box className="heading-content">
              <Typography
                variant="h2"
                align="center"
                sx={{ mt: 0, mb: 0, fontWeight: 700 }}
              >
                Got 30 Seconds?{" "}
                <span className="primary-color">
                  That's All We Need to Get St
                  <span className="span-text">
                    arted!
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>

            <Box sx={{ pt: 2 }}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid size={{ xs: 12, md: 4 }} className="popup-img">
                  <Image src={PopupImg} alt="popup-img" />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Box className="career-contact-form">
                    <Contact />
                  </Box>
                </Grid>
              </Grid>

              <Box className="milestone-section" ref={ref}>
                {/* Content container above particles */}
                <Container
                  className="custom-container"
                  maxWidth="lg"
                  sx={{ position: "relative", zIndex: 1, p: 0 }}
                >
                  <Box className="heading-content" pb={2}>
                    <Typography
                      variant="h2"
                      align="center"
                      sx={{ my: 2, fontWeight: 700 }}
                    >
                      Milestone{" "}
                      <span className="primary-color">
                        That Def
                        <span className="span-text">
                          ine Us
                          <div className="line-container">
                            <div className="line-wrapper"></div>
                            <div className="line"></div>
                            <div className="moving-box"></div>
                          </div>
                        </span>
                      </span>
                    </Typography>
                  </Box>

                  <Grid
                    container
                    rowGap={{ xs: 5, sm: 0 }}
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="#222222"
                    p={{ xs: 2, sm: 3, lg: 5 }}
                    borderRadius={3}
                  >
                    {counterData.map((item, index) => (
                      <Grid
                        size={{ xs: 6, sm: 3 }}
                        key={index}
                        className={`counter-box ${index % 2 === 0 ? "even" : "odd"
                          }`}
                      >
                        <Typography variant="h4" fontWeight={600} color="white">
                          {startCount ? (
                            <CountUp end={item.value} duration={3} />
                          ) : (
                            0
                          )}
                          +
                        </Typography>

                        <Typography variant="body2" color="white" mt={1}>
                          {item.label}
                        </Typography>

                        {/* Vertical Divider */}
                        {index !== counterData.length - 1 && (
                          <Divider
                            orientation="vertical"
                            className="counter-vertical-divider"
                          />
                        )}
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
