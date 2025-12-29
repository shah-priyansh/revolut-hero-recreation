import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import './RevolutHero.css';
import heroImage from '../../assets/images/hero-background.jpg';
import logoImage from '../../assets/images/logo.svg';
import image1 from '../../assets/images/image-1.png';
import image2 from '../../assets/images/image-2.png';
import { LuxryFrame } from '../LuxryFrame/LuxryFrame';

gsap.registerPlugin(ScrollTrigger);

const RevolutHero = () => {
    const container = useRef();
    const backgroundFade = useRef();
    const expandingBox = useRef();
    const innerImage = useRef();
    const leftCard = useRef();
    const rightCard = useRef();
    const description = useRef();
    const headerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                setIsScrolled(true);
                headerRef.current?.classList.add('scrolled');
            } else {
                setIsScrolled(false);
                headerRef.current?.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on window resize (if it becomes desktop)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen &&
                headerRef.current &&
                !headerRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isMobileMenuOpen]);

    // Set initial states for mobile (no animations)
    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // Set all elements to their final state immediately on mobile
            if (expandingBox.current) {
                gsap.set(expandingBox.current, {
                    width: 260,
                    height: 340,
                    borderRadius: 28,
                    opacity: 1,
                    boxShadow: "0 20px 80px rgba(0,0,0,0.12)"
                });
            }

            if (innerImage.current) {
                gsap.set(innerImage.current, { scale: 1.0 });
            }

            if (leftCard.current) {
                gsap.set(leftCard.current, {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1
                });
            }

            if (rightCard.current) {
                gsap.set(rightCard.current, {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1
                });
            }


            if (description.current) {
                gsap.set(description.current, { opacity: 1 });
            }

            if (backgroundFade.current) {
                gsap.set(backgroundFade.current, { opacity: 1 });
            }
        }
    }, []);

    // Only run animations on desktop
    useGSAP(() => {
        const isMobile = window.innerWidth <= 768;

        // Skip animations on mobile
        if (isMobile) {
            return;
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        // 1. Description fade out/up
        tl.to(description.current, {
            x: -100,
            y: 0,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
        }, 0);

        // 2. The background image layer fades to white
        tl.to(backgroundFade.current, {
            opacity: 0,
            duration: 1.5,
            ease: "power1.inOut"
        }, 0);

        // 3. The "Box" fades in and shrinks down from full-screen to card size
        tl.fromTo(expandingBox.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "power1.in" },
            0
        );

        tl.to(expandingBox.current, {
            width: 380,
            height: 560,
            borderRadius: 40,
            boxShadow: "0 20px 80px rgba(0,0,0,0.12)",
            duration: 2,
            ease: "expo.inOut"
        }, 0);

        // 4. The image inside the box ZOOMS OUT
        tl.fromTo(innerImage.current,
            { scale: 2.2 },
            { scale: 1.0, duration: 2, ease: "expo.inOut" },
            0);

        // 5. Side cards slide in
        tl.to(leftCard.current, {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.4)"
        }, 0.8);

        tl.to(rightCard.current, {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.4)"
        }, 0.8);


    }, { scope: container });

    return (
        <>
            <div className="hero-wrapper" ref={container}>
                <header className="header" ref={headerRef}>
                    <div className="header-content">
                        {/* Logo and Brand */}
                        <div className="logo-section">
                            <img
                                src={logoImage}
                                alt="iLock Logo"
                                className="logo-image"
                            />
                        </div>

                        {/* Desktop Navigation Menu */}
                        <nav className="nav-menu">
                            <a href="#" className="nav-link">Home</a>
                            <a href="#" className="nav-link">Services</a>
                            <a href="#" className="nav-link">About Us</a>
                            <a href="#" className="nav-link">Contact & Support</a>
                            <a href="#" className="nav-link">Download App</a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="mobile-menu-button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </div>

                    {/* Mobile Navigation Menu */}
                    <nav 
                        className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}
                        onClick={(e) => {
                            // Close menu when clicking on backdrop
                            if (e.target === e.currentTarget) {
                                setIsMobileMenuOpen(false);
                            }
                        }}
                    >
                        <div className="mobile-menu-content">
                            <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                            <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                            <div className="mobile-menu-logo">
                                <img
                                    src={logoImage}
                                    alt="iLock Logo"
                                    className="mobile-logo-image"
                                />
                            </div>
                            <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                            <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact & Support</a>
                            <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Download App</a>
                        </div>
                    </nav>
                </header>
                <div className="sticky-container">
                    {/* Layer 1: Base background (Solid White) */}
                    <div className="background-base"></div>

                    {/* Layer 2: Background Image Fade */}
                    <div
                        className="background-image-fade"
                        ref={backgroundFade}
                        style={{ backgroundImage: `url(${heroImage})` }}
                    ></div>

                    <div className="description-text" ref={description}>
                        <motion.h1 
                            className="hero-main-text"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            A safer, smarter way to{' '}
                            <span className="highlight-text">sell your watch for immediate cash</span>
                            {' '}at the highest prices… with options to buy back
                        </motion.h1>
                        <motion.p 
                            className="hero-sub-text"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            End-to-end Global Trading of Luxury Watches with guaranteed protection
                        </motion.p>
                        <motion.button 
                            className="cta-button"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            Learn More
                        </motion.button>
                    </div>

                    <div className="animation-viewport">
                        <div className="cards-grid">
                            {/* Main Shrinking Box */}


                            {/* Left Card */}
                            <div className="side-card card-left" ref={leftCard}>
                                <img
                                    className="box-inner-image"
                                    src={image1}
                                    alt="Image 1"
                                />
                                <div className="ui-overlay ui-bottom">
                                    <div className="card-notification">
                                        <div className="card-notification-title">Get Immediate Cash</div>
                                        <div className="card-notification-subtitle">With option to buyback</div>
                                    </div>
                                </div>
                            </div>

                            <div className="expanding-box" ref={expandingBox}>
                                <img
                                    className="box-inner-image"
                                    src={heroImage}
                                    alt="Hero"
                                    ref={innerImage}
                                />



                                <div className="ui-overlay ui-bottom">
                                    <div className="card-notification">
                                        <div className="card-notification-title">Get The Highest Prices</div>
                                        <div className="card-notification-subtitle">Through our global dealer auction platform</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Card */}
                            <div className="side-card card-right" ref={rightCard}>
                                <img
                                    className="box-inner-image"
                                    src={image2}
                                    alt="Image 1"
                                />
                                <div className="ui-overlay ui-bottom">
                                    <div className="card-notification">
                                        <div className="card-notification-title">Authenticate before you Buy</div>
                                        <div className="card-notification-subtitle">Through our network of certified Watch Makers</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <LuxryFrame />
        </>
    );
};

export default RevolutHero;
