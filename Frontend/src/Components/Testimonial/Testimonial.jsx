import React, { useEffect, useRef, useState } from "react";
import "./Testimonial.css";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import API from "../../api/axios"; // ✅ ADDED

const Testimonial = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const pauseRef = useRef(false);
  const pauseTimeoutRef = useRef(null);

  const [testimonials, setTestimonials] = useState([]); // ✅ BACKEND DATA

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await API.get("/testimonials");

        // ✅ Only Active testimonials
        const activeData = (res.data.data || []).filter(
          (item) => item.status === "Active"
        );

        const formatted = activeData.map((item) => ({
          name: item.parentName,
          text: item.reviewText,
          rating: item.rating,
        }));

        setTestimonials(formatted);
      } catch (err) {
        console.error("FETCH ERROR:", err);
      }
    };

    fetchTestimonials();
  }, []);

  /* ================= AUTO SCROLL ================= */
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
  }, [testimonials]); // ✅ re-run when data loads

  /* ================= MANUAL SCROLL ================= */
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
      behavior: "smooth",
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