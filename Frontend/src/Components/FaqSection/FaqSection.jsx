import React, { useState } from "react";
import "./FaqSection.css";
import faqImage from "../../assets/image-72.webp";

const faqData = [
  {
    question: "What is Bright Stars Montessori and how does it help children?",
    answer:
      "Bright Stars Montessori is a nurturing space where children learn through exploration and hands-on activities. We focus on building confidence, independence, and a strong learning foundation."
  },
  {
    question: "Why is Montessori education important for early childhood?",
    answer:
      "Montessori education supports natural learning by encouraging curiosity, creativity, and problem-solving skills from a young age."
  },
  {
    question: "What age group is suitable for Bright Stars Montessori?",
    answer:
      "We welcome children between 2.5 to 6 years, helping them grow during their most important learning stage."
  },
  {
    question: "What do children learn at Bright Stars Montessori?",
    answer:
      "Children learn language, math basics, life skills, and creative activities like art and storytelling for overall development."
  },
  {
    question: "How is Montessori different from traditional schooling?",
    answer:
      "Montessori focuses on understanding through activities, while traditional schooling often focuses on memorization."
  },
  {
    question: "Does Bright Stars Montessori focus on overall development?",
    answer:
      "Yes, we support emotional, social, physical, and academic growth to build confident children."
  },
  {
    question: "Are activities and play included in learning?",
    answer:
      "Yes, play-based learning, storytelling, and creative tasks are part of daily learning."
  },
  {
    question: "How do teachers guide children here?",
    answer:
      "Teachers guide with care, helping children explore, ask questions, and learn independently."
  },
  {
    question: "What is Bright Stars Montessori and how does it help children?",
    answer:
      "Bright Stars Montessori is a nurturing space where children learn through exploration and hands-on activities. We focus on building confidence, independence, and a strong learning foundation."
  },
  {
    question: "Why is Montessori education important for early childhood?",
    answer:
      "Montessori education supports natural learning by encouraging curiosity, creativity, and problem-solving skills from a young age."
  },
  {
    question: "What age group is suitable for Bright Stars Montessori?",
    answer:
      "We welcome children between 2.5 to 6 years, helping them grow during their most important learning stage."
  },
  {
    question: "What do children learn at Bright Stars Montessori?",
    answer:
      "Children learn language, math basics, life skills, and creative activities like art and storytelling for overall development."
  },
  {
    question: "How is Montessori different from traditional schooling?",
    answer:
      "Montessori focuses on understanding through activities, while traditional schooling often focuses on memorization."
  },
  {
    question: "Does Bright Stars Montessori focus on overall development?",
    answer:
      "Yes, we support emotional, social, physical, and academic growth to build confident children."
  },
  {
    question: "What is Bright Stars Montessori and how does it help children?",
    answer:
      "Bright Stars Montessori is a nurturing space where children learn through exploration and hands-on activities. We focus on building confidence, independence, and a strong learning foundation."
  },
  {
    question: "Why is Montessori education important for early childhood?",
    answer:
      "Montessori education supports natural learning by encouraging curiosity, creativity, and problem-solving skills from a young age."
  },
  {
    question: "What age group is suitable for Bright Stars Montessori?",
    answer:
      "We welcome children between 2.5 to 6 years, helping them grow during their most important learning stage."
  },
  {
    question: "What do children learn at Bright Stars Montessori?",
    answer:
      "Children learn language, math basics, life skills, and creative activities like art and storytelling for overall development."
  },
  {
    question: "How is Montessori different from traditional schooling?",
    answer:
      "Montessori focuses on understanding through activities, while traditional schooling often focuses on memorization."
  },
  {
    question: "Does Bright Stars Montessori focus on overall development?",
    answer:
      "Yes, we support emotional, social, physical, and academic growth to build confident children."
  },
  {
    question: "What is Bright Stars Montessori and how does it help children?",
    answer:
      "Bright Stars Montessori is a nurturing space where children learn through exploration and hands-on activities. We focus on building confidence, independence, and a strong learning foundation."
  },
  {
    question: "Why is Montessori education important for early childhood?",
    answer:
      "Montessori education supports natural learning by encouraging curiosity, creativity, and problem-solving skills from a young age."
  },
  {
    question: "What age group is suitable for Bright Stars Montessori?",
    answer:
      "We welcome children between 2.5 to 6 years, helping them grow during their most important learning stage."
  },
  {
    question: "What do children learn at Bright Stars Montessori?",
    answer:
      "Children learn language, math basics, life skills, and creative activities like art and storytelling for overall development."
  },
  {
    question: "How is Montessori different from traditional schooling?",
    answer:
      "Montessori focuses on understanding through activities, while traditional schooling often focuses on memorization."
  },
  {
    question: "Does Bright Stars Montessori focus on overall development?",
    answer:
      "Yes, we support emotional, social, physical, and academic growth to build confident children."
  },
  {
    question: "What is Bright Stars Montessori and how does it help children?",
    answer:
      "Bright Stars Montessori is a nurturing space where children learn through exploration and hands-on activities. We focus on building confidence, independence, and a strong learning foundation."
  },
  {
    question: "Why is Montessori education important for early childhood?",
    answer:
      "Montessori education supports natural learning by encouraging curiosity, creativity, and problem-solving skills from a young age."
  },
  {
    question: "What age group is suitable for Bright Stars Montessori?",
    answer:
      "We welcome children between 2.5 to 6 years, helping them grow during their most important learning stage."
  },
  {
    question: "What do children learn at Bright Stars Montessori?",
    answer:
      "Children learn language, math basics, life skills, and creative activities like art and storytelling for overall development."
  },
  {
    question: "How is Montessori different from traditional schooling?",
    answer:
      "Montessori focuses on understanding through activities, while traditional schooling often focuses on memorization."
  },
  {
    question: "Does Bright Stars Montessori focus on overall development?",
    answer:
      "Yes, we support emotional, social, physical, and academic growth to build confident children."
  }
];

const ITEMS_PER_PAGE = 4;

const FaqSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);

  const totalPages = Math.ceil(faqData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentFaqs = faqData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="FaqSection"
      id="bright-stars-montessori-faq"
    >
      <div className="FaqSection-container">

        {/* LEFT IMAGE */}
        <div className="FaqSection-left">
          <img
            src={faqImage}
            alt="Bright Stars Montessori FAQ section for early childhood education"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="FaqSection-right">
          <p className="FaqSection-subtitle">
            Frequently Asked Questions
          </p>

          <h2 className="FaqSection-title">
            Bright Stars Montessori – Common Questions About Early Learning
          </h2>

          <div className="FaqSection-faqList">
            {currentFaqs.map((faq, index) => (
              <div
                key={index}
                className={`FaqSection-item ${
                  openIndex === index ? "active" : ""
                }`}
              >
                <div
                  className="FaqSection-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4>{faq.question}</h4>
                  <span>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>

                <div
                  className={`FaqSection-answer ${
                    openIndex === index ? "show" : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="FaqSection-pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={
                  currentPage === i + 1 ? "active" : ""
                }
                onClick={() => {
                  setCurrentPage(i + 1);
                  setOpenIndex(null);
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;