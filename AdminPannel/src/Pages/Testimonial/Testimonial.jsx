import React, { useMemo, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import "./Testimonial.css";

const Testimonial = () => {
  const base = "testimonialAdmin";

  const initialForm = {
    tagline: "PARENT REVIEWS",
    heading: "What Parents Say About Bright Stars Montessori",
    parentName: "Amit Singh",
    review:
      "A safe and positive place for kids to grow. The teachers give personal attention, and the overall atmosphere is very welcoming for both children and parents.",
    rating: "5",
    quoteStyle: "round",
    cardColor: "purple",
    order: "1",
    status: "Active",
  };

  const [form, setForm] = useState(initialForm);
  const [editId, setEditId] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [testimonialList, setTestimonialList] = useState([
    {
      id: 1,
      tagline: "PARENT REVIEWS",
      heading: "What Parents Say About Bright Stars Montessori",
      parentName: "Amit Singh",
      review:
        "A safe and positive place for kids to grow. The teachers give personal attention, and the overall atmosphere is very welcoming for both children and parents.",
      rating: 5,
      quoteStyle: "round",
      cardColor: "purple",
      order: 1,
      status: "Active",
    },
    {
      id: 2,
      tagline: "PARENT REVIEWS",
      heading: "What Parents Say About Bright Stars Montessori",
      parentName: "Priya Sharma",
      review:
        "Bright Stars Montessori has been a wonderful experience for my child. The teachers are very caring and supportive, and I can see a positive change in my child's confidence and learning.",
      rating: 5,
      quoteStyle: "round",
      cardColor: "purple",
      order: 2,
      status: "Active",
    },
    {
      id: 3,
      tagline: "PARENT REVIEWS",
      heading: "What Parents Say About Bright Stars Montessori",
      parentName: "Rahul Verma",
      review:
        "We are very happy with the environment and teaching approach. The school focuses on both learning and overall development, which makes it a great choice for young children.",
      rating: 5,
      quoteStyle: "round",
      cardColor: "purple",
      order: 3,
      status: "Active",
    },
    {
      id: 4,
      tagline: "PARENT REVIEWS",
      heading: "What Parents Say About Bright Stars Montessori",
      parentName: "Neha Das",
      review:
        "The staff at Bright Stars is caring, disciplined, and professional. My child looks forward to school every day and loves being part of this warm learning space.",
      rating: 5,
      quoteStyle: "round",
      cardColor: "purple",
      order: 4,
      status: "Active",
    },
  ]);

  const activeTestimonials = useMemo(() => {
    return [...testimonialList]
      .filter((item) => item.status === "Active")
      .sort((a, b) => a.order - b.order);
  }, [testimonialList]);

  const previewHeading = form.heading || initialForm.heading;
  const previewTagline = form.tagline || initialForm.tagline;

  const visiblePreviewCards = useMemo(() => {
    if (activeTestimonials.length === 0) {
      return [
        {
          id: "preview-only",
          parentName: form.parentName,
          review: form.review,
          rating: Number(form.rating),
          quoteStyle: form.quoteStyle,
          cardColor: form.cardColor,
        },
      ];
    }

    const tempList = [...activeTestimonials];
    const formPreviewCard = {
      id: "live-form-card",
      parentName: form.parentName,
      review: form.review,
      rating: Number(form.rating),
      quoteStyle: form.quoteStyle,
      cardColor: form.cardColor,
      order: Number(form.order) || 1,
      status: form.status,
    };

    if (form.status === "Active") {
      if (editId) {
        const index = tempList.findIndex((item) => item.id === editId);
        if (index !== -1) {
          tempList[index] = { ...tempList[index], ...formPreviewCard };
        }
      } else {
        tempList.push(formPreviewCard);
      }
    }

    const sorted = tempList.sort((a, b) => (a.order || 0) - (b.order || 0));
    const start = Math.min(currentSlide, Math.max(sorted.length - 1, 0));

    return sorted.slice(start, start + 3);
  }, [activeTestimonials, form, editId, currentSlide]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const payload = {
      id: editId || Date.now(),
      tagline: form.tagline,
      heading: form.heading,
      parentName: form.parentName,
      review: form.review,
      rating: Number(form.rating),
      quoteStyle: form.quoteStyle,
      cardColor: form.cardColor,
      order: Number(form.order),
      status: form.status,
    };

    if (editId) {
      const updated = testimonialList.map((item) =>
        item.id === editId ? payload : item
      );
      setTestimonialList(updated);
      setEditId(null);
    } else {
      setTestimonialList([...testimonialList, payload]);
    }

    setForm(initialForm);
    setCurrentSlide(0);
  };

  const handleClear = () => {
    setForm(initialForm);
    setEditId(null);
    setCurrentSlide(0);
  };

  const handleEdit = (item) => {
    setForm({
      tagline: item.tagline,
      heading: item.heading,
      parentName: item.parentName,
      review: item.review,
      rating: String(item.rating),
      quoteStyle: item.quoteStyle,
      cardColor: item.cardColor,
      order: String(item.order),
      status: item.status,
    });
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    const updated = testimonialList.filter((item) => item.id !== id);
    setTestimonialList(updated);

    if (editId === id) {
      handleClear();
    }
  };

  const nextSlide = () => {
    const maxStart = Math.max(activeTestimonials.length - 3, 0);
    setCurrentSlide((prev) => (prev >= maxStart ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxStart = Math.max(activeTestimonials.length - 3, 0);
    setCurrentSlide((prev) => (prev <= 0 ? maxStart : prev - 1));
  };

  const getCardColorClass = (color) => {
    if (color === "blue") return "blue";
    if (color === "pink") return "pink";
    if (color === "dark") return "dark";
    return "purple";
  };

  const renderStars = (count) => {
    return Array.from({ length: Number(count) }, (_, i) => <FaStar key={i} />);
  };

  return (
    <section className={base}>
      <div className={`${base}__top`}>
        <div className={`${base}__formBox`}>
          <div className={`${base}__boxHeader`}>
            <h2>Testimonials Form</h2>
            <p>
              Add parent reviews with rating, order, quote style, color theme,
              and status. Use this form to manage the testimonial slider section.
            </p>
          </div>

          <form className={`${base}__form`} onSubmit={handleSave}>
            <div className={`${base}__gridTwo`}>
              <div className={`${base}__field`}>
                <label>Small Tagline</label>
                <input
                  type="text"
                  name="tagline"
                  value={form.tagline}
                  onChange={handleChange}
                  placeholder="PARENT REVIEWS"
                />
              </div>

              <div className={`${base}__field`}>
                <label>Main Heading</label>
                <input
                  type="text"
                  name="heading"
                  value={form.heading}
                  onChange={handleChange}
                  placeholder="What Parents Say About Bright Stars Montessori"
                />
              </div>
            </div>

            <div className={`${base}__field`}>
              <label>Parent Name</label>
              <input
                type="text"
                name="parentName"
                value={form.parentName}
                onChange={handleChange}
                placeholder="Amit Singh"
              />
            </div>

            <div className={`${base}__field`}>
              <label>Review Description</label>
              <textarea
                name="review"
                rows="6"
                value={form.review}
                onChange={handleChange}
                placeholder="Write parent review here..."
              />
            </div>

            <div className={`${base}__gridThree`}>
              <div className={`${base}__field`}>
                <label>Rating</label>
                <select name="rating" value={form.rating} onChange={handleChange}>
                  <option value="5">5 Star</option>
                  <option value="4">4 Star</option>
                  <option value="3">3 Star</option>
                  <option value="2">2 Star</option>
                  <option value="1">1 Star</option>
                </select>
              </div>

              <div className={`${base}__field`}>
                <label>Quote Icon Style</label>
                <select
                  name="quoteStyle"
                  value={form.quoteStyle}
                  onChange={handleChange}
                >
                  <option value="round">Round</option>
                  <option value="soft">Soft Round</option>
                  <option value="square">Square</option>
                </select>
              </div>

              <div className={`${base}__field`}>
                <label>Card Background Color</label>
                <select
                  name="cardColor"
                  value={form.cardColor}
                  onChange={handleChange}
                >
                  <option value="purple">Purple</option>
                  <option value="blue">Blue</option>
                  <option value="pink">Pink</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </div>

            <div className={`${base}__gridTwo`}>
              <div className={`${base}__field`}>
                <label>Card Order Number</label>
                <input
                  type="number"
                  name="order"
                  value={form.order}
                  onChange={handleChange}
                  placeholder="1"
                />
              </div>

              <div className={`${base}__field`}>
                <label>Status</label>
                <select name="status" value={form.status} onChange={handleChange}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className={`${base}__btnRow`}>
              <button type="submit" className={`${base}__saveBtn`}>
                {editId ? "Update Testimonial" : "Save Testimonial"}
              </button>

              <button
                type="button"
                className={`${base}__clearBtn`}
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        <div className={`${base}__previewBox`}>
          <div className={`${base}__boxHeader`}>
            <h2>Live Preview</h2>
            <p>
              Preview the testimonial heading, navigation arrows, review cards,
              quote icon, parent name, and star rating before saving.
            </p>
          </div>

          <div className={`${base}__preview`}>
            <div className={`${base}__previewHeader`}>
              <div>
                <span className={`${base}__tagline`}>{previewTagline}</span>
                <h3>{previewHeading}</h3>
              </div>

              <div className={`${base}__navBtns`}>
                <button type="button" onClick={prevSlide}>
                  <FaArrowLeft />
                </button>
                <button type="button" onClick={nextSlide}>
                  <FaArrowRight />
                </button>
              </div>
            </div>

            <div className={`${base}__cards`}>
              {visiblePreviewCards.map((item, index) => (
                <div
                  key={item.id || index}
                  className={`${base}__card ${base}__card--${getCardColorClass(
                    item.cardColor
                  )}`}
                >
                  <p className={`${base}__reviewText`}>{item.review}</p>

                  <div className={`${base}__cardFooter`}>
                    <div
                      className={`${base}__quote ${
                        item.quoteStyle === "square"
                          ? "square"
                          : item.quoteStyle === "soft"
                          ? "soft"
                          : "round"
                      }`}
                    >
                      <FaQuoteLeft />
                    </div>

                    <div className={`${base}__meta`}>
                      <h4>{item.parentName}</h4>
                      <div className={`${base}__stars`}>
                        {renderStars(item.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${base}__tableBox`}>
        <div className={`${base}__boxHeader`}>
          <h2>Testimonials List Table</h2>
          <p>
            Manage all testimonial entries from this table. Edit, reorder,
            activate, or delete reviews as needed.
          </p>
        </div>

        <div className={`${base}__tableWrap`}>
          <table className={`${base}__table`}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Review</th>
                <th>Rating</th>
                <th>Order</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {[...testimonialList]
                .sort((a, b) => a.order - b.order)
                .map((item) => (
                  <tr key={item.id}>
                    <td>{item.parentName}</td>
                    <td>{item.review}</td>
                    <td>{item.rating}</td>
                    <td>{item.order}</td>
                    <td>
                      <span
                        className={`${base}__status ${
                          item.status === "Active" ? "active" : "inactive"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className={`${base}__actionBtn edit`}
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className={`${base}__actionBtn delete`}
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

              {testimonialList.length === 0 && (
                <tr>
                  <td colSpan="7" className={`${base}__empty`}>
                    No testimonials available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;