"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";

import "swiper/css";


import phpIcon from "@/php.svg?url";
import ciIcon from "@/ci.svg?url";
import reactIcon from "@/react-js.svg?url";
import wordpressIcon from "@/wp.svg?url";
import laravelIcon from "@/laravel.svg?url";
import pythonIcon from "@/python.svg?url";
import nodejsIcon from "@/nodejs.svg?url";
import angularIcon from "@/angular.svg?url";
import vueIcon from "@/vuejs.svg?url";
import bootstrapIcon from "@/bootstrap5.svg?url";
import tailwindIcon from "@/tailwind-css.svg?url";
import androidIcon from "@/android.svg?url";
import appleIcon from "@/ios.svg?url";
import pwaIcon from "@/pwa.svg?url";
import flutterIcon from "@/flutter.svg?url";
import swiftIcon from "@/swift.svg?url";
import firefoxIcon from "@/firebase.svg?url";
import AWSIcon from "@/aws.svg?url";
import CPlusIcon from "@/cplus.svg?url";
import cssIcon from "@/css3.svg?url";
import DotnetMVCIcon from "@/dotnet-mvc.svg?url";
import ExpressIcon from "@/express.svg?url";
import HtmlIcon from "@/html5.svg?url";
import JavascriptIcon from "@/javascript.svg?url";
import JqueryIcon from "@/jquery.svg?url";
import MicrosoftDOTNETIcon from "@/microsoftdotnet.svg?url";
import MicrosoftAzureIcon from "@/microsoft-azure.svg?url";
import MongoDBIcon from "@/mongodb.svg?url";
import MSSQLIcon from "@/ms-sql.svg?url";
import MySql2Icon from "@/my-sql2.svg?url";
import NETCoreIcon from "@/net-core.svg?url";
import NextjsIcon from "@/nextjs.svg?url";

import TensorFlow from "@/tensorflow.svg?url";
import OpenAI from "@/openai.svg?url";
import Python from "@/python.svg?url";
import OpenCV from "@/opencv.svg?url";
import CloudVision from "@/cloudvision.svg?url";
import MetaLlama from "@/metallama.svg?url";


import { motion, AnimatePresence } from "framer-motion";



const fadeInUp = {
  initial: { opacity: 0, y: 45 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
};


const shuffleVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -150, scale: 0.95, transition: { duration: 0.3 } },
};

const TechnologyStacks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [TechnologyIndex, setTechnologyIndex] = useState(0);



  return (
    <>
      {/* technology tab Section */}
      <motion.section {...fadeInUp}>
        <Box sx={{ py: { xs: 3, md: 4, lg: 5 }, mt: 3 }}>
          <Container className="custom-container" maxWidth="lg">
            <Box className="heading-content">
              <Typography variant="h2" sx={{ my: 2, fontWeight: 700 }}>
                Technology{" "}
                <span className="primary-color">
                  S
                  <span className="span-text">
                    tacks
                    <div className="line-container">
                      <div className="line-wrapper"></div>
                      <div className="line"></div>
                      <div className="moving-box"></div>
                    </div>
                  </span>
                </span>
              </Typography>
              <Typography variant="h6" paragraph sx={{ mb: 5 }}>
                Our tech expertise fuels innovation with scalable, efficient
                solutions tailored to your unique business needs.
              </Typography>
            </Box>

            <Box>
              <Grid container spacing={2}>
                <Grid
                  size={{ xs: 12, sm: 4, md: 3 }}
                  className="technology-tab-wrapper"
                >
                  <Tabs
                    orientation={isMobile ? "horizontal" : "vertical"}
                    variant="scrollable"
                    value={TechnologyIndex}
                    onChange={(e, newValue) => setTechnologyIndex(newValue)}
                    className="technology-tab-box"
                  >
                    <Tab label="FrontEnd" className="technology-verticle-tab" />
                    <Tab label="BackEnd" className="technology-verticle-tab" />
                    <Tab label="Mobile" className="technology-verticle-tab" />
                    <Tab label="Framework" className="technology-verticle-tab" />
                    <Tab label="Database" className="technology-verticle-tab" />
                    {/* <Tab label="CMS" className="technology-verticle-tab" />
                    <Tab label="Cloud" className="technology-verticle-tab" />
                    <Tab label="AI Technologies" className="technology-verticle-tab" /> */}
                    <Tab label="Cloud & AI" className="technology-verticle-tab" />
                  </Tabs>
                </Grid>

                {/* Right Side Content */}
                <Grid
                  size={{ xs: 12, sm: 8, md: 9 }}
                  className="technology-tab-content-wrapper"
                >
                  <Box sx={{ flex: 1 }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={TechnologyIndex} // <-- important for re-render animation
                        variants={shuffleVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        {TechnologyIndex === 0 && (
                          <Grid container spacing={4} justifyContent="start">
                            {[
                              { src: angularIcon, label: "Angular" },
                              { src: bootstrapIcon, label: "Bootstrap 5" },
                              { src: cssIcon, label: "CSS 3" },
                              { src: HtmlIcon, label: "HTML 5" },
                              { src: JavascriptIcon, label: "Javascript" },
                              { src: tailwindIcon, label: "Tailwind CSS" },
                              { src: vueIcon, label: "Vue Js" },
                              { src: JqueryIcon, label: "Jquery" },
                              { src: NextjsIcon, label: "Next Js" },
                              { src: reactIcon, label: "React Js" },
                              { src: wordpressIcon, label: "WordPress" },
                            ].map((item, index) => (
                              <Grid
                                key={index}
                                size={{ xs: 4, sm: 3, md: 2.4 }}
                              >
                                <Box
                                  width="120px"
                                  display="flex"
                                  flexDirection="column"
                                  alignItems="center"
                                  className="tech-hover-box"
                                  textAlign="center"
                                  p={1}
                                  borderRadius="8px"
                                >
                                  <Image
                                    src={item.src}
                                    alt={item.label}
                                    width={60}
                                    height={60}
                                  />
                                  <Typography variant="body2" mt={1}>
                                    {item.label}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        )}

                        {TechnologyIndex === 1 && (
                          <Grid container spacing={4} justifyContent="start">
                            {[
                              { src: CPlusIcon, label: "C++" },
                              { src: ExpressIcon, label: "Express Js" },
                              {
                                src: MicrosoftDOTNETIcon,
                                label: "Microsoft .Net",
                              },
                              { src: NETCoreIcon, label: ".Net Core" },
                              { src: nodejsIcon, label: "Node Js" },
                              { src: phpIcon, label: "PHP" },
                              { src: pythonIcon, label: "Python" },
                              { src: laravelIcon, label: "Laravel" },
                            ].map((item, index) => (
                              <Grid
                                key={index}
                                size={{ xs: 4, sm: 3, md: 2.4 }}
                              >
                                <Box
                                  width="120px"
                                  display="flex"
                                  flexDirection="column"
                                  alignItems="center"
                                  className="tech-hover-box"
                                  textAlign="center"
                                  p={1}
                                  borderRadius="8px"
                                >
                                  <Image
                                    src={item.src}
                                    alt={item.label}
                                    width={60}
                                    height={60}
                                  />
                                  <Typography variant="body2" mt={1}>
                                    {item.label}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        )}

                        {TechnologyIndex === 2 && (
                          <Grid container spacing={4} justifyContent="start">
                            {[
                              { src: reactIcon, label: "React Native" },
                              { src: appleIcon, label: "IOS" },
                              { src: androidIcon, label: "Android" },
                              { src: pwaIcon, label: "PWA" },
                              { src: flutterIcon, label: "Flutter" },
                              { src: swiftIcon, label: "Swift" },
                            ].map((item, index) => (
                              <Grid
                                key={index}
                                size={{ xs: 4, sm: 3, md: 2.4 }}
                              >
                                <Box
                                  width="120px"
                                  display="flex"
                                  flexDirection="column"
                                  alignItems="center"
                                  className="tech-hover-box"
                                  textAlign="center"
                                  p={1}
                                  borderRadius="8px"
                                >
                                  <Image
                                    src={item.src}
                                    alt={item.label}
                                    width={60}
                                    height={60}
                                  />
                                  <Typography variant="body2" mt={1}>
                                    {item.label}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        )}

                        {TechnologyIndex === 3 && (
                          <Grid container spacing={4} justifyContent="start">
                            {[
                              { src: ciIcon, label: "CodeIgniter" },
                              { src: laravelIcon, label: "Laravel" },
                              { src: DotnetMVCIcon, label: ".Net MVC" },
                            ].map((item, index) => (
                              <Grid
                                key={index}
                                size={{ xs: 4, sm: 3, md: 2.4 }}
                              >
                                <Box
                                  width="120px"
                                  display="flex"
                                  flexDirection="column"
                                  alignItems="center"
                                  className="tech-hover-box"
                                  textAlign="center"
                                  p={1}
                                  borderRadius="8px"
                                >
                                  <Image
                                    src={item.src}
                                    alt={item.label}
                                    width={60}
                                    height={60}
                                  />
                                  <Typography variant="body2" mt={1}>
                                    {item.label}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        )}

                        {TechnologyIndex === 4 && (
                          <Grid container spacing={4} justifyContent="start">
                            {[
                              { src: firefoxIcon, label: "Firebase" },
                              { src: MongoDBIcon, label: "MongoDB" },
                              { src: MSSQLIcon, label: "MSSQL" },
                              { src: MySql2Icon, label: "My SQL" },
                            ].map((item, index) => (
                              <Grid
                                key={index}
                                size={{ xs: 4, sm: 3, md: 2.4 }}
                              >
                                <Box
                                  width="120px"
                                  display="flex"
                                  flexDirection="column"
                                  alignItems="center"
                                  className="tech-hover-box"
                                  textAlign="center"
                                  p={1}
                                  borderRadius="8px"
                                >
                                  <Image
                                    src={item.src}
                                    alt={item.label}
                                    width={60}
                                    height={60}
                                  />
                                  <Typography variant="body2" mt={1}>
                                    {item.label}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        )}

                        {/* {TechnologyIndex === 5 && (
                          <Grid container spacing={4} justifyContent="start">
                            {[{ src: wordpressIcon, label: "WordPress" }].map(
                              (item, index) => (
                                <Grid
                                  key={index}
                                  size={{ xs: 4, sm: 3, md: 2.4 }}
                                >
                                  <Box
                                    width="120px"
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    className="tech-hover-box"
                                    textAlign="center"
                                    p={1}
                                    borderRadius="8px"
                                  >
                                    <Image
                                      src={item.src}
                                      alt={item.label}
                                      width={60}
                                      height={60}
                                    />
                                    <Typography variant="body2" mt={1}>
                                      {item.label}
                                    </Typography>
                                  </Box>
                                </Grid>
                              )
                            )}
                          </Grid>
                        )}

                        {TechnologyIndex === 6 && (
                          <Grid container spacing={4} justifyContent="start">
                            {[
                              { src: AWSIcon, label: "AWS" },
                              { src: MicrosoftAzureIcon, label: "Azure" },
                            ].map((item, index) => (
                              <Grid
                                key={index}
                                size={{ xs: 4, sm: 3, md: 2.4 }}
                              >
                                <Box
                                  width="120px"
                                  display="flex"
                                  flexDirection="column"
                                  alignItems="center"
                                  className="tech-hover-box"
                                  textAlign="center"
                                  p={1}
                                  borderRadius="8px"
                                >
                                  <Image
                                    src={item.src}
                                    alt={item.label}
                                    width={60}
                                    height={60}
                                  />
                                  <Typography variant="body2" mt={1}>
                                    {item.label}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        )}

                        {TechnologyIndex === 7 && (
                          <Grid container spacing={4} justifyContent="start">
                            {[
                              { src: TensorFlow, label: "TensorFlow" },
                              { src: OpenAI, label: "OpenAI" },
                              { src: Python, label: "Python" },
                              { src: OpenCV, label: "OpenCV" },
                              { src: CloudVision, label: "CloudVision" },
                              { src: MetaLlama, label: "Meta Llama" },
                            ].map((item, index) => (
                              <Grid
                                key={index}
                                size={{ xs: 4, sm: 3, md: 2.4 }}
                              >
                                <Box
                                  width="120px"
                                  display="flex"
                                  flexDirection="column"
                                  alignItems="center"
                                  className="tech-hover-box"
                                  textAlign="center"
                                  p={1}
                                  borderRadius="8px"
                                >
                                  <Image
                                    src={item.src}
                                    alt={item.label}
                                    width={60}
                                    height={60}
                                  />
                                  <Typography variant="body2" mt={1}>
                                    {item.label}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        )} */}

                        {TechnologyIndex === 5 && (
                          <Grid container spacing={4} justifyContent="start">
                            {[
                              { src: AWSIcon, label: "AWS" },
                              { src: MicrosoftAzureIcon, label: "Azure" },
                              { src: Python, label: "Python" },
                              { src: OpenAI, label: "OpenAI" },
                              { src: TensorFlow, label: "TensorFlow" },
                              { src: CloudVision, label: "CloudVision" },
                              { src: OpenCV, label: "OpenCV" },
                              { src: MetaLlama, label: "Meta Llama" },
                            ].map((item, index) => (
                              <Grid
                                key={index}
                                size={{ xs: 4, sm: 3, md: 2.4 }}
                              >
                                <Box
                                  width="120px"
                                  display="flex"
                                  flexDirection="column"
                                  alignItems="center"
                                  className="tech-hover-box"
                                  textAlign="center"
                                  p={1}
                                  borderRadius="8px"
                                >
                                  <Image
                                    src={item.src}
                                    alt={item.label}
                                    width={60}
                                    height={60}
                                  />
                                  <Typography variant="body2" mt={1}>
                                    {item.label}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </motion.section>

    </>
  );
};

export default TechnologyStacks;
