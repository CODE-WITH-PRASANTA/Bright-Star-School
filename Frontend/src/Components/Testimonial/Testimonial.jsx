import React, { useRef } from "react";
import "./Testimonial.css";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = () => {

  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: "Vivi Marian",
      text: "They handle all situations professionally and with genuine care. I am absolutely delighted that my son has been there from almost day 1 and he really",
      rating: 5
    },
    {
      name: "Jannie Marko",
      text: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it, and it actually says nor is",
      rating: 5
    },
    {
      name: "Vivi Marian",
      text: "They handle all situations professionally and with genuine care. I am absolutely delighted that my son has been there from almost day 1 and he really",
      rating: 5
    },
    {
      name: "Jannie Marko",
      text: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it, and it actually says nor is",
      rating: 5
    }
  ];

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -400,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 400,
      behavior: "smooth"
    });
  };

  return (
    <div className="testimonial-section">

      <div className="testimonial-header">

        <div>
          <p className="testimonial-subtitle">SERVICE REVIEWS</p>
          <h2 className="testimonial-title">What Parents Say</h2>
        </div>

        <div className="testimonial-arrows">
          <button onClick={scrollLeft}>
            <FaArrowLeft />
          </button>
          <button onClick={scrollRight}>
            <FaArrowRight />
          </button>
        </div>

      </div>


      <div className="testimonial-slider" ref={sliderRef}>

        <div className="testimonial-track">

          {testimonials.concat(testimonials).map((item, index) => (
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

    </div>
  );
};

export default Testimonial;