import Header from '../components/Header/Header';

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-white" style={{ paddingTop: '120px' }}>
            <Header />
            <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[85%] mx-auto py-10 xl:py-32 px-3">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl text-[#000000] font-light mb-4">
                        Contact Us
                    </h1>
                    <p className="text-base sm:text-xl md:text-2xl text-gray-600">
                        Get in touch with our team. We're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-8">
                    {/* Contact Form */}
                    <div className="col-span-12 md:col-span-8">
                        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
                                Send us a message
                            </h2>
                            <form className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#83D7F5] focus:border-transparent outline-none"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#83D7F5] focus:border-transparent outline-none"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#83D7F5] focus:border-transparent outline-none"
                                        placeholder="john.doe@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#83D7F5] focus:border-transparent outline-none"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#83D7F5] focus:border-transparent outline-none"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#83D7F5] focus:border-transparent outline-none resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#83D7F5] hover:bg-[#6BC8AC] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="col-span-12 md:col-span-4">
                        <div className="bg-[#83D7F5] rounded-3xl p-6 sm:p-8 md:p-10 text-white h-full">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
                                Get in Touch
                            </h2>
                            
                            <div className="flex flex-col gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Email</h3>
                                    <p className="text-base sm:text-lg">
                                        <a href="mailto:info@ilock.com" className="hover:underline">
                                            info@ilock.com
                                        </a>
                                    </p>
                                    <p className="text-base sm:text-lg mt-2">
                                        <a href="mailto:support@ilock.com" className="hover:underline">
                                            support@ilock.com
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Phone</h3>
                                    <p className="text-base sm:text-lg">
                                        <a href="tel:+1234567890" className="hover:underline">
                                            +1 (234) 567-8900
                                        </a>
                                    </p>
                                    <p className="text-sm sm:text-base mt-2 text-gray-100">
                                        Monday - Friday: 9 AM - 6 PM EST
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Address</h3>
                                    <p className="text-base sm:text-lg">
                                        123 Luxury Watch Street<br />
                                        New York, NY 10001<br />
                                        United States
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <a href="#" className="text-2xl hover:opacity-80 transition-opacity">
                                            📘
                                        </a>
                                        <a href="#" className="text-2xl hover:opacity-80 transition-opacity">
                                            📷
                                        </a>
                                        <a href="#" className="text-2xl hover:opacity-80 transition-opacity">
                                            🐦
                                        </a>
                                        <a href="#" className="text-2xl hover:opacity-80 transition-opacity">
                                            💼
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Support Section */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-[#9CC2B8] rounded-3xl p-6 text-white text-center">
                        <div className="text-4xl mb-4">💬</div>
                        <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                        <p className="text-sm sm:text-base">
                            Chat with our support team in real-time
                        </p>
                        <button className="mt-4 bg-white text-[#9CC2B8] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Start Chat
                        </button>
                    </div>

                    <div className="bg-[#83D7F5] rounded-3xl p-6 text-white text-center">
                        <div className="text-4xl mb-4">📞</div>
                        <h3 className="text-xl font-semibold mb-2">Schedule a Call</h3>
                        <p className="text-sm sm:text-base">
                            Book a consultation with our experts
                        </p>
                        <button className="mt-4 bg-white text-[#83D7F5] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Book Now
                        </button>
                    </div>

                    <div className="bg-[#484C52] rounded-3xl p-6 text-white text-center">
                        <div className="text-4xl mb-4">📧</div>
                        <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                        <p className="text-sm sm:text-base">
                            Get help via email within 24 hours
                        </p>
                        <button className="mt-4 bg-white text-[#484C52] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Email Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

