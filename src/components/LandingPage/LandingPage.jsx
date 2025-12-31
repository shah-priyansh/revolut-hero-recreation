import React, { useState } from 'react';
import Header from '../Header/Header';
import './LandingPage.css';
import heroBackground from '../../assets/images/hero-background.jpg';
import logoImg from '../../assets/images/logo.svg';
import img3 from '../../assets/images/img3.png';
import brandscoinVideo from '../../assets/images/brandscoin.mp4';

export default function LandingPage() {
    const [formData, setFormData] = useState({
        watchBrand: '',
        modelName: '',
        condition: '',
        fullName: '',
        email: '',
        phone: '',
        agreeToTerms: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    return (
        <div className="landing-page">
            <Header />
            
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background-overlay"></div>
                <div className="hero-content">
                    <div className="hero-text-content">
                        <h1 className="hero-headline">Sell Your Luxury Watch for Immediate Cash.</h1>
                        <p className="hero-subheadline">Highest market price guaranteed. Safe custody by TransGuard.</p>
                        
                        <div className="hero-features">
                            <div className="feature-icon">
                                <div className="icon-circle green">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white"/>
                                    </svg>
                                </div>
                                <span>Highest Market Price</span>
                            </div>
                            <div className="feature-icon">
                                <div className="icon-circle green">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="white"/>
                                    </svg>
                                </div>
                                <span>Safe & Secure</span>
                            </div>
                            <div className="feature-icon">
                                <div className="icon-circle green">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="white"/>
                                    </svg>
                                </div>
                                <span>Instant Payout</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="valuation-form-container">
                        <form className="valuation-form" onSubmit={handleSubmit}>
                            <h2>Get Your Free Valuation</h2>
                            <div className="form-group">
                                <label>Watch Brand</label>
                                <select 
                                    name="watchBrand" 
                                    value={formData.watchBrand}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Brand</option>
                                    <option value="rolex">Rolex</option>
                                    <option value="omega">Omega</option>
                                    <option value="patek">Patek Philippe</option>
                                    <option value="cartier">Cartier</option>
                                    <option value="audemars">Audemars Piguet</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Model Name</label>
                                <input 
                                    type="text" 
                                    name="modelName"
                                    value={formData.modelName}
                                    onChange={handleInputChange}
                                    placeholder="Enter model name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Condition</label>
                                <select 
                                    name="condition" 
                                    value={formData.condition}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Condition</option>
                                    <option value="new">New</option>
                                    <option value="excellent">Excellent</option>
                                    <option value="very-good">Very Good</option>
                                    <option value="good">Good</option>
                                    <option value="fair">Fair</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Upload Photos</label>
                                <button type="button" className="upload-btn">Choose Files</button>
                            </div>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input 
                                    type="text" 
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>
                            <div className="form-group checkbox-group">
                                <label className="checkbox-label">
                                    <input 
                                        type="checkbox" 
                                        name="agreeToTerms"
                                        checked={formData.agreeToTerms}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <span>I agree to the Terms & Conditions and Privacy Policy.</span>
                                </label>
                            </div>
                            <button type="submit" className="submit-btn">Get Free Valuation</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works-section">
                <div className="container">
                    <h2 className="section-headline">How It Works</h2>
                    <p className="section-subheadline">Our simple 3 steps</p>
                    <div className="steps-container">
                        <div className="step-card">
                            <div className="step-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="#6BC8AC"/>
                                </svg>
                            </div>
                            <h3>Submit Details</h3>
                            <p>Fill out our simple form with your watch details and photos</p>
                        </div>
                        <div className="step-card">
                            <div className="step-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="#6BC8AC"/>
                                </svg>
                            </div>
                            <h3>Get Offer</h3>
                            <p>Receive a competitive offer from our global dealer network</p>
                        </div>
                        <div className="step-card">
                            <div className="step-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="#6BC8AC"/>
                                </svg>
                            </div>
                            <h3>Get Paid</h3>
                            <p>Accept the offer and receive instant payment securely</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custody by TransGuard Section */}
            <section className="custody-section">
                <div className="container">
                    <div className="custody-content">
                        <div className="custody-text">
                            <span className="section-label">Secure Storage</span>
                            <h2 className="section-headline white">Custody by TransGuard.</h2>
                            <p className="section-text white">
                                Your luxury watch is stored in state-of-the-art, climate-controlled vaults 
                                with the highest levels of security. TransGuard provides comprehensive insurance 
                                coverage, ensuring your valuable timepiece is protected at all times.
                            </p>
                            <p className="section-text white">
                                Our partnership with TransGuard, trusted by banks and jewelers worldwide, 
                                guarantees that your watch is in the safest hands possible. Every watch 
                                is individually secured and tracked, giving you complete peace of mind.
                            </p>
                        </div>
                        <div className="custody-image">
                            <img src={img3} alt="TransGuard Vault" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Global Dealer Network Section */}
            <section className="dealer-network-section">
                <div className="container">
                    <h2 className="section-headline white centered">
                        Our global dealer network specializes in the best luxury brands
                    </h2>
                    <div className="brand-coins-container">
                        <video className="brand-coins-video" autoPlay muted loop playsInline>
                            <source src={brandscoinVideo} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </section>

            {/* Trusted by Collectors Worldwide Section */}
            <section className="trusted-section">
                <div className="container">
                    <h2 className="section-headline white centered">Trusted by Collectors Worldwide</h2>
                    <p className="section-subheadline white centered">
                        Our reputation is built on thousands of successful, secure, and transparent transactions.
                    </p>
                    <div className="testimonials-container">
                        <div className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p className="testimonial-text">
                                "Exceptional service from start to finish. The valuation was fair, 
                                and the entire process was transparent and secure."
                            </p>
                            <p className="testimonial-author">Robert S.</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p className="testimonial-text">
                                "I was impressed by how quickly I received my offer and the professionalism 
                                of the entire team. Highly recommend!"
                            </p>
                            <p className="testimonial-author">Sarah M.</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p className="testimonial-text">
                                "The best experience selling a luxury watch. TransGuard custody gave me 
                                complete confidence in the process."
                            </p>
                            <p className="testimonial-author">James K.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert Authentication & Valuation Section */}
            <section className="expert-section">
                <div className="container">
                    <div className="expert-content">
                        <div className="expert-text">
                            <h2 className="section-headline white">Expert Authentication & Valuation</h2>
                            <p className="section-text white">
                                Our team of certified watch experts uses advanced technology and years of 
                                experience to authenticate and accurately value your luxury timepiece. Every 
                                watch undergoes a comprehensive inspection process.
                            </p>
                            <div className="expert-features">
                                <div className="expert-feature-icon">
                                    <div className="icon-circle white">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#6BC8AC"/>
                                        </svg>
                                    </div>
                                    <span>Certified Experts</span>
                                </div>
                                <div className="expert-feature-icon">
                                    <div className="icon-circle white">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" fill="#6BC8AC"/>
                                        </svg>
                                    </div>
                                    <span>Advanced Technology</span>
                                </div>
                                <div className="expert-feature-icon">
                                    <div className="icon-circle white">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="#6BC8AC"/>
                                        </svg>
                                    </div>
                                    <span>Accurate Valuation</span>
                                </div>
                            </div>
                        </div>
                        <div className="expert-image">
                            <div className="expert-image-placeholder">
                                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#6BC8AC"/>
                                </svg>
                                <p>Expert examining watch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
