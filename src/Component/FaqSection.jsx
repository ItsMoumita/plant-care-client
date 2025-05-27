import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How to get appointment here in PlantCare?",
    answer:
      "For nearly 20 years,Landscape Services has been BD’s premier landscape partner for excellence! Our rich legacy is rooted in our gardening unwavering commitment to turning green visions into reality.",
  },
  {
    question: "Do you need soil test report or history?",
    answer:
      "A soil test helps us choose the right treatment and plants. It’s optional but recommended for optimal results.",
  },
  {
    question: "What are your landscaping programs?",
    answer:
      "We offer seasonal, annual, and custom landscaping programs suited for both residential and commercial properties.",
  },
  {
    question: "What is the cost structure in your service?",
    answer:
      "Pricing varies by service and area. We provide affordable, transparent quotes after an initial consultation.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="bg-[#f4fff4] py-20 px-6 lg:px-20" id="faq">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Side */}
        <div className="lg:w-1/2 space-y-4">
          <span className="bg-green-200 text-green-900 text-sm font-semibold px-3 py-1 rounded-full inline-block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-4xl font-bold text-green-900">
            Do you have a question? <br />
            Find answer here
          </h2>
          <p className="text-green-800 mt-2">1.2k+ satisfied customers</p>
          {/* Avatars */}
          <div className="flex items-center gap-[-10px] mt-4">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user2" className="w-10 h-10 rounded-full border-2 border-white -ml-2" />
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="user3" className="w-10 h-10 rounded-full border-2 border-white -ml-2" />
            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="user4" className="w-10 h-10 rounded-full border-2 border-white -ml-2" />
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-800 text-white font-semibold text-sm -ml-2">
              +1279
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl transition-all duration-300 ${
                activeIndex === index ? "bg-green-100 shadow-md" : "bg-white"
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-green-800 font-medium">
                  {String(index + 1).padStart(2, "0")}. {faq.question}
                </span>
                <span className="text-green-700">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-gray-700 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
