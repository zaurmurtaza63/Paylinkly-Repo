import React, { useEffect, useState, useRef } from "react";

import BottomLogoText from "../assets/Images/bottom-logo-text.svg";
import TailoredCardsImg from "../assets/Images/tailored-cards.svg";
import AdcancedIcon from "../assets/Images/Vector.svg";
import Integration from "../assets/Images/integration.svg";
import Subscription from "../assets/Images/subscription.svg";
import Terminal from "../assets/Images/terminal.svg";
import PaymentMethod from "../assets/Images/paymentMethod.svg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTailoredVisible, setIsTailoredVisible] = useState(false);
  const [isPaymentsVisible, setIsPaymentsVisible] = useState(false);

  // counter
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    volume: 0,
    transactions: 0,
    uptime: 0,
  });

  const sectionRef = useRef(null);
  const tailoredRef = useRef(null);
  const paymentsRef = useRef(null);
  const counterRef = useRef(null);

  // HERO animation
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Tailored animation
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

  // Payments animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsPaymentsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (paymentsRef.current) observer.observe(paymentsRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsCounterVisible(true);
          setHasAnimated(true); // only once
        }
      },
      { threshold: 0.4 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Counter animation only when visible
  useEffect(() => {
    if (!isCounterVisible) return;

    const duration = 2000; // total ms
    const frameRate = 30;
    const steps = duration / frameRate;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setCounts({
        volume: Math.min(50 * (currentStep / steps), 50),
        transactions: Math.min(500000 * (currentStep / steps), 500000),
        uptime: Math.min(99.9 * (currentStep / steps), 99.9),
      });

      if (currentStep >= steps) clearInterval(interval);
    }, frameRate);

    return () => clearInterval(interval);
  }, [isCounterVisible]);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className={`hero-bg-img pt-[150px] h-screen relative w-full flex flex-col items-center justify-center text-center px-6 md:px-8 py-24 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1200px] mx-auto pt[130px] flex flex-col gap-4 justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text leading-tight">
            Fast and Secure Platform for <br />
            <span className="blue-text">Merchant Solutions</span>
          </h1>

          <p className=" text-gray-600 text-base md:text-lg max-w-[700px] mx-auto">
            Process payments seamlessly, reduce chargebacks, and grow your
            business with secure, customized merchant services powered by
            industry-leading gateways.
          </p>

          <button className="blue-btn max-w-fit hover:-translate-y-0.5 hover:shadow-lg hover:cursor-pointer transition-all duration-300 text-white font-bold">
            Get Started Today
          </button>
        </div>
      </section>

      {/* TAILORED SECTION */}
      <section ref={tailoredRef} className="mt-[100px]">
        <div className="h-screen">
          <div
            className={`max-w-[1200px] mx-auto flex flex-col gap-4 justify-center items-center transition-all duration-1000 ease-out ${
              isTailoredVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold gradient-text leading-tight">
              Tailored Solutions for <br />
              <span className="blue-text">Every Industry</span>
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
      <section
        ref={paymentsRef}
        className="w-full lg:pt-[100px] lg:pb-[110px] relative"
      >
        <div className="absolute bottom-0">
          <img
            className="max-w-full max-h-full"
            src={BottomLogoText}
            alt="bottom-img"
          />
        </div>
        <div
          className={`flex flex-col gap-4 justify-center items-center transition-all duration-1000 ease-out ${
            isPaymentsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold gradient-text leading-tight">
            Everything You Need to{" "}
            <span className="text-[#1A6DFF]">
              <br /><span className="blue-text">Accept Payments</span> 
            </span>
          </h1>
          <p className="text-center text-gray-600 text-base md:text-lg max-w-[700px] mx-auto">
            Maximize revenue and streamline operations with our integrated suite
            of payment solutions. Tailor-made for your business, ensuring
            efficiency and growth.
          </p>
        </div>
      </section>

      {/* COUNTER SECTION */}
      <section ref={counterRef} className="counter-section">
        <div
          className={`max-w-[1200px] mx-auto px-6 md:px-10 text-center grid grid-cols-1 sm:grid-cols-3 gap-10 transition-all duration-1000 ease-out ${
            isCounterVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Counter 1 */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold counter-gradiant-text">
              ${counts.volume.toFixed(0)}M+
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              In Payment Volume
            </p>
          </div>

          {/* Counter 2 */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold counter-gradiant-text">
              {counts.transactions.toLocaleString()}+
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Transactions Processed Monthly
            </p>
          </div>

          {/* Counter 3 */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold counter-gradiant-text">
              {counts.uptime.toFixed(1)}%
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Uptime Guarantee
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
