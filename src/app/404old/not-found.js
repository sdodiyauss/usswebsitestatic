"use client";
import React from "react";
import Link from "next/link";
import {
    Box,
    Typography,
    Container,
    Button,
} from "@mui/material";

import Lottie from "lottie-react";
import erreDate from "~/error.json";

const page = () => {

    return (
        <>
            {/* <Metadata
        title="About Us | USS - Software Development Company"
        description="Learn about USS, a software development company offering IT services and digital solutions to startups and enterprises worldwide."
      /> */}

            {/* Banner Section */}
            <Box className="error-page-section position-relative">
                <Box className="error-animation-box">
                    <Lottie
                        animationData={erreDate}
                        loop={true}
                    />
                </Box>
                <Container className="custom-container" maxWidth="lg">
                    <Box className="error-content text-center text-white">
                        <Typography variant="h1" sx={{ fontWeight: 800 }}>
                            404
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                            You’ve discovered a cosmic glitch.<br />
                            The page you want isn’t in this universe.
                        </Typography>
                        <Link href="/" variant="contained" className="main-primary-btn error-page-btn">
                            GO TO HOME PAGE
                        </Link>
                    </Box>
                </Container>
            </Box>

        </>
    );
};

export default page;
