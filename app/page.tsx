"use client";

import { ContactSection } from "@/components/landing/ContactSection";
import { CTASection } from "@/components/landing/CTASection";
import { FeaturesCarousel } from "@/components/landing/FeaturesCarousel";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserMenuWithSession } from "@/features/auth/components/user-menu";
import Image from "next/image";
import { Footer } from "react-day-picker";

export default function Home() {
    return (
        <div
            className="min-h-screen"
            style={{
                background: "#FAF8F4",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            {/* <UserMenuWithSession variant="compact" /> */}
            {/* MARKER-MAKE-KIT-INVOKED */}
            <Navbar />
            <Hero />
            <FeaturesCarousel />
            {/* <CTASection /> */}
            <ContactSection />
            <Footer />
        </div>
    );
}
