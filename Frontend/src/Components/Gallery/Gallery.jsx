import { useEffect, useRef, useState } from "react";
import "./Gallery.css";

import g1 from "../../assets/child-1.webp";
import g2 from "../../assets/Child-2.webp";
import g3 from "../../assets/Gal-11.webp";
import g4 from "../../assets/Gal-22.webp";
import g5 from "../../assets/Gal-44.webp";
import g6 from "../../assets/Gal-55.webp";
import g7 from "../../assets/Gal-66.webp";
import g8 from "../../assets/Gal_33.webp";
import g9 from "../../assets/emoji-2.webp";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

export default function Gallery() {
  const sliderRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [pause, setPause] = useState(false);

  // ✅ auto move
  useEffect(() => {
    if (pause) return;

    const id = setInterval(() => {
      sliderRef.current.scrollLeft += 1;
    }, 15);

    return () => clearInterval(id);
  }, [pause]);

  const openImage = (i) => {
    setIndex(i);
    setOpen(true);
    setPause(true);
  };

  const closeImage = () => {
    setOpen(false);
    setPause(false);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="gallery">

      <h2 className="gallery-title">Our Gallery</h2>

      {/* slider */}
      <div className="gallery-slider" ref={sliderRef}>

        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => openImage(i)}
          >
            <img src={img} alt="" />

            <div className="overlay">
              <span>View</span>
            </div>

          </div>
        ))}

      </div>


      {/* FULL VIEW */}

      {open && (
        <div className="gallery-modal">

          {/* <button className="close" onClick={closeImage}>
            ✕
          </button> */}

          <button className="prev" onClick={prev}>
            ❮
          </button>

          <div className="modal-img-box">

  <button className="close" onClick={closeImage}>
    ✕
  </button>

  <img
    src={images[index]}
    className="modal-img"
  />

</div>

          <button className="next" onClick={next}>
            ❯
          </button>


          {/* thumbnails */}

          <div className="thumbs">

            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className={
                  i === index
                    ? "thumb active"
                    : "thumb"
                }
                onClick={() => setIndex(i)}
              />
            ))}

          </div>

        </div>
      )}
    </section>
  );
}