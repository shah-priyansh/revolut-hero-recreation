import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './RevolutHero.css';
import heroImage from './assets/images/hero-background.jpg';
import logoImage from './assets/images/logo.svg';
import image1 from './assets/images/image-1.png';

gsap.registerPlugin(ScrollTrigger);

const RevolutHero = () => {
    const container = useRef();
    const backgroundFade = useRef();
    const expandingBox = useRef();
    const innerImage = useRef();
    const leftCard = useRef();
    const rightCard = useRef();
    const uiTop = useRef();
    const uiBottom = useRef();
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

            if (uiTop.current && uiBottom.current) {
                gsap.set([uiTop.current, uiBottom.current], { opacity: 1 });
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

        tl.to([uiTop.current, uiBottom.current], {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }, 0.8);

    }, { scope: container });

    return (
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
                <nav className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                    <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                    <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact & Support</a>
                    <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Download App</a>
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
                    <p>Home or away, local or global — move freely between countries and currencies. Sign up for free, in a tap.</p>
                    <button className="cta-button">Download the app</button>
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
                            <div className="ui-overlay ui-bottom" ref={uiBottom}>
                                <div className="notification  flex flex-column">
                                    <div className="flex flex-row">
                                        <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>Get The Highest
                                            Prices</div>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Through our global </div>
                                    </div>
                                    <div style={{ marginLeft: 'auto', fontWeight: 700, color: '#00a83e' }}>dealer auction platform</div>
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

                            <div className="ui-overlay ui-top" ref={uiTop}>
                                <div style={{ fontSize: '0.9rem', opacity: 0.9, fontWeight: 600 }}>Personal</div>
                                <div className="balance">£6,012</div>
                                <div style={{ background: 'rgba(255,255,255,0.25)', padding: '6px 16px', borderRadius: '20px', display: 'inline-block', fontSize: '0.8rem', marginTop: '12px', backdropFilter: 'blur(10px)' }}>Accounts</div>
                            </div>

                            <div className="ui-overlay ui-bottom" ref={uiBottom}>
                                <div className="notification">
                                    <div style={{ width: 40, height: 40, background: '#e0e0e0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🏢</div>
                                    <div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>Salary</div>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Today, 11:28</div>
                                    </div>
                                    <div style={{ marginLeft: 'auto', fontWeight: 700, color: '#00a83e' }}>+£2,550</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Card */}
                        <div className="side-card card-right" ref={rightCard}>
                            <div style={{ fontSize: '2rem', marginBottom: '20px' }}>🏠</div>
                            <div className="card-title">House bills</div>
                            <div className="card-subtitle">Today, 09:15</div>
                            <div className="card-content">
                                <p>Manage all your subscriptions and bills in one place. Never miss a payment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra space for scrolling */}
            <div className="finance-section">
                <h2 className="finance-headline">Experience<br />the future of<br />finance.</h2>
                <div className="finance-cards">
                    <div className="finance-card">Invest</div>
                    <div className="finance-card">Crypto</div>
                    <div className="finance-card">Vaults</div>
                </div>
            </div>
        </div>
    );
};

export default RevolutHero;
