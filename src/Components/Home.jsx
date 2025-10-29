import React, { useEffect, useState } from "react";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        setTimeout(() => setIsVisible(true), 100);
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
                {/* Background image will be set via CSS or inline by you */}

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

                    {/* You can position your card images below here */}
                    {/* Cards Section */}
                    <div className="relative mt-12 flex flex-col md:flex-row justify-center items-center">

                        {/* Left Card */}
                        <div className="left-card w-80  mr-[-100px] hover:z-10 md:w-80 h-52 p-4 transform md:-rotate-6 md:-translate-x-4 md:translate-y-6 hover:scale-[1.1] transition-all duration-300">
                        </div>

                        {/* Center Card */}
                        <div className="center-card w-72 md:w-96 h-48 z-1 p-4 hover:scale-[1.1] transition-all duration-300">
                        </div>

                        {/* Right Card */}
                        <div className="right-card w-80 ml-[-100px] md:w-80 hover:z-10 h-52 p-4 transform md:rotate-6 md:translate-x-4 md:translate-y-6 hover:scale-[1.1] transition-all duration-300">
                        </div>
                    </div>
                </div>
            </section>

            {/* TAILORED SECTION */}
            <section className="mt-[100px]">
                <div className="h-screen">
                    <div className="max-w-[1200px] mx-auto pt[130px] flex flex-col gap-4 justify-center items-center">
                        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b2239] leading-tight">
                            Tailored Solutions for <br />
                            <span className="text-[#1A6DFF]">Every Industry</span>
                        </h1>
                        <p className="text-center text-gray-600 text-base md:text-lg max-w-[700px] mx-auto">
                            We provide tailored merchant solutions for every industry, from adult services to travel and timeshares. Find the perfect fit for your unique business needs.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
