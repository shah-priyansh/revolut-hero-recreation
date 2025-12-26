import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './RevolutHero.css';

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2000";

const RevolutHero = () => {
    const container = useRef();
    const backgroundFade = useRef();
    const expandingBox = useRef();
    const innerImage = useRef();
    const heroHeadline = useRef();
    const featureHeadline = useRef();
    const leftCard = useRef();
    const rightCard = useRef();
    const uiTop = useRef();
    const uiBottom = useRef();
    const description = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        // 1. Initial headline and description fade out/up
        tl.to(heroHeadline.current, {
            y: -150,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
        }, 0);

        tl.to(description.current, {
            x: -100,
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
        // It starts at a higher scale when the box is large (simulating a zoom)
        // and scales down to 1.0 as the box shrinks.
        tl.fromTo(innerImage.current,
            { scale: 2.2 },
            { scale: 1.0, duration: 2, ease: "expo.inOut" },
            0);

        // 5. Side cards slide in as the box reaches its destination
        tl.to(leftCard.current, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.2)"
        }, 0.8);

        tl.to(rightCard.current, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.2)"
        }, 0.8);

        tl.to([uiTop.current, uiBottom.current], {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }, 0.8);

        // 6. Feature headline fades in (dark color now)
        tl.to(featureHeadline.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }, 1.2);


    }, { scope: container });

    return (
        <div className="hero-wrapper" ref={container}>
            <div className="sticky-container">
                {/* Layer 1: Base background (Solid White) */}
                <div className="background-base"></div>

                {/* Layer 2: Background Image Fade */}
                <div
                    className="background-image-fade"
                    ref={backgroundFade}
                    style={{ backgroundImage: `url(${HERO_IMAGE})` }}
                ></div>

                <div className="headline-container">
                    <h1 className="hero-headline" ref={heroHeadline}>
                        Change the way<br />you money
                    </h1>
                    <h2 className="feature-headline" ref={featureHeadline}>
                        Your salary,<br />reimagined
                    </h2>
                </div>

                <div className="description-text" ref={description}>
                    <p>Home or away, local or global — move freely between countries and currencies. Sign up for free, in a tap.</p>
                    <button className="cta-button">Download the app</button>
                </div>

                <div className="animation-viewport">
                    <div className="cards-grid">
                        {/* Left Card */}
                        <div className="side-card card-left" ref={leftCard}>
                            <div style={{ fontSize: '2rem', marginBottom: '20px' }}>☕️</div>
                            <div className="card-title">Coffee in Paris</div>
                            <div className="card-subtitle">Yesterday, 14:20</div>
                            <div className="card-content">
                                <p>Spend like a local with competitive exchange rates in 150+ countries.</p>
                            </div>
                        </div>

                        {/* Main Shrinking Box */}
                        <div className="expanding-box" ref={expandingBox}>
                            <img
                                className="box-inner-image"
                                src={HERO_IMAGE}
                                alt="Hero"
                                ref={innerImage}
                            />

                            <div className="ui-overlay ui-top" ref={uiTop} style={{ opacity: 0 }}>
                                <div style={{ fontSize: '0.9rem', opacity: 0.9, fontWeight: 600 }}>Personal</div>
                                <div className="balance">£6,012</div>
                                <div style={{ background: 'rgba(255,255,255,0.25)', padding: '6px 16px', borderRadius: '20px', display: 'inline-block', fontSize: '0.8rem', marginTop: '12px', backdropFilter: 'blur(10px)' }}>Accounts</div>
                            </div>

                            <div className="ui-overlay ui-bottom" ref={uiBottom} style={{ opacity: 0 }}>
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
            <div style={{ height: '100vh', background: '#f7f7f7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>Experience the future of finance.</h2>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ width: '200px', height: '100px', background: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>Invest</div>
                    <div style={{ width: '200px', height: '100px', background: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>Crypto</div>
                    <div style={{ width: '200px', height: '100px', background: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>Vaults</div>
                </div>
            </div>
        </div>
    );
};

export default RevolutHero;
