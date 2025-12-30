"use client";


import img3 from "../assets/images/img3.png";

export default function About() {
    return (
        <div className="min-h-screen">

            <div className={'bg-white'}>
                <div className={'w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[85%] mx-auto py-10 xl:py-32 px-3'}>
                    <div className={'grid grid-cols-12 gap-3 sm:gap-3 md:gap-5 items-center'}>
                        <div className={'col-span-12 sm:col-span-12 md:col-span-6'}>
                            <div>
                                <video autoPlay muted loop>
                                    <source src={'/images/map.mp4'}/>
                                </video>
                            </div>
                        </div>
                        <div className={'col-span-12 sm:col-span-12 md:col-span-6'}>
                            <div>
                                <div className={'flex flex-col gap-3'}>

                                    <div
                                        className={'text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl text-[#000000] font-light'}>
                                        Our Mission
                                    </div>
                                    <div
                                        className={'text-base sm:text-xl md:text-2xl flex flex-col gap-3 sm:gap-3 md:gap-5'}>
                                        <div>
                                            The luxury watch market has long been plagued by slow transactions, opaque
                                            pricing, and
                                            unnecessary risk. Traditional dealers take weeks to process sales, leaving
                                            sellers vulnerable
                                            and uncertain.
                                        </div>

                                        <div>iLock was founded to solve these problems through technology and trust.
                                            We've built a
                                            platform that combines instant liquidity with bank-grade security, giving
                                            collectors the
                                            confidence to trade their most valuable assets.
                                        </div>

                                        <div className={'text-[#9CC2B8] text-xl sm:text-xl md:text-2xl'}>
                                            Fast. Fair. Secure. That's the iLock promise.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'bg-[#83D7F5]'}>
                <div
                    className={'w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[85%] mx-auto py-10 xl:py-32 px-3'}>

                    <div
                        className={'text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl text-[#000000] font-light text-center mb-10'}>
                        Our Core Pillars
                    </div>

                    <div className={'grid grid-cols-12 gap-3 sm:gap-3 md:gap-3 lg:gap-10 xl:gap-10 items-center'}>

                        <div className={'col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-4 h-full'}>
                            <div className={'bg-white rounded-3xl p-4 sm:p-4 md:p-5 lg:p-5 xl:p-10 shadow h-full'}>
                                <div
                                    className={'w-[105px] h-[105px] rounded-full flex justify-center items-center bg-[#83D7F5] mb-3 sm:mb-3 md:mb-5'}>
                                    1
                                </div>
                                <div>
                                    <div className={'text-xl sm:text-xl md:text-4xl font-semibold max-sm:mb-3 md:mb-7'}>
                                        Microscopic<br/>
                                        Inspection
                                    </div>
                                    <div className={'text-base sm:text-base md:text-2xl'}>
                                        Unrivaled market access to vetted dealers across continents. Our network ensures
                                        you receive the
                                        most competitive offers, anywhere in the world.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-4 h-full'}>
                            <div className={'bg-white rounded-3xl p-4 sm:p-4 md:p-5 lg:p-5 xl:p-10 shadow h-full'}>
                                <div
                                    className={'w-[105px] h-[105px] rounded-full flex justify-center items-center bg-[#83D7F5] mb-3 sm:mb-3 md:mb-5'}>
                                    2
                                </div>
                                <div>
                                    <div className={'text-xl sm:text-xl md:text-4xl font-semibold max-sm:mb-3 md:mb-7'}>
                                        Bank-Grade <br/>
                                        Custody
                                    </div>
                                    <div className={'text-base sm:text-base md:text-2xl'}>
                                        Assets insured and protected by TransGuard. Your timepieces are secured in
                                        climate-controlled
                                        vaults with 24/7 monitoring and full insurance coverage.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4 h-full'}>
                            <div className={'bg-white rounded-3xl p-4 sm:p-4 md:p-5 lg:p-5 xl:p-10 shadow h-full'}>
                                <div
                                    className={'w-[105px] h-[105px] rounded-full flex justify-center items-center bg-[#83D7F5] mb-3 sm:mb-3 md:mb-5'}>
                                    2
                                </div>
                                <div>
                                    <div className={'text-xl sm:text-xl md:text-4xl font-semibold max-sm:mb-3 md:mb-7'}>
                                        Immediate <br/>
                                        Liquidity
                                    </div>
                                    <div className={'text-base sm:text-base md:text-2xl'}>
                                        Instant offers and fast payments. No waiting weeks for a sale. Get your cash
                                        offer within 24 hours
                                        and payment within 48 hours of acceptance.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'bg-[#9CC2B8]'}>
                <div
                    className={'w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[1240px] mx-auto py-10 xl:py-32 px-3'}>

                    <div className={'mb-10 text-white text-center'}>
                        <div className={'text-3xl sm:text-3xl md:text-6xl'}>Build on a foundation of</div>
                        <div
                            className={'text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold'}>
                            Trust & Expertise
                        </div>
                    </div>

                    <div className={'grid grid-cols-12 gap-3 sm:gap-3 md:gap-5 lg:gap-10 xl:gap-8 items-center'}>

                        <div className={'col-span-12 sm:col-span-12 md:col-span-6 xl:col-span-6 h-full'}>
                            <div className={'bg-white rounded-3xl p-4 sm:p-4 md:p-5 lg:p-5 xl:p-10 shadow h-full'}>
                                <div className={'flex items-center gap-3 mb-4'}>
                                    <div>
                                        <div
                                            className={'w-[90px] h-[90px] md:w-[130px] md:h-[130px] border-solid border-2 border-[#6BC8AC] rounded-full flex justify-center items-center bg-[#83D7F5]'}>
                                            12
                                        </div>
                                    </div>
                                    <div className={'flex flex-col gap-1'}>
                                        <div className={'text-xl sm:text-2xl md:text-4xl font-bold'}>Pishu Uttam
                                            Ganglani
                                        </div>
                                        <div
                                            className={'text-sm sm:text-base md:text-lg font-semibold text-[#6BC8AC]'}>Co-Founder
                                            & Operational Strategist
                                        </div>
                                    </div>
                                </div>
                                <div className={'text-base sm:text-xl md:text-2xl flex flex-col gap-4'}>
                                    <div>
                                        Former McKinsey consultant and founder of NorthLadder, Pishu brings world-class
                                        expertise in re-commerce operations, architecting the technology that powers
                                        iLock's speed and fairness.
                                    </div>
                                    <div>
                                        With deep experience in scaling marketplace platforms and optimizing supply
                                        chains, Pishu ensures every transaction on iLock is seamless, transparent, and
                                        built on cutting-edge infrastructure.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={'col-span-12 sm:col-span-12 md:col-span-6 xl:col-span-6 h-full'}>
                            <div className={'bg-white rounded-3xl p-4 sm:p-4 md:p-5 lg:p-5 xl:p-10 shadow h-full'}>
                                <div className={'flex items-center gap-3 mb-4'}>
                                    <div>
                                        <div
                                            className={'w-[90px] h-[90px] md:w-[130px] md:h-[130px] border-solid border-2 border-[#6BC8AC] rounded-full flex justify-center items-center bg-[#83D7F5]'}>
                                            12
                                        </div>
                                    </div>
                                    <div className={'flex flex-col gap-1'}>
                                        <div className={'text-xl sm:text-2xl md:text-4xl font-bold'}>
                                            Harsh Kamani
                                        </div>
                                        <div
                                            className={'text-sm sm:text-base md:text-lg font-semibold text-[#6BC8AC]'}>Co-Founder
                                            & Wealth Strategist
                                        </div>
                                    </div>
                                </div>
                                <div className={'text-base sm:text-xl md:text-2xl flex flex-col gap-4'}>
                                    <div>
                                        With a background in high-net-worth asset management and industrial legacy,
                                        Harsh ensures iLock adheres to the highest standards of financial security and
                                        wealth preservation.
                                    </div>
                                    <div>
                                        Drawing from years in private banking and family office management, Harsh has
                                        built iLock's trust framework around institutional-grade protocols that protect
                                        client assets like Fort Knox.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={'bg-[#484C52]'}>
                <div className={'w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]'}>
                    <div className={'grid grid-cols-12 gap-3 items-center'}>
                        <div className={'col-span-12 sm:col-span-12 md:col-span-6'}>
                            <div className={'p-10 lg:px-30 xl:ps-40'}>
                                <div className={'flex flex-col gap-3 text-white mb-4'}>

                                    <div
                                        className={'text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl  font-light'}>
                                        Security is<br/>

                                        our Obsession
                                    </div>
                                    <div className={'text-base md:text-lg lg:text-lg xl:text-2xl flex flex-col gap-5'}>
                                        <div>
                                            When you trust us with your luxury timepieces, we take that responsibility
                                            seriously. Every watch is stored in state-of-the-art facilities with
                                            multiple layers of protection.
                                        </div>
                                    </div>
                                </div>
                                <div className={'grid grid-cols-12 gap-3'}>
                                    <div className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4'}>
                                        <div className={'flex text-white flex-col gap-2'}>
                                            <div
                                                className={'w-[55px] h-[55px] bg-[#9CC2B8] rounded-full flex justify-center items-center'}>
                                                1
                                            </div>
                                            <div className={'text-base md:text-xl font-semibold'}>
                                                TransGuard<br/>
                                                Partnership
                                            </div>
                                            <div className={'text-sm flex flex-col gap-4'}>
                                                Industry-leading custody and insurance protocols backed by Lloyd's of
                                                London.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4'}>
                                        <div className={'flex text-white flex-col gap-2'}>
                                            <div
                                                className={'w-[55px] h-[55px] bg-[#9CC2B8] rounded-full flex justify-center items-center'}>
                                                1
                                            </div>
                                            <div className={'text-base md:text-xl font-semibold'}>
                                                24/7 <br/>
                                                Surveillance
                                            </div>
                                            <div className={'text-sm flex flex-col gap-4'}>
                                                Real-time monitoring with biometric access controls and redundant
                                                security systems.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4'}>
                                        <div className={'flex text-white flex-col gap-2'}>
                                            <div
                                                className={'w-[55px] h-[55px] bg-[#9CC2B8] rounded-full flex justify-center items-center'}>
                                                1
                                            </div>
                                            <div className={'text-base md:text-xl font-semibold'}>
                                                Full Insurance<br/>
                                                Coverage
                                            </div>
                                            <div className={'text-sm flex flex-col gap-4'}>
                                                Every asset is insured from the moment it enters our custody until final
                                                delivery.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-span-12 sm:col-span-12 md:col-span-6'}>
                            <div>
                                <img src={img3} className={'object-cover w-full'}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}


