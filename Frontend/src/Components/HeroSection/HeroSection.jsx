import React, { useEffect, useState } from "react";
import "./HeroSection.css";

import hero1 from "../../assets/Hero-1.webp";
import hero2 from "../../assets/hero-2.webp";
import hero3 from "../../assets/hero-3.webp";

import shapes from "../../assets/emoji-1.webp";

const HeroSection = () => {

const slides = [
{
title: "From Nursery to Class 5 - Bright Futures with Care",
text: "Bright Stars Montessori - Bhubaneswar offers quality education from Nursery to Class 5 in a safe, caring, and joyful environment. As a top pre school in Bhubaneswar, we help children grow with confidence, values, and creativity every day.",
img: hero1
},
{
title: "Best Learning Journey from Nursery to Class 5",
text: "Bright Stars Montessori - Bhubaneswar provides a complete learning journey from Nursery to Class 5 with engaging teaching, caring support, and child-friendly classrooms. We are committed to giving children the best education along with proper daycare for child.",
img: hero2
},
{
title: "Quality Education and Childcare Under One Roof",
text: "Bright Stars Montessori - Bhubaneswar offers the perfect balance of learning, safety, and care from Nursery to Class 5. Our school is a trusted choice for families and working parents looking for the best education and childcare in one place.",
img: hero3
}
];

const [current,setCurrent] = useState(0);

useEffect(()=>{

const slider = setInterval(()=>{

setCurrent((prev)=>(prev + 1) % slides.length);

},3000);

return ()=> clearInterval(slider);

},[]);

return (

<section className="HeroSection">

<div className="HeroSection-container">

{/* LEFT CONTENT */}

<div className="HeroSection-content">

<h1 key={current} className="HeroSection-title">
{slides[current].title}
</h1>

<p className="HeroSection-text">
{slides[current].text}
</p>

<button className="HeroSection-btn">
Enroll Your Child Now
</button>

</div>

{/* RIGHT IMAGE */}

<div className="HeroSection-image">

<img
src={slides[current].img}
alt="kids learning"
className="HeroSection-img"
/>

</div>

</div>

{/* Floating Shapes */}

<img src={shapes} alt="" className="HeroSection-shapes"/>

</section>

);

};

export default HeroSection;