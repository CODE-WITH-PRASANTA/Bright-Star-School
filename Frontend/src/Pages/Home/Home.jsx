import React from "react";

import CoreValues from "../../Components/CoreValues/CoreValues";
import QualifiedTeachers from "../../Components/QualifiedTeachers/QualifiedTeachers";
import ClubsSection from "../../Components/ClubsSection/ClubsSection";

const Home = () => {
  return (
    <div>

      <CoreValues />

      <QualifiedTeachers />

      <ClubsSection />

    </div>
  );
};

export default Home;