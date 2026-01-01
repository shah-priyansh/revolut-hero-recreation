import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import './RevolutHero.css';
import { LuxryFrame } from '../LuxryFrame/LuxryFrame';
import Header from '../Header/Header';

gsap.registerPlugin(ScrollTrigger);

const RevolutHero = () => {
    const container = useRef();
    const backgroundFade = useRef();
    const expandingBox = useRef();
    const innerImage = useRef();
    const leftCard = useRef();
    const rightCard = useRef();
    const card4 = useRef();
    const card5 = useRef();
    const description = useRef();
    const [scrollY, setScrollY] = useState(0);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Set initial zoomed-in state for desktop
    useEffect(() => {
        if (innerImage.current) {
            gsap.set(innerImage.current, { scale: 1.5 });
        }
    }, []);

    // Run animations on all devices
    useGSAP(() => {
        const isMobile = window.innerWidth <= 768;

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
            duration: 0.7, // Reduced from 1 to 0.7
            ease: "power2.inOut"
        }, 0);

        // 2. The background image layer fades to white
        tl.to(backgroundFade.current, {
            opacity: 0,
            duration: 1.0, // Reduced from 1.5 to 1.0
            ease: "power1.inOut"
        }, 0);

        // 3. The "Box" fades in and shrinks down from full-screen to card size
        tl.fromTo(expandingBox.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "power1.in" }, // Reduced from 0.5 to 0.3
            0
        );

        // Box shrinking animation - different sizes for mobile vs desktop
        if (isMobile) {
            // Set centering for expanding-box on mobile (same as side cards)
            gsap.set(expandingBox.current, { xPercent: -50, yPercent: -50 });

            tl.fromTo(expandingBox.current,
                {
                    width: 340,
                    height: 580,
                    borderRadius: 20,
                },
                {
                    width: 300,
                    height: 520,
                    borderRadius: 28,
                    boxShadow: "0 20px 80px rgba(0,0,0,0.12)",
                    duration: 1.4,
                    ease: "expo.inOut"
                }, 0);
        } else {
            tl.fromTo(expandingBox.current,
                {
                    width: 420,
                    height: 600,
                    borderRadius: 20,
                },
                {
                    width: 340,
                    height: 480,
                    borderRadius: 40,
                    boxShadow: "0 20px 80px rgba(0,0,0,0.12)",
                    duration: 1.4,
                    ease: "expo.inOut"
                }, 0);
        }

        // 4. The image inside the box ZOOMS OUT
        tl.fromTo(innerImage.current,
            { scale: 1.09 }, // Start 5% bigger
            { scale: 0.9, duration: 1.4, ease: "expo.inOut" }, // Scaled down by 10%
            0);

        // 5. Side cards slide in (desktop) or slide from right (mobile)
        if (isMobile) {
            // Mobile: Slide in from right like a carousel - wait for main animation
            // Set centering for positioning
            gsap.set(leftCard.current, { xPercent: -50, yPercent: -50 });
            gsap.set(rightCard.current, { xPercent: -50, yPercent: -50 });

            // Animate with explicit dimensions to match expanding-box
            tl.fromTo(leftCard.current,
                {
                    opacity: 0,
                    x: window.innerWidth,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28,
                    duration: 0.8,
                    ease: "power2.out"
                }, 1.5);

            tl.fromTo(rightCard.current,
                {
                    opacity: 0,
                    x: window.innerWidth,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28,
                    duration: 0.8,
                    ease: "power2.out"
                }, 2.0);

            // Mobile: Cards 4, 5 slide in from right
            gsap.set(card4.current, { xPercent: -50, yPercent: -50 });
            gsap.set(card5.current, { xPercent: -50, yPercent: -50 });

            tl.fromTo(card4.current,
                {
                    opacity: 0,
                    x: window.innerWidth,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28,
                    duration: 0.8,
                    ease: "power2.out"
                }, 2.5);

            tl.fromTo(card5.current,
                {
                    opacity: 0,
                    x: window.innerWidth,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28,
                    duration: 0.8,
                    ease: "power2.out"
                }, 3.0);

        } else {
            // Desktop: Slide in from sides
            tl.to(leftCard.current, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "back.out(1.4)"
            }, 0.6);

            tl.to(rightCard.current, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "back.out(1.4)"
            }, 0.6);

            // Cards 4, 5, 6 slide in from right after initial cards
            tl.to(card4.current, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "back.out(1.4)"
            }, 0.9);

            tl.to(card5.current, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "back.out(1.4)"
            }, 1.0);

        }


    }, { scope: container });

    return (
        <>
            {/* Floating Scroll Indicator */}
            <div style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '12px 20px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '14px',
                zIndex: 9999,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
                Scroll: {scrollY}px
            </div>

            <div className="hero-wrapper" ref={container}>
                <Header />
                <div className="sticky-container">
                    {/* Layer 1: Base background (Solid White) */}
                    <div className="background-base"></div>

                    {/* Layer 2: Background Image Fade */}
                    <div
                        className="background-image-fade"
                        ref={backgroundFade}
                        style={{ backgroundImage: `url('/images/hero-background.jpg')` }}
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
                                    src="/images/image-1.png"
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
                                    src="/images/hero-background.jpg"
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
                                    src="/images/image-3.png"
                                    alt="Image 1"
                                />
                                <div className="ui-overlay ui-bottom">
                                    <div className="card-notification">
                                        <div className="card-notification-title">Track value of your collection in real-time</div>
                                        <div className="card-notification-subtitle">With our free Watch Collector's App</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 - Authenticate */}
                            <div className="side-card card-4" ref={card4}>
                                <img
                                    className="box-inner-image"
                                    src="/images/authenticate.png"
                                    alt="Authenticate"
                                />
                                <div className="ui-overlay ui-bottom">
                                    <div className="card-notification">
                                        <div className="card-notification-title">Authenticate before you Buy</div>
                                        <div className="card-notification-subtitle">Through our network of certified Watch Makers</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 5 - Bank Vault */}
                            <div className="side-card card-5" ref={card5}>
                                <img
                                    className="box-inner-image"
                                    src="/images/bank-vault.png"
                                    alt="Bank Vault Storage"
                                />
                                <div className="ui-overlay ui-bottom">
                                    <div className="card-notification">
                                        <div className="card-notification-title">Bank-Vault Storage</div>
                                        <div className="card-notification-subtitle">Secure, Insured & tamper proof</div>
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
