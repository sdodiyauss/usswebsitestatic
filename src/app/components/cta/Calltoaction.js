"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";
import callIcon from "@/call-icon.svg?url";
import Link from "next/link";
import CircleType from "circletype";
import minitsCircle from "~/minitsCircle.json";
import Lottie from "lottie-react";

const Calltoaction = () => {
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



  return (
    <Box sx={{ mt: 6 }} className="call-to-action-wrapper">
      <Container className="custom-container" maxWidth="lg">
        <Box
          sx={{ p: 4, backgroundColor: "#222222", borderRadius: 3 }}
          className="call-to-action-innerbox"
        >
          <Box className="heading-content">
            <Typography variant="h2" sx={{ my: 2, color: "white" }}>
              Want to Supercharge Your Business?
            </Typography>
            <Typography variant="h6" paragraph sx={{ color: "white" }}>
              Get it done from our premier artificial intelligence app
              development company in the USA, and extract.
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
  );
};

export default Calltoaction;
