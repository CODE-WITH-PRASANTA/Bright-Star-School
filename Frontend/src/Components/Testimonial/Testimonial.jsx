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
      name: "Vivi Marian",
      text: "They handle all situations professionally and with genuine care. My son loves it here!",
      rating: 5
    },
    {
      name: "Jannie Marko",
      text: "Amazing staff and environment. Highly recommended for every parent.",
      rating: 5
    },
    {
      name: "Sophia Lee",
      text: "A wonderful place for kids to grow and learn with happiness.",
      rating: 5
    },
    {
      name: "Daniel Roy",
      text: "Great experience. Very caring teachers and management.",
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
      <div className="testimonial-header">
        <div>
          <p className="testimonial-subtitle">SERVICE REVIEWS</p>
          <h2 className="testimonial-title">What Parents Say</h2>
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