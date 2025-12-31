import React, { useRef, useEffect } from 'react';
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
    const description = useRef();

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
                gsap.set(backgroundFade.current, { 
                    opacity: 1,
                    scale: 1.0 
                });
            }
        } else {
            // Set initial zoomed-in state for desktop
            if (innerImage.current) {
                gsap.set(innerImage.current, { scale: 1.5 }); // Reduced from 2.2 to 1.5
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

        tl.to(expandingBox.current, {
            width: 380,
            height: 560,
            borderRadius: 40,
            boxShadow: "0 20px 80px rgba(0,0,0,0.12)",
            duration: 1.4, // Reduced from 2 to 1.4
            ease: "expo.inOut"
        }, 0);

        // 4. The image inside the box ZOOMS OUT
        tl.fromTo(innerImage.current,
            { scale: 1.0 }, // Reduced from 2.2 to 1.5 for less zoom
            { scale: 1.0, duration: 1.4, ease: "expo.inOut" }, // Reduced from 2 to 1.4
            0);

        // 5. Side cards slide in
        tl.to(leftCard.current, {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7, // Reduced from 1 to 0.7
            ease: "back.out(1.4)"
        }, 0.6); // Reduced delay from 0.8 to 0.6

        tl.to(rightCard.current, {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7, // Reduced from 1 to 0.7
            ease: "back.out(1.4)"
        }, 0.6); // Reduced delay from 0.8 to 0.6


    }, { scope: container });

    return (
        <>
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
                                        <div className="card-notification-subtitle">With our free Watch Collector’s App</div>
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
