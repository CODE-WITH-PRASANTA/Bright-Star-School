import React, { useEffect, useRef } from "react";
import "./Testimonial.css";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const pauseRef = useRef(false);
  const pauseTimeoutRef = useRef(null);

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Bright Stars Montessori has been a wonderful experience for my child. The teachers are very caring and supportive, and I can see a positive change in my child's confidence and learning.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      text: "We are very happy with the environment and teaching approach. The school focuses on both learning and overall development, which makes it a great choice for young children.",
      rating: 5
    },
    {
      name: "Neha Patel",
      text: "The staff at Bright Stars Montessori are friendly and professional. My daughter enjoys going to school every day and loves the activities and learning sessions.",
      rating: 5
    },
    {
      name: "Amit Singh",
      text: "A safe and positive place for kids to grow. The teachers give personal attention, and the overall atmosphere is very welcoming for both children and parents.",
      rating: 5
    }
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const autoScroll = () => {
      if (!pauseRef.current) {
        slider.scrollLeft += 0.5;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const scroll = (dir) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector(".testimonial-card");
    if (!card) return;

    const gap = 30;
    const width = card.offsetWidth + gap;

    pauseRef.current = true;
    clearTimeout(pauseTimeoutRef.current);

    slider.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth"
    });

    pauseTimeoutRef.current = setTimeout(() => {
      pauseRef.current = false;
    }, 1200);
  };

  return (
    <section className="testimonial-section">

      {/* HEADER */}
      <div className="testimonial-header">
        <div>
          <p className="testimonial-subtitle">PARENT REVIEWS</p>
          <h2 className="testimonial-title">
            What Parents Say About Bright Stars Montessori
          </h2>
        </div>

        <div className="testimonial-arrows">
          <button onClick={() => scroll("left")} type="button">
            <FaArrowLeft />
          </button>
          <button onClick={() => scroll("right")} type="button">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="testimonial-slider" ref={sliderRef}>
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">{item.text}</p>

              <div className="testimonial-bottom">
                <div className="testimonial-quote">
                  <FaQuoteLeft />
                </div>

                <div>
                  <h4>{item.name}</h4>

                  <div className="testimonial-stars">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

              <span className="testimonial-pointer"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;