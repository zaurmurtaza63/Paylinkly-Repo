import React, { useEffect, useState, useRef } from "react";
import TailoredCardsImg from "../assets/Images/tailored-cards.svg";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isTailoredVisible, setIsTailoredVisible] = useState(false);
    const [isPaymentsVisible, setIsPaymentsVisible] = useState(false);
    const sectionRef = useRef(null);
    const tailoredRef = useRef(null);
    const paymentsRef = useRef(null);

    // Hero load animation (you already had this)
    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    // Tailored section scroll-trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsTailoredVisible(true);
            },
            { threshold: 0.2 }
        );

        if (tailoredRef.current) observer.observe(tailoredRef.current);
        return () => observer.disconnect();
    }, []);

    // Payments scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsPaymentsVisible(true),
            { threshold: 0.2 }
        );
        if (paymentsRef.current) observer.observe(paymentsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section
                className={`hero-bg-img pt-[150px] relative w-full flex flex-col items-center justify-center text-center px-6 md:px-8 py-24 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-[1200px] mx-auto pt[130px] flex flex-col gap-4 justify-center items-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b2239] leading-tight">
                        Fast and Secure Platform for <br />
                        <span className="text-[#1A6DFF]">Merchant Solutions</span>
                    </h1>

                    <p className=" text-gray-600 text-base md:text-lg max-w-[700px] mx-auto">
                        Process payments seamlessly, reduce chargebacks, and grow your
                        business with secure, customized merchant services powered by
                        industry-leading gateways.
                    </p>

                    <button className="blue-btn max-w-fit hover:-translate-y-0.5 hover:shadow-lg hover:cursor-pointer transition-all duration-300 text-white font-bold">
                        Get Started Today
                    </button>

                    <div className="relative mt-12 flex flex-col md:flex-row justify-center items-center">
                        <div className="left-card w-80 mr-[-100px] hover:z-10 md:w-80 h-52 p-4 transform md:-rotate-6 md:-translate-x-4 md:translate-y-6 hover:scale-[1.1] transition-all duration-300"></div>
                        <div className="center-card w-72 md:w-96 h-48 z-1 p-4 hover:scale-[1.1] transition-all duration-300"></div>
                        <div className="right-card w-80 ml-[-100px] md:w-80 hover:z-10 h-52 p-4 transform md:rotate-6 md:translate-x-4 md:translate-y-6 hover:scale-[1.1] transition-all duration-300"></div>
                    </div>
                </div>
            </section>

            {/* TAILORED SECTION */}
            <section ref={tailoredRef} className="mt-[100px]">
                <div className="h-screen">
                    <div
                        className={`max-w-[1200px] mx-auto flex flex-col gap-4 justify-center items-center transition-all duration-1000 ease-out ${isTailoredVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b2239] leading-tight">
                            Tailored Solutions for <br />
                            <span className="text-[#1A6DFF]">Every Industry</span>
                        </h1>
                        <p className="text-center text-gray-600 text-base md:text-lg max-w-[700px] mx-auto">
                            We provide tailored merchant solutions for every industry, from
                            adult services to travel and timeshares. Find the perfect fit for
                            your unique business needs.
                        </p>
                        <div className="tailored-cards">
                            <img src={TailoredCardsImg} alt="TailoredCardsImg" />
                        </div>
                    </div>
                </div>
            </section>


            {/* PAYMENTS SECTION */}
            <section ref={paymentsRef} className="mt-[100px]">
                <div className="h-screen">
                    <div
                        className={`max-w-[1200px] mx-auto flex flex-col gap-4 justify-center items-center transition-all duration-1000 ease-out ${isPaymentsVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b2239] leading-tight">
                            Everything You Need to <span className="text-[#1A6DFF]"><br></br> Accept Payments</span>
                        </h1>
                        <p className="text-center text-gray-600 text-base md:text-lg max-w-[700px] mx-auto">
                            Maximize revenue and streamline operations with our integrated suite of payment solutions. Tailor-made for your business, ensuring efficiency and growth.
                        </p>

                        {/* Payment-boxes */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center">
                            <div className="payment-box payment-box-hover  ">
                                <h3 className="font-semibold text-lg">Card Processing</h3>
                                <p className="text-sm mt-2 opacity-80">
                                    Handle debit & credit payments securely.
                                </p>
                            </div>

                            <div className="payment-box payment-box-hover  ">
                                <h3 className="font-semibold text-lg">Card Processing</h3>
                                <p className="text-sm mt-2 opacity-80">
                                    Handle debit & credit payments securely.
                                </p>
                            </div>

                            <div className="payment-box payment-box-hover  ">
                                <h3 className="font-semibold text-lg">Global Transfers</h3>
                                <p className="text-sm mt-2 opacity-80">
                                    Send and receive funds worldwide.
                                </p>
                            </div>

                           <div className="payment-box payment-box-hover  ">
                                <h3 className="font-semibold text-lg">Global Transfers</h3>
                                <p className="text-sm mt-2 opacity-80">
                                    Send and receive funds worldwide.
                                </p>
                            </div>

                             <div className="payment-box payment-box-hover  ">
                                <h3 className="font-semibold text-lg">International Payments</h3>
                                <p className="text-sm mt-2 opacity-80">
                                    Support multiple currencies globally.
                                </p>
                            </div>

                            <div className="payment-box payment-box-hover  ">
                                <h3 className="font-semibold text-lg">International Payments</h3>
                                <p className="text-sm mt-2 opacity-80">
                                    Support multiple currencies globally.
                                </p>
                            </div>
                        </div>


                        <div className="payments-cards mt-10">
                            {/* <img src={PaymentsImg} alt="Payments Cards" /> */}
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Home;
