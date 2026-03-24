import { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import API, { IMAGE_URL } from "../../api/axios"; // ✅ ADDED

export default function Gallery() {
  const sliderRef = useRef(null);
  const autoRef = useRef(null);

  const [images, setImages] = useState([]); // ✅ BACKEND DATA
  const [sliderImages, setSliderImages] = useState([]);

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [pause, setPause] = useState(false);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await API.get("/gallery");

        const data = (res.data.data || []).map(
          (item) => IMAGE_URL + item.image
        );

        setImages(data);
        setSliderImages([...data, ...data]); // ✅ duplicate for infinite
      } catch (err) {
        console.error("FETCH ERROR:", err);
      }
    };

    fetchGallery();
  }, []);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || pause || open) return;

    const autoScroll = () => {
      slider.scrollLeft += 0.65;

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }

      autoRef.current = requestAnimationFrame(autoScroll);
    };

    autoRef.current = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(autoRef.current);
  }, [pause, open, sliderImages]);

  /* ================= WHEEL ================= */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY * 0.9;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        } else if (slider.scrollLeft <= 0) {
          slider.scrollLeft = slider.scrollWidth / 2;
        }
      }
    };

    slider.addEventListener("wheel", handleWheel, { passive: false });
    return () => slider.removeEventListener("wheel", handleWheel);
  }, []);

  /* ================= MODAL LOCK ================= */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  /* ================= DRAG ================= */
  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDown.current = true;
    setPause(true);
    slider.classList.add("dragging");

    startX.current = e.pageX - slider.offsetLeft;
    scrollLeft.current = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDown.current = false;
    slider.classList.remove("dragging");
    if (!open) setPause(false);
  };

  const handleMouseUp = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDown.current = false;
    slider.classList.remove("dragging");
    if (!open) setPause(false);
  };

  const handleMouseMove = (e) => {
    const slider = sliderRef.current;
    if (!slider || !isDown.current) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    slider.scrollLeft = scrollLeft.current - walk;

    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    } else if (slider.scrollLeft <= 0) {
      slider.scrollLeft = slider.scrollWidth / 2;
    }
  };

  /* ================= MODAL ================= */
  const openImage = (i) => {
    setIndex(i % images.length);
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

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open) return;

      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <section className="gallery">
      <div className="gallery-header">
        <span className="gallery-badge">Captured Moments</span>
        <h2 className="gallery-title">
          Our <span>Beautiful Gallery</span>
        </h2>
        <p className="gallery-text">
          Explore joyful memories and activities.
        </p>
      </div>

      <div className="gallery-slider-wrap">
        <div
          className="gallery-slider"
          ref={sliderRef}
          onMouseEnter={() => setPause(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {sliderImages.map((img, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => openImage(i)}
            >
              <img src={img} alt={`gallery-${i}`} loading="lazy" />

              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <span className="gallery-overlay-btn">
                    View Photo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div className="gallery-modal" onClick={closeImage}>
          <button
            className="gallery-nav gallery-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ❮
          </button>

          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="gallery-modal-img-box">
              <img
                src={images[index]}
                alt="preview"
                className="gallery-modal-img"
              />
            </div>

            <div className="gallery-thumbs">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="thumb"
                  className={
                    i === index
                      ? "gallery-thumb active"
                      : "gallery-thumb"
                  }
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>

          <button
            className="gallery-nav gallery-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ❯
          </button>
        </div>
      )}
    </section>
  );
}