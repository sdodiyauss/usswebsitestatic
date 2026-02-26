"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import CountUp from "react-countup";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import "swiper/css";

import CloseIcon from "@/close-vector.svg?url";

import callIcon from "@/call-icon.svg?url";

import HalfBlue from "@/half-blue-circle.svg?url";
import HalfOrange from "@/half-orange-circle.svg?url";
import BlueStar from "@/star-blue.svg?url";
import OrangeStar from "@/star-orange.svg?url";

import Dedicated from "@/dedicated-banner.webp";

import GPS from "@/gps.svg?url";
import Trend from "@/trend-up.svg?url";
import MSG from "@/messages.svg?url";
import Security from "@/shield-security.svg?url";
import CodeCircle from "@/code-circle.svg?url";
import Medal from "@/medal-star2.svg?url";

import ImpactConvert from "@/impact-convert.svg?url";
import ImpactPeople from "@/impact-people.svg?url";
import ImpactChart from "@/impact-chart.svg?url";
import ImpactDoc from "@/impact-doc.svg?url";
import ImpactVerify from "@/impact-verify.svg?url";
import ImpactMessages from "@/impact-messages.svg?url";

import LightLaravel from "@/light-laravel.svg?url";
import LightWP from "@/light-wp.svg?url";
import LightVuejs from "@/light-vuejs.svg?url";
import LightReactjs from "@/light-reactjs.svg?url";
import LightNextjs from "@/light-nextjs.svg?url";
import LightAngular from "@/light-angular.svg?url";
import LightFigma from "@/light-figma.svg?url";
import LightNetCore from "@/netcore-light.svg?url";
import LightNetMvc from "@/netmvc-light.svg?url";
import LightPHP from "@/php-light.svg?url";
import LightPython from "@/python-light.svg?url";
import LightNode from "@/nodejs-light.svg?url";
import LightExpress from "@/express-light.svg?url";
import LightNext from "@/next-light.svg?url";
import LightFlutter from "@/flutter-light.svg?url";
import LightIOS from "@/ios-light.svg?url";
import LightAndroid from "@/android-light.svg?url";
import LightSwift from "@/swift-light.svg?url";
import LightC from "@/c-light.svg?url";
import LightPwa from "@/pwa-light.svg?url";
import LightAzure from "@/azure-light.svg?url";
import LightAws from "@/aws-light.svg?url";
import LightMSSQL from "@/mssql-light.svg?url";
import LightSql from "@/mysql-light.svg?url";
import LightMongoDB from "@/mongodb-light.svg?url";
import LightFirebase from "@/firebase-light.svg?url";
import LightOpenai from "@/openai-light.svg?url";
import angularIcon from "@/angular.svg?url";
import reactIcon from "@/react-js.svg?url";
import wordpressIcon from "@/wp.svg?url";
import laravelIcon from "@/laravel.svg?url";
import vueIcon from "@/vuejs.svg?url";

import MSSQLIcon from "@/ms-sql.svg?url";
import MySql2Icon from "@/my-sql2.svg?url";
import MongoDBIcon from "@/mongodb.svg?url";
import firefoxIcon from "@/firebase.svg?url";
import flutterIcon from "@/flutter.svg?url";
import androidIcon from "@/android.svg?url";
import appleIcon from "@/ios.svg?url";
import swiftIcon from "@/swift.svg?url";
import CPlusIcon from "@/cplus.svg?url";
import NETCoreIcon from "@/net-core.svg?url";
import DotnetMVCIcon from "@/dotnet-mvc.svg?url";
import phpIcon from "@/php.svg?url";
import pythonIcon from "@/python.svg?url";
import nodejsIcon from "@/nodejs.svg?url";
import ExpressIcon from "@/express.svg?url";
import NextjsIcon from "@/nextjs.svg?url";
import FigmaIcon from "@/figma.svg?url";
import pwaIcon from "@/pwa.svg?url";
import AWSIcon from "@/aws.svg?url";
import MicrosoftAzureIcon from "@/microsoft-azure.svg?url";
import OpenAI from "@/openai.svg?url";

import DeveloperProfile from "@/developer-profile.gif";
import Interview from "@/interview.gif";
import Onboarding from "@/onboarding.gif";
import Developing from "@/developing.gif";
import YourNeed from "@/your-need.gif";
import USSLogo from "@/logo-gif.gif";

import Contact from "~/contact/Contact";
import Metadata from "~/meta/Metadata";
import HireModal from "~/contact/Hiremodal";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Companylogos from "~/companylogoes/Companylogos";
import Casestudyoverview from "~/casestudyoverview/Casestudyoverview";
import CircleType from "circletype";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";

const solutions = [
  {
    title: "100% Focus on Your Project",
    description:
      "Your team works only for you — no distractions, no split priorities. They become part of your company, just like in-house developers.You control the workflow, while we handle the hiring, onboarding.",
    icon: GPS,
  },
  {
    title: "Get the Right Talent, Instantly",
    description:
      "No need to search or train — we match you with skilled experts fast. You get people who know exactly what they're doing from day one. That means faster delivery, fewer errors, and zero learning curve.",
    icon: Medal,
  },
  {
    title: "Build Faster, Launch Sooner",
    description:
      "With a team dedicated to your goals, everything moves quicker. From idea to launch — speed is on your side. You stay ahead of deadlines while we stay aligned with your vision.",
    icon: CodeCircle,
  },
  {
    title: "Scale Up or Down Anytime",
    description:
      "Need more hands? Or fewer? No problem. You can grow your team as your project evolves — flexibly and affordably. Scale up or down seamlessly without the hassle of long-term commitments.",
    icon: Trend,
  },
  {
    title: "You Stay in Control",
    description:
      "You call the shots — we just help get it done. Full visibility, regular updates, and easy communication throughout. Stay in control without getting stuck in day-to-day management.",
    icon: MSG,
  },
  {
    title: "Your Data Stays Safe",
    description:
      "We take security seriously — your code, ideas, and IP are protected. Everything stays confidential, always. From NDAs to secure workflows, your trust is never compromised — guaranteed.",
    icon: Security,
  },
];


const tabs = [
  "Front-End",
  "Back-End",
  "Mobile app",
  "AI/ML",
  "Cloud & DevOps",
  "Database",
];

const developers = {
  "Front-End": [
    {
      title: "Angular Developer",
      description:
        "Build high-performance web apps with clean, scalable code. Our Angular developers ensure smooth UX—ideal for dashboards, CRMs.",
      icon: LightAngular,
      modalicon: angularIcon,
    },
    {
      title: "Next.Js Developer",
      description:
        "Create lightning-fast, SEO-friendly websites with Next.js and server-side rendering. Perfect for dynamic sites, SaaS products, and marketing platforms.",
      icon: LightNextjs,
      modalicon: NextjsIcon,
    },
    {
      title: "ReactJs Developer",
      description:
        "Build modern, interactive frontends with reusable components and responsive UI. Ideal for startups, SPAs & user-focused platforms.",
      icon: LightReactjs,
      modalicon: reactIcon,
    },
    {
      title: "Vue.Js Developer",
      description:
        "Vue is perfect for building sleek, intuitive interfaces with clean, scalable code. Ideal for modern SPAs and feature-rich apps.",
      icon: LightVuejs,
      modalicon: vueIcon,
    },
    {
      title: "Wordpress Developer",
      description:
        "Launch fast with custom WordPress themes, plugins, and full-site optimization. Perfect for CMS projects and fast go-to-market needs.",
      icon: LightWP,
      modalicon: wordpressIcon,
    },
    {
      title: "UI/UX Designer",
      description:
        "We create designs that are simple, clear, and easy for people to use. The goal is to make every click or swipe feel natural and enjoyable.",
      icon: LightFigma,
      modalicon: FigmaIcon,
    },
  ],
  "Back-End": [
    {
      title: ".NET Core Developer",
      description:
        "Building modern applications with .NET Core that combine speed, security, and cross-platform support, giving businesses dependable digital solutions.",
      icon: LightNetCore,
      modalicon: NETCoreIcon,
    },
    {
      title: ".NET MVC Developer",
      description:
        "Creating web applications with .NET MVC that are simple to manage, easy to scale, and structured to support long-term growth.",
      icon: LightNetMvc,
      modalicon: DotnetMVCIcon,
    },
    {
      title: "PHP Developer",
      description:
        "Developing websites and apps in PHP that deliver smooth functionality, strong performance, and reliable database connections.",
      icon: LightPHP,
      modalicon: phpIcon,
    },
    {
      title: "Laravel Developer",
      description:
        "Designing web applications in Laravel that are fast, secure, and efficient ideal for businesses that need smart and scalable solutions.",
      icon: LightLaravel,
      modalicon: laravelIcon,
    },
    {
      title: "Node.js Developer",
      description:
        "Crafting scalable, real-time applications with Node.js that remain quick and responsive even under heavy workloads.",
      icon: LightNode,
      modalicon: nodejsIcon,
    },
    {
      title: "Express.js Developer",
      description:
        "Building lightweight back-end systems with Express.js, perfect for powering modern APIs and web apps with speed and flexibility.",
      icon: LightExpress,
      modalicon: ExpressIcon,
    },
    {
      title: "Next.js Developer",
      description:
        "Create lightning-fast, SEO-friendly websites with Next.js and server-side rendering. Perfect for dynamic sites, SaaS products, and marketing platforms.",
      icon: LightNext,
      modalicon: NextjsIcon,
    },
    {
      title: "Python Developer",
      description:
        "Using Python to deliver practical tools and intelligent applications, from process automation to advanced AI-driven systems.",
      icon: LightPython,
      modalicon: pythonIcon,
    },
  ],
  "Mobile app": [
    {
      title: "React Native Developer",
      description:
        "React Native makes it possible to launch apps for iOS and Android with a single build.",
      icon: LightReactjs,
      modalicon: reactIcon,
    },
    {
      title: "Flutter Developer",
      description:
        "Flutter is known for its clean design and fast performance. With just one codebase, apps look sharp and run well across devices—ideal for businesses that want speed without losing quality.",
      icon: LightFlutter,
      modalicon: flutterIcon,
    },
    {
      title: "iOS Developer",
      description:
        "iOS apps are designed for Apple users who value security, style, and reliability. Every app is built to fit seamlessly into the Apple ecosystem.",
      icon: LightIOS,
      modalicon: appleIcon,
    },
    {
      title: "Android Developer",
      description:
        "Android powers most smartphones worldwide, which makes it impossible to ignore. Apps are built to perform across countless devices while reaching the widest possible audience.",
      icon: LightAndroid,
      modalicon: androidIcon,
    },
    {
      title: "Swift Developer",
      description:
        "Swift brings speed and efficiency to iOS development. It helps create apps that are not only quick and stable but also easier to maintain in the long run.",
      icon: LightSwift,
      modalicon: swiftIcon,
    },
    {
      title: "Objective-C Developer",
      description:
        "Many older iOS apps still rely on Objective-C. With proper support, these apps remain stable, secure, and compatible with Apple’s latest updates.",
      icon: LightC,
      modalicon: CPlusIcon,
    },
    {
      title: "PWA Developer",
      description:
        "Progressive Web Apps blur the line between a website and a mobile app. They load quickly, work offline, and don’t need a download to feel like a native experience.",
      icon: LightPwa,
      modalicon: pwaIcon,
    },
  ],
  "AI/ML": [
    {
      title: "Python Developers",
      description:
        "Python is used to create practical solutions that simplify tasks and solve real problems. From small automation scripts to programs that process and analyze data, it helps turn ideas into working tools efficiently.",
      icon: LightPython,
      modalicon: pythonIcon,
    },
    {
      title: "OpenAI Developer",
      description:
        "OpenAI powers applications that can understand, respond, and improve over time. From smart assistants to content tools, these applications adapt with use to become more effective and helpful.",
      icon: LightOpenai,
      modalicon: OpenAI,
    },
  ],
  "Cloud & DevOps": [
    {
      title: "Azure Developer",
      description:
        "Azure makes it possible to move apps and data into the cloud with ease. An Azure developer focuses on building secure, scalable systems that connect smoothly with existing business tools.",
      icon: LightAzure,
      modalicon: MicrosoftAzureIcon,
    },
    {
      title: "AWS Developer",
      description:
        "From storage to AI, AWS offers a huge toolkit for building in the cloud. An AWS developer helps turn those services into real solutions—fast, reliable, and built to grow as demand increases.",
      icon: LightAws,
      modalicon: AWSIcon,
    },
  ],
  "Database": [
    {
      title: "MS SQL Developer",
      description:
        "MS SQL handles lots of data. Big tables, lots of records—no problem. Searching through it is quick. It’s reliable for day-to-day business tasks.",
      icon: LightMSSQL,
      modalicon: MSSQLIcon,
    },
    {
      title: "MySQL Developer",
      description:
        "MySQL is straightforward. Many small and medium websites run on it. It doesn’t get fancy; it gets the job done.",
      icon: LightSql,
      modalicon: MySql2Icon,
    },
    {
      title: "MongoDB Developer",
      description:
        "MongoDB works when data is messy or changes all the time. You don’t need strict tables. Apps can grow without slowing down.",
      icon: LightMongoDB,
      modalicon: MongoDBIcon,
    },
    {
      title: "Firebase Developer",
      description:
        "Firebase comes with tools like login, hosting, and live updates. It helps get apps running fast and keeps them easy to tweak later.",
      icon: LightFirebase,
      modalicon: firefoxIcon,
    },
  ],
};

const features = [
  {
    number: "01",
    title: "Full-Time Dedicated Team",
    description: (
      <>
        When you're tackling a major project — like building a new platform or revamping an existing one — a  <Link href="/about-us" className="text-600">dedicated development team</Link> gives you the focus and consistency you need. They work as an extension of your team, fully aligned with your goals and tools.
      </>
    ),
    list: [
      "100% focus on your project",
      "Seamless collaboration and communication",
      "Ideal for long-term, evolving needs",
    ],
  },
  {
    number: "02",
    title: "Part-Time Dedicated Developers",
    description:
      "If your product is stable and just needs occasional tweaks or fixes, a part-time developer is a smart, cost-effective choice. They stay familiar with your codebase while working a few hours a week—just enough to keep things running smoothly.",
    list: [
      "Budget-friendly for light workloads",
      "Perfect for routine updates and quick fixes",
      "Easily scalable when needs grow",
    ],
  },
  {
    number: "03",
    title: "On-Demand Resource Help",
    description:
      "When you hit a tight deadline or need temporary support, bringing in an on-demand developer is the easiest way to fill the gap. They step in quickly, handle the task, and roll off once it's done—no long-term commitment required.",
    list: [
      "Fast and flexible resource boost",
      "Ideal for short-term tasks or urgent deadlines",
      "Relieves pressure on your core team",
    ],
  },
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

const tabVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  viewport: { once: true, amount: 0.2 }
};

const CompDedicatedDevelopmentServices = () => {
  const [activeTab, setActiveTab] = useState("Front-End");

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.7 });
  const [startCount, setStartCount] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  const allDevelopers = Object.values(developers).flat();

  const flatDeveloperMap = Object.values(developers)
    .flat()
    .reduce((acc, dev) => {
      acc[dev.title] = dev;
      return acc;
    }, {});

  const [selectedDeveloperTitle, setSelectedDeveloperTitle] = useState(
    selectedDeveloper?.title || ""
  );
  const selectedDevData =
    flatDeveloperMap[selectedDeveloperTitle] || selectedDeveloper;

  useEffect(() => {
    if (selectedDeveloper?.title) {
      setSelectedDeveloperTitle(selectedDeveloper.title);
    }
  }, [selectedDeveloper]);

  //Milestone counter
  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  //circle text
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const circleType = new CircleType(textRef.current);
      circleType.radius(80); // smaller radius to fit in 200x200 circle
      textRef.current.style.fontSize = "15px"; // adjust to fit in circle

      // let rotation = 0;
      // let animationFrame;

      // const animate = () => {
      //   rotation += 0.5; // rotation speed (degrees per frame)
      //   textRef.current.style.transform = `rotate(${rotation}deg)`;
      //   animationFrame = requestAnimationFrame(animate);
      // };

      // animate();

      // return () => cancelAnimationFrame(animationFrame);
    }
  }, []);

  //case study
  const [activeCaseStudyTab, setActiveCaseStudyTab] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveCaseStudyTab(0);
      },
      { threshold: 0.5 }
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
      {/* <Metadata
        title="Hire Dedicated Developers | Scalable Dev Team Solutions"
        description="Get skilled dedicated developers for your project. Flexible team models, full-time support, and scalable solutions tailored to your business needs."
      /> */}

      {/* mobile-app-banner */}
      <motion.section {...fadeIn}>
        <Box
          className="healthcare-banner-section"
          sx={{ pb: { xs: 3, md: 4, lg: 5 } }}
        >
          <Container className="custom-container" maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Box className="heading-content heading-content-spacing">
                  <Typography variant="h1" sx={{ mb: 3, color: "#f28c38" }}>
                    Hire Dedicated Developers for Scalable Software Solutions.
                  </Typography>
                  <Typography variant="h6" paragraph>
                    Get a full-time development team aligned with your goals —
                    flexible engagement, faster delivery, and complete control.
                  </Typography>
                  <Link href="/contactus" variant="contained" className="main-primary-btn">
                    Request a Free Consultation
                  </Link>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 10 }}>
                {/* Milestone Section */}
                <Box className="milestone-section" ref={ref} py={6}>
                  {/* Content container above particles */}
                  <Container
                    className="custom-container"
                    maxWidth="lg"
                    sx={{ position: "relative", zIndex: 1 }}
                  >
                    <Grid
                      container
                      rowGap={{ xs: 5, sm: 0 }}
                      justifyContent="center"
                      alignItems="center"
                      className="mobileapp-counter-box"
                    >
                      {/* Counter 1 */}
                      <Grid
                        size={{ xs: 6, sm: 4 }}
                        className="counter-box even"
                        alignItems="flex-start"
                      >
                        <Box className="counter-box-inner">
                          <Typography variant="h4" fontWeight={600} color="white">
                            {startCount ? <CountUp end={89} duration={3} /> : 0}%
                          </Typography>
                          <Typography variant="body2" color="white" mt={1}>
                            Stable team structure
                          </Typography>
                          <Divider
                            orientation="vertical"
                            className="counter-vertical-divider"
                          />
                        </Box>
                      </Grid>

                      {/* Counter 2 */}
                      <Grid
                        size={{ xs: 6, sm: 4 }}
                        className="counter-box odd"
                        alignItems="center"
                      >
                        <Box className="counter-box-inner">
                          <Typography variant="h4" fontWeight={600} color="white">
                            {startCount ? <CountUp end={99} duration={3} /> : 0}%
                          </Typography>
                          <Typography variant="body2" color="white" mt={1}>
                            Higher ROI on tech spend
                          </Typography>
                          <Divider
                            orientation="vertical"
                            className="counter-vertical-divider"
                          />
                        </Box>
                      </Grid>

                      {/* Counter 3 */}
                      <Grid
                        size={{ xs: 6, sm: 4 }}
                        className="counter-box even"
                        alignItems="flex-end"
                      >
                        <Box className="counter-box-inner">
                          <Typography variant="h4" fontWeight={600} color="white">
                            {startCount ? <CountUp end={100} duration={3} /> : 0}%
                          </Typography>
                          <Typography variant="body2" color="white" mt={1}>
                            Accurate Market Analysis
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Container>
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

      {/* Swiper Logo Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ pb: { xs: 3, md: 4, lg: 5 } }}>
          <Companylogos />
        </Box>
      </motion.section>

      {/* smart solution */}
      <motion.section {...fadeInUp}>
        <Box
          className="smart-solutions-section"
          sx={{ py: { xs: 3, md: 4, lg: 5 } }}
        >
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content">
              <Typography
                variant="h2"
                align="center"
                sx={{ mb: 5, fontWeight: 700 }}
              >
                Why Our{" "}
                <span className="primary-color">
                  Dedicated Teams Make All the Diff
                  <span className="span-text">
                    erence
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {solutions.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Box className="solution-card">
                    <Box className="solution-icon">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={24}
                        height={24}
                      />
                    </Box>
                    <Typography variant="h6" className="solution-title">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" className="solution-description">
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </motion.section>

      <Box className="patient-section" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
        <Container className="custom-container" maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="patient-left">
                <Box className="heading-content">
                  <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
                    Flexible Hiring Models{" "}
                    <span className="primary-color">
                      Tailored to Your Project{" "}
                      <span className="span-text">
                        Needs
                        <div className="line-container">
                          <div className="line-wrapper"></div>
                          <div className="line"></div>
                          <div className="moving-box"></div>
                        </div>
                      </span>
                    </span>
                  </Typography>
                  <Typography className="patient-subheading">
                    Choose the right engagement model — whether you need a full
                    team, part-time support, or just an extra pair of expert
                    hands.
                  </Typography>
                </Box>
                <Box className="patient-image-wrapper">
                  <Image
                    src={Dedicated}
                    alt="Flexible Hiring Models"
                    width={400}
                    height={300}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Right Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container direction="column" spacing={3}>
                {features.map(({ number, title, description, list }) => (
                  <Grid size={{ xs: 12, md: 12 }} key={number}>
                    <Box className="feature-box dedicated">
                      <Box className="feature-number">{number}</Box>
                      <Box className="feature-content">
                        <Typography variant="h6" className="feature-title">
                          {title}
                        </Typography>
                        <Typography
                          variant="body1"
                          className="feature-description"
                          paragraph
                        >
                          {description}
                        </Typography>

                        {list && (
                          <List
                            component="ul"
                            disablePadding
                            className="feature-list"
                          >
                            {list.map((item, index) => (
                              <ListItem
                                component="li"
                                key={index}
                                disableGutters
                              >
                                {item}
                              </ListItem>
                            ))}
                          </List>
                        )}
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="developer-tabs-section">
        <motion.section {...fadeInUp}>
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content" pb={4}>
              <Typography
                variant="h2"
                align="center"
                sx={{ my: 2, color: "white", fontWeight: 700 }}
              >
                Hire Skilled{" "}
                <span className="primary-color">
                  Developers for Tailored Tech Sol
                  <span className="span-text">
                    utions
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>

            <Tabs
              value={activeTab}
              onChange={(e, newValue) => setActiveTab(newValue)}
              className="developer-tabs"
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  label={tab}
                  value={tab}
                  className="developer-tab"
                />
              ))}
            </Tabs>

            <Grid container spacing={3} className="developer-cards-wrapper">
              {developers[activeTab]?.map((dev, index) => (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }}
                  key={index}
                  className="developer-cards-inner-wrapper"
                >
                  <Box className="developer-card heading-content">
                    <Box className="developer-card-content">
                      <Typography variant="h5" className="developer-title">
                        {dev.title}
                      </Typography>
                      <Typography variant="body1" className="developer-desc">
                        {dev.description}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      className="main-primary-btn"
                      onClick={() => {
                        setSelectedDeveloper(dev);
                        setOpenModal(true);
                      }}
                    >
                      Hire Now
                    </Button>
                    <Box className="developer-icon">
                      <Image
                        src={dev.icon}
                        alt={`${dev.title} icon`}
                        width={40}
                        height={40}
                      />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Dialog
              open={openModal}
              onClose={() => setOpenModal(false)}
              fullWidth
              maxWidth="md"
              className="hire-developer-modal-wrapper"
            >
              {/* Close Button */}
              <IconButton
                className="modal-close-icon"
                onClick={() => setOpenModal(false)}
              >
                <Image src={CloseIcon} alt="close" />
              </IconButton>

              <DialogContent className="hire-modal-box">
                <Box className="hire-developer-modal">
                  {/* Modal Header */}
                  <Box className="hire-modal-box-header">
                    <Box className="hire-modal-title">
                      <Typography variant="h5" fontWeight="bold">
                        The Code Crew is Coming!
                      </Typography>
                      <Typography variant="body1">
                        Our developers are gearing up to turn this project into a masterpiece.
                      </Typography>
                    </Box>

                    <Box className="hire-modal-icon">
                      <Box className="hire-modal-icon">
                        <Image
                          src={selectedDevData?.modalicon}
                          alt={`${selectedDevData?.title} icon`}
                          width={40}
                          height={40}
                        />
                      </Box>
                    </Box>
                  </Box>

                  {/* Contact Form */}
                  <HireModal
                    selectedDeveloper={selectedDevData}
                    selectedDeveloperTitle={selectedDeveloperTitle}
                    setSelectedDeveloperTitle={setSelectedDeveloperTitle}
                    allDevelopers={allDevelopers}
                  />
                </Box>
              </DialogContent>
            </Dialog>
          </Container>
        </motion.section>
      </Box>

      {/* call-to-action Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ mt: 6 }} className="call-to-action-wrapper">
          <Container className="custom-container" maxWidth="lg">
            <Box
              sx={{ p: 4, backgroundColor: "#222222", borderRadius: 3 }}
              className="call-to-action-innerbox"
            >
              <Box className="heading-content">
                <Typography variant="h2" sx={{ my: 2, color: "white" }}>
                  Your Vision. Our Dedicated Experts. Let's Start Today.
                </Typography>
              </Box>

              <Box className="circle-wrapper">
                <Box className="call-logo-inner">
                  <Link
                    target="_blank"
                    href="https://calendly.com/jvaghasiya-universalstreamsolution/30min"
                  >
                    <Lottie
                      animationData={minitsCircle} width={'250px'} height={'250px'}
                      loop={true}
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </motion.section>

      {/* Process line Section */}
      <motion.section {...fadeInUp}>
        <Container
          className="custom-container"
          maxWidth="lg"
          sx={{ py: { xs: 3, md: 4, lg: 5 } }}
        >
          <Box className="heading-content logo-swiper-box-title">
            <Typography
              variant="h2"
              align="center"
              sx={{ mt: 2, mb: 3, fontWeight: 700 }}
            >
              How We{" "}
              <span className="primary-color">
                Help You Hire the Right Dedicated Dev
                <span className="span-text">
                  elopers
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
                  src={DeveloperProfile}
                  alt="icon"
                  width={100}
                  height={100}
                  unoptimized
                />
                <Typography variant="body1" className="step-text-description">
                  Tell Us What You Need
                </Typography>
              </Box>

              <Box className="timeline-step even">
                <Typography variant="body1" className="step-text-description">
                  Review Curated Developer Profiles
                </Typography>
                <Image
                  src={Interview}
                  alt="icon"
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
                  src={Onboarding}
                  alt="icon"
                  width={100}
                  height={100}
                  unoptimized
                />
                <Typography variant="body1" className="step-text-description">
                  Interview & Test Their Fit
                </Typography>
              </Box>

              <Box className="timeline-step even">
                <Typography variant="body1" className="step-text-description">
                  Seamless Onboarding
                </Typography>
                <Image
                  src={Developing}
                  alt="icon"
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
                  src={YourNeed}
                  alt="icon"
                  width={100}
                  height={100}
                  unoptimized
                />
                <Typography variant="body1" className="step-text-description">
                  Start Building, Together
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </motion.section>

      {/* impact */}
      <motion.section {...fadeInUp}>
        <Box className="impact-wrapper" sx={{ py: { xs: 3, md: 4, lg: 5 } }}>
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content logo-swiper-box-title">
              <Typography
                variant="h2"
                align="center"
                sx={{ mt: 2, mb: 4, fontWeight: 700 }}
              >
                Power Up Your App{" "}
                <span className="primary-color">
                  with Our Expert Dev
                  <span className="span-text">
                    elopers
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
            </Box>

            <Grid container justifyContent="space-between">
              {/* Left Impact Column */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box className="impact-column impact-left">
                  <Box className="impact-card with-connector1">
                    <Image src={ImpactDoc} alt="Agile" width={32} height={32} />
                    <Box>
                      <Typography variant="body1" className="impact-title">
                        Your Project Comes First
                      </Typography>
                      <Typography variant="body2" className="impact-description">
                        I focus fully on your project—delivering fast results with
                        in-house-level commitment.
                      </Typography>
                    </Box>
                    <Box className="impact-blue-dot connect-dot-1"></Box>
                  </Box>

                  <Box className="impact-card with-connector2">
                    <Image
                      src={ImpactMessages}
                      alt="Hiring"
                      width={32}
                      height={32}
                    />
                    <Box>
                      <Typography variant="body1" className="impact-title">
                        Clear Communication
                      </Typography>
                      <Typography variant="body2" className="impact-description">
                        I keep you updated with clear, consistent communication
                        and fast responses throughout the project.
                      </Typography>
                    </Box>
                    <Box className="impact-blue-dot connect-dot-2"></Box>
                  </Box>

                  <Box className="impact-card with-connector3">
                    <Image
                      src={ImpactPeople}
                      alt="Support"
                      width={32}
                      height={32}
                    />
                    <Box>
                      <Typography variant="body1" className="impact-title">
                        Teamwork That Feels Natural
                      </Typography>
                      <Typography variant="body2" className="impact-description">
                        I seamlessly integrate with your team and tools to keep
                        everything running smoothly from day one.
                      </Typography>
                    </Box>
                    <Box className="impact-blue-dot connect-dot-3"></Box>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 2 }} className="impact-center">
                <Box className="impact-circle ripple-gray">
                  <Image
                    src={USSLogo}
                    alt="React Icon"
                    className="impact-center-img"
                  />
                </Box>
              </Grid>

              {/* Right Impact Column */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box className="impact-column impact-right">
                  <Box className="impact-card with-connector4">
                    <Image
                      src={ImpactConvert}
                      alt="UI/UX"
                      width={32}
                      height={32}
                    />
                    <Box>
                      <Typography variant="body1" className="impact-title">
                        Ready for Any Change
                      </Typography>
                      <Typography variant="body2" className="impact-description">
                        I adapt quickly to changing plans, always keeping your
                        project on track without delays.
                      </Typography>
                    </Box>
                    <Box className="impact-blue-dot connect-dot-4"></Box>
                  </Box>

                  <Box className="impact-card with-connector5">
                    <Image
                      src={ImpactVerify}
                      alt="Security"
                      width={32}
                      height={32}
                    />
                    <Box>
                      <Typography variant="body1" className="impact-title">
                        Quality Over Speed
                      </Typography>
                      <Typography variant="body2" className="impact-description">
                        I go beyond tasks—proactively spotting issues early and
                        adding value to improve your project.
                      </Typography>
                    </Box>
                    <Box className="impact-blue-dot connect-dot-5"></Box>
                  </Box>

                  <Box className="impact-card with-connector6">
                    <Image
                      src={ImpactChart}
                      alt="Communication"
                      width={32}
                      height={32}
                    />
                    <Box>
                      <Typography variant="body1" className="impact-title">
                        Scalable Growth
                      </Typography>
                      <Typography variant="body2" className="impact-description">
                        We build scalable systems that grow with your business and
                        stay ready for the future.
                      </Typography>
                    </Box>
                    <Box className="impact-blue-dot connect-dot-6"></Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.section>

      {/* case-study */}
      <Casestudyoverview />

      {/* contact form */}
      <motion.section {...fadeInUp}>
        <Container className="custom-container" maxWidth="lg">
          <Box className="heading-content">
            <Typography
              variant="h2"
              align="center"
              sx={{ mt: 6, mb: 4, fontWeight: 700 }}
            >
              Start Your{" "}
              <span className="primary-color">
                Project with the Right T
                <span className="span-text">
                  alent
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
    </>
  );
};

export default CompDedicatedDevelopmentServices;
