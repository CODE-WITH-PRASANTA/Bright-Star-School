import React, { useEffect, useState } from "react";
import "./HeroSection.css";

import hero1 from "../../assets/Hero-1.webp";
import hero2 from "../../assets/hero-2.webp";
import hero3 from "../../assets/hero-3.webp";

import shapes from "../../assets/emoji-1.webp";

const HeroSection = () => {

const slides = [
{
title: "Modern Kid's Equibment For Better Study",
text: "Montessori classrooms and materials encourage curiosity and discovery.",
img: hero1
},
{
title: "World Best Children Care Program",
text: "Montessori classrooms and materials encourage curiosity and discovery.",
img: hero2
},
{
title: "Dive Into The Greatness of Kid Learning",
text: "Montessori classrooms and materials encourage curiosity and discovery.",
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
Start Learning Today
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