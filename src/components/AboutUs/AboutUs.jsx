import img3 from "../../assets/images/img3.png";

export default function AboutUs() {
    return (
        <div style={{ minHeight: '100vh' }}>
            {/* Mission Section */}
            <div className="bg-white">
                <div className="container-fluid px-3">
                    <div className="container" style={{ maxWidth: '85%' }}>
                        <div className="row align-items-center py-5 py-xl-5">
                            <div className="col-12 col-md-6 mb-4 mb-md-0">
                                <div>
                                    <video autoPlay muted loop className="w-100">
                                        <source src={'/images/map.mp4'}/>
                                    </video>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="d-flex flex-column" style={{ gap: '1rem' }}>
                                    <h1 className="display-1 fw-light text-black mb-3" style={{ 
                                        fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                                        color: '#000000'
                                    }}>
                                        Our Mission
                                    </h1>
                                    <div className="d-flex flex-column" style={{ 
                                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                        gap: '1.5rem'
                                    }}>
                                        <p>
                                            The luxury watch market has long been plagued by slow transactions, opaque
                                            pricing, and unnecessary risk. Traditional dealers take weeks to process sales, leaving
                                            sellers vulnerable and uncertain.
                                        </p>
                                        <p>
                                            iLock was founded to solve these problems through technology and trust.
                                            We've built a platform that combines instant liquidity with bank-grade security, giving
                                            collectors the confidence to trade their most valuable assets.
                                        </p>
                                        <p style={{ color: '#9CC2B8', fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
                                            Fast. Fair. Secure. That's the iLock promise.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Pillars Section */}
            <div style={{ backgroundColor: '#83D7F5' }}>
                <div className="container-fluid px-3">
                    <div className="container" style={{ maxWidth: '85%' }}>
                        <div className="py-5 py-xl-5">
                            <h2 className="display-1 fw-light text-center mb-5" style={{ 
                                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                                color: '#000000'
                            }}>
                                Our Core Pillars
                            </h2>
                            <div className="row g-3 g-lg-4">
                                <div className="col-12 col-sm-6 col-lg-4 h-100">
                                    <div className="bg-white rounded shadow h-100 p-4 p-xl-5" style={{ borderRadius: '1.5rem' }}>
                                        <div className="d-flex justify-content-center align-items-center mb-3 mb-md-4" style={{
                                            width: '105px',
                                            height: '105px',
                                            borderRadius: '50%',
                                            backgroundColor: '#83D7F5'
                                        }}>
                                            <span className="fs-1 fw-bold">1</span>
                                        </div>
                                        <div>
                                            <h3 className="fw-semibold mb-3 mb-md-4" style={{ 
                                                fontSize: 'clamp(1.25rem, 2vw, 2.25rem)'
                                            }}>
                                                Microscopic<br/>
                                                Inspection
                                            </h3>
                                            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)' }}>
                                                Unrivaled market access to vetted dealers across continents. Our network ensures
                                                you receive the most competitive offers, anywhere in the world.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 h-100">
                                    <div className="bg-white rounded shadow h-100 p-4 p-xl-5" style={{ borderRadius: '1.5rem' }}>
                                        <div className="d-flex justify-content-center align-items-center mb-3 mb-md-4" style={{
                                            width: '105px',
                                            height: '105px',
                                            borderRadius: '50%',
                                            backgroundColor: '#83D7F5'
                                        }}>
                                            <span className="fs-1 fw-bold">2</span>
                                        </div>
                                        <div>
                                            <h3 className="fw-semibold mb-3 mb-md-4" style={{ 
                                                fontSize: 'clamp(1.25rem, 2vw, 2.25rem)'
                                            }}>
                                                Bank-Grade <br/>
                                                Custody
                                            </h3>
                                            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)' }}>
                                                Assets insured and protected by TransGuard. Your timepieces are secured in
                                                climate-controlled vaults with 24/7 monitoring and full insurance coverage.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-4 h-100">
                                    <div className="bg-white rounded shadow h-100 p-4 p-xl-5" style={{ borderRadius: '1.5rem' }}>
                                        <div className="d-flex justify-content-center align-items-center mb-3 mb-md-4" style={{
                                            width: '105px',
                                            height: '105px',
                                            borderRadius: '50%',
                                            backgroundColor: '#83D7F5'
                                        }}>
                                            <span className="fs-1 fw-bold">3</span>
                                        </div>
                                        <div>
                                            <h3 className="fw-semibold mb-3 mb-md-4" style={{ 
                                                fontSize: 'clamp(1.25rem, 2vw, 2.25rem)'
                                            }}>
                                                Immediate <br/>
                                                Liquidity
                                            </h3>
                                            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)' }}>
                                                Instant offers and fast payments. No waiting weeks for a sale. Get your cash
                                                offer within 24 hours and payment within 48 hours of acceptance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust & Expertise Section */}
            <div style={{ backgroundColor: '#9CC2B8' }}>
                <div className="container-fluid px-3">
                    <div className="container" style={{ maxWidth: '1240px' }}>
                        <div className="py-5 py-xl-5">
                            <div className="mb-5 text-white text-center">
                                <div style={{ fontSize: 'clamp(1.5rem, 3vw, 3.75rem)' }}>Build on a foundation of</div>
                                <h2 className="display-1 fw-bold" style={{ 
                                    fontSize: 'clamp(2rem, 5vw, 4.5rem)'
                                }}>
                                    Trust & Expertise
                                </h2>
                            </div>
                            <div className="row g-3 g-lg-4 align-items-center">
                                <div className="col-12 col-md-6 h-100">
                                    <div className="bg-white rounded shadow h-100 p-4 p-xl-5" style={{ borderRadius: '1.5rem' }}>
                                        <div className="d-flex align-items-center mb-4" style={{ gap: '1rem' }}>
                                            <div>
                                                <div className="d-flex justify-content-center align-items-center border border-2 rounded-circle" style={{
                                                    width: '90px',
                                                    height: '90px',
                                                    borderColor: '#6BC8AC',
                                                    backgroundColor: '#83D7F5'
                                                }}>
                                                    <span className="fs-2 fw-bold">12</span>
                                                </div>
                                            </div>
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
                                                Former McKinsey consultant and founder of NorthLadder, Pishu brings world-class
                                                expertise in re-commerce operations, architecting the technology that powers
                                                iLock's speed and fairness.
                                            </p>
                                            <p>
                                                With deep experience in scaling marketplace platforms and optimizing supply
                                                chains, Pishu ensures every transaction on iLock is seamless, transparent, and
                                                built on cutting-edge infrastructure.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 h-100">
                                    <div className="bg-white rounded shadow h-100 p-4 p-xl-5" style={{ borderRadius: '1.5rem' }}>
                                        <div className="d-flex align-items-center mb-4" style={{ gap: '1rem' }}>
                                            <div>
                                                <div className="d-flex justify-content-center align-items-center border border-2 rounded-circle" style={{
                                                    width: '90px',
                                                    height: '90px',
                                                    borderColor: '#6BC8AC',
                                                    backgroundColor: '#83D7F5'
                                                }}>
                                                    <span className="fs-2 fw-bold">12</span>
                                                </div>
                                            </div>
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
                                                With a background in high-net-worth asset management and industrial legacy,
                                                Harsh ensures iLock adheres to the highest standards of financial security and
                                                wealth preservation.
                                            </p>
                                            <p>
                                                Drawing from years in private banking and family office management, Harsh has
                                                built iLock's trust framework around institutional-grade protocols that protect
                                                client assets like Fort Knox.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Section */}
            <div style={{ backgroundColor: '#484C52' }}>
                <div className="container-fluid">
                    <div className="row align-items-center g-0">
                        <div className="col-12 col-md-6">
                            <div className="p-4 p-lg-5" style={{ paddingLeft: 'clamp(2.5rem, 10vw, 10rem)' }}>
                                <div className="d-flex flex-column text-white mb-4" style={{ gap: '1rem' }}>
                                    <h2 className="display-1 fw-light" style={{ 
                                        fontSize: 'clamp(2rem, 5vw, 4.5rem)'
                                    }}>
                                        Security is<br/>
                                        our Obsession
                                    </h2>
                                    <div className="d-flex flex-column" style={{ 
                                        fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
                                        gap: '1.25rem'
                                    }}>
                                        <p>
                                            When you trust us with your luxury timepieces, we take that responsibility
                                            seriously. Every watch is stored in state-of-the-art facilities with
                                            multiple layers of protection.
                                        </p>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col-12 col-lg-4">
                                        <div className="d-flex flex-column text-white" style={{ gap: '0.5rem' }}>
                                            <div className="d-flex justify-content-center align-items-center rounded-circle" style={{
                                                width: '55px',
                                                height: '55px',
                                                backgroundColor: '#9CC2B8'
                                            }}>
                                                <span className="fw-bold">1</span>
                                            </div>
                                            <h5 className="fw-semibold mb-0" style={{ 
                                                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                            }}>
                                                TransGuard<br/>
                                                Partnership
                                            </h5>
                                            <p className="small mb-0" style={{ fontSize: '0.875rem' }}>
                                                Industry-leading custody and insurance protocols backed by Lloyd's of
                                                London.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="d-flex flex-column text-white" style={{ gap: '0.5rem' }}>
                                            <div className="d-flex justify-content-center align-items-center rounded-circle" style={{
                                                width: '55px',
                                                height: '55px',
                                                backgroundColor: '#9CC2B8'
                                            }}>
                                                <span className="fw-bold">2</span>
                                            </div>
                                            <h5 className="fw-semibold mb-0" style={{ 
                                                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                            }}>
                                                24/7 <br/>
                                                Surveillance
                                            </h5>
                                            <p className="small mb-0" style={{ fontSize: '0.875rem' }}>
                                                Real-time monitoring with biometric access controls and redundant
                                                security systems.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="d-flex flex-column text-white" style={{ gap: '0.5rem' }}>
                                            <div className="d-flex justify-content-center align-items-center rounded-circle" style={{
                                                width: '55px',
                                                height: '55px',
                                                backgroundColor: '#9CC2B8'
                                            }}>
                                                <span className="fw-bold">3</span>
                                            </div>
                                            <h5 className="fw-semibold mb-0" style={{ 
                                                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                            }}>
                                                Full Insurance<br/>
                                                Coverage
                                            </h5>
                                            <p className="small mb-0" style={{ fontSize: '0.875rem' }}>
                                                Every asset is insured from the moment it enters our custody until final
                                                delivery.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div>
                                <img src={img3} className="img-fluid w-100" style={{ objectFit: 'cover' }} alt="Security"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
