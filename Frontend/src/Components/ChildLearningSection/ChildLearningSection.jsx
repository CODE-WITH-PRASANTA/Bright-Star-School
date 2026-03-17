import React, { useState } from "react";
import "./ChildLearningSection.css";

import mainImg from "../../assets/emoji-2.webp";

// ICONS
import {
  PiStudentFill,
  PiLightbulbFilamentFill
} from "react-icons/pi";

import {
  TbBook2,
  TbShieldCheck,
  TbUsers
} from "react-icons/tb";

import {
  FaChalkboardTeacher,
  FaHeart,
  FaBrain
} from "react-icons/fa";

const featuresData = [
  {
    icon: <PiStudentFill />,
    title: "Child-Centered Learning",
    desc: "We focus on each child’s strengths and interests, making us one of the best schools in Bhubaneswar for early education.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Experienced Educators",
    desc: "Our qualified teachers provide personal attention and care, ensuring strong academic and emotional development.",
  },
  {
    icon: <TbShieldCheck />,
    title: "Safe Learning Environment",
    desc: "Bright Stars Montessori offers a secure and positive space for children to explore and grow confidently.",
  },
  {
    icon: <TbBook2 />,
    title: "Modern Montessori Approach",
    desc: "We combine Montessori methods with modern teaching, making us a top Montessori school in Bhubaneswar.",
  },
  {
    icon: <PiLightbulbFilamentFill />,
    title: "Creative Activities",
    desc: "We encourage creativity through art, play, and interactive learning experiences.",
  },
  {
    icon: <FaBrain />,
    title: "Strong Foundation",
    desc: "Our programs build essential skills that prepare children for future academic success.",
  },
  {
    icon: <FaHeart />,
    title: "Parent Trust",
    desc: "We are trusted by parents for our caring approach and consistent learning outcomes.",
  },
  {
    icon: <TbUsers />,
    title: "Holistic Development",
    desc: "We focus on emotional, social, and intellectual growth for overall development.",
  },
];

const ChildLearningSection = () => {
  const [page, setPage] = useState(0);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(featuresData.length / itemsPerPage);

  const currentItems = featuresData.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section className="ChildLearningSection">

      {/* HEADING */}
      <div className="ChildLearningSection-heading">
        <p className="ChildLearningSection-topText">
          BEST SCHOOL IN BHUBANESWAR
        </p>

        <h2 className="ChildLearningSection-title">
          Bright Stars Montessori – A Trusted Learning Space for Young Minds
        </h2>
      </div>

      {/* MAIN */}
      <div className="ChildLearningSection-container">

        {/* IMAGE */}
        <div className="ChildLearningSection-imageWrapper">
          <div className="ChildLearningSection-badge">
            <span>100%</span>
            <p>Parent Trust</p>
          </div>

          <img
            src={mainImg}
            alt="Best Montessori school in Bhubaneswar"
            className="ChildLearningSection-image"
          />
        </div>

        {/* CONTENT */}
        <div className="ChildLearningSection-content">

          <p className="ChildLearningSection-description">
            Bright Stars Montessori is recognized as one of the best schools in Bhubaneswar,
            offering a nurturing environment where children learn, grow, and build strong
            foundations through a modern Montessori approach.
          </p>

          {/* FEATURES */}
          <div className="ChildLearningSection-features">
            {currentItems.map((item, index) => (
              <div className="ChildLearningSection-featureCard" key={index}>
                <div className="ChildLearningSection-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="ChildLearningSection-pagination">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`page-btn ${page === i ? "active" : ""}`}
                onClick={() => setPage(i)}
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

export default ChildLearningSection;