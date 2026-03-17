import React from "react";

import HeroSection from "../../Components/HeroSection/HeroSection";
import ChildLearningSection from "../../Components/ChildLearningSection/ChildLearningSection";
import ChildAgeSection from "../../Components/ChildAgeSection/ChildAgeSection";
import CoreValues from "../../Components/CoreValues/CoreValues";
import QualifiedTeachers from "../../Components/QualifiedTeachers/QualifiedTeachers";
import ClubsSection from "../../Components/ClubsSection/ClubsSection";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Admission from "../../Components/Admission/Admission";
import RecentNews from "../../Components/RecentNews/RecentNews";
import Gallery from "../../Components/Gallery/Gallery";
import AboutUs from "../../Components/AboutUs/AboutUs";

const Home = () => {
  return (
    <div>

      {/* HERO */}
      <section id="home">
        <HeroSection />
      </section>

      {/* ABOUT */}
      <section id="about">
        <AboutUs />
      </section>

      {/* LEARNING */}
      <section id="history">
        <ChildLearningSection />
      </section>

      {/* AGE */}
      <section id="learning">
        <ChildAgeSection />
      </section>

      {/* CORE VALUES */}
      <section id="values">
        <CoreValues />
      </section>

      {/* TEACHERS */}
      <section id="teachers">
        <QualifiedTeachers />
      </section>

      {/* PROGRAMS */}
      <section id="programs">
        <ClubsSection />
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* NEWS */}
      <section id="news">
        <RecentNews />
      </section>

      {/* ❌ NOT LINKED IN NAVBAR */}
      <Testimonial />

      {/* ADMISSION / CONTACT */}
      <section id="admission">
        <Admission />
      </section>

    </div>
  );
};

export default Home;