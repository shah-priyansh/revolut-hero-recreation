import { motion } from 'framer-motion';
import img3 from "../../assets/images/img3.png";
import Header from '../Header/Header';

export default function AboutUs() {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div style={{minHeight: '100vh'}}>
            {/* Header */}
            <div className={'custom-header'}>
                <Header/>
            </div>

            <div className={'page-banner position-relative'}>
                <img src={'src/assets/images/about-banner.png'} className={'img-fluid'}/>
                <div className={'page-content text-center text-white'}>
                    <h1>
                        Redefining how the world<br/>
                        trades luxury timepieces
                    </h1>
                    <p>
                        Combining advanced re-commerce technology with legacy wealth expertise
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="bg-white py-5">
                <div className="container">
                    <div className="row align-items-center py-5 py-xl-5">
                        <div
                            className="col-12 col-md-6 mb-4 mb-md-0"
                        >
                            <img src={'src/assets/images/our-mission.png'} className={'img-fluid'}/>
                        </div>
                        <motion.div
                            className="col-12 col-md-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, margin: "-100px"}}
                            variants={fadeInRight}
                        >
                            <div className="d-flex flex-column" style={{gap: '1rem'}}>
                                <motion.h1
                                    className="display-1 fw-light text-black mb-3"
                                    style={{
                                        fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                                        color: '#000000'
                                    }}
                                    variants={fadeInUp}
                                >
                                    Our Mission
                                </motion.h1>
                                <motion.div
                                    className="d-flex flex-column"
                                    style={{
                                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                        gap: '1.5rem'
                                    }}
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true}}
                                >
                                    <motion.p variants={fadeInUp}>
                                        The luxury watch market has long been plagued by slow transactions, opaque
                                        pricing, and unnecessary risk. Traditional dealers take weeks to process sales,
                                        leaving
                                        sellers vulnerable and uncertain.
                                    </motion.p>
                                    <motion.p variants={fadeInUp}>
                                        iLock was founded to solve these problems through technology and trust.
                                        We've built a platform that combines instant liquidity with bank-grade security,
                                        giving
                                        collectors the confidence to trade their most valuable assets.
                                    </motion.p>
                                    <motion.p
                                        style={{color: '#9CC2B8', fontSize: 'clamp(1.25rem, 2vw, 1.5rem)'}}
                                        variants={fadeInUp}
                                    >
                                        Fast. Fair. Secure. That's the iLock promise.
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Core Pillars Section */}
            <div style={{backgroundColor: '#83D7F5'}}>
                <div className="container-fluid px-3">
                    <div className="container" style={{maxWidth: '85%'}}>
                        <div className="py-5 py-xl-5">
                            <motion.h2
                                className="display-1 fw-light text-center mb-5"
                                style={{
                                    fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                                    color: '#000000'
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, margin: "-100px"}}
                                variants={fadeInUp}
                            >
                                Our Core Pillars
                            </motion.h2>
                            <motion.div
                                className="row g-3 g-lg-4"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, margin: "-50px"}}
                            >
                                <motion.div
                                    className="col-12 col-sm-6 col-lg-4 h-100"
                                    variants={cardAnimation}
                                >
                                    <motion.div
                                        className="bg-white rounded shadow h-100 p-4 p-xl-5"
                                        style={{borderRadius: '1.5rem'}}
                                        whileHover={{y: -10, transition: {duration: 0.3}}}
                                    >
                                        <motion.div
                                            className="d-flex justify-content-center align-items-center mb-3 mb-md-4"
                                            style={{
                                                width: '105px',
                                                height: '105px',
                                                borderRadius: '50%',
                                                backgroundColor: '#83D7F5'
                                            }}
                                            variants={scaleIn}
                                            whileHover={{rotate: 360, transition: {duration: 0.6}}}
                                        >
                                            <span className="fs-1 fw-bold">1</span>
                                        </motion.div>
                                        <div>
                                            <h3 className="fw-semibold mb-3 mb-md-4" style={{
                                                fontSize: 'clamp(1.25rem, 2vw, 2.25rem)'
                                            }}>
                                                Microscopic<br/>
                                                Inspection
                                            </h3>
                                            <p style={{fontSize: 'clamp(1rem, 1.5vw, 1.5rem)'}}>
                                                Unrivaled market access to vetted dealers across continents. Our network
                                                ensures
                                                you receive the most competitive offers, anywhere in the world.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="col-12 col-sm-6 col-lg-4 h-100"
                                    variants={cardAnimation}
                                >
                                    <motion.div
                                        className="bg-white rounded shadow h-100 p-4 p-xl-5"
                                        style={{borderRadius: '1.5rem'}}
                                        whileHover={{y: -10, transition: {duration: 0.3}}}
                                    >
                                        <motion.div
                                            className="d-flex justify-content-center align-items-center mb-3 mb-md-4"
                                            style={{
                                                width: '105px',
                                                height: '105px',
                                                borderRadius: '50%',
                                                backgroundColor: '#83D7F5'
                                            }}
                                            variants={scaleIn}
                                            whileHover={{rotate: 360, transition: {duration: 0.6}}}
                                        >
                                            <span className="fs-1 fw-bold">2</span>
                                        </motion.div>
                                        <div>
                                            <h3 className="fw-semibold mb-3 mb-md-4" style={{
                                                fontSize: 'clamp(1.25rem, 2vw, 2.25rem)'
                                            }}>
                                                Bank-Grade <br/>
                                                Custody
                                            </h3>
                                            <p style={{fontSize: 'clamp(1rem, 1.5vw, 1.5rem)'}}>
                                                Assets insured and protected by TransGuard. Your timepieces are secured
                                                in
                                                climate-controlled vaults with 24/7 monitoring and full insurance
                                                coverage.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="col-12 col-sm-12 col-lg-4 h-100"
                                    variants={cardAnimation}
                                >
                                    <motion.div
                                        className="bg-white rounded shadow h-100 p-4 p-xl-5"
                                        style={{borderRadius: '1.5rem'}}
                                        whileHover={{y: -10, transition: {duration: 0.3}}}
                                    >
                                        <motion.div
                                            className="d-flex justify-content-center align-items-center mb-3 mb-md-4"
                                            style={{
                                                width: '105px',
                                                height: '105px',
                                                borderRadius: '50%',
                                                backgroundColor: '#83D7F5'
                                            }}
                                            variants={scaleIn}
                                            whileHover={{rotate: 360, transition: {duration: 0.6}}}
                                        >
                                            <span className="fs-1 fw-bold">3</span>
                                        </motion.div>
                                        <div>
                                            <h3 className="fw-semibold mb-3 mb-md-4" style={{
                                                fontSize: 'clamp(1.25rem, 2vw, 2.25rem)'
                                            }}>
                                                Immediate <br/>
                                                Liquidity
                                            </h3>
                                            <p style={{fontSize: 'clamp(1rem, 1.5vw, 1.5rem)'}}>
                                                Instant offers and fast payments. No waiting weeks for a sale. Get your
                                                cash
                                                offer within 24 hours and payment within 48 hours of acceptance.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust & Expertise Section */}
            <div style={{backgroundColor: '#9CC2B8'}}>
                <div className="container-fluid px-3">
                    <div className="container" style={{maxWidth: '1240px'}}>
                        <div className="py-5 py-xl-5">
                            <motion.div
                                className="mb-5 text-white text-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, margin: "-100px"}}
                                variants={staggerContainer}
                            >
                                <motion.div
                                    style={{fontSize: 'clamp(1.5rem, 3vw, 3.75rem)'}}
                                    variants={fadeInUp}
                                >
                                    Build on a foundation of
                                </motion.div>
                                <motion.h2
                                    className="display-1 fw-bold"
                                    style={{
                                        fontSize: 'clamp(2rem, 5vw, 4.5rem)'
                                    }}
                                    variants={fadeInUp}
                                >
                                    Trust & Expertise
                                </motion.h2>
                            </motion.div>
                            <motion.div
                                className="row"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, margin: "-50px"}}
                            >
                                <motion.div
                                    className="col-12 col-md-6 h-100"
                                    variants={cardAnimation}
                                >
                                    <motion.div
                                        className="bg-white rounded shadow h-100 p-4 p-xl-5"
                                        style={{borderRadius: '1.5rem'}}
                                        whileHover={{y: -10, transition: {duration: 0.3}}}
                                    >
                                        <div className="d-flex align-items-center mb-4" style={{gap: '1rem'}}>
                                            <motion.div
                                                whileHover={{scale: 1.1, rotate: 5}}
                                                transition={{duration: 0.3}}
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center border border-2 rounded-circle"
                                                    style={{
                                                        width: '90px',
                                                        height: '90px',
                                                        borderColor: '#6BC8AC',
                                                        backgroundColor: '#83D7F5'
                                                    }}>
                                                    <span className="fs-2 fw-bold">12</span>
                                                </div>
                                            </motion.div>
                                            <div className="d-flex flex-column">
                                                <h4 className="fw-bold mb-0" style={{
                                                    fontSize: 'clamp(1.25rem, 2.5vw, 2.25rem)'
                                                }}>
                                                    Pishu Uttam Ganglani
                                                </h4>
                                                <p className="fw-semibold mb-0" style={{
                                                    fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                                                    color: '#6BC8AC'
                                                }}>
                                                    Co-Founder & Operational Strategist
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column" style={{
                                            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                            gap: '1.5rem'
                                        }}>
                                            <p>
                                                Former McKinsey consultant and founder of NorthLadder, Pishu brings
                                                world-class
                                                expertise in re-commerce operations, architecting the technology that
                                                powers
                                                iLock's speed and fairness.
                                            </p>
                                            <p>
                                                With deep experience in scaling marketplace platforms and optimizing
                                                supply
                                                chains, Pishu ensures every transaction on iLock is seamless,
                                                transparent, and
                                                built on cutting-edge infrastructure.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="col-12 col-md-6 h-100"
                                    variants={cardAnimation}
                                >
                                    <motion.div
                                        className="bg-white rounded shadow h-100 p-4 p-xl-5"
                                        style={{borderRadius: '1.5rem'}}
                                        whileHover={{y: -10, transition: {duration: 0.3}}}
                                    >
                                        <div className="d-flex align-items-center mb-4" style={{gap: '1rem'}}>
                                            <motion.div
                                                whileHover={{scale: 1.1, rotate: 5}}
                                                transition={{duration: 0.3}}
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center border border-2 rounded-circle"
                                                    style={{
                                                        width: '90px',
                                                        height: '90px',
                                                        borderColor: '#6BC8AC',
                                                        backgroundColor: '#83D7F5'
                                                    }}>
                                                    <span className="fs-2 fw-bold">12</span>
                                                </div>
                                            </motion.div>
                                            <div className="d-flex flex-column">
                                                <h4 className="fw-bold mb-0" style={{
                                                    fontSize: 'clamp(1.25rem, 2.5vw, 2.25rem)'
                                                }}>
                                                    Harsh Kamani
                                                </h4>
                                                <p className="fw-semibold mb-0" style={{
                                                    fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                                                    color: '#6BC8AC'
                                                }}>
                                                    Co-Founder & Wealth Strategist
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column" style={{
                                            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                            gap: '1.5rem'
                                        }}>
                                            <p>
                                                With a background in high-net-worth asset management and industrial
                                                legacy,
                                                Harsh ensures iLock adheres to the highest standards of financial
                                                security and
                                                wealth preservation.
                                            </p>
                                            <p>
                                                Drawing from years in private banking and family office management,
                                                Harsh has
                                                built iLock's trust framework around institutional-grade protocols that
                                                protect
                                                client assets like Fort Knox.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Section */}
            <div style={{backgroundColor: '#484C52'}}>
                <div className="container-fluid">
                    <div className="row align-items-center g-0">
                        <motion.div
                            className="col-12 col-md-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, margin: "-100px"}}
                            variants={fadeInLeft}
                        >
                            <div className="p-4 p-lg-5" style={{paddingLeft: 'clamp(2.5rem, 10vw, 10rem)'}}>
                                <motion.div
                                    className="d-flex flex-column text-white mb-4"
                                    style={{gap: '1rem'}}
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true}}
                                >
                                    <motion.h2
                                        className="display-1 fw-light"
                                        style={{
                                            fontSize: 'clamp(2rem, 5vw, 4.5rem)'
                                        }}
                                        variants={fadeInUp}
                                    >
                                        Security is<br/>
                                        our Obsession
                                    </motion.h2>
                                    <motion.div
                                        className="d-flex flex-column"
                                        style={{
                                            fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
                                            gap: '1.25rem'
                                        }}
                                        variants={fadeInUp}
                                    >
                                        <p>
                                            When you trust us with your luxury timepieces, we take that responsibility
                                            seriously. Every watch is stored in state-of-the-art facilities with
                                            multiple layers of protection.
                                        </p>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="row g-3"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true}}
                                >
                                    <motion.div
                                        className="col-12 col-lg-4"
                                        variants={cardAnimation}
                                    >
                                        <motion.div
                                            className="d-flex flex-column text-white"
                                            style={{gap: '0.5rem'}}
                                            whileHover={{x: 10, transition: {duration: 0.3}}}
                                        >
                                            <motion.div
                                                className="d-flex justify-content-center align-items-center rounded-circle"
                                                style={{
                                                    width: '55px',
                                                    height: '55px',
                                                    backgroundColor: '#9CC2B8'
                                                }}
                                                variants={scaleIn}
                                                whileHover={{scale: 1.2, rotate: 360, transition: {duration: 0.5}}}
                                            >
                                                <span className="fw-bold">1</span>
                                            </motion.div>
                                            <h5 className="fw-semibold mb-0" style={{
                                                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                            }}>
                                                TransGuard<br/>
                                                Partnership
                                            </h5>
                                            <p className="small mb-0" style={{fontSize: '0.875rem'}}>
                                                Industry-leading custody and insurance protocols backed by Lloyd's of
                                                London.
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div
                                        className="col-12 col-lg-4"
                                        variants={cardAnimation}
                                    >
                                        <motion.div
                                            className="d-flex flex-column text-white"
                                            style={{gap: '0.5rem'}}
                                            whileHover={{x: 10, transition: {duration: 0.3}}}
                                        >
                                            <motion.div
                                                className="d-flex justify-content-center align-items-center rounded-circle"
                                                style={{
                                                    width: '55px',
                                                    height: '55px',
                                                    backgroundColor: '#9CC2B8'
                                                }}
                                                variants={scaleIn}
                                                whileHover={{scale: 1.2, rotate: 360, transition: {duration: 0.5}}}
                                            >
                                                <span className="fw-bold">2</span>
                                            </motion.div>
                                            <h5 className="fw-semibold mb-0" style={{
                                                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                            }}>
                                                24/7 <br/>
                                                Surveillance
                                            </h5>
                                            <p className="small mb-0" style={{fontSize: '0.875rem'}}>
                                                Real-time monitoring with biometric access controls and redundant
                                                security systems.
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div
                                        className="col-12 col-lg-4"
                                        variants={cardAnimation}
                                    >
                                        <motion.div
                                            className="d-flex flex-column text-white"
                                            style={{gap: '0.5rem'}}
                                            whileHover={{x: 10, transition: {duration: 0.3}}}
                                        >
                                            <motion.div
                                                className="d-flex justify-content-center align-items-center rounded-circle"
                                                style={{
                                                    width: '55px',
                                                    height: '55px',
                                                    backgroundColor: '#9CC2B8'
                                                }}
                                                variants={scaleIn}
                                                whileHover={{scale: 1.2, rotate: 360, transition: {duration: 0.5}}}
                                            >
                                                <span className="fw-bold">3</span>
                                            </motion.div>
                                            <h5 className="fw-semibold mb-0" style={{
                                                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                            }}>
                                                Full Insurance<br/>
                                                Coverage
                                            </h5>
                                            <p className="small mb-0" style={{fontSize: '0.875rem'}}>
                                                Every asset is insured from the moment it enters our custody until final
                                                delivery.
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="col-12 col-md-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, margin: "-100px"}}
                            variants={fadeInRight}
                        >
                            <motion.div
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.3}}
                            >
                                <img src={img3} className="img-fluid w-100" style={{objectFit: 'cover'}}
                                     alt="Security"/>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>


            <div className={'ready-section py-5 py-md-5 my-md-5 text-center'}>
                <div className={'container'}>
                    <div className={'ready-content mb-5'}>
                        <h1 className={'mb-3'}>
                            Redefining how the world<br/>
                            trades luxury timepieces
                        </h1>
                        <p>
                            Combining advanced re-commerce technology with legacy wealth expertise
                        </p>
                    </div>
                    <div className={'ready-btn-div text-center'}>
                        <button className={'btn mb-3'}>
                            Get your free valuation now
                        </button>
                        <p>100% Secured & Confidential</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
