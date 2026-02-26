'use client';

import React, { useState, useRef, useEffect, useMemo, useCallback, useLayoutEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  AppBar, Toolbar, Tabs, Tab, Collapse, Grid, Paper, Box, Button, Typography,
  ClickAwayListener, Container, Stack, Menu, MenuItem, Slide, IconButton, Drawer,
  List, ListItem, ListItemText, useMediaQuery, useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/uss-logo.svg?url';

import image from '@/healthcare/image.webp';
import image1 from '@/healthcare/image1.webp';
import image2 from '@/healthcare/image2.webp';
import image3 from '@/healthcare/image3.webp';
import image4 from '@/healthcare/image4.webp';
import image5 from '@/healthcare/image5.webp';
import image6 from '@/healthcare/image6.webp';
import image7 from '@/healthcare/image7.webp';
import image8 from '@/healthcare/image8.webp';
import image9 from '@/healthcare/image9.webp';
import image10 from '@/healthcare/image10.webp';
import image11 from '@/healthcare/image11.webp';
import image12 from '@/healthcare/image12.webp';
import image13 from '@/healthcare/image13.webp';
import image14 from '@/healthcare/image14.webp';
import image15 from '@/healthcare/image15.webp';
import image16 from '@/healthcare/image16.webp';
import image17 from '@/healthcare/image17.webp';
import image18 from '@/healthcare/image18.webp';
import image19 from '@/healthcare/image19.webp';
import image20 from '@/healthcare/image20.webp';
import image21 from '@/healthcare/image21.webp';
import image22 from '@/healthcare/image22.webp';
import image23 from '@/healthcare/image23.webp';
import image24 from '@/healthcare/image24.webp';
import image25 from '@/healthcare/image25.webp';
import image26 from '@/healthcare/image26.webp';
import image27 from '@/healthcare/image27.webp';
import image28 from '@/healthcare/image28.webp';
import image29 from '@/healthcare/image29.webp';
import image30 from '@/healthcare/image30.webp';
import image31 from '@/healthcare/image31.webp';
import image32 from '@/healthcare/image32.webp';
import image33 from '@/healthcare/image33.webp';
import image34 from '@/healthcare/image34.webp';
import image35 from '@/healthcare/image35.webp';
import image36 from '@/healthcare/image36.webp';
import image37 from '@/healthcare/image37.webp';
import image38 from '@/healthcare/image38.webp';
import image39 from '@/healthcare/image39.webp';
import image40 from '@/healthcare/image40.webp';
import image41 from '@/healthcare/image41.webp';
import image42 from '@/healthcare/image42.webp';


import icon1 from '@/solution/icon1.svg?url';
import icon2 from '@/solution/icon2.svg?url';
import icon3 from '@/solution/icon3.svg?url';
import icon4 from '@/solution/icon4.svg?url';
import icon5 from '@/solution/icon5.svg?url';
import icon6 from '@/solution/icon6.svg?url';
import icon7 from '@/solution/icon7.svg?url';
import icon8 from '@/solution/icon8.svg?url';
import icon9 from '@/solution/icon9.svg?url';
import icon10 from '@/solution/icon10.svg?url';
import icon11 from '@/solution/icon11.svg?url';
import icon12 from '@/solution/icon12.svg?url';
import icon13 from '@/solution/icon13.svg?url';
import icon14 from '@/solution/icon14.svg?url';
import icon15 from '@/solution/icon15.svg?url';
import icon16 from '@/solution/icon16.svg?url';
import icon17 from '@/solution/icon17.svg?url';
import icon18 from '@/solution/icon18.svg?url';
import icon19 from '@/solution/icon19.svg?url';
import icon20 from '@/solution/icon20.svg?url';
import icon21 from '@/solution/icon21.svg?url';
import icon22 from '@/solution/icon22.svg?url';
import icon23 from '@/solution/icon23.svg?url';
import icon24 from '@/solution/icon24.svg?url';
import icon25 from '@/solution/icon25.svg?url';
import icon26 from '@/solution/icon26.svg?url';
import icon27 from '@/solution/icon27.svg?url';
import icon28 from '@/solution/icon28.svg?url';
import icon29 from '@/solution/icon29.svg?url';
import icon30 from '@/solution/icon30.svg?url';

import phpIcon from '@/php.svg?url';
import dotNetIcon from '@/dotnet.svg?url';
import ciIcon from '@/ci.svg?url';
import reactIcon from '@/react-js.svg?url';
import wordpressIcon from '@/wp.svg?url';
import laravelIcon from '@/laravel.svg?url';
import pythonIcon from '@/python.svg?url';
import nodejsIcon from '@/nodejs.svg?url';
import angularIcon from '@/angular.svg?url';
import vueIcon from '@/vuejs.svg?url';
import bootstrapIcon from '@/bootstrap5.svg?url';
import androidIcon from '@/android.svg?url';
import androidstudioIcon from '@/android-icon.svg?url';
import appleIcon from '@/ios.svg?url';
import pwaIcon from '@/pwa.svg?url';
import firefoxIcon from '@/firebase.svg?url';
import vsIcon from '@/visual-studio.svg?url';
import adobeIllustratorIcon from '@/adobe-illustrator.svg?url';
import adobePhotoshopIcon from '@/adobe-photoshop.svg?url';
import adobeXdIcon from '@/adobe-xd.svg?url';
import afterEffectsIcon from '@/after-effects.svg?url';
import arduinoIcon from '@/arduino.svg?url';
import CPlusIcon from '@/cplus.svg?url';
import coreldrawIcon from '@/coreldraw-icon.svg?url';
import cssIcon from '@/css3.svg?url';
import DotnetMVCIcon from '@/dotnet-mvc.svg?url';
import EclipseIDEIcon from '@/eclipse-ide.svg?url';
import ExpressIcon from '@/express.svg?url';
import figmaIcon from '@/figma.svg?url';
import googleAnalyticsIcon from '@/google-analytics.svg?url';
import googleAdsIcon from '@/google-ads.svg?url';
import GroupIcon from '@/group.svg?url';
import HootsuiteIcon from '@/hootsuite.svg?url';
import HtmlIcon from '@/html5.svg?url';
import HubSpotIcon from '@/hub-spot.svg?url';
import JavascriptIcon from '@/javascript.svg?url';
import jiraIcon from '@/jira.svg?url';
import JqueryIcon from '@/jquery.svg?url';
import mailchimpIcon from '@/mailchimp.svg?url';
import MicrosoftDOTNETIcon from '@/microsoftdotnet.svg?url';
import MicrosoftAzureIcon from '@/microsoft-azure.svg?url';
import MongoDBIcon from '@/mongodb.svg?url';
import MSSQLIcon from '@/ms-sql.svg?url';
import MySql2Icon from '@/my-sql2.svg?url';
import NETCoreIcon from '@/net-core.svg?url';
import FacebookMetaIcon from '@/facebook-meta.svg?url';
import NextjsIcon from '@/nextjs.svg?url';
import postmanIcon from '@/postman.svg?url';
import premiereProIcon from '@/premiere-pro.svg?url';
import pytorch2Icon from '@/pytorch2.svg?url';
import raspberryPIIcon from '@/raspberry-pi.svg?url';
import SemrushIcon from '@/semrush.svg?url';
import unityIcon from '@/unity-69.svg?url';
import VectorIcon from '@/vector.svg?url';

const HealthcaretabData = [
  { label: "Healthcare", url: "/healthcare", class: "healthcare-menu" },
  { label: "Patient Management Portal", url: "/healthcare-tech/patient-management-portal" },
  { label: "Online/Offline Pharmacy", url: "/healthcare-tech/online-offline-pharmacy" },
  { label: "Prescription Assistance Portal", url: "/healthcare-tech/prescription-assistance-portal" },
  { label: "Medical Billing", url: "/healthcare-tech/medical-billing" },
  { label: "EHR/EMR Development", url: "/healthcare-tech/ehr-emr-development" },
  { label: "Hospital Management", url: "/healthcare-tech/hospital-management" },
  { label: "Compliance Software", url: "/healthcare-tech/compliance-software" },
];

// Centralized tab data for other menus (used to sync active state from URL)
const SolutionsTabData = [
  { label: "Online Store Development", url: "/solutions/online-store-development" },
  { label: "Custom Business Application", url: "/solutions/custom-business-application" },
  { label: "Enterprise Software Development", url: "/solutions/enterprise-software-development" },
  { label: "Other Industry Expertise", url: "/solutions/other-industry-expertise" },
];

const HelpTabData = [
  { label: "Web Design & Development", url: "/how-we-help/web-design-and-development" },
  { label: "Mobile Application Development", url: "/how-we-help/mobile-application-devlopment" },
  { label: "Custom Software Development", url: "/how-we-help/custom-software-development" },
  { label: "Graphic & Product Design", url: "/how-we-help/graphics-and-ui-ux-design" },
  { label: "SEO & Digital Marketing", url: "/how-we-help/digital-marketing" },
  { label: "Emerging Technology", url: "/how-we-help/emerging-technology" },
  { label: "Testing & Quality Control", url: "/how-we-help/testing-and-quality-control" },
  { label: "Dedicated Development Services", url: "/how-we-help/dedicated-development-services" },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg')) || false;
  const [openMenu, setOpenMenu] = useState(null);
  const [healthcareTabIndex, setHealthcareTabIndex] = useState(0);
  const [solutionsTabIndex, setSolutionsTabIndex] = useState(0);
  const [disableScrollHide, setDisableScrollHide] = useState(false);
  const [helpTabIndex, setHelpTabIndex] = useState(0);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);
  const openMenuRef = useRef(openMenu);
  const hideTimerRef = useRef(null);
  // let lastScrollY = 0;

  const ismdMobile = useMediaQuery(theme.breakpoints.down("md")) || false;

  // Parent menu active state based on current route (ensures only the matching parent is active)
  const isHealthcareActive = useMemo(() => {
    return (pathname?.startsWith('/healthcare') || pathname?.startsWith('/healthcare-tech')) ?? false;
  }, [pathname]);

  const isSolutionsActive = useMemo(() => {
    return (pathname?.startsWith('/solutions')) ?? false;
  }, [pathname]);

  const isHelpActive = useMemo(() => {
    return (pathname?.startsWith('/how-we-help')) ?? false;
  }, [pathname]);

  const isBTCActive = useMemo(() => {
    const btcPaths = ['/about-us', '/blog', '/life', '/career', '/casestudies', '/contactus'];
    return btcPaths.includes(pathname ?? '');
  }, [pathname]);

  const visibleTabs = useMemo(() => {
    if (!mounted) return HealthcaretabData;
    return isMobile ? HealthcaretabData : HealthcaretabData.slice(1);
  }, [isMobile, mounted]);

  // Reset index when switching between mobile/desktop
  useEffect(() => {
    if (mounted) {
      setHealthcareTabIndex(0);
    }
  }, [ismdMobile, mounted]);

  // Sync Healthcare tab selection with current route
  useEffect(() => {
    if (!mounted) return;
    if (!(pathname?.startsWith('/healthcare') || pathname?.startsWith('/healthcare-tech'))) return;

    const fullIndex = HealthcaretabData.findIndex((tab) => {
      // Match exact tab url or prefixed path (for nested routes)
      return pathname === tab.url || pathname?.startsWith(tab.url + '/');
    });

    if (fullIndex === -1) return;

    // On desktop, the first item ("Healthcare") is sliced out
    const adjustedIndex = isMobile ? fullIndex : Math.max(0, fullIndex - 1);
    setHealthcareTabIndex(adjustedIndex);
  }, [pathname, isMobile, mounted]);

  // Sync Solutions tab selection with current route
  useEffect(() => {
    if (!mounted) return;
    if (!pathname?.startsWith('/solutions')) return;

    const index = SolutionsTabData.findIndex((tab) => pathname === tab.url || pathname?.startsWith(tab.url + '/'));
    if (index !== -1) setSolutionsTabIndex(index);
  }, [pathname, mounted]);

  // Sync How We Help tab selection with current route
  useEffect(() => {
    if (!mounted) return;
    if (!pathname?.startsWith('/how-we-help')) return;

    const index = HelpTabData.findIndex((tab) => pathname === tab.url || pathname?.startsWith(tab.url + '/'));
    if (index !== -1) setHelpTabIndex(index);
  }, [pathname, mounted]);

  // prevent body scrolling when menu or drawer is open
  // useLayoutEffect(() => {
  //   if (mobileDrawerOpen || openMenu) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [mobileDrawerOpen, openMenu]);

  // Update ref when openMenu changes
  useEffect(() => {
    openMenuRef.current = openMenu;
  }, [openMenu]);

  const handleScroll = useCallback(() => {
    if (disableScrollHide) return;

    const currentScrollY = window.scrollY;

    // Clear any existing timer
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    if (currentScrollY > lastScrollY.current && currentScrollY > 500) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    lastScrollY.current = currentScrollY;

    // Set timer to hide header after 5 seconds of no scrolling
    hideTimerRef.current = setTimeout(() => {
      // Do not hide when at top of page
      if (window.scrollY > 0) {
        setShowHeader(false);
      }
    }, 5000);
  }, [disableScrollHide]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clear timer on cleanup
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, [handleScroll]);

  // Remove handleMenuHover and add hover handler
  const handleMenuHover = useCallback((menu) => {
    if (openMenuRef.current !== menu) {
      setOpenMenu(menu);
      setDisableScrollHide(true);
      setShowHeader(true);
    }
  }, []);

  const handleMenuLeave = useCallback(() => {
    setOpenMenu(null);
    setDisableScrollHide(false);
  }, []);

  const handleClickAway = useCallback(() => {
    setOpenMenu(null);
    setDisableScrollHide(false);
  }, []);

  const toggleDrawer = useCallback((open) => () => {
    setMobileDrawerOpen(open);
    if (!open) {
      setOpenMenu(null);
      setDisableScrollHide(false);
    }
  }, []);

  const renderHealthcareMenu = () => (
    <Container className="custom-container" style={{ padding: 0 }}>
      <Box className='mega-menu-box-wrapper'>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, lg: 3 }} className='verticle-tab-wrapper'>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={healthcareTabIndex}
              className="verticle-tab-box"
            >
              {visibleTabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  className={`${tab.class || ""} megamenu-verticle-tab`}
                  onMouseEnter={() => setHealthcareTabIndex(index)}
                  component={Link}
                  href={tab.url}
                  onClick={() => {
                    setOpenMenu(null);
                    setMobileDrawerOpen(false);
                  }}
                />
              ))}
            </Tabs>
          </Grid>

          {/* Right Side Content */}
          <Grid size={{ xs: 12, lg: 9 }} className='verticle-tab-content-wrapper'>
            <Box sx={{ flex: 1 }}>
              {healthcareTabIndex === 0 && (
                <>
                  <Box className="healthcare-box-height">
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image} alt="Secure Registration & Patient Profile Management" />
                          <Typography variant="body1" mt={1}>Secure Registration & Patient Profile Management</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image1} alt="Appointment Schedule & Reminder" />
                          <Typography variant="body1" mt={1}>Appointment Schedule & Reminder</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image2} alt="Telehealth & Virtual Consultations" />
                          <Typography variant="body1" mt={1}>Telehealth & Virtual Consultations</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image3} alt="Medical History & Documentation" />
                          <Typography variant="body1" mt={1}>Medical History & Documentation</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image4} alt="Billing & Insurance Integration" />
                          <Typography variant="body1" mt={1}>Billing & Insurance Integration</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image5} alt="Patient Centric Care Delivery" />
                          <Typography variant="body1" mt={1}>Patient Centric Care Delivery</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                  {/* CTA Section */}
                  <Paper
                    elevation={0} className='cta-box'>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>Streamline Patient Care</Typography>
                      <Typography variant="body2">
                        Track patients, manage appointments, & streamline healthcare all from one simple, powerful platform.
                      </Typography>
                    </Box>
                    <Link href="/healthcare-tech/patient-management-portal">
                      <Button
                        variant="contained"
                        className='main-btn megamenu-btn'
                        onClick={() => {
                          setOpenMenu(null);
                          setMobileDrawerOpen(false);
                        }}
                      >
                        Explore Now
                      </Button>
                    </Link>
                    {/* <Button variant="contained" className='main-btn megamenu-btn'>
                      Explore Now
                    </Button> */}
                  </Paper>
                </>
              )}

              {healthcareTabIndex === 1 && (
                <>
                  <Box className="healthcare-box-height">
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image6} className="megamenu-img" alt="E-Prescription Management" />
                          <Typography variant="body1" mt={1}>E-Prescription Management</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image7} className="megamenu-img" alt="Inventory & Stock Management" />
                          <Typography variant="body1" mt={1}>Inventory & Stock Management</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image8} className="megamenu-img" alt="Online Ordering & Delivery Tracking" />
                          <Typography variant="body1" mt={1}>Online Ordering & Delivery Tracking</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image9} className="megamenu-img" alt="Automated Refill & Alerts" />
                          <Typography variant="body1" mt={1}>Automated Refill & Alerts</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image10} className="megamenu-img" alt="Multi-Pharmacy Management" />
                          <Typography variant="body1" mt={1}>Multi-Pharmacy Management</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image11} className="megamenu-img" alt="Insurance & Payment Integration" />
                          <Typography variant="body1" mt={1}>Insurance & Payment Integration</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>


                  {/* CTA Section */}
                  <Paper
                    elevation={0} className='cta-box'>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>More than just medicines</Typography>
                      <Typography variant="body2">
                        From daily essentials to vital prescriptions — we deliver trusted care, on time, every time.
                      </Typography>
                    </Box>
                    <Link href="/healthcare-tech/online-offline-pharmacy">
                      <Button
                        variant="contained"
                        className='main-btn megamenu-btn'
                        onClick={() => {
                          setOpenMenu(null);
                          setMobileDrawerOpen(false);
                        }}
                      >
                        Explore Now
                      </Button>
                    </Link>
                    {/* <Button variant="contained" className='main-btn megamenu-btn'>
                      Explore Now
                    </Button> */}
                  </Paper>
                </>
              )}

              {healthcareTabIndex === 2 && (
                <>
                  <Box className="healthcare-box-height">
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image12} alt="Patient Eligibility & Enrollment" />
                          <Typography variant="body1" mt={1}>Patient Eligibility & Enrollment</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image13} alt="Real-Time Drug Discount Finder" />
                          <Typography variant="body1" mt={1}>Real-Time Drug Discount Finder</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image14} alt="E-PAP Submission & Processing" />
                          <Typography variant="body1" mt={1}>E-PAP Submission & Processing</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image15} alt="Integration with EHR/EMR" />
                          <Typography variant="body1" mt={1}>Integration with EHR/EMR</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image16} alt="Medication Adherence Tracking" />
                          <Typography variant="body1" mt={1}>Medication Adherence Tracking</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image17} alt="HIPAA & Compliance Management" />
                          <Typography variant="body1" mt={1}>HIPAA & Compliance Management</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>


                  {/* CTA Section */}
                  <Paper
                    elevation={0} className='cta-box'>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>Your treatment shouldn't stop because of high costs.</Typography>
                      <Typography variant="body2">
                        Safe, affordable, and personalized prescriptions — because your health deserves easy care.
                      </Typography>
                    </Box>
                    <Link href="/healthcare-tech/prescription-assistance-portal">
                      <Button
                        variant="contained"
                        className='main-btn megamenu-btn'
                        onClick={() => {
                          setOpenMenu(null);
                          setMobileDrawerOpen(false);
                        }}
                      >
                        Explore Now
                      </Button>
                    </Link>
                    {/* <Button variant="contained" className='main-btn megamenu-btn'>
                      Explore Now
                    </Button> */}
                  </Paper>
                </>
              )}

              {healthcareTabIndex === 3 && (
                <>
                  <Box className="healthcare-box-height">
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image18} className="megamenu-img" alt="image18" />
                          <Typography variant="body1" mt={1}>Claims Processing & Management</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image19} className="megamenu-img" alt="image19" />
                          <Typography variant="body1" mt={1}>Coding Compliance & ICD Integration</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image20} className="megamenu-img" alt="image20" />
                          <Typography variant="body1" mt={1}>Revenue Cycle Management (RCM)</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image21} className="megamenu-img" alt="image21" />
                          <Typography variant="body1" mt={1}>Automated Invoice & Payment Reminders</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image23} className="megamenu-img" alt="image23" />
                          <Typography variant="body1" mt={1}>Insurance Eligibility Verification</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image22} className="megamenu-img" alt="image22" />
                          <Typography variant="body1" mt={1}>Secure Payment Processing</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>


                  {/* CTA Section */}
                  <Paper
                    elevation={0} className='cta-box'>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>Simplify Your Medical Billing</Typography>
                      <Typography variant="body2">
                        From accurate claims to faster payouts — simplify billing and focus more on healing, not paperwork
                      </Typography>
                    </Box>
                    <Link href="/healthcare-tech/medical-billing">
                      <Button
                        variant="contained"
                        className='main-btn megamenu-btn'
                        onClick={() => {
                          setOpenMenu(null);
                          setMobileDrawerOpen(false);
                        }}
                      >
                        Explore Now
                      </Button>
                    </Link>
                    {/* <Button variant="contained" className='main-btn megamenu-btn'>
                      Explore Now
                    </Button> */}
                  </Paper>
                </>
              )}

              {healthcareTabIndex === 4 && (
                <>
                  <Box className="healthcare-box-height">
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image24} alt="Patient Registration" />
                          <Typography variant="body1" mt={1}>Patient Registration</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image25} alt="Appointment Scheduling" />
                          <Typography variant="body1" mt={1}>Appointment Scheduling</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image26} alt="Lab Test Integration" />
                          <Typography variant="body1" mt={1}>Lab Test Integration</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image27} alt="Medical Records" />
                          <Typography variant="body1" mt={1}>Medical Records </Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image28} alt="Billing & Invoicing" />
                          <Typography variant="body1" mt={1}>Billing & Invoicing</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image29} alt="Data Security" />
                          <Typography variant="body1" mt={1}>Data Security</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                  <Paper elevation={0} className='cta-box'>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>Modernize Your Practice with Smarter EHR/EMR Solutions</Typography>
                      <Typography variant="body2">
                        Digitize patient records, improve workflows, and access data instantly — all in a secure, intuitive system.
                      </Typography>
                    </Box>
                    <Link href="/healthcare-tech/ehr-emr-development">
                      <Button
                        variant="contained"
                        className='main-btn megamenu-btn'
                        onClick={() => {
                          setOpenMenu(null);
                          setMobileDrawerOpen(false);
                        }}
                      >
                        Explore Now
                      </Button>
                    </Link>
                    {/* <Button variant="contained" className='main-btn megamenu-btn'>
                      Explore Now
                    </Button> */}
                  </Paper>
                </>
              )}

              {healthcareTabIndex === 5 && (
                <>
                  <Box className="healthcare-box-height">
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image30} className="megamenu-img" alt="End-to-End Patient Workflow Management" />
                          <Typography variant="body1" mt={1}>End-to-End Patient Workflow Management</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image31} className="megamenu-img" alt="Electronic Health Record" />
                          <Typography variant="body1" mt={1}>Electronic Health Record (EHR) Integration</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image32} className="megamenu-img" alt="Appointment Booking" />
                          <Typography variant="body1" mt={1}>Appointment Booking</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image33} className="megamenu-img" alt="Doctor & Staff Scheduling" />
                          <Typography variant="body1" mt={1}>Doctor & Staff Scheduling</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image34} className="megamenu-img" alt="Inventory & Equipment Tracking" />
                          <Typography variant="body1" mt={1}>Inventory & Equipment Tracking</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image35} className="megamenu-img" alt="Financial & Billing System" />
                          <Typography variant="body1" mt={1}>Financial & Billing System</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image36} alt="Advanced Analytics & Reporting" />
                          <Typography variant="body1" mt={1}>Advanced Analytics & Reporting</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                  <Paper elevation={0} className='cta-box'>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>Run Your Hospital Smarter with an All-in-One Management Solution</Typography>
                      <Typography variant="body2">
                        Simplify hospital operations — from admission to discharge — with one powerful platform.
                      </Typography>
                    </Box>
                    <Link href="/healthcare-tech/hospital-management">
                      <Button
                        variant="contained"
                        className='main-btn megamenu-btn'
                        onClick={() => {
                          setOpenMenu(null);
                          setMobileDrawerOpen(false);
                        }}
                      >
                        Explore Now
                      </Button>
                    </Link>
                    {/* <Button variant="contained" className='main-btn megamenu-btn'>
                      Explore Now
                    </Button> */}
                  </Paper>
                </>
              )}

              {healthcareTabIndex === 6 && (
                <>
                  <Box className="healthcare-box-height">
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image37} alt="Regulatory compliance management" />
                          <Typography variant="body1" mt={1}>Regulatory compliance management (HIPAA, GDPR, etc.)</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image38} alt="Patient data security" />
                          <Typography variant="body1" mt={1}>Patient data security with encryption and role-based access</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image39} alt="Integration with EHR/EMR systems" />
                          <Typography variant="body1" mt={1}>Integration with EHR/EMR systems using healthcare data standards</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image40} alt="Risk assessment and automated" />
                          <Typography variant="body1" mt={1}>Risk assessment and automated compliance alerts</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image41} alt="Incident reporting and audit" />
                          <Typography variant="body1" mt={1}>Incident reporting and audit trail management</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
                        <Box display="flex" flexDirection="column" className='megamenu-box healthcare-megamenu' alignItems="center" textAlign="center">
                          <Image src={image42} alt="Employee training and certification" />
                          <Typography variant="body1" mt={1}>Employee training and certification tracking</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                  <Paper elevation={0} className='cta-box'>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>Medicine Made Simple — Find, Order, and Refill with a Click</Typography>
                      <Typography variant="body2">
                        Stay compliant and protected with hassle-free, streamlined compliance software.
                      </Typography>
                    </Box>
                    <Link href="/healthcare-tech/compliance-software">
                      <Button
                        variant="contained"
                        className='main-btn megamenu-btn'
                        onClick={() => {
                          setOpenMenu(null);
                          setMobileDrawerOpen(false);
                        }}
                      >
                        Explore Now
                      </Button>
                    </Link>
                    {/* <Button variant="contained" className='main-btn megamenu-btn'>
                      Explore Now
                    </Button> */}
                  </Paper>
                </>
              )}

            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );

  const renderSolutionsMenu = () => (
    <Container className="custom-container" style={{ padding: 0 }}>
      <Box className='mega-menu-box-wrapper'>
        <Grid container spacing={3}>
          {/* Left Tabs */}
          <Grid size={{ xs: 12, lg: 3 }} className='verticle-tab-wrapper'>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={solutionsTabIndex}
              className="verticle-tab-box"
            >
              {[
                { label: "Online Store Development", url: "/solutions/online-store-development" },
                // {
                //   label: "Cyber Security & Cloud Management",
                //   url: "/solutions/cyber-security-and-cloud-management"
                //   url: "#"
                // },
                { label: "Custom Business Application", url: "/solutions/custom-business-application" },
                { label: "Enterprise Software Development", url: "/solutions/enterprise-software-development" },
                { label: "Other Industry Expertise", url: "/solutions/other-industry-expertise" },
              ].map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  className="megamenu-verticle-tab"
                  onMouseEnter={() => setSolutionsTabIndex(index)}
                  component={Link}
                  href={tab.url}
                  onClick={() => {
                    setOpenMenu(null);
                    setMobileDrawerOpen(false);
                  }}
                />
              ))}
            </Tabs>
          </Grid>


          {/* Right Content */}
          <Grid size={{ xs: 12, lg: 9 }} className='verticle-tab-content-wrapper'>
            <Box sx={{ flex: 1 }}>
              {solutionsTabIndex === 0 && (
                <>
                  <Box className="heading-solution-box-height">
                    <Grid container spacing={3}>
                      {[
                        {
                          icon: icon1,
                          title: 'Custom Design & Branding',
                          desc: 'Custom stores that reflect your brand, seamlessly.',
                        },
                        {
                          icon: icon2,
                          title: 'Secure Payment Integration',
                          desc: 'Secure, smooth payments with trusted gateway integrations.',
                        },
                        {
                          icon: icon3,
                          title: 'Mobile-Responsive Layout',
                          desc: 'Your store, perfectly responsive on every device.',
                        },
                        {
                          icon: icon4,
                          title: 'Order & Inventory Management',
                          desc: 'Manage orders, inventory, and returns from one dashboard.',
                        },
                        {
                          icon: icon5,
                          title: 'Easy Product Management',
                          desc: 'Easily manage products with a user-friendly backend.',
                        },
                        {
                          icon: icon6,
                          title: 'Shopping Cart & Checkout System',
                          desc: 'Simplified checkout to reduce drop-offs and boost sales.',
                        },
                      ].map((item, index) => (
                        <Grid size={{ xs: 12, lg: 6 }} key={index}>
                          <Box display="flex" gap={2} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Image src={item.icon} alt={item.title} width={40} height={40} />
                            <Box className='megamenu-box'>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>


                  {/* CTA Box */}
                  <Paper
                    elevation={0}
                    className='cta-box'>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        Turn Your Product Ideas into a Profitable Store
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        We design powerful, mobile-friendly online stores that grow with your business.
                      </Typography>
                    </Box>
                    <Button
                      component={Link}
                      href="https://calendly.com/jvaghasiya-universalstreamsolution/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      className='main-btn megamenu-btn'
                      onClick={() => {
                        setOpenMenu(null);
                        setMobileDrawerOpen(false);
                      }}
                    >
                      Let's Talk
                    </Button>
                    {/* <Button variant="contained" className='main-btn megamenu-btn'>
                      Let's Talk
                    </Button> */}
                  </Paper>
                </>
              )}

              {solutionsTabIndex === 1 && (
                <>
                  <Box className="heading-solution-box-height">
                    <Grid container spacing={3}>
                      {[
                        {
                          icon: icon7,
                          title: '24/7 Threat Monitoring',
                          desc: 'Real-time protection against evolving cyber threats.',
                        },
                        {
                          icon: icon8,
                          title: 'Access Control & Identity Management',
                          desc: 'Role-based access to protect sensitive business data.',
                        },
                        {
                          icon: icon9,
                          title: 'Secure Cloud Infrastructure',
                          desc: 'Secure cloud setup and management on AWS, Azure, or GCP.',
                        },
                        {
                          icon: icon10,
                          title: 'Compliance & Security Audits',
                          desc: 'Comply with industry standards like GDPR and HIPAA.',
                        },
                        {
                          icon: icon11,
                          title: 'Data Encryption & Privacy',
                          desc: 'Powerful encryption to protect your data privacy.',
                        },
                        {
                          icon: icon12,
                          title: 'Automatic Backups & Disaster Recovery',
                          desc: 'Regular data backups with fast recovery options.',
                        },
                      ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                          <Box display="flex" gap={2} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Image src={item.icon} alt={item.title} width={40} height={40} />
                            <Box className='megamenu-box'>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* CTA Box */}
                  <Paper elevation={0} className='cta-box'>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        Stay One Step Ahead of Hackers
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        We secure your data, systems, and networks – so you can focus on growth.
                      </Typography>
                    </Box>
                    <Button
                      component={Link}
                      href="https://calendly.com/jvaghasiya-universalstreamsolution/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      className='main-btn megamenu-btn'
                      onClick={() => {
                        setOpenMenu(null);
                        setMobileDrawerOpen(false);
                      }}
                    >
                      Let's Talk
                    </Button>
                    {/* <Button variant="contained" className='main-btn megamenu-btn'>
                      Let's Talk
                    </Button> */}
                  </Paper>
                </>
              )}

              {solutionsTabIndex === 2 && (
                <>
                  <Box className="heading-solution-box-height">
                    <Grid container spacing={3}>
                      {[
                        {
                          icon: icon13,
                          title: 'Tailor-Made Solutions',
                          desc: 'Custom-built solutions tailored to your business needs.',
                        },
                        {
                          icon: icon14,
                          title: 'Secure Access Control',
                          desc: 'Role-based access to safeguard sensitive business data.',
                        },
                        {
                          icon: icon15,
                          title: 'User-Friendly Interface',
                          desc: 'Easy to use, clean design that your team can quickly adapt to.',
                        },
                        {
                          icon: icon16,
                          title: 'Smooth Integration',
                          desc: 'Seamlessly integrates with your existing CRM, ERP, and more.',
                        },
                        {
                          icon: icon17,
                          title: 'Cross-Platform Access',
                          desc: 'Works seamlessly on web, mobile, and desktop devices.',
                        },
                        {
                          icon: icon18,
                          title: 'Scalable Architecture',
                          desc: 'Grows with your business—add users or features anytime.',
                        },
                      ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                          <Box display="flex" gap={2} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Image src={item.icon} alt={item.title} width={40} height={40} />
                            <Box className='megamenu-box'>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* CTA Box */}
                  <Paper elevation={0} className='cta-box'>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        Streamline Operations with a Custom App
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Automate, optimize, and innovate – all in one powerful business application.
                      </Typography>
                    </Box>
                    <Button
                      component={Link}
                      href="https://calendly.com/jvaghasiya-universalstreamsolution/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      className='main-btn megamenu-btn'
                      onClick={() => {
                        setOpenMenu(null);
                        setMobileDrawerOpen(false);
                      }}
                    >
                      Let's Talk
                    </Button>
                    {/* <Button variant="contained" className='main-btn megamenu-btn'>
                      Let's Talk
                    </Button> */}
                  </Paper>
                </>
              )}

              {solutionsTabIndex === 3 && (
                <>
                  <Box className="heading-solution-box-height">
                    <Grid container spacing={3}>
                      {[
                        {
                          icon: icon19,
                          title: 'Custom-Built for Your Business',
                          desc: 'Seamlessly integrates with your existing CRM, ERP, and more.',
                        },
                        {
                          icon: icon20,
                          title: 'Automation & Workflow Optimization',
                          desc: 'Automate tasks to streamline operations and reduce manual work.',
                        },
                        {
                          icon: icon21,
                          title: 'Scalable & Modular Architecture',
                          desc: 'Easily adapt and grow the system as your company expands.',
                        },
                        {
                          icon: icon22,
                          title: 'Advanced Reporting & Analytics',
                          desc: 'Real-time insights and dashboards to support data-driven decisions.',
                        },
                        {
                          icon: icon23,
                          title: 'Enterprise-Grade Security',
                          desc: 'Robust data protection compliant with GDPR, HIPAA, and more.',
                        },
                        {
                          icon: icon24,
                          title: 'Centralized Data Management',
                          desc: 'Unified access to real-time company data from a single platform.',
                        },
                      ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                          <Box display="flex" gap={2} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Image src={item.icon} alt={item.title} width={40} height={40} />
                            <Box className='megamenu-box'>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* CTA Box */}
                  <Paper elevation={0} className='cta-box'>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        Modernize Your Enterprise, One Solution at a Time
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Custom-built software to drive innovation and digital transformation.
                      </Typography>
                    </Box>
                    <Button
                      component={Link}
                      href="https://calendly.com/jvaghasiya-universalstreamsolution/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      className='main-btn megamenu-btn'
                      onClick={() => {
                        setOpenMenu(null);
                        setMobileDrawerOpen(false);
                      }}
                    >
                      Let's Talk
                    </Button>
                    {/* <Button variant="contained" className='main-btn megamenu-btn'>
                      Let's Talk
                    </Button> */}
                  </Paper>
                </>
              )}

              {solutionsTabIndex === 4 && (
                <>
                  <Box className="heading-solution-box-height">
                    <Grid container spacing={3}>
                      {[
                        {
                          icon: icon25,
                          title: 'Oil & Gas',
                          desc: 'Streamline upstream, midstream with tech solutions.',
                        },
                        {
                          icon: icon26,
                          title: 'Retail',
                          desc: 'Redefine UX and drive business growth with expertise.',
                        },
                        {
                          icon: icon27,
                          title: 'Real Estate',
                          desc: 'Improve timelines and resources with digital solutions.',
                        },
                        {
                          icon: icon28,
                          title: 'Education & eLearning',
                          desc: 'Transform learning with engaging, results-driven solutions.',
                        },
                        {
                          icon: icon29,
                          title: 'Banking & FinTech',
                          desc: 'Streamline upstream, midstream with tech solutions.',
                        },
                        {
                          icon: icon30,
                          title: 'Manufacturing',
                          desc: 'Enhance speed and accuracy with real-time data analytics.',
                        },
                      ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                          <Box display="flex" gap={2} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Image src={item.icon} alt={item.title} width={40} height={40} />
                            <Box className='megamenu-box'>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* CTA Box */}
                  <Paper elevation={0} className='cta-box'>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        Connect with a Specialist Who Gets Your Industry
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Connect with a Specialist Who Gets Your Industry
                      </Typography>
                    </Box>
                    <Button
                      component={Link}
                      href="https://calendly.com/jvaghasiya-universalstreamsolution/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      className='main-btn megamenu-btn'
                      onClick={() => {
                        setOpenMenu(null);
                        setMobileDrawerOpen(false);
                      }}
                    >
                      Let's Talk
                    </Button>
                    {/* <Button variant="contained" className='main-btn megamenu-btn'>
                      Let's Talk
                    </Button> */}
                  </Paper>
                </>
              )}


            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );

  const renderHowWeHelpMenu = () => (
    <Container className="custom-container" style={{ padding: 0 }}>
      <Box className='mega-menu-box-wrapper'>
        <Grid container spacing={3}>
          {/* Left Tabs */}
          <Grid size={{ xs: 12, lg: 3 }} className="verticle-tab-wrapper">
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={helpTabIndex}
              className="verticle-tab-box"
            >
              {[
                { label: "Web Design & Development", url: "/how-we-help/web-design-and-development" },
                { label: "Mobile Application Development", url: "/how-we-help/mobile-application-devlopment" },
                { label: "Custom Software Development", url: "/how-we-help/custom-software-development" },
                { label: "Graphic & Product Design", url: "/how-we-help/graphics-and-ui-ux-design" },
                { label: "SEO & Digital Marketing", url: "/how-we-help/digital-marketing" },
                { label: "Emerging Technology", url: "/how-we-help/emerging-technology" },
                { label: "Testing & Quality Control", url: "/how-we-help/testing-and-quality-control" },
                { label: "Dedicated Development Services", url: "/how-we-help/dedicated-development-services" },
              ].map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  className="megamenu-verticle-tab"
                  onMouseEnter={() => setHelpTabIndex(index)}
                  component={Link}
                  href={tab.url}
                  onClick={() => {
                    setOpenMenu(null);
                    setMobileDrawerOpen(false);
                  }}
                />
              ))}
            </Tabs>
          </Grid>



          {/* Right Content */}
          <Grid size={{ xs: 12, lg: 9 }} className='verticle-tab-content-wrapper'>
            <Box sx={{ flex: 1 }}>
              {helpTabIndex === 0 && (
                <>
                  <Box className="heading-box-height">
                    <Grid container spacing={3}>
                      {[
                        {
                          title: 'Full Stack Development',
                          desc: 'From front to back, we build smart, scalable websites that just work.',
                        },
                        {
                          title: 'UI/UX Modernization',
                          desc: 'Give your digital experience a fresh, modern look your users will love.',
                        },
                        {
                          title: 'Enterprise Web Application',
                          desc: 'Custom web apps built to handle your business needs—fast, secure, and reliable.',
                        },
                        {
                          title: 'Integration, Upgradation & Migration',
                          desc: 'Move, upgrade, or connect your systems—seamlessly, with zero headaches.',
                        },
                        {
                          title: 'Progressive Web App Development (PWA)',
                          desc: 'Get the speed of a website with the feel of a native app—online or offline.',
                        },
                        {
                          title: 'Continuous Support and Maintenance',
                          desc: "We've got your back—round-the-clock support to keep things running smoothly.",
                        },
                        {
                          title: 'Content Management Systems (CMS)',
                          desc: 'Take control of your website with easy-to-use, flexible CMS solutions.',
                        },
                        {
                          title: 'Website Enhancement',
                          desc: 'Boost speed, design, and performance to get more from your existing website.',
                        },
                      ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                          <Box display="flex" gap={2} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box className='megamenu-box'>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* CTA Box */}
                  <Paper elevation={0} className='cta-box help-cta'>
                    <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
                      {/* Tech Logos */}
                      <Box display="flex" gap={2} flexWrap="wrap" alignItems="center">
                        {/* Replace these with actual <Image> icons as needed */}
                        <Image src={phpIcon} alt="PHP" width={30} height={30} />
                        <Image src={dotNetIcon} alt=".NET" width={30} height={30} />
                        <Image src={ciIcon} alt="ci" width={30} height={30} />
                        <Image src={reactIcon} alt="React" width={30} height={30} />
                        <Image src={wordpressIcon} alt="WordPress" width={30} height={30} />
                        <Image src={laravelIcon} alt="laravel" width={30} height={30} />
                        <Image src={pythonIcon} alt="Python" width={30} height={30} />
                        <Image src={nodejsIcon} alt="Node.js" width={30} height={30} />
                        <Image src={angularIcon} alt="Angular" width={30} height={30} />
                        <Image src={bootstrapIcon} alt="Bootstrap" width={30} height={30} />
                        <Image src={cssIcon} alt="Tailwind" width={30} height={30} />
                      </Box>

                      <Link href="/how-we-help/web-design-and-development">
                        <Button
                          variant="contained"
                          className='main-btn megamenu-btn'
                          onClick={() => {
                            setOpenMenu(null);
                            setMobileDrawerOpen(false);
                          }}
                        >
                          Explore Now
                        </Button>
                      </Link>
                      {/* <Button variant="contained" className='main-btn megamenu-btn'>
                        Explore More
                      </Button> */}
                    </Box>
                  </Paper>
                </>
              )}


              {helpTabIndex === 1 && (
                <>
                  <Box className="heading-box-height">
                    <Grid container spacing={3}>
                      {[
                        {
                          title: 'Custom App Development',
                          desc: 'Apps tailored exactly to your business goals, features, and user needs.',
                        },
                        {
                          title: 'Enterprise Mobility',
                          desc: 'Empower your team with secure, workflow-ready mobile access.',
                        },
                        {
                          title: 'Mobile App Strategy',
                          desc: 'Define the right path to app success with a tailored mobile strategy.',
                        },
                        {
                          title: 'Analytics & Reporting',
                          desc: 'Turn data into decisions with real-time insights and smart reporting.',
                        },
                        {
                          title: 'App Store Deployment',
                          desc: 'Launch your app seamlessly across iOS and Android stores with full compliance.',
                        },
                        {
                          title: 'App Maintenance & Support',
                          desc: 'Keep your app updated, secure, and running smoothly—always.',
                        },
                        {
                          title: 'Hybrid App Development',
                          desc: 'Build once, run everywhere with high-performance hybrid apps.',
                        },
                        {
                          title: 'Backend Development & API Integration',
                          desc: 'Powerful backends and seamless API integrations for smooth app performance.',
                        },
                      ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                          <Box display="flex" gap={2} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box className='megamenu-box'>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* CTA Box */}
                  <Paper elevation={0} className='cta-box help-cta'>
                    <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
                      {/* Tech Logos Row */}
                      <Box display="flex" gap={2} flexWrap="wrap" alignItems="center">
                        <Image src={reactIcon} alt="React Native" width={30} height={30} />
                        <Image src={androidIcon} alt="Android" width={30} height={30} />
                        <Image src={appleIcon} alt="iOS" width={30} height={30} />
                        <Image src={pwaIcon} alt="PWA" width={30} height={30} />
                        <Image src={firefoxIcon} alt="Flutter" width={30} height={30} />
                        <Image src={vsIcon} alt="VS Code" width={30} height={30} />
                        <Image src={androidstudioIcon} alt="Firebase" width={30} height={30} />
                      </Box>

                      <Link href="/how-we-help/mobile-application-devlopment">
                        <Button
                          variant="contained"
                          className='main-btn megamenu-btn'
                          onClick={() => {
                            setOpenMenu(null);
                            setMobileDrawerOpen(false);
                          }}
                        >
                          Explore Now
                        </Button>
                      </Link>
                      {/* <Button variant="contained" className='main-btn megamenu-btn'>
                        Explore More
                      </Button> */}
                    </Box>
                  </Paper>
                </>
              )}

              {helpTabIndex === 2 && (
                <>
                  <Box className="heading-box-height">
                    <Grid container spacing={3}>
                      {[
                        {
                          title: 'End-to-End Custom Software Development',
                          desc: 'Tailored software solutions built from scratch to perfectly fit your unique business needs.',
                        },
                        {
                          title: 'Enterprise Software Solutions',
                          desc: "Robust and scalable software designed to streamline your organization's complex processes.",
                        },
                        {
                          title: 'Web-Based Application Development',
                          desc: 'Fast, secure, and user-friendly web apps that work seamlessly across all devices.',
                        },
                        {
                          title: 'Software Product Development',
                          desc: 'Turning your innovative ideas into fully functional software products ready to launch.',
                        },
                        {
                          title: 'API Development & Integration',
                          desc: 'Connecting your systems smoothly to ensure everything works together effortlessly.',
                        },
                        {
                          title: 'UI/UX Design for Software Interfaces',
                          desc: 'Creating intuitive and engaging designs that make your software easy and enjoyable to use.',
                        },
                        {
                          title: 'Software Maintenance & Support',
                          desc: 'Reliable ongoing support to keep your software running smoothly and up to date.',
                        },
                        {
                          title: 'Cloud-Based Software Solutions',
                          desc: 'Flexible and scalable cloud software that grows with your business and boosts collaboration.',
                        },
                      ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                          <Box display="flex" gap={2} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box className='megamenu-box'>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* CTA Box */}
                  <Paper elevation={0} className='cta-box help-cta'>
                    <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
                      {/* Tech Logos Row */}
                      <Box display="flex" gap={2} flexWrap="wrap" alignItems="center">
                        <Image src={pythonIcon} alt="React Native" width={30} height={30} />
                        <Image src={CPlusIcon} alt="Android" width={30} height={30} />
                        <Image src={angularIcon} alt="iOS" width={30} height={30} />
                        <Image src={vueIcon} alt="PWA" width={30} height={30} />
                        <Image src={MicrosoftDOTNETIcon} alt="Flutter" width={30} height={30} />
                        <Image src={reactIcon} alt="VS Code" width={30} height={30} />
                        <Image src={NextjsIcon} alt="Firebase" width={30} height={30} />
                        <Image src={androidIcon} alt="VS Code" width={30} height={30} />
                        <Image src={HtmlIcon} alt="Firebase" width={30} height={30} />
                      </Box>

                      <Link href="/how-we-help/custom-software-development">
                        <Button
                          variant="contained"
                          className='main-btn megamenu-btn'
                          onClick={() => {
                            setOpenMenu(null);
                            setMobileDrawerOpen(false);
                          }}
                        >
                          Explore Now
                        </Button>
                      </Link>
                      {/* <Button variant="contained" className='main-btn megamenu-btn'>
                        Explore More
                      </Button> */}
                    </Box>
                  </Paper>
                </>
              )}

              {helpTabIndex === 3 && (
                <>
                  <Box className="heading-box-height">
                    <Grid container spacing={3}>
                      {[
                        {
                          title: 'User Interface (UI) Design',
                          desc: 'Crafting visually stunning interfaces that make every click a delight.',
                        },
                        {
                          title: 'User Experience (UX) Design',
                          desc: 'Designing smooth and meaningful journeys that keep users coming back.',
                        },
                        {
                          title: 'Mobile App UI/UX Design',
                          desc: 'Creating sleek and easy-to-use mobile experiences for your fingertips.',
                        },
                        {
                          title: 'Web App UI/UX Design',
                          desc: 'Building intuitive web apps that feel natural and effortless to navigate.',
                        },
                        {
                          title: 'Interaction Design',
                          desc: 'Bringing your software to life with engaging and responsive interactions.',
                        },
                        {
                          title: 'Wireframing & Prototyping',
                          desc: "Visual blueprints and early models to map out your app's flow and look.",
                        },
                        {
                          title: 'Typography & Iconography',
                          desc: "Using the right fonts and icons to communicate clearly and beautifully.",
                        },
                        {
                          title: 'Usability Testing',
                          desc: 'Ensuring your design works perfectly for real users before launch.',
                        },
                      ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                          <Box display="flex" gap={2} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box className='megamenu-box'>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* CTA Box */}
                  <Paper elevation={0} className='cta-box help-cta'>
                    <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
                      {/* Tech Logos Row */}
                      <Box display="flex" gap={2} flexWrap="wrap" alignItems="center">
                        <Image src={figmaIcon} alt="React Native" width={30} height={30} />
                        <Image src={adobeIllustratorIcon} alt="Android" width={30} height={30} />
                        <Image src={adobePhotoshopIcon} alt="iOS" width={30} height={30} />
                        <Image src={coreldrawIcon} alt="Flutter" width={30} height={30} />
                        <Image src={adobeXdIcon} alt="VS Code" width={30} height={30} />
                        <Image src={afterEffectsIcon} alt="PWA" width={30} height={30} />
                        <Image src={premiereProIcon} alt="Firebase" width={30} height={30} />
                      </Box>

                      <Link href="/how-we-help/graphics-and-ui-ux-design">
                        <Button
                          variant="contained"
                          className='main-btn megamenu-btn'
                          onClick={() => {
                            setOpenMenu(null);
                            setMobileDrawerOpen(false);
                          }}
                        >
                          Explore Now
                        </Button>
                      </Link>
                      {/* <Button variant="contained" className='main-btn megamenu-btn'>
                        Explore More
                      </Button> */}
                    </Box>
                  </Paper>
                </>
              )}

              {helpTabIndex === 4 && (
                <>
                  <Box className="heading-box-height">
                    <Grid container spacing={3}>
                      {[
                        {
                          title: 'Search Engine Optimization (SEO)',
                          desc: 'Helping your website rank higher so more people find you online naturally.',
                        },
                        {
                          title: 'Prospect Funnel Creation',
                          desc: 'Transform online clicks into meaningful conversations that drive business.',
                        },
                        {
                          title: 'Social Media Marketing',
                          desc: 'Building your brand and engaging your audience across all the major social platforms.',
                        },
                        {
                          title: 'Content Marketing',
                          desc: 'Creating valuable content that connects with your audience and drives results.',
                        },
                        {
                          title: 'Conversion Rate Optimization (CRO)',
                          desc: 'Tweaking your site to turn more visitors into happy customers.',
                        },
                        {
                          title: 'Video & YouTube Marketing',
                          desc: 'Engaging your audience with creative videos that tell your story and boost visibility.',
                        },
                        {
                          title: 'Influencer Marketing',
                          desc: "Partnering with trusted voices to expand your reach and credibility.",
                        },
                        {
                          title: 'Online Reputation Management',
                          desc: 'Protecting and improving how your brand is seen across the web.',
                        },
                      ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                          <Box display="flex" gap={2} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box className='megamenu-box'>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* CTA Box */}
                  <Paper elevation={0} className='cta-box help-cta'>
                    <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
                      {/* Tech Logos Row */}
                      <Box display="flex" gap={2} flexWrap="wrap" alignItems="center">
                        <Image src={SemrushIcon} alt="React Native" width={30} height={30} />
                        <Image src={googleAnalyticsIcon} alt="Android" width={30} height={30} />
                        <Image src={googleAdsIcon} alt="iOS" width={30} height={30} />
                        <Image src={HootsuiteIcon} alt="Flutter" width={30} height={30} />
                        <Image src={HubSpotIcon} alt="VS Code" width={30} height={30} />
                        <Image src={mailchimpIcon} alt="PWA" width={30} height={30} />
                        <Image src={FacebookMetaIcon} alt="Firebase" width={30} height={30} />
                      </Box>

                      <Link href="/how-we-help/digital-marketing">
                        <Button
                          variant="contained"
                          className='main-btn megamenu-btn'
                          onClick={() => {
                            setOpenMenu(null);
                            setMobileDrawerOpen(false);
                          }}
                        >
                          Explore Now
                        </Button>
                      </Link>
                      {/* <Button variant="contained" className='main-btn megamenu-btn'>
                        Explore More
                      </Button> */}
                    </Box>
                  </Paper>
                </>
              )}

              {helpTabIndex === 5 && (
                <>
                  <Box className="heading-box-height">
                    <Grid container spacing={3}>
                      {[
                        {
                          title: 'Artificial Intelligence (AI) & Machine Learning (ML)',
                          desc: 'Smart solutions that learn and adapt to help your business make better decisions.',
                        },
                        {
                          title: 'Blockchain & Web3',
                          desc: 'Secure, transparent technologies powering the future of digital trust and ownership.',
                        },
                        {
                          title: 'Internet of Things (IoT)',
                          desc: 'Connecting devices and systems to create smarter, more responsive environments.',
                        },
                        {
                          title: 'Augmented Reality (AR) & Virtual Reality (VR)',
                          desc: 'Immersive experiences that blend the digital and real worlds for new possibilities.',
                        },
                        {
                          title: 'Robotic Process Automation (RPA)',
                          desc: 'Automating repetitive tasks to save time and boost efficiency across your operations.',
                        },
                        {
                          title: 'Edge Computing & Cloud Technologies',
                          desc: "Fast, flexible computing solutions that bring power closer to where it's needed most.",
                        },
                      ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                          <Box display="flex" gap={2} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box className='megamenu-box'>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* CTA Box */}
                  <Paper elevation={0} className='cta-box help-cta'>
                    <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
                      {/* Tech Logos Row */}
                      <Box display="flex" gap={2} flexWrap="wrap" alignItems="center">
                        <Image src={arduinoIcon} alt="React Native" width={30} height={30} />
                        <Image src={pytorch2Icon} alt="Android" width={30} height={30} />
                        <Image src={raspberryPIIcon} alt="iOS" width={30} height={30} />
                        <Image src={unityIcon} alt="Flutter" width={30} height={30} />
                        <Image src={VectorIcon} alt="VS Code" width={30} height={30} />
                      </Box>

                      <Link href="/how-we-help/emerging-technology">
                        <Button
                          variant="contained"
                          className='main-btn megamenu-btn'
                          onClick={() => {
                            setOpenMenu(null);
                            setMobileDrawerOpen(false);
                          }}
                        >
                          Explore Now
                        </Button>
                      </Link>
                      {/* <Button variant="contained" className='main-btn megamenu-btn'>
                        Explore More
                      </Button> */}
                    </Box>
                  </Paper>
                </>
              )}

              {helpTabIndex === 6 && (
                <>
                  <Box className="heading-box-height">
                    <Grid container spacing={3}>
                      {[
                        {
                          title: 'Manual Testing',
                          desc: 'Carefully checking every feature by hand to catch issues before your users do.',
                        },
                        {
                          title: 'Automated Testing',
                          desc: 'Using smart tools to run tests quickly and consistently, saving you time and effort.',
                        },
                        {
                          title: 'Performance Testing',
                          desc: 'Making sure your software runs fast and smooth, even under heavy use.',
                        },
                        {
                          title: 'Security Testing',
                          desc: 'Identifying vulnerabilities to keep your data and users safe from threats.',
                        },
                        {
                          title: 'Compatibility Testing',
                          desc: 'Verifying your app works perfectly across all devices, browsers, and platforms.',
                        },
                        {
                          title: 'Usability Testing',
                          desc: "Observing real users to ensure your software is easy and enjoyable to use.",
                        },
                      ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                          <Box display="flex" gap={2} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box className='megamenu-box'>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* CTA Box */}
                  <Paper elevation={0} className='cta-box help-cta'>
                    <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
                      {/* Tech Logos Row */}
                      <Box display="flex" gap={2} flexWrap="wrap" alignItems="center">
                        <Image src={vsIcon} alt="React Native" width={30} height={30} />
                        <Image src={EclipseIDEIcon} alt="Android" width={30} height={30} />
                        <Image src={jiraIcon} alt="iOS" width={30} height={30} />
                        <Image src={postmanIcon} alt="Flutter" width={30} height={30} />
                        <Image src={GroupIcon} alt="VS Code" width={30} height={30} />
                      </Box>

                      <Link href="/how-we-help/testing-and-quality-control">
                        <Button
                          variant="contained"
                          className='main-btn megamenu-btn'
                          onClick={() => {
                            setOpenMenu(null);
                            setMobileDrawerOpen(false);
                          }}
                        >
                          Explore Now
                        </Button>
                      </Link>
                      {/* <Button variant="contained" className='main-btn megamenu-btn'>
                        Explore More
                      </Button> */}
                    </Box>
                  </Paper>
                </>
              )}

              {helpTabIndex === 7 && (
                <>
                  <Box className="heading-box-height">
                    <Grid container spacing={3}>
                      {[
                        {
                          title: 'Dedicated Team Model',
                          desc: 'Your own handpicked team, fully focused on bringing your vision to life.',
                        },
                        {
                          title: 'Expertise Across Technologies',
                          desc: 'Skilled developers across the latest tech stacks ready to tackle any challenge.',
                        },
                        {
                          title: 'Full Project Ownership',
                          desc: 'We take complete responsibility so you can relax and watch your project grow.',
                        },
                        {
                          title: 'Seamless Integration with Client Processes',
                          desc: "Quality experts who rigorously test your software to ensure it's flawless.",
                        },
                        {
                          title: 'Scalability & Flexibility',
                          desc: 'Specialists streamlining your development and deployment for smooth, fast releases.',
                        },
                        {
                          title: 'Cost-Effective & Predictable Pricing',
                          desc: 'Innovators exploring the latest tech to keep your projects ahead of the curve.',
                        },
                        {
                          title: 'Continuous Support & Maintenance',
                          desc: 'Take control of your website with easy-to-use, flexible CMS solutions.',
                        },
                        {
                          title: 'Full Transparency & Reporting',
                          desc: 'Boost speed, design, and performance to get more from your existing website.',
                        }
                      ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                          <Box display="flex" gap={2} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box className='megamenu-box'>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* CTA Box */}
                  <Paper elevation={0} className='cta-box help-cta'>
                    <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
                      {/* Tech Logos */}
                      <Box display="flex" gap={2} flexWrap="wrap" alignItems="center">
                        {/* Replace these with actual <Image> icons as needed */}
                        <Image src={phpIcon} alt="PHP" width={30} height={30} />
                        <Image src={dotNetIcon} alt=".NET" width={30} height={30} />
                        <Image src={ciIcon} alt="ci" width={30} height={30} />
                        <Image src={reactIcon} alt="React" width={30} height={30} />
                        <Image src={wordpressIcon} alt="WordPress" width={30} height={30} />
                        <Image src={laravelIcon} alt="laravel" width={30} height={30} />
                        <Image src={pythonIcon} alt="Python" width={30} height={30} />
                        <Image src={nodejsIcon} alt="Node.js" width={30} height={30} />
                        <Image src={angularIcon} alt="Angular" width={30} height={30} />
                        <Image src={bootstrapIcon} alt="Bootstrap" width={30} height={30} />
                        <Image src={cssIcon} alt="Tailwind" width={30} height={30} />
                      </Box>

                      <Link href="/how-we-help/dedicated-development-services">
                        <Button
                          variant="contained"
                          className='main-btn megamenu-btn'
                          onClick={() => {
                            setOpenMenu(null);
                            setMobileDrawerOpen(false);
                          }}
                        >
                          Explore Now
                        </Button>
                      </Link>
                      {/* <Button variant="contained" className='main-btn megamenu-btn'>
                        Explore More
                      </Button> */}
                    </Box>
                  </Paper>
                </>
              )}

            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );

  const renderMobileMenu = () => (
    <Box sx={{ p: 2 }}>
      <List className='mobile-main-menu'>
        <ListItem component="button"
          onClick={() => {
            if (openMenu === 'healthcare') {
              setOpenMenu(null);
            } else {
              handleMenuHover('healthcare');
            }
          }}
          className={`nav-links ${(openMenu === 'healthcare' || isHealthcareActive) ? 'active' : ''}`}
          sx={{
            bgcolor: openMenu === 'healthcare' ? '#eaf9ff' : 'transparent',
            color: openMenu === 'healthcare' ? '#03B0EF' : '#222',
            transition: 'all 0.3s ease'
          }}
        >
          Healthcare Tech
        </ListItem>
        <Collapse in={openMenu === 'healthcare'} timeout="auto" unmountOnExit>
          {renderHealthcareMenu()}
        </Collapse>
        <ListItem component="button"
          onClick={() => {
            if (openMenu === 'solutions') {
              setOpenMenu(null);
            } else {
              handleMenuHover('solutions');
            }
          }}
          className={`nav-links ${(openMenu === 'solutions' || isSolutionsActive) ? 'active' : ''}`}
          sx={{
            bgcolor: openMenu === 'solutions' ? '#eaf9ff' : 'transparent',
            color: openMenu === 'solutions' ? '#03B0EF' : '#222',
            transition: 'all 0.3s ease'
          }}
        >
          Solutions
        </ListItem>
        <Collapse in={openMenu === 'solutions'} timeout="auto" unmountOnExit>
          {renderSolutionsMenu()}
        </Collapse>
        <ListItem component="button"
          onClick={() => {
            if (openMenu === 'help') {
              setOpenMenu(null);
            } else {
              handleMenuHover('help');
            }
          }}
          className={`nav-links ${(openMenu === 'help' || isHelpActive) ? 'active' : ''}`}
          sx={{
            bgcolor: openMenu === 'help' ? '#eaf9ff' : 'transparent',
            color: openMenu === 'help' ? '#03B0EF' : '#222',
            transition: 'all 0.3s ease'
          }}
        >
          How We Help
        </ListItem>
        <Collapse in={openMenu === 'help'} timeout="auto" unmountOnExit>
          {renderHowWeHelpMenu()}
        </Collapse>
        <Box>
          <ListItem
            component="button"
            onClick={() => {
              if (openMenu === 'behindTheCode') {
                setOpenMenu(null);
              } else {
                handleMenuHover('behindTheCode');
              }
            }}
            className={`dropdowm-wrapper nav-links ${(openMenu === 'behindTheCode' || isBTCActive) ? 'active' : ''}`}
            sx={{
              bgcolor: openMenu === 'behindTheCode' ? '#eaf9ff' : 'transparent',
              color: openMenu === 'behindTheCode' ? '#03B0EF' : '#222',
              transition: 'all 0.3s ease'
            }}
          >
            Behind The Code
          </ListItem>
          <Collapse in={openMenu === 'behindTheCode'} timeout="auto" className='btc-dropdown-box mobile-dropdown-btc' unmountOnExit>
            <List className='btc-dropdown-menu-innerbox'>
              <Link href="/about-us">
                <ListItem component="button" className={`${pathname === '/about-us' ? 'active' : ''}`} onClick={() => { setOpenMenu(null); setMobileDrawerOpen(false); }}>About Us</ListItem>
              </Link>
              <Link href="/blog">
                <ListItem component="button" className={`${pathname === '/blog' ? 'active' : ''}`} onClick={() => { setOpenMenu(null); setMobileDrawerOpen(false); }}>Blog</ListItem>
              </Link>
              <Link href="/life">
                <ListItem component="button" className={`${pathname === '/life' ? 'active' : ''}`} onClick={() => { setOpenMenu(null); setMobileDrawerOpen(false); }}>Life @ USS</ListItem>
              </Link>
              <Link href="/career">
                <ListItem component="button" className={`${pathname === '/career' ? 'active' : ''}`} onClick={() => { setOpenMenu(null); setMobileDrawerOpen(false); }}>Career</ListItem>
              </Link>
              <Link href="/casestudies">
                <ListItem component="button" className={`${pathname === '/casestudies' ? 'active' : ''}`} onClick={() => { setOpenMenu(null); setMobileDrawerOpen(false); }}>Case Study</ListItem>
              </Link>
              <Link href="/contactus">
                <ListItem component="button" className={`${pathname === '/contactus' ? 'active' : ''}`} onClick={() => { setOpenMenu(null); setMobileDrawerOpen(false); }}>Contact Us</ListItem>
              </Link>
            </List>
          </Collapse>
        </Box>

      </List>
      <Button
        component={Link}
        href="https://calendly.com/jvaghasiya-universalstreamsolution/30min"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        className='main-btn'
        sx={{ mt: 2, width: '100%' }}
      >
        SCHEDULE 30-MIN CALL!
      </Button>
    </Box>
  );
  if (!mounted) return null;

  return (
    <Slide appear={false} direction="down" in={showHeader}>
      <AppBar
        sx={{
          color: '#222',
          backgroundColor: 'transparent !important',
          pt: { xs: 2, md: 3 },
          boxShadow: 'none',
        }}
      >
        <Container className="custom-container" maxWidth="lg">
          <Toolbar
            disableGutters
            className={`header-box ${openMenu ? 'menu-open' : ''}`}
            sx={
              openMenu === 'behindTheCode'
                ? { borderRadius: '10px !important' }
                : {}
            }
          >
            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <Image src={Logo}
                alt="USS Logo"
                width={180}
                height={35}
                priority={true}
                fetchPriority="high" />
            </Link>

            {isMobile ? (
              <>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton onClick={toggleDrawer(true)} sx={{ display: { xs: 'block', lg: 'none' } }}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={mobileDrawerOpen}
                  onClose={toggleDrawer(false)}
                  sx={{ '.MuiDrawer-paper': { width: { xs: '80%' } } }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                      <Image src={Logo}
                        alt="USS Logo"
                        width={180}
                        height={35}
                        priority={true}
                        fetchPriority="high" />
                    </Link>
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  {renderMobileMenu()}
                </Drawer>
              </>
            ) : (
              <ClickAwayListener onClickAway={handleClickAway}>
                <Box
                  sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
                  onMouseLeave={handleMenuLeave}
                >
                  <Stack direction="row" spacing={3} alignItems="center" className='gap-25'>
                    <Typography
                      onMouseEnter={() => handleMenuHover('healthcare')}
                      className={`nav-links ${(openMenu === 'healthcare' || isHealthcareActive) ? 'active' : ''}`}
                      sx={{ cursor: 'pointer', fontSize: '0.9rem' }}
                    >
                      <Link href="/healthcare" onClick={() => { setOpenMenu(null); setMobileDrawerOpen(false); }}>
                        Healthcare Tech
                      </Link>
                    </Typography>
                    <Typography
                      onMouseEnter={() => handleMenuHover('solutions')}
                      className={`nav-links ${(openMenu === 'solutions' || isSolutionsActive) ? 'active' : ''}`}
                      sx={{ cursor: 'pointer', fontSize: '0.9rem' }}
                    >
                      Solutions
                    </Typography>
                    <Typography
                      onMouseEnter={() => handleMenuHover('help')}
                      className={`nav-links ${(openMenu === 'help' || isHelpActive) ? 'active' : ''}`}
                      sx={{ cursor: 'pointer', fontSize: '0.9rem' }}
                    >
                      How We Help
                    </Typography>
                    <Box sx={{ position: 'relative' }}>
                      <Typography
                        onMouseEnter={() => handleMenuHover('behindTheCode')}
                        className={`nav-links ${(openMenu === 'behindTheCode' || isBTCActive) ? 'active' : ''}`}
                        sx={{ cursor: 'pointer', fontSize: '0.9rem' }}
                      >
                        Behind The Code
                      </Typography>
                      {openMenu === 'behindTheCode' && (
                        <Box className="btc-dropdown-menu">
                          <List className="btc-dropdown-menu-innerbox">
                            <Link href="/about-us">
                              <ListItem component="button" className={`${pathname === '/about-us' ? 'active' : ''}`} onClick={() => { setOpenMenu(null); }}>About Us</ListItem>
                            </Link>
                            <Link href="/blog">
                              <ListItem component="button" className={`${pathname === '/blog' ? 'active' : ''}`} onClick={() => { setOpenMenu(null); }}>Blog</ListItem>
                            </Link>
                            <Link href="/life">
                              <ListItem component="button" className={`${pathname === '/life' ? 'active' : ''}`} onClick={() => { setOpenMenu(null); }}>Life @ USS</ListItem>
                            </Link>
                            <Link href="/career">
                              <ListItem component="button" className={`${pathname === '/career' ? 'active' : ''}`} onClick={() => { setOpenMenu(null); }}>Career</ListItem>
                            </Link>
                            <Link href="/casestudies">
                              <ListItem component="button" className={`${pathname === '/casestudies' ? 'active' : ''}`} onClick={() => { setOpenMenu(null); }}>Case Study</ListItem>
                            </Link>
                            <Link href="/contactus">
                              <ListItem component="button" className={`${pathname === '/contactus' ? 'active' : ''}`} onClick={() => { setOpenMenu(null); }}>Contact Us</ListItem>
                            </Link>
                          </List>
                        </Box>
                      )}
                    </Box>
                  </Stack>
                  {openMenu === 'healthcare' && (
                    <Box position="absolute" top="100%" left={-1} right={-1} zIndex={10}>
                      {renderHealthcareMenu()}
                    </Box>
                  )}
                  {openMenu === 'solutions' && (
                    <Box position="absolute" top="100%" left={-1} right={-1} zIndex={10}>
                      {renderSolutionsMenu()}
                    </Box>
                  )}
                  {openMenu === 'help' && (
                    <Box position="absolute" top="100%" left={-1} right={-1} zIndex={10}>
                      {renderHowWeHelpMenu()}
                    </Box>
                  )}
                </Box>
              </ClickAwayListener>
            )}
            <Button
              component={Link}
              href="https://calendly.com/jvaghasiya-universalstreamsolution/30min"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              className='main-btn'
              sx={{ display: { xs: 'none', lg: 'block' }, fontSize: '0.8rem', px: 2 }}
            >
              SCHEDULE 30-MIN CALL!
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Header;