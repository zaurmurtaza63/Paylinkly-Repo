import React, { useState, useEffect } from "react";
import FirstTabImg from "../assets/Images/first_tab_img.svg"
import SecondTabImg from "../assets/Images/second_tab_img.svg"
import CheckIcon from "../assets/Images/checked.svg"

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("Countertop Terminals");
  const [fadeUp, setFadeUp] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeUp(true), 200);
  }, [activeTab]);

  const tabs = [
    "Countertop Terminals",
    "Mobile Card Readers",
    "Smart POS Systems",
    "Portable Solutions",
  ];

  const tabContent = {
    "Countertop Terminals": {
      title: "Countertop Terminals",
      desc: "Our countertop terminals are equipped with EMV chip card readers, NFC/contactless payment capabilities, built-in receipt printers, multi-application support, and end-to-end encryption for secure transactions.",
      features: [
        " EMV chip card ready",
        " NFC/contactless payments",
        " Built-in receipt printers",
        " Multi-application support",
        " End-to-end encryption",
      ],
      boxTitle: "Clover Station Duo",
      boxText: "Full POS system with customer-facing display",
      TabImg:FirstTabImg,
    },
    "Mobile Card Readers": {
      title: "Mobile Card Readers",
      desc: "Take payments on the go with mobile card readers that connect via Bluetooth or USB, ideal for food trucks, delivery services, and on-site professionals.",
      features: [
        " Connects via Bluetooth or USB",
        " Supports tap, chip, and swipe",
        " Long battery life",
        " Instant digital receipts",
        " Lightweight & portable",
      ],
      boxTitle: "PayLink Reader Pro",
      boxText: "Compact, mobile, and built for fast transactions",
      TabImg:SecondTabImg,
    },
    "Smart POS Systems": {
      title: "Smart POS Systems",
      desc: "Streamline your checkout process with smart POS systems that integrate analytics, inventory tracking, and multi-terminal synchronization.",
      features: [
        " Built-in analytics dashboard",
        " Inventory management",
        " Multi-terminal sync",
        " Cloud data backup",
        " Encrypted data security",
      ],
      boxTitle: "SmartHub X2",
      boxText: "Next-gen POS with cloud sync and advanced insights",
      TabImg:FirstTabImg,
    },
    "Portable Solutions": {
      title: "Portable Solutions",
      desc: "Accept payments anytime, anywhere. Compact, wireless POS systems with built-in SIM support — perfect for events and outdoor services.",
      features: [
        " Works with Wi-Fi & 4G LTE",
        " Extended battery life",
        "All payment types supported",
        "Multi-currency ready",
        "Pocket-sized convenience",
      ],
      boxTitle: "SwiftPay Mini",
      boxText: "Wireless POS that fits in your palm",
       TabImg:FirstTabImg,
      
    },
  };

  const { title, desc, features, boxTitle, boxText , TabImg} = tabContent[activeTab];

  return (
    <section className="mx-auto container px-10 tab-section mt-[100px] w-full">
      {/* LEFT SIDE */}
      <div>
        <div className="mx-auto flex flex-col gap-4 justify-center items-center">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold gradient-text leading-tight">
            Accept Payments Anywhere with <br />
            <span className="blue-text">Advanced POS Systems</span>
          </h1>
        </div>
        

        {/* Tabs */}
        <div className="w-full">
        <div className="flex flex-wrap gap-3 justify-center lg:justify-center items-center mx-auto my-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "active-tab-btn text-white"
                  : "border border-gray ]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex gap-10">
        <div
          className={`w-[60%] transition-all duration-700 ease-out transform ${
            fadeUp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-xl font-semibold text-[#0b2239] mb-3">{title}</h3>
          <p className="text-[#52667A] mb-5">{desc}</p>

          <ul className="space-y-2 text-[#0b2239]">
            {features.map((item, i) => (
              <li key={i} className="flex gap-1 items-center"><img src={CheckIcon} alt="CheckIcon" /> {item}</li>
            ))}
          </ul>

          {/* Floating Animated Box */}
          <div className="flex items-end justify-end">
            <div
            className={`mt-8 w-fit bg-white shadow-lg rounded-2xl px-5 py-3 border border-gray-200 fadeUpBox align-right ${
              fadeUp ? "animate-fadeUp" : ""
            }`}
          >
            <span className="text-[#0b2239] font-semibold">{boxTitle}</span>
            <p className="text-[#52667A] text-sm">{boxText}</p>
          </div>
          </div>
        </div>
        <div>
            <img src={TabImg} alt="TabImg" />
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
