"use client";

import React from "react";
import Image from "next/image";
import { Box, Container } from "@mui/material";


import RxvaletLogo from "@/companylogo/rxvalet.svg?url";
import SsrxLogo from "@/companylogo/ssrx.svg?url";
import ShieldLogo from "@/companylogo/shield.svg?url";
import PBLogo from "@/companylogo/pb.svg?url";
import RxFree4MeLogo from "@/companylogo/rxfree4me.webp";
import CLSLogo from "@/companylogo/cls.svg?url";
import LGFMLogo from "@/companylogo/lgfm.webp";
import PTHLogo from "@/companylogo/pth.svg?url";
import MissMatchLogo from "@/companylogo/missmatch.svg?url";
import PrayatnaLogo from "@/companylogo/prayatna.svg?url";
import BrLogo from "@/companylogo/brlogo.webp";
import SteptivateLogo from "@/companylogo/steptivate-final.svg?url";
import NaturePowerLogo from "@/companylogo/nature-power.svg?url";


const logoList = [
    RxvaletLogo,
    SsrxLogo,
    ShieldLogo,
    PBLogo,
    RxFree4MeLogo,
    CLSLogo,
    LGFMLogo,
    PTHLogo,
    MissMatchLogo,
    PrayatnaLogo,
    BrLogo,
    SteptivateLogo,
    NaturePowerLogo,
];


export default function Companylogos() {

    return (
        <>
            <section className="company-logo-section">
                <Container className="custom-container" maxWidth="lg">
                    <div className="container">
                        <div className="company-logo-grid">
                            {logoList.map((logo, index) => (
                                <Box key={index} className="company-logo-item">
                                    <Image
                                        src={logo}
                                        alt={`Logo ${index + 1}`}
                                        width={180}
                                        height={64}
                                        className="company-logo-image"
                                        priority={true}
                                    />
                                </Box>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
