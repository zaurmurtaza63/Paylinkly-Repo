import React, { useEffect, useState } from "react";
import AvatarTwo from "../assets/Images/avatarTwo.svg"
import AvatarThree from "../assets/Images/avatarThree.svg"

const testimonials = [
  {
    name: "Simon Mantle",
    role: "Merchant",
    quote: "“Paylinkly transformed our payment processing. The seamless integration with NMI and our existing shopping cart made the switch effortless. Our chargeback rate dropped by 60% in the first month.”",
        avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Aisha Khan",
    role: "COO, Finlytics",
    quote: "Switching to Paylinkly completely streamlined our transactions. The setup was seamless, and the analytics dashboard gave us instant clarity on cash flow. Within weeks, our approval rates rose by 45% and refunds dropped significantly.",
    avatar: AvatarTwo,
  },
  {
    name: "Daniel Lee",
    role: "Founder, SwiftPay",
    quote: "Paylinkly simplified our entire payment workflow. Integration took minutes, and the real-time insights helped us spot issues instantly. Our processing speed improved by 50% and customer disputes nearly disappeared.",
    avatar: AvatarThree,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const duration = 4000;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      setProgress((current / steps) * 100);
      if (current >= steps) {
        clearInterval(timer);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="py-32 flex justify-center">
      <div className="relative w-full max-w-[1200px] px-6 text-center">
        {/* Background Card */}
        <div className="testimonials-bg relative rounded-3xl h-[400px] text-white overflow-hidden">
          {/* Subtle Paylinkly Watermark */}
          <h2 className="absolute text-[160px] font-extrabold text-[#007AFF]/20 left-1/2 -translate-x-1/2 select-none pointer-events-none">
            Paylinkly
          </h2>

          {/* Testimonial Text */}
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`transition-opacity duration-700 absolute inset-0 flex flex-col justify-center items-center h-full ${
                i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <p className="leading-relaxed px-14 text-[40px] md:text-[32px]">
                “{t.quote}”
              </p>
              <div className="text-[16px] font-semibold">{t.name}</div>
              <div className="text-[#CFE4FF] text-sm">{t.role}</div>
            </div>
          ))}
        </div>

        {/* Avatars */}
        <div className="flex justify-center -mt-5 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`z-10 relative w-14 h-14 rounded-2xl border-4 border-white shadow-md overflow-hidden transition-all duration-500 ${
                i === activeIndex ? "scale-110" : "opacity-70"
              }`}
            >
              {/* Progress ring for active */}
              {/* Progress border for active avatar */}
{i === activeIndex && (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 64 64"
  >
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#239CFF" />
        <stop offset="100%" stopColor="#005BE3" />
      </linearGradient>
    </defs>
    <rect
      x="2"
      y="2"
      width="60"
      height="60"
      rx="14"
      ry="14"
      stroke="url(#gradient)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeDasharray={4 * (60 + 60 - 28)}
      strokeDashoffset={
        4 * (60 + 60 - 28) * (1 - progress / 100)
      }
      style={{ transition: "stroke-dashoffset 0.03s linear" }}
    />
  </svg>
)}              <img
                src={t.avatar}
                alt={t.name}
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
