import React from 'react'
 import HeroSection from '../../Components/HeroSection/HeroSection'
import ChildLearningSection from '../../Components/ChildLearningSection/ChildLearningSection'
import ChildAgeSection from '../../Components/ChildAgeSection/ChildAgeSection'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Admission from '../../Components/Admission/Admission'
import RecentNews from '../../Components/RecentNews/RecentNews'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ChildLearningSection/>
      <ChildAgeSection/>
    <Testimonial />  
    <Admission />
    <RecentNews />
    </div>
  )
}

export default Home
