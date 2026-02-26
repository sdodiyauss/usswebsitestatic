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
import Metadata from "~/meta/Metadata";

const NotFound = () => {
    return (
        <>
            {/* <Metadata
                title="Page Not Found | 404 Error"
                description="The page you're looking for doesn't exist or may have been moved."
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
                        <Link href="/">
                            <Button
                                variant="contained"
                                className="main-primary-btn error-page-btn"
                            >
                                GO TO HOME PAGE
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </Box>

        </>
    );
};

export default NotFound;
