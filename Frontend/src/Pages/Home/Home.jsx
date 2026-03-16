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

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ChildLearningSection />
      <ChildAgeSection />
      <CoreValues />
      <QualifiedTeachers />
      <ClubsSection />
      <Testimonial />
      <Admission />
      <RecentNews />
    </div>
  );
};

export default Home;